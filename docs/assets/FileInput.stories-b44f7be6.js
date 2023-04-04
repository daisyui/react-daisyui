import{t as q,a,j as o}from"./tw-merge-837124be.js";import{c as S}from"./clsx.m-1229b3e0.js";import{r as V}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const i=V.forwardRef(({className:e,size:c,color:p,bordered:h,dataTheme:_,...w},z)=>{const A=q("file-input",e,S({[`file-input-${c}`]:c,[`file-input-${p}`]:p,"file-input-bordered":h}));return a("input",{...w,ref:z,type:"file","data-theme":_,className:A})});i.displayName="FileInput";const l=i;try{i.displayName="FileInput",i.__docgenInfo={description:"",displayName:"FileInput",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="FileInput",l.__docgenInfo={description:"",displayName:"FileInput",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Data Input/FileInput",component:l,args:{className:"w-full max-w-xs",disabled:!1}},j=e=>a(l,{...e}),s=j.bind({});s.args={};const r=e=>o("div",{className:"w-full flex flex-col gap-2",children:[a(l,{...e,color:"primary"}),a(l,{...e,color:"secondary"}),a(l,{...e,color:"accent"}),a(l,{...e,color:"ghost"}),a(l,{...e,color:"info"}),a(l,{...e,color:"success"}),a(l,{...e,color:"warning"}),a(l,{...e,color:"error"})]});r.args={};const n=e=>o("div",{className:"flex flex-col gap-4 w-full items-center",children:[a(l,{...e,size:"xs"}),a(l,{...e,size:"sm"}),a(l,{...e,size:"md"}),a(l,{...e,size:"lg"})]});n.args={};const t=e=>a("div",{className:"flex w-full component-preview p-4 items-center justify-center gap-2 font-sans",children:o("div",{className:"form-control w-full max-w-xs",children:[o("label",{className:"label",children:[a("span",{className:"label-text",children:"Pick a file"}),a("span",{className:"label-text-alt",children:"Alt label"})]}),a(l,{...e}),o("label",{className:"label",children:[a("span",{className:"label-text-alt",children:"Alt label"}),a("span",{className:"label-text-alt",children:"Alt label"})]})]})});t.args={};var u,d,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <FileInput {...args} />;
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var f,g,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,N,I;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <div className="flex flex-col gap-4 w-full items-center">
      <FileInput {...args} size="xs" />
      <FileInput {...args} size="sm" />
      <FileInput {...args} size="md" />
      <FileInput {...args} size="lg" />
    </div>;
}`,...(I=(N=n.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var F,v,y;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
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
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const E=["Default","Colors","Sizes","FormControlAndLabels"];export{r as Colors,s as Default,t as FormControlAndLabels,n as Sizes,E as __namedExportsOrder,k as default};
//# sourceMappingURL=FileInput.stories-b44f7be6.js.map
