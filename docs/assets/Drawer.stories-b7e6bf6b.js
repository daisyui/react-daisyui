import{t as T,a as i,j as e}from"./tw-merge-4486aaf0.js";import{r as o}from"./index-f46741a2.js";import{c}from"./clsx.m-1229b3e0.js";import{B as g}from"./Button-ea8a5606.js";import{N as F}from"./index-e9502a94.js";import{M as a}from"./index-6a75a6a1.js";import"./index-796e73d3.js";const h=({children:s,side:l,open:r,end:n,dataTheme:t,className:D,toggleClassName:O,contentClassName:B,sideClassName:q,overlayClassName:_,onClickOverlay:j,...L})=>{const R=T("drawer",D,c({"drawer-end":n}));return i("div",{"aria-expanded":r,...L,"data-theme":t,className:R,children:[e("input",{type:"checkbox",className:c("drawer-toggle",O),checked:r,readOnly:!0}),e("div",{className:c("drawer-content",B),children:s}),i("div",{className:c("drawer-side",q),children:[e("label",{className:c("drawer-overlay",_),onClick:j}),l]})]})},p=h;try{h.displayName="Drawer",h.__docgenInfo={description:"",displayName:"Drawer",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"ReactNode"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"boolean"}},toggleClassName:{defaultValue:null,description:"",name:"toggleClassName",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"",name:"contentClassName",required:!1,type:{name:"string"}},sideClassName:{defaultValue:null,description:"",name:"sideClassName",required:!1,type:{name:"string"}},overlayClassName:{defaultValue:null,description:"",name:"overlayClassName",required:!1,type:{name:"string"}},onClickOverlay:{defaultValue:null,description:"",name:"onClickOverlay",required:!1,type:{name:"(() => void)"}}}}}catch{}const H={title:"Layout/Drawer",component:p,argTypes:{side:{control:!1}}},d=s=>{const[l,r]=o.useState(!1),n=o.useCallback(()=>{r(t=>!t)},[]);return e(p,{...s,open:l,onClickOverlay:n,side:i(a,{className:"p-4 w-80 h-full bg-base-200 text-base-content",children:[e(a.Item,{children:e("a",{children:"Sidebar Item 1"})}),e(a.Item,{children:e("a",{children:"Sidebar Item 2"})})]}),children:e(g,{color:"primary",onClick:n,children:"Open drawer"})})};d.args={sideClassName:"h-full absolute",contentClassName:"flex h-56 items-center justify-center"};const m=s=>{const[l,r]=o.useState(!1),n=o.useCallback(()=>{r(t=>!t)},[]);return e(p,{...s,open:l,onClickOverlay:n,side:i(a,{className:"p-4 w-80 h-full bg-base-200 text-base-content",children:[e(a.Item,{children:e("a",{children:"Sidebar Item 1"})}),e(a.Item,{children:e("a",{children:"Sidebar Item 2"})})]}),children:e(g,{color:"primary",onClick:n,className:"lg:hidden",children:"Open drawer"})})};m.args={className:"lg:drawer-open",sideClassName:"h-full absolute",contentClassName:"flex h-56 items-center justify-center"};const u=s=>{const[l,r]=o.useState(!1),n=o.useCallback(()=>{r(t=>!t)},[]);return i(p,{...s,open:l,onClickOverlay:n,side:i(a,{className:"p-4 w-60 md:w-80 h-full bg-base-200",children:[e(a.Item,{children:e("a",{children:"Sidebar Item 1"})}),e(a.Item,{children:e("a",{children:"Sidebar Item 2"})})]}),children:[i(F,{className:"w-full bg-base-300",children:[e("div",{className:"flex-none lg:hidden",children:e(g,{shape:"square",color:"ghost",onClick:n,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-6 h-6 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),e("div",{className:"flex-1 px-2 mx-2",children:"Navbar Title"}),e("div",{className:"flex-none hidden lg:block",children:i(a,{horizontal:!0,children:[e(a.Item,{children:e("a",{children:"Navbar Item 1"})}),e(a.Item,{children:e("a",{children:"Navbar Item 2"})})]})})]}),e("div",{className:"flex flex-grow items-center justify-center",children:"Content"})]})};u.args={className:"h-56 rounded overflow-hidden",contentClassName:"flex flex-col"};const b=s=>{const[l,r]=o.useState(!1),n=o.useCallback(()=>{r(t=>!t)},[]);return e(p,{...s,open:l,onClickOverlay:n,side:i(a,{className:"p-4 w-80 h-full bg-base-200 text-base-content",children:[e(a.Item,{children:e("a",{children:"Sidebar Item 1"})}),e(a.Item,{children:e("a",{children:"Sidebar Item 2"})})]}),children:e(g,{color:"primary",onClick:n,children:"Open drawer"})})};b.args={sideClassName:"h-full absolute ms-[-100vw] w-[stretch]",contentClassName:"flex h-56 items-center justify-center",end:!0};var f,v,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var N,I,C;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var k,M,y;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(y=(M=u.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var x,V,S;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
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
}`,...(S=(V=b.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const J=["Default","Responsive","NavbarMenuForDesktopSidebarDrawerForMobile","RightSideOfPage"];export{d as Default,u as NavbarMenuForDesktopSidebarDrawerForMobile,m as Responsive,b as RightSideOfPage,J as __namedExportsOrder,H as default};
