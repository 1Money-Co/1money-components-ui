import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-CP2yOfOm.js";import{f as w}from"./index-DCiaR2iG.js";import{a as D,b as Z,c as g,d as u,T as m}from"./Tag-BcFF1uNV.js";import"./Icons-D1aARqJQ.js";import"./classnames-h1fAIaEr.js";import"./Typography-W3UmxfrR.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./iframe-DcBqT0B3.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const Y={title:"Components/Tag",component:m,argTypes:{color:{control:"radio",options:[...u]},size:{control:"radio",options:[...g]},removable:{control:"boolean"},label:{control:"text"}},args:{label:"Tag",color:Z,size:D,removable:!0,icon:"add",onRemove:w()},tags:["autodocs"]},o={render:r=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:g.map(e=>a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:e}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:u.map(d=>p.createElement(m,{...r,key:`${e}-${d}`,size:e,color:d,label:d}))})]},e))}),args:{label:void 0},tags:["!autodocs","dev"]},s={render:r=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:u.map(e=>p.createElement(m,{...r,key:e,color:e,label:e}))})},n={render:r=>a.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:g.map(e=>p.createElement(m,{...r,key:e,size:e,label:e}))})},l={args:{icon:"add",label:"Tag"}},t={args:{icon:void 0,label:"Tag"}},i={args:{removable:!0,label:"Removable"}},c={args:{removable:!1,icon:void 0,label:"Read-only"}};var v,b,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {TAG_SIZES.map(size => <div key={size}>
          <h3 style={{
        marginBottom: 12
      }}>{size}</h3>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center'
      }}>
            {TAG_COLORS.map(color => <Tag {...args} key={\`\${size}-\${color}\`} size={size} color={color} label={color} />)}
          </div>
        </div>)}
    </div>,
  args: {
    label: undefined
  },
  tags: ['!autodocs', 'dev']
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,x,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>
      {TAG_COLORS.map(color => <Tag {...args} key={color} color={color} label={color} />)}
    </div>
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var S,I,R;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      {TAG_SIZES.map(size => <Tag {...args} key={size} size={size} label={size} />)}
    </div>
}`,...(R=(I=n.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var h,A,E;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    icon: 'add',
    label: 'Tag'
  }
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var _,z,O;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    label: 'Tag'
  }
}`,...(O=(z=t.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var j,G,W;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    removable: true,
    label: 'Removable'
  }
}`,...(W=(G=i.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var k,C,L;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    removable: false,
    icon: undefined,
    label: 'Read-only'
  }
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const ee=["AllVariants","Colors","Sizes","WithIcon","WithoutIcon","Removable","NotRemovable"];export{o as AllVariants,s as Colors,c as NotRemovable,i as Removable,n as Sizes,l as WithIcon,t as WithoutIcon,ee as __namedExportsOrder,Y as default};
