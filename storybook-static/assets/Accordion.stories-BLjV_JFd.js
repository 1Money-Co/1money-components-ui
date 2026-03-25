import{j as s,c as M,a as b}from"./classnames-DVmDMOck.js";import{f as T}from"./index-CcqeJTvO.js";import{r as D}from"./index-LFmgH05F.js";import{I as w}from"./Icons-Jj-V_22N.js";import{u as F,a as R}from"./index-CUUKTymD.js";const W="minus",P="add",V="chevronUp",$="chevronDown",B=24,Z=20,h=i=>{const{className:t="",prefixCls:o="accordion",items:K,activeKeys:I,defaultActiveKeys:N,multiple:C=!1,variant:A="fill",size:k="large",onChange:L,..._}=i,a=M(o),[l,z]=F(N??[],I),j=R(e=>{if(e.disabled)return;const n=l.includes(e.key);let r;n?r=l.filter(f=>f!==e.key):r=C?[...l,e.key]:[e.key],z(r),L?.(r)}),O=k==="large"?B:Z;return s.jsx("div",{..._,className:a(void 0,b(a(A),a(k),t)),children:K.map(e=>{const n=l.includes(e.key),r=e.disabled,f=A==="fill"?n?W:P:n?V:$;return s.jsxs("div",{className:b(a("item"),n&&a("item-active"),r&&a("item-disabled")),children:[s.jsxs("button",{type:"button",className:a("header"),"aria-expanded":n,"aria-disabled":r,disabled:r,onClick:()=>j(e),children:[s.jsx("span",{className:a("title"),children:e.title}),s.jsx(w,{name:f,size:O,className:a("icon")})]}),n&&s.jsx("div",{className:a("content"),children:e.children})]},e.key)})})};D.memo(h);const x=["fill","stroke"],E=["large","small"],S=[{key:"1",title:"What is 1Money Network?",children:"The 1Money Network addresses the fundamental challenge facing global payments today: the need for a purpose-built infrastructure that makes stablecoin transactions as simple and efficient as traditional payments."},{key:"2",title:"How does it work?",children:"With stablecoins now processing over $27 trillion annually — surpassing Visa and Mastercard combined — we've built the first Layer 1 protocol designed exclusively for stablecoin payments."},{key:"3",title:"What are the benefits?",children:"Our mission is to eliminate the complexity, unpredictable costs, and technical barriers that prevent mainstream stablecoin adoption, making digital payments accessible to everyone from individuals to enterprises."},{key:"4",title:"Getting started",children:"Start by creating an account and connecting your wallet. The onboarding process takes less than 5 minutes."},{key:"5",title:"Is it secure?",children:"Security is our top priority. We use state-of-the-art encryption and multi-signature wallets to protect your assets."}],Q={title:"Components/Accordion",component:h,argTypes:{variant:{control:"radio",options:[...x]},size:{control:"radio",options:[...E]},multiple:{control:"boolean"}},args:{variant:"fill",size:"large",multiple:!1,items:S,onChange:T()},tags:["autodocs"]},c={},d={args:{variant:"fill",size:"large",defaultActiveKeys:["1"]}},m={args:{variant:"fill",size:"small",defaultActiveKeys:["1"]}},u={args:{variant:"stroke",size:"large",defaultActiveKeys:["1"]}},p={args:{variant:"stroke",size:"small",defaultActiveKeys:["1"]}},g={args:{multiple:!0,defaultActiveKeys:["1","3"]}},y={args:{defaultActiveKeys:["1"],items:S.map((i,t)=>t===2?{...i,disabled:!0}:i)}},v={render:i=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:48},children:x.map(t=>s.jsx("div",{children:E.map(o=>s.jsxs("div",{style:{marginBottom:32},children:[s.jsxs("h3",{style:{marginBottom:12},children:[t," / ",o]}),s.jsx(h,{...i,variant:t,size:o,items:S.slice(0,3),defaultActiveKeys:["1"]})]},`${t}-${o}`))},t))}),args:{items:void 0},tags:["!autodocs","dev"]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fill',
    size: 'large',
    defaultActiveKeys: ['1']
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fill',
    size: 'small',
    defaultActiveKeys: ['1']
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    size: 'large',
    defaultActiveKeys: ['1']
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    size: 'small',
    defaultActiveKeys: ['1']
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    defaultActiveKeys: ['1', '3']
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultActiveKeys: ['1'],
    items: SAMPLE_ITEMS.map((item, i) => i === 2 ? {
      ...item,
      disabled: true
    } : item)
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 48
  }}>
      {VARIANTS.map(variant => <div key={variant}>
          {SIZES.map(size => <div key={\`\${variant}-\${size}\`} style={{
        marginBottom: 32
      }}>
              <h3 style={{
          marginBottom: 12
        }}>
                {variant} / {size}
              </h3>
              <Accordion {...args} variant={variant} size={size} items={SAMPLE_ITEMS.slice(0, 3)} defaultActiveKeys={['1']} />
            </div>)}
        </div>)}
    </div>,
  args: {
    items: undefined as any
  },
  tags: ['!autodocs', 'dev']
}`,...v.parameters?.docs?.source}}};const X=["Default","FillLarge","FillSmall","StrokeLarge","StrokeSmall","Multiple","WithDisabled","AllVariants"];export{v as AllVariants,c as Default,d as FillLarge,m as FillSmall,g as Multiple,u as StrokeLarge,p as StrokeSmall,y as WithDisabled,X as __namedExportsOrder,Q as default};
