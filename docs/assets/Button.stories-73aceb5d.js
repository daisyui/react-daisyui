import{j as t,a as o}from"./tw-merge-e8a1af18.js";import{B as r}from"./index-e215d0b1.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";const E={title:"Actions/Button",component:r,argTypes:{startIcon:{control:!1},endIcon:{control:!1}}},y=n=>o(r,{...n}),e=y.bind({});e.args={children:"Button"};const a=n=>t("div",{children:[t("div",{children:[o(r,{...n,children:"Default"}),o(r,{...n,color:"primary",children:"Primary"}),o(r,{...n,color:"secondary",children:"Secondary"}),o(r,{...n,color:"accent",children:"Accent"}),o(r,{...n,color:"ghost",children:"Ghost"})]}),t("div",{children:[o(r,{...n,color:"success",children:"Success"}),o(r,{...n,color:"info",children:"Info"}),o(r,{...n,color:"warning",children:"Warning"}),o(r,{...n,color:"error",children:"Error"})]})]});a.args={className:"m-1"};const s=n=>t("div",{className:"flex gap-x-2",children:[o(r,{...n,children:"Default"}),o(r,{...n,variant:"outline",children:"Outline"}),o(r,{...n,variant:"link",children:"Link"})]}),c=n=>{const l=o("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:o("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})});return t("div",{className:"flex gap-x-2",children:[o(r,{...n,startIcon:l,children:"Icon at Start"}),o(r,{...n,endIcon:l,children:"Icon at End"})]})},i=n=>t("div",{className:"flex gap-x-2",children:[t(r,{...n,onClick:()=>alert("See, I have an onClick event and no href."),children:["I'm a ","<button>"]}),t(r,{href:"https://google.com",children:["I'm an ","<a>"]})]});var u,d,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <Button {...args} />;
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,h,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <div>
      <div>
        <Button {...args}>Default</Button>
        <Button {...args} color="primary">
          Primary
        </Button>
        <Button {...args} color="secondary">
          Secondary
        </Button>
        <Button {...args} color="accent">
          Accent
        </Button>
        <Button {...args} color="ghost">
          Ghost
        </Button>
      </div>
      <div>
        <Button {...args} color="success">
          Success
        </Button>
        <Button {...args} color="info">
          Info
        </Button>
        <Button {...args} color="warning">
          Warning
        </Button>
        <Button {...args} color="error">
          Error
        </Button>
      </div>
    </div>;
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var B,v,f;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <div className="flex gap-x-2">
      <Button {...args}>Default</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>;
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var I,x,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  const favoriteIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>;
  return <div className="flex gap-x-2">
      <Button {...args} startIcon={favoriteIcon}>
        Icon at Start
      </Button>
      <Button {...args} endIcon={favoriteIcon}>
        Icon at End
      </Button>
    </div>;
}`,...(k=(x=c.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var w,S,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <div className="flex gap-x-2">
      <Button {...args} onClick={() => alert('See, I have an onClick event and no href.')}>
        I'm a {\`<button>\`}
      </Button>
      <Button href="https://google.com">I'm an {\`<a>\`}</Button>
    </div>;
}`,...(L=(S=i.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const W=["Default","Colors","Variants","Icons","AsHref"];export{i as AsHref,a as Colors,e as Default,c as Icons,s as Variants,W as __namedExportsOrder,E as default};
//# sourceMappingURL=Button.stories-73aceb5d.js.map
