import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{c as _}from"./clsx-B-dksMZM.js";import{r as z}from"./iframe-DDnXVYpC.js";import{t as A}from"./bundle-mjs-yGZq-iow.js";const a=z.forwardRef(({className:l,size:r,color:s,bordered:y,dataTheme:I,...F},h)=>{const w=A("file-input",l,_({"file-input-xl":r==="xl","file-input-lg":r==="lg","file-input-md":r==="md","file-input-sm":r==="sm","file-input-xs":r==="xs","file-input-primary":s==="primary","file-input-secondary":s==="secondary","file-input-accent":s==="accent","file-input-ghost":s==="ghost","file-input-info":s==="info","file-input-success":s==="success","file-input-warning":s==="warning","file-input-error":s==="error","file-input-bordered":y}));return e.jsx("input",{...F,ref:h,type:"file","data-theme":I,className:w})});a.displayName="FileInput";try{a.displayName="FileInput",a.__docgenInfo={description:"",displayName:"FileInput",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="FileInput",a.__docgenInfo={description:"",displayName:"FileInput",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Data Input/FileInput",component:a,args:{className:"w-full max-w-xs",disabled:!1}},q=l=>e.jsx(a,{...l}),n=q.bind({});n.args={};const t=l=>e.jsxs("div",{className:"w-full flex flex-col gap-2",children:[e.jsx(a,{...l,color:"primary"}),e.jsx(a,{...l,color:"secondary"}),e.jsx(a,{...l,color:"accent"}),e.jsx(a,{...l,color:"ghost"}),e.jsx(a,{...l,color:"info"}),e.jsx(a,{...l,color:"success"}),e.jsx(a,{...l,color:"warning"}),e.jsx(a,{...l,color:"error"})]});t.args={};const i=l=>e.jsxs("div",{className:"flex flex-col gap-4 w-full items-center",children:[e.jsx(a,{...l,size:"xs"}),e.jsx(a,{...l,size:"sm"}),e.jsx(a,{...l,size:"md"}),e.jsx(a,{...l,size:"lg"})]});i.args={};const o=l=>e.jsx("div",{className:"flex w-full component-preview p-4 items-center justify-center gap-2 font-sans",children:e.jsxs("div",{className:"form-control w-full max-w-xs",children:[e.jsxs("label",{className:"label",children:[e.jsx("span",{className:"label-text",children:"Pick a file"}),e.jsx("span",{className:"label-text-alt",children:"Alt label"})]}),e.jsx(a,{...l}),e.jsxs("label",{className:"label",children:[e.jsx("span",{className:"label-text-alt",children:"Alt label"}),e.jsx("span",{className:"label-text-alt",children:"Alt label"})]})]})});o.args={};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <FileInput {...args} />;
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,d,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(f=(d=t.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var x,g,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <div className="flex flex-col gap-4 w-full items-center">
      <FileInput {...args} size="xs" />
      <FileInput {...args} size="sm" />
      <FileInput {...args} size="md" />
      <FileInput {...args} size="lg" />
    </div>;
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var j,N,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
}`,...(v=(N=o.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const E=["Default","Colors","Sizes","FormControlAndLabels"];export{t as Colors,n as Default,o as FormControlAndLabels,i as Sizes,E as __namedExportsOrder,D as default};
