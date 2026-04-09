import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as c}from"./index-DCiaR2iG.js";import{F as C,a as r,u as q}from"./index-CearjnKp.js";import{I as o}from"./Trade-L7ppztKj.js";import{C as k}from"./index-BKBuw4Z7.js";import{S as B}from"./Switch-zA3SYdRx.js";import{f as t}from"./Button-xKWQamn_.js";import"./Typography-COcdYQQO.js";import"./Icons-C17k0gNH.js";/* empty css               */import"./index-CP2yOfOm.js";import"./classnames-0AlMal0H.js";import"./index-_M0HKnWf.js";import"./index-nCcupNJZ.js";import"./Spinner-C9s5r2Mu.js";import"./Skeleton-CueNxn16.js";import"./index-CN0Pk037.js";import"./index-CyN509qF.js";import"./ResizeObserver-DbXOvenx.js";import"./clipboard-C7s2bcmm.js";import"./iframe-C8OcTo_O.js";import"./Tooltip-CsTd8WLo.js";const ee={title:"Components/Form",component:r,argTypes:{size:{control:"radio",options:[...C]},disabled:{control:"boolean"},colon:{control:"boolean"},requiredMark:{control:"boolean"}},args:{size:"middle",disabled:!1,colon:!0,requiredMark:!0,onFinish:c(),onFinishFailed:c(),onValuesChange:c()},tags:["autodocs"]},i={render:a=>e.jsxs(r,{...a,initialValues:{username:"",email:""},children:[e.jsx(r.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please enter username"}],children:e.jsx(o,{placeholder:"Enter username"})}),e.jsx(r.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please enter email"},{type:"email",message:"Invalid email format"}],children:e.jsx(o,{placeholder:"Enter email"})}),e.jsx(r.Item,{children:e.jsx(t,{type:"submit",color:"primary",children:"Submit"})})]})},l={render:a=>e.jsxs(r,{...a,initialValues:{password:"",confirmPassword:""},validateTrigger:"onBlur",children:[e.jsx(r.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Password is required"},{min:8,message:"At least 8 characters"}],children:e.jsx(o.Password,{placeholder:"Enter password"})}),e.jsx(r.Item,{label:"Confirm Password",name:"confirmPassword",rules:[{required:!0,message:"Please confirm password"},{validator:(s,m)=>s&&s!==m.password?"Passwords do not match":!0}],children:e.jsx(o.Password,{placeholder:"Confirm password"})}),e.jsx(r.Item,{children:e.jsx(t,{type:"submit",color:"primary",children:"Register"})})]})},n={render:a=>e.jsxs(r,{...a,initialValues:{remember:!1,notifications:!0},onFinish:s=>{var m;(m=a.onFinish)==null||m.call(a,s),alert(JSON.stringify(s,null,2))},children:[e.jsx(r.Item,{label:"Username",name:"username",rules:[{required:!0}],children:e.jsx(o,{placeholder:"Username"})}),e.jsx(r.Item,{name:"remember",label:"Remember me",children:e.jsx(k,{})}),e.jsx(r.Item,{name:"notifications",label:"Notifications",children:e.jsx(B,{})}),e.jsx(r.Item,{children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(t,{type:"submit",color:"primary",children:"Submit"}),e.jsx(t,{type:"reset",color:"secondary",children:"Reset"})]})})]})},d={render:a=>{const[s]=q({name:"John",age:"25"});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs(r,{...a,initialValues:{name:"John",age:"25"},children:[e.jsx(r.Item,{label:"Name",name:"name",rules:[{required:!0}],children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Age",name:"age",children:e.jsx(o,{})})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(t,{color:"primary",onClick:()=>s.setFieldValue("name","Jane"),children:"Set Name to Jane"}),e.jsx(t,{color:"secondary",onClick:()=>s.resetFields(),children:"Reset"}),e.jsx(t,{color:"grey",onClick:()=>alert(JSON.stringify(s.getFieldsValue(),null,2)),children:"Get Values"})]})]})},tags:["!autodocs","dev"]},u={args:{disabled:!0},render:a=>e.jsxs(r,{...a,initialValues:{email:"user@example.com",active:!0},children:[e.jsx(r.Item,{label:"Email",name:"email",children:e.jsx(o,{})}),e.jsx(r.Item,{label:"Active",name:"active",children:e.jsx(B,{})})]})};var p,h,F;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Form {...args} initialValues={{
    username: '',
    email: ''
  }}>
      <Form.Item label="Username" name="username" rules={[{
      required: true,
      message: 'Please enter username'
    }]}>
        <Input placeholder="Enter username" />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{
      required: true,
      message: 'Please enter email'
    }, {
      type: 'email',
      message: 'Invalid email format'
    }]}>
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item>
        <Button type="submit" color="primary">Submit</Button>
      </Form.Item>
    </Form>
}`,...(F=(h=i.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var g,x,I;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Form {...args} initialValues={{
    password: '',
    confirmPassword: ''
  }} validateTrigger="onBlur">
      <Form.Item label="Password" name="password" rules={[{
      required: true,
      message: 'Password is required'
    }, {
      min: 8,
      message: 'At least 8 characters'
    }]}>
        <Input.Password placeholder="Enter password" />
      </Form.Item>
      <Form.Item label="Confirm Password" name="confirmPassword" rules={[{
      required: true,
      message: 'Please confirm password'
    }, {
      validator: (value, values) => {
        if (value && value !== values.password) {
          return 'Passwords do not match';
        }
        return true;
      }
    }]}>
        <Input.Password placeholder="Confirm password" />
      </Form.Item>
      <Form.Item>
        <Button type="submit" color="primary">Register</Button>
      </Form.Item>
    </Form>
}`,...(I=(x=l.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var f,b,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Form {...args} initialValues={{
    remember: false,
    notifications: true
  }} onFinish={values => {
    args.onFinish?.(values);
    alert(JSON.stringify(values, null, 2));
  }}>
      <Form.Item label="Username" name="username" rules={[{
      required: true
    }]}>
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item name="remember" label="Remember me">
        <Checkbox />
      </Form.Item>
      <Form.Item name="notifications" label="Notifications">
        <Switch />
      </Form.Item>
      <Form.Item>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button type="submit" color="primary">Submit</Button>
          <Button type="reset" color="secondary">Reset</Button>
        </div>
      </Form.Item>
    </Form>
}`,...(j=(b=n.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var y,w,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [form] = useForm({
      name: 'John',
      age: '25'
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Form {...args} initialValues={{
        name: 'John',
        age: '25'
      }}>
          <Form.Item label="Name" name="name" rules={[{
          required: true
        }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input />
          </Form.Item>
        </Form>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button color="primary" onClick={() => form.setFieldValue('name', 'Jane')}>
            Set Name to Jane
          </Button>
          <Button color="secondary" onClick={() => form.resetFields()}>
            Reset
          </Button>
          <Button color="grey" onClick={() => alert(JSON.stringify(form.getFieldsValue(), null, 2))}>
            Get Values
          </Button>
        </div>
      </div>;
  },
  tags: ['!autodocs', 'dev']
}`,...(v=(w=d.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,P,V;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Form {...args} initialValues={{
    email: 'user@example.com',
    active: true
  }}>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Active" name="active">
        <Switch />
      </Form.Item>
    </Form>
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const re=["Default","ValidationRules","WithCheckboxAndSwitch","UseFormHook","DisabledForm"];export{i as Default,u as DisabledForm,d as UseFormHook,l as ValidationRules,n as WithCheckboxAndSwitch,re as __namedExportsOrder,ee as default};
