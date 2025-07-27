import{t as q,j as l,a as c}from"./tw-merge-4486aaf0.js";import{c as S}from"./clsx.m-1229b3e0.js";import{r as V}from"./index-f46741a2.js";const p=V.forwardRef(({className:e,size:r,color:s,bordered:h,dataTheme:w,..._},z)=>{const A=q("file-input",e,S({"file-input-xl":r==="xl","file-input-lg":r==="lg","file-input-md":r==="md","file-input-sm":r==="sm","file-input-xs":r==="xs","file-input-primary":s==="primary","file-input-secondary":s==="secondary","file-input-accent":s==="accent","file-input-ghost":s==="ghost","file-input-info":s==="info","file-input-success":s==="success","file-input-warning":s==="warning","file-input-error":s==="error","file-input-bordered":h}));return l("input",{..._,ref:z,type:"file","data-theme":w,className:A})});p.displayName="FileInput";const a=p;try{p.displayName="FileInput",p.__docgenInfo={description:"",displayName:"FileInput",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="FileInput",a.__docgenInfo={description:"",displayName:"FileInput",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Data Input/FileInput",component:a,args:{className:"w-full max-w-xs",disabled:!1}},j=e=>l(a,{...e}),n=j.bind({});n.args={};const t=e=>c("div",{className:"w-full flex flex-col gap-2",children:[l(a,{...e,color:"primary"}),l(a,{...e,color:"secondary"}),l(a,{...e,color:"accent"}),l(a,{...e,color:"ghost"}),l(a,{...e,color:"info"}),l(a,{...e,color:"success"}),l(a,{...e,color:"warning"}),l(a,{...e,color:"error"})]});t.args={};const i=e=>c("div",{className:"flex flex-col gap-4 w-full items-center",children:[l(a,{...e,size:"xs"}),l(a,{...e,size:"sm"}),l(a,{...e,size:"md"}),l(a,{...e,size:"lg"})]});i.args={};const o=e=>l("div",{className:"flex w-full component-preview p-4 items-center justify-center gap-2 font-sans",children:c("div",{className:"form-control w-full max-w-xs",children:[c("label",{className:"label",children:[l("span",{className:"label-text",children:"Pick a file"}),l("span",{className:"label-text-alt",children:"Alt label"})]}),l(a,{...e}),c("label",{className:"label",children:[l("span",{className:"label-text-alt",children:"Alt label"}),l("span",{className:"label-text-alt",children:"Alt label"})]})]})});o.args={};var u,m,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <FileInput {...args} />;
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var f,g,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <div className="w-full flex flex-col gap-2">
      <FileInput {...args} color="primary" />
      <FileInput {...args} color="secondary" />
      <FileInput {...args} color="accent" />
      <FileInput {...args} color="ghost" />
      <FileInput {...args} color="info" />
      <FileInput {...args} color="success" />
      <FileInput {...args} color="warning" />
      <FileInput {...args} color="error" />
    </div>;
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,N,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <div className="flex flex-col gap-4 w-full items-center">
      <FileInput {...args} size="xs" />
      <FileInput {...args} size="sm" />
      <FileInput {...args} size="md" />
      <FileInput {...args} size="lg" />
    </div>;
}`,...(v=(N=i.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var y,I,F;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick a file</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <FileInput {...args} />
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
    </div>;
}`,...(F=(I=o.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const E=["Default","Colors","Sizes","FormControlAndLabels"];export{t as Colors,n as Default,o as FormControlAndLabels,i as Sizes,E as __namedExportsOrder,k as default};
