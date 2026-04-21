import{V as b}from"./VirtualTable-DmIF7ekw.js";/* empty css               */import"./index-aHjF776K.js";/* empty css                *//* empty css                 */import"./Typography-Cf4nMeBT.js";import"./Icons-BarT8jPS.js";import"./Empty-CRvlJAon.js";import"./Pagination-CMtXXL0f.js";import"./Tag-Ctn3bKrf.js";import"./RadioGroup-xdWhlKff.js";import"./jsx-runtime-BjG_zV1W.js";import"./index-CP2yOfOm.js";import"./classnames-h1fAIaEr.js";import"./Spinner-Jb3tNeNT.js";import"./iframe-Dtz7r3Se.js";import"./index-_M0HKnWf.js";import"./index-D1q9exoj.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./index-CN0Pk037.js";import"./VirtualList-DGdvWJRn.js";import"./index-CyN509qF.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";const w=Array.from({length:20},(o,e)=>({id:String(e+1),wallet:`Wallet ${e+1}`,network:e%2===0?"Ethereum":"Solana",amount:(e+1)*125,children:e===0?[{id:"1-1",wallet:"Wallet 1 / Child",network:"Ethereum",amount:50}]:void 0})),h=[{key:"wallet",dataIndex:"wallet",title:"Wallet",width:260},{key:"network",dataIndex:"network",title:"Network",width:180},{key:"amount",dataIndex:"amount",title:"Amount",width:180}],F={title:"Components/VirtualTable",component:b,args:{rowKey:"id",scroll:{x:960,y:240},columns:h,dataSource:w},tags:["autodocs"]},r={},t={args:{expandable:{expandedRowRender:o=>`Expanded details for ${o.wallet}`}}},a={args:{rowSelection:{type:"checkbox"},childrenColumnName:"children",dataSource:w}};var l,n,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,s,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    expandable: {
      expandedRowRender: (record: Record<string, any>) => \`Expanded details for \${record.wallet}\`
    }
  }
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    rowSelection: {
      type: 'checkbox'
    },
    childrenColumnName: 'children',
    dataSource: rows
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const G=["VirtualTableBasic","VirtualTableExpandable","VirtualTableTreeSelection"];export{r as VirtualTableBasic,t as VirtualTableExpandable,a as VirtualTableTreeSelection,G as __namedExportsOrder,F as default};
