import{j as a,t as q,a as o,F as v}from"./tw-merge-0a3648bd.js";import{r as B,R as L}from"./index-1b03fe98.js";import{A as m}from"./index-fa7a260c.js";import{B as T}from"./Button-0a8fe609.js";import"./clsx.m-1229b3e0.js";import"./index-a55c3a76.js";const V={start:"toast-start",center:"toast-center",end:"toast-end"},j={top:"toast-top",middle:"toast-middle",bottom:"toast-bottom"},h=B.forwardRef(({horizontal:t="end",vertical:e="bottom",className:s,children:p,...f},r)=>a("div",{...f,className:q("toast",V[t],j[e],s),ref:r,children:p}));h.displayName="Toast";const n=h;try{h.displayName="Toast",h.__docgenInfo={description:"",displayName:"Toast",props:{horizontal:{defaultValue:{value:"end"},description:"",name:"horizontal",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'}]}},vertical:{defaultValue:{value:"bottom"},description:"",name:"vertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"middle"'}]}},dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}try{n.displayName="Toast",n.__docgenInfo={description:"",displayName:"Toast",props:{horizontal:{defaultValue:{value:"end"},description:"",name:"horizontal",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'}]}},vertical:{defaultValue:{value:"bottom"},description:"",name:"vertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"middle"'}]}},dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Feedback/Toast",component:n},g={start:"left",end:"right",center:"center"},i=({vertical:t="bottom",horizontal:e="end",...s})=>o(v,{children:[o("span",{children:["Look at the ",t," ",g[e]," of this story to see the toast."]}),a("div",{className:"w-full h-full",children:a(n,{...s,vertical:t,horizontal:e,children:"Default toast"})})]}),d=({vertical:t="bottom",horizontal:e="end",...s})=>o(v,{children:[o("span",{children:["Look at the ",t," ",g[e]," of this story to see the toast."]}),a(n,{...s,vertical:t,horizontal:e,children:a(m,{status:"info",children:"New message arrived."})})]}),c=({vertical:t="bottom",horizontal:e="end",...s})=>o(v,{children:[o("span",{children:["Look at the ",t," ",g[e]," of this story to see the toast."]}),o(n,{...s,vertical:t,horizontal:e,children:[a(m,{status:"info",children:"New message arrived."}),a(m,{status:"success",children:"Message sent successfully."})]})]}),y=["info","success","warning","error"],u=t=>{const[e,s]=L.useState([{text:"This is a custom alert!",status:"info"}]),p=()=>{s(r=>[...r,{text:"New message arrived.",status:y[Math.floor(Math.random()*y.length)]}])},f=r=>{s(l=>l.filter((W,R)=>R!==r))};return o("div",{children:[a(T,{onClick:p,children:"Add Toast"}),a(n,{...t,children:e.map((r,l)=>o(m,{status:r.status,children:[a("div",{className:"w-full flex-row justify-between gap-2",children:a("h3",{children:r.text})}),a(T,{color:"ghost",onClick:()=>f(l),children:"X"})]},l))})]})};var A,_,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}) => {
  return <>
      <span>
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to
        see the toast.
      </span>
      <div className="w-full h-full">
        <Toast {...args} vertical={vertical} horizontal={horizontal}>
          Default toast
        </Toast>
      </div>
    </>;
}`,...(z=(_=i.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var b,w,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}) => {
  return <>
      <span>
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to
        see the toast.
      </span>
      <Toast {...args} vertical={vertical} horizontal={horizontal}>
        <Alert status="info">New message arrived.</Alert>
      </Toast>
    </>;
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var N,M,k;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`({
  vertical = 'bottom',
  horizontal = 'end',
  ...args
}) => {
  return <>
      <span>
        Look at the {vertical} {horizontalMapping[horizontal]} of this story to
        see the toast.
      </span>
      <Toast {...args} vertical={vertical} horizontal={horizontal}>
        <Alert status="info">New message arrived.</Alert>
        <Alert status="success">Message sent successfully.</Alert>
      </Toast>
    </>;
}`,...(k=(M=c.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var S,C,D;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [alerts, setAlerts] = React.useState<DynamicToastChild[]>([{
    text: 'This is a custom alert!',
    status: 'info'
  }]);
  const handleAddToast = () => {
    setAlerts(alerts => [...alerts, {
      text: 'New message arrived.',
      status: dynamicToastChildStatuses[Math.floor(Math.random() * dynamicToastChildStatuses.length)]
    }]);
  };
  const handleRemoveToast = (index: number) => {
    setAlerts(alerts => alerts.filter((_, i) => i !== index));
  };
  return <div>
      <Button onClick={handleAddToast}>Add Toast</Button>
      <Toast {...args}>
        {alerts.map((alert, index) => <Alert key={index} status={alert.status}>
            <div className="w-full flex-row justify-between gap-2">
              <h3>{alert.text}</h3>
            </div>
            <Button color="ghost" onClick={() => handleRemoveToast(index)}>
              X
            </Button>
          </Alert>)}
      </Toast>
    </div>;
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const H=["Default","WithAlert","WithMultipleAlerts","DynamicAlerts"];export{i as Default,u as DynamicAlerts,d as WithAlert,c as WithMultipleAlerts,H as __namedExportsOrder,G as default};
