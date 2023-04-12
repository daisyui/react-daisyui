import{t as R,a as r,j as L}from"./tw-merge-e8a1af18.js";import{r as E}from"./index-f1f749bf.js";import{c as W}from"./clsx.m-1229b3e0.js";import{F as m}from"./index-05fbf133.js";import"./_commonjsHelpers-042e6b4d.js";const g=E.forwardRef(({color:e,size:d,dataTheme:q,className:A,...V},j)=>{const I=R("toggle",A,W({"toggle-lg":d==="lg","toggle-md":d==="md","toggle-sm":d==="sm","toggle-xs":d==="xs","toggle-primary":e==="primary","toggle-secondary":e==="secondary","toggle-accent":e==="accent","toggle-info":e==="info","toggle-success":e==="success","toggle-warning":e==="warning","toggle-error":e==="error"}));return r("input",{...V,ref:j,type:"checkbox","data-theme":q,className:I})});g.displayName="Toggle";const a=g;try{g.displayName="Toggle",g.__docgenInfo={description:"",displayName:"Toggle",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{a.displayName="Toggle",a.__docgenInfo={description:"",displayName:"Toggle",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const J={title:"Data Input/Toggle",component:a},u=e=>r(a,{...e}),s=u.bind({});s.args={};const M=e=>r(m,{className:"bg-base-200 p-4 rounded-lg shadow",children:r(m.Label,{title:"Remember me",children:r(a,{...e,className:"m-2"})})}),o=M.bind({});o.args={};const t=e=>L("div",{className:"flex flex-col items-center float-left gap-2",children:[r(a,{...e,defaultChecked:!0,color:"primary"}),r(a,{...e,defaultChecked:!0,color:"secondary"}),r(a,{...e,defaultChecked:!0,color:"accent"}),r(a,{...e,defaultChecked:!0,color:"success"}),r(a,{...e,defaultChecked:!0,color:"warning"}),r(a,{...e,defaultChecked:!0,color:"info"}),r(a,{...e,defaultChecked:!0,color:"error"})]});t.args={};const l=u.bind({});l.args={disabled:!0};const c=u.bind({});c.args={disabled:!0,checked:!0};const n=e=>L("div",{className:"flex flex-col items-center float-left gap-2",children:[r(a,{...e,defaultChecked:!0,size:"xs"}),r(a,{...e,defaultChecked:!0,size:"sm"}),r(a,{...e,defaultChecked:!0,size:"md"}),r(a,{...e,defaultChecked:!0,size:"lg"})]});var i,p,f;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,T,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <Form className="bg-base-200 p-4 rounded-lg shadow">
      <Form.Label title="Remember me">
        <Toggle {...args} className="m-2" />
      </Form.Label>
    </Form>;
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,b,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  return <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked color="primary" />
      <Toggle {...args} defaultChecked color="secondary" />
      <Toggle {...args} defaultChecked color="accent" />
      <Toggle {...args} defaultChecked color="success" />
      <Toggle {...args} defaultChecked color="warning" />
      <Toggle {...args} defaultChecked color="info" />
      <Toggle {...args} defaultChecked color="error" />
    </div>;
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,_,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(v=(_=l.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var N,z,F;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(F=(z=c.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var w,S,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked size="xs" />
      <Toggle {...args} defaultChecked size="sm" />
      <Toggle {...args} defaultChecked size="md" />
      <Toggle {...args} defaultChecked size="lg" />
    </div>;
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const K=["Default","WithLabelAndForm","Colors","Disabled","DisabledAndChecked","Sizes"];export{t as Colors,s as Default,l as Disabled,c as DisabledAndChecked,n as Sizes,o as WithLabelAndForm,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Toggle.stories-4cf58282.js.map
