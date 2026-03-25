import{a as W,c as U,j as e}from"./classnames-DVmDMOck.js";import{r as J}from"./index-LFmgH05F.js";const i={start:"start",end:"end",center:"center",baseline:"baseline",stretch:"stretch"},l={start:"start",end:"end",center:"center",spaceAround:"space-around",spaceBetween:"space-between",spaceEvenly:"space-evenly"},c={nowrap:"nowrap",wrap:"wrap",wrapReverse:"wrap-reverse"},E={small:"small",middle:"middle",large:"large"},g="flex",h=0,V=8,$=16,z=24,H={gap:"--om-flex-gap"},p={vertical:"vertical",wrap:"wrap",align:"align",justify:"justify"},k={small:V,middle:$,large:z},q=t=>t==null?h:typeof t=="number"?t:k[t]??h,K=t=>t===!0?c.wrap:t===!1?c.nowrap:t,s=J.memo(t=>{const{children:P,vertical:Y,wrap:w,align:j,justify:F,gap:O,className:X,style:B,prefixCls:N=g,...C}=t,o=U(N),m=K(w),R={...B,...O!==void 0&&{[H.gap]:`${q(O)}px`}},b=W(o(),Y&&o(p.vertical),m&&o(`${p.wrap}-${m}`),j&&o(`${p.align}-${j}`),F&&o(`${p.justify}-${F}`),X);return e.jsx("div",{...C,style:R,className:b,children:P})});s.displayName="Flex";const Q=Object.values(i),Z=Object.values(l),ee=Object.values(c),se=Object.values(E),D=16,f="1px dashed currentColor",r={padding:D,border:f},ne=16,G={display:"grid",gap:ne},S={...G,padding:D,border:f,borderRadius:8},te={...r,minHeight:56,display:"flex",alignItems:"center",width:"100%"},A={...r,minHeight:220,display:"flex",alignItems:"flex-start",width:"100%"},n={...r,minWidth:120,textAlign:"center"},a={...r,padding:"4px 12px"},I=c.wrap,M=c.nowrap,d=E.small,T=E.middle,re=E.large,le={title:"Components/Flex",component:s,argTypes:{gap:{control:"select",options:se},align:{control:"select",options:Q},justify:{control:"select",options:Z},vertical:{control:"boolean"},wrap:{control:"select",options:ee},prefixCls:{control:"text"}},args:{gap:E.middle,align:i.center,justify:l.spaceBetween,vertical:!1,wrap:c.nowrap},tags:["autodocs"]},_={render:t=>e.jsxs(s,{...t,children:[e.jsx("div",{style:r,children:"One"}),e.jsx("div",{style:r,children:"Two"}),e.jsx("div",{style:r,children:"Three"})]})},v={render:()=>e.jsxs(s,{vertical:!0,gap:d,children:[e.jsx("div",{style:r,children:"Top"}),e.jsx("div",{style:r,children:"Bottom"})]})},L={render:()=>e.jsxs("div",{style:G,children:[e.jsxs(s,{gap:T,align:i.center,justify:l.spaceBetween,wrap:M,prefixCls:g,children:[e.jsx("div",{style:r,children:"Align"}),e.jsx("div",{style:r,children:"Justify"})]}),e.jsxs(s,{vertical:!0,gap:re,wrap:I,prefixCls:g,children:[e.jsx("div",{style:r,children:"Vertical"}),e.jsx("div",{style:r,children:"Wrap"})]})]})},y={parameters:{docs:{description:{story:"Common header layout with left brand area, center navigation, and right-side actions using justify/align."}}},render:()=>e.jsx("div",{style:S,children:e.jsxs(s,{gap:T,align:i.center,justify:l.spaceBetween,wrap:M,prefixCls:g,children:[e.jsx("div",{style:te,children:"Brand / Logo"}),e.jsxs(s,{gap:d,align:i.center,children:[e.jsx("div",{style:n,children:"Overview"}),e.jsx("div",{style:n,children:"Accounts"}),e.jsx("div",{style:n,children:"Transactions"})]}),e.jsxs(s,{gap:d,align:i.center,children:[e.jsx("div",{style:n,children:"Search"}),e.jsx("div",{style:n,children:"Notification"}),e.jsx("div",{style:n,children:"Profile"})]})]})})},x={parameters:{docs:{description:{story:"Sidebar and content layout using horizontal Flex outside and vertical Flex inside for title, body, and footer actions."}}},render:()=>e.jsx("div",{style:S,children:e.jsxs(s,{gap:T,align:i.start,justify:l.start,wrap:M,children:[e.jsxs(s,{vertical:!0,gap:d,style:{...A,minWidth:220},children:[e.jsx("div",{style:n,children:"Menu Group A"}),e.jsx("div",{style:n,children:"Menu Group B"}),e.jsx("div",{style:n,children:"Menu Group C"})]}),e.jsxs(s,{vertical:!0,gap:T,style:{...A,flex:1},children:[e.jsxs(s,{align:i.center,justify:l.spaceBetween,children:[e.jsx("div",{style:n,children:"Page Title"}),e.jsxs(s,{gap:d,children:[e.jsx("div",{style:n,children:"Export"}),e.jsx("div",{style:n,children:"Create"})]})]}),e.jsx("div",{style:A,children:"Main Content"}),e.jsxs(s,{align:i.center,justify:l.end,gap:d,children:[e.jsx("div",{style:n,children:"Cancel"}),e.jsx("div",{style:n,children:"Save"})]})]})]})})},u={parameters:{docs:{description:{story:"Wrapping tag group layout using wrap + gap for dense filter/status tag scenarios."}}},render:()=>e.jsx("div",{style:S,children:e.jsxs(s,{wrap:I,gap:d,align:i.center,justify:l.start,children:[e.jsx("div",{style:a,children:"Pending"}),e.jsx("div",{style:a,children:"Approved"}),e.jsx("div",{style:a,children:"Rejected"}),e.jsx("div",{style:a,children:"In Review"}),e.jsx("div",{style:a,children:"Manual Check"}),e.jsx("div",{style:a,children:"Needs Update"}),e.jsx("div",{style:a,children:"Completed"}),e.jsx("div",{style:a,children:"Escalated"})]})})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Flex {...args}>
      <div style={DEMO_BOX_STYLE}>One</div>
      <div style={DEMO_BOX_STYLE}>Two</div>
      <div style={DEMO_BOX_STYLE}>Three</div>
    </Flex>
}`,..._.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={GAP_SMALL}>
      <div style={DEMO_BOX_STYLE}>Top</div>
      <div style={DEMO_BOX_STYLE}>Bottom</div>
    </Flex>
}`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={DEMO_SECTION_STYLE}>
      <Flex gap={GAP_MIDDLE} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween} wrap={WRAP_DISABLED} prefixCls={FLEX_PREFIX}>
        <div style={DEMO_BOX_STYLE}>Align</div>
        <div style={DEMO_BOX_STYLE}>Justify</div>
      </Flex>

      <Flex vertical gap={GAP_LARGE} wrap={WRAP_ENABLED} prefixCls={FLEX_PREFIX}>
        <div style={DEMO_BOX_STYLE}>Vertical</div>
        <div style={DEMO_BOX_STYLE}>Wrap</div>
      </Flex>
    </div>
}`,...L.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Common header layout with left brand area, center navigation, and right-side actions using justify/align.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Flex gap={GAP_MIDDLE} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween} wrap={WRAP_DISABLED} prefixCls={FLEX_PREFIX}>
        <div style={DEMO_BAR_STYLE}>Brand / Logo</div>
        <Flex gap={GAP_SMALL} align={FLEX_ALIGN.center}>
          <div style={DEMO_ITEM_STYLE}>Overview</div>
          <div style={DEMO_ITEM_STYLE}>Accounts</div>
          <div style={DEMO_ITEM_STYLE}>Transactions</div>
        </Flex>
        <Flex gap={GAP_SMALL} align={FLEX_ALIGN.center}>
          <div style={DEMO_ITEM_STYLE}>Search</div>
          <div style={DEMO_ITEM_STYLE}>Notification</div>
          <div style={DEMO_ITEM_STYLE}>Profile</div>
        </Flex>
      </Flex>
    </div>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Sidebar and content layout using horizontal Flex outside and vertical Flex inside for title, body, and footer actions.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Flex gap={GAP_MIDDLE} align={FLEX_ALIGN.start} justify={FLEX_JUSTIFY.start} wrap={WRAP_DISABLED}>
        <Flex vertical gap={GAP_SMALL} style={{
        ...DEMO_PANEL_STYLE,
        minWidth: 220
      }}>
          <div style={DEMO_ITEM_STYLE}>Menu Group A</div>
          <div style={DEMO_ITEM_STYLE}>Menu Group B</div>
          <div style={DEMO_ITEM_STYLE}>Menu Group C</div>
        </Flex>

        <Flex vertical gap={GAP_MIDDLE} style={{
        ...DEMO_PANEL_STYLE,
        flex: 1
      }}>
          <Flex align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween}>
            <div style={DEMO_ITEM_STYLE}>Page Title</div>
            <Flex gap={GAP_SMALL}>
              <div style={DEMO_ITEM_STYLE}>Export</div>
              <div style={DEMO_ITEM_STYLE}>Create</div>
            </Flex>
          </Flex>
          <div style={DEMO_PANEL_STYLE}>Main Content</div>
          <Flex align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.end} gap={GAP_SMALL}>
            <div style={DEMO_ITEM_STYLE}>Cancel</div>
            <div style={DEMO_ITEM_STYLE}>Save</div>
          </Flex>
        </Flex>
      </Flex>
    </div>
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Wrapping tag group layout using wrap + gap for dense filter/status tag scenarios.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Flex wrap={WRAP_ENABLED} gap={GAP_SMALL} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.start}>
        <div style={DEMO_TAG_STYLE}>Pending</div>
        <div style={DEMO_TAG_STYLE}>Approved</div>
        <div style={DEMO_TAG_STYLE}>Rejected</div>
        <div style={DEMO_TAG_STYLE}>In Review</div>
        <div style={DEMO_TAG_STYLE}>Manual Check</div>
        <div style={DEMO_TAG_STYLE}>Needs Update</div>
        <div style={DEMO_TAG_STYLE}>Completed</div>
        <div style={DEMO_TAG_STYLE}>Escalated</div>
      </Flex>
    </div>
}`,...u.parameters?.docs?.source}}};const de=["Primary","Vertical","ApiExamples","DashboardHeaderLayout","SidebarContentLayout","TagGroupWrapLayout"];export{L as ApiExamples,y as DashboardHeaderLayout,_ as Primary,x as SidebarContentLayout,u as TagGroupWrapLayout,v as Vertical,de as __namedExportsOrder,le as default};
