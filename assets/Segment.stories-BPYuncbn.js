import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-CP2yOfOm.js";import{c as Y,j as Z}from"./classnames-0AlMal0H.js";import{u as ee}from"./index-CyN509qF.js";import{u as ae}from"./index-CN0Pk037.js";import{u as te}from"./index-nCcupNJZ.js";const t=M=>{var S;const{className:O="",prefixCls:U="segment",value:z,defaultValue:X,items:v,animated:$=!0,onChange:p,...G}=M,n=Y(U),g=r.useRef(null),f=r.useRef(new Map),[h,H]=r.useState(null),[s,J]=ee(X??((S=v[0])==null?void 0:S.value)??"",z),x=r.useCallback(()=>{const e=g.current,l=f.current.get(s);if(!e||!l)return;const Q=e.getBoundingClientRect(),y=l.getBoundingClientRect();H({width:y.width,transform:`translateX(${y.left-Q.left+e.scrollLeft}px)`})},[s]);ae(()=>{x()},[s,v,x]);const K=te(e=>{e.disabled||(J(e.value),p==null||p(e.value))}),P=r.useCallback((e,l)=>{l?f.current.set(e,l):f.current.delete(e)},[]);return a.jsx("div",{...G,className:n(void 0,O),children:a.jsxs("div",{className:n("track"),ref:g,role:"radiogroup",children:[h&&a.jsx("span",{className:n("indicator"),style:{...h,...!$&&{transition:"none"}}}),v.map(e=>a.jsx("button",{ref:l=>P(e.value,l),role:"radio",type:"button","aria-checked":e.value===s,"aria-disabled":e.disabled,tabIndex:e.value===s?0:-1,className:n("item",Z(e.value===s&&n("item-active"),e.disabled&&n("item-disabled"))),onClick:()=>K(e),children:a.jsx("span",{className:n("item-label"),children:e.label})},e.value))]})})};r.memo(t);t.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{prefixCls:{required:!1,tsType:{name:"string"},description:"CSS class prefix for customization"},value:{required:!1,tsType:{name:"string"},description:"Current selected value (controlled mode)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default selected value (uncontrolled mode)"},items:{required:!0,tsType:{name:"Array",elements:[{name:"SegmentItem"}],raw:"SegmentItem[]"},description:"Segment options"},animated:{required:!1,tsType:{name:"boolean"},description:"Whether to animate the indicator transition (default: true)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when selection changes"}},composes:["Omit"]};const ce={title:"Components/Segment",component:t,parameters:{docs:{source:{type:"code"}}},tags:["autodocs"]},b=[{value:"overview",label:"Overview"},{value:"transactions",label:"Transactions"},{value:"analytics",label:"Analytics"}],i={render:()=>a.jsx(t,{items:b})},o={render:()=>a.jsx(t,{defaultValue:"transactions",items:b})},c={render:()=>a.jsx(t,{items:[{value:"tab1",label:"Overview"},{value:"tab2",label:"Transactions"},{value:"tab3",label:"Analytics",disabled:!0},{value:"tab4",label:"Settings"}]})},u={render:()=>a.jsx(t,{items:[{value:"tab1",label:"Label"},{value:"tab2",label:"Label"},{value:"tab3",label:"Label"},{value:"tab4",label:"Label"},{value:"tab5",label:"Label"}]})},d={render:()=>a.jsx(t,{items:b,animated:!1})},m={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"Default (3 items)"}),a.jsx(t,{items:b})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"5 items"}),a.jsx(t,{items:[{value:"1",label:"Label"},{value:"2",label:"Label"},{value:"3",label:"Label"},{value:"4",label:"Label"},{value:"5",label:"Label"}]})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{marginBottom:12},children:"With disabled item"}),a.jsx(t,{items:[{value:"1",label:"Active"},{value:"2",label:"Normal"},{value:"3",label:"Disabled",disabled:!0}]})]})]}),tags:["!autodocs","dev"]};var L,j,T;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Segment items={DEFAULT_ITEMS} />
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var D,C,I;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Segment defaultValue="transactions" items={DEFAULT_ITEMS} />
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var A,E,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var w,R,V;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(R=u.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var _,k,B;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Segment items={DEFAULT_ITEMS} animated={false} />
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var F,W,q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(W=m.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const ue=["Default","WithDefaultValue","WithDisabled","FiveItems","NoAnimation","AllVariants"];export{m as AllVariants,i as Default,u as FiveItems,d as NoAnimation,o as WithDefaultValue,c as WithDisabled,ue as __namedExportsOrder,ce as default};
