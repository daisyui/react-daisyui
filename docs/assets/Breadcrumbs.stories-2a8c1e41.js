import{a as e,F as y,t as H,j as a}from"./tw-merge-e8a1af18.js";import{R as L}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const i=L.forwardRef(({children:t,href:s,...d},c)=>e("li",{role:"link",...d,ref:c,children:s?e("a",{href:s,children:t}):e(y,{children:t})})),M=i;try{i.displayName="BreadcrumbsItem",i.__docgenInfo={description:"",displayName:"BreadcrumbsItem",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const u=L.forwardRef(({children:t,dataTheme:s,className:d,innerProps:c,innerRef:x,...v},_)=>{const k=H("breadcrumbs","text-sm",d);return e("div",{role:"navigation","aria-label":"Breadcrumbs",...v,"data-theme":s,className:k,ref:_,children:e("ul",{...c,ref:x,children:t})})}),r=Object.assign(u,{Item:M});try{u.displayName="Breadcrumbs",u.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"Ref<HTMLUListElement>"}},innerProps:{defaultValue:null,description:"",name:"innerProps",required:!1,type:{name:"HTMLAttributes<HTMLUListElement>"}}}}}catch{}try{r.displayName="Breadcrumbs",r.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"Ref<HTMLUListElement>"}},innerProps:{defaultValue:null,description:"",name:"innerProps",required:!1,type:{name:"HTMLAttributes<HTMLUListElement>"}}}}}catch{}const j={title:"Navigation/Breadcrumbs",component:r},m=t=>a(r,{...t,children:[e(r.Item,{href:"/",children:"Home"}),e(r.Item,{href:"/",children:"Documents"}),e(r.Item,{href:"/",children:"Add Document"})]}),o=t=>a(r,{...t,children:[a(r.Item,{href:"/",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Home"]}),a(r.Item,{href:"/",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Documents"]}),a(r.Item,{href:"/",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Add Document"]})]}),n=t=>a(r,{...t,children:[e(r.Item,{children:"Long text 1"}),e(r.Item,{children:"Long text 2"}),e(r.Item,{children:"Long text 3"}),e(r.Item,{children:"Long text 4"}),e(r.Item,{children:"Long text 5"})]});n.args={className:"max-w-xs "};var l,h,p;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <Breadcrumbs {...args}>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">Documents</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">Add Document</Breadcrumbs.Item>
    </Breadcrumbs>;
}`,...(p=(h=m.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,f,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <Breadcrumbs {...args}>
      <Breadcrumbs.Item href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        Home
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        Documents
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Add Document
      </Breadcrumbs.Item>
    </Breadcrumbs>;
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var B,I,w;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <Breadcrumbs {...args}>
      <Breadcrumbs.Item>Long text 1</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 2</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 3</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 4</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 5</Breadcrumbs.Item>
    </Breadcrumbs>;
}`,...(w=(I=n.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const D=["Default","WithIcons","WithMaxWidth"];export{m as Default,o as WithIcons,n as WithMaxWidth,D as __namedExportsOrder,j as default};
//# sourceMappingURL=Breadcrumbs.stories-2a8c1e41.js.map
