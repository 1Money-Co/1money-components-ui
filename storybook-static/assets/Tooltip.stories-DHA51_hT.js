import{j as t}from"./classnames-DVmDMOck.js";import{r as u}from"./index-LFmgH05F.js";import{T as r}from"./Tooltip-BQB23PR8.js";import"./index-CUUKTymD.js";const c=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],y={title:"Components/Tooltip",component:r,argTypes:{placement:{control:"select",options:c},title:{control:"text"},body:{control:"text"},arrow:{control:"boolean"}},args:{body:"Tooltip body text",placement:"top",arrow:!0},tags:["autodocs"]},l={render:e=>t.jsxs("div",{style:{padding:80,textAlign:"center"},children:[t.jsx("button",{id:"tooltip-default",children:"Hover me"}),t.jsx(r,{...e,anchorSelect:"#tooltip-default"})]}),args:{body:"Tooltip body text"}},n={render:e=>t.jsxs("div",{style:{padding:80,textAlign:"center"},children:[t.jsx("button",{id:"tooltip-title",children:"Hover me"}),t.jsx(r,{...e,anchorSelect:"#tooltip-title"})]}),args:{title:"Tooltip title",body:"Tooltip body text with more detail."}},i={render:e=>t.jsxs("div",{style:{padding:80,textAlign:"center"},children:[t.jsx("button",{id:"tooltip-no-arrow",children:"Hover me"}),t.jsx(r,{...e,anchorSelect:"#tooltip-no-arrow"})]}),args:{body:"Tooltip without arrow",arrow:!1}},s={render:e=>t.jsxs("div",{style:{padding:80,textAlign:"center"},children:[t.jsx("button",{id:"tooltip-click",children:"Click me"}),t.jsx(r,{...e,anchorSelect:"#tooltip-click",openEvents:{click:!0,mouseover:!1,mouseenter:!1,focus:!1},closeEvents:{click:!0,mouseleave:!1,mouseout:!1,blur:!1}})]}),args:{title:"Click tooltip",body:"This tooltip is triggered by click."}},a={render:()=>{const[e,o]=u.useState(!1);return t.jsxs("div",{style:{padding:80,textAlign:"center"},children:[t.jsx("button",{id:"tooltip-controlled",children:"Anchor"}),t.jsxs("div",{style:{marginTop:16,display:"flex",gap:8,justifyContent:"center"},children:[t.jsx("button",{onClick:()=>o(!0),children:"Open"}),t.jsx("button",{onClick:()=>o(!1),children:"Close"}),t.jsx("button",{onClick:()=>o(p=>!p),children:"Toggle"})]}),t.jsx(r,{anchorSelect:"#tooltip-controlled",title:"Controlled",body:"This tooltip is controlled externally.",open:e,onOpenChange:o})]})}},d={render:e=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:48,padding:120,textAlign:"center"},children:c.map(o=>t.jsxs("div",{children:[t.jsx("button",{id:`tooltip-${o}`,children:o}),t.jsx(r,{...e,placement:o,anchorSelect:`#tooltip-${o}`})]},o))}),args:{title:"Title",body:"Body text"},tags:["!autodocs","dev"]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 80,
    textAlign: 'center'
  }}>
      <button id="tooltip-default">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-default" />
    </div>,
  args: {
    body: 'Tooltip body text'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 80,
    textAlign: 'center'
  }}>
      <button id="tooltip-title">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-title" />
    </div>,
  args: {
    title: 'Tooltip title',
    body: 'Tooltip body text with more detail.'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 80,
    textAlign: 'center'
  }}>
      <button id="tooltip-no-arrow">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-no-arrow" />
    </div>,
  args: {
    body: 'Tooltip without arrow',
    arrow: false
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: 80,
    textAlign: 'center'
  }}>
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 80,
      textAlign: 'center'
    }}>
        <button id="tooltip-controlled">Anchor</button>
        <div style={{
        marginTop: 16,
        display: 'flex',
        gap: 8,
        justifyContent: 'center'
      }}>
          <button onClick={() => setOpen(true)}>Open</button>
          <button onClick={() => setOpen(false)}>Close</button>
          <button onClick={() => setOpen(v => !v)}>Toggle</button>
        </div>
        <Tooltip anchorSelect="#tooltip-controlled" title="Controlled" body="This tooltip is controlled externally." open={open} onOpenChange={setOpen} />
      </div>;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const h=["Default","WithTitle","NoArrow","ClickTrigger","Controlled","AllPlacements"];export{d as AllPlacements,s as ClickTrigger,a as Controlled,l as Default,i as NoArrow,n as WithTitle,h as __namedExportsOrder,y as default};
