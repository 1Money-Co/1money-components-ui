import{j as e,c as T,a as v}from"./classnames-DVmDMOck.js";import{r as x}from"./index-LFmgH05F.js";import{f as p}from"./index-CcqeJTvO.js";import{I as o}from"./Icons-Jj-V_22N.js";const A="Close notification",O={info:e.jsx(o,{name:"notificationInfo",size:32}),success:e.jsx(o,{name:"notificationSuccess",size:32}),warning:e.jsx(o,{name:"notificationWarning",size:32}),error:e.jsx(o,{name:"notificationError",size:32})},_=({link:s,className:n})=>{const u=s.target==="_blank"?s.rel??"noreferrer":s.rel;return s.href?e.jsx("a",{className:n,href:s.href,target:s.target,rel:u,onClick:s.onClick,children:s.label}):e.jsx("button",{type:"button",className:n,onClick:s.onClick,children:s.label})},m=s=>{const{className:n="",prefixCls:u="notification",status:f="info",title:h,body:b,link:g,icon:N,showIcon:C=!0,closable:I=!0,onClose:j,ref:k,...w}=s,t=T(u),S=N??O[f];return e.jsxs("div",{...w,ref:k,className:t(void 0,v(t(f),n)),children:[e.jsxs("div",{className:t("content-wrapper"),children:[C&&e.jsx("div",{className:t("icon-wrapper"),children:e.jsx("span",{className:t("icon"),children:S})}),e.jsxs("div",{className:t("content"),children:[h&&e.jsx("div",{className:t("title"),children:h}),b&&e.jsx("div",{className:t("body"),children:b}),g&&e.jsx(_,{link:g,className:t("link")})]})]}),I&&e.jsx("button",{type:"button",className:t("close"),onClick:j,"aria-label":A,children:e.jsx(o,{name:"cross",size:16,fill:!0,color:"currentColor"})})]})};x.memo(m);const y=["info","success","warning","error"],U={title:"Components/Notification",component:m,argTypes:{status:{control:"radio",options:[...y]},closable:{control:"boolean"},showIcon:{control:"boolean"},title:{control:"text"},body:{control:"text"}},args:{status:"info",closable:!0,showIcon:!0,title:"Title",body:"You can now link multiple accounts to manage your finances all in one place.",onClose:p(),onClick:p()},tags:["autodocs"]},a={render:s=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:400},children:y.map(n=>x.createElement(m,{...s,key:n,status:n,title:`${n.charAt(0).toUpperCase()}${n.slice(1)} Notification`}))}),args:{title:void 0},tags:["!autodocs","dev"]},r={args:{status:"info",title:"Account linked",body:"Your bank account has been successfully connected.",link:{label:"View details",onClick:p()}}},i={args:{status:"info",title:"New feature",body:"You can now explore the updated help center.",link:{label:"Open help center",href:"https://example.com/help-center",target:"_blank"}}},c={args:{status:"success",title:void 0,body:"Settings saved successfully."}},l={args:{showIcon:!1,title:"No icon notification",body:"This notification has no status icon."}},d={args:{closable:!1,status:"warning",title:"Persistent notification",body:"This notification cannot be dismissed."}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 400
  }}>
      {NOTIFICATION_STATUSES.map(status => <Notification {...args} key={status} status={status} title={\`\${status.charAt(0).toUpperCase()}\${status.slice(1)} Notification\`} />)}
    </div>,
  args: {
    title: undefined
  },
  tags: ['!autodocs', 'dev']
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'info',
    title: 'Account linked',
    body: 'Your bank account has been successfully connected.',
    link: {
      label: 'View details',
      onClick: fn()
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'info',
    title: 'New feature',
    body: 'You can now explore the updated help center.',
    link: {
      label: 'Open help center',
      href: 'https://example.com/help-center',
      target: '_blank'
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    title: undefined,
    body: 'Settings saved successfully.'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showIcon: false,
    title: 'No icon notification',
    body: 'This notification has no status icon.'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    closable: false,
    status: 'warning',
    title: 'Persistent notification',
    body: 'This notification cannot be dismissed.'
  }
}`,...d.parameters?.docs?.source}}};const Y=["AllVariants","WithLink","WithHref","BodyOnly","NoIcon","NotClosable"];export{a as AllVariants,c as BodyOnly,l as NoIcon,d as NotClosable,i as WithHref,r as WithLink,Y as __namedExportsOrder,U as default};
