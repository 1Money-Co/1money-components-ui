# Hooks Guide

Reference for using the library's custom hooks inside `@1money/components-ui` components.

All hooks are provided by the `@1money/hooks` package and imported via `import { hookName } from '@1money/hooks'`.

---

## Import Convention

```tsx
// Always import from @1money/hooks
import { useControlledState } from '@1money/hooks';
import { useEventCallback } from '@1money/hooks';
import { useLatest } from '@1money/hooks';
import { useLayoutEffect } from '@1money/hooks';
import { useMemoizedFn } from '@1money/hooks';
import { usePrevious } from '@1money/hooks';
import { useSafeState } from '@1money/hooks';
import { useSyncState } from '@1money/hooks';
import { useUpdateEffect } from '@1money/hooks';
import { useLayoutState, useTimeoutLock } from '@1money/hooks';

// Or combine into a single import
import { useControlledState, useEventCallback, useLatest } from '@1money/hooks';
```

> **Never** import hooks from `@1money/components-ui` inside the library — that is the consumer-facing path.

---

## Hook Selection Guide

| Scenario | Hook |
|----------|------|
| Controlled + uncontrolled input | `useControlledState` |
| Stable callback for memoized children | `useEventCallback` or `useMemoizedFn` |
| Access latest value without re-render | `useLatest` |
| Different logic for mount vs update | `useLayoutEffect` |
| Compare with previous value | `usePrevious` |
| Async state updates (prevent unmount leak) | `useSafeState` |
| Read latest state synchronously | `useSyncState` |
| Skip effect on initial mount | `useUpdateEffect` |
| Batch synchronous state updates | `useLayoutState` |
| Short-lived lock with auto-reset | `useTimeoutLock` |

---

## Hook Details & In-Library Usage Patterns

### useControlledState

**When to use**: Any component that supports both controlled (`value` prop) and uncontrolled (`defaultValue` prop) modes.

```tsx
import { useControlledState } from '@1money/hooks';

// Signature: useControlledState<T>(defaultValue: T, controlledValue?: T) => [T, (v: T) => void]

const [val, setVal] = useControlledState(defaultValue ?? '', value);
```

**Real usage** — `Input.tsx`:
```tsx
const [val, setVal] = useControlledState(defaultValue ?? '', value);
```

**Real usage** — `Select.tsx`:
```tsx
const [selected, setSelected] = useControlledState<string | number | readonly string[] | null>(
  defaultValue ?? null, value
);
```

**Real usage** — `CheckboxGroup.tsx`:
```tsx
const [checkedItems, setCheckedItems] = useControlledState<string[]>(
  normalValue ?? defaultChecked, normalValue
);
```

---

### useEventCallback

**When to use**: Event handlers that need a stable reference while always calling the latest function version. Preferred for simple event handlers (onChange, onClick, onHide, etc.).

```tsx
import { useEventCallback } from '@1money/hooks';

const handleChange = useEventCallback((e: ChangeEvent) => {
  setVal(e.target.value);
  onChange?.(e);
});
```

**Real usage** — `Input.tsx`:
```tsx
const handleChange = useEventCallback((e: InputChangeEvent) => {
  if (loading || disabled) return;
  const _val = 'target' in e ? e.target.value : e.value;
  setVal((type === 'textarea' ? _val?.slice(0, maxLength) : _val) ?? '');
  onChange?.(e as any);
});
```

**Real usage** — `Select.tsx`:
```tsx
const handleChange = useEventCallback<[SelectChangeEvent], void>((e) => {
  setSelected(e.value);
  emitChange?.(e);
});

const handleHide = useEventCallback(() => {
  setIsOpen(false);
  onHide?.();
});
```

---

### useLatest

**When to use**: Access the most recent value inside callbacks, timers, or imperative handles without adding the value to dependency arrays.

```tsx
import { useLatest } from '@1money/hooks';

const collapsedRef = useLatest(collapsed);

// Later:
const toggle = () => handleCollapse(!collapsedRef.current);
```

**Real usage** — `Sidebar.tsx`:
```tsx
const collapsedRef = useLatest(collapsed);

useImperativeHandle(ref, () => ({
  toggle: () => handleCollapse(!collapsedRef.current),
  collapse: handleCollapse,
}), [handleCollapse]);
```

---

### useMemoizedFn

**When to use**: Render callbacks, complex handlers, or any function passed to children where you need a stable reference without a dependency array. Preferred over `useEventCallback` when the function is a render function or when you want zero dependency management.

```tsx
import { useMemoizedFn } from '@1money/hooks';

const renderIcon = useMemoizedFn(({ open }: { open: boolean }) =>
  collapsed ? null : <Icons name="chevronDown" />
);
```

**Real usage** — `Sidebar.tsx`:
```tsx
const renderExpandIcon = useMemoizedFn(({ open }: { open: boolean }) =>
  collapsed ? null : <Icons name='chevronDown' size={20} />
);
```

**Real usage** — `CheckboxGroup.tsx`:
```tsx
const handleNormalChange = useMemoizedFn((e: CheckboxChangeEvent, itemOnChange?: Callback) => {
  itemOnChange?.(!!e.checked);
  const next = e.checked
    ? [...checkedItems, e.value]
    : checkedItems.filter(k => k !== e.value);
  setCheckedItems(next);
  onChange?.(next);
});
```

---

### useLayoutEffect (custom)

**When to use**: When you need different logic for initial mount versus subsequent updates. The callback receives a `mount` boolean as its first argument.

```tsx
import { useLayoutEffect } from '@1money/hooks';

useLayoutEffect((mount) => {
  if (mount) {
    // setup without animation
  } else {
    // animate on update
  }
}, [value]);
```

> This is used internally by `useControlledState`. Use it directly only when mount/update distinction matters.

---

### usePrevious

**When to use**: Comparing the current value with the value from the previous render.

```tsx
import { usePrevious } from '@1money/hooks';

const prevCount = usePrevious(count);

useEffect(() => {
  if (prevCount !== undefined && count > prevCount) {
    // count increased
  }
}, [count, prevCount]);
```

---

### useSafeState

**When to use**: State that may be set in async callbacks (API calls, timers) where the component could unmount before the callback fires.

```tsx
import { useSafeState } from '@1money/hooks';

const [data, setData] = useSafeState<Data | null>(null);

useEffect(() => {
  fetchData().then((result) => {
    setData(result); // no-op if unmounted
  });
}, []);
```

---

### useSyncState

**When to use**: When React batches updates but you need to read the very latest state synchronously (e.g., multiple `onTransitionEnd` events firing at once).

```tsx
import { useSyncState } from '@1money/hooks';

const [getCount, setCount] = useSyncState(0);

const handleTransitionEnd = () => {
  setCount(getCount() + 1); // always reads latest
};
```

---

### useUpdateEffect

**When to use**: Run an effect only on updates, skipping the initial mount.

```tsx
import { useUpdateEffect } from '@1money/hooks';

useUpdateEffect(() => {
  onSearch(query); // only on query changes, not initial mount
}, [query]);
```

---

### useLayoutState

**When to use**: Batch multiple synchronous state updates into a single microtask render.

```tsx
import { useLayoutState } from '@1money/hooks';

const [widths, setWidths] = useLayoutState<Map<string, number>>(new Map());

const handleResize = (key: string, width: number) => {
  setWidths(prev => new Map(prev).set(key, width));
};
```

---

### useTimeoutLock

**When to use**: Short-lived lock (100ms auto-reset) to prevent duplicate rapid actions.

```tsx
import { useTimeoutLock } from '@1money/hooks';

const [setLock, getLock] = useTimeoutLock<string>();

const handleClick = () => {
  if (getLock()) return;
  setLock('submitting');
  submitForm();
};
```

---

## Common Patterns

### Controlled/Uncontrolled + Event Handler (most common)

```tsx
import { useControlledState, useEventCallback } from '@1money/hooks';

export const MyComponent: FC<MyComponentProps> = props => {
  const { value, defaultValue, onChange, ...rest } = props;

  const [val, setVal] = useControlledState(defaultValue ?? '', value);

  const handleChange = useEventCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    onChange?.(e);
  });

  return <input value={val} onChange={handleChange} {...rest} />;
};
```

### Imperative Handle with Latest Ref

```tsx
import { useLatest, useMemoizedFn } from '@1money/hooks';

const stateRef = useLatest(someState);

useImperativeHandle(ref, () => ({
  getValue: () => stateRef.current,
  doAction: useMemoizedFn(() => { /* uses stateRef.current */ }),
}), []);
```

### Async Data Fetch with Safe State

```tsx
import { useSafeState } from '@1money/hooks';

const [loading, setLoading] = useSafeState(false);
const [data, setData] = useSafeState<T | null>(null);

useEffect(() => {
  setLoading(true);
  fetchData()
    .then(setData)
    .finally(() => setLoading(false));
}, []);
```

---

## Hook Dependencies

```
useEventCallback  → uses useLatest
useControlledState → uses useLayoutEffect (custom)
useSyncState      → uses useEventCallback
```

Keep these dependencies in mind when debugging or testing components.
