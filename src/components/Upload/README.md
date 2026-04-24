# Upload

A file upload component built with a plain `<input type="file">` and a custom `Button`. Includes an `UploadFileBar` sub-component for displaying uploaded file status.

## Import

```tsx
import { Upload, UploadFileBar } from '@1money/components-ui';
// or
import { Upload, UploadFileBar } from '@1money/components-ui/Upload';
```

## Usage

```tsx
<Upload
  label="Attach document"
  description="PDF or PNG, up to 10 MB"
  buttonLabel="Upload file"
  accept=".pdf,.png"
  onSelect={(files) => console.log(files)}
/>
```

### With file list

```tsx
const [files, setFiles] = useState<File[]>([]);

<Upload
  label="Attachments"
  onSelect={(fileList) => {
    if (fileList) setFiles(Array.from(fileList));
  }}
>
  {files.map((file) => (
    <UploadFileBar
      key={file.name}
      fileName={file.name}
      onRemove={() => setFiles((prev) => prev.filter((f) => f !== file))}
    />
  ))}
</Upload>
```

### File Bar

```tsx
<UploadFileBar fileName="document.pdf" />
<UploadFileBar fileName="failed.pdf" status={1} message="Upload failed" onRemove={() => {}} />
```

## Upload Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | — | Label text displayed above the upload button |
| `description` | `ReactNode` | — | Description text shown below the label |
| `feedback` | `ReactNode` | — | Feedback/error message displayed below the file list |
| `disabled` | `boolean` | `false` | Disables the upload button and file input |
| `accept` | `string` | — | Accepted file types (e.g. `'.pdf,.png,image/*'`) |
| `multiple` | `boolean` | `false` | Allow multiple file selection |
| `buttonLabel` | `string` | `'Upload file'` | Label text rendered inside the upload button |
| `onSelect` | `(files: FileList \| null) => void` | — | Callback invoked when files are selected |
| `children` | `ReactNode` | — | Slot rendered below the button (e.g. `UploadFileBar` list) |
| `prefixCls` | `string` | `'upload'` | CSS class prefix |
| `className` | `string` | — | Additional CSS classes |
| `ref` | `RefObject<HTMLDivElement \| null>` | — | Ref forwarded to the wrapper `<div>` |

## UploadFileBar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fileName` | `string` | — | Name of the uploaded file **(required)** |
| `status` | `0 \| 1` | `0` | File status: `0` = success, `1` = error |
| `message` | `string` | — | Error or helper message shown below the file name |
| `onRemove` | `() => void` | — | Callback invoked when the remove button is clicked |
| `className` | `string` | — | Additional CSS classes |
| `prefixCls` | `string` | `'upload-file-bar'` | CSS class prefix |
| `ref` | `RefObject<HTMLDivElement \| null>` | — | Ref forwarded to the wrapper `<div>` |
