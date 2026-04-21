import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{S as r}from"./Skeleton-BbdGRf15.js";import"./index-CP2yOfOm.js";import"./classnames-h1fAIaEr.js";const b={title:"Components/Skeleton",component:r,argTypes:{shape:{control:"radio",options:["rectangle","circle"]},animation:{control:"radio",options:["wave","none"]},width:{control:"text"},height:{control:"text"},size:{control:"text"},borderRadius:{control:"text"}},args:{shape:"rectangle",animation:"wave"},tags:["autodocs"]},i={render:o=>{const a={display:"flex",alignItems:"center",justifyContent:"space-between",gap:16},m={...a};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,border:"1px solid #e5e7eb",borderRadius:24,backgroundColor:"#f9fafb",padding:24,width:"100%"},children:[e.jsx("div",{style:a,children:Array.from({length:6}).map((x,s)=>e.jsx(r,{width:"15%",height:"16px",borderRadius:"8px",animation:o.animation},s))}),e.jsx("div",{style:{width:"100%",height:1,backgroundColor:"#e5e7eb"}}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:Array.from({length:3}).map((x,s)=>e.jsx("div",{style:m,children:Array.from({length:6}).map((u,g)=>e.jsx(r,{width:"15%",height:"24px",borderRadius:"12px",animation:o.animation},g))},s))})]})},tags:["!autodocs","dev"]},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:48},children:[e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:16},children:[e.jsx("h3",{children:"Rectangle"}),e.jsx(r,{}),e.jsx(r,{width:"10rem"}),e.jsx(r,{width:"5rem"}),e.jsx(r,{height:"2rem"}),e.jsx(r,{width:"10rem",height:"4rem"}),e.jsx("h3",{style:{marginTop:8},children:"Rounded"}),e.jsx(r,{borderRadius:"16px"}),e.jsx(r,{width:"10rem",borderRadius:"16px"}),e.jsx(r,{width:"5rem",borderRadius:"16px"}),e.jsx(r,{height:"2rem",borderRadius:"16px"}),e.jsx(r,{width:"10rem",height:"4rem",borderRadius:"16px"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx("h3",{children:"Square"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{size:"2rem"}),e.jsx(r,{size:"3rem"}),e.jsx(r,{size:"4rem"}),e.jsx(r,{size:"5rem"})]}),e.jsx("h3",{style:{marginTop:8},children:"Circle"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{shape:"circle",size:"2rem"}),e.jsx(r,{shape:"circle",size:"3rem"}),e.jsx(r,{shape:"circle",size:"4rem"}),e.jsx(r,{shape:"circle",size:"5rem"})]})]})]}),tags:["!autodocs","dev"]};var l,d,n;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const contentCount = 3;
    const headerStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    };
    const rowStyle: React.CSSProperties = {
      ...headerStyle
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      border: '1px solid #e5e7eb',
      borderRadius: 24,
      backgroundColor: '#f9fafb',
      padding: 24,
      width: '100%'
    }}>
        <div style={headerStyle}>
          {Array.from({
          length: 6
        }).map((_, i) => <Skeleton key={i} width="15%" height="16px" borderRadius="8px" animation={args.animation} />)}
        </div>
        <div style={{
        width: '100%',
        height: 1,
        backgroundColor: '#e5e7eb'
      }} />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          {Array.from({
          length: contentCount
        }).map((_, i) => <div key={i} style={rowStyle}>
              {Array.from({
            length: 6
          }).map((_, j) => <Skeleton key={j} width="15%" height="24px" borderRadius="12px" animation={args.animation} />)}
            </div>)}
        </div>
      </div>;
  },
  tags: ['!autodocs', 'dev']
}`,...(n=(d=i.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var c,p,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 48
  }}>
      <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <h3>Rectangle</h3>
        <Skeleton />
        <Skeleton width="10rem" />
        <Skeleton width="5rem" />
        <Skeleton height="2rem" />
        <Skeleton width="10rem" height="4rem" />

        <h3 style={{
        marginTop: 8
      }}>Rounded</h3>
        <Skeleton borderRadius="16px" />
        <Skeleton width="10rem" borderRadius="16px" />
        <Skeleton width="5rem" borderRadius="16px" />
        <Skeleton height="2rem" borderRadius="16px" />
        <Skeleton width="10rem" height="4rem" borderRadius="16px" />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <h3>Square</h3>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Skeleton size="2rem" />
          <Skeleton size="3rem" />
          <Skeleton size="4rem" />
          <Skeleton size="5rem" />
        </div>

        <h3 style={{
        marginTop: 8
      }}>Circle</h3>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Skeleton shape="circle" size="2rem" />
          <Skeleton shape="circle" size="3rem" />
          <Skeleton shape="circle" size="4rem" />
          <Skeleton shape="circle" size="5rem" />
        </div>
      </div>
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const k=["Table","AllVariants"];export{t as AllVariants,i as Table,k as __namedExportsOrder,b as default};
