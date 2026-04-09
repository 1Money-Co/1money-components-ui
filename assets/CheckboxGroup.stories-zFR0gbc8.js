import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as V}from"./index-CP2yOfOm.js";import{f as O}from"./index-DCiaR2iG.js";import{a as u,C as i}from"./index-BKBuw4Z7.js";import"./Typography-COcdYQQO.js";import"./classnames-0AlMal0H.js";import"./ResizeObserver-DbXOvenx.js";import"./index-nCcupNJZ.js";import"./Icons-C17k0gNH.js";import"./clipboard-C7s2bcmm.js";import"./iframe-C8OcTo_O.js";import"./Tooltip-CsTd8WLo.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const f=[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange",disabled:!0}],_={title:"Components/CheckboxGroup",component:u,argTypes:{disabled:{control:"boolean"},orientation:{control:"radio",options:["horizontal","vertical"]}},args:{disabled:!1,orientation:"horizontal",onChange:O()},tags:["autodocs"]},r={render:e=>{const[l,p]=V.useState(["apple"]);return t.jsx(u,{...e,options:f.map(a=>({...a})),value:l,onChange:a=>{var o;p(a),(o=e.onChange)==null||o.call(e,a)}})}},n={args:{orientation:"vertical",options:f.map(e=>({...e})),defaultValue:["pear"]}},s={render:e=>{const[l,p]=V.useState(["beta"]);return t.jsxs(u,{...e,value:l,onChange:a=>{var o;p(a),(o=e.onChange)==null||o.call(e,a)},children:[t.jsx(i,{value:"alpha",label:"Alpha"}),t.jsx(i,{value:"beta",label:"Beta"}),t.jsx(i,{value:"gamma",label:"Gamma",disabled:!0})]})},tags:["!autodocs","dev"]};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Array<string | number>>(['apple']);
    return <CheckboxGroup {...args} options={OPTIONS.map(option => ({
      ...option
    }))} value={value} onChange={nextValue => {
      setValue(nextValue);
      args.onChange?.(nextValue);
    }} />;
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,b,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    options: OPTIONS.map(option => ({
      ...option
    })),
    defaultValue: ['pear']
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,C,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const R=["WithOptions","Vertical","WithChildren"];export{n as Vertical,s as WithChildren,r as WithOptions,R as __namedExportsOrder,_ as default};
