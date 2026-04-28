import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as j}from"./index-CP2yOfOm.js";import{f as d}from"./index-DCiaR2iG.js";import{B as L}from"./Button-B8jksPmH.js";import{I as D}from"./Icons-BzLXzN_n.js";import{T as p}from"./Typography-BK-BjBuS.js";import{D as w,a as z,b as i}from"./Dialog-B5OotzNP.js";/* empty css               */import"./Spinner--k6QT4Qj.js";import"./iframe-k9SZMUwJ.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./Portal-D8KWBNKu.js";import"./index-D1q9exoj.js";const C=()=>o.jsx("div",{style:{aspectRatio:"284 / 160",display:"grid",placeItems:"center",width:"100%",padding:20,backgroundColor:"#e3e4e4",backgroundImage:"radial-gradient(circle at 1px 1px, rgba(187, 189, 193, 0.2) 1px, transparent 0)",backgroundSize:"26px 26px",color:"#bbbdc1",fontWeight:700,fontSize:18,lineHeight:"19.44px"},children:"16:9 • sm"}),V={title:"Components/Dialog",component:z,argTypes:{size:{control:"radio",options:w},open:{control:!1},footer:{control:!1},media:{control:!1},illustration:{control:!1},closeIcon:{control:!1},backIcon:{control:!1}},args:{title:"Text Heading",description:"Body text",onOk:d(),onCancel:d()},tags:["autodocs"]},l=e=>{const[b,c]=j.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(L,{onClick:()=>c(!0),children:"Open dialog"}),o.jsx(z,{...e,open:b,onBack:e.onBack,onOk:()=>{var r;(r=e.onOk)==null||r.call(e),c(!1)},onCancel:()=>{var r;(r=e.onCancel)==null||r.call(e),c(!1)}})]})},t={args:{size:i.small,illustration:"illus2FA",okText:"Button",cancelText:"Button"},render:e=>o.jsx(l,{...e})},a={args:{size:i.large,showBackIcon:!0,illustration:"illus2FA"},render:e=>o.jsx(l,{...e})},n={args:{size:i.small,title:"Text Heading",description:"Body text",showCloseIcon:!1,okText:"Button",cancelText:"Button",media:o.jsx(C,{})},render:e=>o.jsx(l,{...e})},s={args:{size:i.small,title:"Security check required",illustration:o.jsx(D,{name:"illusLocked",size:74}),description:void 0,children:o.jsxs(o.Fragment,{children:[o.jsx(p,{size:"md",strong:!0,color:"default-secondary",children:"Review the details below before continuing."}),o.jsx(p,{size:"md",color:"default-secondary",children:"This dialog keeps the Figma shell and footer layout while allowing arbitrary content."})]})},render:e=>o.jsx(l,{...e})};var m,u,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE.small,
    illustration: 'illus2FA',
    okText: 'Button',
    cancelText: 'Button'
  },
  render: args => <DialogLauncher {...args} />
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE.large,
    showBackIcon: true,
    illustration: 'illus2FA'
  },
  render: args => <DialogLauncher {...args} />
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,I,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE.small,
    title: 'Text Heading',
    description: 'Body text',
    showCloseIcon: false,
    okText: 'Button',
    cancelText: 'Button',
    media: <MediaPlaceholder />
  },
  render: args => <DialogLauncher {...args} />
}`,...(k=(I=n.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var B,T,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE.small,
    title: 'Security check required',
    illustration: <Icons name="illusLocked" size={74} />,
    description: undefined,
    children: <>
        <TypographyBody size="md" strong color="default-secondary">
          Review the details below before continuing.
        </TypographyBody>
        <TypographyBody size="md" color="default-secondary">
          This dialog keeps the Figma shell and footer layout while allowing arbitrary content.
        </TypographyBody>
      </>
  },
  render: args => <DialogLauncher {...args} />
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const X=["Small","Large","WithMedia","CustomContent"];export{s as CustomContent,a as Large,t as Small,n as WithMedia,X as __namedExportsOrder,V as default};
