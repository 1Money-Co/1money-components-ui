import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-CP2yOfOm.js";import{c as Z,j as ee}from"./classnames-0AlMal0H.js";import{u as ae}from"./index-CyN509qF.js";import{u as te}from"./index-CN0Pk037.js";import{u as ne}from"./index-nCcupNJZ.js";const t=F=>{var f;const{className:U="",prefixCls:V="tabs",activeKey:z,defaultActiveKey:X,items:i,animated:$=!0,onChange:p,...G}=F,n=Z(V),k=l.useRef(null),g=l.useRef(new Map),[h,H]=l.useState(null),[s,J]=ae(X??((f=i[0])==null?void 0:f.key)??"",z),v=l.useCallback(()=>{const e=k.current,r=g.current.get(s);if(!e||!r)return;const Y=e.getBoundingClientRect(),x=r.getBoundingClientRect();H({width:x.width,transform:`translateX(${x.left-Y.left+e.scrollLeft}px)`})},[s]);te(e=>{v()},[s,i,v]);const P=ne(e=>{e.disabled||(J(e.key),p==null||p(e.key))}),Q=l.useCallback((e,r)=>{r?g.current.set(e,r):g.current.delete(e)},[]),o=i.find(e=>e.key===s);return a.jsxs("div",{...G,className:n(void 0,U),children:[a.jsxs("div",{className:n("header"),ref:k,role:"tablist",children:[i.map(e=>a.jsxs("button",{ref:r=>Q(e.key,r),role:"tab",type:"button","aria-selected":e.key===s,"aria-disabled":e.disabled,tabIndex:e.key===s?0:-1,className:n("tab",ee(e.key===s&&n("tab-active"),e.disabled&&n("tab-disabled"))),onClick:()=>P(e),children:[a.jsx("span",{className:n("tab-label"),children:e.label}),e.badge!==void 0&&a.jsx("span",{className:n("tab-badge"),children:e.badge})]},e.key)),h&&a.jsx("span",{className:n("indicator"),style:{...h,...!$&&{transition:"none"}}})]}),(o==null?void 0:o.children)!==void 0&&a.jsx("div",{className:n("panel"),role:"tabpanel","aria-labelledby":s,children:o.children})]})};l.memo(t);t.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{prefixCls:{required:!1,tsType:{name:"string"},description:"CSS class prefix for customization"},activeKey:{required:!1,tsType:{name:"string"},description:"Active tab key (controlled mode)"},defaultActiveKey:{required:!1,tsType:{name:"string"},description:"Default active tab key (uncontrolled mode)"},items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Tab items configuration"},animated:{required:!1,tsType:{name:"boolean"},description:"Whether to animate the indicator transition (default: true)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"Callback when active tab changes"}},composes:["Omit"]};const ce={title:"Components/Tabs",component:t,argTypes:{activeKey:{control:"text"}},parameters:{docs:{source:{type:"code"}}},tags:["autodocs"]},M=[{key:"tab1",label:"Overview"},{key:"tab2",label:"Transactions"},{key:"tab3",label:"Analytics"},{key:"tab4",label:"Settings"},{key:"tab5",label:"Reports"}],d={render:()=>a.jsx(t,{items:M})},c={render:()=>a.jsx(t,{items:[{key:"tab1",label:"Overview",badge:5},{key:"tab2",label:"Transactions",badge:12},{key:"tab3",label:"Analytics"},{key:"tab4",label:"Settings",badge:3}]})},b={render:()=>a.jsx(t,{items:[{key:"tab1",label:"Overview"},{key:"tab2",label:"Transactions"},{key:"tab3",label:"Analytics",disabled:!0},{key:"tab4",label:"Settings"}]})},m={render:()=>a.jsx(t,{defaultActiveKey:"tab1",items:[{key:"tab1",label:"Overview",children:a.jsx("div",{children:"Overview content goes here"})},{key:"tab2",label:"Transactions",children:a.jsx("div",{children:"Transactions content goes here"})},{key:"tab3",label:"Analytics",children:a.jsx("div",{children:"Analytics content goes here"})}]})},y={render:()=>a.jsx(t,{items:M,animated:!1})},u={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"Default"}),a.jsx(t,{items:[{key:"tab1",label:"Label"},{key:"tab2",label:"Label"},{key:"tab3",label:"Label"}]})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"With Badges"}),a.jsx(t,{items:[{key:"tab1",label:"Label",badge:10},{key:"tab2",label:"Label",badge:5},{key:"tab3",label:"Label",badge:20}]})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"With Disabled"}),a.jsx(t,{items:[{key:"tab1",label:"Label"},{key:"tab2",label:"Label",disabled:!0},{key:"tab3",label:"Label"}]})]})]}),tags:["!autodocs","dev"]};var T,j,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tabs items={DEFAULT_ITEMS} />
}`,...(L=(j=d.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var A,S,C;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Tabs items={[{
    key: 'tab1',
    label: 'Overview',
    badge: 5
  }, {
    key: 'tab2',
    label: 'Transactions',
    badge: 12
  }, {
    key: 'tab3',
    label: 'Analytics'
  }, {
    key: 'tab4',
    label: 'Settings',
    badge: 3
  }]} />
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var w,D,B;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Tabs items={[{
    key: 'tab1',
    label: 'Overview'
  }, {
    key: 'tab2',
    label: 'Transactions'
  }, {
    key: 'tab3',
    label: 'Analytics',
    disabled: true
  }, {
    key: 'tab4',
    label: 'Settings'
  }]} />
}`,...(B=(D=b.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var E,N,O;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Tabs defaultActiveKey="tab1" items={[{
    key: 'tab1',
    label: 'Overview',
    children: <div>Overview content goes here</div>
  }, {
    key: 'tab2',
    label: 'Transactions',
    children: <div>Transactions content goes here</div>
  }, {
    key: 'tab3',
    label: 'Analytics',
    children: <div>Analytics content goes here</div>
  }]} />
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,W,K;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Tabs items={DEFAULT_ITEMS} animated={false} />
}`,...(K=(W=y.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var I,_,q;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Default</h3>
        <Tabs items={[{
        key: 'tab1',
        label: 'Label'
      }, {
        key: 'tab2',
        label: 'Label'
      }, {
        key: 'tab3',
        label: 'Label'
      }]} />
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>With Badges</h3>
        <Tabs items={[{
        key: 'tab1',
        label: 'Label',
        badge: 10
      }, {
        key: 'tab2',
        label: 'Label',
        badge: 5
      }, {
        key: 'tab3',
        label: 'Label',
        badge: 20
      }]} />
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>With Disabled</h3>
        <Tabs items={[{
        key: 'tab1',
        label: 'Label'
      }, {
        key: 'tab2',
        label: 'Label',
        disabled: true
      }, {
        key: 'tab3',
        label: 'Label'
      }]} />
      </div>
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const be=["Default","WithBadges","WithDisabled","WithContent","NoAnimation","AllVariants"];export{u as AllVariants,d as Default,y as NoAnimation,c as WithBadges,m as WithContent,b as WithDisabled,be as __namedExportsOrder,ce as default};
