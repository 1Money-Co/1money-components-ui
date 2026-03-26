import{j as a,c as O,a as W}from"./classnames-DVmDMOck.js";import{r}from"./index-LFmgH05F.js";import{u as I,b as K,a as _}from"./index-CUUKTymD.js";const t=f=>{const{className:T="",prefixCls:j="tabs",activeKey:L,defaultActiveKey:A,items:i,animated:S=!0,onChange:C,...D}=f,s=O(j),k=r.useRef(null),u=r.useRef(new Map),[h,w]=r.useState(null),[n,B]=I(A??i[0]?.key??"",L),v=r.useCallback(()=>{const e=k.current,l=u.current.get(n);if(!e||!l)return;const N=e.getBoundingClientRect(),p=l.getBoundingClientRect();w({width:p.width,transform:`translateX(${p.left-N.left+e.scrollLeft}px)`})},[n]);K(e=>{v()},[n,i,v]);const E=_(e=>{e.disabled||(B(e.key),C?.(e.key))}),R=r.useCallback((e,l)=>{l?u.current.set(e,l):u.current.delete(e)},[]),g=i.find(e=>e.key===n);return a.jsxs("div",{...D,className:s(void 0,T),children:[a.jsxs("div",{className:s("header"),ref:k,role:"tablist",children:[i.map(e=>a.jsxs("button",{ref:l=>R(e.key,l),role:"tab",type:"button","aria-selected":e.key===n,"aria-disabled":e.disabled,tabIndex:e.key===n?0:-1,className:s("tab",W(e.key===n&&s("tab-active"),e.disabled&&s("tab-disabled"))),onClick:()=>E(e),children:[a.jsx("span",{className:s("tab-label"),children:e.label}),e.badge!==void 0&&a.jsx("span",{className:s("tab-badge"),children:e.badge})]},e.key)),h&&a.jsx("span",{className:s("indicator"),style:{...h,...!S&&{transition:"none"}}})]}),g?.children!==void 0&&a.jsx("div",{className:s("panel"),role:"tabpanel","aria-labelledby":n,children:g.children})]})};r.memo(t);const V={title:"Components/Tabs",component:t,argTypes:{activeKey:{control:"text"}},parameters:{docs:{source:{type:"code"}}},tags:["autodocs"]},x=[{key:"tab1",label:"Overview"},{key:"tab2",label:"Transactions"},{key:"tab3",label:"Analytics"},{key:"tab4",label:"Settings"},{key:"tab5",label:"Reports"}],b={render:()=>a.jsx(t,{items:x})},c={render:()=>a.jsx(t,{items:[{key:"tab1",label:"Overview",badge:5},{key:"tab2",label:"Transactions",badge:12},{key:"tab3",label:"Analytics"},{key:"tab4",label:"Settings",badge:3}]})},o={render:()=>a.jsx(t,{items:[{key:"tab1",label:"Overview"},{key:"tab2",label:"Transactions"},{key:"tab3",label:"Analytics",disabled:!0},{key:"tab4",label:"Settings"}]})},d={render:()=>a.jsx(t,{defaultActiveKey:"tab1",items:[{key:"tab1",label:"Overview",children:a.jsx("div",{children:"Overview content goes here"})},{key:"tab2",label:"Transactions",children:a.jsx("div",{children:"Transactions content goes here"})},{key:"tab3",label:"Analytics",children:a.jsx("div",{children:"Analytics content goes here"})}]})},y={render:()=>a.jsx(t,{items:x,animated:!1})},m={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"Default"}),a.jsx(t,{items:[{key:"tab1",label:"Label"},{key:"tab2",label:"Label"},{key:"tab3",label:"Label"}]})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"With Badges"}),a.jsx(t,{items:[{key:"tab1",label:"Label",badge:10},{key:"tab2",label:"Label",badge:5},{key:"tab3",label:"Label",badge:20}]})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"With Disabled"}),a.jsx(t,{items:[{key:"tab1",label:"Label"},{key:"tab2",label:"Label",disabled:!0},{key:"tab3",label:"Label"}]})]})]}),tags:["!autodocs","dev"]};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs items={DEFAULT_ITEMS} />
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs items={DEFAULT_ITEMS} animated={false} />
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const X=["Default","WithBadges","WithDisabled","WithContent","NoAnimation","AllVariants"];export{m as AllVariants,b as Default,y as NoAnimation,c as WithBadges,d as WithContent,o as WithDisabled,X as __namedExportsOrder,V as default};
