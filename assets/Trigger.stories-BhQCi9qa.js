import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as Y}from"./index-CP2yOfOm.js";import{f as j}from"./index-DCiaR2iG.js";import{B as r}from"./Button-DiZLg9Qb.js";import{T as o}from"./Trigger-DR6_NdmK.js";/* empty css               *//* empty css                */import"./Spinner-rmS3TbDF.js";import"./iframe-B6rRREmY.js";import"./Typography-C5dixINh.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./Icons-D1aARqJQ.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";const Z={display:"flex",flexDirection:"column",gap:4,minWidth:160},a={display:"flex",alignItems:"center",gap:8,padding:"8px 12px",fontSize:14,lineHeight:"20px",color:"#131313",background:"transparent",border:"none",borderRadius:8,cursor:"pointer",textAlign:"left",width:"100%"};function s({onClose:t}){return e.jsxs("div",{style:Z,children:[e.jsx("button",{type:"button",style:a,onClick:t,children:"Edit"}),e.jsx("button",{type:"button",style:a,onClick:t,children:"Duplicate"}),e.jsx("button",{type:"button",style:a,onClick:t,children:"Archive"}),e.jsx("button",{type:"button",style:{...a,color:"#e53935"},onClick:t,children:"Delete"})]})}const je={title:"Components/Trigger",component:o,argTypes:{trigger:{control:"select",options:["click","hover","focus"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},role:{control:"select",options:["dialog","tooltip","menu","alertdialog","listbox"]},showArrow:{control:"boolean"},disabled:{control:"boolean"},offset:{control:"number"}},args:{trigger:"click",placement:"bottom-start",role:"dialog",showArrow:!1,disabled:!1,offset:4,onOpenChange:j(),onOpen:j(),onClose:j()},tags:["autodocs"]},c={render:t=>e.jsx(o,{...t,content:e.jsx(s,{}),children:e.jsx(r,{children:"Click me"})})},d={render:t=>e.jsx(o,{...t,trigger:"hover",hoverDelay:{open:100,close:200},content:e.jsx(s,{}),children:e.jsx(r,{children:"Hover me"})})},p={render:t=>e.jsx(o,{...t,trigger:"focus",content:e.jsx(s,{}),children:e.jsx(r,{children:"Focus me (Tab)"})})},g={render:t=>e.jsx(o,{...t,trigger:["click","hover"],hoverDelay:{open:200,close:300},content:e.jsx(s,{}),children:e.jsx(r,{children:"Click or Hover"})})},m={render:t=>{const i=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,padding:120,justifyContent:"center"},children:i.map(n=>Y.createElement(o,{...t,key:n,placement:n,content:e.jsx("div",{style:{padding:8,fontSize:13,whiteSpace:"nowrap"},children:n})},e.jsx(r,{size:"small",children:n})))})}},u={render:t=>{const[i,n]=Y.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(o,{...t,open:i,onOpenChange:l=>{var v;n(l),(v=t.onOpenChange)==null||v.call(t,l)},content:e.jsx(s,{onClose:()=>n(!1)}),children:e.jsx(r,{children:"Controlled"})}),e.jsxs(r,{color:"grey",size:"small",onClick:()=>n(l=>!l),children:["Toggle: ",i?"Open":"Closed"]})]})}},h={render:t=>e.jsx(o,{...t,content:({close:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,minWidth:200},children:[e.jsx("p",{style:{margin:0,fontSize:14,lineHeight:"20px"},children:"Are you sure you want to delete this item?"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{size:"small",color:"grey",onClick:i,children:"Cancel"}),e.jsx(r,{size:"small",color:"red",onClick:i,children:"Delete"})]})]}),children:e.jsx(r,{color:"red",children:"Delete Item"})})},x={render:t=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(o,{...t,role:"tooltip",trigger:"hover",content:e.jsx("div",{style:{fontSize:13},children:"Tooltip content"}),children:e.jsx(r,{size:"small",children:"role=tooltip"})}),e.jsx(o,{...t,role:"menu",content:e.jsx(s,{}),children:e.jsx(r,{size:"small",children:"role=menu"})}),e.jsx(o,{...t,role:"alertdialog",content:e.jsx("div",{style:{fontSize:13,maxWidth:200},children:"This action cannot be undone."}),children:e.jsx(r,{size:"small",children:"role=alertdialog"})})]})},f={render:t=>e.jsx(o,{...t,disabled:!0,content:e.jsx(s,{}),children:e.jsx(r,{disabled:!0,children:"Disabled"})})},y={render:t=>e.jsx("div",{style:{position:"relative"},children:e.jsx(o,{...t,portal:!1,content:e.jsx(s,{}),children:e.jsx(r,{children:"No Portal"})})})};var C,T,b;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Trigger {...args} content={<MenuContent />}>
      <Button>Click me</Button>
    </Trigger>
}`,...(b=(T=c.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var B,S,k;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Trigger {...args} trigger="hover" hoverDelay={{
    open: 100,
    close: 200
  }} content={<MenuContent />}>
      <Button>Hover me</Button>
    </Trigger>
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var z,D,O;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Trigger {...args} trigger="focus" content={<MenuContent />}>
      <Button>Focus me (Tab)</Button>
    </Trigger>
}`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var w,H,M;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Trigger {...args} trigger={['click', 'hover']} hoverDelay={{
    open: 200,
    close: 300
  }} content={<MenuContent />}>
      <Button>Click or Hover</Button>
    </Trigger>
}`,...(M=(H=g.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var W,P,A;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const placements: Placement[] = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'];
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      padding: 120,
      justifyContent: 'center'
    }}>
        {placements.map(placement => <Trigger {...args} key={placement} placement={placement} content={<div style={{
        padding: 8,
        fontSize: 13,
        whiteSpace: 'nowrap'
      }}>
                {placement}
              </div>}>
            <Button size="small">{placement}</Button>
          </Trigger>)}
      </div>;
  }
}`,...(A=(P=m.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var F,I,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <Trigger {...args} open={open} onOpenChange={nextOpen => {
        setOpen(nextOpen);
        args.onOpenChange?.(nextOpen);
      }} content={<MenuContent onClose={() => setOpen(false)} />}>
          <Button>Controlled</Button>
        </Trigger>
        <Button color="grey" size="small" onClick={() => setOpen(prev => !prev)}>
          Toggle: {open ? 'Open' : 'Closed'}
        </Button>
      </div>;
  }
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var E,N,_;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Trigger {...args} content={({
    close
  }) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    minWidth: 200
  }}>
          <p style={{
      margin: 0,
      fontSize: 14,
      lineHeight: '20px'
    }}>
            Are you sure you want to delete this item?
          </p>
          <div style={{
      display: 'flex',
      gap: 8
    }}>
            <Button size="small" color="grey" onClick={close}>
              Cancel
            </Button>
            <Button size="small" color="red" onClick={close}>
              Delete
            </Button>
          </div>
        </div>}>
      <Button color="red">Delete Item</Button>
    </Trigger>
}`,...(_=(N=h.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var q,G,J;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <Trigger {...args} role="tooltip" trigger="hover" content={<div style={{
      fontSize: 13
    }}>Tooltip content</div>}>
        <Button size="small">role=tooltip</Button>
      </Trigger>
      <Trigger {...args} role="menu" content={<MenuContent />}>
        <Button size="small">role=menu</Button>
      </Trigger>
      <Trigger {...args} role="alertdialog" content={<div style={{
      fontSize: 13,
      maxWidth: 200
    }}>
            This action cannot be undone.
          </div>}>
        <Button size="small">role=alertdialog</Button>
      </Trigger>
    </div>
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <Trigger {...args} disabled content={<MenuContent />}>
      <Button disabled>Disabled</Button>
    </Trigger>
}`,...(Q=(L=f.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,V,X;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <div style={{
    position: 'relative'
  }}>
      <Trigger {...args} portal={false} content={<MenuContent />}>
        <Button>No Portal</Button>
      </Trigger>
    </div>
}`,...(X=(V=y.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const ve=["ClickTrigger","HoverTrigger","FocusTrigger","CombinedTriggers","Placements","Controlled","RenderFunction","CustomRole","Disabled","WithoutPortal"];export{c as ClickTrigger,g as CombinedTriggers,u as Controlled,x as CustomRole,f as Disabled,p as FocusTrigger,d as HoverTrigger,m as Placements,h as RenderFunction,y as WithoutPortal,ve as __namedExportsOrder,je as default};
