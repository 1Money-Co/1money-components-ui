import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as a}from"./index-DCiaR2iG.js";import{I as i}from"./Icons-SFvHKrvT.js";import{I as B,a as G,b as l}from"./Trade-BNz20dPt.js";import"./index-CP2yOfOm.js";import"./classnames-h1fAIaEr.js";import"./Spinner-Y03QkMt7.js";import"./iframe-Dp6AQwMc.js";import"./Typography-C20XyoYo.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./Icons-Dt6lPN1Q.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./Skeleton-BbdGRf15.js";const xe={title:"Components/Input",component:l,argTypes:{disabled:{control:"boolean"},allowClear:{control:"boolean"},size:{control:"radio",options:[...G]},status:{control:"radio",options:[...B]},label:{control:"text"},feedback:{control:"text"},feedbackIcon:{control:!1},placeholder:{control:"text"}},args:{disabled:!1,allowClear:!0,size:"large",status:"default",label:"Label",feedback:"Feedback",feedbackIcon:e.jsx(i,{name:"info",size:16}),placeholder:"Value",onChange:a()},tags:["autodocs"]},c={render:()=>{const d=["large","small"],t=["default","error"],s=["Placeholder","Filled"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[d.map(n=>e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px",textTransform:"capitalize"},children:n}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[t.map(r=>s.map(v=>e.jsxs("div",{style:{width:310},children:[e.jsxs("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:[r," / ",v]}),e.jsx(l,{size:n,status:r,label:"Label",feedback:"Feedback",feedbackIcon:r==="error"?e.jsx(i,{name:"error",size:16}):e.jsx(i,{name:"info",size:16}),placeholder:"Value",allowClear:!0,defaultValue:v==="Filled"?"Input value":void 0})]},`${r}-${v}`))),s.map(r=>e.jsxs("div",{style:{width:310},children:[e.jsxs("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:["read-only / ",r]}),e.jsx(l,{size:n,readOnly:!0,label:"Label",feedback:"Feedback",feedbackIcon:e.jsx(i,{name:"info",size:16}),placeholder:"Value",defaultValue:r==="Filled"?"Read-only value":void 0})]},`readonly-${r}`)),s.map(r=>e.jsxs("div",{style:{width:310},children:[e.jsxs("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:["disabled / ",r]}),e.jsx(l,{size:n,disabled:!0,label:"Label",feedback:"Feedback",feedbackIcon:e.jsx(i,{name:"info",size:16}),placeholder:"Value",defaultValue:r==="Filled"?"Disabled value":void 0})]},`disabled-${r}`))]})]},n)),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"With Prefix / Suffix"}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Prefix + Suffix"}),e.jsx(l,{label:"Label",defaultValue:"100",prefix:e.jsx("span",{children:"USD"}),suffix:e.jsx("span",{children:"Max"}),allowClear:!0})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Prefix only"}),e.jsx(l,{label:"Label",placeholder:"Enter amount",prefix:e.jsx("span",{children:"$"}),allowClear:!0})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Suffix only"}),e.jsx(l,{label:"Label",placeholder:"Enter email",suffix:e.jsx("span",{children:"@gmail.com"})})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"Required / Info"}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Required"}),e.jsx(l,{label:"Label",required:!0,placeholder:"Required field"})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Optional (required=false)"}),e.jsx(l,{label:"Label",required:!1,placeholder:"Optional field"})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"With Info"}),e.jsx(l,{label:"Label",info:"Optional hint",placeholder:"Value"})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"With Tip"}),e.jsx(l,{label:"Label",tip:"This is a helpful tooltip",placeholder:"Value"})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Optional + Info + Tip"}),e.jsx(l,{label:"Label",required:!1,info:"Optional hint",tip:"This is a helpful tooltip",placeholder:"Value"})]})]})]})]})},tags:["!autodocs"]},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Large"}),e.jsx(l,{label:"Label",placeholder:"Loading...",loading:!0})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Small"}),e.jsx(l,{size:"small",label:"Label",placeholder:"Loading...",loading:!0})]})]}),tags:["!autodocs"]},x={render:()=>{const d=["large","small"],t=["Placeholder","Filled"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:40},children:d.map(s=>e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px",textTransform:"capitalize"},children:s}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[t.map(n=>e.jsxs("div",{style:{width:310},children:[e.jsxs("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:["default / ",n]}),e.jsx(l.Password,{size:s,label:"Password",feedback:"Feedback",feedbackIcon:e.jsx(i,{name:"info",size:16}),placeholder:"Enter password",defaultValue:n==="Filled"?"secretpass":void 0})]},`default-${n}`)),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"error / Filled"}),e.jsx(l.Password,{size:s,status:"error",label:"Password",feedback:"Password too short",feedbackIcon:e.jsx(i,{name:"error",size:16}),placeholder:"Enter password",defaultValue:"123"})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"disabled / Filled"}),e.jsx(l.Password,{size:s,disabled:!0,label:"Password",placeholder:"Enter password",defaultValue:"secretpass"})]})]})]},s))})},tags:["!autodocs"]},u={render:()=>{const d=a(),t=["large","small"],s=[{label:"Default",props:{}},{label:"Disabled",props:{disabled:!0}}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[t.map(n=>e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px",textTransform:"capitalize"},children:n}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",color:"#666",fontSize:13},children:"Placeholder"}),e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:s.map(r=>e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:r.label}),e.jsx(l.Search,{size:n,placeholder:"Search",onSearch:d,...r.props})]},r.label))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",color:"#666",fontSize:13},children:"Filled"}),e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:s.map(r=>e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:r.label}),e.jsx(l.Search,{size:n,placeholder:"Search",defaultValue:"Search",allowClear:!0,onSearch:d,...r.props})]},r.label))})]})]})]},n)),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"Loading"}),e.jsx("div",{style:{display:"flex",gap:16},children:e.jsx("div",{style:{width:310},children:e.jsx(l.Search,{placeholder:"Search",defaultValue:"Search",loading:!0,onSearch:d})})})]})]})},tags:["!autodocs"]},f={render:()=>{const d=["default","error"],t=["Placeholder","Filled"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"Large"}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[d.map(s=>t.map(n=>e.jsxs("div",{style:{width:400},children:[e.jsxs("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:[s," / ",n]}),e.jsx(l.TextArea,{label:"Label",feedback:"Feedback",feedbackIcon:s==="error"?e.jsx(i,{name:"error",size:16}):e.jsx(i,{name:"info",size:16}),status:s,placeholder:"Value",defaultValue:n==="Filled"?"Longer memo value that spans multiple lines to demonstrate the filled state of the textarea component":void 0,rows:4,showCount:!0,maxLength:250})]},`${s}-${n}`))),t.map(s=>e.jsxs("div",{style:{width:400},children:[e.jsxs("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:["disabled / ",s]}),e.jsx(l.TextArea,{label:"Label",feedback:"Feedback",feedbackIcon:e.jsx(i,{name:"info",size:16}),disabled:!0,placeholder:"Value",defaultValue:s==="Filled"?"Disabled filled value":void 0,rows:4,showCount:!0,maxLength:250})]},`disabled-${s}`))]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"Small"}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:{width:400},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"default / Placeholder"}),e.jsx(l.TextArea,{size:"small",label:"Label",feedback:"Feedback",feedbackIcon:e.jsx(i,{name:"info",size:16}),placeholder:"Value",rows:3,showCount:!0,maxLength:250})]}),e.jsxs("div",{style:{width:400},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"default / Filled"}),e.jsx(l.TextArea,{size:"small",label:"Label",feedback:"Feedback",feedbackIcon:e.jsx(i,{name:"info",size:16}),placeholder:"Value",defaultValue:"Small filled value",rows:3,showCount:!0,maxLength:250})]})]})]})]})},tags:["!autodocs"]},h={render:()=>{const d=a(),t=a();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"Large"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"default / Empty"}),e.jsx(l.OTP,{label:"Verification Code",feedback:"Feedback",feedbackIcon:e.jsx(i,{name:"info",size:16}),length:6,onComplete:d,onChange:t})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"default / Partial"}),e.jsx(l.OTP,{label:"Verification Code",feedback:"Feedback",feedbackIcon:e.jsx(i,{name:"info",size:16}),length:6,defaultValue:"123",onComplete:d,onChange:t})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"error"}),e.jsx(l.OTP,{label:"Verification Code",status:"error",feedback:"Invalid code",feedbackIcon:e.jsx(i,{name:"error",size:16}),length:6,defaultValue:"999999",onComplete:d,onChange:t})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"disabled"}),e.jsx(l.OTP,{label:"Verification Code",disabled:!0,length:6,defaultValue:"123456",onComplete:d,onChange:t})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"mask (password style)"}),e.jsx(l.OTP,{label:"PIN Code",length:6,defaultValue:"1234",mask:!0,onComplete:d,onChange:t})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"Small"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"default / Empty"}),e.jsx(l.OTP,{size:"small",label:"Code",length:6,onComplete:d,onChange:t})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"4-digit code"}),e.jsx(l.OTP,{size:"small",label:"PIN",length:4,defaultValue:"12",onComplete:d,onChange:t})]})]})]})]})},tags:["!autodocs"]},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,maxWidth:660},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Default (Placeholder)"}),e.jsx(l.Trade,{currencySymbol:"$",currencyUnit:"USD",showMax:!0,onMax:a(),onSwap:a(),exchangeText:"0 USDT"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Default (Filled)"}),e.jsx(l.Trade,{currencySymbol:"$",currencyUnit:"USD",defaultValue:"123,456,789",showMax:!0,onMax:a(),onSwap:a(),exchangeText:"123,456,789 USDT"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Error"}),e.jsx(l.Trade,{currencySymbol:"$",currencyUnit:"USD",defaultValue:"123,456,789",status:"error",showMax:!0,onMax:a(),onSwap:a(),exchangeText:"123,456,789 USDT",feedback:"Insufficient balance"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Disabled"}),e.jsx(l.Trade,{currencySymbol:"$",currencyUnit:"USD",defaultValue:"123,456,789",disabled:!0,showMax:!0,onSwap:a(),exchangeText:"123,456,789 USDT"})]})]}),tags:["!autodocs"]},g="https://static.1money.com/images/asset/usdt.png?w=48&q=75",o="https://static.1money.com/images/asset/usdc.png?w=48&q=75",y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"Large"}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:{width:400},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Placeholder"}),e.jsx(l.Amount,{label:"You send",feedback:"$2,992.68 USDC available",feedbackIcon:e.jsx(i,{name:"info",size:16}),placeholder:"Enter amount",actionLabel:"Use Max",onAction:a(),currencyIcon:e.jsx("img",{src:o,alt:"USDC"}),currencyLabel:"USDC",onCurrencyClick:a()})]}),e.jsxs("div",{style:{width:400},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Filled"}),e.jsx(l.Amount,{label:"You send",feedback:"$2,992.68 USDC available",feedbackIcon:e.jsx(i,{name:"info",size:16}),defaultValue:"1,250.00",actionLabel:"Use Max",onAction:a(),currencyIcon:e.jsx("img",{src:o,alt:"USDC"}),currencyLabel:"USDC",onCurrencyClick:a()})]}),e.jsxs("div",{style:{width:400},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Disabled"}),e.jsx(l.Amount,{label:"You send",feedback:"$2,992.68 USDC available",feedbackIcon:e.jsx(i,{name:"info",size:16}),disabled:!0,actionLabel:"Use Max",currencyIcon:e.jsx("img",{src:o,alt:"USDC"}),currencyLabel:"USDC"})]}),e.jsxs("div",{style:{width:400},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Error"}),e.jsx(l.Amount,{label:"You send",status:"error",feedback:"Insufficient balance",feedbackIcon:e.jsx(i,{name:"error",size:16}),defaultValue:"999,999.99",actionLabel:"Use Max",onAction:a(),currencyIcon:e.jsx("img",{src:o,alt:"USDC"}),currencyLabel:"USDC",onCurrencyClick:a()})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"Small"}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:{width:400},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Placeholder"}),e.jsx(l.Amount,{size:"small",label:"You send",feedback:"$2,992.68 USDT available",feedbackIcon:e.jsx(i,{name:"info",size:16}),placeholder:"Enter amount",actionLabel:"Use Max",onAction:a(),currencyIcon:e.jsx("img",{src:g,alt:"USDT"}),currencyLabel:"USDT",onCurrencyClick:a()})]}),e.jsxs("div",{style:{width:400},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Filled"}),e.jsx(l.Amount,{size:"small",label:"You send",feedback:"$2,992.68 USDT available",feedbackIcon:e.jsx(i,{name:"info",size:16}),defaultValue:"500.00",actionLabel:"Use Max",onAction:a(),currencyIcon:e.jsx("img",{src:g,alt:"USDT"}),currencyLabel:"USDT",onCurrencyClick:a()})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"With Prefix Currency"}),e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:e.jsx("div",{style:{width:400},children:e.jsx(l.Amount,{label:"You send",feedback:"65,482.55 USD1 available",feedbackIcon:e.jsx(i,{name:"info",size:16}),defaultValue:"0",prefix:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[e.jsx("img",{src:g,alt:"USDT",style:{width:24,height:24,borderRadius:"50%"}}),e.jsx("span",{children:"USDT"})]}),actionLabel:"Use Max",onAction:a(),currencyIcon:e.jsx("img",{src:o,alt:"USDC"}),currencyLabel:"USDC",onCurrencyClick:a()})})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"Currency Only (no action button)"}),e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:e.jsx("div",{style:{width:400},children:e.jsx(l.Amount,{label:"Amount",placeholder:"0.00",currencyIcon:e.jsx("img",{src:o,alt:"USDC"}),currencyLabel:"USDC",onCurrencyClick:a()})})})]})]}),tags:["!autodocs"]},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"Common Masks"}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Phone"}),e.jsx(l.Mask,{label:"Phone",mask:"(99) 99999-9999"})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"CPF"}),e.jsx(l.Mask,{label:"CPF",mask:"999.999.999-99"})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"CNPJ"}),e.jsx(l.Mask,{label:"CNPJ",mask:"99.999.999/9999-99"})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Date"}),e.jsx(l.Mask,{label:"Date",mask:"99/99/9999"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px"},children:"States"}),e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Filled"}),e.jsx(l.Mask,{label:"CPF",mask:"999.999.999-99",defaultValue:"12345678901"})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Error"}),e.jsx(l.Mask,{label:"CPF",mask:"999.999.999-99",status:"error",feedback:"Invalid CPF",feedbackIcon:e.jsx(i,{name:"error",size:16}),defaultValue:"123"})]}),e.jsxs("div",{style:{width:310},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:12,color:"#999"},children:"Disabled"}),e.jsx(l.Mask,{label:"CPF",mask:"999.999.999-99",disabled:!0,defaultValue:"12345678901"})]})]})]})]}),tags:["!autodocs"]};var j,S,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['large', 'small'] as const;
    const statuses = ['default', 'error'] as const;
    const valueTypes = ['Placeholder', 'Filled'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }}>
        {sizes.map(size => <div key={size}>
            <h3 style={{
          margin: '0 0 16px',
          textTransform: 'capitalize'
        }}>{size}</h3>
            <div style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap'
        }}>
              {statuses.map(status => valueTypes.map(vt => <div key={\`\${status}-\${vt}\`} style={{
            width: 310
          }}>
                    <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>
                      {status} / {vt}
                    </p>
                    <Input size={size} status={status} label="Label" feedback="Feedback" feedbackIcon={status === 'error' ? <Icons name="error" size={16} /> : <Icons name="info" size={16} />} placeholder="Value" allowClear defaultValue={vt === 'Filled' ? 'Input value' : undefined} />
                  </div>))}
              {/* Read-Only */}
              {valueTypes.map(vt => <div key={\`readonly-\${vt}\`} style={{
            width: 310
          }}>
                  <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>
                    read-only / {vt}
                  </p>
                  <Input size={size} readOnly label="Label" feedback="Feedback" feedbackIcon={<Icons name="info" size={16} />} placeholder="Value" defaultValue={vt === 'Filled' ? 'Read-only value' : undefined} />
                </div>)}
              {/* Disabled */}
              {valueTypes.map(vt => <div key={\`disabled-\${vt}\`} style={{
            width: 310
          }}>
                  <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>
                    disabled / {vt}
                  </p>
                  <Input size={size} disabled label="Label" feedback="Feedback" feedbackIcon={<Icons name="info" size={16} />} placeholder="Value" defaultValue={vt === 'Filled' ? 'Disabled value' : undefined} />
                </div>)}
            </div>
          </div>)}

        {/* ── With Prefix / Suffix ── */}
        <div>
          <h3 style={{
          margin: '0 0 16px'
        }}>With Prefix / Suffix</h3>
          <div style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap'
        }}>
            <div style={{
            width: 310
          }}>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>Prefix + Suffix</p>
              <Input label="Label" defaultValue="100" prefix={<span>USD</span>} suffix={<span>Max</span>} allowClear />
            </div>
            <div style={{
            width: 310
          }}>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>Prefix only</p>
              <Input label="Label" placeholder="Enter amount" prefix={<span>$</span>} allowClear />
            </div>
            <div style={{
            width: 310
          }}>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>Suffix only</p>
              <Input label="Label" placeholder="Enter email" suffix={<span>@gmail.com</span>} />
            </div>
          </div>
        </div>

        {/* ── Required / Info ── */}
        <div>
          <h3 style={{
          margin: '0 0 16px'
        }}>Required / Info</h3>
          <div style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap'
        }}>
            <div style={{
            width: 310
          }}>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>Required</p>
              <Input label="Label" required placeholder="Required field" />
            </div>
            <div style={{
            width: 310
          }}>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>Optional (required=false)</p>
              <Input label="Label" required={false} placeholder="Optional field" />
            </div>
            <div style={{
            width: 310
          }}>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>With Info</p>
              <Input label="Label" info="Optional hint" placeholder="Value" />
            </div>
            <div style={{
            width: 310
          }}>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>With Tip</p>
              <Input label="Label" tip="This is a helpful tooltip" placeholder="Value" />
            </div>
            <div style={{
            width: 310
          }}>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>Optional + Info + Tip</p>
              <Input label="Label" required={false} info="Optional hint" tip="This is a helpful tooltip" placeholder="Value" />
            </div>
          </div>
        </div>
      </div>;
  },
  tags: ['!autodocs']
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,I,k;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      <div style={{
      width: 310
    }}>
        <p style={{
        margin: '0 0 4px',
        fontSize: 12,
        color: '#999'
      }}>Large</p>
        <Input label="Label" placeholder="Loading..." loading />
      </div>
      <div style={{
      width: 310
    }}>
        <p style={{
        margin: '0 0 4px',
        fontSize: 12,
        color: '#999'
      }}>Small</p>
        <Input size="small" label="Label" placeholder="Loading..." loading />
      </div>
    </div>,
  tags: ['!autodocs']
}`,...(k=(I=p.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var C,D,T;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['large', 'small'] as const;
    const valueTypes = ['Placeholder', 'Filled'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }}>
        {sizes.map(size => <div key={size}>
            <h3 style={{
          margin: '0 0 16px',
          textTransform: 'capitalize'
        }}>{size}</h3>
            <div style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap'
        }}>
              {valueTypes.map(vt => <div key={\`default-\${vt}\`} style={{
            width: 310
          }}>
                  <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>
                    default / {vt}
                  </p>
                  <Input.Password size={size} label="Password" feedback="Feedback" feedbackIcon={<Icons name="info" size={16} />} placeholder="Enter password" defaultValue={vt === 'Filled' ? 'secretpass' : undefined} />
                </div>)}
              {/* Error */}
              <div style={{
            width: 310
          }}>
                <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>error / Filled</p>
                <Input.Password size={size} status="error" label="Password" feedback="Password too short" feedbackIcon={<Icons name="error" size={16} />} placeholder="Enter password" defaultValue="123" />
              </div>
              {/* Disabled */}
              <div style={{
            width: 310
          }}>
                <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>disabled / Filled</p>
                <Input.Password size={size} disabled label="Password" placeholder="Enter password" defaultValue="secretpass" />
              </div>
            </div>
          </div>)}
      </div>;
  },
  tags: ['!autodocs']
}`,...(T=(D=x.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var U,L,P;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const onSearch = fn();
    const sizes = ['large', 'small'] as const;
    const columns = [{
      label: 'Default',
      props: {}
    }, {
      label: 'Disabled',
      props: {
        disabled: true
      }
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }}>
        {sizes.map(size => <div key={size}>
            <h3 style={{
          margin: '0 0 16px',
          textTransform: 'capitalize'
        }}>{size}</h3>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}>
              {/* Placeholder row */}
              <div>
                <p style={{
              margin: '0 0 8px',
              color: '#666',
              fontSize: 13
            }}>Placeholder</p>
                <div style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap'
            }}>
                  {columns.map(col => <div key={col.label} style={{
                width: 310
              }}>
                      <p style={{
                  margin: '0 0 4px',
                  fontSize: 12,
                  color: '#999'
                }}>{col.label}</p>
                      <Input.Search size={size} placeholder="Search" onSearch={onSearch} {...col.props} />
                    </div>)}
                </div>
              </div>
              {/* Filled row */}
              <div>
                <p style={{
              margin: '0 0 8px',
              color: '#666',
              fontSize: 13
            }}>Filled</p>
                <div style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap'
            }}>
                  {columns.map(col => <div key={col.label} style={{
                width: 310
              }}>
                      <p style={{
                  margin: '0 0 4px',
                  fontSize: 12,
                  color: '#999'
                }}>{col.label}</p>
                      <Input.Search size={size} placeholder="Search" defaultValue="Search" allowClear onSearch={onSearch} {...col.props} />
                    </div>)}
                </div>
              </div>
            </div>
          </div>)}
        {/* Loading */}
        <div>
          <h3 style={{
          margin: '0 0 16px'
        }}>Loading</h3>
          <div style={{
          display: 'flex',
          gap: 16
        }}>
            <div style={{
            width: 310
          }}>
              <Input.Search placeholder="Search" defaultValue="Search" loading onSearch={onSearch} />
            </div>
          </div>
        </div>
      </div>;
  },
  tags: ['!autodocs']
}`,...(P=(L=u.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var V,F,M;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const states = ['default', 'error'] as const;
    const valueTypes = ['Placeholder', 'Filled'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }}>
        {/* ── Large ── */}
        <div>
          <h3 style={{
          margin: '0 0 16px'
        }}>Large</h3>
          <div style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap'
        }}>
            {states.map(status => valueTypes.map(vt => <div key={\`\${status}-\${vt}\`} style={{
            width: 400
          }}>
                  <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>
                    {status} / {vt}
                  </p>
                  <Input.TextArea label="Label" feedback="Feedback" feedbackIcon={status === 'error' ? <Icons name="error" size={16} /> : <Icons name="info" size={16} />} status={status} placeholder="Value" defaultValue={vt === 'Filled' ? 'Longer memo value that spans multiple lines to demonstrate the filled state of the textarea component' : undefined} rows={4} showCount maxLength={250} />
                </div>))}
            {/* Disabled */}
            {valueTypes.map(vt => <div key={\`disabled-\${vt}\`} style={{
            width: 400
          }}>
                <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>
                  disabled / {vt}
                </p>
                <Input.TextArea label="Label" feedback="Feedback" feedbackIcon={<Icons name="info" size={16} />} disabled placeholder="Value" defaultValue={vt === 'Filled' ? 'Disabled filled value' : undefined} rows={4} showCount maxLength={250} />
              </div>)}
          </div>
        </div>

        {/* ── Small ── */}
        <div>
          <h3 style={{
          margin: '0 0 16px'
        }}>Small</h3>
          <div style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap'
        }}>
            <div style={{
            width: 400
          }}>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>default / Placeholder</p>
              <Input.TextArea size="small" label="Label" feedback="Feedback" feedbackIcon={<Icons name="info" size={16} />} placeholder="Value" rows={3} showCount maxLength={250} />
            </div>
            <div style={{
            width: 400
          }}>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>default / Filled</p>
              <Input.TextArea size="small" label="Label" feedback="Feedback" feedbackIcon={<Icons name="info" size={16} />} placeholder="Value" defaultValue="Small filled value" rows={3} showCount maxLength={250} />
            </div>
          </div>
        </div>
      </div>;
  },
  tags: ['!autodocs']
}`,...(M=(F=f.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var A,O,W;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const onComplete = fn();
    const onChange = fn();
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }}>
        {/* ── Large ── */}
        <div>
          <h3 style={{
          margin: '0 0 16px'
        }}>Large</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}>
            <div>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>default / Empty</p>
              <Input.OTP label="Verification Code" feedback="Feedback" feedbackIcon={<Icons name="info" size={16} />} length={6} onComplete={onComplete} onChange={onChange} />
            </div>
            <div>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>default / Partial</p>
              <Input.OTP label="Verification Code" feedback="Feedback" feedbackIcon={<Icons name="info" size={16} />} length={6} defaultValue="123" onComplete={onComplete} onChange={onChange} />
            </div>
            <div>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>error</p>
              <Input.OTP label="Verification Code" status="error" feedback="Invalid code" feedbackIcon={<Icons name="error" size={16} />} length={6} defaultValue="999999" onComplete={onComplete} onChange={onChange} />
            </div>
            <div>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>disabled</p>
              <Input.OTP label="Verification Code" disabled length={6} defaultValue="123456" onComplete={onComplete} onChange={onChange} />
            </div>
            <div>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>mask (password style)</p>
              <Input.OTP label="PIN Code" length={6} defaultValue="1234" mask onComplete={onComplete} onChange={onChange} />
            </div>
          </div>
        </div>

        {/* ── Small ── */}
        <div>
          <h3 style={{
          margin: '0 0 16px'
        }}>Small</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}>
            <div>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>default / Empty</p>
              <Input.OTP size="small" label="Code" length={6} onComplete={onComplete} onChange={onChange} />
            </div>
            <div>
              <p style={{
              margin: '0 0 4px',
              fontSize: 12,
              color: '#999'
            }}>4-digit code</p>
              <Input.OTP size="small" label="PIN" length={4} defaultValue="12" onComplete={onComplete} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>;
  },
  tags: ['!autodocs']
}`,...(W=(O=h.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var $,E,N;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    maxWidth: 660
  }}>
      <div>
        <h3 style={{
        margin: '0 0 8px'
      }}>Default (Placeholder)</h3>
        <Input.Trade currencySymbol="$" currencyUnit="USD" showMax onMax={fn()} onSwap={fn()} exchangeText="0 USDT" />
      </div>
      <div>
        <h3 style={{
        margin: '0 0 8px'
      }}>Default (Filled)</h3>
        <Input.Trade currencySymbol="$" currencyUnit="USD" defaultValue="123,456,789" showMax onMax={fn()} onSwap={fn()} exchangeText="123,456,789 USDT" />
      </div>
      <div>
        <h3 style={{
        margin: '0 0 8px'
      }}>Error</h3>
        <Input.Trade currencySymbol="$" currencyUnit="USD" defaultValue="123,456,789" status="error" showMax onMax={fn()} onSwap={fn()} exchangeText="123,456,789 USDT" feedback="Insufficient balance" />
      </div>
      <div>
        <h3 style={{
        margin: '0 0 8px'
      }}>Disabled</h3>
        <Input.Trade currencySymbol="$" currencyUnit="USD" defaultValue="123,456,789" disabled showMax onSwap={fn()} exchangeText="123,456,789 USDT" />
      </div>
    </div>,
  tags: ['!autodocs']
}`,...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var q,_,Y;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      {/* ── Large ── */}
      <div>
        <h3 style={{
        margin: '0 0 16px'
      }}>Large</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          {/* Placeholder */}
          <div style={{
          width: 400
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Placeholder</p>
            <Input.Amount label="You send" feedback="$2,992.68 USDC available" feedbackIcon={<Icons name="info" size={16} />} placeholder="Enter amount" actionLabel="Use Max" onAction={fn()} currencyIcon={<img src={USDC_ICON} alt="USDC" />} currencyLabel="USDC" onCurrencyClick={fn()} />
          </div>
          {/* Filled */}
          <div style={{
          width: 400
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Filled</p>
            <Input.Amount label="You send" feedback="$2,992.68 USDC available" feedbackIcon={<Icons name="info" size={16} />} defaultValue="1,250.00" actionLabel="Use Max" onAction={fn()} currencyIcon={<img src={USDC_ICON} alt="USDC" />} currencyLabel="USDC" onCurrencyClick={fn()} />
          </div>
          {/* Disabled */}
          <div style={{
          width: 400
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Disabled</p>
            <Input.Amount label="You send" feedback="$2,992.68 USDC available" feedbackIcon={<Icons name="info" size={16} />} disabled actionLabel="Use Max" currencyIcon={<img src={USDC_ICON} alt="USDC" />} currencyLabel="USDC" />
          </div>
          {/* Error */}
          <div style={{
          width: 400
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Error</p>
            <Input.Amount label="You send" status="error" feedback="Insufficient balance" feedbackIcon={<Icons name="error" size={16} />} defaultValue="999,999.99" actionLabel="Use Max" onAction={fn()} currencyIcon={<img src={USDC_ICON} alt="USDC" />} currencyLabel="USDC" onCurrencyClick={fn()} />
          </div>
        </div>
      </div>

      {/* ── Small ── */}
      <div>
        <h3 style={{
        margin: '0 0 16px'
      }}>Small</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <div style={{
          width: 400
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Placeholder</p>
            <Input.Amount size="small" label="You send" feedback="$2,992.68 USDT available" feedbackIcon={<Icons name="info" size={16} />} placeholder="Enter amount" actionLabel="Use Max" onAction={fn()} currencyIcon={<img src={USDT_ICON} alt="USDT" />} currencyLabel="USDT" onCurrencyClick={fn()} />
          </div>
          <div style={{
          width: 400
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Filled</p>
            <Input.Amount size="small" label="You send" feedback="$2,992.68 USDT available" feedbackIcon={<Icons name="info" size={16} />} defaultValue="500.00" actionLabel="Use Max" onAction={fn()} currencyIcon={<img src={USDT_ICON} alt="USDT" />} currencyLabel="USDT" onCurrencyClick={fn()} />
          </div>
        </div>
      </div>

      {/* ── With prefix currency selector ── */}
      <div>
        <h3 style={{
        margin: '0 0 16px'
      }}>With Prefix Currency</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <div style={{
          width: 400
        }}>
            <Input.Amount label="You send" feedback="65,482.55 USD1 available" feedbackIcon={<Icons name="info" size={16} />} defaultValue="0" prefix={<span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8
          }}>
                  <img src={USDT_ICON} alt="USDT" style={{
              width: 24,
              height: 24,
              borderRadius: '50%'
            }} />
                  <span>USDT</span>
                </span>} actionLabel="Use Max" onAction={fn()} currencyIcon={<img src={USDC_ICON} alt="USDC" />} currencyLabel="USDC" onCurrencyClick={fn()} />
          </div>
        </div>
      </div>

      {/* ── Currency only (no action) ── */}
      <div>
        <h3 style={{
        margin: '0 0 16px'
      }}>Currency Only (no action button)</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <div style={{
          width: 400
        }}>
            <Input.Amount label="Amount" placeholder="0.00" currencyIcon={<img src={USDC_ICON} alt="USDC" />} currencyLabel="USDC" onCurrencyClick={fn()} />
          </div>
        </div>
      </div>
    </div>,
  tags: ['!autodocs']
}`,...(Y=(_=y.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};var R,J,Z;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      {/* ── Common Masks ── */}
      <div>
        <h3 style={{
        margin: '0 0 16px'
      }}>Common Masks</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <div style={{
          width: 310
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Phone</p>
            <Input.Mask label="Phone" mask="(99) 99999-9999" />
          </div>
          <div style={{
          width: 310
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>CPF</p>
            <Input.Mask label="CPF" mask="999.999.999-99" />
          </div>
          <div style={{
          width: 310
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>CNPJ</p>
            <Input.Mask label="CNPJ" mask="99.999.999/9999-99" />
          </div>
          <div style={{
          width: 310
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Date</p>
            <Input.Mask label="Date" mask="99/99/9999" />
          </div>
        </div>
      </div>

      {/* ── States ── */}
      <div>
        <h3 style={{
        margin: '0 0 16px'
      }}>States</h3>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
          <div style={{
          width: 310
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Filled</p>
            <Input.Mask label="CPF" mask="999.999.999-99" defaultValue="12345678901" />
          </div>
          <div style={{
          width: 310
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Error</p>
            <Input.Mask label="CPF" mask="999.999.999-99" status="error" feedback="Invalid CPF" feedbackIcon={<Icons name="error" size={16} />} defaultValue="123" />
          </div>
          <div style={{
          width: 310
        }}>
            <p style={{
            margin: '0 0 4px',
            fontSize: 12,
            color: '#999'
          }}>Disabled</p>
            <Input.Mask label="CPF" mask="999.999.999-99" disabled defaultValue="12345678901" />
          </div>
        </div>
      </div>

    </div>,
  tags: ['!autodocs']
}`,...(Z=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};const ue=["Default","Loading","Password","Search","TextArea","OTP","Trade","Amount","Mask"];export{y as Amount,c as Default,p as Loading,b as Mask,h as OTP,x as Password,u as Search,f as TextArea,m as Trade,ue as __namedExportsOrder,xe as default};
