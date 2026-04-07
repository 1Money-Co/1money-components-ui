import { Upload } from '@/components/Upload';
import type { UploadProps } from '@/components/Upload';
import { createProFormField } from './createProFormField';
import { renderTextReadonly } from '../utils';

function renderUploadReadonly(value: unknown): string {
  if (value === null || value === undefined) return '-';

  // FileList
  if (typeof value === 'object' && 'length' in (value as object)) {
    const files = value as FileList;
    if (files.length === 0) return '-';
    return Array.from(files).map((f) => f.name).join(', ');
  }

  // String (e.g. pre-filled file name)
  if (typeof value === 'string') return value || '-';

  return renderTextReadonly(value) as string;
}

export const ProFormUpload = createProFormField<UploadProps>({
  component: Upload,
  renderReadonly: renderUploadReadonly,
});

ProFormUpload.displayName = 'ProFormUpload';

export default ProFormUpload;
