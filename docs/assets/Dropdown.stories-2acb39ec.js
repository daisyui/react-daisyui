import{j as e,a as r}from"./tw-merge-0a3648bd.js";import{D as n}from"./index-b7f38c25.js";import{C as c}from"./index-c42c26b3.js";import{N as l}from"./index-1e3c83a2.js";import{B as y}from"./Button-0a8fe609.js";import"./index-1b03fe98.js";import"./clsx.m-1229b3e0.js";import"./index-a55c3a76.js";const A={title:"Actions/Dropdown",component:n,argTypes:{item:{control:!1}}},s=o=>e("div",{className:"my-32",children:r(n,{...o,children:[e(n.Toggle,{children:"Click"}),r(n.Menu,{className:"w-52",children:[e(n.Item,{children:"Item 1"}),e(n.Item,{children:"Item 2"})]})]})}),d=o=>e("div",{className:"my-32",children:r(n,{...o,children:[e(n.Toggle,{children:"Click"}),e(n.Menu,{className:"card card-compact w-64 p-2 shadow bg-primary text-primary-content m-1",children:r(c.Body,{children:[e(c.Title,{tag:"h3",children:"Card title!"}),e("p",{children:"you can use any element as a dropdown."})]})})]})}),a=({dataTheme:o,...v})=>r(l,{className:"my-32 px-2 font-sans bg-base-300 rounded-box",dataTheme:o,children:[e(l.Start,{className:"px-2 lg:flex-none",children:e("span",{className:"text-lg font-bold",children:"daisyUI"})}),r(l.End,{children:[e(y,{color:"ghost",dataTheme:o,children:"Button"}),r(n,{...v,dataTheme:o,children:[e(n.Toggle,{className:"btn btn-ghost rounded-btn",button:!1,children:"Dropdown"}),r(n.Menu,{className:"w-52 mt-4",children:[e(n.Item,{children:"Item 1"}),e(n.Item,{children:"Item 2"})]})]})]})]});a.args={end:!0};const t=o=>r("div",{className:"my-32 font-sans",children:["A normal text and a helper dropdown",r(n,{...o,children:[e(n.Toggle,{button:!1,className:"btn btn-circle btn-ghost btn-xs text-info",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 stroke-current",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e(n.Menu,{className:"card compact w-64 !p-0 shadow bg-base-100 rounded-box",children:r(c.Body,{children:[e(c.Title,{tag:"h2",children:"You needed more info?"}),e("p",{children:"Here is a description!"})]})})]})]});t.args={end:!0};var m,p,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <div className="my-32">
      <Dropdown {...args}>
        <Dropdown.Toggle>Click</Dropdown.Toggle>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>;
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var h,g,w;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(w=(g=d.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var u,b,D;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`({
  dataTheme,
  ...args
}) => {
  return <Navbar className="my-32 px-2 font-sans bg-base-300 rounded-box" dataTheme={dataTheme}>
      <Navbar.Start className="px-2 lg:flex-none">
        <span className="text-lg font-bold">daisyUI</span>
      </Navbar.Start>
      <Navbar.End>
        <Button color="ghost" dataTheme={dataTheme}>
          Button
        </Button>
        <Dropdown {...args} dataTheme={dataTheme}>
          <Dropdown.Toggle className="btn btn-ghost rounded-btn" button={false}>
            Dropdown
          </Dropdown.Toggle>
          <Dropdown.Menu className="w-52 mt-4">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.End>
    </Navbar>;
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var N,x,f;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <div className="my-32 font-sans">
      A normal text and a helper dropdown
      <Dropdown {...args}>
        <Dropdown.Toggle button={false} className="btn btn-circle btn-ghost btn-xs text-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu className="card compact w-64 !p-0 shadow bg-base-100 rounded-box">
          <Card.Body>
            <Card.Title tag={'h2'}>You needed more info?</Card.Title>
            <p>Here is a description!</p>
          </Card.Body>
        </Dropdown.Menu>
      </Dropdown>
    </div>;
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const E=["Default","AsCard","InNavbar","Helper"];export{d as AsCard,s as Default,t as Helper,a as InNavbar,E as __namedExportsOrder,A as default};
