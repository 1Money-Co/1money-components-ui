import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as O}from"./index-CP2yOfOm.js";import{B as o}from"./Button-Dnze59fN.js";import{I}from"./Icons-D1aARqJQ.js";import{N,n as t,c as j}from"./Typography-CJ7CZhJ5.js";import"./Spinner-D3GZVtnh.js";import"./iframe-b0G2kwiv.js";import"./classnames-h1fAIaEr.js";/* empty css               */import"./ResizeObserver-DW8-DKQf.js";import"./index-nCcupNJZ.js";import"./clipboard-C7s2bcmm.js";import"./Tooltip-DeIhm5fH.js";import"./index-CyN509qF.js";import"./index-CN0Pk037.js";const w=n=>`${n.charAt(0).toUpperCase()}${n.slice(1)}`,A={display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},L={display:"flex",flexWrap:"wrap",gap:12},E={maxWidth:640,margin:0,color:"#6b7280",fontSize:14,lineHeight:"20px"},q={title:"Components/Notification",parameters:{docs:{description:{component:"Notification is exposed as a static API via `notification.open/info/success/warning/error`, and the rendered surface keeps the Figma `Drop Shadow(Beta)/200` treatment."}}},tags:["autodocs"]},i=({description:n,children:d})=>(O.useEffect(()=>()=>{t.destroy(),t.config({placement:"topRight",duration:4.5,maxCount:Number.POSITIVE_INFINITY})},[]),e.jsxs("div",{style:A,children:[e.jsx("p",{style:E,children:n}),e.jsx("div",{style:L,children:d})]})),a={render:()=>e.jsxs(i,{description:"Trigger each status helper and the generic open method.",children:[N.map(n=>e.jsx(o,{onClick:()=>{t[n]({title:`${w(n)} notification`,body:"Triggered through the public static notification API."})},children:`Open ${n}`},n)),e.jsx(o,{color:"grey",onClick:()=>{t.open({status:"success",title:"Open with explicit status",body:"Use notification.open when you want full control over the config."})},children:"Open generic"}),e.jsx(o,{color:"grey",onClick:()=>{t.destroy()},children:"Destroy all"})]}),tags:["!autodocs","dev"]},r={render:()=>e.jsxs(i,{description:"Preview each placement, then compare global defaults with per-call overrides.",children:[j.map(n=>e.jsx(o,{onClick:()=>{t.open({title:n,body:`Rendered in the ${n} stack.`,placement:n})},children:n},n)),e.jsx(o,{color:"grey",onClick:()=>{t.config({placement:"bottomRight",duration:6,maxCount:3}),t.open({title:"Uses global defaults",body:"This notification uses the shared config set by notification.config."})},children:"Apply global config"}),e.jsx(o,{color:"grey",onClick:()=>{t.config({placement:"bottomRight",duration:6,maxCount:3}),t.open({title:"Override placement",body:"This call overrides the global placement and duration.",placement:"topLeft",duration:0})},children:"Override global config"}),e.jsx(o,{color:"grey",onClick:()=>{t.config({placement:"topRight",duration:4.5,maxCount:Number.POSITIVE_INFINITY}),t.destroy()},children:"Reset config"})]}),tags:["!autodocs","dev"]},c={render:()=>e.jsxs(i,{description:"Show action buttons, anchor links, and removal callbacks.",children:[e.jsx(o,{onClick:()=>{t.open({title:"Action link",body:"This example renders a button-style action.",link:{label:"Run action",onClick:()=>{t.success({title:"Action executed",body:"The link callback can trigger another notification."})}}})},children:"Open action link"}),e.jsx(o,{onClick:()=>{t.open({title:"External docs",body:"This example renders a normal anchor link.",link:{label:"Open docs",href:"https://example.com/docs",target:"_blank"}})},children:"Open href link"}),e.jsx(o,{color:"grey",onClick:()=>{t.open({title:"Closes in 2 seconds",body:"The onClose callback fires after the removal animation finishes.",duration:2,onClose:()=>{t.info({title:"onClose fired",body:"The previous notification has been fully removed."})}})},children:"Open with onClose"}),e.jsx(o,{color:"grey",onClick:()=>{t.destroy()},children:"Destroy all"})]}),tags:["!autodocs","dev"]},s={render:()=>{const n="storybook-notification-shared";return e.jsxs(i,{description:"Keep a notification open, update it in place, or remove it by key.",children:[e.jsx(o,{onClick:()=>{t.open({key:n,title:"Sync in progress",body:"The same key updates the existing notification instead of stacking.",duration:0})},children:"Open persistent"}),e.jsx(o,{onClick:()=>{t.success({key:n,title:"Sync complete",body:"The existing notification was updated in place."})},children:"Update persistent"}),e.jsx(o,{color:"grey",onClick:()=>{t.destroy(n)},children:"Destroy by key"}),e.jsx(o,{color:"grey",onClick:()=>{const d=t.open({title:"Generated key example",body:"This notification returns a key for later updates.",duration:0});window.setTimeout(()=>{t.success({key:d,title:"Generated key updated",body:"Updated using the key returned by notification.open."})},800)},children:"Open with returned key"}),e.jsx(o,{color:"grey",onClick:()=>{t.destroy()},children:"Destroy all"})]})},tags:["!autodocs","dev"]},l={render:()=>e.jsxs(i,{description:"Demonstrate custom icon rendering and visibility overrides.",children:[e.jsx(o,{onClick:()=>{t.open({title:"Manual review",body:"This notification uses a custom icon element.",icon:e.jsx(I,{name:"notificationWarning",size:32})})},children:"Open custom icon"}),e.jsx(o,{onClick:()=>{t.open({title:"No icon notification",body:"This example hides the leading icon.",showIcon:!1})},children:"Hide icon"}),e.jsx(o,{onClick:()=>{t.open({title:"Not closable",body:"This example removes the close button.",closable:!1,duration:0})},children:"Hide close button"}),e.jsx(o,{color:"grey",onClick:()=>{t.destroy()},children:"Destroy all"})]}),tags:["!autodocs","dev"]};var p,u,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <NotificationStoryLayout description="Trigger each status helper and the generic open method.">
      {NOTIFICATION_STATUSES.map(status => <Button key={status} onClick={() => {
      notification[status]({
        title: \`\${getStatusLabel(status)} notification\`,
        body: 'Triggered through the public static notification API.'
      });
    }}>
          {\`Open \${status}\`}
        </Button>)}
      <Button color="grey" onClick={() => {
      notification.open({
        status: 'success',
        title: 'Open with explicit status',
        body: 'Use notification.open when you want full control over the config.'
      });
    }}>
        Open generic
      </Button>
      <Button color="grey" onClick={() => {
      notification.destroy();
    }}>
        Destroy all
      </Button>
    </NotificationStoryLayout>,
  tags: ['!autodocs', 'dev']
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var h,f,m;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <NotificationStoryLayout description="Preview each placement, then compare global defaults with per-call overrides.">
      {NOTIFICATION_PLACEMENTS.map(placement => <Button key={placement} onClick={() => {
      notification.open({
        title: placement,
        body: \`Rendered in the \${placement} stack.\`,
        placement
      });
    }}>
          {placement}
        </Button>)}
      <Button color="grey" onClick={() => {
      notification.config({
        placement: 'bottomRight',
        duration: 6,
        maxCount: 3
      });
      notification.open({
        title: 'Uses global defaults',
        body: 'This notification uses the shared config set by notification.config.'
      });
    }}>
        Apply global config
      </Button>
      <Button color="grey" onClick={() => {
      notification.config({
        placement: 'bottomRight',
        duration: 6,
        maxCount: 3
      });
      notification.open({
        title: 'Override placement',
        body: 'This call overrides the global placement and duration.',
        placement: 'topLeft',
        duration: 0
      });
    }}>
        Override global config
      </Button>
      <Button color="grey" onClick={() => {
      notification.config({
        placement: 'topRight',
        duration: 4.5,
        maxCount: Number.POSITIVE_INFINITY
      });
      notification.destroy();
    }}>
        Reset config
      </Button>
    </NotificationStoryLayout>,
  tags: ['!autodocs', 'dev']
}`,...(m=(f=r.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var g,k,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <NotificationStoryLayout description="Show action buttons, anchor links, and removal callbacks.">
      <Button onClick={() => {
      notification.open({
        title: 'Action link',
        body: 'This example renders a button-style action.',
        link: {
          label: 'Run action',
          onClick: () => {
            notification.success({
              title: 'Action executed',
              body: 'The link callback can trigger another notification.'
            });
          }
        }
      });
    }}>
        Open action link
      </Button>
      <Button onClick={() => {
      notification.open({
        title: 'External docs',
        body: 'This example renders a normal anchor link.',
        link: {
          label: 'Open docs',
          href: 'https://example.com/docs',
          target: '_blank'
        }
      });
    }}>
        Open href link
      </Button>
      <Button color="grey" onClick={() => {
      notification.open({
        title: 'Closes in 2 seconds',
        body: 'The onClose callback fires after the removal animation finishes.',
        duration: 2,
        onClose: () => {
          notification.info({
            title: 'onClose fired',
            body: 'The previous notification has been fully removed.'
          });
        }
      });
    }}>
        Open with onClose
      </Button>
      <Button color="grey" onClick={() => {
      notification.destroy();
    }}>
        Destroy all
      </Button>
    </NotificationStoryLayout>,
  tags: ['!autodocs', 'dev']
}`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var C,x,T;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const sharedKey = 'storybook-notification-shared';
    return <NotificationStoryLayout description="Keep a notification open, update it in place, or remove it by key.">
        <Button onClick={() => {
        notification.open({
          key: sharedKey,
          title: 'Sync in progress',
          body: 'The same key updates the existing notification instead of stacking.',
          duration: 0
        });
      }}>
          Open persistent
        </Button>
        <Button onClick={() => {
        notification.success({
          key: sharedKey,
          title: 'Sync complete',
          body: 'The existing notification was updated in place.'
        });
      }}>
          Update persistent
        </Button>
        <Button color="grey" onClick={() => {
        notification.destroy(sharedKey);
      }}>
          Destroy by key
        </Button>
        <Button color="grey" onClick={() => {
        const generatedKey = notification.open({
          title: 'Generated key example',
          body: 'This notification returns a key for later updates.',
          duration: 0
        });
        window.setTimeout(() => {
          notification.success({
            key: generatedKey,
            title: 'Generated key updated',
            body: 'Updated using the key returned by notification.open.'
          });
        }, 800);
      }}>
          Open with returned key
        </Button>
        <Button color="grey" onClick={() => {
        notification.destroy();
      }}>
          Destroy all
        </Button>
      </NotificationStoryLayout>;
  },
  tags: ['!autodocs', 'dev']
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var v,S,B;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <NotificationStoryLayout description="Demonstrate custom icon rendering and visibility overrides.">
      <Button onClick={() => {
      notification.open({
        title: 'Manual review',
        body: 'This notification uses a custom icon element.',
        icon: <Icons name="notificationWarning" size={32} />
      });
    }}>
        Open custom icon
      </Button>
      <Button onClick={() => {
      notification.open({
        title: 'No icon notification',
        body: 'This example hides the leading icon.',
        showIcon: false
      });
    }}>
        Hide icon
      </Button>
      <Button onClick={() => {
      notification.open({
        title: 'Not closable',
        body: 'This example removes the close button.',
        closable: false,
        duration: 0
      });
    }}>
        Hide close button
      </Button>
      <Button color="grey" onClick={() => {
      notification.destroy();
    }}>
        Destroy all
      </Button>
    </NotificationStoryLayout>,
  tags: ['!autodocs', 'dev']
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const J=["StatusMethods","PlacementAndConfig","LinksAndCallbacks","PersistentAndDestroy","AppearanceOverrides"];export{l as AppearanceOverrides,c as LinksAndCallbacks,s as PersistentAndDestroy,r as PlacementAndConfig,a as StatusMethods,J as __namedExportsOrder,q as default};
