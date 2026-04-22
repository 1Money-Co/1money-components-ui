import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-CP2yOfOm.js";import{r as $}from"./index-D1q9exoj.js";import{C as q}from"./CoachMark-DIJiOg1i.js";import{u as K}from"./index-CyN509qF.js";import{u as k}from"./index-nCcupNJZ.js";import{B as y}from"./Button-CyPAFFeb.js";import"./Typography-CKl69wC2.js";import"./Icons-BarT8jPS.js";import"./Carousel-kaoddJ5D.js";/* empty css               */import"./classnames-h1fAIaEr.js";import"./index-CN0Pk037.js";import"./Spinner-51b2jJ5l.js";import"./iframe-BLwC-r4X.js";import"./ResizeObserver-DW8-DKQf.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";const W=8,Z=14,J=12,Q=1e3,S=450,m=12,D=s=>{var t;return typeof s.target=="string"?document.querySelector(s.target):((t=s.target)==null?void 0:t.current)??null},L=(s,t)=>{const r=window.innerWidth;let e=s-t/2;e<m?e=m:e+t>r-m&&(e=r-m-t);const a=(s-e)/t*100,o=Math.abs(a-50)>2;return{left:e,arrowOffset:o?`${a.toFixed(1)}%`:void 0}},I=(s,t)=>{const r=window.innerHeight;let e=s-t/2;e<m?e=m:e+t>r-m&&(e=r-m-t);const a=(s-e)/t*100,o=Math.abs(a-50)>2;return{top:e,arrowOffset:o?`${a.toFixed(1)}%`:void 0}},ee=(s,t,r,e,d,a)=>{const o=s.getBoundingClientRect(),R={position:"absolute",top:o.top-r,left:o.left-r,width:o.width+r*2,height:o.height+r*2,borderRadius:d,boxShadow:"0 0 0 9999px rgba(0, 0, 0, 0.45)",pointerEvents:"none",transition:"all 250ms ease",zIndex:a+1},l={position:"absolute",zIndex:a+2,transition:"all 250ms ease"};let p;const h=o.left+o.width/2,v=o.top+o.height/2;switch(t){case"bottom":{const i=L(h,S);l.top=o.bottom+e,l.left=i.left,p=i.arrowOffset;break}case"top":{const i=L(h,S);l.bottom=window.innerHeight-o.top+e,l.left=i.left,p=i.arrowOffset;break}case"right":{const i=I(v,S);l.top=i.top,l.left=o.right+e,p=i.arrowOffset;break}case"left":{const i=I(v,S);l.top=i.top,l.right=window.innerWidth-o.left+e,p=i.arrowOffset;break}}return{spotlight:R,coachMark:l,arrowOffset:p}},te=s=>{const{open:t,steps:r,activeStep:e,defaultActiveStep:d=0,onChange:a,onClose:o,dismissible:R=!0,labels:l,spotlightPadding:p=W,gap:h=Z,scrollIntoView:v=!0,spotlightRadius:i=J,closeOnBackdropClick:H=!1,zIndex:x=Q}=s,[E,O]=K(d,e),[b,C]=u.useState(null),c=r[E],T=(c==null?void 0:c.placement)??"bottom";u.useLayoutEffect(()=>{if(!t||!c){C(null);return}const f=D(c);if(!f)return;v&&f.scrollIntoView({behavior:"smooth",block:"nearest"});const g=()=>{const B=D(c);B&&C(ee(B,T,p,h,i,x))},Y=setTimeout(g,v?300:0);return window.addEventListener("resize",g),window.addEventListener("scroll",g,!0),()=>{clearTimeout(Y),window.removeEventListener("resize",g),window.removeEventListener("scroll",g,!0)}},[t,E,c,T,p,h,v,i,x]),u.useEffect(()=>{t&&e===void 0&&O(d)},[t]);const z=k(f=>{O(f),a==null||a(f)}),G=k(()=>{o()}),j=k(()=>{o()});if(!t||!b)return null;const V=r.map(f=>({icon:f.icon,heading:f.heading,body:f.body})),N={position:"fixed",inset:0,zIndex:x,pointerEvents:"none"},X={position:"fixed",inset:0,zIndex:x,pointerEvents:"auto",background:"transparent"};return $.createPortal(n.jsxs(n.Fragment,{children:[n.jsx("div",{style:X,onClick:H?j:void 0}),n.jsxs("div",{style:N,children:[n.jsx("div",{style:b.spotlight}),n.jsx("div",{style:{...b.coachMark,pointerEvents:"auto"},children:n.jsx(q,{steps:V,activeStep:E,onChange:z,onFinish:G,onDismiss:j,dismissible:R,placement:T,arrowOffset:(c==null?void 0:c.arrowOffset)??b.arrowOffset,labels:l})})]})]}),document.body)},P=u.memo(te),be={title:"Components/Tour",component:P,tags:["autodocs"]},w={render:()=>{const[s,t]=u.useState(!1),r=u.useRef(null),e=u.useRef(null),d=u.useRef(null);return n.jsxs("div",{children:[n.jsx(y,{color:"primary",onClick:()=>t(!0),children:"Begin Tour"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:48,marginTop:40,width:500},children:[n.jsx("div",{style:{alignSelf:"flex-start"},children:n.jsx(y,{ref:r,variant:"text",children:"Upload"})}),n.jsx("div",{style:{alignSelf:"center"},children:n.jsx(y,{ref:e,color:"primary",children:"Save"})}),n.jsx("div",{style:{alignSelf:"flex-end"},children:n.jsx(y,{ref:d,variant:"text",children:"···"})})]}),n.jsx(P,{open:s,onClose:()=>t(!1),steps:[{target:r,placement:"bottom",heading:"Upload File",body:"Click to upload your files."},{target:e,placement:"bottom",heading:"Save",body:"Save your changes."},{target:d,placement:"bottom",heading:"More",body:"Click for more options."}]})]})}};var M,_,A,F,U;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const uploadRef = useRef<HTMLButtonElement>(null);
    const saveRef = useRef<HTMLButtonElement>(null);
    const moreRef = useRef<HTMLButtonElement>(null);
    return <div>
        <Button color="primary" onClick={() => setOpen(true)}>
          Begin Tour
        </Button>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        marginTop: 40,
        width: 500
      }}>
          <div style={{
          alignSelf: 'flex-start'
        }}>
            <Button ref={uploadRef} variant="text">Upload</Button>
          </div>
          <div style={{
          alignSelf: 'center'
        }}>
            <Button ref={saveRef} color="primary">Save</Button>
          </div>
          <div style={{
          alignSelf: 'flex-end'
        }}>
            <Button ref={moreRef} variant="text">···</Button>
          </div>
        </div>

        <Tour open={open} onClose={() => setOpen(false)} steps={[{
        target: uploadRef,
        placement: 'bottom',
        heading: 'Upload File',
        body: 'Click to upload your files.'
      }, {
        target: saveRef,
        placement: 'bottom',
        heading: 'Save',
        body: 'Save your changes.'
      }, {
        target: moreRef,
        placement: 'bottom',
        heading: 'More',
        body: 'Click for more options.'
      }]} />
      </div>;
  }
}`,...(A=(_=w.parameters)==null?void 0:_.docs)==null?void 0:A.source},description:{story:"Basic usage",...(U=(F=w.parameters)==null?void 0:F.docs)==null?void 0:U.description}}};const ye=["Default"];export{w as Default,ye as __namedExportsOrder,be as default};
