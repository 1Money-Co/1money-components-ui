import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as J}from"./index-CP2yOfOm.js";import{T as i}from"./Tooltip-DeIhm5fH.js";import"./classnames-h1fAIaEr.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";const q=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],l={padding:80,textAlign:"center"},K={marginTop:16,display:"flex",gap:8,justifyContent:"center"},z={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:24,alignItems:"start",width:"100%",maxWidth:960},Q={display:"flex",flexDirection:"column",gap:12,padding:24,background:"#f8fafc",border:"1px dashed #d7dee7",borderRadius:12},Z={margin:0,color:"#55606f",fontSize:12,fontWeight:600,lineHeight:"16px",textAlign:"left"},tt={display:"flex",alignItems:"center",justifyContent:"center",minHeight:180,padding:32},F="This is a long tooltip body used to verify the maximum width, text wrapping, and spacing between title and body in the design system.",h="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",at={title:"Components/Tooltip",component:i,argTypes:{placement:{control:"select",options:q},title:{control:"text"},body:{control:"text"},arrow:{control:"boolean"}},args:{body:"Tooltip body text",placement:"top",arrow:!0},tags:["autodocs"]},r=({label:e,title:o,body:b,placement:U="top"})=>{const x=e.toLowerCase().replace(/[^a-z0-9]+/g,"-"),y=`tooltip-preview-anchor-${x}`;return t.jsxs("div",{style:Q,children:[t.jsx("p",{style:Z,children:e}),t.jsxs("div",{style:tt,children:[t.jsx("button",{id:y,children:"Anchor"}),t.jsx(i,{id:`tooltip-preview-${x}`,anchorSelect:`#${y}`,open:!0,placement:U,title:o,body:b})]})]})},s={render:e=>t.jsxs("div",{style:l,children:[t.jsx("button",{id:"tooltip-default",children:"Hover me"}),t.jsx(i,{...e,anchorSelect:"#tooltip-default"})]}),args:{body:"Tooltip body text"}},n={render:e=>t.jsxs("div",{style:l,children:[t.jsx("button",{id:"tooltip-title",children:"Hover me"}),t.jsx(i,{...e,anchorSelect:"#tooltip-title"})]}),args:{title:"Tooltip title",body:"Tooltip body text with more detail."}},a={render:e=>t.jsxs("div",{style:l,children:[t.jsx("button",{id:"tooltip-no-arrow",children:"Hover me"}),t.jsx(i,{...e,anchorSelect:"#tooltip-no-arrow"})]}),args:{body:"Tooltip without arrow",arrow:!1}},d={render:e=>t.jsxs("div",{style:l,children:[t.jsx("button",{id:"tooltip-click",children:"Click me"}),t.jsx(i,{...e,anchorSelect:"#tooltip-click",openEvents:{click:!0,mouseover:!1,mouseenter:!1,focus:!1},closeEvents:{click:!0,mouseleave:!1,mouseout:!1,blur:!1}})]}),args:{title:"Click tooltip",body:"This tooltip is triggered by click."}},c={render:()=>{const[e,o]=J.useState(!1);return t.jsxs("div",{style:l,children:[t.jsx("button",{id:"tooltip-controlled",children:"Anchor"}),t.jsxs("div",{style:K,children:[t.jsx("button",{onClick:()=>o(!0),children:"Open"}),t.jsx("button",{onClick:()=>o(!1),children:"Close"}),t.jsx("button",{onClick:()=>o(b=>!b),children:"Toggle"})]}),t.jsx(i,{anchorSelect:"#tooltip-controlled",title:"Controlled",body:"This tooltip is controlled externally.",open:e,onOpenChange:o})]})}},p={render:()=>t.jsxs("div",{style:z,children:[t.jsx(r,{label:"Title + body / left aligned",title:"Title",body:"Body text"}),t.jsx(r,{label:"Minimum width 48px",body:"Hi"}),t.jsx(r,{label:"Maximum width 400px on web",title:"Long title",body:F})]}),parameters:{docs:{description:{story:"Always-open design spec preview for left alignment, minimum width, and desktop maximum width."}}}},m={render:()=>t.jsx(r,{label:"Maximum width 300px on H5",title:"Long title",body:F}),parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Switches to a mobile viewport so the tooltip max width drops from 400px to 300px."}}}},u={render:()=>t.jsxs("div",{style:z,children:[t.jsx(r,{label:"Long body only",body:h}),t.jsx(r,{label:"Long title + long body",title:"This is a very long tooltip title that might wrap to multiple lines",body:h}),t.jsx(r,{label:"Long body with placement right",body:h,placement:"right"})]}),parameters:{docs:{description:{story:"Demonstrates tooltip behavior with extra-long text content, verifying max-width constraints, text wrapping, and overflow handling."}}}},g={render:e=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:48,padding:120,textAlign:"center"},children:q.map(o=>t.jsxs("div",{children:[t.jsx("button",{id:`tooltip-${o}`,children:o}),t.jsx(i,{...e,placement:o,anchorSelect:`#tooltip-${o}`})]},o))}),args:{title:"Title",body:"Body text"},tags:["!autodocs","dev"]};var T,v,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div style={ANCHOR_WRAPPER_STYLE}>
      <button id="tooltip-default">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-default" />
    </div>,
  args: {
    body: 'Tooltip body text'
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var f,E,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={ANCHOR_WRAPPER_STYLE}>
      <button id="tooltip-title">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-title" />
    </div>,
  args: {
    title: 'Tooltip title',
    body: 'Tooltip body text with more detail.'
  }
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var C,j,L;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div style={ANCHOR_WRAPPER_STYLE}>
      <button id="tooltip-no-arrow">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-no-arrow" />
    </div>,
  args: {
    body: 'Tooltip without arrow',
    arrow: false
  }
}`,...(L=(j=a.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var _,R,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <div style={ANCHOR_WRAPPER_STYLE}>
      <button id="tooltip-click">Click me</button>
      <Tooltip {...args} anchorSelect="#tooltip-click" openEvents={{
      click: true,
      mouseover: false,
      mouseenter: false,
      focus: false
    }} closeEvents={{
      click: true,
      mouseleave: false,
      mouseout: false,
      blur: false
    }} />
    </div>,
  args: {
    title: 'Click tooltip',
    body: 'This tooltip is triggered by click.'
  }
}`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var O,P,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={ANCHOR_WRAPPER_STYLE}>
        <button id="tooltip-controlled">Anchor</button>
        <div style={CONTROL_ROW_STYLE}>
          <button onClick={() => setOpen(true)}>Open</button>
          <button onClick={() => setOpen(false)}>Close</button>
          <button onClick={() => setOpen(v => !v)}>Toggle</button>
        </div>
        <Tooltip anchorSelect="#tooltip-controlled" title="Controlled" body="This tooltip is controlled externally." open={open} onOpenChange={setOpen} />
      </div>;
  }
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var H,W,N;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_GRID_STYLE}>
      <TooltipPreviewCard label="Title + body / left aligned" title="Title" body="Body text" />
      <TooltipPreviewCard label="Minimum width 48px" body="Hi" />
      <TooltipPreviewCard label="Maximum width 400px on web" title="Long title" body={LONG_BODY} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Always-open design spec preview for left alignment, minimum width, and desktop maximum width.'
      }
    }
  }
}`,...(N=(W=p.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var Y,D,I;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <TooltipPreviewCard label="Maximum width 300px on H5" title="Long title" body={LONG_BODY} />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Switches to a mobile viewport so the tooltip max width drops from 400px to 300px.'
      }
    }
  }
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var G,V,M;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={PREVIEW_GRID_STYLE}>
      <TooltipPreviewCard label="Long body only" body={EXTRA_LONG_TEXT} />
      <TooltipPreviewCard label="Long title + long body" title="This is a very long tooltip title that might wrap to multiple lines" body={EXTRA_LONG_TEXT} />
      <TooltipPreviewCard label="Long body with placement right" body={EXTRA_LONG_TEXT} placement="right" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates tooltip behavior with extra-long text content, verifying max-width constraints, text wrapping, and overflow handling.'
      }
    }
  }
}`,...(M=(V=u.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var B,X,$;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 48,
    padding: 120,
    textAlign: 'center'
  }}>
      {PLACEMENTS.map(placement => <div key={placement}>
          <button id={\`tooltip-\${placement}\`}>{placement}</button>
          <Tooltip {...args} placement={placement} anchorSelect={\`#tooltip-\${placement}\`} />
        </div>)}
    </div>,
  args: {
    title: 'Title',
    body: 'Body text'
  },
  tags: ['!autodocs', 'dev']
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const dt=["Default","WithTitle","NoArrow","ClickTrigger","Controlled","VisualSpec","H5WidthSpec","LongText","AllPlacements"];export{g as AllPlacements,d as ClickTrigger,c as Controlled,s as Default,m as H5WidthSpec,u as LongText,a as NoArrow,p as VisualSpec,n as WithTitle,dt as __namedExportsOrder,at as default};
