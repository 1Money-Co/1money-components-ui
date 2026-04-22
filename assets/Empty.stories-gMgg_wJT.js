import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{E as T}from"./Empty-BBBuG1Xt.js";import{B as N}from"./Button-BesxPG0u.js";import{I as b}from"./Icons-BarT8jPS.js";import"./Typography-DKjEOsRd.js";import"./index-CP2yOfOm.js";import"./classnames-h1fAIaEr.js";import"./Spinner-DpKeyGf8.js";import"./iframe-DfszpEJN.js";/* empty css               */import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const S=["stroke","fill"],H={title:"Components/Empty",component:T,argTypes:{variant:{control:"radio",options:[...S]},title:{control:"text"},description:{control:"text"}},args:{variant:"stroke",icon:"transactions",title:"No record found",description:"Try adjusting your filters to find the record you are looking for"},tags:["autodocs"]},o={render:A=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:S.map(a=>r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:12},children:a}),r.jsx(T,{...A,variant:a})]},a))}),tags:["!autodocs","dev"]},t={args:{variant:"stroke",icon:"transactions",title:"No record found",description:"Try adjusting your filters to find the record you are looking for"}},n={args:{variant:"stroke",icon:"transactions",title:void 0,description:"Try adjusting your filters to find the record you are looking for"}},e={args:{variant:"fill",icon:"transactions",title:"No record found",description:"Try adjusting your filters to find the record you are looking for"}},i={args:{variant:"stroke",icon:"bank",title:void 0,description:"You don't have any bank accounts linked",action:r.jsx(N,{color:"primary",size:"medium",iconStart:r.jsx(b,{name:"add",size:20,color:"currentColor"}),children:"Add new bank account"})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,u,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    icon: 'transactions',
    title: 'No record found',
    description: 'Try adjusting your filters to find the record you are looking for'
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,f,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    icon: 'transactions',
    title: undefined,
    description: 'Try adjusting your filters to find the record you are looking for'
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,k,v;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'fill',
    icon: 'transactions',
    title: 'No record found',
    description: 'Try adjusting your filters to find the record you are looking for'
  }
}`,...(v=(k=e.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var h,x,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    icon: 'bank',
    title: undefined,
    description: "You don't have any bank accounts linked",
    action: <Button color="primary" size="medium" iconStart={<Icons name="add" size={20} color="currentColor" />}>
        Add new bank account
      </Button>
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const J=["AllVariants","StrokeWithTitle","StrokeWithoutTitle","FillVariant","WithAction"];export{o as AllVariants,e as FillVariant,t as StrokeWithTitle,n as StrokeWithoutTitle,i as WithAction,J as __namedExportsOrder,H as default};
