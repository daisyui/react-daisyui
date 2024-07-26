import{t as h,a as D,j as e}from"./tw-merge-0a3648bd.js";import{r as I}from"./index-1b03fe98.js";import{c as b}from"./clsx.m-1229b3e0.js";const r=I.forwardRef(({dataTheme:c,className:a,children:f,secondItem:g,...u},y)=>{const x=h("diff aspect-[16/9]",b({}),a);return D("div",{...u,"data-theme":c,className:x,ref:y,children:[e("div",{className:"diff-item-1",children:f}),e("div",{className:"diff-item-2",children:g}),e("div",{className:"diff-resizer"})]})});r.displayName="Diff";const i=r;try{r.displayName="Diff",r.__docgenInfo={description:"",displayName:"Diff",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},secondItem:{defaultValue:null,description:"",name:"secondItem",required:!0,type:{name:"ReactNode"}}}}}catch{}const k={title:"Data Display/Diff",component:i,parameters:{controls:{expanded:!0}}},t=({secondItem:c,...a})=>e(i,{...a,secondItem:e("img",{alt:"daisy",src:"https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"}),children:e("img",{alt:"daisy",src:" https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"})});t.argTypes={secondItem:{control:!1}};const s=({secondItem:c,...a})=>e(i,{...a,secondItem:e("div",{className:"bg-base-200 text-9xl font-black grid place-content-center",children:"DAISY"}),children:e("div",{className:"bg-primary text-primary-content text-9xl font-black grid place-content-center",children:"DAISY"})});s.argTypes={secondItem:{control:!1}};var o,n,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
  secondItem,
  ...args
}) => <Diff {...args} secondItem={<img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />}>
    <img alt="daisy" src=" https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </Diff>`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,l,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`({
  secondItem,
  ...args
}) => <Diff {...args} secondItem={<div className="bg-base-200 text-9xl font-black grid place-content-center">
        DAISY
      </div>}>
    <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
      DAISY
    </div>
  </Diff>`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const w=["Default","Text"];export{t as Default,s as Text,w as __namedExportsOrder,k as default};
