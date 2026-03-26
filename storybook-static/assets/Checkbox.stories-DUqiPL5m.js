import{j as e}from"./classnames-DVmDMOck.js";import{f as h}from"./index-CcqeJTvO.js";import{C as t}from"./index-BA36CiT_.js";import"./index-LFmgH05F.js";import"./index-CUUKTymD.js";const u=["left","right"],g={display:"flex",flexDirection:"column",gap:32},k={marginBottom:12},C={display:"flex",flexDirection:"column",gap:16},m={display:"flex",gap:24},v={title:"Components/Checkbox",component:t,argTypes:{checked:{control:"boolean"},defaultChecked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},labelPlacement:{control:"radio",options:[...u]},label:{control:"text"},description:{control:"text"}},args:{disabled:!1,labelPlacement:"left",label:"Label",description:"Description",onChange:h()},tags:["autodocs"]},r={render:l=>e.jsx("div",{style:g,children:u.map(a=>e.jsxs("div",{children:[e.jsxs("h3",{style:k,children:["Label Placement: ",a]}),e.jsxs("div",{style:C,children:[e.jsxs("div",{style:m,children:[e.jsx(t,{...l,labelPlacement:a,label:"Unchecked"}),e.jsx(t,{...l,labelPlacement:a,defaultChecked:!0,label:"Checked"}),e.jsx(t,{...l,labelPlacement:a,indeterminate:!0,label:"Indeterminate"})]}),e.jsxs("div",{style:m,children:[e.jsx(t,{...l,labelPlacement:a,disabled:!0,label:"Disabled"}),e.jsx(t,{...l,labelPlacement:a,checked:!0,disabled:!0,label:"Disabled Checked"}),e.jsx(t,{...l,labelPlacement:a,indeterminate:!0,disabled:!0,label:"Disabled Indeterminate"})]})]})]},a))}),args:{label:void 0,description:"Description"},tags:["!autodocs","dev"]},s={args:{label:"Label",description:"Description"}},n={args:{defaultChecked:!0,label:"Label",description:"Description"}},i={args:{indeterminate:!0,label:"Label",description:"Description"}},o={args:{disabled:!0,label:"Label",description:"Description"}},c={args:{checked:!0,disabled:!0,label:"Label",description:"Description"}},d={args:{defaultChecked:!0,labelPlacement:"right",label:"Label",description:"Description"}},b={args:{defaultChecked:!0,label:"Label only",description:void 0}},p={args:{defaultChecked:!0,label:void 0,description:void 0,"aria-label":"Checkbox without visible label"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    label: 'Label',
    description: 'Description'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: 'Label',
    description: 'Description'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Label',
    description: 'Description'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: 'Label',
    description: 'Description'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    labelPlacement: 'right',
    label: 'Label',
    description: 'Description'
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    label: 'Label only',
    description: undefined
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    label: undefined,
    description: undefined,
    'aria-label': 'Checkbox without visible label'
  }
}`,...p.parameters?.docs?.source}}};const P=["AllVariants","Default","Checked","Indeterminate","Disabled","DisabledChecked","LabelPlacementRight","WithoutDescription","WithoutLabel"];export{r as AllVariants,n as Checked,s as Default,o as Disabled,c as DisabledChecked,i as Indeterminate,d as LabelPlacementRight,b as WithoutDescription,p as WithoutLabel,P as __namedExportsOrder,v as default};
