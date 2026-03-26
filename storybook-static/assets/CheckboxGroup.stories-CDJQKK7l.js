import{j as o}from"./classnames-DVmDMOck.js";import{r as i}from"./index-LFmgH05F.js";import{f as m}from"./index-CcqeJTvO.js";import{a as p,C as u}from"./index-BA36CiT_.js";import"./index-CUUKTymD.js";const c=[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange",disabled:!0}],v={title:"Components/CheckboxGroup",component:p,argTypes:{disabled:{control:"boolean"},orientation:{control:"radio",options:["horizontal","vertical"]}},args:{disabled:!1,orientation:"horizontal",onChange:m()},tags:["autodocs"]},r={render:e=>{const[s,l]=i.useState(["apple"]);return o.jsx(p,{...e,options:c.map(a=>({...a})),value:s,onChange:a=>{l(a),e.onChange?.(a)}})}},t={args:{orientation:"vertical",options:c.map(e=>({...e})),defaultValue:["pear"]}},n={render:e=>{const[s,l]=i.useState(["beta"]);return o.jsxs(p,{...e,value:s,onChange:a=>{l(a),e.onChange?.(a)},children:[o.jsx(u,{value:"alpha",label:"Alpha"}),o.jsx(u,{value:"beta",label:"Beta"}),o.jsx(u,{value:"gamma",label:"Gamma",disabled:!0})]})},tags:["!autodocs","dev"]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Array<string | number>>(['apple']);
    return <CheckboxGroup {...args} options={OPTIONS.map(option => ({
      ...option
    }))} value={value} onChange={nextValue => {
      setValue(nextValue);
      args.onChange?.(nextValue);
    }} />;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    options: OPTIONS.map(option => ({
      ...option
    })),
    defaultValue: ['pear']
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Array<string | number>>(['beta']);
    return <CheckboxGroup {...args} value={value} onChange={nextValue => {
      setValue(nextValue);
      args.onChange?.(nextValue);
    }}>
        <Checkbox value="alpha" label="Alpha" />
        <Checkbox value="beta" label="Beta" />
        <Checkbox value="gamma" label="Gamma" disabled />
      </CheckboxGroup>;
  },
  tags: ['!autodocs', 'dev']
}`,...n.parameters?.docs?.source}}};const C=["WithOptions","Vertical","WithChildren"];export{t as Vertical,n as WithChildren,r as WithOptions,C as __namedExportsOrder,v as default};
