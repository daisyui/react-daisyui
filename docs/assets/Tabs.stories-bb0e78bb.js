import{j as n,a}from"./tw-merge-e8a1af18.js";import{R as C}from"./index-f1f749bf.js";import{T as r}from"./index-71ff334a.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";const{Tab:e}=r,O={title:"Navigation/Tabs",component:r,parameters:{controls:{exclude:["ref"]}},args:{value:1}},o=c=>{const[s,R]=C.useState(0);return n(r,{...c,value:s,onChange:R,children:[a(e,{value:0,children:"Tab 1"}),a(e,{value:1,children:"Tab 2"}),a(e,{value:2,children:"Tab 3"})]})},l=o.bind({});l.args={};const b=o.bind({});b.args={variant:"bordered"};const t=o.bind({});t.args={variant:"lifted"};const T=o.bind({});T.args={boxed:!0};const u=({size:c,...s})=>n("div",{className:"flex flex-col gap-6 items-center",children:[n(r,{...s,size:"xs",children:[a(e,{value:0,children:"Tiny"}),a(e,{value:1,children:"Tiny"}),a(e,{value:2,children:"Tiny"})]}),n(r,{...s,size:"sm",children:[a(e,{value:0,children:"Small"}),a(e,{value:1,children:"Small"}),a(e,{value:2,children:"Small"})]}),n(r,{...s,size:"md",children:[a(e,{value:0,children:"Normal"}),a(e,{value:1,children:"Normal"}),a(e,{value:2,children:"Normal"})]}),n(r,{...s,size:"lg",children:[a(e,{value:0,children:"Large"}),a(e,{value:1,children:"Large"}),a(e,{value:2,children:"Large"})]})]});u.args={variant:"lifted"};var i,d,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [tabValue, setTabValue] = React.useState(0);
  return <Tabs {...args} value={tabValue} onChange={setTabValue}>
      <Tab value={0}>Tab 1</Tab>
      <Tab value={1}>Tab 2</Tab>
      <Tab value={2}>Tab 3</Tab>
    </Tabs>;
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var v,g,p;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [tabValue, setTabValue] = React.useState(0);
  return <Tabs {...args} value={tabValue} onChange={setTabValue}>
      <Tab value={0}>Tab 1</Tab>
      <Tab value={1}>Tab 2</Tab>
      <Tab value={2}>Tab 3</Tab>
    </Tabs>;
}`,...(p=(g=b.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,S,V;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [tabValue, setTabValue] = React.useState(0);
  return <Tabs {...args} value={tabValue} onChange={setTabValue}>
      <Tab value={0}>Tab 1</Tab>
      <Tab value={1}>Tab 2</Tab>
      <Tab value={2}>Tab 3</Tab>
    </Tabs>;
}`,...(V=(S=t.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var f,x,z;T.parameters={...T.parameters,docs:{...(f=T.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [tabValue, setTabValue] = React.useState(0);
  return <Tabs {...args} value={tabValue} onChange={setTabValue}>
      <Tab value={0}>Tab 1</Tab>
      <Tab value={1}>Tab 2</Tab>
      <Tab value={2}>Tab 3</Tab>
    </Tabs>;
}`,...(z=(x=T.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var N,L,y;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`({
  size,
  ...args
}) => {
  return <div className="flex flex-col gap-6 items-center">
      <Tabs {...args} size="xs">
        <Tab value={0}>Tiny</Tab>
        <Tab value={1}>Tiny</Tab>
        <Tab value={2}>Tiny</Tab>
      </Tabs>
      <Tabs {...args} size="sm">
        <Tab value={0}>Small</Tab>
        <Tab value={1}>Small</Tab>
        <Tab value={2}>Small</Tab>
      </Tabs>
      <Tabs {...args} size="md">
        <Tab value={0}>Normal</Tab>
        <Tab value={1}>Normal</Tab>
        <Tab value={2}>Normal</Tab>
      </Tabs>
      <Tabs {...args} size="lg">
        <Tab value={0}>Large</Tab>
        <Tab value={1}>Large</Tab>
        <Tab value={2}>Large</Tab>
      </Tabs>
    </div>;
}`,...(y=(L=u.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const k=["Default","Bordered","Lifted","Boxed","Sizes"];export{b as Bordered,T as Boxed,l as Default,t as Lifted,u as Sizes,k as __namedExportsOrder,O as default};
//# sourceMappingURL=Tabs.stories-bb0e78bb.js.map
