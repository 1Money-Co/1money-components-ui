import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as s}from"./Calendar-DSr2sXy8.js";import"./index-CP2yOfOm.js";import"./index-D1q9exoj.js";import"./Icons-C17k0gNH.js";import"./classnames-0AlMal0H.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";const y=["large","small"],I={title:"Components/Calendar",component:s,argTypes:{className:{control:"text"},prefixCls:{control:"text"},size:{control:"radio",options:[...y]},disabled:{control:"boolean"},showButtonBar:{control:"boolean"},invalid:{control:"boolean"},appendTo:{control:"radio",options:["self",null]},contentWidth:{control:"text"}},args:{size:"large",disabled:!1,invalid:!1,appendTo:null},tags:["autodocs"]},l={args:{size:"large",disabled:!1,label:"Date of Incorporation",message:"",required:!0,invalid:!1,success:!1}},r={args:{size:"large",disabled:!1,label:"Date Range",required:!0,selectionMode:"range",numberOfMonths:2}},o={args:{size:"large",disabled:!1,label:"Select Multiple Dates",required:!0,selectionMode:"multiple"}},n={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:y.map(a=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:a}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:[e.jsx(s,{size:a,label:"Default",required:!0,appendTo:null}),e.jsx(s,{size:a,label:"Disabled",disabled:!0,appendTo:null}),e.jsx(s,{size:a,label:"Invalid",invalid:!0,message:"This field is required",appendTo:null}),e.jsx(s,{size:a,label:"Success",success:!0,message:"Looks good!",appendTo:null})]})]},a))}),tags:["!autodocs","dev"]};var i,t,d;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'large',
    disabled: false,
    label: 'Date of Incorporation',
    message: '',
    required: true,
    invalid: false,
    success: false
  }
}`,...(d=(t=l.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var p,c,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    disabled: false,
    label: 'Date Range',
    required: true,
    selectionMode: 'range',
    numberOfMonths: 2
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,g,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'large',
    disabled: false,
    label: 'Select Multiple Dates',
    required: true,
    selectionMode: 'multiple'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,x,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {SIZES.map(size => <div key={size}>
          <h3 style={{
        marginBottom: 12
      }}>{size}</h3>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 24
      }}>
            <Calendar size={size} label="Default" required appendTo={null} />
            <Calendar size={size} label="Disabled" disabled appendTo={null} />
            <Calendar size={size} label="Invalid" invalid message="This field is required" appendTo={null} />
            <Calendar size={size} label="Success" success message="Looks good!" appendTo={null} />
          </div>
        </div>)}
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const R=["Primary","Range","Multiple","AllVariants"];export{n as AllVariants,o as Multiple,l as Primary,r as Range,R as __namedExportsOrder,I as default};
