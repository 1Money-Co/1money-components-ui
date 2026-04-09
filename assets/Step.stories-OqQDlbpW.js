import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as P}from"./index-CP2yOfOm.js";import{I}from"./Icons-C17k0gNH.js";import{T as C}from"./Tag-C5k1NAle.js";import{e as R,T as U}from"./Typography-COcdYQQO.js";import{c as L,j as N}from"./classnames-0AlMal0H.js";import"./ResizeObserver-DbXOvenx.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./iframe-C8OcTo_O.js";import"./Tooltip-CsTd8WLo.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const D="step",z=22,F=251,i={default:"default",completed:"completed",error:"error"},K={size:"xs",color:"default"},H={size:"md",color:"default-tertiary"},O={[i.default]:"neutral",[i.completed]:"success",[i.error]:"negative"},B={[i.completed]:{name:"statusSuccess",color:"var(--om-step-status-success-bg)",innerColor:"var(--om-step-status-success-fg)"},[i.error]:{name:"statusFail",color:"var(--om-step-status-error-bg)",innerColor:"var(--om-step-status-error-fg)"}},r={title:"Text Heading",description:"Body text",tag:"Tag"},a={verifyBusiness:"verify-business",verifyOwners:"verify-owners",reviewSubmission:"review-submission",start:"start",complete:"complete",error:"error",details:"details",verification:"verification",finalize:"finalize"},o={settlementReview:"Settlement review",uploadOwnershipDocuments:"Upload ownership documents",approved:"Approved",beneficialOwnerCheck:"Beneficial owner check",waitingForPasskeyConfirmation:"Waiting for passkey confirmation",pending:"Pending",finalConfirmation:"Final confirmation",signerRejectedAgreement:"A signer rejected the agreement",rejected:"Rejected"},G="recommended",b=e=>typeof e=="string"||typeof e=="number",V=e=>!!e&&typeof e=="object"&&!P.isValidElement(e)&&"label"in e,y=(e,n)=>b(e)?n(e):e,W=(e,n)=>e==null?null:P.isValidElement(e)?e:b(e)?t.jsx(C,{label:String(e),color:O[n]}):V(e)?t.jsx(C,{label:e.label,color:e.color??O[n],size:e.size,icon:e.icon}):null,q=(e,n,d,p)=>{if(p!=null)return p;const s=B[n];return s?t.jsx(I,{name:s.name,size:z,color:s.color,innerColor:s.innerColor,className:N(e("indicator-icon"),e(`indicator-icon-${n}`))}):t.jsx("span",{className:e("indicator-number"),children:d+1})},$=e=>t.jsx(R,{...K,children:e}),X=e=>t.jsx(U,{...H,children:e}),l=({className:e,prefixCls:n=D,items:d,...p})=>{const s=L(n);return t.jsx("div",{...p,className:s(void 0,e),children:d.map((c,E)=>{const u=c.status??i.default,f=E===d.length-1,g=W(c.tag,u);return t.jsxs("div",{className:s("item",s(`item-${u}`)),children:[t.jsxs("div",{className:s("indicator-column"),"aria-hidden":"true",children:[t.jsx("div",{className:s("indicator"),children:q(s,u,E,c.indicator)}),!f&&t.jsx("span",{className:s("connector")})]}),t.jsxs("div",{className:s("content",f?void 0:s("content-continuation")),children:[t.jsxs("div",{className:s("copy"),children:[y(c.title,$),c.description!=null&&y(c.description,X)]}),g&&t.jsx("div",{className:s("tag"),children:g})]})]},c.key)})})};P.memo(l);l.__docgenInfo={description:"",methods:[],displayName:"Step",props:{prefixCls:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'step'",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""}},composes:["HTMLAttributes"]};const _={width:F},de={title:"Components/Step",component:l,args:{items:[{key:a.verifyBusiness,title:r.title,description:r.description,status:i.completed,tag:r.tag},{key:a.verifyOwners,title:r.title,description:r.description,status:i.completed,tag:r.tag},{key:a.reviewSubmission,title:r.title,description:r.description,status:i.default,tag:r.tag}]},tags:["autodocs"]},m={render:e=>t.jsx("div",{style:_,children:t.jsx(l,{...e})})},S={render:e=>t.jsx("div",{style:_,children:t.jsx(l,{...e,items:[{key:a.start,title:r.title,description:r.description,status:i.default,tag:r.tag},{key:a.complete,title:r.title,description:r.description,status:i.completed,tag:r.tag},{key:a.error,title:r.title,description:r.description,status:i.error,tag:r.tag}]})})},T={render:()=>t.jsx("div",{style:_,children:t.jsx(l,{items:[{key:a.details,title:o.settlementReview,description:o.uploadOwnershipDocuments,status:i.completed,tag:{label:o.approved}},{key:a.verification,title:o.beneficialOwnerCheck,description:o.waitingForPasskeyConfirmation,status:i.default,tag:{label:o.pending,color:G}},{key:a.finalize,title:o.finalConfirmation,description:o.signerRejectedAgreement,status:i.error,tag:{label:o.rejected}}]})})};var v,A,M;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={wrapperStyle}>
      <Step {...args} />
    </div>
}`,...(M=(A=m.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var j,Y,x;S.parameters={...S.parameters,docs:{...(j=S.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={wrapperStyle}>
      <Step {...args} items={[{
      key: STEP_ITEM_KEYS.start,
      title: STEP_SAMPLE_COPY.title,
      description: STEP_SAMPLE_COPY.description,
      status: STEP_STATUS.default,
      tag: STEP_SAMPLE_COPY.tag
    }, {
      key: STEP_ITEM_KEYS.complete,
      title: STEP_SAMPLE_COPY.title,
      description: STEP_SAMPLE_COPY.description,
      status: STEP_STATUS.completed,
      tag: STEP_SAMPLE_COPY.tag
    }, {
      key: STEP_ITEM_KEYS.error,
      title: STEP_SAMPLE_COPY.title,
      description: STEP_SAMPLE_COPY.description,
      status: STEP_STATUS.error,
      tag: STEP_SAMPLE_COPY.tag
    }]} />
    </div>
}`,...(x=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:x.source}}};var h,w,k;T.parameters={...T.parameters,docs:{...(h=T.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={wrapperStyle}>
      <Step items={[{
      key: STEP_ITEM_KEYS.details,
      title: STEP_CUSTOM_COPY.settlementReview,
      description: STEP_CUSTOM_COPY.uploadOwnershipDocuments,
      status: STEP_STATUS.completed,
      tag: {
        label: STEP_CUSTOM_COPY.approved
      }
    }, {
      key: STEP_ITEM_KEYS.verification,
      title: STEP_CUSTOM_COPY.beneficialOwnerCheck,
      description: STEP_CUSTOM_COPY.waitingForPasskeyConfirmation,
      status: STEP_STATUS.default,
      tag: {
        label: STEP_CUSTOM_COPY.pending,
        color: STEP_RECOMMENDED_TAG_COLOR
      }
    }, {
      key: STEP_ITEM_KEYS.finalize,
      title: STEP_CUSTOM_COPY.finalConfirmation,
      description: STEP_CUSTOM_COPY.signerRejectedAgreement,
      status: STEP_STATUS.error,
      tag: {
        label: STEP_CUSTOM_COPY.rejected
      }
    }]} />
    </div>
}`,...(k=(w=T.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const pe=["Default","MixedStatus","CustomContent"];export{T as CustomContent,m as Default,S as MixedStatus,pe as __namedExportsOrder,de as default};
