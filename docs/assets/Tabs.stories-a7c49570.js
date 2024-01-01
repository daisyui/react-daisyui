import{a as n,j as a}from"./tw-merge-0a3648bd.js";import{T as r}from"./index-eb20e8d5.js";import"./index-1b03fe98.js";import"./clsx.m-1229b3e0.js";const{Tab:e,RadioTab:t}=r,H={title:"Navigation/Tabs",component:r},u=s=>n(r,{...s,children:[a(e,{children:"Tab 1"}),a(e,{active:!0,children:"Tab 2"}),a(e,{children:"Tab 3"})]}),m=u.bind({}),o=u.bind({});o.args={variant:"bordered"};const T=u.bind({});T.args={variant:"lifted"};const c=u.bind({});c.args={variant:"boxed"};const b=({size:s,...l})=>n("div",{className:"flex flex-col items-center gap-6",children:[n(r,{...l,size:"xs",children:[a(e,{children:"Tiny"}),a(e,{active:!0,children:"Tiny"}),a(e,{children:"Tiny"})]}),n(r,{...l,size:"sm",children:[a(e,{children:"Small"}),a(e,{active:!0,children:"Small"}),a(e,{children:"Small"})]}),n(r,{...l,size:"md",children:[a(e,{children:"Normal"}),a(e,{active:!0,children:"Normal"}),a(e,{children:"Normal"})]}),n(r,{...l,size:"lg",children:[a(e,{children:"Large"}),a(e,{active:!0,children:"Large"}),a(e,{children:"Large"})]})]});b.argTypes={size:{control:!1}};b.args={variant:"lifted"};const d=s=>n(r,{...s,children:[a(t,{name:"my_tabs_1",label:"Tab 1",contentClassName:"p-10",children:"Tab content 1"}),a(t,{name:"my_tabs_1",label:"Tab 2",contentClassName:"p-10",defaultChecked:!0,children:"Tab content 2"}),a(t,{name:"my_tabs_1",label:"Tab 3",contentClassName:"p-10",children:"Tab content 3"})]});d.args={variant:"bordered"};const i=s=>n(r,{...s,children:[a(t,{name:"my_tabs_2",label:"Tab 1",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",children:"Tab content 1"}),a(t,{name:"my_tabs_2",label:"Tab 2",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",defaultChecked:!0,children:"Tab content 2"}),a(t,{name:"my_tabs_2",label:"Tab 3",contentClassName:"bg-base-100 border-base-300 rounded-box p-6",children:"Tab content 3"})]});i.args={className:"w-full my-10 lg:mx-10",variant:"lifted"};var p,g,h;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tab>Tab 1</Tab>
      <Tab active={true}>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>;
}`,...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var _,v,f;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tab>Tab 1</Tab>
      <Tab active={true}>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>;
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var N,x,y;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tab>Tab 1</Tab>
      <Tab active={true}>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>;
}`,...(y=(x=T.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var R,C,S;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <Tab>Tab 1</Tab>
      <Tab active={true}>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>;
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var z,L,B;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`({
  size,
  ...args
}) => {
  return <div className="flex flex-col items-center gap-6">
      {/*xs*/}
      <Tabs {...args} size="xs">
        <Tab>Tiny</Tab>
        <Tab active={true}>Tiny</Tab>
        <Tab>Tiny</Tab>
      </Tabs>
      {/*sm*/}
      <Tabs {...args} size="sm">
        <Tab>Small</Tab>
        <Tab active={true}>Small</Tab>
        <Tab>Small</Tab>
      </Tabs>
      {/*md*/}
      <Tabs {...args} size="md">
        <Tab>Normal</Tab>
        <Tab active={true}>Normal</Tab>
        <Tab>Normal</Tab>
      </Tabs>
      {/*lg*/}
      <Tabs {...args} size="lg">
        <Tab>Large</Tab>
        <Tab active={true}>Large</Tab>
        <Tab>Large</Tab>
      </Tabs>
    </div>;
}`,...(B=(L=b.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var k,j,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <RadioTab name="my_tabs_1" label="Tab 1" contentClassName="p-10">
        Tab content 1
      </RadioTab>
      <RadioTab name="my_tabs_1" label="Tab 2" contentClassName="p-10" defaultChecked={true}>
        Tab content 2
      </RadioTab>
      <RadioTab name="my_tabs_1" label="Tab 3" contentClassName="p-10">
        Tab content 3
      </RadioTab>
    </Tabs>;
}`,...(D=(j=d.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var w,E,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <Tabs {...args}>
      <RadioTab name="my_tabs_2" label="Tab 1" contentClassName="bg-base-100 border-base-300 rounded-box p-6">
        Tab content 1
      </RadioTab>
      <RadioTab name="my_tabs_2" label="Tab 2" contentClassName="bg-base-100 border-base-300 rounded-box p-6" defaultChecked={true}>
        Tab content 2
      </RadioTab>
      <RadioTab name="my_tabs_2" label="Tab 3" contentClassName="bg-base-100 border-base-300 rounded-box p-6">
        Tab content 3
      </RadioTab>
    </Tabs>;
}`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const I=["Default","Bordered","Lifted","Boxed","Sizes","RadioTabBordered","RadioTabLifted"];export{o as Bordered,c as Boxed,m as Default,T as Lifted,d as RadioTabBordered,i as RadioTabLifted,b as Sizes,I as __namedExportsOrder,H as default};
