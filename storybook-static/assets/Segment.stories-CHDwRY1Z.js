import{j as a,c as B,a as k}from"./classnames-DVmDMOck.js";import{r}from"./index-LFmgH05F.js";import{u as w,b as F,a as _}from"./index-CUUKTymD.js";const l=L=>{const{className:S="",prefixCls:j="segment",value:y,defaultValue:D,items:v,animated:E=!0,onChange:A,...C}=L,t=B(j),g=r.useRef(null),p=r.useRef(new Map),[f,I]=r.useState(null),[s,T]=w(D??v[0]?.value??"",y),x=r.useCallback(()=>{const e=g.current,n=p.current.get(s);if(!e||!n)return;const V=e.getBoundingClientRect(),h=n.getBoundingClientRect();I({width:h.width,transform:`translateX(${h.left-V.left+e.scrollLeft}px)`})},[s]);F(()=>{x()},[s,v,x]);const N=_(e=>{e.disabled||(T(e.value),A?.(e.value))}),R=r.useCallback((e,n)=>{n?p.current.set(e,n):p.current.delete(e)},[]);return a.jsx("div",{...C,className:t(void 0,S),children:a.jsxs("div",{className:t("track"),ref:g,role:"radiogroup",children:[f&&a.jsx("span",{className:t("indicator"),style:{...f,...!E&&{transition:"none"}}}),v.map(e=>a.jsx("button",{ref:n=>R(e.value,n),role:"radio",type:"button","aria-checked":e.value===s,"aria-disabled":e.disabled,tabIndex:e.value===s?0:-1,className:t("item",k(e.value===s&&t("item-active"),e.disabled&&t("item-disabled"))),onClick:()=>N(e),children:a.jsx("span",{className:t("item-label"),children:e.label})},e.value))]})})};r.memo(l);const O={title:"Components/Segment",component:l,parameters:{docs:{source:{type:"code"}}},tags:["autodocs"]},b=[{value:"overview",label:"Overview"},{value:"transactions",label:"Transactions"},{value:"analytics",label:"Analytics"}],i={render:()=>a.jsx(l,{items:b})},o={render:()=>a.jsx(l,{defaultValue:"transactions",items:b})},c={render:()=>a.jsx(l,{items:[{value:"tab1",label:"Overview"},{value:"tab2",label:"Transactions"},{value:"tab3",label:"Analytics",disabled:!0},{value:"tab4",label:"Settings"}]})},u={render:()=>a.jsx(l,{items:[{value:"tab1",label:"Label"},{value:"tab2",label:"Label"},{value:"tab3",label:"Label"},{value:"tab4",label:"Label"},{value:"tab5",label:"Label"}]})},d={render:()=>a.jsx(l,{items:b,animated:!1})},m={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"Default (3 items)"}),a.jsx(l,{items:b})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"5 items"}),a.jsx(l,{items:[{value:"1",label:"Label"},{value:"2",label:"Label"},{value:"3",label:"Label"},{value:"4",label:"Label"},{value:"5",label:"Label"}]})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"With disabled item"}),a.jsx(l,{items:[{value:"1",label:"Active"},{value:"2",label:"Normal"},{value:"3",label:"Disabled",disabled:!0}]})]})]}),tags:["!autodocs","dev"]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Segment items={DEFAULT_ITEMS} />
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Segment defaultValue="transactions" items={DEFAULT_ITEMS} />
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Segment items={[{
    value: 'tab1',
    label: 'Overview'
  }, {
    value: 'tab2',
    label: 'Transactions'
  }, {
    value: 'tab3',
    label: 'Analytics',
    disabled: true
  }, {
    value: 'tab4',
    label: 'Settings'
  }]} />
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Segment items={[{
    value: 'tab1',
    label: 'Label'
  }, {
    value: 'tab2',
    label: 'Label'
  }, {
    value: 'tab3',
    label: 'Label'
  }, {
    value: 'tab4',
    label: 'Label'
  }, {
    value: 'tab5',
    label: 'Label'
  }]} />
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Segment items={DEFAULT_ITEMS} animated={false} />
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Default (3 items)</h3>
        <Segment items={DEFAULT_ITEMS} />
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>5 items</h3>
        <Segment items={[{
        value: '1',
        label: 'Label'
      }, {
        value: '2',
        label: 'Label'
      }, {
        value: '3',
        label: 'Label'
      }, {
        value: '4',
        label: 'Label'
      }, {
        value: '5',
        label: 'Label'
      }]} />
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>With disabled item</h3>
        <Segment items={[{
        value: '1',
        label: 'Active'
      }, {
        value: '2',
        label: 'Normal'
      }, {
        value: '3',
        label: 'Disabled',
        disabled: true
      }]} />
      </div>
    </div>,
  tags: ['!autodocs', 'dev']
}`,...m.parameters?.docs?.source}}};const X=["Default","WithDefaultValue","WithDisabled","FiveItems","NoAnimation","AllVariants"];export{m as AllVariants,i as Default,u as FiveItems,d as NoAnimation,o as WithDefaultValue,c as WithDisabled,X as __namedExportsOrder,O as default};
