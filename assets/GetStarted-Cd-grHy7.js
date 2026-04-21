import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as n}from"./index-D-e9gBuN.js";import{M as a}from"./index-0w0ig6Ac.js";import"./index-CP2yOfOm.js";import"./iframe-Dtz7r3Se.js";import"./index-D1q9exoj.js";import"./index-BzJi89j3.js";import"./index-DrFu-skq.js";function o(s){const c={p:"p",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Introduction/Overview"}),`
`,e.jsxs("div",{className:"doc-home",children:[e.jsxs("section",{className:"doc-home-hero",children:[e.jsxs("div",{children:[e.jsx("p",{className:"doc-home-kicker",children:"@1money/components-ui"}),e.jsx("h1",{children:"Component docs that read like a product system, not a sandbox."}),e.jsx("p",{className:"doc-home-lead",children:e.jsx(c.p,{children:`1Money React UI packages product-ready React components, a SCSS token system, and a
Storybook workflow that doubles as the team’s implementation reference.`})})]}),e.jsxs("div",{className:"doc-home-panel",children:[e.jsxs("div",{className:"doc-home-info-card",children:[e.jsx("span",{className:"sb-docs-stat-label",children:"Best for"}),e.jsx("strong",{children:"Product teams building forms, workflows, overlays, and dense data surfaces."})]}),e.jsxs("div",{className:"doc-home-chip-list",children:[e.jsx("div",{className:"doc-home-chip",children:e.jsx("strong",{children:"React + TypeScript"})}),e.jsx("div",{className:"doc-home-chip",children:e.jsx("strong",{children:"SCSS token system"})}),e.jsx("div",{className:"doc-home-chip",children:e.jsx("strong",{children:"PrimeReact foundation"})}),e.jsx("div",{className:"doc-home-chip",children:e.jsx("strong",{children:"Storybook 8 docs"})})]})]})]}),e.jsxs("div",{className:"doc-home-grid",children:[e.jsxs("article",{className:"doc-home-card",children:[e.jsx("p",{className:"doc-home-card-kicker",children:"Install"}),e.jsx("h3",{children:"Use the package directly in app code."}),e.jsx("p",{children:"Import the CSS bundle once, then consume named exports or subpath entrypoints."}),e.jsx("pre",{children:e.jsx("code",{className:"language-bash",children:"pnpm add @1money/components-ui react react-dom primereact primeicons"})})]}),e.jsxs("article",{className:"doc-home-card",children:[e.jsx("p",{className:"doc-home-card-kicker",children:"Develop"}),e.jsx("h3",{children:"Storybook is the default local workspace."}),e.jsx("p",{children:"Run the docs locally, validate visual states, then lint, test, and build before release."}),e.jsx("pre",{children:e.jsx("code",{className:"language-bash",children:`pnpm install
pnpm dev
pnpm lint
pnpm test`})})]}),e.jsxs("article",{className:"doc-home-card",children:[e.jsx("p",{className:"doc-home-card-kicker",children:"Read"}),e.jsx("h3",{children:"Use this site in three passes."}),e.jsx("p",{children:"Start with the overview pages, move into component examples, then use the API table and README-backed notes to implement with confidence."})]})]}),e.jsxs("section",{className:"doc-home-section",children:[e.jsxs("div",{className:"doc-home-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Quick start"}),e.jsx("h2",{children:"Minimal app setup"}),e.jsx("p",{children:"Import the package stylesheet once at your application entrypoint and keep component imports explicit."})]}),e.jsx("pre",{children:e.jsx("code",{className:"language-tsx",children:`import '@1money/components-ui/index.css';
import {
  Button,
  Checkbox,
  Grid,
  Notification,
  Tooltip,
} from '@1money/components-ui';

export function Example() {
  return (
    <Grid gutter={[16, 16]}>
      <Grid.Col span={12} md={6}>
        <Button color="primary">Continue</Button>
      </Grid.Col>
      <Grid.Col span={12} md={6}>
        <Checkbox label="Accept terms" />
      </Grid.Col>
      <Grid.Col span={12}>
        <Notification
          status="success"
          title="Saved"
          body="Settings were updated."
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Tooltip anchorSelect="#help-trigger" body="More details" />
      </Grid.Col>
    </Grid>
  );
}`})})]}),e.jsxs("section",{className:"doc-home-section",children:[e.jsxs("div",{className:"doc-home-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Docs map"}),e.jsx("h2",{children:"What this Storybook covers"}),e.jsx("p",{children:"The site is structured to mirror how consumers evaluate a UI library in practice."})]}),e.jsxs("div",{className:"doc-home-card-grid",children:[e.jsxs("article",{className:"doc-home-card",children:[e.jsx("h3",{children:"Introduction"}),e.jsx("p",{children:"Installation, development workflow, and the style system architecture behind the components."})]}),e.jsxs("article",{className:"doc-home-card",children:[e.jsx("h3",{children:"Component pages"}),e.jsx("p",{children:"Every component page has a primary example, additional usage stories, API tables, and README-backed implementation notes when available."})]}),e.jsxs("article",{className:"doc-home-card",children:[e.jsx("h3",{children:"Source-aligned guidance"}),e.jsx("p",{children:"README content is pulled into docs so npm usage notes and Storybook documentation stop drifting apart."})]}),e.jsxs("article",{className:"doc-home-card",children:[e.jsx("h3",{children:"Design system context"}),e.jsx("p",{children:"Token scales, layering rules, and import boundaries are documented alongside the component catalog."})]})]})]}),e.jsxs("section",{className:"doc-home-section",children:[e.jsxs("div",{className:"doc-home-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Component families"}),e.jsx("h2",{children:"Current component coverage"}),e.jsx("p",{children:"The library already covers a broad set of product primitives and interaction shells."})]}),e.jsxs("div",{className:"doc-home-card-grid",children:[e.jsxs("article",{className:"doc-home-card",children:[e.jsx("h3",{children:"Inputs and forms"}),e.jsx("p",{children:"Input, Select, Checkbox, Radio, Switch, Form, ProForm, Pagination, Tabs, Segment."})]}),e.jsxs("article",{className:"doc-home-card",children:[e.jsx("h3",{children:"Actions and feedback"}),e.jsx("p",{children:"Button, Alert, Notification, Tooltip, Trigger, Dropdown, Drawer, Dialog."})]}),e.jsxs("article",{className:"doc-home-card",children:[e.jsx("h3",{children:"Layout and content"}),e.jsx("p",{children:"Grid, Flex, Space, Step, Empty, Typography, Tag."})]}),e.jsxs("article",{className:"doc-home-card",children:[e.jsx("h3",{children:"Assets and utility surfaces"}),e.jsx("p",{children:"Icons, Spinner, and supporting helpers that keep the product shell consistent."})]})]})]})]})]})}function x(s={}){const{wrapper:c}={...n(),...s.components};return c?e.jsx(c,{...s,children:e.jsx(o,{...s})}):o(s)}export{x as default};
