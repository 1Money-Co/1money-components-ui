import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as U}from"./index-CP2yOfOm.js";import{f as oe}from"./index-DCiaR2iG.js";import{I as ne}from"./Icons-BarT8jPS.js";import{g as ce,T as ie}from"./Typography-B-cH9UOu.js";import{c as me,j as le}from"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./iframe-DvzUB2yt.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const pe="progress",R=0,h=100,de="gray",ue="left",fe=!0,ge="error",y={default:"default",success:"success",notStarted:"not-started"},Se=e=>e<=R?R:e>=h?h:e,Ee="sm",ye="sm",Re=(e,t)=>t||(e<=R?y.notStarted:e>=h?y.success:y.default),he=e=>{if(typeof e=="string"||typeof e=="number")return String(e)},S=e=>{const{className:t="",prefixCls:o=pe,percent:a,state:J,color:Q=de,placement:Y=ue,showInfo:ee=fe,format:x,feedback:c,ref:re,...se}=e,s=me(o),n=Se(a),E=Re(n,J),T=x?x(n,{percent:n,state:E}):`${n}%`,te=he(T),ae=E==="error"&&c!=null;return r.jsxs("div",{...se,ref:re,"data-testid":"progress-root",className:s(void 0,le(s(`state-${E}`),s(`color-${Q}`),s(`placement-${Y}`),t)),role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":n,"aria-valuetext":te,children:[ee&&r.jsx(ce,{className:s("info"),as:"div",size:Ee,"data-testid":"progress-info",children:T}),r.jsx("div",{className:s("bar"),children:r.jsx("div",{className:s("rail"),children:r.jsx("div",{className:s("track"),"data-testid":"progress-track",style:{width:`${n}%`}})})}),ae&&r.jsxs("div",{className:s("feedback"),"data-testid":"progress-feedback",children:[r.jsx("span",{className:s("feedback-icon"),"aria-hidden":"true",children:r.jsx(ne,{name:ge,size:16})}),typeof c=="string"||typeof c=="number"?r.jsx(ie,{className:s("feedback-text"),size:ye,children:c}):c]})]})};U.memo(S);S.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{ref:{required:!1,tsType:{name:"RefObject",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}],raw:"RefObject<HTMLDivElement | null>"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:"CSS class prefix for BEM namespace customization"},percent:{required:!0,tsType:{name:"number"},description:"Completion progress as a percentage. Values are normalized to 0-100."},state:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROGRESS_STATES)[number]"},description:"Semantic visual state. When omitted, the component derives one from percent."},color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROGRESS_COLORS)[number]"},description:"Track color scheme variant."},placement:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROGRESS_PLACEMENTS)[number]"},description:"Alignment of the info row."},showInfo:{required:!1,tsType:{name:"boolean"},description:"Whether to show the progress info row. Defaults to true."},format:{required:!1,tsType:{name:"signature",type:"function",raw:"(percent: number, context: ProgressFormatContext) => ReactNode",signature:{arguments:[{type:{name:"number"},name:"percent"},{type:{name:"ProgressFormatContext"},name:"context"}],return:{name:"ReactNode"}}},description:"Custom formatter for the info row."},feedback:{required:!1,tsType:{name:"ReactNode"},description:"Optional feedback content rendered only for the error state."}},composes:["HTMLAttributes"]};const X=["gray","white"],K=["left","right"],Z=["default","success","error","not-started"],je={title:"Components/Progress",component:S,argTypes:{color:{control:"radio",options:[...X]},placement:{control:"radio",options:[...K]},state:{control:"radio",options:[...Z]},showInfo:{control:"boolean"}},args:{percent:25,color:"gray",placement:"left",showInfo:!0,onClick:oe()},tags:["autodocs"]},i={},m={args:{percent:100}},l={args:{percent:25,state:"error",feedback:"Feedback"}},p={args:{percent:25,color:"white"}},d={args:{percent:25,placement:"right"}},u={args:{percent:25,format:e=>`Loaded ${e}%`}},f={args:{percent:25,showInfo:!1}},g={render:e=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:X.map(t=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx("h3",{style:{margin:0},children:t}),K.map(o=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx("h4",{style:{margin:0},children:o}),Z.map(a=>U.createElement(S,{...e,key:`${t}-${o}-${a}`,color:t,placement:o,state:a,percent:a==="success"?100:a==="not-started"?0:25,feedback:a==="error"?"Feedback":void 0}))]},`${t}-${o}`))]},t))}),tags:["!autodocs","dev"]};var O,b,P;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(P=(b=i.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var _,v,k;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    percent: 100
  }
}`,...(k=(v=m.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var w,C,A;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    percent: 25,
    state: 'error',
    feedback: 'Feedback'
  }
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var I,N,j;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    percent: 25,
    color: 'white'
  }
}`,...(j=(N=p.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var D,G,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    percent: 25,
    placement: 'right'
  }
}`,...(F=(G=d.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var L,$,M;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    percent: 25,
    format: percent => \`Loaded \${percent}%\`
  }
}`,...(M=($=u.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var q,H,z;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    percent: 25,
    showInfo: false
  }
}`,...(z=(H=f.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var V,W,B;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {PROGRESS_COLORS.map(color => <div key={color} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
          <h3 style={{
        margin: 0
      }}>{color}</h3>
          {PROGRESS_PLACEMENTS.map(placement => <div key={\`\${color}-\${placement}\`} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
              <h4 style={{
          margin: 0
        }}>{placement}</h4>
              {PROGRESS_STATES.map(state => <Progress {...args} key={\`\${color}-\${placement}-\${state}\`} color={color} placement={placement} state={state} percent={state === 'success' ? 100 : state === 'not-started' ? 0 : 25} feedback={state === 'error' ? 'Feedback' : undefined} />)}
            </div>)}
        </div>)}
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(B=(W=g.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const De=["Default","Success","Error","WhiteTrack","RightAlignedInfo","CustomFormat","HiddenInfo","AllVariants"];export{g as AllVariants,u as CustomFormat,i as Default,l as Error,f as HiddenInfo,d as RightAlignedInfo,m as Success,p as WhiteTrack,De as __namedExportsOrder,je as default};
