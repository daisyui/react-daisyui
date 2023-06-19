import{t as I,a as i,F as C,j as a}from"./tw-merge-e2243cb0.js";import{r as g}from"./index-ebeaab24.js";import{c as E}from"./clsx.m-1229b3e0.js";const d=g.forwardRef(({color:e,size:u,step:o,dataTheme:T,className:b,...m},j)=>{const q=I("range",b,E({"range-lg":u==="lg","range-md":u==="md","range-sm":u==="sm","range-xs":u==="xs","range-primary":e==="primary","range-secondary":e==="secondary","range-accent":e==="accent","range-info":e==="info","range-success":e==="success","range-warning":e==="warning","range-error":e==="error"})),F=s=>!isNaN(parseFloat(s))&&isFinite(s),M=g.useMemo(()=>{const s=Math.max(1,Number(o));return Math.ceil(100/s)??1},[m.max,o]);return i(C,{children:[a("input",{...m,ref:j,type:"range",step:o,"data-theme":T,className:q}),F(o)&&a("div",{className:"w-full flex justify-between text-xs px-2",children:[...Array(M+1)].map((s,D)=>a("span",{children:"|"},D))})]})});d.displayName="Range";const r=d;try{d.displayName="Range",d.__docgenInfo={description:"",displayName:"Range",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{r.displayName="Range",r.__docgenInfo={description:"",displayName:"Range",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const $={title:"Data Input/Range",component:r},S=e=>a(r,{...e}),n=S.bind({});n.args={};const l=S.bind({});l.args={step:25};const t=e=>i("div",{className:"w-full flex flex-col gap-2",children:[a(r,{...e,defaultValue:"20",color:"primary"}),a(r,{...e,defaultValue:"30",color:"secondary"}),a(r,{...e,defaultValue:"40",color:"accent"}),a(r,{...e,defaultValue:"50",color:"success"}),a(r,{...e,defaultValue:"60",color:"warning"}),a(r,{...e,defaultValue:"70",color:"info"}),a(r,{...e,defaultValue:"80",color:"error"})]});t.args={};const c=e=>i("div",{className:"w-full flex flex-col gap-2",children:[a(r,{...e,defaultValue:"40",size:"xs"}),a(r,{...e,defaultValue:"50",size:"sm"}),a(r,{...e,defaultValue:"60",size:"md"}),a(r,{...e,defaultValue:"70",size:"lg"})]});var p,f,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <Range {...args} />;
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var V,y,R;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <Range {...args} />;
}`,...(R=(y=l.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var _,v,h;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <div className="w-full flex flex-col gap-2">
      <Range {...args} defaultValue="20" color="primary" />
      <Range {...args} defaultValue="30" color="secondary" />
      <Range {...args} defaultValue="40" color="accent" />
      <Range {...args} defaultValue="50" color="success" />
      <Range {...args} defaultValue="60" color="warning" />
      <Range {...args} defaultValue="70" color="info" />
      <Range {...args} defaultValue="80" color="error" />
    </div>;
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var N,w,z;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <div className="w-full flex flex-col gap-2">
      <Range {...args} defaultValue="40" size="xs" />
      <Range {...args} defaultValue="50" size="sm" />
      <Range {...args} defaultValue="60" size="md" />
      <Range {...args} defaultValue="70" size="lg" />
    </div>;
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const k=["Default","WithSteps","Colors","Sizes"];export{t as Colors,n as Default,c as Sizes,l as WithSteps,k as __namedExportsOrder,$ as default};
//# sourceMappingURL=Range.stories-fc3abd70.js.map
