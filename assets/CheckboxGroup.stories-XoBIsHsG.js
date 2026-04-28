import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as V}from"./index-CP2yOfOm.js";import{f as O}from"./index-DCiaR2iG.js";import{a as u,C as i}from"./index-CI_ZPgxl.js";import"./Typography-BK-BjBuS.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./Icons-BzLXzN_n.js";import"./clipboard-C7s2bcmm.js";import"./iframe-k9SZMUwJ.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const f=[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange",disabled:!0}],_={title:"Components/CheckboxGroup",component:u,argTypes:{disabled:{control:"boolean"},direction:{control:"radio",options:["horizontal","vertical"]}},args:{disabled:!1,direction:"horizontal",onChange:O()},tags:["autodocs"]},t={render:e=>{const[l,p]=V.useState(["apple"]);return r.jsx(u,{...e,options:f.map(a=>({...a})),value:l,onChange:a=>{var o;p(a),(o=e.onChange)==null||o.call(e,a)}})}},n={args:{direction:"vertical",options:f.map(e=>({...e})),defaultValue:["pear"]}},s={render:e=>{const[l,p]=V.useState(["beta"]);return r.jsxs(u,{...e,value:l,onChange:a=>{var o;p(a),(o=e.onChange)==null||o.call(e,a)},children:[r.jsx(i,{value:"alpha",label:"Alpha"}),r.jsx(i,{value:"beta",label:"Beta"}),r.jsx(i,{value:"gamma",label:"Gamma",disabled:!0})]})},tags:["!autodocs","dev"]};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Array<string | number>>(['apple']);
    return <CheckboxGroup {...args} options={OPTIONS.map(option => ({
      ...option
    }))} value={value} onChange={nextValue => {
      setValue(nextValue);
      args.onChange?.(nextValue);
    }} />;
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,b,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
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
}`,...(g=(C=s.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const R=["WithOptions","Vertical","WithChildren"];export{n as Vertical,s as WithChildren,t as WithOptions,R as __namedExportsOrder,_ as default};
