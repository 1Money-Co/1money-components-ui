import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as O}from"./index-DCiaR2iG.js";import{C as t}from"./index-DGVw2LVs.js";import"./index-CP2yOfOm.js";import"./Typography-ekcRRINu.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./Icons-D1aARqJQ.js";import"./clipboard-C7s2bcmm.js";import"./iframe-Cr7yWnQZ.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const V=["left","right"],q={display:"flex",flexDirection:"column",gap:32},z={marginBottom:12},F={display:"flex",flexDirection:"column",gap:16},m={display:"flex",gap:24},ne={title:"Components/Checkbox",component:t,argTypes:{checked:{control:"boolean"},defaultChecked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},labelPlacement:{control:"radio",options:[...V]},label:{control:"text"},description:{control:"text"}},args:{disabled:!1,labelPlacement:"left",label:"Label",description:"Description",onChange:O()},tags:["autodocs"]},l={render:r=>e.jsx("div",{style:q,children:V.map(a=>e.jsxs("div",{children:[e.jsxs("h3",{style:z,children:["Label Placement: ",a]}),e.jsxs("div",{style:F,children:[e.jsxs("div",{style:m,children:[e.jsx(t,{...r,labelPlacement:a,label:"Unchecked"}),e.jsx(t,{...r,labelPlacement:a,defaultChecked:!0,label:"Checked"}),e.jsx(t,{...r,labelPlacement:a,indeterminate:!0,label:"Indeterminate"})]}),e.jsxs("div",{style:m,children:[e.jsx(t,{...r,labelPlacement:a,disabled:!0,label:"Disabled"}),e.jsx(t,{...r,labelPlacement:a,checked:!0,disabled:!0,label:"Disabled Checked"}),e.jsx(t,{...r,labelPlacement:a,indeterminate:!0,disabled:!0,label:"Disabled Indeterminate"})]})]})]},a))}),args:{label:void 0,description:"Description"},tags:["!autodocs","dev"]},s={args:{label:"Label",description:"Description"}},n={args:{defaultChecked:!0,label:"Label",description:"Description"}},i={args:{indeterminate:!0,label:"Label",description:"Description"}},o={args:{disabled:!0,label:"Label",description:"Description"}},c={args:{checked:!0,disabled:!0,label:"Label",description:"Description"}},d={args:{defaultChecked:!0,labelPlacement:"right",label:"Label",description:"Description"}},b={args:{defaultChecked:!0,label:"Label only",description:void 0}},p={args:{defaultChecked:!0,label:void 0,description:void 0,"aria-label":"Checkbox without visible label"}};var u,h,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={columnStyle}>
      {LABEL_PLACEMENTS.map(placement => <div key={placement}>
          <h3 style={sectionHeaderStyle}>Label Placement: {placement}</h3>
          <div style={sectionBodyStyle}>
            {/* Default states */}
            <div style={rowStyle}>
              <Checkbox {...args} labelPlacement={placement} label="Unchecked" />
              <Checkbox {...args} labelPlacement={placement} defaultChecked label="Checked" />
              <Checkbox {...args} labelPlacement={placement} indeterminate label="Indeterminate" />
            </div>
            {/* Disabled states */}
            <div style={rowStyle}>
              <Checkbox {...args} labelPlacement={placement} disabled label="Disabled" />
              <Checkbox {...args} labelPlacement={placement} checked disabled label="Disabled Checked" />
              <Checkbox {...args} labelPlacement={placement} indeterminate disabled label="Disabled Indeterminate" />
            </div>
          </div>
        </div>)}
    </div>,
  args: {
    label: undefined,
    description: 'Description'
  },
  tags: ['!autodocs', 'dev']
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,C,x;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var D,f,y;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    label: 'Label',
    description: 'Description'
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var L,v,P;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: 'Label',
    description: 'Description'
  }
}`,...(P=(v=i.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var S,j,E;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Label',
    description: 'Description'
  }
}`,...(E=(j=o.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var A,I,w;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: 'Label',
    description: 'Description'
  }
}`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var B,W,_;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    labelPlacement: 'right',
    label: 'Label',
    description: 'Description'
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var R,T,H;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    label: 'Label only',
    description: undefined
  }
}`,...(H=(T=b.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var M,N,U;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    label: undefined,
    description: undefined,
    'aria-label': 'Checkbox without visible label'
  }
}`,...(U=(N=p.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const ie=["AllVariants","Default","Checked","Indeterminate","Disabled","DisabledChecked","LabelPlacementRight","WithoutDescription","WithoutLabel"];export{l as AllVariants,n as Checked,s as Default,o as Disabled,c as DisabledChecked,i as Indeterminate,d as LabelPlacementRight,b as WithoutDescription,p as WithoutLabel,ie as __namedExportsOrder,ne as default};
