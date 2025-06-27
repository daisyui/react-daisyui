import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as B}from"./iframe-DDnXVYpC.js";import{c as F}from"./clsx-B-dksMZM.js";import{t as G}from"./bundle-mjs-yGZq-iow.js";import{C as l}from"./index-DIaYqioD.js";const r=B.forwardRef(({children:n,vertical:s,horizontal:a,responsive:i,color:d,start:I,end:A,dataTheme:O,className:W,...L},M)=>{const k=G("divider",W,F({"divider-vertical":s,"divider-horizontal":a,"lg:divider-horizontal":i,"divider-neutral":d==="neutral","divider-primary":d==="primary","divider-secondary":d==="secondary","divider-accent":d==="accent","divider-warning":d==="warning","divider-info":d==="info","divider-error":d==="error","divider-start":I,"divider-end":A}));return e.jsx("div",{role:"separator",...L,"data-theme":O,className:k,ref:M,children:n})});r.displayName="Divider";try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"boolean"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}}}}}catch{}try{r.displayName="Divider",r.__docgenInfo={description:"",displayName:"Divider",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"boolean"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}}}}}catch{}const Y={title:"Layout/Divider",component:r,args:{children:"OR"}},t=({children:n,...s})=>e.jsxs("div",{className:"flex flex-col w-full border-opacity-50",children:[e.jsx(l,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"}),e.jsx(r,{...s,children:n}),e.jsx(l,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"})]});t.args={};const c=({children:n,...s})=>e.jsxs("div",{className:"flex w-full ",children:[e.jsx(l,{className:"grid h-20 flex-grow bg-base-300 rounded-box place-items-center",children:"content"}),e.jsx(r,{...s,children:n}),e.jsx(l,{className:"grid h-20 flex-grow bg-base-300 rounded-box place-items-center",children:"content"})]});c.args={horizontal:!0};const u=({children:n,...s})=>e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx(l,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"}),e.jsx(r,{...s,children:n}),e.jsx(l,{className:"grid h-20 bg-base-300 rounded-box place-items-center",children:"content"})]});u.args={children:""};const m=({children:n,...s})=>e.jsxs("div",{className:"flex flex-col w-full lg:flex-row",children:[e.jsx(l,{className:"grid flex-grow h-32 bg-base-300 rounded-box place-items-center",children:"content"}),e.jsx(r,{...s,children:n}),e.jsx(l,{className:"grid flex-grow h-32 bg-base-300 rounded-box place-items-center",children:"content"})]});m.args={responsive:!0};const f=({children:n,color:s,...a})=>e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx(r,{...a,children:"Default"}),e.jsx(r,{...a,color:"neutral",children:"Neutral"}),e.jsx(r,{...a,color:"primary",children:"Primary"}),e.jsx(r,{...a,color:"secondary",children:"Secondary"}),e.jsx(r,{...a,color:"accent",children:"Accent"}),e.jsx(r,{...a,color:"success",children:"Success"}),e.jsx(r,{...a,color:"warning",children:"Warning"}),e.jsx(r,{...a,color:"info",children:"Info"}),e.jsx(r,{...a,color:"error",children:"Error"})]});f.argTypes={children:{control:!1},color:{control:!1}};const p=({children:n,start:s,end:a,...i})=>e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx(r,{...i,start:!0,children:"Start"}),e.jsx(r,{...i,children:"Default"}),e.jsx(r,{...i,end:!0,children:"End"})]});p.argTypes={children:{control:!1},start:{control:!1},end:{control:!1}};const o=({children:n,start:s,end:a,...i})=>e.jsxs("div",{className:"flex w-full justify-center h-52",children:[e.jsx(r,{...i,start:!0,children:"Start"}),e.jsx(r,{...i,children:"Default"}),e.jsx(r,{...i,end:!0,children:"End"})]});o.argTypes={children:{control:!1},start:{control:!1},end:{control:!1}};o.args={horizontal:!0};var v,x,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,b,D;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(D=(b=c.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var y,N,j;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(j=(N=u.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var w,C,_;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`({
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
}`,...(_=(C=m.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var S,q,V;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(V=(q=f.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var z,E,T;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`({
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
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var P,R,H;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
}`,...(H=(R=o.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const Z=["Default","Horizontal","NoText","Responsive","Colors","DifferentPositions","DifferentPositionsHorizontal"];export{f as Colors,t as Default,p as DifferentPositions,o as DifferentPositionsHorizontal,c as Horizontal,u as NoText,m as Responsive,Z as __namedExportsOrder,Y as default};
