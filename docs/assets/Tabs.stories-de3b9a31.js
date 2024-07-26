import{a as b,j as e}from"./tw-merge-4486aaf0.js";import{T as a}from"./index-4b7ed1ca.js";import"./index-f46741a2.js";import"./clsx.m-1229b3e0.js";const I={title:"Navigation/Tabs",component:a},m=s=>b(a,{...s,children:[e(a.Tab,{children:"Tab 1"}),e(a.Tab,{active:!0,children:"Tab 2"}),e(a.Tab,{children:"Tab 3"})]}),i=m.bind({}),n=m.bind({});n.args={variant:"bordered"};const T=m.bind({});T.args={variant:"lifted"};const t=m.bind({});t.args={variant:"boxed"};const r=({size:s,...l})=>b("div",{className:"flex flex-col items-center gap-6",children:[b(a,{...l,size:"xs",children:[e(a.Tab,{children:"Tiny"}),e(a.Tab,{active:!0,children:"Tiny"}),e(a.Tab,{children:"Tiny"})]}),b(a,{...l,size:"sm",children:[e(a.Tab,{children:"Small"}),e(a.Tab,{active:!0,children:"Small"}),e(a.Tab,{children:"Small"})]}),b(a,{...l,size:"md",children:[e(a.Tab,{children:"Normal"}),e(a.Tab,{active:!0,children:"Normal"}),e(a.Tab,{children:"Normal"})]}),b(a,{...l,size:"lg",children:[e(a.Tab,{children:"Large"}),e(a.Tab,{active:!0,children:"Large"}),e(a.Tab,{children:"Large"})]})]});r.argTypes={size:{control:!1}};r.args={variant:"lifted"};const o=s=>b(a,{...s,children:[e(a.RadioTab,{name:"my_tabs_1",label:"Tab 1",contentClassName:"p-10",children:"Tab content 1"}),e(a.RadioTab,{name:"my_tabs_1",label:"Tab 2",contentClassName:"p-10",defaultChecked:!0,children:"Tab content 2"}),e(a.RadioTab,{name:"my_tabs_1",label:"Tab 3",contentClassName:"p-10",children:"Tab content 3"})]});o.args={variant:"bordered"};const c=s=>b(a,{...s,children:[e(a.RadioTab,{name:"my_tabs_2",label:"Tab 1",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",children:"Tab content 1"}),e(a.RadioTab,{name:"my_tabs_2",label:"Tab 2",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",defaultChecked:!0,children:"Tab content 2"}),e(a.RadioTab,{name:"my_tabs_2",label:"Tab 3",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",children:"Tab content 3"})]});c.args={className:"w-full my-10 lg:mx-10",variant:"lifted"};const d=s=>b(a,{...s,children:[e(a.Tab,{children:"Tab 1"}),e(a.Tab,{color:"primary",bgColor:"yellow",borderColor:"orange",active:!0,children:"Tab 2"}),e(a.Tab,{children:"Tab 3"})]});d.args={className:"w-full my-10 lg:mx-10",variant:"lifted"};var u,p,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,v,_;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(C=(f=T.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var N,x,R;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(R=(x=t.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var S,z,L;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(L=(z=r.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var B,k,w;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,D,W;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(W=(D=c.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var E,O,q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab color="primary" bgColor="yellow" borderColor="orange" active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const J=["Default","Bordered","Lifted","Boxed","Sizes","RadioTabBordered","RadioTabLifted","TabsWithCustomColor"];export{n as Bordered,t as Boxed,i as Default,T as Lifted,o as RadioTabBordered,c as RadioTabLifted,r as Sizes,d as TabsWithCustomColor,J as __namedExportsOrder,I as default};
