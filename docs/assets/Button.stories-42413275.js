import{a as t,j as r}from"./tw-merge-e2243cb0.js";import{B as o}from"./index-6e65e89d.js";import"./index-ebeaab24.js";import"./clsx.m-1229b3e0.js";import"./index-3106c12b.js";const O={title:"Actions/Button",component:o,argTypes:{startIcon:{control:!1},endIcon:{control:!1}}},b=n=>r(o,{...n}),e=b.bind({});e.args={children:"Button"};const a=n=>t("div",{children:[t("div",{children:[r(o,{...n,children:"Default"}),r(o,{...n,color:"neutral",children:"Neutral"}),r(o,{...n,color:"primary",children:"Primary"}),r(o,{...n,color:"secondary",children:"Secondary"}),r(o,{...n,color:"accent",children:"Accent"}),r(o,{...n,color:"ghost",children:"Ghost"})]}),t("div",{children:[r(o,{...n,color:"success",children:"Success"}),r(o,{...n,color:"info",children:"Info"}),r(o,{...n,color:"warning",children:"Warning"}),r(o,{...n,color:"error",children:"Error"})]})]});a.args={className:"m-1"};const c=n=>t("div",{className:"flex gap-x-2",children:[r(o,{...n,children:"Default"}),r(o,{...n,variant:"outline",children:"Outline"}),r(o,{...n,variant:"link",children:"Link"})]}),l=n=>{const u=r("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})});return t("div",{className:"flex gap-x-2",children:[r(o,{...n,startIcon:u,children:"Icon at Start"}),r(o,{...n,endIcon:u,children:"Icon at End"})]})},i=n=>t("div",{className:"flex gap-x-2",children:[t(o,{...n,onClick:()=>alert("See, I have an onClick event and no href."),children:["I'm a ","<button>"]}),t(o,{href:"https://google.com",children:["I'm an ","<a>"]})]}),s=n=>r("div",{className:"w-full flex justify-center py-8 rounded-md",style:{backgroundImage:"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)"},children:r(o,{...n,children:"Glass button"})});s.args={glass:!0};var d,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <Button {...args} />;
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <div>
      <div>
        <Button {...args}>Default</Button>
        <Button {...args} color="neutral">
          Neutral
        </Button>
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
}`,...(B=(h=a.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var f,v,I;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <div className="flex gap-x-2">
      <Button {...args}>Default</Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>;
}`,...(I=(v=c.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var x,k,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
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
}`,...(y=(k=l.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var w,S,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <div className="flex gap-x-2">
      <Button {...args} onClick={() => alert('See, I have an onClick event and no href.')}>
        I'm a {\`<button>\`}
      </Button>
      <Button href="https://google.com">I'm an {\`<a>\`}</Button>
    </div>;
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var L,j,C;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return <div className="w-full flex justify-center py-8 rounded-md" style={{
    backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'
  }}>
      <Button {...args}>Glass button</Button>
    </div>;
}`,...(C=(j=s.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const _=["Default","Colors","Variants","Icons","AsHref","Glass"];export{i as AsHref,a as Colors,e as Default,s as Glass,l as Icons,c as Variants,_ as __namedExportsOrder,O as default};
//# sourceMappingURL=Button.stories-42413275.js.map
