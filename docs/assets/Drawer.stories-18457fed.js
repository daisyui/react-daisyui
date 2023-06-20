import{t as B,j as l,a as e}from"./tw-merge-e8a1af18.js";import{r as p}from"./index-f1f749bf.js";import{c as i}from"./clsx.m-1229b3e0.js";import{B as b}from"./index-e215d0b1.js";import{N as F}from"./index-b4d8e468.js";import{M as m}from"./index-3406aa44.js";import"./_commonjsHelpers-042e6b4d.js";const u=({children:n,side:r,open:s,mobile:a,end:V,dataTheme:C,className:M,toggleClassName:D,contentClassName:S,sideClassName:O,overlayClassName:I,onClickOverlay:q,...j})=>{const _=B("drawer",M,i({"drawer-mobile":a,"drawer-end":V}));return l("div",{"aria-expanded":s,...j,"data-theme":C,className:_,children:[e("input",{type:"checkbox",className:i("drawer-toggle",D),checked:s,readOnly:!0}),e("div",{className:i("drawer-content",S),children:n}),l("div",{className:i("drawer-side",O),children:[e("label",{className:i("drawer-overlay",I),onClick:q}),r]})]})},d=u;try{u.displayName="Drawer",u.__docgenInfo={description:"",displayName:"Drawer",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"ReactNode"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:"",name:"mobile",required:!1,type:{name:"boolean"}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"boolean"}},toggleClassName:{defaultValue:null,description:"",name:"toggleClassName",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"",name:"contentClassName",required:!1,type:{name:"string"}},sideClassName:{defaultValue:null,description:"",name:"sideClassName",required:!1,type:{name:"string"}},overlayClassName:{defaultValue:null,description:"",name:"overlayClassName",required:!1,type:{name:"string"}},onClickOverlay:{defaultValue:null,description:"",name:"onClickOverlay",required:!1,type:{name:"(() => void)"}}}}}catch{}const L=l("ul",{className:"menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content",children:[e("li",{children:e("a",{children:"Sidebar Item 1"})}),e("li",{children:e("a",{children:"Sidebar Item 2"})})]}),G={title:"Layout/Drawer",component:d,args:{side:L}},o=n=>{const[r,s]=p.useState(!1),a=()=>{s(!r)};return e(d,{...n,open:r,onClickOverlay:a,children:e("div",{className:"flex h-56 items-center justify-center",children:e(b,{color:"primary",onClick:a,children:"Open drawer"})})})},t=n=>{const[r,s]=p.useState(!1),a=()=>{s(!r)};return e(d,{...n,open:r,onClickOverlay:a,children:e("div",{className:"flex h-56 items-center justify-center",children:e(b,{color:"primary",className:"lg:hidden",onClick:a,children:"Open drawer"})})})};t.args={mobile:!0};const c=n=>{const[r,s]=p.useState(!1),a=()=>{s(!r)};return l(d,{...n,open:r,onClickOverlay:a,className:"font-sans",children:[l(F,{children:[e("div",{className:"flex-none lg:hidden",children:e(b,{shape:"square",color:"ghost",onClick:a,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-6 h-6 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})}),e("div",{className:"flex-1 px-2 mx-2",children:"Navbar Title"}),e("div",{className:"flex-none hidden lg:block",children:l(m,{horizontal:!0,children:[e(m.Item,{children:e("a",{children:"Navbar Item 1"})}),e(m.Item,{children:e("a",{children:"Navbar Item 2"})})]})})]}),e("div",{className:"flex h-36 items-center justify-center",children:"Content"})]})};var g,h,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible}>
      <div className="flex h-56 items-center justify-center">
        <Button color="primary" onClick={toggleVisible}>
          Open drawer
        </Button>
      </div>
    </Drawer>;
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,N,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible}>
      <div className="flex h-56 items-center justify-center">
        <Button color="primary" className="lg:hidden" onClick={toggleVisible}>
          Open drawer
        </Button>
      </div>
    </Drawer>;
}`,...(w=(N=t.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var y,k,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <Drawer {...args} open={visible} onClickOverlay={toggleVisible} className="font-sans">
      <Navbar>
        <div className="flex-none lg:hidden">
          <Button shape="square" color="ghost" onClick={toggleVisible}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
      <div className="flex h-36 items-center justify-center">Content</div>
    </Drawer>;
}`,...(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const H=["Default","ForMobileFixedSidebarForDesktop","NavbarMenuForDesktopSidebarDrawerForMobile"];export{o as Default,t as ForMobileFixedSidebarForDesktop,c as NavbarMenuForDesktopSidebarDrawerForMobile,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Drawer.stories-18457fed.js.map
