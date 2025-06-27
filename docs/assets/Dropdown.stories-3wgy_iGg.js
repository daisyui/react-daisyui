import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{D as r}from"./index-BfJ2msvr.js";import{C as d}from"./index-DIaYqioD.js";import{N as c}from"./index-pbAkFGQM.js";import{B as f}from"./Button-GtH5nISf.js";import"./iframe-DDnXVYpC.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-yGZq-iow.js";import"./index-Dl-l57lR.js";const A={title:"Actions/Dropdown",component:r,argTypes:{item:{control:!1}}},a=o=>e.jsx("div",{className:"my-32",children:e.jsxs(r,{...o,children:[e.jsx(r.Toggle,{children:"Click"}),e.jsxs(r.Menu,{className:"w-52",children:[e.jsx(r.Item,{children:"Item 1"}),e.jsx(r.Item,{children:"Item 2"})]})]})}),t=o=>e.jsx("div",{className:"my-32",children:e.jsxs(r,{...o,children:[e.jsx(r.Toggle,{children:"Click"}),e.jsx(r.Menu,{className:"card card-compact w-64 p-2 shadow bg-primary text-primary-content m-1",children:e.jsxs(d.Body,{children:[e.jsx(d.Title,{tag:"h3",children:"Card title!"}),e.jsx("p",{children:"you can use any element as a dropdown."})]})})]})}),n=({dataTheme:o,...N})=>e.jsxs(c,{className:"my-32 px-2 font-sans bg-base-300 rounded-box",dataTheme:o,children:[e.jsx(c.Start,{className:"px-2 lg:flex-none",children:e.jsx("span",{className:"text-lg font-bold",children:"daisyUI"})}),e.jsxs(c.End,{children:[e.jsx(f,{color:"ghost",dataTheme:o,children:"Button"}),e.jsxs(r,{...N,dataTheme:o,children:[e.jsx(r.Toggle,{className:"btn btn-ghost rounded-btn",button:!1,children:"Dropdown"}),e.jsxs(r.Menu,{className:"w-52 mt-4",children:[e.jsx(r.Item,{children:"Item 1"}),e.jsx(r.Item,{children:"Item 2"})]})]})]})]});n.args={end:!0};const s=o=>e.jsxs("div",{className:"my-32 font-sans",children:["A normal text and a helper dropdown",e.jsxs(r,{...o,children:[e.jsx(r.Toggle,{button:!1,className:"btn btn-circle btn-ghost btn-xs text-info",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-4 h-4 stroke-current",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx(r.Menu,{className:"card compact w-64 !p-0 shadow bg-base-100 rounded-box",children:e.jsxs(d.Body,{children:[e.jsx(d.Title,{tag:"h2",children:"You needed more info?"}),e.jsx("p",{children:"Here is a description!"})]})})]})]});s.args={end:!0};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <div className="my-32">
      <Dropdown {...args}>
        <Dropdown.Toggle>Click</Dropdown.Toggle>
        <Dropdown.Menu className="w-52">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>;
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,h,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,w,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,D,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(j=(D=s.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const E=["Default","AsCard","InNavbar","Helper"];export{t as AsCard,a as Default,s as Helper,n as InNavbar,E as __namedExportsOrder,A as default};
