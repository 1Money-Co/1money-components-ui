import{r as m}from"./index-CP2yOfOm.js";import{d as x}from"./index-DrFu-skq.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{h as w,u as S,i as C,P as k,j as T,k as D,f as R}from"./index-M2UXaesf.js";import"./iframe-Bcm0CXsn.js";import"./index-D1q9exoj.js";import"./index-BzJi89j3.js";const{useParameter:A,addons:_,useEffect:E,useMemo:Le,definePreview:Me}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:I}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var P=Object.defineProperty,g=(n,t)=>{for(var o in t)P(n,o,{get:t[o],enumerable:!0})},U={};g(U,{initialGlobals:()=>M});var u="themes",N=`storybook/${u}`,f="theme",h={},L={REGISTER_THEMES:`${N}/REGISTER_THEMES`},M={[f]:""},G={};g(G,{initializeThemeState:()=>y,pluckThemeFromContext:()=>b,useThemeParameters:()=>B});function b({globals:n}){return n[f]||""}function B(n){return I(x`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),n?n.parameters[u]??h:A(u,h)}function y(n,t){_.getChannel().emit(L.REGISTER_THEMES,{defaultTheme:t,themes:n})}var z="html",O="data-theme",F=({themes:n,defaultTheme:t,parentSelector:o=z,attributeName:d=O})=>(y(Object.keys(n),t),(p,a)=>{let{themeOverride:i}=a.parameters[u]??{},c=b(a);return E(()=>{let s=document.querySelector(o),r=i||c||t;s&&s.setAttribute(d,n[r])},[i,c]),p()});const j="# Accordion\n\nA collapsible content panel component for organizing and presenting information in a compact, expandable format. Supports fill (card-style) and stroke (divider-style) visual variants with two size options.\n\n## Import\n\n```tsx\nimport { Accordion } from '@1money/components-ui';\n// or\nimport { Accordion } from '@1money/components-ui/Accordion';\n```\n\n## Usage\n\n```tsx\nconst items = [\n  { key: '1', title: 'Section Title', children: 'Content here...' },\n  { key: '2', title: 'Another Section', children: 'More content...' },\n];\n\n<Accordion items={items} />\n<Accordion items={items} variant=\"stroke\" size=\"small\" />\n<Accordion items={items} multiple defaultActiveKeys={['1', '2']} />\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `items` | `AccordionItem[]` | — | Accordion items configuration (required) |\n| `variant` | `'fill' \\| 'stroke'` | `'fill'` | Visual style variant |\n| `size` | `'large' \\| 'small'` | `'large'` | Size variant |\n| `multiple` | `boolean` | `false` | Allow multiple items expanded simultaneously |\n| `activeKeys` | `string[]` | — | Controlled active item keys |\n| `defaultActiveKeys` | `string[]` | `[]` | Default active item keys |\n| `onChange` | `(activeKeys: string[]) => void` | — | Callback when active items change |\n| `prefixCls` | `string` | `'accordion'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n### AccordionItem\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `key` | `string` | Unique identifier |\n| `title` | `ReactNode` | Header title content |\n| `children` | `ReactNode` | Expandable panel content |\n| `disabled` | `boolean` | Whether the item is disabled |\n",H="# Alert\n\nAn inline alert component for displaying contextual feedback messages. Supports four status variants: info, success, warning, and error.\n\n## Import\n\n```tsx\nimport { Alert } from '@1money/components-ui';\n// or\nimport { Alert } from '@1money/components-ui/Alert';\n```\n\n## Usage\n\n```tsx\n<Alert\n  status=\"info\"\n  title=\"Information\"\n  body=\"This is an informational message.\"\n  link={{ label: 'Learn more', href: '/docs' }}\n  onClose={() => console.log('closed')}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `status` | `'info' \\| 'success' \\| 'warning' \\| 'error'` | `'info'` | Status variant controlling colors and icon |\n| `title` | `ReactNode` | — | Title text displayed in bold |\n| `body` | `ReactNode` | — | Body text below the title |\n| `link` | `AlertLinkConfig` | — | Optional link below the body |\n| `icon` | `ReactNode` | — | Custom icon override |\n| `showIcon` | `boolean` | `true` | Whether to show the status icon |\n| `action` | `ReactNode` | — | Optional action element (e.g., button) |\n| `closable` | `boolean` | `true` | Whether to show the close button |\n| `onClose` | `MouseEventHandler` | — | Close button click handler |\n| `prefixCls` | `string` | `'alert'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n",W="# Button\n\nA native button component with the 1Money design system tokens. Supports multiple color variants, three sizes, optional leading/trailing icon slots, loading state, and rounded styling.\n\n## Import\n\n```tsx\nimport { Button } from '@1money/components-ui';\n// or\nimport { Button } from '@1money/components-ui/Button';\n```\n\n## Usage\n\n```tsx\n// Basic\n<Button color=\"primary\" size=\"medium\">Submit</Button>\n\n// With icons\n<Button color=\"secondary\" iconStart={<Icons name=\"add\" size={16} />}>\n  Add Item\n</Button>\n\n<Button color=\"grey\" iconEnd={<Icons name=\"arrowRight\" size={16} />}>\n  Next\n</Button>\n\n// Loading state\n<Button loading>Processing...</Button>\n\n// Disabled\n<Button disabled>Unavailable</Button>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `color` | `'primary' \\| 'secondary' \\| 'grey' \\| 'black' \\| 'white' \\| 'danger' \\| 'warning'` | `'primary'` | Color variant |\n| `size` | `'large' \\| 'medium' \\| 'small'` | `'medium'` | Size variant |\n| `type` | `'button' \\| 'submit' \\| 'reset'` | `'button'` | Native button type |\n| `rounded` | `boolean` | `false` | Applies a pill-shaped border radius |\n| `iconStart` | `ReactNode` | — | Leading icon slot |\n| `iconEnd` | `ReactNode` | — | Trailing icon slot |\n| `loading` | `boolean` | `false` | Shows a loading spinner and disables the button |\n| `disabled` | `boolean` | `false` | Disables the button |\n| `prefixCls` | `string` | `'button'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n| `children` | `ReactNode` | — | Button content |\n\nThis component accepts standard native button attributes such as `name`, `value`, `form`, `aria-*`, and `data-*`.\n\nRefs are forwarded to the root `<button>` element.\n",V="# Calendar\n\nA date picker component wrapping PrimeReact's Calendar with custom styling. Supports single date, multiple dates, and date range selection modes.\n\n## Import\n\n```tsx\nimport { Calendar } from '@1money/components-ui';\n// or\nimport { Calendar } from '@1money/components-ui/Calendar';\n```\n\n## Usage\n\n```tsx\n<Calendar\n  label=\"Date of Birth\"\n  required\n  placeholder=\"MM/DD/YYYY\"\n  onChange={(e) => console.log(e.value)}\n/>\n```\n\n### Range Selection\n\n```tsx\n<Calendar\n  label=\"Date Range\"\n  selectionMode=\"range\"\n  numberOfMonths={2}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `size` | `'large' \\| 'small'` | `'large'` | Size variant |\n| `label` | `ReactNode` | — | Label displayed above the input |\n| `message` | `ReactNode` | — | Helper/error message below the input |\n| `required` | `boolean` | `false` | Shows asterisk after label |\n| `success` | `boolean` | `false` | Success state styling |\n| `invalid` | `boolean` | `false` | Error state styling |\n| `selectionMode` | `'single' \\| 'range' \\| 'multiple'` | `'single'` | Date selection mode |\n| `defaultValue` | `Date \\| Date[] \\| null` | — | Default value (uncontrolled) |\n| `value` | `Date \\| Date[] \\| null` | — | Controlled value |\n| `contentWidth` | `CSSProperties['width']` | — | Custom calendar content width |\n| `prefixCls` | `string` | `'calendar'` | CSS class prefix |\n| `className` | `string` | — | Additional CSS classes |\n\nAll other props are forwarded to PrimeReact's `Calendar` component.\n",q="# Carousel\n\nA diamond-shaped dot indicator for step navigation. Used as a sub-component inside Coach Mark, onboarding flows, and similar multi-step UIs.\n\n## Import\n\n```tsx\nimport { Carousel } from '@1money/components-ui';\n// or\nimport { Carousel } from '@1money/components-ui/Carousel';\n```\n\n## Usage\n\n```tsx\n<Carousel count={4} defaultActiveIndex={0} onChange={(index) => console.log(index)} />\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `count` | `number` | — | Total number of indicator dots (required) |\n| `activeIndex` | `number` | — | Current active dot index (controlled) |\n| `defaultActiveIndex` | `number` | `0` | Default active dot index (uncontrolled) |\n| `onChange` | `(index: number) => void` | — | Callback when active dot changes |\n| `prefixCls` | `string` | `'carousel'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n## Dot States\n\n- **Default**: 8px diamond shape, neutral color\n- **Hover**: 8px diamond shape, darker neutral color\n- **Active**: 12px diamond shape, brand color\n",Y='# Cell\n\nInteractive action row component for settings-style or navigation-style lists.\n\n## Import\n\n```tsx\nimport { Cell } from \'@1money/component-ui\';\n// or\nimport { Cell } from \'@1money/component-ui/Cell\';\n```\n\n## Usage\n\n```tsx\n<Cell iconStart="security" iconEnd="arrowRight">\n  Authenticator app\n</Cell>\n```\n\nActive state:\n\n```tsx\n<Cell iconStart="security" iconEnd="arrowRight" active>\n  Authenticator app\n</Cell>\n```\n\nDisabled state:\n\n```tsx\n<Cell iconStart="security" iconEnd="arrowRight" disabled>\n  Authenticator app\n</Cell>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `iconStart` | `IconName` | — | Leading icon rendered before the label |\n| `iconEnd` | `IconName` | — | Trailing icon rendered after the label |\n| `active` | `boolean` | `false` | Applies the selected/active visual state |\n| `disabled` | `boolean` | `false` | Disables click interaction and applies disabled styling |\n| `prefixCls` | `string` | `\'cell\'` | CSS class prefix |\n| `className` | `string` | `\'\'` | Additional CSS classes |\n| `children` | `ReactNode` | — | Row label content |\n| `...buttonProps` | `ButtonHTMLAttributes<HTMLButtonElement>` | — | Native button props forwarded to the root element |\n',K="# Checkbox\n\nA checkbox component with label and description support, built with a native `input[type='checkbox']` and the 1Money design system tokens. Supports checked, unchecked, and indeterminate states with configurable label direction.\n\n## Import\n\n```tsx\nimport { Checkbox } from '@1money/components-ui';\n// or\nimport { Checkbox } from '@1money/components-ui/Checkbox';\n```\n\n## Usage\n\n```tsx\n<Checkbox\n  checked={isChecked}\n  label=\"Accept terms\"\n  description=\"You must accept the terms to continue\"\n  onChange={(event) => setIsChecked(event.target.checked)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `checked` | `boolean` | — | Whether the checkbox is checked (controlled) |\n| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled) |\n| `indeterminate` | `boolean` | `false` | Whether the checkbox is in indeterminate state |\n| `disabled` | `boolean` | `false` | Disables the checkbox |\n| `label` | `ReactNode` | — | Label text displayed next to the checkbox |\n| `description` | `ReactNode` | — | Description text displayed below the label |\n| `labelPlacement` | `'left' \\| 'right'` | `'left'` | Placement of the label relative to the checkbox |\n| `onChange` | `(event: CheckboxChangeEvent) => void` | — | Callback when checked state changes |\n| `ref` | `RefObject<HTMLLabelElement \\| null>` | — | Ref to the root label element |\n| `prefixCls` | `string` | `'checkbox'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n## CheckboxGroup\n\n`CheckboxGroup` is exported from the same module as `Checkbox`, matching the `Radio` / `RadioGroup` structure.\n\n```tsx\nimport { Checkbox, CheckboxGroup } from '@1money/components-ui';\n// or\nimport { Checkbox, CheckboxGroup } from '@1money/components-ui/Checkbox';\n\n<CheckboxGroup\n  name=\"fruits\"\n  options={[\n    { label: 'Apple', value: 'apple' },\n    { label: 'Pear', value: 'pear' },\n  ]}\n  value={selectedValues}\n  onChange={setSelectedValues}\n/>\n\n<Checkbox.Group defaultValue={['alpha']}>\n  <Checkbox value=\"alpha\" label=\"Alpha\" />\n  <Checkbox value=\"beta\" label=\"Beta\" />\n</Checkbox.Group>\n```\n\nSelected values are returned in declaration order, and `options` items can define their own `onChange` callback that receives the checkbox change event.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `options` | `Array<CheckboxValueType \\| CheckboxGroupOption>` | — | Quick configuration for rendering grouped checkboxes |\n| `value` | `CheckboxValueType[]` | — | Controlled selected values |\n| `defaultValue` | `CheckboxValueType[]` | `[]` | Default selected values for uncontrolled usage |\n| `onChange` | `(checkedValue: CheckboxValueType[]) => void` | — | Callback when the selected values change |\n| `name` | `string` | — | Shared native name passed to all child inputs |\n| `disabled` | `boolean` | `false` | Disables the entire group |\n| `direction` | `'horizontal' \\| 'vertical'` | `'horizontal'` | Layout direction for the group |\n| `children` | `ReactNode` | — | Direct `Checkbox` children controlled by the group |\n| `className` | `string` | `''` | Additional CSS classes |\n| `prefixCls` | `string` | `'checkbox-group'` | CSS class prefix |\n",J="# CoachMark\n\nA guided onboarding tooltip card with multi-step navigation. Features a beak arrow pointing to the target element, step indicators (Carousel Points), and Back/Next/Finish navigation buttons.\n\n## Import\n\n```tsx\nimport { CoachMark } from '@1money/components-ui';\n// or\nimport { CoachMark } from '@1money/components-ui/CoachMark';\n```\n\n## Usage\n\n```tsx\n<CoachMark\n  heading=\"Welcome to Dashboard\"\n  body=\"Here you can see an overview of your finances.\"\n  steps={4}\n  defaultActiveStep={0}\n  placement=\"top\"\n  icon={<Icons name=\"dashboard\" size={24} />}\n  onFinish={() => console.log('Tour complete')}\n  onDismiss={() => console.log('Tour dismissed')}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `heading` | `ReactNode` | — | Heading text |\n| `body` | `ReactNode` | — | Body text |\n| `icon` | `ReactNode` | — | Icon or illustration above the heading |\n| `steps` | `number` | — | Total number of steps (required) |\n| `activeStep` | `number` | — | Current step index (controlled) |\n| `defaultActiveStep` | `number` | `0` | Default step index (uncontrolled) |\n| `placement` | `'top' \\| 'bottom' \\| 'left' \\| 'right'` | `'top'` | Beak arrow placement |\n| `dismissible` | `boolean` | `true` | Show dismiss (close) button |\n| `onChange` | `(step: number) => void` | — | Callback when step changes |\n| `onFinish` | `() => void` | — | Callback when finish button is clicked |\n| `onDismiss` | `() => void` | — | Callback when dismiss button is clicked |\n| `backLabel` | `string` | `'Back'` | Custom back button label |\n| `nextLabel` | `string` | `'Next'` | Custom next button label |\n| `finishLabel` | `string` | `'Finish'` | Custom finish button label |\n| `prefixCls` | `string` | `'coach-mark'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n## Step Sequences\n\n- **First step** (`activeStep === 0`): Back button is disabled\n- **Middle steps**: Both Back and Next buttons are active\n- **Last step** (`activeStep === steps - 1`): Next button shows \"Finish\" label\n\n## Placements\n\nThe `placement` prop controls where the beak arrow appears:\n- `top`: Beak at bottom, coach mark is above the target\n- `bottom`: Beak at top, coach mark is below the target\n- `left`: Beak at right, coach mark is to the left of the target\n- `right`: Beak at left, coach mark is to the right of the target\n",$="# Copy\n\nA copy-to-clipboard icon button that displays a copy icon by default and switches to a check icon upon successful copy, reverting after 1.5 seconds.\n\n## Import\n\n```tsx\nimport { Copy } from '@1money/components-ui';\n// or\nimport { Copy } from '@1money/components-ui/Copy';\n```\n\n## Usage\n\n```tsx\n<Copy\n  value=\"Text to copy\"\n  onSuccess={(val) => console.log('Copied:', val)}\n  onError={(val) => console.log('Failed:', val)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | The text content to copy to clipboard (required) |\n| `iconSize` | `number` | `20` | Icon size in pixels |\n| `color` | `string` | — | Icon color |\n| `successColor` | `string` | `'#1F5800'` | Icon color when copy succeeds |\n| `contained` | `boolean` | `true` | Whether to show the background container around the icon |\n| `onSuccess` | `(value: string) => void` | — | Callback fired when copy succeeds |\n| `onError` | `(value: string) => void` | — | Callback fired when copy fails |\n| `prefixCls` | `string` | `'copy'` | CSS class prefix |\n| `className` | `string` | — | Additional CSS classes |\n",X=`# Divider

A divider line separates different content.

## Import

\`\`\`tsx
import { Divider } from '@1money/components-ui';
\`\`\`

## Usage

### Horizontal

\`\`\`tsx
<p>Above</p>
<Divider />
<p>Below</p>
\`\`\`

### With Text

\`\`\`tsx
<Divider>Section Title</Divider>
<Divider orientation="left">Left Title</Divider>
<Divider orientation="right">Right Title</Divider>
\`\`\`

### Vertical

\`\`\`tsx
Text <Divider type="vertical" /> Text
\`\`\`

### Dashed / Dotted

\`\`\`tsx
<Divider variant="dashed" />
<Divider variant="dotted">Dotted</Divider>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | \`'horizontal' \\| 'vertical'\` | \`'horizontal'\` | Direction type |
| orientation | \`'left' \\| 'center' \\| 'right'\` | \`'center'\` | Position of inner text |
| orientationMargin | \`string \\| number\` | — | Margin between text and border |
| plain | \`boolean\` | \`false\` | Render text in plain style |
| variant | \`'solid' \\| 'dashed' \\| 'dotted'\` | \`'solid'\` | Border style variant |
| prefixCls | \`string\` | \`'divider'\` | Custom class prefix |
| children | \`ReactNode\` | — | Inner text content |
`,Z=`# Empty

Empty state placeholder component. Displays an icon, optional title, description text, and optional action button to indicate no data is available.

## Import

\`\`\`tsx
import { Empty } from '@1money/components-ui';
// or
import { Empty } from '@1money/components-ui/Empty';
\`\`\`

## Usage

\`\`\`tsx
// Basic usage with icon name
<Empty
  icon="transactions"
  title="No record found"
  description="Try adjusting your filters to find the record you are looking for"
/>

// With custom icon component
<Empty
  icon={<MyCustomIcon />}
  description="No data available"
/>

// With action button
<Empty
  variant="stroke"
  icon="bank"
  description="You don't have any bank accounts linked"
  action={<Button>Add new bank account</Button>}
/>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`'stroke' \\| 'fill'\` | \`'stroke'\` | Visual style — stroke has background and border, fill is transparent |
| \`icon\` | \`IconName \\| ReactNode\` | — | Top icon, either an icon name string or a custom React element |
| \`title\` | \`ReactNode\` | — | Optional bold title text |
| \`description\` | \`ReactNode\` | — | Body description text |
| \`action\` | \`ReactNode\` | — | Optional action slot (e.g., a Button) |
| \`prefixCls\` | \`string\` | \`'empty'\` | CSS class prefix |
| \`className\` | \`string\` | \`''\` | Additional CSS classes |
`,Q=`# Flex

A layout helper component. Provides a consistent API for flex direction, alignment, wrapping, and gap spacing.

## Features

- Horizontal or vertical flex layouts
- Justify and align helpers
- Wrap control
- Gap spacing using the 4px grid

## Import

\`\`\`tsx
import { Flex } from '@1money/components-ui';
// or
import { Flex } from '@1money/components-ui/Flex';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY, FLEX_WRAP } from '@1money/components-ui/Flex';
\`\`\`

## Basic Usage

\`\`\`tsx
import { Flex } from '@1money/components-ui';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY } from '@1money/components-ui/Flex';

<Flex gap={FLEX_GAP.middle} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween}>
  <div>Left</div>
  <div>Right</div>
</Flex>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`vertical\` | \`boolean\` | \`false\` | Stack items vertically |
| \`wrap\` | \`boolean \\| 'nowrap' \\| 'wrap' \\| 'wrap-reverse'\` | — | Flex wrapping |
| \`align\` | \`'start' \\| 'end' \\| 'center' \\| 'baseline' \\| 'stretch'\` | — | Align items |
| \`justify\` | \`'start' \\| 'end' \\| 'center' \\| 'space-around' \\| 'space-between' \\| 'space-evenly'\` | — | Justify content |
| \`gap\` | \`'small' \\| 'middle' \\| 'large' \\| number\` | \`0\` | Gap between items |
| \`prefixCls\` | \`string\` | \`'flex'\` | CSS class prefix |

This component also accepts all standard HTML div attributes.

## Vertical Layout

\`\`\`tsx
const VERTICAL_GAP = 16;

<Flex vertical gap={VERTICAL_GAP}>
  <div>Top</div>
  <div>Bottom</div>
</Flex>
\`\`\`
`,ee=`# Grid

A responsive 12-column layout system, built with flexbox and consistent gutters.

## Features

- 12-column grid with spans and offsets
- Responsive breakpoints (sm/md/lg, desktop-first with max-width)
- Horizontal and vertical gutters
- Row alignment and justification helpers
- Optional flex-based columns

## Breakpoints

- \`sm\`: max-width 767.98px
- \`md\`: max-width 1023.98px
- \`lg\`: max-width 1279.98px

## Import

\`\`\`tsx
import { Grid, Row, Col } from '@1money/components-ui';
// or
import { Grid, Row, Col } from '@1money/components-ui/Grid';
import { GRID_ALIGN, GRID_JUSTIFY } from '@1money/components-ui/Grid';
\`\`\`

## Basic Usage

\`\`\`tsx
import { Grid } from '@1money/components-ui';
import { GRID_ALIGN, GRID_JUSTIFY } from '@1money/components-ui/Grid';

const GRID_GUTTER: [number, number] = [16, 8];
const SPAN_HALF = 6;

<Grid gutter={GRID_GUTTER} justify={GRID_JUSTIFY.spaceBetween} align={GRID_ALIGN.middle}>
  <Grid.Col span={SPAN_HALF}>Left</Grid.Col>
  <Grid.Col span={SPAN_HALF}>Right</Grid.Col>
</Grid>
\`\`\`

## Component Props

### Grid / Row

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`gutter\` | \`number \\| string \\| [number \\| string, number \\| string] \\| { sm?; md?; lg? } \\| [{ sm?; md?; lg? }, { sm?; md?; lg? }]\` | \`0\` | Horizontal gutter (use array for [horizontal, vertical]) |
| \`align\` | \`'top' \\| 'middle' \\| 'bottom' \\| 'stretch'\` | — | Vertical alignment |
| \`justify\` | \`'start' \\| 'end' \\| 'center' \\| 'space-around' \\| 'space-between' \\| 'space-evenly' \\| { sm?; md?; lg? }\` | — | Horizontal alignment |
| \`wrap\` | \`boolean\` | \`true\` | Toggle flex wrapping |
| \`prefixCls\` | \`string\` | \`'grid-row'\` | CSS class prefix |

Also accepts all standard HTML div attributes.

### Col

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`span\` | \`number\` | — | Column span (1-12) |
| \`offset\` | \`number\` | — | Column offset (1-12) |
| \`order\` | \`number\` | — | Flex order |
| \`push\` | \`number\` | — | Move column right by cells |
| \`pull\` | \`number\` | — | Move column left by cells |
| \`flex\` | \`number \\| string\` | — | Flex value (e.g. \`1\`, \`'auto'\`, \`'100px'\`) |
| \`sm/md/lg\` | \`number \\| { span?; offset?; order?; pull?; push?; flex? }\` | — | Desktop-first responsive size config (max-width) |
| \`prefixCls\` | \`string\` | \`'grid-col'\` | CSS class prefix |

Also accepts all standard HTML div attributes.

## Responsive Usage

\`\`\`tsx
const GRID_GUTTER = { sm: 8, md: 16, lg: 24 };
const SPAN_BASE = 12;
const SPAN_SM = 6;
const SPAN_MD = 4;
const OFFSET_MD = 2;
const SPAN_LARGE = 3;

import { GRID_JUSTIFY } from '@1money/components-ui/Grid';

const GRID_JUSTIFY_RESPONSIVE = {
  sm: GRID_JUSTIFY.start,
  md: GRID_JUSTIFY.spaceBetween,
  lg: GRID_JUSTIFY.end
};
const PUSH_COL = 1;
const PULL_COL = 1;

<Grid gutter={GRID_GUTTER}>
  <Grid.Col span={SPAN_BASE} sm={SPAN_SM} md={{ span: SPAN_MD, offset: OFFSET_MD }} lg={SPAN_LARGE} />
</Grid>

<Grid gutter={GRID_GUTTER} justify={GRID_JUSTIFY_RESPONSIVE}>
  <Grid.Col span={SPAN_BASE} sm={SPAN_SM} md={{ span: SPAN_MD, offset: OFFSET_MD }} lg={SPAN_LARGE} />
  <Grid.Col span={SPAN_BASE} push={PUSH_COL} pull={PULL_COL} />
</Grid>
\`\`\`

## Styling

Styles are SCSS-based and follow the 4px spacing grid. Gutters are implemented via CSS variables and inherited by child columns.
`,ne="# Icons\n\nA comprehensive icon system providing access to custom SVG icons, logos, illustrations, and deprecated icons with consistent styling.\n\n## Components\n\n- **Icons**: Main icon component for displaying any icon by name.\n- **IconWrapper**: SVG wrapper providing consistent sizing and color.\n- **IconHover**: Hover-effect container for icon buttons.\n\n## Import\n\n```tsx\nimport { Icons, IconWrapper, IconHover } from '@1money/components-ui';\n// or\nimport { Icons, IconWrapper, IconHover } from '@1money/components-ui/Icons';\n\n// Type import\nimport type { IconName } from '@1money/components-ui';\n```\n\n## Basic Usage\n\n```tsx\n// Basic icon (default 24px, color #131313)\n<Icons name=\"arrowRight\" />\nimport { Icons, IconWrapper, Logo } from '@1money/components-ui';\n\n// Custom size and color\n<Icons name=\"settings\" size={32} color=\"#3D73F2\" />\n\n// With explicit width/height\n<Icons name=\"search\" width={20} height={20} />\n\n// Icon with hover container\n<IconHover>\n  <Icons name=\"more\" />\n</IconHover>\n\n// Disabled hover container\n<IconHover disabled>\n  <Icons name=\"settings\" />\n</IconHover>\n\n// Logo\n<Icons name=\"logo\" size={40} />\n```\n\n## Icons Props\n\n`IconsProps` extends `IconWrapperProps` with an additional `name` prop.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `name` | `IconName` | — | Icon name from the available icon set |\n| `size` | `number \\| \\`${number}\\`` | `24` | Icon size in pixels (sets both width and height) |\n| `width` | `number \\| \\`${number}\\`` | — | Override width independently |\n| `height` | `number \\| \\`${number}\\`` | — | Override height independently |\n| `color` | `string` | `'#131313'` | Icon color (CSS color value) |\n| `fill` | `boolean` | — | Set SVG fill to `currentColor` |\n| `stroke` | `boolean` | — | Set SVG stroke to `currentColor` |\n| `viewBox` | `string` | `'0 0 24 24'` | SVG viewBox attribute |\n| `id` | `string` | — | HTML id attribute |\n| `className` | `string` | `''` | CSS class on the SVG element |\n| `wrapperCls` | `string` | `''` | CSS class on the wrapper `<i>` element |\n| `style` | `CSSProperties` | — | Inline styles on the wrapper |\n| `ariaLabel` | `string` | — | Accessibility label |\n| `tabIndex` | `number` | — | Tab index for keyboard navigation |\n| `onClick` | `(e: MouseEvent<HTMLElement>) => any` | — | Click handler |\n| `onKeyDown` | `(e: KeyboardEvent<HTMLElement>) => any` | — | Key down handler |\n| `prefixCls` | `string` | `'icons'` | CSS class prefix |\n\n## IconHover Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `disabled` | `boolean` | — | Disables hover effect and adds reduced opacity |\n| `prefixCls` | `string` | `'icons-hover'` | CSS class prefix |\n| `className` | `string` | — | Additional CSS classes |\n\nAlso accepts all standard HTML div attributes.\n\n## Available Icon Names\n\nAll icon names use **camelCase**. The `IconName` type provides full autocompletion.\n\n### Functional Icons\n\n`arrowUp`, `arrowDown`, `arrowLeft`, `arrowRight`, `add`, `minus`, `cross`, `more`, `chevronDown`, `chevronUp`, `chevronLeft`, `chevronRight`, `collapse`, `extend`, `spinner`, `check`, `remove`, `pix`\n\n### System Icons\n\n`info`, `notifications`, `favorite`, `transferHistory`, `support`, `help`, `language`, `share`, `products`, `hub`, `systemSecurity`, `fees`, `settings`, `id`, `viewBalance`, `hideBalance`, `privacy`, `card`, `coin`, `wallet`, `email`, `rewards`, `time`, `location`, `calendar`, `securityCheck`, `devices`, `images`, `bank`, `coins`, `earn`, `scan`, `search`, `maintenance`, `editFile`, `document`, `upload`, `gift`, `filter`, `expand`, `systemCollapse`, `refresh`, `transfer`, `link`, `save`, `like`, `dislike`, `copy`, `mobile`, `chat`, `swap`, `clock`, `desktop`, `ach`, `businessAccount`, `individualAccount`, `apiKey`, `brokenLink`, `autoConversionRules`\n\n### Menu Icons\n\n`dashboard`, `digitalAsset`, `addressBook`, `linkedBankAccounts`, `wire`, `swift`, `account`, `profile`, `security`, `logout`, `portfolio`, `home`, `convert`, `withdraw`, `send`, `menuDeposit`, `company`, `parties`, `transactions`, `fiat`, `money`, `sendCrypto`\n\n### Primary Icons\n\n`deposit`, `withdrawal`, `conversion`, `mintToken`, `burnToken`, `accountLocked`, `pending`, `success`, `fail`, `error`\n\n### Status Icons\n\n`statusSuccess`, `statusFail` (these accept an additional `innerColor` prop)\n\n### Logo Icons\n\n`logo`, `logoWord`, `logoNetwork`, `logoWithWords`, `logoBg`, `logoBeta`, `logoWithBeta`\n\n### Illustrations\n\n`illusChecked`, `illusEmailError`, `illusLinkExpired`, `illus2FA`, `illusLocked`, `illusError`, `illusRegionNotSupported`, `illusID`, `illusVerification`, `illusPending`, `illusPasskey`, `illusAddAccount`\n\n```tsx\n// Old (still works)\nimport { Deprecated } from '@1money/components-ui';\n<Deprecated name=\"old-icon-name\" />\n\n// New (recommended)\nimport { Icons } from '@1money/components-ui';\n<Icons name=\"new-icon-name\" />\n```\n",te="# Input\n\nAn input family for `@1money/components-ui` covering single-line input, password, search, textarea, and OTP use cases. The family shares a common shell for label, description, feedback, size, status, and disabled state handling.\n\n## Import\n\n```tsx\nimport { Input } from '@1money/components-ui';\n// or\nimport { Input } from '@1money/components-ui/Input';\n```\n\n## Usage\n\n```tsx\n<Input label=\"Amount\" placeholder=\"Value\" />\n\n<Input.Password label=\"Password\" />\n\n<Input.Search label=\"Search\" onSearch={(value) => console.log(value)} />\n\n<Input.TextArea label=\"Memo\" rows={4} />\n\n<Input.OTP length={6} />\n```\n\n## Shared Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `size` | `'large' \\| 'small'` | `'large'` | Size variant |\n| `status` | `'default' \\| 'error' \\| 'warning' \\| 'success'` | `'default'` | Visual validation state |\n| `label` | `ReactNode` | — | Label content displayed above the control |\n| `info` | `ReactNode` | — | Optional helper content beside the label |\n| `description` | `ReactNode` | — | Optional helper text displayed between label and control |\n| `feedback` | `ReactNode` | — | Feedback text displayed below the control |\n| `required` | `boolean` | `false` | Shows a required marker next to the label |\n| `disabled` | `boolean` | `false` | Disables user interaction |\n| `prefix` | `ReactNode` | — | Leading slot inside the control |\n| `suffix` | `ReactNode` | — | Trailing slot inside the control |\n| `prefixCls` | `string` | `'input'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes on the shell root |\n\n## `Input` Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Controlled value |\n| `defaultValue` | `string` | `''` | Uncontrolled initial value |\n| `placeholder` | `string` | — | Native input placeholder |\n| `allowClear` | `boolean` | `false` | Shows a clear action when the field has a value |\n| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |\n\n## `Input.Password` Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `visibilityToggle` | `boolean` | `true` | Shows the visibility toggle action |\n| `visibleIcon` | `ReactNode` | `Icons eyeClose` | Icon shown when the password is visible |\n| `hiddenIcon` | `ReactNode` | `Icons eyeOn` | Icon shown when the password is hidden |\n\n## `Input.Search` Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `loading` | `boolean` | `false` | Disables the action and swaps the icon for loading text |\n| `searchButton` | `boolean \\| ReactNode` | `true` | Shows the trailing search action or renders custom action content |\n| `searchTrigger` | `'enter' \\| 'button' \\| 'both'` | `'both'` | Controls whether Enter, the button, or both can trigger search |\n| `onSearch` | `(value: string) => void` | — | Called when a search is triggered |\n\n## `Input.TextArea` Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Controlled value |\n| `defaultValue` | `string` | `''` | Uncontrolled initial value |\n| `rows` | `number` | `4` | Visible row count |\n| `autoSize` | `boolean \\| { minRows?: number; maxRows?: number }` | — | Reserved for future autosize behavior |\n| `showCount` | `boolean` | `false` | Displays the current character count |\n| `maxLength` | `number` | — | Limits the value and drives the count display |\n| `onChange` | `(value: string, event: ChangeEvent<HTMLTextAreaElement>) => void` | — | Called with the next value and the native change event |\n\n## `Input.OTP` Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Controlled OTP value |\n| `defaultValue` | `string` | `''` | Uncontrolled initial OTP value |\n| `length` | `number` | `6` | Number of OTP cells |\n| `autoFocus` | `boolean` | `false` | Focuses the first cell on mount |\n| `mask` | `boolean` | `false` | Renders each cell as a password input |\n| `formatter` | `(value: string) => string` | — | Transforms the aggregated value before it is stored |\n| `onChange` | `(value: string) => void` | — | Called whenever the OTP value changes |\n| `onComplete` | `(value: string) => void` | — | Called when all cells are filled |\n",oe="# Link\n\nInline text hyperlink with three color variants and two sizes. Wraps a native `<a>` element and applies the `link` typography scale (underlined).\n\n## Import\n\n```tsx\nimport { Link } from '@1money/component-ui';\n// or\nimport { Link } from '@1money/component-ui/Link';\n```\n\n## Usage\n\n```tsx\n<Link href=\"https://1money.com\" color=\"primary\" size=\"large\">\n  Visit 1Money\n</Link>\n```\n\nDisabled:\n\n```tsx\n<Link disabled>Read more</Link>\n```\n\nExternal (auto `rel=\"noopener noreferrer\"` when `target=\"_blank\"`):\n\n```tsx\n<Link href=\"https://docs.1money.com\" target=\"_blank\">\n  Documentation\n</Link>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `color` | `'primary' \\| 'black' \\| 'grey'` | `'primary'` | Visual color variant |\n| `size` | `'large' \\| 'small'` | `'large'` | Typography size (large = 14px, small = 12px) |\n| `disabled` | `boolean` | `false` | Disables navigation, click, and focus |\n| `href` | `string` | — | Target URL |\n| `target` | `'_blank' \\| '_self' \\| ...` | — | Anchor target |\n| `rel` | `string` | auto `'noopener noreferrer'` when `target=\"_blank\"` | Anchor rel attribute |\n| `onClick` | `(e: MouseEvent) => void` | — | Click handler (suppressed when disabled) |\n| `prefixCls` | `string` | `'link'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n",ae="# Navigation\n\nVertical sidebar navigation component with support for collapsible menus, sub-menus, icons, and active/disabled states.\n\n## Import\n\n```tsx\nimport { Navigation } from '@1money/components-ui';\n// or\nimport { Navigation } from '@1money/components-ui/Navigation';\n```\n\n## Usage\n\n```tsx\n<Navigation\n  items={[\n    { key: 'home', label: 'Home', icon: 'home', active: true },\n    { key: 'portfolio', label: 'Portfolio', icon: 'portfolio' },\n    { key: 'transactions', label: 'Transactions', icon: 'transactions', children: [\n      { key: 'deposits', label: 'Deposits' },\n      { key: 'withdrawals', label: 'Withdrawals' },\n    ]},\n  ]}\n  collapsible\n  onCollapse={(collapsed) => console.log(collapsed)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `items` | `NavigationItem[]` | — | Navigation menu items |\n| `collapsed` | `boolean` | — | Controlled collapsed state |\n| `defaultCollapsed` | `boolean` | `false` | Default collapsed state (uncontrolled) |\n| `collapsible` | `boolean` | `false` | Whether collapse toggle is shown |\n| `onCollapse` | `(collapsed: boolean) => void` | — | Callback when collapsed state changes |\n| `header` | `ReactNode` | — | Header content (e.g., logo) |\n| `footer` | `ReactNode` | — | Footer content |\n| `width` | `number \\| string` | `280` | Width when expanded |\n| `collapsedWidth` | `number \\| string` | `80` | Width when collapsed |\n| `prefixCls` | `string` | `'navigation'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n## NavigationItem\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `key` | `string` | — | Unique key |\n| `label` | `ReactNode` | — | Display label |\n| `icon` | `IconName` | — | Icon name from Icons component |\n| `suffix` | `ReactNode` | — | Content after label |\n| `active` | `boolean` | `false` | Active state |\n| `disabled` | `boolean` | `false` | Disabled state |\n| `onClick` | `(e, item) => void` | — | Click handler |\n| `children` | `NavigationItem[]` | — | Sub-menu items |\n| `defaultOpen` | `boolean` | `false` | Whether sub-menu is open by default |\n",ie=`# Notification

Notification exposes a static \`notification\` API for globally mounted status messages.
Use \`notification.open(...)\` or the status shorthands instead of rendering a \`Notification\`
component directly.
The notification surface uses the Figma \`Drop Shadow(Beta)/200\` shadow treatment.

## Import

\`\`\`tsx
import { notification } from '@1money/components-ui';
// or
import notification from '@1money/components-ui/Notification';
\`\`\`

## Quick Start

\`\`\`tsx
import { Button, notification } from '@1money/components-ui';

export default function Example() {
  return (
    <Button
      onClick={() => {
        notification.success({
          title: 'Account linked',
          body: 'Your bank account has been successfully connected.',
        });
      }}
    >
      Show notification
    </Button>
  );
}
\`\`\`

## API Overview

| Method | Typical use |
|------|------|
| \`notification.open(config)\` | Full control over status and config |
| \`notification.info(config)\` | Informational message |
| \`notification.success(config)\` | Success feedback |
| \`notification.warning(config)\` | Warning or risky action reminder |
| \`notification.error(config)\` | Error feedback |
| \`notification.destroy(key?)\` | Close one notification or clear all |
| \`notification.config(config)\` | Set global defaults |

## Usage Recipes

### \`notification.open\`

\`\`\`tsx
notification.open({
  status: 'success',
  title: 'Account linked',
  body: 'Your bank account has been successfully connected.',
  placement: 'topRight',
});
\`\`\`

### \`notification.info\`

\`\`\`tsx
notification.info({
  title: 'New feature',
  body: 'You can now link multiple accounts.',
});
\`\`\`

### \`notification.success\`

\`\`\`tsx
notification.success({
  title: 'Sync complete',
  body: 'Your balances are up to date.',
});
\`\`\`

### \`notification.warning\`

\`\`\`tsx
notification.warning({
  title: 'Review before submitting',
  body: 'Changing settlement settings affects all future transfers.',
  duration: 0,
});
\`\`\`

### \`notification.error\`

\`\`\`tsx
notification.error({
  title: 'Transfer failed',
  body: 'We could not complete the transfer. Please try again.',
});
\`\`\`

### Action Link Button

Use \`link.onClick\` without \`href\` when the notification should trigger an in-app action.

\`\`\`tsx
notification.open({
  title: 'Help center',
  body: 'Documentation has moved to a new location.',
  link: {
    label: 'Open guide',
    onClick: () => {
      console.log('open guide');
    },
  },
});
\`\`\`

### Href Link

Use \`href\` when the action should render as a normal anchor.

\`\`\`tsx
notification.open({
  title: 'Help center',
  body: 'Documentation has moved to a new location.',
  link: {
    label: 'Open docs',
    href: 'https://example.com/docs',
    target: '_blank',
  },
});
\`\`\`

### Custom Icon

\`\`\`tsx
import { Icons } from '@1money/components-ui';

notification.open({
  title: 'Manual review',
  body: 'This payout is being reviewed by an operator.',
  icon: <Icons name="notificationWarning" size={32} />,
});
\`\`\`

### Hide Icon Or Close Button

\`\`\`tsx
notification.open({
  title: 'Background sync',
  body: 'This message uses custom chrome.',
  showIcon: false,
  closable: false,
});
\`\`\`

### Persistent Notification

Set \`duration: 0\` to keep the notification open until it is updated or destroyed.

\`\`\`tsx
notification.open({
  key: 'sync',
  title: 'Sync in progress',
  body: 'We are updating your balances.',
  duration: 0,
});
\`\`\`

### Update Existing Notification

Reuse the same \`key\` to replace an existing notification in place.

\`\`\`tsx
notification.open({
  key: 'sync',
  title: 'Sync in progress',
  body: 'We are updating your balances.',
  duration: 0,
});

notification.success({
  key: 'sync',
  title: 'Sync complete',
  body: 'Your balances are up to date.',
});
\`\`\`

### Capture The Returned Key

If you do not provide a \`key\`, \`notification.open\` returns one for later updates or removal.

\`\`\`tsx
const notificationKey = notification.open({
  title: 'Processing',
  body: 'Your request is being handled.',
  duration: 0,
});

notification.success({
  key: notificationKey,
  title: 'Finished',
  body: 'The request completed successfully.',
});
\`\`\`

### Destroy By Key

\`\`\`tsx
notification.open({
  key: 'draft-save',
  title: 'Draft saved',
  body: 'This message will be dismissed manually.',
  duration: 0,
});

notification.destroy('draft-save');
\`\`\`

### Destroy All

\`\`\`tsx
notification.destroy();
\`\`\`

### \`onClose\` Callback

\`onClose\` runs after the notification is fully removed.

\`\`\`tsx
notification.open({
  title: 'Profile updated',
  body: 'Your changes have been saved.',
  onClose: () => {
    console.log('notification removed');
  },
});
\`\`\`

### Global Defaults

\`\`\`tsx
notification.config({
  placement: 'bottomRight',
  duration: 6,
  maxCount: 3,
});
\`\`\`

### Per-call Override Global Defaults

\`\`\`tsx
notification.config({
  placement: 'bottomRight',
  duration: 6,
});

notification.open({
  title: 'Uses global defaults',
});

notification.open({
  title: 'Overrides placement',
  placement: 'topLeft',
  duration: 0,
});
\`\`\`

## Open Config

| Field | Type | Default | Description |
|------|------|---------|-------------|
| \`key\` | \`string \\| number\` | auto-generated | Unique identifier used to update or destroy an existing notification |
| \`status\` | \`'info' \\| 'success' \\| 'warning' \\| 'error'\` | \`'info'\` | Status variant controlling icon and icon-background color |
| \`title\` | \`ReactNode\` | — | Title text displayed in bold |
| \`body\` | \`ReactNode\` | — | Body text displayed below the title |
| \`link\` | \`{ label: string; href?: string; target?: HTMLAttributeAnchorTarget; rel?: string; onClick?: MouseEventHandler<HTMLElement> }\` | — | Optional action. Renders as an anchor when \`href\` is provided, otherwise as a button |
| \`icon\` | \`ReactNode\` | — | Custom icon element overriding the default status icon |
| \`showIcon\` | \`boolean\` | \`true\` | Whether to show the status icon |
| \`closable\` | \`boolean\` | \`true\` | Whether to show the close button |
| \`placement\` | \`'topLeft' \\| 'topRight' \\| 'bottomLeft' \\| 'bottomRight'\` | \`'topRight'\` | Screen placement for the notification container |
| \`duration\` | \`number\` | \`4.5\` | Auto-close timeout in seconds. Use \`0\` to keep the notification open |
| \`onClose\` | \`() => void\` | — | Callback fired after the notification is removed |

## Global Config

| Field | Type | Default | Description |
|------|------|---------|-------------|
| \`placement\` | \`'topLeft' \\| 'topRight' \\| 'bottomLeft' \\| 'bottomRight'\` | \`'topRight'\` | Default screen placement for new notifications |
| \`duration\` | \`number\` | \`4.5\` | Default auto-close timeout in seconds |
| \`maxCount\` | \`number\` | \`Infinity\` | Maximum number of visible notifications per placement |

## Static Methods

- \`notification.open(config)\`
- \`notification.info(config)\`
- \`notification.success(config)\`
- \`notification.warning(config)\`
- \`notification.error(config)\`
- \`notification.destroy(key?)\`
- \`notification.config({ placement, duration, maxCount })\`
`,se="# Popconfirm\n\nPopconfirm is a semantic confirmation overlay built on top of `Trigger`. It presents a compact title/body layout with two actions and a placement-aware beak arrow.\n\n## Import\n\n```tsx\nimport { Popconfirm } from '@1money/components-ui';\nimport '@1money/components-ui/index.css';\n```\n\n## Basic Usage\n\n```tsx\n<Popconfirm\n  title=\"Delete transfer rule?\"\n  body=\"This action removes the rule immediately and cannot be undone.\"\n  cancelText=\"Keep rule\"\n  confirmText=\"Delete\"\n  onConfirm={() => {\n    // perform delete\n  }}\n>\n  <Button color=\"danger\">Delete rule</Button>\n</Popconfirm>\n```\n\n## Props\n\n| Name | Type | Default | Description |\n| --- | --- | --- | --- |\n| `title` | `ReactNode` | `undefined` | Heading shown at the top of the floating card. |\n| `body` | `ReactNode` | `undefined` | Secondary description shown below the title. |\n| `icon` | `IconName` | `'notificationInfo'` | Icon rendered beside the text content. |\n| `showIcon` | `boolean` | `true` | Toggles the leading icon. |\n| `showArrow` | `boolean` | `true` | Toggles the custom beak arrow. |\n| `cancelText` | `ReactNode` | `'Cancel'` | Label for the secondary action. |\n| `confirmText` | `ReactNode` | `'Confirm'` | Label for the primary action. |\n| `cancelButtonProps` | `Omit<ButtonProps, 'children'>` | `undefined` | Additional props merged onto the secondary button. |\n| `confirmButtonProps` | `Omit<ButtonProps, 'children'>` | `undefined` | Additional props merged onto the primary button. |\n| `closeOnCancel` | `boolean` | `true` | Closes the panel automatically after the secondary action unless prevented. |\n| `closeOnConfirm` | `boolean` | `true` | Closes the panel automatically after the primary action unless prevented. |\n| `onCancel` | `(event, context) => void` | `undefined` | Called when the secondary action is clicked. Call `event.preventDefault()` to keep the panel open. |\n| `onConfirm` | `(event, context) => void` | `undefined` | Called when the primary action is clicked. Call `event.preventDefault()` to keep the panel open. |\n| `trigger` | `TriggerAction \\| TriggerAction[]` | `'click'` | Trigger mode forwarded to `Trigger`. |\n| `placement` | `Placement` | `'top'` | Floating placement forwarded to `Trigger`. |\n| `offset` | `number` | `8` | Distance between the trigger anchor and the floating card. |\n",re=`# Progress

Linear progress indicator for continuous percentage progress with semantic status styling.
`,le=`# Radio

A radio button component built on native \`input[type="radio"]\` with the 1Money design system. It supports standalone controlled and uncontrolled usage, label with description, configurable alignment, and grouped selection management via \`RadioGroup\`.

## Import

\`\`\`tsx
import { Radio, RadioGroup } from '@1money/components-ui';
// or tree-shakeable
import { Radio, RadioGroup } from '@1money/components-ui/Radio';
\`\`\`

## Radio Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`value\` | \`string \\| number\` | — | Value that identifies this radio within a \`RadioGroup\` |
| \`checked\` | \`boolean\` | — | Whether the radio is checked in controlled standalone usage |
| \`defaultChecked\` | \`boolean\` | \`false\` | Default checked state in uncontrolled standalone usage |
| \`disabled\` | \`boolean\` | \`false\` | Disables the radio |
| \`label\` | \`ReactNode\` | — | Label text displayed next to the radio |
| \`description\` | \`ReactNode\` | — | Description text displayed below the label |
| \`variant\` | \`'default' \\| 'cell'\` | \`'default'\` | Visual variant |
| \`size\` | \`'large' \\| 'medium' \\| 'small'\` | \`'large'\` | Visual size for the \`cell\` variant |
| \`alignment\` | \`'left' \\| 'center'\` | \`'left'\` | Alignment for the \`cell\` variant (\`left\` for horizontal, \`center\` for vertical) |
| \`labelPlacement\` | \`'left' \\| 'right'\` | \`'left'\` | Placement of the label relative to the radio dot for the default variant |
| \`icon\` | \`IconName \\| ReactNode\` | — | Optional icon for the \`cell\` variant |
| \`tag\` | \`string\` | — | Optional tag label for the \`cell\` variant |
| \`onChange\` | \`(event: RadioChangeEvent) => void\` | — | Callback when checked state changes |
| \`prefixCls\` | \`string\` | \`'radio'\` | CSS class prefix |
| \`className\` | \`string\` | \`''\` | Additional CSS classes applied to the root label |
| \`style\` | \`CSSProperties\` | — | Inline style applied to the root label |
| \`ref\` | \`RefObject<HTMLLabelElement \\| null>\` | — | Ref forwarded to the root label element |

All additional native radio input props are spread onto the underlying \`input[type="radio"]\`.

## RadioGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`value\` | \`string \\| number\` | — | Currently selected value in controlled mode |
| \`defaultValue\` | \`string \\| number\` | — | Default selected value in uncontrolled mode |
| \`id\` | \`string\` | — | HTML id attribute for the root radiogroup container |
| \`name\` | \`string\` | — | HTML name attribute shared by radios in the group |
| \`disabled\` | \`boolean\` | \`false\` | Disables all radios in the group |
| \`direction\` | \`'vertical' \\| 'horizontal'\` | \`'horizontal'\` | Direction of the group |
| \`layout\` | \`'vertical' \\| 'horizontal'\` | — | Deprecated alias for \`direction\` |
| \`variant\` | \`'default' \\| 'cell'\` | \`'default'\` | Visual variant inherited by child radios |
| \`size\` | \`'large' \\| 'medium' \\| 'small'\` | \`'large'\` | Visual size inherited by child radios |
| \`alignment\` | \`'left' \\| 'center'\` | \`'left'\` | Alignment inherited by cell-variant child radios (\`left\` / \`center\`) |
| \`labelPlacement\` | \`'left' \\| 'right'\` | — | Label placement inherited by default-variant child radios |
| \`gap\` | \`number \\| string\` | — | Gap between radio items |
| \`title\` | \`string\` | — | Title attribute for the root radiogroup container |
| \`aria-label\` | \`string\` | — | Accessible label for the group |
| \`aria-labelledby\` | \`string\` | — | Accessible labelled-by reference for the group |
| \`options\` | \`RadioOptionItem[]\` | — | Quick-render mode: array of radio options |
| \`children\` | \`ReactNode\` | — | Custom \`Radio\` children, which take precedence over \`options\` |
| \`onChange\` | \`(event: RadioChangeEvent) => void\` | — | Callback when the selected value changes |
| \`prefixCls\` | \`string\` | \`'radio-group'\` | CSS class prefix |
| \`className\` | \`string\` | \`''\` | Additional CSS classes applied to the root container |
| \`ref\` | \`RefObject<HTMLDivElement \\| null>\` | — | Ref forwarded to the root container |

### RadioOptionItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`value\` | \`string \\| number\` | (required) | Value that identifies this option |
| \`id\` | \`string\` | — | HTML id attribute for the underlying radio input |
| \`label\` | \`ReactNode\` | — | Label text displayed next to the radio |
| \`description\` | \`ReactNode\` | — | Description text displayed below the label |
| \`variant\` | \`'default' \\| 'cell'\` | — | Per-option visual variant override |
| \`size\` | \`'large' \\| 'medium' \\| 'small'\` | — | Per-option size override |
| \`alignment\` | \`'left' \\| 'center'\` | — | Per-option alignment override for cell variant (\`left\` / \`center\`) |
| \`labelPlacement\` | \`'left' \\| 'right'\` | — | Per-option label placement override for default variant |
| \`icon\` | \`IconName \\| ReactNode\` | — | Optional icon for the \`cell\` variant |
| \`tag\` | \`string\` | — | Optional tag label for the \`cell\` variant |
| \`disabled\` | \`boolean\` | — | Whether this specific option is disabled |
| \`required\` | \`boolean\` | — | Whether this specific option is required |
| \`title\` | \`string\` | — | Title attribute for the underlying radio input |

## Event Shape

\`\`\`tsx
type RadioChangeEvent = {
  nativeEvent: Event;
  preventDefault: () => void;
  stopPropagation: () => void;
  target: {
    checked: boolean;
    disabled: boolean;
    id?: string;
    name?: string;
    type: 'radio';
    value?: string | number;
  };
};
\`\`\`

## Basic Usage

\`\`\`tsx
<Radio
  label="Accept terms"
  checked={isChecked}
  onChange={(event) => setIsChecked(event.target.checked)}
/>
\`\`\`

## RadioGroup With Children

\`\`\`tsx
const [selected, setSelected] = useState<string | number>('a');

<RadioGroup
  value={selected}
  onChange={(event) => {
    if (event.target.value !== undefined) {
      setSelected(event.target.value);
    }
  }}
>
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
  <Radio value="c" label="Option C" />
</RadioGroup>
\`\`\`

## RadioGroup With Options

\`\`\`tsx
const [selected, setSelected] = useState<string | number>('email');

<RadioGroup
  value={selected}
  onChange={(event) => {
    if (event.target.value !== undefined) {
      setSelected(event.target.value);
    }
  }}
  options={[
    { value: 'email', label: 'Email', description: 'Receive via email' },
    { value: 'sms', label: 'SMS', description: 'Receive via text message' },
    { value: 'push', label: 'Push', description: 'Receive on your device' },
  ]}
/>
\`\`\`

## Label Placement and Direction

\`\`\`tsx
{/* Default variant uses labelPlacement */}
<Radio label="Dot on left, label on right" labelPlacement="left" />
<Radio label="Dot on right, label on left" labelPlacement="right" />

{/* Cell variant uses alignment */}
<Radio variant="cell" alignment="left" icon="swift" label="Horizontal" />
<Radio variant="cell" alignment="center" icon="swift" label="Vertical" />

<RadioGroup direction="horizontal" value={selected} onChange={handleChange}>
  <Radio value="sm" label="Small" />
  <Radio value="md" label="Medium" />
  <Radio value="lg" label="Large" />
</RadioGroup>
\`\`\`

For \`RadioGroup\`, use \`direction="vertical" | "horizontal"\` to control the group direction. \`layout\` remains as a deprecated alias. Use \`labelPlacement="left" | "right"\` for default radios, and \`alignment="left" | "center"\` for \`cell\` radios. The \`alignment\` prop on default radios is still supported for backward compatibility but \`labelPlacement\` is preferred.

## Cell Variant

\`\`\`tsx
<Radio
  checked
  variant="cell"
  size="large"
  alignment="center"
  icon="language"
  tag="Popular"
  label="Global account"
  description="International settlement"
/>

<RadioGroup
  value={selected}
  variant="cell"
  size="large"
  alignment="left"
  direction="horizontal"
  onChange={handleChange}
  options={[
    { value: 'swift', label: 'SWIFT', description: 'Receive via bank rails' },
    {
      value: 'global',
      label: 'Global account',
      description: 'International settlement',
      icon: 'language',
    },
  ]}
/>
\`\`\`

## Controlled and Uncontrolled

\`\`\`tsx
// Standalone controlled
<Radio
  label="Controlled"
  checked={value}
  onChange={(event) => setValue(event.target.checked)}
/>

// Standalone uncontrolled
<Radio label="Uncontrolled" defaultChecked />

// Group controlled
<RadioGroup value={selected} onChange={handleChange}>
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>

// Group uncontrolled
<RadioGroup defaultValue="a">
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>
\`\`\`
`,ce="# Segment\n\nA segmented control component for switching between mutually exclusive options. Displays options as a horizontal pill group with a sliding active indicator.\n\n## Import\n\n```tsx\nimport { Segment } from '@1money/components-ui';\n// or\nimport { Segment } from '@1money/components-ui/Segment';\n```\n\n## Usage\n\n```tsx\n<Segment\n  defaultValue=\"overview\"\n  items={[\n    { value: 'overview', label: 'Overview' },\n    { value: 'transactions', label: 'Transactions' },\n    { value: 'analytics', label: 'Analytics' },\n  ]}\n  onChange={(value) => console.log('Selected:', value)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `items` | `SegmentItem[]` | — | Segment options (required) |\n| `value` | `string` | — | Selected value (controlled mode) |\n| `defaultValue` | `string` | First item value | Default selected value (uncontrolled mode) |\n| `onChange` | `(value: string) => void` | — | Callback when selection changes |\n| `prefixCls` | `string` | `'segment'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n### SegmentItem\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Unique value (required) |\n| `label` | `ReactNode` | — | Display label |\n| `disabled` | `boolean` | `false` | Whether the option is disabled |\n",de=`# Skeleton

A placeholder component that displays a shimmer animation before content is loaded. Use it to reduce perceived loading time and prevent layout shift.

## Import

\`\`\`tsx
import { Skeleton } from '@1money/components-ui';
// or
import { Skeleton } from '@1money/components-ui/Skeleton';
\`\`\`

## Usage

\`\`\`tsx
// Rectangle (default)
<Skeleton />
<Skeleton width="10rem" />
<Skeleton width="10rem" height="4rem" />

// Rounded
<Skeleton borderRadius="16px" />

// Square
<Skeleton size="3rem" />

// Circle
<Skeleton shape="circle" size="4rem" />

// No animation
<Skeleton animation="none" />
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`shape\` | \`'rectangle' \\| 'circle'\` | \`'rectangle'\` | Shape of the skeleton |
| \`size\` | \`CSSProperties['width']\` | - | Shorthand to set both width and height |
| \`animation\` | \`'wave' \\| 'none'\` | \`'wave'\` | Animation type |
| \`width\` | \`CSSProperties['width']\` | \`'100%'\` | Width (ignored when \`size\` is set) |
| \`height\` | \`CSSProperties['height']\` | \`'1rem'\` | Height (ignored when \`size\` is set) |
| \`borderRadius\` | \`CSSProperties['borderRadius']\` | - | Border radius override |
| \`prefixCls\` | \`string\` | \`'skeleton'\` | CSS class prefix |
| \`className\` | \`string\` | \`''\` | Additional CSS classes |
`,pe="# Slider\n\nA slider input component for selecting a numeric value within a range. Displays an optional label with value output and description text.\n\n## Import\n\n```tsx\nimport { Slider } from '@1money/components-ui';\n// or\nimport { Slider } from '@1money/components-ui/Slider';\n```\n\n## Usage\n\n```tsx\n<Slider\n  label=\"Price\"\n  description=\"Set your budget\"\n  valuePrefix=\"$\"\n  defaultValue={40}\n  min={0}\n  max={100}\n  onChange={(value) => console.log(value)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `number` | — | Current value (controlled) |\n| `defaultValue` | `number` | `min` | Default value (uncontrolled) |\n| `min` | `number` | `0` | Minimum value |\n| `max` | `number` | `100` | Maximum value |\n| `step` | `number` | `1` | Step increment |\n| `disabled` | `boolean` | `false` | Disables the slider |\n| `label` | `ReactNode` | — | Label displayed above the slider |\n| `description` | `ReactNode` | — | Description displayed below the slider |\n| `showLabel` | `boolean` | `true` | Whether to show the label row |\n| `showDescription` | `boolean` | `true` | Whether to show the description |\n| `valuePrefix` | `string` | `''` | Prefix string for the output value (e.g., \"$\") |\n| `formatValue` | `(value, min, max) => string` | — | Custom formatter for the value display |\n| `onChange` | `(value: number) => void` | — | Callback when value changes |\n| `onChangeEnd` | `(value: number) => void` | — | Callback when user finishes dragging |\n| `prefixCls` | `string` | `'slider'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n",me=`# Space

A layout helper component. It wraps each child and applies consistent spacing, optional alignment, wrapping, and split separators.

## Features

- Horizontal or vertical spacing
- Preset or custom gap sizes (4px grid)
- Align control for items
- Optional wrap for horizontal layouts
- Optional split between items

## Import

\`\`\`tsx
import { Space } from '@1money/components-ui';
// or
import { Space } from '@1money/components-ui/Space';
import { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from '@1money/components-ui/Space';
\`\`\`

## Basic Usage

\`\`\`tsx
import { Space } from '@1money/components-ui';
import { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from '@1money/components-ui/Space';

<Space size={SPACE_SIZE.middle} align={SPACE_ALIGN.center}>
  <span>Left</span>
  <span>Right</span>
</Space>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`align\` | \`'start' \\| 'end' \\| 'center' \\| 'baseline'\` | — | Align items |
| \`direction\` | \`'horizontal' \\| 'vertical'\` | \`'horizontal'\` | Spacing direction |
| \`size\` | \`'small' \\| 'middle' \\| 'large' \\| number \\| [SpaceSize, SpaceSize]\` | \`'small'\` | Gap size |
| \`split\` | \`ReactNode\` | — | Insert split element between items |
| \`wrap\` | \`boolean\` | \`false\` | Auto wrap when horizontal |
| \`prefixCls\` | \`string\` | \`'space'\` | CSS class prefix |

This component also accepts all standard HTML div attributes.

## Vertical Layout

\`\`\`tsx
<Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.large}>
  <div>Top</div>
  <div>Bottom</div>
</Space>
\`\`\`

## Split Example

\`\`\`tsx
<Space split={<span>|</span>} size={SPACE_SIZE.small}>
  <span>Alpha</span>
  <span>Beta</span>
  <span>Gamma</span>
</Space>
\`\`\`
`,ue=`# Spinner

A loading spinner component used to indicate loading states and provide visual feedback to users.

## Import

\`\`\`tsx
import { Spinner } from '@1money/components-ui';
// or
import { Spinner } from '@1money/components-ui/Spinner';
\`\`\`

## Usage

\`\`\`tsx
// Basic spinner
<Spinner />

// Custom size
<Spinner style={{ width: '20px', height: '20px' }} />

// Custom animation duration
<Spinner animationDuration="1s" />

// Custom stroke width
<Spinner strokeWidth="3" />

// Custom fill
<Spinner style={{ width: '60px', height: '60px' }} fill="#E8F5E8" />
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`prefixCls\` | \`string\` | \`'spinner'\` | CSS class prefix |

### Inherited Props

This component accepts these additional props:

| Prop | Type | Description |
|------|------|-------------|
| \`style\` | \`CSSProperties\` | Inline styles (use \`width\`/\`height\` to control size) |
| \`className\` | \`string\` | Additional CSS classes |
| \`strokeWidth\` | \`string\` | Width of the spinner stroke |
| \`fill\` | \`string\` | Fill color for the spinner background |
| \`animationDuration\` | \`string\` | Duration of the spin animation (default \`'2s'\`) |

## Examples

### Inline Loading

\`\`\`tsx
<button disabled={loading}>
  {loading ? (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Spinner style={{ width: '16px', height: '16px' }} />
      <span>Loading...</span>
    </div>
  ) : (
    'Submit'
  )}
</button>
\`\`\`

### Page Loading Overlay

\`\`\`tsx
const PageLoader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay">
      <Spinner
        style={{ width: '50px', height: '50px' }}
        strokeWidth="3"
      />
      <p>Loading your data...</p>
    </div>
  );
};
\`\`\`
`,he="# Switch\n\nA toggle switch component for binary on/off choices. Supports optional label and description text with configurable placement.\n\n## Import\n\n```tsx\nimport { Switch } from '@1money/components-ui';\n// or\nimport { Switch } from '@1money/components-ui/Switch';\n```\n\n## Usage\n\n```tsx\n<Switch label=\"Notifications\" onChange={(checked) => console.log(checked)} />\n\n<Switch\n  label=\"Dark Mode\"\n  description=\"Enable dark theme across the app\"\n  defaultChecked\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `checked` | `boolean` | — | Controlled checked state |\n| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled) |\n| `disabled` | `boolean` | `false` | Disables the switch |\n| `label` | `ReactNode` | — | Label text |\n| `description` | `ReactNode` | — | Description text below the label |\n| `labelPlacement` | `'left' \\| 'right'` | `'left'` | Label position relative to switch |\n| `onChange` | `(checked: boolean) => void` | — | Callback on state change |\n| `prefixCls` | `string` | `'switch'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n",ge=`# Table

## What it is

- \`Table\` is the standard table component.
- \`VirtualTable\` is the virtualized variant with numeric \`scroll.x\` and \`scroll.y\`.

## Basic Usage

\`\`\`tsx
<Table rowKey="id" columns={columns} dataSource={rows} />
\`\`\`

## Figma-aligned Expandable Example

Use \`expandable.showExpandColumn={false}\` when the expand trigger should live inside your own business cell, instead of the default leading expand column.

\`\`\`tsx
function WalletRegistryTable() {
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>(['wallet-ops']);

  return (
    <Table
      rowKey="id"
      size="small"
      variant="stroke"
      pagination={false}
      columns={[
        {
          key: 'walletName',
          title: 'Wallet name',
          render: (_value, record) => (
            <button
              type="button"
              onClick={() => {
                setExpandedRowKeys((current) => (
                  current.includes(record.id)
                    ? current.filter((key) => key !== record.id)
                    : [...current, record.id]
                ));
              }}
            >
              {record.walletName}
            </button>
          ),
        },
        {
          key: 'walletSummary',
          dataIndex: 'walletSummary',
          title: 'Wallet address',
        },
        {
          key: 'actions',
          title: 'Actions',
          align: 'right',
          render: () => '...',
        },
      ]}
      dataSource={rows}
      expandable={{
        showExpandColumn: false,
        expandedRowKeys,
        expandedRowRender: (record) => <WalletDetails record={record} />,
      }}
    />
  );
}
\`\`\`

## Virtual Usage

\`\`\`tsx
<VirtualTable
  rowKey="id"
  columns={columns}
  dataSource={rows}
  scroll={{ x: 1200, y: 360 }}
/>
\`\`\`

## Migration Notes

- This component does not accept the old PrimeReact \`value\` prop.
- Use \`dataSource\` instead.
- \`VirtualTable\` is a separate export, not \`virtual={true}\` on \`Table\`.
- \`expandable.showExpandColumn={false}\` hides the built-in expand column so you can render a custom trigger in your own cell.
`,fe="# Tabs\n\nA horizontal tab navigation component for switching between content sections.\n\n## Import\n\n```tsx\nimport { Tabs } from '@1money/components-ui';\n// or\nimport { Tabs } from '@1money/components-ui/Tabs';\n```\n\n## Usage\n\n```tsx\n<Tabs\n  defaultActiveKey=\"tab1\"\n  items={[\n    { key: 'tab1', label: 'Overview', badge: 5 },\n    { key: 'tab2', label: 'Transactions' },\n    { key: 'tab3', label: 'Analytics', disabled: true },\n  ]}\n  onChange={(key) => console.log('Active tab:', key)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `items` | `TabItem[]` | — | Tab items configuration (required) |\n| `activeKey` | `string` | — | Active tab key (controlled mode) |\n| `defaultActiveKey` | `string` | First item key | Default active tab key (uncontrolled mode) |\n| `onChange` | `(key: string) => void` | — | Callback when active tab changes |\n| `prefixCls` | `string` | `'tabs'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n### TabItem\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `key` | `string` | — | Unique identifier (required) |\n| `label` | `ReactNode` | — | Tab header label |\n| `badge` | `number` | — | Badge number next to the label |\n| `disabled` | `boolean` | `false` | Whether the tab is disabled |\n| `children` | `ReactNode` | — | Tab panel content |\n",be="# Tag\n\nA compact pill-shaped label used to categorize, filter, or indicate status. Supports multiple color variants, three sizes, an optional leading icon, and an optional remove button.\n\n## Import\n\n```tsx\nimport { Tag } from '@1money/components-ui';\n// or\nimport { Tag } from '@1money/components-ui/Tag';\n```\n\n## Usage\n\n```tsx\n<Tag label=\"Active\" color=\"success\" />\n<Tag label=\"Warning\" color=\"warning\" icon=\"add\" removable onRemove={() => {}} />\n<Tag label=\"Medium\" size=\"medium\" color=\"recommended\" />\n<Tag label=\"Small\" size=\"small\" color=\"negative\" />\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `label` | `string` | — | Tag label text (optional) |\n| `color` | `'neutral' \\| 'warning' \\| 'negative' \\| 'success' \\| 'recommended' \\| 'black'` | `'neutral'` | Color variant |\n| `size` | `'large' \\| 'medium' \\| 'small'` | `'large'` | Size variant |\n| `icon` | `IconName` | — | Leading icon name from the Icons component |\n| `removable` | `boolean` | `false` | Shows a remove button |\n| `onRemove` | `(e: MouseEvent<HTMLSpanElement>) => void` | — | Callback when remove button is clicked |\n| `ref` | `RefObject<HTMLSpanElement \\| null>` | — | Ref to the root span element |\n| `prefixCls` | `string` | `'tag'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\nThis component also accepts all standard HTML span attributes (except `color`).\n",ye="# Tooltip\n\nA dark tooltip component built on top of [react-tooltip](https://react-tooltip.com/) with the 1Money design system tokens. Supports 12 placement variants, optional title/body content, controlled/uncontrolled open state, and configurable trigger behavior.\n\n## Import\n\n```tsx\nimport { Tooltip } from '@1money/components-ui';\n// or\nimport { Tooltip } from '@1money/components-ui/Tooltip';\n```\n\n## Usage\n\n```tsx\n{/* Hover trigger (default) */}\n<button id=\"my-trigger\">Hover me</button>\n<Tooltip anchorSelect=\"#my-trigger\" body=\"Simple tooltip\" />\n\n{/* With title */}\n<button id=\"info-trigger\">Info</button>\n<Tooltip anchorSelect=\"#info-trigger\" title=\"Heading\" body=\"Detailed text\" placement=\"bottom\" />\n\n{/* Controlled */}\n<button id=\"ctrl-trigger\">Controlled</button>\n<Tooltip anchorSelect=\"#ctrl-trigger\" body=\"Controlled tooltip\" open={isOpen} onOpenChange={setIsOpen} />\n\n{/* Click trigger */}\n<button id=\"click-trigger\">Click me</button>\n<Tooltip\n  anchorSelect=\"#click-trigger\"\n  body=\"Click tooltip\"\n  openEvents={{ click: true, mouseover: false, mouseenter: false, focus: false }}\n  closeEvents={{ click: true, mouseleave: false, mouseout: false, blur: false }}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `placement` | `TooltipPlacement` | `'top'` | Arrow direction and alignment |\n| `title` | `ReactNode` | — | Bold title text |\n| `body` | `ReactNode` | — | Body text content |\n| `arrow` | `boolean` | `true` | Whether to show the arrow |\n| `open` | `boolean` | — | Whether the tooltip is open (controlled) |\n| `defaultOpen` | `boolean` | — | Default open state (uncontrolled) |\n| `onOpenChange` | `(open: boolean) => void` | — | Callback when the tooltip open state changes |\n| `anchorSelect` | `string` | — | CSS selector for the trigger element |\n| `prefixCls` | `string` | `'tooltip'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\nAll other props from [react-tooltip ITooltip](https://react-tooltip.com/docs/options) are also supported (e.g., `openEvents`, `closeEvents`, `offset`, `delayShow`, `delayHide`), except `place`, `noArrow`, `children`, `isOpen`, and `setIsOpen` which are remapped to the props above.\n\n### Placements\n\n`'top'` | `'top-start'` | `'top-end'` | `'bottom'` | `'bottom-start'` | `'bottom-end'` | `'left'` | `'left-start'` | `'left-end'` | `'right'` | `'right-start'` | `'right-end'`\n",ve="# Typography\n\nSemantic typography primitives aligned to the design token categories in `src/styles/tokens/typography`.\n\n## Import\n\n```tsx\nimport { Typography } from '@1money/components-ui';\n// or\nimport { Typography } from '@1money/components-ui/Typography';\n```\n\n## Usage\n\n```tsx\n<Typography.Display size=\"lg\">Account Overview</Typography.Display>\n\n<Typography.Headline size=\"md\">Settlement Timeline</Typography.Headline>\n\n<Typography.Title size=\"sm\" strong>\n  Customer Details\n</Typography.Title>\n\n<Typography.Body size=\"md\" as=\"p\">\n  Semantic body copy keeps product text aligned with the shared typography scale.\n</Typography.Body>\n\n<Typography.Body size=\"md\" ellipsis={{ tooltip: true }} copyable>\n  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d9c8b7a6f749f\n</Typography.Body>\n\n<Typography.Label size=\"sm\" htmlFor=\"email\">\n  Email\n</Typography.Label>\n\n<Typography.Link size=\"md\" href=\"https://ant.design/components/typography/\" target=\"_blank\">\n  Typography reference\n</Typography.Link>\n```\n\n## Components\n\n| Component | Sizes | Default tag | Supports `strong` |\n|------|------|---------|-------------|\n| `Typography.Display` | `'xl' \\| 'lg' \\| 'md' \\| 'sm' \\| 'xs'` | `div` | No |\n| `Typography.Headline` | `'lg' \\| 'md' \\| 'sm' \\| 'xs'` | `div` | No |\n| `Typography.Title` | `'lg' \\| 'md' \\| 'sm'` | `div` | Yes |\n| `Typography.Body` | `'lg' \\| 'md' \\| 'sm'` | `span` | Yes |\n| `Typography.Label` | `'xl' \\| 'lg' \\| 'md' \\| 'sm' \\| 'xs'` | `label` | Yes |\n| `Typography.Link` | `'md' \\| 'sm'` | `a` | No |\n\n## Shared Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `size` | category-specific union | — | Required size token for the selected semantic category |\n| `children` | `ReactNode` | — | Typography content |\n| `as` | category-specific tag union | category-specific tag | Override the rendered semantic tag for `Display`, `Headline`, `Title`, `Body`, and `Label` |\n| `prefixCls` | `string` | `'typography'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n| `italic` | `boolean` | `false` | Applies italic styling |\n| `underline` | `boolean` | `false` | Adds underline decoration |\n| `delete` | `boolean` | `false` | Adds line-through decoration |\n| `disabled` | `boolean` | `false` | Uses disabled text styling; `Typography.Link` also blocks interaction |\n| `ellipsis` | `boolean \\| TypographyEllipsisConfig` | `false` | Adaptive middle ellipsis — shows full text when it fits, truncates in the middle when it overflows |\n| `copyable` | `boolean \\| TypographyCopyableConfig` | `false` | Renders a copy icon next to the text; defaults to showing a success notification |\n\n`Typography.Title`, `Typography.Body`, and `Typography.Label` additionally support:\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `strong` | `boolean` | `false` | Uses the semantic strong weight defined in the typography tokens |\n\nSupported `as` values:\n\n- `Typography.Display`: `div | h1 | h2 | h3 | h4 | h5 | h6`\n- `Typography.Headline`: `div | h1 | h2 | h3 | h4 | h5 | h6`\n- `Typography.Title`: `div | h1 | h2 | h3 | h4 | h5 | h6`\n- `Typography.Body`: `span | p | div`\n- `Typography.Label`: `label | span | div`\n- `Typography.Link` does not expose `as`; it always renders as `a`\n\n## Ellipsis\n\nAdaptive middle ellipsis — automatically monitors container width via `ResizeObserver`. When the text fits, it displays in full; when it overflows, it truncates in the middle (e.g. `814f0d3a...749f`).\n\n```tsx\n// Default: start=8, end=4\n<Typography.Body size=\"md\" ellipsis>\n  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f\n</Typography.Body>\n// Fits → 0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f\n// Overflows → 0x814f0d...749f\n\n// Custom character counts\n<Typography.Body size=\"md\" ellipsis={{ start: 6, end: 6 }}>\n  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f\n</Typography.Body>\n// Overflows → 0x814f...0d749f\n\n// With tooltip showing full text on hover\n<Typography.Body size=\"md\" ellipsis={{ tooltip: true }}>\n  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f\n</Typography.Body>\n```\n\n| Option | Type | Default | Description |\n|--------|------|---------|-------------|\n| `start` | `number` | `8` | Characters to keep at the start |\n| `end` | `number` | `4` | Characters to keep at the end |\n| `tooltip` | `boolean \\| TooltipProps` | `false` | Show full text in a tooltip when truncated |\n\n- Tooltip is only mounted when the text is actually truncated\n- `tooltip={TooltipProps}` lets you control placement, arrow, delays, and other tooltip options\n- Copy always uses the original full text, not the truncated display\n\n## Copyable\n\n`copyable={true}` adds a copy icon next to the text using the `Copy` component. On success, a `notification.success` toast is shown by default.\n\n```tsx\n<Typography.Link\n  size=\"md\"\n  href=\"https://example.com/reference\"\n  copyable={{ text: 'https://example.com/reference' }}\n>\n  https://example.com/reference\n</Typography.Link>\n```\n\n- Copy defaults to the original full text content, not the visually truncated string\n- `copyable.text` overrides the copied value\n- `copyable.onCopy` overrides the default success notification with a custom callback\n",xe="# Upload\n\nA file upload component wrapping PrimeReact's FileUpload with custom styling. Includes an `UploadFileBar` sub-component for displaying uploaded file status.\n\n## Import\n\n```tsx\nimport { Upload, UploadFileBar } from '@1money/components-ui';\n// or\nimport { Upload, UploadFileBar } from '@1money/components-ui/Upload';\n```\n\n## Usage\n\n```tsx\n<Upload\n  mode=\"basic\"\n  chooseOptions={{ label: 'Upload file', icon: () => <></> }}\n  onUpload={(e) => console.log(e.files)}\n/>\n```\n\n### File Bar\n\n```tsx\n<UploadFileBar fileName=\"document.pdf\" />\n<UploadFileBar fileName=\"failed.pdf\" status={1} message=\"Upload failed\" onRemove={() => {}} />\n```\n\n## Upload Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `btnSize` | `'small' \\| 'medium' \\| 'large'` | `'medium'` | Button size variant |\n| `prefixCls` | `string` | `'upload'` | CSS class prefix |\n| `className` | `string` | — | Additional CSS classes |\n\nAll other props are forwarded to PrimeReact's `FileUpload` component.\n\n## UploadFileBar Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `fileName` | `string` | — | Name of the uploaded file |\n| `status` | `0 \\| 1` | `0` | File status (0 = success, 1 = error) |\n| `message` | `string` | — | Error/helper message |\n| `onRemove` | `() => void` | — | Remove button callback |\n| `prefixCls` | `string` | `'upload-file-bar'` | CSS class prefix |\n",we={Accordion:{whenToUse:["Use it when long-form content needs to stay collapsed by default and expand on demand.","Use it when multiple related sections share the same page but should not compete for vertical space.","Use it for FAQs, advanced settings, breakdown panels, and progressively disclosed help content."]},Alert:{whenToUse:["Use it for inline page-level feedback that should remain visible until the user acknowledges it or the state changes.","Use it when a form, workflow, or dashboard section needs contextual status messaging without opening an overlay.","Use it for warnings, errors, maintenance states, and informative reminders that sit inside layout content."]},Button:{whenToUse:["Use it for primary and secondary actions that trigger an immediate user operation.","Use it when an action needs clear emphasis, loading state, or icon affordances.","Use text buttons for lightweight inline actions and contained buttons for stronger decision points."]},Checkbox:{whenToUse:["Use it when users can independently turn options on or off.","Use it for consent, feature toggles inside forms, and non-exclusive multi-select inputs.","Use it when the checked state should be explicit and persist alongside labels or descriptions."]},CheckboxGroup:{whenToUse:["Use it when users need to select multiple options from the same option set.","Use it for preference pickers, permission sets, and grouped filter controls.","Use it when shared name, disabled state, or orientation should be applied consistently across related checkboxes."]},Drawer:{whenToUse:["Use it for secondary workflows that should slide over the current page without full navigation.","Use it when editing, inspecting, or confirming information while preserving the user’s existing context.","Use it for side panels, detail inspectors, and task flows that benefit from extra space but should not block the entire screen like a modal."]},Dropdown:{whenToUse:["Use it for anchored action menus and lightweight floating panels.","Use it when the trigger should reveal a short set of contextual commands near the originating element.","Use it for action menus, overflow menus, and compact confirmation content attached to a button or icon trigger."]},Empty:{whenToUse:["Use it when a list, table, or surface has no data and needs a clear zero-state message.","Use it to explain why content is missing and what users should do next.","Use it for first-run experiences, filtered-empty states, and unavailable-result messaging."]},Flex:{whenToUse:["Use it for one-dimensional layout problems where content is arranged in a row or column.","Use it for toolbars, action bars, inline alignment, and vertically stacked content blocks.","Use it when spacing, wrapping, justification, and alignment should be controlled without dropping into raw CSS."]},Form:{whenToUse:["Use it when field registration, validation rules, and submit/reset handling should be managed as a single form state.","Use it for standard data entry flows that need labels, rules, and predictable layout behavior.","Use it when multiple controls should share validation lifecycle and submission events."]},Grid:{whenToUse:["Use it for responsive multi-column page structure and content layouts.","Use it when cards, forms, or sections must align to a 12-column system across breakpoints.","Use it for dashboards, split panes, multi-column forms, and content areas that reflow between desktop and mobile."]},Icons:{whenToUse:["Use it whenever an interaction, status, or branded surface needs a consistent icon asset from the shared set.","Use it for buttons, inputs, alerts, navigation, and illustration-backed empty or modal states.","Use it when icon naming, sizing, and styling should remain consistent across the library."]},Input:{whenToUse:["Use it for single-line and text-entry scenarios where the user must type a value directly.","Use the family variants for password, search, textarea, and OTP workflows under the same visual shell.","Use it when labels, descriptions, validation status, prefix/suffix slots, and helper feedback all need to stay visually consistent."]},Dialog:{whenToUse:["Use it for blocking tasks that require focused attention before the user can continue.","Use it when confirmation, acknowledgement, or critical workflow steps should interrupt the current page.","Use it for dialogs that need dedicated title, body, illustration/media, and footer actions in a contained overlay."]},Notification:{whenToUse:["Use it for transient global feedback that appears above the page without changing layout.","Use it when a background operation, success state, warning, or error must be surfaced immediately to the user.","Use the static API when feedback should be triggered imperatively from actions, async events, or service responses."]},Pagination:{whenToUse:["Use it when large result sets are split across pages and users need to navigate predictably between them.","Use it for tables, activity feeds, and management screens where item count exceeds a single view.","Use it when page index, page size, and navigation affordances should stay explicit and reusable."]},Popconfirm:{whenToUse:["Use it when a destructive or irreversible action needs a lightweight confirmation without opening a full modal.","Use it for inline delete, archive, revoke, and remove flows that should stay anchored to the initiating control.","Use it when the interaction should feel contextual, fast, and visually tied to the trigger element."]},ProForm:{whenToUse:["Use it when you need higher-level, product-ready form composition rather than assembling every field manually.","Use it for search forms, dialog forms, and structured data-entry flows that benefit from field wrappers and layout helpers.","Use it when a page should move quickly from schema-like field configuration to working business forms."]},Radio:{whenToUse:["Use it when the user must choose exactly one option from a small, visible set.","Use it when all available choices should stay on screen for comparison.","Use it for mutually exclusive selections such as status mode, transfer type, or display preference."]},Segment:{whenToUse:["Use it for compact single-choice switching between closely related views or modes.","Use it when the options behave like a grouped control rather than a navigation tab set.","Use it for density-sensitive places such as chart mode switches, filter modes, or embedded content toggles."]},Select:{whenToUse:["Use it when users should choose from predefined options instead of typing a free-form value.","Use it for single-select and multi-select workflows with optional search, grouping, and rich option rendering.","Use it when the option list may be longer than a radio group can comfortably display inline."]},Space:{whenToUse:["Use it for quick, uniform spacing between inline or stacked elements.","Use it when components should be distributed with consistent preset gaps instead of manual margins.","Use it for button groups, tag rows, compact metadata blocks, and simple horizontal or vertical clusters."]},Spinner:{whenToUse:["Use it to communicate that a task is loading and a result is on the way.","Use it for button loading states, panel-level data fetches, and transitional waiting states.","Use it when the UI should acknowledge progress without yet showing a determinate percentage."]},Step:{whenToUse:["Use it when a workflow is divided into explicit sequential stages.","Use it for onboarding, identity verification, checkout, and other multi-step task progressions.","Use it when users benefit from seeing current progress, completed steps, and what remains."]},Switch:{whenToUse:["Use it for immediate binary toggles where the change takes effect as soon as the user flips the control.","Use it for settings, permissions, and feature activation patterns that do not require a submit button.","Use it when the mental model is “on/off” rather than selecting among multiple options."]},Tabs:{whenToUse:["Use it to switch between peer sections of content without leaving the current page.","Use it when several related panels share the same layout shell but only one should be visible at a time.","Use it for information architecture inside settings, detail pages, and modular dashboards."]},Tag:{whenToUse:["Use it to label entities, statuses, and short categorical metadata.","Use it for concise semantic markers such as state badges, asset labels, and filter chips.","Use it when the content should stay compact, highly scannable, and visually distinct from body text."]},Tooltip:{whenToUse:["Use it to reveal supplemental context without permanently occupying page space.","Use it for definitions, helper hints, truncated content disclosure, and icon-only explanations.","Use it when information is useful but not important enough to surface inline by default."]},Trigger:{whenToUse:["Use it when another surface should be shown or hidden in response to hover, click, or focus behavior.","Use it as the low-level interaction shell for popups, overlays, and anchored floating experiences.","Use it when trigger orchestration matters more than the visual treatment of the revealed content."]},Typography:{whenToUse:["Use it whenever product text should align to the semantic typography scale instead of ad hoc font styling.","Use it for headings, labels, body copy, links, and truncated or copyable text content.","Use it when text hierarchy, readability, and token-driven consistency matter across dense product surfaces."]}};function Se(n){return we[n]??null}const Ce=Object.assign({"../../components/Accordion/README.md":j,"../../components/Alert/README.md":H,"../../components/Button/README.md":W,"../../components/Calendar/README.md":V,"../../components/Carousel/README.md":q,"../../components/Cell/README.md":Y,"../../components/Checkbox/README.md":K,"../../components/CoachMark/README.md":J,"../../components/Copy/README.md":$,"../../components/Divider/README.md":X,"../../components/Empty/README.md":Z,"../../components/Flex/README.md":Q,"../../components/Grid/README.md":ee,"../../components/Icons/README.md":ne,"../../components/Input/README.md":te,"../../components/Link/README.md":oe,"../../components/Navigation/README.md":ae,"../../components/Notification/README.md":ie,"../../components/Popconfirm/README.md":se,"../../components/Progress/README.md":re,"../../components/Radio/README.md":le,"../../components/Segment/README.md":ce,"../../components/Skeleton/README.md":de,"../../components/Slider/README.md":pe,"../../components/Space/README.md":me,"../../components/Spinner/README.md":ue,"../../components/Switch/README.md":he,"../../components/Table/README.md":ge,"../../components/Tabs/README.md":fe,"../../components/Tag/README.md":be,"../../components/Tooltip/README.md":ye,"../../components/Typography/README.md":ve,"../../components/Upload/README.md":xe}),ke={CheckboxGroup:"Checkbox"};function Te(n){return n.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function De(n){const t=n.replace(/\r\n/g,`
`).trim().split(`
`);if(!t.length)return{sections:[],summary:""};for(/^#\s+/.test(t[0])&&t.shift();t[0]==="";)t.shift();const o=[];for(;t.length&&!/^##\s+/.test(t[0]);)o.push(t.shift()??"");const d=new Map,p=[];let a="",i=[];const c=()=>{const s=i.join(`
`).trim();if(!a||!s)return;const r=Te(a),l=d.get(r)??0;d.set(r,l+1),p.push({content:s,heading:a,id:l===0?r:`${r}-${l+1}`})};return t.forEach(s=>{const r=s.match(/^##\s+(.*)$/);if(r){c(),a=r[1].trim(),i=[];return}i.push(s)}),c(),{sections:p,summary:o.join(`
`).trim()}}function v(){const n=m.useContext(w),t=S("meta",["meta"]),o=t.preparedMeta.title??"Components",d=o.split("/").pop()??o,p=ke[d]??d,a=Ce[`../../components/${p}/README.md`]??"",i=Se(d),c=m.useMemo(()=>De(a),[a]),s=n.componentStories(),r=!!t.preparedMeta.component;return e.jsx("div",{className:"sb-docs-shell",children:e.jsx("div",{className:"sb-docs-layout",children:e.jsxs("div",{className:"sb-docs-main",children:[e.jsxs("section",{className:"sb-docs-hero",children:[e.jsxs("div",{className:"sb-docs-hero-copy",children:[e.jsx("p",{className:"sb-docs-kicker",children:o}),e.jsx("h1",{className:"sb-docs-title",children:d}),c.summary?e.jsx("p",{className:"sb-docs-lead",children:c.summary}):e.jsx("div",{className:"sb-docs-description",children:e.jsx(C,{})})]}),e.jsxs("div",{className:"sb-docs-hero-panel",children:[e.jsxs("div",{className:"sb-docs-stat",children:[e.jsx("span",{className:"sb-docs-stat-label",children:"Package"}),e.jsx("strong",{children:"@1money/components-ui"})]}),e.jsxs("div",{className:"sb-docs-stat",children:[e.jsx("span",{className:"sb-docs-stat-label",children:"Stories"}),e.jsx("strong",{children:s.length})]}),e.jsxs("div",{className:"sb-docs-stat",children:[e.jsx("span",{className:"sb-docs-stat-label",children:"README"}),e.jsx("strong",{children:a?"Available":"Story-driven"})]})]})]}),i!=null&&i.whenToUse.length?e.jsxs("section",{className:"sb-docs-section",id:"when-to-use",children:[e.jsxs("div",{className:"sb-docs-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Guidance"}),e.jsx("h2",{children:"When To Use"}),e.jsx("p",{children:"Keep the component choice opinionated so the library reads consistently across products."})]}),e.jsx("ul",{className:"sb-docs-use-list",children:i.whenToUse.map(l=>e.jsx("li",{children:l},l))})]}):null,e.jsxs("section",{className:"sb-docs-section",id:"examples",children:[e.jsxs("div",{className:"sb-docs-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Preview"}),e.jsx("h2",{children:"Primary example"}),e.jsx("p",{children:"Start with the default state, then use the stories below to inspect edge cases, variants, and richer composition patterns."})]}),e.jsx(k,{})]}),s.length>1?e.jsxs("section",{className:"sb-docs-section",id:"stories",children:[e.jsxs("div",{className:"sb-docs-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Examples"}),e.jsx("h2",{children:"Usage patterns"}),e.jsx("p",{children:"Each story focuses on one behavior so you can review the API surface quickly."})]}),e.jsx(T,{includePrimary:!1,title:"Usage patterns"})]}):null,r?e.jsxs("section",{className:"sb-docs-section",id:"api",children:[e.jsxs("div",{className:"sb-docs-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Reference"}),e.jsx("h2",{children:"API"}),e.jsx("p",{children:"Controls and prop tables are generated from the component metadata in this repo."})]}),e.jsx(D,{})]}):null,c.sections.length?e.jsxs("section",{className:"sb-docs-section",id:"guidance",children:[e.jsxs("div",{className:"sb-docs-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Guidance"}),e.jsx("h2",{children:"Documentation notes"}),e.jsx("p",{children:"These sections come from the component README so package docs and Storybook stay in sync."})]}),e.jsx("div",{className:"sb-docs-markdown-grid",children:c.sections.map(l=>e.jsxs("article",{className:"sb-docs-markdown-card",id:l.id,children:[e.jsx("h3",{children:l.heading}),e.jsx(R,{children:l.content})]},l.id))})]}):null]})})})}v.__docgenInfo={description:"",methods:[],displayName:"ComponentDocsPage"};const Re={width:"100%",boxSizing:"border-box",padding:24},Ge=[F({themes:{light:"light",dark:"dark"},defaultTheme:"light",attributeName:"data-mode"}),(n,t)=>t.parameters.disableCanvasPadding?m.createElement(n):m.createElement("div",{style:Re},m.createElement(n))],Be={initialGlobals:{backgrounds:{value:"canvas",grid:!1}},parameters:{layout:"fullscreen",backgrounds:{options:{canvas:{name:"Canvas",value:"#F0F0F0"},white:{name:"White",value:"#ffffff"}},grid:{disable:!0}},docs:{page:v},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:{order:["Introduction",["Overview","Design System","Development"],"Components"]}}}};export{Ge as decorators,Be as default};
