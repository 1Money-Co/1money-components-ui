import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-CP2yOfOm.js";import{c as se,j as le}from"./classnames-h1fAIaEr.js";import{u as re}from"./index-CyN509qF.js";import{u as ie}from"./index-CN0Pk037.js";import{u as oe}from"./index-nCcupNJZ.js";const t=X=>{var T;const{className:$="",prefixCls:G="tabs",activeKey:H,defaultActiveKey:J,items:i,animated:P=!0,fullWidth:Q=!1,onChange:p,...Y}=X,n=se(G),v=r.useRef(null),k=r.useRef(new Map),[f,Z]=r.useState(null),[s,ee]=re(J??((T=i[0])==null?void 0:T.key)??"",H),x=r.useCallback(()=>{const a=v.current,l=k.current.get(s);if(!a||!l)return;const ne=a.getBoundingClientRect(),j=l.getBoundingClientRect();Z({width:j.width,transform:`translateX(${j.left-ne.left+a.scrollLeft}px)`})},[s]);ie(a=>{x()},[s,i,x]);const ae=oe(a=>{a.disabled||(ee(a.key),p==null||p(a.key))}),te=r.useCallback((a,l)=>{l?k.current.set(a,l):k.current.delete(a)},[]),o=i.find(a=>a.key===s);return e.jsxs("div",{...Y,className:n(void 0,$),children:[e.jsxs("div",{className:n("header",Q?n("header-full-width"):void 0),ref:v,role:"tablist",children:[i.map(a=>e.jsxs("button",{ref:l=>te(a.key,l),role:"tab",type:"button","aria-selected":a.key===s,"aria-disabled":a.disabled,tabIndex:a.key===s?0:-1,className:n("tab",le(a.key===s&&n("tab-active"),a.disabled&&n("tab-disabled"))),onClick:()=>ae(a),children:[e.jsx("span",{className:n("tab-label"),children:a.label}),a.badge!==void 0&&e.jsx("span",{className:n("tab-badge"),children:a.badge})]},a.key)),f&&e.jsx("span",{className:n("indicator"),style:{...f,...!P&&{transition:"none"}}})]}),(o==null?void 0:o.children)!==void 0&&e.jsx("div",{className:n("panel"),role:"tabpanel","aria-labelledby":s,children:o.children})]})};r.memo(t);t.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{prefixCls:{required:!1,tsType:{name:"string"},description:"CSS class prefix for customization"},activeKey:{required:!1,tsType:{name:"string"},description:"Active tab key (controlled mode)"},defaultActiveKey:{required:!1,tsType:{name:"string"},description:"Default active tab key (uncontrolled mode)"},items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Tab items configuration"},animated:{required:!1,tsType:{name:"boolean"},description:"Whether to animate the indicator transition (default: true)"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the tab bar extends full width with a bottom border (default: false)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"Callback when active tab changes"}},composes:["Omit"]};const he={title:"Components/Tabs",component:t,argTypes:{activeKey:{control:"text"}},parameters:{docs:{source:{type:"code"}}},tags:["autodocs"]},g=[{key:"tab1",label:"Overview"},{key:"tab2",label:"Transactions"},{key:"tab3",label:"Analytics"},{key:"tab4",label:"Settings"},{key:"tab5",label:"Reports"}],d={render:()=>e.jsx(t,{items:g})},b={render:()=>e.jsx(t,{items:[{key:"tab1",label:"Overview",badge:5},{key:"tab2",label:"Transactions",badge:12},{key:"tab3",label:"Analytics"},{key:"tab4",label:"Settings",badge:3}]})},c={render:()=>e.jsx(t,{items:[{key:"tab1",label:"Overview"},{key:"tab2",label:"Transactions"},{key:"tab3",label:"Analytics",disabled:!0},{key:"tab4",label:"Settings"}]})},m={render:()=>e.jsx(t,{defaultActiveKey:"tab1",items:[{key:"tab1",label:"Overview",children:e.jsx("div",{children:"Overview content goes here"})},{key:"tab2",label:"Transactions",children:e.jsx("div",{children:"Transactions content goes here"})},{key:"tab3",label:"Analytics",children:e.jsx("div",{children:"Analytics content goes here"})}]})},y={render:()=>e.jsx(t,{items:g,fullWidth:!0})},u={render:()=>e.jsx(t,{items:g,animated:!1})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Default"}),e.jsx(t,{items:[{key:"tab1",label:"Label"},{key:"tab2",label:"Label"},{key:"tab3",label:"Label"}]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"With Badges"}),e.jsx(t,{items:[{key:"tab1",label:"Label",badge:10},{key:"tab2",label:"Label",badge:5},{key:"tab3",label:"Label",badge:20}]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"With Disabled"}),e.jsx(t,{items:[{key:"tab1",label:"Label"},{key:"tab2",label:"Label",disabled:!0},{key:"tab3",label:"Label"}]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Full Width"}),e.jsx(t,{fullWidth:!0,items:[{key:"tab1",label:"Label"},{key:"tab2",label:"Label"},{key:"tab3",label:"Label"}]})]})]}),tags:["!autodocs","dev"]};var L,A,S;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Tabs items={DEFAULT_ITEMS} />
}`,...(S=(A=d.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var W,w,C;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(C=(w=b.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,B,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var N,O,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var I,K,F;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Tabs items={DEFAULT_ITEMS} fullWidth />
}`,...(F=(K=y.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};var _,q,M;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Tabs items={DEFAULT_ITEMS} animated={false} />
}`,...(M=(q=u.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var U,V,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Full Width</h3>
        <Tabs fullWidth items={[{
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
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(z=(V=h.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const pe=["Default","WithBadges","WithDisabled","WithContent","FullWidth","NoAnimation","AllVariants"];export{h as AllVariants,d as Default,y as FullWidth,u as NoAnimation,b as WithBadges,m as WithContent,c as WithDisabled,pe as __namedExportsOrder,he as default};
