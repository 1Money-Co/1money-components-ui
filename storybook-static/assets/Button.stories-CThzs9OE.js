import{j as e}from"./classnames-DVmDMOck.js";import{r as d}from"./index-LFmgH05F.js";import{f as m}from"./index-CcqeJTvO.js";import{I as t}from"./Icons-Jj-V_22N.js";import{B as o}from"./Button-B5vFMg41.js";import"./Spinner-COScI4Vb.js";import"./componentbase.esm-B4Oni7AW.js";const c=["primary","secondary","grey","black","white","danger","warning"],p=["large","medium","small"],g=["button","submit","reset"],S={title:"Components/Button",component:o,argTypes:{disabled:{control:"boolean"},loading:{control:"boolean"},rounded:{control:"boolean"},size:{control:"radio",options:[...p]},color:{control:"radio",options:[...c]},type:{control:"radio",options:[...g]}},args:{disabled:!1,loading:!1,rounded:!1,size:"medium",color:"primary",type:"button",onClick:m()},tags:["autodocs"]},s={render:r=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:p.map(n=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:n}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:c.map(a=>d.createElement(o,{...r,key:`${n}-${a}`,size:n,color:a},a))}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center",marginTop:8},children:c.map(a=>d.createElement(o,{...r,key:`${n}-${a}-disabled`,size:n,color:a,disabled:!0},a))}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,alignItems:"center",marginTop:8},children:c.map(a=>d.createElement(o,{...r,key:`${n}-${a}-loading`,size:n,color:a,loading:!0},a))})]},n))}),args:{children:void 0},tags:["!autodocs","dev"]},i={render:r=>e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:p.map(n=>d.createElement(o,{...r,key:n,size:n},n))})},l={render:r=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(o,{...r,iconStart:e.jsx(t,{name:"add",size:16}),children:"Icon Start"}),e.jsx(o,{...r,iconEnd:e.jsx(t,{name:"arrowRight",size:16}),children:"Icon End"}),e.jsx(o,{...r,iconStart:e.jsx(t,{name:"add",size:16}),iconEnd:e.jsx(t,{name:"arrowRight",size:16}),children:"Both Icons"})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {SIZES.map(size => <div key={size}>
          <h3 style={{
        marginBottom: 12
      }}>{size}</h3>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center'
      }}>
            {COLORS.map(color => <Button {...args} key={\`\${size}-\${color}\`} size={size} color={color}>
                {color}
              </Button>)}
          </div>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center',
        marginTop: 8
      }}>
            {COLORS.map(color => <Button {...args} key={\`\${size}-\${color}-disabled\`} size={size} color={color} disabled>
                {color}
              </Button>)}
          </div>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center',
        marginTop: 8
      }}>
            {COLORS.map(color => <Button {...args} key={\`\${size}-\${color}-loading\`} size={size} color={color} loading>
                {color}
              </Button>)}
          </div>
        </div>)}
    </div>,
  args: {
    children: undefined
  },
  tags: ['!autodocs', 'dev']
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      {SIZES.map(size => <Button {...args} key={size} size={size}>
          {size}
        </Button>)}
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        <Button {...args} iconStart={<Icons name="add" size={16} />}>
          Icon Start
        </Button>
        <Button {...args} iconEnd={<Icons name="arrowRight" size={16} />}>
          Icon End
        </Button>
        <Button {...args} iconStart={<Icons name="add" size={16} />} iconEnd={<Icons name="arrowRight" size={16} />}>
          Both Icons
        </Button>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const B=["AllVariants","Sizes","WithIcons"];export{s as AllVariants,i as Sizes,l as WithIcons,B as __namedExportsOrder,S as default};
