import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-CP2yOfOm.js";import{f as Z}from"./index-DCiaR2iG.js";import{c as G,j as y}from"./classnames-h1fAIaEr.js";import{I as i}from"./Icons-D1aARqJQ.js";import{b as R}from"./Typography-CJ7CZhJ5.js";import{T as U}from"./Trigger-DR6_NdmK.js";import{a as V}from"./NavigationStepper-Bw3VYPjW.js";/* empty css                          */import{u as F}from"./index-CyN509qF.js";import{a as J,u as q}from"./index-nCcupNJZ.js";import{u as K}from"./index-_M0HKnWf.js";import"./Nav-BxNa659F.js";import"./ResizeObserver-DW8-DKQf.js";import"./clipboard-C7s2bcmm.js";import"./iframe-b0G2kwiv.js";import"./Tooltip-DeIhm5fH.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";/* empty css                */import"./index-CN0Pk037.js";const Q=16,X=16,$=16,ee=u=>typeof u=="string",w=g.forwardRef((u,o)=>{const{className:C="",prefixCls:l="navigation",items:t,collapsed:b,defaultCollapsed:v=!1,collapsible:S=!1,onCollapse:f,onLogoClick:N,header:r,selector:I,children:j,...s}=u,c=G(l),[h,E]=F(v,b),x=J(h),d=q(p=>{E(p),f==null||f(p)});g.useImperativeHandle(o,()=>({toggle:()=>d(!x.current),collapse:d}),[d]);const A=q(()=>{d(!h)});return e.jsxs("nav",{className:c(void 0,y(h&&c("collapsed"),C)),...s,children:[e.jsx("div",{className:c("header"),children:r!==void 0?r:e.jsx(V,{collapsed:h,onClick:N})}),I&&e.jsx("div",{className:c("selector"),children:I}),e.jsxs("div",{className:c("nav"),children:[e.jsx("div",{className:c("menu"),children:t.filter(p=>!p.hidden).map((p,k)=>e.jsx(se,{item:p,prefixCls:l,collapsed:h},p.key??k))}),S&&e.jsx("button",{className:c("collapse-toggle"),onClick:A,type:"button",children:e.jsx(i,{name:h?"extend":"collapse",size:$})})]}),j&&e.jsx("div",{className:c("settings"),children:j})]})});w.displayName="Navigation";const se=({item:u,prefixCls:o,collapsed:C})=>{const{label:l,icon:t,suffix:b,link:v,active:S,disabled:f,onClick:N,children:r,defaultOpen:I,onOpenChange:j}=u,s=G(o),[c,h]=g.useState(I??!1),E=K(n=>{if(!f){if(r!=null&&r.length){const m=!c;h(m),j==null||j(m)}N==null||N(n)}}),x=r&&r.length>0,d=r==null?void 0:r.filter(n=>!n.hidden),A=x&&r.some(n=>n.active),p=n=>n?ee(n)?e.jsx(i,{name:n,size:Q}):n:null,k=(n,m)=>m?typeof m=="string"?e.jsx("a",{href:m,className:s("item-link"),children:n}):g.isValidElement(m)?g.cloneElement(m,{children:n}):n:n;if(C){const n=e.jsxs("button",{className:s("collapsed-item",y((S||A)&&s("collapsed-item-active"),f&&s("collapsed-item-disabled"))),onClick:x?void 0:E,disabled:f,type:"button",children:[t&&e.jsx("span",{className:s("collapsed-item-icon"),children:p(t)}),e.jsx(R.Label,{size:"xs",as:"span",className:s("collapsed-item-label"),children:l})]});return x&&(d!=null&&d.length)?e.jsx(U,{trigger:"click",placement:"right-start",offset:10,overlayClassName:s("collapsed-submenu-panel"),content:({close:m})=>e.jsx("div",{className:s("collapsed-submenu"),children:d.map((a,z)=>{const T=e.jsxs("button",{className:s("collapsed-submenu-item",y(a.active&&s("collapsed-submenu-item-active"),a.disabled&&s("collapsed-submenu-item-disabled"))),onClick:Y=>{var M;a.disabled||((M=a.onClick)==null||M.call(a,Y),m())},disabled:a.disabled,type:"button",children:[a.icon&&e.jsx("span",{className:s("item-icon"),children:p(a.icon)}),e.jsx(R.Title,{size:"sm",as:"div",className:s("item-label"),children:a.label}),a.suffix&&e.jsx("span",{className:s("item-suffix"),children:a.suffix})]},a.key??z);return e.jsxs("div",{children:[z>0&&e.jsx("div",{className:s("collapsed-submenu-divider")}),a.link?k(T,a.link):T]},a.key??z)})}),children:n}):v?k(n,v):n}return e.jsxs("div",{className:s("item-wrapper"),children:[(()=>{const n=e.jsxs("button",{className:s("item",y(x&&s("item-expandable"),S&&s("item-active"),f&&s("item-disabled"))),onClick:E,disabled:f,type:"button",children:[e.jsxs("div",{className:s("item-content"),children:[t&&e.jsx("span",{className:s("item-icon"),children:p(t)}),e.jsx(R.Title,{size:"sm",as:"div",className:s("item-label"),children:l}),b&&e.jsx("span",{className:s("item-suffix"),children:b})]}),x&&e.jsx("span",{className:s("item-arrow",y(c&&s("item-arrow-open"))),children:e.jsx(i,{name:"chevronDown",size:X})})]});return v&&!x?k(n,v):n})(),x&&e.jsx("div",{className:s("submenu",y(c&&s("submenu-open"))),children:e.jsx("div",{className:s("submenu-inner"),children:d==null?void 0:d.map((n,m)=>{const a=e.jsx("button",{className:s("submenu-item",y(n.active&&s("submenu-item-active"),n.disabled&&s("submenu-item-disabled"))),onClick:z=>{var T;n.disabled||(T=n.onClick)==null||T.call(n,z)},disabled:n.disabled,type:"button",children:e.jsxs("div",{className:s("item-content"),children:[n.icon&&e.jsx("span",{className:s("item-icon"),children:p(n.icon)}),e.jsx(R.Title,{size:"sm",as:"div",className:s("item-label"),children:n.label}),n.suffix&&e.jsx("span",{className:s("item-suffix"),children:n.suffix})]})},n.key??m);return n.link?k(a,n.link):a})})})]})};g.memo(w);w.__docgenInfo={description:"",methods:[{name:"toggle",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Navigation",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"RefObject<HTMLElement | null>"},description:"Ref to the root element"},prefixCls:{required:!1,tsType:{name:"string"},description:"CSS class prefix"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},items:{required:!0,tsType:{name:"Array",elements:[{name:"NavigationItem"}],raw:"NavigationItem[]"},description:"Navigation menu items"},collapsed:{required:!1,tsType:{name:"boolean"},description:"Whether the navigation is collapsed"},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"Default collapsed state (uncontrolled)"},collapsible:{required:!1,tsType:{name:"boolean"},description:"Whether collapse toggle is shown"},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"Callback when collapsed state changes"},header:{required:!1,tsType:{name:"ReactNode"},description:"Header content — defaults to built-in 1Money logo; pass null to hide"},onLogoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:"Click handler for the default logo"},selector:{required:!1,tsType:{name:"ReactNode"},description:"Company selector slot (below header)"},children:{required:!1,tsType:{name:"ReactNode"},description:"Children rendered at bottom (e.g., settings, profile)"}}};const Ne={title:"Components/Navigation",component:w,argTypes:{collapsed:{control:"boolean"},collapsible:{control:"boolean"}},args:{collapsible:!0,onCollapse:Z()},tags:["autodocs"],decorators:[u=>e.jsx("div",{style:{height:800,display:"flex"},children:e.jsx(u,{})})]},ne=()=>{const u=g.useRef(null),[o,C]=g.useState(!1),[l,t]=g.useState("/app/auto-conversion-rules"),b=[{key:"dashboard",label:"Dashboard",icon:e.jsx(i,{name:"dashboard",size:16,color:"inherit"}),active:l==="/app/dashboard",onClick:()=>t("/app/dashboard")},{key:"transaction-history",label:"Transaction History",icon:e.jsx(i,{name:"transferHistory",size:16,color:"inherit"}),active:l==="/app/transaction-history",onClick:()=>t("/app/transaction-history")},{key:"auto-conversion-rules",label:"Auto-Conversion Rules",icon:e.jsx(i,{name:"autoConversionRules",size:16,color:"inherit"}),active:l==="/app/auto-conversion-rules",onClick:()=>t("/app/auto-conversion-rules")},{key:"external-accounts",label:e.jsx("span",{style:{display:"inline-block",width:57},children:"My External Accounts"}),icon:e.jsx(i,{name:"addressBook",size:16,color:"inherit"}),defaultOpen:!o,children:[{key:"bank-accounts",label:"Bank Accounts",icon:e.jsx(i,{name:"wire",size:16,color:"inherit"}),active:l==="/app/address/bank-accounts",suffix:o?e.jsx(i,{name:"arrowRight",size:16,color:"inherit"}):null,onClick:()=>t("/app/address/bank-accounts")},{key:"digital-wallets",label:"Digital Wallets",icon:e.jsx(i,{name:"wallet",size:16,color:"inherit"}),active:l==="/app/address/digital-wallets",suffix:o?e.jsx(i,{name:"arrowRight",size:16,color:"inherit"}):null,onClick:()=>t("/app/address/digital-wallets")}]},{key:"global-payouts",label:"Global Payouts",icon:e.jsx(i,{name:"money",size:16,color:"inherit"}),defaultOpen:!o,children:[{key:"recipients",label:"Recipients",icon:e.jsx(i,{name:"parties",size:16,color:"inherit"}),active:l==="/app/recipients",suffix:o?e.jsx(i,{name:"arrowRight",size:16,color:"inherit"}):null,onClick:()=>t("/app/recipients")},{key:"payouts",label:"Payouts",icon:e.jsx(i,{name:"sendCrypto",size:16,color:"inherit"}),active:l==="/app/payouts",suffix:o?e.jsx(i,{name:"arrowRight",size:16,color:"inherit"}):null,onClick:()=>t("/app/payouts")}]},{key:"customer",label:"My Customer",icon:e.jsx(i,{name:"parties",size:16,color:"inherit"}),defaultOpen:!o}];return e.jsx(w,{ref:u,items:b,collapsible:!0,onCollapse:C,selector:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flex:1},children:[e.jsx(i,{name:"flagUnitedStates",size:20}),e.jsx("span",{style:{fontWeight:500,fontSize:14},children:"1Money USA Inc."})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",cursor:"pointer",fontWeight:500,lineHeight:"108%",color:"inherit",...o?{flexDirection:"column",fontSize:10,gap:4,padding:8,textAlign:"center"}:{flexDirection:"row",fontSize:14,gap:12,padding:"8px 16px"}},children:[e.jsx(i,{name:"settings",size:16,color:"inherit"}),"Settings"]}),e.jsx("div",{style:{width:"100%",height:1,backgroundColor:"#e3e4e4"}}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",cursor:"pointer",fontWeight:500,lineHeight:"108%",color:"inherit",...o?{flexDirection:"column",fontSize:10,gap:4,padding:8,textAlign:"center"}:{flexDirection:"row",fontSize:14,gap:12,padding:"8px 16px"}},children:[e.jsx(i,{name:"profile",size:16,color:"inherit"}),"Yvonne Ni"]})]})})},D={render:()=>e.jsx(ne,{})},H={args:{collapsed:!0,collapsible:!0,items:[{key:"dashboard",label:"Dashboard",icon:e.jsx(i,{name:"dashboard",size:16,color:"inherit"}),active:!0},{key:"transaction-history",label:"Transaction History",icon:e.jsx(i,{name:"transferHistory",size:16,color:"inherit"})},{key:"auto-conversion-rules",label:"Auto-Conversion Rules",icon:e.jsx(i,{name:"autoConversionRules",size:16,color:"inherit"})},{key:"external-accounts",label:"My External Accounts",icon:e.jsx(i,{name:"addressBook",size:16,color:"inherit"})},{key:"global-payouts",label:"Global Payouts",icon:e.jsx(i,{name:"money",size:16,color:"inherit"})},{key:"customer",label:"Customer",icon:e.jsx(i,{name:"parties",size:16,color:"inherit"})}],children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center",cursor:"pointer",fontWeight:500,lineHeight:"108%",fontSize:10,gap:4,padding:8,textAlign:"center"},children:[e.jsx(i,{name:"settings",size:16,color:"inherit"}),"Settings"]}),e.jsx("div",{style:{width:"100%",height:1,backgroundColor:"#e3e4e4"}}),e.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center",cursor:"pointer",fontWeight:500,lineHeight:"108%",fontSize:10,gap:4,padding:8,textAlign:"center"},children:[e.jsx(i,{name:"profile",size:16,color:"inherit"}),"Yvonne Ni"]})]})}};var O,W,L;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <DashboardTemplate />
}`,...(L=(W=D.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var _,P,B;H.parameters={...H.parameters,docs:{...(_=H.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    collapsed: true,
    collapsible: true,
    items: [{
      key: 'dashboard',
      label: 'Dashboard',
      icon: <Icons name="dashboard" size={16} color="inherit" />,
      active: true
    }, {
      key: 'transaction-history',
      label: 'Transaction History',
      icon: <Icons name="transferHistory" size={16} color="inherit" />
    }, {
      key: 'auto-conversion-rules',
      label: 'Auto-Conversion Rules',
      icon: <Icons name="autoConversionRules" size={16} color="inherit" />
    }, {
      key: 'external-accounts',
      label: 'My External Accounts',
      icon: <Icons name="addressBook" size={16} color="inherit" />
    }, {
      key: 'global-payouts',
      label: 'Global Payouts',
      icon: <Icons name="money" size={16} color="inherit" />
    }, {
      key: 'customer',
      label: 'Customer',
      icon: <Icons name="parties" size={16} color="inherit" />
    }],
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <div style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        fontWeight: 500,
        lineHeight: '108%',
        fontSize: 10,
        gap: 4,
        padding: 8,
        textAlign: 'center'
      }}>
          <Icons name="settings" size={16} color="inherit" />
          Settings
        </div>
        <div style={{
        width: '100%',
        height: 1,
        backgroundColor: '#e3e4e4'
      }} />
        <div style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        fontWeight: 500,
        lineHeight: '108%',
        fontSize: 10,
        gap: 4,
        padding: 8,
        textAlign: 'center'
      }}>
          <Icons name="profile" size={16} color="inherit" />
          Yvonne Ni
        </div>
      </div>
  }
}`,...(B=(P=H.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const ze=["Default","Collapsed"];export{H as Collapsed,D as Default,ze as __namedExportsOrder,Ne as default};
