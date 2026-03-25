import{j as e,c as R,a as T}from"./classnames-DVmDMOck.js";import{f as _}from"./index-CcqeJTvO.js";import{r as z}from"./index-LFmgH05F.js";import{a as u}from"./Typography-rwjkbZ_G.js";import{u as U,a as V}from"./index-CUUKTymD.js";import"./Icons-DvbtecMd.js";import"./Icons-Jj-V_22N.js";import"./Tooltip-BQB23PR8.js";const l=a=>{const{className:g="",prefixCls:f="switch",id:x,name:D,"aria-label":L,"aria-labelledby":y,checked:j,defaultChecked:k=!1,disabled:b=!1,label:r,description:i,labelPlacement:C="left",onChange:S,ref:v}=a,[h,w]=U(k,j),s=R(f),P=typeof r=="string"||typeof r=="number"?String(r):typeof i=="string"||typeof i=="number"?String(i):void 0,E=V(A=>{if(b)return;const m=A.target.checked;w(m),S?.(m)}),N=e.jsxs("span",{className:s("track-wrapper"),children:[e.jsx("input",{className:s("input"),type:"checkbox",role:"switch",id:x,name:D,"aria-label":L??P,"aria-labelledby":y,"aria-checked":h,disabled:b,checked:h,onChange:E}),e.jsx("span",{"aria-hidden":"true",className:s("track"),children:e.jsx("span",{className:s("thumb")})})]}),B=(r||i)&&e.jsxs("span",{className:s("content"),children:[r&&e.jsx(u,{size:"lg",color:"default",children:r}),i&&e.jsx(u,{size:"md",color:"default-secondary",children:i})]});return e.jsxs("label",{ref:v,className:s(void 0,T(h&&s("checked"),b&&s("disabled"),C==="right"&&s("right"),g)),children:[N,B]})};z.memo(l);const W=["left","right"],K={title:"Components/Switch",component:l,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},labelPlacement:{control:"radio",options:[...W]}},args:{disabled:!1,labelPlacement:"left",onChange:_()},parameters:{docs:{source:{type:"code"}}},tags:["autodocs"]},t={render:a=>e.jsx(l,{...a,label:"Label"})},c={render:a=>e.jsx(l,{...a,label:"Label",description:"Description"})},d={render:a=>e.jsx(l,{...a,label:"Label",defaultChecked:!0})},o={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(l,{...a,label:"Unchecked disabled",disabled:!0}),e.jsx(l,{...a,label:"Checked disabled",disabled:!0,defaultChecked:!0})]})},n={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(l,{...a,label:"Label",description:"Description",labelPlacement:"right"}),e.jsx(l,{...a,label:"Label",description:"Description",labelPlacement:"right",defaultChecked:!0})]})},p={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Label Left (Default)"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(l,{...a,label:"Label",description:"Description"}),e.jsx(l,{...a,label:"Label",description:"Description",defaultChecked:!0}),e.jsx(l,{...a,label:"Label",description:"Description",disabled:!0}),e.jsx(l,{...a,label:"Label",description:"Description",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Label Right"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(l,{...a,label:"Label",description:"Description",labelPlacement:"right"}),e.jsx(l,{...a,label:"Label",description:"Description",labelPlacement:"right",defaultChecked:!0}),e.jsx(l,{...a,label:"Label",description:"Description",labelPlacement:"right",disabled:!0}),e.jsx(l,{...a,label:"Label",description:"Description",labelPlacement:"right",disabled:!0,defaultChecked:!0})]})]})]}),tags:["!autodocs","dev"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Switch {...args} label="Label" />
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Switch {...args} label="Label" description="Description" />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Switch {...args} label="Label" defaultChecked />
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Switch {...args} label="Unchecked disabled" disabled />
      <Switch {...args} label="Checked disabled" disabled defaultChecked />
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Switch {...args} label="Label" description="Description" labelPlacement="right" />
      <Switch {...args} label="Label" description="Description" labelPlacement="right" defaultChecked />
    </div>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Q=["Default","WithDescription","Checked","Disabled","LabelRight","AllVariants"];export{p as AllVariants,d as Checked,t as Default,o as Disabled,n as LabelRight,c as WithDescription,Q as __namedExportsOrder,K as default};
