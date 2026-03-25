import{j as a,c as T,a as C}from"./classnames-DVmDMOck.js";import{r as g}from"./index-LFmgH05F.js";import{f as E}from"./index-CcqeJTvO.js";import{I as S}from"./Icons-Jj-V_22N.js";const k={large:12,medium:12,small:10},n=r=>{const{className:e="",prefixCls:o="tag",color:I="neutral",size:b="large",label:x,icon:f,removable:h=!1,onRemove:j,ref:R,...z}=r,s=T(o),y=k[b];return a.jsxs("span",{...z,ref:R,className:s(void 0,C(s(I),s(b),e)),children:[f&&a.jsx("span",{className:s("icon"),children:a.jsx(S,{name:f,size:y})}),x&&a.jsx("span",{className:s("label"),children:x}),h&&a.jsx("span",{className:s("remove"),onClick:j,role:"button",tabIndex:0,"aria-label":"Remove",children:a.jsx(S,{name:"cross",size:y})})]})};g.memo(n);const u=["neutral","warning","negative","success","recommended","black"],v=["large","medium","small"],Z={title:"Components/Tag",component:n,argTypes:{color:{control:"radio",options:[...u]},size:{control:"radio",options:[...v]},removable:{control:"boolean"},label:{control:"text"}},args:{label:"Tag",color:"neutral",size:"large",removable:!0,icon:"add",onRemove:E()},tags:["autodocs"]},l={render:r=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:v.map(e=>a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:e}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:u.map(o=>g.createElement(n,{...r,key:`${e}-${o}`,size:e,color:o,label:o}))})]},e))}),args:{label:void 0},tags:["!autodocs","dev"]},t={render:r=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:u.map(e=>g.createElement(n,{...r,key:e,color:e,label:e}))})},c={render:r=>a.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:v.map(e=>g.createElement(n,{...r,key:e,size:e,label:e}))})},i={args:{icon:"add",label:"Tag"}},m={args:{icon:void 0,label:"Tag"}},d={args:{removable:!0,label:"Removable"}},p={args:{removable:!1,icon:void 0,label:"Read-only"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
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
        gap: 12,
        alignItems: 'center'
      }}>
            {COLORS.map(color => <Tag {...args} key={\`\${size}-\${color}\`} size={size} color={color} label={color} />)}
          </div>
        </div>)}
    </div>,
  args: {
    label: undefined
  },
  tags: ['!autodocs', 'dev']
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    alignItems: 'center'
  }}>
      {COLORS.map(color => <Tag {...args} key={color} color={color} label={color} />)}
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      {SIZES.map(size => <Tag {...args} key={size} size={size} label={size} />)}
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'add',
    label: 'Tag'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: undefined,
    label: 'Tag'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    removable: true,
    label: 'Removable'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    removable: false,
    icon: undefined,
    label: 'Read-only'
  }
}`,...p.parameters?.docs?.source}}};const _=["AllVariants","Colors","Sizes","WithIcon","WithoutIcon","Removable","NotRemovable"];export{l as AllVariants,t as Colors,p as NotRemovable,d as Removable,c as Sizes,i as WithIcon,m as WithoutIcon,_ as __namedExportsOrder,Z as default};
