import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as d,R as oe}from"./index-CP2yOfOm.js";import{f as Xn}from"./index-DCiaR2iG.js";import{c as re,j as Zn}from"./classnames-0AlMal0H.js";import{b as Dn,a as et,c as be,d as Bn}from"./index-CearjnKp.js";import{R as rt,C as at}from"./Grid-DmPY0oMu.js";import{f as D}from"./Button-xKWQamn_.js";import{u as V}from"./index-_M0HKnWf.js";import{u as nr,c as Ln,T as nt}from"./Typography-COcdYQQO.js";import{a as Cr,u as cr}from"./index-nCcupNJZ.js";import{u as Mn}from"./index-CyN509qF.js";import{I as ue}from"./Trade-L7ppztKj.js";import{C as tt,a as st}from"./index-BKBuw4Z7.js";import{S as ot}from"./Switch-zA3SYdRx.js";import{S as lt,f as it,n as mt}from"./Select-YJAfnYj9.js";import{g as dt}from"./RadioGroup-BJ4jiSVe.js";import{S as ct}from"./Slider-CGFgdgV7.js";import{C as ut}from"./Calendar-DSr2sXy8.js";import{U as pt}from"./UploadFileBar-Cyn-A1Ij.js";import{a as ft}from"./Drawer-CnXTyRKs.js";import{a as yt}from"./Modal-CyhthJQg.js";import"./Icons-C17k0gNH.js";/* empty css               */import"./Tag-C5k1NAle.js";import"./Spinner-C9s5r2Mu.js";import"./ResizeObserver-DbXOvenx.js";import"./clipboard-C7s2bcmm.js";import"./iframe-C8OcTo_O.js";import"./Tooltip-CsTd8WLo.js";import"./index-CN0Pk037.js";import"./Skeleton-CueNxn16.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";import"./Portal-B7v9_YIQ.js";const ae="proform",kr={sm:160,md:240,lg:320,xl:420},Jn=24,Un="md",Gn="default",Z={submit:"Submit",reset:"Reset",search:"Search",add:"Add",delete:"Delete",copy:"Copy",collapse:"Collapse",expand:"Expand"},Ar=()=>{},yr=d.createContext({readonly:!1,mode:"edit",grid:!1,colProps:{span:Jn},registerTransform:Ar,unregisterTransform:Ar});yr.displayName="ProFormContext";const $n=()=>d.useContext(yr),br=d.createContext({});br.displayName="FormListContext";const _n=()=>d.useContext(br),Or=re(`${ae}-submitter`),gr=r=>{const{submitText:a=Z.submit,resetText:t=Z.reset,render:n,onSubmit:o,onReset:i,submitButtonProps:f,resetButtonProps:c,loading:l=!1}=r,m=Dn(),u=V(()=>{o==null||o(),m.submit()}),p=V(()=>{i==null||i(),m.resetFields()}),F=d.useMemo(()=>e.jsx(D,{type:"button",color:"secondary",...c,onClick:p,children:t},"reset"),[t,c,p]),g=d.useMemo(()=>e.jsx(D,{type:"submit",color:"primary",loading:l,...f,children:a},"submit"),[a,f,l]),h=[F,g];return n?e.jsx("div",{className:Or(),children:n({form:m,submit:u,reset:p},h)}):e.jsxs("div",{className:Or(),children:[F,g]})};gr.displayName="Submitter";const zn=d.memo(gr);gr.__docgenInfo={description:"",methods:[],displayName:"Submitter",props:{submitText:{required:!1,tsType:{name:"ReactNode"},description:""},resetText:{required:!1,tsType:{name:"ReactNode"},description:""},render:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  props: { form: FormCoreInstance; submit: () => void; reset: () => void },
  dom: ReactElement[],
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ form: FormCoreInstance; submit: () => void; reset: () => void }",signature:{properties:[{key:"form",value:{name:"FormCoreInstance",required:!0}},{key:"submit",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"reset",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},name:"props"},{type:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},name:"dom"}],return:{name:"ReactNode"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitButtonProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"},description:""},resetButtonProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};function tr(r){return r==null?String(r):typeof r!="object"?JSON.stringify(r):Array.isArray(r)?"["+r.map(tr).join(",")+"]":"{"+Object.keys(r).sort().map(t=>JSON.stringify(t)+":"+tr(r[t])).join(",")+"}"}function ge(r){return r==null||r===""?"-":String(r)}function Wn(r){return r==null?"-":r?"Yes":"No"}function bt(r){if(r==null||r==="")return"-";if(typeof r=="number")return String(r);const a=Number(r);return Number.isNaN(a)?"-":String(a)}function pe(r,a){const t=a.split(".");let n=r;for(const o of t){if(n==null||typeof n!="object")return;n=n[o]}return n}function gt(r){return typeof r=="number"?r:kr[r]??kr.md}function Vr(r){if(r===!1||r===void 0)return{disabled:!1,rest:{}};const{disabled:a=!1,...t}=r;return{disabled:a,rest:t}}function ar(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)}function ht(r,a){const t=Object.keys(a);if(t.length===0)return r;const n={...r};return t.sort().forEach(o=>{const i=a[o];if(typeof i!="function")return;const f=pe(n,o),c=i(f,o,n);if(ar(c)){const l=o.lastIndexOf(".");if(l===-1)delete n[o],Object.assign(n,c);else{const m=o.slice(0,l),u=pe(n,m);if(ar(u)){const p=o.slice(l+1);delete u[p],Object.assign(u,c)}}}else{const l=o.split(".");if(l.length===1)n[o]=c;else{let m=n;for(let u=0;u<l.length-1;u++){const p=l[u];!ar(m[p])&&!Array.isArray(m[p])&&(m[p]={}),m=m[p]}m[l[l.length-1]]=c}}}),n}function Kn(r){const a={};for(const t of Object.keys(r)){const n=r[t];if(!(n==null||n===""))if(ar(n)){const o=Kn(n);Object.keys(o).length>0&&(a[t]=o)}else a[t]=n}return a}function Ft(r){return Object.entries(r).map(([a,t])=>typeof t=="string"?{label:t,value:a}:{label:t.text,value:a,disabled:t.disabled})}const Pt=re(ae),xt=r=>{const{children:a,submitter:t,mode:n="edit",readonly:o=!1,grid:i=!1,colProps:f,rowProps:c,formRef:l,isLoading:m,applyPipeline:u,registerTransform:p,unregisterTransform:F}=r,g=n??(o?"read":"edit"),h=Dn(),T=d.useMemo(()=>({submit:h.submit,resetFields:h.resetFields,getFieldValue:h.getFieldValue,getFieldsValue:h.getFieldsValue,setFieldsValue:h.setFieldsValue,setFieldValue:h.setFieldValue,validateFields:h.validateFields,getFieldsFormatValue:()=>u(h.getFieldsValue()),validateFieldsReturnFormatValue:()=>h.validateFields()?{success:!0,values:u(h.getFieldsValue())}:{success:!1}}),[h,u]);d.useEffect(()=>{l&&(l.current=T)});const R=d.useMemo(()=>({readonly:o,mode:g,grid:i,colProps:f,registerTransform:p,unregisterTransform:F,formInstance:T}),[o,g,i,f,p,F,T]),y=i?rt:d.Fragment,S=i?{...c}:{},E=t!==!1&&g!=="read"?e.jsx(zn,{...typeof t=="object"?t:{},loading:m}):null;return e.jsxs(yr.Provider,{value:R,children:[e.jsx(y,{...S,children:a}),E]})},hr=r=>{const{children:a,className:t,submitter:n,readonly:o=!1,mode:i,grid:f=!1,colProps:c,rowProps:l,loading:m=!1,request:u,params:p,initialValues:F,onFinish:g,onFinishFailed:h,onValuesChange:T,onReset:R,formRef:y,omitNil:S=!0,size:E,labelAlign:Y,disabled:w,colon:G,requiredMark:B,validateTrigger:P,...L}=r,K=i??(o?"read":"edit"),[H,J]=nr(!1),x=m||H,A=d.useRef({}),$=V((O,q)=>{A.current[O]=q}),X=V(O=>{delete A.current[O]}),ne=Cr(g),N=V(O=>{let q=ht(O,A.current);return S&&(q=Kn(q)),q}),he=V(O=>{var q;(q=ne.current)==null||q.call(ne,N(O))}),te=Cr(u),_=d.useRef(null),se=d.useMemo(()=>tr(p),[p]);return d.useEffect(()=>{const O=async()=>{var U;const q=te.current;if(q){J(!0);try{const j=await q(p);j&&typeof j=="object"&&((U=_.current)==null||U.setFieldsValue(j))}finally{J(!1)}}};te.current&&O()},[se]),e.jsx(et,{...L,ref:O=>{O&&(_.current=O)},className:Zn(Pt(),t),initialValues:F,onFinish:he,onFinishFailed:h,onValuesChange:T,onReset:R,size:E,labelAlign:Y,disabled:w||x,colon:G,requiredMark:B,validateTrigger:P,children:e.jsx(xt,{...r,mode:K,isLoading:x,applyPipeline:N,registerTransform:$,unregisterTransform:X})})};hr.displayName="ProForm";const lr=d.memo(hr);hr.__docgenInfo={description:"",methods:[],displayName:"ProForm",props:{submitter:{required:!1,tsType:{name:"union",raw:"SubmitterProps | false",elements:[{name:"SubmitterProps"},{name:"literal",value:"false"}]},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use `mode='read'` instead"},mode:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROFORM_MODES)[number]"},description:"Form mode: 'edit' (default), 'read' (readonly), 'update' (edit existing data)"},grid:{required:!1,tsType:{name:"boolean"},description:""},colProps:{required:!1,tsType:{name:"ProFormColProps"},description:""},rowProps:{required:!1,tsType:{name:"Partial",elements:[{name:"GridRowProps"}],raw:"Partial<GridRowProps>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},request:{required:!1,tsType:{name:"signature",type:"function",raw:"(params?: unknown) => Promise<Record<string, unknown>>",signature:{arguments:[{type:{name:"unknown"},name:"params"}],return:{name:"Promise",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Promise<Record<string, unknown>>"}}},description:""},params:{required:!1,tsType:{name:"unknown"},description:""},formRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"ProFormFormInstance | undefined",elements:[{name:"ProFormFormInstance"},{name:"undefined"}]}],raw:"MutableRefObject<ProFormFormInstance | undefined>"},description:""},omitNil:{required:!1,tsType:{name:"boolean"},description:"Strip null / undefined / empty-string values before onFinish (default: true)"}},composes:["Omit"]};const Fr=({name:r,ignoreFormListField:a,children:t})=>{const{values:n}=be(),{formInstance:o}=$n(),i=_n(),f=d.useMemo(()=>{const m=!a&&i.listName!==void 0;return r.map(u=>m?`${i.listName}.${u}`:u)},[r,a,i.listName]),c=d.useMemo(()=>{const m={};for(let u=0;u<r.length;u++){const p=r[u],F=f[u];m[p]=F.includes(".")?pe(n,F):n[F]}return m},[r,f,n]),l=d.useMemo(()=>({submit:()=>({success:!1}),resetFields:()=>{},getFieldValue:m=>m.includes(".")?pe(n,m):n[m],getFieldsValue:()=>n,setFieldsValue:()=>{},setFieldValue:()=>{},validateFields:()=>!1,getFieldsFormatValue:()=>n,validateFieldsReturnFormatValue:()=>({success:!1})}),[n]);return e.jsx(e.Fragment,{children:t(c,o??l)})};Fr.displayName="ProFormDependency";const ir=d.memo(Fr);Fr.__docgenInfo={description:"",methods:[],displayName:"ProFormDependency",props:{name:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ignoreFormListField:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>, form: ProFormFormInstance) => ReactNode",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"},{type:{name:"ProFormFormInstance"},name:"form"}],return:{name:"ReactNode"}}},description:""}}};const ce=re(`${ae}-list`);let vt=0;const ur=()=>`list_${++vt}`,Pr=r=>{const{name:a,label:t,min:n,max:o,required:i,requiredMessage:f="This list cannot be empty",initialValue:c,copyIconProps:l,deleteIconProps:m,creatorButtonProps:u,itemRender:p,actionRender:F,children:g,onAfterAdd:h,onAfterRemove:T}=r,R=_n(),y=R.listName?`${R.listName}.${a}`:a,{values:S,setFieldValue:E}=be(),Y=d.useRef(!1),w=d.useRef([]),[G,B]=nr(null),P=d.useMemo(()=>{const j=y.includes(".")?pe(S,y):S[y];return Array.isArray(j)?j:[]},[S,y]);for(;w.current.length<P.length;)w.current.push(ur());w.current.length>P.length&&(w.current=w.current.slice(0,P.length)),d.useEffect(()=>{Y.current||P.length===0&&(!Array.isArray(c)||c.length===0||(Y.current=!0,E(y,[...c]),w.current=c.map(()=>ur())))},[P.length,c,y,E]),d.useEffect(()=>{i&&P.length>0&&G&&B(null)},[P.length,i,G,B]);const L=o==null||P.length<o,K=n==null||P.length>n;V(()=>i?P.length===0?(B(f),!1):(B(null),!0):!0);const H=V((j,v)=>{if(!L)return;const I=j??{},M=[...P],C=[...w.current],k=typeof v=="number"?v:M.length;M.splice(k,0,I),C.splice(k,0,ur()),w.current=C,E(y,M),h==null||h(I,k)}),J=V(j=>{if(!K)return;const v=[...P],I=[...w.current];v.splice(j,1),I.splice(j,1),w.current=I,E(y,v),T==null||T(j),i&&v.length===0&&B(f)}),x=V(j=>{if(!L)return;const v=P[j]?{...P[j]}:{};H(v,j+1)}),A=V((j,v)=>{if(j===v||j<0||j>=P.length||v<0||v>=P.length)return;const I=[...P],M=[...w.current],[C]=I.splice(j,1),[k]=M.splice(j,1);I.splice(v,0,C),M.splice(v,0,k),w.current=M,E(y,I)}),$=V(()=>P),X=d.useMemo(()=>({add:H,remove:J,move:A,copy:x,getList:$}),[H,J,A,x,$]),ne=d.useMemo(()=>P.map((j,v)=>({name:`${y}.${v}`,key:w.current[v]||`fallback_${v}`})),[P,y]),N=typeof g=="function"?g(ne,X):g,he=d.useMemo(()=>P.map((j,v)=>{const I=Vr(l),M=Vr(m),C={copy:l!==!1?e.jsx(D,{type:"button",color:"secondary",size:"small",...I.rest,onClick:()=>x(v),disabled:!L||I.disabled,children:Z.copy},`copy-${v}`):null,delete:m!==!1?e.jsx(D,{type:"button",color:"secondary",size:"small",...M.rest,onClick:()=>J(v),disabled:!K||M.disabled,children:Z.delete},`delete-${v}`):null},k=F?F({index:v,record:j},X,C):[C.copy,C.delete].filter(Boolean),Q=e.jsx("div",{className:ce("row-actions"),children:k},w.current[v]||v);return p?p({listDom:Q,action:X}):Q}),[P,l,m,L,K,x,J,X,F,p]),te=u!==!1,_=te&&typeof u=="object"?u:{},se=(_==null?void 0:_.position)??"bottom",O=(_==null?void 0:_.text)??Z.add,q=te?e.jsx(D,{type:"button",color:"secondary",onClick:()=>{se==="top"?H({},0):H()},disabled:!L,children:O}):null,U=d.useMemo(()=>({listName:y}),[y]);return e.jsx(br.Provider,{value:U,children:e.jsxs("div",{className:ce(),children:[t&&e.jsx(Ln,{className:ce("label"),size:Un,color:Gn,children:t}),se==="top"&&q,e.jsx("div",{className:ce("content"),children:N}),e.jsx("div",{className:ce("actions"),children:he}),se==="bottom"&&q,G&&e.jsx(nt,{as:"div",size:"sm",color:"danger",children:G})]})})};Pr.displayName="ProFormList";const fe=d.memo(Pr);Pr.__docgenInfo={description:"",methods:[],displayName:"ProFormList",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"Validate that the list is not empty on form submission"},requiredMessage:{required:!1,tsType:{name:"string"},description:"Error message when list is empty (used with required)"},initialValue:{required:!1,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},description:""},copyIconProps:{required:!1,tsType:{name:"union",raw:"false | Partial<ButtonProps>",elements:[{name:"literal",value:"false"},{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"}]},description:""},deleteIconProps:{required:!1,tsType:{name:"union",raw:"false | Partial<ButtonProps>",elements:[{name:"literal",value:"false"},{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"}]},description:""},creatorButtonProps:{required:!1,tsType:{name:"union",raw:"false | (Partial<ButtonProps> & { text?: ReactNode; position?: 'top' | 'bottom' })",elements:[{name:"literal",value:"false"},{name:"unknown"}]},description:""},itemRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { listDom: ReactNode; action: ProFormListAction }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ listDom: ReactNode; action: ProFormListAction }",signature:{properties:[{key:"listDom",value:{name:"ReactNode",required:!0}},{key:"action",value:{name:"ProFormListAction",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:""},actionRender:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  row: { index: number; record: unknown },
  action: ProFormListAction,
  defaultDom: { copy: ReactNode; delete: ReactNode },
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ index: number; record: unknown }",signature:{properties:[{key:"index",value:{name:"number",required:!0}},{key:"record",value:{name:"unknown",required:!0}}]}},name:"row"},{type:{name:"ProFormListAction"},name:"action"},{type:{name:"signature",type:"object",raw:"{ copy: ReactNode; delete: ReactNode }",signature:{properties:[{key:"copy",value:{name:"ReactNode",required:!0}},{key:"delete",value:{name:"ReactNode",required:!0}}]}},name:"defaultDom"}],return:{name:"ReactNode"}}},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((fields: Array<{ name: string; key: string }>, action: ProFormListAction) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},onAfterAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(defaultValue: Record<string, unknown>, index: number) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"defaultValue"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onAfterRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const me=re(`${ae}-group`),xr=r=>{const{title:a,extra:t,collapsible:n=!1,defaultCollapsed:o=!1,collapsed:i,onCollapse:f,style:c,children:l}=r,[m,u]=Mn(o,i),p=()=>{if(!n)return;const g=!m;u(g),f==null||f(g)},F=a!=null||t!=null;return e.jsxs("div",{className:me(),style:c,children:[F&&e.jsxs("div",{className:me("header"),role:n?"button":void 0,tabIndex:n?0:void 0,onClick:p,onKeyDown:n?g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),p())}:void 0,children:[e.jsxs("div",{className:me("title"),children:[n&&e.jsx("span",{className:me("arrow"),style:{transform:m?void 0:"rotate(90deg)"},children:"▸"}),a&&e.jsx(Ln,{size:Un,color:Gn,children:a})]}),t&&e.jsx("div",{className:me("extra"),role:"presentation",onClick:g=>g.stopPropagation(),children:t})]}),e.jsx("div",{className:me("body"),style:{display:n&&m?"none":void 0},children:l})]})};xr.displayName="ProFormGroup";const wt=d.memo(xr);xr.__docgenInfo={description:"",methods:[],displayName:"ProFormGroup",props:{title:{required:!1,tsType:{name:"ReactNode"},description:""},extra:{required:!1,tsType:{name:"ReactNode"},description:"Extra content rendered at the right of the title"},collapsible:{required:!1,tsType:{name:"boolean"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function jt(r,a){const[t,n]=nr(!1),[o,i]=nr([]),f=d.useRef(r);f.current=r;const c=tr(a),l=V(async()=>{const m=f.current;if(m){n(!0);try{const u=await m(a);Array.isArray(u)&&i(u)}finally{n(!1)}}});return d.useEffect(()=>{f.current&&l()},[c]),[t,o]}const Hn=({name:r,renderReadonly:a})=>{const{values:t}=be(),n=r?t[r]:void 0,o=a?a(n):n!=null&&n!==""?String(n):"-";return e.jsx("span",{children:o})};Hn.displayName="ReadonlyField";const Tt=d.memo(Hn);function Qn({name:r,convertValue:a,component:t,componentProps:n}){const{values:o}=be(),i=o[r],f=a(i,r);return e.jsx(t,{...n,value:f})}Qn.displayName="ConvertValueWrapper";const Nt=d.memo(Qn);function z(r){const{component:a,mapProps:t,renderReadonly:n}=r,o=c=>{const{name:l,label:m,rules:u,required:p,help:F,validateStatus:g,labelCol:h,wrapperCol:T,colon:R,readonly:y,mode:S,hidden:E,colProps:Y,fieldProps:w,placeholder:G,disabled:B,width:P,transform:L,convertValue:K,dependencies:H,request:J,params:x,valueEnum:A,debounceTime:$,dependenciesValues:X,...ne}=c,N=$n(),te=(S??(y!==void 0?y?"read":"edit":void 0)??(N==null?void 0:N.mode)??(N!=null&&N.readonly?"read":"edit"))==="read";d.useEffect(()=>{var C;if(!(!l||!L))return(C=N.registerTransform)==null||C.call(N,l,L),()=>{var k;(k=N.unregisterTransform)==null||k.call(N,l)}},[l,L,N.registerTransform,N.unregisterTransform]);const _=X?{...x,...X}:x,[se,O]=jt(J,_),q=d.useRef(null),U=d.useRef(void 0),j=d.useCallback((...C)=>{var k;if(!$||$<=0){(k=U.current)==null||k.call(U,...C);return}q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{var Q;(Q=U.current)==null||Q.call(U,...C)},$)},[$]);if(d.useEffect(()=>()=>{q.current&&clearTimeout(q.current)},[]),E)return null;const v={label:m,name:l,rules:u,required:p,help:F,validateStatus:g,labelCol:h,wrapperCol:T,colon:R};let I;if(te)I=e.jsx(Tt,{name:l,renderReadonly:n});else{const C=t?t(ne):{},k=P!==void 0?{width:gt(P)}:void 0,Q=w==null?void 0:w.style,Fe=k?{...Q||{},...k}:Q;let ie=w==null?void 0:w.options;A&&(ie=Ft(A)),O.length>0&&(ie=O);const dr={...C,...w||{},...ie!==void 0?{options:ie}:{},...se?{loading:!0}:{},...G!==void 0?{placeholder:G}:{},...B!==void 0?{disabled:B}:{},...Fe?{style:Fe}:{}};if($&&$>0){const Rr=dr;U.current=Rr.onChange,Rr.onChange=j}I=K&&l?e.jsx(Nt,{name:l,convertValue:K,component:a,componentProps:dr}):e.jsx(a,{...dr})}const M=e.jsx(Bn,{...v,children:I});if(N!=null&&N.grid){const C={...N==null?void 0:N.colProps,...Y},{span:k=Jn,sm:Q,md:Fe,lg:ie}=C;return e.jsx(at,{span:k,sm:Q,md:Fe,lg:ie,children:M})}return M},i=c=>{const{dependencies:l}=c;return l&&l.length>0?e.jsx(ir,{name:l,children:m=>e.jsx(o,{...c,dependenciesValues:m})}):e.jsx(o,{...c})};return d.memo(i)}const s=z({component:ue,renderReadonly:ge});s.displayName="ProFormText";const mr=z({component:ue.Password,renderReadonly:()=>"******"});mr.displayName="ProFormPassword";const ee=z({component:ue.TextArea,renderReadonly:ge});ee.displayName="ProFormTextArea";const de=z({component:tt,renderReadonly:Wn});de.displayName="ProFormCheckbox";const vr=z({component:st,renderReadonly:r=>ge(Array.isArray(r)?r.join(", "):r)});vr.displayName="ProFormCheckboxGroup";const W=z({component:ot,renderReadonly:Wn});W.displayName="ProFormSwitch";function fr(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(fr).filter(Boolean).join(", "):""}function St(r,a){var n;const t=it(mt((a==null?void 0:a.options)??[]));if(Array.isArray(r)){const o=r.map(i=>{var f;return((f=t.find(c=>c.value===i))==null?void 0:f.label)??i}).map(fr).filter(i=>i!=null&&i!=="");return o.length>0?o.join(", "):"-"}return r==null||r===""?"-":fr(((n=t.find(o=>o.value===r))==null?void 0:n.label)??r)||"-"}const le=z({component:lt,renderReadonly:St});le.displayName="ProFormSelect";const ye=z({component:dt,renderReadonly:ge});ye.displayName="ProFormRadioGroup";const sr=z({component:ct,renderReadonly:bt});sr.displayName="ProFormSlider";function qt(r){return r==null?"-":r instanceof Date?r.toLocaleDateString():Array.isArray(r)?r.filter(a=>a instanceof Date).map(a=>a.toLocaleDateString()).join(" ~ "):String(r)}const or=z({component:ut,renderReadonly:qt});or.displayName="ProFormDatePicker";function Rt(r){if(r==null)return"-";if(typeof r=="object"&&"length"in r){const a=r;return a.length===0?"-":Array.from(a).map(t=>t.name).join(", ")}return typeof r=="string"?r||"-":ge(r)}const wr=z({component:pt,renderReadonly:Rt});wr.displayName="ProFormUpload";const Ct=re(`${ae}-fieldset`),jr=r=>{const{name:a,label:t,rules:n,required:o,help:i,gap:f=8,style:c,children:l}=r,{values:m,setFieldValue:u}=be(),p=a?Array.isArray(m[a])?m[a]:[]:[];let F=-1;const g=oe.Children.map(l,T=>{if(!oe.isValidElement(T))return T;F+=1;const R=F;return oe.cloneElement(T,{value:p[R],onChange:y=>{if(!a)return;const S=[...p];S[R]=y&&typeof y=="object"&&"target"in y?y.target.value:y,u(a,S)}})}),h=e.jsx("div",{className:Ct(),style:{display:"flex",gap:f,alignItems:"flex-start",...c},children:g});return a?e.jsx(Bn,{label:t,name:a,rules:n,required:o,help:i,children:h}):h};jr.displayName="ProFormFieldSet";const kt=d.memo(jr);jr.__docgenInfo={description:"",methods:[],displayName:"ProFormFieldSet",props:{name:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},rules:{required:!1,tsType:{name:"Array",elements:[{name:"Rule"}],raw:"Rule[]"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},help:{required:!1,tsType:{name:"ReactNode"},description:""},gap:{required:!1,tsType:{name:"number"},description:"Gap between child fields in px"},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function Yn(r,a){const{open:t,onOpenChange:n,trigger:o,autoClose:i=!0,submitTimeout:f}=r,c=t!==void 0,[l,m]=d.useState(!1),u=c?t:l,p=d.useRef(null),F=d.useCallback(y=>{c||m(y),n==null||n(y)},[c,n]),g=cr(()=>{F(!0)}),h=cr(()=>{p.current&&clearTimeout(p.current),F(!1)}),T=cr(async y=>{await(a==null?void 0:a(y)),i&&(f&&f>0?p.current=setTimeout(()=>{F(!1)},f):F(!1))}),R=o?oe.cloneElement(o,{onClick:(...y)=>{var E;g();const S=(E=o.props)==null?void 0:E.onClick;typeof S=="function"&&S(...y)}}):null;return{mergedOpen:u,triggerNode:R,handleFinish:T,handleHide:h,handleShow:g}}const At=re(`${ae}-drawer-form`),Tr=r=>{const{open:a,onOpenChange:t,trigger:n,title:o,width:i=480,placement:f="right",submitTimeout:c,autoClose:l=!0,drawerProps:m,onFinish:u,submitter:p,children:F,destroyOnClose:g,...h}=r,{mergedOpen:T,triggerNode:R,handleFinish:y,handleHide:S}=Yn({open:a,onOpenChange:t,trigger:n,autoClose:l,submitTimeout:c},u);return e.jsxs(e.Fragment,{children:[R,e.jsx(ft,{...m,open:T,title:o,placement:f,width:i,onClose:S,footer:null,children:e.jsx("div",{className:At(),children:e.jsx(lr,{...h,onFinish:y,submitter:p!==void 0?p:{resetButtonProps:{onClick:S},resetText:"Cancel"},children:F})})})]})};Tr.displayName="DrawerForm";const Nr=d.memo(Tr);Tr.__docgenInfo={description:"",methods:[],displayName:"DrawerForm",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactElement"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},placement:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof DRAWER_PLACEMENTS)[number]"},description:""},submitTimeout:{required:!1,tsType:{name:"number"},description:""},autoClose:{required:!1,tsType:{name:"boolean"},description:""},destroyOnClose:{required:!1,tsType:{name:"boolean"},description:""},drawerProps:{required:!1,tsType:{name:"Partial",elements:[{name:"DrawerProps"}],raw:"Partial<DrawerProps>"},description:""}},composes:["Omit"]};const Ot=re(`${ae}-modal-form`),Sr=r=>{const{open:a,onOpenChange:t,trigger:n,title:o,width:i,submitTimeout:f,autoClose:c=!0,modalProps:l,onFinish:m,submitter:u,children:p,destroyOnClose:F,...g}=r,{mergedOpen:h,triggerNode:T,handleFinish:R,handleHide:y}=Yn({open:a,onOpenChange:t,trigger:n,autoClose:c,submitTimeout:f},m);return e.jsxs(e.Fragment,{children:[T,e.jsx(yt,{...l,open:h,title:o,onCancel:y,footer:null,...i!==void 0?{rootStyle:{...l==null?void 0:l.rootStyle,width:i}}:{},children:e.jsx("div",{className:Ot(),children:e.jsx(lr,{...g,onFinish:R,submitter:u!==void 0?u:{resetButtonProps:{onClick:y},resetText:(l==null?void 0:l.cancelText)??"Cancel"},children:p})})})]})};Sr.displayName="ModalForm";const Vt=d.memo(Sr);Sr.__docgenInfo={description:"",methods:[],displayName:"ModalForm",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactElement"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},submitTimeout:{required:!1,tsType:{name:"number"},description:""},autoClose:{required:!1,tsType:{name:"boolean"},description:""},destroyOnClose:{required:!1,tsType:{name:"boolean"},description:""},modalProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ModalProps"}],raw:"Partial<ModalProps>"},description:""}},composes:["Omit"]};const pr=re(`${ae}-query-filter`);function Et(){if(typeof window>"u")return{};const r={};return new URLSearchParams(window.location.search).forEach((a,t)=>{r[t]=a}),r}function Er(r){if(typeof window>"u")return;const a=new URLSearchParams;for(const[o,i]of Object.entries(r))i!=null&&i!==""&&a.set(o,String(i));const t=a.toString(),n=t?`${window.location.pathname}?${t}`:window.location.pathname;window.history.replaceState(null,"",n)}const qr=r=>{const{defaultCollapsed:a=!0,collapsed:t,onCollapse:n,defaultColsNumber:o=3,labelWidth:i,split:f=!1,searchConfig:c,syncToUrl:l,onFinish:m,onReset:u,children:p,submitter:F=!1,initialValues:g,...h}=r,[T,R]=Mn(a,t),y=d.useRef(!1),S=d.useMemo(()=>{if(!l||y.current)return g;y.current=!0;const x=Et();return typeof l=="function"?{...g,...l(x,"get")}:{...g,...x}},[]),E=V(x=>{if(!l)return;const A=typeof l=="function"?l(x,"set"):x;Er(A)}),Y=V(x=>{E(x),m==null||m(x)}),w=V(()=>{l&&Er({}),u==null||u()}),G=V(()=>{const x=!T;R(x),n==null||n(x)}),B=d.useMemo(()=>{const x=[];return oe.Children.forEach(p,A=>{oe.isValidElement(A)&&x.push(A)}),x},[p]),P=T?B.slice(0,o):B,L=B.length>o,K=(c==null?void 0:c.searchText)??Z.search,H=(c==null?void 0:c.resetText)??Z.reset,J=i!==void 0&&i!=="auto"?{width:i}:void 0;return e.jsx(lr,{...h,initialValues:S,onFinish:Y,onReset:w,submitter:!1,children:e.jsxs("div",{className:pr(),children:[P.map((x,A)=>e.jsxs(oe.Fragment,{children:[f&&A>0&&e.jsx("div",{className:pr("split")}),J?e.jsx("div",{style:J,children:x}):x]},A)),e.jsxs("div",{className:pr("actions"),children:[e.jsx(D,{type:"submit",color:"primary",children:K}),e.jsx(D,{type:"button",color:"secondary",onClick:w,children:H}),L&&e.jsx(D,{type:"button",variant:"text",onClick:G,children:T?Z.expand:Z.collapse})]})]})})};qr.displayName="QueryFilter";const It=d.memo(qr);qr.__docgenInfo={description:"",methods:[],displayName:"QueryFilter",props:{submitter:{required:!1,tsType:{name:"union",raw:"SubmitterProps | false",elements:[{name:"SubmitterProps"},{name:"literal",value:"false"}]},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use `mode='read'` instead"},mode:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROFORM_MODES)[number]"},description:"Form mode: 'edit' (default), 'read' (readonly), 'update' (edit existing data)"},grid:{required:!1,tsType:{name:"boolean"},description:""},colProps:{required:!1,tsType:{name:"ProFormColProps"},description:""},rowProps:{required:!1,tsType:{name:"Partial",elements:[{name:"GridRowProps"}],raw:"Partial<GridRowProps>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},request:{required:!1,tsType:{name:"signature",type:"function",raw:"(params?: unknown) => Promise<Record<string, unknown>>",signature:{arguments:[{type:{name:"unknown"},name:"params"}],return:{name:"Promise",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Promise<Record<string, unknown>>"}}},description:""},params:{required:!1,tsType:{name:"unknown"},description:""},formRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"ProFormFormInstance | undefined",elements:[{name:"ProFormFormInstance"},{name:"undefined"}]}],raw:"MutableRefObject<ProFormFormInstance | undefined>"},description:""},omitNil:{required:!1,tsType:{name:"boolean"},description:"Strip null / undefined / empty-string values before onFinish (default: true)"},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},defaultColsNumber:{required:!1,tsType:{name:"number"},description:""},labelWidth:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:""},split:{required:!1,tsType:{name:"boolean"},description:""},searchConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  searchText?: ReactNode;
  resetText?: ReactNode;
}`,signature:{properties:[{key:"searchText",value:{name:"ReactNode",required:!1}},{key:"resetText",value:{name:"ReactNode",required:!1}}]}},description:""},syncToUrl:{required:!1,tsType:{name:"union",raw:"boolean | ((values: Record<string, unknown>, type: 'get' | 'set') => Record<string, unknown>)",elements:[{name:"boolean"},{name:"unknown"}]},description:"Sync form values to URL search params"}},composes:["Omit"]};const b=Object.assign(lr,{Dependency:ir,List:fe,Group:wt,FieldSet:kt,Submitter:zn,Text:s,Password:mr,TextArea:ee,Checkbox:de,CheckboxGroup:vr,Switch:W,Select:le,Upload:wr}),gs={title:"Components/ProForm",component:b,argTypes:{readonly:{control:"boolean"},loading:{control:"boolean"},grid:{control:"boolean"},disabled:{control:"boolean"}},args:{readonly:!1,loading:!1,grid:!1,disabled:!1,onFinish:Xn()},tags:["autodocs"]},Pe={render:r=>e.jsxs(b,{...r,initialValues:{username:"",email:""},onFinish:a=>{var t;(t=r.onFinish)==null||t.call(r,a),alert(JSON.stringify(a,null,2))},children:[e.jsx(s,{name:"username",label:"Username",placeholder:"Enter username",rules:[{required:!0,message:"Username is required"}]}),e.jsx(s,{name:"email",label:"Email",placeholder:"Enter email",rules:[{required:!0},{type:"email",message:"Invalid email"}]})]})},xe={render:r=>e.jsxs(b,{...r,initialValues:{text:"Hello",password:"secret123",textarea:`Multi-line
content`,agree:!0,options:[],darkMode:!1,role:"admin",volume:60,date:null},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsx(s,{name:"text",label:"Text Input",placeholder:"Type here..."}),e.jsx(mr,{name:"password",label:"Password",placeholder:"Password"}),e.jsx(ee,{name:"textarea",label:"Text Area",placeholder:"Enter long text"}),e.jsx(de,{name:"agree",label:"I agree to the terms"}),e.jsx(vr,{name:"options",label:"Pick options",fieldProps:{options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}]}}),e.jsx(W,{name:"darkMode",label:"Dark Mode"}),e.jsx(ye,{name:"role",label:"Role",fieldProps:{direction:"horizontal",options:[{label:"Admin",value:"admin"},{label:"Editor",value:"editor"},{label:"Viewer",value:"viewer"}]}}),e.jsx(sr,{name:"volume",label:"Volume",fieldProps:{min:0,max:100}}),e.jsx(or,{name:"date",label:"Date",fieldProps:{dateFormat:"yy-mm-dd"}})]})},ve={args:{readonly:!0},render:r=>e.jsxs(b,{...r,initialValues:{name:"John Doe",email:"john@example.com",bio:"Software engineer with 10 years of experience.",newsletter:!0,active:!0},children:[e.jsx(s,{name:"name",label:"Name"}),e.jsx(s,{name:"email",label:"Email"}),e.jsx(ee,{name:"bio",label:"Bio"}),e.jsx(de,{name:"newsletter",label:"Newsletter"}),e.jsx(W,{name:"active",label:"Active"})]})},we={args:{loading:!0},render:r=>e.jsxs(b,{...r,initialValues:{name:"Loading..."},children:[e.jsx(s,{name:"name",label:"Name"}),e.jsx(s,{name:"email",label:"Email"})]})},je={args:{grid:!0},render:r=>e.jsxs(b,{...r,rowProps:{gutter:16},initialValues:{},children:[e.jsx(s,{name:"firstName",label:"First Name",colProps:{span:12}}),e.jsx(s,{name:"lastName",label:"Last Name",colProps:{span:12}}),e.jsx(s,{name:"email",label:"Email",colProps:{span:12}}),e.jsx(s,{name:"phone",label:"Phone",colProps:{span:12}}),e.jsx(ee,{name:"address",label:"Address",colProps:{span:24}})]})},Te={render:r=>e.jsxs(b,{...r,children:[e.jsx(s,{name:"sm",label:"Small (sm = 160px)",width:"sm"}),e.jsx(s,{name:"md",label:"Medium (md = 240px)",width:"md"}),e.jsx(s,{name:"lg",label:"Large (lg = 320px)",width:"lg"}),e.jsx(s,{name:"xl",label:"XL (xl = 420px)",width:"xl"}),e.jsx(s,{name:"custom",label:"Custom (200px)",width:200})]})},Ne={render:r=>e.jsxs(b,{...r,submitter:{submitText:"Save Changes",resetText:"Discard",render:(a,t)=>e.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:t})},children:[e.jsx(s,{name:"title",label:"Title",rules:[{required:!0}]}),e.jsx(ee,{name:"content",label:"Content"})]})},Se={render:r=>e.jsx(b,{...r,submitter:!1,children:e.jsx(s,{name:"search",label:"Search",placeholder:"Type to search..."})})},qe={render:r=>e.jsxs(b,{...r,initialValues:{},onFinish:a=>alert("Success: "+JSON.stringify(a)),children:[e.jsx(s,{name:"username",label:"Username",rules:[{required:!0,message:"Username is required"},{min:3,message:"At least 3 characters"},{max:20,message:"At most 20 characters"}]}),e.jsx(s,{name:"email",label:"Email",rules:[{required:!0,message:"Email is required"},{pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Invalid email"}]}),e.jsx(mr,{name:"password",label:"Password",rules:[{required:!0},{min:8,message:"At least 8 characters"}]}),e.jsx(de,{name:"terms",label:"I accept the terms",rules:[{validator:a=>a?!0:"You must accept the terms"}]})]})},Re={render:r=>{const[a,t]=d.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(D,{color:a===1?"primary":"grey",onClick:()=>t(1),children:"User 1"}),e.jsx(D,{color:a===2?"primary":"grey",onClick:()=>t(2),children:"User 2"})]}),e.jsxs(b,{...r,params:{userId:a},request:async n=>(await new Promise(i=>setTimeout(i,1e3)),{1:{name:"Alice",email:"alice@example.com"},2:{name:"Bob",email:"bob@example.com"}}[n==null?void 0:n.userId]||{}),children:[e.jsx(s,{name:"name",label:"Name"}),e.jsx(s,{name:"email",label:"Email"})]})]})},tags:["!autodocs","dev"]},Ce={render:r=>e.jsxs(b,{...r,initialValues:{hasAccount:!1,accountType:""},children:[e.jsx(W,{name:"hasAccount",label:"Has Account"}),e.jsx(ir,{name:["hasAccount"],children:({hasAccount:a})=>a?e.jsxs(e.Fragment,{children:[e.jsx(s,{name:"accountId",label:"Account ID",rules:[{required:!0}]}),e.jsx(s,{name:"accountName",label:"Account Name"})]}):null})]})},ke={render:r=>e.jsx(b,{...r,initialValues:{members:[{name:"Alice",role:"Admin"},{name:"Bob",role:"Member"}]},onFinish:a=>alert(JSON.stringify(a,null,2)),children:e.jsx(fe,{name:"members",label:"Team Members",min:1,max:5,children:a=>a.map(({name:t,key:n})=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-end"},children:[e.jsx(s,{name:`${t}.name`,label:"Name",placeholder:"Name"}),e.jsx(s,{name:`${t}.role`,label:"Role",placeholder:"Role"})]},n))})})},Ae={render:r=>e.jsxs(Vt,{...r,title:"Create User",trigger:e.jsx(D,{color:"primary",children:"Open Modal Form"}),onFinish:async a=>{alert(JSON.stringify(a,null,2))},children:[e.jsx(s,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(s,{name:"email",label:"Email",rules:[{required:!0}]}),e.jsx(W,{name:"active",label:"Active"})]})},Oe={render:r=>e.jsxs(Nr,{...r,title:"Create User",trigger:e.jsx(D,{color:"primary",children:"Open Drawer Form"}),onFinish:async a=>{alert(JSON.stringify(a,null,2))},children:[e.jsx(s,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(s,{name:"email",label:"Email",rules:[{required:!0}]}),e.jsx(ee,{name:"bio",label:"Bio"}),e.jsx(W,{name:"active",label:"Active"})]})},Ve={render:r=>{const[a,t]=d.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(D,{color:"primary",onClick:()=>t(!0),children:"Open (Controlled)"}),e.jsx(D,{color:"secondary",onClick:()=>t(!1),children:"Close"}),e.jsxs(Nr,{...r,open:a,onOpenChange:t,title:"Edit Profile",width:520,initialValues:{name:"Alice",role:"Admin"},onFinish:async n=>{alert(JSON.stringify(n,null,2))},children:[e.jsx(s,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(s,{name:"role",label:"Role"})]})]})},tags:["!autodocs","dev"]},Ee={render:r=>e.jsxs(Nr,{...r,title:"Settings",placement:"left",width:400,trigger:e.jsx(D,{color:"secondary",children:"Open from Left"}),onFinish:async a=>{alert(JSON.stringify(a,null,2))},children:[e.jsx(s,{name:"theme",label:"Theme",placeholder:"dark / light"}),e.jsx(s,{name:"language",label:"Language",placeholder:"en / zh"}),e.jsx(W,{name:"notifications",label:"Enable Notifications"})]})},Ie={render:r=>e.jsxs(b,{...r,initialValues:{gender:"male",plan:"pro"},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsx(ye,{name:"gender",label:"Gender",fieldProps:{options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}]}}),e.jsx(ye,{name:"plan",label:"Plan",fieldProps:{direction:"horizontal",options:[{label:"Free",value:"free"},{label:"Pro",value:"pro"},{label:"Enterprise",value:"enterprise"}]}})]})},De={render:r=>e.jsxs(b,{...r,initialValues:{volume:50,price:200},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsx(sr,{name:"volume",label:"Volume",fieldProps:{min:0,max:100,step:1}}),e.jsx(sr,{name:"price",label:"Price",fieldProps:{min:0,max:1e3,step:10,valuePrefix:"$"}})]})},Be={render:r=>e.jsxs(b,{...r,initialValues:{birthday:null,startDate:null},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsx(or,{name:"birthday",label:"Birthday",fieldProps:{dateFormat:"yy-mm-dd",showIcon:!0}}),e.jsx(or,{name:"startDate",label:"Start Date",fieldProps:{dateFormat:"mm/dd/yy",showButtonBar:!0}})]})},Le={render:r=>e.jsxs(b,{...r,grid:!0,rowProps:{gutter:16},initialValues:{name:"",email:"",bio:"",newsletter:!1,darkMode:!0,items:[{title:"Item 1"}]},submitter:{submitText:"Create",resetText:"Clear All"},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsx(s,{name:"name",label:"Full Name",colProps:{span:12},rules:[{required:!0}]}),e.jsx(s,{name:"email",label:"Email",colProps:{span:12},rules:[{required:!0}]}),e.jsx(ee,{name:"bio",label:"Biography",colProps:{span:24}}),e.jsx(de,{name:"newsletter",label:"Subscribe to newsletter",colProps:{span:12}}),e.jsx(W,{name:"darkMode",label:"Dark Mode",colProps:{span:12}}),e.jsx(ir,{name:["newsletter"],children:({newsletter:a})=>a?e.jsx(s,{name:"frequency",label:"Email Frequency",placeholder:"daily / weekly / monthly",colProps:{span:24}}):null})]}),tags:["!autodocs","dev"]},Me={render:r=>e.jsx(b,{...r,onFinish:a=>{const t=a.attachment;alert(t?`Selected: ${Array.from(t).map(n=>n.name).join(", ")}`:"No file")},children:e.jsx(wr,{name:"attachment",label:"Attachment",fieldProps:{accept:".pdf,.png,.jpg",multiple:!0,buttonLabel:"Choose Files"}})})},Je={render:r=>e.jsxs(b,{...r,grid:!0,rowProps:{gutter:16},initialValues:{},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsx(s,{name:"firstName",label:"First Name",colProps:{span:12,sm:12,md:8,lg:6}}),e.jsx(s,{name:"lastName",label:"Last Name",colProps:{span:12,sm:12,md:8,lg:6}}),e.jsx(s,{name:"email",label:"Email",colProps:{span:24,sm:24,md:8,lg:6}}),e.jsx(s,{name:"phone",label:"Phone",colProps:{span:24,sm:12,md:12,lg:6}}),e.jsx(ee,{name:"address",label:"Address",colProps:{span:24}})]})},Ue={render:r=>e.jsxs(b,{...r,mode:"edit",initialValues:{name:"",email:""},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsx(s,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(s,{name:"email",label:"Email"})]})},Ge={render:r=>e.jsxs(b,{...r,mode:"read",initialValues:{name:"Alice",email:"alice@example.com",active:!0},children:[e.jsx(s,{name:"name",label:"Name"}),e.jsx(s,{name:"email",label:"Email"}),e.jsx(W,{name:"active",label:"Active"})]})},$e={render:r=>e.jsxs(b,{...r,mode:"update",initialValues:{id:"USR-001",name:"Alice",email:"alice@example.com"},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsx(s,{name:"id",label:"ID",mode:"read"}),e.jsx(s,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(s,{name:"email",label:"Email"})]})},_e={render:r=>e.jsxs(b,{...r,omitNil:!0,initialValues:{name:"",email:"",note:null},onFinish:a=>{alert(`Nil values stripped:
`+JSON.stringify(a,null,2))},children:[e.jsx(s,{name:"name",label:"Name (leave empty to omit)"}),e.jsx(s,{name:"email",label:"Email (leave empty to omit)"}),e.jsx(s,{name:"note",label:"Note (null → omitted)"})]})},ze={render:r=>e.jsxs(b,{...r,onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsx(le,{name:"status",label:"Status",valueEnum:{active:"Active",inactive:"Inactive",pending:{text:"Pending",disabled:!0}}}),e.jsx(ye,{name:"role",label:"Role",valueEnum:{admin:"Admin",editor:"Editor",viewer:"Viewer"}})]})},We={render:r=>e.jsxs(b,{...r,initialValues:{country:"",city:""},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsx(le,{name:"country",label:"Country",valueEnum:{us:"United States",cn:"China",jp:"Japan"}}),e.jsx(le,{name:"city",label:"City (auto-loads based on Country)",dependencies:["country"],request:async a=>(await new Promise(n=>setTimeout(n,500)),{us:[{label:"New York",value:"ny"},{label:"Los Angeles",value:"la"}],cn:[{label:"Beijing",value:"bj"},{label:"Shanghai",value:"sh"}],jp:[{label:"Tokyo",value:"tk"},{label:"Osaka",value:"os"}]}[a==null?void 0:a.country]??[])})]})},Ke={render:r=>e.jsx(b,{...r,onFinish:a=>alert(JSON.stringify(a,null,2)),children:e.jsx(le,{name:"user",label:"User (async loaded)",request:async()=>(await new Promise(a=>setTimeout(a,800)),[{label:"Alice",value:"alice"},{label:"Bob",value:"bob"},{label:"Charlie",value:"charlie"}])})})},He={render:r=>e.jsxs(b,{...r,onValuesChange:a=>{console.log("onValuesChange (debounced):",a)},children:[e.jsx(s,{name:"search",label:"Search (300ms debounce — check console)",debounceTime:300,placeholder:"Type fast..."}),e.jsx(s,{name:"instant",label:"Instant (no debounce)",placeholder:"Type fast..."})]}),tags:["!autodocs","dev"]},Qe={render:r=>e.jsxs(b,{...r,initialValues:{name:"Alice",bio:"",theme:"light"},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsxs(b.Group,{title:"Basic Info",collapsible:!0,children:[e.jsx(s,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(s,{name:"bio",label:"Bio"})]}),e.jsxs(b.Group,{title:"Preferences",collapsible:!0,defaultCollapsed:!0,children:[e.jsx(s,{name:"theme",label:"Theme"}),e.jsx(W,{name:"notifications",label:"Notifications"})]})]})},Ye={render:r=>e.jsx(b,{...r,onFinish:a=>alert(JSON.stringify(a,null,2)),children:e.jsxs(b.Group,{title:"Contact",extra:e.jsx(D,{color:"secondary",size:"small",children:"Import"}),children:[e.jsx(s,{name:"email",label:"Email"}),e.jsx(s,{name:"phone",label:"Phone"})]})})},Xe={render:r=>e.jsxs(b,{...r,initialValues:{phone:["+1","555-0100"]},onFinish:a=>alert(JSON.stringify(a,null,2)),children:[e.jsxs(b.FieldSet,{name:"phone",label:"Phone Number",gap:8,children:[e.jsx(ue,{placeholder:"Area code",style:{width:80}}),e.jsx(ue,{placeholder:"Number",style:{width:200}})]}),e.jsx(s,{name:"email",label:"Email"})]})},Ze={render:r=>e.jsx(b,{...r,initialValues:{groups:[{title:"Group A",items:[{name:"Item 1"}]}]},onFinish:a=>alert(JSON.stringify(a,null,2)),children:e.jsx(fe,{name:"groups",label:"Groups",children:a=>a.map(({name:t,key:n})=>e.jsxs("div",{style:{border:"1px solid #eee",padding:12,marginBottom:8,borderRadius:4},children:[e.jsx(s,{name:`${t}.title`,label:"Group Title"}),e.jsx(fe,{name:"items",label:"Items",children:o=>o.map(i=>e.jsx(s,{name:`${i.name}.name`,label:"Item Name"},i.key))})]},n))})}),tags:["!autodocs","dev"]},er={render:r=>e.jsx(b,{...r,initialValues:{members:[]},onFinish:a=>alert(JSON.stringify(a,null,2)),children:e.jsx(fe,{name:"members",label:"Team Members",required:!0,requiredMessage:"Add at least one member",children:a=>a.map(({name:t,key:n})=>e.jsx(s,{name:`${t}.name`,label:"Name"},n))})})},rr={render:r=>e.jsxs(It,{...r,syncToUrl:!0,onFinish:a=>{console.log("QueryFilter submit:",a),alert(`Check URL bar — params synced!
`+JSON.stringify(a))},children:[e.jsx(s,{name:"keyword",label:"Keyword",placeholder:"Search..."}),e.jsx(le,{name:"status",label:"Status",valueEnum:{all:"All",active:"Active",inactive:"Inactive"}})]}),tags:["!autodocs","dev"]};var Ir,Dr,Br;Pe.parameters={...Pe.parameters,docs:{...(Ir=Pe.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    username: '',
    email: ''
  }} onFinish={values => {
    args.onFinish?.(values);
    alert(JSON.stringify(values, null, 2));
  }}>
      <ProFormText name="username" label="Username" placeholder="Enter username" rules={[{
      required: true,
      message: 'Username is required'
    }]} />
      <ProFormText name="email" label="Email" placeholder="Enter email" rules={[{
      required: true
    }, {
      type: 'email',
      message: 'Invalid email'
    }]} />
    </ProForm>
}`,...(Br=(Dr=Pe.parameters)==null?void 0:Dr.docs)==null?void 0:Br.source}}};var Lr,Mr,Jr;xe.parameters={...xe.parameters,docs:{...(Lr=xe.parameters)==null?void 0:Lr.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    text: 'Hello',
    password: 'secret123',
    textarea: 'Multi-line\\ncontent',
    agree: true,
    options: [],
    darkMode: false,
    role: 'admin',
    volume: 60,
    date: null
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormText name="text" label="Text Input" placeholder="Type here..." />
      <ProFormPassword name="password" label="Password" placeholder="Password" />
      <ProFormTextArea name="textarea" label="Text Area" placeholder="Enter long text" />
      <ProFormCheckbox name="agree" label="I agree to the terms" />
      <ProFormCheckboxGroup name="options" label="Pick options" fieldProps={{
      options: [{
        label: 'Option A',
        value: 'a'
      }, {
        label: 'Option B',
        value: 'b'
      }, {
        label: 'Option C',
        value: 'c'
      }]
    }} />
      <ProFormSwitch name="darkMode" label="Dark Mode" />
      <ProFormRadioGroup name="role" label="Role" fieldProps={{
      direction: 'horizontal',
      options: [{
        label: 'Admin',
        value: 'admin'
      }, {
        label: 'Editor',
        value: 'editor'
      }, {
        label: 'Viewer',
        value: 'viewer'
      }]
    }} />
      <ProFormSlider name="volume" label="Volume" fieldProps={{
      min: 0,
      max: 100
    }} />
      <ProFormDatePicker name="date" label="Date" fieldProps={{
      dateFormat: 'yy-mm-dd'
    }} />
    </ProForm>
}`,...(Jr=(Mr=xe.parameters)==null?void 0:Mr.docs)==null?void 0:Jr.source}}};var Ur,Gr,$r;ve.parameters={...ve.parameters,docs:{...(Ur=ve.parameters)==null?void 0:Ur.docs,source:{originalSource:`{
  args: {
    readonly: true
  },
  render: args => <ProForm {...args} initialValues={{
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Software engineer with 10 years of experience.',
    newsletter: true,
    active: true
  }}>
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
      <ProFormTextArea name="bio" label="Bio" />
      <ProFormCheckbox name="newsletter" label="Newsletter" />
      <ProFormSwitch name="active" label="Active" />
    </ProForm>
}`,...($r=(Gr=ve.parameters)==null?void 0:Gr.docs)==null?void 0:$r.source}}};var _r,zr,Wr;we.parameters={...we.parameters,docs:{...(_r=we.parameters)==null?void 0:_r.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <ProForm {...args} initialValues={{
    name: 'Loading...'
  }}>
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
    </ProForm>
}`,...(Wr=(zr=we.parameters)==null?void 0:zr.docs)==null?void 0:Wr.source}}};var Kr,Hr,Qr;je.parameters={...je.parameters,docs:{...(Kr=je.parameters)==null?void 0:Kr.docs,source:{originalSource:`{
  args: {
    grid: true
  },
  render: args => <ProForm {...args} rowProps={{
    gutter: 16
  }} initialValues={{}}>
      <ProFormText name="firstName" label="First Name" colProps={{
      span: 12
    }} />
      <ProFormText name="lastName" label="Last Name" colProps={{
      span: 12
    }} />
      <ProFormText name="email" label="Email" colProps={{
      span: 12
    }} />
      <ProFormText name="phone" label="Phone" colProps={{
      span: 12
    }} />
      <ProFormTextArea name="address" label="Address" colProps={{
      span: 24
    }} />
    </ProForm>
}`,...(Qr=(Hr=je.parameters)==null?void 0:Hr.docs)==null?void 0:Qr.source}}};var Yr,Xr,Zr;Te.parameters={...Te.parameters,docs:{...(Yr=Te.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
  render: args => <ProForm {...args}>
      <ProFormText name="sm" label="Small (sm = 160px)" width="sm" />
      <ProFormText name="md" label="Medium (md = 240px)" width="md" />
      <ProFormText name="lg" label="Large (lg = 320px)" width="lg" />
      <ProFormText name="xl" label="XL (xl = 420px)" width="xl" />
      <ProFormText name="custom" label="Custom (200px)" width={200} />
    </ProForm>
}`,...(Zr=(Xr=Te.parameters)==null?void 0:Xr.docs)==null?void 0:Zr.source}}};var ea,ra,aa;Ne.parameters={...Ne.parameters,docs:{...(ea=Ne.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  render: args => <ProForm {...args} submitter={{
    submitText: 'Save Changes',
    resetText: 'Discard',
    render: (props, dom) => <div style={{
      display: 'flex',
      gap: 8,
      justifyContent: 'center'
    }}>
            {dom}
          </div>
  }}>
      <ProFormText name="title" label="Title" rules={[{
      required: true
    }]} />
      <ProFormTextArea name="content" label="Content" />
    </ProForm>
}`,...(aa=(ra=Ne.parameters)==null?void 0:ra.docs)==null?void 0:aa.source}}};var na,ta,sa;Se.parameters={...Se.parameters,docs:{...(na=Se.parameters)==null?void 0:na.docs,source:{originalSource:`{
  render: args => <ProForm {...args} submitter={false}>
      <ProFormText name="search" label="Search" placeholder="Type to search..." />
    </ProForm>
}`,...(sa=(ta=Se.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};var oa,la,ia;qe.parameters={...qe.parameters,docs:{...(oa=qe.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{}} onFinish={values => alert('Success: ' + JSON.stringify(values))}>
      <ProFormText name="username" label="Username" rules={[{
      required: true,
      message: 'Username is required'
    }, {
      min: 3,
      message: 'At least 3 characters'
    }, {
      max: 20,
      message: 'At most 20 characters'
    }]} />
      <ProFormText name="email" label="Email" rules={[{
      required: true,
      message: 'Email is required'
    }, {
      pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
      message: 'Invalid email'
    }]} />
      <ProFormPassword name="password" label="Password" rules={[{
      required: true
    }, {
      min: 8,
      message: 'At least 8 characters'
    }]} />
      <ProFormCheckbox name="terms" label="I accept the terms" rules={[{
      validator: value => {
        if (!value) return 'You must accept the terms';
        return true;
      }
    }]} />
    </ProForm>
}`,...(ia=(la=qe.parameters)==null?void 0:la.docs)==null?void 0:ia.source}}};var ma,da,ca;Re.parameters={...Re.parameters,docs:{...(ma=Re.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  render: args => {
    const [userId, setUserId] = useState(1);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button color={userId === 1 ? 'primary' : 'grey'} onClick={() => setUserId(1)}>
            User 1
          </Button>
          <Button color={userId === 2 ? 'primary' : 'grey'} onClick={() => setUserId(2)}>
            User 2
          </Button>
        </div>
        <ProForm {...args} params={{
        userId
      }} request={async params => {
        await new Promise(r => setTimeout(r, 1000));
        const data: Record<number, Record<string, unknown>> = {
          1: {
            name: 'Alice',
            email: 'alice@example.com'
          },
          2: {
            name: 'Bob',
            email: 'bob@example.com'
          }
        };
        return data[(params as {
          userId: number;
        })?.userId] || {};
      }}>
          <ProFormText name="name" label="Name" />
          <ProFormText name="email" label="Email" />
        </ProForm>
      </div>;
  },
  tags: ['!autodocs', 'dev']
}`,...(ca=(da=Re.parameters)==null?void 0:da.docs)==null?void 0:ca.source}}};var ua,pa,fa;Ce.parameters={...Ce.parameters,docs:{...(ua=Ce.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    hasAccount: false,
    accountType: ''
  }}>
      <ProFormSwitch name="hasAccount" label="Has Account" />
      <ProFormDependency name={['hasAccount']}>
        {({
        hasAccount
      }) => hasAccount ? <>
              <ProFormText name="accountId" label="Account ID" rules={[{
          required: true
        }]} />
              <ProFormText name="accountName" label="Account Name" />
            </> : null}
      </ProFormDependency>
    </ProForm>
}`,...(fa=(pa=Ce.parameters)==null?void 0:pa.docs)==null?void 0:fa.source}}};var ya,ba,ga;ke.parameters={...ke.parameters,docs:{...(ya=ke.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    members: [{
      name: 'Alice',
      role: 'Admin'
    }, {
      name: 'Bob',
      role: 'Member'
    }]
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormList name="members" label="Team Members" min={1} max={5}>
        {fields => fields.map(({
        name,
        key
      }) => <div key={key} style={{
        display: 'flex',
        gap: 8,
        alignItems: 'flex-end'
      }}>
              <ProFormText name={\`\${name}.name\`} label="Name" placeholder="Name" />
              <ProFormText name={\`\${name}.role\`} label="Role" placeholder="Role" />
            </div>)}
      </ProFormList>
    </ProForm>
}`,...(ga=(ba=ke.parameters)==null?void 0:ba.docs)==null?void 0:ga.source}}};var ha,Fa,Pa;Ae.parameters={...Ae.parameters,docs:{...(ha=Ae.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  render: args => <ModalForm {...args} title="Create User" trigger={<Button color="primary">Open Modal Form</Button>} onFinish={async values => {
    alert(JSON.stringify(values, null, 2));
  }}>
      <ProFormText name="name" label="Name" rules={[{
      required: true
    }]} />
      <ProFormText name="email" label="Email" rules={[{
      required: true
    }]} />
      <ProFormSwitch name="active" label="Active" />
    </ModalForm>
}`,...(Pa=(Fa=Ae.parameters)==null?void 0:Fa.docs)==null?void 0:Pa.source}}};var xa,va,wa;Oe.parameters={...Oe.parameters,docs:{...(xa=Oe.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  render: args => <DrawerForm {...args} title="Create User" trigger={<Button color="primary">Open Drawer Form</Button>} onFinish={async values => {
    alert(JSON.stringify(values, null, 2));
  }}>
      <ProFormText name="name" label="Name" rules={[{
      required: true
    }]} />
      <ProFormText name="email" label="Email" rules={[{
      required: true
    }]} />
      <ProFormTextArea name="bio" label="Bio" />
      <ProFormSwitch name="active" label="Active" />
    </DrawerForm>
}`,...(wa=(va=Oe.parameters)==null?void 0:va.docs)==null?void 0:wa.source}}};var ja,Ta,Na;Ve.parameters={...Ve.parameters,docs:{...(ja=Ve.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div style={{
      display: 'flex',
      gap: 8
    }}>
        <Button color="primary" onClick={() => setOpen(true)}>Open (Controlled)</Button>
        <Button color="secondary" onClick={() => setOpen(false)}>Close</Button>
        <DrawerForm {...args} open={open} onOpenChange={setOpen} title="Edit Profile" width={520} initialValues={{
        name: 'Alice',
        role: 'Admin'
      }} onFinish={async values => {
        alert(JSON.stringify(values, null, 2));
      }}>
          <ProFormText name="name" label="Name" rules={[{
          required: true
        }]} />
          <ProFormText name="role" label="Role" />
        </DrawerForm>
      </div>;
  },
  tags: ['!autodocs', 'dev']
}`,...(Na=(Ta=Ve.parameters)==null?void 0:Ta.docs)==null?void 0:Na.source}}};var Sa,qa,Ra;Ee.parameters={...Ee.parameters,docs:{...(Sa=Ee.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  render: args => <DrawerForm {...args} title="Settings" placement="left" width={400} trigger={<Button color="secondary">Open from Left</Button>} onFinish={async values => {
    alert(JSON.stringify(values, null, 2));
  }}>
      <ProFormText name="theme" label="Theme" placeholder="dark / light" />
      <ProFormText name="language" label="Language" placeholder="en / zh" />
      <ProFormSwitch name="notifications" label="Enable Notifications" />
    </DrawerForm>
}`,...(Ra=(qa=Ee.parameters)==null?void 0:qa.docs)==null?void 0:Ra.source}}};var Ca,ka,Aa;Ie.parameters={...Ie.parameters,docs:{...(Ca=Ie.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    gender: 'male',
    plan: 'pro'
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormRadioGroup name="gender" label="Gender" fieldProps={{
      options: [{
        label: 'Male',
        value: 'male'
      }, {
        label: 'Female',
        value: 'female'
      }, {
        label: 'Other',
        value: 'other'
      }]
    }} />
      <ProFormRadioGroup name="plan" label="Plan" fieldProps={{
      direction: 'horizontal',
      options: [{
        label: 'Free',
        value: 'free'
      }, {
        label: 'Pro',
        value: 'pro'
      }, {
        label: 'Enterprise',
        value: 'enterprise'
      }]
    }} />
    </ProForm>
}`,...(Aa=(ka=Ie.parameters)==null?void 0:ka.docs)==null?void 0:Aa.source}}};var Oa,Va,Ea;De.parameters={...De.parameters,docs:{...(Oa=De.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    volume: 50,
    price: 200
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormSlider name="volume" label="Volume" fieldProps={{
      min: 0,
      max: 100,
      step: 1
    }} />
      <ProFormSlider name="price" label="Price" fieldProps={{
      min: 0,
      max: 1000,
      step: 10,
      valuePrefix: '$'
    }} />
    </ProForm>
}`,...(Ea=(Va=De.parameters)==null?void 0:Va.docs)==null?void 0:Ea.source}}};var Ia,Da,Ba;Be.parameters={...Be.parameters,docs:{...(Ia=Be.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    birthday: null,
    startDate: null
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormDatePicker name="birthday" label="Birthday" fieldProps={{
      dateFormat: 'yy-mm-dd',
      showIcon: true
    }} />
      <ProFormDatePicker name="startDate" label="Start Date" fieldProps={{
      dateFormat: 'mm/dd/yy',
      showButtonBar: true
    }} />
    </ProForm>
}`,...(Ba=(Da=Be.parameters)==null?void 0:Da.docs)==null?void 0:Ba.source}}};var La,Ma,Ja;Le.parameters={...Le.parameters,docs:{...(La=Le.parameters)==null?void 0:La.docs,source:{originalSource:`{
  render: args => <ProForm {...args} grid rowProps={{
    gutter: 16
  }} initialValues={{
    name: '',
    email: '',
    bio: '',
    newsletter: false,
    darkMode: true,
    items: [{
      title: 'Item 1'
    }]
  }} submitter={{
    submitText: 'Create',
    resetText: 'Clear All'
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormText name="name" label="Full Name" colProps={{
      span: 12
    }} rules={[{
      required: true
    }]} />
      <ProFormText name="email" label="Email" colProps={{
      span: 12
    }} rules={[{
      required: true
    }]} />
      <ProFormTextArea name="bio" label="Biography" colProps={{
      span: 24
    }} />
      <ProFormCheckbox name="newsletter" label="Subscribe to newsletter" colProps={{
      span: 12
    }} />
      <ProFormSwitch name="darkMode" label="Dark Mode" colProps={{
      span: 12
    }} />
      <ProFormDependency name={['newsletter']}>
        {({
        newsletter
      }) => newsletter ? <ProFormText name="frequency" label="Email Frequency" placeholder="daily / weekly / monthly" colProps={{
        span: 24
      }} /> : null}
      </ProFormDependency>
    </ProForm>,
  tags: ['!autodocs', 'dev']
}`,...(Ja=(Ma=Le.parameters)==null?void 0:Ma.docs)==null?void 0:Ja.source}}};var Ua,Ga,$a;Me.parameters={...Me.parameters,docs:{...(Ua=Me.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onFinish={values => {
    const files = values.attachment as FileList | null;
    alert(files ? \`Selected: \${Array.from(files).map(f => f.name).join(', ')}\` : 'No file');
  }}>
      <ProFormUpload name="attachment" label="Attachment" fieldProps={{
      accept: '.pdf,.png,.jpg',
      multiple: true,
      buttonLabel: 'Choose Files'
    }} />
    </ProForm>
}`,...($a=(Ga=Me.parameters)==null?void 0:Ga.docs)==null?void 0:$a.source}}};var _a,za,Wa;Je.parameters={...Je.parameters,docs:{...(_a=Je.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  render: args => <ProForm {...args} grid rowProps={{
    gutter: 16
  }} initialValues={{}} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormText name="firstName" label="First Name" colProps={{
      span: 12,
      sm: 12,
      md: 8,
      lg: 6
    }} />
      <ProFormText name="lastName" label="Last Name" colProps={{
      span: 12,
      sm: 12,
      md: 8,
      lg: 6
    }} />
      <ProFormText name="email" label="Email" colProps={{
      span: 24,
      sm: 24,
      md: 8,
      lg: 6
    }} />
      <ProFormText name="phone" label="Phone" colProps={{
      span: 24,
      sm: 12,
      md: 12,
      lg: 6
    }} />
      <ProFormTextArea name="address" label="Address" colProps={{
      span: 24
    }} />
    </ProForm>
}`,...(Wa=(za=Je.parameters)==null?void 0:za.docs)==null?void 0:Wa.source}}};var Ka,Ha,Qa;Ue.parameters={...Ue.parameters,docs:{...(Ka=Ue.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
  render: args => <ProForm {...args} mode="edit" initialValues={{
    name: '',
    email: ''
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormText name="name" label="Name" rules={[{
      required: true
    }]} />
      <ProFormText name="email" label="Email" />
    </ProForm>
}`,...(Qa=(Ha=Ue.parameters)==null?void 0:Ha.docs)==null?void 0:Qa.source}}};var Ya,Xa,Za;Ge.parameters={...Ge.parameters,docs:{...(Ya=Ge.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  render: args => <ProForm {...args} mode="read" initialValues={{
    name: 'Alice',
    email: 'alice@example.com',
    active: true
  }}>
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
      <ProFormSwitch name="active" label="Active" />
    </ProForm>
}`,...(Za=(Xa=Ge.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var en,rn,an;$e.parameters={...$e.parameters,docs:{...(en=$e.parameters)==null?void 0:en.docs,source:{originalSource:`{
  render: args => <ProForm {...args} mode="update" initialValues={{
    id: 'USR-001',
    name: 'Alice',
    email: 'alice@example.com'
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormText name="id" label="ID" mode="read" />
      <ProFormText name="name" label="Name" rules={[{
      required: true
    }]} />
      <ProFormText name="email" label="Email" />
    </ProForm>
}`,...(an=(rn=$e.parameters)==null?void 0:rn.docs)==null?void 0:an.source}}};var nn,tn,sn;_e.parameters={..._e.parameters,docs:{...(nn=_e.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} omitNil initialValues={{
    name: '',
    email: '',
    note: null
  }} onFinish={values => {
    alert('Nil values stripped:\\n' + JSON.stringify(values, null, 2));
  }}>
      <ProFormText name="name" label="Name (leave empty to omit)" />
      <ProFormText name="email" label="Email (leave empty to omit)" />
      <ProFormText name="note" label="Note (null → omitted)" />
    </ProForm>
}`,...(sn=(tn=_e.parameters)==null?void 0:tn.docs)==null?void 0:sn.source}}};var on,ln,mn;ze.parameters={...ze.parameters,docs:{...(on=ze.parameters)==null?void 0:on.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormSelect name="status" label="Status" valueEnum={{
      active: 'Active',
      inactive: 'Inactive',
      pending: {
        text: 'Pending',
        disabled: true
      }
    }} />
      <ProFormRadioGroup name="role" label="Role" valueEnum={{
      admin: 'Admin',
      editor: 'Editor',
      viewer: 'Viewer'
    }} />
    </ProForm>
}`,...(mn=(ln=ze.parameters)==null?void 0:ln.docs)==null?void 0:mn.source}}};var dn,cn,un;We.parameters={...We.parameters,docs:{...(dn=We.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    country: '',
    city: ''
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormSelect name="country" label="Country" valueEnum={{
      us: 'United States',
      cn: 'China',
      jp: 'Japan'
    }} />
      <ProFormSelect name="city" label="City (auto-loads based on Country)" dependencies={['country']} request={async params => {
      await new Promise(r => setTimeout(r, 500));
      const cities: Record<string, Array<{
        label: string;
        value: string;
      }>> = {
        us: [{
          label: 'New York',
          value: 'ny'
        }, {
          label: 'Los Angeles',
          value: 'la'
        }],
        cn: [{
          label: 'Beijing',
          value: 'bj'
        }, {
          label: 'Shanghai',
          value: 'sh'
        }],
        jp: [{
          label: 'Tokyo',
          value: 'tk'
        }, {
          label: 'Osaka',
          value: 'os'
        }]
      };
      return cities[params?.country as string] ?? [];
    }} />
    </ProForm>
}`,...(un=(cn=We.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var pn,fn,yn;Ke.parameters={...Ke.parameters,docs:{...(pn=Ke.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormSelect name="user" label="User (async loaded)" request={async () => {
      await new Promise(r => setTimeout(r, 800));
      return [{
        label: 'Alice',
        value: 'alice'
      }, {
        label: 'Bob',
        value: 'bob'
      }, {
        label: 'Charlie',
        value: 'charlie'
      }];
    }} />
    </ProForm>
}`,...(yn=(fn=Ke.parameters)==null?void 0:fn.docs)==null?void 0:yn.source}}};var bn,gn,hn;He.parameters={...He.parameters,docs:{...(bn=He.parameters)==null?void 0:bn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onValuesChange={changed => {
    console.log('onValuesChange (debounced):', changed);
  }}>
      <ProFormText name="search" label="Search (300ms debounce — check console)" debounceTime={300} placeholder="Type fast..." />
      <ProFormText name="instant" label="Instant (no debounce)" placeholder="Type fast..." />
    </ProForm>,
  tags: ['!autodocs', 'dev']
}`,...(hn=(gn=He.parameters)==null?void 0:gn.docs)==null?void 0:hn.source}}};var Fn,Pn,xn;Qe.parameters={...Qe.parameters,docs:{...(Fn=Qe.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    name: 'Alice',
    bio: '',
    theme: 'light'
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProForm.Group title="Basic Info" collapsible>
        <ProFormText name="name" label="Name" rules={[{
        required: true
      }]} />
        <ProFormText name="bio" label="Bio" />
      </ProForm.Group>
      <ProForm.Group title="Preferences" collapsible defaultCollapsed>
        <ProFormText name="theme" label="Theme" />
        <ProFormSwitch name="notifications" label="Notifications" />
      </ProForm.Group>
    </ProForm>
}`,...(xn=(Pn=Qe.parameters)==null?void 0:Pn.docs)==null?void 0:xn.source}}};var vn,wn,jn;Ye.parameters={...Ye.parameters,docs:{...(vn=Ye.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProForm.Group title="Contact" extra={<Button color="secondary" size="small">Import</Button>}>
        <ProFormText name="email" label="Email" />
        <ProFormText name="phone" label="Phone" />
      </ProForm.Group>
    </ProForm>
}`,...(jn=(wn=Ye.parameters)==null?void 0:wn.docs)==null?void 0:jn.source}}};var Tn,Nn,Sn;Xe.parameters={...Xe.parameters,docs:{...(Tn=Xe.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    phone: ['+1', '555-0100']
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProForm.FieldSet name="phone" label="Phone Number" gap={8}>
        <Input placeholder="Area code" style={{
        width: 80
      }} />
        <Input placeholder="Number" style={{
        width: 200
      }} />
      </ProForm.FieldSet>
      <ProFormText name="email" label="Email" />
    </ProForm>
}`,...(Sn=(Nn=Xe.parameters)==null?void 0:Nn.docs)==null?void 0:Sn.source}}};var qn,Rn,Cn;Ze.parameters={...Ze.parameters,docs:{...(qn=Ze.parameters)==null?void 0:qn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    groups: [{
      title: 'Group A',
      items: [{
        name: 'Item 1'
      }]
    }]
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormList name="groups" label="Groups">
        {fields => fields.map(({
        name,
        key
      }) => <div key={key} style={{
        border: '1px solid #eee',
        padding: 12,
        marginBottom: 8,
        borderRadius: 4
      }}>
              <ProFormText name={\`\${name}.title\`} label="Group Title" />
              <ProFormList name="items" label="Items">
                {subFields => subFields.map(sf => <ProFormText key={sf.key} name={\`\${sf.name}.name\`} label="Item Name" />)}
              </ProFormList>
            </div>)}
      </ProFormList>
    </ProForm>,
  tags: ['!autodocs', 'dev']
}`,...(Cn=(Rn=Ze.parameters)==null?void 0:Rn.docs)==null?void 0:Cn.source}}};var kn,An,On;er.parameters={...er.parameters,docs:{...(kn=er.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    members: []
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormList name="members" label="Team Members" required requiredMessage="Add at least one member">
        {fields => fields.map(({
        name,
        key
      }) => <ProFormText key={key} name={\`\${name}.name\`} label="Name" />)}
      </ProFormList>
    </ProForm>
}`,...(On=(An=er.parameters)==null?void 0:An.docs)==null?void 0:On.source}}};var Vn,En,In;rr.parameters={...rr.parameters,docs:{...(Vn=rr.parameters)==null?void 0:Vn.docs,source:{originalSource:`{
  render: args => <QueryFilter {...args} syncToUrl onFinish={values => {
    console.log('QueryFilter submit:', values);
    alert('Check URL bar — params synced!\\n' + JSON.stringify(values));
  }}>
      <ProFormText name="keyword" label="Keyword" placeholder="Search..." />
      <ProFormSelect name="status" label="Status" valueEnum={{
      all: 'All',
      active: 'Active',
      inactive: 'Inactive'
    }} />
    </QueryFilter>,
  tags: ['!autodocs', 'dev']
}`,...(In=(En=rr.parameters)==null?void 0:En.docs)==null?void 0:In.source}}};const hs=["Default","AllFieldTypes","ReadonlyMode","LoadingState","GridLayout","WidthPresets","CustomSubmitter","NoSubmitter","Validation","AsyncRequest","Dependency","DynamicList","ModalFormStory","DrawerFormStory","DrawerFormControlled","DrawerFormLeft","RadioGroupStory","SliderStory","DatePickerStory","KitchenSink","UploadField","GridResponsive","ModeEdit","ModeRead","ModeUpdate","OmitNil","ValueEnum","FieldDependencies","FieldRequest","DebounceField","GroupCollapsible","GroupWithExtra","FieldSet","NestedList","ListRequired","SyncToUrl"];export{xe as AllFieldTypes,Re as AsyncRequest,Ne as CustomSubmitter,Be as DatePickerStory,He as DebounceField,Pe as Default,Ce as Dependency,Ve as DrawerFormControlled,Ee as DrawerFormLeft,Oe as DrawerFormStory,ke as DynamicList,We as FieldDependencies,Ke as FieldRequest,Xe as FieldSet,je as GridLayout,Je as GridResponsive,Qe as GroupCollapsible,Ye as GroupWithExtra,Le as KitchenSink,er as ListRequired,we as LoadingState,Ae as ModalFormStory,Ue as ModeEdit,Ge as ModeRead,$e as ModeUpdate,Ze as NestedList,Se as NoSubmitter,_e as OmitNil,Ie as RadioGroupStory,ve as ReadonlyMode,De as SliderStory,rr as SyncToUrl,Me as UploadField,qe as Validation,ze as ValueEnum,Te as WidthPresets,hs as __namedExportsOrder,gs as default};
