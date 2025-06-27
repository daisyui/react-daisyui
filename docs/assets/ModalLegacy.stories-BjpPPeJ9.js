import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./iframe-DDnXVYpC.js";import{M as s}from"./index-CUE0XAQJ.js";import{B as t}from"./Button-GtH5nISf.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-yGZq-iow.js";import"./index-Dl-l57lR.js";const O={title:"Actions/Modal/Legacy",component:s.Legacy},c=n=>{const[o,a]=g.useState(!1),l=()=>{a(!o)};return e.jsxs("div",{className:"font-sans",children:[e.jsx(t,{onClick:l,children:"Open Modal"}),e.jsxs(s.Legacy,{...n,open:o,children:[e.jsx(s.Header,{className:"font-bold",children:"Hello!"}),e.jsx(s.Body,{children:"This modal works with a legacy mode!"}),e.jsx(s.Actions,{children:e.jsx(t,{onClick:l,children:"Close"})})]})]})},r=n=>{const[o,a]=g.useState(!1),l=()=>{a(!o)};return e.jsxs("div",{className:"font-sans",children:[e.jsx(t,{onClick:l,children:"Open Modal"}),e.jsxs(s.Legacy,{...n,open:o,onClickBackdrop:l,children:[e.jsx(s.Header,{className:"font-bold",children:"Hello!"}),e.jsx(s.Body,{children:"Click outside to close"})]})]})},d=n=>{const[o,a]=g.useState(!1),l=()=>{a(!o)};return e.jsxs("div",{className:"font-sans",children:[e.jsx(t,{onClick:l,children:"Open Modal"}),e.jsxs(s.Legacy,{...n,open:o,children:[e.jsx(t,{size:"sm",color:"ghost",shape:"circle",className:"absolute right-2 top-2",onClick:l,children:"✕"}),e.jsx(s.Header,{className:"font-bold",children:"Hello!"}),e.jsx(s.Body,{children:"Click on X button to close"})]})]})},i=n=>{const[o,a]=g.useState(!1),l=()=>{a(!o)};return e.jsxs("div",{className:"font-sans",children:[e.jsx(t,{onClick:l,children:"Open Modal"}),e.jsxs(s.Legacy,{...n,open:o,children:[e.jsx(s.Header,{className:"font-bold",children:"Hello!"}),e.jsx(s.Body,{children:"This modal works with a legacy mode!"}),e.jsx(s.Actions,{children:e.jsx(t,{onClick:l,children:"Close"})})]})]})};i.args={className:"w-11/12 max-w-5xl"};var m,b,u;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with a legacy mode!</Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Close</Button>
        </Modal.Actions>
      </Modal.Legacy>
    </div>;
}`,...(u=(b=c.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,h,M;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible} onClickBackdrop={toggleVisible}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Click outside to close</Modal.Body>
      </Modal.Legacy>
    </div>;
}`,...(M=(h=r.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var x,B,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible}>
        <Button size="sm" color="ghost" shape="circle" className="absolute right-2 top-2" onClick={toggleVisible}>
          ✕
        </Button>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Click on X button to close</Modal.Body>
      </Modal.Legacy>
    </div>;
}`,...(f=(B=d.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,C,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal.Legacy {...args} open={visible}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with a legacy mode!</Modal.Body>
        <Modal.Actions>
          <Button onClick={toggleVisible}>Close</Button>
        </Modal.Actions>
      </Modal.Legacy>
    </div>;
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const w=["Default","ClickedOutside","CloseButton","CustomWidth"];export{r as ClickedOutside,d as CloseButton,i as CustomWidth,c as Default,w as __namedExportsOrder,O as default};
