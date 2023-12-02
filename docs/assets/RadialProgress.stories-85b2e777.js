import{t as q,j as l,a as _}from"./tw-merge-0a3648bd.js";import{r as j}from"./index-1b03fe98.js";import{c as M}from"./clsx.m-1229b3e0.js";const o=j.forwardRef(({value:r,size:b="4rem",thickness:z="4px",color:e,dataTheme:C,className:S,children:N,...w},T)=>{const V=q("radial-progress",S,M({"text-primary":e==="primary","text-secondary":e==="secondary","text-accent":e==="accent","text-info":e==="info","text-success":e==="success","text-warning":e==="warning","text-error":e==="error"})),d=Math.min(100,Math.max(0,r));return l("div",{role:"progressbar","aria-valuenow":d,"aria-valuemin":0,"aria-valuemax":100,...w,ref:T,"data-theme":C,className:V,style:{"--value":d,"--size":b,"--thickness":z},children:N})});o.displayName="RadialProgress";const i=o;try{o.displayName="RadialProgress",o.__docgenInfo={description:"",displayName:"RadialProgress",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},size:{defaultValue:{value:"4rem"},description:"",name:"size",required:!1,type:{name:"string"}},thickness:{defaultValue:{value:"4px"},description:"",name:"thickness",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Feedback/Radial Progress",component:i},c=r=>_(i,{...r,children:[r.value,"%"]}),a=c.bind({});a.args={value:75};const s=c.bind({});s.args={value:75,color:"primary"};const t=c.bind({});t.args={value:75,className:"bg-primary text-primary-content border-4 border-primary"};const n=r=>_("div",{className:"flex items-center gap-4",children:[l(i,{value:70,size:"12rem",thickness:"2px",children:"70%"}),l(i,{value:80,size:"12rem",thickness:"2rem",children:"80%"})]});n.args={};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <RadialProgress {...args}>{args.value}%</RadialProgress>;
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,v,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <RadialProgress {...args}>{args.value}%</RadialProgress>;
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,f,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <RadialProgress {...args}>{args.value}%</RadialProgress>;
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var R,P,k;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <div className="flex items-center gap-4">
      <RadialProgress value={70} size="12rem" thickness="2px">
        70%
      </RadialProgress>
      <RadialProgress value={80} size="12rem" thickness="2rem">
        80%
      </RadialProgress>
    </div>;
}`,...(k=(P=n.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const I=["Default","CustomColor","BackgroundColor","CustomSizeAndThickness"];export{t as BackgroundColor,s as CustomColor,n as CustomSizeAndThickness,a as Default,I as __namedExportsOrder,F as default};
