import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{f as a}from"./index-DCiaR2iG.js";import{C as p}from"./CoachMark-Br-wiJJD.js";import"./Typography-okfJso-6.js";import"./Icons-BzLXzN_n.js";import"./Carousel-kaoddJ5D.js";import"./index-CP2yOfOm.js";import"./classnames-h1fAIaEr.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";import"./ResizeObserver-DW8-DKQf.js";import"./clipboard-C7s2bcmm.js";import"./iframe-DaYW8ebk.js";import"./Tooltip-DeIhm5fH.js";const h=["top","bottom","left","right"],E={title:"Components/CoachMark",component:p,argTypes:{placement:{control:"select",options:h},dismissible:{control:"boolean"}},args:{steps:[{heading:"Text Heading",body:"Body text that describes this feature in detail."},{heading:"Second Step",body:"More details about this feature."}],defaultActiveStep:0,dismissible:!0,placement:"top",onChange:a(),onFinish:a(),onDismiss:a()},tags:["autodocs"]},e={args:{steps:[{icon:n.jsx("span",{style:{fontSize:24},children:"👋"}),heading:"Welcome",body:"Get started with the dashboard."},{icon:n.jsx("span",{style:{fontSize:24},children:"🔍"}),heading:"Search",body:"Find anything quickly."},{icon:n.jsx("span",{style:{fontSize:24},children:"💳"}),heading:"Balance",body:"Track all accounts."}]}},t={render:()=>n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,padding:60},children:h.map(s=>n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx(p,{steps:[{icon:n.jsx("span",{style:{fontSize:24},children:"👋"}),heading:"Welcome",body:"Get started with the dashboard."},{icon:n.jsx("span",{style:{fontSize:24},children:"🔍"}),heading:"Search",body:"Find anything quickly."},{icon:n.jsx("span",{style:{fontSize:24},children:"💳"}),heading:"Balance",body:"Track all accounts."}],placement:s})},s))}),tags:["!autodocs","dev"]};var o,i,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    steps: [{
      icon: <span style={{
        fontSize: 24
      }}>👋</span>,
      heading: 'Welcome',
      body: 'Get started with the dashboard.'
    }, {
      icon: <span style={{
        fontSize: 24
      }}>🔍</span>,
      heading: 'Search',
      body: 'Find anything quickly.'
    }, {
      icon: <span style={{
        fontSize: 24
      }}>💳</span>,
      heading: 'Balance',
      body: 'Track all accounts.'
    }]
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
    padding: 60
  }}>
      {PLACEMENTS.map((p: CoachMarkPlacement) => <div key={p} style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
          <CoachMark steps={[{
        icon: <span style={{
          fontSize: 24
        }}>👋</span>,
        heading: 'Welcome',
        body: 'Get started with the dashboard.'
      }, {
        icon: <span style={{
          fontSize: 24
        }}>🔍</span>,
        heading: 'Search',
        body: 'Find anything quickly.'
      }, {
        icon: <span style={{
          fontSize: 24
        }}>💳</span>,
        heading: 'Balance',
        body: 'Track all accounts.'
      }]} placement={p} />
        </div>)}
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const A=["Default","AllPlacements"];export{t as AllPlacements,e as Default,A as __namedExportsOrder,E as default};
