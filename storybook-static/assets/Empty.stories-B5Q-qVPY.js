import{j as r,c as S,a as N}from"./classnames-DVmDMOck.js";import{r as g}from"./index-LFmgH05F.js";import{I as p}from"./Icons-Jj-V_22N.js";import{T as I,a as b}from"./Typography-rwjkbZ_G.js";import{B as A}from"./Button-B5vFMg41.js";import"./Icons-DvbtecMd.js";import"./Tooltip-BQB23PR8.js";import"./index-CUUKTymD.js";import"./Spinner-COScI4Vb.js";import"./componentbase.esm-B4Oni7AW.js";const z=24,f=m=>{const{className:t="",prefixCls:v="empty",variant:h="stroke",icon:o,title:e,description:n,action:y,ref:x,...j}=m,a=S(v),T=()=>o?g.isValidElement(o)?o:typeof o=="string"?r.jsx(p,{name:o,size:z}):null:null;return r.jsxs("div",{...j,ref:x,className:a(void 0,N(a(h),t)),children:[o&&r.jsx("div",{className:a("icon"),children:T()}),(e||n)&&r.jsxs("div",{className:a("content"),children:[e&&(typeof e=="string"?r.jsx(I,{size:"sm",strong:!0,color:"default-tertiary",children:e}):e),n&&(typeof n=="string"?r.jsx(b,{size:"md",color:"default-tertiary",children:n}):n)]}),y&&r.jsx("div",{className:a("action"),children:y})]})};g.memo(f);const k=["stroke","fill"],F={title:"Components/Empty",component:f,argTypes:{variant:{control:"radio",options:[...k]},title:{control:"text"},description:{control:"text"}},args:{variant:"stroke",icon:"transactions",title:"No record found",description:"Try adjusting your filters to find the record you are looking for"},tags:["autodocs"]},s={render:m=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:k.map(t=>r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:12},children:t}),r.jsx(f,{...m,variant:t})]},t))}),tags:["!autodocs","dev"]},i={args:{variant:"stroke",icon:"transactions",title:"No record found",description:"Try adjusting your filters to find the record you are looking for"}},c={args:{variant:"stroke",icon:"transactions",title:void 0,description:"Try adjusting your filters to find the record you are looking for"}},d={args:{variant:"fill",icon:"transactions",title:"No record found",description:"Try adjusting your filters to find the record you are looking for"}},l={args:{variant:"stroke",icon:"bank",title:void 0,description:"You don't have any bank accounts linked",action:r.jsx(A,{color:"primary",size:"medium",iconStart:r.jsx(p,{name:"add",size:20,color:"currentColor"}),children:"Add new bank account"})}},u={args:{variant:"stroke",icon:r.jsx(p,{name:"bank",size:24,color:"#646465"}),title:void 0,description:"You don't have any bank accounts linked"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {VARIANTS.map(variant => <div key={variant}>
          <h3 style={{
        marginBottom: 12
      }}>{variant}</h3>
          <Empty {...args} variant={variant} />
        </div>)}
    </div>,
  tags: ['!autodocs', 'dev']
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    icon: 'transactions',
    title: 'No record found',
    description: 'Try adjusting your filters to find the record you are looking for'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    icon: 'transactions',
    title: undefined,
    description: 'Try adjusting your filters to find the record you are looking for'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fill',
    icon: 'transactions',
    title: 'No record found',
    description: 'Try adjusting your filters to find the record you are looking for'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    icon: 'bank',
    title: undefined,
    description: "You don't have any bank accounts linked",
    action: <Button color="primary" size="medium" iconStart={<Icons name="add" size={20} color="currentColor" />}>
        Add new bank account
      </Button>
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    icon: <Icons name="bank" size={24} color="#646465" />,
    title: undefined,
    description: "You don't have any bank accounts linked"
  }
}`,...u.parameters?.docs?.source}}};const O=["AllVariants","StrokeWithTitle","StrokeWithoutTitle","FillVariant","WithAction","CustomIcon"];export{s as AllVariants,u as CustomIcon,d as FillVariant,i as StrokeWithTitle,c as StrokeWithoutTitle,l as WithAction,O as __namedExportsOrder,F as default};
