import type { ReactNode } from 'react';
import type { ButtonProps } from '@/components/Button';
import { WIDTH_SIZE_MAP } from './constants';

// ---------------------------------------------------------------------------
// stableSerialize — deterministic deep serialization for params comparison
// ---------------------------------------------------------------------------
export function stableSerialize(value: unknown): string {
  if (value === null || value === undefined) return String(value);
  if (typeof value !== 'object') return JSON.stringify(value);

  if (Array.isArray(value)) {
    return '[' + value.map(stableSerialize).join(',') + ']';
  }

  const keys = Object.keys(value as Record<string, unknown>).sort();
  return (
    '{' +
    keys
      .map(
        (k) =>
          JSON.stringify(k) +
          ':' +
          stableSerialize((value as Record<string, unknown>)[k]),
      )
      .join(',') +
    '}'
  );
}

// ---------------------------------------------------------------------------
// Readonly renderers
// ---------------------------------------------------------------------------
export function renderTextReadonly(value: unknown): ReactNode {
  if (value === null || value === undefined || value === '') return '-';
  return String(value);
}

export function renderBooleanReadonly(value: unknown): ReactNode {
  if (value === null || value === undefined) return '-';
  return value ? 'Yes' : 'No';
}

export function renderNumericReadonly(value: unknown): ReactNode {
  if (value === null || value === undefined || value === '') return '-';
  if (typeof value === 'number') return String(value);
  const num = Number(value);
  if (Number.isNaN(num)) return '-';
  return String(num);
}

// ---------------------------------------------------------------------------
// Nested path utilities
// ---------------------------------------------------------------------------
export function getNestedValue(
  obj: Record<string, unknown>,
  path: string,
): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function setNestedValue(
  obj: Record<string, unknown>,
  path: string,
  value: unknown,
): Record<string, unknown> {
  const keys = path.split('.');
  if (keys.length === 1) return { ...obj, [path]: value };

  const result = { ...obj };
  let current: Record<string, unknown> = result;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const nextKey = keys[i + 1];
    const isNextArray = /^\d+$/.test(nextKey);
    if (current[key] === undefined || current[key] === null) {
      current[key] = isNextArray ? [] : {};
    }
    if (Array.isArray(current[key])) {
      current[key] = [...(current[key] as unknown[])];
    } else {
      current[key] = { ...(current[key] as Record<string, unknown>) };
    }
    current = current[key] as Record<string, unknown>;
  }
  current[keys[keys.length - 1]] = value;
  return result;
}

// ---------------------------------------------------------------------------
// resolveWidth — convert named width to px or pass through number
// ---------------------------------------------------------------------------
export function resolveWidth(width: 'sm' | 'md' | 'lg' | 'xl' | number): number {
  if (typeof width === 'number') return width;
  return WIDTH_SIZE_MAP[width] ?? WIDTH_SIZE_MAP.md;
}

// ---------------------------------------------------------------------------
// extractButtonProps — safely extract props from button config
// ---------------------------------------------------------------------------
export function extractButtonProps(
  config: false | Partial<ButtonProps> | undefined,
): { disabled: boolean; rest: Partial<ButtonProps> } {
  if (config === false || config === undefined) {
    return { disabled: false, rest: {} };
  }
  const { disabled = false, ...rest } = config;
  return { disabled, rest };
}
