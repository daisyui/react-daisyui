import{t as F,j as e,a as o}from"./tw-merge-0a3648bd.js";import{r as G}from"./index-1b03fe98.js";import{c as J}from"./clsx.m-1229b3e0.js";import{C as d}from"./index-c42c26b3.js";const g=G.forwardRef(({children:n,vertical:i,horizontal:a,responsive:l,color:s,start:O,end:W,dataTheme:L,className:M,...$},k)=>{const B=F("divider",M,J({"divider-vertical":i,"divider-horizontal":a,"lg:divider-horizontal":l,"divider-neutral":s==="neutral","divider-primary":s==="primary","divider-secondary":s==="secondary","divider-accent":s==="accent","divider-warning":s==="warning","divider-info":s==="info","divider-error":s==="error","divider-start":O,"divider-end":W}));return e("div",{role:"separator",...$,"data-theme":L,className:B,ref:k,children:n})});g.displayName="Divider";const r=g;try{g.displayName="Divider",g.__docgenInfo={description:"",displayName:"Divider",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"boolean"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}}}}}catch{}try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"boolean"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}}}}}catch{}const Y={title:"Layout/Divider",component:r,args:{children:"OR"}},c=({children:n,...i})=>o("div",{className:"flex flex-col w-full border-opacity-50",children:[e(d,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"}),e(r,{...i,children:n}),e(d,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"})]});c.args={};const u=({children:n,...i})=>o("div",{className:"flex w-full ",children:[e(d,{className:"grid h-20 flex-grow bg-base-300 rounded-box place-items-center",children:"content"}),e(r,{...i,children:n}),e(d,{className:"grid h-20 flex-grow bg-base-300 rounded-box place-items-center",children:"content"})]});u.args={horizontal:!0};const m=({children:n,...i})=>o("div",{className:"flex flex-col w-full",children:[e(d,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"}),e(r,{...i,children:n}),e(d,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"})]});m.args={children:""};const f=({children:n,...i})=>o("div",{className:"flex flex-col w-full lg:flex-row",children:[e(d,{className:"grid flex-grow h-32 bg-base-300 rounded-box place-items-center",children:"content"}),e(r,{...i,children:n}),e(d,{className:"grid flex-grow h-32 bg-base-300 rounded-box place-items-center",children:"content"})]});f.args={responsive:!0};const p=({children:n,color:i,...a})=>o("div",{className:"flex flex-col w-full",children:[e(r,{...a,children:"Default"}),e(r,{...a,color:"neutral",children:"Neutral"}),e(r,{...a,color:"primary",children:"Primary"}),e(r,{...a,color:"secondary",children:"Secondary"}),e(r,{...a,color:"accent",children:"Accent"}),e(r,{...a,color:"success",children:"Success"}),e(r,{...a,color:"warning",children:"Warning"}),e(r,{...a,color:"info",children:"Info"}),e(r,{...a,color:"error",children:"Error"})]});p.argTypes={children:{control:!1},color:{control:!1}};const v=({children:n,start:i,end:a,...l})=>o("div",{className:"flex flex-col w-full",children:[e(r,{...l,start:!0,children:"Start"}),e(r,{...l,children:"Default"}),e(r,{...l,end:!0,children:"End"})]});v.argTypes={children:{control:!1},start:{control:!1},end:{control:!1}};const t=({children:n,start:i,end:a,...l})=>o("div",{className:"flex w-full justify-center h-52",children:[e(r,{...l,start:!0,children:"Start"}),e(r,{...l,children:"Default"}),e(r,{...l,end:!0,children:"End"})]});t.argTypes={children:{control:!1},start:{control:!1},end:{control:!1}};t.args={horizontal:!0};var h,b,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var D,y,N;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`({
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
}`,...(N=(y=u.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var w,C,_;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`({
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
}`,...(_=(C=m.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var S,q,V;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(V=(q=f.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var z,T,E;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`({
  children,
  color,
  ...args
}) => {
  return <div className="flex flex-col w-full">
      <Divider {...args}>Default</Divider>
      <Divider {...args} color="neutral">
        Neutral
      </Divider>
      <Divider {...args} color="primary">
        Primary
      </Divider>
      <Divider {...args} color="secondary">
        Secondary
      </Divider>
      <Divider {...args} color="accent">
        Accent
      </Divider>
      <Divider {...args} color="success">
        Success
      </Divider>
      <Divider {...args} color="warning">
        Warning
      </Divider>
      <Divider {...args} color="info">
        Info
      </Divider>
      <Divider {...args} color="error">
        Error
      </Divider>
    </div>;
}`,...(E=(T=p.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var P,j,H;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`({
  children,
  start,
  end,
  ...args
}) => {
  return <div className="flex flex-col w-full">
      <Divider {...args} start={true}>
        Start
      </Divider>
      <Divider {...args}>Default</Divider>
      <Divider {...args} end={true}>
        End
      </Divider>
    </div>;
}`,...(H=(j=v.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var I,R,A;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`({
  children,
  start,
  end,
  ...args
}) => {
  return <div className="flex w-full justify-center h-52">
      <Divider {...args} start={true}>
        Start
      </Divider>
      <Divider {...args}>Default</Divider>
      <Divider {...args} end={true}>
        End
      </Divider>
    </div>;
}`,...(A=(R=t.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const Z=["Default","Horizontal","NoText","Responsive","Colors","DifferentPositions","DifferentPositionsHorizontal"];export{p as Colors,c as Default,v as DifferentPositions,t as DifferentPositionsHorizontal,u as Horizontal,m as NoText,f as Responsive,Z as __namedExportsOrder,Y as default};
