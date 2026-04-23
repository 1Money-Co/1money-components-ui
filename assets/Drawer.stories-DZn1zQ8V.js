import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-CP2yOfOm.js";import{f as F}from"./index-DCiaR2iG.js";import{B as n}from"./Button-BjyxbqsY.js";import{D as P,a as f}from"./Drawer-CDEjPENX.js";/* empty css               */import"./Icons-Dt6lPN1Q.js";import"./Spinner-Y03QkMt7.js";import"./iframe-Dp6AQwMc.js";import"./Typography-C20XyoYo.js";import"./classnames-h1fAIaEr.js";import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./Icons-SFvHKrvT.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";import"./Portal-D8KWBNKu.js";import"./index-D1q9exoj.js";const _={display:"flex",gap:12,width:"100%"},oe={title:"Components/Drawer",component:f,argTypes:{placement:{control:"radio",options:P},width:{control:"number"},height:{control:"number"},maskClosable:{control:"boolean"},showCloseIcon:{control:"boolean"},open:{control:!1},footer:{control:!1},closeIcon:{control:!1}},args:{title:"Title",placement:"right",width:360,height:360,maskClosable:!0,showCloseIcon:!0,onClose:F()},tags:["autodocs"]},t=r=>{const[s,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>o(!0),children:"Open Drawer"}),e.jsx(f,{...r,open:s,onClose:()=>{var a;(a=r.onClose)==null||a.call(r),o(!1)}})]})},c={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."}),e.jsx("p",{children:"Some contents..."})]})},render:r=>e.jsx(t,{...r})},i={render:()=>{const[r,s]=u.useState(!1),[o,a]=u.useState("right"),l=z=>{a(z),s(!0)};return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{onClick:()=>l("top"),children:"Top"}),e.jsx(n,{onClick:()=>l("right"),children:"Right"}),e.jsx(n,{onClick:()=>l("bottom"),children:"Bottom"}),e.jsx(n,{onClick:()=>l("left"),children:"Left"}),e.jsx(f,{open:r,placement:o,title:`${o} drawer`,onClose:()=>s(!1),width:360,height:300,children:e.jsxs("p",{children:["Drawer slides in from the ",o,"."]})})]})}},p={args:{children:e.jsx("p",{children:"Fill in the form content here..."}),footer:e.jsxs("div",{style:_,children:[e.jsx(n,{color:"secondary",size:"medium",style:{flex:1},children:"Cancel"}),e.jsx(n,{color:"primary",size:"medium",style:{flex:1},children:"Confirm"})]})},render:r=>e.jsx(t,{...r})},m={args:{showBackIcon:!0,children:e.jsx("p",{children:"Use the back control to return to the previous step."}),onBack:F(),footer:e.jsxs("div",{style:_,children:[e.jsx(n,{color:"secondary",size:"medium",style:{flex:1},children:"Cancel"}),e.jsx(n,{color:"primary",size:"medium",style:{flex:1},children:"Confirm"})]})},render:r=>e.jsx(t,{...r})},d={args:{title:"No Close Icon",showCloseIcon:!1,children:e.jsx("p",{children:"Close this drawer by clicking the mask or pressing Escape."})},render:r=>e.jsx(t,{...r})},h={args:{title:"Mask Not Closable",maskClosable:!1,children:e.jsx(e.Fragment,{children:e.jsx("p",{children:"Clicking the mask will not close this drawer. Use the close icon or Escape key."})})},render:r=>e.jsx(t,{...r})};var C,g,x;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </>
  },
  render: args => <DrawerLauncher {...args} />
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var w,k,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerPlacement>('right');
    const openDrawer = (p: DrawerPlacement) => {
      setPlacement(p);
      setOpen(true);
    };
    return <div style={{
      display: 'flex',
      gap: 8
    }}>
        <Button onClick={() => openDrawer('top')}>Top</Button>
        <Button onClick={() => openDrawer('right')}>Right</Button>
        <Button onClick={() => openDrawer('bottom')}>Bottom</Button>
        <Button onClick={() => openDrawer('left')}>Left</Button>
        <Drawer open={open} placement={placement} title={\`\${placement} drawer\`} onClose={() => setOpen(false)} width={360} height={300}>
          <p>Drawer slides in from the {placement}.</p>
        </Drawer>
      </div>;
  }
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var y,B,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <p>Fill in the form content here...</p>,
    footer: <div style={FOOTER_ACTIONS_STYLE}>
        <Button color="secondary" size="medium" style={{
        flex: 1
      }}>
          Cancel
        </Button>
        <Button color="primary" size="medium" style={{
        flex: 1
      }}>
          Confirm
        </Button>
      </div>
  },
  render: args => <DrawerLauncher {...args} />
}`,...(S=(B=p.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var D,b,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showBackIcon: true,
    children: <p>Use the back control to return to the previous step.</p>,
    onBack: fn(),
    footer: <div style={FOOTER_ACTIONS_STYLE}>
        <Button color="secondary" size="medium" style={{
        flex: 1
      }}>
          Cancel
        </Button>
        <Button color="primary" size="medium" style={{
        flex: 1
      }}>
          Confirm
        </Button>
      </div>
  },
  render: args => <DrawerLauncher {...args} />
}`,...(E=(b=m.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var O,I,T;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'No Close Icon',
    showCloseIcon: false,
    children: <p>Close this drawer by clicking the mask or pressing Escape.</p>
  },
  render: args => <DrawerLauncher {...args} />
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var L,N,v;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Mask Not Closable',
    maskClosable: false,
    children: <>
        <p>Clicking the mask will not close this drawer. Use the close icon or Escape key.</p>
      </>
  },
  render: args => <DrawerLauncher {...args} />
}`,...(v=(N=h.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const te=["Basic","Placement","WithFooter","WithBackControl","NoCloseIcon","MaskNotClosable"];export{c as Basic,h as MaskNotClosable,d as NoCloseIcon,i as Placement,m as WithBackControl,p as WithFooter,te as __namedExportsOrder,oe as default};
