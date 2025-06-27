import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./iframe-DDnXVYpC.js";import{c}from"./clsx-B-dksMZM.js";import{t as R}from"./bundle-mjs-yGZq-iow.js";import{B as p}from"./Button-GtH5nISf.js";import{N as L}from"./index-pbAkFGQM.js";import{M as s}from"./index-BxHmxGX2.js";import"./index-Dl-l57lR.js";const o=({children:n,side:l,open:r,end:a,dataTheme:t,className:y,toggleClassName:V,contentClassName:S,sideClassName:O,overlayClassName:D,onClickOverlay:B,...q})=>{const _=R("drawer",y,c({"drawer-end":a}));return e.jsxs("div",{"aria-expanded":r,...q,"data-theme":t,className:_,children:[e.jsx("input",{type:"checkbox",className:c("drawer-toggle",V),checked:r,readOnly:!0}),e.jsx("div",{className:c("drawer-content",S),children:n}),e.jsxs("div",{className:c("drawer-side",O),children:[e.jsx("label",{className:c("drawer-overlay",D),onClick:B}),l]})]})};try{o.displayName="Drawer",o.__docgenInfo={description:"",displayName:"Drawer",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"ReactNode"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"boolean"}},toggleClassName:{defaultValue:null,description:"",name:"toggleClassName",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"",name:"contentClassName",required:!1,type:{name:"string"}},sideClassName:{defaultValue:null,description:"",name:"sideClassName",required:!1,type:{name:"string"}},overlayClassName:{defaultValue:null,description:"",name:"overlayClassName",required:!1,type:{name:"string"}},onClickOverlay:{defaultValue:null,description:"",name:"onClickOverlay",required:!1,type:{name:"(() => void)"}}}}}catch{}const H={title:"Layout/Drawer",component:o,argTypes:{side:{control:!1}}},d=n=>{const[l,r]=i.useState(!1),a=i.useCallback(()=>{r(t=>!t)},[]);return e.jsx(o,{...n,open:l,onClickOverlay:a,side:e.jsxs(s,{className:"p-4 w-80 h-full bg-base-200 text-base-content",children:[e.jsx(s.Item,{children:e.jsx("a",{children:"Sidebar Item 1"})}),e.jsx(s.Item,{children:e.jsx("a",{children:"Sidebar Item 2"})})]}),children:e.jsx(p,{color:"primary",onClick:a,children:"Open drawer"})})};d.args={sideClassName:"h-full absolute",contentClassName:"flex h-56 items-center justify-center"};const m=n=>{const[l,r]=i.useState(!1),a=i.useCallback(()=>{r(t=>!t)},[]);return e.jsx(o,{...n,open:l,onClickOverlay:a,side:e.jsxs(s,{className:"p-4 w-80 h-full bg-base-200 text-base-content",children:[e.jsx(s.Item,{children:e.jsx("a",{children:"Sidebar Item 1"})}),e.jsx(s.Item,{children:e.jsx("a",{children:"Sidebar Item 2"})})]}),children:e.jsx(p,{color:"primary",onClick:a,className:"lg:hidden",children:"Open drawer"})})};m.args={className:"lg:drawer-open",sideClassName:"h-full absolute",contentClassName:"flex h-56 items-center justify-center"};const u=n=>{const[l,r]=i.useState(!1),a=i.useCallback(()=>{r(t=>!t)},[]);return e.jsxs(o,{...n,open:l,onClickOverlay:a,side:e.jsxs(s,{className:"p-4 w-60 md:w-80 h-full bg-base-200",children:[e.jsx(s.Item,{children:e.jsx("a",{children:"Sidebar Item 1"})}),e.jsx(s.Item,{children:e.jsx("a",{children:"Sidebar Item 2"})})]}),children:[e.jsxs(L,{className:"w-full bg-base-300",children:[e.jsx("div",{className:"flex-none lg:hidden",children:e.jsx(p,{shape:"square",color:"ghost",onClick:a,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-6 h-6 stroke-current",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),e.jsx("div",{className:"flex-1 px-2 mx-2",children:"Navbar Title"}),e.jsx("div",{className:"flex-none hidden lg:block",children:e.jsxs(s,{horizontal:!0,children:[e.jsx(s.Item,{children:e.jsx("a",{children:"Navbar Item 1"})}),e.jsx(s.Item,{children:e.jsx("a",{children:"Navbar Item 2"})})]})})]}),e.jsx("div",{className:"flex flex-grow items-center justify-center",children:"Content"})]})};u.args={className:"h-56 rounded overflow-hidden",contentClassName:"flex flex-col"};const b=n=>{const[l,r]=i.useState(!1),a=i.useCallback(()=>{r(t=>!t)},[]);return e.jsx(o,{...n,open:l,onClickOverlay:a,side:e.jsxs(s,{className:"p-4 w-80 h-full bg-base-200 text-base-content",children:[e.jsx(s.Item,{children:e.jsx("a",{children:"Sidebar Item 1"})}),e.jsx(s.Item,{children:e.jsx("a",{children:"Sidebar Item 2"})})]}),children:e.jsx(p,{color:"primary",onClick:a,children:"Open drawer"})})};b.args={sideClassName:"h-full absolute ms-[-100vw] w-[stretch]",contentClassName:"flex h-56 items-center justify-center",end:!0};var g,h,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible(visible => !visible);
  }, []);
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible} side={<Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
          <Menu.Item>
            <a>Sidebar Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Sidebar Item 2</a>
          </Menu.Item>
        </Menu>}>
      <Button color="primary" onClick={toggleVisible}>
        Open drawer
      </Button>
    </Drawer>;
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,v,N;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible(visible => !visible);
  }, []);
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible} side={<Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
          <Menu.Item>
            <a>Sidebar Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Sidebar Item 2</a>
          </Menu.Item>
        </Menu>}>
      <Button color="primary" onClick={toggleVisible} className="lg:hidden">
        Open drawer
      </Button>
    </Drawer>;
}`,...(N=(v=m.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var w,j,I;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible(visible => !visible);
  }, []);
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible} side={<Menu className="p-4 w-60 md:w-80 h-full bg-base-200">
          <Menu.Item>
            <a>Sidebar Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Sidebar Item 2</a>
          </Menu.Item>
        </Menu>}>
      <Navbar className="w-full bg-base-300">
        <div className="flex-none lg:hidden">
          <Button shape="square" color="ghost" onClick={toggleVisible}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </Button>
        </div>
        <div className="flex-1 px-2 mx-2">Navbar Title</div>
        <div className="flex-none hidden lg:block">
          <Menu horizontal={true}>
            <Menu.Item>
              <a>Navbar Item 1</a>
            </Menu.Item>
            <Menu.Item>
              <a>Navbar Item 2</a>
            </Menu.Item>
          </Menu>
        </div>
      </Navbar>
      <div className="flex flex-grow items-center justify-center">Content</div>
    </Drawer>;
}`,...(I=(j=u.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,k,M;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible(visible => !visible);
  }, []);
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible} side={<Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
          <Menu.Item>
            <a>Sidebar Item 1</a>
          </Menu.Item>
          <Menu.Item>
            <a>Sidebar Item 2</a>
          </Menu.Item>
        </Menu>}>
      <Button color="primary" onClick={toggleVisible}>
        Open drawer
      </Button>
    </Drawer>;
}`,...(M=(k=b.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const J=["Default","Responsive","NavbarMenuForDesktopSidebarDrawerForMobile","RightSideOfPage"];export{d as Default,u as NavbarMenuForDesktopSidebarDrawerForMobile,m as Responsive,b as RightSideOfPage,J as __namedExportsOrder,H as default};
