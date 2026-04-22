import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as p,R as H}from"./index-CP2yOfOm.js";import{f as aa}from"./index-DCiaR2iG.js";import{c as oe,j as yr}from"./classnames-h1fAIaEr.js";import{R as sa,C as oa}from"./Grid-ZyyVHIg8.js";import{u as B}from"./index-_M0HKnWf.js";import{u as ne,a as Vr}from"./index-nCcupNJZ.js";import{B as Q}from"./Button-CyPAFFeb.js";import{u as ye,c as hr,T as ir}from"./Typography-CKl69wC2.js";import{u as Jt}from"./index-CyN509qF.js";import{b as be}from"./Trade-CJpqLCxp.js";import{C as ia,a as la}from"./index-Sva0fw8i.js";import{b as ma}from"./Switch-LVHJv8KY.js";import{S as da,f as ua,n as ca}from"./Select-DqBM6iLy.js";import{i as pa}from"./RadioGroup-2_XHm_ES.js";import{S as fa}from"./Slider-DIXsrGKe.js";import{C as ga}from"./Calendar-BBlvtRS-.js";import{U as ya}from"./UploadFileBar-C6-shF67.js";import{a as ba}from"./Drawer-C1qM4ycM.js";import{a as ha}from"./Dialog-BmJGTbWJ.js";import"./Icons-BarT8jPS.js";/* empty css               */import"./Tag-BJPcDu56.js";import"./Spinner-51b2jJ5l.js";import"./iframe-BLwC-r4X.js";import"./ResizeObserver-DW8-DKQf.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";import"./index-CN0Pk037.js";import"./Skeleton-BbdGRf15.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";import"./Portal-D8KWBNKu.js";function Fa(r,n){const s=n.split(".");let t=r;for(const a of s){if(t==null||typeof t!="object")return;t=t[a]}return t}function Pa(r,n,s){const t=n.split(".");if(t.length===1)return{...r,[n]:s};const a={...r};let i=a;for(let h=0;h<t.length-1;h++){const m=t[h],d=t[h+1],u=/^\d+$/.test(d);(i[m]===void 0||i[m]===null)&&(i[m]=u?[]:{}),Array.isArray(i[m])?i[m]=[...i[m]]:i[m]={...i[m]},i=i[m]}return i[t[t.length-1]]=s,a}function pr(r,n){return n.includes(".")?Fa(r,n):r[n]}const zt=(r={})=>{const{initialValues:n={},onFinish:s,onFinishFailed:t,onValuesChange:a,onReset:i,size:h="middle",labelAlign:m="left",disabled:d=!1,colon:u=!0,requiredMark:P=!0,validateTrigger:v="onChange"}=r,[w,R]=p.useState(n),[D,o]=p.useState({}),[f,l]=p.useState({}),[j,y]=p.useState({}),g=B((b,S)=>{R(F=>{const L=b.includes(".")?Pa(F,b,S):{...F,[b]:S};return a==null||a({[b]:S},L),L}),S!==""&&S!==null&&S!==void 0&&o(F=>{if(!F[b])return F;const L={...F};return delete L[b],L})}),x=B((b,S)=>{o(F=>{if(S===null){if(!F[b])return F;const L={...F};return delete L[b],L}return{...F,[b]:S}})}),U=B((b,S)=>{y(F=>({...F,[b]:S}))}),_=B(b=>j[b]),T=B(b=>{y(S=>{const F={...S};return delete F[b],F})}),M=B((b,S=[],F)=>{const L=F!==void 0?F:pr(w,b);for(const V of S){if(V.required&&(L==null||L==="")){const k=V.message||`${b} is required`;return x(b,k),!1}if(V.min&&typeof L=="string"&&L.length<V.min){const k=V.message||`${b} must be at least ${V.min} characters`;return x(b,k),!1}if(V.max&&typeof L=="string"&&L.length>V.max){const k=V.message||`${b} must be no more than ${V.max} characters`;return x(b,k),!1}if(V.pattern&&typeof L=="string"&&!V.pattern.test(L)){const k=V.message||`${b} format is invalid`;return x(b,k),!1}if(V.validator&&typeof V.validator=="function")try{const k=V.validator(L,w);if(k!==!0&&typeof k!="object")return x(b,typeof k=="string"?k:"Validation failed"),!1}catch(k){const E=k instanceof Error?k.message:"Validation error";return x(b,E),!1}}return D[b]&&x(b,null),!0}),G=B((b=j)=>{let S=!0;return Object.keys(b).forEach(F=>{const L=b[F];M(F,L)||(S=!1)}),S}),$=B(()=>{let b=!1;const S={};return Object.keys(j).forEach(F=>{const L=j[F],V=pr(w,F);for(const k of L){if(k.required&&(V==null||V==="")){S[F]=k.message||`${F} is required`,b=!0;break}if(k.min&&typeof V=="string"&&V.length<k.min){S[F]=k.message||`${F} must be at least ${k.min} characters`,b=!0;break}if(k.max&&typeof V=="string"&&V.length>k.max){S[F]=k.message||`${F} must be no more than ${k.max} characters`,b=!0;break}if(k.pattern&&typeof V=="string"&&!k.pattern.test(V)){S[F]=k.message||`${F} format is invalid`,b=!0;break}if(k.validator&&typeof k.validator=="function")try{const E=k.validator(V,w);if(E!==!0&&typeof E!="object"){S[F]=typeof E=="string"?E:"Validation failed",b=!0;break}}catch(E){S[F]=E instanceof Error?E.message:"Validation error",b=!0;break}}}),o(S),b?(t==null||t({values:w,errors:S}),{success:!1,errors:S}):(s==null||s(w),{success:!0,values:w})}),C=ne(b=>(b==null||b.preventDefault(),$())),q=B(()=>{R(n),o({}),l({}),i==null||i()}),O=ne(b=>{b==null||b.preventDefault(),q()}),N=B(b=>pr(w,b)),J=B(()=>w),z=B(b=>{R(S=>{const F={...S,...b};return a==null||a(b,F),F})}),X=p.useMemo(()=>({submit:$,resetFields:q,getFieldValue:N,getFieldsValue:J,setFieldsValue:z,setFieldValue:g,validateFields:G}),[$,q,N,J,z,g,G]),se=p.useMemo(()=>({values:w,errors:D,touched:f,formInstance:X,setFieldValue:g,setFieldError:x,validateField:M,registerField:U,unregisterField:T,size:h,labelAlign:m,disabled:d,colon:u,requiredMark:P,validateTrigger:v}),[w,D,f,X,g,x,M,U,T,h,m,d,u,P,v]);return{values:w,errors:D,touched:f,fieldRules:j,getFieldRules:_,setFieldValue:g,setFieldError:x,setFieldsValue:z,getFieldValue:N,getFieldsValue:J,validateField:M,validateFields:G,registerField:U,unregisterField:T,handleSubmit:C,handleReset:O,resetFields:q,formInstance:X,coreContextShape:se}},Fr=p.createContext(null);Fr.displayName="ProFormContext";const me=()=>{const r=p.useContext(Fr);if(!r)throw new Error("useProFormContext must be used within a <ProForm> component");return r},Wt=()=>me().formInstance,Pr=p.createContext({});Pr.displayName="FormListContext";const Kt=()=>p.useContext(Pr),de="proform",Ir={sm:160,md:240,lg:320,xl:420},xa=24,Ht="md",Qt="default",le={submit:"Submit",reset:"Reset",search:"Search",add:"Add",delete:"Delete",copy:"Copy",collapse:"Collapse",expand:"Expand"},Br=oe(`${de}-submitter`),xr=r=>{const{submitText:n=le.submit,resetText:s=le.reset,render:t,onSubmit:a,onReset:i,submitButtonProps:h,resetButtonProps:m,loading:d=!1}=r,u=Wt(),P=B(()=>{a==null||a(),u.submit()}),v=B(()=>{i==null||i(),u.resetFields()}),w=p.useMemo(()=>e.jsx(Q,{type:"button",color:"secondary",...m,onClick:v,children:s},"reset"),[s,m,v]),R=p.useMemo(()=>e.jsx(Q,{type:"submit",color:"primary",loading:d,...h,children:n},"submit"),[n,h,d]),D=[w,R];return t?e.jsx("div",{className:Br(),children:t({form:u,submit:P,reset:v},D)}):e.jsxs("div",{className:Br(),children:[w,R]})};xr.displayName="Submitter";const Yt=p.memo(xr);xr.__docgenInfo={description:"",methods:[],displayName:"Submitter",props:{submitText:{required:!1,tsType:{name:"ReactNode"},description:""},resetText:{required:!1,tsType:{name:"ReactNode"},description:""},render:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  props: { form: FormCoreInstance; submit: () => void; reset: () => void },
  dom: ReactElement[],
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ form: FormCoreInstance; submit: () => void; reset: () => void }",signature:{properties:[{key:"form",value:{name:"FormCoreInstance",required:!0}},{key:"submit",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"reset",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},name:"props"},{type:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},name:"dom"}],return:{name:"ReactNode"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitButtonProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"},description:""},resetButtonProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};function mr(r){return r==null?String(r):typeof r!="object"?JSON.stringify(r):Array.isArray(r)?"["+r.map(mr).join(",")+"]":"{"+Object.keys(r).sort().map(s=>JSON.stringify(s)+":"+mr(r[s])).join(",")+"}"}function we(r){return r==null||r===""?"-":String(r)}function Zt(r){return r==null?"-":r?"Yes":"No"}function wa(r){if(r==null||r==="")return"-";if(typeof r=="number")return String(r);const n=Number(r);return Number.isNaN(n)?"-":String(n)}function he(r,n){const s=n.split(".");let t=r;for(const a of s){if(t==null||typeof t!="object")return;t=t[a]}return t}function va(r){return typeof r=="number"?r:Ir[r]??Ir.md}function Dr(r){if(r===!1||r===void 0)return{disabled:!1,rest:{}};const{disabled:n=!1,...s}=r;return{disabled:n,rest:s}}function lr(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)}function Ta(r,n){const s=Object.keys(n);if(s.length===0)return r;const t={...r};return s.sort().forEach(a=>{const i=n[a];if(typeof i!="function")return;const h=he(t,a),m=i(h,a,t);if(lr(m)){const d=a.lastIndexOf(".");if(d===-1)delete t[a],Object.assign(t,m);else{const u=a.slice(0,d),P=he(t,u);if(lr(P)){const v=a.slice(d+1);delete P[v],Object.assign(P,m)}}}else{const d=a.split(".");if(d.length===1)t[a]=m;else{let u=t;for(let P=0;P<d.length-1;P++){const v=d[P];!lr(u[v])&&!Array.isArray(u[v])&&(u[v]={}),u=u[v]}u[d[d.length-1]]=m}}}),t}function Xt(r){const n={};for(const s of Object.keys(r)){const t=r[s];if(!(t==null||t===""))if(lr(t)){const a=Xt(t);Object.keys(a).length>0&&(n[s]=a)}else n[s]=t}return n}function ea(r){return Object.entries(r).map(([n,s])=>typeof s=="string"?{label:s,value:n}:{label:s.text,value:n,disabled:s.disabled})}const ja=oe(de),Sa=oe("form"),wr=r=>{const{children:n,className:s,submitter:t,readonly:a=!1,mode:i,grid:h=!1,colProps:m,rowProps:d,loading:u=!1,request:P,params:v,initialValues:w,onFinish:R,onFinishFailed:D,onValuesChange:o,onReset:f,formRef:l,omitNil:j=!0,size:y="middle",labelAlign:g="left",disabled:x=!1,colon:U=!0,requiredMark:_=!0,validateTrigger:T="onChange",prefixCls:M,...G}=r,$=i??(a?"read":"edit"),[C,q]=ye(!1),O=u||C,N=p.useRef({}),J=B((Y,re)=>{N.current[Y]=re}),z=B(Y=>{delete N.current[Y]}),X=Vr(R),se=B(Y=>{let re=Ta(Y,N.current);return j&&(re=Xt(re)),re}),b=B(Y=>{var re;(re=X.current)==null||re.call(X,se(Y))}),{coreContextShape:S,formInstance:F,handleSubmit:L,handleReset:V}=zt({initialValues:w,onFinish:b,onFinishFailed:D,onValuesChange:o,onReset:f,size:y,labelAlign:g,disabled:x||O,colon:U,requiredMark:_,validateTrigger:T}),k=p.useMemo(()=>({...F,getFieldsFormatValue:()=>se(F.getFieldsValue()),validateFieldsReturnFormatValue:()=>F.validateFields()?{success:!0,values:se(F.getFieldsValue())}:{success:!1}}),[F,se]);p.useEffect(()=>{l&&(l.current=k)});const E=Vr(P),I=p.useMemo(()=>mr(v),[v]);p.useEffect(()=>{const Y=async()=>{const re=E.current;if(re){q(!0);try{const cr=await re(v);cr&&typeof cr=="object"&&F.setFieldsValue(cr)}finally{q(!1)}}};E.current&&Y()},[I,v,E,q,F]);const W=p.useMemo(()=>({...S,formInstance:k,readonly:a,mode:$,grid:h,colProps:m??{span:24},registerTransform:J,unregisterTransform:z}),[S,k,a,$,h,m,J,z]),Z=h?sa:p.Fragment,K=h?{...d}:{},ee=t!==!1&&$!=="read"?e.jsx(Yt,{...typeof t=="object"?t:{},loading:O}):null;return e.jsx(Fr.Provider,{value:W,children:e.jsxs("form",{...G,className:Sa(void 0,yr(ja(),s)),onSubmit:L,onReset:V,children:[e.jsx(Z,{...K,children:n}),ee]})})};wr.displayName="ProForm";const dr=p.memo(wr);wr.__docgenInfo={description:"",methods:[],displayName:"ProForm",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},initialValues:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"void"}}},description:""},onFinishFailed:{required:!1,tsType:{name:"signature",type:"function",raw:`(errorInfo: {
  values: Record<string, unknown>;
  errors: Record<string, string>;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  values: Record<string, unknown>;
  errors: Record<string, string>;
}`,signature:{properties:[{key:"values",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!0}},{key:"errors",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}}]}},name:"errorInfo"}],return:{name:"void"}}},description:""},onValuesChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  changedValues: Record<string, unknown>,
  allValues: Record<string, unknown>,
) => void`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"changedValues"},{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"allValues"}],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof FORM_SIZES)[number]"},description:""},labelAlign:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LABEL_ALIGNS)[number]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},colon:{required:!1,tsType:{name:"boolean"},description:""},requiredMark:{required:!1,tsType:{name:"boolean"},description:""},validateTrigger:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof VALIDATE_TRIGGERS)[number]"},description:""},submitter:{required:!1,tsType:{name:"union",raw:"SubmitterProps | false",elements:[{name:"SubmitterProps"},{name:"literal",value:"false"}]},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use `mode='read'` instead"},mode:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROFORM_MODES)[number]"},description:""},grid:{required:!1,tsType:{name:"boolean"},description:""},colProps:{required:!1,tsType:{name:"ProFormColProps"},description:""},rowProps:{required:!1,tsType:{name:"Partial",elements:[{name:"GridRowProps"}],raw:"Partial<GridRowProps>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},request:{required:!1,tsType:{name:"signature",type:"function",raw:"(params?: unknown) => Promise<Record<string, unknown>>",signature:{arguments:[{type:{name:"unknown"},name:"params"}],return:{name:"Promise",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Promise<Record<string, unknown>>"}}},description:""},params:{required:!1,tsType:{name:"unknown"},description:""},formRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"ProFormFormInstance | undefined",elements:[{name:"ProFormFormInstance"},{name:"undefined"}]}],raw:"MutableRefObject<ProFormFormInstance | undefined>"},description:""},omitNil:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const Ra="lg",Na="default",qa="md",ka="danger",Ca="md",Ea="default-tertiary",Aa="sm",Oa="default-tertiary",Va=["Input","InputNumber","Select","BaseSelect","DatePicker","TimePicker","Checkbox","Radio","Switch","TextArea"];function Mr(r,n){const s=n.split(".");let t=r;for(const a of s){if(t==null||typeof t!="object")return;t=t[a]}return t}function Ia(r){const{name:n,rules:s=[],required:t,validateStatus:a}=r,i=me(),{values:h,errors:m,setFieldValue:d,validateField:u,registerField:P,unregisterField:v,size:w,labelAlign:R,requiredMark:D,validateTrigger:o}=i,f=!!(t||s.some(T=>T.required)),l=n?n.includes(".")?Mr(h,n):h[n]:void 0,j=n?n.includes(".")?Mr(m,n):m[n]:void 0,y=a||(j?"error":void 0),g=ne(T=>n&&s.length>0?u(n,s,T):!0),x=ne(T=>{n&&(d(n,T),o==="onChange"&&g(T))}),U=ne(()=>{o==="onBlur"&&g(l)});return p.useEffect(()=>(n&&P&&P(n,s),()=>{n&&v&&v(n)}),[n]),{fieldValue:l,fieldError:j,validateStatus:y,isRequired:f,size:w,labelAlign:R,requiredMark:D,injectField:T=>{var O;if(!n||!H.isValidElement(T))return T;const M=T.props,G=(O=T.type)==null?void 0:O.displayName;if(!(Va.includes(G)||M.placeholder!==void 0||M.value!==void 0))return T;let C=l;C==null?["Input","TextArea","InputNumber"].includes(G||"")||M.placeholder!==void 0?C="":["Checkbox","Switch"].includes(G||"")&&(C=!1):["Input","TextArea"].includes(G||"")&&typeof C!="string"&&typeof C!="number"&&(C="");const q={value:C,onChange:(N,...J)=>{const z=N&&typeof N=="object"&&"target"in N?N.target.value:N;x(z),typeof M.onChange=="function"&&M.onChange(N,...J)},onBlur:(...N)=>{U(),typeof M.onBlur=="function"&&M.onBlur(...N)},size:M.size||w,...y==="error"&&{status:"error"}};return H.cloneElement(T,q)}}}const Ba="-";function Da(r,n,s){if(n==null||n==="")return null;switch(r){case"password":return"*".repeat(String(n).length);case"switch":return n?"On":"Off";case"digit":{const t=Number(n);return Number.isNaN(t)?String(n):t.toLocaleString()}case"select":case"radio":case"tag":{if(!s.valueEnum)return String(n);const a=ea(s.valueEnum).find(i=>String(i.value)===String(n));return a?a.label:String(n)}case"date":case"dateTime":case"text":default:return String(n)}}const ra=({name:r,valueType:n,valueEnum:s,convertValue:t,readonlyRender:a,emptyText:i})=>{const{values:h}=me(),m=r?h[r]:void 0,d=t&&r?t(m,r):m;if(a){const P=a(d,h);return e.jsx("span",{children:P??i})}if(d==null||d==="")return e.jsx("span",{children:i});const u=Da(n,d,{valueEnum:s});return e.jsx("span",{children:u??i})};ra.displayName="ProFormItemReadonly";const Ma=p.memo(ra),na=({name:r,convertValue:n,children:s})=>{const{values:t}=me(),a=t[r],i=n?n(a,r):a;return H.cloneElement(s,{value:i})};na.displayName="ProFormItemConvertValue";const La=p.memo(na),vr=r=>{const{children:n,name:s,label:t,description:a,rules:i,required:h,feedback:m,validateStatus:d,className:u="",prefixCls:P="form-item",hidden:v,transform:w,convertValue:R,valueType:D,readonlyRender:o,colProps:f,mode:l,emptyText:j=Ba,valueEnum:y}=r,g=me(),U=(l??g.mode)==="read",{fieldError:_,size:T,labelAlign:M,injectField:G}=Ia({name:s,rules:i,required:h,validateStatus:d});if(p.useEffect(()=>{if(!(!s||!w))return g.registerTransform(s,w),()=>{g.unregisterTransform(s)}},[s,w,g.registerTransform,g.unregisterTransform]),v)return null;let $;if(U)$=e.jsx(Ma,{name:s,valueType:D,valueEnum:y,convertValue:R,readonlyRender:o,emptyText:j});else{const O=G(n);R&&s&&H.isValidElement(O)?$=e.jsx(La,{name:s,convertValue:R,children:O}):$=O}const C=oe(P),q=e.jsxs("div",{className:C(void 0,yr(T==="small"&&C("small"),u)),children:[t&&e.jsxs("div",{className:C("label-wrapper",yr(C("label-wrapper-vertical"),M&&C(`label-wrapper-${M}`))),children:[e.jsx(hr,{as:"label",size:Ra,color:Na,className:C("label"),children:t}),a&&e.jsx(ir,{as:"div",className:C("description"),size:Ca,color:Ea,children:a})]}),e.jsxs("div",{className:C("control"),children:[$,_&&e.jsx(ir,{as:"div",className:C("error"),size:qa,color:ka,children:_}),!_&&m&&e.jsx(ir,{as:"div",className:C("feedback"),size:Aa,color:Oa,children:m})]})]});if(g.grid){const O={...g.colProps,...f},{span:N=xa,sm:J,md:z,lg:X}=O;return e.jsx(oa,{span:N,sm:J,md:z,lg:X,children:q})}return q};vr.displayName="ProFormItem";const Tr=p.memo(vr);vr.__docgenInfo={description:"",methods:[],displayName:"ProFormItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""},rules:{required:!1,tsType:{name:"Array",elements:[{name:"Rule"}],raw:"Rule[]"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},feedback:{required:!1,tsType:{name:"ReactNode"},description:""},validateStatus:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof VALIDATE_STATUSES)[number]"},description:""},hasFeedback:{required:!1,tsType:{name:"boolean"},description:""},colon:{required:!1,tsType:{name:"boolean"},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""},transform:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
>`},description:"Value enum for select/radio/tag value types"}}};const jr=({name:r,ignoreFormListField:n,children:s})=>{const{values:t,formInstance:a}=me(),i=Kt(),h=p.useMemo(()=>{const u=!n&&i.listName!==void 0;return r.map(P=>u?`${i.listName}.${P}`:P)},[r,n,i.listName]),m=p.useMemo(()=>{const u={};for(let P=0;P<r.length;P++){const v=r[P],w=h[P];u[v]=w.includes(".")?he(t,w):t[w]}return u},[r,h,t]),d=p.useMemo(()=>({submit:()=>({success:!1}),resetFields:()=>{},getFieldValue:u=>u.includes(".")?he(t,u):t[u],getFieldsValue:()=>t,setFieldsValue:()=>{},setFieldValue:()=>{},validateFields:()=>!1,getFieldsFormatValue:()=>t,validateFieldsReturnFormatValue:()=>({success:!1})}),[t]);return e.jsx(e.Fragment,{children:s(m,a??d)})};jr.displayName="ProFormDependency";const ur=p.memo(jr);jr.__docgenInfo={description:"",methods:[],displayName:"ProFormDependency",props:{name:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ignoreFormListField:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>, form: ProFormFormInstance) => ReactNode",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"},{type:{name:"ProFormFormInstance"},name:"form"}],return:{name:"ReactNode"}}},description:""}}};const ge=oe(`${de}-list`);let _a=0;const fr=()=>`list_${++_a}`,Sr=r=>{const{name:n,label:s,min:t,max:a,required:i,requiredMessage:h="This list cannot be empty",initialValue:m,copyIconProps:d,deleteIconProps:u,creatorButtonProps:P,itemRender:v,actionRender:w,children:R,onAfterAdd:D,onAfterRemove:o}=r,f=Kt(),l=f.listName?`${f.listName}.${n}`:n,{values:j,setFieldValue:y}=me(),g=p.useRef(!1),x=p.useRef([]),[U,_]=ye(null),T=p.useMemo(()=>{const E=l.includes(".")?he(j,l):j[l];return Array.isArray(E)?E:[]},[j,l]);for(;x.current.length<T.length;)x.current.push(fr());x.current.length>T.length&&(x.current=x.current.slice(0,T.length)),p.useEffect(()=>{g.current||T.length===0&&(!Array.isArray(m)||m.length===0||(g.current=!0,y(l,[...m]),x.current=m.map(()=>fr())))},[T.length,m,l,y]),p.useEffect(()=>{i&&T.length>0&&U&&_(null)},[T.length,i,U,_]);const M=a==null||T.length<a,G=t==null||T.length>t;B(()=>i?T.length===0?(_(h),!1):(_(null),!0):!0);const $=B((E,I)=>{if(!M)return;const W=E??{},Z=[...T],K=[...x.current],ee=typeof I=="number"?I:Z.length;Z.splice(ee,0,W),K.splice(ee,0,fr()),x.current=K,y(l,Z),D==null||D(W,ee)}),C=B(E=>{if(!G)return;const I=[...T],W=[...x.current];I.splice(E,1),W.splice(E,1),x.current=W,y(l,I),o==null||o(E),i&&I.length===0&&_(h)}),q=B(E=>{if(!M)return;const I=T[E]?{...T[E]}:{};$(I,E+1)}),O=B((E,I)=>{if(E===I||E<0||E>=T.length||I<0||I>=T.length)return;const W=[...T],Z=[...x.current],[K]=W.splice(E,1),[ee]=Z.splice(E,1);W.splice(I,0,K),Z.splice(I,0,ee),x.current=Z,y(l,W)}),N=B(()=>T),J=p.useMemo(()=>({add:$,remove:C,move:O,copy:q,getList:N}),[$,C,O,q,N]),z=p.useMemo(()=>T.map((E,I)=>({name:`${l}.${I}`,key:x.current[I]||`fallback_${I}`})),[T,l]),X=typeof R=="function"?R(z,J):R,se=p.useMemo(()=>T.map((E,I)=>{const W=Dr(d),Z=Dr(u),K={copy:d!==!1?e.jsx(Q,{type:"button",color:"secondary",size:"small",...W.rest,onClick:()=>q(I),disabled:!M||W.disabled,children:le.copy},`copy-${I}`):null,delete:u!==!1?e.jsx(Q,{type:"button",color:"secondary",size:"small",...Z.rest,onClick:()=>C(I),disabled:!G||Z.disabled,children:le.delete},`delete-${I}`):null},ee=w?w({index:I,record:E},J,K):[K.copy,K.delete].filter(Boolean),Y=e.jsx("div",{className:ge("row-actions"),children:ee},x.current[I]||I);return v?v({listDom:Y,action:J}):Y}),[T,d,u,M,G,q,C,J,w,v]),b=P!==!1,S=b&&typeof P=="object"?P:{},F=(S==null?void 0:S.position)??"bottom",L=(S==null?void 0:S.text)??le.add,V=b?e.jsx(Q,{type:"button",color:"secondary",onClick:()=>{F==="top"?$({},0):$()},disabled:!M,children:L}):null,k=p.useMemo(()=>({listName:l}),[l]);return e.jsx(Pr.Provider,{value:k,children:e.jsxs("div",{className:ge(),children:[s&&e.jsx(hr,{className:ge("label"),size:Ht,color:Qt,children:s}),F==="top"&&V,e.jsx("div",{className:ge("content"),children:X}),e.jsx("div",{className:ge("actions"),children:se}),F==="bottom"&&V,U&&e.jsx(ir,{as:"div",size:"sm",color:"danger",children:U})]})})};Sr.displayName="ProFormList";const Fe=p.memo(Sr);Sr.__docgenInfo={description:"",methods:[],displayName:"ProFormList",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredMessage:{required:!1,tsType:{name:"string"},description:""},initialValue:{required:!1,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},description:""},copyIconProps:{required:!1,tsType:{name:"union",raw:"false | Partial<ButtonProps>",elements:[{name:"literal",value:"false"},{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"}]},description:""},deleteIconProps:{required:!1,tsType:{name:"union",raw:"false | Partial<ButtonProps>",elements:[{name:"literal",value:"false"},{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"}]},description:""},creatorButtonProps:{required:!1,tsType:{name:"union",raw:"false | (Partial<ButtonProps> & { text?: ReactNode; position?: 'top' | 'bottom' })",elements:[{name:"literal",value:"false"},{name:"unknown"}]},description:""},itemRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { listDom: ReactNode; action: ProFormListAction }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ listDom: ReactNode; action: ProFormListAction }",signature:{properties:[{key:"listDom",value:{name:"ReactNode",required:!0}},{key:"action",value:{name:"ProFormListAction",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:""},actionRender:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  row: { index: number; record: unknown },
  action: ProFormListAction,
  defaultDom: { copy: ReactNode; delete: ReactNode },
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ index: number; record: unknown }",signature:{properties:[{key:"index",value:{name:"number",required:!0}},{key:"record",value:{name:"unknown",required:!0}}]}},name:"row"},{type:{name:"ProFormListAction"},name:"action"},{type:{name:"signature",type:"object",raw:"{ copy: ReactNode; delete: ReactNode }",signature:{properties:[{key:"copy",value:{name:"ReactNode",required:!0}},{key:"delete",value:{name:"ReactNode",required:!0}}]}},name:"defaultDom"}],return:{name:"ReactNode"}}},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((fields: Array<{ name: string; key: string }>, action: ProFormListAction) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},onAfterAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(defaultValue: Record<string, unknown>, index: number) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"defaultValue"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onAfterRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const pe=oe(`${de}-group`),Rr=r=>{const{title:n,extra:s,collapsible:t=!1,defaultCollapsed:a=!1,collapsed:i,onCollapse:h,style:m,children:d}=r,[u,P]=Jt(a,i),v=()=>{if(!t)return;const R=!u;P(R),h==null||h(R)},w=n!=null||s!=null;return e.jsxs("div",{className:pe(),style:m,children:[w&&e.jsxs("div",{className:pe("header"),role:t?"button":void 0,tabIndex:t?0:void 0,onClick:v,onKeyDown:t?R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),v())}:void 0,children:[e.jsxs("div",{className:pe("title"),children:[t&&e.jsx("span",{className:pe("arrow"),style:{transform:u?void 0:"rotate(90deg)"},children:"▸"}),n&&e.jsx(hr,{size:Ht,color:Qt,children:n})]}),s&&e.jsx("div",{className:pe("extra"),role:"presentation",onClick:R=>R.stopPropagation(),children:s})]}),e.jsx("div",{className:pe("body"),style:{display:t&&u?"none":void 0},children:d})]})};Rr.displayName="ProFormGroup";const $a=p.memo(Rr);Rr.__docgenInfo={description:"",methods:[],displayName:"ProFormGroup",props:{title:{required:!1,tsType:{name:"ReactNode"},description:""},extra:{required:!1,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function Ua(r,n){const[s,t]=ye(!1),[a,i]=ye([]),h=p.useRef(r);h.current=r;const m=mr(n),d=B(async()=>{const u=h.current;if(u){t(!0);try{const P=await u(n);Array.isArray(P)&&i(P)}finally{t(!1)}}});return p.useEffect(()=>{h.current&&d()},[m]),[s,a]}function te(r){const{component:n,mapProps:s,renderReadonly:t}=r,a=m=>{const{name:d,label:u,description:P,rules:v,required:w,feedback:R,validateStatus:D,colon:o,readonly:f,mode:l,hidden:j,colProps:y,fieldProps:g,placeholder:x,disabled:U,width:_,transform:T,convertValue:M,dependencies:G,request:$,params:C,valueEnum:q,debounceTime:O,dependenciesValues:N,...J}=m,z=l??(f!==void 0?f?"read":"edit":void 0),X=N?{...C,...N}:C,[se,b]=Ua($,X),S=p.useRef(null),F=p.useRef(void 0),L=p.useCallback((...K)=>{var ee;if(!O||O<=0){(ee=F.current)==null||ee.call(F,...K);return}S.current&&clearTimeout(S.current),S.current=setTimeout(()=>{var Y;(Y=F.current)==null||Y.call(F,...K)},O)},[O]);p.useEffect(()=>()=>{S.current&&clearTimeout(S.current)},[]);const V=s?s(J):{},k=_!==void 0?{width:va(_)}:void 0,E=g==null?void 0:g.style,I=k?{...E||{},...k}:E;let W=g==null?void 0:g.options;q&&(W=ea(q)),b.length>0&&(W=b);const Z={...V,...g||{},...W!==void 0?{options:W}:{},...se?{loading:!0}:{},...x!==void 0?{placeholder:x}:{},...U!==void 0?{disabled:U}:{},...I?{style:I}:{}};if(O&&O>0){const K=Z;F.current=K.onChange,K.onChange=L}return e.jsx(Tr,{name:d,label:u,description:P,rules:v,required:w,feedback:R,validateStatus:D,colon:o,hidden:j,mode:z,colProps:y,transform:T,convertValue:M,readonlyRender:t?K=>t(K):void 0,children:e.jsx(n,{...Z})})},i=m=>{const{dependencies:d}=m;return d&&d.length>0?e.jsx(ur,{name:d,children:u=>e.jsx(a,{...m,dependenciesValues:u})}):e.jsx(a,{...m})};return p.memo(i)}const c=te({component:be,renderReadonly:we});c.displayName="ProFormText";const ve=te({component:be.Password,renderReadonly:()=>"******"});ve.displayName="ProFormPassword";const ie=te({component:be.TextArea,renderReadonly:we});ie.displayName="ProFormTextArea";const ce=te({component:ia,renderReadonly:Zt});ce.displayName="ProFormCheckbox";const Nr=te({component:la,renderReadonly:r=>we(Array.isArray(r)?r.join(", "):r)});Nr.displayName="ProFormCheckboxGroup";const ae=te({component:ma,renderReadonly:Zt});ae.displayName="ProFormSwitch";function br(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(br).filter(Boolean).join(", "):""}function Ga(r,n){var t;const s=ua(ca((n==null?void 0:n.options)??[]));if(Array.isArray(r)){const a=r.map(i=>{var h;return((h=s.find(m=>m.value===i))==null?void 0:h.label)??i}).map(br).filter(i=>i!=null&&i!=="");return a.length>0?a.join(", "):"-"}return r==null||r===""?"-":br(((t=s.find(a=>a.value===r))==null?void 0:t.label)??r)||"-"}const ue=te({component:da,renderReadonly:Ga});ue.displayName="ProFormSelect";const fe=te({component:pa,renderReadonly:we});fe.displayName="ProFormRadioGroup";const Pe=te({component:fa,renderReadonly:wa});Pe.displayName="ProFormSlider";function Ja(r){return r==null?"-":r instanceof Date?r.toLocaleDateString():Array.isArray(r)?r.filter(n=>n instanceof Date).map(n=>n.toLocaleDateString()).join(" ~ "):String(r)}const xe=te({component:ga,renderReadonly:Ja});xe.displayName="ProFormDatePicker";function za(r){if(r==null)return"-";if(typeof r=="object"&&"length"in r){const n=r;return n.length===0?"-":Array.from(n).map(s=>s.name).join(", ")}return typeof r=="string"?r||"-":we(r)}const qr=te({component:ya,renderReadonly:za});qr.displayName="ProFormUpload";const Wa=oe(`${de}-fieldset`),kr=r=>{const{name:n,label:s,description:t,rules:a,required:i,feedback:h,gap:m=8,style:d,children:u}=r,{values:P,setFieldValue:v}=me(),w=n?Array.isArray(P[n])?P[n]:[]:[];let R=-1;const D=H.Children.map(u,f=>{if(!H.isValidElement(f))return f;R+=1;const l=R;return H.cloneElement(f,{value:w[l],onChange:j=>{if(!n)return;const y=[...w];y[l]=j&&typeof j=="object"&&"target"in j?j.target.value:j,v(n,y)}})}),o=e.jsx("div",{className:Wa(),style:{display:"flex",gap:m,alignItems:"flex-start",...d},children:D});return n?e.jsx(Tr,{label:s,description:t,name:n,rules:a,required:i,feedback:h,children:o}):o};kr.displayName="ProFormFieldSet";const Ka=p.memo(kr);kr.__docgenInfo={description:"",methods:[],displayName:"ProFormFieldSet",props:{name:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},rules:{required:!1,tsType:{name:"Array",elements:[{name:"Rule"}],raw:"Rule[]"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},feedback:{required:!1,tsType:{name:"ReactNode"},description:""},gap:{required:!1,tsType:{name:"number"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Ha=(r={},n={})=>{const{onValuesChange:s,validateTrigger:t="onChange"}=n,a=zt({initialValues:r,onValuesChange:s,validateTrigger:t}),[i,h]=ye({}),[m,d]=p.useState({}),u=p.useMemo(()=>({...a.touched,...m}),[a.touched,m]),P=B(async(o,f,l)=>{if(!l||l.length===0)return{isValid:!0,error:null};h(j=>({...j,[o]:!0}));try{if(!a.validateField(o,l,f))return{isValid:!1,error:a.errors[o]||null};for(const y of l){if(y.validator&&typeof y.validator=="function")try{const g=await Promise.resolve(y.validator(f,a.values));if(g!==!0&&g!==void 0){const x=typeof g=="string"?g:"Validation failed";return a.setFieldError(o,x),{isValid:!1,error:x}}}catch(g){const x=g instanceof Error?g.message:"Validation error";return a.setFieldError(o,x),{isValid:!1,error:x}}if(y.enum&&Array.isArray(y.enum)&&f&&!y.enum.includes(f)){const g=y.message||`${o} must be one of ${y.enum.join(", ")}`;return a.setFieldError(o,g),{isValid:!1,error:g}}if(y.type==="number"&&f!==void 0&&f!==null&&f!==""&&(typeof f!="number"||isNaN(f))){const g=y.message||`${o} must be a number`;return a.setFieldError(o,g),{isValid:!1,error:g}}if(y.type==="email"&&f&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(f))){const x=y.message||`${o} must be a valid email`;return a.setFieldError(o,x),{isValid:!1,error:x}}if(y.type==="url"&&f)try{new URL(String(f))}catch{const g=y.message||`${o} must be a valid URL`;return a.setFieldError(o,g),{isValid:!1,error:g}}}return a.errors[o]&&a.setFieldError(o,null),{isValid:!0,error:null}}finally{h(j=>{const y={...j};return delete y[o],y})}}),v=ne(async o=>{d(l=>({...l,[o]:!0}));const f=a.fieldRules[o];f&&t==="onBlur"&&await P(o,a.values[o],f)}),w=B(async o=>{const f=o||Object.keys(a.fieldRules);let l=!1;const j={},y=f.map(async g=>{const x=a.fieldRules[g];if(x){const{isValid:U,error:_}=await P(g,a.values[g],x);!U&&_&&(l=!0,j[g]=_)}});if(await Promise.all(y),l){const g=new Error("Validation failed");throw g.values=a.values,g.errors=j,g}return o?o.reduce((g,x)=>(g[x]=a.values[x],g),{}):a.values}),R=p.useCallback((o,f={})=>{const{rules:l=[]}=f,j=p.memo(({children:y,render:g,...x})=>{const U=a.values[o]??"",_=a.errors[o],T=u[o],M=i[o];p.useEffect(()=>(!a.getFieldRules(o)&&l.length>0&&a.registerField(o,l),()=>{a.unregisterField(o)}),[]);const G=ne(N=>{a.setFieldValue(o,N),t==="onChange"&&a.validateField(o,l,N)}),$=ne(()=>{v(o)}),C={name:o,value:U,error:_,touched:T,validating:M,onChange:G,onBlur:$,...x},q=N=>{var z;const J=N&&typeof N=="object"&&"target"in N?N.target.value:N;G(J),H.isValidElement(y)&&((z=y.props)!=null&&z.onChange)&&y.props.onChange(J)},O=()=>{var N;$(),H.isValidElement(y)&&((N=y.props)!=null&&N.onBlur)&&y.props.onBlur()};if(g&&typeof g=="function")return g(C);if(typeof y=="function")return y(C);if(H.isValidElement(y)){const N={...C,onChange:q,onBlur:O};return H.cloneElement(y,N)}return Array.isArray(y)?H.createElement(p.Fragment,null,...y.map((N,J)=>{if(H.isValidElement(N)){const z={...C,key:N.key||J,onChange:q,onBlur:O};return H.cloneElement(N,z)}return N})):null});return j.displayName=`Field(${o})`,j},[a,u,i,t,v]);return[p.useMemo(()=>({...a.formInstance,validateFields:w,setFieldValue:a.setFieldValue,getFieldError:o=>a.errors[o],getFieldsError:o=>{if(!o)return a.errors;const f={};return o.forEach(l=>{a.errors[l]&&(f[l]=a.errors[l])}),f},isFieldTouched:o=>u[o]||!1,isFieldsTouched:(o,f=!1)=>o?f?o.every(l=>u[l]):o.some(l=>u[l]):Object.keys(u).some(l=>u[l]),isFieldValidating:o=>i[o]||!1,setFieldError:a.setFieldError,setFieldsError:o=>{Object.entries(o).forEach(([f,l])=>{a.setFieldError(f,l)})},setFieldTouched:(o,f=!0)=>{d(l=>({...l,[o]:f}))},setFieldsTouched:o=>{d(f=>({...f,...o}))},resetFields:o=>{if(!o)a.resetFields(),d({}),h({});else{const f={};o.forEach(l=>{f[l]=r[l]}),a.setFieldsValue(f),d(l=>{const j={...l};return o.forEach(y=>{delete j[y]}),j}),h(l=>{const j={...l};return o.forEach(y=>{delete j[y]}),j}),o.forEach(l=>{a.setFieldError(l,null)})}},submit:async o=>{try{const f=await w();return o&&await o(f),f}catch{return}},defineField:R,registerField:a.registerField,unregisterField:a.unregisterField}),[a,u,i,w,R,r,h])]};function ta(r,n){const{open:s,onOpenChange:t,trigger:a,autoClose:i=!0,submitTimeout:h}=r,m=s!==void 0,[d,u]=p.useState(!1),P=m?s:d,v=p.useRef(null),w=p.useCallback(l=>{m||u(l),t==null||t(l)},[m,t]),R=ne(()=>{w(!0)}),D=ne(()=>{v.current&&clearTimeout(v.current),w(!1)}),o=ne(async l=>{await(n==null?void 0:n(l)),i&&(h&&h>0?v.current=setTimeout(()=>{w(!1)},h):w(!1))}),f=a?H.cloneElement(a,{onClick:(...l)=>{var y;R();const j=(y=a.props)==null?void 0:y.onClick;typeof j=="function"&&j(...l)}}):null;return{mergedOpen:P,triggerNode:f,handleFinish:o,handleHide:D,handleShow:R}}const Qa=oe(`${de}-drawer-form`),Cr=r=>{const{open:n,onOpenChange:s,trigger:t,title:a,width:i=480,placement:h="right",submitTimeout:m,autoClose:d=!0,drawerProps:u,onFinish:P,submitter:v,children:w,destroyOnClose:R,...D}=r,{mergedOpen:o,triggerNode:f,handleFinish:l,handleHide:j}=ta({open:n,onOpenChange:s,trigger:t,autoClose:d,submitTimeout:m},P);return e.jsxs(e.Fragment,{children:[f,e.jsx(ba,{...u,open:o,title:a,placement:h,width:i,onClose:j,footer:null,children:e.jsx("div",{className:Qa(),children:e.jsx(dr,{...D,onFinish:l,submitter:v!==void 0?v:{resetButtonProps:{onClick:j},resetText:"Cancel"},children:w})})})]})};Cr.displayName="DrawerForm";const Er=p.memo(Cr);Cr.__docgenInfo={description:"",methods:[],displayName:"DrawerForm",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactElement"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},placement:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof DRAWER_PLACEMENTS)[number]"},description:""},submitTimeout:{required:!1,tsType:{name:"number"},description:""},autoClose:{required:!1,tsType:{name:"boolean"},description:""},destroyOnClose:{required:!1,tsType:{name:"boolean"},description:""},drawerProps:{required:!1,tsType:{name:"Partial",elements:[{name:"DrawerProps"}],raw:"Partial<DrawerProps>"},description:""}},composes:["Omit"]};const Ya=oe(`${de}-dialog-form`),Ar=r=>{const{open:n,onOpenChange:s,trigger:t,title:a,width:i,submitTimeout:h,autoClose:m=!0,dialogProps:d,onFinish:u,submitter:P,children:v,destroyOnClose:w,...R}=r,{mergedOpen:D,triggerNode:o,handleFinish:f,handleHide:l}=ta({open:n,onOpenChange:s,trigger:t,autoClose:m,submitTimeout:h},u);return e.jsxs(e.Fragment,{children:[o,e.jsx(ha,{...d,open:D,title:a,onCancel:l,footer:null,...i!==void 0?{rootStyle:{...d==null?void 0:d.rootStyle,width:i}}:{},children:e.jsx("div",{className:Ya(),children:e.jsx(dr,{...R,onFinish:f,submitter:P!==void 0?P:{resetButtonProps:{onClick:l},resetText:(d==null?void 0:d.cancelText)??"Cancel"},children:v})})})]})};Ar.displayName="DialogForm";const Za=p.memo(Ar);Ar.__docgenInfo={description:"",methods:[],displayName:"DialogForm",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactElement"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},submitTimeout:{required:!1,tsType:{name:"number"},description:""},autoClose:{required:!1,tsType:{name:"boolean"},description:""},destroyOnClose:{required:!1,tsType:{name:"boolean"},description:""},dialogProps:{required:!1,tsType:{name:"Partial",elements:[{name:"DialogProps"}],raw:"Partial<DialogProps>"},description:""}},composes:["Omit"]};const gr=oe(`${de}-query-filter`);function Xa(){if(typeof window>"u")return{};const r={};return new URLSearchParams(window.location.search).forEach((n,s)=>{r[s]=n}),r}function Lr(r){if(typeof window>"u")return;const n=new URLSearchParams;for(const[a,i]of Object.entries(r))i!=null&&i!==""&&n.set(a,String(i));const s=n.toString(),t=s?`${window.location.pathname}?${s}`:window.location.pathname;window.history.replaceState(null,"",t)}const Or=r=>{const{defaultCollapsed:n=!0,collapsed:s,onCollapse:t,defaultColsNumber:a=3,labelWidth:i,split:h=!1,searchConfig:m,syncToUrl:d,onFinish:u,onReset:P,children:v,submitter:w=!1,initialValues:R,...D}=r,[o,f]=Jt(n,s),l=p.useRef(!1),j=p.useMemo(()=>{if(!d||l.current)return R;l.current=!0;const q=Xa();return typeof d=="function"?{...R,...d(q,"get")}:{...R,...q}},[]),y=B(q=>{if(!d)return;const O=typeof d=="function"?d(q,"set"):q;Lr(O)}),g=B(q=>{y(q),u==null||u(q)}),x=B(()=>{d&&Lr({}),P==null||P()}),U=B(()=>{const q=!o;f(q),t==null||t(q)}),_=p.useMemo(()=>{const q=[];return H.Children.forEach(v,O=>{H.isValidElement(O)&&q.push(O)}),q},[v]),T=o?_.slice(0,a):_,M=_.length>a,G=(m==null?void 0:m.searchText)??le.search,$=(m==null?void 0:m.resetText)??le.reset,C=i!==void 0&&i!=="auto"?{width:i}:void 0;return e.jsx(dr,{...D,initialValues:j,onFinish:g,onReset:x,submitter:!1,children:e.jsxs("div",{className:gr(),children:[T.map((q,O)=>e.jsxs(H.Fragment,{children:[h&&O>0&&e.jsx("div",{className:gr("split")}),C?e.jsx("div",{style:C,children:q}):q]},O)),e.jsxs("div",{className:gr("actions"),children:[e.jsx(Q,{type:"submit",color:"primary",children:G}),e.jsx(Q,{type:"button",color:"secondary",onClick:x,children:$}),M&&e.jsx(Q,{type:"button",variant:"text",onClick:U,children:o?le.expand:le.collapse})]})]})})};Or.displayName="QueryFilter";const es=p.memo(Or);Or.__docgenInfo={description:"",methods:[],displayName:"QueryFilter",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},initialValues:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"void"}}},description:""},onFinishFailed:{required:!1,tsType:{name:"signature",type:"function",raw:`(errorInfo: {
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
}`,signature:{properties:[{key:"searchText",value:{name:"ReactNode",required:!1}},{key:"resetText",value:{name:"ReactNode",required:!1}}]}},description:""},syncToUrl:{required:!1,tsType:{name:"union",raw:"boolean | ((values: Record<string, unknown>, type: 'get' | 'set') => Record<string, unknown>)",elements:[{name:"boolean"},{name:"unknown"}]},description:""}},composes:["Omit"]};const A=Object.assign(dr,{Item:Tr,useForm:Ha,useInstance:Wt,useContext:me,Dependency:ur,List:Fe,Group:$a,FieldSet:Ka,Submitter:Yt,Text:c,Password:ve,TextArea:ie,Checkbox:ce,CheckboxGroup:Nr,Switch:ae,Select:ue,RadioGroup:fe,Slider:Pe,DatePicker:xe,Upload:qr}),Os={title:"Components/ProForm",component:A,argTypes:{readonly:{control:"boolean"},loading:{control:"boolean"},grid:{control:"boolean"},disabled:{control:"boolean"}},parameters:{docs:{source:{type:"code"}}},args:{readonly:!1,loading:!1,grid:!1,disabled:!1,onFinish:aa()},tags:["autodocs"]},Te={render:r=>e.jsxs(A,{...r,initialValues:{username:"",email:""},onFinish:n=>{var s;(s=r.onFinish)==null||s.call(r,n),alert(JSON.stringify(n,null,2))},children:[e.jsx(c,{name:"username",label:"Username",placeholder:"Enter username",rules:[{required:!0,message:"Username is required"}]}),e.jsx(c,{name:"email",label:"Email",placeholder:"Enter email",rules:[{required:!0},{type:"email",message:"Invalid email"}]})]})},je={render:r=>e.jsxs(A,{...r,initialValues:{text:"Hello",textWithButton:"",password:"secret123",textarea:`Multi-line
content`,agree:!0,options:[],darkMode:!1,role:"admin",volume:60,date:null},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(c,{name:"text",label:"Text Input",placeholder:"Type here..."}),e.jsx(c,{name:"textWithButton",label:"Text with Button",placeholder:"Enter verification code",fieldProps:{suffix:e.jsx(Q,{color:"primary",size:"small",style:{marginRight:-4},children:"Send Code"})}}),e.jsx(ve,{name:"password",label:"Password",placeholder:"Password"}),e.jsx(ie,{name:"textarea",label:"Text Area",placeholder:"Enter long text"}),e.jsx(ce,{name:"agree",label:"I agree to the terms"}),e.jsx(Nr,{name:"options",label:"Pick options",fieldProps:{options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}]}}),e.jsx(ae,{name:"darkMode",label:"Dark Mode"}),e.jsx(fe,{name:"role",label:"Role",fieldProps:{direction:"horizontal",options:[{label:"Admin",value:"admin"},{label:"Editor",value:"editor"},{label:"Viewer",value:"viewer"}]}}),e.jsx(Pe,{name:"volume",label:"Volume",fieldProps:{min:0,max:100}}),e.jsx(xe,{name:"date",label:"Date",fieldProps:{dateFormat:"yy-mm-dd"}})]})},Se={args:{readonly:!0},render:r=>e.jsxs(A,{...r,initialValues:{name:"John Doe",email:"john@example.com",bio:"Software engineer with 10 years of experience.",newsletter:!0,active:!0},children:[e.jsx(c,{name:"name",label:"Name"}),e.jsx(c,{name:"email",label:"Email"}),e.jsx(ie,{name:"bio",label:"Bio"}),e.jsx(ce,{name:"newsletter",label:"Newsletter"}),e.jsx(ae,{name:"active",label:"Active"})]})},Re={args:{loading:!0},render:r=>e.jsxs(A,{...r,initialValues:{name:"Loading..."},children:[e.jsx(c,{name:"name",label:"Name"}),e.jsx(c,{name:"email",label:"Email"})]})},Ne={args:{grid:!0},render:r=>e.jsxs(A,{...r,rowProps:{gutter:16},initialValues:{},children:[e.jsx(c,{name:"firstName",label:"First Name",colProps:{span:12}}),e.jsx(c,{name:"lastName",label:"Last Name",colProps:{span:12}}),e.jsx(c,{name:"email",label:"Email",colProps:{span:12}}),e.jsx(c,{name:"phone",label:"Phone",colProps:{span:12}}),e.jsx(ie,{name:"address",label:"Address",colProps:{span:24}})]})},qe={render:r=>e.jsxs(A,{...r,children:[e.jsx(c,{name:"sm",label:"Small (sm = 160px)",width:"sm"}),e.jsx(c,{name:"md",label:"Medium (md = 240px)",width:"md"}),e.jsx(c,{name:"lg",label:"Large (lg = 320px)",width:"lg"}),e.jsx(c,{name:"xl",label:"XL (xl = 420px)",width:"xl"}),e.jsx(c,{name:"custom",label:"Custom (200px)",width:200})]})},ke={render:r=>e.jsxs(A,{...r,submitter:{submitText:"Save Changes",resetText:"Discard",render:(n,s)=>e.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:s})},children:[e.jsx(c,{name:"title",label:"Title",rules:[{required:!0}]}),e.jsx(ie,{name:"content",label:"Content"})]})},Ce={render:r=>e.jsx(A,{...r,submitter:!1,children:e.jsx(c,{name:"search",label:"Search",placeholder:"Type to search..."})})},Ee={render:r=>e.jsxs(A,{...r,initialValues:{username:"",email:"",bio:"",agree:!1},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(c,{name:"username",label:"Username",description:"Only letters, numbers, and underscores. 3-20 characters.",placeholder:"Enter username",feedback:"This will be your public display name.",rules:[{required:!0,message:"Username is required"},{min:3,message:"At least 3 characters"}]}),e.jsx(c,{name:"email",label:"Email",description:"We'll never share your email with anyone else.",placeholder:"Enter email",rules:[{required:!0,message:"Email is required"},{type:"email",message:"Invalid email format"}]}),e.jsx(ie,{name:"bio",label:"Bio",description:"Markdown is supported. Max 500 characters.",placeholder:"Tell us about yourself"}),e.jsx(ve,{name:"password",label:"Password",description:"Must contain at least 8 characters, one uppercase and one number.",rules:[{required:!0,message:"Password is required"}]}),e.jsx(ce,{name:"agree",label:"I accept the terms",feedback:"You must agree before submitting."})]})},Ae={render:r=>e.jsxs(A,{...r,initialValues:{},onFinish:n=>alert("Success: "+JSON.stringify(n)),children:[e.jsx(c,{name:"username",label:"Username",rules:[{required:!0,message:"Username is required"},{min:3,message:"At least 3 characters"},{max:20,message:"At most 20 characters"}]}),e.jsx(c,{name:"email",label:"Email",rules:[{required:!0,message:"Email is required"},{pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Invalid email"}]}),e.jsx(ve,{name:"password",label:"Password",rules:[{required:!0},{min:8,message:"At least 8 characters"}]}),e.jsx(ce,{name:"terms",label:"I accept the terms",rules:[{validator:n=>n?!0:"You must accept the terms"}]})]})},Oe={render:r=>{const[n,s]=p.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(Q,{color:n===1?"primary":"grey",onClick:()=>s(1),children:"User 1"}),e.jsx(Q,{color:n===2?"primary":"grey",onClick:()=>s(2),children:"User 2"})]}),e.jsxs(A,{...r,params:{userId:n},request:async t=>(await new Promise(i=>setTimeout(i,1e3)),{1:{name:"Alice",email:"alice@example.com"},2:{name:"Bob",email:"bob@example.com"}}[t==null?void 0:t.userId]||{}),children:[e.jsx(c,{name:"name",label:"Name"}),e.jsx(c,{name:"email",label:"Email"})]})]})},tags:["!autodocs","dev"]},Ve={render:r=>e.jsxs(A,{...r,initialValues:{hasAccount:!1,accountType:""},children:[e.jsx(ae,{name:"hasAccount",label:"Has Account"}),e.jsx(ur,{name:["hasAccount"],children:({hasAccount:n})=>n?e.jsxs(e.Fragment,{children:[e.jsx(c,{name:"accountId",label:"Account ID",rules:[{required:!0}]}),e.jsx(c,{name:"accountName",label:"Account Name"})]}):null})]})},Ie={render:r=>e.jsx(A,{...r,initialValues:{members:[{name:"Alice",role:"Admin"},{name:"Bob",role:"Member"}]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(Fe,{name:"members",label:"Team Members",min:1,max:5,children:n=>n.map(({name:s,key:t})=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-end"},children:[e.jsx(c,{name:`${s}.name`,label:"Name",placeholder:"Name"}),e.jsx(c,{name:`${s}.role`,label:"Role",placeholder:"Role"})]},t))})})},Be={render:r=>e.jsxs(Za,{...r,title:"Create User",trigger:e.jsx(Q,{color:"primary",children:"Open Dialog Form"}),onFinish:async n=>{alert(JSON.stringify(n,null,2))},children:[e.jsx(c,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(c,{name:"email",label:"Email",rules:[{required:!0}]}),e.jsx(ae,{name:"active",label:"Active"})]})},De={render:r=>e.jsxs(Er,{...r,title:"Create User",trigger:e.jsx(Q,{color:"primary",children:"Open Drawer Form"}),onFinish:async n=>{alert(JSON.stringify(n,null,2))},children:[e.jsx(c,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(c,{name:"email",label:"Email",rules:[{required:!0}]}),e.jsx(ie,{name:"bio",label:"Bio"}),e.jsx(ae,{name:"active",label:"Active"})]})},Me={render:r=>{const[n,s]=p.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(Q,{color:"primary",onClick:()=>s(!0),children:"Open (Controlled)"}),e.jsx(Q,{color:"secondary",onClick:()=>s(!1),children:"Close"}),e.jsxs(Er,{...r,open:n,onOpenChange:s,title:"Edit Profile",width:520,initialValues:{name:"Alice",role:"Admin"},onFinish:async t=>{alert(JSON.stringify(t,null,2))},children:[e.jsx(c,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(c,{name:"role",label:"Role"})]})]})},tags:["!autodocs","dev"]},Le={render:r=>e.jsxs(Er,{...r,title:"Settings",placement:"left",width:400,trigger:e.jsx(Q,{color:"secondary",children:"Open from Left"}),onFinish:async n=>{alert(JSON.stringify(n,null,2))},children:[e.jsx(c,{name:"theme",label:"Theme",placeholder:"dark / light"}),e.jsx(c,{name:"language",label:"Language",placeholder:"en / zh"}),e.jsx(ae,{name:"notifications",label:"Enable Notifications"})]})},_e={render:r=>e.jsxs(A,{...r,initialValues:{gender:"male",plan:"pro"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(fe,{name:"gender",label:"Gender",fieldProps:{options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}]}}),e.jsx(fe,{name:"plan",label:"Plan",fieldProps:{direction:"horizontal",options:[{label:"Free",value:"free"},{label:"Pro",value:"pro"},{label:"Enterprise",value:"enterprise"}]}})]})},$e={render:r=>e.jsxs(A,{...r,initialValues:{volume:50,price:200},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(Pe,{name:"volume",label:"Volume",fieldProps:{min:0,max:100,step:1}}),e.jsx(Pe,{name:"price",label:"Price",fieldProps:{min:0,max:1e3,step:10,valuePrefix:"$"}})]})},Ue={render:r=>e.jsxs(A,{...r,initialValues:{birthday:null,startDate:null},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(xe,{name:"birthday",label:"Birthday",fieldProps:{dateFormat:"yy-mm-dd",showIcon:!0}}),e.jsx(xe,{name:"startDate",label:"Start Date",fieldProps:{dateFormat:"mm/dd/yy",showButtonBar:!0}})]})},Ge={render:r=>e.jsxs(A,{...r,grid:!0,rowProps:{gutter:16},initialValues:{name:"",email:"",bio:"",newsletter:!1,darkMode:!0,items:[{title:"Item 1"}]},submitter:{submitText:"Create",resetText:"Clear All"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(c,{name:"name",label:"Full Name",colProps:{span:12},rules:[{required:!0}]}),e.jsx(c,{name:"email",label:"Email",colProps:{span:12},rules:[{required:!0}]}),e.jsx(ie,{name:"bio",label:"Biography",colProps:{span:24}}),e.jsx(ce,{name:"newsletter",label:"Subscribe to newsletter",colProps:{span:12}}),e.jsx(ae,{name:"darkMode",label:"Dark Mode",colProps:{span:12}}),e.jsx(ur,{name:["newsletter"],children:({newsletter:n})=>n?e.jsx(c,{name:"frequency",label:"Email Frequency",placeholder:"daily / weekly / monthly",colProps:{span:24}}):null})]}),tags:["!autodocs","dev"]},Je={render:r=>e.jsx(A,{...r,onFinish:n=>{const s=n.attachment;alert(s?`Selected: ${Array.from(s).map(t=>t.name).join(", ")}`:"No file")},children:e.jsx(qr,{name:"attachment",label:"Attachment",fieldProps:{accept:".pdf,.png,.jpg",multiple:!0,buttonLabel:"Choose Files"}})})},ze={render:r=>e.jsxs(A,{...r,grid:!0,rowProps:{gutter:16},initialValues:{},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(c,{name:"firstName",label:"First Name",colProps:{span:12,sm:12,md:8,lg:6}}),e.jsx(c,{name:"lastName",label:"Last Name",colProps:{span:12,sm:12,md:8,lg:6}}),e.jsx(c,{name:"email",label:"Email",colProps:{span:24,sm:24,md:8,lg:6}}),e.jsx(c,{name:"phone",label:"Phone",colProps:{span:24,sm:12,md:12,lg:6}}),e.jsx(ie,{name:"address",label:"Address",colProps:{span:24}})]})},We={render:r=>e.jsxs(A,{...r,mode:"edit",initialValues:{name:"",email:""},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(c,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(c,{name:"email",label:"Email"})]})},Ke={render:r=>e.jsxs(A,{...r,mode:"read",initialValues:{name:"Alice",email:"alice@example.com",active:!0},children:[e.jsx(c,{name:"name",label:"Name"}),e.jsx(c,{name:"email",label:"Email"}),e.jsx(ae,{name:"active",label:"Active"})]})},He={render:r=>e.jsxs(A,{...r,mode:"update",initialValues:{id:"USR-001",name:"Alice",email:"alice@example.com"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(c,{name:"id",label:"ID",mode:"read"}),e.jsx(c,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(c,{name:"email",label:"Email"})]})},Qe={render:r=>e.jsxs(A,{...r,omitNil:!0,initialValues:{name:"",email:"",note:null},onFinish:n=>{alert(`Nil values stripped:
`+JSON.stringify(n,null,2))},children:[e.jsx(c,{name:"name",label:"Name (leave empty to omit)"}),e.jsx(c,{name:"email",label:"Email (leave empty to omit)"}),e.jsx(c,{name:"note",label:"Note (null → omitted)"})]})},Ye={render:r=>e.jsxs(A,{...r,onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(ue,{name:"status",label:"Status",valueEnum:{active:"Active",inactive:"Inactive",pending:{text:"Pending",disabled:!0}}}),e.jsx(fe,{name:"role",label:"Role",valueEnum:{admin:"Admin",editor:"Editor",viewer:"Viewer"}})]})},Ze={render:r=>e.jsxs(A,{...r,initialValues:{country:"",city:""},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(ue,{name:"country",label:"Country",valueEnum:{us:"United States",cn:"China",jp:"Japan"}}),e.jsx(ue,{name:"city",label:"City (auto-loads based on Country)",dependencies:["country"],request:async n=>(await new Promise(t=>setTimeout(t,500)),{us:[{label:"New York",value:"ny"},{label:"Los Angeles",value:"la"}],cn:[{label:"Beijing",value:"bj"},{label:"Shanghai",value:"sh"}],jp:[{label:"Tokyo",value:"tk"},{label:"Osaka",value:"os"}]}[n==null?void 0:n.country]??[])})]})},Xe={render:r=>e.jsx(A,{...r,onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(ue,{name:"user",label:"User (async loaded)",request:async()=>(await new Promise(n=>setTimeout(n,800)),[{label:"Alice",value:"alice"},{label:"Bob",value:"bob"},{label:"Charlie",value:"charlie"}])})})},er={render:r=>e.jsxs(A,{...r,onValuesChange:n=>{console.log("onValuesChange (debounced):",n)},children:[e.jsx(c,{name:"search",label:"Search (300ms debounce — check console)",debounceTime:300,placeholder:"Type fast..."}),e.jsx(c,{name:"instant",label:"Instant (no debounce)",placeholder:"Type fast..."})]}),tags:["!autodocs","dev"]},rr={render:r=>e.jsxs(A,{...r,initialValues:{name:"Alice",bio:"",theme:"light"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsxs(A.Group,{title:"Basic Info",collapsible:!0,children:[e.jsx(c,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(c,{name:"bio",label:"Bio"})]}),e.jsxs(A.Group,{title:"Preferences",collapsible:!0,defaultCollapsed:!0,children:[e.jsx(c,{name:"theme",label:"Theme"}),e.jsx(ae,{name:"notifications",label:"Notifications"})]})]})},nr={render:r=>e.jsx(A,{...r,onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsxs(A.Group,{title:"Contact",extra:e.jsx(Q,{color:"secondary",size:"small",children:"Import"}),children:[e.jsx(c,{name:"email",label:"Email"}),e.jsx(c,{name:"phone",label:"Phone"})]})})},tr={render:r=>e.jsxs(A,{...r,initialValues:{phone:["+1","555-0100"]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsxs(A.FieldSet,{name:"phone",label:"Phone Number",gap:8,children:[e.jsx(be,{placeholder:"Area code",style:{width:80}}),e.jsx(be,{placeholder:"Number",style:{width:200}})]}),e.jsx(c,{name:"email",label:"Email"})]})},ar={render:r=>e.jsx(A,{...r,initialValues:{groups:[{title:"Group A",items:[{name:"Item 1"}]}]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(Fe,{name:"groups",label:"Groups",children:n=>n.map(({name:s,key:t})=>e.jsxs("div",{style:{border:"1px solid #eee",padding:12,marginBottom:8,borderRadius:4},children:[e.jsx(c,{name:`${s}.title`,label:"Group Title"}),e.jsx(Fe,{name:"items",label:"Items",children:a=>a.map(i=>e.jsx(c,{name:`${i.name}.name`,label:"Item Name"},i.key))})]},t))})}),tags:["!autodocs","dev"]},sr={render:r=>e.jsx(A,{...r,initialValues:{members:[]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(Fe,{name:"members",label:"Team Members",required:!0,requiredMessage:"Add at least one member",children:n=>n.map(({name:s,key:t})=>e.jsx(c,{name:`${s}.name`,label:"Name"},t))})})},or={render:r=>e.jsxs(es,{...r,syncToUrl:!0,onFinish:n=>{console.log("QueryFilter submit:",n),alert(`Check URL bar — params synced!
`+JSON.stringify(n))},children:[e.jsx(c,{name:"keyword",label:"Keyword",placeholder:"Search..."}),e.jsx(ue,{name:"status",label:"Status",valueEnum:{all:"All",active:"Active",inactive:"Inactive"}})]}),tags:["!autodocs","dev"]};var _r,$r,Ur;Te.parameters={...Te.parameters,docs:{...(_r=Te.parameters)==null?void 0:_r.docs,source:{originalSource:`{
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
}`,...(Ur=($r=Te.parameters)==null?void 0:$r.docs)==null?void 0:Ur.source}}};var Gr,Jr,zr;je.parameters={...je.parameters,docs:{...(Gr=je.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
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
}`,...(zr=(Jr=je.parameters)==null?void 0:Jr.docs)==null?void 0:zr.source}}};var Wr,Kr,Hr;Se.parameters={...Se.parameters,docs:{...(Wr=Se.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
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
}`,...(Hr=(Kr=Se.parameters)==null?void 0:Kr.docs)==null?void 0:Hr.source}}};var Qr,Yr,Zr;Re.parameters={...Re.parameters,docs:{...(Qr=Re.parameters)==null?void 0:Qr.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <ProForm {...args} initialValues={{
    name: 'Loading...'
  }}>
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
    </ProForm>
}`,...(Zr=(Yr=Re.parameters)==null?void 0:Yr.docs)==null?void 0:Zr.source}}};var Xr,en,rn;Ne.parameters={...Ne.parameters,docs:{...(Xr=Ne.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
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
}`,...(rn=(en=Ne.parameters)==null?void 0:en.docs)==null?void 0:rn.source}}};var nn,tn,an;qe.parameters={...qe.parameters,docs:{...(nn=qe.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  render: args => <ProForm {...args}>
      <ProFormText name="sm" label="Small (sm = 160px)" width="sm" />
      <ProFormText name="md" label="Medium (md = 240px)" width="md" />
      <ProFormText name="lg" label="Large (lg = 320px)" width="lg" />
      <ProFormText name="xl" label="XL (xl = 420px)" width="xl" />
      <ProFormText name="custom" label="Custom (200px)" width={200} />
    </ProForm>
}`,...(an=(tn=qe.parameters)==null?void 0:tn.docs)==null?void 0:an.source}}};var sn,on,ln;ke.parameters={...ke.parameters,docs:{...(sn=ke.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(ln=(on=ke.parameters)==null?void 0:on.docs)==null?void 0:ln.source}}};var mn,dn,un;Ce.parameters={...Ce.parameters,docs:{...(mn=Ce.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} submitter={false}>
      <ProFormText name="search" label="Search" placeholder="Type to search..." />
    </ProForm>
}`,...(un=(dn=Ce.parameters)==null?void 0:dn.docs)==null?void 0:un.source}}};var cn,pn,fn;Ee.parameters={...Ee.parameters,docs:{...(cn=Ee.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(fn=(pn=Ee.parameters)==null?void 0:pn.docs)==null?void 0:fn.source}}};var gn,yn,bn;Ae.parameters={...Ae.parameters,docs:{...(gn=Ae.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
}`,...(bn=(yn=Ae.parameters)==null?void 0:yn.docs)==null?void 0:bn.source}}};var hn,Fn,Pn;Oe.parameters={...Oe.parameters,docs:{...(hn=Oe.parameters)==null?void 0:hn.docs,source:{originalSource:`{
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
}`,...(Pn=(Fn=Oe.parameters)==null?void 0:Fn.docs)==null?void 0:Pn.source}}};var xn,wn,vn;Ve.parameters={...Ve.parameters,docs:{...(xn=Ve.parameters)==null?void 0:xn.docs,source:{originalSource:`{
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
}`,...(vn=(wn=Ve.parameters)==null?void 0:wn.docs)==null?void 0:vn.source}}};var Tn,jn,Sn;Ie.parameters={...Ie.parameters,docs:{...(Tn=Ie.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(Sn=(jn=Ie.parameters)==null?void 0:jn.docs)==null?void 0:Sn.source}}};var Rn,Nn,qn;Be.parameters={...Be.parameters,docs:{...(Rn=Be.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(qn=(Nn=Be.parameters)==null?void 0:Nn.docs)==null?void 0:qn.source}}};var kn,Cn,En;De.parameters={...De.parameters,docs:{...(kn=De.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(En=(Cn=De.parameters)==null?void 0:Cn.docs)==null?void 0:En.source}}};var An,On,Vn;Me.parameters={...Me.parameters,docs:{...(An=Me.parameters)==null?void 0:An.docs,source:{originalSource:`{
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
}`,...(Vn=(On=Me.parameters)==null?void 0:On.docs)==null?void 0:Vn.source}}};var In,Bn,Dn;Le.parameters={...Le.parameters,docs:{...(In=Le.parameters)==null?void 0:In.docs,source:{originalSource:`{
  render: args => <DrawerForm {...args} title="Settings" placement="left" width={400} trigger={<Button color="secondary">Open from Left</Button>} onFinish={async values => {
    alert(JSON.stringify(values, null, 2));
  }}>
      <ProFormText name="theme" label="Theme" placeholder="dark / light" />
      <ProFormText name="language" label="Language" placeholder="en / zh" />
      <ProFormSwitch name="notifications" label="Enable Notifications" />
    </DrawerForm>
}`,...(Dn=(Bn=Le.parameters)==null?void 0:Bn.docs)==null?void 0:Dn.source}}};var Mn,Ln,_n;_e.parameters={..._e.parameters,docs:{...(Mn=_e.parameters)==null?void 0:Mn.docs,source:{originalSource:`{
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
}`,...(_n=(Ln=_e.parameters)==null?void 0:Ln.docs)==null?void 0:_n.source}}};var $n,Un,Gn;$e.parameters={...$e.parameters,docs:{...($n=$e.parameters)==null?void 0:$n.docs,source:{originalSource:`{
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
}`,...(Gn=(Un=$e.parameters)==null?void 0:Un.docs)==null?void 0:Gn.source}}};var Jn,zn,Wn;Ue.parameters={...Ue.parameters,docs:{...(Jn=Ue.parameters)==null?void 0:Jn.docs,source:{originalSource:`{
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
}`,...(Wn=(zn=Ue.parameters)==null?void 0:zn.docs)==null?void 0:Wn.source}}};var Kn,Hn,Qn;Ge.parameters={...Ge.parameters,docs:{...(Kn=Ge.parameters)==null?void 0:Kn.docs,source:{originalSource:`{
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
}`,...(Qn=(Hn=Ge.parameters)==null?void 0:Hn.docs)==null?void 0:Qn.source}}};var Yn,Zn,Xn;Je.parameters={...Je.parameters,docs:{...(Yn=Je.parameters)==null?void 0:Yn.docs,source:{originalSource:`{
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
}`,...(Xn=(Zn=Je.parameters)==null?void 0:Zn.docs)==null?void 0:Xn.source}}};var et,rt,nt;ze.parameters={...ze.parameters,docs:{...(et=ze.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(rt=ze.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var tt,at,st;We.parameters={...We.parameters,docs:{...(tt=We.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: args => <ProForm {...args} mode="edit" initialValues={{
    name: '',
    email: ''
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormText name="name" label="Name" rules={[{
      required: true
    }]} />
      <ProFormText name="email" label="Email" />
    </ProForm>
}`,...(st=(at=We.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var ot,it,lt;Ke.parameters={...Ke.parameters,docs:{...(ot=Ke.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: args => <ProForm {...args} mode="read" initialValues={{
    name: 'Alice',
    email: 'alice@example.com',
    active: true
  }}>
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
      <ProFormSwitch name="active" label="Active" />
    </ProForm>
}`,...(lt=(it=Ke.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var mt,dt,ut;He.parameters={...He.parameters,docs:{...(mt=He.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(ut=(dt=He.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var ct,pt,ft;Qe.parameters={...Qe.parameters,docs:{...(ct=Qe.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(ft=(pt=Qe.parameters)==null?void 0:pt.docs)==null?void 0:ft.source}}};var gt,yt,bt;Ye.parameters={...Ye.parameters,docs:{...(gt=Ye.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(bt=(yt=Ye.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var ht,Ft,Pt;Ze.parameters={...Ze.parameters,docs:{...(ht=Ze.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(Pt=(Ft=Ze.parameters)==null?void 0:Ft.docs)==null?void 0:Pt.source}}};var xt,wt,vt;Xe.parameters={...Xe.parameters,docs:{...(xt=Xe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(vt=(wt=Xe.parameters)==null?void 0:wt.docs)==null?void 0:vt.source}}};var Tt,jt,St;er.parameters={...er.parameters,docs:{...(Tt=er.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onValuesChange={changed => {
    console.log('onValuesChange (debounced):', changed);
  }}>
      <ProFormText name="search" label="Search (300ms debounce — check console)" debounceTime={300} placeholder="Type fast..." />
      <ProFormText name="instant" label="Instant (no debounce)" placeholder="Type fast..." />
    </ProForm>,
  tags: ['!autodocs', 'dev']
}`,...(St=(jt=er.parameters)==null?void 0:jt.docs)==null?void 0:St.source}}};var Rt,Nt,qt;rr.parameters={...rr.parameters,docs:{...(Rt=rr.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(qt=(Nt=rr.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var kt,Ct,Et;nr.parameters={...nr.parameters,docs:{...(kt=nr.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProForm.Group title="Contact" extra={<Button color="secondary" size="small">Import</Button>}>
        <ProFormText name="email" label="Email" />
        <ProFormText name="phone" label="Phone" />
      </ProForm.Group>
    </ProForm>
}`,...(Et=(Ct=nr.parameters)==null?void 0:Ct.docs)==null?void 0:Et.source}}};var At,Ot,Vt;tr.parameters={...tr.parameters,docs:{...(At=tr.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Vt=(Ot=tr.parameters)==null?void 0:Ot.docs)==null?void 0:Vt.source}}};var It,Bt,Dt;ar.parameters={...ar.parameters,docs:{...(It=ar.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Dt=(Bt=ar.parameters)==null?void 0:Bt.docs)==null?void 0:Dt.source}}};var Mt,Lt,_t;sr.parameters={...sr.parameters,docs:{...(Mt=sr.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(_t=(Lt=sr.parameters)==null?void 0:Lt.docs)==null?void 0:_t.source}}};var $t,Ut,Gt;or.parameters={...or.parameters,docs:{...($t=or.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Gt=(Ut=or.parameters)==null?void 0:Ut.docs)==null?void 0:Gt.source}}};const Vs=["Default","AllFieldTypes","ReadonlyMode","LoadingState","GridLayout","WidthPresets","CustomSubmitter","NoSubmitter","DescriptionAndFeedback","Validation","AsyncRequest","Dependency","DynamicList","DialogFormStory","DrawerFormStory","DrawerFormControlled","DrawerFormLeft","RadioGroupStory","SliderStory","DatePickerStory","KitchenSink","UploadField","GridResponsive","ModeEdit","ModeRead","ModeUpdate","OmitNil","ValueEnum","FieldDependencies","FieldRequest","DebounceField","GroupCollapsible","GroupWithExtra","FieldSet","NestedList","ListRequired","SyncToUrl"];export{je as AllFieldTypes,Oe as AsyncRequest,ke as CustomSubmitter,Ue as DatePickerStory,er as DebounceField,Te as Default,Ve as Dependency,Ee as DescriptionAndFeedback,Be as DialogFormStory,Me as DrawerFormControlled,Le as DrawerFormLeft,De as DrawerFormStory,Ie as DynamicList,Ze as FieldDependencies,Xe as FieldRequest,tr as FieldSet,Ne as GridLayout,ze as GridResponsive,rr as GroupCollapsible,nr as GroupWithExtra,Ge as KitchenSink,sr as ListRequired,Re as LoadingState,We as ModeEdit,Ke as ModeRead,He as ModeUpdate,ar as NestedList,Ce as NoSubmitter,Qe as OmitNil,_e as RadioGroupStory,Se as ReadonlyMode,$e as SliderStory,or as SyncToUrl,Je as UploadField,Ae as Validation,Ye as ValueEnum,qe as WidthPresets,Vs as __namedExportsOrder,Os as default};
