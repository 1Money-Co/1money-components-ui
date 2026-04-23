import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as o}from"./index-CP2yOfOm.js";import{f as fe}from"./index-DCiaR2iG.js";import{R as xe,a as ye,b as Re,c as Ce,d as je,e as De,f as ke,g as ze,h as a,i as r}from"./RadioGroup-Ho8xWJrM.js";import"./Tag-BFuFBAcT.js";import"./classnames-h1fAIaEr.js";import"./Icons-SFvHKrvT.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";import"./Typography-C20XyoYo.js";import"./ResizeObserver-DW8-DKQf.js";import"./Icons-Dt6lPN1Q.js";import"./iframe-Dp6AQwMc.js";import"./Tooltip-DeIhm5fH.js";const we=["swift","language","usd"],_e={title:"Components/Radio",component:a,argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"},variant:{control:"radio",options:[...ze]},size:{control:"radio",options:[...ke]},alignment:{control:"radio",options:[...De]},labelPlacement:{control:"radio",options:[...je]},label:{control:"text"},description:{control:"text"},tag:{control:"text"},icon:{control:"radio",options:[...we]}},args:{disabled:!1,checked:!1,variant:Ce,size:Re,alignment:ye,labelPlacement:xe,label:"Radio label",icon:"swift",onChange:fe()},tags:["autodocs"]},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Default"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Unchecked"}),e.jsx(a,{label:"Checked",checked:!0}),e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",checked:!0,disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"With Description"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Unchecked",description:"Helper text"}),e.jsx(a,{label:"Checked",description:"Helper text",checked:!0}),e.jsx(a,{label:"Disabled unchecked",description:"Helper text",disabled:!0}),e.jsx(a,{label:"Disabled checked",description:"Helper text",checked:!0,disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Label Placement: Right"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Unchecked",labelPlacement:"right"}),e.jsx(a,{label:"Checked",labelPlacement:"right",checked:!0}),e.jsx(a,{label:"With description",description:"Helper text",labelPlacement:"right"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Cell"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"left",icon:"swift",label:"Wire transfer",description:"Receive via SWIFT",style:{width:320}}),e.jsx(a,{variant:"cell",size:"medium",alignment:"left",icon:"usd",label:"USD1",style:{width:180}}),e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"center",icon:"language",tag:"Popular",label:"Global account",description:"Use for international settlement",style:{width:220}})]})]})]}),tags:["!autodocs","dev"]},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Unchecked"}),e.jsx(a,{label:"Checked",checked:!0}),e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",checked:!0,disabled:!0})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Option 1",description:"Description for option 1"}),e.jsx(a,{label:"Option 2",description:"Description for option 2",checked:!0})]})},p={render:()=>{const[t,i]=o.useState("a"),n=l=>{l.target.value!==void 0&&i(l.target.value)};return e.jsxs(r,{value:t,onChange:n,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})}},m={render:()=>{const[t,i]=o.useState("email"),n=l=>{l.target.value!==void 0&&i(l.target.value)};return e.jsx(r,{value:t,onChange:n,options:[{value:"email",label:"Email",description:"Receive via email"},{value:"sms",label:"SMS",description:"Receive via text message"},{value:"push",label:"Push notification",description:"Receive on your device"}]})}},b={render:()=>{const[t,i]=o.useState("sm"),n=l=>{l.target.value!==void 0&&i(l.target.value)};return e.jsxs(r,{value:t,onChange:n,direction:"horizontal",children:[e.jsx(a,{value:"sm",label:"Small"}),e.jsx(a,{value:"md",label:"Medium"}),e.jsx(a,{value:"lg",label:"Large"})]})}},f={render:()=>{const[t,i]=o.useState("a"),[n,l]=o.useState("a"),d=c=>{c.target.value!==void 0&&i(c.target.value)},u=c=>{c.target.value!==void 0&&l(c.target.value)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Direction Vertical"}),e.jsxs(r,{value:t,onChange:d,direction:"vertical",children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Direction Horizontal"}),e.jsxs(r,{value:n,onChange:u,direction:"horizontal",children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})]})]})}},x={render:()=>e.jsxs(r,{value:"a",disabled:!0,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})},y={render:()=>{const[t,i]=o.useState("a"),n=l=>{l.target.value!==void 0&&i(l.target.value)};return e.jsxs(r,{value:t,onChange:n,labelPlacement:"right",children:[e.jsx(a,{value:"a",label:"Option A",description:"Description A"}),e.jsx(a,{value:"b",label:"Option B",description:"Description B"})]})}},R={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"left",icon:"swift",label:"Checked",description:"Primary selection",style:{width:300}}),e.jsx(a,{checked:!0,variant:"cell",size:"medium",alignment:"left",icon:"swift",label:"Medium",style:{width:180}}),e.jsx(a,{checked:!0,variant:"cell",size:"small",alignment:"left",icon:"swift",label:"Small",style:{width:180}}),e.jsx(a,{checked:!0,disabled:!0,variant:"cell",size:"large",alignment:"left",icon:"swift",label:"Disabled checked",description:"Disabled state",style:{width:300}})]})},C={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"center",icon:"language",tag:"Tag",label:"Global account",description:"International transfers",style:{width:200}}),e.jsx(a,{checked:!0,variant:"cell",size:"medium",alignment:"center",icon:"usd",label:"USD1",style:{width:200}}),e.jsx(a,{checked:!0,variant:"cell",size:"small",alignment:"center",icon:"usd",label:"USD1",style:{width:200}})]})},j={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Alignment Left"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"left",icon:"swift",label:"Large",description:"Description",style:{width:300}}),e.jsx(a,{checked:!0,variant:"cell",size:"medium",alignment:"left",icon:"swift",label:"Medium",style:{width:180}}),e.jsx(a,{checked:!0,variant:"cell",size:"small",alignment:"left",icon:"swift",label:"Small",style:{width:180}})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Alignment Center"}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"center",icon:"language",tag:"Tag",label:"Large",description:"Description",style:{width:200}}),e.jsx(a,{checked:!0,variant:"cell",size:"medium",alignment:"center",icon:"usd",label:"Medium",style:{width:200}}),e.jsx(a,{checked:!0,variant:"cell",size:"small",alignment:"center",icon:"usd",label:"Small",style:{width:200}})]})]})]})},D={render:()=>{const[t,i]=o.useState("swift"),n=l=>{l.target.value!==void 0&&i(l.target.value)};return e.jsx(r,{value:t,variant:"cell",size:"large",alignment:"left",direction:"horizontal",onChange:n,options:[{value:"swift",label:"SWIFT",description:"Receive via bank rails",icon:"swift"},{value:"global",label:"Global account",description:"International settlement",icon:"language"}]})}},k={render:()=>{const[t,i]=o.useState("swift"),[n,l]=o.useState("swift"),d=[{value:"swift",label:"SWIFT",description:"Receive via bank rails",icon:"swift"},{value:"global",label:"Global account",description:"International settlement",icon:"language"}],u=s=>{s.target.value!==void 0&&i(s.target.value)},c=s=>{s.target.value!==void 0&&l(s.target.value)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{width:320},children:[e.jsx("h3",{style:{marginBottom:12},children:"Cell Direction Vertical"}),e.jsx(r,{value:t,variant:"cell",size:"large",alignment:"left",direction:"vertical",onChange:u,options:d})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Cell Direction Horizontal"}),e.jsx(r,{value:n,variant:"cell",size:"large",alignment:"left",direction:"horizontal",onChange:c,options:d})]})]})}},z={render:()=>{const[t,i]=o.useState("checked"),[n,l]=o.useState("checked"),d=[{value:"checked",label:"Label",description:"Description",icon:"language"},{value:"unchecked",label:"Label",description:"Description",icon:"swift"}],u=s=>{s.target.value!==void 0&&i(s.target.value)},c=s=>{s.target.value!==void 0&&l(s.target.value)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{width:300},children:[e.jsx("h3",{style:{marginBottom:12},children:"Alignment Left"}),e.jsx(r,{value:t,variant:"cell",size:"large",alignment:"left",direction:"vertical",onChange:u,options:d})]}),e.jsxs("div",{style:{width:300},children:[e.jsx("h3",{style:{marginBottom:12},children:"Alignment Center"}),e.jsx(r,{value:n,variant:"cell",size:"large",alignment:"center",direction:"vertical",onChange:c,options:d})]})]})}};var w,S,V;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Default</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Radio label="Unchecked" />
          <Radio label="Checked" checked />
          <Radio label="Disabled unchecked" disabled />
          <Radio label="Disabled checked" checked disabled />
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>With Description</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Radio label="Unchecked" description="Helper text" />
          <Radio label="Checked" description="Helper text" checked />
          <Radio label="Disabled unchecked" description="Helper text" disabled />
          <Radio label="Disabled checked" description="Helper text" checked disabled />
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Label Placement: Right</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Radio label="Unchecked" labelPlacement="right" />
          <Radio label="Checked" labelPlacement="right" checked />
          <Radio label="With description" description="Helper text" labelPlacement="right" />
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Cell</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Radio checked variant="cell" size="large" alignment="left" icon="swift" label="Wire transfer" description="Receive via SWIFT" style={{
          width: 320
        }} />
          <Radio variant="cell" size="medium" alignment="left" icon="usd" label="USD1" style={{
          width: 180
        }} />
          <Radio checked variant="cell" size="large" alignment="center" icon="language" tag="Popular" label="Global account" description="Use for international settlement" style={{
          width: 220
        }} />
        </div>
      </div>
    </div>,
  tags: ['!autodocs', 'dev']
}`,...(V=(S=h.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var G,A,O;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Radio label="Unchecked" />
      <Radio label="Checked" checked />
      <Radio label="Disabled unchecked" disabled />
      <Radio label="Disabled checked" checked disabled />
    </div>
}`,...(O=(A=g.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var B,L,I;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Radio label="Option 1" description="Description for option 1" />
      <Radio label="Option 2" description="Description for option 2" checked />
    </div>
}`,...(I=(L=v.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var E,H,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string | number>('a');
    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };
    return <RadioGroup value={value} onChange={handleChange}>
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
        <Radio value="c" label="Option C" />
      </RadioGroup>;
  }
}`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var T,U,W;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string | number>('email');
    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };
    return <RadioGroup value={value} onChange={handleChange} options={[{
      value: 'email',
      label: 'Email',
      description: 'Receive via email'
    }, {
      value: 'sms',
      label: 'SMS',
      description: 'Receive via text message'
    }, {
      value: 'push',
      label: 'Push notification',
      description: 'Receive on your device'
    }]} />;
  }
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var M,_,F;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string | number>('sm');
    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };
    return <RadioGroup value={value} onChange={handleChange} direction="horizontal">
        <Radio value="sm" label="Small" />
        <Radio value="md" label="Medium" />
        <Radio value="lg" label="Large" />
      </RadioGroup>;
  }
}`,...(F=(_=b.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var N,Z,q;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [verticalValue, setVerticalValue] = React.useState<string | number>('a');
    const [horizontalValue, setHorizontalValue] = React.useState<string | number>('a');
    const handleVerticalChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setVerticalValue(event.target.value);
      }
    };
    const handleHorizontalChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setHorizontalValue(event.target.value);
      }
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <div>
          <h3 style={{
          marginBottom: 12
        }}>Direction Vertical</h3>
          <RadioGroup value={verticalValue} onChange={handleVerticalChange} direction="vertical">
            <Radio value="a" label="Option A" />
            <Radio value="b" label="Option B" />
            <Radio value="c" label="Option C" />
          </RadioGroup>
        </div>
        <div>
          <h3 style={{
          marginBottom: 12
        }}>Direction Horizontal</h3>
          <RadioGroup value={horizontalValue} onChange={handleHorizontalChange} direction="horizontal">
            <Radio value="a" label="Option A" />
            <Radio value="b" label="Option B" />
            <Radio value="c" label="Option C" />
          </RadioGroup>
        </div>
      </div>;
  }
}`,...(q=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <RadioGroup value="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,$;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string | number>('a');
    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };
    return <RadioGroup value={value} onChange={handleChange} labelPlacement="right">
        <Radio value="a" label="Option A" description="Description A" />
        <Radio value="b" label="Option B" description="Description B" />
      </RadioGroup>;
  }
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ae,le;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Radio checked variant="cell" size="large" alignment="left" icon="swift" label="Checked" description="Primary selection" style={{
      width: 300
    }} />
      <Radio checked variant="cell" size="medium" alignment="left" icon="swift" label="Medium" style={{
      width: 180
    }} />
      <Radio checked variant="cell" size="small" alignment="left" icon="swift" label="Small" style={{
      width: 180
    }} />
      <Radio checked disabled variant="cell" size="large" alignment="left" icon="swift" label="Disabled checked" description="Disabled state" style={{
      width: 300
    }} />
    </div>
}`,...(le=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var te,ie,ne;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }}>
      <Radio checked variant="cell" size="large" alignment="center" icon="language" tag="Tag" label="Global account" description="International transfers" style={{
      width: 200
    }} />
      <Radio checked variant="cell" size="medium" alignment="center" icon="usd" label="USD1" style={{
      width: 200
    }} />
      <Radio checked variant="cell" size="small" alignment="center" icon="usd" label="USD1" style={{
      width: 200
    }} />
    </div>
}`,...(ne=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var re,se,oe;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Alignment Left</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Radio checked variant="cell" size="large" alignment="left" icon="swift" label="Large" description="Description" style={{
          width: 300
        }} />
          <Radio checked variant="cell" size="medium" alignment="left" icon="swift" label="Medium" style={{
          width: 180
        }} />
          <Radio checked variant="cell" size="small" alignment="left" icon="swift" label="Small" style={{
          width: 180
        }} />
        </div>
      </div>
      <div>
        <h3 style={{
        marginBottom: 12
      }}>Alignment Center</h3>
        <div style={{
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
          <Radio checked variant="cell" size="large" alignment="center" icon="language" tag="Tag" label="Large" description="Description" style={{
          width: 200
        }} />
          <Radio checked variant="cell" size="medium" alignment="center" icon="usd" label="Medium" style={{
          width: 200
        }} />
          <Radio checked variant="cell" size="small" alignment="center" icon="usd" label="Small" style={{
          width: 200
        }} />
        </div>
      </div>
    </div>
}`,...(oe=(se=j.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ce,de,ue;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string | number>('swift');
    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };
    return <RadioGroup value={value} variant="cell" size="large" alignment="left" direction="horizontal" onChange={handleChange} options={[{
      value: 'swift',
      label: 'SWIFT',
      description: 'Receive via bank rails',
      icon: 'swift'
    }, {
      value: 'global',
      label: 'Global account',
      description: 'International settlement',
      icon: 'language'
    }]} />;
  }
}`,...(ue=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var he,ge,ve;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [verticalValue, setVerticalValue] = React.useState<string | number>('swift');
    const [horizontalValue, setHorizontalValue] = React.useState<string | number>('swift');
    const options = [{
      value: 'swift',
      label: 'SWIFT',
      description: 'Receive via bank rails',
      icon: 'swift'
    }, {
      value: 'global',
      label: 'Global account',
      description: 'International settlement',
      icon: 'language'
    }];
    const handleVerticalChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setVerticalValue(event.target.value);
      }
    };
    const handleHorizontalChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setHorizontalValue(event.target.value);
      }
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <div style={{
        width: 320
      }}>
          <h3 style={{
          marginBottom: 12
        }}>Cell Direction Vertical</h3>
          <RadioGroup value={verticalValue} variant="cell" size="large" alignment="left" direction="vertical" onChange={handleVerticalChange} options={options} />
        </div>
        <div>
          <h3 style={{
          marginBottom: 12
        }}>Cell Direction Horizontal</h3>
          <RadioGroup value={horizontalValue} variant="cell" size="large" alignment="left" direction="horizontal" onChange={handleHorizontalChange} options={options} />
        </div>
      </div>;
  }
}`,...(ve=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var pe,me,be;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [leftValue, setLeftValue] = React.useState<string | number>('checked');
    const [centerValue, setCenterValue] = React.useState<string | number>('checked');
    const options = [{
      value: 'checked',
      label: 'Label',
      description: 'Description',
      icon: 'language'
    }, {
      value: 'unchecked',
      label: 'Label',
      description: 'Description',
      icon: 'swift'
    }];
    const handleLeftChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setLeftValue(event.target.value);
      }
    };
    const handleCenterChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setCenterValue(event.target.value);
      }
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <div style={{
        width: 300
      }}>
          <h3 style={{
          marginBottom: 12
        }}>Alignment Left</h3>
          <RadioGroup value={leftValue} variant="cell" size="large" alignment="left" direction="vertical" onChange={handleLeftChange} options={options} />
        </div>
        <div style={{
        width: 300
      }}>
          <h3 style={{
          marginBottom: 12
        }}>Alignment Center</h3>
          <RadioGroup value={centerValue} variant="cell" size="large" alignment="center" direction="vertical" onChange={handleCenterChange} options={options} />
        </div>
      </div>;
  }
}`,...(be=(me=z.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const Fe=["AllVariants","States","WithDescription","GroupBasic","GroupWithOptions","GroupHorizontal","GroupDirections","GroupDisabled","GroupLabelPlacementRight","CellStates","CellCentered","CellSizeMatrix","GroupCellOptions","GroupCellDirections","GroupCellAlignments"];export{h as AllVariants,C as CellCentered,j as CellSizeMatrix,R as CellStates,p as GroupBasic,z as GroupCellAlignments,k as GroupCellDirections,D as GroupCellOptions,f as GroupDirections,x as GroupDisabled,b as GroupHorizontal,y as GroupLabelPlacementRight,m as GroupWithOptions,g as States,v as WithDescription,Fe as __namedExportsOrder,_e as default};
