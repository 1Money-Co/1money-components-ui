import{j as x}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-CP2yOfOm.js";import{f as n}from"./index-DCiaR2iG.js";import{A as y}from"./Alert-kJgR9Vb0.js";import"./Typography-COcdYQQO.js";import"./Icons-C17k0gNH.js";import"./classnames-0AlMal0H.js";import"./ResizeObserver-DbXOvenx.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./iframe-C8OcTo_O.js";import"./Tooltip-CsTd8WLo.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const f=["info","success","warning","error"],U={title:"Components/Alert",component:y,argTypes:{status:{control:"radio",options:[...f]},closable:{control:"boolean"},showIcon:{control:"boolean"},title:{control:"text"},body:{control:"text"}},args:{status:"info",closable:!0,showIcon:!0,title:"Title",body:"Body text.",link:{label:"Link",onClick:n()},onClose:n()},tags:["autodocs"]},t={render:g=>x.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:f.map(r=>b.createElement(y,{...g,key:r,status:r}))}),tags:["!autodocs","dev"]},o={args:{title:"Alert with title only",body:void 0,link:void 0}},e={args:{title:void 0,body:"Alert with body only.",link:void 0}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400
  }}>
      {STATUSES.map(status => <Alert {...args} key={status} status={status} />)}
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Alert with title only',
    body: undefined,
    link: undefined
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: undefined,
    body: 'Alert with body only.',
    link: undefined
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const V=["AllVariants","TitleOnly","BodyOnly"];export{t as AllVariants,e as BodyOnly,o as TitleOnly,V as __namedExportsOrder,U as default};
