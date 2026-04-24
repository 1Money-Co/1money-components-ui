# VirtualList

Virtualized list for large data sets. It renders only the visible range when `height`, `itemHeight`, and virtual scrolling conditions are met, while exposing imperative scroll helpers through `ref`.

## Import

```tsx
import { VirtualList } from '@1money/components-ui';
// or
import { VirtualList } from '@1money/components-ui/VirtualList';
```

## Usage

```tsx
<VirtualList
  data={items}
  height={300}
  itemHeight={32}
  itemKey="id"
>
  {(item, index, { style }) => (
    <div style={style}>{item.label}</div>
  )}
</VirtualList>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | — | List data |
| `children` | `(item, index, props) => ReactNode` | — | Item render function |
| `itemKey` | `React.Key \| ((item: T) => React.Key)` | — | Unique key field or getter |
| `height` | `number` | — | Viewport height |
| `itemHeight` | `number` | — | Estimated item height used for virtualization |
| `fullHeight` | `boolean` | `true` | Keep container height even when not virtualized |
| `component` | `string \| FC \| ComponentClass` | `'div'` | Outer component |
| `virtual` | `boolean` | `true` when height/itemHeight allow | Set `false` to force real scrolling |
| `direction` | `'ltr' \| 'rtl'` | — | Scrollbar direction |
| `scrollWidth` | `number` | — | Enables horizontal scrollbar and forces virtual mode |
| `styles` | scrollbar style map | — | Custom scrollbar/thumb styles |
| `showScrollBar` | `boolean \| 'optional'` | `'optional'` | Scrollbar visibility mode |
| `onScroll` | `UIEventHandler<HTMLElement>` | — | Native scroll handler |
| `onVirtualScroll` | `(info: { x: number; y: number }) => void` | — | Virtual scroll offset callback |
| `onVisibleChange` | `(visibleList: T[], fullList: T[]) => void` | — | Called when visible item range changes |
| `innerProps` | `InnerProps` | — | Props for the inner container |
| `extraRender` | `(info: ExtraRenderInfo) => ReactNode` | — | Extra render hook inside the filler |
| `prefixCls` | `string` | `'om-component-ui-virtual-list'` | CSS class prefix |
| `className` | `string` | — | Additional CSS classes |

All other standard HTML attributes are forwarded to the outer component.

## Ref

`ListRef` exposes:

| Field | Type | Description |
|-------|------|-------------|
| `nativeElement` | `HTMLDivElement` | Root DOM element |
| `scrollTo` | `(arg?: number \| ScrollConfig \| null) => void` | Scroll by top value or target config |
| `getScrollInfo` | `() => { x: number; y: number }` | Current virtual scroll offsets |
