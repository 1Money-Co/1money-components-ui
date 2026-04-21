import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as S}from"./index-CP2yOfOm.js";import{j as xe,c as Oe}from"./classnames-h1fAIaEr.js";const o={start:"start",end:"end",center:"center",baseline:"baseline"},l={horizontal:"horizontal",vertical:"vertical"},t={small:"small",middle:"middle",large:"large"},Le="space",ae=8,Me=16,Ce=24,Y=ae,f={columnGap:"--om-space-column-gap",rowGap:"--om-space-row-gap"},p={vertical:"vertical",align:"align",wrap:"wrap",item:"item",split:"split"},Ae={small:ae,middle:Me,large:Ce},O=n=>n==null?Y:typeof n=="number"?n:Ae[n]??Y,De=n=>{if(Array.isArray(n))return[O(n[0]),O(n[1])];const d=O(n);return[d,d]},s=S.memo(n=>{const{children:d,align:M,direction:ce=l.horizontal,size:C,split:u,wrap:oe=!1,className:pe,style:Ee,prefixCls:Se=Le,..._e}=n,c=Oe(Se),A=ce===l.vertical,E=u!=null,[D,j]=De(C),me=E?D/2:D,ve=E?j/2:j,ye=oe&&!A,Ie=xe(c(),A&&c(p.vertical),M&&c(`${p.align}-${M}`),ye&&c(p.wrap),pe),he={...Ee,...(C!==void 0||E)&&{[f.columnGap]:`${me}px`,[f.rowGap]:`${ve}px`}},P=S.Children.toArray(d),ge=P.map((x,N)=>{const Te=N===P.length-1,ue=S.isValidElement(x)?x.key:N;return e.jsxs(S.Fragment,{children:[e.jsx("div",{className:c(p.item),children:x}),!Te&&E?e.jsx("span",{className:c(p.split),children:u}):null]},ue)});return e.jsx("div",{..._e,style:he,className:Ie,children:ge})});s.displayName="Space";s.__docgenInfo={description:"",methods:[],displayName:"Space"};const je=Object.values(o),Pe=Object.values(l),Ne=Object.values(t),Ye=8,le="1px dashed currentColor",i={padding:Ye,border:le},fe=16,de={display:"grid",gap:fe},L={...de,padding:16,border:le,borderRadius:8},r={...i,display:"inline-flex",alignItems:"center"},a={...i,padding:"4px 12px",display:"inline-flex"},we={...i,minHeight:44,width:"100%"},w={...i,minWidth:220},Be={title:"Components/Space",component:s,argTypes:{size:{control:"select",options:Ne},align:{control:"select",options:je},direction:{control:"select",options:Pe},wrap:{control:"boolean"},split:{control:!1},prefixCls:{control:"text"}},args:{size:t.small,align:o.center,direction:l.horizontal,wrap:!1},tags:["autodocs"]},_={render:n=>e.jsxs(s,{...n,children:[e.jsx("div",{style:i,children:"One"}),e.jsx("div",{style:i,children:"Two"}),e.jsx("div",{style:i,children:"Three"})]})},m={render:()=>e.jsxs(s,{direction:l.vertical,size:t.middle,children:[e.jsx("div",{style:i,children:"Top"}),e.jsx("div",{style:i,children:"Bottom"})]})},v={render:()=>e.jsx(s,{size:[8,16],wrap:!0,style:{maxWidth:240},children:Array.from({length:10}).map((n,d)=>e.jsxs("div",{style:i,children:["Item ",d+1]},d))})},y={render:()=>e.jsxs(s,{split:e.jsx("span",{children:"|"}),size:t.large,children:[e.jsx("span",{children:"Alpha"}),e.jsx("span",{children:"Beta"}),e.jsx("span",{children:"Gamma"})]})},I={render:()=>e.jsxs("div",{style:de,children:[e.jsxs(s,{size:t.middle,align:o.center,children:[e.jsx("div",{style:i,children:"Align"}),e.jsx("div",{style:i,children:"Center"})]}),e.jsxs(s,{direction:l.vertical,size:t.large,children:[e.jsx("div",{style:i,children:"Vertical"}),e.jsx("div",{style:i,children:"Large"})]})]})},h={parameters:{docs:{description:{story:"Toolbar layout with left filter group and right action group, using Space to keep consistent in-group spacing."}}},render:()=>e.jsx("div",{style:L,children:e.jsxs("div",{style:{...we,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs(s,{size:t.small,align:o.center,children:[e.jsx("div",{style:r,children:"Date Range"}),e.jsx("div",{style:r,children:"Status"}),e.jsx("div",{style:r,children:"Currency"})]}),e.jsxs(s,{size:t.small,align:o.center,children:[e.jsx("div",{style:r,children:"Export"}),e.jsx("div",{style:r,children:"Refresh"}),e.jsx("div",{style:r,children:"Create"})]})]})})},g={parameters:{docs:{description:{story:"Filter wrapping layout: Space + wrap for tags and variable-length multi-filter items."}}},render:()=>e.jsx("div",{style:L,children:e.jsxs(s,{size:[8,12],wrap:!0,style:{maxWidth:640},children:[e.jsx("div",{style:a,children:"All"}),e.jsx("div",{style:a,children:"High Risk"}),e.jsx("div",{style:a,children:"KYC Pending"}),e.jsx("div",{style:a,children:"Manual Review"}),e.jsx("div",{style:a,children:"Today"}),e.jsx("div",{style:a,children:"This Week"}),e.jsx("div",{style:a,children:"Large Amount"}),e.jsx("div",{style:a,children:"USDT"}),e.jsx("div",{style:a,children:"USD"})]})})},T={parameters:{docs:{description:{story:"Detail panel composition: vertical field group on the left and vertical status group on the right with layered spacing."}}},render:()=>e.jsx("div",{style:L,children:e.jsxs(s,{size:t.large,align:o.start,style:{width:"100%"},children:[e.jsxs(s,{direction:l.vertical,size:t.middle,style:w,children:[e.jsx("div",{style:r,children:"Business Name"}),e.jsx("div",{style:r,children:"Registration Number"}),e.jsx("div",{style:r,children:"Country"}),e.jsx("div",{style:r,children:"Created At"})]}),e.jsxs(s,{direction:l.vertical,size:t.middle,style:w,children:[e.jsxs(s,{split:e.jsx("span",{children:"|"}),size:t.small,children:[e.jsx("span",{children:"Risk: Medium"}),e.jsx("span",{children:"KYB: Reviewing"}),e.jsx("span",{children:"AML: Passed"})]}),e.jsx("div",{style:r,children:"Operator: Derrick"}),e.jsx("div",{style:r,children:"Last Updated: 2026-02-09"})]})]})})};var z,R,G;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Space {...args}>
      <div style={DEMO_BOX_STYLE}>One</div>
      <div style={DEMO_BOX_STYLE}>Two</div>
      <div style={DEMO_BOX_STYLE}>Three</div>
    </Space>
}`,...(G=(R=_.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var b,B,Z;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle}>
      <div style={DEMO_BOX_STYLE}>Top</div>
      <div style={DEMO_BOX_STYLE}>Bottom</div>
    </Space>
}`,...(Z=(B=m.parameters)==null?void 0:B.docs)==null?void 0:Z.source}}};var k,H,W;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Space size={[8, 16]} wrap style={{
    maxWidth: 240
  }}>
      {Array.from({
      length: 10
    }).map((_, index) => <div style={DEMO_BOX_STYLE} key={index}>
          Item {index + 1}
        </div>)}
    </Space>
}`,...(W=(H=v.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var X,U,V;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Space split={<span>|</span>} size={SPACE_SIZE.large}>
      <span>Alpha</span>
      <span>Beta</span>
      <span>Gamma</span>
    </Space>
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var F,K,$;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={DEMO_SECTION_STYLE}>
      <Space size={SPACE_SIZE.middle} align={SPACE_ALIGN.center}>
        <div style={DEMO_BOX_STYLE}>Align</div>
        <div style={DEMO_BOX_STYLE}>Center</div>
      </Space>
      <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.large}>
        <div style={DEMO_BOX_STYLE}>Vertical</div>
        <div style={DEMO_BOX_STYLE}>Large</div>
      </Space>
    </div>
}`,...($=(K=I.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var q,J,Q;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Toolbar layout with left filter group and right action group, using Space to keep consistent in-group spacing.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <div style={{
      ...DEMO_PANEL_STYLE,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
        <Space size={SPACE_SIZE.small} align={SPACE_ALIGN.center}>
          <div style={DEMO_INLINE_ITEM_STYLE}>Date Range</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Status</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Currency</div>
        </Space>
        <Space size={SPACE_SIZE.small} align={SPACE_ALIGN.center}>
          <div style={DEMO_INLINE_ITEM_STYLE}>Export</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Refresh</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Create</div>
        </Space>
      </div>
    </div>
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,se,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Filter wrapping layout: Space + wrap for tags and variable-length multi-filter items.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Space size={[8, 12]} wrap style={{
      maxWidth: 640
    }}>
        <div style={DEMO_CHIP_ITEM_STYLE}>All</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>High Risk</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>KYC Pending</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>Manual Review</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>Today</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>This Week</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>Large Amount</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>USDT</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>USD</div>
      </Space>
    </div>
}`,...(ne=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,re,te;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Detail panel composition: vertical field group on the left and vertical status group on the right with layered spacing.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Space size={SPACE_SIZE.large} align={SPACE_ALIGN.start} style={{
      width: '100%'
    }}>
        <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle} style={DEMO_COLUMN_STYLE}>
          <div style={DEMO_INLINE_ITEM_STYLE}>Business Name</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Registration Number</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Country</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Created At</div>
        </Space>

        <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle} style={DEMO_COLUMN_STYLE}>
          <Space split={<span>|</span>} size={SPACE_SIZE.small}>
            <span>Risk: Medium</span>
            <span>KYB: Reviewing</span>
            <span>AML: Passed</span>
          </Space>
          <div style={DEMO_INLINE_ITEM_STYLE}>Operator: Derrick</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Last Updated: 2026-02-09</div>
        </Space>
      </Space>
    </div>
}`,...(te=(re=T.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Ze=["Primary","Vertical","CustomSizeAndWrap","Split","ApiExamples","ToolbarSpacing","FilterWrapSpacing","DetailPanelSpacing"];export{I as ApiExamples,v as CustomSizeAndWrap,T as DetailPanelSpacing,g as FilterWrapSpacing,_ as Primary,y as Split,h as ToolbarSpacing,m as Vertical,Ze as __namedExportsOrder,Be as default};
