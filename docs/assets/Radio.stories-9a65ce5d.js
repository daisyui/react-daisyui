import{t as T,j as a,a as i,F as q}from"./tw-merge-4486aaf0.js";import{r as P}from"./index-f46741a2.js";import{c as S}from"./clsx.m-1229b3e0.js";import{F as t}from"./index-1d303440.js";const n=P.forwardRef(({color:e,size:d,name:x,dataTheme:F,className:N,...w},L)=>{const D=T("radio",N,S({"radio-xl":d==="xl","radio-lg":d==="lg","radio-md":d==="md","radio-sm":d==="sm","radio-xs":d==="xs","radio-primary":e==="primary","radio-secondary":e==="secondary","radio-accent":e==="accent","radio-info":e==="info","radio-success":e==="success","radio-warning":e==="warning","radio-error":e==="error"}));return a("input",{...w,ref:L,type:"radio",name:x,"data-theme":F,className:D})});n.displayName="Radio";const r=n;try{n.displayName="Radio",n.__docgenInfo={description:"",displayName:"Radio",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const B={title:"Data Input/Radio",component:r},v=e=>i(q,{children:[a(r,{...e,name:"radio1",defaultChecked:!0}),a(r,{...e,name:"radio1"})]}),o=v.bind({});o.args={};const s=e=>i("div",{className:"flex flex-col items-center float-left gap-2",children:[a(r,{...e,defaultChecked:!0,color:"primary"}),a(r,{...e,defaultChecked:!0,color:"secondary"}),a(r,{...e,defaultChecked:!0,color:"accent"}),a(r,{...e,defaultChecked:!0,color:"success"}),a(r,{...e,defaultChecked:!0,color:"warning"}),a(r,{...e,defaultChecked:!0,color:"info"}),a(r,{...e,defaultChecked:!0,color:"error"})]});s.args={};const l=v.bind({});l.args={disabled:!0};const c=e=>i("div",{className:"bg-base-200 w-1/4 p-4 rounded-lg shadow",children:[a(t,{children:a(t.Label,{title:"Red Pill",children:a(r,{...e,name:"radio1",className:"checked:bg-red-500",defaultChecked:!0})})}),a(t,{children:a(t.Label,{title:"Blue Pill",children:a(r,{...e,name:"radio1",className:"checked:bg-blue-500",defaultChecked:!0})})})]});var u,m,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <>
      <Radio {...args} name="radio1" defaultChecked />
      <Radio {...args} name="radio1" />
    </>;
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,h,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => <div className="flex flex-col items-center float-left gap-2">
    <Radio {...args} defaultChecked color="primary" />
    <Radio {...args} defaultChecked color="secondary" />
    <Radio {...args} defaultChecked color="accent" />
    <Radio {...args} defaultChecked color="success" />
    <Radio {...args} defaultChecked color="warning" />
    <Radio {...args} defaultChecked color="info" />
    <Radio {...args} defaultChecked color="error" />
  </div>`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,R,b;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <>
      <Radio {...args} name="radio1" defaultChecked />
      <Radio {...args} name="radio1" />
    </>;
}`,...(b=(R=l.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var C,y,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
}`,...(_=(y=c.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const E=["Default","Colors","Disabled","WithLabelsAndForm"];export{s as Colors,o as Default,l as Disabled,c as WithLabelsAndForm,E as __namedExportsOrder,B as default};
