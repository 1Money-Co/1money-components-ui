import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-CP2yOfOm.js";import{f as me}from"./index-DCiaR2iG.js";import{I as c}from"./Icons-BzLXzN_n.js";import{a as pe,b as ue,c as ge,d as Te,e as i,f as O,B as o,g as d}from"./Button-cOafa-LH.js";/* empty css               */import"./Spinner-DoSfSHuK.js";import"./classnames-h1fAIaEr.js";import"./Typography-okfJso-6.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./iframe-DaYW8ebk.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const ce={display:"flex",flexDirection:"column",gap:32},le={marginBottom:12},a={display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},be={title:"Components/Button",component:o,argTypes:{disabled:{control:"boolean"},loading:{control:"boolean"},rounded:{control:"boolean"},size:{control:"radio",options:[...O]},color:{control:"radio",options:[...i]},variant:{control:"radio",options:[...Te]}},args:{children:"Button",disabled:!1,loading:!1,rounded:!1,size:ge,color:ue,variant:pe,onClick:me()},tags:["autodocs"]},l={render:n=>e.jsx("div",{style:ce,children:O.map(r=>e.jsxs("div",{children:[e.jsx("h3",{style:le,children:r}),e.jsx("div",{style:a,children:i.map(t=>s.createElement(o,{...n,key:`${r}-${t}`,size:r,color:t},t))}),e.jsx("div",{style:{...a,marginTop:8},children:i.map(t=>s.createElement(o,{...n,key:`${r}-${t}-disabled`,size:r,color:t,disabled:!0},t))}),e.jsx("div",{style:{...a,marginTop:8},children:i.map(t=>s.createElement(o,{...n,key:`${r}-${t}-loading`,size:r,color:t,loading:!0},t))})]},r))}),args:{children:void 0},tags:["!autodocs","dev"]},m={},p={render:n=>e.jsx("div",{style:a,children:i.map(r=>s.createElement(o,{...n,key:r,color:r},r))})},u={render:n=>e.jsx("div",{style:a,children:O.map(r=>s.createElement(o,{...n,key:r,size:r},r))})},g={args:{rounded:!0}},T={args:{disabled:!0}},B={args:{loading:!0}},x={render:n=>e.jsx(o,{...n,iconStart:e.jsx(c,{name:"add"}),children:"Icon Start"})},S={render:n=>e.jsx(o,{...n,iconEnd:e.jsx(c,{name:"arrowRight"}),children:"Icon End"})},h={render:n=>e.jsx(o,{...n,iconStart:e.jsx(c,{name:"add"}),iconEnd:e.jsx(c,{name:"arrowRight"}),children:"Both Icons"})},y={render:n=>e.jsx("div",{style:ce,children:O.map(r=>e.jsxs("div",{children:[e.jsxs("h3",{style:le,children:["Text - ",r]}),e.jsxs("div",{style:a,children:[e.jsx(o,{...n,variant:d.text,size:r,children:"Button"}),e.jsx(o,{...n,variant:d.text,size:r,disabled:!0,children:"Disabled"}),e.jsx(o,{...n,variant:d.text,size:r,loading:!0,children:"Loading"})]})]},r))}),args:{children:void 0}},v={args:{variant:d.text,children:"Text Button"}},I={render:n=>e.jsx(o,{...n,variant:d.text,iconEnd:e.jsx(c,{name:"arrowRight"}),children:"Learn More"})};var N,j,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div style={columnStyle}>
      {BUTTON_SIZES.map(size => <div key={size}>
          <h3 style={sectionHeaderStyle}>{size}</h3>
          <div style={rowStyle}>
            {BUTTON_COLORS.map(color => <Button {...args} key={\`\${size}-\${color}\`} size={size} color={color}>
                {color}
              </Button>)}
          </div>
          <div style={{
        ...rowStyle,
        marginTop: 8
      }}>
            {BUTTON_COLORS.map(color => <Button {...args} key={\`\${size}-\${color}-disabled\`} size={size} color={color} disabled>
                {color}
              </Button>)}
          </div>
          <div style={{
        ...rowStyle,
        marginTop: 8
      }}>
            {BUTTON_COLORS.map(color => <Button {...args} key={\`\${size}-\${color}-loading\`} size={size} color={color} loading>
                {color}
              </Button>)}
          </div>
        </div>)}
    </div>,
  args: {
    children: undefined
  },
  tags: ['!autodocs', 'dev']
}`,...(E=(j=l.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var _,R,f;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(f=(R=m.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var U,A,b;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <div style={rowStyle}>
      {BUTTON_COLORS.map(color => <Button {...args} key={color} color={color}>
          {color}
        </Button>)}
    </div>
}`,...(b=(A=p.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var z,L,w;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div style={rowStyle}>
      {BUTTON_SIZES.map(size => <Button {...args} key={size} size={size}>
          {size}
        </Button>)}
    </div>
}`,...(w=(L=u.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var k,D,V;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    rounded: true
  }
}`,...(V=(D=g.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var $,C,W;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(W=(C=T.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var Z,F,H;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(H=(F=B.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var M,q,G;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <Button {...args} iconStart={<Icons name="add" />}>
      Icon Start
    </Button>
}`,...(G=(q=x.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,P;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <Button {...args} iconEnd={<Icons name="arrowRight" />}>
      Icon End
    </Button>
}`,...(P=(K=S.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <Button {...args} iconStart={<Icons name="add" />} iconEnd={<Icons name="arrowRight" />}>
      Both Icons
    </Button>
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <div style={columnStyle}>
      {BUTTON_SIZES.map(size => <div key={size}>
          <h3 style={sectionHeaderStyle}>Text - {size}</h3>
          <div style={rowStyle}>
            <Button {...args} variant={BUTTON_VARIANT.text} size={size}>
              Button
            </Button>
            <Button {...args} variant={BUTTON_VARIANT.text} size={size} disabled>
              Disabled
            </Button>
            <Button {...args} variant={BUTTON_VARIANT.text} size={size} loading>
              Loading
            </Button>
          </div>
        </div>)}
    </div>,
  args: {
    children: undefined
  }
}`,...(ne=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,te,ae;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    variant: BUTTON_VARIANT.text,
    children: 'Text Button'
  }
}`,...(ae=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,ie,de;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <Button {...args} variant={BUTTON_VARIANT.text} iconEnd={<Icons name="arrowRight" />}>
      Learn More
    </Button>
}`,...(de=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const ze=["AllVariants","Default","Colors","Sizes","Rounded","Disabled","Loading","WithIconStart","WithIconEnd","WithBothIcons","TextVariant","TextDefault","TextWithIcon"];export{l as AllVariants,p as Colors,m as Default,T as Disabled,B as Loading,g as Rounded,u as Sizes,v as TextDefault,y as TextVariant,I as TextWithIcon,h as WithBothIcons,S as WithIconEnd,x as WithIconStart,ze as __namedExportsOrder,be as default};
