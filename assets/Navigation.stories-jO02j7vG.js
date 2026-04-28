import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-CP2yOfOm.js";import{f as V}from"./index-DCiaR2iG.js";import{c as Z,j as b}from"./classnames-h1fAIaEr.js";import{I as i}from"./Icons-BzLXzN_n.js";import{g as H}from"./Typography-BK-BjBuS.js";import{T as F}from"./Trigger-DR6_NdmK.js";import"./Nav-v5W_o0Zm.js";import{u as K}from"./index-CyN509qF.js";import{a as J,u as L}from"./index-nCcupNJZ.js";import{u as Q}from"./index-_M0HKnWf.js";import"./ResizeObserver-DW8-DKQf.js";import"./clipboard-C7s2bcmm.js";import"./iframe-k9SZMUwJ.js";import"./Tooltip-DeIhm5fH.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";/* empty css                */import"./index-CN0Pk037.js";const X=24,$=132,ee=24,A="#073387",se="#131313",Y=({collapsed:u,onClick:o})=>{const h=u?e.jsx(i,{name:"logo",size:X,color:A}):e.jsx(i,{name:"logoWithWords",width:$,height:ee,logoColor:A,wordColor:se});return o?e.jsx("span",{role:"button",tabIndex:0,onClick:o,onKeyDown:a=>{a.key==="Enter"&&o(a)},children:h}):h};Y.__docgenInfo={description:"",methods:[],displayName:"NavigationLogo",props:{collapsed:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:""}}};const ne=16,ie=16,te=16,oe=u=>typeof u=="string",w=g.forwardRef((u,o)=>{const{className:h="",prefixCls:a="navigation",items:l,collapsed:v,defaultCollapsed:j=!1,collapsible:E=!1,onCollapse:f,onLogoClick:N,header:r,selector:I,children:C,...s}=u,c=Z(a),[y,S]=K(j,v),x=J(y),d=L(p=>{S(p),f==null||f(p)});g.useImperativeHandle(o,()=>({toggle:()=>d(!x.current),collapse:d}),[d]);const O=L(()=>{d(!y)});return e.jsxs("nav",{className:c(void 0,b(y&&c("collapsed"),h)),...s,children:[e.jsx("div",{className:c("header"),children:r!==void 0?r:e.jsx(Y,{collapsed:y,onClick:N})}),I&&e.jsx("div",{className:c("selector"),children:I}),e.jsxs("div",{className:c("nav"),children:[e.jsx("div",{className:c("menu"),children:l.filter(p=>!p.hidden).map((p,k)=>e.jsx(ae,{item:p,prefixCls:a,collapsed:y},p.key??k))}),E&&e.jsx("button",{className:c("collapse-toggle"),onClick:O,type:"button",children:e.jsx(i,{name:y?"extend":"collapse",size:te})})]}),C&&e.jsx("div",{className:c("settings"),children:C})]})});w.displayName="Navigation";const ae=({item:u,prefixCls:o,collapsed:h})=>{const{label:a,icon:l,suffix:v,link:j,active:E,disabled:f,onClick:N,children:r,defaultOpen:I,onOpenChange:C}=u,s=Z(o),[c,y]=g.useState(I??!1),S=Q(n=>{if(!f){if(r!=null&&r.length){const m=!c;y(m),C==null||C(m)}N==null||N(n)}}),x=r&&r.length>0,d=r==null?void 0:r.filter(n=>!n.hidden),O=x&&r.some(n=>n.active),p=n=>n?oe(n)?e.jsx(i,{name:n,size:ne}):n:null,k=(n,m)=>m?typeof m=="string"?e.jsx("a",{href:m,className:s("item-link"),children:n}):g.isValidElement(m)?g.cloneElement(m,{children:n}):n:n;if(h){const n=e.jsxs("button",{className:s("collapsed-item",b((E||O)&&s("collapsed-item-active"),f&&s("collapsed-item-disabled"))),onClick:x?void 0:S,disabled:f,type:"button",children:[l&&e.jsx("span",{className:s("collapsed-item-icon"),children:p(l)}),e.jsx(H.Label,{size:"xs",as:"span",className:s("collapsed-item-label"),children:a})]});return x&&(d!=null&&d.length)?e.jsx(F,{trigger:"click",placement:"right-start",offset:10,overlayClassName:s("collapsed-submenu-panel"),content:({close:m})=>e.jsx("div",{className:s("collapsed-submenu"),children:d.map((t,z)=>{const T=e.jsxs("button",{className:s("collapsed-submenu-item",b(t.active&&s("collapsed-submenu-item-active"),t.disabled&&s("collapsed-submenu-item-disabled"))),onClick:U=>{var M;t.disabled||((M=t.onClick)==null||M.call(t,U),m())},disabled:t.disabled,type:"button",children:[t.icon&&e.jsx("span",{className:s("item-icon"),children:p(t.icon)}),e.jsx(H.Title,{size:"sm",as:"div",className:s("item-label"),children:t.label}),t.suffix&&e.jsx("span",{className:s("item-suffix"),children:t.suffix})]},t.key??z);return e.jsxs("div",{children:[z>0&&e.jsx("div",{className:s("collapsed-submenu-divider")}),t.link?k(T,t.link):T]},t.key??z)})}),children:n}):j?k(n,j):n}return e.jsxs("div",{className:s("item-wrapper"),children:[(()=>{const n=e.jsxs("button",{className:s("item",b(x&&s("item-expandable"),E&&s("item-active"),f&&s("item-disabled"))),onClick:S,disabled:f,type:"button",children:[e.jsxs("div",{className:s("item-content"),children:[l&&e.jsx("span",{className:s("item-icon"),children:p(l)}),e.jsx(H.Title,{size:"sm",as:"div",className:s("item-label"),children:a}),v&&e.jsx("span",{className:s("item-suffix"),children:v})]}),x&&e.jsx("span",{className:s("item-arrow",b(c&&s("item-arrow-open"))),children:e.jsx(i,{name:"chevronDown",size:ie})})]});return j&&!x?k(n,j):n})(),x&&e.jsx("div",{className:s("submenu",b(c&&s("submenu-open"))),children:e.jsx("div",{className:s("submenu-inner"),children:d==null?void 0:d.map((n,m)=>{const t=e.jsx("button",{className:s("submenu-item",b(n.active&&s("submenu-item-active"),n.disabled&&s("submenu-item-disabled"))),onClick:z=>{var T;n.disabled||(T=n.onClick)==null||T.call(n,z)},disabled:n.disabled,type:"button",children:e.jsxs("div",{className:s("item-content"),children:[n.icon&&e.jsx("span",{className:s("item-icon"),children:p(n.icon)}),e.jsx(H.Title,{size:"sm",as:"div",className:s("item-label"),children:n.label}),n.suffix&&e.jsx("span",{className:s("item-suffix"),children:n.suffix})]})},n.key??m);return n.link?k(t,n.link):t})})})]})};g.memo(w);w.__docgenInfo={description:"",methods:[{name:"toggle",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Navigation",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"RefObject<HTMLElement | null>"},description:"Ref to the root element"},prefixCls:{required:!1,tsType:{name:"string"},description:"CSS class prefix"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes"},items:{required:!0,tsType:{name:"Array",elements:[{name:"NavigationItem"}],raw:"NavigationItem[]"},description:"Navigation menu items"},collapsed:{required:!1,tsType:{name:"boolean"},description:"Whether the navigation is collapsed"},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"Default collapsed state (uncontrolled)"},collapsible:{required:!1,tsType:{name:"boolean"},description:"Whether collapse toggle is shown"},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"Callback when collapsed state changes"},header:{required:!1,tsType:{name:"ReactNode"},description:"Header content — defaults to built-in 1Money logo; pass null to hide"},onLogoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:"Click handler for the default logo"},selector:{required:!1,tsType:{name:"ReactNode"},description:"Company selector slot (below header)"},children:{required:!1,tsType:{name:"ReactNode"},description:"Children rendered at bottom (e.g., settings, profile)"}}};const we={title:"Components/Navigation",component:w,argTypes:{collapsed:{control:"boolean"},collapsible:{control:"boolean"}},args:{collapsible:!0,onCollapse:V()},tags:["autodocs"],decorators:[u=>e.jsx("div",{style:{height:800,display:"flex"},children:e.jsx(u,{})})]},le=()=>{const u=g.useRef(null),[o,h]=g.useState(!1),[a,l]=g.useState("/app/auto-conversion-rules"),v=[{key:"dashboard",label:"Dashboard",icon:e.jsx(i,{name:"dashboard",size:16,color:"inherit"}),active:a==="/app/dashboard",onClick:()=>l("/app/dashboard")},{key:"transaction-history",label:"Transaction History",icon:e.jsx(i,{name:"transferHistory",size:16,color:"inherit"}),active:a==="/app/transaction-history",onClick:()=>l("/app/transaction-history")},{key:"auto-conversion-rules",label:"Auto-Conversion Rules",icon:e.jsx(i,{name:"autoConversionRules",size:16,color:"inherit"}),active:a==="/app/auto-conversion-rules",onClick:()=>l("/app/auto-conversion-rules")},{key:"external-accounts",label:e.jsx("span",{style:{display:"inline-block",width:57},children:"My External Accounts"}),icon:e.jsx(i,{name:"addressBook",size:16,color:"inherit"}),defaultOpen:!o,children:[{key:"bank-accounts",label:"Bank Accounts",icon:e.jsx(i,{name:"wire",size:16,color:"inherit"}),active:a==="/app/address/bank-accounts",suffix:o?e.jsx(i,{name:"arrowRight",size:16,color:"inherit"}):null,onClick:()=>l("/app/address/bank-accounts")},{key:"digital-wallets",label:"Digital Wallets",icon:e.jsx(i,{name:"wallet",size:16,color:"inherit"}),active:a==="/app/address/digital-wallets",suffix:o?e.jsx(i,{name:"arrowRight",size:16,color:"inherit"}):null,onClick:()=>l("/app/address/digital-wallets")}]},{key:"global-payouts",label:"Global Payouts",icon:e.jsx(i,{name:"money",size:16,color:"inherit"}),defaultOpen:!o,children:[{key:"recipients",label:"Recipients",icon:e.jsx(i,{name:"parties",size:16,color:"inherit"}),active:a==="/app/recipients",suffix:o?e.jsx(i,{name:"arrowRight",size:16,color:"inherit"}):null,onClick:()=>l("/app/recipients")},{key:"payouts",label:"Payouts",icon:e.jsx(i,{name:"sendCrypto",size:16,color:"inherit"}),active:a==="/app/payouts",suffix:o?e.jsx(i,{name:"arrowRight",size:16,color:"inherit"}):null,onClick:()=>l("/app/payouts")}]},{key:"customer",label:"My Customer",icon:e.jsx(i,{name:"parties",size:16,color:"inherit"}),defaultOpen:!o}];return e.jsx(w,{ref:u,items:v,collapsible:!0,onCollapse:h,selector:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flex:1},children:[e.jsx(i,{name:"flagUnitedStates",size:20}),e.jsx("span",{style:{fontWeight:500,fontSize:14},children:"1Money USA Inc."})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",cursor:"pointer",fontWeight:500,lineHeight:"108%",color:"inherit",...o?{flexDirection:"column",fontSize:10,gap:4,padding:8,textAlign:"center"}:{flexDirection:"row",fontSize:14,gap:12,padding:"8px 16px"}},children:[e.jsx(i,{name:"settings",size:16,color:"inherit"}),"Settings"]}),e.jsx("div",{style:{width:"100%",height:1,backgroundColor:"#e3e4e4"}}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",cursor:"pointer",fontWeight:500,lineHeight:"108%",color:"inherit",...o?{flexDirection:"column",fontSize:10,gap:4,padding:8,textAlign:"center"}:{flexDirection:"row",fontSize:14,gap:12,padding:"8px 16px"}},children:[e.jsx(i,{name:"profile",size:16,color:"inherit"}),"Yvonne Ni"]})]})})},R={render:()=>e.jsx(le,{})},D={args:{collapsed:!0,collapsible:!0,items:[{key:"dashboard",label:"Dashboard",icon:e.jsx(i,{name:"dashboard",size:16,color:"inherit"}),active:!0},{key:"transaction-history",label:"Transaction History",icon:e.jsx(i,{name:"transferHistory",size:16,color:"inherit"})},{key:"auto-conversion-rules",label:"Auto-Conversion Rules",icon:e.jsx(i,{name:"autoConversionRules",size:16,color:"inherit"})},{key:"external-accounts",label:"My External Accounts",icon:e.jsx(i,{name:"addressBook",size:16,color:"inherit"})},{key:"global-payouts",label:"Global Payouts",icon:e.jsx(i,{name:"money",size:16,color:"inherit"})},{key:"customer",label:"Customer",icon:e.jsx(i,{name:"parties",size:16,color:"inherit"})}],children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center",cursor:"pointer",fontWeight:500,lineHeight:"108%",fontSize:10,gap:4,padding:8,textAlign:"center"},children:[e.jsx(i,{name:"settings",size:16,color:"inherit"}),"Settings"]}),e.jsx("div",{style:{width:"100%",height:1,backgroundColor:"#e3e4e4"}}),e.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center",cursor:"pointer",fontWeight:500,lineHeight:"108%",fontSize:10,gap:4,padding:8,textAlign:"center"},children:[e.jsx(i,{name:"profile",size:16,color:"inherit"}),"Yvonne Ni"]})]})}};var _,W,q;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <DashboardTemplate />
}`,...(q=(W=R.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var G,P,B;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(B=(P=D.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const Ee=["Default","Collapsed"];export{D as Collapsed,R as Default,Ee as __namedExportsOrder,we as default};
