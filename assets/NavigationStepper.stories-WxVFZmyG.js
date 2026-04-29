import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as T}from"./index-CP2yOfOm.js";import{f as w}from"./index-DCiaR2iG.js";import{N as B}from"./NavigationStepper-Bw3VYPjW.js";/* empty css                          */import"./classnames-h1fAIaEr.js";import"./Icons-D1aARqJQ.js";const M={title:"Components/NavigationStepper",component:B,argTypes:{},args:{onLogoClick:w()},tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{height:800,display:"flex"},children:e.jsx(t,{})})]},a={args:{steps:[{key:"1",label:"1. Business Overview",status:"done"},{key:"2",label:"2. Business Address",status:"active"},{key:"3",label:"3. Tax Information",status:"done-active"},{key:"4",label:"4. Business Details",status:"todo"},{key:"5",label:"5. Compliance Details",status:"todo",disabled:!0}],footer:e.jsx("span",{children:"Auto-saved at 12:30, 25 Jan 2025"})}},O=()=>{const t=["1. Business Overview","2. Business Address","3. Tax Information","4. Business Details","5. Compliance Details"],[i,j]=T.useState("2"),D=t.map((h,l)=>{const d=String(l+1),A=t.findIndex((c,C)=>String(C+1)===i);let s;return d===i?s="active":l<A?s="done":s="todo",{key:d,label:h,status:s,onClick:({key:c})=>j(c)}});return e.jsx(B,{steps:D,footer:e.jsx("span",{children:"Auto-saved at 12:30, 25 Jan 2025"})})},n={render:()=>e.jsx(O,{})},o={args:{steps:[{key:"todo",label:"todo",status:"todo"},{key:"active",label:"active",status:"active"},{key:"done",label:"done",status:"done"},{key:"done-active",label:"done-active",status:"done-active"},{key:"disabled",label:"disabled",status:"todo",disabled:!0}]}},r={args:{steps:[{key:"1",label:"1. Identity",status:"done"},{key:"2",label:"2. Verification",status:"active"},{key:"3",label:"3. Review",status:"todo"}]}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    steps: [{
      key: '1',
      label: '1. Business Overview',
      status: 'done'
    }, {
      key: '2',
      label: '2. Business Address',
      status: 'active'
    }, {
      key: '3',
      label: '3. Tax Information',
      status: 'done-active'
    }, {
      key: '4',
      label: '4. Business Details',
      status: 'todo'
    }, {
      key: '5',
      label: '5. Compliance Details',
      status: 'todo',
      disabled: true
    }],
    footer: <span>Auto-saved at 12:30, 25 Jan 2025</span>
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,b,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <InteractiveTemplate />
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,f,g;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    steps: [{
      key: 'todo',
      label: 'todo',
      status: 'todo'
    }, {
      key: 'active',
      label: 'active',
      status: 'active'
    }, {
      key: 'done',
      label: 'done',
      status: 'done'
    }, {
      key: 'done-active',
      label: 'done-active',
      status: 'done-active'
    }, {
      key: 'disabled',
      label: 'disabled',
      status: 'todo',
      disabled: true
    }]
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,I,S;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    steps: [{
      key: '1',
      label: '1. Identity',
      status: 'done'
    }, {
      key: '2',
      label: '2. Verification',
      status: 'active'
    }, {
      key: '3',
      label: '3. Review',
      status: 'todo'
    }]
  }
}`,...(S=(I=r.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const V=["Default","Interactive","StatusMatrix","WithoutFooter"];export{a as Default,n as Interactive,o as StatusMatrix,r as WithoutFooter,V as __namedExportsOrder,M as default};
