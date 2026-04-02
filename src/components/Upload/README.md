# Upload

A file upload component wrapping PrimeReact's FileUpload with custom styling. Includes an `UploadFileBar` sub-component for displaying uploaded file status.

## Import

```tsx
import { Upload, UploadFileBar } from '@1money/components-ui';
// or
import { Upload, UploadFileBar } from '@1money/components-ui/Upload';
```

## Usage

```tsx
<Upload
  mode="basic"
  chooseOptions={{ label: 'Upload file', icon: () => <></> }}
  onUpload={(e) => console.log(e.files)}
/>
```

### File Bar

```tsx
<UploadFileBar fileName="document.pdf" />
<UploadFileBar fileName="failed.pdf" status={1} message="Upload failed" onRemove={() => {}} />
```

## Upload Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `btnSize` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size variant |
| `prefixCls` | `string` | `'upload'` | CSS class prefix |
| `className` | `string` | — | Additional CSS classes |

All other props are forwarded to PrimeReact's `FileUpload` component.

## UploadFileBar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fileName` | `string` | — | Name of the uploaded file |
| `status` | `0 \| 1` | `0` | File status (0 = success, 1 = error) |
| `message` | `string` | — | Error/helper message |
| `onRemove` | `() => void` | — | Remove button callback |
| `prefixCls` | `string` | `'upload-file-bar'` | CSS class prefix |
