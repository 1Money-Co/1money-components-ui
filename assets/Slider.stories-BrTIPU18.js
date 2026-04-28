import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as l}from"./index-DCiaR2iG.js";import{S as r}from"./Slider-PC8AydjH.js";import"./index-CP2yOfOm.js";import"./Typography-BK-BjBuS.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./Icons-BzLXzN_n.js";import"./clipboard-C7s2bcmm.js";import"./iframe-k9SZMUwJ.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const R={title:"Components/Slider",component:r,argTypes:{disabled:{control:"boolean"},showLabel:{control:"boolean"},showDescription:{control:"boolean"},min:{control:"number"},max:{control:"number"},step:{control:"number"},valuePrefix:{control:"text"},label:{control:"text"},description:{control:"text"}},args:{disabled:!1,showLabel:!0,showDescription:!0,min:0,max:100,step:1,valuePrefix:"$",label:"Label",description:"Description",onChange:l(),onChangeEnd:l()},tags:["autodocs"]},a={args:{defaultValue:40}},t={args:{}},o={args:{disabled:!0}},s={args:{defaultValue:50,formatValue:y=>`${y}%`,valuePrefix:""}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,maxWidth:400},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Not Started"}),e.jsx(r,{label:"Label",description:"Description",valuePrefix:"$"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Default (value=40)"}),e.jsx(r,{label:"Label",description:"Description",valuePrefix:"$",defaultValue:40})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Disabled"}),e.jsx(r,{label:"Label",description:"Description",valuePrefix:"$",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Without Label"}),e.jsx(r,{description:"Description",showLabel:!1,defaultValue:60})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Without Description"}),e.jsx(r,{label:"Label",valuePrefix:"$",showDescription:!1,defaultValue:75})]})]}),tags:["!autodocs","dev"]};var n,d,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    defaultValue: 40
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {}
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,f,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,v,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    formatValue: val => \`\${val}%\`,
    valuePrefix: ''
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var D,j,S;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    maxWidth: 400
  }}>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Not Started</h3>
        <Slider label="Label" description="Description" valuePrefix="$" />
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Default (value=40)</h3>
        <Slider label="Label" description="Description" valuePrefix="$" defaultValue={40} />
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Disabled</h3>
        <Slider label="Label" description="Description" valuePrefix="$" disabled />
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Without Label</h3>
        <Slider description="Description" showLabel={false} defaultValue={60} />
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Without Description</h3>
        <Slider label="Label" valuePrefix="$" showDescription={false} defaultValue={75} />
      </div>
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const T=["Default","NotStarted","Disabled","WithCustomFormat","AllVariants"];export{i as AllVariants,a as Default,o as Disabled,t as NotStarted,s as WithCustomFormat,T as __namedExportsOrder,R as default};
