import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-CP2yOfOm.js";import{R as o}from"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";const a={border:"2px dashed #d9d9d9",borderRadius:4,padding:16,resize:"both",overflow:"auto",minWidth:100,minHeight:60,maxWidth:600,background:"#fafafa"},k={marginTop:12,padding:12,background:"#f0f0f0",borderRadius:4,fontFamily:"monospace",fontSize:13},H={title:"Components/ResizeObserver",tags:["autodocs"]},l={render:()=>{const[s,t]=r.useState(null);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,color:"#666"},children:"Drag the bottom-right corner to resize the box:"}),e.jsx(o,{onResize:i=>t(i),children:e.jsx("div",{style:a,children:"Resize me!"})}),s&&e.jsxs("div",{style:k,children:[e.jsxs("div",{children:["width: ",s.width,"px"]}),e.jsxs("div",{children:["height: ",s.height,"px"]}),e.jsxs("div",{children:["offsetWidth: ",s.offsetWidth,"px"]}),e.jsxs("div",{children:["offsetHeight: ",s.offsetHeight,"px"]})]})]})}},c={render:()=>{const[s,t]=r.useState({}),i=n=>d=>{t(w=>({...w,[n]:d}))};return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,color:"#666"},children:"Each box independently reports its size:"}),e.jsx("div",{style:{display:"flex",gap:16},children:["A","B","C"].map(n=>e.jsx(o,{onResize:i(n),children:e.jsxs("div",{style:{...a,minWidth:120,width:120+["A","B","C"].indexOf(n)*40},children:["Box ",n,s[n]&&e.jsxs("div",{style:{fontSize:12,color:"#999",marginTop:8},children:[s[n].width," × ",s[n].height]})]})},n))})]})}},h={render:()=>{const[s,t]=r.useState(!1),[i,n]=r.useState(0);return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:12},children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:s,onChange:d=>t(d.target.checked)})," ","Disable observer"]}),e.jsxs("span",{style:{marginLeft:12,color:"#666"},children:["Resize events received: ",i]})]}),e.jsx(o,{disabled:s,onResize:()=>n(d=>d+1),children:e.jsx("div",{style:a,children:s?"Observer disabled — resize events paused":"Resize me to trigger events"})})]})}},p={render:()=>{const[s,t]=r.useState(null);return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,color:"#666"},children:"Using render-props pattern for ref forwarding:"}),e.jsx(o,{onResize:i=>t(i),children:i=>e.jsxs("div",{ref:i,style:a,children:["Render-props child",s&&e.jsxs("div",{style:{fontSize:12,color:"#999",marginTop:8},children:[s.width," × ",s.height]})]})})]})}},z={render:()=>{const[s,t]=r.useState("");return e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,color:"#666"},children:"Collection batches resize events from multiple children into a single callback:"}),e.jsx(o.Collection,{onBatchResize:i=>{t(`Batch: ${i.length} resize(s) — ${i.map(n=>`${n.data}: ${n.size.width}×${n.size.height}`).join(", ")}`)},children:e.jsx("div",{style:{display:"flex",gap:16},children:["First","Second"].map(i=>e.jsx(o,{data:i,children:e.jsx("div",{style:{...a,minWidth:150},children:i})},i))})}),s&&e.jsx("div",{style:k,children:s})]})}};var v,m,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [size, setSize] = useState<SizeInfo | null>(null);
    return <div>
        <p style={{
        marginBottom: 8,
        color: '#666'
      }}>
          Drag the bottom-right corner to resize the box:
        </p>
        <ResizeObserver onResize={sizeInfo => setSize(sizeInfo)}>
          <div style={boxStyle}>
            Resize me!
          </div>
        </ResizeObserver>
        {size && <div style={infoStyle}>
            <div>width: {size.width}px</div>
            <div>height: {size.height}px</div>
            <div>offsetWidth: {size.offsetWidth}px</div>
            <div>offsetHeight: {size.offsetHeight}px</div>
          </div>}
      </div>;
  }
}`,...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,x,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [sizes, setSizes] = useState<Record<string, SizeInfo>>({});
    const handleResize = (key: string) => (sizeInfo: SizeInfo) => {
      setSizes(prev => ({
        ...prev,
        [key]: sizeInfo
      }));
    };
    return <div>
        <p style={{
        marginBottom: 8,
        color: '#666'
      }}>
          Each box independently reports its size:
        </p>
        <div style={{
        display: 'flex',
        gap: 16
      }}>
          {['A', 'B', 'C'].map(key => <ResizeObserver key={key} onResize={handleResize(key)}>
              <div style={{
            ...boxStyle,
            minWidth: 120,
            width: 120 + ['A', 'B', 'C'].indexOf(key) * 40
          }}>
                Box {key}
                {sizes[key] && <div style={{
              fontSize: 12,
              color: '#999',
              marginTop: 8
            }}>
                    {sizes[key].width} × {sizes[key].height}
                  </div>}
              </div>
            </ResizeObserver>)}
        </div>
      </div>;
  }
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var u,y,R;h.parameters={...h.parameters,docs:{...(u=h.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [disabled, setDisabled] = useState(false);
    const [resizeCount, setResizeCount] = useState(0);
    return <div>
        <div style={{
        marginBottom: 12
      }}>
          <label>
            <input type="checkbox" checked={disabled} onChange={e => setDisabled(e.target.checked)} />
            {' '}Disable observer
          </label>
          <span style={{
          marginLeft: 12,
          color: '#666'
        }}>
            Resize events received: {resizeCount}
          </span>
        </div>
        <ResizeObserver disabled={disabled} onResize={() => setResizeCount(c => c + 1)}>
          <div style={boxStyle}>
            {disabled ? 'Observer disabled — resize events paused' : 'Resize me to trigger events'}
          </div>
        </ResizeObserver>
      </div>;
  }
}`,...(R=(y=h.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var S,j,B;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [size, setSize] = useState<SizeInfo | null>(null);
    return <div>
        <p style={{
        marginBottom: 8,
        color: '#666'
      }}>
          Using render-props pattern for ref forwarding:
        </p>
        <ResizeObserver onResize={sizeInfo => setSize(sizeInfo)}>
          {ref => <div ref={ref as React.RefObject<HTMLDivElement>} style={boxStyle}>
              Render-props child
              {size && <div style={{
            fontSize: 12,
            color: '#999',
            marginTop: 8
          }}>
                  {size.width} × {size.height}
                </div>}
            </div>}
        </ResizeObserver>
      </div>;
  }
}`,...(B=(j=p.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var C,O,I;z.parameters={...z.parameters,docs:{...(C=z.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [batchInfo, setBatchInfo] = useState<string>('');
    return <div>
        <p style={{
        marginBottom: 8,
        color: '#666'
      }}>
          Collection batches resize events from multiple children into a single callback:
        </p>
        <ResizeObserver.Collection onBatchResize={infos => {
        setBatchInfo(\`Batch: \${infos.length} resize(s) — \${infos.map(i => \`\${i.data}: \${i.size.width}×\${i.size.height}\`).join(', ')}\`);
      }}>
          <div style={{
          display: 'flex',
          gap: 16
        }}>
            {['First', 'Second'].map(name => <ResizeObserver key={name} data={name}>
                <div style={{
              ...boxStyle,
              minWidth: 150
            }}>
                  {name}
                </div>
              </ResizeObserver>)}
          </div>
        </ResizeObserver.Collection>
        {batchInfo && <div style={infoStyle}>{batchInfo}</div>}
      </div>;
  }
}`,...(I=(O=z.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const T=["Basic","MultipleChildren","Disabled","RenderProps","BatchResize"];export{l as Basic,z as BatchResize,h as Disabled,c as MultipleChildren,p as RenderProps,T as __namedExportsOrder,H as default};
