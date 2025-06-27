import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as y}from"./iframe-DDnXVYpC.js";import{c as h}from"./clsx-B-dksMZM.js";import{t as D}from"./bundle-mjs-yGZq-iow.js";const a=y.forwardRef(({dataTheme:r,className:t,children:p,secondItem:f,...g},x)=>{const u=D("diff aspect-[16/9]",h({}),t);return e.jsxs("div",{...g,"data-theme":r,className:u,ref:x,children:[e.jsx("div",{className:"diff-item-1",children:p}),e.jsx("div",{className:"diff-item-2",children:f}),e.jsx("div",{className:"diff-resizer"})]})});a.displayName="Diff";try{a.displayName="Diff",a.__docgenInfo={description:"",displayName:"Diff",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},secondItem:{defaultValue:null,description:"",name:"secondItem",required:!0,type:{name:"ReactNode"}}}}}catch{}const v={title:"Data Display/Diff",component:a,parameters:{controls:{expanded:!0}}},s=({secondItem:r,...t})=>e.jsx(a,{...t,secondItem:e.jsx("img",{alt:"daisy",src:"https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"}),children:e.jsx("img",{alt:"daisy",src:" https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"})});s.argTypes={secondItem:{control:!1}};const c=({secondItem:r,...t})=>e.jsx(a,{...t,secondItem:e.jsx("div",{className:"bg-base-200 text-9xl font-black grid place-content-center",children:"DAISY"}),children:e.jsx("div",{className:"bg-primary text-primary-content text-9xl font-black grid place-content-center",children:"DAISY"})});c.argTypes={secondItem:{control:!1}};var o,i,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`({
  secondItem,
  ...args
}) => <Diff {...args} secondItem={<img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />}>
    <img alt="daisy" src=" https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </Diff>`,...(n=(i=s.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var d,m,l;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`({
  secondItem,
  ...args
}) => <Diff {...args} secondItem={<div className="bg-base-200 text-9xl font-black grid place-content-center">
        DAISY
      </div>}>
    <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
      DAISY
    </div>
  </Diff>`,...(l=(m=c.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const _=["Default","Text"];export{s as Default,c as Text,_ as __namedExportsOrder,v as default};
