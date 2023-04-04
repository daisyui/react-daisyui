import{t as T,a,j as n}from"./tw-merge-837124be.js";import{r as q}from"./index-f1f749bf.js";import{c as P}from"./clsx.m-1229b3e0.js";import{F as o}from"./index-ed795aa6.js";import"./_commonjsHelpers-042e6b4d.js";const c=q.forwardRef(({color:e,size:i,name:F,dataTheme:N,className:x,...w},L)=>{const D=T("radio",x,P({[`radio-${i}`]:i,[`radio-${e}`]:e}));return a("input",{...w,ref:L,type:"radio",name:F,"data-theme":N,className:D})});c.displayName="Radio";const r=c;try{c.displayName="Radio",c.__docgenInfo={description:"",displayName:"Radio",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const $={title:"Data Input/Radio",component:r},v=e=>n(o,{children:[a(r,{...e,name:"radio1"}),a(r,{...e,name:"radio1",defaultChecked:!0})]}),d=v.bind({});d.args={};const s=e=>n("div",{className:"flex flex-col items-center float-left gap-2",children:[a(r,{...e,defaultChecked:!0,color:"primary"}),a(r,{...e,defaultChecked:!0,color:"secondary"}),a(r,{...e,defaultChecked:!0,color:"accent"}),a(r,{...e,defaultChecked:!0,color:"success"}),a(r,{...e,defaultChecked:!0,color:"warning"}),a(r,{...e,defaultChecked:!0,color:"info"}),a(r,{...e,defaultChecked:!0,color:"error"})]});s.args={};const l=v.bind({});l.args={disabled:!0};const t=e=>n("div",{className:"bg-base-200 w-1/4 p-4 rounded-lg shadow",children:[a(o,{children:a(o.Label,{title:"Red Pill",children:a(r,{...e,name:"radio1",className:"checked:bg-red-500",defaultChecked:!0})})}),a(o,{children:a(o.Label,{title:"Blue Pill",children:a(r,{...e,name:"radio1",className:"checked:bg-blue-500",defaultChecked:!0})})})]});var u,m,p;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <Form>
      <Radio {...args} name="radio1" />
      <Radio {...args} name="radio1" defaultChecked />
    </Form>;
}`,...(p=(m=d.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,h,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => <div className="flex flex-col items-center float-left gap-2">
    <Radio {...args} defaultChecked color="primary" />
    <Radio {...args} defaultChecked color="secondary" />
    <Radio {...args} defaultChecked color="accent" />
    <Radio {...args} defaultChecked color="success" />
    <Radio {...args} defaultChecked color="warning" />
    <Radio {...args} defaultChecked color="info" />
    <Radio {...args} defaultChecked color="error" />
  </div>`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,R,b;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <Form>
      <Radio {...args} name="radio1" />
      <Radio {...args} name="radio1" defaultChecked />
    </Form>;
}`,...(b=(R=l.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var C,_,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
}`,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const A=["Default","Colors","Disabled","WithLabelsAndForm"];export{s as Colors,d as Default,l as Disabled,t as WithLabelsAndForm,A as __namedExportsOrder,$ as default};
//# sourceMappingURL=Radio.stories-d165d06a.js.map
