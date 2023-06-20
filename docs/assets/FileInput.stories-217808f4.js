import{t as q,a,j as o}from"./tw-merge-e8a1af18.js";import{c as S}from"./clsx.m-1229b3e0.js";import{r as V}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const p=V.forwardRef(({className:e,size:c,color:s,bordered:h,dataTheme:w,..._},z)=>{const A=q("file-input",e,S({"file-input-lg":c==="lg","file-input-md":c==="md","file-input-sm":c==="sm","file-input-xs":c==="xs","file-input-primary":s==="primary","file-input-secondary":s==="secondary","file-input-accent":s==="accent","file-input-ghost":s==="ghost","file-input-info":s==="info","file-input-success":s==="success","file-input-warning":s==="warning","file-input-error":s==="error","file-input-bordered":h}));return a("input",{..._,ref:z,type:"file","data-theme":w,className:A})});p.displayName="FileInput";const l=p;try{p.displayName="FileInput",p.__docgenInfo={description:"",displayName:"FileInput",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="FileInput",l.__docgenInfo={description:"",displayName:"FileInput",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}}}}}catch{}const E={title:"Data Input/FileInput",component:l,args:{className:"w-full max-w-xs",disabled:!1}},j=e=>a(l,{...e}),r=j.bind({});r.args={};const n=e=>o("div",{className:"w-full flex flex-col gap-2",children:[a(l,{...e,color:"primary"}),a(l,{...e,color:"secondary"}),a(l,{...e,color:"accent"}),a(l,{...e,color:"ghost"}),a(l,{...e,color:"info"}),a(l,{...e,color:"success"}),a(l,{...e,color:"warning"}),a(l,{...e,color:"error"})]});n.args={};const t=e=>o("div",{className:"flex flex-col gap-4 w-full items-center",children:[a(l,{...e,size:"xs"}),a(l,{...e,size:"sm"}),a(l,{...e,size:"md"}),a(l,{...e,size:"lg"})]});t.args={};const i=e=>a("div",{className:"flex w-full component-preview p-4 items-center justify-center gap-2 font-sans",children:o("div",{className:"form-control w-full max-w-xs",children:[o("label",{className:"label",children:[a("span",{className:"label-text",children:"Pick a file"}),a("span",{className:"label-text-alt",children:"Alt label"})]}),a(l,{...e}),o("label",{className:"label",children:[a("span",{className:"label-text-alt",children:"Alt label"}),a("span",{className:"label-text-alt",children:"Alt label"})]})]})});i.args={};var u,m,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <FileInput {...args} />;
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var f,g,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,N,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <div className="flex flex-col gap-4 w-full items-center">
      <FileInput {...args} size="xs" />
      <FileInput {...args} size="sm" />
      <FileInput {...args} size="md" />
      <FileInput {...args} size="lg" />
    </div>;
}`,...(y=(N=t.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var I,F,v;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
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
}`,...(v=(F=i.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};const L=["Default","Colors","Sizes","FormControlAndLabels"];export{n as Colors,r as Default,i as FormControlAndLabels,t as Sizes,L as __namedExportsOrder,E as default};
//# sourceMappingURL=FileInput.stories-217808f4.js.map
