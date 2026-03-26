import{a as ce,c as pe,j as e}from"./classnames-DVmDMOck.js";import{r as h}from"./index-LFmgH05F.js";const H={top:"top",middle:"middle",bottom:"bottom",stretch:"stretch"},O={start:"start",end:"end",center:"center",spaceAround:"space-around",spaceBetween:"space-between",spaceEvenly:"space-evenly"},u="grid-row",d="grid-col",ge=!0,Z=0,fe="auto",ee=["sm","md","lg"],W={start:"flex-start",end:"flex-end",center:"center","space-around":"space-around","space-between":"space-between","space-evenly":"space-evenly"},j={gutterX:"--om-grid-gutter-x",gutterY:"--om-grid-gutter-y",justify:"--om-grid-justify",colFlex:"--om-grid-col-flex"},se={sm:{gutterX:"--om-grid-gutter-x-sm",gutterY:"--om-grid-gutter-y-sm",justify:"--om-grid-justify-sm",colFlex:"--om-grid-col-flex-sm"},md:{gutterX:"--om-grid-gutter-x-md",gutterY:"--om-grid-gutter-y-md",justify:"--om-grid-justify-md",colFlex:"--om-grid-col-flex-md"},lg:{gutterX:"--om-grid-gutter-x-lg",gutterY:"--om-grid-gutter-y-lg",justify:"--om-grid-justify-lg",colFlex:"--om-grid-col-flex-lg"}},R={noWrap:"no-wrap",align:"align",justify:"justify",offset:"offset",order:"order",push:"push",pull:"pull"},J=s=>s==null?{}:typeof s=="object"?s:{},Q=s=>s==null?Z:typeof s=="number"||typeof s=="string"?s:Z,ye=s=>{if(Array.isArray(s))return{baseX:Q(s[0]),baseY:Q(s[1]),x:J(s[0]),y:J(s[1])};const a=J(s);return{baseX:Q(s),baseY:Z,x:a,y:{}}},A=s=>{if(s!=null)return typeof s=="number"?`${s}px`:s},Le=s=>s==null?{}:typeof s=="number"?{span:s}:s,Ee=s=>{if(s!=null)return typeof s=="number"?`${s} ${s} ${fe}`:s},Ie=s=>{if(s==null)return{};const{x:a,y:_,baseX:c,baseY:o}=ye(s),p={},l=A(c),E=A(o);return l!==void 0&&(p[j.gutterX]=l),E!==void 0&&(p[j.gutterY]=E),ee.forEach(S=>{const T=se[S],C=A(a[S]),m=A(_[S]);C!==void 0&&(p[T.gutterX]=C),m!==void 0&&(p[T.gutterY]=m)}),p},ve=s=>{if(!s)return{cssVars:{}};if(typeof s!="object")return{staticValue:s,cssVars:{[j.justify]:W[s]}};const a={},_=s.lg;return _&&(a[j.justify]=W[_]),ee.forEach(c=>{const o=s[c];o&&(a[se[c].justify]=W[o])}),{cssVars:a}},t=h.memo(s=>{const{children:a,gutter:_,align:c,justify:o,wrap:p=ge,className:l,style:E,prefixCls:S=u,...T}=s,C=pe(S),m=Ie(_),{staticValue:L,cssVars:G}=ve(o),K={...E,...m,...G},V=ce(C(),c&&C(`${R.align}-${c}`),L&&C(`${R.justify}-${L}`),p===!1&&C(R.noWrap),l);return e.jsx("div",{...T,style:K,className:V,children:a})});t.displayName="Row";const he=(s,a)=>{const _=[],c={};return ee.forEach(o=>{const p=s[o];if(p==null)return;const l=Le(p),E=Ee(l.flex);l.span!=null&&!E&&_.push(a(`${o}-${l.span}`)),l.offset!=null&&_.push(a(`${o}-${R.offset}-${l.offset}`)),l.order!=null&&_.push(a(`${o}-${R.order}-${l.order}`)),l.pull!=null&&_.push(a(`${o}-${R.pull}-${l.pull}`)),l.push!=null&&_.push(a(`${o}-${R.push}-${l.push}`)),E&&(c[se[o].colFlex]=E)}),{classList:_,flexVars:c}},n=h.memo(s=>{const{children:a,span:_,offset:c,order:o,pull:p,push:l,flex:E,sm:S,md:T,lg:C,className:m,style:L,prefixCls:G=d,...K}=s,{classNameValue:V,flexValue:$,flexVars:le}=h.useMemo(()=>{const g=pe(G),{classList:Te,flexVars:me}=he({sm:S,md:T,lg:C},g),ie=Ee(E);return{classNameValue:ce(g(),_!=null&&!ie&&g(`${_}`),c!=null&&g(`${R.offset}-${c}`),o!=null&&g(`${R.order}-${o}`),l!=null&&g(`${R.push}-${l}`),p!=null&&g(`${R.pull}-${p}`),...Te,m),flexValue:ie,flexVars:me}},[m,E,C,T,c,o,G,p,l,S,_]),Oe=h.useMemo(()=>({...L,...$&&{[j.colFlex]:$},...le}),[L,$,le]);return e.jsx("div",{...K,style:Oe,className:V,children:a})});n.displayName="Col";const Re=h.memo(s=>e.jsx(t,{...s}));Re.displayName="Grid";const I=Object.assign(Re,{Row:t,Col:n}),ne=16,te="1px dashed currentColor",r={padding:ne,border:te},Ce=16,je={display:"grid",gap:Ce},re={display:"grid",gap:Ce,padding:ne,border:te,borderRadius:8},x={padding:ne,border:te,borderRadius:8,minHeight:48,display:"flex",alignItems:"center",justifyContent:"center"},ue={...x,minHeight:56},Ge={...x,minHeight:300,alignItems:"flex-start"},oe={...x,minHeight:200,alignItems:"flex-start"},xe={...x,minHeight:56},f={...x,minHeight:96},q={...x,minHeight:220},Se={...x,minHeight:180},de={...x,minHeight:44},k={...x,minHeight:44,justifyContent:"flex-start"},ae={...x,minHeight:44,justifyContent:"flex-end"},Ae=Object.values(H),Pe=Object.values(O),Me=16,Fe=16,De=[16,16],v=8,i=[Me,Fe],Ye=8,Ne=16,Be=24,we={sm:Ye,md:Ne,lg:Be},Xe="1rem",z=4,w=12,X=6,U=4,b=3,D=6,y=3,_e=1,Ue=1,be=1,He=1,Ke=2,Ve=1,$e=2,We=!0,Je=!1,Qe={sm:O.start,md:O.spaceBetween,lg:O.end},qe={title:"Components/Grid",component:I,argTypes:{gutter:{control:"object"},align:{control:"select",options:Ae},justify:{control:"select",options:Pe},wrap:{control:"boolean"},prefixCls:{control:"text"}},args:{gutter:De,align:H.top,justify:O.start,wrap:!0},tags:["autodocs"]},P={render:s=>e.jsxs(I,{...s,children:[e.jsx(I.Col,{span:z,children:e.jsx("div",{style:r,children:"4"})}),e.jsx(I.Col,{span:z,children:e.jsx("div",{style:r,children:"4"})}),e.jsx(I.Col,{span:z,children:e.jsx("div",{style:r,children:"4"})})]})},M={render:()=>e.jsxs(t,{gutter:De,children:[e.jsx(n,{span:w,sm:X,md:U,lg:b,children:e.jsx("div",{style:r,children:"A"})}),e.jsx(n,{span:w,sm:X,md:U,lg:b,children:e.jsx("div",{style:r,children:"B"})}),e.jsx(n,{span:w,sm:X,md:U,lg:b,children:e.jsx("div",{style:r,children:"C"})})]})},F={render:()=>e.jsxs("div",{style:je,children:[e.jsxs(t,{gutter:i,align:H.middle,justify:O.spaceBetween,wrap:Je,prefixCls:u,children:[e.jsx(n,{span:D,prefixCls:d,children:e.jsx("div",{style:r,children:"Span"})}),e.jsx(n,{span:D,prefixCls:d,children:e.jsx("div",{style:r,children:"Span"})})]}),e.jsxs(t,{gutter:v,prefixCls:u,children:[e.jsx(n,{span:y,offset:_e,prefixCls:d,children:e.jsx("div",{style:r,children:"Offset"})}),e.jsx(n,{span:y,prefixCls:d,children:e.jsx("div",{style:r,children:"Offset"})})]}),e.jsxs(t,{gutter:v,prefixCls:u,children:[e.jsx(n,{span:y,push:Ue,prefixCls:d,children:e.jsx("div",{style:r,children:"Push"})}),e.jsx(n,{span:y,pull:be,prefixCls:d,children:e.jsx("div",{style:r,children:"Pull"})})]}),e.jsxs(t,{gutter:we,prefixCls:u,children:[e.jsx(n,{span:D,prefixCls:d,children:e.jsx("div",{style:r,children:"Responsive Gutter"})}),e.jsx(n,{span:D,prefixCls:d,children:e.jsx("div",{style:r,children:"Responsive Gutter"})})]}),e.jsxs(t,{gutter:Xe,prefixCls:u,children:[e.jsx(n,{span:D,prefixCls:d,children:e.jsx("div",{style:r,children:"String Gutter"})}),e.jsx(n,{span:D,prefixCls:d,children:e.jsx("div",{style:r,children:"String Gutter"})})]}),e.jsxs(t,{gutter:v,prefixCls:u,children:[e.jsx(n,{span:y,order:Ke,prefixCls:d,children:e.jsx("div",{style:r,children:"Order"})}),e.jsx(n,{span:y,order:He,prefixCls:d,children:e.jsx("div",{style:r,children:"Order"})})]}),e.jsxs(t,{gutter:v,prefixCls:u,children:[e.jsx(n,{flex:Ve,prefixCls:d,children:e.jsx("div",{style:r,children:"Flex 1"})}),e.jsx(n,{flex:$e,prefixCls:d,children:e.jsx("div",{style:r,children:"Flex 2"})})]}),e.jsx(t,{gutter:i,wrap:We,prefixCls:u,children:e.jsx(n,{span:w,sm:X,md:{span:U,offset:_e},lg:b,prefixCls:d,children:e.jsx("div",{style:r,children:"Responsive"})})}),e.jsxs(t,{gutter:i,justify:Qe,prefixCls:u,children:[e.jsx(n,{span:D,prefixCls:d,children:e.jsx("div",{style:r,children:"Justify Responsive"})}),e.jsx(n,{span:D,prefixCls:d,children:e.jsx("div",{style:r,children:"Justify Responsive"})})]})]})},Y={parameters:{docs:{description:{story:"Complete dashboard layout: top navigation, sidebar menu, KPI cards, chart area, and table area."}}},render:()=>e.jsxs("div",{style:re,children:[e.jsx(t,{gutter:i,children:e.jsx(n,{span:12,children:e.jsx("div",{style:ue,children:"Header (12/12)"})})}),e.jsxs(t,{gutter:i,children:[e.jsx(n,{span:12,md:3,lg:3,children:e.jsx("div",{style:Ge,children:"Sidebar (12 → 3 → 3)"})}),e.jsxs(n,{span:12,md:9,lg:9,children:[e.jsxs(t,{gutter:i,children:[e.jsx(n,{span:6,lg:3,children:e.jsx("div",{style:f,children:"KPI 1"})}),e.jsx(n,{span:6,lg:3,children:e.jsx("div",{style:f,children:"KPI 2"})}),e.jsx(n,{span:6,lg:3,children:e.jsx("div",{style:f,children:"KPI 3"})}),e.jsx(n,{span:6,lg:3,children:e.jsx("div",{style:f,children:"KPI 4"})})]}),e.jsxs(t,{gutter:i,children:[e.jsx(n,{span:12,lg:8,children:e.jsx("div",{style:q,children:"Main Chart (12 → 8)"})}),e.jsx(n,{span:12,lg:4,children:e.jsx("div",{style:q,children:"Side Panel (12 → 4)"})})]}),e.jsx(t,{gutter:i,children:e.jsx(n,{span:12,children:e.jsx("div",{style:Se,children:"Table Section (12/12)"})})})]})]}),e.jsx(t,{gutter:i,children:e.jsx(n,{span:12,children:e.jsx("div",{style:xe,children:"Footer (12/12)"})})})]})},N={parameters:{docs:{description:{story:"Marketing landing page layout: hero section, feature cards, split content blocks, FAQ area, and footer."}}},render:()=>e.jsxs("div",{style:re,children:[e.jsx(t,{gutter:i,justify:O.center,children:e.jsx(n,{span:12,md:10,lg:8,children:e.jsx("div",{style:q,children:"Hero Section"})})}),e.jsxs(t,{gutter:i,children:[e.jsx(n,{span:12,sm:6,lg:4,children:e.jsx("div",{style:f,children:"Feature Card A"})}),e.jsx(n,{span:12,sm:6,lg:4,children:e.jsx("div",{style:f,children:"Feature Card B"})}),e.jsx(n,{span:12,sm:6,lg:4,children:e.jsx("div",{style:f,children:"Feature Card C"})})]}),e.jsxs(t,{gutter:i,align:H.middle,children:[e.jsx(n,{span:12,md:6,children:e.jsx("div",{style:oe,children:"Image / Illustration"})}),e.jsx(n,{span:12,md:6,children:e.jsx("div",{style:oe,children:"Value Description"})})]}),e.jsx(t,{gutter:i,children:e.jsx(n,{span:12,children:e.jsx("div",{style:Se,children:"FAQ / Timeline"})})}),e.jsx(t,{gutter:i,children:e.jsx(n,{span:12,children:e.jsx("div",{style:xe,children:"Footer Links"})})})]})},B={parameters:{docs:{description:{story:"Form layout patterns: label/input columns, offset alignment, and action button alignment for admin pages."}}},render:()=>e.jsxs("div",{style:re,children:[e.jsx(t,{gutter:i,children:e.jsx(n,{span:12,children:e.jsx("div",{style:ue,children:"Form Header"})})}),e.jsxs(t,{gutter:i,children:[e.jsx(n,{span:12,md:3,children:e.jsx("div",{style:de,children:"Label: Company Name"})}),e.jsx(n,{span:12,md:9,children:e.jsx("div",{style:k,children:"Input Field (span 9)"})})]}),e.jsxs(t,{gutter:i,children:[e.jsx(n,{span:12,md:3,children:e.jsx("div",{style:de,children:"Label: Email"})}),e.jsx(n,{span:12,md:9,children:e.jsx("div",{style:k,children:"Input Field (span 9)"})})]}),e.jsx(t,{gutter:i,children:e.jsx(n,{span:12,md:{span:9,offset:3},children:e.jsx("div",{style:k,children:"Inline Help / Validation Message (offset 3)"})})}),e.jsx(t,{gutter:i,children:e.jsx(n,{span:12,md:{span:9,offset:3},children:e.jsxs(t,{gutter:v,justify:O.end,children:[e.jsx(n,{span:6,md:4,lg:3,children:e.jsx("div",{style:ae,children:"Secondary Action"})}),e.jsx(n,{span:6,md:4,lg:3,children:e.jsx("div",{style:ae,children:"Primary Action"})})]})})})]})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <Grid {...args}>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
    </Grid>
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Row gutter={GRID_GUTTER}>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>A</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>B</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>C</div></Col>
    </Row>
}`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={DEMO_SECTION_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED} align={GRID_ALIGN.middle} justify={GRID_JUSTIFY.spaceBetween} wrap={WRAP_DISABLED} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}><div style={DEMO_BOX_STYLE}>Span</div></Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}><div style={DEMO_BOX_STYLE}>Span</div></Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} offset={OFFSET_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Offset</div>
        </Col>
        <Col span={SPAN_QUARTER} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Offset</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} push={PUSH_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Push</div>
        </Col>
        <Col span={SPAN_QUARTER} pull={PULL_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Pull</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_RESPONSIVE} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive Gutter</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive Gutter</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_REM} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>String Gutter</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>String Gutter</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} order={ORDER_LAST} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Order</div>
        </Col>
        <Col span={SPAN_QUARTER} order={ORDER_FIRST} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Order</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col flex={FLEX_ONE} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Flex 1</div>
        </Col>
        <Col flex={FLEX_TWO} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Flex 2</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} wrap={WRAP_ENABLED} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_BASE} sm={SPAN_SM} md={{
        span: SPAN_MD,
        offset: OFFSET_SMALL
      }} lg={SPAN_LG} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} justify={JUSTIFY_RESPONSIVE} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Justify Responsive</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Justify Responsive</div>
        </Col>
      </Row>

    </div>
}`,...F.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Complete dashboard layout: top navigation, sidebar menu, KPI cards, chart area, and table area.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_HEADER_BLOCK_STYLE}>Header (12/12)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={3} lg={3}>
          <div style={DEMO_SIDEBAR_BLOCK_STYLE}>Sidebar (12 → 3 → 3)</div>
        </Col>
        <Col span={12} md={9} lg={9}>
          <Row gutter={GRID_GUTTER_SPACED}>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 1</div>
            </Col>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 2</div>
            </Col>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 3</div>
            </Col>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 4</div>
            </Col>
          </Row>

          <Row gutter={GRID_GUTTER_SPACED}>
            <Col span={12} lg={8}>
              <div style={DEMO_CHART_BLOCK_STYLE}>Main Chart (12 → 8)</div>
            </Col>
            <Col span={12} lg={4}>
              <div style={DEMO_CHART_BLOCK_STYLE}>Side Panel (12 → 4)</div>
            </Col>
          </Row>

          <Row gutter={GRID_GUTTER_SPACED}>
            <Col span={12}>
              <div style={DEMO_TABLE_BLOCK_STYLE}>Table Section (12/12)</div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_FOOTER_BLOCK_STYLE}>Footer (12/12)</div>
        </Col>
      </Row>
    </div>
}`,...Y.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Marketing landing page layout: hero section, feature cards, split content blocks, FAQ area, and footer.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED} justify={GRID_JUSTIFY.center}>
        <Col span={12} md={10} lg={8}>
          <div style={DEMO_CHART_BLOCK_STYLE}>Hero Section</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} sm={6} lg={4}>
          <div style={DEMO_WIDGET_BLOCK_STYLE}>Feature Card A</div>
        </Col>
        <Col span={12} sm={6} lg={4}>
          <div style={DEMO_WIDGET_BLOCK_STYLE}>Feature Card B</div>
        </Col>
        <Col span={12} sm={6} lg={4}>
          <div style={DEMO_WIDGET_BLOCK_STYLE}>Feature Card C</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} align={GRID_ALIGN.middle}>
        <Col span={12} md={6}>
          <div style={DEMO_MAIN_BLOCK_STYLE}>Image / Illustration</div>
        </Col>
        <Col span={12} md={6}>
          <div style={DEMO_MAIN_BLOCK_STYLE}>Value Description</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_TABLE_BLOCK_STYLE}>FAQ / Timeline</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_FOOTER_BLOCK_STYLE}>Footer Links</div>
        </Col>
      </Row>
    </div>
}`,...N.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Form layout patterns: label/input columns, offset alignment, and action button alignment for admin pages.'
      }
    }
  },
  render: () => <div style={DEMO_PAGE_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_HEADER_BLOCK_STYLE}>Form Header</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={3}>
          <div style={DEMO_FORM_LABEL_STYLE}>Label: Company Name</div>
        </Col>
        <Col span={12} md={9}>
          <div style={DEMO_FORM_FIELD_STYLE}>Input Field (span 9)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={3}>
          <div style={DEMO_FORM_LABEL_STYLE}>Label: Email</div>
        </Col>
        <Col span={12} md={9}>
          <div style={DEMO_FORM_FIELD_STYLE}>Input Field (span 9)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={{
        span: 9,
        offset: 3
      }}>
          <div style={DEMO_FORM_FIELD_STYLE}>Inline Help / Validation Message (offset 3)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={{
        span: 9,
        offset: 3
      }}>
          <Row gutter={GRID_GUTTER_COMPACT} justify={GRID_JUSTIFY.end}>
            <Col span={6} md={4} lg={3}>
              <div style={DEMO_FORM_ACTION_STYLE}>Secondary Action</div>
            </Col>
            <Col span={6} md={4} lg={3}>
              <div style={DEMO_FORM_ACTION_STYLE}>Primary Action</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
}`,...B.parameters?.docs?.source}}};const es=["Primary","Responsive","ApiExamples","DashboardLayout","MarketingPageLayout","FormLayoutPatterns"];export{F as ApiExamples,Y as DashboardLayout,B as FormLayoutPatterns,N as MarketingPageLayout,P as Primary,M as Responsive,es as __namedExportsOrder,qe as default};
