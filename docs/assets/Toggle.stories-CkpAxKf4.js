import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as R}from"./iframe-DDnXVYpC.js";import{c as V}from"./clsx-B-dksMZM.js";import{t as E}from"./bundle-mjs-yGZq-iow.js";import{F as u}from"./index-BNCmuIF-.js";const r=R.forwardRef(({color:e,size:s,dataTheme:S,className:D,...L},q)=>{const A=E("toggle",D,V({"toggle-xl":s==="xl","toggle-lg":s==="lg","toggle-md":s==="md","toggle-sm":s==="sm","toggle-xs":s==="xs","toggle-neutral":e==="neutral","toggle-primary":e==="primary","toggle-secondary":e==="secondary","toggle-accent":e==="accent","toggle-info":e==="info","toggle-success":e==="success","toggle-warning":e==="warning","toggle-error":e==="error"}));return a.jsx("input",{...L,ref:q,type:"checkbox","data-theme":S,className:A})});r.displayName="Toggle";try{r.displayName="Toggle",r.__docgenInfo={description:"",displayName:"Toggle",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{r.displayName="Toggle",r.__docgenInfo={description:"",displayName:"Toggle",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const H={title:"Data Input/Toggle",component:r},g=e=>a.jsx(r,{...e}),t=g.bind({});t.args={};const I=e=>a.jsx(u,{className:"bg-base-200 p-4 rounded-lg shadow",children:a.jsx(u.Label,{title:"Remember me",children:a.jsx(r,{...e,className:"m-2"})})}),l=I.bind({});l.args={};const o=e=>a.jsxs("div",{className:"flex flex-col items-center float-left gap-2",children:[a.jsx(r,{...e,defaultChecked:!0,color:"primary"}),a.jsx(r,{...e,defaultChecked:!0,color:"secondary"}),a.jsx(r,{...e,defaultChecked:!0,color:"accent"}),a.jsx(r,{...e,defaultChecked:!0,color:"success"}),a.jsx(r,{...e,defaultChecked:!0,color:"warning"}),a.jsx(r,{...e,defaultChecked:!0,color:"info"}),a.jsx(r,{...e,defaultChecked:!0,color:"error"})]});o.args={};const c=g.bind({});c.args={disabled:!0};const d=g.bind({});d.args={disabled:!0,checked:!0};const n=e=>a.jsxs("div",{className:"flex flex-col items-center float-left gap-2",children:[a.jsx(r,{...e,defaultChecked:!0,size:"xs"}),a.jsx(r,{...e,defaultChecked:!0,size:"sm"}),a.jsx(r,{...e,defaultChecked:!0,size:"md"}),a.jsx(r,{...e,defaultChecked:!0,size:"lg"})]});var m,i,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var f,x,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Form className="bg-base-200 p-4 rounded-lg shadow">
      <Form.Label title="Remember me">
        <Toggle {...args} className="m-2" />
      </Form.Label>
    </Form>;
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var T,k,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked color="primary" />
      <Toggle {...args} defaultChecked color="secondary" />
      <Toggle {...args} defaultChecked color="accent" />
      <Toggle {...args} defaultChecked color="success" />
      <Toggle {...args} defaultChecked color="warning" />
      <Toggle {...args} defaultChecked color="info" />
      <Toggle {...args} defaultChecked color="error" />
    </div>;
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var b,y,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var _,v,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <Toggle {...args} />;
}`,...(N=(v=d.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var z,F,w;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <div className="flex flex-col items-center float-left gap-2">
      <Toggle {...args} defaultChecked size="xs" />
      <Toggle {...args} defaultChecked size="sm" />
      <Toggle {...args} defaultChecked size="md" />
      <Toggle {...args} defaultChecked size="lg" />
    </div>;
}`,...(w=(F=n.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const J=["Default","WithLabelAndForm","Colors","Disabled","DisabledAndChecked","Sizes"];export{o as Colors,t as Default,c as Disabled,d as DisabledAndChecked,n as Sizes,l as WithLabelAndForm,J as __namedExportsOrder,H as default};
