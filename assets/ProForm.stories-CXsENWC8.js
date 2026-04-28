import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g,R as Y}from"./index-CP2yOfOm.js";import{f as oa}from"./index-DCiaR2iG.js";import{c as oe,j as hr}from"./classnames-h1fAIaEr.js";import{R as ia,C as la}from"./Grid-ZyyVHIg8.js";import{u as _}from"./index-_M0HKnWf.js";import{u as re,a as Br}from"./index-nCcupNJZ.js";import{u as ge,d as Pr,T as mr}from"./Typography-Bwa2MthW.js";import{B as X}from"./Button-DWPp7s9u.js";import{u as Kt}from"./index-CyN509qF.js";import{b as he}from"./Trade-DAVnycnU.js";import{C as ma,a as da}from"./index-Bw4QuP3i.js";import{b as ua}from"./Switch-CQgfAXqU.js";import{S as ca,f as pa,n as fa}from"./Select-EPwx9WwN.js";import{i as ga}from"./RadioGroup-CUDAs0iY.js";import{S as ya}from"./Slider-Cc8clXDu.js";import{C as ba}from"./Calendar-Hsp2tKIk.js";import{U as ha}from"./UploadFileBar-b-G2IOuU.js";import{a as Fa}from"./Drawer-KHVcsQN4.js";import{a as Pa}from"./Dialog-CFOAEvUy.js";import"./Icons-D1aARqJQ.js";/* empty css               */import"./Tag-Cx0VXWml.js";import"./ResizeObserver-DW8-DKQf.js";import"./clipboard-C7s2bcmm.js";import"./iframe-CXoVoaCP.js";import"./Tooltip-DeIhm5fH.js";import"./Spinner-Da-PFThp.js";import"./index-CN0Pk037.js";import"./Skeleton-BbdGRf15.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";import"./Portal-D8KWBNKu.js";function xa(r,n){const s=n.split(".");let a=r;for(const i of s){if(a==null||typeof a!="object")return;a=a[i]}return a}function va(r,n,s){const a=n.split(".");if(a.length===1)return{...r,[n]:s};const i={...r};let t=i;for(let P=0;P<a.length-1;P++){const d=a[P],p=a[P+1],f=/^\d+$/.test(p);(t[d]===void 0||t[d]===null)&&(t[d]=f?[]:{}),Array.isArray(t[d])?t[d]=[...t[d]]:t[d]={...t[d]},t=t[d]}return t[a[a.length-1]]=s,i}function fr(r,n){return n.includes(".")?xa(r,n):r[n]}const wa=(r={})=>{const{initialValues:n={},onFinish:s,onFinishFailed:a,onValuesChange:i,onReset:t,size:P="middle",labelAlign:d="left",disabled:p=!1,colon:f=!0,requiredMark:h=!0,validateTrigger:w="onChange"}=r,[T,j]=g.useState(n),[O,B]=g.useState({}),[L,R]=g.useState({}),[I,o]=g.useState({}),l=_((m,v)=>{j(x=>{const q=m.includes(".")?va(x,m,v):{...x,[m]:v};return i==null||i({[m]:v},q),q}),v!==""&&v!==null&&v!==void 0&&B(x=>{if(!x[m])return x;const q={...x};return delete q[m],q})}),u=_((m,v)=>{B(x=>{if(v===null){if(!x[m])return x;const q={...x};return delete q[m],q}return{...x,[m]:v}})}),b=_((m,v)=>{o(x=>({...x,[m]:v}))}),c=_(m=>I[m]),F=_(m=>{o(v=>{const x={...v};return delete x[m],x})}),$=_((m,v=[],x)=>{const q=x!==void 0?x:fr(T,m);for(const A of v){if(A.required&&(q==null||q==="")){const k=A.message||`${m} is required`;return u(m,k),!1}if(A.min&&typeof q=="string"&&q.length<A.min){const k=A.message||`${m} must be at least ${A.min} characters`;return u(m,k),!1}if(A.max&&typeof q=="string"&&q.length>A.max){const k=A.message||`${m} must be no more than ${A.max} characters`;return u(m,k),!1}if(A.pattern&&typeof q=="string"&&!A.pattern.test(q)){const k=A.message||`${m} format is invalid`;return u(m,k),!1}if(A.validator&&typeof A.validator=="function")try{const k=A.validator(q,T);if(k!==!0)return u(m,typeof k=="string"?k:"Validation failed"),!1}catch(k){const E=k instanceof Error?k.message:"Validation error";return u(m,E),!1}}return O[m]&&u(m,null),!0}),z=_((m=I)=>{let v=!0;return Object.keys(m).forEach(x=>{const q=m[x];$(x,q)||(v=!1)}),v}),U=_(()=>{let m=!1;const v={};return Object.keys(I).forEach(x=>{const q=I[x],A=fr(T,x);for(const k of q){if(k.required&&(A==null||A==="")){v[x]=k.message||`${x} is required`,m=!0;break}if(k.min&&typeof A=="string"&&A.length<k.min){v[x]=k.message||`${x} must be at least ${k.min} characters`,m=!0;break}if(k.max&&typeof A=="string"&&A.length>k.max){v[x]=k.message||`${x} must be no more than ${k.max} characters`,m=!0;break}if(k.pattern&&typeof A=="string"&&!k.pattern.test(A)){v[x]=k.message||`${x} format is invalid`,m=!0;break}if(k.validator&&typeof k.validator=="function")try{const E=k.validator(A,T);if(E!==!0){v[x]=typeof E=="string"?E:"Validation failed",m=!0;break}}catch(E){v[x]=E instanceof Error?E.message:"Validation error",m=!0;break}}}),B(v),m?(a==null||a({values:T,errors:v}),{success:!1,errors:v}):(s==null||s(T),{success:!0,values:T})}),N=re(m=>(m==null||m.preventDefault(),U())),S=_(()=>{j(n),B({}),R({}),t==null||t()}),V=re(m=>{m==null||m.preventDefault(),S()}),H=_(m=>fr(T,m)),G=_(()=>T),J=_(m=>{j(v=>{const x={...v,...m};return i==null||i(m,x),x})}),Z=g.useMemo(()=>({submit:U,resetFields:S,getFieldValue:H,getFieldsValue:G,setFieldsValue:J,setFieldValue:l,validateFields:z}),[U,S,H,G,J,l,z]),D=g.useMemo(()=>({values:T,errors:O,touched:L,formInstance:Z,setFieldValue:l,setFieldError:u,validateField:$,registerField:b,unregisterField:F,size:P,labelAlign:d,disabled:p,colon:f,requiredMark:h,validateTrigger:w}),[T,O,L,Z,l,u,$,b,F,P,d,p,f,h,w]);return{values:T,errors:O,touched:L,fieldRules:I,getFieldRules:c,setFieldValue:l,setFieldError:u,setFieldsValue:J,getFieldValue:H,getFieldsValue:G,validateField:$,validateFields:z,registerField:b,unregisterField:F,handleSubmit:N,handleReset:V,resetFields:S,formInstance:Z,coreContextShape:D}};function gr(r,n){if(!n.includes("."))return r[n];const s=n.split(".");let a=r;for(const i of s){if(a==null||typeof a!="object")return;a=a[i]}return a}const Wt=(r={})=>{const{onFinish:n,onFinishFailed:s,onReset:a,validateTrigger:i="onChange"}=r,t=wa(r),[P,d]=ge({}),[p,f]=g.useState({}),h=g.useMemo(()=>({...t.touched,...p}),[t.touched,p]),w=_(async(o,l,u)=>{if(!u||u.length===0)return{isValid:!0,error:null};d(b=>({...b,[o]:!0}));try{for(const b of u){if(b.required&&(l==null||l==="")){const c=b.message||`${o} is required`;return t.setFieldError(o,c),{isValid:!1,error:c}}if(b.min&&typeof l=="string"&&l.length<b.min){const c=b.message||`${o} must be at least ${b.min} characters`;return t.setFieldError(o,c),{isValid:!1,error:c}}if(b.max&&typeof l=="string"&&l.length>b.max){const c=b.message||`${o} must be no more than ${b.max} characters`;return t.setFieldError(o,c),{isValid:!1,error:c}}if(b.pattern&&typeof l=="string"&&!b.pattern.test(l)){const c=b.message||`${o} format is invalid`;return t.setFieldError(o,c),{isValid:!1,error:c}}if(b.enum&&Array.isArray(b.enum)&&l&&!b.enum.includes(l)){const c=b.message||`${o} must be one of ${b.enum.join(", ")}`;return t.setFieldError(o,c),{isValid:!1,error:c}}if(b.type==="number"&&l!==void 0&&l!==null&&l!==""&&(typeof l!="number"||isNaN(l))){const c=b.message||`${o} must be a number`;return t.setFieldError(o,c),{isValid:!1,error:c}}if(b.type==="email"&&l&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(l))){const F=b.message||`${o} must be a valid email`;return t.setFieldError(o,F),{isValid:!1,error:F}}if(b.type==="url"&&l)try{new URL(String(l))}catch{const c=b.message||`${o} must be a valid URL`;return t.setFieldError(o,c),{isValid:!1,error:c}}if(b.validator&&typeof b.validator=="function")try{const c=await Promise.resolve(b.validator(l,t.values));if(c!==!0&&c!==void 0){const F=typeof c=="string"?c:"Validation failed";return t.setFieldError(o,F),{isValid:!1,error:F}}}catch(c){const F=c instanceof Error?c.message:"Validation error";return t.setFieldError(o,F),{isValid:!1,error:F}}}return t.errors[o]&&t.setFieldError(o,null),{isValid:!0,error:null}}finally{d(b=>{const c={...b};return delete c[o],c})}}),T=re(async o=>{f(u=>({...u,[o]:!0}));const l=t.fieldRules[o];l&&i==="onBlur"&&await w(o,gr(t.values,o),l)}),j=_(async o=>{const l=o||Object.keys(t.fieldRules);let u=!1;const b={},c=l.map(async F=>{const $=t.fieldRules[F];if($){const{isValid:z,error:U}=await w(F,gr(t.values,F),$);!z&&U&&(u=!0,b[F]=U)}});if(await Promise.all(c),u){const F=new Error("Validation failed");throw F.values=t.values,F.errors=b,F}return o?o.reduce((F,$)=>(F[$]=gr(t.values,$),F),{}):t.values}),O=g.useCallback((o,l={})=>{const{rules:u=[]}=l,b=g.memo(({children:c,render:F,...$})=>{const z=t.values[o]??"",U=t.errors[o],N=h[o],S=P[o];g.useEffect(()=>(!t.getFieldRules(o)&&u.length>0&&t.registerField(o,u),()=>{t.unregisterField(o)}),[]);const V=re(D=>{t.setFieldValue(o,D),i==="onChange"&&t.validateField(o,u,D)}),H=re(()=>{T(o)}),G={name:o,value:z,error:U,touched:N,validating:S,onChange:V,onBlur:H,...$},J=D=>{var v;const m=D&&typeof D=="object"&&"target"in D?D.target.value:D;V(m),Y.isValidElement(c)&&((v=c.props)!=null&&v.onChange)&&c.props.onChange(m)},Z=()=>{var D;H(),Y.isValidElement(c)&&((D=c.props)!=null&&D.onBlur)&&c.props.onBlur()};if(F&&typeof F=="function")return F(G);if(typeof c=="function")return c(G);if(Y.isValidElement(c)){const D={...G,onChange:J,onBlur:Z};return Y.cloneElement(c,D)}return Array.isArray(c)?Y.createElement(g.Fragment,null,...c.map((D,m)=>{if(Y.isValidElement(D)){const v={...G,key:D.key||m,onChange:J,onBlur:Z};return Y.cloneElement(D,v)}return D})):null});return b.displayName=`Field(${o})`,b},[t,h,P,i,T]),B=re(async o=>{o==null||o.preventDefault();try{const l=await j();n==null||n(l)}catch(l){const u=l;s==null||s({values:u.values,errors:u.errors})}}),L=re(o=>{o==null||o.preventDefault(),t.resetFields(),f({}),d({}),a==null||a()}),R=g.useMemo(()=>({...t.formInstance,validateFields:j,setFieldValue:t.setFieldValue,getFieldError:o=>t.errors[o],getFieldsError:o=>{if(!o)return t.errors;const l={};return o.forEach(u=>{t.errors[u]&&(l[u]=t.errors[u])}),l},isFieldTouched:o=>h[o]||!1,isFieldsTouched:(o,l=!1)=>o?l?o.every(u=>h[u]):o.some(u=>h[u]):Object.keys(h).some(u=>h[u]),isFieldValidating:o=>P[o]||!1,setFieldError:t.setFieldError,setFieldsError:o=>{Object.entries(o).forEach(([l,u])=>{t.setFieldError(l,u)})},setFieldTouched:(o,l=!0)=>{f(u=>({...u,[o]:l}))},setFieldsTouched:o=>{f(l=>({...l,...o}))},resetFields:o=>{if(!o)t.resetFields(),f({}),d({});else{const l={};o.forEach(u=>{l[u]=(r.initialValues??{})[u]}),t.setFieldsValue(l),f(u=>{const b={...u};return o.forEach(c=>{delete b[c]}),b}),d(u=>{const b={...u};return o.forEach(c=>{delete b[c]}),b}),o.forEach(u=>{t.setFieldError(u,null)})}},submit:async o=>{try{const l=await j();return o&&await o(l),l}catch{return}},defineField:O,registerField:t.registerField,unregisterField:t.unregisterField}),[t,h,P,j,O,r.initialValues,d]),I=g.useMemo(()=>({values:t.values,errors:t.errors,touched:h,validating:P,fieldRules:t.fieldRules,setFieldValue:t.setFieldValue,setFieldError:t.setFieldError,validateField:t.validateField,validateFieldAsync:w,registerField:t.registerField,unregisterField:t.unregisterField,handleSubmit:B,handleReset:L}),[t.values,t.errors,h,P,t.fieldRules,t.setFieldValue,t.setFieldError,t.validateField,w,t.registerField,t.unregisterField,B,L]);return{formInstance:R,internals:I}},xr=g.createContext(null);xr.displayName="ProFormContext";const me=()=>{const r=g.useContext(xr);if(!r)throw new Error("useProFormContext must be used within a <ProForm> component");return r},Ht=()=>me().formInstance,vr=g.createContext({});vr.displayName="FormListContext";const Qt=()=>g.useContext(vr),de="proform",Dr={sm:160,md:240,lg:320,xl:420},Ta=24,Yt="md",Zt="default",le={submit:"Submit",reset:"Reset",search:"Search",add:"Add",delete:"Delete",copy:"Copy",collapse:"Collapse",expand:"Expand"},Mr=oe(`${de}-submitter`),wr=r=>{const{submitText:n=le.submit,resetText:s=le.reset,render:a,onSubmit:i,onReset:t,submitButtonProps:P,resetButtonProps:d,loading:p=!1}=r,f=Ht(),h=_(async()=>{i==null||i(),await f.submitForm()}),w=_(()=>{t==null||t(),f.resetFields()}),T=g.useMemo(()=>e.jsx(X,{type:"button",color:"secondary",...d,onClick:w,children:s},"reset"),[s,d,w]),j=g.useMemo(()=>e.jsx(X,{type:"submit",color:"primary",loading:p,...P,children:n},"submit"),[n,P,p]),O=[T,j];return a?e.jsx("div",{className:Mr(),children:a({form:f,submit:h,reset:w},O)}):e.jsxs("div",{className:Mr(),children:[T,j]})};wr.displayName="Submitter";const Xt=g.memo(wr);wr.__docgenInfo={description:"",methods:[],displayName:"Submitter",props:{submitText:{required:!1,tsType:{name:"ReactNode"},description:""},resetText:{required:!1,tsType:{name:"ReactNode"},description:""},render:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  props: { form: ProFormFormInstance; submit: () => void; reset: () => void },
  dom: ReactElement[],
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ form: ProFormFormInstance; submit: () => void; reset: () => void }",signature:{properties:[{key:"form",value:{name:"ProFormFormInstance",required:!0}},{key:"submit",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"reset",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},name:"props"},{type:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},name:"dom"}],return:{name:"ReactNode"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitButtonProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"},description:""},resetButtonProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};function ur(r){return r==null?String(r):typeof r!="object"?JSON.stringify(r):Array.isArray(r)?"["+r.map(ur).join(",")+"]":"{"+Object.keys(r).sort().map(s=>JSON.stringify(s)+":"+ur(r[s])).join(",")+"}"}function we(r){return r==null||r===""?"-":String(r)}function ea(r){return r==null?"-":r?"Yes":"No"}function ja(r){if(r==null||r==="")return"-";if(typeof r=="number")return String(r);const n=Number(r);return Number.isNaN(n)?"-":String(n)}function Fe(r,n){const s=n.split(".");let a=r;for(const i of s){if(a==null||typeof a!="object")return;a=a[i]}return a}function Sa(r){return typeof r=="number"?r:Dr[r]??Dr.md}function Lr(r){if(r===!1||r===void 0)return{disabled:!1,rest:{}};const{disabled:n=!1,...s}=r;return{disabled:n,rest:s}}function dr(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)}function Ra(r,n){const s=Object.keys(n);if(s.length===0)return r;const a={...r};return s.sort().forEach(i=>{const t=n[i];if(typeof t!="function")return;const P=Fe(a,i),d=t(P,i,a);if(dr(d)){const p=i.lastIndexOf(".");if(p===-1)delete a[i],Object.assign(a,d);else{const f=i.slice(0,p),h=Fe(a,f);if(dr(h)){const w=i.slice(p+1);delete h[w],Object.assign(h,d)}}}else{const p=i.split(".");if(p.length===1)a[i]=d;else{let f=a;for(let h=0;h<p.length-1;h++){const w=p[h];!dr(f[w])&&!Array.isArray(f[w])&&(f[w]={}),f=f[w]}f[p[p.length-1]]=d}}}),a}function ra(r){const n={};for(const s of Object.keys(r)){const a=r[s];if(!(a==null||a===""))if(dr(a)){const i=ra(a);Object.keys(i).length>0&&(n[s]=i)}else n[s]=a}return n}function na(r){return Object.entries(r).map(([n,s])=>typeof s=="string"?{label:s,value:n}:{label:s.text,value:n,disabled:s.disabled})}const Na=oe(de),qa=oe("form"),Tr=r=>{const{children:n,className:s,submitter:a,readonly:i=!1,mode:t,grid:P=!1,colProps:d,rowProps:p,loading:f=!1,request:h,params:w,initialValues:T,onFinish:j,onFinishFailed:O,onValuesChange:B,onReset:L,formRef:R,omitNil:I=!0,size:o="middle",labelAlign:l="left",disabled:u=!1,colon:b=!0,requiredMark:c=!0,validateTrigger:F="onChange",prefixCls:$,...z}=r,U=t??(i?"read":"edit"),[N,S]=ge(!1),[V,H]=ge(!1),G=f||N||V,J=g.useRef({}),Z=_((W,te)=>{J.current[W]=te}),D=_(W=>{delete J.current[W]}),m=Br(j),v=_(W=>{let te=Ra(W,J.current);return I&&(te=ra(te)),te}),{formInstance:x,internals:q}=Wt({initialValues:T,onValuesChange:B,onReset:L,size:o,labelAlign:l,disabled:u||G,colon:b,requiredMark:c,validateTrigger:F}),A=re(async W=>{var te;W==null||W.preventDefault(),H(!0);try{const ue=await x.validateFields(),je=v(ue);await((te=m.current)==null?void 0:te.call(m,je))}catch(ue){const je=ue;O==null||O({values:je.values,errors:je.errors})}finally{H(!1)}}),k=g.useMemo(()=>({...x,getFieldsFormatValue:()=>v(x.getFieldsValue()),validateFieldsReturnFormatValue:async()=>{try{const W=await x.validateFields();return{success:!0,values:v(W)}}catch{return{success:!1}}},submitForm:A}),[x,v,A]);g.useEffect(()=>{R&&(R.current=k)});const E=Br(h),M=g.useMemo(()=>ur(w),[w]);g.useEffect(()=>{const W=async()=>{const te=E.current;if(te){S(!0);try{const ue=await te(w);ue&&typeof ue=="object"&&x.setFieldsValue(ue)}finally{S(!1)}}};E.current&&W()},[M,w,E,S,x]);const K=g.useMemo(()=>({values:q.values,errors:q.errors,touched:q.touched,validating:q.validating,formInstance:k,setFieldValue:q.setFieldValue,setFieldError:q.setFieldError,validateField:q.validateField,validateFieldAsync:q.validateFieldAsync,registerField:q.registerField,unregisterField:q.unregisterField,size:o,labelAlign:l,disabled:u||G,colon:b,requiredMark:c,validateTrigger:F,readonly:i,mode:U,grid:P,colProps:d??{span:24},registerTransform:Z,unregisterTransform:D}),[q,k,o,l,u,G,b,c,F,i,U,P,d,Z,D]),ee=P?ia:g.Fragment,Q=P?{...p}:{},ne=a!==!1&&U!=="read"?e.jsx(Xt,{...typeof a=="object"?a:{},loading:G}):null;return e.jsx(xr.Provider,{value:K,children:e.jsxs("form",{...z,className:qa(void 0,hr(Na(),s)),onSubmit:A,onReset:q.handleReset,children:[e.jsx(ee,{...Q,children:n}),ne]})})};Tr.displayName="ProForm";const cr=g.memo(Tr);Tr.__docgenInfo={description:"",methods:[],displayName:"ProForm",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},initialValues:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"void"}}},description:""},onFinishFailed:{required:!1,tsType:{name:"signature",type:"function",raw:`(errorInfo: {
  values: Record<string, unknown>;
  errors: Record<string, string>;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  values: Record<string, unknown>;
  errors: Record<string, string>;
}`,signature:{properties:[{key:"values",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!0}},{key:"errors",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}}]}},name:"errorInfo"}],return:{name:"void"}}},description:""},onValuesChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  changedValues: Record<string, unknown>,
  allValues: Record<string, unknown>,
) => void`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"changedValues"},{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"allValues"}],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof FORM_SIZES)[number]"},description:""},labelAlign:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LABEL_ALIGNS)[number]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},colon:{required:!1,tsType:{name:"boolean"},description:""},requiredMark:{required:!1,tsType:{name:"boolean"},description:""},validateTrigger:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof VALIDATE_TRIGGERS)[number]"},description:""},submitter:{required:!1,tsType:{name:"union",raw:"SubmitterProps | false",elements:[{name:"SubmitterProps"},{name:"literal",value:"false"}]},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use `mode='read'` instead"},mode:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROFORM_MODES)[number]"},description:""},grid:{required:!1,tsType:{name:"boolean"},description:""},colProps:{required:!1,tsType:{name:"ProFormColProps"},description:""},rowProps:{required:!1,tsType:{name:"Partial",elements:[{name:"GridRowProps"}],raw:"Partial<GridRowProps>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},request:{required:!1,tsType:{name:"signature",type:"function",raw:"(params?: unknown) => Promise<Record<string, unknown>>",signature:{arguments:[{type:{name:"unknown"},name:"params"}],return:{name:"Promise",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Promise<Record<string, unknown>>"}}},description:""},params:{required:!1,tsType:{name:"unknown"},description:""},formRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"ProFormFormInstance | undefined",elements:[{name:"ProFormFormInstance"},{name:"undefined"}]}],raw:"MutableRefObject<ProFormFormInstance | undefined>"},description:""},omitNil:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const ka="lg",Ea="default",Ca="sm",Aa="danger",Va="md",Oa="default-tertiary",Ia="sm",Ba="default-tertiary",Da=["Input","InputNumber","InputPassword","InputTextArea","InputSearch","InputOTP","InputTrade","InputAmount","InputMask","Select","BaseSelect","DatePicker","TimePicker","Calendar","Checkbox","CheckboxGroup","Radio","RadioGroup","Switch","Slider","TextArea"];function _r(r,n){const s=n.split(".");let a=r;for(const i of s){if(a==null||typeof a!="object")return;a=a[i]}return a}function Ma(r){const{name:n,rules:s=[],required:a,validateStatus:i}=r,t=me(),{values:P,errors:d,validating:p,setFieldValue:f,validateField:h,validateFieldAsync:w,registerField:T,unregisterField:j,size:O,labelAlign:B,requiredMark:L,validateTrigger:R}=t,I=!!(a||s.some(N=>N.required)),o=n?n.includes(".")?_r(P,n):P[n]:void 0,l=n?n.includes(".")?_r(d,n):d[n]:void 0,u=n&&p[n]||!1,b=i||(l?"error":void 0),c=re(N=>n&&s.length>0?h(n,s,N):!0),F=re(async N=>{n&&s.length>0&&await w(n,N,s)}),$=re(N=>{n&&(f(n,N),R==="onChange"&&c(N))}),z=re(()=>{R==="onBlur"&&F(o)});return g.useEffect(()=>(n&&T&&T(n,s),()=>{n&&j&&j(n)}),[n]),{fieldValue:o,fieldError:l,fieldValidating:u,validateStatus:b,isRequired:I,size:O,labelAlign:B,requiredMark:L,injectField:N=>{var D;if(!n||!Y.isValidElement(N))return N;const S=N.props,V=(D=N.type)==null?void 0:D.displayName;if(!(Da.includes(V)||S.placeholder!==void 0||S.value!==void 0))return N;const G=["Input","InputPassword","InputTextArea","InputSearch","InputOTP","InputTrade","InputAmount","InputMask","TextArea","InputNumber"];let J=o;J==null?G.includes(V||"")||S.placeholder!==void 0?J="":["Checkbox","Switch"].includes(V||"")&&(J=!1):G.includes(V||"")&&typeof J!="string"&&typeof J!="number"&&(J="");const Z={value:J,onChange:(m,...v)=>{const x=m&&typeof m=="object"&&"target"in m?m.target.value:m;$(x),typeof S.onChange=="function"&&S.onChange(m,...v)},onBlur:(...m)=>{z(),typeof S.onBlur=="function"&&S.onBlur(...m)},size:S.size||O,...b==="error"&&{status:"error"}};return Y.cloneElement(N,Z)}}}const La="-";function _a(r,n,s){if(n==null||n==="")return null;switch(r){case"password":return"*".repeat(String(n).length);case"switch":return n?"On":"Off";case"digit":{const a=Number(n);return Number.isNaN(a)?String(n):a.toLocaleString()}case"select":case"radio":case"tag":{if(!s.valueEnum)return String(n);const i=na(s.valueEnum).find(t=>String(t.value)===String(n));return i?i.label:String(n)}case"date":case"dateTime":case"text":default:return String(n)}}const ta=({name:r,valueType:n,valueEnum:s,convertValue:a,readonlyRender:i,emptyText:t})=>{const{values:P}=me(),d=r?P[r]:void 0,p=a&&r?a(d,r):d;if(i){const h=i(p,P);return e.jsx("span",{children:h??t})}if(p==null||p==="")return e.jsx("span",{children:t});const f=_a(n,p,{valueEnum:s});return e.jsx("span",{children:f??t})};ta.displayName="ProFormItemReadonly";const $a=g.memo(ta),aa=({name:r,convertValue:n,children:s})=>{const{values:a}=me(),i=a[r],t=n?n(i,r):i;return Y.cloneElement(s,{value:t})};aa.displayName="ProFormItemConvertValue";const Ua=g.memo(aa),jr=r=>{const{children:n,name:s,label:a,description:i,rules:t,required:P,feedback:d,validateStatus:p,className:f="",prefixCls:h="form-item",hidden:w,transform:T,convertValue:j,valueType:O,readonlyRender:B,colProps:L,mode:R,emptyText:I=La,valueEnum:o}=r,l=me(),b=(R??l.mode)==="read",{fieldError:c,size:F,labelAlign:$,injectField:z}=Ma({name:s,rules:t,required:P,validateStatus:p});if(g.useEffect(()=>{if(!(!s||!T))return l.registerTransform(s,T),()=>{l.unregisterTransform(s)}},[s,T,l.registerTransform,l.unregisterTransform]),w)return null;let U;if(b)U=e.jsx($a,{name:s,valueType:O,valueEnum:o,convertValue:j,readonlyRender:B,emptyText:I});else{const V=z(n);j&&s&&Y.isValidElement(V)?U=e.jsx(Ua,{name:s,convertValue:j,children:V}):U=V}const N=oe(h),S=e.jsxs("div",{className:N(void 0,hr(F==="small"&&N("small"),f)),children:[a&&e.jsxs("div",{className:N("label-wrapper",hr(N("label-wrapper-vertical"),$&&N(`label-wrapper-${$}`))),children:[e.jsx(Pr,{as:"label",size:ka,color:Ea,className:N("label"),children:a}),i&&e.jsx(mr,{as:"div",className:N("description"),size:Va,color:Oa,children:i})]}),e.jsxs("div",{className:N("control"),children:[U,c&&e.jsx(mr,{as:"div",className:N("error"),size:Ca,color:Aa,children:c}),!c&&d&&e.jsx(mr,{as:"div",className:N("feedback"),size:Ia,color:Ba,children:d})]})]});if(l.grid){const V={...l.colProps,...L},{span:H=Ta,sm:G,md:J,lg:Z}=V;return e.jsx(la,{span:H,sm:G,md:J,lg:Z,children:S})}return S};jr.displayName="ProFormItem";const Sr=g.memo(jr);jr.__docgenInfo={description:"",methods:[],displayName:"ProFormItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""},rules:{required:!1,tsType:{name:"Array",elements:[{name:"Rule"}],raw:"Rule[]"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},feedback:{required:!1,tsType:{name:"ReactNode"},description:""},validateStatus:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof VALIDATE_STATUSES)[number]"},description:""},hasFeedback:{required:!1,tsType:{name:"boolean"},description:""},colon:{required:!1,tsType:{name:"boolean"},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""},transform:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: unknown,
  name: string,
  allValues: Record<string, unknown>,
) => unknown`,signature:{arguments:[{type:{name:"unknown"},name:"value"},{type:{name:"string"},name:"name"},{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"allValues"}],return:{name:"unknown"}}},description:"Transform before submit, registered into ProForm pipeline"},convertValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: unknown,
  name: string,
) => unknown`,signature:{arguments:[{type:{name:"unknown"},name:"value"},{type:{name:"string"},name:"name"}],return:{name:"unknown"}}},description:"Convert the displayed value before rendering into children"},valueType:{required:!1,tsType:{name:"union",raw:`| 'text'
| 'password'
| 'digit'
| 'date'
| 'dateTime'
| 'select'
| 'radio'
| 'switch'
| 'tag'`,elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'digit'"},{name:"literal",value:"'date'"},{name:"literal",value:"'dateTime'"},{name:"literal",value:"'select'"},{name:"literal",value:"'radio'"},{name:"literal",value:"'switch'"},{name:"literal",value:"'tag'"}]},description:"Built-in read-mode value type renderer"},readonlyRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: unknown, values: Record<string, unknown>) => ReactNode",signature:{arguments:[{type:{name:"unknown"},name:"value"},{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"ReactNode"}}},description:"Custom read-mode rendering; overrides valueType"},colProps:{required:!1,tsType:{name:"ProFormColProps"},description:"Grid column config; falls back to ProForm.colProps"},mode:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROFORM_MODES)[number]"},description:"Per-item mode override"},emptyText:{required:!1,tsType:{name:"ReactNode"},description:"Placeholder shown in read mode when the value is empty (default: '-')"},valueEnum:{required:!1,tsType:{name:"Record",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},{name:"union",raw:"string | { text: string; disabled?: boolean }",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ text: string; disabled?: boolean }",signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}]}],raw:`Record<
  string | number,
  string | { text: string; disabled?: boolean }
>`},description:"Value enum for select/radio/tag value types"}}};const Rr=({name:r,ignoreFormListField:n,children:s})=>{const{values:a,formInstance:i}=me(),t=Qt(),P=g.useMemo(()=>{const f=!n&&t.listName!==void 0;return r.map(h=>f?`${t.listName}.${h}`:h)},[r,n,t.listName]),d=g.useMemo(()=>{const f={};for(let h=0;h<r.length;h++){const w=r[h],T=P[h];f[w]=T.includes(".")?Fe(a,T):a[T]}return f},[r,P,a]),p=g.useMemo(()=>({submit:async()=>{},resetFields:()=>{},getFieldValue:f=>f.includes(".")?Fe(a,f):a[f],getFieldsValue:()=>a,setFieldsValue:()=>{},setFieldValue:()=>{},validateFields:async()=>a,getFieldError:()=>{},getFieldsError:()=>({}),isFieldTouched:()=>!1,isFieldsTouched:()=>!1,isFieldValidating:()=>!1,setFieldError:()=>{},setFieldsError:()=>{},setFieldTouched:()=>{},setFieldsTouched:()=>{},defineField:()=>()=>null,registerField:()=>{},unregisterField:()=>{},getFieldsFormatValue:()=>a,validateFieldsReturnFormatValue:async()=>({success:!1}),submitForm:async()=>{}}),[a]);return e.jsx(e.Fragment,{children:s(d,i??p)})};Rr.displayName="ProFormDependency";const pr=g.memo(Rr);Rr.__docgenInfo={description:"",methods:[],displayName:"ProFormDependency",props:{name:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ignoreFormListField:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>, form: ProFormFormInstance) => ReactNode",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"},{type:{name:"ProFormFormInstance"},name:"form"}],return:{name:"ReactNode"}}},description:""}}};const be=oe(`${de}-list`);let Ga=0;const yr=()=>`list_${++Ga}`,Nr=r=>{const{name:n,label:s,min:a,max:i,required:t,requiredMessage:P="This list cannot be empty",initialValue:d,copyIconProps:p,deleteIconProps:f,creatorButtonProps:h,itemRender:w,actionRender:T,children:j,onAfterAdd:O,onAfterRemove:B}=r,L=Qt(),R=L.listName?`${L.listName}.${n}`:n,{values:I,setFieldValue:o}=me(),l=g.useRef(!1),u=g.useRef([]),[b,c]=ge(null),F=g.useMemo(()=>{const E=R.includes(".")?Fe(I,R):I[R];return Array.isArray(E)?E:[]},[I,R]);for(;u.current.length<F.length;)u.current.push(yr());u.current.length>F.length&&(u.current=u.current.slice(0,F.length)),g.useEffect(()=>{l.current||F.length===0&&(!Array.isArray(d)||d.length===0||(l.current=!0,o(R,[...d]),u.current=d.map(()=>yr())))},[F.length,d,R,o]),g.useEffect(()=>{t&&F.length>0&&b&&c(null)},[F.length,t,b,c]);const $=i==null||F.length<i,z=a==null||F.length>a;_(()=>t?F.length===0?(c(P),!1):(c(null),!0):!0);const U=_((E,M)=>{if(!$)return;const K=E??{},ee=[...F],Q=[...u.current],ne=typeof M=="number"?M:ee.length;ee.splice(ne,0,K),Q.splice(ne,0,yr()),u.current=Q,o(R,ee),O==null||O(K,ne)}),N=_(E=>{if(!z)return;const M=[...F],K=[...u.current];M.splice(E,1),K.splice(E,1),u.current=K,o(R,M),B==null||B(E),t&&M.length===0&&c(P)}),S=_(E=>{if(!$)return;const M=F[E]?{...F[E]}:{};U(M,E+1)}),V=_((E,M)=>{if(E===M||E<0||E>=F.length||M<0||M>=F.length)return;const K=[...F],ee=[...u.current],[Q]=K.splice(E,1),[ne]=ee.splice(E,1);K.splice(M,0,Q),ee.splice(M,0,ne),u.current=ee,o(R,K)}),H=_(()=>F),G=g.useMemo(()=>({add:U,remove:N,move:V,copy:S,getList:H}),[U,N,V,S,H]),J=g.useMemo(()=>F.map((E,M)=>({name:`${R}.${M}`,key:u.current[M]||`fallback_${M}`})),[F,R]),Z=typeof j=="function"?j(J,G):j,D=g.useMemo(()=>F.map((E,M)=>{const K=Lr(p),ee=Lr(f),Q={copy:p!==!1?e.jsx(X,{type:"button",color:"secondary",size:"small",...K.rest,onClick:()=>S(M),disabled:!$||K.disabled,children:le.copy},`copy-${M}`):null,delete:f!==!1?e.jsx(X,{type:"button",color:"secondary",size:"small",...ee.rest,onClick:()=>N(M),disabled:!z||ee.disabled,children:le.delete},`delete-${M}`):null},ne=T?T({index:M,record:E},G,Q):[Q.copy,Q.delete].filter(Boolean),W=e.jsx("div",{className:be("row-actions"),children:ne},u.current[M]||M);return w?w({listDom:W,action:G}):W}),[F,p,f,$,z,S,N,G,T,w]),m=h!==!1,v=m&&typeof h=="object"?h:{},x=(v==null?void 0:v.position)??"bottom",q=(v==null?void 0:v.text)??le.add,A=m?e.jsx(X,{type:"button",color:"secondary",onClick:()=>{x==="top"?U({},0):U()},disabled:!$,children:q}):null,k=g.useMemo(()=>({listName:R}),[R]);return e.jsx(vr.Provider,{value:k,children:e.jsxs("div",{className:be(),children:[s&&e.jsx(Pr,{className:be("label"),size:Yt,color:Zt,children:s}),x==="top"&&A,e.jsx("div",{className:be("content"),children:Z}),e.jsx("div",{className:be("actions"),children:D}),x==="bottom"&&A,b&&e.jsx(mr,{as:"div",size:"sm",color:"danger",children:b})]})})};Nr.displayName="ProFormList";const Pe=g.memo(Nr);Nr.__docgenInfo={description:"",methods:[],displayName:"ProFormList",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredMessage:{required:!1,tsType:{name:"string"},description:""},initialValue:{required:!1,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},description:""},copyIconProps:{required:!1,tsType:{name:"union",raw:"false | Partial<ButtonProps>",elements:[{name:"literal",value:"false"},{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"}]},description:""},deleteIconProps:{required:!1,tsType:{name:"union",raw:"false | Partial<ButtonProps>",elements:[{name:"literal",value:"false"},{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"}]},description:""},creatorButtonProps:{required:!1,tsType:{name:"union",raw:"false | (Partial<ButtonProps> & { text?: ReactNode; position?: 'top' | 'bottom' })",elements:[{name:"literal",value:"false"},{name:"unknown"}]},description:""},itemRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { listDom: ReactNode; action: ProFormListAction }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ listDom: ReactNode; action: ProFormListAction }",signature:{properties:[{key:"listDom",value:{name:"ReactNode",required:!0}},{key:"action",value:{name:"ProFormListAction",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:""},actionRender:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  row: { index: number; record: unknown },
  action: ProFormListAction,
  defaultDom: { copy: ReactNode; delete: ReactNode },
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ index: number; record: unknown }",signature:{properties:[{key:"index",value:{name:"number",required:!0}},{key:"record",value:{name:"unknown",required:!0}}]}},name:"row"},{type:{name:"ProFormListAction"},name:"action"},{type:{name:"signature",type:"object",raw:"{ copy: ReactNode; delete: ReactNode }",signature:{properties:[{key:"copy",value:{name:"ReactNode",required:!0}},{key:"delete",value:{name:"ReactNode",required:!0}}]}},name:"defaultDom"}],return:{name:"ReactNode"}}},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((fields: Array<{ name: string; key: string }>, action: ProFormListAction) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},onAfterAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(defaultValue: Record<string, unknown>, index: number) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"defaultValue"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onAfterRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const fe=oe(`${de}-group`),qr=r=>{const{title:n,extra:s,collapsible:a=!1,defaultCollapsed:i=!1,collapsed:t,onCollapse:P,style:d,children:p}=r,[f,h]=Kt(i,t),w=()=>{if(!a)return;const j=!f;h(j),P==null||P(j)},T=n!=null||s!=null;return e.jsxs("div",{className:fe(),style:d,children:[T&&e.jsxs("div",{className:fe("header"),role:a?"button":void 0,tabIndex:a?0:void 0,onClick:w,onKeyDown:a?j=>{(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),w())}:void 0,children:[e.jsxs("div",{className:fe("title"),children:[a&&e.jsx("span",{className:fe("arrow"),style:{transform:f?void 0:"rotate(90deg)"},children:"▸"}),n&&e.jsx(Pr,{size:Yt,color:Zt,children:n})]}),s&&e.jsx("div",{className:fe("extra"),role:"presentation",onClick:j=>j.stopPropagation(),children:s})]}),e.jsx("div",{className:fe("body"),style:{display:a&&f?"none":void 0},children:p})]})};qr.displayName="ProFormGroup";const Ja=g.memo(qr);qr.__docgenInfo={description:"",methods:[],displayName:"ProFormGroup",props:{title:{required:!1,tsType:{name:"ReactNode"},description:""},extra:{required:!1,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function za(r,n){const[s,a]=ge(!1),[i,t]=ge([]),P=g.useRef(r);P.current=r;const d=ur(n),p=_(async()=>{const f=P.current;if(f){a(!0);try{const h=await f(n);Array.isArray(h)&&t(h)}finally{a(!1)}}});return g.useEffect(()=>{P.current&&p()},[d]),[s,i]}function ae(r){const{component:n,mapProps:s,renderReadonly:a}=r,i=d=>{const{name:p,label:f,description:h,rules:w,required:T,feedback:j,validateStatus:O,colon:B,readonly:L,mode:R,hidden:I,colProps:o,fieldProps:l,placeholder:u,disabled:b,width:c,transform:F,convertValue:$,dependencies:z,request:U,params:N,valueEnum:S,debounceTime:V,dependenciesValues:H,...G}=d,J=R??(L!==void 0?L?"read":"edit":void 0),Z=H?{...N,...H}:N,[D,m]=za(U,Z),v=g.useRef(null),x=g.useRef(void 0),q=g.useCallback((...Q)=>{var ne;if(!V||V<=0){(ne=x.current)==null||ne.call(x,...Q);return}v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{var W;(W=x.current)==null||W.call(x,...Q)},V)},[V]);g.useEffect(()=>()=>{v.current&&clearTimeout(v.current)},[]);const A=s?s(G):{},k=c!==void 0?{width:Sa(c)}:void 0,E=l==null?void 0:l.style,M=k?{...E||{},...k}:E;let K=l==null?void 0:l.options;S&&(K=na(S)),m.length>0&&(K=m);const ee={...A,...l||{},...K!==void 0?{options:K}:{},...D?{loading:!0}:{},...u!==void 0?{placeholder:u}:{},...b!==void 0?{disabled:b}:{},...M?{style:M}:{}};if(V&&V>0){const Q=ee;x.current=Q.onChange,Q.onChange=q}return e.jsx(Sr,{name:p,label:f,description:h,rules:w,required:T,feedback:j,validateStatus:O,colon:B,hidden:I,mode:J,colProps:o,transform:F,convertValue:$,readonlyRender:a?Q=>a(Q):void 0,children:e.jsx(n,{...ee})})},t=d=>{const{dependencies:p}=d;return p&&p.length>0?e.jsx(pr,{name:p,children:f=>e.jsx(i,{...d,dependenciesValues:f})}):e.jsx(i,{...d})};return g.memo(t)}const y=ae({component:he,renderReadonly:we});y.displayName="ProFormText";const Te=ae({component:he.Password,renderReadonly:()=>"******"});Te.displayName="ProFormPassword";const ie=ae({component:he.TextArea,renderReadonly:we});ie.displayName="ProFormTextArea";const pe=ae({component:ma,renderReadonly:ea});pe.displayName="ProFormCheckbox";const kr=ae({component:da,renderReadonly:r=>we(Array.isArray(r)?r.join(", "):r)});kr.displayName="ProFormCheckboxGroup";const se=ae({component:ua,renderReadonly:ea});se.displayName="ProFormSwitch";function Fr(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(Fr).filter(Boolean).join(", "):""}function Ka(r,n){var a;const s=pa(fa((n==null?void 0:n.options)??[]));if(Array.isArray(r)){const i=r.map(t=>{var P;return((P=s.find(d=>d.value===t))==null?void 0:P.label)??t}).map(Fr).filter(t=>t!=null&&t!=="");return i.length>0?i.join(", "):"-"}return r==null||r===""?"-":Fr(((a=s.find(i=>i.value===r))==null?void 0:a.label)??r)||"-"}const ce=ae({component:ca,renderReadonly:Ka});ce.displayName="ProFormSelect";const ye=ae({component:ga,renderReadonly:we});ye.displayName="ProFormRadioGroup";const xe=ae({component:ya,renderReadonly:ja});xe.displayName="ProFormSlider";function Wa(r){return r==null?"-":r instanceof Date?r.toLocaleDateString():Array.isArray(r)?r.filter(n=>n instanceof Date).map(n=>n.toLocaleDateString()).join(" ~ "):String(r)}const ve=ae({component:ba,renderReadonly:Wa});ve.displayName="ProFormDatePicker";function Ha(r){if(r==null)return"-";if(typeof r=="object"&&"length"in r){const n=r;return n.length===0?"-":Array.from(n).map(s=>s.name).join(", ")}return typeof r=="string"?r||"-":we(r)}const Er=ae({component:ha,renderReadonly:Ha});Er.displayName="ProFormUpload";const Qa=oe(`${de}-fieldset`),Cr=r=>{const{name:n,label:s,description:a,rules:i,required:t,feedback:P,gap:d=8,style:p,children:f}=r,{values:h,setFieldValue:w}=me(),T=n?Array.isArray(h[n])?h[n]:[]:[];let j=-1;const O=Y.Children.map(f,L=>{if(!Y.isValidElement(L))return L;j+=1;const R=j;return Y.cloneElement(L,{value:T[R],onChange:I=>{if(!n)return;const o=[...T];o[R]=I&&typeof I=="object"&&"target"in I?I.target.value:I,w(n,o)}})}),B=e.jsx("div",{className:Qa(),style:{display:"flex",gap:d,alignItems:"flex-start",...p},children:O});return n?e.jsx(Sr,{label:s,description:a,name:n,rules:i,required:t,feedback:P,children:B}):B};Cr.displayName="ProFormFieldSet";const Ya=g.memo(Cr);Cr.__docgenInfo={description:"",methods:[],displayName:"ProFormFieldSet",props:{name:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},rules:{required:!1,tsType:{name:"Array",elements:[{name:"Rule"}],raw:"Rule[]"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},feedback:{required:!1,tsType:{name:"ReactNode"},description:""},gap:{required:!1,tsType:{name:"number"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function sa(r,n){const{open:s,onOpenChange:a,trigger:i,autoClose:t=!0,submitTimeout:P}=r,d=s!==void 0,[p,f]=g.useState(!1),h=d?s:p,w=g.useRef(null),T=g.useCallback(R=>{d||f(R),a==null||a(R)},[d,a]),j=re(()=>{T(!0)}),O=re(()=>{w.current&&clearTimeout(w.current),T(!1)}),B=re(async R=>{await(n==null?void 0:n(R)),t&&(P&&P>0?w.current=setTimeout(()=>{T(!1)},P):T(!1))}),L=i?Y.cloneElement(i,{onClick:(...R)=>{var o;j();const I=(o=i.props)==null?void 0:o.onClick;typeof I=="function"&&I(...R)}}):null;return{mergedOpen:h,triggerNode:L,handleFinish:B,handleHide:O,handleShow:j}}const Za=oe(`${de}-drawer-form`),Ar=r=>{const{open:n,onOpenChange:s,trigger:a,title:i,width:t=480,placement:P="right",submitTimeout:d,autoClose:p=!0,drawerProps:f,onFinish:h,submitter:w,children:T,destroyOnClose:j,...O}=r,{mergedOpen:B,triggerNode:L,handleFinish:R,handleHide:I}=sa({open:n,onOpenChange:s,trigger:a,autoClose:p,submitTimeout:d},h);return e.jsxs(e.Fragment,{children:[L,e.jsx(Fa,{...f,open:B,title:i,placement:P,width:t,onClose:I,footer:null,children:e.jsx("div",{className:Za(),children:e.jsx(cr,{...O,onFinish:R,submitter:w!==void 0?w:{resetButtonProps:{onClick:I},resetText:"Cancel"},children:T})})})]})};Ar.displayName="DrawerForm";const Vr=g.memo(Ar);Ar.__docgenInfo={description:"",methods:[],displayName:"DrawerForm",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactElement"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},placement:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof DRAWER_PLACEMENTS)[number]"},description:""},submitTimeout:{required:!1,tsType:{name:"number"},description:""},autoClose:{required:!1,tsType:{name:"boolean"},description:""},destroyOnClose:{required:!1,tsType:{name:"boolean"},description:""},drawerProps:{required:!1,tsType:{name:"Partial",elements:[{name:"DrawerProps"}],raw:"Partial<DrawerProps>"},description:""}},composes:["Omit"]};const Xa=oe(`${de}-dialog-form`),Or=r=>{const{open:n,onOpenChange:s,trigger:a,title:i,width:t,submitTimeout:P,autoClose:d=!0,dialogProps:p,onFinish:f,submitter:h,children:w,destroyOnClose:T,...j}=r,{mergedOpen:O,triggerNode:B,handleFinish:L,handleHide:R}=sa({open:n,onOpenChange:s,trigger:a,autoClose:d,submitTimeout:P},f);return e.jsxs(e.Fragment,{children:[B,e.jsx(Pa,{...p,open:O,title:i,onCancel:R,footer:null,...t!==void 0?{rootStyle:{...p==null?void 0:p.rootStyle,width:t}}:{},children:e.jsx("div",{className:Xa(),children:e.jsx(cr,{...j,onFinish:L,submitter:h!==void 0?h:{resetButtonProps:{onClick:R},resetText:(p==null?void 0:p.cancelText)??"Cancel"},children:w})})})]})};Or.displayName="DialogForm";const es=g.memo(Or);Or.__docgenInfo={description:"",methods:[],displayName:"DialogForm",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactElement"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},submitTimeout:{required:!1,tsType:{name:"number"},description:""},autoClose:{required:!1,tsType:{name:"boolean"},description:""},destroyOnClose:{required:!1,tsType:{name:"boolean"},description:""},dialogProps:{required:!1,tsType:{name:"Partial",elements:[{name:"DialogProps"}],raw:"Partial<DialogProps>"},description:""}},composes:["Omit"]};const br=oe(`${de}-query-filter`);function rs(){if(typeof window>"u")return{};const r={};return new URLSearchParams(window.location.search).forEach((n,s)=>{r[s]=n}),r}function $r(r){if(typeof window>"u")return;const n=new URLSearchParams;for(const[i,t]of Object.entries(r))t!=null&&t!==""&&n.set(i,String(t));const s=n.toString(),a=s?`${window.location.pathname}?${s}`:window.location.pathname;window.history.replaceState(null,"",a)}const Ir=r=>{const{defaultCollapsed:n=!0,collapsed:s,onCollapse:a,defaultColsNumber:i=3,labelWidth:t,split:P=!1,searchConfig:d,syncToUrl:p,onFinish:f,onReset:h,children:w,submitter:T=!1,initialValues:j,...O}=r,[B,L]=Kt(n,s),R=g.useRef(!1),I=g.useMemo(()=>{if(!p||R.current)return j;R.current=!0;const S=rs();return typeof p=="function"?{...j,...p(S,"get")}:{...j,...S}},[]),o=_(S=>{if(!p)return;const V=typeof p=="function"?p(S,"set"):S;$r(V)}),l=_(S=>{o(S),f==null||f(S)}),u=_(()=>{p&&$r({}),h==null||h()}),b=_(()=>{const S=!B;L(S),a==null||a(S)}),c=g.useMemo(()=>{const S=[];return Y.Children.forEach(w,V=>{Y.isValidElement(V)&&S.push(V)}),S},[w]),F=B?c.slice(0,i):c,$=c.length>i,z=(d==null?void 0:d.searchText)??le.search,U=(d==null?void 0:d.resetText)??le.reset,N=t!==void 0&&t!=="auto"?{width:t}:void 0;return e.jsx(cr,{...O,initialValues:I,onFinish:l,onReset:u,submitter:!1,children:e.jsxs("div",{className:br(),children:[F.map((S,V)=>e.jsxs(Y.Fragment,{children:[P&&V>0&&e.jsx("div",{className:br("split")}),N?e.jsx("div",{style:N,children:S}):S]},V)),e.jsxs("div",{className:br("actions"),children:[e.jsx(X,{type:"submit",color:"primary",children:z}),e.jsx(X,{type:"button",color:"secondary",onClick:u,children:U}),$&&e.jsx(X,{type:"button",variant:"text",onClick:b,children:B?le.expand:le.collapse})]})]})})};Ir.displayName="QueryFilter";const ns=g.memo(Ir);Ir.__docgenInfo={description:"",methods:[],displayName:"QueryFilter",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},initialValues:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"void"}}},description:""},onFinishFailed:{required:!1,tsType:{name:"signature",type:"function",raw:`(errorInfo: {
  values: Record<string, unknown>;
  errors: Record<string, string>;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  values: Record<string, unknown>;
  errors: Record<string, string>;
}`,signature:{properties:[{key:"values",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!0}},{key:"errors",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}}]}},name:"errorInfo"}],return:{name:"void"}}},description:""},onValuesChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  changedValues: Record<string, unknown>,
  allValues: Record<string, unknown>,
) => void`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"changedValues"},{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"allValues"}],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof FORM_SIZES)[number]"},description:""},labelAlign:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LABEL_ALIGNS)[number]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},colon:{required:!1,tsType:{name:"boolean"},description:""},requiredMark:{required:!1,tsType:{name:"boolean"},description:""},validateTrigger:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof VALIDATE_TRIGGERS)[number]"},description:""},submitter:{required:!1,tsType:{name:"union",raw:"SubmitterProps | false",elements:[{name:"SubmitterProps"},{name:"literal",value:"false"}]},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use `mode='read'` instead"},mode:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROFORM_MODES)[number]"},description:""},grid:{required:!1,tsType:{name:"boolean"},description:""},colProps:{required:!1,tsType:{name:"ProFormColProps"},description:""},rowProps:{required:!1,tsType:{name:"Partial",elements:[{name:"GridRowProps"}],raw:"Partial<GridRowProps>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},request:{required:!1,tsType:{name:"signature",type:"function",raw:"(params?: unknown) => Promise<Record<string, unknown>>",signature:{arguments:[{type:{name:"unknown"},name:"params"}],return:{name:"Promise",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Promise<Record<string, unknown>>"}}},description:""},params:{required:!1,tsType:{name:"unknown"},description:""},formRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"ProFormFormInstance | undefined",elements:[{name:"ProFormFormInstance"},{name:"undefined"}]}],raw:"MutableRefObject<ProFormFormInstance | undefined>"},description:""},omitNil:{required:!1,tsType:{name:"boolean"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},defaultColsNumber:{required:!1,tsType:{name:"number"},description:""},labelWidth:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:""},split:{required:!1,tsType:{name:"boolean"},description:""},searchConfig:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  searchText?: ReactNode;
  resetText?: ReactNode;
}`,signature:{properties:[{key:"searchText",value:{name:"ReactNode",required:!1}},{key:"resetText",value:{name:"ReactNode",required:!1}}]}},description:""},syncToUrl:{required:!1,tsType:{name:"union",raw:"boolean | ((values: Record<string, unknown>, type: 'get' | 'set') => Record<string, unknown>)",elements:[{name:"boolean"},{name:"unknown"}]},description:""}},composes:["Omit"]};const ts=r=>{const{formInstance:n}=Wt(r);return[n]},C=Object.assign(cr,{Item:Sr,useForm:ts,useInstance:Ht,useContext:me,Dependency:pr,List:Pe,Group:Ja,FieldSet:Ya,Submitter:Xt,Text:y,Password:Te,TextArea:ie,Checkbox:pe,CheckboxGroup:kr,Switch:se,Select:ce,RadioGroup:ye,Slider:xe,DatePicker:ve,Upload:Er}),Bs={title:"Components/ProForm",component:C,argTypes:{readonly:{control:"boolean"},loading:{control:"boolean"},grid:{control:"boolean"},disabled:{control:"boolean"}},parameters:{docs:{source:{type:"code"}}},args:{readonly:!1,loading:!1,grid:!1,disabled:!1,onFinish:oa()},tags:["autodocs"]},Se={render:r=>e.jsxs(C,{...r,initialValues:{username:"",email:""},onFinish:n=>{var s;(s=r.onFinish)==null||s.call(r,n),alert(JSON.stringify(n,null,2))},children:[e.jsx(y,{name:"username",label:"Username",placeholder:"Enter username",rules:[{required:!0,message:"Username is required"}]}),e.jsx(y,{name:"email",label:"Email",placeholder:"Enter email",rules:[{required:!0},{type:"email",message:"Invalid email"}]})]})},Re={render:r=>e.jsxs(C,{...r,initialValues:{text:"Hello",textWithButton:"",password:"secret123",textarea:`Multi-line
content`,agree:!0,options:[],darkMode:!1,role:"admin",volume:60,date:null},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(y,{name:"text",label:"Text Input",placeholder:"Type here..."}),e.jsx(y,{name:"textWithButton",label:"Text with Button",placeholder:"Enter verification code",fieldProps:{suffix:e.jsx(X,{color:"primary",size:"small",style:{marginRight:-4},children:"Send Code"})}}),e.jsx(Te,{name:"password",label:"Password",placeholder:"Password"}),e.jsx(ie,{name:"textarea",label:"Text Area",placeholder:"Enter long text"}),e.jsx(pe,{name:"agree",label:"I agree to the terms"}),e.jsx(kr,{name:"options",label:"Pick options",fieldProps:{options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}]}}),e.jsx(se,{name:"darkMode",label:"Dark Mode"}),e.jsx(ye,{name:"role",label:"Role",fieldProps:{direction:"horizontal",options:[{label:"Admin",value:"admin"},{label:"Editor",value:"editor"},{label:"Viewer",value:"viewer"}]}}),e.jsx(xe,{name:"volume",label:"Volume",fieldProps:{min:0,max:100}}),e.jsx(ve,{name:"date",label:"Date",fieldProps:{dateFormat:"yy-mm-dd"}})]})},Ne={args:{readonly:!0},render:r=>e.jsxs(C,{...r,initialValues:{name:"John Doe",email:"john@example.com",bio:"Software engineer with 10 years of experience.",newsletter:!0,active:!0},children:[e.jsx(y,{name:"name",label:"Name"}),e.jsx(y,{name:"email",label:"Email"}),e.jsx(ie,{name:"bio",label:"Bio"}),e.jsx(pe,{name:"newsletter",label:"Newsletter"}),e.jsx(se,{name:"active",label:"Active"})]})},qe={args:{loading:!0},render:r=>e.jsxs(C,{...r,initialValues:{name:"Loading..."},children:[e.jsx(y,{name:"name",label:"Name"}),e.jsx(y,{name:"email",label:"Email"})]})},ke={args:{grid:!0},render:r=>e.jsxs(C,{...r,rowProps:{gutter:16},initialValues:{},children:[e.jsx(y,{name:"firstName",label:"First Name",colProps:{span:12}}),e.jsx(y,{name:"lastName",label:"Last Name",colProps:{span:12}}),e.jsx(y,{name:"email",label:"Email",colProps:{span:12}}),e.jsx(y,{name:"phone",label:"Phone",colProps:{span:12}}),e.jsx(ie,{name:"address",label:"Address",colProps:{span:24}})]})},Ee={render:r=>e.jsxs(C,{...r,children:[e.jsx(y,{name:"sm",label:"Small (sm = 160px)",width:"sm"}),e.jsx(y,{name:"md",label:"Medium (md = 240px)",width:"md"}),e.jsx(y,{name:"lg",label:"Large (lg = 320px)",width:"lg"}),e.jsx(y,{name:"xl",label:"XL (xl = 420px)",width:"xl"}),e.jsx(y,{name:"custom",label:"Custom (200px)",width:200})]})},Ce={render:r=>e.jsxs(C,{...r,submitter:{submitText:"Save Changes",resetText:"Discard",render:(n,s)=>e.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:s})},children:[e.jsx(y,{name:"title",label:"Title",rules:[{required:!0}]}),e.jsx(ie,{name:"content",label:"Content"})]})},Ae={render:r=>e.jsx(C,{...r,submitter:!1,children:e.jsx(y,{name:"search",label:"Search",placeholder:"Type to search..."})})},Ve={render:r=>e.jsxs(C,{...r,initialValues:{username:"",email:"",bio:"",agree:!1},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(y,{name:"username",label:"Username",description:"Only letters, numbers, and underscores. 3-20 characters.",placeholder:"Enter username",feedback:"This will be your public display name.",rules:[{required:!0,message:"Username is required"},{min:3,message:"At least 3 characters"}]}),e.jsx(y,{name:"email",label:"Email",description:"We'll never share your email with anyone else.",placeholder:"Enter email",rules:[{required:!0,message:"Email is required"},{type:"email",message:"Invalid email format"}]}),e.jsx(ie,{name:"bio",label:"Bio",description:"Markdown is supported. Max 500 characters.",placeholder:"Tell us about yourself"}),e.jsx(Te,{name:"password",label:"Password",description:"Must contain at least 8 characters, one uppercase and one number.",rules:[{required:!0,message:"Password is required"}]}),e.jsx(pe,{name:"agree",label:"I accept the terms",feedback:"You must agree before submitting."})]})},Oe={render:r=>e.jsxs(C,{...r,initialValues:{},onFinish:n=>alert("Success: "+JSON.stringify(n)),children:[e.jsx(y,{name:"username",label:"Username",rules:[{required:!0,message:"Username is required"},{min:3,message:"At least 3 characters"},{max:20,message:"At most 20 characters"}]}),e.jsx(y,{name:"email",label:"Email",rules:[{required:!0,message:"Email is required"},{pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Invalid email"}]}),e.jsx(Te,{name:"password",label:"Password",rules:[{required:!0},{min:8,message:"At least 8 characters"}]}),e.jsx(pe,{name:"terms",label:"I accept the terms",rules:[{validator:n=>n?!0:"You must accept the terms"}]})]})},Ie={render:r=>{const[n,s]=g.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(X,{color:n===1?"primary":"grey",onClick:()=>s(1),children:"User 1"}),e.jsx(X,{color:n===2?"primary":"grey",onClick:()=>s(2),children:"User 2"})]}),e.jsxs(C,{...r,params:{userId:n},request:async a=>(await new Promise(t=>setTimeout(t,1e3)),{1:{name:"Alice",email:"alice@example.com"},2:{name:"Bob",email:"bob@example.com"}}[a==null?void 0:a.userId]||{}),children:[e.jsx(y,{name:"name",label:"Name"}),e.jsx(y,{name:"email",label:"Email"})]})]})},tags:["!autodocs","dev"]},Be={render:r=>e.jsxs(C,{...r,initialValues:{hasAccount:!1,accountType:""},children:[e.jsx(se,{name:"hasAccount",label:"Has Account"}),e.jsx(pr,{name:["hasAccount"],children:({hasAccount:n})=>n?e.jsxs(e.Fragment,{children:[e.jsx(y,{name:"accountId",label:"Account ID",rules:[{required:!0}]}),e.jsx(y,{name:"accountName",label:"Account Name"})]}):null})]})},De={render:r=>e.jsx(C,{...r,initialValues:{members:[{name:"Alice",role:"Admin"},{name:"Bob",role:"Member"}]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(Pe,{name:"members",label:"Team Members",min:1,max:5,children:n=>n.map(({name:s,key:a})=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-end"},children:[e.jsx(y,{name:`${s}.name`,label:"Name",placeholder:"Name"}),e.jsx(y,{name:`${s}.role`,label:"Role",placeholder:"Role"})]},a))})})},Me={render:r=>e.jsxs(es,{...r,title:"Create User",trigger:e.jsx(X,{color:"primary",children:"Open Dialog Form"}),onFinish:async n=>{alert(JSON.stringify(n,null,2))},children:[e.jsx(y,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(y,{name:"email",label:"Email",rules:[{required:!0}]}),e.jsx(se,{name:"active",label:"Active"})]})},Le={render:r=>e.jsxs(Vr,{...r,title:"Create User",trigger:e.jsx(X,{color:"primary",children:"Open Drawer Form"}),onFinish:async n=>{alert(JSON.stringify(n,null,2))},children:[e.jsx(y,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(y,{name:"email",label:"Email",rules:[{required:!0}]}),e.jsx(ie,{name:"bio",label:"Bio"}),e.jsx(se,{name:"active",label:"Active"})]})},_e={render:r=>{const[n,s]=g.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(X,{color:"primary",onClick:()=>s(!0),children:"Open (Controlled)"}),e.jsx(X,{color:"secondary",onClick:()=>s(!1),children:"Close"}),e.jsxs(Vr,{...r,open:n,onOpenChange:s,title:"Edit Profile",width:520,initialValues:{name:"Alice",role:"Admin"},onFinish:async a=>{alert(JSON.stringify(a,null,2))},children:[e.jsx(y,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(y,{name:"role",label:"Role"})]})]})},tags:["!autodocs","dev"]},$e={render:r=>e.jsxs(Vr,{...r,title:"Settings",placement:"left",width:400,trigger:e.jsx(X,{color:"secondary",children:"Open from Left"}),onFinish:async n=>{alert(JSON.stringify(n,null,2))},children:[e.jsx(y,{name:"theme",label:"Theme",placeholder:"dark / light"}),e.jsx(y,{name:"language",label:"Language",placeholder:"en / zh"}),e.jsx(se,{name:"notifications",label:"Enable Notifications"})]})},Ue={render:r=>e.jsxs(C,{...r,initialValues:{gender:"male",plan:"pro"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(ye,{name:"gender",label:"Gender",fieldProps:{options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}]}}),e.jsx(ye,{name:"plan",label:"Plan",fieldProps:{direction:"horizontal",options:[{label:"Free",value:"free"},{label:"Pro",value:"pro"},{label:"Enterprise",value:"enterprise"}]}})]})},Ge={render:r=>e.jsxs(C,{...r,initialValues:{volume:50,price:200},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(xe,{name:"volume",label:"Volume",fieldProps:{min:0,max:100,step:1}}),e.jsx(xe,{name:"price",label:"Price",fieldProps:{min:0,max:1e3,step:10,valuePrefix:"$"}})]})},Je={render:r=>e.jsxs(C,{...r,initialValues:{birthday:null,startDate:null},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(ve,{name:"birthday",label:"Birthday",fieldProps:{dateFormat:"yy-mm-dd",showIcon:!0}}),e.jsx(ve,{name:"startDate",label:"Start Date",fieldProps:{dateFormat:"mm/dd/yy",showButtonBar:!0}})]})},ze={render:r=>e.jsxs(C,{...r,grid:!0,rowProps:{gutter:16},initialValues:{name:"",email:"",bio:"",newsletter:!1,darkMode:!0,items:[{title:"Item 1"}]},submitter:{submitText:"Create",resetText:"Clear All"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(y,{name:"name",label:"Full Name",colProps:{span:12},rules:[{required:!0}]}),e.jsx(y,{name:"email",label:"Email",colProps:{span:12},rules:[{required:!0}]}),e.jsx(ie,{name:"bio",label:"Biography",colProps:{span:24}}),e.jsx(pe,{name:"newsletter",label:"Subscribe to newsletter",colProps:{span:12}}),e.jsx(se,{name:"darkMode",label:"Dark Mode",colProps:{span:12}}),e.jsx(pr,{name:["newsletter"],children:({newsletter:n})=>n?e.jsx(y,{name:"frequency",label:"Email Frequency",placeholder:"daily / weekly / monthly",colProps:{span:24}}):null})]}),tags:["!autodocs","dev"]},Ke={render:r=>e.jsx(C,{...r,onFinish:n=>{const s=n.attachment;alert(s?`Selected: ${Array.from(s).map(a=>a.name).join(", ")}`:"No file")},children:e.jsx(Er,{name:"attachment",label:"Attachment",fieldProps:{accept:".pdf,.png,.jpg",multiple:!0,buttonLabel:"Choose Files"}})})},We={render:r=>e.jsxs(C,{...r,grid:!0,rowProps:{gutter:16},initialValues:{},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(y,{name:"firstName",label:"First Name",colProps:{span:12,sm:12,md:8,lg:6}}),e.jsx(y,{name:"lastName",label:"Last Name",colProps:{span:12,sm:12,md:8,lg:6}}),e.jsx(y,{name:"email",label:"Email",colProps:{span:24,sm:24,md:8,lg:6}}),e.jsx(y,{name:"phone",label:"Phone",colProps:{span:24,sm:12,md:12,lg:6}}),e.jsx(ie,{name:"address",label:"Address",colProps:{span:24}})]})},He={render:r=>e.jsxs(C,{...r,mode:"edit",initialValues:{name:"",email:""},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(y,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(y,{name:"email",label:"Email"})]})},Qe={render:r=>e.jsxs(C,{...r,mode:"read",initialValues:{name:"Alice",email:"alice@example.com",active:!0},children:[e.jsx(y,{name:"name",label:"Name"}),e.jsx(y,{name:"email",label:"Email"}),e.jsx(se,{name:"active",label:"Active"})]})},Ye={render:r=>e.jsxs(C,{...r,mode:"update",initialValues:{id:"USR-001",name:"Alice",email:"alice@example.com"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(y,{name:"id",label:"ID",mode:"read"}),e.jsx(y,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(y,{name:"email",label:"Email"})]})},Ze={render:r=>e.jsxs(C,{...r,omitNil:!0,initialValues:{name:"",email:"",note:null},onFinish:n=>{alert(`Nil values stripped:
`+JSON.stringify(n,null,2))},children:[e.jsx(y,{name:"name",label:"Name (leave empty to omit)"}),e.jsx(y,{name:"email",label:"Email (leave empty to omit)"}),e.jsx(y,{name:"note",label:"Note (null → omitted)"})]})},Xe={render:r=>e.jsxs(C,{...r,onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(ce,{name:"status",label:"Status",valueEnum:{active:"Active",inactive:"Inactive",pending:{text:"Pending",disabled:!0}}}),e.jsx(ye,{name:"role",label:"Role",valueEnum:{admin:"Admin",editor:"Editor",viewer:"Viewer"}})]})},er={render:r=>e.jsxs(C,{...r,initialValues:{country:"",city:""},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(ce,{name:"country",label:"Country",valueEnum:{us:"United States",cn:"China",jp:"Japan"}}),e.jsx(ce,{name:"city",label:"City (auto-loads based on Country)",dependencies:["country"],request:async n=>(await new Promise(a=>setTimeout(a,500)),{us:[{label:"New York",value:"ny"},{label:"Los Angeles",value:"la"}],cn:[{label:"Beijing",value:"bj"},{label:"Shanghai",value:"sh"}],jp:[{label:"Tokyo",value:"tk"},{label:"Osaka",value:"os"}]}[n==null?void 0:n.country]??[])})]})},rr={render:r=>e.jsx(C,{...r,onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(ce,{name:"user",label:"User (async loaded)",request:async()=>(await new Promise(n=>setTimeout(n,800)),[{label:"Alice",value:"alice"},{label:"Bob",value:"bob"},{label:"Charlie",value:"charlie"}])})})},nr={render:r=>e.jsxs(C,{...r,onValuesChange:n=>{console.log("onValuesChange (debounced):",n)},children:[e.jsx(y,{name:"search",label:"Search (300ms debounce — check console)",debounceTime:300,placeholder:"Type fast..."}),e.jsx(y,{name:"instant",label:"Instant (no debounce)",placeholder:"Type fast..."})]}),tags:["!autodocs","dev"]},tr={render:r=>e.jsxs(C,{...r,initialValues:{name:"Alice",bio:"",theme:"light"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsxs(C.Group,{title:"Basic Info",collapsible:!0,children:[e.jsx(y,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(y,{name:"bio",label:"Bio"})]}),e.jsxs(C.Group,{title:"Preferences",collapsible:!0,defaultCollapsed:!0,children:[e.jsx(y,{name:"theme",label:"Theme"}),e.jsx(se,{name:"notifications",label:"Notifications"})]})]})},ar={render:r=>e.jsx(C,{...r,onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsxs(C.Group,{title:"Contact",extra:e.jsx(X,{color:"secondary",size:"small",children:"Import"}),children:[e.jsx(y,{name:"email",label:"Email"}),e.jsx(y,{name:"phone",label:"Phone"})]})})},sr={render:r=>e.jsxs(C,{...r,initialValues:{phone:["+1","555-0100"]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsxs(C.FieldSet,{name:"phone",label:"Phone Number",gap:8,children:[e.jsx(he,{placeholder:"Area code",style:{width:80}}),e.jsx(he,{placeholder:"Number",style:{width:200}})]}),e.jsx(y,{name:"email",label:"Email"})]})},or={render:r=>e.jsx(C,{...r,initialValues:{groups:[{title:"Group A",items:[{name:"Item 1"}]}]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(Pe,{name:"groups",label:"Groups",children:n=>n.map(({name:s,key:a})=>e.jsxs("div",{style:{border:"1px solid #eee",padding:12,marginBottom:8,borderRadius:4},children:[e.jsx(y,{name:`${s}.title`,label:"Group Title"}),e.jsx(Pe,{name:"items",label:"Items",children:i=>i.map(t=>e.jsx(y,{name:`${t.name}.name`,label:"Item Name"},t.key))})]},a))})}),tags:["!autodocs","dev"]},ir={render:r=>e.jsx(C,{...r,initialValues:{members:[]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(Pe,{name:"members",label:"Team Members",required:!0,requiredMessage:"Add at least one member",children:n=>n.map(({name:s,key:a})=>e.jsx(y,{name:`${s}.name`,label:"Name"},a))})})},lr={render:r=>e.jsxs(ns,{...r,syncToUrl:!0,onFinish:n=>{console.log("QueryFilter submit:",n),alert(`Check URL bar — params synced!
`+JSON.stringify(n))},children:[e.jsx(y,{name:"keyword",label:"Keyword",placeholder:"Search..."}),e.jsx(ce,{name:"status",label:"Status",valueEnum:{all:"All",active:"Active",inactive:"Inactive"}})]}),tags:["!autodocs","dev"]};var Ur,Gr,Jr;Se.parameters={...Se.parameters,docs:{...(Ur=Se.parameters)==null?void 0:Ur.docs,source:{originalSource:`{
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
}`,...(Jr=(Gr=Se.parameters)==null?void 0:Gr.docs)==null?void 0:Jr.source}}};var zr,Kr,Wr;Re.parameters={...Re.parameters,docs:{...(zr=Re.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    text: 'Hello',
    textWithButton: '',
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
      <ProFormText name="textWithButton" label="Text with Button" placeholder="Enter verification code" fieldProps={{
      suffix: <Button color="primary" size="small" style={{
        marginRight: -4
      }}>
              Send Code
            </Button>
    }} />
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
}`,...(Wr=(Kr=Re.parameters)==null?void 0:Kr.docs)==null?void 0:Wr.source}}};var Hr,Qr,Yr;Ne.parameters={...Ne.parameters,docs:{...(Hr=Ne.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
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
}`,...(Yr=(Qr=Ne.parameters)==null?void 0:Qr.docs)==null?void 0:Yr.source}}};var Zr,Xr,en;qe.parameters={...qe.parameters,docs:{...(Zr=qe.parameters)==null?void 0:Zr.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <ProForm {...args} initialValues={{
    name: 'Loading...'
  }}>
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
    </ProForm>
}`,...(en=(Xr=qe.parameters)==null?void 0:Xr.docs)==null?void 0:en.source}}};var rn,nn,tn;ke.parameters={...ke.parameters,docs:{...(rn=ke.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(tn=(nn=ke.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var an,sn,on;Ee.parameters={...Ee.parameters,docs:{...(an=Ee.parameters)==null?void 0:an.docs,source:{originalSource:`{
  render: args => <ProForm {...args}>
      <ProFormText name="sm" label="Small (sm = 160px)" width="sm" />
      <ProFormText name="md" label="Medium (md = 240px)" width="md" />
      <ProFormText name="lg" label="Large (lg = 320px)" width="lg" />
      <ProFormText name="xl" label="XL (xl = 420px)" width="xl" />
      <ProFormText name="custom" label="Custom (200px)" width={200} />
    </ProForm>
}`,...(on=(sn=Ee.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var ln,mn,dn;Ce.parameters={...Ce.parameters,docs:{...(ln=Ce.parameters)==null?void 0:ln.docs,source:{originalSource:`{
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
}`,...(dn=(mn=Ce.parameters)==null?void 0:mn.docs)==null?void 0:dn.source}}};var un,cn,pn;Ae.parameters={...Ae.parameters,docs:{...(un=Ae.parameters)==null?void 0:un.docs,source:{originalSource:`{
  render: args => <ProForm {...args} submitter={false}>
      <ProFormText name="search" label="Search" placeholder="Type to search..." />
    </ProForm>
}`,...(pn=(cn=Ae.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var fn,gn,yn;Ve.parameters={...Ve.parameters,docs:{...(fn=Ve.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} initialValues={{
    username: '',
    email: '',
    bio: '',
    agree: false
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormText name="username" label="Username" description="Only letters, numbers, and underscores. 3-20 characters." placeholder="Enter username" feedback="This will be your public display name." rules={[{
      required: true,
      message: 'Username is required'
    }, {
      min: 3,
      message: 'At least 3 characters'
    }]} />
      <ProFormText name="email" label="Email" description="We'll never share your email with anyone else." placeholder="Enter email" rules={[{
      required: true,
      message: 'Email is required'
    }, {
      type: 'email',
      message: 'Invalid email format'
    }]} />
      <ProFormTextArea name="bio" label="Bio" description="Markdown is supported. Max 500 characters." placeholder="Tell us about yourself" />
      <ProFormPassword name="password" label="Password" description="Must contain at least 8 characters, one uppercase and one number." rules={[{
      required: true,
      message: 'Password is required'
    }]} />
      <ProFormCheckbox name="agree" label="I accept the terms" feedback="You must agree before submitting." />
    </ProForm>
}`,...(yn=(gn=Ve.parameters)==null?void 0:gn.docs)==null?void 0:yn.source}}};var bn,hn,Fn;Oe.parameters={...Oe.parameters,docs:{...(bn=Oe.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(Fn=(hn=Oe.parameters)==null?void 0:hn.docs)==null?void 0:Fn.source}}};var Pn,xn,vn;Ie.parameters={...Ie.parameters,docs:{...(Pn=Ie.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
}`,...(vn=(xn=Ie.parameters)==null?void 0:xn.docs)==null?void 0:vn.source}}};var wn,Tn,jn;Be.parameters={...Be.parameters,docs:{...(wn=Be.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(jn=(Tn=Be.parameters)==null?void 0:Tn.docs)==null?void 0:jn.source}}};var Sn,Rn,Nn;De.parameters={...De.parameters,docs:{...(Sn=De.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Nn=(Rn=De.parameters)==null?void 0:Rn.docs)==null?void 0:Nn.source}}};var qn,kn,En;Me.parameters={...Me.parameters,docs:{...(qn=Me.parameters)==null?void 0:qn.docs,source:{originalSource:`{
  render: args => <DialogForm {...args} title="Create User" trigger={<Button color="primary">Open Dialog Form</Button>} onFinish={async values => {
    alert(JSON.stringify(values, null, 2));
  }}>
      <ProFormText name="name" label="Name" rules={[{
      required: true
    }]} />
      <ProFormText name="email" label="Email" rules={[{
      required: true
    }]} />
      <ProFormSwitch name="active" label="Active" />
    </DialogForm>
}`,...(En=(kn=Me.parameters)==null?void 0:kn.docs)==null?void 0:En.source}}};var Cn,An,Vn;Le.parameters={...Le.parameters,docs:{...(Cn=Le.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
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
}`,...(Vn=(An=Le.parameters)==null?void 0:An.docs)==null?void 0:Vn.source}}};var On,In,Bn;_e.parameters={..._e.parameters,docs:{...(On=_e.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(Bn=(In=_e.parameters)==null?void 0:In.docs)==null?void 0:Bn.source}}};var Dn,Mn,Ln;$e.parameters={...$e.parameters,docs:{...(Dn=$e.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
  render: args => <DrawerForm {...args} title="Settings" placement="left" width={400} trigger={<Button color="secondary">Open from Left</Button>} onFinish={async values => {
    alert(JSON.stringify(values, null, 2));
  }}>
      <ProFormText name="theme" label="Theme" placeholder="dark / light" />
      <ProFormText name="language" label="Language" placeholder="en / zh" />
      <ProFormSwitch name="notifications" label="Enable Notifications" />
    </DrawerForm>
}`,...(Ln=(Mn=$e.parameters)==null?void 0:Mn.docs)==null?void 0:Ln.source}}};var _n,$n,Un;Ue.parameters={...Ue.parameters,docs:{...(_n=Ue.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(Un=($n=Ue.parameters)==null?void 0:$n.docs)==null?void 0:Un.source}}};var Gn,Jn,zn;Ge.parameters={...Ge.parameters,docs:{...(Gn=Ge.parameters)==null?void 0:Gn.docs,source:{originalSource:`{
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
}`,...(zn=(Jn=Ge.parameters)==null?void 0:Jn.docs)==null?void 0:zn.source}}};var Kn,Wn,Hn;Je.parameters={...Je.parameters,docs:{...(Kn=Je.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
}`,...(Hn=(Wn=Je.parameters)==null?void 0:Wn.docs)==null?void 0:Hn.source}}};var Qn,Yn,Zn;ze.parameters={...ze.parameters,docs:{...(Qn=ze.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
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
}`,...(Zn=(Yn=ze.parameters)==null?void 0:Yn.docs)==null?void 0:Zn.source}}};var Xn,et,rt;Ke.parameters={...Ke.parameters,docs:{...(Xn=Ke.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
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
}`,...(rt=(et=Ke.parameters)==null?void 0:et.docs)==null?void 0:rt.source}}};var nt,tt,at;We.parameters={...We.parameters,docs:{...(nt=We.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(at=(tt=We.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var st,ot,it;He.parameters={...He.parameters,docs:{...(st=He.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: args => <ProForm {...args} mode="edit" initialValues={{
    name: '',
    email: ''
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormText name="name" label="Name" rules={[{
      required: true
    }]} />
      <ProFormText name="email" label="Email" />
    </ProForm>
}`,...(it=(ot=He.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var lt,mt,dt;Qe.parameters={...Qe.parameters,docs:{...(lt=Qe.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: args => <ProForm {...args} mode="read" initialValues={{
    name: 'Alice',
    email: 'alice@example.com',
    active: true
  }}>
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
      <ProFormSwitch name="active" label="Active" />
    </ProForm>
}`,...(dt=(mt=Qe.parameters)==null?void 0:mt.docs)==null?void 0:dt.source}}};var ut,ct,pt;Ye.parameters={...Ye.parameters,docs:{...(ut=Ye.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(ct=Ye.parameters)==null?void 0:ct.docs)==null?void 0:pt.source}}};var ft,gt,yt;Ze.parameters={...Ze.parameters,docs:{...(ft=Ze.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(yt=(gt=Ze.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var bt,ht,Ft;Xe.parameters={...Xe.parameters,docs:{...(bt=Xe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(Ft=(ht=Xe.parameters)==null?void 0:ht.docs)==null?void 0:Ft.source}}};var Pt,xt,vt;er.parameters={...er.parameters,docs:{...(Pt=er.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(vt=(xt=er.parameters)==null?void 0:xt.docs)==null?void 0:vt.source}}};var wt,Tt,jt;rr.parameters={...rr.parameters,docs:{...(wt=rr.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(jt=(Tt=rr.parameters)==null?void 0:Tt.docs)==null?void 0:jt.source}}};var St,Rt,Nt;nr.parameters={...nr.parameters,docs:{...(St=nr.parameters)==null?void 0:St.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onValuesChange={changed => {
    console.log('onValuesChange (debounced):', changed);
  }}>
      <ProFormText name="search" label="Search (300ms debounce — check console)" debounceTime={300} placeholder="Type fast..." />
      <ProFormText name="instant" label="Instant (no debounce)" placeholder="Type fast..." />
    </ProForm>,
  tags: ['!autodocs', 'dev']
}`,...(Nt=(Rt=nr.parameters)==null?void 0:Rt.docs)==null?void 0:Nt.source}}};var qt,kt,Et;tr.parameters={...tr.parameters,docs:{...(qt=tr.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Et=(kt=tr.parameters)==null?void 0:kt.docs)==null?void 0:Et.source}}};var Ct,At,Vt;ar.parameters={...ar.parameters,docs:{...(Ct=ar.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProForm.Group title="Contact" extra={<Button color="secondary" size="small">Import</Button>}>
        <ProFormText name="email" label="Email" />
        <ProFormText name="phone" label="Phone" />
      </ProForm.Group>
    </ProForm>
}`,...(Vt=(At=ar.parameters)==null?void 0:At.docs)==null?void 0:Vt.source}}};var Ot,It,Bt;sr.parameters={...sr.parameters,docs:{...(Ot=sr.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Bt=(It=sr.parameters)==null?void 0:It.docs)==null?void 0:Bt.source}}};var Dt,Mt,Lt;or.parameters={...or.parameters,docs:{...(Dt=or.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Lt=(Mt=or.parameters)==null?void 0:Mt.docs)==null?void 0:Lt.source}}};var _t,$t,Ut;ir.parameters={...ir.parameters,docs:{...(_t=ir.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(Ut=($t=ir.parameters)==null?void 0:$t.docs)==null?void 0:Ut.source}}};var Gt,Jt,zt;lr.parameters={...lr.parameters,docs:{...(Gt=lr.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
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
}`,...(zt=(Jt=lr.parameters)==null?void 0:Jt.docs)==null?void 0:zt.source}}};const Ds=["Default","AllFieldTypes","ReadonlyMode","LoadingState","GridLayout","WidthPresets","CustomSubmitter","NoSubmitter","DescriptionAndFeedback","Validation","AsyncRequest","Dependency","DynamicList","DialogFormStory","DrawerFormStory","DrawerFormControlled","DrawerFormLeft","RadioGroupStory","SliderStory","DatePickerStory","KitchenSink","UploadField","GridResponsive","ModeEdit","ModeRead","ModeUpdate","OmitNil","ValueEnum","FieldDependencies","FieldRequest","DebounceField","GroupCollapsible","GroupWithExtra","FieldSet","NestedList","ListRequired","SyncToUrl"];export{Re as AllFieldTypes,Ie as AsyncRequest,Ce as CustomSubmitter,Je as DatePickerStory,nr as DebounceField,Se as Default,Be as Dependency,Ve as DescriptionAndFeedback,Me as DialogFormStory,_e as DrawerFormControlled,$e as DrawerFormLeft,Le as DrawerFormStory,De as DynamicList,er as FieldDependencies,rr as FieldRequest,sr as FieldSet,ke as GridLayout,We as GridResponsive,tr as GroupCollapsible,ar as GroupWithExtra,ze as KitchenSink,ir as ListRequired,qe as LoadingState,He as ModeEdit,Qe as ModeRead,Ye as ModeUpdate,or as NestedList,Ae as NoSubmitter,Ze as OmitNil,Ue as RadioGroupStory,Ne as ReadonlyMode,Ge as SliderStory,lr as SyncToUrl,Ke as UploadField,Oe as Validation,Xe as ValueEnum,Ee as WidthPresets,Ds as __namedExportsOrder,Bs as default};
