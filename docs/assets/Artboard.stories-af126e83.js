import{t as N,j as a,a as f}from"./tw-merge-e2243cb0.js";import{r as q}from"./index-ebeaab24.js";import{c as V}from"./clsx.m-1229b3e0.js";const d=q.forwardRef(({children:e,demo:A,size:o,horizontal:x,dataTheme:v,className:g,..._},y)=>{const w=N("artboard",g,V({"artboard-demo":A,"phone-1":o===1,"phone-2":o===2,"phone-3":o===3,"phone-4":o===4,"phone-5":o===5,"phone-6":o===6,horizontal:x}));return a("div",{"aria-label":"Artboard",..._,ref:y,"data-theme":v,className:w,children:e})});d.displayName="Artboard";const r=d;try{d.displayName="Artboard",d.__docgenInfo={description:"",displayName:"Artboard",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},demo:{defaultValue:null,description:"",name:"demo",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"4"},{value:"2"},{value:"1"},{value:"3"},{value:"5"},{value:"6"}]}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="Artboard",r.__docgenInfo={description:"",displayName:"Artboard",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},demo:{defaultValue:null,description:"",name:"demo",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"4"},{value:"2"},{value:"1"},{value:"3"},{value:"5"},{value:"6"}]}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}}}}}catch{}const j={title:"Layout/Artboard",component:r},n=e=>a(r,{...e,children:"Example"});n.args={size:1};const t=e=>f("div",{className:"flex w-auto space-x-10 flex-nowrap overflow-x-auto p-8 bg-neutral rounded-2xl",children:[a(r,{...e,size:1,children:"phone-1"}),a(r,{...e,size:2,children:"phone-2"}),a(r,{...e,size:3,children:"phone-3"}),a(r,{...e,size:4,children:"phone-4"}),a(r,{...e,size:5,children:"phone-5"}),a(r,{...e,size:6,children:"phone-6"})]}),l=e=>f("div",{className:"flex w-auto space-x-4 flex-nowrap overflow-x-auto p-8 bg-neutral rounded-2xl",children:[a(r,{...e,size:1,horizontal:!0,children:"phone-1"}),a(r,{...e,size:2,horizontal:!0,children:"phone-2"}),a(r,{...e,size:3,horizontal:!0,children:"phone-3"}),a(r,{...e,size:4,horizontal:!0,children:"phone-4"}),a(r,{...e,size:5,horizontal:!0,children:"phone-5"}),a(r,{...e,size:6,horizontal:!0,children:"phone-6"})]});var s,i,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <Artboard {...args}>Example</Artboard>;
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,c,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <div className="flex w-auto space-x-10 flex-nowrap overflow-x-auto p-8 bg-neutral rounded-2xl">
      <Artboard {...args} size={1}>
        phone-1
      </Artboard>
      <Artboard {...args} size={2}>
        phone-2
      </Artboard>
      <Artboard {...args} size={3}>
        phone-3
      </Artboard>
      <Artboard {...args} size={4}>
        phone-4
      </Artboard>
      <Artboard {...args} size={5}>
        phone-5
      </Artboard>
      <Artboard {...args} size={6}>
        phone-6
      </Artboard>
    </div>;
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var m,b,z;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <div className="flex w-auto space-x-4 flex-nowrap overflow-x-auto p-8 bg-neutral rounded-2xl">
      <Artboard {...args} size={1} horizontal>
        phone-1
      </Artboard>
      <Artboard {...args} size={2} horizontal>
        phone-2
      </Artboard>
      <Artboard {...args} size={3} horizontal>
        phone-3
      </Artboard>
      <Artboard {...args} size={4} horizontal>
        phone-4
      </Artboard>
      <Artboard {...args} size={5} horizontal>
        phone-5
      </Artboard>
      <Artboard {...args} size={6} horizontal>
        phone-6
      </Artboard>
    </div>;
}`,...(z=(b=l.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const D=["Default","Sizes","Horizontal"];export{n as Default,l as Horizontal,t as Sizes,D as __namedExportsOrder,j as default};
//# sourceMappingURL=Artboard.stories-af126e83.js.map
