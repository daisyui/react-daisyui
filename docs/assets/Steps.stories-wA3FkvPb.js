import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as z}from"./iframe-DDnXVYpC.js";import{c as D}from"./clsx-B-dksMZM.js";import{t as T}from"./bundle-mjs-yGZq-iow.js";const m=z.forwardRef(({children:r,value:S,color:p,dataTheme:c,className:i,...u},d)=>{const h=T("step",i,D({"step-primary":p==="primary","step-secondary":p==="secondary","step-accent":p==="accent","step-info":p==="info","step-success":p==="success","step-warning":p==="warning","step-error":p==="error"}));return e.jsx("li",{"aria-label":"Step",...u,"data-theme":c,"data-content":S,className:h,ref:d,children:r})});try{m.displayName="Step",m.__docgenInfo={description:"",displayName:"Step",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"ghost"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}}}}}catch{}const x=z.forwardRef(({children:r,dataTheme:S,className:p,vertical:c,horizontal:i,...u},d)=>{const h=T("steps",p,D({"steps-vertical":c,"steps-horizontal":i}));return e.jsx("ul",{"aria-label":"Steps",role:"group",...u,"data-theme":S,className:h,ref:d,children:r})}),t=Object.assign(x,{Step:m});try{x.displayName="Steps",x.__docgenInfo={description:"",displayName:"Steps",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Navigation/Steps",component:t},o=r=>e.jsxs(t,{...r,children:[e.jsx(t.Step,{color:"primary",children:"Register"}),e.jsx(t.Step,{color:"primary",children:"Choose plan"}),e.jsx(t.Step,{children:"Purchase"}),e.jsx(t.Step,{children:"Receive Product"})]}),s=r=>e.jsxs(t,{...r,children:[e.jsx(t.Step,{color:"primary",children:"Register"}),e.jsx(t.Step,{color:"primary",children:"Choose plan"}),e.jsx(t.Step,{children:"Purchase"}),e.jsx(t.Step,{children:"Receive Product"})]});s.args={className:"lg:steps-horizontal",vertical:!0};const n=r=>e.jsxs(t,{...r,children:[e.jsx(t.Step,{value:"?",color:"neutral",children:"Step 1"}),e.jsx(t.Step,{value:"!",color:"neutral",children:"Step 2"}),e.jsx(t.Step,{value:"✓",color:"neutral",children:"Step 3"}),e.jsx(t.Step,{value:"✕",color:"neutral",children:"Step 4"}),e.jsx(t.Step,{value:"!",color:"neutral",children:"Step 5"}),e.jsx(t.Step,{value:"",color:"neutral",children:"Step 6"}),e.jsx(t.Step,{value:"●",color:"neutral",children:"Step 7"})]}),a=r=>e.jsxs(t,{...r,children:[e.jsx(t.Step,{color:"info",children:"Fly to moon"}),e.jsx(t.Step,{color:"info",children:"Shrink the moon"}),e.jsx(t.Step,{color:"info",children:"Grab the moon"}),e.jsx(t.Step,{value:"?",color:"error",children:"Sit on toilet"})]}),l=r=>e.jsx("div",{className:"overflow-x-auto",children:e.jsxs(t,{...r,children:[e.jsx(t.Step,{children:"start"}),e.jsx(t.Step,{color:"secondary",children:"2"}),e.jsx(t.Step,{color:"secondary",children:"3"}),e.jsx(t.Step,{color:"secondary",children:"4"}),e.jsx(t.Step,{children:"5"}),e.jsx(t.Step,{color:"accent",children:"6"}),e.jsx(t.Step,{color:"accent",children:"7"}),e.jsx(t.Step,{children:"8"}),e.jsx(t.Step,{color:"error",children:"9"}),e.jsx(t.Step,{color:"error",children:"10"}),e.jsx(t.Step,{children:"11"}),e.jsx(t.Step,{children:"12"}),e.jsx(t.Step,{color:"warning",children:"13"}),e.jsx(t.Step,{color:"warning",children:"14"}),e.jsx(t.Step,{children:"15"}),e.jsx(t.Step,{color:"neutral",children:"16"}),e.jsx(t.Step,{color:"neutral",children:"17"}),e.jsx(t.Step,{color:"neutral",children:"18"}),e.jsx(t.Step,{color:"neutral",children:"19"}),e.jsx(t.Step,{color:"neutral",children:"20"}),e.jsx(t.Step,{color:"neutral",children:"21"}),e.jsx(t.Step,{color:"neutral",children:"22"}),e.jsx(t.Step,{color:"neutral",children:"23"}),e.jsx(t.Step,{color:"neutral",children:"end"})]})});var j,v,g;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <Steps {...args}>
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>;
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,y,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Steps {...args}>
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>;
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var R,w,C;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
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
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,b,P;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Steps {...args}>
      <Steps.Step color="info">Fly to moon</Steps.Step>
      <Steps.Step color="info">Shrink the moon</Steps.Step>
      <Steps.Step color="info">Grab the moon</Steps.Step>
      <Steps.Step value="?" color="error">
        Sit on toilet
      </Steps.Step>
    </Steps>;
}`,...(P=(b=a.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var q,V,W;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(W=(V=l.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const O=["Default","Responsive","WithDataContent","CustomColors","WithScrollableWrapper"];export{a as CustomColors,o as Default,s as Responsive,n as WithDataContent,l as WithScrollableWrapper,O as __namedExportsOrder,I as default};
