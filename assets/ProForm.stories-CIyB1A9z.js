import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as p,R as K}from"./index-CP2yOfOm.js";import{f as ea}from"./index-DCiaR2iG.js";import{c as oe,j as sr}from"./classnames-h1fAIaEr.js";import{R as ra,C as na}from"./Grid-ZyyVHIg8.js";import{u as I}from"./index-_M0HKnWf.js";import{u as te,a as Vr}from"./index-nCcupNJZ.js";import{B as Q}from"./Button-BesxPG0u.js";import{u as ye,c as br,T as gr}from"./Typography-DKjEOsRd.js";import{u as _t}from"./index-CyN509qF.js";import{b as be}from"./Trade-B6Cw7JzU.js";import{C as ta,a as aa}from"./index-B8Q7aUTv.js";import{b as sa}from"./Switch-DNYwK99I.js";import{S as oa,f as la,n as ia}from"./Select-CM9To2ee.js";import{i as ma}from"./RadioGroup-D4WMRcvE.js";import{S as da}from"./Slider-BYcvxhWE.js";import{C as ua}from"./Calendar-BBlvtRS-.js";import{U as ca}from"./UploadFileBar-D-u34_Vq.js";import{a as pa}from"./Drawer-B3xJMn8-.js";import{a as fa}from"./Dialog-BvXRJmeK.js";import"./Icons-BarT8jPS.js";/* empty css               */import"./Tag-Cgi-LwCu.js";import"./Spinner-DpKeyGf8.js";import"./iframe-DfszpEJN.js";import"./ResizeObserver-DW8-DKQf.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";import"./index-CN0Pk037.js";import"./Skeleton-BbdGRf15.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";import"./Portal-D8KWBNKu.js";function ga(r,n){const s=n.split(".");let t=r;for(const a of s){if(t==null||typeof t!="object")return;t=t[a]}return t}function ya(r,n,s){const t=n.split(".");if(t.length===1)return{...r,[n]:s};const a={...r};let l=a;for(let b=0;b<t.length-1;b++){const d=t[b],m=t[b+1],u=/^\d+$/.test(m);(l[d]===void 0||l[d]===null)&&(l[d]=u?[]:{}),Array.isArray(l[d])?l[d]=[...l[d]]:l[d]={...l[d]},l=l[d]}return l[t[t.length-1]]=s,a}function cr(r,n){return n.includes(".")?ga(r,n):r[n]}const $t=(r={})=>{const{initialValues:n={},onFinish:s,onFinishFailed:t,onValuesChange:a,onReset:l,size:b="middle",labelAlign:d="left",disabled:m=!1,colon:u=!0,requiredMark:h=!0,validateTrigger:F="onChange"}=r,[w,q]=p.useState(n),[B,o]=p.useState({}),[y,i]=p.useState({}),[N,c]=p.useState({}),v=I((g,S)=>{q(T=>{const D=g.includes(".")?ya(T,g,S):{...T,[g]:S};return a==null||a({[g]:S},D),D}),S!==""&&S!==null&&S!==void 0&&o(T=>{if(!T[g])return T;const D={...T};return delete D[g],D})}),P=I((g,S)=>{o(T=>{if(S===null){if(!T[g])return T;const D={...T};return delete D[g],D}return{...T,[g]:S}})}),_=I((g,S)=>{c(T=>({...T,[g]:S}))}),G=I(g=>N[g]),j=I(g=>{c(S=>{const T={...S};return delete T[g],T})}),L=I((g,S=[],T)=>{const D=T!==void 0?T:cr(w,g);for(const A of S){if(A.required&&(D==null||D==="")){const k=A.message||`${g} is required`;return P(g,k),!1}if(A.min&&typeof D=="string"&&D.length<A.min){const k=A.message||`${g} must be at least ${A.min} characters`;return P(g,k),!1}if(A.max&&typeof D=="string"&&D.length>A.max){const k=A.message||`${g} must be no more than ${A.max} characters`;return P(g,k),!1}if(A.pattern&&typeof D=="string"&&!A.pattern.test(D)){const k=A.message||`${g} format is invalid`;return P(g,k),!1}if(A.validator&&typeof A.validator=="function")try{const k=A.validator(D,w);if(k!==!0&&typeof k!="object")return P(g,typeof k=="string"?k:"Validation failed"),!1}catch(k){const C=k instanceof Error?k.message:"Validation error";return P(g,C),!1}}return B[g]&&P(g,null),!0}),U=I((g=N)=>{let S=!0;return Object.keys(g).forEach(T=>{const D=g[T];L(T,D)||(S=!1)}),S}),$=I(()=>{let g=!1;const S={};return Object.keys(N).forEach(T=>{const D=N[T],A=cr(w,T);for(const k of D){if(k.required&&(A==null||A==="")){S[T]=k.message||`${T} is required`,g=!0;break}if(k.min&&typeof A=="string"&&A.length<k.min){S[T]=k.message||`${T} must be at least ${k.min} characters`,g=!0;break}if(k.max&&typeof A=="string"&&A.length>k.max){S[T]=k.message||`${T} must be no more than ${k.max} characters`,g=!0;break}if(k.pattern&&typeof A=="string"&&!k.pattern.test(A)){S[T]=k.message||`${T} format is invalid`,g=!0;break}if(k.validator&&typeof k.validator=="function")try{const C=k.validator(A,w);if(C!==!0&&typeof C!="object"){S[T]=typeof C=="string"?C:"Validation failed",g=!0;break}}catch(C){S[T]=C instanceof Error?C.message:"Validation error",g=!0;break}}}),o(S),g?(t==null||t({values:w,errors:S}),{success:!1,errors:S}):(s==null||s(w),{success:!0,values:w})}),V=te(g=>(g==null||g.preventDefault(),$())),x=I(()=>{q(n),o({}),i({}),l==null||l()}),M=te(g=>{g==null||g.preventDefault(),x()}),R=I(g=>cr(w,g)),J=I(()=>w),W=I(g=>{q(S=>{const T={...S,...g};return a==null||a(g,T),T})}),Z=p.useMemo(()=>({submit:$,resetFields:x,getFieldValue:R,getFieldsValue:J,setFieldsValue:W,setFieldValue:v,validateFields:U}),[$,x,R,J,W,v,U]),Y=p.useMemo(()=>({values:w,errors:B,touched:y,formInstance:Z,setFieldValue:v,setFieldError:P,validateField:L,registerField:_,unregisterField:j,size:b,labelAlign:d,disabled:m,colon:u,requiredMark:h,validateTrigger:F}),[w,B,y,Z,v,P,L,_,j,b,d,m,u,h,F]);return{values:w,errors:B,touched:y,fieldRules:N,getFieldRules:G,setFieldValue:v,setFieldError:P,setFieldsValue:W,getFieldValue:R,getFieldsValue:J,validateField:L,validateFields:U,registerField:_,unregisterField:j,handleSubmit:V,handleReset:M,resetFields:x,formInstance:Z,coreContextShape:Y}},hr=p.createContext(null);hr.displayName="ProFormContext";const ie=()=>{const r=p.useContext(hr);if(!r)throw new Error("useProFormContext must be used within a <ProForm> component");return r},Gt=()=>ie().formInstance,Fr=p.createContext({});Fr.displayName="FormListContext";const Ut=()=>p.useContext(Fr),de="proform",Or={sm:160,md:240,lg:320,xl:420},ba=24,Jt="md",zt="default",le={submit:"Submit",reset:"Reset",search:"Search",add:"Add",delete:"Delete",copy:"Copy",collapse:"Collapse",expand:"Expand"},Ir=oe(`${de}-submitter`),Pr=r=>{const{submitText:n=le.submit,resetText:s=le.reset,render:t,onSubmit:a,onReset:l,submitButtonProps:b,resetButtonProps:d,loading:m=!1}=r,u=Gt(),h=I(()=>{a==null||a(),u.submit()}),F=I(()=>{l==null||l(),u.resetFields()}),w=p.useMemo(()=>e.jsx(Q,{type:"button",color:"secondary",...d,onClick:F,children:s},"reset"),[s,d,F]),q=p.useMemo(()=>e.jsx(Q,{type:"submit",color:"primary",loading:m,...b,children:n},"submit"),[n,b,m]),B=[w,q];return t?e.jsx("div",{className:Ir(),children:t({form:u,submit:h,reset:F},B)}):e.jsxs("div",{className:Ir(),children:[w,q]})};Pr.displayName="Submitter";const Wt=p.memo(Pr);Pr.__docgenInfo={description:"",methods:[],displayName:"Submitter",props:{submitText:{required:!1,tsType:{name:"ReactNode"},description:""},resetText:{required:!1,tsType:{name:"ReactNode"},description:""},render:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  props: { form: FormCoreInstance; submit: () => void; reset: () => void },
  dom: ReactElement[],
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ form: FormCoreInstance; submit: () => void; reset: () => void }",signature:{properties:[{key:"form",value:{name:"FormCoreInstance",required:!0}},{key:"submit",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"reset",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},name:"props"},{type:{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},name:"dom"}],return:{name:"ReactNode"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitButtonProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"},description:""},resetButtonProps:{required:!1,tsType:{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};function lr(r){return r==null?String(r):typeof r!="object"?JSON.stringify(r):Array.isArray(r)?"["+r.map(lr).join(",")+"]":"{"+Object.keys(r).sort().map(s=>JSON.stringify(s)+":"+lr(r[s])).join(",")+"}"}function ve(r){return r==null||r===""?"-":String(r)}function Kt(r){return r==null?"-":r?"Yes":"No"}function ha(r){if(r==null||r==="")return"-";if(typeof r=="number")return String(r);const n=Number(r);return Number.isNaN(n)?"-":String(n)}function he(r,n){const s=n.split(".");let t=r;for(const a of s){if(t==null||typeof t!="object")return;t=t[a]}return t}function Fa(r){return typeof r=="number"?r:Or[r]??Or.md}function Br(r){if(r===!1||r===void 0)return{disabled:!1,rest:{}};const{disabled:n=!1,...s}=r;return{disabled:n,rest:s}}function or(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)}function Pa(r,n){const s=Object.keys(n);if(s.length===0)return r;const t={...r};return s.sort().forEach(a=>{const l=n[a];if(typeof l!="function")return;const b=he(t,a),d=l(b,a,t);if(or(d)){const m=a.lastIndexOf(".");if(m===-1)delete t[a],Object.assign(t,d);else{const u=a.slice(0,m),h=he(t,u);if(or(h)){const F=a.slice(m+1);delete h[F],Object.assign(h,d)}}}else{const m=a.split(".");if(m.length===1)t[a]=d;else{let u=t;for(let h=0;h<m.length-1;h++){const F=m[h];!or(u[F])&&!Array.isArray(u[F])&&(u[F]={}),u=u[F]}u[m[m.length-1]]=d}}}),t}function Ht(r){const n={};for(const s of Object.keys(r)){const t=r[s];if(!(t==null||t===""))if(or(t)){const a=Ht(t);Object.keys(a).length>0&&(n[s]=a)}else n[s]=t}return n}function Qt(r){return Object.entries(r).map(([n,s])=>typeof s=="string"?{label:s,value:n}:{label:s.text,value:n,disabled:s.disabled})}const xa=oe(de),va=oe("form"),xr=r=>{const{children:n,className:s,submitter:t,readonly:a=!1,mode:l,grid:b=!1,colProps:d,rowProps:m,loading:u=!1,request:h,params:F,initialValues:w,onFinish:q,onFinishFailed:B,onValuesChange:o,onReset:y,formRef:i,omitNil:N=!0,size:c="middle",labelAlign:v="left",disabled:P=!1,colon:_=!0,requiredMark:G=!0,validateTrigger:j="onChange",prefixCls:L,...U}=r,$=l??(a?"read":"edit"),[V,x]=ye(!1),M=u||V,R=p.useRef({}),J=I((ee,ne)=>{R.current[ee]=ne}),W=I(ee=>{delete R.current[ee]}),Z=Vr(q),Y=I(ee=>{let ne=Pa(ee,R.current);return N&&(ne=Ht(ne)),ne}),g=I(ee=>{var ne;(ne=Z.current)==null||ne.call(Z,Y(ee))}),{coreContextShape:S,formInstance:T,handleSubmit:D,handleReset:A}=$t({initialValues:w,onFinish:g,onFinishFailed:B,onValuesChange:o,onReset:y,size:c,labelAlign:v,disabled:P||M,colon:_,requiredMark:G,validateTrigger:j}),k=p.useMemo(()=>({...T,getFieldsFormatValue:()=>Y(T.getFieldsValue()),validateFieldsReturnFormatValue:()=>T.validateFields()?{success:!0,values:Y(T.getFieldsValue())}:{success:!1}}),[T,Y]);p.useEffect(()=>{i&&(i.current=k)});const C=Vr(h),O=p.useMemo(()=>lr(F),[F]);p.useEffect(()=>{const ee=async()=>{const ne=C.current;if(ne){x(!0);try{const ur=await ne(F);ur&&typeof ur=="object"&&T.setFieldsValue(ur)}finally{x(!1)}}};C.current&&ee()},[O,F,C,x,T]);const H=p.useMemo(()=>({...S,formInstance:k,readonly:a,mode:$,grid:b,colProps:d??{span:24},registerTransform:J,unregisterTransform:W}),[S,k,a,$,b,d,J,W]),z=b?ra:p.Fragment,X=b?{...m}:{},re=t!==!1&&$!=="read"?e.jsx(Wt,{...typeof t=="object"?t:{},loading:M}):null;return e.jsx(hr.Provider,{value:H,children:e.jsxs("form",{...U,className:va(void 0,sr(xa(),s)),onSubmit:D,onReset:A,children:[e.jsx(z,{...X,children:n}),re]})})};xr.displayName="ProForm";const ir=p.memo(xr);xr.__docgenInfo={description:"",methods:[],displayName:"ProForm",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},initialValues:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"void"}}},description:""},onFinishFailed:{required:!1,tsType:{name:"signature",type:"function",raw:`(errorInfo: {
  values: Record<string, unknown>;
  errors: Record<string, string>;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  values: Record<string, unknown>;
  errors: Record<string, string>;
}`,signature:{properties:[{key:"values",value:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>",required:!0}},{key:"errors",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}}]}},name:"errorInfo"}],return:{name:"void"}}},description:""},onValuesChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  changedValues: Record<string, unknown>,
  allValues: Record<string, unknown>,
) => void`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"changedValues"},{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"allValues"}],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof FORM_SIZES)[number]"},description:""},labelAlign:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LABEL_ALIGNS)[number]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},colon:{required:!1,tsType:{name:"boolean"},description:""},requiredMark:{required:!1,tsType:{name:"boolean"},description:""},validateTrigger:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof VALIDATE_TRIGGERS)[number]"},description:""},submitter:{required:!1,tsType:{name:"union",raw:"SubmitterProps | false",elements:[{name:"SubmitterProps"},{name:"literal",value:"false"}]},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:"@deprecated Use `mode='read'` instead"},mode:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROFORM_MODES)[number]"},description:""},grid:{required:!1,tsType:{name:"boolean"},description:""},colProps:{required:!1,tsType:{name:"ProFormColProps"},description:""},rowProps:{required:!1,tsType:{name:"Partial",elements:[{name:"GridRowProps"}],raw:"Partial<GridRowProps>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},request:{required:!1,tsType:{name:"signature",type:"function",raw:"(params?: unknown) => Promise<Record<string, unknown>>",signature:{arguments:[{type:{name:"unknown"},name:"params"}],return:{name:"Promise",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Promise<Record<string, unknown>>"}}},description:""},params:{required:!1,tsType:{name:"unknown"},description:""},formRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"ProFormFormInstance | undefined",elements:[{name:"ProFormFormInstance"},{name:"undefined"}]}],raw:"MutableRefObject<ProFormFormInstance | undefined>"},description:""},omitNil:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const wa="md",Ta="default",ja="sm",Sa="danger",Ra="sm",Na="default-tertiary",qa=["Input","InputNumber","Select","BaseSelect","DatePicker","TimePicker","Checkbox","Radio","Switch","TextArea"];function Dr(r,n){const s=n.split(".");let t=r;for(const a of s){if(t==null||typeof t!="object")return;t=t[a]}return t}function ka(r){const{name:n,rules:s=[],required:t,validateStatus:a}=r,l=ie(),{values:b,errors:d,setFieldValue:m,validateField:u,registerField:h,unregisterField:F,size:w,labelAlign:q,requiredMark:B,validateTrigger:o}=l,y=!!(t||s.some(j=>j.required)),i=n?n.includes(".")?Dr(b,n):b[n]:void 0,N=n?n.includes(".")?Dr(d,n):d[n]:void 0,c=a||(N?"error":void 0),v=te(j=>n&&s.length>0?u(n,s,j):!0),P=te(j=>{n&&(m(n,j),o==="onChange"&&v(j))}),_=te(()=>{o==="onBlur"&&v(i)});return p.useEffect(()=>(n&&h&&h(n,s),()=>{n&&F&&F(n)}),[n]),{fieldValue:i,fieldError:N,validateStatus:c,isRequired:y,size:w,labelAlign:q,requiredMark:B,injectField:j=>{var M;if(!n||!K.isValidElement(j))return j;const L=j.props,U=(M=j.type)==null?void 0:M.displayName;if(!(qa.includes(U)||L.placeholder!==void 0||L.value!==void 0))return j;let V=i;V==null?["Input","TextArea","InputNumber"].includes(U||"")||L.placeholder!==void 0?V="":["Checkbox","Switch"].includes(U||"")&&(V=!1):["Input","TextArea"].includes(U||"")&&typeof V!="string"&&typeof V!="number"&&(V="");const x={value:V,onChange:(R,...J)=>{const W=R&&typeof R=="object"&&"target"in R?R.target.value:R;P(W),typeof L.onChange=="function"&&L.onChange(R,...J)},onBlur:(...R)=>{_(),typeof L.onBlur=="function"&&L.onBlur(...R)},size:L.size||w,...c==="error"&&{status:"error"}};return K.cloneElement(j,x)}}}const Ca="-";function Ea(r,n,s){if(n==null||n==="")return null;switch(r){case"password":return"*".repeat(String(n).length);case"switch":return n?"On":"Off";case"digit":{const t=Number(n);return Number.isNaN(t)?String(n):t.toLocaleString()}case"select":case"radio":case"tag":{if(!s.valueEnum)return String(n);const a=Qt(s.valueEnum).find(l=>String(l.value)===String(n));return a?a.label:String(n)}case"date":case"dateTime":case"text":default:return String(n)}}const Zt=({name:r,valueType:n,valueEnum:s,convertValue:t,readonlyRender:a,emptyText:l})=>{const{values:b}=ie(),d=r?b[r]:void 0,m=t&&r?t(d,r):d;if(a){const h=a(m,b);return e.jsx("span",{children:h??l})}if(m==null||m==="")return e.jsx("span",{children:l});const u=Ea(n,m,{valueEnum:s});return e.jsx("span",{children:u??l})};Zt.displayName="ProFormItemReadonly";const Aa=p.memo(Zt),Yt=({name:r,convertValue:n,children:s})=>{const{values:t}=ie(),a=t[r],l=n?n(a,r):a;return K.cloneElement(s,{value:l})};Yt.displayName="ProFormItemConvertValue";const Va=p.memo(Yt),vr=r=>{const{children:n,name:s,label:t,rules:a,required:l,help:b,validateStatus:d,className:m="",prefixCls:u="form-item",hidden:h,transform:F,convertValue:w,valueType:q,readonlyRender:B,colProps:o,mode:y,emptyText:i=Ca,valueEnum:N}=r,c=ie(),P=(y??c.mode)==="read",{fieldError:_,isRequired:G,size:j,labelAlign:L,requiredMark:U,injectField:$}=ka({name:s,rules:a,required:l,validateStatus:d});if(p.useEffect(()=>{if(!(!s||!F))return c.registerTransform(s,F),()=>{c.unregisterTransform(s)}},[s,F,c.registerTransform,c.unregisterTransform]),h)return null;let V;if(P)V=e.jsx(Aa,{name:s,valueType:q,valueEnum:N,convertValue:w,readonlyRender:B,emptyText:i});else{const R=$(n);w&&s&&K.isValidElement(R)?V=e.jsx(Va,{name:s,convertValue:w,children:R}):V=R}const x=oe(u),M=e.jsxs("div",{className:x(void 0,sr(j==="small"&&x("small"),m)),children:[t&&e.jsx("div",{className:x("label-wrapper",sr(x("label-wrapper-vertical"),L&&x(`label-wrapper-${L}`))),children:e.jsx(br,{as:"label",size:wa,color:Ta,className:x("label",sr(G&&U&&x("label-required"))),children:t})}),e.jsxs("div",{className:x("control"),children:[V,_&&e.jsx(gr,{as:"div",className:x("error"),size:ja,color:Sa,children:_}),!_&&b&&e.jsx(gr,{as:"div",className:x("help"),size:Ra,color:Na,children:b})]})]});if(c.grid){const R={...c.colProps,...o},{span:J=ba,sm:W,md:Z,lg:Y}=R;return e.jsx(na,{span:J,sm:W,md:Z,lg:Y,children:M})}return M};vr.displayName="ProFormItem";const wr=p.memo(vr);vr.__docgenInfo={description:"",methods:[],displayName:"ProFormItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""},rules:{required:!1,tsType:{name:"Array",elements:[{name:"Rule"}],raw:"Rule[]"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},help:{required:!1,tsType:{name:"ReactNode"},description:""},validateStatus:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof VALIDATE_STATUSES)[number]"},description:""},hasFeedback:{required:!1,tsType:{name:"boolean"},description:""},colon:{required:!1,tsType:{name:"boolean"},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""},transform:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
>`},description:"Value enum for select/radio/tag value types"}}};const Tr=({name:r,ignoreFormListField:n,children:s})=>{const{values:t,formInstance:a}=ie(),l=Ut(),b=p.useMemo(()=>{const u=!n&&l.listName!==void 0;return r.map(h=>u?`${l.listName}.${h}`:h)},[r,n,l.listName]),d=p.useMemo(()=>{const u={};for(let h=0;h<r.length;h++){const F=r[h],w=b[h];u[F]=w.includes(".")?he(t,w):t[w]}return u},[r,b,t]),m=p.useMemo(()=>({submit:()=>({success:!1}),resetFields:()=>{},getFieldValue:u=>u.includes(".")?he(t,u):t[u],getFieldsValue:()=>t,setFieldsValue:()=>{},setFieldValue:()=>{},validateFields:()=>!1,getFieldsFormatValue:()=>t,validateFieldsReturnFormatValue:()=>({success:!1})}),[t]);return e.jsx(e.Fragment,{children:s(d,a??m)})};Tr.displayName="ProFormDependency";const mr=p.memo(Tr);Tr.__docgenInfo={description:"",methods:[],displayName:"ProFormDependency",props:{name:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ignoreFormListField:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>, form: ProFormFormInstance) => ReactNode",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"},{type:{name:"ProFormFormInstance"},name:"form"}],return:{name:"ReactNode"}}},description:""}}};const ge=oe(`${de}-list`);let Oa=0;const pr=()=>`list_${++Oa}`,jr=r=>{const{name:n,label:s,min:t,max:a,required:l,requiredMessage:b="This list cannot be empty",initialValue:d,copyIconProps:m,deleteIconProps:u,creatorButtonProps:h,itemRender:F,actionRender:w,children:q,onAfterAdd:B,onAfterRemove:o}=r,y=Ut(),i=y.listName?`${y.listName}.${n}`:n,{values:N,setFieldValue:c}=ie(),v=p.useRef(!1),P=p.useRef([]),[_,G]=ye(null),j=p.useMemo(()=>{const C=i.includes(".")?he(N,i):N[i];return Array.isArray(C)?C:[]},[N,i]);for(;P.current.length<j.length;)P.current.push(pr());P.current.length>j.length&&(P.current=P.current.slice(0,j.length)),p.useEffect(()=>{v.current||j.length===0&&(!Array.isArray(d)||d.length===0||(v.current=!0,c(i,[...d]),P.current=d.map(()=>pr())))},[j.length,d,i,c]),p.useEffect(()=>{l&&j.length>0&&_&&G(null)},[j.length,l,_,G]);const L=a==null||j.length<a,U=t==null||j.length>t;I(()=>l?j.length===0?(G(b),!1):(G(null),!0):!0);const $=I((C,O)=>{if(!L)return;const H=C??{},z=[...j],X=[...P.current],re=typeof O=="number"?O:z.length;z.splice(re,0,H),X.splice(re,0,pr()),P.current=X,c(i,z),B==null||B(H,re)}),V=I(C=>{if(!U)return;const O=[...j],H=[...P.current];O.splice(C,1),H.splice(C,1),P.current=H,c(i,O),o==null||o(C),l&&O.length===0&&G(b)}),x=I(C=>{if(!L)return;const O=j[C]?{...j[C]}:{};$(O,C+1)}),M=I((C,O)=>{if(C===O||C<0||C>=j.length||O<0||O>=j.length)return;const H=[...j],z=[...P.current],[X]=H.splice(C,1),[re]=z.splice(C,1);H.splice(O,0,X),z.splice(O,0,re),P.current=z,c(i,H)}),R=I(()=>j),J=p.useMemo(()=>({add:$,remove:V,move:M,copy:x,getList:R}),[$,V,M,x,R]),W=p.useMemo(()=>j.map((C,O)=>({name:`${i}.${O}`,key:P.current[O]||`fallback_${O}`})),[j,i]),Z=typeof q=="function"?q(W,J):q,Y=p.useMemo(()=>j.map((C,O)=>{const H=Br(m),z=Br(u),X={copy:m!==!1?e.jsx(Q,{type:"button",color:"secondary",size:"small",...H.rest,onClick:()=>x(O),disabled:!L||H.disabled,children:le.copy},`copy-${O}`):null,delete:u!==!1?e.jsx(Q,{type:"button",color:"secondary",size:"small",...z.rest,onClick:()=>V(O),disabled:!U||z.disabled,children:le.delete},`delete-${O}`):null},re=w?w({index:O,record:C},J,X):[X.copy,X.delete].filter(Boolean),ee=e.jsx("div",{className:ge("row-actions"),children:re},P.current[O]||O);return F?F({listDom:ee,action:J}):ee}),[j,m,u,L,U,x,V,J,w,F]),g=h!==!1,S=g&&typeof h=="object"?h:{},T=(S==null?void 0:S.position)??"bottom",D=(S==null?void 0:S.text)??le.add,A=g?e.jsx(Q,{type:"button",color:"secondary",onClick:()=>{T==="top"?$({},0):$()},disabled:!L,children:D}):null,k=p.useMemo(()=>({listName:i}),[i]);return e.jsx(Fr.Provider,{value:k,children:e.jsxs("div",{className:ge(),children:[s&&e.jsx(br,{className:ge("label"),size:Jt,color:zt,children:s}),T==="top"&&A,e.jsx("div",{className:ge("content"),children:Z}),e.jsx("div",{className:ge("actions"),children:Y}),T==="bottom"&&A,_&&e.jsx(gr,{as:"div",size:"sm",color:"danger",children:_})]})})};jr.displayName="ProFormList";const Fe=p.memo(jr);jr.__docgenInfo={description:"",methods:[],displayName:"ProFormList",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},requiredMessage:{required:!1,tsType:{name:"string"},description:""},initialValue:{required:!1,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},description:""},copyIconProps:{required:!1,tsType:{name:"union",raw:"false | Partial<ButtonProps>",elements:[{name:"literal",value:"false"},{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"}]},description:""},deleteIconProps:{required:!1,tsType:{name:"union",raw:"false | Partial<ButtonProps>",elements:[{name:"literal",value:"false"},{name:"Partial",elements:[{name:"ButtonProps"}],raw:"Partial<ButtonProps>"}]},description:""},creatorButtonProps:{required:!1,tsType:{name:"union",raw:"false | (Partial<ButtonProps> & { text?: ReactNode; position?: 'top' | 'bottom' })",elements:[{name:"literal",value:"false"},{name:"unknown"}]},description:""},itemRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { listDom: ReactNode; action: ProFormListAction }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ listDom: ReactNode; action: ProFormListAction }",signature:{properties:[{key:"listDom",value:{name:"ReactNode",required:!0}},{key:"action",value:{name:"ProFormListAction",required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:""},actionRender:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  row: { index: number; record: unknown },
  action: ProFormListAction,
  defaultDom: { copy: ReactNode; delete: ReactNode },
) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ index: number; record: unknown }",signature:{properties:[{key:"index",value:{name:"number",required:!0}},{key:"record",value:{name:"unknown",required:!0}}]}},name:"row"},{type:{name:"ProFormListAction"},name:"action"},{type:{name:"signature",type:"object",raw:"{ copy: ReactNode; delete: ReactNode }",signature:{properties:[{key:"copy",value:{name:"ReactNode",required:!0}},{key:"delete",value:{name:"ReactNode",required:!0}}]}},name:"defaultDom"}],return:{name:"ReactNode"}}},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((fields: Array<{ name: string; key: string }>, action: ProFormListAction) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},onAfterAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(defaultValue: Record<string, unknown>, index: number) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"defaultValue"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onAfterRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const ce=oe(`${de}-group`),Sr=r=>{const{title:n,extra:s,collapsible:t=!1,defaultCollapsed:a=!1,collapsed:l,onCollapse:b,style:d,children:m}=r,[u,h]=_t(a,l),F=()=>{if(!t)return;const q=!u;h(q),b==null||b(q)},w=n!=null||s!=null;return e.jsxs("div",{className:ce(),style:d,children:[w&&e.jsxs("div",{className:ce("header"),role:t?"button":void 0,tabIndex:t?0:void 0,onClick:F,onKeyDown:t?q=>{(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),F())}:void 0,children:[e.jsxs("div",{className:ce("title"),children:[t&&e.jsx("span",{className:ce("arrow"),style:{transform:u?void 0:"rotate(90deg)"},children:"▸"}),n&&e.jsx(br,{size:Jt,color:zt,children:n})]}),s&&e.jsx("div",{className:ce("extra"),role:"presentation",onClick:q=>q.stopPropagation(),children:s})]}),e.jsx("div",{className:ce("body"),style:{display:t&&u?"none":void 0},children:m})]})};Sr.displayName="ProFormGroup";const Ia=p.memo(Sr);Sr.__docgenInfo={description:"",methods:[],displayName:"ProFormGroup",props:{title:{required:!1,tsType:{name:"ReactNode"},description:""},extra:{required:!1,tsType:{name:"ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function Ba(r,n){const[s,t]=ye(!1),[a,l]=ye([]),b=p.useRef(r);b.current=r;const d=lr(n),m=I(async()=>{const u=b.current;if(u){t(!0);try{const h=await u(n);Array.isArray(h)&&l(h)}finally{t(!1)}}});return p.useEffect(()=>{b.current&&m()},[d]),[s,a]}function ae(r){const{component:n,mapProps:s,renderReadonly:t}=r,a=d=>{const{name:m,label:u,rules:h,required:F,help:w,validateStatus:q,colon:B,readonly:o,mode:y,hidden:i,colProps:N,fieldProps:c,placeholder:v,disabled:P,width:_,transform:G,convertValue:j,dependencies:L,request:U,params:$,valueEnum:V,debounceTime:x,dependenciesValues:M,...R}=d,J=y??(o!==void 0?o?"read":"edit":void 0),W=M?{...$,...M}:$,[Z,Y]=Ba(U,W),g=p.useRef(null),S=p.useRef(void 0),T=p.useCallback((...z)=>{var X;if(!x||x<=0){(X=S.current)==null||X.call(S,...z);return}g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{var re;(re=S.current)==null||re.call(S,...z)},x)},[x]);p.useEffect(()=>()=>{g.current&&clearTimeout(g.current)},[]);const D=s?s(R):{},A=_!==void 0?{width:Fa(_)}:void 0,k=c==null?void 0:c.style,C=A?{...k||{},...A}:k;let O=c==null?void 0:c.options;V&&(O=Qt(V)),Y.length>0&&(O=Y);const H={...D,...c||{},...O!==void 0?{options:O}:{},...Z?{loading:!0}:{},...v!==void 0?{placeholder:v}:{},...P!==void 0?{disabled:P}:{},...C?{style:C}:{}};if(x&&x>0){const z=H;S.current=z.onChange,z.onChange=T}return e.jsx(wr,{name:m,label:u,rules:h,required:F,help:w,validateStatus:q,colon:B,hidden:i,mode:J,colProps:N,transform:G,convertValue:j,readonlyRender:t?z=>t(z):void 0,children:e.jsx(n,{...H})})},l=d=>{const{dependencies:m}=d;return m&&m.length>0?e.jsx(mr,{name:m,children:u=>e.jsx(a,{...d,dependenciesValues:u})}):e.jsx(a,{...d})};return p.memo(l)}const f=ae({component:be,renderReadonly:ve});f.displayName="ProFormText";const dr=ae({component:be.Password,renderReadonly:()=>"******"});dr.displayName="ProFormPassword";const me=ae({component:be.TextArea,renderReadonly:ve});me.displayName="ProFormTextArea";const fe=ae({component:ta,renderReadonly:Kt});fe.displayName="ProFormCheckbox";const Rr=ae({component:aa,renderReadonly:r=>ve(Array.isArray(r)?r.join(", "):r)});Rr.displayName="ProFormCheckboxGroup";const se=ae({component:sa,renderReadonly:Kt});se.displayName="ProFormSwitch";function yr(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(yr).filter(Boolean).join(", "):""}function Da(r,n){var t;const s=la(ia((n==null?void 0:n.options)??[]));if(Array.isArray(r)){const a=r.map(l=>{var b;return((b=s.find(d=>d.value===l))==null?void 0:b.label)??l}).map(yr).filter(l=>l!=null&&l!=="");return a.length>0?a.join(", "):"-"}return r==null||r===""?"-":yr(((t=s.find(a=>a.value===r))==null?void 0:t.label)??r)||"-"}const ue=ae({component:oa,renderReadonly:Da});ue.displayName="ProFormSelect";const pe=ae({component:ma,renderReadonly:ve});pe.displayName="ProFormRadioGroup";const Pe=ae({component:da,renderReadonly:ha});Pe.displayName="ProFormSlider";function La(r){return r==null?"-":r instanceof Date?r.toLocaleDateString():Array.isArray(r)?r.filter(n=>n instanceof Date).map(n=>n.toLocaleDateString()).join(" ~ "):String(r)}const xe=ae({component:ua,renderReadonly:La});xe.displayName="ProFormDatePicker";function Ma(r){if(r==null)return"-";if(typeof r=="object"&&"length"in r){const n=r;return n.length===0?"-":Array.from(n).map(s=>s.name).join(", ")}return typeof r=="string"?r||"-":ve(r)}const Nr=ae({component:ca,renderReadonly:Ma});Nr.displayName="ProFormUpload";const _a=oe(`${de}-fieldset`),qr=r=>{const{name:n,label:s,rules:t,required:a,help:l,gap:b=8,style:d,children:m}=r,{values:u,setFieldValue:h}=ie(),F=n?Array.isArray(u[n])?u[n]:[]:[];let w=-1;const q=K.Children.map(m,o=>{if(!K.isValidElement(o))return o;w+=1;const y=w;return K.cloneElement(o,{value:F[y],onChange:i=>{if(!n)return;const N=[...F];N[y]=i&&typeof i=="object"&&"target"in i?i.target.value:i,h(n,N)}})}),B=e.jsx("div",{className:_a(),style:{display:"flex",gap:b,alignItems:"flex-start",...d},children:q});return n?e.jsx(wr,{label:s,name:n,rules:t,required:a,help:l,children:B}):B};qr.displayName="ProFormFieldSet";const $a=p.memo(qr);qr.__docgenInfo={description:"",methods:[],displayName:"ProFormFieldSet",props:{name:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},rules:{required:!1,tsType:{name:"Array",elements:[{name:"Rule"}],raw:"Rule[]"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},help:{required:!1,tsType:{name:"ReactNode"},description:""},gap:{required:!1,tsType:{name:"number"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Ga=(r={},n={})=>{const{onValuesChange:s,validateTrigger:t="onChange"}=n,a=$t({initialValues:r,onValuesChange:s,validateTrigger:t}),[l,b]=ye({}),[d,m]=p.useState({}),u=p.useMemo(()=>({...a.touched,...d}),[a.touched,d]),h=I(async(o,y,i)=>{if(!i||i.length===0)return{isValid:!0,error:null};b(N=>({...N,[o]:!0}));try{if(!a.validateField(o,i,y))return{isValid:!1,error:a.errors[o]||null};for(const c of i){if(c.validator&&typeof c.validator=="function")try{const v=await Promise.resolve(c.validator(y,a.values));if(v!==!0&&v!==void 0){const P=typeof v=="string"?v:"Validation failed";return a.setFieldError(o,P),{isValid:!1,error:P}}}catch(v){const P=v instanceof Error?v.message:"Validation error";return a.setFieldError(o,P),{isValid:!1,error:P}}if(c.enum&&Array.isArray(c.enum)&&y&&!c.enum.includes(y)){const v=c.message||`${o} must be one of ${c.enum.join(", ")}`;return a.setFieldError(o,v),{isValid:!1,error:v}}if(c.type==="number"&&y!==void 0&&y!==null&&y!==""&&(typeof y!="number"||isNaN(y))){const v=c.message||`${o} must be a number`;return a.setFieldError(o,v),{isValid:!1,error:v}}if(c.type==="email"&&y&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(y))){const P=c.message||`${o} must be a valid email`;return a.setFieldError(o,P),{isValid:!1,error:P}}if(c.type==="url"&&y)try{new URL(String(y))}catch{const v=c.message||`${o} must be a valid URL`;return a.setFieldError(o,v),{isValid:!1,error:v}}}return a.errors[o]&&a.setFieldError(o,null),{isValid:!0,error:null}}finally{b(N=>{const c={...N};return delete c[o],c})}}),F=te(async o=>{m(i=>({...i,[o]:!0}));const y=a.fieldRules[o];y&&t==="onBlur"&&await h(o,a.values[o],y)}),w=I(async o=>{const y=o||Object.keys(a.fieldRules);let i=!1;const N={},c=y.map(async v=>{const P=a.fieldRules[v];if(P){const{isValid:_,error:G}=await h(v,a.values[v],P);!_&&G&&(i=!0,N[v]=G)}});if(await Promise.all(c),i){const v=new Error("Validation failed");throw v.values=a.values,v.errors=N,v}return o?o.reduce((v,P)=>(v[P]=a.values[P],v),{}):a.values}),q=p.useCallback((o,y={})=>{const{rules:i=[]}=y,N=p.memo(({children:c,render:v,...P})=>{const _=a.values[o]??"",G=a.errors[o],j=u[o],L=l[o];p.useEffect(()=>(!a.getFieldRules(o)&&i.length>0&&a.registerField(o,i),()=>{a.unregisterField(o)}),[]);const U=te(R=>{a.setFieldValue(o,R),t==="onChange"&&a.validateField(o,i,R)}),$=te(()=>{F(o)}),V={name:o,value:_,error:G,touched:j,validating:L,onChange:U,onBlur:$,...P},x=R=>{var W;const J=R&&typeof R=="object"&&"target"in R?R.target.value:R;U(J),K.isValidElement(c)&&((W=c.props)!=null&&W.onChange)&&c.props.onChange(J)},M=()=>{var R;$(),K.isValidElement(c)&&((R=c.props)!=null&&R.onBlur)&&c.props.onBlur()};if(v&&typeof v=="function")return v(V);if(typeof c=="function")return c(V);if(K.isValidElement(c)){const R={...V,onChange:x,onBlur:M};return K.cloneElement(c,R)}return Array.isArray(c)?K.createElement(p.Fragment,null,...c.map((R,J)=>{if(K.isValidElement(R)){const W={...V,key:R.key||J,onChange:x,onBlur:M};return K.cloneElement(R,W)}return R})):null});return N.displayName=`Field(${o})`,N},[a,u,l,t,F]);return[p.useMemo(()=>({...a.formInstance,validateFields:w,setFieldValue:a.setFieldValue,getFieldError:o=>a.errors[o],getFieldsError:o=>{if(!o)return a.errors;const y={};return o.forEach(i=>{a.errors[i]&&(y[i]=a.errors[i])}),y},isFieldTouched:o=>u[o]||!1,isFieldsTouched:(o,y=!1)=>o?y?o.every(i=>u[i]):o.some(i=>u[i]):Object.keys(u).some(i=>u[i]),isFieldValidating:o=>l[o]||!1,setFieldError:a.setFieldError,setFieldsError:o=>{Object.entries(o).forEach(([y,i])=>{a.setFieldError(y,i)})},setFieldTouched:(o,y=!0)=>{m(i=>({...i,[o]:y}))},setFieldsTouched:o=>{m(y=>({...y,...o}))},resetFields:o=>{if(!o)a.resetFields(),m({}),b({});else{const y={};o.forEach(i=>{y[i]=r[i]}),a.setFieldsValue(y),m(i=>{const N={...i};return o.forEach(c=>{delete N[c]}),N}),b(i=>{const N={...i};return o.forEach(c=>{delete N[c]}),N}),o.forEach(i=>{a.setFieldError(i,null)})}},submit:async o=>{try{const y=await w();return o&&await o(y),y}catch{return}},defineField:q,registerField:a.registerField,unregisterField:a.unregisterField}),[a,u,l,w,q,r,b])]};function Xt(r,n){const{open:s,onOpenChange:t,trigger:a,autoClose:l=!0,submitTimeout:b}=r,d=s!==void 0,[m,u]=p.useState(!1),h=d?s:m,F=p.useRef(null),w=p.useCallback(i=>{d||u(i),t==null||t(i)},[d,t]),q=te(()=>{w(!0)}),B=te(()=>{F.current&&clearTimeout(F.current),w(!1)}),o=te(async i=>{await(n==null?void 0:n(i)),l&&(b&&b>0?F.current=setTimeout(()=>{w(!1)},b):w(!1))}),y=a?K.cloneElement(a,{onClick:(...i)=>{var c;q();const N=(c=a.props)==null?void 0:c.onClick;typeof N=="function"&&N(...i)}}):null;return{mergedOpen:h,triggerNode:y,handleFinish:o,handleHide:B,handleShow:q}}const Ua=oe(`${de}-drawer-form`),kr=r=>{const{open:n,onOpenChange:s,trigger:t,title:a,width:l=480,placement:b="right",submitTimeout:d,autoClose:m=!0,drawerProps:u,onFinish:h,submitter:F,children:w,destroyOnClose:q,...B}=r,{mergedOpen:o,triggerNode:y,handleFinish:i,handleHide:N}=Xt({open:n,onOpenChange:s,trigger:t,autoClose:m,submitTimeout:d},h);return e.jsxs(e.Fragment,{children:[y,e.jsx(pa,{...u,open:o,title:a,placement:b,width:l,onClose:N,footer:null,children:e.jsx("div",{className:Ua(),children:e.jsx(ir,{...B,onFinish:i,submitter:F!==void 0?F:{resetButtonProps:{onClick:N},resetText:"Cancel"},children:w})})})]})};kr.displayName="DrawerForm";const Cr=p.memo(kr);kr.__docgenInfo={description:"",methods:[],displayName:"DrawerForm",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactElement"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},placement:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof DRAWER_PLACEMENTS)[number]"},description:""},submitTimeout:{required:!1,tsType:{name:"number"},description:""},autoClose:{required:!1,tsType:{name:"boolean"},description:""},destroyOnClose:{required:!1,tsType:{name:"boolean"},description:""},drawerProps:{required:!1,tsType:{name:"Partial",elements:[{name:"DrawerProps"}],raw:"Partial<DrawerProps>"},description:""}},composes:["Omit"]};const Ja=oe(`${de}-dialog-form`),Er=r=>{const{open:n,onOpenChange:s,trigger:t,title:a,width:l,submitTimeout:b,autoClose:d=!0,dialogProps:m,onFinish:u,submitter:h,children:F,destroyOnClose:w,...q}=r,{mergedOpen:B,triggerNode:o,handleFinish:y,handleHide:i}=Xt({open:n,onOpenChange:s,trigger:t,autoClose:d,submitTimeout:b},u);return e.jsxs(e.Fragment,{children:[o,e.jsx(fa,{...m,open:B,title:a,onCancel:i,footer:null,...l!==void 0?{rootStyle:{...m==null?void 0:m.rootStyle,width:l}}:{},children:e.jsx("div",{className:Ja(),children:e.jsx(ir,{...q,onFinish:y,submitter:h!==void 0?h:{resetButtonProps:{onClick:i},resetText:(m==null?void 0:m.cancelText)??"Cancel"},children:F})})})]})};Er.displayName="DialogForm";const za=p.memo(Er);Er.__docgenInfo={description:"",methods:[],displayName:"DialogForm",props:{open:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},trigger:{required:!1,tsType:{name:"ReactElement"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},submitTimeout:{required:!1,tsType:{name:"number"},description:""},autoClose:{required:!1,tsType:{name:"boolean"},description:""},destroyOnClose:{required:!1,tsType:{name:"boolean"},description:""},dialogProps:{required:!1,tsType:{name:"Partial",elements:[{name:"DialogProps"}],raw:"Partial<DialogProps>"},description:""}},composes:["Omit"]};const fr=oe(`${de}-query-filter`);function Wa(){if(typeof window>"u")return{};const r={};return new URLSearchParams(window.location.search).forEach((n,s)=>{r[s]=n}),r}function Lr(r){if(typeof window>"u")return;const n=new URLSearchParams;for(const[a,l]of Object.entries(r))l!=null&&l!==""&&n.set(a,String(l));const s=n.toString(),t=s?`${window.location.pathname}?${s}`:window.location.pathname;window.history.replaceState(null,"",t)}const Ar=r=>{const{defaultCollapsed:n=!0,collapsed:s,onCollapse:t,defaultColsNumber:a=3,labelWidth:l,split:b=!1,searchConfig:d,syncToUrl:m,onFinish:u,onReset:h,children:F,submitter:w=!1,initialValues:q,...B}=r,[o,y]=_t(n,s),i=p.useRef(!1),N=p.useMemo(()=>{if(!m||i.current)return q;i.current=!0;const x=Wa();return typeof m=="function"?{...q,...m(x,"get")}:{...q,...x}},[]),c=I(x=>{if(!m)return;const M=typeof m=="function"?m(x,"set"):x;Lr(M)}),v=I(x=>{c(x),u==null||u(x)}),P=I(()=>{m&&Lr({}),h==null||h()}),_=I(()=>{const x=!o;y(x),t==null||t(x)}),G=p.useMemo(()=>{const x=[];return K.Children.forEach(F,M=>{K.isValidElement(M)&&x.push(M)}),x},[F]),j=o?G.slice(0,a):G,L=G.length>a,U=(d==null?void 0:d.searchText)??le.search,$=(d==null?void 0:d.resetText)??le.reset,V=l!==void 0&&l!=="auto"?{width:l}:void 0;return e.jsx(ir,{...B,initialValues:N,onFinish:v,onReset:P,submitter:!1,children:e.jsxs("div",{className:fr(),children:[j.map((x,M)=>e.jsxs(K.Fragment,{children:[b&&M>0&&e.jsx("div",{className:fr("split")}),V?e.jsx("div",{style:V,children:x}):x]},M)),e.jsxs("div",{className:fr("actions"),children:[e.jsx(Q,{type:"submit",color:"primary",children:U}),e.jsx(Q,{type:"button",color:"secondary",onClick:P,children:$}),L&&e.jsx(Q,{type:"button",variant:"text",onClick:_,children:o?le.expand:le.collapse})]})]})})};Ar.displayName="QueryFilter";const Ka=p.memo(Ar);Ar.__docgenInfo={description:"",methods:[],displayName:"QueryFilter",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},initialValues:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"void"}}},description:""},onFinishFailed:{required:!1,tsType:{name:"signature",type:"function",raw:`(errorInfo: {
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
}`,signature:{properties:[{key:"searchText",value:{name:"ReactNode",required:!1}},{key:"resetText",value:{name:"ReactNode",required:!1}}]}},description:""},syncToUrl:{required:!1,tsType:{name:"union",raw:"boolean | ((values: Record<string, unknown>, type: 'get' | 'set') => Record<string, unknown>)",elements:[{name:"boolean"},{name:"unknown"}]},description:""}},composes:["Omit"]};const E=Object.assign(ir,{Item:wr,useForm:Ga,useInstance:Gt,useContext:ie,Dependency:mr,List:Fe,Group:Ia,FieldSet:$a,Submitter:Wt,Text:f,Password:dr,TextArea:me,Checkbox:fe,CheckboxGroup:Rr,Switch:se,Select:ue,RadioGroup:pe,Slider:Pe,DatePicker:xe,Upload:Nr}),Ns={title:"Components/ProForm",component:E,argTypes:{readonly:{control:"boolean"},loading:{control:"boolean"},grid:{control:"boolean"},disabled:{control:"boolean"}},parameters:{docs:{source:{type:"code"}}},args:{readonly:!1,loading:!1,grid:!1,disabled:!1,onFinish:ea()},tags:["autodocs"]},we={render:r=>e.jsxs(E,{...r,initialValues:{username:"",email:""},onFinish:n=>{var s;(s=r.onFinish)==null||s.call(r,n),alert(JSON.stringify(n,null,2))},children:[e.jsx(f,{name:"username",label:"Username",placeholder:"Enter username",rules:[{required:!0,message:"Username is required"}]}),e.jsx(f,{name:"email",label:"Email",placeholder:"Enter email",rules:[{required:!0},{type:"email",message:"Invalid email"}]})]})},Te={render:r=>e.jsxs(E,{...r,initialValues:{text:"Hello",textWithButton:"",password:"secret123",textarea:`Multi-line
content`,agree:!0,options:[],darkMode:!1,role:"admin",volume:60,date:null},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(f,{name:"text",label:"Text Input",placeholder:"Type here..."}),e.jsx(f,{name:"textWithButton",label:"Text with Button",placeholder:"Enter verification code",fieldProps:{suffix:e.jsx(Q,{color:"primary",size:"small",style:{marginRight:-4},children:"Send Code"})}}),e.jsx(dr,{name:"password",label:"Password",placeholder:"Password"}),e.jsx(me,{name:"textarea",label:"Text Area",placeholder:"Enter long text"}),e.jsx(fe,{name:"agree",label:"I agree to the terms"}),e.jsx(Rr,{name:"options",label:"Pick options",fieldProps:{options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}]}}),e.jsx(se,{name:"darkMode",label:"Dark Mode"}),e.jsx(pe,{name:"role",label:"Role",fieldProps:{direction:"horizontal",options:[{label:"Admin",value:"admin"},{label:"Editor",value:"editor"},{label:"Viewer",value:"viewer"}]}}),e.jsx(Pe,{name:"volume",label:"Volume",fieldProps:{min:0,max:100}}),e.jsx(xe,{name:"date",label:"Date",fieldProps:{dateFormat:"yy-mm-dd"}})]})},je={args:{readonly:!0},render:r=>e.jsxs(E,{...r,initialValues:{name:"John Doe",email:"john@example.com",bio:"Software engineer with 10 years of experience.",newsletter:!0,active:!0},children:[e.jsx(f,{name:"name",label:"Name"}),e.jsx(f,{name:"email",label:"Email"}),e.jsx(me,{name:"bio",label:"Bio"}),e.jsx(fe,{name:"newsletter",label:"Newsletter"}),e.jsx(se,{name:"active",label:"Active"})]})},Se={args:{loading:!0},render:r=>e.jsxs(E,{...r,initialValues:{name:"Loading..."},children:[e.jsx(f,{name:"name",label:"Name"}),e.jsx(f,{name:"email",label:"Email"})]})},Re={args:{grid:!0},render:r=>e.jsxs(E,{...r,rowProps:{gutter:16},initialValues:{},children:[e.jsx(f,{name:"firstName",label:"First Name",colProps:{span:12}}),e.jsx(f,{name:"lastName",label:"Last Name",colProps:{span:12}}),e.jsx(f,{name:"email",label:"Email",colProps:{span:12}}),e.jsx(f,{name:"phone",label:"Phone",colProps:{span:12}}),e.jsx(me,{name:"address",label:"Address",colProps:{span:24}})]})},Ne={render:r=>e.jsxs(E,{...r,children:[e.jsx(f,{name:"sm",label:"Small (sm = 160px)",width:"sm"}),e.jsx(f,{name:"md",label:"Medium (md = 240px)",width:"md"}),e.jsx(f,{name:"lg",label:"Large (lg = 320px)",width:"lg"}),e.jsx(f,{name:"xl",label:"XL (xl = 420px)",width:"xl"}),e.jsx(f,{name:"custom",label:"Custom (200px)",width:200})]})},qe={render:r=>e.jsxs(E,{...r,submitter:{submitText:"Save Changes",resetText:"Discard",render:(n,s)=>e.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:s})},children:[e.jsx(f,{name:"title",label:"Title",rules:[{required:!0}]}),e.jsx(me,{name:"content",label:"Content"})]})},ke={render:r=>e.jsx(E,{...r,submitter:!1,children:e.jsx(f,{name:"search",label:"Search",placeholder:"Type to search..."})})},Ce={render:r=>e.jsxs(E,{...r,initialValues:{},onFinish:n=>alert("Success: "+JSON.stringify(n)),children:[e.jsx(f,{name:"username",label:"Username",rules:[{required:!0,message:"Username is required"},{min:3,message:"At least 3 characters"},{max:20,message:"At most 20 characters"}]}),e.jsx(f,{name:"email",label:"Email",rules:[{required:!0,message:"Email is required"},{pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Invalid email"}]}),e.jsx(dr,{name:"password",label:"Password",rules:[{required:!0},{min:8,message:"At least 8 characters"}]}),e.jsx(fe,{name:"terms",label:"I accept the terms",rules:[{validator:n=>n?!0:"You must accept the terms"}]})]})},Ee={render:r=>{const[n,s]=p.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(Q,{color:n===1?"primary":"grey",onClick:()=>s(1),children:"User 1"}),e.jsx(Q,{color:n===2?"primary":"grey",onClick:()=>s(2),children:"User 2"})]}),e.jsxs(E,{...r,params:{userId:n},request:async t=>(await new Promise(l=>setTimeout(l,1e3)),{1:{name:"Alice",email:"alice@example.com"},2:{name:"Bob",email:"bob@example.com"}}[t==null?void 0:t.userId]||{}),children:[e.jsx(f,{name:"name",label:"Name"}),e.jsx(f,{name:"email",label:"Email"})]})]})},tags:["!autodocs","dev"]},Ae={render:r=>e.jsxs(E,{...r,initialValues:{hasAccount:!1,accountType:""},children:[e.jsx(se,{name:"hasAccount",label:"Has Account"}),e.jsx(mr,{name:["hasAccount"],children:({hasAccount:n})=>n?e.jsxs(e.Fragment,{children:[e.jsx(f,{name:"accountId",label:"Account ID",rules:[{required:!0}]}),e.jsx(f,{name:"accountName",label:"Account Name"})]}):null})]})},Ve={render:r=>e.jsx(E,{...r,initialValues:{members:[{name:"Alice",role:"Admin"},{name:"Bob",role:"Member"}]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(Fe,{name:"members",label:"Team Members",min:1,max:5,children:n=>n.map(({name:s,key:t})=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-end"},children:[e.jsx(f,{name:`${s}.name`,label:"Name",placeholder:"Name"}),e.jsx(f,{name:`${s}.role`,label:"Role",placeholder:"Role"})]},t))})})},Oe={render:r=>e.jsxs(za,{...r,title:"Create User",trigger:e.jsx(Q,{color:"primary",children:"Open Dialog Form"}),onFinish:async n=>{alert(JSON.stringify(n,null,2))},children:[e.jsx(f,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(f,{name:"email",label:"Email",rules:[{required:!0}]}),e.jsx(se,{name:"active",label:"Active"})]})},Ie={render:r=>e.jsxs(Cr,{...r,title:"Create User",trigger:e.jsx(Q,{color:"primary",children:"Open Drawer Form"}),onFinish:async n=>{alert(JSON.stringify(n,null,2))},children:[e.jsx(f,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(f,{name:"email",label:"Email",rules:[{required:!0}]}),e.jsx(me,{name:"bio",label:"Bio"}),e.jsx(se,{name:"active",label:"Active"})]})},Be={render:r=>{const[n,s]=p.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(Q,{color:"primary",onClick:()=>s(!0),children:"Open (Controlled)"}),e.jsx(Q,{color:"secondary",onClick:()=>s(!1),children:"Close"}),e.jsxs(Cr,{...r,open:n,onOpenChange:s,title:"Edit Profile",width:520,initialValues:{name:"Alice",role:"Admin"},onFinish:async t=>{alert(JSON.stringify(t,null,2))},children:[e.jsx(f,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(f,{name:"role",label:"Role"})]})]})},tags:["!autodocs","dev"]},De={render:r=>e.jsxs(Cr,{...r,title:"Settings",placement:"left",width:400,trigger:e.jsx(Q,{color:"secondary",children:"Open from Left"}),onFinish:async n=>{alert(JSON.stringify(n,null,2))},children:[e.jsx(f,{name:"theme",label:"Theme",placeholder:"dark / light"}),e.jsx(f,{name:"language",label:"Language",placeholder:"en / zh"}),e.jsx(se,{name:"notifications",label:"Enable Notifications"})]})},Le={render:r=>e.jsxs(E,{...r,initialValues:{gender:"male",plan:"pro"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(pe,{name:"gender",label:"Gender",fieldProps:{options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}]}}),e.jsx(pe,{name:"plan",label:"Plan",fieldProps:{direction:"horizontal",options:[{label:"Free",value:"free"},{label:"Pro",value:"pro"},{label:"Enterprise",value:"enterprise"}]}})]})},Me={render:r=>e.jsxs(E,{...r,initialValues:{volume:50,price:200},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(Pe,{name:"volume",label:"Volume",fieldProps:{min:0,max:100,step:1}}),e.jsx(Pe,{name:"price",label:"Price",fieldProps:{min:0,max:1e3,step:10,valuePrefix:"$"}})]})},_e={render:r=>e.jsxs(E,{...r,initialValues:{birthday:null,startDate:null},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(xe,{name:"birthday",label:"Birthday",fieldProps:{dateFormat:"yy-mm-dd",showIcon:!0}}),e.jsx(xe,{name:"startDate",label:"Start Date",fieldProps:{dateFormat:"mm/dd/yy",showButtonBar:!0}})]})},$e={render:r=>e.jsxs(E,{...r,grid:!0,rowProps:{gutter:16},initialValues:{name:"",email:"",bio:"",newsletter:!1,darkMode:!0,items:[{title:"Item 1"}]},submitter:{submitText:"Create",resetText:"Clear All"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(f,{name:"name",label:"Full Name",colProps:{span:12},rules:[{required:!0}]}),e.jsx(f,{name:"email",label:"Email",colProps:{span:12},rules:[{required:!0}]}),e.jsx(me,{name:"bio",label:"Biography",colProps:{span:24}}),e.jsx(fe,{name:"newsletter",label:"Subscribe to newsletter",colProps:{span:12}}),e.jsx(se,{name:"darkMode",label:"Dark Mode",colProps:{span:12}}),e.jsx(mr,{name:["newsletter"],children:({newsletter:n})=>n?e.jsx(f,{name:"frequency",label:"Email Frequency",placeholder:"daily / weekly / monthly",colProps:{span:24}}):null})]}),tags:["!autodocs","dev"]},Ge={render:r=>e.jsx(E,{...r,onFinish:n=>{const s=n.attachment;alert(s?`Selected: ${Array.from(s).map(t=>t.name).join(", ")}`:"No file")},children:e.jsx(Nr,{name:"attachment",label:"Attachment",fieldProps:{accept:".pdf,.png,.jpg",multiple:!0,buttonLabel:"Choose Files"}})})},Ue={render:r=>e.jsxs(E,{...r,grid:!0,rowProps:{gutter:16},initialValues:{},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(f,{name:"firstName",label:"First Name",colProps:{span:12,sm:12,md:8,lg:6}}),e.jsx(f,{name:"lastName",label:"Last Name",colProps:{span:12,sm:12,md:8,lg:6}}),e.jsx(f,{name:"email",label:"Email",colProps:{span:24,sm:24,md:8,lg:6}}),e.jsx(f,{name:"phone",label:"Phone",colProps:{span:24,sm:12,md:12,lg:6}}),e.jsx(me,{name:"address",label:"Address",colProps:{span:24}})]})},Je={render:r=>e.jsxs(E,{...r,mode:"edit",initialValues:{name:"",email:""},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(f,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(f,{name:"email",label:"Email"})]})},ze={render:r=>e.jsxs(E,{...r,mode:"read",initialValues:{name:"Alice",email:"alice@example.com",active:!0},children:[e.jsx(f,{name:"name",label:"Name"}),e.jsx(f,{name:"email",label:"Email"}),e.jsx(se,{name:"active",label:"Active"})]})},We={render:r=>e.jsxs(E,{...r,mode:"update",initialValues:{id:"USR-001",name:"Alice",email:"alice@example.com"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(f,{name:"id",label:"ID",mode:"read"}),e.jsx(f,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(f,{name:"email",label:"Email"})]})},Ke={render:r=>e.jsxs(E,{...r,omitNil:!0,initialValues:{name:"",email:"",note:null},onFinish:n=>{alert(`Nil values stripped:
`+JSON.stringify(n,null,2))},children:[e.jsx(f,{name:"name",label:"Name (leave empty to omit)"}),e.jsx(f,{name:"email",label:"Email (leave empty to omit)"}),e.jsx(f,{name:"note",label:"Note (null → omitted)"})]})},He={render:r=>e.jsxs(E,{...r,onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(ue,{name:"status",label:"Status",valueEnum:{active:"Active",inactive:"Inactive",pending:{text:"Pending",disabled:!0}}}),e.jsx(pe,{name:"role",label:"Role",valueEnum:{admin:"Admin",editor:"Editor",viewer:"Viewer"}})]})},Qe={render:r=>e.jsxs(E,{...r,initialValues:{country:"",city:""},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsx(ue,{name:"country",label:"Country",valueEnum:{us:"United States",cn:"China",jp:"Japan"}}),e.jsx(ue,{name:"city",label:"City (auto-loads based on Country)",dependencies:["country"],request:async n=>(await new Promise(t=>setTimeout(t,500)),{us:[{label:"New York",value:"ny"},{label:"Los Angeles",value:"la"}],cn:[{label:"Beijing",value:"bj"},{label:"Shanghai",value:"sh"}],jp:[{label:"Tokyo",value:"tk"},{label:"Osaka",value:"os"}]}[n==null?void 0:n.country]??[])})]})},Ze={render:r=>e.jsx(E,{...r,onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(ue,{name:"user",label:"User (async loaded)",request:async()=>(await new Promise(n=>setTimeout(n,800)),[{label:"Alice",value:"alice"},{label:"Bob",value:"bob"},{label:"Charlie",value:"charlie"}])})})},Ye={render:r=>e.jsxs(E,{...r,onValuesChange:n=>{console.log("onValuesChange (debounced):",n)},children:[e.jsx(f,{name:"search",label:"Search (300ms debounce — check console)",debounceTime:300,placeholder:"Type fast..."}),e.jsx(f,{name:"instant",label:"Instant (no debounce)",placeholder:"Type fast..."})]}),tags:["!autodocs","dev"]},Xe={render:r=>e.jsxs(E,{...r,initialValues:{name:"Alice",bio:"",theme:"light"},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsxs(E.Group,{title:"Basic Info",collapsible:!0,children:[e.jsx(f,{name:"name",label:"Name",rules:[{required:!0}]}),e.jsx(f,{name:"bio",label:"Bio"})]}),e.jsxs(E.Group,{title:"Preferences",collapsible:!0,defaultCollapsed:!0,children:[e.jsx(f,{name:"theme",label:"Theme"}),e.jsx(se,{name:"notifications",label:"Notifications"})]})]})},er={render:r=>e.jsx(E,{...r,onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsxs(E.Group,{title:"Contact",extra:e.jsx(Q,{color:"secondary",size:"small",children:"Import"}),children:[e.jsx(f,{name:"email",label:"Email"}),e.jsx(f,{name:"phone",label:"Phone"})]})})},rr={render:r=>e.jsxs(E,{...r,initialValues:{phone:["+1","555-0100"]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:[e.jsxs(E.FieldSet,{name:"phone",label:"Phone Number",gap:8,children:[e.jsx(be,{placeholder:"Area code",style:{width:80}}),e.jsx(be,{placeholder:"Number",style:{width:200}})]}),e.jsx(f,{name:"email",label:"Email"})]})},nr={render:r=>e.jsx(E,{...r,initialValues:{groups:[{title:"Group A",items:[{name:"Item 1"}]}]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(Fe,{name:"groups",label:"Groups",children:n=>n.map(({name:s,key:t})=>e.jsxs("div",{style:{border:"1px solid #eee",padding:12,marginBottom:8,borderRadius:4},children:[e.jsx(f,{name:`${s}.title`,label:"Group Title"}),e.jsx(Fe,{name:"items",label:"Items",children:a=>a.map(l=>e.jsx(f,{name:`${l.name}.name`,label:"Item Name"},l.key))})]},t))})}),tags:["!autodocs","dev"]},tr={render:r=>e.jsx(E,{...r,initialValues:{members:[]},onFinish:n=>alert(JSON.stringify(n,null,2)),children:e.jsx(Fe,{name:"members",label:"Team Members",required:!0,requiredMessage:"Add at least one member",children:n=>n.map(({name:s,key:t})=>e.jsx(f,{name:`${s}.name`,label:"Name"},t))})})},ar={render:r=>e.jsxs(Ka,{...r,syncToUrl:!0,onFinish:n=>{console.log("QueryFilter submit:",n),alert(`Check URL bar — params synced!
`+JSON.stringify(n))},children:[e.jsx(f,{name:"keyword",label:"Keyword",placeholder:"Search..."}),e.jsx(ue,{name:"status",label:"Status",valueEnum:{all:"All",active:"Active",inactive:"Inactive"}})]}),tags:["!autodocs","dev"]};var Mr,_r,$r;we.parameters={...we.parameters,docs:{...(Mr=we.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
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
}`,...($r=(_r=we.parameters)==null?void 0:_r.docs)==null?void 0:$r.source}}};var Gr,Ur,Jr;Te.parameters={...Te.parameters,docs:{...(Gr=Te.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
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
}`,...(Jr=(Ur=Te.parameters)==null?void 0:Ur.docs)==null?void 0:Jr.source}}};var zr,Wr,Kr;je.parameters={...je.parameters,docs:{...(zr=je.parameters)==null?void 0:zr.docs,source:{originalSource:`{
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
}`,...(Kr=(Wr=je.parameters)==null?void 0:Wr.docs)==null?void 0:Kr.source}}};var Hr,Qr,Zr;Se.parameters={...Se.parameters,docs:{...(Hr=Se.parameters)==null?void 0:Hr.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => <ProForm {...args} initialValues={{
    name: 'Loading...'
  }}>
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
    </ProForm>
}`,...(Zr=(Qr=Se.parameters)==null?void 0:Qr.docs)==null?void 0:Zr.source}}};var Yr,Xr,en;Re.parameters={...Re.parameters,docs:{...(Yr=Re.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
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
}`,...(en=(Xr=Re.parameters)==null?void 0:Xr.docs)==null?void 0:en.source}}};var rn,nn,tn;Ne.parameters={...Ne.parameters,docs:{...(rn=Ne.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  render: args => <ProForm {...args}>
      <ProFormText name="sm" label="Small (sm = 160px)" width="sm" />
      <ProFormText name="md" label="Medium (md = 240px)" width="md" />
      <ProFormText name="lg" label="Large (lg = 320px)" width="lg" />
      <ProFormText name="xl" label="XL (xl = 420px)" width="xl" />
      <ProFormText name="custom" label="Custom (200px)" width={200} />
    </ProForm>
}`,...(tn=(nn=Ne.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var an,sn,on;qe.parameters={...qe.parameters,docs:{...(an=qe.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(on=(sn=qe.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var ln,mn,dn;ke.parameters={...ke.parameters,docs:{...(ln=ke.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  render: args => <ProForm {...args} submitter={false}>
      <ProFormText name="search" label="Search" placeholder="Type to search..." />
    </ProForm>
}`,...(dn=(mn=ke.parameters)==null?void 0:mn.docs)==null?void 0:dn.source}}};var un,cn,pn;Ce.parameters={...Ce.parameters,docs:{...(un=Ce.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(pn=(cn=Ce.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var fn,gn,yn;Ee.parameters={...Ee.parameters,docs:{...(fn=Ee.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(yn=(gn=Ee.parameters)==null?void 0:gn.docs)==null?void 0:yn.source}}};var bn,hn,Fn;Ae.parameters={...Ae.parameters,docs:{...(bn=Ae.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(Fn=(hn=Ae.parameters)==null?void 0:hn.docs)==null?void 0:Fn.source}}};var Pn,xn,vn;Ve.parameters={...Ve.parameters,docs:{...(Pn=Ve.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
}`,...(vn=(xn=Ve.parameters)==null?void 0:xn.docs)==null?void 0:vn.source}}};var wn,Tn,jn;Oe.parameters={...Oe.parameters,docs:{...(wn=Oe.parameters)==null?void 0:wn.docs,source:{originalSource:`{
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
}`,...(jn=(Tn=Oe.parameters)==null?void 0:Tn.docs)==null?void 0:jn.source}}};var Sn,Rn,Nn;Ie.parameters={...Ie.parameters,docs:{...(Sn=Ie.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(Nn=(Rn=Ie.parameters)==null?void 0:Rn.docs)==null?void 0:Nn.source}}};var qn,kn,Cn;Be.parameters={...Be.parameters,docs:{...(qn=Be.parameters)==null?void 0:qn.docs,source:{originalSource:`{
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
}`,...(Cn=(kn=Be.parameters)==null?void 0:kn.docs)==null?void 0:Cn.source}}};var En,An,Vn;De.parameters={...De.parameters,docs:{...(En=De.parameters)==null?void 0:En.docs,source:{originalSource:`{
  render: args => <DrawerForm {...args} title="Settings" placement="left" width={400} trigger={<Button color="secondary">Open from Left</Button>} onFinish={async values => {
    alert(JSON.stringify(values, null, 2));
  }}>
      <ProFormText name="theme" label="Theme" placeholder="dark / light" />
      <ProFormText name="language" label="Language" placeholder="en / zh" />
      <ProFormSwitch name="notifications" label="Enable Notifications" />
    </DrawerForm>
}`,...(Vn=(An=De.parameters)==null?void 0:An.docs)==null?void 0:Vn.source}}};var On,In,Bn;Le.parameters={...Le.parameters,docs:{...(On=Le.parameters)==null?void 0:On.docs,source:{originalSource:`{
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
}`,...(Bn=(In=Le.parameters)==null?void 0:In.docs)==null?void 0:Bn.source}}};var Dn,Ln,Mn;Me.parameters={...Me.parameters,docs:{...(Dn=Me.parameters)==null?void 0:Dn.docs,source:{originalSource:`{
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
}`,...(Mn=(Ln=Me.parameters)==null?void 0:Ln.docs)==null?void 0:Mn.source}}};var _n,$n,Gn;_e.parameters={..._e.parameters,docs:{...(_n=_e.parameters)==null?void 0:_n.docs,source:{originalSource:`{
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
}`,...(Gn=($n=_e.parameters)==null?void 0:$n.docs)==null?void 0:Gn.source}}};var Un,Jn,zn;$e.parameters={...$e.parameters,docs:{...(Un=$e.parameters)==null?void 0:Un.docs,source:{originalSource:`{
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
}`,...(zn=(Jn=$e.parameters)==null?void 0:Jn.docs)==null?void 0:zn.source}}};var Wn,Kn,Hn;Ge.parameters={...Ge.parameters,docs:{...(Wn=Ge.parameters)==null?void 0:Wn.docs,source:{originalSource:`{
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
}`,...(Hn=(Kn=Ge.parameters)==null?void 0:Kn.docs)==null?void 0:Hn.source}}};var Qn,Zn,Yn;Ue.parameters={...Ue.parameters,docs:{...(Qn=Ue.parameters)==null?void 0:Qn.docs,source:{originalSource:`{
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
}`,...(Yn=(Zn=Ue.parameters)==null?void 0:Zn.docs)==null?void 0:Yn.source}}};var Xn,et,rt;Je.parameters={...Je.parameters,docs:{...(Xn=Je.parameters)==null?void 0:Xn.docs,source:{originalSource:`{
  render: args => <ProForm {...args} mode="edit" initialValues={{
    name: '',
    email: ''
  }} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProFormText name="name" label="Name" rules={[{
      required: true
    }]} />
      <ProFormText name="email" label="Email" />
    </ProForm>
}`,...(rt=(et=Je.parameters)==null?void 0:et.docs)==null?void 0:rt.source}}};var nt,tt,at;ze.parameters={...ze.parameters,docs:{...(nt=ze.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  render: args => <ProForm {...args} mode="read" initialValues={{
    name: 'Alice',
    email: 'alice@example.com',
    active: true
  }}>
      <ProFormText name="name" label="Name" />
      <ProFormText name="email" label="Email" />
      <ProFormSwitch name="active" label="Active" />
    </ProForm>
}`,...(at=(tt=ze.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var st,ot,lt;We.parameters={...We.parameters,docs:{...(st=We.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(lt=(ot=We.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var it,mt,dt;Ke.parameters={...Ke.parameters,docs:{...(it=Ke.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(dt=(mt=Ke.parameters)==null?void 0:mt.docs)==null?void 0:dt.source}}};var ut,ct,pt;He.parameters={...He.parameters,docs:{...(ut=He.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(ct=He.parameters)==null?void 0:ct.docs)==null?void 0:pt.source}}};var ft,gt,yt;Qe.parameters={...Qe.parameters,docs:{...(ft=Qe.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(yt=(gt=Qe.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var bt,ht,Ft;Ze.parameters={...Ze.parameters,docs:{...(bt=Ze.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(Ft=(ht=Ze.parameters)==null?void 0:ht.docs)==null?void 0:Ft.source}}};var Pt,xt,vt;Ye.parameters={...Ye.parameters,docs:{...(Pt=Ye.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onValuesChange={changed => {
    console.log('onValuesChange (debounced):', changed);
  }}>
      <ProFormText name="search" label="Search (300ms debounce — check console)" debounceTime={300} placeholder="Type fast..." />
      <ProFormText name="instant" label="Instant (no debounce)" placeholder="Type fast..." />
    </ProForm>,
  tags: ['!autodocs', 'dev']
}`,...(vt=(xt=Ye.parameters)==null?void 0:xt.docs)==null?void 0:vt.source}}};var wt,Tt,jt;Xe.parameters={...Xe.parameters,docs:{...(wt=Xe.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(jt=(Tt=Xe.parameters)==null?void 0:Tt.docs)==null?void 0:jt.source}}};var St,Rt,Nt;er.parameters={...er.parameters,docs:{...(St=er.parameters)==null?void 0:St.docs,source:{originalSource:`{
  render: args => <ProForm {...args} onFinish={values => alert(JSON.stringify(values, null, 2))}>
      <ProForm.Group title="Contact" extra={<Button color="secondary" size="small">Import</Button>}>
        <ProFormText name="email" label="Email" />
        <ProFormText name="phone" label="Phone" />
      </ProForm.Group>
    </ProForm>
}`,...(Nt=(Rt=er.parameters)==null?void 0:Rt.docs)==null?void 0:Nt.source}}};var qt,kt,Ct;rr.parameters={...rr.parameters,docs:{...(qt=rr.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Ct=(kt=rr.parameters)==null?void 0:kt.docs)==null?void 0:Ct.source}}};var Et,At,Vt;nr.parameters={...nr.parameters,docs:{...(Et=nr.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Vt=(At=nr.parameters)==null?void 0:At.docs)==null?void 0:Vt.source}}};var Ot,It,Bt;tr.parameters={...tr.parameters,docs:{...(Ot=tr.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Bt=(It=tr.parameters)==null?void 0:It.docs)==null?void 0:Bt.source}}};var Dt,Lt,Mt;ar.parameters={...ar.parameters,docs:{...(Dt=ar.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Mt=(Lt=ar.parameters)==null?void 0:Lt.docs)==null?void 0:Mt.source}}};const qs=["Default","AllFieldTypes","ReadonlyMode","LoadingState","GridLayout","WidthPresets","CustomSubmitter","NoSubmitter","Validation","AsyncRequest","Dependency","DynamicList","DialogFormStory","DrawerFormStory","DrawerFormControlled","DrawerFormLeft","RadioGroupStory","SliderStory","DatePickerStory","KitchenSink","UploadField","GridResponsive","ModeEdit","ModeRead","ModeUpdate","OmitNil","ValueEnum","FieldDependencies","FieldRequest","DebounceField","GroupCollapsible","GroupWithExtra","FieldSet","NestedList","ListRequired","SyncToUrl"];export{Te as AllFieldTypes,Ee as AsyncRequest,qe as CustomSubmitter,_e as DatePickerStory,Ye as DebounceField,we as Default,Ae as Dependency,Oe as DialogFormStory,Be as DrawerFormControlled,De as DrawerFormLeft,Ie as DrawerFormStory,Ve as DynamicList,Qe as FieldDependencies,Ze as FieldRequest,rr as FieldSet,Re as GridLayout,Ue as GridResponsive,Xe as GroupCollapsible,er as GroupWithExtra,$e as KitchenSink,tr as ListRequired,Se as LoadingState,Je as ModeEdit,ze as ModeRead,We as ModeUpdate,nr as NestedList,ke as NoSubmitter,Ke as OmitNil,Le as RadioGroupStory,je as ReadonlyMode,Me as SliderStory,ar as SyncToUrl,Ge as UploadField,Ce as Validation,He as ValueEnum,Ne as WidthPresets,qs as __namedExportsOrder,Ns as default};
