import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{n as C,C as t,a as i}from"./Typography-C5dixINh.js";import"./index-CP2yOfOm.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./Icons-D1aARqJQ.js";import"./clipboard-C7s2bcmm.js";import"./iframe-B6rRREmY.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const n=()=>C.success({title:"Success",body:"Copied to clipboard",duration:1.5}),s=()=>C.error({title:"Error",body:"Failed to copy",duration:1.5}),j={title:"Components/Copy",component:t,argTypes:{className:{control:"text"},prefixCls:{control:"text"},iconSize:{control:"number"},contained:{control:"boolean"}},args:{value:"0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89",prefixCls:"copy",onSuccess:n,onError:s},tags:["autodocs"]},e={render:a=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:8},children:"Default"}),o.jsx(t,{...a,contained:!0})]}),o.jsx("div",{children:o.jsx(t,{...a,contained:!1})})]}),tags:["!autodocs","dev"]},r={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[o.jsx(i,{label:"Setup Key",content:"GWKLDLVE25dfLIJOHUD578JPIHD24JLJGHGOUH27HLIHOUGOLIKHJ547HOU",onSuccess:n,onError:s}),o.jsx(i,{content:"0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89",onSuccess:n,onError:s})]}),tags:["!autodocs","dev"]};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div>
        <p style={{
        marginBottom: 8
      }}>Default</p>
        <Copy {...args} contained />
      </div>
      <div>
        <Copy {...args} contained={false} />
      </div>
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Clipboard label="Setup Key" content="GWKLDLVE25dfLIJOHUD578JPIHD24JLJGHGOUH27HLIHOUGOLIKHJ547HOU" onSuccess={COPY_SUCCESS} onError={COPY_ERROR} />
      <Clipboard content="0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89" onSuccess={COPY_SUCCESS} onError={COPY_ERROR} />
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const B=["AllVariants","ClipboardField"];export{e as AllVariants,r as ClipboardField,B as __namedExportsOrder,j as default};
