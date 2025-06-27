import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as I}from"./iframe-DDnXVYpC.js";import{t as _}from"./bundle-mjs-yGZq-iow.js";const c=I.forwardRef(({children:s,href:n,...o},d)=>e.jsx("li",{role:"link",...o,ref:d,children:n?e.jsx("a",{href:n,children:s}):e.jsx(e.Fragment,{children:s})}));try{c.displayName="BreadcrumbsItem",c.__docgenInfo={description:"",displayName:"BreadcrumbsItem",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const i=I.forwardRef(({children:s,dataTheme:n,className:o,innerProps:d,innerRef:w,...j},L)=>{const v=_("breadcrumbs","text-sm",o);return e.jsx("div",{role:"navigation","aria-label":"Breadcrumbs",...j,"data-theme":n,className:v,ref:L,children:e.jsx("ul",{...d,ref:w,children:s})})}),r=Object.assign(i,{Item:c});try{i.displayName="Breadcrumbs",i.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"Ref<HTMLUListElement>"}},innerProps:{defaultValue:null,description:"",name:"innerProps",required:!1,type:{name:"HTMLAttributes<HTMLUListElement>"}}}}}catch{}try{r.displayName="Breadcrumbs",r.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"Ref<HTMLUListElement>"}},innerProps:{defaultValue:null,description:"",name:"innerProps",required:!1,type:{name:"HTMLAttributes<HTMLUListElement>"}}}}}catch{}const{Item:M}=r,N={title:"Navigation/Breadcrumbs",component:r},a=s=>e.jsxs(r,{...s,children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/",children:"Documents"}),e.jsx(r.Item,{href:"/",children:"Add Document"})]}),m=s=>e.jsxs(r,{...s,children:[e.jsxs(r.Item,{href:"/",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Home"]}),e.jsxs(r.Item,{href:"/",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"})}),"Documents"]}),e.jsxs(r.Item,{href:"/",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 mr-2 stroke-current",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),"Add Document"]})]}),t=s=>e.jsxs(r,{...s,children:[e.jsx(r.Item,{children:"Long text 1"}),e.jsx(r.Item,{children:"Long text 2"}),e.jsx(r.Item,{children:"Long text 3"}),e.jsx(r.Item,{children:"Long text 4"}),e.jsx(r.Item,{children:"Long text 5"})]});t.args={className:"max-w-xs "};var u,l,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <Breadcrumbs {...args}>
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">Documents</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/">Add Document</Breadcrumbs.Item>
    </Breadcrumbs>;
}`,...(h=(l=a.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var p,x,g;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(g=(x=m.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,b,B;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Breadcrumbs {...args}>
      <Breadcrumbs.Item>Long text 1</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 2</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 3</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 4</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 5</Breadcrumbs.Item>
    </Breadcrumbs>;
}`,...(B=(b=t.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const V=["Default","WithIcons","WithMaxWidth"];export{a as Default,m as WithIcons,t as WithMaxWidth,V as __namedExportsOrder,N as default};
