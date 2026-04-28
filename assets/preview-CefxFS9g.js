import{r as u}from"./index-CP2yOfOm.js";import{d as w}from"./index-DrFu-skq.js";import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{h as C,u as x,i as S,P as T,j as k,k as P,f as D}from"./index-DaMVa12m.js";import"./iframe-CXoVoaCP.js";import"./index-D1q9exoj.js";import"./index-BzJi89j3.js";const{useParameter:R,addons:E,useEffect:I,useMemo:Ke,definePreview:Ye}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:A}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var N=Object.defineProperty,g=(n,t)=>{for(var o in t)N(n,o,{get:t[o],enumerable:!0})},_={};g(_,{initialGlobals:()=>M});var m="themes",U=`storybook/${m}`,f="theme",h={},L={REGISTER_THEMES:`${U}/REGISTER_THEMES`},M={[f]:""},F={};g(F,{initializeThemeState:()=>y,pluckThemeFromContext:()=>b,useThemeParameters:()=>O});function b({globals:n}){return n[f]||""}function O(n){return A(w`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),n?n.parameters[m]??h:R(m,h)}function y(n,t){E.getChannel().emit(L.REGISTER_THEMES,{defaultTheme:t,themes:n})}var z="html",B="data-theme",H=({themes:n,defaultTheme:t,parentSelector:o=z,attributeName:d=B})=>(y(Object.keys(n),t),(p,a)=>{let{themeOverride:i}=a.parameters[m]??{},c=b(a);return I(()=>{let r=document.querySelector(o),s=i||c||t;r&&r.setAttribute(d,n[s])},[i,c]),p()});const G="# Accordion\n\nA collapsible content panel component for organizing and presenting information in a compact, expandable format. Supports fill (card-style) and stroke (divider-style) visual variants with two size options.\n\n## Import\n\n```tsx\nimport { Accordion } from '@1money/components-ui';\n// or\nimport { Accordion } from '@1money/components-ui/Accordion';\n```\n\n## Usage\n\n```tsx\nconst items = [\n  { key: '1', title: 'Section Title', children: 'Content here...' },\n  { key: '2', title: 'Another Section', children: 'More content...' },\n];\n\n<Accordion items={items} />\n<Accordion items={items} variant=\"stroke\" size=\"small\" />\n<Accordion items={items} multiple defaultActiveKeys={['1', '2']} />\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `items` | `AccordionItem[]` | — | Accordion items configuration (required) |\n| `variant` | `'fill' \\| 'stroke'` | `'fill'` | Visual style variant |\n| `size` | `'large' \\| 'small'` | `'large'` | Size variant |\n| `multiple` | `boolean` | `false` | Allow multiple items expanded simultaneously |\n| `activeKeys` | `string[]` | — | Controlled active item keys |\n| `defaultActiveKeys` | `string[]` | `[]` | Default active item keys |\n| `onChange` | `(activeKeys: string[]) => void` | — | Callback when active items change |\n| `prefixCls` | `string` | `'accordion'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n### AccordionItem\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `key` | `string` | Unique identifier |\n| `title` | `ReactNode` | Header title content |\n| `children` | `ReactNode` | Expandable panel content |\n| `disabled` | `boolean` | Whether the item is disabled |\n",V="# Alert\n\nAn inline alert component for displaying contextual feedback messages. Supports four status variants: info, success, warning, and error.\n\n## Import\n\n```tsx\nimport { Alert } from '@1money/components-ui';\n// or\nimport { Alert } from '@1money/components-ui/Alert';\n```\n\n## Usage\n\n```tsx\n<Alert\n  status=\"info\"\n  title=\"Information\"\n  body=\"This is an informational message.\"\n  link={{ label: 'Learn more', href: '/docs' }}\n  closable\n  onClose={() => console.log('closed')}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `status` | `'info' \\| 'success' \\| 'warning' \\| 'error'` | `'info'` | Status variant controlling colors and icon |\n| `title` | `ReactNode` | — | Title text displayed in bold |\n| `body` | `ReactNode` | — | Body text below the title |\n| `link` | `AlertLinkConfig` | — | Optional link below the body (see sub-table below) |\n| `icon` | `ReactNode` | — | Custom icon override |\n| `showIcon` | `boolean` | `true` | Whether to show the status icon |\n| `action` | `ReactNode` | — | Optional action element (e.g., button) |\n| `closable` | `boolean` | `false` | Whether to show the close button |\n| `onClose` | `MouseEventHandler<HTMLButtonElement>` | — | Close button click handler |\n| `prefixCls` | `string` | `'alert'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n### AlertLinkConfig\n\n| Field | Type | Description |\n|-------|------|-------------|\n| `label` | `string` | Display text for the link **(required)** |\n| `href` | `string` | URL — when provided, the link renders as an anchor instead of a button |\n| `target` | `HTMLAttributeAnchorTarget` | Anchor target (only applies when `href` is provided) |\n| `rel` | `string` | Anchor rel attribute (only applies when `href` is provided) |\n| `onClick` | `MouseEventHandler<HTMLElement>` | Click handler for the link or action button |\n",W="# Button\n\nA native button component with the 1Money design system tokens. Supports multiple color variants, three sizes, optional leading/trailing icon slots, loading state, and rounded styling.\n\n## Import\n\n```tsx\nimport { Button } from '@1money/components-ui';\n// or\nimport { Button } from '@1money/components-ui/Button';\n```\n\n## Usage\n\n```tsx\n// Basic\n<Button color=\"primary\" size=\"medium\">Submit</Button>\n\n// With icons\n<Button color=\"secondary\" iconStart={<Icons name=\"add\" size={16} />}>\n  Add Item\n</Button>\n\n<Button color=\"grey\" iconEnd={<Icons name=\"arrowRight\" size={16} />}>\n  Next\n</Button>\n\n// Loading state\n<Button loading>Processing...</Button>\n\n// Disabled\n<Button disabled>Unavailable</Button>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `variant` | `'contained' \\| 'text'` | `'contained'` | Visual style variant — filled or text-only |\n| `color` | `'primary' \\| 'secondary' \\| 'grey' \\| 'black' \\| 'white' \\| 'danger' \\| 'warning'` | `'primary'` | Color variant |\n| `size` | `'large' \\| 'medium' \\| 'small'` | `'large'` | Size variant |\n| `type` | `'button' \\| 'submit' \\| 'reset'` | `'button'` | Native button type |\n| `rounded` | `boolean` | `false` | Applies a pill-shaped border radius |\n| `iconStart` | `ReactNode` | — | Leading icon slot |\n| `iconEnd` | `ReactNode` | — | Trailing icon slot |\n| `loading` | `boolean` | `false` | Shows a loading spinner and disables the button |\n| `disabled` | `boolean` | `false` | Disables the button |\n| `prefixCls` | `string` | `'button'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n| `children` | `ReactNode` | — | Button content |\n\nThis component accepts standard native button attributes such as `name`, `value`, `form`, `aria-*`, and `data-*`.\n\nRefs are forwarded to the root `<button>` element.\n",j="# Calendar\n\nA date picker component wrapping PrimeReact's Calendar with custom styling. Supports single date, multiple dates, and date range selection modes.\n\n## Import\n\n```tsx\nimport { Calendar } from '@1money/components-ui';\n// or\nimport { Calendar } from '@1money/components-ui/Calendar';\n```\n\n## Usage\n\n```tsx\n<Calendar\n  label=\"Date of Birth\"\n  required\n  placeholder=\"MM/DD/YYYY\"\n  onChange={(e) => console.log(e.value)}\n/>\n```\n\n### Range Selection\n\n```tsx\n<Calendar\n  label=\"Date Range\"\n  selectionMode=\"range\"\n  numberOfMonths={2}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `size` | `'large' \\| 'small'` | `'large'` | Size variant |\n| `label` | `ReactNode` | — | Label displayed above the input |\n| `message` | `ReactNode` | — | Helper/error message below the input |\n| `required` | `boolean` | `false` | Shows asterisk after label |\n| `success` | `boolean` | `false` | Success state styling |\n| `invalid` | `boolean` | `false` | Error state styling |\n| `selectionMode` | `'single' \\| 'range' \\| 'multiple'` | `'single'` | Date selection mode |\n| `defaultValue` | `Date \\| Date[] \\| null` | — | Default value (uncontrolled) |\n| `value` | `Date \\| Date[] \\| null` | — | Controlled value |\n| `contentWidth` | `CSSProperties['width']` | — | Custom calendar content width |\n| `placeholder` | `string` | `'MM/DD/YYYY'` | Input placeholder text |\n| `prefixCls` | `string` | `'calendar'` | CSS class prefix |\n| `wrapperCls` | `string` | — | Additional CSS class for the wrapper element |\n| `labelCls` | `string` | — | Additional CSS class for the label element |\n| `messageCls` | `string` | — | Additional CSS class for the message element |\n| `className` | `string` | — | Additional CSS classes for the inner input element |\n\nAll other props are forwarded to PrimeReact's `Calendar` component.\n",q="# Carousel\n\nDot indicator for step/slide navigation. Used as a sub-component inside Coach Mark, onboarding flows, and similar multi-step UIs.\n\n## Import\n\n```tsx\nimport { Carousel } from '@1money/components-ui';\n// or\nimport { Carousel } from '@1money/components-ui/Carousel';\n```\n\n## Usage\n\n```tsx\n<Carousel count={4} defaultActiveIndex={0} onChange={(index) => console.log(index)} />\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `count` | `number` | — | Total number of indicator dots (required) |\n| `activeIndex` | `number` | — | Current active dot index (controlled) |\n| `defaultActiveIndex` | `number` | `0` | Default active dot index (uncontrolled) |\n| `onChange` | `(index: number) => void` | — | Callback when active dot changes |\n| `prefixCls` | `string` | `'carousel'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n## Dot States\n\n- **Default**: 8px diamond shape, neutral color\n- **Hover**: 8px diamond shape, darker neutral color\n- **Active**: 12px diamond shape, brand color\n",K='# Cell\n\nInteractive action row component for settings-style or navigation-style lists.\n\n## Import\n\n```tsx\nimport { Cell } from \'@1money/components-ui\';\n// or\nimport { Cell } from \'@1money/components-ui/Cell\';\n```\n\n## Usage\n\n```tsx\n<Cell iconStart="security" iconEnd="arrowRight">\n  Authenticator app\n</Cell>\n```\n\nActive state:\n\n```tsx\n<Cell iconStart="security" iconEnd="arrowRight" active>\n  Authenticator app\n</Cell>\n```\n\nDisabled state:\n\n```tsx\n<Cell iconStart="security" iconEnd="arrowRight" disabled>\n  Authenticator app\n</Cell>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `iconStart` | `IconName` | — | Leading icon rendered before the label |\n| `iconEnd` | `IconName` | — | Trailing icon rendered after the label |\n| `active` | `boolean` | `false` | Applies the selected/active visual state |\n| `disabled` | `boolean` | `false` | Disables click interaction and applies disabled styling |\n| `prefixCls` | `string` | `\'cell\'` | CSS class prefix |\n| `className` | `string` | `\'\'` | Additional CSS classes |\n| `children` | `ReactNode` | — | Row label content |\n| `...buttonProps` | `ButtonHTMLAttributes<HTMLButtonElement>` | — | Native button props forwarded to the root element |\n',Y="# Checkbox\n\nA checkbox component with label and description support, built with a native `input[type='checkbox']` and the 1Money design system tokens. Supports checked, unchecked, and indeterminate states with configurable label direction.\n\n## Import\n\n```tsx\nimport { Checkbox } from '@1money/components-ui';\n// or\nimport { Checkbox } from '@1money/components-ui/Checkbox';\n```\n\n## Usage\n\n```tsx\n<Checkbox\n  checked={isChecked}\n  label=\"Accept terms\"\n  description=\"You must accept the terms to continue\"\n  onChange={(event) => setIsChecked(event.target.checked)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `checked` | `boolean` | — | Whether the checkbox is checked (controlled) |\n| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled) |\n| `indeterminate` | `boolean` | `false` | Whether the checkbox is in indeterminate state |\n| `disabled` | `boolean` | `false` | Disables the checkbox |\n| `label` | `ReactNode` | — | Label text displayed next to the checkbox |\n| `description` | `ReactNode` | — | Description text displayed below the label |\n| `labelPlacement` | `'left' \\| 'right'` | `'left'` | Placement of the label relative to the checkbox |\n| `onChange` | `(event: CheckboxChangeEvent) => void` | — | Callback when checked state changes |\n| `value` | `string \\| number` | — | Value of the checkbox, used by `CheckboxGroup` to track selection |\n| `name` | `string` | — | Native name attribute passed to the underlying input |\n| `required` | `boolean` | `false` | Marks the checkbox as required |\n| `title` | `string` | — | Native title attribute for the element |\n| `aria-label` | `string` | — | Accessible label for the checkbox |\n| `aria-labelledby` | `string` | — | ID of an element that labels the checkbox |\n| `style` | `CSSProperties` | — | Inline styles applied to the root element |\n| `ref` | `RefObject<HTMLLabelElement \\| null>` | — | Ref to the root label element |\n| `prefixCls` | `string` | `'checkbox'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n## CheckboxGroup\n\n`CheckboxGroup` is exported from the same module as `Checkbox`, matching the `Radio` / `RadioGroup` structure.\n\n```tsx\nimport { Checkbox, CheckboxGroup } from '@1money/components-ui';\n// or\nimport { Checkbox, CheckboxGroup } from '@1money/components-ui/Checkbox';\n\n<CheckboxGroup\n  name=\"fruits\"\n  options={[\n    { label: 'Apple', value: 'apple' },\n    { label: 'Pear', value: 'pear' },\n  ]}\n  value={selectedValues}\n  onChange={setSelectedValues}\n/>\n\n<Checkbox.Group defaultValue={['alpha']}>\n  <Checkbox value=\"alpha\" label=\"Alpha\" />\n  <Checkbox value=\"beta\" label=\"Beta\" />\n</Checkbox.Group>\n```\n\nSelected values are returned in declaration order, and `options` items can define their own `onChange` callback that receives the checkbox change event.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `options` | `Array<CheckboxValueType \\| CheckboxGroupOption>` | — | Quick configuration for rendering grouped checkboxes |\n| `value` | `CheckboxValueType[]` | — | Controlled selected values |\n| `defaultValue` | `CheckboxValueType[]` | `[]` | Default selected values for uncontrolled usage |\n| `onChange` | `(checkedValue: CheckboxValueType[]) => void` | — | Callback when the selected values change |\n| `name` | `string` | — | Shared native name passed to all child inputs |\n| `disabled` | `boolean` | `false` | Disables the entire group |\n| `direction` | `'horizontal' \\| 'vertical'` | `'horizontal'` | Layout direction for the group |\n| `children` | `ReactNode` | — | Direct `Checkbox` children controlled by the group |\n| `title` | `string` | — | Native title attribute for the group element |\n| `aria-label` | `string` | — | Accessible label for the group |\n| `aria-labelledby` | `string` | — | ID of an element that labels the group |\n| `className` | `string` | `''` | Additional CSS classes |\n| `prefixCls` | `string` | `'checkbox-group'` | CSS class prefix |\n",J="# CoachMark\n\nA guided onboarding tooltip card with multi-step navigation. Features a beak arrow pointing to the target element, step indicators (Carousel dots), and Back/Next/Finish navigation buttons.\n\n## Import\n\n```tsx\nimport { CoachMark } from '@1money/components-ui';\n// or\nimport { CoachMark } from '@1money/components-ui/CoachMark';\n```\n\n## Usage\n\n```tsx\nconst steps = [\n  {\n    icon: <Icons name=\"dashboard\" size={24} />,\n    heading: 'Welcome to Dashboard',\n    body: 'Here you can see an overview of your finances.',\n  },\n  {\n    heading: 'Track Your Spending',\n    body: 'Use the charts to monitor transactions by category.',\n  },\n  {\n    heading: \"You're all set!\",\n    body: 'Explore the rest of the app at your own pace.',\n  },\n];\n\n<CoachMark\n  steps={steps}\n  defaultActiveStep={0}\n  placement=\"top\"\n  onFinish={() => console.log('Tour complete')}\n  onDismiss={() => console.log('Tour dismissed')}\n/>\n```\n\n## Props\n\n### CoachMarkProps\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `steps` | `CoachMarkStep[]` | — | **Required.** Array of step configurations |\n| `activeStep` | `number` | — | Current step index (controlled) |\n| `defaultActiveStep` | `number` | `0` | Default step index (uncontrolled) |\n| `placement` | `'top' \\| 'bottom' \\| 'left' \\| 'right'` | `'top'` | Beak arrow placement relative to the target element |\n| `arrowOffset` | `string` | — | Offset of the arrow from center (CSS value, e.g. `'20px'`, `'-10px'`) |\n| `dismissible` | `boolean` | `true` | Show the dismiss (close) button |\n| `labels` | `CoachMarkLabels` | — | Custom button and dismiss labels |\n| `onChange` | `(step: number) => void` | — | Callback when the active step changes |\n| `onFinish` | `() => void` | — | Callback when the finish button is clicked on the last step |\n| `onDismiss` | `() => void` | — | Callback when the dismiss button is clicked |\n| `prefixCls` | `string` | `'coach-mark'` | CSS class prefix for customization |\n| `className` | `string` | `''` | Additional CSS classes |\n| `ref` | `RefObject<HTMLDivElement \\| null>` | — | Ref forwarded to the root element |\n\n### CoachMarkStep\n\nEach entry in the `steps` array may include:\n\n| Field | Type | Description |\n|-------|------|-------------|\n| `icon` | `ReactNode` | Icon or illustration displayed above the heading |\n| `heading` | `ReactNode` | Heading text |\n| `body` | `ReactNode` | Body text |\n\n### CoachMarkLabels\n\nPassed via the `labels` prop to override default button text:\n\n| Field | Type | Default | Description |\n|-------|------|---------|-------------|\n| `back` | `string` | `'Back'` | Label for the back button |\n| `next` | `string` | `'Next'` | Label for the next button |\n| `finish` | `string` | `'Finish'` | Label for the finish button (shown on the last step) |\n| `dismiss` | `string` | `'Dismiss'` | `aria-label` for the dismiss (close) button |\n\n## Step Sequences\n\n- **Single step**: Back button is hidden; the only action button shows \"Finish\"\n- **First step** (`activeStep === 0`): Back button is rendered but disabled\n- **Middle steps**: Both Back and Next buttons are active\n- **Last step** (`activeStep === steps.length - 1`): Next button shows the finish label and triggers `onFinish`\n\n## Placements\n\nThe `placement` prop controls where the beak arrow appears on the card:\n\n- `top`: Beak at bottom — card sits above the target\n- `bottom`: Beak at top — card sits below the target\n- `left`: Beak at right — card sits to the left of the target\n- `right`: Beak at left — card sits to the right of the target\n\nUse `arrowOffset` to shift the arrow horizontally or vertically away from center when the target is not centered on the card edge.\n",$="# Copy\n\nA copy-to-clipboard icon button that displays a copy icon by default and switches to a check icon upon successful copy, reverting after 1.5 seconds.\n\n## Import\n\n```tsx\nimport { Copy } from '@1money/components-ui';\n// or\nimport { Copy } from '@1money/components-ui/Copy';\n```\n\n## Usage\n\n```tsx\n<Copy\n  value=\"Text to copy\"\n  onSuccess={(val) => console.log('Copied:', val)}\n  onError={(val) => console.log('Failed:', val)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | The text content to copy to clipboard (required) |\n| `iconSize` | `number` | `20` | Icon size in pixels |\n| `color` | `string` | — | Icon color |\n| `successColor` | `string` | `'#1F5800'` | Icon color when copy succeeds |\n| `contained` | `boolean` | `true` | Whether to show the background container around the icon |\n| `onSuccess` | `(value: string) => void` | — | Callback fired when copy succeeds |\n| `onError` | `(value: string) => void` | — | Callback fired when copy fails |\n| `prefixCls` | `string` | `'copy'` | CSS class prefix |\n| `className` | `string` | — | Additional CSS classes |\n\n# Clipboard\n\nA copyable text field that displays text content alongside a `Copy` icon button, with an optional label above. Use it for tokens, addresses, secret keys, or any value the user needs to copy.\n\n## Import\n\n```tsx\nimport { Clipboard } from '@1money/components-ui';\n// or\nimport { Clipboard } from '@1money/components-ui/Copy';\n```\n\n## Usage\n\n```tsx\n<Clipboard\n  label=\"Setup Key\"\n  content=\"GWKLDLVE25dfLIJOHUD578JPIHD24JLJGHGOUH27HLIHOUGOLIKHJ547HOU\"\n  onSuccess={(val) => console.log('Copied:', val)}\n  onError={(val) => console.log('Failed:', val)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `content` | `string` | — | The text content to display and copy (required) |\n| `label` | `string` | — | Optional label rendered above the content |\n| `onSuccess` | `(value: string) => void` | — | Callback fired when copy succeeds |\n| `onError` | `(value: string) => void` | — | Callback fired when copy fails |\n| `prefixCls` | `string` | `'clipboard'` | CSS class prefix |\n| `className` | `string` | — | Additional CSS classes for the wrapper |\n| `labelCls` | `string` | — | Additional CSS classes for the label |\n",X="# Dialog\n\nModal dialog rendered in a portal. Supports small and large layouts, optional illustration/media areas, back/close controls, mask and Escape dismissal, and configurable footer actions.\n\n## Import\n\n```tsx\nimport { Dialog } from '@1money/components-ui';\n// or\nimport { Dialog } from '@1money/components-ui/Dialog';\n```\n\n## Usage\n\n```tsx\n<Dialog\n  open={open}\n  title=\"Confirm transfer\"\n  onCancel={() => setOpen(false)}\n  onOk={handleSubmit}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `open` | `boolean` | `false` | Controls whether the dialog is visible |\n| `size` | `'small' \\| 'large'` | `'small'` | Dialog layout size |\n| `maskClosable` | `boolean` | `true` | Whether clicking the overlay calls `onCancel` |\n| `showCloseIcon` | `boolean` | `true` | Shows the close button |\n| `showBackIcon` | `boolean` | `false` | Shows the back button |\n| `fullWidth` | `boolean` | `false` | Uses the full-width dialog layout |\n| `title` | `ReactNode` | — | Title content |\n| `children` | `ReactNode` | — | Main dialog body content |\n| `illustration` | `ReactNode \\| IconName` | — | Illustration rendered above the title |\n| `media` | `ReactNode` | — | Media area rendered before the dialog content |\n| `closeIcon` | `ReactNode` | `cross` icon | Custom close icon |\n| `backIcon` | `ReactNode` | `arrowLeft` icon | Custom back icon |\n| `footer` | `ReactNode \\| DialogFooterRender \\| null` | generated from actions | Custom footer. Pass `null` to hide it |\n| `onOk` | `() => void \\| Promise<void>` | — | Confirm action; also renders the OK button when present |\n| `onCancel` | `() => void \\| Promise<void>` | — | Cancel/close action; also renders the Cancel button when present |\n| `onBack` | `() => void` | — | Back button handler |\n| `okText` | `ReactNode` | `'Confirm'` | OK button content |\n| `cancelText` | `ReactNode` | `'Cancel'` | Cancel button content |\n| `cancelButtonProps` | `Partial<ButtonProps>` | — | Props merged onto the Cancel button |\n| `okButtonProps` | `Partial<ButtonProps>` | — | Props merged onto the OK button |\n| `rootStyle` / `wrapperStyle` / `bodyStyle` / `headerStyle` / `contentStyle` / `footerStyle` | `CSSProperties` | — | Style overrides for dialog slots |\n| `prefixCls` | `string` | `'dialog'` | CSS class prefix |\n| `className` | `string` | — | Additional class on the dialog panel |\n\nAll other standard `HTMLDivElement` attributes are forwarded to the dialog panel.\n\n",Q=`# Divider

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
`,Z="# Drawer\n\nPortal-rendered drawer panel for side sheets and top/bottom panels. Supports controlled open state, placement, mask dismissal, Escape dismissal, header controls, and footer content.\n\n## Import\n\n```tsx\nimport { Drawer } from '@1money/components-ui';\n// or\nimport { Drawer } from '@1money/components-ui/Drawer';\n```\n\n## Usage\n\n```tsx\n<Drawer\n  open={open}\n  title=\"Transfer details\"\n  placement=\"right\"\n  onClose={() => setOpen(false)}\n  footer={<Button onClick={() => setOpen(false)}>Done</Button>}\n>\n  Drawer content\n</Drawer>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `open` | `boolean` | `false` | Controls whether the drawer is visible |\n| `placement` | `'top' \\| 'right' \\| 'bottom' \\| 'left'` | `'right'` | Side the drawer slides from |\n| `width` | `string \\| number` | `360` | Width for left/right drawers |\n| `height` | `string \\| number` | `360` | Height for top/bottom drawers |\n| `title` | `ReactNode` | — | Header title |\n| `footer` | `ReactNode` | — | Footer content |\n| `maskClosable` | `boolean` | `true` | Whether overlay click calls `onClose` |\n| `showCloseIcon` | `boolean` | `true` | Shows the close button |\n| `showBackIcon` | `boolean` | `false` | Shows the back button |\n| `closeIcon` | `ReactNode` | `cross` icon | Custom close icon |\n| `backIcon` | `ReactNode` | `arrowLeft` icon | Custom back icon |\n| `children` | `ReactNode` | — | Drawer body content |\n| `onClose` | `() => void` | — | Close handler |\n| `onBack` | `() => void` | — | Back button handler |\n| `rootStyle` / `wrapperStyle` / `headerStyle` / `bodyStyle` / `footerStyle` | `CSSProperties` | — | Style overrides for drawer slots |\n| `prefixCls` | `string` | `'drawer'` | CSS class prefix |\n| `className` | `string` | — | Additional class on the drawer panel |\n\nAll other standard `HTMLDivElement` attributes are forwarded to the drawer panel.\n\n",ee="# Dropdown\n\nSmall wrapper around `Trigger` with dropdown-friendly trigger defaults. Use it to attach floating content to a single trigger element.\n\n## Import\n\n```tsx\nimport { Dropdown } from '@1money/components-ui';\n// or\nimport { Dropdown } from '@1money/components-ui/Dropdown';\n```\n\n## Usage\n\n```tsx\n<Dropdown\n  content={({ close }) => (\n    <button type=\"button\" onClick={close}>\n      Close\n    </button>\n  )}\n  placement=\"bottom-start\"\n>\n  <Button>Open menu</Button>\n</Dropdown>\n```\n\n## Props\n\n`DropdownProps` accepts all `TriggerProps` except `trigger`, which is narrowed to dropdown trigger modes.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `content` | `ReactNode \\| ({ close, open }) => ReactNode` | — | Floating dropdown content |\n| `trigger` | `'click' \\| 'hover'` | `'click'` | How the dropdown opens |\n| `placement` | `Placement` | `'bottom-start'` from `Trigger` | Floating placement |\n| `open` | `boolean` | — | Controlled open state |\n| `defaultOpen` | `boolean` | `false` | Initial open state |\n| `onOpenChange` | `(open: boolean) => void` | — | Called when open state changes |\n| `showArrow` | `boolean` | `false` from `Trigger` | Shows arrow pointing to the trigger |\n| `offset` | `number` | `4` from `Trigger` | Gap between trigger and panel |\n| `portal` | `boolean` | `true` from `Trigger` | Render panel in a portal |\n| `dismissible` | `boolean` | `true` from `Trigger` | Close on outside click / Escape |\n| `hoverDelay` | `number \\| { open?: number; close?: number }` | — | Hover delay in milliseconds |\n| `overlayClassName` | `string` | — | Class applied to the floating panel |\n| `overlayStyle` | `CSSProperties` | — | Style applied to the floating panel |\n| `children` | `ReactElement` | — | Single trigger element |\n| `disabled` | `boolean` | `false` | Disables interactions |\n| `role` | `TriggerRole` | `'dialog'` | Accessibility role for the panel |\n",ne=`# Empty

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
`,te=`# Flex

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
| \`gap\` | \`'small' \\| 'middle' \\| 'large' \\| number\` | — | Gap between items; defaults to \`0\` internally when not provided |
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
`,oe=`# Grid

A responsive 12-column layout system, built with flexbox and consistent gutters.

## Features

- 12-column grid with spans and offsets
- Responsive breakpoints (sm/md/lg, mobile-first with min-width)
- Horizontal and vertical gutters
- Row alignment and justification helpers
- Optional flex-based columns

## Breakpoints

- \`sm\`: min-width 768px
- \`md\`: min-width 1024px
- \`lg\`: min-width 1280px

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
| \`gutter\` | \`number \\| string \\| [number \\| string, number \\| string] \\| { sm?; md?; lg? } \\| [{ sm?; md?; lg? }, { sm?; md?; lg? }]\` | \`[0, 0]\` | Horizontal gutter (use array for [horizontal, vertical]) |
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
| \`sm/md/lg\` | \`number \\| { span?; offset?; order?; pull?; push?; flex? }\` | — | Mobile-first responsive size config (min-width) |
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
`,ae="# Icons\n\nA comprehensive icon system providing access to custom SVG icons, logos, illustrations, and deprecated icons with consistent styling.\n\n## Components\n\n- **Icons**: Main icon component for displaying any icon by name.\n- **IconWrapper**: SVG wrapper providing consistent sizing and color.\n- **IconHover**: Hover-effect container for icon buttons.\n\n## Import\n\n```tsx\nimport { Icons, IconWrapper, IconHover } from '@1money/components-ui';\n// or\nimport { Icons, IconWrapper, IconHover } from '@1money/components-ui/Icons';\n\n// Type imports\nimport type { IconName, SortIconStatus } from '@1money/components-ui';\n```\n\n## Basic Usage\n\n```tsx\n// Basic icon (default 24px, inherits currentColor)\n<Icons name=\"arrowRight\" />\n\n// Custom size and color\n<Icons name=\"settings\" size={32} color=\"#3D73F2\" />\n\n// With explicit width/height\n<Icons name=\"search\" width={20} height={20} />\n\n// Icon with hover container\n<IconHover>\n  <Icons name=\"more\" />\n</IconHover>\n\n// Disabled hover container\n<IconHover disabled>\n  <Icons name=\"settings\" />\n</IconHover>\n\n// Logo\n<Icons name=\"logo\" size={40} />\n```\n\n## Icons Props\n\n`IconsProps` extends `IconWrapperProps` with an additional `name` prop.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `name` | `IconName` | — | Icon name from the available icon set |\n| `size` | `number \\| \\`${number}\\`` | `24` | Icon size in pixels (sets both width and height) |\n| `width` | `number \\| \\`${number}\\`` | — | Override width independently |\n| `height` | `number \\| \\`${number}\\`` | — | Override height independently |\n| `color` | `string` | `'currentColor'` | Icon color (CSS color value) |\n| `fill` | `boolean` | — | Set SVG fill to `currentColor` |\n| `stroke` | `boolean` | — | Set SVG stroke to `currentColor` |\n| `viewBox` | `string` | `'0 0 24 24'` | SVG viewBox attribute |\n| `id` | `string` | — | HTML id attribute |\n| `className` | `string` | `''` | CSS class on the SVG element |\n| `wrapperCls` | `string` | `''` | CSS class on the wrapper `<i>` element |\n| `style` | `CSSProperties` | — | Inline styles on the wrapper |\n| `ariaLabel` | `string` | — | Accessibility label |\n| `tabIndex` | `number` | — | Tab index for keyboard navigation |\n| `onClick` | `(e: MouseEvent<HTMLElement>) => any` | — | Click handler |\n| `onKeyDown` | `(e: KeyboardEvent<HTMLElement>) => any` | — | Key down handler |\n| `prefixCls` | `string` | `'icons'` | CSS class prefix |\n\n## IconHover Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `disabled` | `boolean` | — | Disables hover effect and adds reduced opacity |\n| `prefixCls` | `string` | `'icons-hover'` | CSS class prefix |\n| `className` | `string` | — | Additional CSS classes |\n\nAlso accepts all standard HTML div attributes.\n\n## Special Icon Props\n\n### Status Icons (`statusSuccess`, `statusFail`)\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `innerColor` | `string` | — | Color for the inner part of the status icon |\n\n### Sort Icon (`sort`)\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `status` | `SortIconStatus` | — | Sort direction state |\n| `inactiveColor` | `string` | — | Color for the inactive arrow |\n\n### LogoWithWords (`logoWithWords`)\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `logoColor` | `string` | — | Override color for the logo mark |\n| `logoCls` | `string` | — | CSS class for the logo mark |\n| `wordColor` | `string` | — | Override color for the wordmark |\n| `wordCls` | `string` | — | CSS class for the wordmark |\n| `networkLogo` | `boolean` | — | Show the \"NETWORK\" wordmark alongside |\n| `networkColor` | `string` | — | Override color for the network wordmark |\n| `networkCls` | `string` | — | CSS class for the network wordmark |\n\n### LogoWithBeta (`logoWithBeta`)\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `logoColor` | `string` | — | Override color for the logo mark |\n| `logoCls` | `string` | — | CSS class for the logo mark |\n| `wordColor` | `string` | — | Override color for the wordmark |\n| `wordCls` | `string` | — | CSS class for the wordmark |\n| `betaColor` | `string` | — | Override color for the beta badge |\n| `betaCls` | `string` | — | CSS class for the beta badge |\n\n### Illustrations (`illus*` icons)\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `borderColor` | `string` | `'#131313'` | Stroke/border color of the illustration |\n| `gradientColor` | `string \\| [string, string]` | `['#B9CCE4', 'white']` | Gradient fill — a single color or `[start, end]` tuple |\n\nSome illustrations also accept `color` to override the accent circle (defaults to `#AE0000` for error-themed, `#F4C600` for pending-themed).\n\n## Available Icon Names\n\nAll icon names use **camelCase**. The `IconName` type provides full autocompletion.\n\n### Functional Icons\n\n`arrowUp`, `arrowDown`, `arrowLeft`, `arrowRight`, `add`, `minus`, `cross`, `more`, `chevronDown`, `chevronUp`, `chevronLeft`, `chevronRight`, `sort`, `collapse`, `extend`, `spinner`, `check`, `remove`, `pix`\n\n### System Icons\n\n`info`, `notifications`, `favorite`, `transferHistory`, `support`, `help`, `language`, `share`, `products`, `hub`, `systemSecurity`, `fees`, `settings`, `id`, `viewBalance`, `hideBalance`, `privacy`, `card`, `coin`, `wallet`, `email`, `rewards`, `time`, `location`, `calendar`, `securityCheck`, `devices`, `images`, `bank`, `coins`, `earn`, `scan`, `search`, `maintenance`, `editFile`, `document`, `upload`, `gift`, `filter`, `expand`, `systemCollapse`, `refresh`, `transfer`, `link`, `save`, `like`, `dislike`, `copy`, `mobile`, `chat`, `swap`, `clock`, `desktop`, `ach`, `businessAccount`, `individualAccount`, `apiKey`, `brokenLink`, `autoConversionRules`\n\n### Menu Icons\n\n`dashboard`, `digitalAsset`, `addressBook`, `linkedBankAccounts`, `wire`, `swift`, `account`, `profile`, `security`, `logout`, `portfolio`, `home`, `convert`, `withdraw`, `send`, `menuDeposit`, `company`, `parties`, `transactions`, `fiat`, `money`, `sendCrypto`\n\n### Primary Icons\n\n`deposit`, `withdrawal`, `conversion`, `mintToken`, `burnToken`, `accountLocked`, `pending`, `success`, `fail`, `error`\n\n### Status Icons\n\n`statusSuccess`, `statusFail` (these accept an additional `innerColor` prop)\n\n### Currency Icons\n\n`usd`, `eur`, `gbp`, `jpy`, `cny`\n\n### Social Icons\n\n`google`, `apple`, `twitter`, `linkedIn`, `passkey`\n\n### Notification Icons\n\n`notificationInfo`, `notificationWarning`, `notificationSuccess`, `notificationError`\n\n### Logo Icons\n\n`logo`, `logoWord`, `logoNetwork`, `logoWithWords`, `logoBg`, `logoBeta`, `logoWithBeta`\n\n### Illustrations\n\n`illusChecked`, `illusEmailError`, `illusLinkExpired`, `illus2FA`, `illusLocked`, `illusError`, `illusRegionNotSupported`, `illusID`, `illusVerification`, `illusPending`, `illusPasskey`, `illusAddAccount`\n\n### Figma Aliases\n\nThese are convenience aliases that map to existing icons for Figma design-token parity:\n\n| Alias | Maps to |\n|-------|---------|\n| `depositFiatCrypto` | `deposit` |\n| `withdrawFiatCrypto` | `withdrawal` |\n| `accountdLocked` | `accountLocked` |\n| `personalSettings` | `account` |\n| `security2` | `systemSecurity` |\n| `iconPix` | `pix` |\n| `noApiKeys` | `brokenLink` |\n\n### Other\n\n`pause`\n\n## Color Inheritance\n\nThe `IconWrapper` uses `currentColor` as the default color and injects a runtime CSS rule so that SVG child elements without explicit `fill` or `stroke` attributes automatically inherit `currentColor`. This means icons follow the parent element's text color by default — set `color` on the parent or pass the `color` prop to override.\n",ie="# Input\n\nAn input family for `@1money/components-ui` covering single-line input, password, search, textarea, OTP, trade, amount, and mask use cases. The family shares a common shell for label, tip, feedback, size, status, and disabled state handling.\n\n## Import\n\n```tsx\nimport { Input } from '@1money/components-ui';\n// or\nimport { Input } from '@1money/components-ui/Input';\n```\n\n## Usage\n\n```tsx\n<Input label=\"Amount\" placeholder=\"Value\" />\n\n<Input.Password label=\"Password\" />\n\n<Input.Search label=\"Search\" onSearch={(value) => console.log(value)} />\n\n<Input.TextArea label=\"Memo\" rows={4} />\n\n<Input.OTP length={6} />\n\n<Input.Trade currencySymbol=\"$\" currencyUnit=\"USD\" />\n\n<Input.Amount currencyLabel=\"USDC\" />\n\n<Input.Mask mask=\"999-99-9999\" />\n```\n\n## Shared Props (`InputBaseProps`)\n\nThese props are available on all sub-components unless noted otherwise.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `size` | `'large' \\| 'small'` | `'large'` | Size variant |\n| `status` | `'default' \\| 'error' \\| 'warning' \\| 'success'` | `'default'` | Visual validation state |\n| `label` | `ReactNode` | — | Label content displayed above the control |\n| `info` | `ReactNode` | — | Optional helper content displayed beside the label |\n| `tip` | `ReactNode` | — | Optional helper text displayed between the label and control |\n| `feedback` | `ReactNode` | — | Feedback text displayed below the control |\n| `feedbackIcon` | `IconName \\| ReactNode` | — | Icon displayed alongside the feedback text |\n| `required` | `boolean` | `false` | Shows a required marker next to the label |\n| `disabled` | `boolean` | `false` | Disables user interaction |\n| `loading` | `boolean` | `false` | Shows a loading spinner and disables the control |\n| `prefix` | `ReactNode` | — | Leading slot inside the control |\n| `suffix` | `ReactNode` | — | Trailing slot inside the control |\n| `allowClear` | `boolean` | `false` | Shows a clear action when the field has a value |\n| `prefixCls` | `string` | `'input'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes on the shell root |\n\n> Note: `prefix`, `suffix`, and `allowClear` are not available on `Input.TextArea`. `prefix`, `suffix`, `allowClear`, and `loading` are not available on `Input.OTP`. `Input.Trade` uses its own layout and does not extend `InputBaseProps`.\n\n## `Input` Props\n\nExtends `InputBaseProps` and native `<input>` attributes (excluding `prefix`, `size`, `onChange`).\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Controlled value |\n| `defaultValue` | `string` | `''` | Uncontrolled initial value |\n| `placeholder` | `string` | — | Native input placeholder |\n| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |\n| `onClear` | `() => void` | — | Called when the clear action is triggered |\n| `mask` | `string` | — | When provided, the input behaves as a mask input. Tokens: `9` = digit, `a` = letter, `*` = alphanumeric |\n| `slotChar` | `string` | `'_'` | Placeholder character shown in unfilled mask positions |\n| `unmask` | `boolean` | `false` | When true, `onChange` receives the raw value without mask characters |\n| `autoClear` | `boolean` | `false` | When true, clears an incomplete mask value on blur |\n| `onComplete` | `(value: string) => void` | — | Called when all mask positions are filled |\n\n> When `mask` is provided, `Input` delegates to `Input.Mask` internally.\n\n## `Input.Password` Props\n\nExtends `InputBaseProps` and native `<input>` attributes (excluding `type`, `allowClear`).\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Controlled value |\n| `defaultValue` | `string` | `''` | Uncontrolled initial value |\n| `visibilityToggle` | `boolean` | `true` | Shows the visibility toggle button |\n| `showIcon` | `ReactNode` | `HideBalanceIcon` | Icon rendered when the password is visible (clicking hides it) |\n| `hideIcon` | `ReactNode` | `ViewBalanceIcon` | Icon rendered when the password is hidden (clicking reveals it) |\n| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |\n\n## `Input.Search` Props\n\nExtends `InputProps` (which extends `InputBaseProps`) and inherits all base and mask props.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Controlled value |\n| `defaultValue` | `string` | `''` | Uncontrolled initial value |\n| `loading` | `boolean` | `false` | Replaces the search icon with a spinner |\n| `searchButton` | `boolean \\| ReactNode` | `true` | Shows the search icon prefix; pass a node for custom content |\n| `searchTrigger` | `'enter' \\| 'button' \\| 'both'` | `'both'` | Controls whether Enter, the icon button, or both trigger search |\n| `onSearch` | `(value: string) => void` | — | Called when a search is triggered |\n| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |\n| `onClear` | `() => void` | — | Called when the clear action is triggered (requires `allowClear`) |\n\n## `Input.TextArea` Props\n\nExtends `InputBaseProps` (excluding `allowClear`, `prefix`, `suffix`) and native `<textarea>` attributes (excluding `onChange`, `prefix`).\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Controlled value |\n| `defaultValue` | `string` | `''` | Uncontrolled initial value |\n| `rows` | `number` | `4` | Visible row count |\n| `showCount` | `boolean` | `false` | Displays the current character count below the textarea |\n| `maxLength` | `number` | — | Native max character limit; also drives the count display as `current/max` |\n| `onChange` | `(value: string, event: ChangeEvent<HTMLTextAreaElement>) => void` | — | Called with the next value and the native change event |\n\n## `Input.OTP` Props\n\nExtends `InputBaseProps` (excluding `allowClear`, `prefix`, `suffix`, `loading`).\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Controlled OTP value |\n| `defaultValue` | `string` | `''` | Uncontrolled initial OTP value |\n| `length` | `number` | `6` | Number of OTP cells |\n| `autoFocus` | `boolean` | `false` | Focuses the first cell on mount |\n| `mask` | `boolean` | `false` | Renders each cell as a password field |\n| `formatter` | `(value: string) => string` | — | Transforms the aggregated value before it is stored |\n| `onChange` | `(value: string) => void` | — | Called whenever the OTP value changes |\n| `onComplete` | `(value: string) => void` | — | Called when all cells are filled |\n\n## `Input.Trade` Props\n\nA specialized numeric input for trade/exchange flows. Does not use `FieldShell` or extend `InputBaseProps`.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Controlled value |\n| `defaultValue` | `string` | — | Uncontrolled initial value |\n| `status` | `'default' \\| 'error' \\| 'warning' \\| 'success'` | `'default'` | Visual validation state (only `error` has a distinct style) |\n| `disabled` | `boolean` | `false` | Disables user interaction |\n| `readOnly` | `boolean` | `false` | Makes the field read-only |\n| `placeholder` | `string` | `'0'` | Native input placeholder |\n| `currencySymbol` | `string` | `'$'` | Currency symbol displayed before the value |\n| `currencyUnit` | `string` | `'USD'` | Currency unit displayed after the value |\n| `exchangeText` | `ReactNode` | — | Exchange info displayed in the subline (e.g. `\"0 USDT\"`) |\n| `feedback` | `ReactNode` | — | Error or helper message displayed below the subline |\n| `showMax` | `boolean` | `false` | Shows a Max button |\n| `onMax` | `() => void` | — | Called when the Max button is clicked |\n| `onSwap` | `() => void` | — | Called when the swap icon is clicked; also renders the swap button when provided |\n| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |\n| `min` | `number \\| bigint` | — | Minimum numeric value (inclusive) |\n| `max` | `number \\| bigint` | — | Maximum numeric value (inclusive) |\n| `maxFractionDigits` | `number \\| bigint` | — | Maximum number of decimal places |\n| `negative` | `boolean` | — | Allows negative numbers |\n| `className` | `string` | `''` | Additional CSS classes on the root element |\n| `prefixCls` | `string` | `'input'` | CSS class prefix |\n\n## `Input.Amount` Props\n\nA numeric input for token/currency amount entry. Extends `InputBaseProps` (excluding `allowClear`) and native `<input>` attributes (excluding `prefix`, `size`, `onChange`, `min`, `max`).\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Controlled value |\n| `defaultValue` | `string` | — | Uncontrolled initial value |\n| `allowClear` | `boolean` | `false` | Shows a clear action when the field has a value |\n| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |\n| `onClear` | `() => void` | — | Called when the clear action is triggered |\n| `actionLabel` | `ReactNode` | — | Action button label (e.g. `\"Use Max\"`) rendered in the suffix before the currency selector |\n| `onAction` | `() => void` | — | Called when the action button is clicked |\n| `currencyIcon` | `ReactNode` | — | Currency icon shown in the currency selector (e.g. `<img src=\"...\" />`) |\n| `currencyLabel` | `string` | — | Currency label text shown in the selector (e.g. `\"USDC\"`) |\n| `onCurrencyClick` | `() => void` | — | Called when the currency selector is clicked; also renders a chevron when provided |\n| `min` | `number \\| bigint` | — | Minimum numeric value (inclusive) |\n| `max` | `number \\| bigint` | — | Maximum numeric value (inclusive) |\n| `maxFractionDigits` | `number \\| bigint` | — | Maximum number of decimal places |\n| `negative` | `boolean` | — | Allows negative numbers |\n\n## `Input.Mask` Props\n\nA standalone masked input. Extends `InputBaseProps` (excluding `allowClear`) and native `<input>` attributes (excluding `prefix`, `size`, `onChange`).\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `mask` | `string` | — | **Required.** Mask pattern. Tokens: `9` = digit, `a` = letter, `*` = alphanumeric. Literal characters pass through as-is |\n| `value` | `string` | — | Controlled value |\n| `defaultValue` | `string` | `''` | Uncontrolled initial value |\n| `slotChar` | `string` | `'_'` | Placeholder character shown in unfilled mask positions |\n| `unmask` | `boolean` | `false` | When true, `onChange` receives the raw value without mask characters or slot chars |\n| `autoClear` | `boolean` | `false` | When true, clears an incomplete mask value on blur |\n| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the formatted (or raw if `unmask`) value and the native change event |\n| `onComplete` | `(value: string) => void` | — | Called when all mask token positions are filled |\n",re="# Link\n\nInline text hyperlink with three color variants and two sizes. Wraps a native `<a>` element and applies the `link` typography scale (underlined).\n\n## Import\n\n```tsx\nimport { Link } from '@1money/components-ui';\n// or\nimport { Link } from '@1money/components-ui/Link';\n```\n\n## Usage\n\n```tsx\n<Link href=\"https://1money.com\" color=\"primary\" size=\"large\">\n  Visit 1Money\n</Link>\n```\n\nDisabled:\n\n```tsx\n<Link disabled>Read more</Link>\n```\n\nExternal (auto `rel=\"noopener noreferrer\"` when `target=\"_blank\"`):\n\n```tsx\n<Link href=\"https://docs.1money.com\" target=\"_blank\">\n  Documentation\n</Link>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `color` | `'primary' \\| 'black' \\| 'grey'` | `'primary'` | Visual color variant |\n| `size` | `'large' \\| 'small'` | `'large'` | Typography size (large = 14px, small = 12px) |\n| `disabled` | `boolean` | `false` | Disables navigation, click, and focus |\n| `href` | `string` | — | Target URL |\n| `target` | `'_blank' \\| '_self' \\| ...` | — | Anchor target |\n| `rel` | `string` | auto `'noopener noreferrer'` when `target=\"_blank\"` | Anchor rel attribute |\n| `children` | `ReactNode` | — | Link content |\n| `onClick` | `(e: MouseEvent) => void` | — | Click handler (suppressed when disabled) |\n| `prefixCls` | `string` | `'link'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n",se="# Navigation\n\nVertical sidebar navigation component with support for collapsible menus, sub-menus, icons, and active/disabled states. Also exports `Nav`, a flat/grouped navigation component that supports recursive multi-level nesting.\n\n## Import\n\n```tsx\nimport { Navigation, Nav } from '@1money/components-ui';\n// or\nimport { Navigation, Nav } from '@1money/components-ui/Navigation';\n```\n\n## Usage\n\n### Navigation (sidebar with collapse)\n\n```tsx\nimport { useRef } from 'react';\nimport type { NavigationHandlers } from '@1money/components-ui';\n\nconst ref = useRef<NavigationHandlers>(null);\n\n<Navigation\n  ref={ref}\n  items={[\n    { key: 'home', label: 'Home', icon: 'home', active: true },\n    { key: 'portfolio', label: 'Portfolio', icon: 'portfolio' },\n    {\n      key: 'transactions',\n      label: 'Transactions',\n      icon: 'transactions',\n      children: [\n        { key: 'deposits', label: 'Deposits' },\n        { key: 'withdrawals', label: 'Withdrawals' },\n      ],\n    },\n  ]}\n  collapsible\n  onCollapse={(collapsed) => console.log(collapsed)}\n  selector={<CompanySelector />}\n>\n  {/* rendered at the bottom of the sidebar */}\n  <SettingsLink />\n</Navigation>\n\n// Imperative control\nref.current?.toggle();\nref.current?.collapse(true);\n```\n\n### Nav (flat / grouped navigation)\n\n```tsx\n<Nav\n  items={[\n    {\n      key: 'group-accounts',\n      label: 'Accounts',\n      icon: 'wallet',\n      children: [\n        { key: 'checking', label: 'Checking', active: true },\n        { key: 'savings', label: 'Savings' },\n      ],\n    },\n    { key: 'settings', label: 'Settings' },\n  ]}\n/>\n```\n\n## Navigation Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `items` | `NavigationItem[]` | — | Navigation menu items (required) |\n| `collapsed` | `boolean` | — | Controlled collapsed state |\n| `defaultCollapsed` | `boolean` | `false` | Default collapsed state (uncontrolled) |\n| `collapsible` | `boolean` | `false` | Whether the collapse toggle button is shown |\n| `onCollapse` | `(collapsed: boolean) => void` | — | Callback when collapsed state changes |\n| `header` | `ReactNode` | built-in 1Money logo | Header content; pass `null` to hide |\n| `onLogoClick` | `(e: MouseEvent<HTMLElement>) => void` | — | Click handler for the default logo |\n| `selector` | `ReactNode` | — | Company selector slot rendered below the header |\n| `children` | `ReactNode` | — | Content rendered at the bottom of the sidebar (e.g., settings, profile) |\n| `prefixCls` | `string` | `'navigation'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n## NavigationHandlers (imperative ref)\n\nWhen a `ref` is attached to `<Navigation>`, the handle exposes:\n\n| Method | Signature | Description |\n|--------|-----------|-------------|\n| `toggle` | `() => void` | Toggle the collapsed state |\n| `collapse` | `(collapsed: boolean) => void` | Set the collapsed state directly |\n\n## NavigationItem\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `key` | `string \\| number` | — | Unique key |\n| `label` | `ReactNode` | — | Display label (required) |\n| `icon` | `ReactNode` | — | Icon for top-level group headers; accepts an `IconName` string or any `ReactNode` |\n| `suffix` | `ReactNode` | — | Content rendered after the label (e.g., a badge or tag) |\n| `link` | `string \\| ReactElement` | — | URL string or link component (e.g., Next.js `<Link>`) that wraps the item |\n| `active` | `boolean` | `false` | Whether this item is currently active |\n| `disabled` | `boolean` | `false` | Whether this item is disabled |\n| `hidden` | `boolean` | `false` | Whether this item is hidden (excluded from render) |\n| `onClick` | `(e: MouseEvent<HTMLElement>) => void` | — | Click handler |\n| `children` | `Omit<NavigationItem, 'children' \\| 'defaultOpen' \\| 'onOpenChange'>[]` | — | Sub-menu items (Level 2) |\n| `defaultOpen` | `boolean` | `false` | Whether the sub-menu is open by default |\n| `onOpenChange` | `(open: boolean) => void` | — | Callback when the sub-menu open state changes |\n\n## Nav Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `items` | `NavItem[]` | — | Navigation items (required). Top-level items with `children` render as collapsible groups |\n| `prefixCls` | `string` | `'nav'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n## NavItem\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `key` | `string \\| number` | — | Unique key |\n| `label` | `ReactNode` | — | Display label (required) |\n| `icon` | `ReactNode` | — | Icon — accepts an `IconName` string or any `ReactNode` |\n| `suffix` | `ReactNode` | — | Content rendered after the label |\n| `link` | `string \\| ReactElement` | — | URL string or link component that wraps the item |\n| `active` | `boolean` | `false` | Whether this item is currently active |\n| `disabled` | `boolean` | `false` | Whether this item is disabled |\n| `hidden` | `boolean` | `false` | Whether this item is hidden (excluded from render) |\n| `children` | `NavItem[]` | — | Nested child items — enables recursive multi-level nesting |\n| `defaultOpen` | `boolean` | `false` | Whether children are expanded by default |\n| `onOpenChange` | `(open: boolean) => void` | — | Callback when expand state changes |\n| `onClick` | `(e: MouseEvent<HTMLElement>) => void` | — | Click handler |\n",le=`# Notification

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
`,ce="# Pagination\n\nPagination control with previous/next actions, page windows, boundary pages, and ellipsis handling. The `usePagination` hook is also exported for custom renderers.\n\n## Import\n\n```tsx\nimport { Pagination, usePagination } from '@1money/components-ui';\n// or\nimport { Pagination, usePagination } from '@1money/components-ui/Pagination';\n```\n\n## Usage\n\n```tsx\n<Pagination\n  total={125}\n  pageSize={10}\n  defaultCurrent={1}\n  onChange={(page, pageSize) => console.log(page, pageSize)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `total` | `number` | — | Total item count |\n| `pageSize` | `number` | `10` | Items per page |\n| `current` | `number` | — | Controlled current page |\n| `defaultCurrent` | `number` | `1` | Initial page |\n| `boundaryCount` | `number` | `1` | Pages always shown at both start and end |\n| `middlePageCount` | `number` | `3` | Maximum pages shown around the current page |\n| `onChange` | `(page: number, pageSize: number) => void` | — | Called when page changes |\n| `aria-label` | `string` | `'Pagination'` | Navigation landmark label |\n| `prefixCls` | `string` | `'pagination'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\nWhen `total` resolves to `0`, the component renders `null`.\n\n## `usePagination`\n\n`usePagination(options)` accepts the same pagination options and returns:\n\n| Field | Type | Description |\n|-------|------|-------------|\n| `current` | `number` | Current page |\n| `pageSize` | `number` | Current page size |\n| `total` | `number` | Total item count |\n| `totalPages` | `number` | Computed page count |\n| `canPrevious` / `canNext` | `boolean` | Whether controls can move |\n| `items` | `PaginationItem[]` | Page, control, and ellipsis items |\n| `goTo` / `previous` / `next` | functions | Imperative pagination helpers |\n\n",de="# Popconfirm\n\nPopconfirm is a semantic confirmation overlay built on top of `Trigger`. It presents a compact title/body layout with two actions and a placement-aware beak arrow.\n\n## Import\n\n```tsx\nimport { Popconfirm } from '@1money/components-ui';\nimport '@1money/components-ui/index.css';\n```\n\n## Basic Usage\n\n```tsx\n<Popconfirm\n  title=\"Delete transfer rule?\"\n  body=\"This action removes the rule immediately and cannot be undone.\"\n  cancelText=\"Keep rule\"\n  confirmText=\"Delete\"\n  onConfirm={() => {\n    // perform delete\n  }}\n>\n  <Button color=\"danger\">Delete rule</Button>\n</Popconfirm>\n```\n\n## Props\n\n| Name | Type | Default | Description |\n| --- | --- | --- | --- |\n| `title` | `ReactNode` | `undefined` | Heading shown at the top of the floating card. |\n| `body` | `ReactNode` | `undefined` | Secondary description shown below the title. |\n| `icon` | `IconName` | `'notificationInfo'` | Icon rendered beside the text content. |\n| `showIcon` | `boolean` | `true` | Toggles the leading icon. |\n| `showArrow` | `boolean` | `true` | Toggles the custom beak arrow. |\n| `cancelText` | `ReactNode` | `'Cancel'` | Label for the secondary action. |\n| `confirmText` | `ReactNode` | `'Confirm'` | Label for the primary action. |\n| `cancelButtonProps` | `Omit<ButtonProps, 'children'>` | `undefined` | Additional props merged onto the secondary button. |\n| `confirmButtonProps` | `Omit<ButtonProps, 'children'>` | `undefined` | Additional props merged onto the primary button. |\n| `closeOnCancel` | `boolean` | `true` | Closes the panel automatically after the secondary action unless prevented. |\n| `closeOnConfirm` | `boolean` | `true` | Closes the panel automatically after the primary action unless prevented. |\n| `onCancel` | `(event, context) => void` | `undefined` | Called when the secondary action is clicked. Call `event.preventDefault()` to keep the panel open. |\n| `onConfirm` | `(event, context) => void` | `undefined` | Called when the primary action is clicked. Call `event.preventDefault()` to keep the panel open. |\n| `className` | `string` | `undefined` | Class name applied to the Popconfirm card. |\n| `prefixCls` | `string` | `'popconfirm'` | CSS class prefix used to generate internal BEM-style classes. |\n| `trigger` | `TriggerAction \\| TriggerAction[]` | `'click'` | Trigger mode forwarded to `Trigger`. |\n| `placement` | `Placement` | `'top'` | Floating placement forwarded to `Trigger`. |\n| `offset` | `number` | `8` | Distance between the trigger anchor and the floating card. |\n\nAll other props from `TriggerProps` are also accepted, excluding `content` and `role`, which are managed internally.\n",pe=`# Portal

Utility component for rendering children into \`document.body\` or a custom container. It can also be disabled to render children in place.

## Import

\`\`\`tsx
import { Portal } from '@1money/components-ui';
// or
import { Portal } from '@1money/components-ui/Portal';
\`\`\`

## Usage

\`\`\`tsx
<Portal>
  <div>Rendered in document.body</div>
</Portal>

<Portal disablePortal>
  <div>Rendered in place</div>
</Portal>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`children\` | \`ReactNode\` | — | Content to render |
| \`container\` | \`Element \\| (() => Element \\| null) \\| null\` | \`document.body\` | Portal target |
| \`disablePortal\` | \`boolean\` | \`false\` | Render children in place instead of portaling |

`,ue="# ProForm\n\nUnified form system built on the internal form core and 1Money field components. `ProForm` wraps a native `<form>`, manages values/validation, and exposes item primitives, field wrappers, dependency rendering, list fields, grouped sections, and overlay form layouts.\n\n## Import\n\n```tsx\nimport {\n  ProForm,\n  ProFormText,\n  ProFormSelect,\n  DialogForm,\n  QueryFilter,\n} from '@1money/components-ui';\n// or\nimport { ProForm, ProFormText } from '@1money/components-ui/ProForm';\n```\n\n## Usage\n\n```tsx\n<ProForm\n  initialValues={{ name: '' }}\n  onFinish={(values) => console.log(values)}\n>\n  <ProForm.Text\n    name=\"name\"\n    label=\"Name\"\n    rules={[{ required: true, message: 'Name is required' }]}\n  />\n  <ProForm.Select\n    name=\"currency\"\n    label=\"Currency\"\n    fieldProps={{ options: [{ label: 'USD', value: 'USD' }] }}\n  />\n</ProForm>\n```\n\n## Exports\n\n`ProForm` is the root component and also exposes static members:\n\n`ProForm.Item`, `ProForm.Dependency`, `ProForm.List`, `ProForm.Group`, `ProForm.FieldSet`, `ProForm.Submitter`, `ProForm.Text`, `ProForm.Password`, `ProForm.TextArea`, `ProForm.Checkbox`, `ProForm.CheckboxGroup`, `ProForm.Switch`, `ProForm.Select`, `ProForm.RadioGroup`, `ProForm.Slider`, `ProForm.DatePicker`, `ProForm.Upload`, `ProForm.useForm`, `ProForm.useInstance`, and `ProForm.useContext`.\n\nNamed exports include `ProFormItem`, `ProFormDependency`, `ProFormList`, `ProFormGroup`, all field components, `DialogForm`, `DrawerForm`, `QueryFilter`, and `createProFormField`.\n\n## ProForm Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `initialValues` | `Record<string, unknown>` | — | Initial form values |\n| `onFinish` | `(values) => void` | — | Called after successful submit with transformed values |\n| `onFinishFailed` | `({ values, errors }) => void` | — | Called when validation fails |\n| `onValuesChange` | `(changedValues, allValues) => void` | — | Called when a field changes |\n| `onReset` | `() => void` | — | Called when reset runs |\n| `size` | `FormSize` | `'middle'` | Form control size |\n| `labelAlign` | `LabelAlign` | `'left'` | Label alignment |\n| `disabled` | `boolean` | `false` | Disables child fields through context |\n| `colon` | `boolean` | `true` | Show label colon |\n| `requiredMark` | `boolean` | `true` | Show required marker |\n| `validateTrigger` | `ValidateTrigger` | `'onChange'` | Validation trigger |\n| `submitter` | `SubmitterProps \\| false` | default submitter | Submit/reset button configuration |\n| `mode` | `ProFormMode` | `'edit'` | Form display mode |\n| `grid` | `boolean` | `false` | Render items in grid layout |\n| `colProps` | `ProFormColProps` | — | Default grid column props for items |\n| `rowProps` | `Partial<GridRowProps>` | — | Grid row props |\n| `loading` | `boolean` | `false` | Loading state for async request usage |\n| `request` | `(params?) => Promise<Record<string, unknown>>` | — | Loads values asynchronously |\n| `params` | `unknown` | — | Parameters passed to `request` |\n| `formRef` | `MutableRefObject<ProFormFormInstance \\| undefined>` | — | Imperative form instance ref |\n| `omitNil` | `boolean` | — | Omit nil values from submitted output |\n| `prefixCls` | `string` | — | Accepted for API compatibility; the current root class prefix is `proform` |\n| `className` | `string` | — | Additional CSS classes |\n\nAll other native form attributes are forwarded to the `<form>` element, excluding `onSubmit` and `onReset`.\n\n## Field Props\n\nField components use `ProFormFieldProps<FieldProps>`.\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `name` | `string` | Field name |\n| `label` | `ReactNode` | Field label |\n| `rules` | `Rule[]` | Validation rules |\n| `required` | `boolean` | Required marker and validation hint |\n| `description` / `feedback` | `ReactNode` | Helper and feedback content |\n| `fieldProps` | `Partial<FieldProps>` | Props passed to the wrapped field component |\n| `mode` / `readonly` | `ProFormMode` / `boolean` | Display mode controls |\n| `hidden` | `boolean` | Hide field |\n| `colProps` | `ProFormColProps` | Grid column config |\n| `transform` | `ProFormFieldTransformFn` | Transform submitted value |\n| `convertValue` | `ProFormFieldConvertValueFn` | Convert value before rendering |\n| `dependencies` | `string[]` | Field dependencies |\n| `request` / `params` | async options loader | Load field options |\n| `valueEnum` | `ProFormValueEnumObj` | Option map for select/radio/tag renderers |\n| `debounceTime` | `number` | Debounce async request |\n\n## Layout Forms\n\n`DialogForm` and `DrawerForm` combine overlay components with `ProForm`.\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `open` | `boolean` | Controlled overlay state |\n| `onOpenChange` | `(open: boolean) => void` | Open state callback |\n| `trigger` | `ReactElement` | Element that opens the form |\n| `title` | `ReactNode` | Overlay title |\n| `submitTimeout` | `number` | Submit loading timeout |\n| `autoClose` | `boolean` | Close after successful submit |\n| `destroyOnClose` | `boolean` | Unmount form when closed |\n| `dialogProps` / `drawerProps` | overlay props | Extra props for the underlying overlay |\n\n`QueryFilter` extends `ProForm` with collapsed search layout props such as `defaultCollapsed`, `collapsed`, `defaultColsNumber`, `labelWidth`, `split`, `searchConfig`, and `syncToUrl`.\n",me="# Progress\n\nLinear progress indicator for continuous percentage progress with semantic status styling. Automatically derives a visual state from `percent` when no explicit `state` is provided, and renders an optional info row and error feedback slot.\n\n## Import\n\n```tsx\nimport { Progress } from '@1money/components-ui';\n// or\nimport { Progress } from '@1money/components-ui/Progress';\n```\n\n## Usage\n\n```tsx\n{/* Basic usage */}\n<Progress percent={40} />\n\n{/* Explicit state */}\n<Progress percent={100} state=\"success\" />\n<Progress percent={60} state=\"error\" feedback=\"Upload failed. Please try again.\" />\n\n{/* White color variant (e.g. on a dark background) */}\n<Progress percent={70} color=\"white\" />\n\n{/* Custom info formatter */}\n<Progress\n  percent={55}\n  format={(percent) => `${percent} of 100 steps complete`}\n/>\n\n{/* Info row on the right */}\n<Progress percent={30} placement=\"right\" />\n\n{/* Hide info row */}\n<Progress percent={50} showInfo={false} />\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `percent` | `number` | — | **Required.** Completion progress as a percentage. Values are clamped to `0–100`. |\n| `state` | `'default' \\| 'success' \\| 'error' \\| 'not-started'` | derived | Semantic visual state. When omitted the component derives one from `percent`: `<= 0` → `'not-started'`, `>= 100` → `'success'`, otherwise `'default'`. |\n| `color` | `'gray' \\| 'white'` | `'gray'` | Track color scheme variant. Use `'white'` on dark backgrounds. |\n| `placement` | `'left' \\| 'right'` | `'left'` | Alignment of the info row relative to the bar. |\n| `showInfo` | `boolean` | `true` | Whether to render the info row (percentage text or custom `format` output). |\n| `format` | `(percent: number, ctx: ProgressFormatContext) => ReactNode` | — | Custom formatter for the info row. Receives the clamped `percent` and `{ percent, state }` context. |\n| `feedback` | `ReactNode` | — | Content rendered below the bar only when `state` resolves to `'error'`. Accepts a string or any React node. |\n| `prefixCls` | `string` | `'progress'` | CSS class prefix used for BEM namespace customization. |\n| `className` | `string` | `''` | Additional CSS classes appended to the root element. |\n| `ref` | `RefObject<HTMLDivElement \\| null>` | — | Ref forwarded to the root `<div>` element. |\n\nThis component also accepts all standard HTML `<div>` attributes (`id`, `style`, `data-*`, `aria-*`, etc.).\n\n### ProgressFormatContext\n\nPassed as the second argument to the `format` prop:\n\n| Field | Type | Description |\n|-------|------|-------------|\n| `percent` | `number` | Clamped percentage value (`0–100`). |\n| `state` | `ProgressState` | The resolved state after auto-derivation. |\n",he=`# Radio

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
`,ge="# ResizeObserver\n\nReact wrapper around resize observation utilities. It calls `onResize` on first render and whenever the observed element changes size.\n\n## Import\n\n```tsx\nimport { ResizeObserver, useResizeObserver } from '@1money/components-ui';\n// or\nimport { ResizeObserver, useResizeObserver } from '@1money/components-ui/ResizeObserver';\n```\n\n## Usage\n\n```tsx\n<ResizeObserver\n  onResize={(size, element) => {\n    console.log(size.width, element);\n  }}\n>\n  <div>Measured content</div>\n</ResizeObserver>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `children` | `ReactNode \\| ((ref) => ReactElement)` | — | Observed element or render function |\n| `disabled` | `boolean` | `false` | Disables resize observation |\n| `onResize` | `(size: SizeInfo, element: HTMLElement) => void` | — | Called on initial measurement and resize |\n| `data` | `unknown` | — | Additional data for collection usage |\n\n### SizeInfo\n\n| Field | Type | Description |\n|-------|------|-------------|\n| `width` / `height` | `number` | Content rectangle size |\n| `offsetWidth` / `offsetHeight` | `number` | Element offset size |\n\n",fe="# Segment\n\nA segmented control component for switching between mutually exclusive options. Displays options as a horizontal pill group with a sliding active indicator.\n\n## Import\n\n```tsx\nimport { Segment } from '@1money/components-ui';\n// or\nimport { Segment } from '@1money/components-ui/Segment';\n```\n\n## Usage\n\n```tsx\n<Segment\n  defaultValue=\"overview\"\n  items={[\n    { value: 'overview', label: 'Overview' },\n    { value: 'transactions', label: 'Transactions' },\n    { value: 'analytics', label: 'Analytics' },\n  ]}\n  onChange={(value) => console.log('Selected:', value)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `items` | `SegmentItem[]` | — | Segment options (required) |\n| `value` | `string` | — | Selected value (controlled mode) |\n| `defaultValue` | `string` | First item value | Default selected value (uncontrolled mode) |\n| `animated` | `boolean` | `true` | Whether to animate the sliding indicator transition |\n| `onChange` | `(value: string) => void` | — | Callback when selection changes |\n| `prefixCls` | `string` | `'segment'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n### SegmentItem\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `string` | — | Unique value (required) |\n| `label` | `ReactNode` | — | Display label |\n| `disabled` | `boolean` | `false` | Whether the option is disabled |\n",be="# Select\n\nCustom select component with single and multiple selection, option groups, searchable lists, field shell metadata, validation states, and custom render hooks.\n\n## Import\n\n```tsx\nimport { Select } from '@1money/components-ui';\n// or\nimport { Select } from '@1money/components-ui/Select';\n```\n\n## Usage\n\n```tsx\n<Select\n  label=\"Currency\"\n  placeholder=\"Select currency\"\n  options={[\n    { label: 'USD', value: 'USD' },\n    { label: 'EUR', value: 'EUR', disabled: true },\n  ]}\n  onChange={(value, option) => console.log(value, option)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `placeholder` | `ReactNode` | `'Value'` | Placeholder content |\n| `options` | `SelectOptionData[]` | `[]` | Options or option groups |\n| `value` | `SelectValue` | — | Controlled value |\n| `defaultValue` | `SelectValue` | `[]` for multiple, otherwise `undefined` | Initial value |\n| `size` | `'large' \\| 'middle' \\| 'small'` | `'large'` | Control size. `middle` normalizes to large styling |\n| `status` | `'default' \\| 'error' \\| 'warning' \\| 'success'` | `'default'` | Validation state |\n| `variant` | `'fill' \\| 'stroke' \\| 'frameless'` | `'fill'` | Visual style |\n| `disabled` | `boolean` | `false` | Disables interaction |\n| `multiple` | `boolean` | `false` | Enables multiple selection |\n| `maxVisibleValues` | `number` | — | Maximum selected values shown before collapsing |\n| `searchable` | `boolean` | `false` | Shows search input inside the panel |\n| `searchPlaceholder` | `string` | `'Search'` | Search input placeholder |\n| `searchValue` | `string` | — | Controlled search value |\n| `defaultSearchValue` | `string` | `''` | Initial search value |\n| `label` / `info` / `description` / `feedback` | `ReactNode` | — | Field shell metadata |\n| `required` | `boolean` | `false` | Shows required marker |\n| `prefix` | `ReactNode` | — | Leading content in the control |\n| `emptyContent` | `ReactNode` | `'No options'` | Empty list content |\n| `panelFooter` | `ReactNode` | — | Content below the option list |\n| `open` | `boolean` | — | Controlled open state |\n| `defaultOpen` | `boolean` | `false` | Initial open state |\n| `listMaxHeight` | `number` | `320` | Maximum panel list height |\n| `onChange` | `(value, option?) => void` | — | Called when selection changes |\n| `onOpenChange` | `(open: boolean) => void` | — | Called when panel opens/closes |\n| `onSearchChange` | `(value: string) => void` | — | Called when search changes |\n| `onBlur` | `(event?) => void` | — | Blur handler |\n| `filterOption` | `(searchValue, option) => boolean` | built-in text match | Custom filter function |\n| `renderOption` | `(option, meta) => ReactNode` | — | Custom option renderer |\n| `renderValue` | `(option, meta) => ReactNode` | — | Custom selected value renderer |\n| `id` / `name` / `aria-label` / `aria-labelledby` | `string` | — | Native/accessibility attributes |\n| `prefixCls` | `string` | `'select'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n### SelectOption\n\n| Field | Type | Description |\n|-------|------|-------------|\n| `label` | `ReactNode` | Option label |\n| `value` | `string \\| number` | Option value |\n| `disabled` | `boolean` | Disable this option |\n| `description` | `ReactNode` | Secondary option text |\n| `searchText` | `string` | Text used for search matching |\n\nOption groups use `{ label, options, key? }`.\n\n",ye=`# Skeleton

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
`,ve="# Slider\n\nA slider input component for selecting a numeric value within a range. Displays an optional label with value output and description text.\n\n## Import\n\n```tsx\nimport { Slider } from '@1money/components-ui';\n// or\nimport { Slider } from '@1money/components-ui/Slider';\n```\n\n## Usage\n\n```tsx\n<Slider\n  label=\"Price\"\n  description=\"Set your budget\"\n  valuePrefix=\"$\"\n  defaultValue={40}\n  min={0}\n  max={100}\n  onChange={(value) => console.log(value)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `value` | `number` | — | Current value (controlled) |\n| `defaultValue` | `number` | `min` | Default value (uncontrolled) |\n| `min` | `number` | `0` | Minimum value |\n| `max` | `number` | `100` | Maximum value |\n| `step` | `number` | `1` | Step increment |\n| `disabled` | `boolean` | `false` | Disables the slider |\n| `label` | `ReactNode` | — | Label displayed above the slider |\n| `description` | `ReactNode` | — | Description displayed below the slider |\n| `showLabel` | `boolean` | `true` | Whether to show the label row |\n| `showDescription` | `boolean` | `true` | Whether to show the description |\n| `valuePrefix` | `string` | `''` | Prefix string for the output value (e.g., \"$\") |\n| `formatValue` | `(value, min, max) => string` | — | Custom formatter for the value display |\n| `onChange` | `(value: number) => void` | — | Callback when value changes |\n| `onChangeEnd` | `(value: number) => void` | — | Callback when user finishes dragging |\n| `id` | `string` | — | ID forwarded to the underlying `<input>` element |\n| `name` | `string` | — | Name forwarded to the underlying `<input>` element |\n| `aria-label` | `string` | — | Accessible label for the slider |\n| `aria-labelledby` | `string` | — | ID of an element that labels the slider |\n| `prefixCls` | `string` | `'slider'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n",we=`# Space

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
| \`size\` | \`'small' \\| 'middle' \\| 'large' \\| number \\| [SpaceSize, SpaceSize]\` | \`'small'\` (8px) | Gap size; when omitted, resolves to \`'small'\` (8px) internally |
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
`,Ce=`# Spinner

A loading spinner component used to indicate loading states and provide visual feedback to users. Supports three visual variants: a simple CSS ring (\`default\`), an animated Lottie logo (\`brand\`), and the same logo on a gradient circle background (\`brand-bg\`).

## Import

\`\`\`tsx
import { Spinner } from '@1money/components-ui';
// or
import { Spinner } from '@1money/components-ui/Spinner';
\`\`\`

## Usage

\`\`\`tsx
// Default ring spinner
<Spinner />

// Custom size
<Spinner size={48} />

// Brand Lottie spinner
<Spinner type="brand" />

// Brand spinner with title and body text
<Spinner type="brand" title="Loading" body="Please wait a moment" />

// Brand spinner with gradient background
<Spinner type="brand-bg" size={64} title="Setting up your account" />
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`type\` | \`'default' \\| 'brand' \\| 'brand-bg'\` | \`'default'\` | Spinner variant. \`'default'\` renders an animated CSS ring; \`'brand'\` renders an animated Lottie logo; \`'brand-bg'\` renders the logo centred on a gradient circle. |
| \`size\` | \`number\` | \`32\` | Diameter in pixels. For \`'brand-bg'\` the logo is scaled to two-thirds of this value. |
| \`title\` | \`string\` | — | Title text rendered below the animation. Only displayed for \`'brand'\` and \`'brand-bg'\` types. |
| \`body\` | \`string\` | — | Body text rendered below the title. Only displayed for \`'brand'\` and \`'brand-bg'\` types. |
| \`prefixCls\` | \`string\` | \`'spinner'\` | CSS class prefix used for BEM class generation. |
| \`className\` | \`string\` | — | Additional CSS classes applied to the root element. |
| \`style\` | \`CSSProperties\` | — | Inline styles applied to the root element (\`'default'\` type only). |

All other standard \`HTMLDivElement\` attributes (except \`title\`) are forwarded to the root \`<div>\`.

## Examples

### Inline Button Loading

\`\`\`tsx
<button disabled={loading}>
  {loading ? (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Spinner size={16} />
      <span>Submitting…</span>
    </div>
  ) : (
    'Submit'
  )}
</button>
\`\`\`

### Page Loading Overlay

\`\`\`tsx
const PageLoader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay">
      <Spinner size={48} />
    </div>
  );
};
\`\`\`

### Brand Spinner with Message

\`\`\`tsx
<Spinner
  type="brand"
  size={56}
  title="Hang tight"
  body="We're processing your request"
/>
\`\`\`

### Brand Spinner on Gradient Background

\`\`\`tsx
<Spinner
  type="brand-bg"
  size={80}
  title="Setting up your account"
/>
\`\`\`
`,xe="# Step\n\nVertical step/status list for multi-step workflows. Each item can show a generated number, success/error status icon, custom indicator, description, and optional tag.\n\n## Import\n\n```tsx\nimport { Step } from '@1money/components-ui';\n// or\nimport { Step } from '@1money/components-ui/Step';\n```\n\n## Usage\n\n```tsx\n<Step\n  items={[\n    { key: 'start', title: 'Start', description: 'Create the request', status: 'completed' },\n    { key: 'review', title: 'Review', tag: { label: 'Pending' } },\n    { key: 'done', title: 'Complete' },\n  ]}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `items` | `StepItem[]` | — | Step items to render |\n| `prefixCls` | `string` | `'step'` | CSS class prefix |\n| `className` | `string` | — | Additional CSS classes |\n\nAll other standard `HTMLDivElement` attributes are forwarded to the root element.\n\n### StepItem\n\n| Field | Type | Description |\n|-------|------|-------------|\n| `key` | `string` | Unique item key |\n| `title` | `ReactNode` | Main step title |\n| `description` | `ReactNode` | Secondary copy |\n| `status` | `'default' \\| 'completed' \\| 'error'` | Status controlling indicator and default tag color |\n| `indicator` | `ReactNode` | Custom indicator node |\n| `tag` | `ReactNode \\| StepTagConfig` | Optional tag rendered beside the copy |\n\n### StepTagConfig\n\n| Field | Type | Description |\n|-------|------|-------------|\n| `label` | `string` | Tag label |\n| `color` | `TagProps['color']` | Tag color |\n| `size` | `TagProps['size']` | Tag size |\n| `icon` | `TagProps['icon']` | Tag icon |\n\n",Se="# Switch\n\nA toggle switch component for binary on/off choices. Supports optional label and description text with configurable placement.\n\n## Import\n\n```tsx\nimport { Switch } from '@1money/components-ui';\n// or\nimport { Switch } from '@1money/components-ui/Switch';\n```\n\n## Usage\n\n```tsx\n<Switch label=\"Notifications\" onChange={(checked) => console.log(checked)} />\n\n<Switch\n  label=\"Dark Mode\"\n  description=\"Enable dark theme across the app\"\n  defaultChecked\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `checked` | `boolean` | — | Controlled checked state |\n| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled) |\n| `disabled` | `boolean` | `false` | Disables the switch |\n| `label` | `ReactNode` | — | Label text |\n| `description` | `ReactNode` | — | Description text below the label |\n| `labelPlacement` | `'left' \\| 'right'` | `'left'` | Label position relative to switch |\n| `onChange` | `(checked: boolean) => void` | — | Callback on state change |\n| `id` | `string` | — | ID forwarded to the underlying `<input>` element |\n| `name` | `string` | — | Name forwarded to the underlying `<input>` element |\n| `aria-label` | `string` | — | Accessible label for the switch |\n| `aria-labelledby` | `string` | — | ID of an element that labels the switch |\n| `prefixCls` | `string` | `'switch'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n",Te="# Table\n\n## What it is\n\n- `Table` is the standard table component.\n- `VirtualTable` is the virtualized variant with numeric `scroll.x` and `scroll.y`.\n\n## Import\n\n```tsx\nimport { Table, VirtualTable } from '@1money/components-ui';\n// or\nimport { Table, VirtualTable } from '@1money/components-ui/Table';\n```\n\n## Basic Usage\n\n```tsx\n<Table rowKey=\"id\" columns={columns} dataSource={rows} />\n```\n\n## Figma-aligned Expandable Example\n\nUse `expandable.showExpandColumn={false}` when the expand trigger should live inside your own business cell, instead of the default leading expand column.\n\n```tsx\nfunction WalletRegistryTable() {\n  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>(['wallet-ops']);\n\n  return (\n    <Table\n      rowKey=\"id\"\n      size=\"small\"\n      variant=\"stroke\"\n      pagination={false}\n      columns={[\n        {\n          key: 'walletName',\n          title: 'Wallet name',\n          render: (_value, record) => (\n            <button\n              type=\"button\"\n              onClick={() => {\n                setExpandedRowKeys((current) => (\n                  current.includes(record.id)\n                    ? current.filter((key) => key !== record.id)\n                    : [...current, record.id]\n                ));\n              }}\n            >\n              {record.walletName}\n            </button>\n          ),\n        },\n        {\n          key: 'walletSummary',\n          dataIndex: 'walletSummary',\n          title: 'Wallet address',\n        },\n        {\n          key: 'actions',\n          title: 'Actions',\n          align: 'right',\n          render: () => '...',\n        },\n      ]}\n      dataSource={rows}\n      expandable={{\n        showExpandColumn: false,\n        expandedRowKeys,\n        expandedRowRender: (record) => <WalletDetails record={record} />,\n      }}\n    />\n  );\n}\n```\n\n## Virtual Usage\n\n```tsx\n<VirtualTable\n  rowKey=\"id\"\n  columns={columns}\n  dataSource={rows}\n  scroll={{ x: 1200, y: 360 }}\n/>\n```\n\n## Migration Notes\n\n- This component does not accept the old PrimeReact `value` prop.\n- Use `dataSource` instead.\n- `VirtualTable` is a separate export, not `virtual={true}` on `Table`.\n- `expandable.showExpandColumn={false}` hides the built-in expand column so you can render a custom trigger in your own cell.\n\n---\n\n## Props\n\n### `TableProps<T>`\n\nExtends `HTMLAttributes<HTMLDivElement>` (excluding `onChange`). `T` is the row data type.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `columns` | `TableColumnType<T>[]` | **required** | Column definitions. Each entry is a `TableColumn<T>` or a `TableColumnGroup<T>` (column groups have a `children` array). |\n| `dataSource` | `T[]` | **required** | Array of row data objects. |\n| `rowKey` | `keyof T \\| ((record: T) => Key)` | **required** | Unique key for each row. Can be a field name or a function returning the key. |\n| `size` | `'large' \\| 'small'` | `'large'` | Row density / visual size variant. |\n| `variant` | `'fill' \\| 'stroke'` | `'fill'` | Table surface style. `'fill'` uses a filled background; `'stroke'` uses bordered rows. |\n| `bordered` | `boolean` | — | Reserved for future use. Currently has no visual effect. |\n| `scroll` | `{ x?: number \\| true \\| string; y?: number \\| string }` | — | Enables horizontal (`x`) or vertical (`y`) scrolling. Set `x` to `true` to enable horizontal scroll without a fixed width. |\n| `sticky` | `boolean \\| { offsetHeader?: number; offsetScroll?: number }` | — | Makes the header sticky. Pass an object to offset the sticky position (useful when a fixed page header exists). |\n| `pagination` | `false \\| TablePaginationConfig` | — | Built-in pagination. Pass `false` to disable. Omitting the prop shows a default paginator. |\n| `rowSelection` | `TableRowSelection<T>` | — | Enables row selection with checkboxes or radio buttons. See `TableRowSelection` below. |\n| `expandable` | `TableExpandableConfig<T>` | — | Enables row expansion. See `TableExpandableConfig` below. |\n| `childrenColumnName` | `string` | `'children'` | Field name used to detect nested / tree data. |\n| `indentSize` | `number` | — | Width in pixels of each tree-data indent level. |\n| `loading` | `boolean` | `false` | Overlays a spinner on the table. When `true` and `dataSource` is empty, the empty state is hidden. |\n| `empty` | `EmptyProps \\| ReactNode` | — | Custom empty state. Accepts `EmptyProps` or any React node. |\n| `showHeader` | `boolean` | `true` | Shows or hides the table header row. |\n| `tableLayout` | `'auto' \\| 'fixed'` | — | CSS `table-layout` value. `'fixed'` enables precise column widths and ellipsis truncation. |\n| `components` | `TableComponents<T>` | — | Overrides internal table sub-elements (table, header row/cell, body row/cell). See `TableComponents` below. |\n| `direction` | `'ltr' \\| 'rtl'` | `'ltr'` | Text and layout direction. |\n| `rowHoverable` | `boolean` | `true` | Enables the row hover highlight. Set `false` to disable. |\n| `onRow` | `(record: T, index?: number) => HTMLAttributes<HTMLElement>` | — | Returns props to apply to each `<tr>` element. Use to attach row-level event handlers. |\n| `rowClassName` | `string \\| ((record: T, index: number, indent: number) => string)` | — | Additional CSS class(es) applied to each row. |\n| `summary` | `(data: readonly T[]) => ReactNode` | — | Renders a summary row at the bottom of the table body. Receives the full current data slice. |\n| `onChange` | `(meta: TableChangeMeta<T>) => void` | — | Called after a pagination or sort change. `meta.action` is `'paginate'` or `'sort'`; `meta.currentDataSource` is the current visible slice. |\n| `prefixCls` | `string` | `'om-component-ui-table'` | CSS class prefix for all internal elements. Override only if you need full style isolation. |\n| `className` | `string` | `''` | Additional CSS class(es) on the root wrapper element. |\n\n### `TableColumn<T>`\n\nDefines a single data column. Grouped columns use `TableColumnGroup<T>` (see below).\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `key` | `Key` | — | Unique key for this column. Required when `dataIndex` is absent. |\n| `dataIndex` | `keyof T \\| string \\| string[]` | — | Field name(s) to read from the row record. Dot-path arrays are supported for nested fields. |\n| `title` | `ReactNode` | — | Column header content. |\n| `width` | `number \\| string` | — | Column width (pixels or CSS string). Requires `tableLayout=\"fixed\"` for exact widths. |\n| `minWidth` | `number` | — | Minimum column width in pixels. |\n| `fixed` | `'left' \\| 'right'` | — | Pins the column to the left or right edge when horizontal scrolling is active. |\n| `align` | `'left' \\| 'center' \\| 'right'` | `'left'` | Horizontal alignment of the cell content. |\n| `ellipsis` | `boolean \\| { tooltip?: boolean }` | `false` | Truncates overflowing text. Pass `{ tooltip: true }` to show a tooltip with the full content. |\n| `hidden` | `boolean` | `false` | Hides the column without removing it from the column definition. |\n| `colSpan` | `number` | — | Header cell column span. |\n| `rowSpan` | `number` | — | Header cell row span. |\n| `render` | `(value, record: T, index: number, meta: TableCellRenderMeta<T>) => ReactNode \\| TableCellContentValue \\| TableRenderedCell<T>` | — | Custom cell renderer. Return a `ReactNode` for simple content, a `TableCellContentValue` for structured primary/secondary/leading/trailing layout, or a `TableRenderedCell<T>` to control `colSpan`/`rowSpan` at the cell level. |\n| `renderHeader` | `(meta: TableHeaderRenderMeta<T>) => ReactNode` | — | Custom header cell renderer. |\n| `sorter` | `boolean \\| ((a: T, b: T) => number) \\| TableColumnSorterConfig<T>` | — | Enables column sorting. Pass `true` for server-side sort (no client comparator), a compare function, or a `TableColumnSorterConfig` for multi-column sort with priority. |\n| `sortOrder` | `'ascend' \\| 'descend' \\| null` | — | Controlled sort order for this column. |\n| `defaultSortOrder` | `'ascend' \\| 'descend'` | — | Initial sort order (uncontrolled). |\n| `onCell` | `(record: T, index?: number) => HTMLAttributes<HTMLElement> & TdHTMLAttributes<HTMLElement>` | — | Returns props to merge onto each data `<td>` element. |\n| `onHeaderCell` | `(column: TableColumn<T>, index?: number) => HTMLAttributes<HTMLElement>` | — | Returns props to merge onto the header `<th>` element. |\n| `shouldCellUpdate` | `(record: T, prevRecord: T) => boolean` | — | Optimization callback. Return `false` to skip re-rendering a cell when the row record changes. |\n| `className` | `string` | — | CSS class applied to both header and data cells in this column. |\n| `headerClassName` | `string` | — | CSS class applied only to the header cell. |\n| `cellClassName` | `string \\| ((value, record: T, index: number) => string)` | — | CSS class applied only to data cells, optionally computed per-row. |\n\n### `TableColumnGroup<T>`\n\nUsed to create grouped (multi-level) headers. Contains a set of child columns rendered under a shared header.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `key` | `Key` | — | Unique key for the group. |\n| `title` | `ReactNode` | — | Group header label. |\n| `children` | `TableColumnType<T>[]` | **required** | Columns rendered under this group. |\n| `align` | `'left' \\| 'center' \\| 'right'` | — | Header cell alignment. |\n| `fixed` | `'left' \\| 'right'` | — | Pins the entire group. |\n| `className` | `string` | — | CSS class on the group header cell. |\n| `headerClassName` | `string` | — | Additional CSS class on the group header cell. |\n\n### `TablePaginationConfig`\n\nPassed to `Table`'s `pagination` prop.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `current` | `number` | — | Controlled current page (1-based). |\n| `defaultCurrent` | `number` | `1` | Initial page (uncontrolled). |\n| `pageSize` | `number` | — | Controlled number of rows per page. |\n| `defaultPageSize` | `number` | `10` | Initial page size (uncontrolled). |\n\n### `TableRowSelection<T>`\n\nPassed to `Table`'s `rowSelection` prop. Adds a selection column.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `type` | `'checkbox' \\| 'radio'` | `'checkbox'` | Selection mode. `'radio'` allows only one row at a time. |\n| `selectedRowKeys` | `Key[]` | — | Controlled array of selected row keys. |\n| `defaultSelectedRowKeys` | `Key[]` | `[]` | Initial selected keys (uncontrolled). |\n| `onChange` | `(selectedRowKeys: Key[], selectedRows: T[], info: { type: TableRowSelectMethod }) => void` | — | Called when selection changes. `info.type` is `'all'`, `'none'`, or `'single'`. |\n| `getCheckboxProps` | `(record: T) => Partial<{ disabled: boolean }>` | — | Returns per-row checkbox props. Use to disable selection for specific rows. |\n| `preserveSelectedRowKeys` | `boolean` | `false` | Keeps selected keys in the selection state even after the corresponding rows are removed from `dataSource`. |\n| `fixed` | `boolean` | `false` | Pins the selection column to the left. |\n| `columnWidth` | `number \\| string` | — | Width of the selection column. |\n\n### `TableExpandableConfig<T>`\n\nPassed to `Table`'s `expandable` prop.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `expandedRowKeys` | `Key[]` | — | Controlled array of expanded row keys. |\n| `defaultExpandedRowKeys` | `Key[]` | `[]` | Initial expanded keys (uncontrolled). |\n| `defaultExpandAllRows` | `boolean` | `false` | Expands all rows on initial render (uncontrolled). |\n| `expandedRowRender` | `(record: T, index: number, indent: number, expanded: boolean) => ReactNode` | — | Renders the expanded panel beneath a row. Required for expansion to be available. |\n| `expandedRowClassName` | `string \\| ((record: T, index: number, indent: number) => string)` | — | CSS class applied to each expanded panel row. |\n| `rowExpandable` | `(record: T) => boolean` | — | Controls whether a given row can be expanded. Return `false` to hide the expand trigger for that row. |\n| `expandRowByClick` | `boolean` | `false` | Expands/collapses the row when the row itself is clicked, not just the expand icon. |\n| `showExpandColumn` | `boolean` | `true` | Shows or hides the leading expand icon column. Set `false` when the expand trigger is embedded in a custom cell. |\n| `expandIcon` | `(props: TableExpandIconProps<T>) => ReactNode` | — | Custom expand/collapse icon renderer. |\n| `columnWidth` | `number \\| string` | — | Width of the expand icon column. |\n| `fixed` | `'left' \\| 'right' \\| boolean` | — | Pins the expand column. `true` pins to the left. |\n| `onExpand` | `(expanded: boolean, record: T) => void` | — | Called when a row is expanded or collapsed. |\n| `onExpandedRowsChange` | `(expandedKeys: Key[]) => void` | — | Called when the set of expanded rows changes. |\n\n### `TableComponents<T>`\n\nPassed to `Table`'s `components` prop to replace internal rendering elements.\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `table` | `ComponentType` | Replaces the outer `<table>` element. |\n| `header.table` | `ComponentType` | Replaces the `<table>` inside `<thead>`. |\n| `header.wrapper` | `ComponentType` | Replaces the `<thead>` wrapper. |\n| `header.row` | `ComponentType` | Replaces header `<tr>`. |\n| `header.cell` | `ComponentType` | Replaces header `<th>`. |\n| `body.wrapper` | `ComponentType` | Replaces the `<tbody>` wrapper. |\n| `body.row` | `ComponentType` | Replaces body `<tr>`. |\n| `body.cell` | `ComponentType` | Replaces body `<td>`. |\n\n### `TableRef`\n\nRef object returned when a `ref` is attached to `Table` or `VirtualTable`.\n\n| Property | Type | Description |\n|----------|------|-------------|\n| `nativeElement?` | `HTMLDivElement \\| null` | The root wrapper DOM element. |\n| `scrollTo?` | `(config: { index?: number; key?: Key; top?: number; offset?: number }) => void` | Programmatically scrolls to a row by index, key, or pixel offset. |\n\n---\n\n## `VirtualTableProps<T>`\n\n`VirtualTable` accepts all `TableProps<T>` props except `scroll`, which is replaced with a required numeric form.\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `scroll` | `{ x: number; y: number }` | **required** | Both dimensions must be numeric pixel values. The table renders only the visible rows for performance. |\n| `listItemHeight` | `number` | — | Estimated row height in pixels used by the virtual list for scroll calculations. Provide for more accurate scroll behaviour when rows have non-uniform heights. |\n\n> All other props are inherited from `TableProps<T>`. See the `TableProps` table above.\n",ke="# Tabs\n\nA horizontal tab navigation component for switching between content sections.\n\n## Import\n\n```tsx\nimport { Tabs } from '@1money/components-ui';\n// or\nimport { Tabs } from '@1money/components-ui/Tabs';\n```\n\n## Usage\n\n```tsx\n<Tabs\n  defaultActiveKey=\"tab1\"\n  items={[\n    { key: 'tab1', label: 'Overview', badge: 5 },\n    { key: 'tab2', label: 'Transactions' },\n    { key: 'tab3', label: 'Analytics', disabled: true },\n  ]}\n  onChange={(key) => console.log('Active tab:', key)}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `items` | `TabItem[]` | — | Tab items configuration (required) |\n| `activeKey` | `string` | — | Active tab key (controlled mode) |\n| `defaultActiveKey` | `string` | First item key | Default active tab key (uncontrolled mode) |\n| `animated` | `boolean` | `true` | Whether to animate the indicator transition |\n| `fullWidth` | `boolean` | `false` | Whether the tab bar extends full width with a bottom border |\n| `onChange` | `(key: string) => void` | — | Callback when active tab changes |\n| `prefixCls` | `string` | `'tabs'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\n### TabItem\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `key` | `string` | — | Unique identifier (required) |\n| `label` | `ReactNode` | — | Tab header label |\n| `badge` | `number` | — | Badge number next to the label |\n| `disabled` | `boolean` | `false` | Whether the tab is disabled |\n| `children` | `ReactNode` | — | Tab panel content |\n",Pe="# Tag\n\nA compact pill-shaped label used to categorize, filter, or indicate status. Supports multiple color variants, three sizes, an optional leading icon, and an optional remove button.\n\n## Import\n\n```tsx\nimport { Tag } from '@1money/components-ui';\n// or\nimport { Tag } from '@1money/components-ui/Tag';\n```\n\n## Usage\n\n```tsx\n<Tag label=\"Active\" color=\"success\" />\n<Tag label=\"Warning\" color=\"warning\" icon=\"add\" removable onRemove={() => {}} />\n<Tag label=\"Medium\" size=\"medium\" color=\"recommended\" />\n<Tag label=\"Small\" size=\"small\" color=\"negative\" />\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `label` | `string` | — | Tag label text (optional) |\n| `color` | `'neutral' \\| 'warning' \\| 'negative' \\| 'success' \\| 'recommended' \\| 'black'` | `'neutral'` | Color variant |\n| `size` | `'large' \\| 'medium' \\| 'small'` | `'large'` | Size variant |\n| `icon` | `IconName` | — | Leading icon name from the Icons component |\n| `removable` | `boolean` | `false` | Shows a remove button |\n| `onRemove` | `(e: MouseEvent<HTMLSpanElement>) => void` | — | Callback when remove button is clicked |\n| `ref` | `RefObject<HTMLSpanElement \\| null>` | — | Ref to the root span element |\n| `prefixCls` | `string` | `'tag'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\nThis component also accepts all standard HTML span attributes (except `color`).\n",De="# Tooltip\n\nA dark tooltip component built on top of [react-tooltip](https://react-tooltip.com/) with the 1Money design system tokens. Supports 12 placement variants, optional title/body content, controlled/uncontrolled open state, and configurable trigger behavior.\n\n## Import\n\n```tsx\nimport { Tooltip } from '@1money/components-ui';\n// or\nimport { Tooltip } from '@1money/components-ui/Tooltip';\n```\n\n## Usage\n\n```tsx\n{/* Hover trigger (default) */}\n<button id=\"my-trigger\">Hover me</button>\n<Tooltip anchorSelect=\"#my-trigger\" body=\"Simple tooltip\" />\n\n{/* With title */}\n<button id=\"info-trigger\">Info</button>\n<Tooltip anchorSelect=\"#info-trigger\" title=\"Heading\" body=\"Detailed text\" placement=\"bottom\" />\n\n{/* Controlled */}\n<button id=\"ctrl-trigger\">Controlled</button>\n<Tooltip anchorSelect=\"#ctrl-trigger\" body=\"Controlled tooltip\" open={isOpen} onOpenChange={setIsOpen} />\n\n{/* Click trigger */}\n<button id=\"click-trigger\">Click me</button>\n<Tooltip\n  anchorSelect=\"#click-trigger\"\n  body=\"Click tooltip\"\n  openEvents={{ click: true, mouseover: false, mouseenter: false, focus: false }}\n  closeEvents={{ click: true, mouseleave: false, mouseout: false, blur: false }}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `placement` | `TooltipPlacement` | `'top'` | Arrow direction and alignment |\n| `title` | `ReactNode` | — | Bold title text |\n| `body` | `ReactNode` | — | Body text content |\n| `arrow` | `boolean` | `true` | Whether to show the arrow |\n| `open` | `boolean` | — | Whether the tooltip is open (controlled) |\n| `defaultOpen` | `boolean` | — | Default open state (uncontrolled) |\n| `onOpenChange` | `(open: boolean) => void` | — | Callback when the tooltip open state changes |\n| `anchorSelect` | `string` | — | CSS selector for the trigger element |\n| `prefixCls` | `string` | `'tooltip'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n\nAll other props from [react-tooltip ITooltip](https://react-tooltip.com/docs/options) are also supported (e.g., `openEvents`, `closeEvents`, `offset`, `delayShow`, `delayHide`), except `place`, `noArrow`, `children`, `isOpen`, and `setIsOpen` which are remapped to the props above.\n\n### Placements\n\n`'top'` | `'top-start'` | `'top-end'` | `'bottom'` | `'bottom-start'` | `'bottom-end'` | `'left'` | `'left-start'` | `'left-end'` | `'right'` | `'right-start'` | `'right-end'`\n",Re="# Tour\n\nGuided onboarding overlay that highlights a target element and renders a `CoachMark` next to it. Steps can target CSS selectors or React refs.\n\n## Import\n\n```tsx\nimport { Tour } from '@1money/components-ui';\n// or\nimport { Tour } from '@1money/components-ui/Tour';\n```\n\n## Usage\n\n```tsx\n<Tour\n  open={open}\n  onClose={() => setOpen(false)}\n  steps={[\n    {\n      target: '#dashboard-card',\n      placement: 'bottom',\n      heading: 'Dashboard',\n      body: 'Track your account activity here.',\n    },\n  ]}\n/>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `open` | `boolean` | — | Controls whether the tour is visible |\n| `steps` | `TourStep[]` | — | Tour step configuration |\n| `activeStep` | `number` | — | Controlled active step index |\n| `defaultActiveStep` | `number` | `0` | Initial active step |\n| `onChange` | `(step: number) => void` | — | Called when active step changes |\n| `onClose` | `() => void` | — | Called when dismissed or finished |\n| `dismissible` | `boolean` | `true` | Shows the CoachMark dismiss button |\n| `labels` | `CoachMarkLabels` | — | Custom CoachMark button labels |\n| `spotlightPadding` | `number` | `8` | Padding around highlighted target |\n| `gap` | `number` | `14` | Gap between target and CoachMark |\n| `scrollIntoView` | `boolean` | `true` | Scroll target into view before positioning |\n| `spotlightRadius` | `number` | `12` | Spotlight border radius |\n| `closeOnBackdropClick` | `boolean` | `false` | Whether backdrop click closes the tour |\n| `zIndex` | `number` | `1000` | Overlay z-index |\n\n### TourStep\n\n| Field | Type | Description |\n|-------|------|-------------|\n| `target` | `string \\| RefObject<HTMLElement \\| null>` | CSS selector or ref for the highlighted element |\n| `placement` | `'top' \\| 'bottom' \\| 'left' \\| 'right'` | CoachMark placement |\n| `arrowOffset` | `string` | Custom CoachMark arrow offset |\n| `icon` | `ReactNode` | Step icon/illustration |\n| `heading` | `ReactNode` | Step heading |\n| `body` | `ReactNode` | Step body copy |\n\n",Ee="# Trigger\n\nLow-level floating trigger component powered by Floating UI. It attaches popup content to a single trigger element and supports click, hover, focus, controlled open state, portals, arrows, and dismissal behavior.\n\n## Import\n\n```tsx\nimport { Trigger } from '@1money/components-ui';\n// or\nimport { Trigger } from '@1money/components-ui/Trigger';\n```\n\n## Usage\n\n```tsx\n<Trigger\n  trigger=\"click\"\n  placement=\"bottom-start\"\n  content={({ close }) => (\n    <div>\n      Popup content\n      <button type=\"button\" onClick={close}>Close</button>\n    </div>\n  )}\n>\n  <Button>Open</Button>\n</Trigger>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `content` | `ReactNode \\| ({ close, open }) => ReactNode` | — | Floating content |\n| `trigger` | `'click' \\| 'hover' \\| 'focus' \\| TriggerAction[]` | `'click'` | Interaction mode |\n| `placement` | `Placement` | `'bottom-start'` | Floating UI placement |\n| `open` | `boolean` | — | Controlled open state |\n| `onOpenChange` | `(open: boolean) => void` | — | Called when open state changes |\n| `defaultOpen` | `boolean` | `false` | Initial open state |\n| `showArrow` | `boolean` | `false` | Shows arrow pointing to the trigger |\n| `offset` | `number` | `4` | Gap between trigger and popup |\n| `portal` | `boolean` | `true` | Render popup in a portal |\n| `dismissible` | `boolean` | `true` | Close on outside press / Escape |\n| `hoverDelay` | `number \\| { open?: number; close?: number }` | — | Hover open/close delay in milliseconds |\n| `overlayClassName` | `string` | — | Class applied to popup |\n| `overlayStyle` | `CSSProperties` | — | Style applied to popup |\n| `children` | `ReactElement` | — | Single trigger element |\n| `disabled` | `boolean` | `false` | Disables interactions |\n| `onOpen` | `() => void` | — | Called when popup opens |\n| `onClose` | `() => void` | — | Called when popup closes |\n| `role` | `'dialog' \\| 'tooltip' \\| 'menu' \\| 'alertdialog' \\| 'listbox'` | `'dialog'` | Accessibility role |\n| `ref` | `Ref<HTMLElement \\| null>` | — | Ref forwarded to the trigger element |\n",Ie="# Typography\n\nSemantic typography primitives aligned to the design token categories in `src/styles/tokens/typography`.\n\n## Import\n\n```tsx\nimport { Typography } from '@1money/components-ui';\n// or\nimport { Typography } from '@1money/components-ui/Typography';\n```\n\n## Usage\n\n```tsx\n<Typography.Display size=\"lg\">Account Overview</Typography.Display>\n\n<Typography.Headline size=\"md\">Settlement Timeline</Typography.Headline>\n\n<Typography.Title size=\"sm\" strong>\n  Customer Details\n</Typography.Title>\n\n<Typography.Body size=\"md\" as=\"p\">\n  Semantic body copy keeps product text aligned with the shared typography scale.\n</Typography.Body>\n\n<Typography.Body size=\"md\" ellipsis={{ tooltip: true }} copyable>\n  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d9c8b7a6f749f\n</Typography.Body>\n\n<Typography.Label size=\"sm\" htmlFor=\"email\">\n  Email\n</Typography.Label>\n\n<Typography.Link size=\"md\" href=\"https://ant.design/components/typography/\" target=\"_blank\">\n  Typography reference\n</Typography.Link>\n```\n\n## Components\n\n| Component | Sizes | Default tag | Supports `strong` |\n|------|------|---------|-------------|\n| `Typography.Display` | `'xl' \\| 'lg' \\| 'md' \\| 'sm' \\| 'xs'` | `div` | No |\n| `Typography.Headline` | `'lg' \\| 'md' \\| 'sm' \\| 'xs'` | `div` | No |\n| `Typography.Title` | `'lg' \\| 'md' \\| 'sm'` | `div` | Yes |\n| `Typography.Body` | `'lg' \\| 'md' \\| 'sm'` | `span` | Yes |\n| `Typography.Label` | `'xl' \\| 'lg' \\| 'md' \\| 'sm' \\| 'xs'` | `label` | Yes |\n| `Typography.Link` | `'md' \\| 'sm'` | `a` | No |\n\n## Shared Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `size` | category-specific union | — | Required size token for the selected semantic category |\n| `color` | `TypographyColor` | — | Semantic text color token (e.g. `'default'`, `'disabled'`, `'brand'`, `'positive'`, `'danger'`, `'warning'`, `'neutral'`, and their `-secondary` / `-tertiary` / `on-*` variants) |\n| `children` | `ReactNode` | — | Typography content |\n| `as` | category-specific tag union | category-specific tag | Override the rendered semantic tag for `Display`, `Headline`, `Title`, `Body`, and `Label` |\n| `prefixCls` | `string` | `'typography'` | CSS class prefix |\n| `className` | `string` | `''` | Additional CSS classes |\n| `italic` | `boolean` | `false` | Applies italic styling |\n| `underline` | `boolean` | `false` | Adds underline decoration |\n| `delete` | `boolean` | `false` | Adds line-through decoration |\n| `disabled` | `boolean` | `false` | Uses disabled text styling; `Typography.Link` also blocks interaction |\n| `ellipsis` | `boolean \\| TypographyEllipsisConfig` | `false` | Adaptive middle ellipsis — shows full text when it fits, truncates in the middle when it overflows |\n| `copyable` | `boolean \\| TypographyCopyableConfig` | `false` | Renders a copy icon next to the text; defaults to showing a success notification |\n\n`Typography.Title`, `Typography.Body`, and `Typography.Label` additionally support:\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `strong` | `boolean` | `false` | Uses the semantic strong weight defined in the typography tokens |\n\nSupported `as` values:\n\n- `Typography.Display`: `div | h1 | h2 | h3 | h4 | h5 | h6`\n- `Typography.Headline`: `div | h1 | h2 | h3 | h4 | h5 | h6`\n- `Typography.Title`: `div | h1 | h2 | h3 | h4 | h5 | h6`\n- `Typography.Body`: `span | p | div`\n- `Typography.Label`: `label | span | div`\n- `Typography.Link` does not expose `as`; it always renders as `a`\n\n## Ellipsis\n\nAdaptive middle ellipsis — automatically monitors container width via `ResizeObserver`. When the text fits, it displays in full; when it overflows, it truncates in the middle (e.g. `814f0d3a...749f`).\n\n```tsx\n// Default: start=8, end=4\n<Typography.Body size=\"md\" ellipsis>\n  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f\n</Typography.Body>\n// Fits → 0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f\n// Overflows → 0x814f0d...749f\n\n// Custom character counts\n<Typography.Body size=\"md\" ellipsis={{ start: 6, end: 6 }}>\n  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f\n</Typography.Body>\n// Overflows → 0x814f...0d749f\n\n// With tooltip showing full text on hover\n<Typography.Body size=\"md\" ellipsis={{ tooltip: true }}>\n  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f\n</Typography.Body>\n```\n\n| Option | Type | Default | Description |\n|--------|------|---------|-------------|\n| `start` | `number` | `8` | Characters to keep at the start |\n| `end` | `number` | `4` | Characters to keep at the end |\n| `tooltip` | `boolean \\| TooltipProps` | `false` | Show full text in a tooltip when truncated |\n\n- Tooltip is only mounted when the text is actually truncated\n- `tooltip={TooltipProps}` lets you control placement, arrow, delays, and other tooltip options\n- Copy always uses the original full text, not the truncated display\n\n## Copyable\n\n`copyable={true}` adds a copy icon next to the text using the `Copy` component. On success, a `notification.success` toast is shown by default.\n\n```tsx\n<Typography.Link\n  size=\"md\"\n  href=\"https://example.com/reference\"\n  copyable={{ text: 'https://example.com/reference' }}\n>\n  https://example.com/reference\n</Typography.Link>\n```\n\n- Copy defaults to the original full text content, not the visually truncated string\n- `copyable.text` overrides the copied value\n- `copyable.onCopy` overrides the default success notification with a custom callback\n",Ae='# Upload\n\nA file upload component built with a plain `<input type="file">` and a custom `Button`. Includes an `UploadFileBar` sub-component for displaying uploaded file status.\n\n## Import\n\n```tsx\nimport { Upload, UploadFileBar } from \'@1money/components-ui\';\n// or\nimport { Upload, UploadFileBar } from \'@1money/components-ui/Upload\';\n```\n\n## Usage\n\n```tsx\n<Upload\n  label="Attach document"\n  description="PDF or PNG, up to 10 MB"\n  buttonLabel="Upload file"\n  accept=".pdf,.png"\n  onSelect={(files) => console.log(files)}\n/>\n```\n\n### With file list\n\n```tsx\nconst [files, setFiles] = useState<File[]>([]);\n\n<Upload\n  label="Attachments"\n  onSelect={(fileList) => {\n    if (fileList) setFiles(Array.from(fileList));\n  }}\n>\n  {files.map((file) => (\n    <UploadFileBar\n      key={file.name}\n      fileName={file.name}\n      onRemove={() => setFiles((prev) => prev.filter((f) => f !== file))}\n    />\n  ))}\n</Upload>\n```\n\n### File Bar\n\n```tsx\n<UploadFileBar fileName="document.pdf" />\n<UploadFileBar fileName="failed.pdf" status={1} message="Upload failed" onRemove={() => {}} />\n```\n\n## Upload Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `label` | `ReactNode` | — | Label text displayed above the upload button |\n| `description` | `ReactNode` | — | Description text shown below the label |\n| `feedback` | `ReactNode` | — | Feedback/error message displayed below the file list |\n| `disabled` | `boolean` | `false` | Disables the upload button and file input |\n| `accept` | `string` | — | Accepted file types (e.g. `\'.pdf,.png,image/*\'`) |\n| `multiple` | `boolean` | `false` | Allow multiple file selection |\n| `buttonLabel` | `string` | `\'Upload file\'` | Label text rendered inside the upload button |\n| `onSelect` | `(files: FileList \\| null) => void` | — | Callback invoked when files are selected |\n| `children` | `ReactNode` | — | Slot rendered below the button (e.g. `UploadFileBar` list) |\n| `prefixCls` | `string` | `\'upload\'` | CSS class prefix |\n| `className` | `string` | — | Additional CSS classes |\n| `ref` | `RefObject<HTMLDivElement \\| null>` | — | Ref forwarded to the wrapper `<div>` |\n\n## UploadFileBar Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `fileName` | `string` | — | Name of the uploaded file **(required)** |\n| `status` | `0 \\| 1` | `0` | File status: `0` = success, `1` = error |\n| `message` | `string` | — | Error or helper message shown below the file name |\n| `onRemove` | `() => void` | — | Callback invoked when the remove button is clicked |\n| `className` | `string` | — | Additional CSS classes |\n| `prefixCls` | `string` | `\'upload-file-bar\'` | CSS class prefix |\n| `ref` | `RefObject<HTMLDivElement \\| null>` | — | Ref forwarded to the wrapper `<div>` |\n',Ne="# VirtualList\n\nVirtualized list for large data sets. It renders only the visible range when `height`, `itemHeight`, and virtual scrolling conditions are met, while exposing imperative scroll helpers through `ref`.\n\n## Import\n\n```tsx\nimport { VirtualList } from '@1money/components-ui';\n// or\nimport { VirtualList } from '@1money/components-ui/VirtualList';\n```\n\n## Usage\n\n```tsx\n<VirtualList\n  data={items}\n  height={300}\n  itemHeight={32}\n  itemKey=\"id\"\n>\n  {(item, index, { style }) => (\n    <div style={style}>{item.label}</div>\n  )}\n</VirtualList>\n```\n\n## Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `data` | `T[]` | — | List data |\n| `children` | `(item, index, props) => ReactNode` | — | Item render function |\n| `itemKey` | `React.Key \\| ((item: T) => React.Key)` | — | Unique key field or getter |\n| `height` | `number` | — | Viewport height |\n| `itemHeight` | `number` | — | Estimated item height used for virtualization |\n| `fullHeight` | `boolean` | `true` | Keep container height even when not virtualized |\n| `component` | `string \\| FC \\| ComponentClass` | `'div'` | Outer component |\n| `virtual` | `boolean` | `true` when height/itemHeight allow | Set `false` to force real scrolling |\n| `direction` | `'ltr' \\| 'rtl'` | — | Scrollbar direction |\n| `scrollWidth` | `number` | — | Enables horizontal scrollbar and forces virtual mode |\n| `styles` | scrollbar style map | — | Custom scrollbar/thumb styles |\n| `showScrollBar` | `boolean \\| 'optional'` | `'optional'` | Scrollbar visibility mode |\n| `onScroll` | `UIEventHandler<HTMLElement>` | — | Native scroll handler |\n| `onVirtualScroll` | `(info: { x: number; y: number }) => void` | — | Virtual scroll offset callback |\n| `onVisibleChange` | `(visibleList: T[], fullList: T[]) => void` | — | Called when visible item range changes |\n| `innerProps` | `InnerProps` | — | Props for the inner container |\n| `extraRender` | `(info: ExtraRenderInfo) => ReactNode` | — | Extra render hook inside the filler |\n| `prefixCls` | `string` | `'om-component-ui-virtual-list'` | CSS class prefix |\n| `className` | `string` | — | Additional CSS classes |\n\nAll other standard HTML attributes are forwarded to the outer component.\n\n## Ref\n\n`ListRef` exposes:\n\n| Field | Type | Description |\n|-------|------|-------------|\n| `nativeElement` | `HTMLDivElement` | Root DOM element |\n| `scrollTo` | `(arg?: number \\| ScrollConfig \\| null) => void` | Scroll by top value or target config |\n| `getScrollInfo` | `() => { x: number; y: number }` | Current virtual scroll offsets |\n",_e={Accordion:{whenToUse:["Use it when long-form content needs to stay collapsed by default and expand on demand.","Use it when multiple related sections share the same page but should not compete for vertical space.","Use it for FAQs, advanced settings, breakdown panels, and progressively disclosed help content."]},Alert:{whenToUse:["Use it for inline page-level feedback that should remain visible until the user acknowledges it or the state changes.","Use it when a form, workflow, or dashboard section needs contextual status messaging without opening an overlay.","Use it for warnings, errors, maintenance states, and informative reminders that sit inside layout content."]},Button:{whenToUse:["Use it for primary and secondary actions that trigger an immediate user operation.","Use it when an action needs clear emphasis, loading state, or icon affordances.","Use text buttons for lightweight inline actions and contained buttons for stronger decision points."]},Checkbox:{whenToUse:["Use it when users can independently turn options on or off.","Use it for consent, feature toggles inside forms, and non-exclusive multi-select inputs.","Use it when the checked state should be explicit and persist alongside labels or descriptions."]},CheckboxGroup:{whenToUse:["Use it when users need to select multiple options from the same option set.","Use it for preference pickers, permission sets, and grouped filter controls.","Use it when shared name, disabled state, or orientation should be applied consistently across related checkboxes."]},Drawer:{whenToUse:["Use it for secondary workflows that should slide over the current page without full navigation.","Use it when editing, inspecting, or confirming information while preserving the user’s existing context.","Use it for side panels, detail inspectors, and task flows that benefit from extra space but should not block the entire screen like a modal."]},Dropdown:{whenToUse:["Use it for anchored action menus and lightweight floating panels.","Use it when the trigger should reveal a short set of contextual commands near the originating element.","Use it for action menus, overflow menus, and compact confirmation content attached to a button or icon trigger."]},Empty:{whenToUse:["Use it when a list, table, or surface has no data and needs a clear zero-state message.","Use it to explain why content is missing and what users should do next.","Use it for first-run experiences, filtered-empty states, and unavailable-result messaging."]},Flex:{whenToUse:["Use it for one-dimensional layout problems where content is arranged in a row or column.","Use it for toolbars, action bars, inline alignment, and vertically stacked content blocks.","Use it when spacing, wrapping, justification, and alignment should be controlled without dropping into raw CSS."]},Form:{whenToUse:["Use it when field registration, validation rules, and submit/reset handling should be managed as a single form state.","Use it for standard data entry flows that need labels, rules, and predictable layout behavior.","Use it when multiple controls should share validation lifecycle and submission events."]},Grid:{whenToUse:["Use it for responsive multi-column page structure and content layouts.","Use it when cards, forms, or sections must align to a 12-column system across breakpoints.","Use it for dashboards, split panes, multi-column forms, and content areas that reflow between desktop and mobile."]},Icons:{whenToUse:["Use it whenever an interaction, status, or branded surface needs a consistent icon asset from the shared set.","Use it for buttons, inputs, alerts, navigation, and illustration-backed empty or modal states.","Use it when icon naming, sizing, and styling should remain consistent across the library."]},Input:{whenToUse:["Use it for single-line and text-entry scenarios where the user must type a value directly.","Use the family variants for password, search, textarea, and OTP workflows under the same visual shell.","Use it when labels, descriptions, validation status, prefix/suffix slots, and helper feedback all need to stay visually consistent."]},Dialog:{whenToUse:["Use it for blocking tasks that require focused attention before the user can continue.","Use it when confirmation, acknowledgement, or critical workflow steps should interrupt the current page.","Use it for dialogs that need dedicated title, body, illustration/media, and footer actions in a contained overlay."]},Notification:{whenToUse:["Use it for transient global feedback that appears above the page without changing layout.","Use it when a background operation, success state, warning, or error must be surfaced immediately to the user.","Use the static API when feedback should be triggered imperatively from actions, async events, or service responses."]},Pagination:{whenToUse:["Use it when large result sets are split across pages and users need to navigate predictably between them.","Use it for tables, activity feeds, and management screens where item count exceeds a single view.","Use it when page index, page size, and navigation affordances should stay explicit and reusable."]},Popconfirm:{whenToUse:["Use it when a destructive or irreversible action needs a lightweight confirmation without opening a full modal.","Use it for inline delete, archive, revoke, and remove flows that should stay anchored to the initiating control.","Use it when the interaction should feel contextual, fast, and visually tied to the trigger element."]},ProForm:{whenToUse:["Use it when you need higher-level, product-ready form composition rather than assembling every field manually.","Use it for search forms, dialog forms, and structured data-entry flows that benefit from field wrappers and layout helpers.","Use it when a page should move quickly from schema-like field configuration to working business forms."]},Radio:{whenToUse:["Use it when the user must choose exactly one option from a small, visible set.","Use it when all available choices should stay on screen for comparison.","Use it for mutually exclusive selections such as status mode, transfer type, or display preference."]},Segment:{whenToUse:["Use it for compact single-choice switching between closely related views or modes.","Use it when the options behave like a grouped control rather than a navigation tab set.","Use it for density-sensitive places such as chart mode switches, filter modes, or embedded content toggles."]},Select:{whenToUse:["Use it when users should choose from predefined options instead of typing a free-form value.","Use it for single-select and multi-select workflows with optional search, grouping, and rich option rendering.","Use it when the option list may be longer than a radio group can comfortably display inline."]},Space:{whenToUse:["Use it for quick, uniform spacing between inline or stacked elements.","Use it when components should be distributed with consistent preset gaps instead of manual margins.","Use it for button groups, tag rows, compact metadata blocks, and simple horizontal or vertical clusters."]},Spinner:{whenToUse:["Use it to communicate that a task is loading and a result is on the way.","Use it for button loading states, panel-level data fetches, and transitional waiting states.","Use it when the UI should acknowledge progress without yet showing a determinate percentage."]},Step:{whenToUse:["Use it when a workflow is divided into explicit sequential stages.","Use it for onboarding, identity verification, checkout, and other multi-step task progressions.","Use it when users benefit from seeing current progress, completed steps, and what remains."]},Switch:{whenToUse:["Use it for immediate binary toggles where the change takes effect as soon as the user flips the control.","Use it for settings, permissions, and feature activation patterns that do not require a submit button.","Use it when the mental model is “on/off” rather than selecting among multiple options."]},Tabs:{whenToUse:["Use it to switch between peer sections of content without leaving the current page.","Use it when several related panels share the same layout shell but only one should be visible at a time.","Use it for information architecture inside settings, detail pages, and modular dashboards."]},Tag:{whenToUse:["Use it to label entities, statuses, and short categorical metadata.","Use it for concise semantic markers such as state badges, asset labels, and filter chips.","Use it when the content should stay compact, highly scannable, and visually distinct from body text."]},Tooltip:{whenToUse:["Use it to reveal supplemental context without permanently occupying page space.","Use it for definitions, helper hints, truncated content disclosure, and icon-only explanations.","Use it when information is useful but not important enough to surface inline by default."]},Trigger:{whenToUse:["Use it when another surface should be shown or hidden in response to hover, click, or focus behavior.","Use it as the low-level interaction shell for popups, overlays, and anchored floating experiences.","Use it when trigger orchestration matters more than the visual treatment of the revealed content."]},Typography:{whenToUse:["Use it whenever product text should align to the semantic typography scale instead of ad hoc font styling.","Use it for headings, labels, body copy, links, and truncated or copyable text content.","Use it when text hierarchy, readability, and token-driven consistency matter across dense product surfaces."]}};function Ue(n){return _e[n]??null}const Le=Object.assign({"../../components/Accordion/README.md":G,"../../components/Alert/README.md":V,"../../components/Button/README.md":W,"../../components/Calendar/README.md":j,"../../components/Carousel/README.md":q,"../../components/Cell/README.md":K,"../../components/Checkbox/README.md":Y,"../../components/CoachMark/README.md":J,"../../components/Copy/README.md":$,"../../components/Dialog/README.md":X,"../../components/Divider/README.md":Q,"../../components/Drawer/README.md":Z,"../../components/Dropdown/README.md":ee,"../../components/Empty/README.md":ne,"../../components/Flex/README.md":te,"../../components/Grid/README.md":oe,"../../components/Icons/README.md":ae,"../../components/Input/README.md":ie,"../../components/Link/README.md":re,"../../components/Navigation/README.md":se,"../../components/Notification/README.md":le,"../../components/Pagination/README.md":ce,"../../components/Popconfirm/README.md":de,"../../components/Portal/README.md":pe,"../../components/ProForm/README.md":ue,"../../components/Progress/README.md":me,"../../components/Radio/README.md":he,"../../components/ResizeObserver/README.md":ge,"../../components/Segment/README.md":fe,"../../components/Select/README.md":be,"../../components/Skeleton/README.md":ye,"../../components/Slider/README.md":ve,"../../components/Space/README.md":we,"../../components/Spinner/README.md":Ce,"../../components/Step/README.md":xe,"../../components/Switch/README.md":Se,"../../components/Table/README.md":Te,"../../components/Tabs/README.md":ke,"../../components/Tag/README.md":Pe,"../../components/Tooltip/README.md":De,"../../components/Tour/README.md":Re,"../../components/Trigger/README.md":Ee,"../../components/Typography/README.md":Ie,"../../components/Upload/README.md":Ae,"../../components/VirtualList/README.md":Ne}),Me={CheckboxGroup:"Checkbox"};function Fe(n){return n.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function Oe(n){const t=n.replace(/\r\n/g,`
`).trim().split(`
`);if(!t.length)return{sections:[],summary:""};for(/^#\s+/.test(t[0])&&t.shift();t[0]==="";)t.shift();const o=[];for(;t.length&&!/^##\s+/.test(t[0]);)o.push(t.shift()??"");const d=new Map,p=[];let a="",i=[];const c=()=>{const r=i.join(`
`).trim();if(!a||!r)return;const s=Fe(a),l=d.get(s)??0;d.set(s,l+1),p.push({content:r,heading:a,id:l===0?s:`${s}-${l+1}`})};return t.forEach(r=>{const s=r.match(/^##\s+(.*)$/);if(s){c(),a=s[1].trim(),i=[];return}i.push(r)}),c(),{sections:p,summary:o.join(`
`).trim()}}function v(){const n=u.useContext(C),t=x("meta",["meta"]),o=t.preparedMeta.title??"Components",d=o.split("/").pop()??o,p=Me[d]??d,a=Le[`../../components/${p}/README.md`]??"",i=Ue(d),c=u.useMemo(()=>Oe(a),[a]),r=n.componentStories(),s=!!t.preparedMeta.component;return e.jsx("div",{className:"sb-docs-shell",children:e.jsx("div",{className:"sb-docs-layout",children:e.jsxs("div",{className:"sb-docs-main",children:[e.jsxs("section",{className:"sb-docs-hero",children:[e.jsxs("div",{className:"sb-docs-hero-copy",children:[e.jsx("p",{className:"sb-docs-kicker",children:o}),e.jsx("h1",{className:"sb-docs-title",children:d}),c.summary?e.jsx("p",{className:"sb-docs-lead",children:c.summary}):e.jsx("div",{className:"sb-docs-description",children:e.jsx(S,{})})]}),e.jsxs("div",{className:"sb-docs-hero-panel",children:[e.jsxs("div",{className:"sb-docs-stat",children:[e.jsx("span",{className:"sb-docs-stat-label",children:"Package"}),e.jsx("strong",{children:"@1money/components-ui"})]}),e.jsxs("div",{className:"sb-docs-stat",children:[e.jsx("span",{className:"sb-docs-stat-label",children:"Stories"}),e.jsx("strong",{children:r.length})]}),e.jsxs("div",{className:"sb-docs-stat",children:[e.jsx("span",{className:"sb-docs-stat-label",children:"README"}),e.jsx("strong",{children:a?"Available":"Story-driven"})]})]})]}),i!=null&&i.whenToUse.length?e.jsxs("section",{className:"sb-docs-section",id:"when-to-use",children:[e.jsxs("div",{className:"sb-docs-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Guidance"}),e.jsx("h2",{children:"When To Use"}),e.jsx("p",{children:"Keep the component choice opinionated so the library reads consistently across products."})]}),e.jsx("ul",{className:"sb-docs-use-list",children:i.whenToUse.map(l=>e.jsx("li",{children:l},l))})]}):null,e.jsxs("section",{className:"sb-docs-section",id:"examples",children:[e.jsxs("div",{className:"sb-docs-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Preview"}),e.jsx("h2",{children:"Primary example"}),e.jsx("p",{children:"Start with the default state, then use the stories below to inspect edge cases, variants, and richer composition patterns."})]}),e.jsx(T,{})]}),r.length>1?e.jsxs("section",{className:"sb-docs-section",id:"stories",children:[e.jsxs("div",{className:"sb-docs-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Examples"}),e.jsx("h2",{children:"Usage patterns"}),e.jsx("p",{children:"Each story focuses on one behavior so you can review the API surface quickly."})]}),e.jsx(k,{includePrimary:!1,title:"Usage patterns"})]}):null,s?e.jsxs("section",{className:"sb-docs-section",id:"api",children:[e.jsxs("div",{className:"sb-docs-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Reference"}),e.jsx("h2",{children:"API"}),e.jsx("p",{children:"Controls and prop tables are generated from the component metadata in this repo."})]}),e.jsx(P,{})]}):null,c.sections.length?e.jsxs("section",{className:"sb-docs-section",id:"guidance",children:[e.jsxs("div",{className:"sb-docs-section-header",children:[e.jsx("p",{className:"sb-docs-section-kicker",children:"Guidance"}),e.jsx("h2",{children:"Documentation notes"}),e.jsx("p",{children:"These sections come from the component README so package docs and Storybook stay in sync."})]}),e.jsx("div",{className:"sb-docs-markdown-grid",children:c.sections.map(l=>e.jsxs("article",{className:"sb-docs-markdown-card",id:l.id,children:[e.jsx("h3",{children:l.heading}),e.jsx(D,{children:l.content})]},l.id))})]}):null]})})})}v.__docgenInfo={description:"",methods:[],displayName:"ComponentDocsPage"};const ze={width:"100%",boxSizing:"border-box",padding:24},Je=[H({themes:{light:"light",dark:"dark"},defaultTheme:"light",attributeName:"data-mode"}),(n,t)=>t.parameters.disableCanvasPadding?u.createElement(n):u.createElement("div",{style:ze},u.createElement(n))],$e={initialGlobals:{backgrounds:{value:"canvas",grid:!1}},parameters:{layout:"fullscreen",backgrounds:{options:{canvas:{name:"Canvas",value:"#F0F0F0"},white:{name:"White",value:"#ffffff"}},grid:{disable:!0}},docs:{page:v},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:{order:["Introduction",["Overview","Design System","Development"],"Components"]}}}};export{Je as decorators,$e as default};
