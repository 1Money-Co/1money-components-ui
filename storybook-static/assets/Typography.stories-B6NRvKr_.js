import{j as e}from"./classnames-DVmDMOck.js";import{c as s}from"./Typography-rwjkbZ_G.js";import"./Icons-DvbtecMd.js";import"./index-LFmgH05F.js";import"./Icons-Jj-V_22N.js";import"./Tooltip-BQB23PR8.js";import"./index-CUUKTymD.js";const Y=["xl","lg","md","sm","xs"],b=["lg","md","sm","xs"],L=["lg","md","sm"],S=["lg","md","sm"],_=["xl","lg","md","sm","xs"],x=["md","sm"],v=["default","default-secondary","default-tertiary","disabled","brand","brand-secondary","brand-tertiary","on-brand","on-brand-secondary","on-brand-tertiary","neutral","neutral-secondary","neutral-tertiary","on-neutral","on-neutral-secondary","on-neutral-tertiary","positive","positive-secondary","positive-tertiary","on-positive","on-positive-secondary","on-positive-tertiary","warning","warning-secondary","warning-tertiary","on-warning","on-warning-secondary","on-warning-tertiary","danger","danger-secondary","danger-tertiary","on-danger","on-danger-secondary","on-danger-tertiary"],o={display:"grid",gap:24},n={display:"grid",gap:12},m={display:"grid",gap:8,width:240},E={width:"100%",padding:12,borderRadius:12,background:"rgba(15, 23, 42, 0.03)",boxShadow:"inset 0 0 0 1px rgba(15, 23, 42, 0.12)"},u="Settlement updates often include enough detail to overflow smaller UI slots, so typography needs robust truncation and copy affordances.",C={title:"Components/Typography",component:s.Body,argTypes:{size:{control:"radio",options:[...S]},strong:{control:"boolean"},italic:{control:"boolean"},underline:{control:"boolean"},delete:{control:"boolean"},disabled:{control:"boolean"},as:{control:"text"},ellipsis:{control:!1},copyable:{control:!1}},args:{children:"Typography body sample",size:"md",strong:!1,italic:!1,underline:!1,delete:!1,disabled:!1},tags:["autodocs"]},a={render:r=>e.jsx(s.Body,{...r})},i={render:()=>e.jsxs("div",{style:o,children:[e.jsx("div",{style:n,children:Y.map(r=>e.jsxs(s.Display,{size:r,children:["Display ",r]},r))}),e.jsx("div",{style:n,children:b.map(r=>e.jsxs(s.Headline,{size:r,children:["Headline ",r]},r))}),e.jsx("div",{style:n,children:L.map(r=>e.jsxs(s.Title,{size:r,children:["Title ",r]},r))}),e.jsx("div",{style:n,children:S.map(r=>e.jsxs(s.Body,{size:r,children:["Body ",r," brings readable, content-first copy into forms, lists, and dense product surfaces."]},r))}),e.jsx("div",{style:n,children:_.map(r=>e.jsxs(s.Label,{size:r,children:["Label ",r]},r))}),e.jsx("div",{style:n,children:x.map(r=>e.jsxs(s.Link,{size:r,href:"https://ant.design/components/typography/",target:"_blank",children:["Link ",r]},r))})]}),tags:["!autodocs","dev"]},t={render:()=>e.jsxs("div",{style:o,children:[e.jsx("div",{style:n,children:L.map(r=>e.jsxs(s.Title,{size:r,strong:!0,children:["Strong title ",r]},r))}),e.jsx("div",{style:n,children:S.map(r=>e.jsxs(s.Body,{size:r,strong:!0,children:["Strong body ",r]},r))}),e.jsx("div",{style:n,children:_.map(r=>e.jsxs(s.Label,{size:r,strong:!0,children:["Strong label ",r]},r))})]})},d={render:()=>e.jsxs("div",{style:o,children:[e.jsx(s.Body,{size:"md",italic:!0,children:"Italic body copy"}),e.jsx(s.Body,{size:"md",underline:!0,children:"Underlined body copy"}),e.jsx(s.Body,{size:"md",delete:!0,children:"Deleted body copy"}),e.jsx(s.Body,{size:"md",underline:!0,delete:!0,children:"Underlined and deleted body copy"}),e.jsx(s.Link,{size:"md",href:"https://ant.design/components/typography/",underline:!0,delete:!0,children:"Link with combined decoration"}),e.jsx(s.Label,{size:"md",disabled:!0,children:"Disabled label"})]})},l={render:()=>e.jsxs("div",{style:o,children:[e.jsx(s.Display,{size:"sm",as:"h1",children:"Display rendered as h1"}),e.jsx(s.Headline,{size:"md",as:"h2",children:"Headline rendered as h2"}),e.jsx(s.Title,{size:"lg",as:"h3",children:"Title rendered as h3"}),e.jsx(s.Body,{size:"md",as:"p",children:"Body rendered as p for longer narrative content."}),e.jsx(s.Label,{size:"sm",htmlFor:"typography-story-input",children:"Email address"}),e.jsx("input",{id:"typography-story-input",placeholder:"Input target for label"})]})},p={render:()=>e.jsxs("div",{style:m,children:[e.jsx(s.Label,{size:"xs",color:"default-secondary",children:"Constrained to 240px width"}),e.jsx("div",{style:E,children:e.jsx(s.Body,{size:"md",ellipsis:!0,children:u})})]})},y={render:()=>e.jsxs("div",{style:m,children:[e.jsx(s.Label,{size:"xs",color:"default-secondary",children:"Constrained to 240px width"}),e.jsx("div",{style:E,children:e.jsx(s.Body,{size:"md",ellipsis:{rows:2,tooltip:!0},children:u})})]})},c={render:()=>e.jsx(s.Body,{size:"md",copyable:!0,children:"Wallet address copied from the original, untruncated content."})},T={render:()=>e.jsx("div",{style:m,children:e.jsx(s.Title,{size:"sm",strong:!0,ellipsis:{rows:2,tooltip:!0},copyable:{duration:1200},children:u})})},h={render:()=>e.jsx("div",{style:m,children:e.jsx(s.Link,{size:"md",href:"https://ant.design/components/typography/",target:"_blank",ellipsis:{tooltip:!0},copyable:{text:"https://ant.design/components/typography/"},children:"https://ant.design/components/typography/"})})},g={render:()=>e.jsx("div",{style:o,children:v.map(r=>e.jsx(s.Body,{size:"md",color:r,children:r},r))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <Typography.Body {...args} />
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={TRUNCATED_CONTAINER_STYLE}>
      <Typography.Label size="xs" color="default-secondary">
        Constrained to 240px width
      </Typography.Label>
      <div style={TRUNCATED_FRAME_STYLE}>
        <Typography.Body size="md" ellipsis>
          {LONG_TEXT}
        </Typography.Body>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={TRUNCATED_CONTAINER_STYLE}>
      <Typography.Label size="xs" color="default-secondary">
        Constrained to 240px width
      </Typography.Label>
      <div style={TRUNCATED_FRAME_STYLE}>
        <Typography.Body size="md" ellipsis={{
        rows: 2,
        tooltip: true
      }}>
          {LONG_TEXT}
        </Typography.Body>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Typography.Body size="md" copyable>
      Wallet address copied from the original, untruncated content.
    </Typography.Body>
}`,...c.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={TRUNCATED_CONTAINER_STYLE}>
      <Typography.Title size="sm" strong ellipsis={{
      rows: 2,
      tooltip: true
    }} copyable={{
      duration: 1200
    }}>
        {LONG_TEXT}
      </Typography.Title>
    </div>
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={TRUNCATED_CONTAINER_STYLE}>
      <Typography.Link size="md" href="https://ant.design/components/typography/" target="_blank" ellipsis={{
      tooltip: true
    }} copyable={{
      text: 'https://ant.design/components/typography/'
    }}>
        https://ant.design/components/typography/
      </Typography.Link>
    </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={STORY_LAYOUT_STYLE}>
      {TYPOGRAPHY_COLORS.map(color => <Typography.Body key={color} size="md" color={color}>
          {color}
        </Typography.Body>)}
    </div>
}`,...g.parameters?.docs?.source}}};const P=["Primary","SemanticScale","StrongSupport","Decorations","SemanticTags","SingleLineEllipsis","MultiLineEllipsisWithTooltip","CopyableContent","EllipsisAndCopyable","CopyableLink","ColorPalette"];export{g as ColorPalette,c as CopyableContent,h as CopyableLink,d as Decorations,T as EllipsisAndCopyable,y as MultiLineEllipsisWithTooltip,a as Primary,i as SemanticScale,l as SemanticTags,p as SingleLineEllipsis,t as StrongSupport,P as __namedExportsOrder,C as default};
