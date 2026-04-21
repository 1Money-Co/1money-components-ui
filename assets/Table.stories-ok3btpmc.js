import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as F}from"./index-CP2yOfOm.js";import{B as c}from"./Button-ioFfVmwf.js";import{I as i}from"./Icons-BarT8jPS.js";import{T as g}from"./Tag-BzsEu9Lu.js";import{b as n,T as u,c as Ie}from"./Typography-kZAj5pyU.js";import{T as o,V as Ne}from"./VirtualTable-BJFqdAxQ.js";/* empty css               */import"./index-CB9u7ZBD.js";/* empty css                *//* empty css                 */import"./Empty-BjRfR0Er.js";import"./Pagination-CpUxOUZG.js";import"./RadioGroup-DYZrpHnX.js";import"./Spinner-COY5nkbJ.js";import"./iframe-Bcm0CXsn.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-_M0HKnWf.js";import"./index-D1q9exoj.js";import"./VirtualList-DGdvWJRn.js";const Fe=["fill","stroke"],Ee=["large","small"],he={display:"flex",flexDirection:"column",gap:32},I={marginBottom:8},Se={marginBottom:12},E={width:"100%",boxSizing:"border-box"},ve={display:"flex",alignItems:"center",gap:8},De={display:"inline-flex",alignItems:"center",justifyContent:"center",padding:0,background:"transparent",border:0,color:"#131313",cursor:"pointer"},Be={display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:"999px",overflow:"hidden",background:"#ffffff",boxShadow:"inset 0 0 0 1px #f0f0f0",lineHeight:1},Pe={display:"flex",flexDirection:"column",gap:16,padding:"0 0 16px 64px"},P={display:"flex",flexDirection:"column",gap:8},Ke={display:"grid",gridTemplateColumns:"minmax(240px, 1.2fr) minmax(220px, 1fr) auto",alignItems:"center",gap:16,padding:12,background:"#ffffff",borderRadius:12},We={display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8},Ue={display:"flex",justifyContent:"flex-end"},_e={display:"flex",alignItems:"center",gap:8},Oe={display:"inline-flex",alignItems:"center",justifyContent:"center",width:24,height:24,borderRadius:"50%",background:"#f0f0f0",color:"#131313"},$e={display:"flex",flexDirection:"column",gap:4},Ve={display:"flex",alignItems:"center",gap:8},Ge={display:"flex",alignItems:"center",gap:4},Me={display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8},He={display:"flex",alignItems:"center",gap:8},qe={display:"flex",alignItems:"center",gap:8},Je={display:"inline-flex",alignItems:"center",justifyContent:"center",width:24,height:24,borderRadius:"50%",background:"#f0f0f0",color:"#646465",flexShrink:0},Qe={display:"flex",flexDirection:"column",gap:2},je={display:"flex",justifyContent:"flex-end"},Xe={display:"flex",flexDirection:"column",margin:-12,background:"#f8f8f8"},Ye={display:"grid",gridTemplateColumns:"280fr 360fr 360fr 88fr",alignItems:"center",padding:"16px",columnGap:0},x=[{id:"bank-accounts-primary",title:"Bank accounts",accounts:[{id:"boa-swift",bankName:"Bank of America",rail:"International Wire (SWIFT)",status:"active",countryFlag:"🇺🇸"},{id:"boa-ach",bankName:"Bank of America",rail:"ACH Transfer",status:"active",countryFlag:"🇺🇸"},{id:"citi-usd",bankName:"Citibank",rail:"Domestic USD Payout",status:"pending",countryFlag:"🇺🇸"}]},{id:"bank-accounts-settlement",title:"Settlement accounts",accounts:[{id:"jpm-wire",bankName:"JPMorgan Chase",rail:"International Wire (SWIFT)",status:"active",countryFlag:"🇺🇸"},{id:"hsbc-local",bankName:"HSBC",rail:"Local USD Settlement",status:"active",countryFlag:"🇺🇸"},{id:"wells-fargo",bankName:"Wells Fargo",rail:"Vendor Payout",status:"pending",countryFlag:"🇺🇸"}]}],Ze=[{id:"wallet-primary",walletName:"Big Tom",walletSummary:"2 banks, 3 wallets",countryFlag:"🇺🇸",groups:x},{id:"wallet-ops",walletName:"Big Tom",walletSummary:"2 banks, 3 wallets",countryFlag:"🇺🇸",groups:x},{id:"wallet-growth",walletName:"Big Tom",walletSummary:"2 banks, 3 wallets",countryFlag:"🇺🇸",groups:x},{id:"wallet-reserve",walletName:"Big Tom",walletSummary:"2 banks, 3 wallets",countryFlag:"🇺🇸",groups:x}],m=t=>({id:t,bankName:"Bank of America",rail:"International Wire (SWIFT)",status:"active",countryFlag:"🇺🇸"}),w=[{id:"expandable-list-bank-accounts-1",title:"Bank accounts",accounts:[m("expandable-list-account-1"),m("expandable-list-account-2"),m("expandable-list-account-3")]},{id:"expandable-list-bank-accounts-2",title:"Bank accounts",accounts:[m("expandable-list-account-4"),m("expandable-list-account-5"),m("expandable-list-account-6")]}],et=[{id:"wallet-big-tom",walletName:"Big Tom",walletSummary:"2 banks, 3 wallets",countryFlag:"🇺🇸",groups:w},{id:"wallet-global-treasury",walletName:"Global Treasury",walletSummary:"2 banks, 4 wallets",countryFlag:"🇸🇬",groups:w},{id:"wallet-merchant-settlement",walletName:"Merchant Settlement",walletSummary:"2 banks, 2 wallets",countryFlag:"🇬🇧",groups:w},{id:"wallet-apac-operations",walletName:"APAC Operations",walletSummary:"2 banks, 5 wallets",countryFlag:"🇭🇰",groups:w}],tt=[{id:"wallet-list-1",walletName:"EVM Wallet",walletLabel:"Default",address:"5fb51e00-b79a-400b-9cb0-cd4d24590c11"},{id:"wallet-list-2",walletName:"EVM Wallet",walletLabel:"Default",address:"5fb51e00-b79a-400b-9cb0-cd4d24590c11"},{id:"wallet-list-3",walletName:"EVM Wallet",walletLabel:"Default",address:"5fb51e00-b79a-400b-9cb0-cd4d24590c11"}],f=[{id:"activity-detail-1",ruleName:"Auto-Conversion Rule",cryptoAmount:"+2,500.00 USDC",fiatAmount:"-2,500.00 USD",status:"completed"},{id:"activity-detail-2",ruleName:"Auto-Conversion Rule",cryptoAmount:"+2,500.00 USDC",fiatAmount:"-2,500.00 USD",status:"completed"},{id:"activity-detail-3",ruleName:"Auto-Conversion Rule",cryptoAmount:"+2,500.00 USDC",fiatAmount:"-2,500.00 USD",status:"completed"}],at=[{id:"activity-row-1",groupLabel:"Today, 14:30",ruleName:"Auto-Conversion Rule",stepCount:3,cryptoAmount:"+2,500.00 USDC",fiatAmount:"-2,500.00 USD",status:"completed",details:f},{id:"activity-row-2",groupLabel:"Today, 14:30",ruleName:"Auto-Conversion Rule",stepCount:3,cryptoAmount:"+2,500.00 USDC",fiatAmount:"-2,500.00 USD",status:"completed",details:f},{id:"activity-row-3",groupLabel:"Today, 14:30",ruleName:"Auto-Conversion Rule",stepCount:3,cryptoAmount:"+2,500.00 USDC",fiatAmount:"-2,500.00 USD",status:"completed",details:f},{id:"activity-row-4",groupLabel:"Today, 14:30",ruleName:"Auto-Conversion Rule",stepCount:3,cryptoAmount:"+2,500.00 USDC",fiatAmount:"-2,500.00 USD",status:"completed",details:f}],y=[{id:"1",wallet:"Primary Treasury",owner:"North America settlement",network:"Ethereum",status:"active",balance:124e4,actionLabel:"Open",countryFlag:"🇺🇸"},{id:"2",wallet:"Operations Wallet",owner:"Card spend + payroll",network:"Solana",status:"hold",balance:320450,actionLabel:"Review",countryFlag:"🇺🇸"},{id:"3",wallet:"Customer Funds",owner:"Segregated client assets",network:"Polygon",status:"active",balance:845120,actionLabel:"Open",countryFlag:"🇺🇸"},{id:"4",wallet:"Payroll Reserve",owner:"Quarterly compensation",network:"Arbitrum",status:"review",balance:560300,actionLabel:"Inspect",countryFlag:"🇺🇸"},{id:"5",wallet:"Marketing Fund",owner:"Growth campaigns",network:"Ethereum",status:"hold",balance:190075,actionLabel:"Review",countryFlag:"🇺🇸"},{id:"6",wallet:"Reserve Wallet",owner:"Emergency liquidity",network:"Solana",status:"active",balance:2100780,actionLabel:"Open",countryFlag:"🇺🇸"},{id:"7",wallet:"Grant Program",owner:"Partner disbursements",network:"Polygon",status:"review",balance:475900,actionLabel:"Inspect",countryFlag:"🇺🇸"},{id:"8",wallet:"Developer Treasury",owner:"Protocol incentives",network:"Arbitrum",status:"active",balance:730410,actionLabel:"Open",countryFlag:"🇺🇸"}],ke=t=>{switch(t){case"active":return{color:"success",label:"Active"};case"review":return{color:"recommended",label:"Review"};default:return{color:"warning",label:"Pending"}}},D=t=>`$${t.toLocaleString("en-US",{maximumFractionDigits:0})}`,B=({flag:t,size:a=28})=>e.jsx("span",{"aria-hidden":"true",style:{...Be,width:a,height:a,fontSize:a>24?18:15},children:t}),Te=({expanded:t,label:a,onToggle:l})=>e.jsx("button",{type:"button","aria-label":a,onClick:l,style:De,children:e.jsx(i,{name:t?"chevronUp":"chevronDown",size:16})}),lt=({record:t})=>e.jsx("div",{style:Pe,children:t.groups.map(a=>e.jsxs("div",{style:P,children:[e.jsx(Ie,{size:"md",color:"default-tertiary",children:a.title}),e.jsx("div",{style:P,children:a.accounts.map(l=>{const s=ke(l.status);return e.jsxs("div",{className:"om-component-ui-table-expandable-account-card",style:Ke,children:[e.jsxs("div",{style:ve,children:[e.jsx(B,{flag:l.countryFlag,size:24}),e.jsx(n,{size:"sm",strong:!0,children:l.bankName})]}),e.jsx(u,{size:"md",color:"default-tertiary",children:l.rail}),e.jsxs("div",{style:We,children:[e.jsx(g,{color:s.color,label:s.label,removable:!1}),e.jsx(c,{size:"small",color:"grey",children:"Send"}),e.jsx(c,{size:"small",color:"grey","aria-label":`Open ${l.bankName}`,iconStart:e.jsx(i,{name:"arrowRight",size:16})})]})]},l.id)})})]},a.id))}),st=({expandedKeys:t,onToggle:a})=>[{key:"walletName",dataIndex:"walletName",title:"Wallet name",width:420,render:(l,s)=>{const r=t.includes(s.id);return e.jsxs("div",{style:ve,children:[e.jsx(Te,{expanded:r,label:`${r?"Collapse":"Expand"} ${s.walletName}`,onToggle:()=>a(s.id)}),e.jsx(B,{flag:s.countryFlag}),e.jsx(n,{size:"md",strong:!0,children:s.walletName})]})}},{key:"walletSummary",dataIndex:"walletSummary",title:"Wallet address",width:360,render:l=>e.jsx(u,{size:"md",color:"default-tertiary",children:l})},{key:"actions",title:"Actions",width:120,align:"right",render:(l,s)=>e.jsx(c,{size:"small",color:"grey","aria-label":`Open ${s.walletName}`,iconStart:e.jsx(i,{name:"arrowRight",size:16})})}],p=[{key:"wallet",dataIndex:"wallet",title:"Wallet",width:280,sorter:(t,a)=>t.wallet.localeCompare(a.wallet),render:(t,a)=>({primary:t,secondary:a.owner,leading:e.jsx(B,{flag:a.countryFlag,size:24})})},{key:"network",dataIndex:"network",title:"Network",width:160},{key:"status",dataIndex:"status",title:"Status",width:140,render:t=>{const a=ke(t);return e.jsx(g,{color:a.color,label:a.label,removable:!1})}},{key:"balance",dataIndex:"balance",title:"Balance",width:160,align:"right",sorter:(t,a)=>t.balance-a.balance,render:t=>e.jsx(n,{size:"sm",strong:!0,children:D(t)})},{key:"actions",title:"Actions",width:120,align:"right",render:(t,a)=>e.jsx("div",{style:Ue,children:e.jsx(c,{size:"small",color:"grey",children:a.actionLabel})})}],rt=[{key:"wallet",dataIndex:"wallet",title:"Wallet",width:260},{key:"network",dataIndex:"network",title:"Network",width:160},{key:"status",dataIndex:"status",title:"Status",width:160},{key:"balance",dataIndex:"balance",title:"Balance",width:160,align:"right",render:t=>D(t)}],nt=[{key:"wallet",dataIndex:"walletName",title:e.jsxs("div",{style:_e,children:[e.jsx(i,{name:"chevronDown",size:16}),e.jsx("span",{style:Oe,children:e.jsx(i,{name:"wallet",size:14})}),e.jsx(n,{size:"md",strong:!0,children:"EVM Compatible Wallet"})]}),render:(t,a)=>e.jsxs("div",{style:$e,children:[e.jsxs("div",{style:Ve,children:[e.jsx(n,{size:"md",strong:!0,children:a.walletName}),e.jsx(g,{color:"recommended",size:"small",label:a.walletLabel,removable:!1})]}),e.jsxs("div",{style:Ge,children:[e.jsx(u,{size:"sm",color:"default-tertiary",children:a.address}),e.jsx(i,{name:"copy",size:12,color:"#9fa3a3"})]})]})},{key:"actions",title:e.jsx(c,{size:"small",color:"secondary",iconStart:e.jsx(i,{name:"add",size:16}),children:"Add New Wallet"}),width:180,align:"right",render:()=>e.jsxs("div",{style:Me,children:[e.jsx(c,{size:"small",color:"white","aria-label":"Edit wallet",iconStart:e.jsx(i,{name:"editFile",size:16})}),e.jsx(c,{size:"small",color:"grey",children:"Deposit"})]})}],Ae=()=>e.jsx(g,{color:"success",size:"medium",label:"Completed",removable:!1}),Ce=({ruleName:t,stepCount:a})=>e.jsxs("div",{style:qe,children:[e.jsx("span",{style:Je,children:e.jsx(i,{name:"deposit",size:12})}),e.jsx(n,{size:"sm",children:t}),a?e.jsx(g,{color:"neutral",size:"small",label:`${a} steps`,removable:!1}):null]}),Re=({cryptoAmount:t,fiatAmount:a})=>e.jsxs("div",{style:Qe,children:[e.jsx(n,{size:"sm",strong:!0,children:t}),e.jsx(u,{size:"sm",color:"default-tertiary",children:a})]}),ot=({details:t})=>e.jsx("div",{style:Xe,children:t.map(a=>e.jsxs("div",{style:Ye,children:[e.jsx("div",{}),e.jsx(Ce,{ruleName:a.ruleName}),e.jsx(Re,{cryptoAmount:a.cryptoAmount,fiatAmount:a.fiatAmount}),e.jsx("div",{style:je,children:e.jsx(Ae,{})})]},a.id))}),it=({expandedKeys:t,onToggle:a})=>[{key:"groupLabel",dataIndex:"groupLabel",title:"Wallet name",width:280,render:(l,s)=>{const r=t.includes(s.id);return e.jsxs("div",{style:He,children:[e.jsx(Te,{expanded:r,label:`${r?"Collapse":"Expand"} ${s.groupLabel}`,onToggle:()=>a(s.id)}),e.jsx(n,{size:"sm",children:l})]})}},{key:"ruleName",dataIndex:"ruleName",title:"Wallet address",width:360,render:(l,s)=>e.jsx(Ce,{ruleName:l,stepCount:s.stepCount})},{key:"amount",title:"Wallet address",width:360,render:(l,s)=>e.jsx(Re,{cryptoAmount:s.cryptoAmount,fiatAmount:s.fiatAmount})},{key:"status",dataIndex:"status",title:"Actions",width:88,align:"right",render:()=>e.jsx("div",{style:je,children:e.jsx(Ae,{})})}],Dt={title:"Components/Table",component:o,args:{rowKey:"id",columns:p,dataSource:y,pagination:!1,variant:"stroke",size:"large"},argTypes:{variant:{control:"radio",options:[...Fe]},size:{control:"radio",options:[...Ee]}},tags:["autodocs"]},ze=({dataSource:t,defaultExpandedKeys:a})=>{const[l,s]=F.useState(a),r=d=>{s(N=>N.includes(d)?N.filter(Le=>Le!==d):[...N,d])};return e.jsx("div",{style:E,children:e.jsx(o,{rowKey:"id",size:"small",variant:"stroke",pagination:!1,columns:st({expandedKeys:l,onToggle:r}),dataSource:t,expandable:{showExpandColumn:!1,expandedRowKeys:l,expandedRowRender:d=>e.jsx(lt,{record:d})}})})},b={render:()=>e.jsx(ze,{dataSource:et,defaultExpandedKeys:["wallet-big-tom","wallet-global-treasury"]})},h={render:()=>e.jsx(ze,{dataSource:Ze,defaultExpandedKeys:["wallet-ops"]})},S={render:()=>{const[t,a]=F.useState(["activity-row-2"]),l=s=>{a(r=>r.includes(s)?r.filter(d=>d!==s):[...r,s])};return e.jsx("div",{style:E,children:e.jsx(o,{rowKey:"id",size:"small",variant:"stroke",pagination:!1,columns:it({expandedKeys:t,onToggle:l}),dataSource:at,expandable:{showExpandColumn:!1,expandedRowKeys:t,rowExpandable:s=>{var r;return!!((r=s.details)!=null&&r.length)},expandedRowRender:s=>s.details?e.jsx(ot,{details:s.details}):null}})})}},v={render:()=>e.jsx("div",{style:E,children:e.jsx(o,{rowKey:"id",size:"large",variant:"stroke",pagination:!1,columns:nt,dataSource:tt})})},j={args:{pagination:{pageSize:4}}},k={render:t=>{const[a,l]=F.useState(["2"]);return e.jsxs("div",{children:[e.jsxs(u,{size:"sm",color:"default-tertiary",style:Se,children:["Selected rows: ",a.join(", ")]}),e.jsx(o,{...t,rowSelection:{type:"checkbox",selectedRowKeys:a,onChange:s=>l(s)}})]})}},T={render:()=>e.jsx(o,{rowKey:"id",pagination:!1,sticky:!0,scroll:{x:1120,y:280},dataSource:y,columns:[{...p[0],fixed:"left"},p[1],p[2],{key:"owner",dataIndex:"owner",title:"Owner",width:220},{key:"balance",dataIndex:"balance",title:"Balance",width:160,align:"right",render:t=>D(t)},{...p[4],fixed:"right"}]})},A={args:{dataSource:[],pagination:!1}},C={args:{dataSource:[],pagination:!1,empty:e.jsxs("div",{style:{padding:40,textAlign:"center"},children:[e.jsx(n,{size:"sm",strong:!0,children:"No wallets found"}),e.jsx(u,{size:"md",color:"default-tertiary",children:"Try changing filters or connect a new account to populate the table."})]})}},R={render:t=>e.jsxs("div",{style:he,children:[e.jsxs("div",{children:[e.jsx(n,{size:"sm",strong:!0,style:I,children:"Stroke"}),e.jsx(o,{...t,dataSource:y.slice(0,4),variant:"stroke"})]}),e.jsxs("div",{children:[e.jsx(n,{size:"sm",strong:!0,style:I,children:"Fill"}),e.jsx(o,{...t,dataSource:y.slice(0,4),variant:"fill"})]})]})},z={render:t=>e.jsxs("div",{style:he,children:[e.jsxs("div",{children:[e.jsx(n,{size:"sm",strong:!0,style:I,children:"Large"}),e.jsx(o,{...t,dataSource:y.slice(0,3),size:"large"})]}),e.jsxs("div",{children:[e.jsx(n,{size:"sm",strong:!0,style:I,children:"Small"}),e.jsx(o,{...t,dataSource:y.slice(0,3),size:"small"})]})]})},L={render:()=>{const t=Array.from({length:5e3},(a,l)=>({id:`virtual-${l+1}`,wallet:`Wallet ${l+1}`,owner:`Desk ${l%12}`,network:["Ethereum","Solana","Polygon","Arbitrum"][l%4],status:["active","hold","review"][l%3],balance:2e5+l*1375,actionLabel:"Open",countryFlag:l%2===0?"🇺🇸":"🇪🇺"}));return e.jsxs("div",{children:[e.jsx(u,{size:"sm",color:"default-tertiary",style:Se,children:"5,000 rows rendered with the virtualized table kernel."}),e.jsx(Ne,{rowKey:"id",columns:rt,dataSource:t,scroll:{x:740,y:360},pagination:!1})]})}};var K,W,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <WalletRegistryStory dataSource={expandableListRows} defaultExpandedKeys={['wallet-big-tom', 'wallet-global-treasury']} />
}`,...(U=(W=b.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var _,O,$;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <WalletRegistryStory dataSource={walletRegistryRows} defaultExpandedKeys={['wallet-ops']} />
}`,...($=(O=h.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var V,G,M;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['activity-row-2']);
    const handleToggle = (rowId: string) => {
      setExpandedKeys(currentKeys => currentKeys.includes(rowId) ? currentKeys.filter(key => key !== rowId) : [...currentKeys, rowId]);
    };
    return <div style={figmaFrameStyle}>
        <Table<ActivityLedgerRow> rowKey="id" size="small" variant="stroke" pagination={false} columns={createActivityLedgerColumns({
        expandedKeys,
        onToggle: handleToggle
      })} dataSource={activityLedgerRows} expandable={{
        showExpandColumn: false,
        expandedRowKeys: expandedKeys,
        rowExpandable: record => Boolean(record.details?.length),
        expandedRowRender: record => record.details ? <ActivityLedgerDetailsPanel details={record.details} /> : null
      }} />
      </div>;
  }
}`,...(M=(G=S.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var H,q,J;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={figmaFrameStyle}>
      <Table<WalletListRow> rowKey="id" size="large" variant="stroke" pagination={false} columns={walletListPanelColumns} dataSource={walletListPanelRows} />
    </div>
}`,...(J=(q=v.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Y;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    pagination: {
      pageSize: 4
    }
  }
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>(['2']);
    return <div>
        <TypographyBody size="sm" color="default-tertiary" style={hintStyle}>
          Selected rows: {selectedKeys.join(', ')}
        </TypographyBody>
        <Table {...args as TableProps<Record<string, any>>} rowSelection={{
        type: 'checkbox',
        selectedRowKeys: selectedKeys,
        onChange: keys => setSelectedKeys(keys)
      }} />
      </div>;
  }
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,se;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Table<PortfolioRow> rowKey="id" pagination={false} sticky scroll={{
    x: 1120,
    y: 280
  }} dataSource={portfolioRows} columns={[{
    ...portfolioColumns[0],
    fixed: 'left'
  }, portfolioColumns[1], portfolioColumns[2], {
    key: 'owner',
    dataIndex: 'owner',
    title: 'Owner',
    width: 220
  }, {
    key: 'balance',
    dataIndex: 'balance',
    title: 'Balance',
    width: 160,
    align: 'right',
    render: value => formatBalance(value as number)
  }, {
    ...portfolioColumns[4],
    fixed: 'right'
  }]} />
}`,...(se=(le=T.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var re,ne,oe;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    dataSource: [],
    pagination: false
  }
}`,...(oe=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,de,ce;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    dataSource: [],
    pagination: false,
    empty: <div style={{
      padding: 40,
      textAlign: 'center'
    }}>
        <TypographyTitle size="sm" strong>
          No wallets found
        </TypographyTitle>
        <TypographyBody size="md" color="default-tertiary">
          Try changing filters or connect a new account to populate the table.
        </TypographyBody>
      </div>
  }
}`,...(ce=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,ye;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <div style={stackStyle}>
      <div>
        <TypographyTitle size="sm" strong style={sectionTitleStyle}>
          Stroke
        </TypographyTitle>
        <Table {...args as TableProps<Record<string, any>>} dataSource={portfolioRows.slice(0, 4)} variant="stroke" />
      </div>
      <div>
        <TypographyTitle size="sm" strong style={sectionTitleStyle}>
          Fill
        </TypographyTitle>
        <Table {...args as TableProps<Record<string, any>>} dataSource={portfolioRows.slice(0, 4)} variant="fill" />
      </div>
    </div>
}`,...(ye=(me=R.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var pe,ge,xe;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <div style={stackStyle}>
      <div>
        <TypographyTitle size="sm" strong style={sectionTitleStyle}>
          Large
        </TypographyTitle>
        <Table {...args as TableProps<Record<string, any>>} dataSource={portfolioRows.slice(0, 3)} size="large" />
      </div>
      <div>
        <TypographyTitle size="sm" strong style={sectionTitleStyle}>
          Small
        </TypographyTitle>
        <Table {...args as TableProps<Record<string, any>>} dataSource={portfolioRows.slice(0, 3)} size="small" />
      </div>
    </div>
}`,...(xe=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var we,fe,be;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const largeData: PortfolioRow[] = Array.from({
      length: 5000
    }, (_, index) => ({
      id: \`virtual-\${index + 1}\`,
      wallet: \`Wallet \${index + 1}\`,
      owner: \`Desk \${index % 12}\`,
      network: ['Ethereum', 'Solana', 'Polygon', 'Arbitrum'][index % 4],
      status: (['active', 'hold', 'review'] as const)[index % 3],
      balance: 200000 + index * 1375,
      actionLabel: 'Open',
      countryFlag: index % 2 === 0 ? '🇺🇸' : '🇪🇺'
    }));
    return <div>
        <TypographyBody size="sm" color="default-tertiary" style={hintStyle}>
          5,000 rows rendered with the virtualized table kernel.
        </TypographyBody>
        <VirtualTable<PortfolioRow> rowKey="id" columns={virtualColumns} dataSource={largeData} scroll={{
        x: 740,
        y: 360
      }} pagination={false} />
      </div>;
  }
}`,...(be=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};const Bt=["ExpandableList","FigmaWalletRegistry","FigmaAutoConversionTable","WalletListPanel","WithPagination","SelectionAndSort","FixedAndSticky","EmptyState","CustomEmptyState","Variants","Sizes","VirtualScrolling"];export{C as CustomEmptyState,A as EmptyState,b as ExpandableList,S as FigmaAutoConversionTable,h as FigmaWalletRegistry,T as FixedAndSticky,k as SelectionAndSort,z as Sizes,R as Variants,L as VirtualScrolling,v as WalletListPanel,j as WithPagination,Bt as __namedExportsOrder,Dt as default};
