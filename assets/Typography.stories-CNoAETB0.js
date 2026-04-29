import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{b as s}from"./Typography-CRgiVvYy.js";import"./Icons-D1aARqJQ.js";import"./index-CP2yOfOm.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./iframe-DXfCLEdy.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const M=["xl","lg","md","sm","xs"],q=["lg","md","sm","xs"],F=["lg","md","sm"],S=["lg","md","sm"],K=["xl","lg","md","sm","xs"],J=["md","sm"],Q=["default","default-secondary","default-tertiary","disabled","brand","brand-secondary","brand-tertiary","on-brand","on-brand-secondary","on-brand-tertiary","neutral","neutral-secondary","neutral-tertiary","on-neutral","on-neutral-secondary","on-neutral-tertiary","positive","positive-secondary","positive-tertiary","on-positive","on-positive-secondary","on-positive-tertiary","warning","warning-secondary","warning-tertiary","on-warning","on-warning-secondary","on-warning-tertiary","danger","danger-secondary","danger-tertiary","on-danger","on-danger-secondary","on-danger-tertiary"],n={display:"grid",gap:24},d={display:"grid",gap:12},g="814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d9c8b7a6f5e4d3c2b1a0f9e8d7c6b749f",V="3e83b3c59a1d4f8e7b6c2a0d5f9e8d7c6b4a3f2e1d0c9b8a7f6e5d4c3b2a40bb",h={maxWidth:200},m={display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,padding:"16px 0",borderBottom:"1px solid rgba(15, 23, 42, 0.08)"},ye={title:"Components/Typography",component:s.Body,argTypes:{size:{control:"radio",options:[...S]},strong:{control:"boolean"},italic:{control:"boolean"},underline:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},as:{control:"text"},ellipsis:{control:!1},copyable:{control:!1}},args:{children:"Typography body sample",size:"md",strong:!1,italic:!1,underline:!1,delete:!1,disabled:!1},tags:["autodocs"]},o={render:r=>e.jsx(s.Body,{...r})},a={render:()=>e.jsxs("div",{style:n,children:[e.jsx("div",{style:d,children:M.map(r=>e.jsxs(s.Display,{size:r,children:["Display ",r]},r))}),e.jsx("div",{style:d,children:q.map(r=>e.jsxs(s.Headline,{size:r,children:["Headline ",r]},r))}),e.jsx("div",{style:d,children:F.map(r=>e.jsxs(s.Title,{size:r,children:["Title ",r]},r))}),e.jsx("div",{style:d,children:S.map(r=>e.jsxs(s.Body,{size:r,children:["Body ",r," brings readable, content-first copy into forms, lists, and dense product surfaces."]},r))}),e.jsx("div",{style:d,children:K.map(r=>e.jsxs(s.Label,{size:r,children:["Label ",r]},r))}),e.jsx("div",{style:d,children:J.map(r=>e.jsxs(s.Link,{size:r,href:"https://ant.design/components/typography/",target:"_blank",children:["Link ",r]},r))})]}),tags:["!autodocs","dev"]},i={render:()=>e.jsxs("div",{style:n,children:[e.jsx("div",{style:d,children:F.map(r=>e.jsxs(s.Title,{size:r,strong:!0,children:["Strong title ",r]},r))}),e.jsx("div",{style:d,children:S.map(r=>e.jsxs(s.Body,{size:r,strong:!0,children:["Strong body ",r]},r))}),e.jsx("div",{style:d,children:K.map(r=>e.jsxs(s.Label,{size:r,strong:!0,children:["Strong label ",r]},r))})]})},t={render:()=>e.jsxs("div",{style:n,children:[e.jsx(s.Body,{size:"md",italic:!0,children:"Italic body copy"}),e.jsx(s.Body,{size:"md",underline:!0,children:"Underlined body copy"}),e.jsx(s.Body,{size:"md",delete:!0,children:"Deleted body copy"}),e.jsx(s.Body,{size:"md",underline:!0,delete:!0,children:"Underlined and deleted body copy"}),e.jsx(s.Link,{size:"md",href:"https://ant.design/components/typography/",underline:!0,delete:!0,children:"Link with combined decoration"}),e.jsx(s.Label,{size:"md",disabled:!0,children:"Disabled label"})]})},l={render:()=>e.jsxs("div",{style:n,children:[e.jsx(s.Display,{size:"sm",as:"h1",children:"Display rendered as h1"}),e.jsx(s.Headline,{size:"md",as:"h2",children:"Headline rendered as h2"}),e.jsx(s.Title,{size:"lg",as:"h3",children:"Title rendered as h3"}),e.jsx(s.Body,{size:"md",as:"p",children:"Body rendered as p for longer narrative content."}),e.jsx(s.Label,{size:"sm",htmlFor:"typography-story-input",children:"Email address"}),e.jsx("input",{id:"typography-story-input",placeholder:"Input target for label"})]})},y={render:()=>e.jsxs("div",{style:{...n,maxWidth:480},children:[e.jsxs("div",{style:m,children:[e.jsx(s.Label,{size:"md",color:"default-secondary",children:"Sender ID"}),e.jsx("div",{style:h,children:e.jsx(s.Body,{size:"md",ellipsis:{tooltip:!0},copyable:!0,children:g})})]}),e.jsxs("div",{style:m,children:[e.jsx(s.Label,{size:"md",color:"default-secondary",children:"Recipient name"}),e.jsx(s.Body,{size:"md",children:"Apextech LLC"})]}),e.jsxs("div",{style:m,children:[e.jsx(s.Label,{size:"md",color:"default-secondary",children:"Recipient ID"}),e.jsx("div",{style:h,children:e.jsx(s.Body,{size:"md",ellipsis:{tooltip:!0},copyable:!0,children:V})})]})]})},p={render:()=>e.jsxs("div",{style:n,children:[e.jsx(s.Label,{size:"xs",color:"default-secondary",children:"start=6, end=6"}),e.jsx("div",{style:h,children:e.jsx(s.Body,{size:"md",ellipsis:{start:6,end:6,tooltip:!0},children:g})}),e.jsx(s.Label,{size:"xs",color:"default-secondary",children:"start=10, end=8"}),e.jsx("div",{style:h,children:e.jsx(s.Body,{size:"md",ellipsis:{start:10,end:8,tooltip:!0},children:g})})]})},c={render:()=>e.jsxs("div",{style:n,children:[e.jsx(s.Body,{size:"md",copyable:!0,children:"Plain text with copy action"}),e.jsx(s.Body,{size:"md",copyable:{text:"custom-override-value"},children:"Copy uses a different value"})]})},T={render:()=>e.jsx("div",{style:n,children:Q.map(r=>e.jsx(s.Body,{size:"md",color:r,children:r},r))})};var u,b,L;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Typography.Body {...args} />
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var Y,_,v;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={STORY_LAYOUT_STYLE}>
      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_DISPLAY_SIZES.map(size => <Typography.Display key={size} size={size}>
            Display {size}
          </Typography.Display>)}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_HEADLINE_SIZES.map(size => <Typography.Headline key={size} size={size}>
            Headline {size}
          </Typography.Headline>)}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_TITLE_SIZES.map(size => <Typography.Title key={size} size={size}>
            Title {size}
          </Typography.Title>)}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_BODY_SIZES.map(size => <Typography.Body key={size} size={size}>
            Body {size} brings readable, content-first copy into forms, lists, and dense product surfaces.
          </Typography.Body>)}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_LABEL_SIZES.map(size => <Typography.Label key={size} size={size}>
            Label {size}
          </Typography.Label>)}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_LINK_SIZES.map(size => <Typography.Link key={size} size={size} href="https://ant.design/components/typography/" target="_blank">
            Link {size}
          </Typography.Link>)}
      </div>
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(v=(_=a.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var E,x,z;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={STORY_LAYOUT_STYLE}>
      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_TITLE_SIZES.map(size => <Typography.Title key={size} size={size} strong>
            Strong title {size}
          </Typography.Title>)}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_BODY_SIZES.map(size => <Typography.Body key={size} size={size} strong>
            Strong body {size}
          </Typography.Body>)}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_LABEL_SIZES.map(size => <Typography.Label key={size} size={size} strong>
            Strong label {size}
          </Typography.Label>)}
      </div>
    </div>
}`,...(z=(x=i.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var O,j,B;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={STORY_LAYOUT_STYLE}>
      <Typography.Body size="md" italic>
        Italic body copy
      </Typography.Body>
      <Typography.Body size="md" underline>
        Underlined body copy
      </Typography.Body>
      <Typography.Body size="md" delete>
        Deleted body copy
      </Typography.Body>
      <Typography.Body size="md" underline delete>
        Underlined and deleted body copy
      </Typography.Body>
      <Typography.Link size="md" href="https://ant.design/components/typography/" underline delete>
        Link with combined decoration
      </Typography.Link>
      <Typography.Label size="md" disabled>
        Disabled label
      </Typography.Label>
    </div>
}`,...(B=(j=t.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var I,R,f;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={STORY_LAYOUT_STYLE}>
      <Typography.Display size="sm" as="h1">
        Display rendered as h1
      </Typography.Display>
      <Typography.Headline size="md" as="h2">
        Headline rendered as h2
      </Typography.Headline>
      <Typography.Title size="lg" as="h3">
        Title rendered as h3
      </Typography.Title>
      <Typography.Body size="md" as="p">
        Body rendered as p for longer narrative content.
      </Typography.Body>
      <Typography.Label size="sm" htmlFor="typography-story-input">
        Email address
      </Typography.Label>
      <input id="typography-story-input" placeholder="Input target for label" />
    </div>
}`,...(f=(R=l.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var P,D,A;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    ...STORY_LAYOUT_STYLE,
    maxWidth: 480
  }}>
      <div style={ROW_STYLE}>
        <Typography.Label size="md" color="default-secondary">Sender ID</Typography.Label>
        <div style={CONSTRAINED_STYLE}>
          <Typography.Body size="md" ellipsis={{
          tooltip: true
        }} copyable>
            {SENDER_ID}
          </Typography.Body>
        </div>
      </div>
      <div style={ROW_STYLE}>
        <Typography.Label size="md" color="default-secondary">Recipient name</Typography.Label>
        <Typography.Body size="md">Apextech LLC</Typography.Body>
      </div>
      <div style={ROW_STYLE}>
        <Typography.Label size="md" color="default-secondary">Recipient ID</Typography.Label>
        <div style={CONSTRAINED_STYLE}>
          <Typography.Body size="md" ellipsis={{
          tooltip: true
        }} copyable>
            {RECIPIENT_ID}
          </Typography.Body>
        </div>
      </div>
    </div>
}`,...(A=(D=y.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var C,N,H;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={STORY_LAYOUT_STYLE}>
      <Typography.Label size="xs" color="default-secondary">start=6, end=6</Typography.Label>
      <div style={CONSTRAINED_STYLE}>
        <Typography.Body size="md" ellipsis={{
        start: 6,
        end: 6,
        tooltip: true
      }}>
          {SENDER_ID}
        </Typography.Body>
      </div>

      <Typography.Label size="xs" color="default-secondary">start=10, end=8</Typography.Label>
      <div style={CONSTRAINED_STYLE}>
        <Typography.Body size="md" ellipsis={{
        start: 10,
        end: 8,
        tooltip: true
      }}>
          {SENDER_ID}
        </Typography.Body>
      </div>
    </div>
}`,...(H=(N=p.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var k,G,Z;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={STORY_LAYOUT_STYLE}>
      <Typography.Body size="md" copyable>
        Plain text with copy action
      </Typography.Body>
      <Typography.Body size="md" copyable={{
      text: 'custom-override-value'
    }}>
        Copy uses a different value
      </Typography.Body>
    </div>
}`,...(Z=(G=c.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var U,w,W;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={STORY_LAYOUT_STYLE}>
      {TYPOGRAPHY_COLORS.map(color => <Typography.Body key={color} size="md" color={color}>
          {color}
        </Typography.Body>)}
    </div>
}`,...(W=(w=T.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};const pe=["Primary","SemanticScale","StrongSupport","Decorations","SemanticTags","MiddleEllipsis","EllipsisCustomChars","CopyableText","ColorPalette"];export{T as ColorPalette,c as CopyableText,t as Decorations,p as EllipsisCustomChars,y as MiddleEllipsis,o as Primary,a as SemanticScale,l as SemanticTags,i as StrongSupport,pe as __namedExportsOrder,ye as default};
