import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as D}from"./index-CP2yOfOm.js";import{f as m}from"./index-DCiaR2iG.js";import{B as O}from"./Button-DkJuGdSJ.js";import{I as A}from"./Icons-D1aARqJQ.js";import{T as u}from"./Typography-W3UmxfrR.js";import{D as E,a as j,b as a}from"./Dialog-CGZhxqcJ.js";/* empty css               */import"./Spinner-D294GBzN.js";import"./iframe-DcBqT0B3.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./Portal-D8KWBNKu.js";import"./index-D1q9exoj.js";const R=()=>r.jsx("div",{style:{aspectRatio:"284 / 160",display:"grid",placeItems:"center",width:"100%",padding:20,backgroundColor:"#e3e4e4",backgroundImage:"radial-gradient(circle at 1px 1px, rgba(187, 189, 193, 0.2) 1px, transparent 0)",backgroundSize:"26px 26px",color:"#bbbdc1",fontWeight:700,fontSize:18,lineHeight:"19.44px"},children:"16:9 • sm"}),ee={title:"Components/Dialog",component:j,argTypes:{size:{control:"radio",options:E},open:{control:!1},footer:{control:!1},media:{control:!1},illustration:{control:!1},closeIcon:{control:!1},backIcon:{control:!1}},args:{title:"Text Heading",onOk:m(),onCancel:m()},tags:["autodocs"]},t=e=>{const[C,d]=D.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(O,{onClick:()=>d(!0),children:"Open dialog"}),r.jsx(j,{...e,open:C,onBack:e.onBack,onOk:()=>{var o;(o=e.onOk)==null||o.call(e),d(!1)},onCancel:()=>{var o;(o=e.onCancel)==null||o.call(e),d(!1)}})]})},s={args:{size:a.small,illustration:"illus2FA",okText:"Button",cancelText:"Button"},render:e=>r.jsx(t,{...e})},n={args:{size:a.large,showBackIcon:!0,illustration:"illus2FA"},render:e=>r.jsx(t,{...e})},l={args:{size:a.small,title:"Text Heading",showCloseIcon:!1,okText:"Button",cancelText:"Button",media:r.jsx(R,{})},render:e=>r.jsx(t,{...e})},i={args:{size:a.small,illustration:"illusRewards",title:"Rewards",children:"You have earned a reward! Check your balance for details.",okText:"Claim",cancelText:"Later"},render:e=>r.jsx(t,{...e})},c={args:{size:a.small,title:"Security check required",illustration:r.jsx(A,{name:"illusLocked",size:74}),children:r.jsxs(r.Fragment,{children:[r.jsx(u,{size:"md",strong:!0,color:"default-secondary",children:"Review the details below before continuing."}),r.jsx(u,{size:"md",color:"default-secondary",children:"This dialog keeps the Figma shell and footer layout while allowing arbitrary content."})]})},render:e=>r.jsx(t,{...e})};var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE.small,
    illustration: 'illus2FA',
    okText: 'Button',
    cancelText: 'Button'
  },
  render: args => <DialogLauncher {...args} />
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,f,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE.large,
    showBackIcon: true,
    illustration: 'illus2FA'
  },
  render: args => <DialogLauncher {...args} />
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var I,k,T;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE.small,
    title: 'Text Heading',
    showCloseIcon: false,
    okText: 'Button',
    cancelText: 'Button',
    media: <MediaPlaceholder />
  },
  render: args => <DialogLauncher {...args} />
}`,...(T=(k=l.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var w,S,z;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE.small,
    illustration: 'illusRewards',
    title: 'Rewards',
    children: 'You have earned a reward! Check your balance for details.',
    okText: 'Claim',
    cancelText: 'Later'
  },
  render: args => <DialogLauncher {...args} />
}`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var B,L,b;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE.small,
    title: 'Security check required',
    illustration: <Icons name="illusLocked" size={74} />,
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
}`,...(b=(L=c.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};const re=["Small","Large","WithMedia","WithRewardsIllustration","CustomContent"];export{c as CustomContent,n as Large,s as Small,l as WithMedia,i as WithRewardsIllustration,re as __namedExportsOrder,ee as default};
