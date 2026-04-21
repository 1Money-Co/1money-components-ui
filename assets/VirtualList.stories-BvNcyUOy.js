import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as X}from"./index-CP2yOfOm.js";import{V as r}from"./VirtualList-DGdvWJRn.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./index-D1q9exoj.js";import"./index-CN0Pk037.js";function x(i){return Array.from({length:i},(e,a)=>({id:a,height:30+a%3*10}))}const g=x(1e3),A=x(1e4),l=i=>({height:i,lineHeight:`${i}px`,boxSizing:"border-box",borderBottom:"1px solid #e8e8e8",padding:"0 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}),o={border:"1px solid #d9d9d9",borderRadius:4,width:400},n={marginRight:8,marginBottom:8,padding:"4px 12px",cursor:"pointer"},J={title:"Components/VirtualList",component:r,tags:["autodocs"]},d={render:()=>t.jsx("div",{style:o,children:t.jsx(r,{data:g,height:300,itemHeight:30,itemKey:"id",children:i=>t.jsxs("div",{style:l(i.height),children:[t.jsxs("span",{children:["Item ",i.id]}),t.jsxs("span",{style:{color:"#999",fontSize:12},children:["h: ",i.height,"px"]})]})})})},c={render:()=>{const i=X.useRef(null);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:12,flexWrap:"wrap",display:"flex"},children:[t.jsx("button",{style:n,onClick:()=>{var e;return(e=i.current)==null?void 0:e.scrollTo(0)},children:"Scroll to top"}),t.jsx("button",{style:n,onClick:()=>{var e;return(e=i.current)==null?void 0:e.scrollTo({index:50,align:"top"})},children:"Index 50 (top)"}),t.jsx("button",{style:n,onClick:()=>{var e;return(e=i.current)==null?void 0:e.scrollTo({index:50,align:"bottom"})},children:"Index 50 (bottom)"}),t.jsx("button",{style:n,onClick:()=>{var e;return(e=i.current)==null?void 0:e.scrollTo({index:50,align:"auto"})},children:"Index 50 (auto)"}),t.jsx("button",{style:n,onClick:()=>{var e;return(e=i.current)==null?void 0:e.scrollTo({index:999,align:"bottom"})},children:"Scroll to last"}),t.jsx("button",{style:n,onClick:()=>{var e;return(e=i.current)==null?void 0:e.scrollTo({index:100,align:"top",offset:20})},children:"Index 100 + 20px offset"}),t.jsx("button",{style:n,onClick:()=>{var e;return(e=i.current)==null?void 0:e.scrollTo({key:200,align:"top"})},children:"Key 200 (top)"})]}),t.jsx("div",{style:o,children:t.jsx(r,{ref:i,data:g,height:300,itemHeight:30,itemKey:"id",children:e=>t.jsx("div",{style:l(e.height),children:t.jsxs("span",{children:["Item ",e.id]})})})})]})}},m={render:()=>t.jsx("div",{style:o,children:t.jsx(r,{data:g,height:300,itemHeight:30,itemKey:"id",children:i=>t.jsxs("div",{style:l(i.height),children:[t.jsxs("span",{children:["Item ",i.id]}),t.jsxs("span",{style:{color:"#999",fontSize:12},children:["height: ",i.height,"px"]})]})})})},h={render:()=>t.jsx("div",{style:o,children:t.jsx(r,{data:A,height:400,itemHeight:30,itemKey:"id",children:i=>t.jsxs("div",{style:l(30),children:[t.jsxs("span",{children:["Item ",i.id]}),t.jsxs("span",{style:{color:"#999",fontSize:12},children:[i.id+1," / 10000"]})]})})})},u={render:()=>{const[i,e]=X.useState(100),a=x(i);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:12,display:"flex",gap:8},children:[t.jsxs("button",{style:n,onClick:()=>e(s=>s+100),children:["Add 100 items (",i," total)"]}),t.jsx("button",{style:n,onClick:()=>e(s=>Math.max(0,s-100)),children:"Remove 100 items"}),t.jsx("button",{style:n,onClick:()=>e(0),children:"Clear"})]}),t.jsx("div",{style:o,children:t.jsx(r,{data:a,height:300,itemHeight:30,itemKey:"id",children:s=>t.jsx("div",{style:l(s.height),children:t.jsxs("span",{children:["Item ",s.id]})})})})]})}},p={render:()=>t.jsx("div",{style:{...o,width:400},children:t.jsx(r,{data:g,height:300,itemHeight:30,itemKey:"id",scrollWidth:800,children:(i,e,{style:a,offsetX:s})=>t.jsxs("div",{style:{...l(30),...a,transform:`translateX(-${s}px)`,width:800},children:[t.jsxs("span",{children:["Item ",i.id]}),t.jsx("span",{style:{color:"#999",fontSize:12},children:"Wide content here →"}),t.jsx("span",{style:{marginLeft:200},children:"End"})]})})})},y={render:()=>{const i=x(20);return t.jsx("div",{style:o,children:t.jsx(r,{data:i,height:300,itemHeight:30,itemKey:"id",virtual:!1,children:e=>t.jsx("div",{style:l(e.height),children:t.jsxs("span",{children:["Item ",e.id," (non-virtual)"]})})})})}};var v,b,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>
      <VirtualList data={data1000} height={300} itemHeight={30} itemKey="id">
        {(item: Item) => <div style={itemStyle(item.height)}>
            <span>Item {item.id}</span>
            <span style={{
          color: '#999',
          fontSize: 12
        }}>h: {item.height}px</span>
          </div>}
      </VirtualList>
    </div>
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,j,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const listRef = useRef<ListRef>(null);
    return <div>
        <div style={{
        marginBottom: 12,
        flexWrap: 'wrap',
        display: 'flex'
      }}>
          <button style={btnStyle} onClick={() => listRef.current?.scrollTo(0)}>
            Scroll to top
          </button>
          <button style={btnStyle} onClick={() => listRef.current?.scrollTo({
          index: 50,
          align: 'top'
        })}>
            Index 50 (top)
          </button>
          <button style={btnStyle} onClick={() => listRef.current?.scrollTo({
          index: 50,
          align: 'bottom'
        })}>
            Index 50 (bottom)
          </button>
          <button style={btnStyle} onClick={() => listRef.current?.scrollTo({
          index: 50,
          align: 'auto'
        })}>
            Index 50 (auto)
          </button>
          <button style={btnStyle} onClick={() => listRef.current?.scrollTo({
          index: 999,
          align: 'bottom'
        })}>
            Scroll to last
          </button>
          <button style={btnStyle} onClick={() => listRef.current?.scrollTo({
          index: 100,
          align: 'top',
          offset: 20
        })}>
            Index 100 + 20px offset
          </button>
          <button style={btnStyle} onClick={() => listRef.current?.scrollTo({
          key: 200,
          align: 'top'
        })}>
            Key 200 (top)
          </button>
        </div>
        <div style={containerStyle}>
          <VirtualList ref={listRef} data={data1000} height={300} itemHeight={30} itemKey="id">
            {(item: Item) => <div style={itemStyle(item.height)}>
                <span>Item {item.id}</span>
              </div>}
          </VirtualList>
        </div>
      </div>;
  }
}`,...(I=(j=c.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,k,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>
      <VirtualList data={data1000} height={300} itemHeight={30} itemKey="id">
        {(item: Item) => <div style={itemStyle(item.height)}>
            <span>Item {item.id}</span>
            <span style={{
          color: '#999',
          fontSize: 12
        }}>height: {item.height}px</span>
          </div>}
      </VirtualList>
    </div>
}`,...(L=(k=m.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var V,H,R;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={containerStyle}>
      <VirtualList data={data10000} height={400} itemHeight={30} itemKey="id">
        {(item: Item) => <div style={itemStyle(30)}>
            <span>Item {item.id}</span>
            <span style={{
          color: '#999',
          fontSize: 12
        }}>{item.id + 1} / 10000</span>
          </div>}
      </VirtualList>
    </div>
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var K,T,D;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(100);
    const data = generateData(count);
    return <div>
        <div style={{
        marginBottom: 12,
        display: 'flex',
        gap: 8
      }}>
          <button style={btnStyle} onClick={() => setCount(c => c + 100)}>
            Add 100 items ({count} total)
          </button>
          <button style={btnStyle} onClick={() => setCount(c => Math.max(0, c - 100))}>
            Remove 100 items
          </button>
          <button style={btnStyle} onClick={() => setCount(0)}>
            Clear
          </button>
        </div>
        <div style={containerStyle}>
          <VirtualList data={data} height={300} itemHeight={30} itemKey="id">
            {(item: Item) => <div style={itemStyle(item.height)}>
                <span>Item {item.id}</span>
              </div>}
          </VirtualList>
        </div>
      </div>;
  }
}`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var z,w,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    ...containerStyle,
    width: 400
  }}>
      <VirtualList data={data1000} height={300} itemHeight={30} itemKey="id" scrollWidth={800}>
        {(item: Item, _index, {
        style,
        offsetX
      }) => <div style={{
        ...itemStyle(30),
        ...style,
        transform: \`translateX(-\${offsetX}px)\`,
        width: 800
      }}>
            <span>Item {item.id}</span>
            <span style={{
          color: '#999',
          fontSize: 12
        }}>Wide content here →</span>
            <span style={{
          marginLeft: 200
        }}>End</span>
          </div>}
      </VirtualList>
    </div>
}`,...(B=(w=p.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var W,E,_;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const smallData = generateData(20);
    return <div style={containerStyle}>
        <VirtualList data={smallData} height={300} itemHeight={30} itemKey="id" virtual={false}>
          {(item: Item) => <div style={itemStyle(item.height)}>
              <span>Item {item.id} (non-virtual)</span>
            </div>}
        </VirtualList>
      </div>;
  }
}`,...(_=(E=y.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const P=["Basic","ScrollTo","VariableHeight","LargeDataset","DynamicData","HorizontalScroll","NonVirtual"];export{d as Basic,u as DynamicData,p as HorizontalScroll,h as LargeDataset,y as NonVirtual,c as ScrollTo,m as VariableHeight,P as __namedExportsOrder,J as default};
