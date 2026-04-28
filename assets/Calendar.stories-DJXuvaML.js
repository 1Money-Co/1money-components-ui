import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{C as s}from"./Calendar-Hsp2tKIk.js";import"./index-CP2yOfOm.js";import"./index-D1q9exoj.js";import"./Icons-D1aARqJQ.js";import"./classnames-h1fAIaEr.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";const f=["large","small"],C={title:"Components/Calendar",component:s,argTypes:{className:{control:"text"},prefixCls:{control:"text"},size:{control:"radio",options:[...f]},disabled:{control:"boolean"},showButtonBar:{control:"boolean"},invalid:{control:"boolean"},appendTo:{control:"radio",options:["self",null]},contentWidth:{control:"text"}},args:{size:"large",disabled:!1,invalid:!1,appendTo:null},tags:["autodocs"]},l={args:{size:"large",disabled:!1,label:"Date of Incorporation",message:"",required:!0,invalid:!1,success:!1}},r={args:{size:"large",disabled:!1,label:"Date Range",required:!0,selectionMode:"range",numberOfMonths:2}},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:f.map(a=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:a}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:[e.jsx(s,{size:a,label:"Default",required:!0,appendTo:null}),e.jsx(s,{size:a,label:"Disabled",disabled:!0,appendTo:null}),e.jsx(s,{size:a,label:"Invalid",invalid:!0,message:"This field is required",appendTo:null}),e.jsx(s,{size:a,label:"Success",success:!0,message:"Looks good!",appendTo:null})]})]},a))}),tags:["!autodocs","dev"]};var n,i,t;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'large',
    disabled: false,
    label: 'Date of Incorporation',
    message: '',
    required: true,
    invalid: false,
    success: false
  }
}`,...(t=(i=l.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    disabled: false,
    label: 'Date Range',
    required: true,
    selectionMode: 'range',
    numberOfMonths: 2
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const S=["Primary","Range","AllVariants"];export{o as AllVariants,l as Primary,r as Range,S as __namedExportsOrder,C as default};
