import{j as r,a as h}from"./tw-merge-e2243cb0.js";import{A as s}from"./index-2c9e097d.js";import{B as d}from"./Button-3d301c6a.js";import"./index-ebeaab24.js";import"./clsx.m-1229b3e0.js";import"./index-3106c12b.js";const O={title:"Data Display/Alert",component:s,argTypes:{icon:{control:!1}}},n=e=>r(s,{...e,icon:r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"stroke-info shrink-0 w-6 h-6",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:r("span",{children:"12 unread messages. Tap to see."})});n.args={};const o=e=>r(s,{...e,icon:r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"stroke-current shrink-0 w-6 h-6",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:r("span",{children:"New software update available."})});o.args={status:"info"};const a=e=>r(s,{...e,icon:r("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:r("span",{children:"Your purchase has been confirmed!"})});a.args={status:"success"};const t=e=>r(s,{...e,icon:r("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),children:r("span",{children:"Warning: Invalid email address!"})});t.args={status:"warning"};const i=e=>r(s,{...e,icon:r("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:r("span",{children:"Error! Task failed successfully."})});i.args={status:"error"};const c=e=>h(s,{...e,icon:r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"stroke-info shrink-0 w-6 h-6",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:[r("span",{children:"we use cookies for no reason."}),h("div",{className:"space-x-1",children:[r(d,{size:"sm",children:"Deny"}),r(d,{size:"sm",color:"primary",children:"Accept"})]})]});c.args={className:"shadow-lg"};const l=e=>h(s,{...e,icon:r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"stroke-info shrink-0 w-6 h-6",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:[h("div",{children:[r("h3",{className:"font-bold",children:"New message!"}),r("div",{className:"text-xs",children:"You have 1 unread message"})]}),r(d,{size:"sm",children:"See"})]});l.args={className:"shadow-lg"};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <Alert {...args} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>}>
      <span>12 unread messages. Tap to see.</span>
    </Alert>;
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var w,g,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <Alert {...args} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>}>
      <span>New software update available.</span>
    </Alert>;
}`,...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var v,f,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <Alert {...args} icon={<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>}>
      <span>Your purchase has been confirmed!</span>
    </Alert>;
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var L,N,B;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return <Alert {...args} icon={<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>}>
      <span>Warning: Invalid email address!</span>
    </Alert>;
}`,...(B=(N=t.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var A,M,W;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <Alert {...args} icon={<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>}>
      <span>Error! Task failed successfully.</span>
    </Alert>;
}`,...(W=(M=i.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var z,j,S;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <Alert {...args} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>}>
      <span>we use cookies for no reason.</span>
      <div className="space-x-1">
        <Button size="sm">Deny</Button>
        <Button size="sm" color="primary">
          Accept
        </Button>
      </div>
    </Alert>;
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var y,C,D;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Alert {...args} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>}>
      <div>
        <h3 className="font-bold">New message!</h3>
        <div className="text-xs">You have 1 unread message</div>
      </div>
      <Button size="sm">See</Button>
    </Alert>;
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const q=["Default","InfoColor","SuccessColor","WarningColor","ErrorColor","WithButtons","WithTitleAndDescription"];export{n as Default,i as ErrorColor,o as InfoColor,a as SuccessColor,t as WarningColor,c as WithButtons,l as WithTitleAndDescription,q as __namedExportsOrder,O as default};
//# sourceMappingURL=Alert.stories-b1d7c091.js.map
