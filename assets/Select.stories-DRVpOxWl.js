import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-CP2yOfOm.js";import{f as D}from"./index-DCiaR2iG.js";import{B as E}from"./Button-B0SyoREf.js";import{I as A}from"./Icons-SFvHKrvT.js";import{S as c}from"./Select-oXZu_jGm.js";/* empty css               */import"./Icons-Dt6lPN1Q.js";import"./Typography-sOfZeSCS.js";import"./Spinner-BLuZb_Ix.js";import"./iframe-CPdq2Gs2.js";import"./classnames-h1fAIaEr.js";import"./floating-ui.react-hkiQfd1B.js";import"./index-D1q9exoj.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";import"./ResizeObserver-DW8-DKQf.js";import"./Tooltip-DeIhm5fH.js";const fe=[{label:"Bitcoin",value:"btc"},{label:"Ethereum",value:"eth"},{label:"USDT",value:"usdt"},{label:"USD Coin",value:"usdc"},{label:"Solana",value:"sol"},{label:"Dogecoin",value:"doge"},{label:"Cardano",value:"ada"},{label:"Polygon",value:"matic"}],Ce=[{label:"Stablecoins",options:[{label:"USDT",value:"usdt",description:"Ethereum"},{label:"USDC",value:"usdc",description:"Solana"}]},{label:"Address History",options:[{label:"EUR",value:"eur",description:"Euro"},{label:"GBP",value:"gbp",description:"British Pound"}]}],w=[{label:"Bitcoin",value:"btc",description:"Bitcoin network"},{label:"Ethereum",value:"eth",description:"Ethereum mainnet"},{label:"USDT",value:"usdt",description:"Ethereum"},{label:"USD Coin",value:"usdc",description:"Solana"},{label:"Solana",value:"sol",description:"Solana network"},{label:"Dogecoin",value:"doge",description:"Dogecoin network"},{label:"MATIC",value:"matic",description:"Polygon PoS"}],ve=[{label:"Layer 1",options:[{label:"Bitcoin",value:"btc",description:"Bitcoin network"},{label:"Ethereum",value:"eth",description:"Ethereum mainnet"},{label:"Solana",value:"sol",description:"Solana network"}]},{label:"Stablecoins",options:[{label:"USDT",value:"usdt",description:"Ethereum"},{label:"USD Coin",value:"usdc",description:"Solana"}]},{label:"Alternative",options:[{label:"Dogecoin",value:"doge",description:"Dogecoin network"},{label:"MATIC",value:"matic",description:"Polygon PoS"}]}],j={width:280},xe={display:"flex",flex:"1 1 auto",gap:12,alignItems:"center",minWidth:0},ye={display:"flex",flex:"1 1 auto",flexDirection:"column",gap:2,minWidth:0},Ve={overflow:"hidden",fontSize:14,fontWeight:500,lineHeight:"20px",color:"#131313",whiteSpace:"nowrap",textOverflow:"ellipsis"},Oe={overflow:"hidden",fontSize:12,lineHeight:"16px",color:"#70757a",whiteSpace:"nowrap",textOverflow:"ellipsis"},ke={display:"flex",gap:8,alignItems:"center",width:"100%"},je={btc:{background:"#f7931a",glyph:"₿"},eth:{background:"#f0f0f0",color:"#131313",glyph:"Ξ"},usdt:{background:"#26a17b",glyph:"₮"},usdc:{background:"#2775ca",glyph:"$"},sol:{background:"linear-gradient(135deg, #14f195 0%, #9945ff 100%)",glyph:"S"},doge:{background:"#c2a633",glyph:"Ð"},matic:{background:"#8247e5",glyph:"P"}};function Ae({value:e}){const n=je[String(e)]??{background:"#073387",glyph:String(e).slice(0,1).toUpperCase()};return t.jsx("span",{style:{display:"inline-flex",flexShrink:0,alignItems:"center",justifyContent:"center",width:24,height:24,color:n.color??"#fff",fontSize:13,fontWeight:600,lineHeight:"16px",background:n.background,borderRadius:999},children:n.glyph})}function we({multiple:e,selected:n}){return e?t.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex",flexShrink:0,alignItems:"center",justifyContent:"center",width:16,height:16,color:"#fff",background:n?"#073387":"#fff",border:`1px solid ${n?"#073387":"#9fa3a3"}`,borderRadius:4},children:n&&t.jsx(A,{name:"check",size:12,color:"currentColor"})}):t.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex",flexShrink:0,alignItems:"center",justifyContent:"center",width:16,height:16,color:"#073387"},children:n&&t.jsx(A,{name:"check",size:16,color:"currentColor"})})}function P(e,n){return t.jsxs(t.Fragment,{children:[t.jsxs("span",{style:xe,children:[t.jsx(Ae,{value:e.value}),t.jsxs("span",{style:ye,children:[t.jsx("span",{style:Ve,children:e.label}),e.description&&t.jsx("span",{style:Oe,children:e.description})]})]}),t.jsx(we,{multiple:n.multiple,selected:n.selected})]})}const Je={title:"Components/Select",component:c,argTypes:{disabled:{control:"boolean"},multiple:{control:"boolean"},maxVisibleValues:{control:"number"},searchable:{control:"boolean"},searchPlaceholder:{control:"text"},size:{control:"radio",options:["large","small"]},status:{control:"radio",options:["default","error","warning","success"]},variant:{control:"radio",options:["fill","stroke","frameless"]}},args:{label:"Label",placeholder:"Value",options:fe.map(e=>({...e})),size:"large",status:"default",variant:"fill",disabled:!1,onChange:D(),onOpenChange:D()},tags:["autodocs"]},m={render:e=>{const[n,o]=i.useState("btc");return t.jsx(c,{...e,value:n,onChange:(s,l)=>{var a;o(s),(a=e.onChange)==null||a.call(e,s,l)}})}},h={args:{value:void 0}},g={args:{variant:"stroke"}},S={args:{size:"small",value:"eth"}},v={args:{status:"error",feedback:"Feedback",value:void 0}},b={render:e=>{const[n,o]=i.useState(["btc","eth","usdt","usdc","sol","doge","ada","matic"]);return t.jsx(c,{...e,multiple:!0,value:n,onChange:(s,l)=>{var a;o(s??[]),(a=e.onChange)==null||a.call(e,s,l)}})},args:{placeholder:"Select assets",size:"small"}},f={render:e=>{const[n,o]=i.useState(["btc","eth","usdt","usdc","sol","doge"]);return t.jsx("div",{style:{width:320},children:t.jsx(c,{...e,multiple:!0,value:n,onChange:(s,l)=>{var a;o(s??[]),(a=e.onChange)==null||a.call(e,s,l)}})})},args:{label:void 0,options:w,maxVisibleValues:1,placeholder:"Select assets",size:"large",variant:"stroke"},tags:["!autodocs","dev"]},C={render:e=>{const[n,o]=i.useState("btc");return t.jsx(c,{...e,value:n,variant:"frameless",prefix:t.jsx(A,{name:"usd",size:24,color:"currentColor"}),onChange:(s,l)=>{var a;o(s),(a=e.onChange)==null||a.call(e,s,l)}})},args:{label:void 0,placeholder:"Currency"},tags:["!autodocs","dev"]},x={render:e=>{const[n,o]=i.useState("usdt");return t.jsx(c,{...e,value:n,onChange:(s,l)=>{var a;o(s),(a=e.onChange)==null||a.call(e,s,l)}})},args:{label:void 0,options:Ce,value:"usdt"}},y={render:e=>{const[n,o]=i.useState(!1),[s,l]=i.useState(["btc"]),[a,p]=i.useState(["btc"]);return t.jsx("div",{style:j,children:t.jsx(c,{...e,multiple:!0,open:n,value:n?a:s,renderOption:P,panelFooter:t.jsxs("div",{style:ke,children:[t.jsx(E,{color:"grey",size:"small",style:{flex:1},onClick:()=>{p([])},children:"Reset"}),t.jsx(E,{size:"small",style:{flex:1},onClick:()=>{var r;l(a),o(!1),(r=e.onOpenChange)==null||r.call(e,!1)},children:"Apply"})]}),onOpenChange:r=>{var u;o(r),p(s),(u=e.onOpenChange)==null||u.call(e,r)},onChange:(r,u)=>{var d;p(r??[]),(d=e.onChange)==null||d.call(e,r,u)}})})},args:{label:void 0,placeholder:"Select assets",options:w,size:"small"},tags:["!autodocs","dev"]},V={render:e=>{const[n,o]=i.useState("usdt");return t.jsx("div",{style:j,children:t.jsx(c,{...e,value:n,renderOption:P,onChange:(s,l)=>{var a;o(s),(a=e.onChange)==null||a.call(e,s,l)}})})},args:{label:void 0,placeholder:"Select asset",options:ve,value:"usdt"},tags:["!autodocs","dev"]},O={render:e=>{const[n,o]=i.useState(void 0),[s,l]=i.useState(""),a=s.trim().toLowerCase(),p=a?w.filter(r=>{const u=String(r.label).toLowerCase(),d=String(r.description??"").toLowerCase(),be=String(r.value).toLowerCase();return u.includes(a)||d.includes(a)||be.includes(a)}):[];return t.jsx("div",{style:j,children:t.jsx(c,{...e,value:n,options:p,searchValue:s,emptyContent:a?"No matches":"Type to search assets",onSearchChange:r=>{var u;l(r),(u=e.onSearchChange)==null||u.call(e,r)},onChange:(r,u)=>{var d;o(r),(d=e.onChange)==null||d.call(e,r,u)}})})},args:{label:void 0,placeholder:"Select asset",searchable:!0,searchPlaceholder:"Search"},tags:["!autodocs","dev"]},k={render:e=>{const[n,o]=i.useState("usdt");return t.jsx("div",{style:j,children:t.jsx(c,{...e,value:n,renderOption:P,onChange:(s,l)=>{var a;o(s),(a=e.onChange)==null||a.call(e,s,l)}})})},args:{label:void 0,placeholder:"Select asset",options:ve,searchable:!0,searchPlaceholder:"Search",value:"usdt"},tags:["!autodocs","dev"]};var T,z,I;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | undefined>('btc');
    return <Select {...args} value={value} onChange={(nextValue, option) => {
      setValue(nextValue as string | number | undefined);
      args.onChange?.(nextValue, option);
    }} />;
  }
}`,...(I=(z=m.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var U,B,_;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...(_=(B=h.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var G,N,F;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'stroke'
  }
}`,...(F=(N=g.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var L,M,R;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'small',
    value: 'eth'
  }
}`,...(R=(M=S.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var H,W,$;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    status: 'error',
    feedback: 'Feedback',
    value: undefined
  }
}`,...($=(W=v.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var q,J,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,se;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,re,le;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,ue,ce;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,pe,me;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | number | undefined>(undefined);
    const [searchValue, setSearchValue] = useState('');
    const trimmed = searchValue.trim().toLowerCase();
    const filteredOptions = trimmed ? ASSET_OPTIONS.filter(option => {
      const label = String(option.label).toLowerCase();
      const description = String(option.description ?? '').toLowerCase();
      const optionValue = String(option.value).toLowerCase();
      return label.includes(trimmed) || description.includes(trimmed) || optionValue.includes(trimmed);
    }) : [];
    return <div style={storyContainerStyle}>
        <Select {...args} value={value} options={filteredOptions} searchValue={searchValue} emptyContent={trimmed ? 'No matches' : 'Type to search assets'} onSearchChange={next => {
        setSearchValue(next);
        args.onSearchChange?.(next);
      }} onChange={(nextValue, option) => {
        setValue(nextValue as string | number | undefined);
        args.onChange?.(nextValue, option);
      }} />
      </div>;
  },
  args: {
    label: undefined,
    placeholder: 'Select asset',
    searchable: true,
    searchPlaceholder: 'Search'
  },
  tags: ['!autodocs', 'dev']
}`,...(me=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ge,Se;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Se=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};const Ke=["Default","Placeholder","Stroke","Small","Error","Multiple","MultipleCollapsed","Frameless","Grouped","AssetMultiSelectActions","GroupedAssetOptions","SearchOnlyFiltered","SearchableGrouped"];export{y as AssetMultiSelectActions,m as Default,v as Error,C as Frameless,x as Grouped,V as GroupedAssetOptions,b as Multiple,f as MultipleCollapsed,h as Placeholder,O as SearchOnlyFiltered,k as SearchableGrouped,S as Small,g as Stroke,Ke as __namedExportsOrder,Je as default};
