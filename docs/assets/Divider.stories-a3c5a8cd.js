import{t as T,j as e,a as t}from"./tw-merge-e2243cb0.js";import{c as S}from"./clsx.m-1229b3e0.js";import{C as n}from"./index-587fb902.js";import"./index-ebeaab24.js";const c=({children:r,vertical:a,horizontal:_,responsive:C,dataTheme:D,className:z,...q})=>{const V=T("divider",z,S({"divider-vertical":a,"divider-horizontal":_,"lg:divider-horizontal":C}));return e("div",{role:"separator",...q,"data-theme":D,className:V,children:r})},s=c;try{c.displayName="Divider",c.__docgenInfo={description:"",displayName:"Divider",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="Divider",s.__docgenInfo={description:"",displayName:"Divider",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean"}}}}}catch{}const O={title:"Layout/Divider",component:s,args:{children:"OR"}},l=({children:r,...a})=>t("div",{className:"flex flex-col w-full border-opacity-50",children:[e(n,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"}),e(s,{...a,children:r}),e(n,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"})]});l.args={};const d=({children:r,...a})=>t("div",{className:"flex w-full ",children:[e(n,{className:"grid h-20 flex-grow bg-base-300 rounded-box place-items-center",children:"content"}),e(s,{...a,children:r}),e(n,{className:"grid h-20 flex-grow bg-base-300 rounded-box place-items-center",children:"content"})]});d.args={horizontal:!0};const o=({children:r,...a})=>t("div",{className:"flex flex-col w-full",children:[e(n,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"}),e(s,{...a,children:r}),e(n,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"})]});o.args={children:""};const i=({children:r,...a})=>t("div",{className:"flex flex-col w-full lg:flex-row",children:[e(n,{className:"grid flex-grow h-32 bg-base-300 rounded-box place-items-center",children:"content"}),e(s,{...a,children:r}),e(n,{className:"grid flex-grow h-32 bg-base-300 rounded-box place-items-center",children:"content"})]});i.args={responsive:!0};var m,u,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <div className="flex flex-col w-full border-opacity-50">
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>;
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,b,f;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <div className="flex w-full ">
      <Card className="grid h-20 flex-grow bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid h-20 flex-grow bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>;
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,x,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <div className="flex flex-col w-full">
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid h-20 bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>;
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var N,w,y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  return <div className="flex flex-col w-full lg:flex-row">
      <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
        content
      </Card>
      <Divider {...args}>{children}</Divider>
      <Card className="grid flex-grow h-32 bg-base-300 rounded-box place-items-center">
        content
      </Card>
    </div>;
}`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const E=["Default","Horizontal","NoText","Responsive"];export{l as Default,d as Horizontal,o as NoText,i as Responsive,E as __namedExportsOrder,O as default};
//# sourceMappingURL=Divider.stories-a3c5a8cd.js.map
