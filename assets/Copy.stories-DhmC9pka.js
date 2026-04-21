import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{n as a,C as e}from"./Typography-Cf4nMeBT.js";import"./index-CP2yOfOm.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./Icons-BarT8jPS.js";import"./clipboard-C7s2bcmm.js";import"./iframe-Dtz7r3Se.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const c=()=>a.success({title:"Success",body:"Copied to clipboard",duration:1.5}),d=()=>a.error({title:"Error",body:"Failed to copy",duration:1.5}),E={title:"Components/Copy",component:e,argTypes:{className:{control:"text"},prefixCls:{control:"text"},iconSize:{control:"number"},contained:{control:"boolean"}},args:{value:"0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89",prefixCls:"copy",onSuccess:c,onError:d},tags:["autodocs"]},t={render:r=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:8},children:"Default"}),o.jsx(e,{...r,contained:!0})]}),o.jsx("div",{children:o.jsx(e,{...r,contained:!1})})]}),tags:["!autodocs","dev"]};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const S=["AllVariants"];export{t as AllVariants,S as __namedExportsOrder,E as default};
