import{j as s,c as w,a as N}from"./classnames-DVmDMOck.js";import{r as S}from"./index-LFmgH05F.js";import{f as h}from"./index-CcqeJTvO.js";import{I as o}from"./Icons-Jj-V_22N.js";import{T as _,a as L,b as W}from"./Typography-rwjkbZ_G.js";import"./Icons-DvbtecMd.js";import"./Tooltip-BQB23PR8.js";import"./index-CUUKTymD.js";const B="Close alert",O={info:s.jsx(o,{name:"notificationInfo",size:32}),success:s.jsx(o,{name:"notificationSuccess",size:32}),warning:s.jsx(o,{name:"notificationWarning",size:32}),error:s.jsx(o,{name:"notificationError",size:32})},x=f=>{const{className:t="",prefixCls:A="alert",status:y="info",title:a,body:n,link:e,icon:T,showIcon:C=!0,action:b,closable:k=!0,onClose:E,ref:v,...z}=f,r=w(A),I=T??O[y];return s.jsxs("div",{...z,ref:v,className:r(void 0,N(r(y),t)),children:[C&&s.jsx("span",{className:r("icon"),children:I}),s.jsxs("div",{className:r("content"),children:[a&&(typeof a=="string"?s.jsx(_,{size:"sm",strong:!0,color:"default",children:a}):a),n&&(typeof n=="string"?s.jsx(L,{size:"md",color:"default-secondary",children:n}):n),e&&s.jsx(W,{size:"md",href:e.href,target:e.target,rel:e.target==="_blank"?e.rel??"noreferrer":e.rel,onClick:e.onClick,children:e.label})]}),b&&s.jsx("div",{className:r("action"),children:b}),k&&s.jsx("button",{type:"button",className:r("close"),onClick:E,"aria-label":B,children:s.jsx(o,{name:"cross",size:16,fill:!0})})]})};S.memo(x);const j=["info","success","warning","error"],G={title:"Components/Alert",component:x,argTypes:{status:{control:"radio",options:[...j]},closable:{control:"boolean"},showIcon:{control:"boolean"},title:{control:"text"},body:{control:"text"}},args:{status:"info",closable:!0,showIcon:!0,title:"Title",body:"Body text.",link:{label:"Link",onClick:h()},onClose:h()},tags:["autodocs"]},c={render:f=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:j.map(t=>S.createElement(x,{...f,key:t,status:t}))}),tags:["!autodocs","dev"]},i={args:{status:"info"}},l={args:{status:"success"}},d={args:{status:"warning"}},u={args:{status:"error"}},m={args:{status:"info",action:s.jsx("button",{type:"button",style:{fontSize:12,padding:"8px 12px",borderRadius:8,border:"none",cursor:"pointer"},children:"Button"})}},p={args:{title:"Alert with title only",body:void 0,link:void 0}},g={args:{closable:!1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400
  }}>
      {STATUSES.map(status => <Alert {...args} key={status} status={status} />)}
    </div>,
  tags: ['!autodocs', 'dev']
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'info'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'info',
    action: <button type="button" style={{
      fontSize: 12,
      padding: '8px 12px',
      borderRadius: 8,
      border: 'none',
      cursor: 'pointer'
    }}>Button</button>
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Alert with title only',
    body: undefined,
    link: undefined
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    closable: false
  }
}`,...g.parameters?.docs?.source}}};const H=["AllVariants","Info","Success","Warning","Error","WithAction","TitleOnly","NoCLose"];export{c as AllVariants,u as Error,i as Info,g as NoCLose,l as Success,p as TitleOnly,d as Warning,m as WithAction,H as __namedExportsOrder,G as default};
