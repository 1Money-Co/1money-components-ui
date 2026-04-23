import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as R}from"./index-DCiaR2iG.js";import{r as D}from"./index-CP2yOfOm.js";import{I as p}from"./Icons-SFvHKrvT.js";import{c as k,j as H}from"./classnames-h1fAIaEr.js";const m=20,O="cell",N=a=>{const{children:A,className:T="",prefixCls:I=O,iconStart:l,iconEnd:i,active:_=!1,disabled:d=!1,type:w="button",ref:L,...q}=a,s=k(I);return e.jsxs("button",{...q,ref:L,type:w,disabled:d,className:s(void 0,H(_&&s("active"),d&&s("disabled"),T)),children:[e.jsxs("span",{className:s("content"),children:[l?e.jsx(p,{name:l,size:m,className:s("icon-start")}):null,e.jsx("span",{className:s("label"),children:A})]}),i?e.jsx(p,{name:i,size:m,className:s("icon-end")}):null]})},t=D.memo(N);N.__docgenInfo={description:"",methods:[],displayName:"CellComponent",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconStart:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof canonicalIconNames)[number]"},description:""},iconEnd:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof canonicalIconNames)[number]"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const X={title:"Components/Cell",component:t,argTypes:{active:{control:"boolean"},disabled:{control:"boolean"},iconStart:{control:"text"},iconEnd:{control:"text"},children:{control:"text"}},args:{active:!1,disabled:!1,iconStart:"security",iconEnd:"arrowRight",children:"Authenticator app",onClick:R()},tags:["autodocs"]},z=340,B={width:z,display:"flex",flexDirection:"column",gap:24},r={},o={args:{active:!0}},n={args:{disabled:!0}},c={render:a=>e.jsxs("div",{style:B,children:[e.jsx(t,{...a,children:"Authenticator app"}),e.jsx(t,{...a,className:"om-component-ui-cell-hovered",children:"Authenticator app"}),e.jsx(t,{...a,active:!0,children:"Authenticator app"}),e.jsx(t,{...a,disabled:!0,children:"Authenticator app"})]}),args:{active:!1,disabled:!1},tags:["!autodocs","dev"]};var u,f,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,C,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    active: true
  }
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var g,x,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var E,S,j;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <div style={previewStackStyle}>
      <Cell {...args}>Authenticator app</Cell>
      <Cell {...args} className="om-component-ui-cell-hovered">
        Authenticator app
      </Cell>
      <Cell {...args} active>
        Authenticator app
      </Cell>
      <Cell {...args} disabled>
        Authenticator app
      </Cell>
    </div>,
  args: {
    active: false,
    disabled: false
  },
  tags: ['!autodocs', 'dev']
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const Z=["Default","Active","Disabled","AllStates"];export{o as Active,c as AllStates,r as Default,n as Disabled,Z as __namedExportsOrder,X as default};
