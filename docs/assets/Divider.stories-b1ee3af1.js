import{t as x,j as r,a as u}from"./tw-merge-e2243cb0.js";import{c as _}from"./clsx.m-1229b3e0.js";import"./index-ebeaab24.js";const n=({children:e,vertical:p,horizontal:v,dataTheme:f,className:g,...h})=>{const b=x("divider",g,_({"divider-vertical":p,"divider-horizontal":v}));return r("div",{role:"separator",...h,"data-theme":f,className:b,children:e})},d=n;try{n.displayName="Divider",n.__docgenInfo={description:"",displayName:"Divider",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="Divider",d.__docgenInfo={description:"",displayName:"Divider",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}}}}}catch{}const w={title:"Layout/Divider",component:d},a=e=>u("div",{className:"flex flex-col w-full",children:[r("div",{className:"grid h-20 card bg-base-300 rounded-box place-items-center",children:"content"}),r(d,{...e,children:e.children}),r("div",{className:"grid h-20 card bg-base-300 rounded-box place-items-center",children:"content"})]});a.args={};const i=e=>u("div",{className:"flex flex-row w-full",children:[r("div",{className:"grid flex-grow h-32 card bg-base-300 rounded-box place-items-center",children:"content"}),r(d,{...e,children:e.children}),r("div",{className:"grid flex-grow h-32 card bg-base-300 rounded-box place-items-center",children:"content"})]});i.args={vertical:!0};var t,l,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  return <div className="flex flex-col w-full">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        content
      </div>
      <Divider {...args}>{args.children}</Divider>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        content
      </div>
    </div>;
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var c,o,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <div className="flex flex-row w-full">
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div>
      <Divider {...args}>{args.children}</Divider>
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div>
    </div>;
}`,...(m=(o=i.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const V=["Default","Vertical"];export{a as Default,i as Vertical,V as __namedExportsOrder,w as default};
//# sourceMappingURL=Divider.stories-b1ee3af1.js.map
