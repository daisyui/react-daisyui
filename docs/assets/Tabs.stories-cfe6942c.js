import{a as b,j as e}from"./tw-merge-0a3648bd.js";import{T as a}from"./index-eb20e8d5.js";import"./index-1b03fe98.js";import"./clsx.m-1229b3e0.js";const F={title:"Navigation/Tabs",component:a},l=s=>b(a,{...s,children:[e(a.Tab,{children:"Tab 1"}),e(a.Tab,{active:!0,children:"Tab 2"}),e(a.Tab,{children:"Tab 3"})]}),i=l.bind({}),n=l.bind({});n.args={variant:"bordered"};const T=l.bind({});T.args={variant:"lifted"};const t=l.bind({});t.args={variant:"boxed"};const r=({size:s,...c})=>b("div",{className:"flex flex-col items-center gap-6",children:[b(a,{...c,size:"xs",children:[e(a.Tab,{children:"Tiny"}),e(a.Tab,{active:!0,children:"Tiny"}),e(a.Tab,{children:"Tiny"})]}),b(a,{...c,size:"sm",children:[e(a.Tab,{children:"Small"}),e(a.Tab,{active:!0,children:"Small"}),e(a.Tab,{children:"Small"})]}),b(a,{...c,size:"md",children:[e(a.Tab,{children:"Normal"}),e(a.Tab,{active:!0,children:"Normal"}),e(a.Tab,{children:"Normal"})]}),b(a,{...c,size:"lg",children:[e(a.Tab,{children:"Large"}),e(a.Tab,{active:!0,children:"Large"}),e(a.Tab,{children:"Large"})]})]});r.argTypes={size:{control:!1}};r.args={variant:"lifted"};const o=s=>b(a,{...s,children:[e(a.RadioTab,{name:"my_tabs_1",label:"Tab 1",contentClassName:"p-10",children:"Tab content 1"}),e(a.RadioTab,{name:"my_tabs_1",label:"Tab 2",contentClassName:"p-10",defaultChecked:!0,children:"Tab content 2"}),e(a.RadioTab,{name:"my_tabs_1",label:"Tab 3",contentClassName:"p-10",children:"Tab content 3"})]});o.args={variant:"bordered"};const d=s=>b(a,{...s,children:[e(a.RadioTab,{name:"my_tabs_2",label:"Tab 1",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",children:"Tab content 1"}),e(a.RadioTab,{name:"my_tabs_2",label:"Tab 2",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",defaultChecked:!0,children:"Tab content 2"}),e(a.RadioTab,{name:"my_tabs_2",label:"Tab 3",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",children:"Tab content 3"})]});d.args={className:"w-full my-10 lg:mx-10",variant:"lifted"};var m,u,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,h,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(_=(h=n.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var v,f,N;T.parameters={...T.parameters,docs:{...(v=T.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(N=(f=T.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var R,x,y;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active={true}>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>;
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,S,z;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`({
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
}`,...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var L,B,k;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
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
}`,...(k=(B=o.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var j,D,w;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const G=["Default","Bordered","Lifted","Boxed","Sizes","RadioTabBordered","RadioTabLifted"];export{n as Bordered,t as Boxed,i as Default,T as Lifted,o as RadioTabBordered,d as RadioTabLifted,r as Sizes,G as __namedExportsOrder,F as default};
