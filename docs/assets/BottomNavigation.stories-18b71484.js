import{t as A,j as e,a as t,F as B}from"./tw-merge-e2243cb0.js";import{c as G}from"./clsx.m-1229b3e0.js";import{r as J}from"./index-ebeaab24.js";const b=J.forwardRef(({children:a,className:i,...p},x)=>{const w=A("btm-nav-label",i);return e("span",{...p,className:w,ref:x,children:a})}),Q=b;try{b.displayName="BottomNavigationLabel",b.__docgenInfo={description:"",displayName:"BottomNavigationLabel",props:{}}}catch{}const u=J.forwardRef(({size:a,dataTheme:i,className:p,children:x,...w},K)=>{const P=A("btm-nav",G({"btm-nav-lg":a==="lg","btm-nav-md":a==="md","btm-nav-sm":a==="sm","btm-nav-xs":a==="xs"}),p);return e("div",{...w,role:"navigation","data-theme":i,className:P,ref:K,children:x})});u.displayName="BottomNavigation";const s=Object.assign(u,{Label:Q});try{u.displayName="BottomNavigation",u.__docgenInfo={description:"",displayName:"BottomNavigation",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const{Label:c}=s,Z={title:"Navigation/BottomNavigation",component:s,parameters:{controls:{expanded:!0}}},n=({className:a,children:i})=>t("button",{className:a,children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),i]}),o=({className:a,children:i})=>t("button",{className:G("active",a),children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),i]}),r=({className:a,children:i})=>t("button",{className:a,children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),i]}),f=({children:a,...i})=>e(s,{...i,children:a}),l=f.bind({});l.args={children:t(B,{children:[e(n,{}),e(o,{}),e(r,{})]})};const v=a=>t("div",{className:"preview bg-base-200 w-full",children:[t(s,{...a,className:"relative",children:[e(n,{className:"text-primary"}),e(o,{className:"text-primary"}),e(r,{className:"text-primary"})]}),t(s,{...a,className:"relative",children:[e(n,{className:"text-secondary"}),e(o,{className:"text-secondary"}),e(r,{className:"text-secondary"})]}),t(s,{...a,className:"relative",children:[e(n,{className:"text-accent"}),e(o,{className:"text-accent"}),e(r,{className:"text-accent"})]})]}),N=a=>t("div",{className:"preview bg-base-200 w-full",children:[t(s,{...a,className:"relative",children:[e(n,{className:"text-info"}),e(o,{className:"text-info"}),e(r,{className:"text-info"})]}),t(s,{...a,className:"relative",children:[e(n,{className:"text-success"}),e(o,{className:"text-success"}),e(r,{className:"text-success"})]}),t(s,{...a,className:"relative",children:[e(n,{className:"text-warning"}),e(o,{className:"text-warning"}),e(r,{className:"text-warning"})]}),t(s,{...a,className:"relative",children:[e(n,{className:"text-error"}),e(o,{className:"text-error"}),e(r,{className:"text-error"})]})]}),m=f.bind({});m.args={children:t(B,{children:[e(n,{children:e(c,{children:"Home"})}),e(o,{children:e(c,{children:"Warnings"})}),e(r,{children:e(c,{children:"Statics"})})]})};const d=f.bind({});d.args={children:t(B,{children:[e(n,{className:"bg-pink-200 text-pink-600",children:e(c,{children:"Home"})}),e(o,{className:"bg-blue-200 text-blue-600",children:e(c,{children:"Warnings"})}),e(r,{className:"bg-teal-200 text-teal-600",children:e(c,{children:"Statics"})})]})};const g=a=>t("div",{className:"preview bg-base-200 w-full",children:[t(s,{...a,size:"xs",className:"relative",children:[e(n,{}),e(o,{}),e(r,{})]}),t(s,{...a,size:"sm",className:"relative",children:[e(n,{}),e(o,{}),e(r,{})]}),t(s,{...a,size:"md",className:"relative",children:[e(n,{}),e(o,{}),e(r,{})]}),t(s,{...a,size:"lg",className:"relative",children:[e(n,{}),e(o,{}),e(r,{})]})]}),h=a=>t("div",{className:"preview bg-base-200 w-full",children:[t(s,{...a,className:"relative",children:[e(n,{}),e("button",{disabled:!0,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e(r,{})]}),t(s,{...a,className:"relative",children:[e(n,{}),e("button",{className:"disabled",role:"button","aria-describedby":"true",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e(r,{})]})]});var k,W,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`({
  children,
  ...rest
}) => <BottomNavigation {...rest}>{children}</BottomNavigation>`,...(S=(W=l.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var y,L,_;v.parameters={...v.parameters,docs:{...(y=v.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <div className="preview bg-base-200 w-full">
      <BottomNavigation {...args} className="relative">
        <Home className="text-primary" />
        <Warnings className="text-primary" />
        <Statics className="text-primary" />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home className="text-secondary" />
        <Warnings className="text-secondary" />
        <Statics className="text-secondary" />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home className="text-accent" />
        <Warnings className="text-accent" />
        <Statics className="text-accent" />
      </BottomNavigation>
    </div>;
}`,...(_=(L=v.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var H,z,C;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return <div className="preview bg-base-200 w-full">
      <BottomNavigation {...args} className="relative">
        <Home className="text-info" />
        <Warnings className="text-info" />
        <Statics className="text-info" />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home className="text-success" />
        <Warnings className="text-success" />
        <Statics className="text-success" />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home className="text-warning" />
        <Warnings className="text-warning" />
        <Statics className="text-warning" />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home className="text-error" />
        <Warnings className="text-error" />
        <Statics className="text-error" />
      </BottomNavigation>
    </div>;
}`,...(C=(z=N.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var M,j,T;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`({
  children,
  ...rest
}) => <BottomNavigation {...rest}>{children}</BottomNavigation>`,...(T=(j=m.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var D,V,q;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`({
  children,
  ...rest
}) => <BottomNavigation {...rest}>{children}</BottomNavigation>`,...(q=(V=d.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,F,I;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <div className="preview bg-base-200 w-full">
      <BottomNavigation {...args} size="xs" className="relative">
        <Home />
        <Warnings />
        <Statics />
      </BottomNavigation>
      <BottomNavigation {...args} size="sm" className="relative">
        <Home />
        <Warnings />
        <Statics />
      </BottomNavigation>
      <BottomNavigation {...args} size="md" className="relative">
        <Home />
        <Warnings />
        <Statics />
      </BottomNavigation>
      <BottomNavigation {...args} size="lg" className="relative">
        <Home />
        <Warnings />
        <Statics />
      </BottomNavigation>
    </div>;
}`,...(I=(F=g.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var O,R,$;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <div className="preview bg-base-200 w-full">
      <BottomNavigation {...args} className="relative">
        <Home />
        <button disabled>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <Statics />
      </BottomNavigation>
      <BottomNavigation {...args} className="relative">
        <Home />
        <button className="disabled" role="button" aria-describedby="true">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <Statics />
      </BottomNavigation>
    </div>;
}`,...($=(R=h.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const ee=["Default","BottomNavigationWithBrandColors","BottomNavigationWithStateColors","WithTitle","WithCustomColor","Sizes","DisabledButtons"];export{v as BottomNavigationWithBrandColors,N as BottomNavigationWithStateColors,l as Default,h as DisabledButtons,g as Sizes,d as WithCustomColor,m as WithTitle,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=BottomNavigation.stories-18b71484.js.map
