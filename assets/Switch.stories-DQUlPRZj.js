import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as w}from"./index-DCiaR2iG.js";import{S as P,a as E,b as a}from"./Switch-UqabzMJj.js";import"./Typography-N03PLalN.js";import"./Icons-BzLXzN_n.js";import"./index-CP2yOfOm.js";import"./classnames-h1fAIaEr.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";import"./ResizeObserver-DW8-DKQf.js";import"./clipboard-C7s2bcmm.js";import"./iframe-Ba944nde.js";import"./Tooltip-DeIhm5fH.js";const q={title:"Components/Switch",component:a,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},labelPlacement:{control:"radio",options:[...E]}},args:{disabled:!1,labelPlacement:P,onChange:w()},parameters:{docs:{source:{type:"code"}}},tags:["autodocs"]},i={render:l=>e.jsx(a,{...l,label:"Label"})},r={render:l=>e.jsx(a,{...l,label:"Label",description:"Description"})},t={render:l=>e.jsx(a,{...l,label:"Label",defaultChecked:!0})},s={render:l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{...l,label:"Unchecked disabled",disabled:!0}),e.jsx(a,{...l,label:"Checked disabled",disabled:!0,defaultChecked:!0})]})},c={render:l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{...l,label:"Label",description:"Description",labelPlacement:"right"}),e.jsx(a,{...l,label:"Label",description:"Description",labelPlacement:"right",defaultChecked:!0})]})},d={render:l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Label Left (Default)"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{...l,label:"Label",description:"Description"}),e.jsx(a,{...l,label:"Label",description:"Description",defaultChecked:!0}),e.jsx(a,{...l,label:"Label",description:"Description",disabled:!0}),e.jsx(a,{...l,label:"Label",description:"Description",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Label Right"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{...l,label:"Label",description:"Description",labelPlacement:"right"}),e.jsx(a,{...l,label:"Label",description:"Description",labelPlacement:"right",defaultChecked:!0}),e.jsx(a,{...l,label:"Label",description:"Description",labelPlacement:"right",disabled:!0}),e.jsx(a,{...l,label:"Label",description:"Description",labelPlacement:"right",disabled:!0,defaultChecked:!0})]})]})]}),tags:["!autodocs","dev"]};var o,n,p;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Switch {...args} label="Label" />
}`,...(p=(n=i.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var b,m,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Switch {...args} label="Label" description="Description" />
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,g,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Switch {...args} label="Label" defaultChecked />
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,D,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Switch {...args} label="Unchecked disabled" disabled />
      <Switch {...args} label="Checked disabled" disabled defaultChecked />
    </div>
}`,...(L=(D=s.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var S,j,y;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Switch {...args} label="Label" description="Description" labelPlacement="right" />
      <Switch {...args} label="Label" description="Description" labelPlacement="right" defaultChecked />
    </div>
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var C,v,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Label Left (Default)</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <Switch {...args} label="Label" description="Description" />
          <Switch {...args} label="Label" description="Description" defaultChecked />
          <Switch {...args} label="Label" description="Description" disabled />
          <Switch {...args} label="Label" description="Description" disabled defaultChecked />
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Label Right</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <Switch {...args} label="Label" description="Description" labelPlacement="right" />
          <Switch {...args} label="Label" description="Description" labelPlacement="right" defaultChecked />
          <Switch {...args} label="Label" description="Description" labelPlacement="right" disabled />
          <Switch {...args} label="Label" description="Description" labelPlacement="right" disabled defaultChecked />
        </div>
      </div>
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(k=(v=d.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const z=["Default","WithDescription","Checked","Disabled","LabelRight","AllVariants"];export{d as AllVariants,t as Checked,i as Default,s as Disabled,c as LabelRight,r as WithDescription,z as __namedExportsOrder,q as default};
