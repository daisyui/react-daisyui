import{a as C,j as o}from"./tw-merge-0a3648bd.js";import{T as e}from"./index-6c8d164f.js";import{B as s}from"./Button-0a8fe609.js";import"./index-1b03fe98.js";import"./clsx.m-1229b3e0.js";import"./index-a55c3a76.js";const k={title:"Feedback/Tooltip",component:e},p=r=>o("div",{className:"my-6",children:o(e,{...r,children:o(s,{children:"Hover me"})})}),n=p.bind({});n.args={message:"hello"};const t=p.bind({});t.args={message:"hello",open:!0};const a=p.bind({});a.args={message:"hello",open:!0,position:"bottom"};const c=p.bind({});c.args={message:"hello",open:!0,position:"left"};const i=p.bind({});i.args={message:"hello",open:!0,position:"right"};const l=r=>C("div",{className:"flex gap-2 mt-6",children:[o(e,{...r,color:"primary",message:"primary",children:o(s,{color:"primary",children:"Primary"})}),o(e,{...r,color:"secondary",message:"secondary",children:o(s,{color:"secondary",children:"Secondary"})}),o(e,{...r,color:"accent",message:"accent",children:o(s,{color:"accent",children:"Accent"})})]});l.args={open:!0};const m=r=>C("div",{className:"flex gap-2 mt-6",children:[o(e,{...r,color:"info",message:"info",children:o(s,{color:"info",children:"Info"})}),o(e,{...r,color:"success",message:"success",children:o(s,{color:"success",children:"Success"})}),o(e,{...r,color:"warning",message:"warning",children:o(s,{color:"warning",children:"Warning"})}),o(e,{...r,color:"error",message:"error",children:o(s,{color:"error",children:"Error"})})]});m.args={open:!0};var u,d,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <div className="my-6">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>;
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var T,B,h;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <div className="my-6">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>;
}`,...(h=(B=t.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var v,y,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <div className="my-6">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>;
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,N,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <div className="my-6">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>;
}`,...(x=(N=c.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var b,w,H;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <div className="my-6">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>;
}`,...(H=(w=i.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var j,E,F;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <div className="flex gap-2 mt-6">
      <Tooltip {...args} color="primary" message="primary">
        <Button color="primary">Primary</Button>
      </Tooltip>

      <Tooltip {...args} color="secondary" message="secondary">
        <Button color="secondary">Secondary</Button>
      </Tooltip>

      <Tooltip {...args} color="accent" message="accent">
        <Button color="accent">Accent</Button>
      </Tooltip>
    </div>;
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var O,_,A;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <div className="flex gap-2 mt-6">
      <Tooltip {...args} color="info" message="info">
        <Button color="info">Info</Button>
      </Tooltip>

      <Tooltip {...args} color="success" message="success">
        <Button color="success">Success</Button>
      </Tooltip>

      <Tooltip {...args} color="warning" message="warning">
        <Button color="warning">Warning</Button>
      </Tooltip>

      <Tooltip {...args} color="error" message="error">
        <Button color="error">Error</Button>
      </Tooltip>
    </div>;
}`,...(A=(_=m.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const q=["Default","ForceOpen","Bottom","Left","Right","Colors","Statuses"];export{a as Bottom,l as Colors,n as Default,t as ForceOpen,c as Left,i as Right,m as Statuses,q as __namedExportsOrder,k as default};
