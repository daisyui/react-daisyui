import{t as R,j as r,a as L}from"./tw-merge-4486aaf0.js";import{r as E}from"./index-f46741a2.js";import{c as W}from"./clsx.m-1229b3e0.js";import{F as m}from"./index-1d303440.js";const g=E.forwardRef(({color:e,size:s,dataTheme:q,className:A,...V},j)=>{const I=R("toggle",A,W({"toggle-xl":s==="xl","toggle-lg":s==="lg","toggle-md":s==="md","toggle-sm":s==="sm","toggle-xs":s==="xs","toggle-neutral":e==="neutral","toggle-primary":e==="primary","toggle-secondary":e==="secondary","toggle-accent":e==="accent","toggle-info":e==="info","toggle-success":e==="success","toggle-warning":e==="warning","toggle-error":e==="error"}));return r("input",{...V,ref:j,type:"checkbox","data-theme":q,className:I})});g.displayName="Toggle";const a=g;try{g.displayName="Toggle",g.__docgenInfo={description:"",displayName:"Toggle",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{a.displayName="Toggle",a.__docgenInfo={description:"",displayName:"Toggle",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const H={title:"Data Input/Toggle",component:a},u=e=>r(a,{...e}),l=u.bind({});l.args={};const M=e=>r(m,{className:"bg-base-200 p-4 rounded-lg shadow",children:r(m.Label,{title:"Remember me",children:r(a,{...e,className:"m-2"})})}),t=M.bind({});t.args={};const o=e=>L("div",{className:"flex flex-col items-center float-left gap-2",children:[r(a,{...e,defaultChecked:!0,color:"primary"}),r(a,{...e,defaultChecked:!0,color:"secondary"}),r(a,{...e,defaultChecked:!0,color:"accent"}),r(a,{...e,defaultChecked:!0,color:"success"}),r(a,{...e,defaultChecked:!0,color:"warning"}),r(a,{...e,defaultChecked:!0,color:"info"}),r(a,{...e,defaultChecked:!0,color:"error"})]});o.args={};const c=u.bind({});c.args={disabled:!0};const d=u.bind({});d.args={disabled:!0,checked:!0};const n=e=>L("div",{className:"flex flex-col items-center float-left gap-2",children:[r(a,{...e,defaultChecked:!0,size:"xs"}),r(a,{...e,defaultChecked:!0,size:"sm"}),r(a,{...e,defaultChecked:!0,size:"md"}),r(a,{...e,defaultChecked:!0,size:"lg"})]});var i,p,f;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(f=(p=l.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,T,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <Form className="bg-base-200 p-4 rounded-lg shadow">
      <Form.Label title="Remember me">
        <Toggle {...args} className="m-2" />
      </Form.Label>
    </Form>;
}`,...(k=(T=t.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,x,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  return <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked color="primary" />
      <Toggle {...args} defaultChecked color="secondary" />
      <Toggle {...args} defaultChecked color="accent" />
      <Toggle {...args} defaultChecked color="success" />
      <Toggle {...args} defaultChecked color="warning" />
      <Toggle {...args} defaultChecked color="info" />
      <Toggle {...args} defaultChecked color="error" />
    </div>;
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,_,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(v=(_=c.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var N,z,F;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var w,S,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked size="xs" />
      <Toggle {...args} defaultChecked size="sm" />
      <Toggle {...args} defaultChecked size="md" />
      <Toggle {...args} defaultChecked size="lg" />
    </div>;
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const J=["Default","WithLabelAndForm","Colors","Disabled","DisabledAndChecked","Sizes"];export{o as Colors,l as Default,c as Disabled,d as DisabledAndChecked,n as Sizes,t as WithLabelAndForm,J as __namedExportsOrder,H as default};
