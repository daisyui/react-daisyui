import{a,j as e}from"./tw-merge-0a3648bd.js";import{r as b}from"./index-1b03fe98.js";import{M as o}from"./index-1c7a8ea4.js";import{B as i}from"./Button-0a8fe609.js";import"./clsx.m-1229b3e0.js";import"./index-a55c3a76.js";const x={title:"Actions/Modal/Legacy",component:o.Legacy},d=n=>{const[s,t]=b.useState(!1),l=()=>{t(!s)};return a("div",{className:"font-sans",children:[e(i,{onClick:l,children:"Open Modal"}),a(o.Legacy,{...n,open:s,children:[e(o.Header,{className:"font-bold",children:"Hello!"}),e(o.Body,{children:"This modal works with a legacy mode!"}),e(o.Actions,{children:e(i,{onClick:l,children:"Close"})})]})]})},r=n=>{const[s,t]=b.useState(!1),l=()=>{t(!s)};return a("div",{className:"font-sans",children:[e(i,{onClick:l,children:"Open Modal"}),a(o.Legacy,{...n,open:s,onClickBackdrop:l,children:[e(o.Header,{className:"font-bold",children:"Hello!"}),e(o.Body,{children:"Click outside to close"})]})]})},g=n=>{const[s,t]=b.useState(!1),l=()=>{t(!s)};return a("div",{className:"font-sans",children:[e(i,{onClick:l,children:"Open Modal"}),a(o.Legacy,{...n,open:s,children:[e(i,{size:"sm",color:"ghost",shape:"circle",className:"absolute right-2 top-2",onClick:l,children:"✕"}),e(o.Header,{className:"font-bold",children:"Hello!"}),e(o.Body,{children:"Click on X button to close"})]})]})},c=n=>{const[s,t]=b.useState(!1),l=()=>{t(!s)};return a("div",{className:"font-sans",children:[e(i,{onClick:l,children:"Open Modal"}),a(o.Legacy,{...n,open:s,children:[e(o.Header,{className:"font-bold",children:"Hello!"}),e(o.Body,{children:"This modal works with a legacy mode!"}),e(o.Actions,{children:e(i,{onClick:l,children:"Close"})})]})]})};c.args={className:"w-11/12 max-w-5xl"};var m,u,p;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,M,B;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(B=(M=r.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var f,y,C;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(C=(y=g.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var k,v,V;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(V=(v=c.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};const A=["Default","ClickedOutside","CloseButton","CustomWidth"];export{r as ClickedOutside,g as CloseButton,c as CustomWidth,d as Default,A as __namedExportsOrder,x as default};
