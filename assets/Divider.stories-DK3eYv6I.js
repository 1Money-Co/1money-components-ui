import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as te,R as oe}from"./index-CP2yOfOm.js";import{j as ne,c as ae}from"./classnames-h1fAIaEr.js";const se="Divider",de="divider",q={horizontal:"horizontal"},u={left:"left",center:"center",right:"right"},H={solid:"solid"},x={type:q.horizontal,orientation:u.center,variant:H.solid},n={withText:"with-text",plain:"plain",noDefaultMargin:"no-default-margin"},le={innerText:"inner-text"},me={[u.left]:"marginInlineStart",[u.right]:"marginInlineEnd"},r=te.memo(i=>{const{type:g=x.type,orientation:j=x.orientation,orientationMargin:v,plain:J=!1,variant:L=x.variant,prefixCls:K=de,className:Q,children:f,style:Z,...ee}=i,t=ae(K),o=g===q.horizontal&&!!f,T=v!=null&&v!=="",re=ne(t(),t(g),o&&t(n.withText),o&&t(`${n.withText}-${j}`),J&&t(n.plain),L!==H.solid&&t(L),T&&t(n.noDefaultMargin),Q),I=me[j],ie=o&&T&&I?{[I]:v}:void 0;return e.jsx("div",{...ee,className:re,style:Z,role:"separator",children:o&&e.jsx("span",{className:t(le.innerText),style:ie,children:f})})});r.displayName=se;r.__docgenInfo={description:"",methods:[],displayName:"Divider"};const ce=["horizontal","vertical"],pe=["left","center","right"],D=["solid","dashed","dotted"],ue={title:"Components/Divider",component:r,argTypes:{type:{control:"radio",options:[...ce]},orientation:{control:"radio",options:[...pe]},variant:{control:"radio",options:[...D]},plain:{control:"boolean"}},args:{type:"horizontal",orientation:"center",variant:"solid",plain:!1},tags:["autodocs"]},a={},s={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{children:"Text"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{orientation:"left",children:"Left Text"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{orientation:"right",children:"Right Text"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]})},d={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{plain:!0,children:"Text"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]})},l={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{variant:"dashed"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{variant:"dashed",children:"Dashed"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]})},m={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{variant:"dotted"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{variant:"dotted",children:"Dotted"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]})},c={render:()=>e.jsxs("div",{children:["Text",e.jsx(r,{type:"vertical"}),e.jsx("a",{href:"#",children:"Link"}),e.jsx(r,{type:"vertical"}),e.jsx("a",{href:"#",children:"Link"})]})},p={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{orientation:"left",orientationMargin:"0",children:"Left (margin 0)"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{orientation:"left",orientationMargin:50,children:"Left (margin 50)"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{orientation:"right",orientationMargin:0,children:"Right (margin 0)"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[D.map(i=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:8},children:i}),e.jsx(r,{variant:i}),e.jsxs(r,{variant:i,children:[i," with text"]}),e.jsx(r,{variant:i,orientation:"left",children:"Left"}),e.jsx(r,{variant:i,orientation:"right",children:"Right"})]},i)),e.jsx("h3",{children:"Vertical"}),e.jsxs("div",{children:["Text",D.map(i=>e.jsxs(oe.Fragment,{children:[e.jsx(r,{type:"vertical",variant:i}),i]},i))]})]}),tags:["!autodocs","dev"]};var R,y,E;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(E=(y=a.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var N,V,A;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider>Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="left">Left Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="right">Right Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
}`,...(A=(V=s.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var S,_,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider plain>Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
}`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var O,P,w;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dashed" />
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dashed">Dashed</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
}`,...(w=(P=l.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var F,k,z;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dotted" />
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dotted">Dotted</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
}`,...(z=(k=m.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var C,Y,B;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div>
      Text
      <Divider type="vertical" />
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
    </div>
}`,...(B=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var U,W,$;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="left" orientationMargin="0">Left (margin 0)</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="left" orientationMargin={50}>Left (margin 50)</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="right" orientationMargin={0}>Right (margin 0)</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var b,G,X;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {VARIANTS.map(variant => <div key={variant}>
          <h3 style={{
        marginBottom: 8
      }}>{variant}</h3>
          <Divider variant={variant} />
          <Divider variant={variant}>{variant} with text</Divider>
          <Divider variant={variant} orientation="left">Left</Divider>
          <Divider variant={variant} orientation="right">Right</Divider>
        </div>)}
      <h3>Vertical</h3>
      <div>
        Text
        {VARIANTS.map(variant => <React.Fragment key={variant}>
            <Divider type="vertical" variant={variant} />
            {variant}
          </React.Fragment>)}
      </div>
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(X=(G=h.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};const De=["Default","WithText","Plain","Dashed","Dotted","Vertical","OrientationMargin","AllVariants"];export{h as AllVariants,l as Dashed,a as Default,m as Dotted,p as OrientationMargin,d as Plain,c as Vertical,s as WithText,De as __namedExportsOrder,ue as default};
