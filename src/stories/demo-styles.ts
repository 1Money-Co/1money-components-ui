export const DEMO_PADDING = 16;
export const DEMO_BORDER = '1px dashed currentColor';
export const DEMO_BOX_STYLE = { padding: DEMO_PADDING, border: DEMO_BORDER };
export const DEMO_SECTION_GAP = 16;
export const DEMO_SECTION_STYLE = { display: 'grid', gap: DEMO_SECTION_GAP };
export const DEMO_PAGE_STYLE = {
  display: 'grid',
  gap: DEMO_SECTION_GAP,
  padding: DEMO_PADDING,
  border: DEMO_BORDER,
  borderRadius: 8
};
export const DEMO_BLOCK_STYLE = {
  padding: DEMO_PADDING,
  border: DEMO_BORDER,
  borderRadius: 8,
  minHeight: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
export const DEMO_HEADER_BLOCK_STYLE = { ...DEMO_BLOCK_STYLE, minHeight: 56 };
export const DEMO_SIDEBAR_BLOCK_STYLE = { ...DEMO_BLOCK_STYLE, minHeight: 300, alignItems: 'flex-start' as const };
export const DEMO_MAIN_BLOCK_STYLE = { ...DEMO_BLOCK_STYLE, minHeight: 200, alignItems: 'flex-start' as const };
export const DEMO_FOOTER_BLOCK_STYLE = { ...DEMO_BLOCK_STYLE, minHeight: 56 };
export const DEMO_WIDGET_BLOCK_STYLE = { ...DEMO_BLOCK_STYLE, minHeight: 96 };
export const DEMO_CHART_BLOCK_STYLE = { ...DEMO_BLOCK_STYLE, minHeight: 220 };
export const DEMO_TABLE_BLOCK_STYLE = { ...DEMO_BLOCK_STYLE, minHeight: 180 };
export const DEMO_FORM_LABEL_STYLE = { ...DEMO_BLOCK_STYLE, minHeight: 44 };
export const DEMO_FORM_FIELD_STYLE = { ...DEMO_BLOCK_STYLE, minHeight: 44, justifyContent: 'flex-start' as const };
export const DEMO_FORM_ACTION_STYLE = { ...DEMO_BLOCK_STYLE, minHeight: 44, justifyContent: 'flex-end' as const };
