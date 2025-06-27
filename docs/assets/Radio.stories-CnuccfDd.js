import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as w}from"./iframe-DDnXVYpC.js";import{c as L}from"./clsx-B-dksMZM.js";import{t as D}from"./bundle-mjs-yGZq-iow.js";import{F as t}from"./index-BNCmuIF-.js";const r=w.forwardRef(({color:e,size:d,name:y,dataTheme:j,className:_,...v},N)=>{const F=D("radio",_,L({"radio-xl":d==="xl","radio-lg":d==="lg","radio-md":d==="md","radio-sm":d==="sm","radio-xs":d==="xs","radio-primary":e==="primary","radio-secondary":e==="secondary","radio-accent":e==="accent","radio-info":e==="info","radio-success":e==="success","radio-warning":e==="warning","radio-error":e==="error"}));return a.jsx("input",{...v,ref:N,type:"radio",name:y,"data-theme":j,className:F})});r.displayName="Radio";try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const E={title:"Data Input/Radio",component:r},C=e=>a.jsxs(a.Fragment,{children:[a.jsx(r,{...e,name:"radio1",defaultChecked:!0}),a.jsx(r,{...e,name:"radio1"})]}),s=C.bind({});s.args={};const o=e=>a.jsxs("div",{className:"flex flex-col items-center float-left gap-2",children:[a.jsx(r,{...e,defaultChecked:!0,color:"primary"}),a.jsx(r,{...e,defaultChecked:!0,color:"secondary"}),a.jsx(r,{...e,defaultChecked:!0,color:"accent"}),a.jsx(r,{...e,defaultChecked:!0,color:"success"}),a.jsx(r,{...e,defaultChecked:!0,color:"warning"}),a.jsx(r,{...e,defaultChecked:!0,color:"info"}),a.jsx(r,{...e,defaultChecked:!0,color:"error"})]});o.args={};const l=C.bind({});l.args={disabled:!0};const c=e=>a.jsxs("div",{className:"bg-base-200 w-1/4 p-4 rounded-lg shadow",children:[a.jsx(t,{children:a.jsx(t.Label,{title:"Red Pill",children:a.jsx(r,{...e,name:"radio1",className:"checked:bg-red-500",defaultChecked:!0})})}),a.jsx(t,{children:a.jsx(t.Label,{title:"Blue Pill",children:a.jsx(r,{...e,name:"radio1",className:"checked:bg-blue-500",defaultChecked:!0})})})]});var n,i,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return <>
      <Radio {...args} name="radio1" defaultChecked />
      <Radio {...args} name="radio1" />
    </>;
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,p,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => <div className="flex flex-col items-center float-left gap-2">
    <Radio {...args} defaultChecked color="primary" />
    <Radio {...args} defaultChecked color="secondary" />
    <Radio {...args} defaultChecked color="accent" />
    <Radio {...args} defaultChecked color="success" />
    <Radio {...args} defaultChecked color="warning" />
    <Radio {...args} defaultChecked color="info" />
    <Radio {...args} defaultChecked color="error" />
  </div>`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,g,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <>
      <Radio {...args} name="radio1" defaultChecked />
      <Radio {...args} name="radio1" />
    </>;
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var k,R,b;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <div className="bg-base-200 w-1/4 p-4 rounded-lg shadow">
      <Form>
        <Form.Label title="Red Pill">
          <Radio {...args} name="radio1" className="checked:bg-red-500" defaultChecked />
        </Form.Label>
      </Form>
      <Form>
        <Form.Label title="Blue Pill">
          <Radio {...args} name="radio1" className="checked:bg-blue-500" defaultChecked />
        </Form.Label>
      </Form>
    </div>;
}`,...(b=(R=c.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};const I=["Default","Colors","Disabled","WithLabelsAndForm"];export{o as Colors,s as Default,l as Disabled,c as WithLabelsAndForm,I as __namedExportsOrder,E as default};
