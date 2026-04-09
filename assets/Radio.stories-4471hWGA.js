import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{R as o}from"./index-CP2yOfOm.js";import{f as fe}from"./index-DCiaR2iG.js";import{R as xe,a as ye,b as Re,c as Ce,d as je,e as De,f as a,g as r}from"./RadioGroup-BJ4jiSVe.js";import"./Tag-C5k1NAle.js";import"./classnames-0AlMal0H.js";import"./Icons-C17k0gNH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./index-nCcupNJZ.js";import"./Typography-COcdYQQO.js";import"./ResizeObserver-DbXOvenx.js";import"./clipboard-C7s2bcmm.js";import"./iframe-C8OcTo_O.js";import"./Tooltip-CsTd8WLo.js";const ke=["swift","language","usd"],Me={title:"Components/Radio",component:a,argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"},variant:{control:"radio",options:[...De]},size:{control:"radio",options:[...je]},alignment:{control:"radio",options:[...Ce]},label:{control:"text"},description:{control:"text"},tag:{control:"text"},icon:{control:"radio",options:[...ke]}},args:{disabled:!1,checked:!1,variant:Re,size:ye,alignment:xe,label:"Radio label",icon:"swift",onChange:fe()},tags:["autodocs"]},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Default"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Unchecked"}),e.jsx(a,{label:"Checked",checked:!0}),e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",checked:!0,disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"With Description"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Unchecked",description:"Helper text"}),e.jsx(a,{label:"Checked",description:"Helper text",checked:!0}),e.jsx(a,{label:"Disabled unchecked",description:"Helper text",disabled:!0}),e.jsx(a,{label:"Disabled checked",description:"Helper text",checked:!0,disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Alignment: Right"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Unchecked",alignment:"right"}),e.jsx(a,{label:"Checked",alignment:"right",checked:!0}),e.jsx(a,{label:"With description",description:"Helper text",alignment:"right"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Cell"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"left",icon:"swift",label:"Wire transfer",description:"Receive via SWIFT",style:{width:320}}),e.jsx(a,{variant:"cell",size:"medium",alignment:"left",icon:"usd",label:"USD1",style:{width:180}}),e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"center",icon:"language",tag:"Popular",label:"Global account",description:"Use for international settlement",style:{width:220}})]})]})]}),tags:["!autodocs","dev"]},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Unchecked"}),e.jsx(a,{label:"Checked",checked:!0}),e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",checked:!0,disabled:!0})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Option 1",description:"Description for option 1"}),e.jsx(a,{label:"Option 2",description:"Description for option 2",checked:!0})]})},p={render:()=>{const[l,i]=o.useState("a"),n=t=>{t.target.value!==void 0&&i(t.target.value)};return e.jsxs(r,{value:l,onChange:n,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})}},m={render:()=>{const[l,i]=o.useState("email"),n=t=>{t.target.value!==void 0&&i(t.target.value)};return e.jsx(r,{value:l,onChange:n,options:[{value:"email",label:"Email",description:"Receive via email"},{value:"sms",label:"SMS",description:"Receive via text message"},{value:"push",label:"Push notification",description:"Receive on your device"}]})}},b={render:()=>{const[l,i]=o.useState("sm"),n=t=>{t.target.value!==void 0&&i(t.target.value)};return e.jsxs(r,{value:l,onChange:n,direction:"horizontal",children:[e.jsx(a,{value:"sm",label:"Small"}),e.jsx(a,{value:"md",label:"Medium"}),e.jsx(a,{value:"lg",label:"Large"})]})}},f={render:()=>{const[l,i]=o.useState("a"),[n,t]=o.useState("a"),d=c=>{c.target.value!==void 0&&i(c.target.value)},u=c=>{c.target.value!==void 0&&t(c.target.value)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Direction Vertical"}),e.jsxs(r,{value:l,onChange:d,direction:"vertical",children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Direction Horizontal"}),e.jsxs(r,{value:n,onChange:u,direction:"horizontal",children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})]})]})}},x={render:()=>e.jsxs(r,{value:"a",disabled:!0,children:[e.jsx(a,{value:"a",label:"Option A"}),e.jsx(a,{value:"b",label:"Option B"}),e.jsx(a,{value:"c",label:"Option C"})]})},y={render:()=>{const[l,i]=o.useState("a"),n=t=>{t.target.value!==void 0&&i(t.target.value)};return e.jsxs(r,{value:l,onChange:n,alignment:"right",children:[e.jsx(a,{value:"a",label:"Option A",description:"Description A"}),e.jsx(a,{value:"b",label:"Option B",description:"Description B"})]})}},R={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"left",icon:"swift",label:"Checked",description:"Primary selection",style:{width:300}}),e.jsx(a,{checked:!0,variant:"cell",size:"medium",alignment:"left",icon:"swift",label:"Medium",style:{width:180}}),e.jsx(a,{checked:!0,variant:"cell",size:"small",alignment:"left",icon:"swift",label:"Small",style:{width:180}}),e.jsx(a,{checked:!0,disabled:!0,variant:"cell",size:"large",alignment:"left",icon:"swift",label:"Disabled checked",description:"Disabled state",style:{width:300}})]})},C={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"center",icon:"language",tag:"Tag",label:"Global account",description:"International transfers",style:{width:200}}),e.jsx(a,{checked:!0,variant:"cell",size:"medium",alignment:"center",icon:"usd",label:"USD1",style:{width:200}}),e.jsx(a,{checked:!0,variant:"cell",size:"small",alignment:"center",icon:"usd",label:"USD1",style:{width:200}})]})},j={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Alignment Left"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"left",icon:"swift",label:"Large",description:"Description",style:{width:300}}),e.jsx(a,{checked:!0,variant:"cell",size:"medium",alignment:"left",icon:"swift",label:"Medium",style:{width:180}}),e.jsx(a,{checked:!0,variant:"cell",size:"small",alignment:"left",icon:"swift",label:"Small",style:{width:180}})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Alignment Center"}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsx(a,{checked:!0,variant:"cell",size:"large",alignment:"center",icon:"language",tag:"Tag",label:"Large",description:"Description",style:{width:200}}),e.jsx(a,{checked:!0,variant:"cell",size:"medium",alignment:"center",icon:"usd",label:"Medium",style:{width:200}}),e.jsx(a,{checked:!0,variant:"cell",size:"small",alignment:"center",icon:"usd",label:"Small",style:{width:200}})]})]})]})},D={render:()=>{const[l,i]=o.useState("swift"),n=t=>{t.target.value!==void 0&&i(t.target.value)};return e.jsx(r,{value:l,variant:"cell",size:"large",alignment:"left",direction:"horizontal",onChange:n,options:[{value:"swift",label:"SWIFT",description:"Receive via bank rails",icon:"swift"},{value:"global",label:"Global account",description:"International settlement",icon:"language"}]})}},k={render:()=>{const[l,i]=o.useState("swift"),[n,t]=o.useState("swift"),d=[{value:"swift",label:"SWIFT",description:"Receive via bank rails",icon:"swift"},{value:"global",label:"Global account",description:"International settlement",icon:"language"}],u=s=>{s.target.value!==void 0&&i(s.target.value)},c=s=>{s.target.value!==void 0&&t(s.target.value)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{width:320},children:[e.jsx("h3",{style:{marginBottom:12},children:"Cell Direction Vertical"}),e.jsx(r,{value:l,variant:"cell",size:"large",alignment:"left",direction:"vertical",onChange:u,options:d})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:12},children:"Cell Direction Horizontal"}),e.jsx(r,{value:n,variant:"cell",size:"large",alignment:"left",direction:"horizontal",onChange:c,options:d})]})]})}},z={render:()=>{const[l,i]=o.useState("checked"),[n,t]=o.useState("checked"),d=[{value:"checked",label:"Label",description:"Description",icon:"language"},{value:"unchecked",label:"Label",description:"Description",icon:"swift"}],u=s=>{s.target.value!==void 0&&i(s.target.value)},c=s=>{s.target.value!==void 0&&t(s.target.value)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{width:300},children:[e.jsx("h3",{style:{marginBottom:12},children:"Alignment Left"}),e.jsx(r,{value:l,variant:"cell",size:"large",alignment:"left",direction:"vertical",onChange:u,options:d})]}),e.jsxs("div",{style:{width:300},children:[e.jsx("h3",{style:{marginBottom:12},children:"Alignment Center"}),e.jsx(r,{value:n,variant:"cell",size:"large",alignment:"center",direction:"vertical",onChange:c,options:d})]})]})}};var w,S,V;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      }}>Alignment: Right</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Radio label="Unchecked" alignment="right" />
          <Radio label="Checked" alignment="right" checked />
          <Radio label="With description" description="Helper text" alignment="right" />
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
}`,...(V=(S=g.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var G,O,A;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(A=(O=h.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var B,I,H;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Radio label="Option 1" description="Description for option 1" />
      <Radio label="Option 2" description="Description for option 2" checked />
    </div>
}`,...(H=(I=v.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var L,E,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(W=(E=p.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var U,T,M;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(M=(T=m.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var _,F,N;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(F=b.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var P,Z,q;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    return <RadioGroup value={value} onChange={handleChange} alignment="right">
        <Radio value="a" label="Option A" description="Description A" />
        <Radio value="b" label="Option B" description="Description B" />
      </RadioGroup>;
  }
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ae,te;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var le,ie,ne;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ge,he,ve;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(he=k.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var pe,me,be;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(me=z.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const _e=["AllVariants","States","WithDescription","GroupBasic","GroupWithOptions","GroupHorizontal","GroupDirections","GroupDisabled","GroupAlignmentRight","CellStates","CellCentered","CellSizeMatrix","GroupCellOptions","GroupCellDirections","GroupCellAlignments"];export{g as AllVariants,C as CellCentered,j as CellSizeMatrix,R as CellStates,y as GroupAlignmentRight,p as GroupBasic,z as GroupCellAlignments,k as GroupCellDirections,D as GroupCellOptions,f as GroupDirections,x as GroupDisabled,b as GroupHorizontal,m as GroupWithOptions,h as States,v as WithDescription,_e as __namedExportsOrder,Me as default};
