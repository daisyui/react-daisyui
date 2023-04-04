import{t as R,a as r,j as L}from"./tw-merge-837124be.js";import{r as $}from"./index-f1f749bf.js";import{c as E}from"./clsx.m-1229b3e0.js";import{F as m}from"./index-ed795aa6.js";import"./_commonjsHelpers-042e6b4d.js";const n=$.forwardRef(({color:e,size:g,dataTheme:q,className:A,...V},j)=>{const I=R("toggle",A,E({[`toggle-${g}`]:g,[`toggle-${e}`]:e}));return r("input",{...V,ref:j,type:"checkbox","data-theme":q,className:I})});n.displayName="Toggle";const a=n;try{n.displayName="Toggle",n.__docgenInfo={description:"",displayName:"Toggle",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{a.displayName="Toggle",a.__docgenInfo={description:"",displayName:"Toggle",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const J={title:"Data Input/Toggle",component:a},u=e=>r(a,{...e}),s=u.bind({});s.args={};const W=e=>r(m,{className:"bg-base-200 p-4 rounded-lg shadow",children:r(m.Label,{title:"Remember me",children:r(a,{...e,className:"m-2"})})}),o=W.bind({});o.args={};const l=e=>L("div",{className:"flex flex-col items-center float-left gap-2",children:[r(a,{...e,defaultChecked:!0,color:"primary"}),r(a,{...e,defaultChecked:!0,color:"secondary"}),r(a,{...e,defaultChecked:!0,color:"accent"}),r(a,{...e,defaultChecked:!0,color:"success"}),r(a,{...e,defaultChecked:!0,color:"warning"}),r(a,{...e,defaultChecked:!0,color:"info"}),r(a,{...e,defaultChecked:!0,color:"error"})]});l.args={};const t=u.bind({});t.args={disabled:!0};const c=u.bind({});c.args={disabled:!0,checked:!0};const d=e=>L("div",{className:"flex flex-col items-center float-left gap-2",children:[r(a,{...e,defaultChecked:!0,size:"xs"}),r(a,{...e,defaultChecked:!0,size:"sm"}),r(a,{...e,defaultChecked:!0,size:"md"}),r(a,{...e,defaultChecked:!0,size:"lg"})]});var i,p,f;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,T,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <Form className="bg-base-200 p-4 rounded-lg shadow">
      <Form.Label title="Remember me">
        <Toggle {...args} className="m-2" />
      </Form.Label>
    </Form>;
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,b,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  return <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked color="primary" />
      <Toggle {...args} defaultChecked color="secondary" />
      <Toggle {...args} defaultChecked color="accent" />
      <Toggle {...args} defaultChecked color="success" />
      <Toggle {...args} defaultChecked color="warning" />
      <Toggle {...args} defaultChecked color="info" />
      <Toggle {...args} defaultChecked color="error" />
    </div>;
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var _,y,v;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var N,z,F;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(F=(z=c.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var S,D,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked size="xs" />
      <Toggle {...args} defaultChecked size="sm" />
      <Toggle {...args} defaultChecked size="md" />
      <Toggle {...args} defaultChecked size="lg" />
    </div>;
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const K=["Default","WithLabelAndForm","Colors","Disabled","DisabledAndChecked","Sizes"];export{l as Colors,s as Default,t as Disabled,c as DisabledAndChecked,d as Sizes,o as WithLabelAndForm,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Toggle.stories-6ef7a93c.js.map
