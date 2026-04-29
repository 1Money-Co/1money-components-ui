import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as o}from"./index-DCiaR2iG.js";import{B as f}from"./Button-DkJuGdSJ.js";import{I as Q}from"./Icons-D1aARqJQ.js";import{A as s}from"./Alert-DPj0al-y.js";import"./Typography-W3UmxfrR.js";import"./index-CP2yOfOm.js";import"./Spinner-D294GBzN.js";import"./iframe-DcBqT0B3.js";import"./classnames-h1fAIaEr.js";/* empty css               */import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const Y=["info","success","warning","error"],_={maxWidth:560},z={display:"flex",flexDirection:"column",gap:16},m="This title is intentionally long enough to wrap onto multiple lines so the single-content icon alignment is easy to verify.",M=e.jsxs(e.Fragment,{children:["For other stablecoins or fiat currency pairs not listed above, please contact us at ",e.jsx("a",{rel:"noopener noreferrer nofollow",href:"mailto:support@1money.com",className:"tw-text-primary tw-underline tw-font-medium",children:"support@1money.com"})]}),de={title:"Components/Alert",component:s,parameters:{docs:{description:{component:"Alert is an inline feedback surface for contextual messaging. It supports title/body content, inline links, and a right-side action that can coexist with the close button. Single-content alerts without links use the body text style and vertically center the icon."}}},decorators:[t=>e.jsx("div",{style:_,children:e.jsx(t,{})})],argTypes:{status:{control:"radio",options:[...Y]},closable:{control:"boolean"},showIcon:{control:"boolean"},title:{control:"text"},body:{control:"text"},action:{control:!1},className:{control:!1},icon:{control:!1},onClose:{control:!1},prefixCls:{control:!1},ref:{control:!1}},args:{status:"info",closable:!1,showIcon:!0,title:"Network connection restored",body:"Background syncing has resumed and your data is up to date.",link:{label:"View details",onClick:o()},onClose:o()},tags:["autodocs"]},n={},a={render:t=>e.jsxs("div",{style:z,children:[e.jsx(s,{...t,status:"info",title:"Sync in progress",body:"Large uploads may take a few more seconds to appear everywhere.",link:{label:"See sync status",onClick:o()},closable:!1}),e.jsx(s,{...t,status:"success",title:"Verification complete",body:"Your account passed the latest security checks.",link:{label:"Open audit log",onClick:o()},closable:!1}),e.jsx(s,{...t,status:"warning",title:"Review payout details",body:"One recipient is missing bank metadata and may fail on submission.",link:{label:"Fix recipient",onClick:o()},closable:!1}),e.jsx(s,{...t,status:"error",title:"Transfer failed",body:"The quoted rate expired before settlement. Refresh and try again.",link:{label:"Retry transfer",onClick:o()},closable:!1})]}),args:{link:void 0,onClose:void 0},tags:["!autodocs","dev"]},i={render:t=>e.jsx(s,{...t,status:"info",title:"Payment instruction ready",body:"Share the deposit instruction with your treasury team or copy it directly.",link:{label:"Preview instruction",onClick:o()},action:e.jsx(f,{onClick:o(),children:"Copy details"}),closable:!1})},l={render:t=>e.jsx(s,{...t,status:"warning",title:"New compliance checklist",body:"A new checklist item is required before the next outbound transfer can be approved.",link:{label:"Open checklist",onClick:o()},action:e.jsx(f,{onClick:o(),children:"Review now"}),closable:!0,onClose:o()})},r={args:{showIcon:!1,closable:!1,title:"Quiet inline message",body:"Use this version when the surrounding layout already provides enough visual emphasis.",link:{label:"Learn when to use it",onClick:o()}}},c={render:t=>e.jsx(s,{...t,status:"info",title:"Manual review queued",body:"This alert uses a custom icon to reflect a workflow-specific state instead of the default status glyph.",icon:e.jsx(Q,{name:"notificationWarning",size:32}),link:{label:"Open queue",onClick:o()}})},d={render:t=>e.jsxs("div",{style:z,children:[e.jsx(s,{...t,title:m,body:void 0,link:void 0,closable:!1}),e.jsx(s,{...t,title:void 0,body:M,link:void 0,closable:!1}),e.jsx(s,{...t,title:m,body:void 0,link:{label:"Open details",onClick:o()},closable:!1}),e.jsx(s,{title:m,body:void 0,closable:!1,action:e.jsx(f,{onClick:()=>{console.log("Action button clicked")},children:"Take action"})})]}),args:{status:"info"},tags:["!autodocs","dev"]},u={args:{title:m,body:void 0,link:void 0,closable:!1}},p={args:{title:void 0,body:M,link:void 0,closable:!1}};var y,b,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var g,h,w;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={stackStyle}>
      <Alert {...args} status="info" title="Sync in progress" body="Large uploads may take a few more seconds to appear everywhere." link={{
      label: 'See sync status',
      onClick: fn()
    }} closable={false} />
      <Alert {...args} status="success" title="Verification complete" body="Your account passed the latest security checks." link={{
      label: 'Open audit log',
      onClick: fn()
    }} closable={false} />
      <Alert {...args} status="warning" title="Review payout details" body="One recipient is missing bank metadata and may fail on submission." link={{
      label: 'Fix recipient',
      onClick: fn()
    }} closable={false} />
      <Alert {...args} status="error" title="Transfer failed" body="The quoted rate expired before settlement. Refresh and try again." link={{
      label: 'Retry transfer',
      onClick: fn()
    }} closable={false} />
    </div>,
  args: {
    link: undefined,
    onClose: undefined
  },
  tags: ['!autodocs', 'dev']
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var v,x,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Alert {...args} status="info" title="Payment instruction ready" body="Share the deposit instruction with your treasury team or copy it directly." link={{
    label: 'Preview instruction',
    onClick: fn()
  }} action={<Button onClick={fn()}>Copy details</Button>} closable={false} />
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var A,S,j;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Alert {...args} status="warning" title="New compliance checklist" body="A new checklist item is required before the next outbound transfer can be approved." link={{
    label: 'Open checklist',
    onClick: fn()
  }} action={<Button onClick={fn()}>Review now</Button>} closable onClose={fn()} />
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var T,O,B;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    showIcon: false,
    closable: false,
    title: 'Quiet inline message',
    body: 'Use this version when the surrounding layout already provides enough visual emphasis.',
    link: {
      label: 'Learn when to use it',
      onClick: fn()
    }
  }
}`,...(B=(O=r.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var I,L,R;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Alert {...args} status="info" title="Manual review queued" body="This alert uses a custom icon to reflect a workflow-specific state instead of the default status glyph." icon={<Icons name="notificationWarning" size={32} />} link={{
    label: 'Open queue',
    onClick: fn()
  }} />
}`,...(R=(L=c.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var q,W,N;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <div style={stackStyle}>
      <Alert {...args} title={multiLineTitle} body={undefined} link={undefined} closable={false} />
      <Alert {...args} title={undefined} body={multiLineBody} link={undefined} closable={false} />
      <Alert {...args} title={multiLineTitle} body={undefined} link={{
      label: 'Open details',
      onClick: fn()
    }} closable={false} />
      <Alert title={multiLineTitle} body={undefined} closable={false} action={<Button onClick={() => {
      console.log('Action button clicked');
    }}>Take action</Button>} />
    </div>,
  args: {
    status: 'info'
  },
  tags: ['!autodocs', 'dev']
}`,...(N=(W=d.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var V,F,P;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: multiLineTitle,
    body: undefined,
    link: undefined,
    closable: false
  }
}`,...(P=(F=u.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var D,E,U;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: undefined,
    body: multiLineBody,
    link: undefined,
    closable: false
  }
}`,...(U=(E=p.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const ue=["Default","AllVariants","WithAction","ActionAndClose","WithoutIcon","CustomIcon","SingleContentStates","TitleOnly","BodyOnly"];export{l as ActionAndClose,a as AllVariants,p as BodyOnly,c as CustomIcon,n as Default,d as SingleContentStates,u as TitleOnly,i as WithAction,r as WithoutIcon,ue as __namedExportsOrder,de as default};
