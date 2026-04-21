# `@1money/component-ui` MCP Server

## Overview

The `@1money/component-ui` package ships an [MCP](https://modelcontextprotocol.io/) stdio
server so AI coding assistants can answer questions like "which 1money component do I use
for X?", "what are its props?", and "how do I import it?" without grepping source. It runs
out of the consumer's `node_modules` via `npx --package=@1money/component-ui 1money-ui-mcp`
and communicates over stdio — no network, no auth, no hosted service. Because each
consumer repo pins its own version of `@1money/component-ui`, the server always answers
against the exact library version that repo is using: upgrade the package, the answers
upgrade with it.

The server loads three committed artifacts at startup — `index.generated.json` (symbols,
tokens, icons), `examples.generated.json` (content-hashed example bodies), and
`drift.json` (export-map audit) — then exposes 8 MCP tools. See §3 of
`docs/plans/2026-04-21-component-library-mcp.md` for the design background.

## Usage — consumer `.mcp.json`

Add this to the downstream repo's `.mcp.json` (Claude Code, Cursor, and any other
MCP-speaking client read the same file):

```json
{
  "mcpServers": {
    "1money-ui": {
      "command": "npx",
      "args": ["-y", "--package=@1money/component-ui", "1money-ui-mcp"]
    }
  }
}
```

`@1money/component-ui` must be resolvable from the consumer repo's `node_modules`
(direct or transitive dep). `npx` then spawns the `1money-ui-mcp` bin entry shipped in
the installed tarball — no global install required. The package declares:

```jsonc
// package.json (publisher side — already wired)
{
  "bin": { "1money-ui-mcp": "scripts/mcp-server/bin.mjs" }
}
```

Verify locally with `pnpm mcp:check` (runs the server's `--selftest` harness against
every tool with a canned input).

## Tool reference

All tools return JSON. Errors surface as MCP tool errors (`isError: true`) with a plain
message. Successful responses are delivered both as a text block (for human debugging)
and as `structuredContent` (for programmatic use).

### `list_symbols`

Lists top-level exported symbols (components, modules, hooks, functions, types).
Namespace roots (`ProForm`, `Icons`, `Input`) surface as `kind: "module"`.

- Input: `{ kind?: "component" | "module" | "hook" | "function" | "type" | "all", category?: string }`
- Output: `{ symbols: [{ name, kind, category, summary, importPath }] }`

```jsonc
// input:  { "kind": "module" }
// output: { "symbols": [
//   { "name": "Icons", "kind": "module", "category": "display", "summary": "...", "importPath": "@1money/component-ui" },
//   { "name": "Input", "kind": "module", "category": "input", ... },
//   { "name": "ProForm", "kind": "module", "category": "form", ... }
// ] }
```

### `search_symbols`

Fuzzy search with synonym support. Scores against name, `searchTags` (aliases from
`synonyms.json`), summary, and prop names.

- Input: `{ query: string, limit?: number (default 5) }`
- Output: `{ hits: [{ name, score, matchedOn }] }`

```jsonc
// input:  { "query": "modal", "limit": 3 }
// output: { "hits": [{ "name": "Dialog", "score": 70, "matchedOn": "tag" }] }
```

### `get_symbol`

Structured record for one symbol. Accepts flat names (`ProFormItem`) or dotted paths
(`ProForm.Item`). Unknown names return `{ kind: "not_exported", hint }`.

- Input: `{ name: string, include?: Array<"props"|"examples"|"members"|"notes"|"related"> }`
- Output: `{ name, kind, category, summary, imports, props, members, canonicalUsage, relatedSymbols, ... }`

```jsonc
// input:  { "name": "ProForm.Item" }
// output: { "name": "ProFormItem", "inputName": "ProForm.Item", "kind": "component",
//           "imports": { "named": "import { ProFormItem } from '@1money/component-ui';",
//                        "namespaceAccess": "ProForm.Item", ... },
//           "props": [...], "canonicalUsage": "<ProFormItem name=\"email\" ... />", ... }
```

### `get_examples`

Curated usage snippets. Sources: README fenced blocks (`readme`), Storybook `render`
bodies (`stories`), and canonical snippets (`canonical`). Bodies live in
`examples.generated.json` and are hydrated at request time.

- Input: `{ name: string, limit?: number (default 3), source?: "all"|"readme"|"stories"|"canonical" }`
- Output: `{ examples: [{ title, code, source, compilable }] }`

```jsonc
// input:  { "name": "Button", "limit": 1, "source": "readme" }
// output: { "examples": [{ "title": "Basic", "code": "<Button color=\"primary\">Label</Button>",
//                          "source": "readme", "compilable": true }] }
```

### `list_icons`

Icon name catalog for `<Icons name="..." />`. Icon names are string keys, not exported
symbols — you cannot `import { ChevronDown }`.

- Input: `{ query?: string, limit?: number }`
- Output: `{ total: number, icons: [{ name }] }`

```jsonc
// input:  { "query": "chevron", "limit": 2 }
// output: { "total": 8, "icons": [{ "name": "chevronDown" }, { "name": "chevronLeft" }] }
```

### `get_token`

Resolve design tokens by exact name / CSS var / SCSS alias, by `kind`, or by name
`prefix`. Filters combine with AND.

- Input: `{ name?: string, kind?: "color"|"spacing"|"radius"|"shadow"|"sizing"|"opacity"|"typography"|"breakpoint", prefix?: string }`
- Output: `{ tokens: [{ name, scss, cssVar, value, resolved, kind, layer }] }`

```jsonc
// input:  { "kind": "breakpoint" }
// output: { "tokens": [{ "name": "breakpoint-md", "cssVar": "--om-breakpoint-md",
//                        "value": "1024px", "resolved": "1024px",
//                        "kind": "breakpoint", "layer": "primitive" }, ...] }
```

### `resolve_import`

Given a symbol name (flat or `Owner.Member`), returns the import specifier(s). Rejects
`Icons.<Name>` with a clear hint because icon names are string keys.

- Input: `{ symbol: string }`
- Output: `{ found: true, name, sources: [{ specifier, style, preferred }], css, notes? }`
  or `{ found: false, inputSymbol, hint }`

```jsonc
// input:  { "symbol": "ProForm.Item" }
// output: { "found": true, "name": "ProFormItem",
//           "sources": [
//             { "specifier": "@1money/component-ui", "style": "named", "preferred": true },
//             { "specifier": "@1money/component-ui/ProForm", "style": "named", "preferred": false }
//           ],
//           "css": "@1money/component-ui/index.css",
//           "notes": "Also accessible via ProForm.Item namespace." }
```

### `get_library_info`

Package metadata loaded at startup. Use this to verify schema compatibility and
discover available subpath imports.

- Input: `{}`
- Output: `{ name, version, peerDependencies, subpathExports, cssEntry, schemaVersion }`

```jsonc
// output: { "name": "@1money/component-ui", "version": "0.0.21",
//           "peerDependencies": { "react": ">=16.8.0", ... },
//           "subpathExports": ["./Accordion", "./Alert", ...],
//           "cssEntry": "@1money/component-ui/index.css",
//           "schemaVersion": "1" }
```

## Contributing — adding synonyms

Synonyms power fuzzy matches in `search_symbols` (e.g., "modal" → `Dialog`). They also
feed the per-symbol `searchTags` array.

1. Edit `scripts/mcp-server/indexer/synonyms.json`.
2. Add or extend an entry. Format:
   ```json
   {
     "alias phrase": ["TargetSymbol1", "TargetSymbol2"]
   }
   ```
   Key: lowercase alias a developer might type (spaces OK). Value: exact symbol names
   as exported from `src/index.ts` (case-sensitive).
3. Run `pnpm build:mcp-index` to regenerate `index.generated.json` with the new tags.
4. Commit both `synonyms.json` and the updated `index.generated.json` together. The CI
   drift guard will fail if they disagree.

## Contributing — adding or improving canonical snippets

Every symbol has a `canonicalUsage` string (≤ 240 chars). The generator
(`indexer/generate-canonical.mjs`) resolves each symbol's snippet in this order:

1. `src/components/<Folder>/<SymbolName>.canonical.md` (specific)
2. `src/components/<Folder>/canonical.md` (folder-shared)
3. First fenced block in `src/components/<Folder>/README.md`
4. Auto-skeleton built from required props (components/hooks/functions only)

`module` kind (`ProForm`, `Icons`, `Input`) **skips step 4**: manual canonical is
required. If missing, the generator prints a diagnostic and the module gets no
snippet.

To add or replace a canonical manually:

1. Create `src/components/<Folder>/canonical.md` (or the `<Name>.canonical.md` variant
   if you want to override just one symbol in a shared folder).
2. Put exactly one fenced code block inside. The first fenced block wins; anything
   after it is ignored.
3. Keep the body ≤ 240 chars. Use realistic but minimal props. Don't wrap in extra
   markdown commentary — this snippet is consumed raw by assistants.
4. Run `pnpm build:mcp-index`. Read the diagnostics — the generator tells you when a
   file is missing, malformed, or too long (it drops too-long blocks rather than
   truncating).

Example `canonical.md`:

````markdown
```tsx
<ProForm onFinish={(values) => console.log(values)}>
  <ProForm.Text name="email" label="Email" rules={[{ required: true }]} />
  <ProForm.Submitter />
</ProForm>
```
````

## Maintenance — how the index is built

- `pnpm build:mcp-index` runs `scripts/mcp-server/indexer/build-index.mjs`. It writes
  three files next to the server: `index.generated.json`, `examples.generated.json`,
  and `drift.json`.
- All three files are **committed to git**. Consumers install the published tarball
  (the `files` list in `package.json` includes them), not the source — the generator
  never runs on the consumer's machine.
- A `prebuild` hook (`pnpm prebuild` → `pnpm build:mcp-index`) regenerates them before
  each library build, so the committed snapshot can't drift from source by accident.
- CI enforces this with `.github/workflows/cicd-mcp-index.yml`: it runs the generator
  and fails the PR if the committed files don't match the re-generated output.
- `schemaVersion` is currently `"1"`. The server hard-exits at startup on mismatch, so
  bumping the schema requires a coordinated change (generator, server, consumer
  upgrade path) and should go through its own PR.

## Troubleshooting

- **"Unknown tool"** in the consumer — upgrade `@1money/component-ui` in the consumer
  repo; the tool was added in a newer version.
- **`schemaVersion mismatch`** on server startup — the committed `index.generated.json`
  was produced by a different schema revision than the server expects. Run
  `pnpm build:mcp-index` and commit the result, or re-install `@1money/component-ui`
  so the two files come from the same tarball.
- **`pnpm mcp:check` fails** — the server loaded the index but a handler threw. The
  JSON output lists each tool's `ok` status and error message; usually this means the
  index is stale (`pnpm build:mcp-index`) or a generator change broke a shape
  assumption (check recent edits under `indexer/`).
- **`get_examples` returns `{ examples: [] }`** even though you know the component has
  stories — the story file's `render` body may not parse as a standalone expression,
  or the symbol name in the story is dotted/namespaced. Check the diagnostics from
  `pnpm build:mcp-index` and, if needed, add a manual `canonical.md` so at least the
  canonical source returns a snippet.
