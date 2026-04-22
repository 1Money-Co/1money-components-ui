import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-CP2yOfOm.js";import{I as Y}from"./Icons-BarT8jPS.js";import{T as _}from"./Tag-Cgi-LwCu.js";import{e as h,T as L}from"./Typography-DKjEOsRd.js";import{c as M,j as b}from"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./iframe-DfszpEJN.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const N="step",w=22,k=251,i={default:"default",completed:"completed",error:"error"},R={size:"xs",color:"default"},D={size:"md",color:"default-tertiary"},f={[i.default]:"neutral",[i.completed]:"success",[i.error]:"negative"},U={[i.completed]:{name:"statusSuccess",color:"var(--om-step-status-success-bg)",innerColor:"var(--om-step-status-success-fg)"},[i.error]:{name:"statusFail",color:"var(--om-step-status-error-bg)",innerColor:"var(--om-step-status-error-fg)"}},t={title:"Text Heading",description:"Body text",tag:"Tag"},a={verifyBusiness:"verify-business",verifyOwners:"verify-owners",reviewSubmission:"review-submission",start:"start",complete:"complete",error:"error"},O=e=>typeof e=="string"||typeof e=="number",H=e=>!!e&&typeof e=="object"&&!u.isValidElement(e)&&"label"in e,g=(e,o)=>O(e)?o(e):e,z=(e,o)=>e==null?null:u.isValidElement(e)?e:O(e)?r.jsx(_,{label:String(e),color:f[o]}):H(e)?r.jsx(_,{label:e.label,color:e.color??f[o],size:e.size,icon:e.icon}):null,B=(e,o,l,d)=>{if(d!=null)return d;const s=U[o];return s?r.jsx(Y,{name:s.name,size:w,color:s.color,innerColor:s.innerColor,className:b(e("indicator-icon"),e(`indicator-icon-${o}`))}):r.jsx("span",{className:e("indicator-number"),children:l+1})},K=e=>r.jsx(h,{...R,children:e}),F=e=>r.jsx(L,{...D,children:e}),c=({className:e,prefixCls:o=N,items:l,...d})=>{const s=M(o);return r.jsx("div",{...d,className:s(void 0,e),children:l.map((n,T)=>{const S=n.status??i.default,E=T===l.length-1,P=z(n.tag,S);return r.jsxs("div",{className:s("item",s(`item-${S}`)),children:[r.jsxs("div",{className:s("indicator-column"),"aria-hidden":"true",children:[r.jsx("div",{className:s("indicator"),children:B(s,S,T,n.indicator)}),!E&&r.jsx("span",{className:s("connector")})]}),r.jsxs("div",{className:s("content",E?void 0:s("content-continuation")),children:[r.jsxs("div",{className:s("copy"),children:[g(n.title,K),n.description!=null&&g(n.description,F)]}),P&&r.jsx("div",{className:s("tag"),children:P})]})]},n.key)})})};u.memo(c);c.__docgenInfo={description:"",methods:[],displayName:"Step",props:{prefixCls:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'step'",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""}},composes:["HTMLAttributes"]};const I={width:k},ie={title:"Components/Step",component:c,args:{items:[{key:a.verifyBusiness,title:t.title,description:t.description,status:i.completed,tag:t.tag},{key:a.verifyOwners,title:t.title,description:t.description,status:i.completed,tag:t.tag},{key:a.reviewSubmission,title:t.title,description:t.description,status:i.default,tag:t.tag}]},tags:["autodocs"]},p={render:e=>r.jsx("div",{style:I,children:r.jsx(c,{...e})})},m={render:e=>r.jsx("div",{style:I,children:r.jsx(c,{...e,items:[{key:a.start,title:t.title,description:t.description,status:i.error,tag:t.tag},{key:a.complete,title:t.title,description:t.description,status:i.error,tag:t.tag},{key:a.error,title:t.title,description:t.description,status:i.default,tag:t.tag}]})})};var y,v,x;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={wrapperStyle}>
      <Step {...args} />
    </div>
}`,...(x=(v=p.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var A,j,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <div style={wrapperStyle}>
      <Step {...args} items={[{
      key: STEP_ITEM_KEYS.start,
      title: STEP_SAMPLE_COPY.title,
      description: STEP_SAMPLE_COPY.description,
      status: STEP_STATUS.error,
      tag: STEP_SAMPLE_COPY.tag
    }, {
      key: STEP_ITEM_KEYS.complete,
      title: STEP_SAMPLE_COPY.title,
      description: STEP_SAMPLE_COPY.description,
      status: STEP_STATUS.error,
      tag: STEP_SAMPLE_COPY.tag
    }, {
      key: STEP_ITEM_KEYS.error,
      title: STEP_SAMPLE_COPY.title,
      description: STEP_SAMPLE_COPY.description,
      status: STEP_STATUS.default,
      tag: STEP_SAMPLE_COPY.tag
    }]} />
    </div>
}`,...(C=(j=m.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const oe=["Default","Error"];export{p as Default,m as Error,oe as __namedExportsOrder,ie as default};
