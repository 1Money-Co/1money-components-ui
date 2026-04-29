import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-CP2yOfOm.js";import{f as M}from"./index-DCiaR2iG.js";import{A as nt}from"./Alert-Cfrjz0Z_.js";import{B as d}from"./Button-Danz3Cra.js";import{C as ot}from"./index-DGVw2LVs.js";import{I as y}from"./Icons-D1aARqJQ.js";import{b as Xe}from"./Trade-CoEFfKJg.js";import{T as st}from"./Typography-ekcRRINu.js";import{j as rt}from"./classnames-h1fAIaEr.js";import{T as lt}from"./Trigger-DR6_NdmK.js";/* empty css                *//* empty css                 *//* empty css               */import"./Spinner-BVYrUiYA.js";import"./iframe-Cr7yWnQZ.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";import"./Skeleton-BbdGRf15.js";import"./Tooltip-DeIhm5fH.js";import"./ResizeObserver-DW8-DKQf.js";import"./clipboard-C7s2bcmm.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";const i=({trigger:n="click",role:o="dialog",...s})=>e.jsx(lt,{trigger:n,role:o,...s});i.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"}]},description:"Trigger mode",defaultValue:{value:"'click'",computed:!1}},role:{defaultValue:{value:"'dialog'",computed:!1},required:!1}},composes:["Omit"]};const O={display:"flex",flexDirection:"column",gap:4,minWidth:160},Ye={padding:"8px 0",fontSize:16,fontWeight:600,lineHeight:1.08,color:"#131313"},Ze={fontSize:14,fontWeight:500,lineHeight:1.4,color:"#131313",margin:0},z={fontSize:12,fontWeight:400,lineHeight:1.4,color:"#404042",margin:0},D={fontSize:12,fontWeight:400,lineHeight:1.4,color:"#404042",textAlign:"right",margin:0},R={display:"flex",alignItems:"center",justifyContent:"space-between",padding:4,width:"100%"},et={display:"flex",alignItems:"center",gap:12,minHeight:40,padding:"16px 12px",borderRadius:8,border:"1px solid #f0f0f0",cursor:"pointer",background:"transparent",width:"100%",textAlign:"left"},it={...et,backgroundColor:"#f8f8f8"},dt={fontSize:16,fontWeight:600,lineHeight:1.08,color:"#131313",padding:"8px 0",margin:0},at={display:"flex",gap:12,alignItems:"center",paddingTop:12,paddingBottom:4,borderTop:"1px solid #f0f0f0"},ct={display:"flex",alignItems:"center",justifyContent:"center",gap:8,flex:1,padding:"8px 12px",borderRadius:8,border:"none",fontSize:12,fontWeight:500,lineHeight:1.33,cursor:"pointer"},H={display:"flex",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer",color:"#ae0000",fontSize:12,fontWeight:500,lineHeight:1.33,padding:0},U=[{code:"USD",name:"US Dollar",flag:"🇺🇸",amount:"$2,500.00 USD",group:"Fiat Currencies"},{code:"EUR",name:"Euro",flag:"🇪🇺",amount:"€1,720.00 EUR",amountUsd:"$1,857.60 USD",group:"Fiat Currencies"},{code:"GBP",name:"British Pound",flag:"🇬🇧",amount:"£1,000.00 GBP",amountUsd:"$1,275.00 USD",group:"Fiat Currencies"},{code:"USDT",name:"Tether",flag:"₮",amount:"2,500.00 USDT",amountUsd:"$2,500.00 USD",group:"Stablecoins"},{code:"USDC",name:"USD Coin",flag:"◎",amount:"1,200.00 USDC",amountUsd:"$1,200.00 USD",group:"Stablecoins"},{code:"ETH",name:"Ethereum",flag:"Ξ",amount:"1.25 ETH",amountUsd:"$4,687.50 USD",group:"Crypto"},{code:"SOL",name:"Solana",flag:"◎",amount:"50.00 SOL",amountUsd:"$7,500.00 USD",group:"Crypto"}],L=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape"],F=[{code:"ETH",name:"ETH - Ethereum",icon:"Ξ",time:"4 mins"},{code:"BNB",name:"BNB Smart Chain (BEP20)",icon:"⬡",time:"4 mins"},{code:"MATIC",name:"Polygon POS",icon:"⬟",time:"4 mins"}],pt=[{id:"1",label:"Jack's wallet",address:"0x893599fc371F88C1f72aEb86fCA84a3e76674Ae1",token:"USD1"},{id:"2",label:"Jack's wallet",address:"0x893599fc371F88C1f72aEb86fCA84a3e76674Ae1",token:"USD1"},{id:"3",label:"Jack's wallet",address:"0x893599fc371F88C1f72aEb86fCA84a3e76674Ae1",token:"USD1"}];function k({onClose:n}){return e.jsxs("div",{style:O,children:[e.jsx("button",{type:"button",className:"om-dropdown-item",onClick:n,children:"Edit"}),e.jsx("button",{type:"button",className:"om-dropdown-item",onClick:n,children:"Duplicate"}),e.jsx("button",{type:"button",className:"om-dropdown-item",onClick:n,children:"Archive"}),e.jsx("button",{type:"button",className:"om-dropdown-item",style:{color:"#e53935"},onClick:n,children:"Delete"})]})}function g({selected:n,left:o,title:s,subtitle:r,right:t,onClick:l}){return e.jsxs("button",{type:"button",className:rt("om-dropdown-item",n&&"om-dropdown-item--selected"),onClick:l,children:[o&&e.jsx("div",{style:{flexShrink:0},children:o}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("p",{style:Ze,children:s}),r&&e.jsx("p",{style:z,children:r})]}),t&&e.jsx("div",{style:{flexShrink:0,textAlign:"right"},children:t}),n!==void 0&&e.jsx("div",{style:{flexShrink:0,width:16},children:n&&e.jsx(y,{name:"check",size:16,color:"#131313"})})]})}function T({flag:n}){return e.jsx("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:24,height:24,fontSize:18,lineHeight:1,borderRadius:"50%"},children:n})}const Ot={title:"Components/Dropdown",component:i,argTypes:{trigger:{control:"radio",options:["click","hover"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},showArrow:{control:"boolean"},disabled:{control:"boolean"},offset:{control:"number"}},args:{trigger:"click",placement:"bottom-start",showArrow:!1,disabled:!1,offset:4,onOpenChange:M(),onOpen:M(),onClose:M()},tags:["autodocs"]},B={render:n=>e.jsx(i,{...n,content:e.jsx(k,{}),children:e.jsx(d,{children:"Actions"})})},I={render:n=>e.jsx(i,{...n,trigger:"hover",hoverDelay:{open:100,close:200},content:e.jsx(k,{}),children:e.jsx(d,{children:"Hover me"})})},E={render:n=>{const o=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,padding:120,justifyContent:"center"},children:o.map(s=>p.createElement(i,{...n,key:s,placement:s,content:e.jsx("div",{style:{padding:8,fontSize:13,whiteSpace:"nowrap"},children:s})},e.jsx(d,{size:"small",children:s})))})}},N={render:n=>{const[o,s]=p.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(i,{...n,open:o,onOpenChange:r=>{var t;s(r),(t=n.onOpenChange)==null||t.call(n,r)},content:e.jsx(k,{onClose:()=>s(!1)}),children:e.jsx(d,{children:"Controlled"})}),e.jsxs(d,{color:"grey",size:"small",onClick:()=>s(r=>!r),children:["Toggle: ",o?"Open":"Closed"]})]})}},A={render:n=>e.jsx(i,{...n,disabled:!0,content:e.jsx(k,{}),children:e.jsx(d,{disabled:!0,children:"Disabled"})})},W={render:n=>e.jsx(i,{...n,overlayClassName:"custom-dropdown-panel",overlayStyle:{minWidth:240},content:e.jsx(k,{}),children:e.jsx(d,{children:"Custom Style"})})},h={render:n=>{const[o,s]=p.useState(""),r=L.filter(t=>t.toLowerCase().includes(o.toLowerCase()));return e.jsx(i,{...n,overlayStyle:{minWidth:240},content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(Xe.Search,{size:"small",placeholder:"Search",value:o,onChange:s,allowClear:!0}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.length===0&&e.jsx("p",{style:{...z,padding:"8px 12px"},children:"No results found"}),r.map(t=>e.jsx(g,{title:t},t))]})]}),children:e.jsx(d,{children:"Search Items"})})}},f={render:n=>{const o=p.useMemo(()=>{const s=new Map;return U.forEach(r=>{const t=s.get(r.group)??[];t.push(r),s.set(r.group,t)}),s},[]);return e.jsx(i,{...n,overlayStyle:{minWidth:380},content:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:Array.from(o.entries()).map(([s,r])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:Ye,children:s}),r.map(t=>e.jsx(g,{left:e.jsx(T,{flag:t.flag}),title:t.code,subtitle:t.name,right:e.jsxs("p",{style:D,children:[t.amount,t.amountUsd&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),t.amountUsd]})]})},t.code))]},s))}),children:e.jsx(d,{children:"Currency List"})})}},x={render:n=>{const[o,s]=p.useState(["Apple","Cherry","Fig"]),r=t=>{s(l=>l.includes(t)?l.filter(u=>u!==t):[...l,t])};return e.jsx(i,{...n,overlayStyle:{minWidth:260},content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[o.length>0&&e.jsxs("div",{style:R,children:[e.jsxs("span",{style:{fontSize:14,fontWeight:500,color:"#131313"},children:[o.length," selected"]}),e.jsxs("button",{type:"button",style:H,onClick:()=>s([]),children:[e.jsx(y,{name:"cross",size:16,color:"#ae0000"}),"Clear all"]})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:L.map(t=>e.jsx(g,{title:t,selected:o.includes(t),onClick:()=>r(t)},t))})]}),children:e.jsx(d,{children:o.length>0?`${o.length} selected`:"Select items"})})}},S={render:n=>{const[o,s]=p.useState(["Banana","Date"]),r=t=>{s(l=>l.includes(t)?l.filter(u=>u!==t):[...l,t])};return e.jsx(i,{...n,overlayStyle:{minWidth:260},content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[o.length>0&&e.jsxs("div",{style:R,children:[e.jsxs("span",{style:{fontSize:14,fontWeight:500,color:"#131313"},children:[o.length," selected"]}),e.jsxs("button",{type:"button",style:H,onClick:()=>s([]),children:[e.jsx(y,{name:"cross",size:16,color:"#ae0000"}),"Clear all"]})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:2},children:L.map(t=>e.jsx("div",{style:{padding:"6px 12px",borderRadius:8,fontSize:14,backgroundColor:o.includes(t)?"#f8f8f8":"transparent"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer"},onClick:()=>r(t),children:[e.jsx(ot,{checked:o.includes(t),onChange:()=>r(t)}),e.jsx(st,{children:t})]})},t))})]}),children:e.jsx(d,{children:o.length>0?`${o.length} selected`:"Select items"})})}},v={render:n=>{const[o,s]=p.useState(""),[r,t]=p.useState(["USD","USDT","SOL"]),l=c=>{t(m=>m.includes(c)?m.filter(a=>a!==c):[...m,c])},u=U.filter(c=>c.code.toLowerCase().includes(o.toLowerCase())||c.name.toLowerCase().includes(o.toLowerCase())),tt=p.useMemo(()=>{const c=new Map;return u.forEach(m=>{const a=c.get(m.group)??[];a.push(m),c.set(m.group,a)}),c},[u]);return e.jsx(i,{...n,overlayStyle:{minWidth:420},content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[r.length>0&&e.jsxs("div",{style:R,children:[e.jsxs("span",{style:{fontSize:14,fontWeight:500,color:"#131313"},children:[r.length," selected"]}),e.jsxs("button",{type:"button",style:H,onClick:()=>t([]),children:[e.jsx(y,{name:"cross",size:16,color:"#ae0000"}),"Clear all"]})]}),e.jsx("div",{style:{padding:"8px 0"},children:e.jsx(Xe.Search,{size:"small",placeholder:"Search",value:o,onChange:s,allowClear:!0})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[Array.from(tt.entries()).map(([c,m])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:Ye,children:c}),m.map(a=>e.jsx(g,{selected:r.includes(a.code),left:e.jsx(T,{flag:a.flag}),title:a.code,subtitle:a.name,right:e.jsxs("p",{style:D,children:[a.amount,a.amountUsd&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),a.amountUsd]})]}),onClick:()=>l(a.code)},a.code))]},c)),u.length===0&&e.jsx("p",{style:{...z,padding:"8px 12px"},children:"No results found"})]})]}),children:e.jsx(d,{children:r.length>0?`${r.length} currencies selected`:"Select currencies"})})}},b={render:n=>{var r;const[o,s]=p.useState(null);return e.jsx(i,{...n,overlayStyle:{minWidth:380},content:({close:t})=>e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:U.slice(0,4).map(l=>e.jsx(g,{selected:o===l.code,left:e.jsx(T,{flag:l.flag}),title:l.code,subtitle:l.name,right:e.jsx("p",{style:D,children:l.amount}),onClick:()=>{s(l.code),t()}},l.code))}),children:e.jsx(d,{children:o?`${(r=U.find(t=>t.code===o))==null?void 0:r.flag} ${o}`:"Choose currency"})})}},w={render:n=>e.jsx(i,{...n,content:e.jsxs("div",{style:O,children:[e.jsx("button",{type:"button",className:"om-dropdown-item",children:"Profile"}),e.jsx(i,{placement:"right-start",content:e.jsxs("div",{style:O,children:[e.jsx("button",{type:"button",className:"om-dropdown-item",children:"English"}),e.jsx("button",{type:"button",className:"om-dropdown-item",children:"中文"}),e.jsx("button",{type:"button",className:"om-dropdown-item",children:"日本語"})]}),children:e.jsxs("button",{type:"button",className:"om-dropdown-item",style:{justifyContent:"space-between"},children:["Language",e.jsx(y,{name:"chevronRight",size:14,color:"#9fa3a3"})]})}),e.jsx("button",{type:"button",className:"om-dropdown-item",children:"Settings"}),e.jsx("button",{type:"button",className:"om-dropdown-item",style:{color:"#e53935"},children:"Sign out"})]}),children:e.jsx(d,{children:"Menu"})})},j={render:n=>{var r;const[o,s]=p.useState("BNB");return e.jsx(i,{...n,overlayStyle:{minWidth:420},content:({close:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(nt,{status:"warning",body:"Please only top up through supported networks, otherwise you may lose your funds",closable:!1}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:F.map(l=>e.jsx(g,{selected:o===l.code,left:e.jsx(T,{flag:l.icon}),title:l.code,subtitle:l.name,right:e.jsx("p",{style:D,children:l.time}),onClick:()=>{s(l.code),t()}},l.code))})]}),children:e.jsx(d,{children:o?`${(r=F.find(t=>t.code===o))==null?void 0:r.icon} ${o}`:"Select Network"})})}},C={render:n=>{const[o,s]=p.useState("1");return e.jsx(i,{...n,overlayStyle:{minWidth:420},content:({close:r})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx("p",{style:dt,children:"Address History"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:pt.map(t=>e.jsxs("button",{type:"button",style:o===t.id?it:et,onClick:()=>{s(t.id),r()},children:[e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("p",{style:Ze,children:t.label}),e.jsx("p",{style:{...z,wordBreak:"break-all"},children:t.address})]}),e.jsx("div",{style:{flexShrink:0,textAlign:"right"},children:e.jsx("p",{style:D,children:t.token})}),e.jsx("div",{style:{flexShrink:0,width:16},children:o===t.id&&e.jsx(y,{name:"check",size:16,color:"#131313"})})]},t.id))}),e.jsx("div",{style:at,children:e.jsxs("button",{type:"button",style:{...ct,backgroundColor:"#dde6f4",color:"#073387"},children:[e.jsx(y,{name:"add",size:16,color:"#073387"}),"New address"]})})]}),children:e.jsx(d,{children:"Select Address"})})}};var $,P,q;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} content={<MenuContent />}>
      <Button>Actions</Button>
    </Dropdown>
}`,...(q=(P=B.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var _,G,Q;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} trigger="hover" hoverDelay={{
    open: 100,
    close: 200
  }} content={<MenuContent />}>
      <Button>Hover me</Button>
    </Dropdown>
}`,...(Q=(G=I.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var J,K,V;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const placements: Placement[] = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'];
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      padding: 120,
      justifyContent: 'center'
    }}>
        {placements.map(placement => <Dropdown {...args} key={placement} placement={placement} content={<div style={{
        padding: 8,
        fontSize: 13,
        whiteSpace: 'nowrap'
      }}>
                {placement}
              </div>}>
            <Button size="small">{placement}</Button>
          </Dropdown>)}
      </div>;
  }
}`,...(V=(K=E.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var X,Y,Z;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <Dropdown {...args} open={open} onOpenChange={nextOpen => {
        setOpen(nextOpen);
        args.onOpenChange?.(nextOpen);
      }} content={<MenuContent onClose={() => setOpen(false)} />}>
          <Button>Controlled</Button>
        </Dropdown>
        <Button color="grey" size="small" onClick={() => setOpen(prev => !prev)}>
          Toggle: {open ? 'Open' : 'Closed'}
        </Button>
      </div>;
  }
}`,...(Z=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} disabled content={<MenuContent />}>
      <Button disabled>Disabled</Button>
    </Dropdown>
}`,...(ne=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,se,re;W.parameters={...W.parameters,docs:{...(oe=W.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} overlayClassName="custom-dropdown-panel" overlayStyle={{
    minWidth: 240
  }} content={<MenuContent />}>
      <Button>Custom Style</Button>
    </Dropdown>
}`,...(re=(se=W.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var le,ie,de,ae,ce;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => {
    const [query, setQuery] = useState('');
    const filtered = SIMPLE_ITEMS.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    return <Dropdown {...args} overlayStyle={{
      minWidth: 240
    }} content={<div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
            <Input.Search size="small" placeholder="Search" value={query} onChange={setQuery} allowClear />
            <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
              {filtered.length === 0 && <p style={{
          ...itemSubtitleStyle,
          padding: '8px 12px'
        }}>
                  No results found
                </p>}
              {filtered.map(item => <DropdownItem key={item} title={item} />)}
            </div>
          </div>}>
        <Button>Search Items</Button>
      </Dropdown>;
  }
}`,...(de=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:"Dropdown with a search input at the top of the panel for filtering items.",...(ce=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ce.description}}};var pe,me,ue,ye,ge;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => {
    const groups = useMemo(() => {
      const map = new Map<string, CurrencyItem[]>();
      CURRENCIES.forEach(c => {
        const list = map.get(c.group) ?? [];
        list.push(c);
        map.set(c.group, list);
      });
      return map;
    }, []);
    return <Dropdown {...args} overlayStyle={{
      minWidth: 380
    }} content={<div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
            {Array.from(groups.entries()).map(([group, items]) => <div key={group} style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
                <div style={groupHeaderStyle}>{group}</div>
                {items.map(item => <DropdownItem key={item.code} left={<CurrencyIcon flag={item.flag} />} title={item.code} subtitle={item.name} right={<p style={itemAmountStyle}>
                        {item.amount}
                        {item.amountUsd && <>
                            <br />
                            {item.amountUsd}
                          </>}
                      </p>} />)}
              </div>)}
          </div>}>
        <Button>Currency List</Button>
      </Dropdown>;
  }
}`,...(ue=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ue.source},description:{story:"Grouped dropdown items under section headers, similar to the Figma design.",...(ge=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:ge.description}}};var he,fe,xe,Se,ve;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string[]>(['Apple', 'Cherry', 'Fig']);
    const toggle = (item: string) => {
      setSelected(prev => prev.includes(item) ? prev.filter(v => v !== item) : [...prev, item]);
    };
    return <Dropdown {...args} overlayStyle={{
      minWidth: 260
    }} content={<div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
            {selected.length > 0 && <div style={selectedBarStyle}>
                <span style={{
          fontSize: 14,
          fontWeight: 500,
          color: '#131313'
        }}>
                  {selected.length} selected
                </span>
                <button type="button" style={clearAllBtnStyle} onClick={() => setSelected([])}>
                  <Icons name="cross" size={16} color="#ae0000" />
                  Clear all
                </button>
              </div>}
            <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
              {SIMPLE_ITEMS.map(item => <DropdownItem key={item} title={item} selected={selected.includes(item)} onClick={() => toggle(item)} />)}
            </div>
          </div>}>
        <Button>
          {selected.length > 0 ? \`\${selected.length} selected\` : 'Select items'}
        </Button>
      </Dropdown>;
  }
}`,...(xe=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:xe.source},description:{story:'Multi-select dropdown with a "N selected" header and "Clear all" action.',...(ve=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:ve.description}}};var be,we,je,Ce,De;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string[]>(['Banana', 'Date']);
    const toggle = (item: string) => {
      setSelected(prev => prev.includes(item) ? prev.filter(v => v !== item) : [...prev, item]);
    };
    return <Dropdown {...args} overlayStyle={{
      minWidth: 260
    }} content={<div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
            {selected.length > 0 && <div style={selectedBarStyle}>
                <span style={{
          fontSize: 14,
          fontWeight: 500,
          color: '#131313'
        }}>
                  {selected.length} selected
                </span>
                <button type="button" style={clearAllBtnStyle} onClick={() => setSelected([])}>
                  <Icons name="cross" size={16} color="#ae0000" />
                  Clear all
                </button>
              </div>}
            <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
              {SIMPLE_ITEMS.map(item => <div key={item} style={{
          padding: '6px 12px',
          borderRadius: 8,
          fontSize: 14,
          backgroundColor: selected.includes(item) ? '#f8f8f8' : 'transparent'
        }}>
                  <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            cursor: 'pointer'
          }} onClick={() => toggle(item)}>
                   <Checkbox checked={selected.includes(item)} onChange={() => toggle(item)} />
                    <TypographyBody>{item}</TypographyBody>
                  </div>

                </div>)}
            </div>
          </div>}>
        <Button>
          {selected.length > 0 ? \`\${selected.length} selected\` : 'Select items'}
        </Button>
      </Dropdown>;
  }
}`,...(je=(we=S.parameters)==null?void 0:we.docs)==null?void 0:je.source},description:{story:"Multi-select dropdown with Checkbox for each item.",...(De=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:De.description}}};var ke,Be,Ie,Ee,Ne;v.parameters={...v.parameters,docs:{...(ke=v.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState<string[]>(['USD', 'USDT', 'SOL']);
    const toggle = (code: string) => {
      setSelected(prev => prev.includes(code) ? prev.filter(v => v !== code) : [...prev, code]);
    };
    const filtered = CURRENCIES.filter(c => c.code.toLowerCase().includes(query.toLowerCase()) || c.name.toLowerCase().includes(query.toLowerCase()));
    const groups = useMemo(() => {
      const map = new Map<string, CurrencyItem[]>();
      filtered.forEach(c => {
        const list = map.get(c.group) ?? [];
        list.push(c);
        map.set(c.group, list);
      });
      return map;
    }, [filtered]);
    return <Dropdown {...args} overlayStyle={{
      minWidth: 420
    }} content={<div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
            {/* Selected bar */}
            {selected.length > 0 && <div style={selectedBarStyle}>
                <span style={{
          fontSize: 14,
          fontWeight: 500,
          color: '#131313'
        }}>
                  {selected.length} selected
                </span>
                <button type="button" style={clearAllBtnStyle} onClick={() => setSelected([])}>
                  <Icons name="cross" size={16} color="#ae0000" />
                  Clear all
                </button>
              </div>}

            {/* Search */}
            <div style={{
        padding: '8px 0'
      }}>
              <Input.Search size="small" placeholder="Search" value={query} onChange={setQuery} allowClear />
            </div>

            {/* Grouped items */}
            <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
              {Array.from(groups.entries()).map(([group, items]) => <div key={group} style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
                  <div style={groupHeaderStyle}>{group}</div>
                  {items.map(item => <DropdownItem key={item.code} selected={selected.includes(item.code)} left={<CurrencyIcon flag={item.flag} />} title={item.code} subtitle={item.name} right={<p style={itemAmountStyle}>
                          {item.amount}
                          {item.amountUsd && <>
                              <br />
                              {item.amountUsd}
                            </>}
                        </p>} onClick={() => toggle(item.code)} />)}
                </div>)}
              {filtered.length === 0 && <p style={{
          ...itemSubtitleStyle,
          padding: '8px 12px'
        }}>
                  No results found
                </p>}
            </div>
          </div>}>
        <Button>
          {selected.length > 0 ? \`\${selected.length} currencies selected\` : 'Select currencies'}
        </Button>
      </Dropdown>;
  }
}`,...(Ie=(Be=v.parameters)==null?void 0:Be.docs)==null?void 0:Ie.source},description:{story:`Full-featured dropdown matching the Figma design:
search + grouped items + multi-select + rich content (icons, amounts, checkmarks) + clear all.`,...(Ne=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.description}}};var Ae,We,Ue,ze,Te;b.parameters={...b.parameters,docs:{...(Ae=b.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<string | null>(null);
    return <Dropdown {...args} overlayStyle={{
      minWidth: 380
    }} content={({
      close
    }) => <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
            {CURRENCIES.slice(0, 4).map(item => <DropdownItem key={item.code} selected={selected === item.code} left={<CurrencyIcon flag={item.flag} />} title={item.code} subtitle={item.name} right={<p style={itemAmountStyle}>{item.amount}</p>} onClick={() => {
        setSelected(item.code);
        close();
      }} />)}
          </div>}>
        <Button>
          {selected ? \`\${CURRENCIES.find(c => c.code === selected)?.flag} \${selected}\` : 'Choose currency'}
        </Button>
      </Dropdown>;
  }
}`,...(Ue=(We=b.parameters)==null?void 0:We.docs)==null?void 0:Ue.source},description:{story:"Dropdown with single-select behavior — selecting an item closes the panel.",...(Te=(ze=b.parameters)==null?void 0:ze.docs)==null?void 0:Te.description}}};var Me,Oe,Re,He,Le;w.parameters={...w.parameters,docs:{...(Me=w.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} content={<div style={panelContentStyle}>
          <button type="button" className="om-dropdown-item">
            Profile
          </button>
          <Dropdown placement="right-start" content={<div style={panelContentStyle}>
                <button type="button" className="om-dropdown-item">
                  English
                </button>
                <button type="button" className="om-dropdown-item">
                  中文
                </button>
                <button type="button" className="om-dropdown-item">
                  日本語
                </button>
              </div>}>
            <button type="button" className="om-dropdown-item" style={{
        justifyContent: 'space-between'
      }}>
              Language
              <Icons name="chevronRight" size={14} color="#9fa3a3" />
            </button>
          </Dropdown>
          <button type="button" className="om-dropdown-item">
            Settings
          </button>
          <button type="button" className="om-dropdown-item" style={{
      color: '#e53935'
    }}>
            Sign out
          </button>
        </div>}>
      <Button>Menu</Button>
    </Dropdown>
}`,...(Re=(Oe=w.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source},description:{story:"Nested dropdown — a dropdown item opens another dropdown.",...(Le=(He=w.parameters)==null?void 0:He.docs)==null?void 0:Le.description}}};var Fe,$e,Pe,qe,_e;j.parameters={...j.parameters,docs:{...(Fe=j.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState('BNB');
    return <Dropdown {...args} overlayStyle={{
      minWidth: 420
    }} content={({
      close
    }) => <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
            <Alert status="warning" body="Please only top up through supported networks, otherwise you may lose your funds" closable={false} />
            <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
              {NETWORKS.map(network => <DropdownItem key={network.code} selected={selected === network.code} left={<CurrencyIcon flag={network.icon} />} title={network.code} subtitle={network.name} right={<p style={itemAmountStyle}>{network.time}</p>} onClick={() => {
          setSelected(network.code);
          close();
        }} />)}
            </div>
          </div>}>
        <Button>
          {selected ? \`\${NETWORKS.find(n => n.code === selected)?.icon} \${selected}\` : 'Select Network'}
        </Button>
      </Dropdown>;
  }
}`,...(Pe=($e=j.parameters)==null?void 0:$e.docs)==null?void 0:Pe.source},description:{story:`Network selector dropdown with a warning alert banner at the top.
Matches the Figma design: Alert + selectable network items with icon, name, and estimated time.`,...(_e=(qe=j.parameters)==null?void 0:qe.docs)==null?void 0:_e.description}}};var Ge,Qe,Je,Ke,Ve;C.parameters={...C.parameters,docs:{...(Ge=C.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState('1');
    return <Dropdown {...args} overlayStyle={{
      minWidth: 420
    }} content={({
      close
    }) => <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
            {/* Title */}
            <p style={panelTitleStyle}>Address History</p>

            {/* Address list */}
            <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
              {ADDRESSES.map(addr => <button key={addr.id} type="button" style={selected === addr.id ? addressItemSelectedStyle : addressItemStyle} onClick={() => {
          setSelected(addr.id);
          close();
        }}>
                  <div style={{
            flex: 1,
            minWidth: 0
          }}>
                    <p style={itemTitleStyle}>{addr.label}</p>
                    <p style={{
              ...itemSubtitleStyle,
              wordBreak: 'break-all'
            }}>
                      {addr.address}
                    </p>
                  </div>
                  <div style={{
            flexShrink: 0,
            textAlign: 'right'
          }}>
                    <p style={itemAmountStyle}>{addr.token}</p>
                  </div>
                  <div style={{
            flexShrink: 0,
            width: 16
          }}>
                    {selected === addr.id && <Icons name="check" size={16} color="#131313" />}
                  </div>
                </button>)}
            </div>

            {/* Footer action */}
            <div style={panelFooterStyle}>
              <button type="button" style={{
          ...footerBtnStyle,
          backgroundColor: '#dde6f4',
          color: '#073387'
        }}>
                <Icons name="add" size={16} color="#073387" />
                New address
              </button>
            </div>
          </div>}>
        <Button>Select Address</Button>
      </Dropdown>;
  }
}`,...(Je=(Qe=C.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source},description:{story:`Address history dropdown with a title header, bordered address items, and a footer action button.
Matches the Figma design: title + address list with wallet name, address, token tag + "New address" button.`,...(Ve=(Ke=C.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.description}}};const Rt=["Default","HoverTrigger","Placements","Controlled","Disabled","CustomStyling","WithSearch","GroupedItems","MultiSelect","MultiSelectWithCheckbox","FullFeatured","SingleSelect","Nested","NetworkSelector","AddressHistory"];export{C as AddressHistory,N as Controlled,W as CustomStyling,B as Default,A as Disabled,v as FullFeatured,f as GroupedItems,I as HoverTrigger,x as MultiSelect,S as MultiSelectWithCheckbox,w as Nested,j as NetworkSelector,E as Placements,b as SingleSelect,h as WithSearch,Rt as __namedExportsOrder,Ot as default};
