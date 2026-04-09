import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-CP2yOfOm.js";import{f as H}from"./index-DCiaR2iG.js";import{A as dt}from"./Alert-kJgR9Vb0.js";import{f as i}from"./Button-xKWQamn_.js";import{C as ct}from"./index-BKBuw4Z7.js";import{I as g}from"./Icons-C17k0gNH.js";import{I as nt}from"./Trade-L7ppztKj.js";import{T as at}from"./Trigger-Cm0Ch4Oc.js";/* empty css                */import"./Dropdown-l0sNRNKZ.js";import"./Typography-COcdYQQO.js";/* empty css               */import"./classnames-0AlMal0H.js";import"./Spinner-C9s5r2Mu.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";import"./Skeleton-CueNxn16.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";import"./ResizeObserver-DbXOvenx.js";import"./clipboard-C7s2bcmm.js";import"./iframe-C8OcTo_O.js";import"./Tooltip-CsTd8WLo.js";const d=({trigger:o="click",role:n="dialog",...r})=>e.jsx(at,{trigger:o,role:n,...r});d.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"}]},description:"Trigger mode",defaultValue:{value:"'click'",computed:!1}},role:{defaultValue:{value:"'dialog'",computed:!1},required:!1}},composes:["Omit"]};const F={display:"flex",flexDirection:"column",gap:4,minWidth:160},u={display:"flex",alignItems:"center",gap:8,padding:"8px 12px",fontSize:14,lineHeight:"20px",color:"#131313",background:"transparent",border:"none",borderRadius:8,cursor:"pointer",textAlign:"left",width:"100%"},ot={display:"flex",alignItems:"center",gap:12,minHeight:40,padding:"8px 12px",borderRadius:8,cursor:"pointer",border:"none",background:"transparent",width:"100%",textAlign:"left"},pt={...ot,backgroundColor:"#f8f8f8"},rt={padding:"8px 0",fontSize:16,fontWeight:600,lineHeight:1.08,color:"#131313"},st={fontSize:14,fontWeight:500,lineHeight:1.4,color:"#131313",margin:0},N={fontSize:12,fontWeight:400,lineHeight:1.4,color:"#404042",margin:0},k={fontSize:12,fontWeight:400,lineHeight:1.4,color:"#404042",textAlign:"right",margin:0},O={display:"flex",alignItems:"center",justifyContent:"space-between",padding:4,width:"100%"},lt={display:"flex",alignItems:"center",gap:12,minHeight:40,padding:"16px 12px",borderRadius:8,border:"1px solid #f0f0f0",cursor:"pointer",background:"transparent",width:"100%",textAlign:"left"},ut={...lt,backgroundColor:"#f8f8f8"},mt={fontSize:16,fontWeight:600,lineHeight:1.08,color:"#131313",padding:"8px 0",margin:0},yt={display:"flex",gap:12,alignItems:"center",paddingTop:12,paddingBottom:4,borderTop:"1px solid #f0f0f0"},gt={display:"flex",alignItems:"center",justifyContent:"center",gap:8,flex:1,padding:"8px 12px",borderRadius:8,border:"none",fontSize:12,fontWeight:500,lineHeight:1.33,cursor:"pointer"},L={display:"flex",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer",color:"#ae0000",fontSize:12,fontWeight:500,lineHeight:1.33,padding:0},T=[{code:"USD",name:"US Dollar",flag:"🇺🇸",amount:"$2,500.00 USD",group:"Fiat Currencies"},{code:"EUR",name:"Euro",flag:"🇪🇺",amount:"€1,720.00 EUR",amountUsd:"$1,857.60 USD",group:"Fiat Currencies"},{code:"GBP",name:"British Pound",flag:"🇬🇧",amount:"£1,000.00 GBP",amountUsd:"$1,275.00 USD",group:"Fiat Currencies"},{code:"USDT",name:"Tether",flag:"₮",amount:"2,500.00 USDT",amountUsd:"$2,500.00 USD",group:"Stablecoins"},{code:"USDC",name:"USD Coin",flag:"◎",amount:"1,200.00 USDC",amountUsd:"$1,200.00 USD",group:"Stablecoins"},{code:"ETH",name:"Ethereum",flag:"Ξ",amount:"1.25 ETH",amountUsd:"$4,687.50 USD",group:"Crypto"},{code:"SOL",name:"Solana",flag:"◎",amount:"50.00 SOL",amountUsd:"$7,500.00 USD",group:"Crypto"}],$=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape"],P=[{code:"ETH",name:"ETH - Ethereum",icon:"Ξ",time:"4 mins"},{code:"BNB",name:"BNB Smart Chain (BEP20)",icon:"⬡",time:"4 mins"},{code:"MATIC",name:"Polygon POS",icon:"⬟",time:"4 mins"}],ht=[{id:"1",label:"Jack's wallet",address:"0x893599fc371F88C1f72aEb86fCA84a3e76674Ae1",token:"USD1"},{id:"2",label:"Jack's wallet",address:"0x893599fc371F88C1f72aEb86fCA84a3e76674Ae1",token:"USD1"},{id:"3",label:"Jack's wallet",address:"0x893599fc371F88C1f72aEb86fCA84a3e76674Ae1",token:"USD1"}];function I({onClose:o}){return e.jsxs("div",{style:F,children:[e.jsx("button",{type:"button",style:u,onClick:o,children:"Edit"}),e.jsx("button",{type:"button",style:u,onClick:o,children:"Duplicate"}),e.jsx("button",{type:"button",style:u,onClick:o,children:"Archive"}),e.jsx("button",{type:"button",style:{...u,color:"#e53935"},onClick:o,children:"Delete"})]})}function h({selected:o,left:n,title:r,subtitle:s,right:t,onClick:l}){return e.jsxs("button",{type:"button",style:o?pt:ot,onClick:l,children:[n&&e.jsx("div",{style:{flexShrink:0},children:n}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("p",{style:st,children:r}),s&&e.jsx("p",{style:N,children:s})]}),t&&e.jsx("div",{style:{flex:1,textAlign:"right"},children:t}),o&&e.jsx(g,{name:"check",size:16,color:"#131313"})]})}function R({flag:o}){return e.jsx("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:24,height:24,fontSize:18,lineHeight:1,borderRadius:"50%"},children:o})}const $t={title:"Components/Dropdown",component:d,argTypes:{trigger:{control:"radio",options:["click","hover"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},showArrow:{control:"boolean"},disabled:{control:"boolean"},offset:{control:"number"}},args:{trigger:"click",placement:"bottom-start",showArrow:!1,disabled:!1,offset:4,onOpenChange:H(),onOpen:H(),onClose:H()},tags:["autodocs"]},B={render:o=>e.jsx(d,{...o,content:e.jsx(I,{}),children:e.jsx(i,{children:"Actions"})})},A={render:o=>e.jsx(d,{...o,trigger:"hover",hoverDelay:{open:100,close:200},content:e.jsx(I,{}),children:e.jsx(i,{children:"Hover me"})})},E={render:o=>{const n=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:12,padding:120,justifyContent:"center"},children:n.map(r=>p.createElement(d,{...o,key:r,placement:r,content:e.jsx("div",{style:{padding:8,fontSize:13,whiteSpace:"nowrap"},children:r})},e.jsx(i,{size:"small",children:r})))})}},W={render:o=>{const[n,r]=p.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(d,{...o,open:n,onOpenChange:s=>{var t;r(s),(t=o.onOpenChange)==null||t.call(o,s)},content:e.jsx(I,{onClose:()=>r(!1)}),children:e.jsx(i,{children:"Controlled"})}),e.jsxs(i,{color:"grey",size:"small",onClick:()=>r(s=>!s),children:["Toggle: ",n?"Open":"Closed"]})]})}},z={render:o=>e.jsx(d,{...o,content:({close:n})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,minWidth:200},children:[e.jsx("p",{style:{margin:0,fontSize:14,lineHeight:"20px"},children:"Are you sure you want to delete this item?"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{size:"small",color:"grey",onClick:n,children:"Cancel"}),e.jsx(i,{size:"small",color:"red",onClick:n,children:"Delete"})]})]}),children:e.jsx(i,{color:"red",children:"Delete Item"})})},U={render:o=>e.jsx(d,{...o,disabled:!0,content:e.jsx(I,{}),children:e.jsx(i,{disabled:!0,children:"Disabled"})})},M={render:o=>e.jsx(d,{...o,overlayClassName:"custom-dropdown-panel",overlayStyle:{minWidth:240},content:e.jsx(I,{}),children:e.jsx(i,{children:"Custom Style"})})},f={render:o=>{const[n,r]=p.useState(""),s=$.filter(t=>t.toLowerCase().includes(n.toLowerCase()));return e.jsx(d,{...o,overlayStyle:{minWidth:240},content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(nt.Search,{size:"small",placeholder:"Search",value:n,onChange:r,allowClear:!0}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[s.length===0&&e.jsx("p",{style:{...N,padding:"8px 12px"},children:"No results found"}),s.map(t=>e.jsx(h,{title:t},t))]})]}),children:e.jsx(i,{children:"Search Items"})})}},x={render:o=>{const n=p.useMemo(()=>{const r=new Map;return T.forEach(s=>{const t=r.get(s.group)??[];t.push(s),r.set(s.group,t)}),r},[]);return e.jsx(d,{...o,overlayStyle:{minWidth:380},content:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:Array.from(n.entries()).map(([r,s])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:rt,children:r}),s.map(t=>e.jsx(h,{left:e.jsx(R,{flag:t.flag}),title:t.code,subtitle:t.name,right:e.jsxs("p",{style:k,children:[t.amount,t.amountUsd&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),t.amountUsd]})]})},t.code))]},r))}),children:e.jsx(i,{children:"Currency List"})})}},S={render:o=>{const[n,r]=p.useState(["Apple","Cherry","Fig"]),s=t=>{r(l=>l.includes(t)?l.filter(y=>y!==t):[...l,t])};return e.jsx(d,{...o,overlayStyle:{minWidth:260},content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[n.length>0&&e.jsxs("div",{style:O,children:[e.jsxs("span",{style:{fontSize:14,fontWeight:500,color:"#131313"},children:[n.length," selected"]}),e.jsxs("button",{type:"button",style:L,onClick:()=>r([]),children:[e.jsx(g,{name:"cross",size:16,color:"#ae0000"}),"Clear all"]})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:$.map(t=>e.jsx(h,{title:t,selected:n.includes(t),onClick:()=>s(t)},t))})]}),children:e.jsx(i,{children:n.length>0?`${n.length} selected`:"Select items"})})}},b={render:o=>{const[n,r]=p.useState(["Banana","Date"]),s=t=>{r(l=>l.includes(t)?l.filter(y=>y!==t):[...l,t])};return e.jsx(d,{...o,overlayStyle:{minWidth:260},content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[n.length>0&&e.jsxs("div",{style:O,children:[e.jsxs("span",{style:{fontSize:14,fontWeight:500,color:"#131313"},children:[n.length," selected"]}),e.jsxs("button",{type:"button",style:L,onClick:()=>r([]),children:[e.jsx(g,{name:"cross",size:16,color:"#ae0000"}),"Clear all"]})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:2},children:$.map(t=>e.jsx("div",{style:{padding:"6px 12px",borderRadius:8,backgroundColor:n.includes(t)?"#f8f8f8":"transparent"},children:e.jsx(ct,{label:t,checked:n.includes(t),onChange:()=>s(t)})},t))})]}),children:e.jsx(i,{children:n.length>0?`${n.length} selected`:"Select items"})})}},v={render:o=>{const[n,r]=p.useState(""),[s,t]=p.useState(["USD","USDT","SOL"]),l=a=>{t(m=>m.includes(a)?m.filter(c=>c!==a):[...m,a])},y=T.filter(a=>a.code.toLowerCase().includes(n.toLowerCase())||a.name.toLowerCase().includes(n.toLowerCase())),it=p.useMemo(()=>{const a=new Map;return y.forEach(m=>{const c=a.get(m.group)??[];c.push(m),a.set(m.group,c)}),a},[y]);return e.jsx(d,{...o,overlayStyle:{minWidth:420},content:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[s.length>0&&e.jsxs("div",{style:O,children:[e.jsxs("span",{style:{fontSize:14,fontWeight:500,color:"#131313"},children:[s.length," selected"]}),e.jsxs("button",{type:"button",style:L,onClick:()=>t([]),children:[e.jsx(g,{name:"cross",size:16,color:"#ae0000"}),"Clear all"]})]}),e.jsx("div",{style:{padding:"8px 0"},children:e.jsx(nt.Search,{size:"small",placeholder:"Search",value:n,onChange:r,allowClear:!0})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[Array.from(it.entries()).map(([a,m])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:rt,children:a}),m.map(c=>e.jsx(h,{selected:s.includes(c.code),left:e.jsx(R,{flag:c.flag}),title:c.code,subtitle:c.name,right:e.jsxs("p",{style:k,children:[c.amount,c.amountUsd&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),c.amountUsd]})]}),onClick:()=>l(c.code)},c.code))]},a)),y.length===0&&e.jsx("p",{style:{...N,padding:"8px 12px"},children:"No results found"})]})]}),children:e.jsx(i,{children:s.length>0?`${s.length} currencies selected`:"Select currencies"})})}},j={render:o=>{var s;const[n,r]=p.useState(null);return e.jsx(d,{...o,overlayStyle:{minWidth:380},content:({close:t})=>e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:T.slice(0,4).map(l=>e.jsx(h,{selected:n===l.code,left:e.jsx(R,{flag:l.flag}),title:l.code,subtitle:l.name,right:e.jsx("p",{style:k,children:l.amount}),onClick:()=>{r(l.code),t()}},l.code))}),children:e.jsx(i,{children:n?`${(s=T.find(t=>t.code===n))==null?void 0:s.flag} ${n}`:"Choose currency"})})}},C={render:o=>e.jsx(d,{...o,content:e.jsxs("div",{style:F,children:[e.jsx("button",{type:"button",style:u,children:"Profile"}),e.jsx(d,{placement:"right-start",content:e.jsxs("div",{style:F,children:[e.jsx("button",{type:"button",style:u,children:"English"}),e.jsx("button",{type:"button",style:u,children:"中文"}),e.jsx("button",{type:"button",style:u,children:"日本語"})]}),children:e.jsxs("button",{type:"button",style:{...u,justifyContent:"space-between"},children:["Language",e.jsx(g,{name:"chevronRight",size:14,color:"#9fa3a3"})]})}),e.jsx("button",{type:"button",style:u,children:"Settings"}),e.jsx("button",{type:"button",style:{...u,color:"#e53935"},children:"Sign out"})]}),children:e.jsx(i,{children:"Menu"})})},w={render:o=>{var s;const[n,r]=p.useState("BNB");return e.jsx(d,{...o,overlayStyle:{minWidth:420},content:({close:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(dt,{status:"warning",body:"Please only top up through supported networks, otherwise you may lose your funds",closable:!1}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:P.map(l=>e.jsx(h,{selected:n===l.code,left:e.jsx(R,{flag:l.icon}),title:l.code,subtitle:l.name,right:e.jsx("p",{style:k,children:l.time}),onClick:()=>{r(l.code),t()}},l.code))})]}),children:e.jsx(i,{children:n?`${(s=P.find(t=>t.code===n))==null?void 0:s.icon} ${n}`:"Select Network"})})}},D={render:o=>{const[n,r]=p.useState("1");return e.jsx(d,{...o,overlayStyle:{minWidth:420},content:({close:s})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsx("p",{style:mt,children:"Address History"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:ht.map(t=>e.jsxs("button",{type:"button",style:n===t.id?ut:lt,onClick:()=>{r(t.id),s()},children:[e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("p",{style:st,children:t.label}),e.jsx("p",{style:{...N,wordBreak:"break-all"},children:t.address})]}),e.jsx("div",{style:{flexShrink:0,textAlign:"right"},children:e.jsx("p",{style:k,children:t.token})}),n===t.id&&e.jsx(g,{name:"check",size:16,color:"#131313"})]},t.id))}),e.jsx("div",{style:yt,children:e.jsxs("button",{type:"button",style:{...gt,backgroundColor:"#dde6f4",color:"#073387"},children:[e.jsx(g,{name:"add",size:16,color:"#073387"}),"New address"]})})]}),children:e.jsx(i,{children:"Select Address"})})}};var q,_,G;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} content={<MenuContent />}>
      <Button>Actions</Button>
    </Dropdown>
}`,...(G=(_=B.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var Q,J,K;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} trigger="hover" hoverDelay={{
    open: 100,
    close: 200
  }} content={<MenuContent />}>
      <Button>Hover me</Button>
    </Dropdown>
}`,...(K=(J=A.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var V,X,Y;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;W.parameters={...W.parameters,docs:{...(Z=W.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=W.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,re;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} content={({
    close
  }) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    minWidth: 200
  }}>
          <p style={{
      margin: 0,
      fontSize: 14,
      lineHeight: '20px'
    }}>
            Are you sure you want to delete this item?
          </p>
          <div style={{
      display: 'flex',
      gap: 8
    }}>
            <Button size="small" color="grey" onClick={close}>
              Cancel
            </Button>
            <Button size="small" color="red" onClick={close}>
              Delete
            </Button>
          </div>
        </div>}>
      <Button color="red">Delete Item</Button>
    </Dropdown>
}`,...(re=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,le,ie;U.parameters={...U.parameters,docs:{...(se=U.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} disabled content={<MenuContent />}>
      <Button disabled>Disabled</Button>
    </Dropdown>
}`,...(ie=(le=U.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,ae;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} overlayClassName="custom-dropdown-panel" overlayStyle={{
    minWidth: 240
  }} content={<MenuContent />}>
      <Button>Custom Style</Button>
    </Dropdown>
}`,...(ae=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var pe,ue,me,ye,ge;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"Dropdown with a search input at the top of the panel for filtering items.",...(ge=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:ge.description}}};var he,fe,xe,Se,be;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:xe.source},description:{story:"Grouped dropdown items under section headers, similar to the Figma design.",...(be=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:be.description}}};var ve,je,Ce,we,De;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ce=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Ce.source},description:{story:'Multi-select dropdown with a "N selected" header and "Clear all" action.',...(De=(we=S.parameters)==null?void 0:we.docs)==null?void 0:De.description}}};var ke,Ie,Be,Ae,Ee;b.parameters={...b.parameters,docs:{...(ke=b.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
          backgroundColor: selected.includes(item) ? '#f8f8f8' : 'transparent'
        }}>
                  <Checkbox label={item} checked={selected.includes(item)} onChange={() => toggle(item)} />
                </div>)}
            </div>
          </div>}>
        <Button>
          {selected.length > 0 ? \`\${selected.length} selected\` : 'Select items'}
        </Button>
      </Dropdown>;
  }
}`,...(Be=(Ie=b.parameters)==null?void 0:Ie.docs)==null?void 0:Be.source},description:{story:"Multi-select dropdown with Checkbox for each item.",...(Ee=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.description}}};var We,ze,Ue,Me,Te;v.parameters={...v.parameters,docs:{...(We=v.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ue=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:Ue.source},description:{story:`Full-featured dropdown matching the Figma design:
search + grouped items + multi-select + rich content (icons, amounts, checkmarks) + clear all.`,...(Te=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:Te.description}}};var Ne,Re,He,Fe,Oe;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(He=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:He.source},description:{story:"Dropdown with single-select behavior — selecting an item closes the panel.",...(Oe=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.description}}};var Le,$e,Pe,qe,_e;C.parameters={...C.parameters,docs:{...(Le=C.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: args => <Dropdown {...args} content={<div style={panelContentStyle}>
          <button type="button" style={menuItemStyle}>
            Profile
          </button>
          <Dropdown placement="right-start" content={<div style={panelContentStyle}>
                <button type="button" style={menuItemStyle}>
                  English
                </button>
                <button type="button" style={menuItemStyle}>
                  中文
                </button>
                <button type="button" style={menuItemStyle}>
                  日本語
                </button>
              </div>}>
            <button type="button" style={{
        ...menuItemStyle,
        justifyContent: 'space-between'
      }}>
              Language
              <Icons name="chevronRight" size={14} color="#9fa3a3" />
            </button>
          </Dropdown>
          <button type="button" style={menuItemStyle}>
            Settings
          </button>
          <button type="button" style={{
      ...menuItemStyle,
      color: '#e53935'
    }}>
            Sign out
          </button>
        </div>}>
      <Button>Menu</Button>
    </Dropdown>
}`,...(Pe=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:Pe.source},description:{story:"Nested dropdown — a dropdown item opens another dropdown.",...(_e=(qe=C.parameters)==null?void 0:qe.docs)==null?void 0:_e.description}}};var Ge,Qe,Je,Ke,Ve;w.parameters={...w.parameters,docs:{...(Ge=w.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Je=(Qe=w.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source},description:{story:`Network selector dropdown with a warning alert banner at the top.
Matches the Figma design: Alert + selectable network items with icon, name, and estimated time.`,...(Ve=(Ke=w.parameters)==null?void 0:Ke.docs)==null?void 0:Ve.description}}};var Xe,Ye,Ze,et,tt;D.parameters={...D.parameters,docs:{...(Xe=D.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
                  {selected === addr.id && <Icons name="check" size={16} color="#131313" />}
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
}`,...(Ze=(Ye=D.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source},description:{story:`Address history dropdown with a title header, bordered address items, and a footer action button.
Matches the Figma design: title + address list with wallet name, address, token tag + "New address" button.`,...(tt=(et=D.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};const Pt=["Default","HoverTrigger","Placements","Controlled","RenderFunction","Disabled","CustomStyling","WithSearch","GroupedItems","MultiSelect","MultiSelectWithCheckbox","FullFeatured","SingleSelect","Nested","NetworkSelector","AddressHistory"];export{D as AddressHistory,W as Controlled,M as CustomStyling,B as Default,U as Disabled,v as FullFeatured,x as GroupedItems,A as HoverTrigger,S as MultiSelect,b as MultiSelectWithCheckbox,C as Nested,w as NetworkSelector,E as Placements,z as RenderFunction,j as SingleSelect,f as WithSearch,Pt as __namedExportsOrder,$t as default};
