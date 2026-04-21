import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-CP2yOfOm.js";import{f as U}from"./index-DCiaR2iG.js";import{c as V,j as X}from"./classnames-h1fAIaEr.js";const G="link",y=["primary","black","grey"],x=["large","small"],D="primary",K="large",R=r=>{const{children:e,className:s="",prefixCls:a=G,color:$=D,size:M=K,disabled:t=!1,href:q,target:h,rel:L,tabIndex:H,onClick:f,ref:Z,...B}=r,i=V(a),F=h==="_blank"&&L===void 0?"noopener noreferrer":L,P=g=>{if(t){g.preventDefault(),g.stopPropagation();return}f==null||f(g)};return n.jsx("a",{...B,ref:Z,href:t?void 0:q,target:h,rel:F,"aria-disabled":t||void 0,tabIndex:t?-1:H,onClick:P,className:i(void 0,X(i($),i(M),t&&i("disabled"),s)),children:e})},m=u.memo(R);R.__docgenInfo={description:"",methods:[],displayName:"LinkComponent",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLAnchorElement"}],raw:"Ref<HTMLAnchorElement>"},description:""},prefixCls:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LINK_COLORS)[number]"},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LINK_SIZES)[number]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLAnchorElement"}],raw:"MouseEvent<HTMLAnchorElement>"},name:"event"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const ne={title:"Components/Link",component:m,argTypes:{color:{control:"radio",options:[...y]},size:{control:"radio",options:[...x]},disabled:{control:"boolean"},href:{control:"text"},children:{control:"text"}},args:{children:"Link",color:D,size:K,disabled:!1,href:"#",onClick:U()},tags:["autodocs"]},J=["default","hover","disabled"],o={render:r=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:y.map(e=>n.jsxs("div",{children:[n.jsx("h3",{style:{marginBottom:12,textTransform:"capitalize"},children:e}),x.map(s=>n.jsxs("div",{style:{display:"flex",gap:48,alignItems:"center",marginBottom:8},children:[n.jsx("span",{style:{width:64,fontSize:12,textTransform:"capitalize"},children:s}),J.map(a=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[n.jsx("span",{style:{fontSize:10,color:"#888",textTransform:"capitalize"},children:a}),n.jsx(m,{...r,color:e,size:s,disabled:a==="disabled",children:"Link"})]},`${e}-${s}-${a}`))]},`${e}-${s}`))]},e))}),args:{children:void 0},tags:["!autodocs","dev"]},l={render:r=>n.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:y.map(e=>u.createElement(m,{...r,key:e,color:e},e))})},d={render:r=>n.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:x.map(e=>u.createElement(m,{...r,key:e,size:e},e))})},c={args:{disabled:!0,children:"Disabled link"}},p={args:{href:"https://example.com",target:"_blank",children:"Open in new tab"}};var k,v,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {LINK_COLORS.map(color => <div key={color}>
          <h3 style={{
        marginBottom: 12,
        textTransform: 'capitalize'
      }}>{color}</h3>
          {LINK_SIZES.map(size => <div key={\`\${color}-\${size}\`} style={{
        display: 'flex',
        gap: 48,
        alignItems: 'center',
        marginBottom: 8
      }}>
              <span style={{
          width: 64,
          fontSize: 12,
          textTransform: 'capitalize'
        }}>{size}</span>
              {STATES.map(state => <div key={\`\${color}-\${size}-\${state}\`} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
                  <span style={{
            fontSize: 10,
            color: '#888',
            textTransform: 'capitalize'
          }}>
                    {state}
                  </span>
                  <Link {...args} color={color} size={size} disabled={state === 'disabled'}>
                    Link
                  </Link>
                </div>)}
            </div>)}
        </div>)}
    </div>,
  args: {
    children: undefined
  },
  tags: ['!autodocs', 'dev']
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var S,I,E;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      {LINK_COLORS.map(color => <Link {...args} key={color} color={color}>
          {color}
        </Link>)}
    </div>
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var T,z,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      {LINK_SIZES.map(size => <Link {...args} key={size} size={size}>
          {size}
        </Link>)}
    </div>
}`,...(_=(z=d.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var C,j,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled link'
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,w,A;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    target: '_blank',
    children: 'Open in new tab'
  }
}`,...(A=(w=p.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const re=["AllVariants","Colors","Sizes","Disabled","ExternalLink"];export{o as AllVariants,l as Colors,c as Disabled,p as ExternalLink,d as Sizes,re as __namedExportsOrder,ne as default};
