import React, { useContext, useMemo } from 'react';
import {
  Controls,
  Description,
  DocsContext,
  Markdown,
  Primary,
  Stories,
  useOf,
} from '@storybook/blocks';
import { getComponentDocMeta } from './componentDocMeta';

interface ParsedReadmeSection {
  content: string;
  heading: string;
  id: string;
}

interface ParsedReadmeDocument {
  sections: ParsedReadmeSection[];
  summary: string;
}

const README_FILES = import.meta.glob('../../components/*/README.md', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>;

const README_ALIASES: Record<string, string> = {
  CheckboxGroup: 'Checkbox',
};

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseReadme(markdown: string): ParsedReadmeDocument {
  const lines = markdown.replace(/\r\n/g, '\n').trim().split('\n');

  if (!lines.length) {
    return { sections: [], summary: '' };
  }

  if (/^#\s+/.test(lines[0])) {
    lines.shift();
  }

  while (lines[0] === '') {
    lines.shift();
  }

  const summaryLines: string[] = [];

  while (lines.length && !/^##\s+/.test(lines[0])) {
    summaryLines.push(lines.shift() ?? '');
  }

  const counts = new Map<string, number>();
  const sections: ParsedReadmeSection[] = [];
  let heading = '';
  let content: string[] = [];

  const pushSection = () => {
    const trimmedContent = content.join('\n').trim();

    if (!heading || !trimmedContent) {
      return;
    }

    const baseId = slugify(heading);
    const count = counts.get(baseId) ?? 0;
    counts.set(baseId, count + 1);

    sections.push({
      content: trimmedContent,
      heading,
      id: count === 0 ? baseId : `${baseId}-${count + 1}`,
    });
  };

  lines.forEach((line) => {
    const match = line.match(/^##\s+(.*)$/);

    if (match) {
      pushSection();
      heading = match[1].trim();
      content = [];
      return;
    }

    content.push(line);
  });

  pushSection();

  return {
    sections,
    summary: summaryLines.join('\n').trim(),
  };
}

export function ComponentDocsPage() {
  const docsContext = useContext(DocsContext);
  const resolvedMeta = useOf('meta', ['meta']);
  const titlePath = resolvedMeta.preparedMeta.title ?? 'Components';
  const componentName = titlePath.split('/').pop() ?? titlePath;
  const readmeName = README_ALIASES[componentName] ?? componentName;
  const readmeContent = README_FILES[`../../components/${readmeName}/README.md`] ?? '';
  const componentDocMeta = getComponentDocMeta(componentName);
  const parsedReadme = useMemo(() => parseReadme(readmeContent), [readmeContent]);
  const stories = docsContext.componentStories();
  const hasComponent = Boolean(resolvedMeta.preparedMeta.component);

  return (
    <div className="sb-docs-shell">
      <div className="sb-docs-layout">
        <div className="sb-docs-main">
          <section className="sb-docs-hero">
            <div className="sb-docs-hero-copy">
              <p className="sb-docs-kicker">{titlePath}</p>
              <h1 className="sb-docs-title">{componentName}</h1>
              {parsedReadme.summary ? (
                <p className="sb-docs-lead">{parsedReadme.summary}</p>
              ) : (
                <div className="sb-docs-description">
                  <Description />
                </div>
              )}
            </div>

            <div className="sb-docs-hero-panel">
              <div className="sb-docs-stat">
                <span className="sb-docs-stat-label">Package</span>
                <strong>@1money/components-ui</strong>
              </div>
              <div className="sb-docs-stat">
                <span className="sb-docs-stat-label">Stories</span>
                <strong>{stories.length}</strong>
              </div>
              <div className="sb-docs-stat">
                <span className="sb-docs-stat-label">README</span>
                <strong>{readmeContent ? 'Available' : 'Story-driven'}</strong>
              </div>
            </div>
          </section>

          {componentDocMeta?.whenToUse.length ? (
            <section className="sb-docs-section" id="when-to-use">
              <div className="sb-docs-section-header">
                <p className="sb-docs-section-kicker">Guidance</p>
                <h2>When To Use</h2>
                <p>
                  Keep the component choice opinionated so the library reads consistently across
                  products.
                </p>
              </div>

              <ul className="sb-docs-use-list">
                {componentDocMeta.whenToUse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="sb-docs-section" id="examples">
            <div className="sb-docs-section-header">
              <p className="sb-docs-section-kicker">Preview</p>
              <h2>Primary example</h2>
              <p>
                Start with the default state, then use the stories below to inspect edge cases,
                variants, and richer composition patterns.
              </p>
            </div>
            <Primary />
          </section>

          {stories.length > 1 ? (
            <section className="sb-docs-section" id="stories">
              <div className="sb-docs-section-header">
                <p className="sb-docs-section-kicker">Examples</p>
                <h2>Usage patterns</h2>
                <p>Each story focuses on one behavior so you can review the API surface quickly.</p>
              </div>
              <Stories includePrimary={false} title="Usage patterns" />
            </section>
          ) : null}

          {hasComponent ? (
            <section className="sb-docs-section" id="api">
              <div className="sb-docs-section-header">
                <p className="sb-docs-section-kicker">Reference</p>
                <h2>API</h2>
                <p>Controls and prop tables are generated from the component metadata in this repo.</p>
              </div>
              <Controls />
            </section>
          ) : null}

          {parsedReadme.sections.length ? (
            <section className="sb-docs-section" id="guidance">
              <div className="sb-docs-section-header">
                <p className="sb-docs-section-kicker">Guidance</p>
                <h2>Documentation notes</h2>
                <p>
                  These sections come from the component README so package docs and Storybook stay in
                  sync.
                </p>
              </div>

              <div className="sb-docs-markdown-grid">
                {parsedReadme.sections.map((section) => (
                  <article className="sb-docs-markdown-card" id={section.id} key={section.id}>
                    <h3>{section.heading}</h3>
                    <Markdown>{section.content}</Markdown>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ComponentDocsPage;
