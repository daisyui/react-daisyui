import{t as v,j as e,a as r}from"./tw-merge-4486aaf0.js";import{r as _}from"./index-f46741a2.js";import{c as y}from"./clsx.m-1229b3e0.js";const o=_.forwardRef(({dataTheme:s,className:k,children:S,...w},x)=>{const g=v("skeleton",y({}),k);return e("div",{...w,"data-theme":s,className:g,ref:x,children:S})});o.displayName="Skeleton";const a=o;try{o.displayName="Skeleton",o.__docgenInfo={description:"",displayName:"Skeleton",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const j={title:"Feedback/Skeleton",component:a,parameters:{controls:{expanded:!0}}},l=s=>e(a,{...s});l.args={className:"w-32 h-32"};const t=({dataTheme:s})=>r("div",{className:"flex flex-col gap-4 w-52","data-theme":s,children:[r("div",{className:"flex gap-4 items-center",children:[e(a,{className:"w-16 h-16 rounded-full shrink-0"}),r("div",{className:"flex flex-col gap-4",children:[e(a,{className:"h-4 w-20"}),e(a,{className:"h-4 w-28"})]})]}),e(a,{className:"h-32 w-full"})]}),n=({dataTheme:s})=>r("div",{className:"flex flex-col gap-4 w-52","data-theme":s,children:[e(a,{className:"h-32 w-full"}),e(a,{className:"h-4 w-28"}),e(a,{className:"h-4 w-full"}),e(a,{className:"h-4 w-full"})]});var c,m,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <Skeleton {...args} />;
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,h,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var u,f,N;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
  dataTheme
}) => {
  return <div className="flex flex-col gap-4 w-52" data-theme={dataTheme}>
      <Skeleton className="h-32 w-full"></Skeleton>
      <Skeleton className="h-4 w-28"></Skeleton>
      <Skeleton className="h-4 w-full"></Skeleton>
      <Skeleton className="h-4 w-full"></Skeleton>
    </div>;
}`,...(N=(f=n.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const R=["Default","CircleWithContent","RectangleWithContent"];export{t as CircleWithContent,l as Default,n as RectangleWithContent,R as __namedExportsOrder,j as default};
