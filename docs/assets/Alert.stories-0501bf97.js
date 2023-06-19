import{j as e,a as i}from"./tw-merge-e2243cb0.js";import{A as t}from"./index-d3e42186.js";import{B as v}from"./index-6e65e89d.js";import"./index-ebeaab24.js";import"./clsx.m-1229b3e0.js";import"./index-3106c12b.js";const N={title:"Data Display/Alert",component:t,argTypes:{icon:{control:!1}}},o=r=>e(t,{...r,children:"Lorem ipsum dolor sit amet, consectetur adip!"});o.args={icon:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"#2196f3",className:"w-6 h-6 mx-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})};const n=r=>i("div",{className:"flex flex-col gap-y-2",children:[e(t,{...r,icon:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:"Lorem ipsum dolor sit amet, consectetur adip!"}),e(t,{...r,status:"info",icon:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:"Lorem ipsum dolor sit amet, consectetur adip!"}),e(t,{...r,status:"success",icon:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),children:"Lorem ipsum dolor sit amet, consectetur adip!"}),e(t,{...r,status:"warning",icon:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),children:"Lorem ipsum dolor sit amet, consectetur adip!"}),e(t,{...r,status:"error",icon:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})}),children:"Lorem ipsum dolor sit amet, consectetur adip!"})]}),s=({color:r="info",...g})=>i(t,{icon:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),color:r,...g,children:[i("div",{className:"w-full flex-row justify-between gap-2",children:[e("h3",{className:"text-lg font-bold",children:"This is a custom alert!"}),e("h4",{children:"Some information about the alert..."})]}),e(v,{children:"Dismiss"})]});s.args={status:"info"};var a,c,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <Alert {...args}>Lorem ipsum dolor sit amet, consectetur adip!</Alert>;
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,h,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <div className="flex flex-col gap-y-2">
      <Alert {...args} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>}>
        Lorem ipsum dolor sit amet, consectetur adip!
      </Alert>
      <Alert {...args} status="info" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>}>
        Lorem ipsum dolor sit amet, consectetur adip!
      </Alert>
      <Alert {...args} status="success" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
          </svg>}>
        Lorem ipsum dolor sit amet, consectetur adip!
      </Alert>
      <Alert {...args} status="warning" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>}>
        Lorem ipsum dolor sit amet, consectetur adip!
      </Alert>
      <Alert {...args} status="error" icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
          </svg>}>
        Lorem ipsum dolor sit amet, consectetur adip!
      </Alert>
    </div>;
}`,...(d=(h=n.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var u,p,w;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`({
  color = 'info',
  ...args
}) => {
  return <Alert icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>} color={color} {...args}>
      <div className="w-full flex-row justify-between gap-2">
        <h3 className="text-lg font-bold">This is a custom alert!</h3>
        <h4>Some information about the alert...</h4>
      </div>
      <Button>Dismiss</Button>
    </Alert>;
}`,...(w=(p=s.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};const j=["Default","Colors","CustomContents"];export{n as Colors,s as CustomContents,o as Default,j as __namedExportsOrder,N as default};
//# sourceMappingURL=Alert.stories-0501bf97.js.map
