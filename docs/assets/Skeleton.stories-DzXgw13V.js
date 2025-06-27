import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./iframe-DDnXVYpC.js";import{c as g}from"./clsx-B-dksMZM.js";import{t as j}from"./bundle-mjs-yGZq-iow.js";const a=w.forwardRef(({dataTheme:s,className:f,children:x,...N},k)=>{const S=j("skeleton",g({}),f);return e.jsx("div",{...N,"data-theme":s,className:S,ref:k,children:x})});a.displayName="Skeleton";try{a.displayName="Skeleton",a.__docgenInfo={description:"",displayName:"Skeleton",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const T={title:"Feedback/Skeleton",component:a,parameters:{controls:{expanded:!0}}},l=s=>e.jsx(a,{...s});l.args={className:"w-32 h-32"};const t=({dataTheme:s})=>e.jsxs("div",{className:"flex flex-col gap-4 w-52","data-theme":s,children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(a,{className:"w-16 h-16 rounded-full shrink-0"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{className:"h-4 w-20"}),e.jsx(a,{className:"h-4 w-28"})]})]}),e.jsx(a,{className:"h-32 w-full"})]}),r=({dataTheme:s})=>e.jsxs("div",{className:"flex flex-col gap-4 w-52","data-theme":s,children:[e.jsx(a,{className:"h-32 w-full"}),e.jsx(a,{className:"h-4 w-28"}),e.jsx(a,{className:"h-4 w-full"}),e.jsx(a,{className:"h-4 w-full"})]});var n,o,c;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return <Skeleton {...args} />;
}`,...(c=(o=l.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,d,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  dataTheme
}) => {
  return <div className="flex flex-col gap-4 w-52" data-theme={dataTheme}>
      <div className="flex gap-4 items-center">
        <Skeleton className="w-16 h-16 rounded-full shrink-0"></Skeleton>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-20"></Skeleton>
          <Skeleton className="h-4 w-28"></Skeleton>
        </div>
      </div>
      <Skeleton className="h-32 w-full"></Skeleton>
    </div>;
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,h,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
  dataTheme
}) => {
  return <div className="flex flex-col gap-4 w-52" data-theme={dataTheme}>
      <Skeleton className="h-32 w-full"></Skeleton>
      <Skeleton className="h-4 w-28"></Skeleton>
      <Skeleton className="h-4 w-full"></Skeleton>
      <Skeleton className="h-4 w-full"></Skeleton>
    </div>;
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const R=["Default","CircleWithContent","RectangleWithContent"];export{t as CircleWithContent,l as Default,r as RectangleWithContent,R as __namedExportsOrder,T as default};
