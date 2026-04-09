import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-CP2yOfOm.js";import{f as d}from"./index-DCiaR2iG.js";import{f as j}from"./Button-xKWQamn_.js";import{I as L}from"./Icons-C17k0gNH.js";import{T as m}from"./Typography-COcdYQQO.js";import{M as w,a as z,b as i}from"./Modal-CyhthJQg.js";/* empty css               */import"./Spinner-C9s5r2Mu.js";import"./classnames-0AlMal0H.js";import"./ResizeObserver-DbXOvenx.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./iframe-C8OcTo_O.js";import"./Tooltip-CsTd8WLo.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./Portal-B7v9_YIQ.js";import"./index-D1q9exoj.js";const C=()=>o.jsx("div",{style:{aspectRatio:"284 / 160",display:"grid",placeItems:"center",width:"100%",padding:20,backgroundColor:"#e3e4e4",backgroundImage:"radial-gradient(circle at 1px 1px, rgba(187, 189, 193, 0.2) 1px, transparent 0)",backgroundSize:"26px 26px",color:"#bbbdc1",fontWeight:700,fontSize:18,lineHeight:"19.44px"},children:"16:9 • sm"}),V={title:"Components/Modal",component:z,argTypes:{size:{control:"radio",options:w},open:{control:!1},footer:{control:!1},media:{control:!1},illustration:{control:!1},closeIcon:{control:!1},backIcon:{control:!1}},args:{title:"Text Heading",description:"Body text",onOk:d(),onCancel:d()},tags:["autodocs"]},l=e=>{const[I,c]=b.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(j,{onClick:()=>c(!0),children:"Open modal"}),o.jsx(z,{...e,open:I,onBack:e.onBack,onOk:()=>{var r;(r=e.onOk)==null||r.call(e),c(!1)},onCancel:()=>{var r;(r=e.onCancel)==null||r.call(e),c(!1)}})]})},t={args:{size:i.small,illustration:"illus2FA",okText:"Button",cancelText:"Button"},render:e=>o.jsx(l,{...e})},a={args:{size:i.large,showBackIcon:!0,illustration:"illus2FA"},render:e=>o.jsx(l,{...e})},n={args:{size:i.small,title:"Text Heading",description:"Body text",showCloseIcon:!1,okText:"Button",cancelText:"Button",media:o.jsx(C,{})},render:e=>o.jsx(l,{...e})},s={args:{size:i.small,title:"Security check required",illustration:o.jsx(L,{name:"illusLocked",size:74}),description:void 0,children:o.jsxs(o.Fragment,{children:[o.jsx(m,{size:"md",strong:!0,color:"default-secondary",children:"Review the details below before continuing."}),o.jsx(m,{size:"md",color:"default-secondary",children:"This modal keeps the Figma shell and footer layout while allowing arbitrary content."})]})},render:e=>o.jsx(l,{...e})};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: MODAL_SIZE.small,
    illustration: 'illus2FA',
    okText: 'Button',
    cancelText: 'Button'
  },
  render: args => <ModalLauncher {...args} />
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: MODAL_SIZE.large,
    showBackIcon: true,
    illustration: 'illus2FA'
  },
  render: args => <ModalLauncher {...args} />
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,k,B;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: MODAL_SIZE.small,
    title: 'Text Heading',
    description: 'Body text',
    showCloseIcon: false,
    okText: 'Button',
    cancelText: 'Button',
    media: <MediaPlaceholder />
  },
  render: args => <ModalLauncher {...args} />
}`,...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var T,M,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: MODAL_SIZE.small,
    title: 'Security check required',
    illustration: <Icons name="illusLocked" size={74} />,
    description: undefined,
    children: <>
        <TypographyBody size="md" strong color="default-secondary">
          Review the details below before continuing.
        </TypographyBody>
        <TypographyBody size="md" color="default-secondary">
          This modal keeps the Figma shell and footer layout while allowing arbitrary content.
        </TypographyBody>
      </>
  },
  render: args => <ModalLauncher {...args} />
}`,...(S=(M=s.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const X=["Small","Large","WithMedia","CustomContent"];export{s as CustomContent,a as Large,t as Small,n as WithMedia,X as __namedExportsOrder,V as default};
