import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as U,R as Z}from"./index-CP2yOfOm.js";import{j as ee,c as re}from"./classnames-0AlMal0H.js";const ie="divider",r=U.memo(i=>{const{type:j="horizontal",orientation:u="center",orientationMargin:o,plain:Y=!1,variant:D="solid",prefixCls:$=ie,className:q,children:a,style:G,...J}=i,t=re($),n=j==="horizontal",s=a!=null&&a!=="",L=o!=null&&o!=="",K=ee(t(),t(j),s&&n&&t("with-text"),s&&n&&t(`with-text-${u}`),Y&&t("plain"),D!=="solid"&&t(D),L&&t("no-default-margin"),q),Q=s&&n&&L?{...u==="left"?{marginInlineStart:o}:{},...u==="right"?{marginInlineEnd:o}:{}}:void 0;return e.jsx("div",{...J,className:K,style:G,role:"separator",children:s&&n?e.jsx("span",{className:t("inner-text"),style:Q,children:a}):null})});r.displayName="Divider";r.__docgenInfo={description:"",methods:[],displayName:"Divider"};const te=["horizontal","vertical"],oe=["left","center","right"],g=["solid","dashed","dotted"],de={title:"Components/Divider",component:r,argTypes:{type:{control:"radio",options:[...te]},orientation:{control:"radio",options:[...oe]},variant:{control:"radio",options:[...g]},plain:{control:"boolean"}},args:{type:"horizontal",orientation:"center",variant:"solid",plain:!1},tags:["autodocs"]},d={},l={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{children:"Text"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{orientation:"left",children:"Left Text"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{orientation:"right",children:"Right Text"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]})},m={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{plain:!0,children:"Text"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]})},p={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{variant:"dashed"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{variant:"dashed",children:"Dashed"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]})},c={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{variant:"dotted"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{variant:"dotted",children:"Dotted"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]})},v={render:()=>e.jsxs("div",{children:["Text",e.jsx(r,{type:"vertical"}),e.jsx("a",{href:"#",children:"Link"}),e.jsx(r,{type:"vertical"}),e.jsx("a",{href:"#",children:"Link"})]})},h={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{orientation:"left",orientationMargin:"0",children:"Left (margin 0)"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{orientation:"left",orientationMargin:50,children:"Left (margin 50)"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."}),e.jsx(r,{orientation:"right",orientationMargin:0,children:"Right (margin 0)"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet."})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[g.map(i=>e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:8},children:i}),e.jsx(r,{variant:i}),e.jsxs(r,{variant:i,children:[i," with text"]}),e.jsx(r,{variant:i,orientation:"left",children:"Left"}),e.jsx(r,{variant:i,orientation:"right",children:"Right"})]},i)),e.jsx("h3",{children:"Vertical"}),e.jsxs("div",{children:["Text",g.map(i=>e.jsxs(Z.Fragment,{children:[e.jsx(r,{type:"vertical",variant:i}),i]},i))]})]}),tags:["!autodocs","dev"]};var f,y,T;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var R,S,I;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider>Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="left">Left Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="right">Right Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
}`,...(I=(S=l.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var N,V,M;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider plain>Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
}`,...(M=(V=m.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var A,E,k;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dashed" />
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dashed">Dashed</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
}`,...(k=(E=p.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var z,C,O;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dotted" />
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dotted">Dotted</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
}`,...(O=(C=c.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var _,w,F;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div>
      Text
      <Divider type="vertical" />
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
    </div>
}`,...(F=(w=v.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var P,B,W;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="left" orientationMargin="0">Left (margin 0)</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="left" orientationMargin={50}>Left (margin 50)</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="right" orientationMargin={0}>Right (margin 0)</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
}`,...(W=(B=h.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var b,H,X;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(X=(H=x.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};const le=["Default","WithText","Plain","Dashed","Dotted","Vertical","OrientationMargin","AllVariants"];export{x as AllVariants,p as Dashed,d as Default,c as Dotted,h as OrientationMargin,m as Plain,v as Vertical,l as WithText,le as __namedExportsOrder,de as default};
