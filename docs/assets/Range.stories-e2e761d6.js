import{t as I,j as d,F as $,a}from"./tw-merge-837124be.js";import{r as p}from"./index-f1f749bf.js";import{c as C}from"./clsx.m-1229b3e0.js";import"./_commonjsHelpers-042e6b4d.js";const c=p.forwardRef(({color:e,size:i,step:o,dataTheme:T,className:b,...m},j)=>{const q=I("range",b,C({[`range-${i}`]:i,[`range-${e}`]:e})),F=s=>!isNaN(parseFloat(s))&&isFinite(s),M=p.useMemo(()=>{const s=Math.max(1,Number(o));return Math.ceil(100/s)??1},[m.max,o]);return d($,{children:[a("input",{...m,ref:j,type:"range",step:o,"data-theme":T,className:q}),F(o)&&a("div",{className:"w-full flex justify-between text-xs px-2",children:[...Array(M+1)].map((s,D)=>a("span",{children:"|"},D))})]})});c.displayName="Range";const r=c;try{c.displayName="Range",c.__docgenInfo={description:"",displayName:"Range",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{r.displayName="Range",r.__docgenInfo={description:"",displayName:"Range",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const k={title:"Data Input/Range",component:r},S=e=>a(r,{...e}),l=S.bind({});l.args={};const t=S.bind({});t.args={step:25};const n=e=>d("div",{className:"w-full flex flex-col gap-2",children:[a(r,{...e,defaultValue:"20",color:"primary"}),a(r,{...e,defaultValue:"30",color:"secondary"}),a(r,{...e,defaultValue:"40",color:"accent"}),a(r,{...e,defaultValue:"50",color:"success"}),a(r,{...e,defaultValue:"60",color:"warning"}),a(r,{...e,defaultValue:"70",color:"info"}),a(r,{...e,defaultValue:"80",color:"error"})]});n.args={};const u=e=>d("div",{className:"w-full flex flex-col gap-2",children:[a(r,{...e,defaultValue:"40",size:"xs"}),a(r,{...e,defaultValue:"50",size:"sm"}),a(r,{...e,defaultValue:"60",size:"md"}),a(r,{...e,defaultValue:"70",size:"lg"})]});var g,f,V;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <Range {...args} />;
}`,...(V=(f=l.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var x,R,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Range {...args} />;
}`,...(y=(R=t.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var _,v,h;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <div className="w-full flex flex-col gap-2">
      <Range {...args} defaultValue="20" color="primary" />
      <Range {...args} defaultValue="30" color="secondary" />
      <Range {...args} defaultValue="40" color="accent" />
      <Range {...args} defaultValue="50" color="success" />
      <Range {...args} defaultValue="60" color="warning" />
      <Range {...args} defaultValue="70" color="info" />
      <Range {...args} defaultValue="80" color="error" />
    </div>;
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var N,z,w;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <div className="w-full flex flex-col gap-2">
      <Range {...args} defaultValue="40" size="xs" />
      <Range {...args} defaultValue="50" size="sm" />
      <Range {...args} defaultValue="60" size="md" />
      <Range {...args} defaultValue="70" size="lg" />
    </div>;
}`,...(w=(z=u.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const B=["Default","WithSteps","Colors","Sizes"];export{n as Colors,l as Default,u as Sizes,t as WithSteps,B as __namedExportsOrder,k as default};
//# sourceMappingURL=Range.stories-e2e761d6.js.map
