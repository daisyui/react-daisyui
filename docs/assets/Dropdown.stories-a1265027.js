import{j as r,a as o}from"./tw-merge-e2243cb0.js";import{D as e}from"./index-b97b7231.js";import{C as c}from"./index-587fb902.js";import{N as l}from"./index-af5ec58e.js";import{B as x}from"./index-6e65e89d.js";import"./index-ebeaab24.js";import"./clsx.m-1229b3e0.js";import"./index-3106c12b.js";const A={title:"Actions/Dropdown",component:e,argTypes:{item:{control:!1}}},n=a=>r("div",{className:"my-32",children:o(e,{...a,children:[r(e.Toggle,{children:"Click"}),o(e.Menu,{className:"w-52",children:[r(e.Item,{children:"Item 1"}),r(e.Item,{children:"Item 2"})]})]})}),t=a=>r("div",{className:"my-32",children:o(e,{...a,children:[r(e.Toggle,{children:"Click"}),r(e.Menu,{className:"card card-compact w-64 p-2 shadow bg-primary text-primary-content m-1",children:o(c.Body,{children:[r(c.Title,{tag:"h3",children:"Card title!"}),r("p",{children:"you can use any element as a dropdown."})]})})]})}),s=({dataTheme:a,...f})=>o(l,{className:"my-32 px-2 font-sans",color:"dark",dataTheme:a,children:[r(l.Start,{children:r("span",{className:"text-lg font-bold",children:"daisyUI"})}),o(l.End,{children:[r(x,{color:"ghost",dataTheme:a,children:"Button"}),o(e,{...f,dataTheme:a,children:[r(e.Toggle,{color:"ghost",children:"Dropdown"}),o(e.Menu,{className:"w-52",children:[r(e.Item,{children:"Item 1"}),r(e.Item,{children:"Item 2"})]})]})]})]}),d=a=>o("div",{className:"my-32 font-sans",children:["A normal text and a helper dropdown",o(e,{...a,children:[r(x,{shape:"circle",className:"text-info",color:"ghost",size:"xs",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 stroke-current",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),r(e.Menu,{className:"card compact w-64 !p-0 shadow bg-base-100 rounded-box",children:o(c.Body,{children:[r(c.Title,{tag:"h2",children:"You needed more info?"}),r("p",{children:"Here is a description!"})]})})]})]});var m,p,i;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <div className="my-32">
      <Dropdown {...args}>
        <Dropdown.Toggle>Click</Dropdown.Toggle>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>;
}`,...(i=(p=n.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var h,w,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <div className="my-32">
      <Dropdown {...args}>
        <Dropdown.Toggle>Click</Dropdown.Toggle>
        <Dropdown.Menu className="card card-compact w-64 p-2 shadow bg-primary text-primary-content m-1">
          <Card.Body>
            <Card.Title tag={'h3'}>Card title!</Card.Title>
            <p>you can use any element as a dropdown.</p>
          </Card.Body>
        </Dropdown.Menu>
      </Dropdown>
    </div>;
}`,...(u=(w=t.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var g,D,N;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`({
  dataTheme,
  ...args
}) => {
  return <Navbar className="my-32 px-2 font-sans" color="dark" dataTheme={dataTheme}>
      <Navbar.Start>
        <span className="text-lg font-bold">daisyUI</span>
      </Navbar.Start>
      <Navbar.End>
        <Button color="ghost" dataTheme={dataTheme}>
          Button
        </Button>
        <Dropdown {...args} dataTheme={dataTheme}>
          <Dropdown.Toggle color="ghost">Dropdown</Dropdown.Toggle>
          <Dropdown.Menu className="w-52">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.End>
    </Navbar>;
}`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var v,y,I;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <div className="my-32 font-sans">
      A normal text and a helper dropdown
      <Dropdown {...args}>
        <Button shape="circle" className="text-info" color="ghost" size="xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </Button>
        <Dropdown.Menu className="card compact w-64 !p-0 shadow bg-base-100 rounded-box">
          <Card.Body>
            <Card.Title tag={'h2'}>You needed more info?</Card.Title>
            <p>Here is a description!</p>
          </Card.Body>
        </Dropdown.Menu>
      </Dropdown>
    </div>;
}`,...(I=(y=d.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const z=["Default","AsCard","InNavbar","Helper"];export{t as AsCard,n as Default,d as Helper,s as InNavbar,z as __namedExportsOrder,A as default};
//# sourceMappingURL=Dropdown.stories-a1265027.js.map
