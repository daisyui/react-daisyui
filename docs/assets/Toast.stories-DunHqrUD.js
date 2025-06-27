import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as S,e as C}from"./iframe-DDnXVYpC.js";import{t as D}from"./bundle-mjs-yGZq-iow.js";import{A as u}from"./index-Z5rb5F7J.js";import{B as f}from"./Button-GtH5nISf.js";import"./clsx-B-dksMZM.js";import"./index-Dl-l57lR.js";const q={start:"toast-start",center:"toast-center",end:"toast-end"},B={top:"toast-top",middle:"toast-middle",bottom:"toast-bottom"},r=S.forwardRef(({horizontal:e="end",vertical:a="bottom",className:s,children:m,...h},o)=>t.jsx("div",{...h,className:D("toast",q[e],B[a],s),ref:o,children:m}));r.displayName="Toast";try{r.displayName="Toast",r.__docgenInfo={description:"",displayName:"Toast",props:{horizontal:{defaultValue:{value:"end"},description:"",name:"horizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},vertical:{defaultValue:{value:"bottom"},description:"",name:"vertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"middle"'}]}},dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="Toast",r.__docgenInfo={description:"",displayName:"Toast",props:{horizontal:{defaultValue:{value:"end"},description:"",name:"horizontal",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},vertical:{defaultValue:{value:"bottom"},description:"",name:"vertical",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"middle"'}]}},dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const X={title:"Feedback/Toast",component:r},p={start:"left",end:"right",center:"center"},n=({vertical:e="bottom",horizontal:a="end",...s})=>t.jsxs(t.Fragment,{children:[t.jsxs("span",{children:["Look at the ",e," ",p[a]," of this story to see the toast."]}),t.jsx("div",{className:"w-full h-full",children:t.jsx(r,{...s,vertical:e,horizontal:a,children:"Default toast"})})]}),i=({vertical:e="bottom",horizontal:a="end",...s})=>t.jsxs(t.Fragment,{children:[t.jsxs("span",{children:["Look at the ",e," ",p[a]," of this story to see the toast."]}),t.jsx(r,{...s,vertical:e,horizontal:a,children:t.jsx(u,{status:"info",children:"New message arrived."})})]}),d=({vertical:e="bottom",horizontal:a="end",...s})=>t.jsxs(t.Fragment,{children:[t.jsxs("span",{children:["Look at the ",e," ",p[a]," of this story to see the toast."]}),t.jsxs(r,{...s,vertical:e,horizontal:a,children:[t.jsx(u,{status:"info",children:"New message arrived."}),t.jsx(u,{status:"success",children:"Message sent successfully."})]})]}),v=["info","success","warning","error"],c=e=>{const[a,s]=C.useState([{text:"This is a custom alert!",status:"info"}]),m=()=>{s(o=>[...o,{text:"New message arrived.",status:v[Math.floor(Math.random()*v.length)]}])},h=o=>{s(l=>l.filter((L,k)=>k!==o))};return t.jsxs("div",{children:[t.jsx(f,{onClick:m,children:"Add Toast"}),t.jsx(r,{...e,children:a.map((o,l)=>t.jsxs(u,{status:o.status,children:[t.jsx("div",{className:"w-full flex-row justify-between gap-2",children:t.jsx("h3",{children:o.text})}),t.jsx(f,{color:"ghost",onClick:()=>h(l),children:"X"})]},l))})]})};var g,x,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var y,j,A;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(A=(j=i.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var _,z,b;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`({
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
}`,...(b=(z=d.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var w,N,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
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
}`,...(M=(N=c.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};const G=["Default","WithAlert","WithMultipleAlerts","DynamicAlerts"];export{n as Default,c as DynamicAlerts,i as WithAlert,d as WithMultipleAlerts,G as __namedExportsOrder,X as default};
