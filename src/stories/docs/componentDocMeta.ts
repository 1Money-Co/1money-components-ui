export interface ComponentDocMeta {
  whenToUse: string[];
}

export const COMPONENT_DOC_META: Record<string, ComponentDocMeta> = {
  Accordion: {
    whenToUse: [
      'Use it when long-form content needs to stay collapsed by default and expand on demand.',
      'Use it when multiple related sections share the same page but should not compete for vertical space.',
      'Use it for FAQs, advanced settings, breakdown panels, and progressively disclosed help content.',
    ],
  },
  Alert: {
    whenToUse: [
      'Use it for inline page-level feedback that should remain visible until the user acknowledges it or the state changes.',
      'Use it when a form, workflow, or dashboard section needs contextual status messaging without opening an overlay.',
      'Use it for warnings, errors, maintenance states, and informative reminders that sit inside layout content.',
    ],
  },
  Button: {
    whenToUse: [
      'Use it for primary and secondary actions that trigger an immediate user operation.',
      'Use it when an action needs clear emphasis, loading state, or icon affordances.',
      'Use text buttons for lightweight inline actions and contained buttons for stronger decision points.',
    ],
  },
  Checkbox: {
    whenToUse: [
      'Use it when users can independently turn options on or off.',
      'Use it for consent, feature toggles inside forms, and non-exclusive multi-select inputs.',
      'Use it when the checked state should be explicit and persist alongside labels or descriptions.',
    ],
  },
  CheckboxGroup: {
    whenToUse: [
      'Use it when users need to select multiple options from the same option set.',
      'Use it for preference pickers, permission sets, and grouped filter controls.',
      'Use it when shared name, disabled state, or orientation should be applied consistently across related checkboxes.',
    ],
  },
  Drawer: {
    whenToUse: [
      'Use it for secondary workflows that should slide over the current page without full navigation.',
      'Use it when editing, inspecting, or confirming information while preserving the user’s existing context.',
      'Use it for side panels, detail inspectors, and task flows that benefit from extra space but should not block the entire screen like a modal.',
    ],
  },
  Dropdown: {
    whenToUse: [
      'Use it for anchored action menus and lightweight floating panels.',
      'Use it when the trigger should reveal a short set of contextual commands near the originating element.',
      'Use it for action menus, overflow menus, and compact confirmation content attached to a button or icon trigger.',
    ],
  },
  Empty: {
    whenToUse: [
      'Use it when a list, table, or surface has no data and needs a clear zero-state message.',
      'Use it to explain why content is missing and what users should do next.',
      'Use it for first-run experiences, filtered-empty states, and unavailable-result messaging.',
    ],
  },
  Flex: {
    whenToUse: [
      'Use it for one-dimensional layout problems where content is arranged in a row or column.',
      'Use it for toolbars, action bars, inline alignment, and vertically stacked content blocks.',
      'Use it when spacing, wrapping, justification, and alignment should be controlled without dropping into raw CSS.',
    ],
  },
  Form: {
    whenToUse: [
      'Use it when field registration, validation rules, and submit/reset handling should be managed as a single form state.',
      'Use it for standard data entry flows that need labels, rules, and predictable layout behavior.',
      'Use it when multiple controls should share validation lifecycle and submission events.',
    ],
  },
  Grid: {
    whenToUse: [
      'Use it for responsive multi-column page structure and content layouts.',
      'Use it when cards, forms, or sections must align to a 12-column system across breakpoints.',
      'Use it for dashboards, split panes, multi-column forms, and content areas that reflow between desktop and mobile.',
    ],
  },
  Icons: {
    whenToUse: [
      'Use it whenever an interaction, status, or branded surface needs a consistent icon asset from the shared set.',
      'Use it for buttons, inputs, alerts, navigation, and illustration-backed empty or modal states.',
      'Use it when icon naming, sizing, and styling should remain consistent across the library.',
    ],
  },
  Input: {
    whenToUse: [
      'Use it for single-line and text-entry scenarios where the user must type a value directly.',
      'Use the family variants for password, search, textarea, and OTP workflows under the same visual shell.',
      'Use it when labels, descriptions, validation status, prefix/suffix slots, and helper feedback all need to stay visually consistent.',
    ],
  },
  Modal: {
    whenToUse: [
      'Use it for blocking tasks that require focused attention before the user can continue.',
      'Use it when confirmation, acknowledgement, or critical workflow steps should interrupt the current page.',
      'Use it for dialogs that need dedicated title, body, illustration/media, and footer actions in a contained overlay.',
    ],
  },
  Notification: {
    whenToUse: [
      'Use it for transient global feedback that appears above the page without changing layout.',
      'Use it when a background operation, success state, warning, or error must be surfaced immediately to the user.',
      'Use the static API when feedback should be triggered imperatively from actions, async events, or service responses.',
    ],
  },
  Pagination: {
    whenToUse: [
      'Use it when large result sets are split across pages and users need to navigate predictably between them.',
      'Use it for tables, activity feeds, and management screens where item count exceeds a single view.',
      'Use it when page index, page size, and navigation affordances should stay explicit and reusable.',
    ],
  },
  ProForm: {
    whenToUse: [
      'Use it when you need higher-level, product-ready form composition rather than assembling every field manually.',
      'Use it for search forms, modal forms, and structured data-entry flows that benefit from field wrappers and layout helpers.',
      'Use it when a page should move quickly from schema-like field configuration to working business forms.',
    ],
  },
  Radio: {
    whenToUse: [
      'Use it when the user must choose exactly one option from a small, visible set.',
      'Use it when all available choices should stay on screen for comparison.',
      'Use it for mutually exclusive selections such as status mode, transfer type, or display preference.',
    ],
  },
  Segment: {
    whenToUse: [
      'Use it for compact single-choice switching between closely related views or modes.',
      'Use it when the options behave like a grouped control rather than a navigation tab set.',
      'Use it for density-sensitive places such as chart mode switches, filter modes, or embedded content toggles.',
    ],
  },
  Select: {
    whenToUse: [
      'Use it when users should choose from predefined options instead of typing a free-form value.',
      'Use it for single-select and multi-select workflows with optional search, grouping, and rich option rendering.',
      'Use it when the option list may be longer than a radio group can comfortably display inline.',
    ],
  },
  Space: {
    whenToUse: [
      'Use it for quick, uniform spacing between inline or stacked elements.',
      'Use it when components should be distributed with consistent preset gaps instead of manual margins.',
      'Use it for button groups, tag rows, compact metadata blocks, and simple horizontal or vertical clusters.',
    ],
  },
  Spinner: {
    whenToUse: [
      'Use it to communicate that a task is loading and a result is on the way.',
      'Use it for button loading states, panel-level data fetches, and transitional waiting states.',
      'Use it when the UI should acknowledge progress without yet showing a determinate percentage.',
    ],
  },
  Step: {
    whenToUse: [
      'Use it when a workflow is divided into explicit sequential stages.',
      'Use it for onboarding, identity verification, checkout, and other multi-step task progressions.',
      'Use it when users benefit from seeing current progress, completed steps, and what remains.',
    ],
  },
  Switch: {
    whenToUse: [
      'Use it for immediate binary toggles where the change takes effect as soon as the user flips the control.',
      'Use it for settings, permissions, and feature activation patterns that do not require a submit button.',
      'Use it when the mental model is “on/off” rather than selecting among multiple options.',
    ],
  },
  Tabs: {
    whenToUse: [
      'Use it to switch between peer sections of content without leaving the current page.',
      'Use it when several related panels share the same layout shell but only one should be visible at a time.',
      'Use it for information architecture inside settings, detail pages, and modular dashboards.',
    ],
  },
  Tag: {
    whenToUse: [
      'Use it to label entities, statuses, and short categorical metadata.',
      'Use it for concise semantic markers such as state badges, asset labels, and filter chips.',
      'Use it when the content should stay compact, highly scannable, and visually distinct from body text.',
    ],
  },
  Tooltip: {
    whenToUse: [
      'Use it to reveal supplemental context without permanently occupying page space.',
      'Use it for definitions, helper hints, truncated content disclosure, and icon-only explanations.',
      'Use it when information is useful but not important enough to surface inline by default.',
    ],
  },
  Trigger: {
    whenToUse: [
      'Use it when another surface should be shown or hidden in response to hover, click, or focus behavior.',
      'Use it as the low-level interaction shell for popups, overlays, and anchored floating experiences.',
      'Use it when trigger orchestration matters more than the visual treatment of the revealed content.',
    ],
  },
  Typography: {
    whenToUse: [
      'Use it whenever product text should align to the semantic typography scale instead of ad hoc font styling.',
      'Use it for headings, labels, body copy, links, and truncated or copyable text content.',
      'Use it when text hierarchy, readability, and token-driven consistency matter across dense product surfaces.',
    ],
  },
};

export function getComponentDocMeta(componentName: string): ComponentDocMeta | null {
  return COMPONENT_DOC_META[componentName] ?? null;
}
