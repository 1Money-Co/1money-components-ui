import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-CP2yOfOm.js";import{f as D}from"./index-DCiaR2iG.js";import{f as P}from"./Button-xKWQamn_.js";import{I as O}from"./Icons-C17k0gNH.js";import{S as i}from"./Select-YJAfnYj9.js";/* empty css               */import"./Typography-COcdYQQO.js";import"./Spinner-C9s5r2Mu.js";import"./classnames-0AlMal0H.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";import"./ResizeObserver-DbXOvenx.js";import"./clipboard-C7s2bcmm.js";import"./iframe-C8OcTo_O.js";import"./Tooltip-CsTd8WLo.js";const ge=[{label:"Bitcoin",value:"btc"},{label:"Ethereum",value:"eth"},{label:"USDT",value:"usdt"},{label:"USD Coin",value:"usdc"},{label:"Solana",value:"sol"},{label:"Dogecoin",value:"doge"},{label:"Cardano",value:"ada"},{label:"Polygon",value:"matic"}],he=[{label:"Stablecoins",options:[{label:"USDT",value:"usdt",description:"Ethereum"},{label:"USDC",value:"usdc",description:"Solana"}]},{label:"Address History",options:[{label:"EUR",value:"eur",description:"Euro"},{label:"GBP",value:"gbp",description:"British Pound"}]}],pe=[{label:"Bitcoin",value:"btc",description:"Bitcoin network"},{label:"Ethereum",value:"eth",description:"Ethereum mainnet"},{label:"USDT",value:"usdt",description:"Ethereum"},{label:"USD Coin",value:"usdc",description:"Solana"},{label:"Solana",value:"sol",description:"Solana network"},{label:"Dogecoin",value:"doge",description:"Dogecoin network"},{label:"MATIC",value:"matic",description:"Polygon PoS"}],me=[{label:"Layer 1",options:[{label:"Bitcoin",value:"btc",description:"Bitcoin network"},{label:"Ethereum",value:"eth",description:"Ethereum mainnet"},{label:"Solana",value:"sol",description:"Solana network"}]},{label:"Stablecoins",options:[{label:"USDT",value:"usdt",description:"Ethereum"},{label:"USD Coin",value:"usdc",description:"Solana"}]},{label:"Alternative",options:[{label:"Dogecoin",value:"doge",description:"Dogecoin network"},{label:"MATIC",value:"matic",description:"Polygon PoS"}]}],k={width:280},Se={display:"flex",flex:"1 1 auto",gap:12,alignItems:"center",minWidth:0},ve={display:"flex",flex:"1 1 auto",flexDirection:"column",gap:2,minWidth:0},be={overflow:"hidden",fontSize:14,fontWeight:500,lineHeight:"20px",color:"#131313",whiteSpace:"nowrap",textOverflow:"ellipsis"},fe={overflow:"hidden",fontSize:12,lineHeight:"16px",color:"#70757a",whiteSpace:"nowrap",textOverflow:"ellipsis"},xe={display:"flex",gap:8,alignItems:"center",width:"100%"},ye={btc:{background:"#f7931a",glyph:"₿"},eth:{background:"#f0f0f0",color:"#131313",glyph:"Ξ"},usdt:{background:"#26a17b",glyph:"₮"},usdc:{background:"#2775ca",glyph:"$"},sol:{background:"linear-gradient(135deg, #14f195 0%, #9945ff 100%)",glyph:"S"},doge:{background:"#c2a633",glyph:"Ð"},matic:{background:"#8247e5",glyph:"P"}};function Ce({value:e}){const n=ye[String(e)]??{background:"#073387",glyph:String(e).slice(0,1).toUpperCase()};return t.jsx("span",{style:{display:"inline-flex",flexShrink:0,alignItems:"center",justifyContent:"center",width:24,height:24,color:n.color??"#fff",fontSize:13,fontWeight:600,lineHeight:"16px",background:n.background,borderRadius:999},children:n.glyph})}function Ve({multiple:e,selected:n}){return e?t.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex",flexShrink:0,alignItems:"center",justifyContent:"center",width:16,height:16,color:"#fff",background:n?"#073387":"#fff",border:`1px solid ${n?"#073387":"#9fa3a3"}`,borderRadius:4},children:n&&t.jsx(O,{name:"check",size:12,color:"currentColor"})}):t.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex",flexShrink:0,alignItems:"center",justifyContent:"center",width:16,height:16,color:"#073387"},children:n&&t.jsx(O,{name:"check",size:16,color:"currentColor"})})}function j(e,n){return t.jsxs(t.Fragment,{children:[t.jsxs("span",{style:Se,children:[t.jsx(Ce,{value:e.value}),t.jsxs("span",{style:ve,children:[t.jsx("span",{style:be,children:e.label}),e.description&&t.jsx("span",{style:fe,children:e.description})]})]}),t.jsx(Ve,{multiple:n.multiple,selected:n.selected})]})}const He={title:"Components/Select",component:i,argTypes:{disabled:{control:"boolean"},multiple:{control:"boolean"},maxVisibleValues:{control:"number"},searchable:{control:"boolean"},searchPlaceholder:{control:"text"},size:{control:"radio",options:["large","small"]},status:{control:"radio",options:["default","error","warning","success"]},variant:{control:"radio",options:["fill","stroke","frameless"]}},args:{label:"Label",placeholder:"Value",options:ge.map(e=>({...e})),size:"large",status:"default",variant:"fill",disabled:!1,onChange:D(),onOpenChange:D()},tags:["autodocs"]},d={render:e=>{const[n,o]=l.useState("btc");return t.jsx(i,{...e,value:n,onChange:(a,r)=>{var s;o(a),(s=e.onChange)==null||s.call(e,a,r)}})}},p={args:{value:void 0}},m={args:{variant:"stroke"}},g={args:{size:"small",value:"eth"}},h={args:{status:"error",feedback:"Feedback",value:void 0}},S={render:e=>{const[n,o]=l.useState(["btc","eth","usdt","usdc","sol","doge","ada","matic"]);return t.jsx(i,{...e,multiple:!0,value:n,onChange:(a,r)=>{var s;o(a??[]),(s=e.onChange)==null||s.call(e,a,r)}})},args:{placeholder:"Select assets",size:"small"}},v={render:e=>{const[n,o]=l.useState(["btc","eth","usdt","usdc","sol","doge"]);return t.jsx("div",{style:{width:320},children:t.jsx(i,{...e,multiple:!0,value:n,onChange:(a,r)=>{var s;o(a??[]),(s=e.onChange)==null||s.call(e,a,r)}})})},args:{label:void 0,options:pe,maxVisibleValues:1,placeholder:"Select assets",size:"large",variant:"stroke"},tags:["!autodocs","dev"]},b={render:e=>{const[n,o]=l.useState("btc");return t.jsx(i,{...e,value:n,variant:"frameless",prefix:t.jsx(O,{name:"usd",size:24,color:"currentColor"}),onChange:(a,r)=>{var s;o(a),(s=e.onChange)==null||s.call(e,a,r)}})},args:{label:void 0,placeholder:"Currency"},tags:["!autodocs","dev"]},f={render:e=>{const[n,o]=l.useState("usdt");return t.jsx(i,{...e,value:n,onChange:(a,r)=>{var s;o(a),(s=e.onChange)==null||s.call(e,a,r)}})},args:{label:void 0,options:he,value:"usdt"}},x={render:e=>{const[n,o]=l.useState(!1),[a,r]=l.useState(["btc"]),[s,V]=l.useState(["btc"]);return t.jsx("div",{style:k,children:t.jsx(i,{...e,multiple:!0,open:n,value:n?s:a,renderOption:j,panelFooter:t.jsxs("div",{style:xe,children:[t.jsx(P,{color:"grey",size:"small",style:{flex:1},onClick:()=>{V([])},children:"Reset"}),t.jsx(P,{size:"small",style:{flex:1},onClick:()=>{var u;r(s),o(!1),(u=e.onOpenChange)==null||u.call(e,!1)},children:"Apply"})]}),onOpenChange:u=>{var c;o(u),V(a),(c=e.onOpenChange)==null||c.call(e,u)},onChange:(u,c)=>{var A;V(u??[]),(A=e.onChange)==null||A.call(e,u,c)}})})},args:{label:void 0,placeholder:"Select assets",options:pe,size:"small"},tags:["!autodocs","dev"]},y={render:e=>{const[n,o]=l.useState("usdt");return t.jsx("div",{style:k,children:t.jsx(i,{...e,value:n,renderOption:j,onChange:(a,r)=>{var s;o(a),(s=e.onChange)==null||s.call(e,a,r)}})})},args:{label:void 0,placeholder:"Select asset",options:me,value:"usdt"},tags:["!autodocs","dev"]},C={render:e=>{const[n,o]=l.useState("usdt");return t.jsx("div",{style:k,children:t.jsx(i,{...e,value:n,renderOption:j,onChange:(a,r)=>{var s;o(a),(s=e.onChange)==null||s.call(e,a,r)}})})},args:{label:void 0,placeholder:"Select asset",options:me,searchable:!0,searchPlaceholder:"Search",value:"usdt"},tags:["!autodocs","dev"]};var E,T,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | undefined>('btc');
    return <Select {...args} value={value} onChange={(nextValue, option) => {
      setValue(nextValue as string | number | undefined);
      args.onChange?.(nextValue, option);
    }} />;
  }
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var z,I,U;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...(U=(I=p.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var B,_,G;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'stroke'
  }
}`,...(G=(_=m.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var M,R,F;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'small',
    value: 'eth'
  }
}`,...(F=(R=g.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var N,H,W;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'error',
    feedback: 'Feedback',
    value: undefined
  }
}`,...(W=(H=h.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var L,$,q;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Array<string | number>>(['btc', 'eth', 'usdt', 'usdc', 'sol', 'doge', 'ada', 'matic']);
    return <Select {...args} multiple value={value} onChange={(nextValue, option) => {
      setValue(nextValue as Array<string | number> ?? []);
      args.onChange?.(nextValue, option);
    }} />;
  },
  args: {
    placeholder: 'Select assets',
    size: 'small'
  }
}`,...(q=($=S.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<Array<string | number>>(['btc', 'eth', 'usdt', 'usdc', 'sol', 'doge']);
    return <div style={{
      width: 320
    }}>
        <Select {...args} multiple value={value} onChange={(nextValue, option) => {
        setValue(nextValue as Array<string | number> ?? []);
        args.onChange?.(nextValue, option);
      }} />
      </div>;
  },
  args: {
    label: undefined,
    options: ASSET_OPTIONS,
    maxVisibleValues: 1,
    placeholder: 'Select assets',
    size: 'large',
    variant: 'stroke'
  },
  tags: ['!autodocs', 'dev']
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | undefined>('btc');
    return <Select {...args} value={value} variant="frameless" prefix={<Icons name="usd" size={24} color="currentColor" />} onChange={(nextValue, option) => {
      setValue(nextValue as string | number | undefined);
      args.onChange?.(nextValue, option);
    }} />;
  },
  args: {
    label: undefined,
    placeholder: 'Currency'
  },
  tags: ['!autodocs', 'dev']
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | undefined>('usdt');
    return <Select {...args} value={value} onChange={(nextValue, option) => {
      setValue(nextValue as string | number | undefined);
      args.onChange?.(nextValue, option);
    }} />;
  },
  args: {
    label: undefined,
    options: GROUPED_OPTIONS,
    value: 'usdt'
  }
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,se,oe;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<Array<string | number>>(['btc']);
    const [draftValue, setDraftValue] = useState<Array<string | number>>(['btc']);
    return <div style={storyContainerStyle}>
        <Select {...args} multiple open={open} value={open ? draftValue : value} renderOption={renderAssetOption} panelFooter={<div style={assetFooterActionsStyle}>
              <Button color="grey" size="small" style={{
          flex: 1
        }} onClick={() => {
          setDraftValue([]);
        }}>
                Reset
              </Button>
              <Button size="small" style={{
          flex: 1
        }} onClick={() => {
          setValue(draftValue);
          setOpen(false);
          args.onOpenChange?.(false);
        }}>
                Apply
              </Button>
            </div>} onOpenChange={nextOpen => {
        setOpen(nextOpen);
        setDraftValue(value);
        args.onOpenChange?.(nextOpen);
      }} onChange={(nextValue, option) => {
        setDraftValue(nextValue as Array<string | number> ?? []);
        args.onChange?.(nextValue, option);
      }} />
      </div>;
  },
  args: {
    label: undefined,
    placeholder: 'Select assets',
    options: ASSET_OPTIONS,
    size: 'small'
  },
  tags: ['!autodocs', 'dev']
}`,...(oe=(se=x.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,le,ie;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | undefined>('usdt');
    return <div style={storyContainerStyle}>
        <Select {...args} value={value} renderOption={renderAssetOption} onChange={(nextValue, option) => {
        setValue(nextValue as string | number | undefined);
        args.onChange?.(nextValue, option);
      }} />
      </div>;
  },
  args: {
    label: undefined,
    placeholder: 'Select asset',
    options: GROUPED_ASSET_OPTIONS,
    value: 'usdt'
  },
  tags: ['!autodocs', 'dev']
}`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,ce,de;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | undefined>('usdt');
    return <div style={storyContainerStyle}>
        <Select {...args} value={value} renderOption={renderAssetOption} onChange={(nextValue, option) => {
        setValue(nextValue as string | number | undefined);
        args.onChange?.(nextValue, option);
      }} />
      </div>;
  },
  args: {
    label: undefined,
    placeholder: 'Select asset',
    options: GROUPED_ASSET_OPTIONS,
    searchable: true,
    searchPlaceholder: 'Search',
    value: 'usdt'
  },
  tags: ['!autodocs', 'dev']
}`,...(de=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const We=["Default","Placeholder","Stroke","Small","Error","Multiple","MultipleCollapsed","Frameless","Grouped","AssetMultiSelectActions","GroupedAssetOptions","SearchableGrouped"];export{x as AssetMultiSelectActions,d as Default,h as Error,b as Frameless,f as Grouped,y as GroupedAssetOptions,S as Multiple,v as MultipleCollapsed,p as Placeholder,C as SearchableGrouped,g as Small,m as Stroke,We as __namedExportsOrder,He as default};
