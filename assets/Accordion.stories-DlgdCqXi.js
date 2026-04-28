import{f as Y}from"./index-DCiaR2iG.js";import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as ee}from"./index-CP2yOfOm.js";import{I as se}from"./Icons-D1aARqJQ.js";import{g as h}from"./Typography-C5dixINh.js";import{c as ae,j as A}from"./classnames-h1fAIaEr.js";import{u as te}from"./index-CyN509qF.js";import{u as re}from"./index-nCcupNJZ.js";import"./ResizeObserver-DW8-DKQf.js";import"./clipboard-C7s2bcmm.js";import"./iframe-B6rRREmY.js";import"./Tooltip-DeIhm5fH.js";import"./index-CN0Pk037.js";const ie="minus",ne="add",oe="chevronUp",le="chevronDown",ce=24,me=20,S=i=>{const{className:g="",prefixCls:Z="accordion",items:G,activeKeys:H,defaultActiveKeys:B,multiple:U=!1,variant:k="fill",size:n="large",onChange:f,...$}=i,s=ae(Z),[o,J]=te(B??[],H),Q=re(e=>{if(e.disabled)return;const t=o.includes(e.key);let a;t?a=o.filter(v=>v!==e.key):a=U?[...o,e.key]:[e.key],J(a),f==null||f(a)}),X=n==="large"?ce:me;return r.jsx("div",{...$,className:s(void 0,A(s(k),s(n),g)),children:G.map(e=>{const t=o.includes(e.key),a=e.disabled,v=k==="fill"?t?ie:ne:t?oe:le;return r.jsxs("div",{className:A(s("item"),t&&s("item-active"),a&&s("item-disabled")),children:[r.jsxs("button",{type:"button",className:s("header"),"aria-expanded":t,"aria-disabled":a,disabled:a,onClick:()=>Q(e),children:[n==="large"?r.jsx(h.Headline,{size:"sm",className:s("title"),children:e.title}):r.jsx(h.Title,{size:"md",strong:!0,className:s("title"),children:e.title}),r.jsx(se,{name:v,size:X,className:s("icon")})]}),t&&r.jsx(h.Body,{size:n==="large"?"lg":"md",as:"div",className:s("content"),children:e.children})]},e.key)})})};ee.memo(S);S.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{prefixCls:{required:!1,tsType:{name:"string"},description:"CSS class prefix for customization"},items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:"Accordion items configuration"},activeKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Active (expanded) item keys (controlled mode)"},defaultActiveKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default active item keys (uncontrolled mode)"},multiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple items can be expanded simultaneously"},variant:{required:!1,tsType:{name:"union",raw:"'fill' | 'stroke'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'stroke'"}]},description:"Visual style variant"},size:{required:!1,tsType:{name:"union",raw:"'large' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'small'"}]},description:"Size variant"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(activeKeys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"activeKeys"}],return:{name:"void"}}},description:"Callback when active items change"}},composes:["Omit"]};const de=["fill","stroke"],ue=["large","small"],V=[{key:"1",title:"What is 1Money Network?",children:"The 1Money Network addresses the fundamental challenge facing global payments today: the need for a purpose-built infrastructure that makes stablecoin transactions as simple and efficient as traditional payments."},{key:"2",title:"How does it work?",children:"With stablecoins now processing over $27 trillion annually — surpassing Visa and Mastercard combined — we've built the first Layer 1 protocol designed exclusively for stablecoin payments."},{key:"3",title:"What are the benefits?",children:"Our mission is to eliminate the complexity, unpredictable costs, and technical barriers that prevent mainstream stablecoin adoption, making digital payments accessible to everyone from individuals to enterprises."},{key:"4",title:"Getting started",children:"Start by creating an account and connecting your wallet. The onboarding process takes less than 5 minutes."},{key:"5",title:"Is it secure?",children:"Security is our top priority. We use state-of-the-art encryption and multi-signature wallets to protect your assets."}],Ie={title:"Components/Accordion",component:S,argTypes:{variant:{control:"radio",options:[...de]},size:{control:"radio",options:[...ue]},multiple:{control:"boolean"}},args:{variant:"fill",size:"large",multiple:!1,items:V,onChange:Y()},tags:["autodocs"]},l={},c={args:{variant:"fill",size:"large",defaultActiveKeys:["1"]}},m={args:{variant:"fill",size:"small",defaultActiveKeys:["1"]}},d={args:{variant:"stroke",size:"large",defaultActiveKeys:["1"]}},u={args:{variant:"stroke",size:"small",defaultActiveKeys:["1"]}},p={args:{multiple:!0,defaultActiveKeys:["1","3"]}},y={args:{defaultActiveKeys:["1"],items:V.map((i,g)=>g===2?{...i,disabled:!0}:i)}};var b,K,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(x=(K=l.parameters)==null?void 0:K.docs)==null?void 0:x.source}}};var N,I,z;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'fill',
    size: 'large',
    defaultActiveKeys: ['1']
  }
}`,...(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var C,T,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'fill',
    size: 'small',
    defaultActiveKeys: ['1']
  }
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var _,w,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    size: 'large',
    defaultActiveKeys: ['1']
  }
}`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var O,j,M;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'stroke',
    size: 'small',
    defaultActiveKeys: ['1']
  }
}`,...(M=(j=u.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var D,q,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    multiple: true,
    defaultActiveKeys: ['1', '3']
  }
}`,...(W=(q=p.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var F,R,P;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultActiveKeys: ['1'],
    items: SAMPLE_ITEMS.map((item, i) => i === 2 ? {
      ...item,
      disabled: true
    } : item)
  }
}`,...(P=(R=y.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};const ze=["Default","FillLarge","FillSmall","StrokeLarge","StrokeSmall","Multiple","WithDisabled"];export{l as Default,c as FillLarge,m as FillSmall,p as Multiple,d as StrokeLarge,u as StrokeSmall,y as WithDisabled,ze as __namedExportsOrder,Ie as default};
