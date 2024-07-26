import{t as D,j as t,a as o}from"./tw-merge-0a3648bd.js";import{R as T}from"./index-1b03fe98.js";import{c as F}from"./clsx.m-1229b3e0.js";const v=T.forwardRef(({children:r,value:c,color:p,dataTheme:i,className:u,...d},h)=>{const m=D("step",u,F({"step-primary":p==="primary","step-secondary":p==="secondary","step-accent":p==="accent","step-info":p==="info","step-success":p==="success","step-warning":p==="warning","step-error":p==="error"}));return t("li",{"aria-label":"Step",...d,"data-theme":i,"data-content":c,className:m,ref:h,children:r})}),k=v;try{v.displayName="Step",v.__docgenInfo={description:"",displayName:"Step",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"ghost"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}}}}}catch{}const g=T.forwardRef(({children:r,dataTheme:c,className:p,vertical:i,horizontal:u,...d},h)=>{const m=D("steps",p,F({"steps-vertical":i,"steps-horizontal":u}));return t("ul",{"aria-label":"Steps",role:"group",...d,"data-theme":c,className:m,ref:h,children:r})}),e=Object.assign(g,{Step:k});try{g.displayName="Steps",g.__docgenInfo={description:"",displayName:"Steps",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Navigation/Steps",component:e},s=r=>o(e,{...r,children:[t(e.Step,{color:"primary",children:"Register"}),t(e.Step,{color:"primary",children:"Choose plan"}),t(e.Step,{children:"Purchase"}),t(e.Step,{children:"Receive Product"})]}),n=r=>o(e,{...r,children:[t(e.Step,{color:"primary",children:"Register"}),t(e.Step,{color:"primary",children:"Choose plan"}),t(e.Step,{children:"Purchase"}),t(e.Step,{children:"Receive Product"})]});n.args={className:"lg:steps-horizontal",vertical:!0};const a=r=>o(e,{...r,children:[t(e.Step,{value:"?",color:"neutral",children:"Step 1"}),t(e.Step,{value:"!",color:"neutral",children:"Step 2"}),t(e.Step,{value:"✓",color:"neutral",children:"Step 3"}),t(e.Step,{value:"✕",color:"neutral",children:"Step 4"}),t(e.Step,{value:"!",color:"neutral",children:"Step 5"}),t(e.Step,{value:"",color:"neutral",children:"Step 6"}),t(e.Step,{value:"●",color:"neutral",children:"Step 7"})]}),S=r=>o(e,{...r,children:[t(e.Step,{color:"info",children:"Fly to moon"}),t(e.Step,{color:"info",children:"Shrink the moon"}),t(e.Step,{color:"info",children:"Grab the moon"}),t(e.Step,{value:"?",color:"error",children:"Sit on toilet"})]}),l=r=>t("div",{className:"overflow-x-auto",children:o(e,{...r,children:[t(e.Step,{children:"start"}),t(e.Step,{color:"secondary",children:"2"}),t(e.Step,{color:"secondary",children:"3"}),t(e.Step,{color:"secondary",children:"4"}),t(e.Step,{children:"5"}),t(e.Step,{color:"accent",children:"6"}),t(e.Step,{color:"accent",children:"7"}),t(e.Step,{children:"8"}),t(e.Step,{color:"error",children:"9"}),t(e.Step,{color:"error",children:"10"}),t(e.Step,{children:"11"}),t(e.Step,{children:"12"}),t(e.Step,{color:"warning",children:"13"}),t(e.Step,{color:"warning",children:"14"}),t(e.Step,{children:"15"}),t(e.Step,{color:"neutral",children:"16"}),t(e.Step,{color:"neutral",children:"17"}),t(e.Step,{color:"neutral",children:"18"}),t(e.Step,{color:"neutral",children:"19"}),t(e.Step,{color:"neutral",children:"20"}),t(e.Step,{color:"neutral",children:"21"}),t(e.Step,{color:"neutral",children:"22"}),t(e.Step,{color:"neutral",children:"23"}),t(e.Step,{color:"neutral",children:"end"})]})});var y,f,_;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Steps {...args}>
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>;
}`,...(_=(f=s.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var R,w,C;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <Steps {...args}>
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>;
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,b,P;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Steps {...args}>
      <Steps.Step value="?" color="neutral">
        Step 1
      </Steps.Step>
      <Steps.Step value="!" color="neutral">
        Step 2
      </Steps.Step>
      <Steps.Step value="✓" color="neutral">
        Step 3
      </Steps.Step>
      <Steps.Step value="✕" color="neutral">
        Step 4
      </Steps.Step>
      <Steps.Step value="!" color="neutral">
        Step 5
      </Steps.Step>
      <Steps.Step value="" color="neutral">
        Step 6
      </Steps.Step>
      <Steps.Step value="●" color="neutral">
        Step 7
      </Steps.Step>
    </Steps>;
}`,...(P=(b=a.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var x,q,V;S.parameters={...S.parameters,docs:{...(x=S.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Steps {...args}>
      <Steps.Step color="info">Fly to moon</Steps.Step>
      <Steps.Step color="info">Shrink the moon</Steps.Step>
      <Steps.Step color="info">Grab the moon</Steps.Step>
      <Steps.Step value="?" color="error">
        Sit on toilet
      </Steps.Step>
    </Steps>;
}`,...(V=(q=S.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var W,j,z;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <div className="overflow-x-auto">
      <Steps {...args}>
        <Steps.Step>start</Steps.Step>
        <Steps.Step color="secondary">2</Steps.Step>
        <Steps.Step color="secondary">3</Steps.Step>
        <Steps.Step color="secondary">4</Steps.Step>
        <Steps.Step>5</Steps.Step>
        <Steps.Step color="accent">6</Steps.Step>
        <Steps.Step color="accent">7</Steps.Step>
        <Steps.Step>8</Steps.Step>
        <Steps.Step color="error">9</Steps.Step>
        <Steps.Step color="error">10</Steps.Step>
        <Steps.Step>11</Steps.Step>
        <Steps.Step>12</Steps.Step>
        <Steps.Step color="warning">13</Steps.Step>
        <Steps.Step color="warning">14</Steps.Step>
        <Steps.Step>15</Steps.Step>
        <Steps.Step color="neutral">16</Steps.Step>
        <Steps.Step color="neutral">17</Steps.Step>
        <Steps.Step color="neutral">18</Steps.Step>
        <Steps.Step color="neutral">19</Steps.Step>
        <Steps.Step color="neutral">20</Steps.Step>
        <Steps.Step color="neutral">21</Steps.Step>
        <Steps.Step color="neutral">22</Steps.Step>
        <Steps.Step color="neutral">23</Steps.Step>
        <Steps.Step color="neutral">end</Steps.Step>
      </Steps>
    </div>;
}`,...(z=(j=l.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const E=["Default","Responsive","WithDataContent","CustomColors","WithScrollableWrapper"];export{S as CustomColors,s as Default,n as Responsive,a as WithDataContent,l as WithScrollableWrapper,E as __namedExportsOrder,$ as default};
