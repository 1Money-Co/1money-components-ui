import{a as Q,c as ee,j as e}from"./classnames-DVmDMOck.js";import{r as S}from"./index-LFmgH05F.js";const o={start:"start",end:"end",center:"center",baseline:"baseline"},l={horizontal:"horizontal",vertical:"vertical"},t={small:"small",middle:"middle",large:"large"},se="space",z=8,ne=16,ie=24,Y=z,f={columnGap:"--om-space-column-gap",rowGap:"--om-space-row-gap"},p={vertical:"vertical",align:"align",wrap:"wrap",item:"item",split:"split"},re={small:z,middle:ne,large:ie},O=s=>s==null?Y:typeof s=="number"?s:re[s]??Y,te=s=>{if(Array.isArray(s))return[O(s[0]),O(s[1])];const d=O(s);return[d,d]},n=S.memo(s=>{const{children:d,align:M,direction:b=l.horizontal,size:C,split:u,wrap:B=!1,className:Z,style:k,prefixCls:H=se,...W}=s,c=ee(H),A=b===l.vertical,E=u!=null,[D,j]=te(C),X=E?D/2:D,U=E?j/2:j,V=B&&!A,F=Q(c(),A&&c(p.vertical),M&&c(`${p.align}-${M}`),V&&c(p.wrap),Z),K={...k,...(C!==void 0||E)&&{[f.columnGap]:`${X}px`,[f.rowGap]:`${U}px`}},P=S.Children.toArray(d),$=P.map((x,N)=>{const q=N===P.length-1,J=S.isValidElement(x)?x.key:N;return e.jsxs(S.Fragment,{children:[e.jsx("div",{className:c(p.item),children:x}),!q&&E?e.jsx("span",{className:c(p.split),children:u}):null]},J)});return e.jsx("div",{...W,style:K,className:F,children:$})});n.displayName="Space";const ae=Object.values(o),le=Object.values(l),de=Object.values(t),ce=8,R="1px dashed currentColor",i={padding:ce,border:R},oe=16,G={display:"grid",gap:oe},L={...G,padding:16,border:R,borderRadius:8},r={...i,display:"inline-flex",alignItems:"center"},a={...i,padding:"4px 12px",display:"inline-flex"},pe={...i,minHeight:44,width:"100%"},w={...i,minWidth:220},ve={title:"Components/Space",component:n,argTypes:{size:{control:"select",options:de},align:{control:"select",options:ae},direction:{control:"select",options:le},wrap:{control:"boolean"},split:{control:!1},prefixCls:{control:"text"}},args:{size:t.small,align:o.center,direction:l.horizontal,wrap:!1},tags:["autodocs"]},_={render:s=>e.jsxs(n,{...s,children:[e.jsx("div",{style:i,children:"One"}),e.jsx("div",{style:i,children:"Two"}),e.jsx("div",{style:i,children:"Three"})]})},v={render:()=>e.jsxs(n,{direction:l.vertical,size:t.middle,children:[e.jsx("div",{style:i,children:"Top"}),e.jsx("div",{style:i,children:"Bottom"})]})},m={render:()=>e.jsx(n,{size:[8,16],wrap:!0,style:{maxWidth:240},children:Array.from({length:10}).map((s,d)=>e.jsxs("div",{style:i,children:["Item ",d+1]},d))})},y={render:()=>e.jsxs(n,{split:e.jsx("span",{children:"|"}),size:t.large,children:[e.jsx("span",{children:"Alpha"}),e.jsx("span",{children:"Beta"}),e.jsx("span",{children:"Gamma"})]})},I={render:()=>e.jsxs("div",{style:G,children:[e.jsxs(n,{size:t.middle,align:o.center,children:[e.jsx("div",{style:i,children:"Align"}),e.jsx("div",{style:i,children:"Center"})]}),e.jsxs(n,{direction:l.vertical,size:t.large,children:[e.jsx("div",{style:i,children:"Vertical"}),e.jsx("div",{style:i,children:"Large"})]})]})},h={parameters:{docs:{description:{story:"Toolbar layout with left filter group and right action group, using Space to keep consistent in-group spacing."}}},render:()=>e.jsx("div",{style:L,children:e.jsxs("div",{style:{...pe,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs(n,{size:t.small,align:o.center,children:[e.jsx("div",{style:r,children:"Date Range"}),e.jsx("div",{style:r,children:"Status"}),e.jsx("div",{style:r,children:"Currency"})]}),e.jsxs(n,{size:t.small,align:o.center,children:[e.jsx("div",{style:r,children:"Export"}),e.jsx("div",{style:r,children:"Refresh"}),e.jsx("div",{style:r,children:"Create"})]})]})})},g={parameters:{docs:{description:{story:"Filter wrapping layout: Space + wrap for tags and variable-length multi-filter items."}}},render:()=>e.jsx("div",{style:L,children:e.jsxs(n,{size:[8,12],wrap:!0,style:{maxWidth:640},children:[e.jsx("div",{style:a,children:"All"}),e.jsx("div",{style:a,children:"High Risk"}),e.jsx("div",{style:a,children:"KYC Pending"}),e.jsx("div",{style:a,children:"Manual Review"}),e.jsx("div",{style:a,children:"Today"}),e.jsx("div",{style:a,children:"This Week"}),e.jsx("div",{style:a,children:"Large Amount"}),e.jsx("div",{style:a,children:"USDT"}),e.jsx("div",{style:a,children:"USD"})]})})},T={parameters:{docs:{description:{story:"Detail panel composition: vertical field group on the left and vertical status group on the right with layered spacing."}}},render:()=>e.jsx("div",{style:L,children:e.jsxs(n,{size:t.large,align:o.start,style:{width:"100%"},children:[e.jsxs(n,{direction:l.vertical,size:t.middle,style:w,children:[e.jsx("div",{style:r,children:"Business Name"}),e.jsx("div",{style:r,children:"Registration Number"}),e.jsx("div",{style:r,children:"Country"}),e.jsx("div",{style:r,children:"Created At"})]}),e.jsxs(n,{direction:l.vertical,size:t.middle,style:w,children:[e.jsxs(n,{split:e.jsx("span",{children:"|"}),size:t.small,children:[e.jsx("span",{children:"Risk: Medium"}),e.jsx("span",{children:"KYB: Reviewing"}),e.jsx("span",{children:"AML: Passed"})]}),e.jsx("div",{style:r,children:"Operator: Derrick"}),e.jsx("div",{style:r,children:"Last Updated: 2026-02-09"})]})]})})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Space {...args}>
      <div style={DEMO_BOX_STYLE}>One</div>
      <div style={DEMO_BOX_STYLE}>Two</div>
      <div style={DEMO_BOX_STYLE}>Three</div>
    </Space>
}`,..._.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle}>
      <div style={DEMO_BOX_STYLE}>Top</div>
      <div style={DEMO_BOX_STYLE}>Bottom</div>
    </Space>
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Space size={[8, 16]} wrap style={{
    maxWidth: 240
  }}>
      {Array.from({
      length: 10
    }).map((_, index) => <div style={DEMO_BOX_STYLE} key={index}>
          Item {index + 1}
        </div>)}
    </Space>
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Space split={<span>|</span>} size={SPACE_SIZE.large}>
      <span>Alpha</span>
      <span>Beta</span>
      <span>Gamma</span>
    </Space>
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const me=["Primary","Vertical","CustomSizeAndWrap","Split","ApiExamples","ToolbarSpacing","FilterWrapSpacing","DetailPanelSpacing"];export{I as ApiExamples,m as CustomSizeAndWrap,T as DetailPanelSpacing,g as FilterWrapSpacing,_ as Primary,y as Split,h as ToolbarSpacing,v as Vertical,me as __namedExportsOrder,ve as default};
