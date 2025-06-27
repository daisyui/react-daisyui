import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{T as a}from"./index-CKvsACjx.js";import"./iframe-DDnXVYpC.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-yGZq-iow.js";const{Tab:I,RadioTab:J}=a,K={title:"Navigation/Tabs",component:a},l=s=>e.jsxs(a,{...s,children:[e.jsx(a.Tab,{children:"Tab 1"}),e.jsx(a.Tab,{active:!0,children:"Tab 2"}),e.jsx(a.Tab,{children:"Tab 3"})]}),i=l.bind({}),r=l.bind({});r.args={variant:"bordered"};const n=l.bind({});n.args={variant:"lifted"};const T=l.bind({});T.args={variant:"boxed"};const b=({size:s,...d})=>e.jsxs("div",{className:"flex flex-col items-center gap-6",children:[e.jsxs(a,{...d,size:"xs",children:[e.jsx(a.Tab,{children:"Tiny"}),e.jsx(a.Tab,{active:!0,children:"Tiny"}),e.jsx(a.Tab,{children:"Tiny"})]}),e.jsxs(a,{...d,size:"sm",children:[e.jsx(a.Tab,{children:"Small"}),e.jsx(a.Tab,{active:!0,children:"Small"}),e.jsx(a.Tab,{children:"Small"})]}),e.jsxs(a,{...d,size:"md",children:[e.jsx(a.Tab,{children:"Normal"}),e.jsx(a.Tab,{active:!0,children:"Normal"}),e.jsx(a.Tab,{children:"Normal"})]}),e.jsxs(a,{...d,size:"lg",children:[e.jsx(a.Tab,{children:"Large"}),e.jsx(a.Tab,{active:!0,children:"Large"}),e.jsx(a.Tab,{children:"Large"})]})]});b.argTypes={size:{control:!1}};b.args={variant:"lifted"};const t=s=>e.jsxs(a,{...s,children:[e.jsx(a.RadioTab,{name:"my_tabs_1",label:"Tab 1",contentClassName:"p-10",children:"Tab content 1"}),e.jsx(a.RadioTab,{name:"my_tabs_1",label:"Tab 2",contentClassName:"p-10",defaultChecked:!0,children:"Tab content 2"}),e.jsx(a.RadioTab,{name:"my_tabs_1",label:"Tab 3",contentClassName:"p-10",children:"Tab content 3"})]});t.args={variant:"bordered"};const o=s=>e.jsxs(a,{...s,children:[e.jsx(a.RadioTab,{name:"my_tabs_2",label:"Tab 1",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",children:"Tab content 1"}),e.jsx(a.RadioTab,{name:"my_tabs_2",label:"Tab 2",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",defaultChecked:!0,children:"Tab content 2"}),e.jsx(a.RadioTab,{name:"my_tabs_2",label:"Tab 3",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",children:"Tab content 3"})]});o.args={className:"w-full my-10 lg:mx-10",variant:"lifted"};const c=s=>e.jsxs(a,{...s,children:[e.jsx(a.Tab,{children:"Tab 1"}),e.jsx(a.Tab,{color:"primary",bgColor:"yellow",borderColor:"orange",active:!0,children:"Tab 2"}),e.jsx(a.Tab,{children:"Tab 3"})]});c.args={className:"w-full my-10 lg:mx-10",variant:"lifted"};var m,u,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,x,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,v,_;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(_=(v=n.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var y,f,C;T.parameters={...T.parameters,docs:{...(y=T.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(C=(f=T.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var R,N,S;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`({
  size,
  ...args
}) => {
  return <div className="flex flex-col items-center gap-6">
      {/*xs*/}
      <Tabs {...args} size="xs">
        <Tabs.Tab>Tiny</Tabs.Tab>
        <Tabs.Tab active={true}>Tiny</Tabs.Tab>
        <Tabs.Tab>Tiny</Tabs.Tab>
      </Tabs>
      {/*sm*/}
      <Tabs {...args} size="sm">
        <Tabs.Tab>Small</Tabs.Tab>
        <Tabs.Tab active={true}>Small</Tabs.Tab>
        <Tabs.Tab>Small</Tabs.Tab>
      </Tabs>
      {/*md*/}
      <Tabs {...args} size="md">
        <Tabs.Tab>Normal</Tabs.Tab>
        <Tabs.Tab active={true}>Normal</Tabs.Tab>
        <Tabs.Tab>Normal</Tabs.Tab>
      </Tabs>
      {/*lg*/}
      <Tabs {...args} size="lg">
        <Tabs.Tab>Large</Tabs.Tab>
        <Tabs.Tab active={true}>Large</Tabs.Tab>
        <Tabs.Tab>Large</Tabs.Tab>
      </Tabs>
    </div>;
}`,...(S=(N=b.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var z,L,B;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.RadioTab name="my_tabs_1" label="Tab 1" contentClassName="p-10">
        Tab content 1
      </Tabs.RadioTab>
      <Tabs.RadioTab name="my_tabs_1" label="Tab 2" contentClassName="p-10" defaultChecked={true}>
        Tab content 2
      </Tabs.RadioTab>
      <Tabs.RadioTab name="my_tabs_1" label="Tab 3" contentClassName="p-10">
        Tab content 3
      </Tabs.RadioTab>
    </Tabs>;
}`,...(B=(L=t.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var k,w,D;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.RadioTab name="my_tabs_2" label="Tab 1" contentClassName="bg-base-100 border-base-300 rounded-box p-6">
        Tab content 1
      </Tabs.RadioTab>
      <Tabs.RadioTab name="my_tabs_2" label="Tab 2" contentClassName="bg-base-100 border-base-300 rounded-box p-6" defaultChecked={true}>
        Tab content 2
      </Tabs.RadioTab>
      <Tabs.RadioTab name="my_tabs_2" label="Tab 3" contentClassName="bg-base-100 border-base-300 rounded-box p-6">
        Tab content 3
      </Tabs.RadioTab>
    </Tabs>;
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var E,W,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab color="primary" bgColor="yellow" borderColor="orange" active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(O=(W=c.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const M=["Default","Bordered","Lifted","Boxed","Sizes","RadioTabBordered","RadioTabLifted","TabsWithCustomColor"];export{r as Bordered,T as Boxed,i as Default,n as Lifted,t as RadioTabBordered,o as RadioTabLifted,b as Sizes,c as TabsWithCustomColor,M as __namedExportsOrder,K as default};
