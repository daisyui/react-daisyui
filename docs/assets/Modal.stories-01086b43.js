import{a as s,j as o}from"./tw-merge-e2243cb0.js";import{r as d}from"./index-ebeaab24.js";import{M as e}from"./index-7384e7f4.js";import{B as t}from"./index-6e65e89d.js";import"./clsx.m-1229b3e0.js";import"./index-3106c12b.js";const T={title:"Actions/Modal",component:e},u=a=>{const n=d.useRef(null),r=d.useCallback(()=>{var l;(l=n.current)==null||l.showModal()},[n]);return s("div",{className:"font-sans",children:[o(t,{onClick:r,children:"Open Modal"}),s(e,{...a,ref:n,children:[o(e.Header,{className:"font-bold",children:"Hello!"}),o(e.Body,{children:"Press ESC key or click the button below to close"}),o(e.Actions,{children:o(t,{children:"Close"})})]})]})},c=a=>{const n=d.useRef(null),r=d.useCallback(()=>{var l;(l=n.current)==null||l.showModal()},[n]);return s("div",{className:"font-sans",children:[o(t,{onClick:r,children:"Open Modal"}),s(e,{...a,ref:n,children:[o(e.Header,{className:"font-bold",children:"Hello!"}),o(e.Body,{children:"Press ESC key or click outside to close"})]})]})};c.args={backdrop:!0};const h=a=>{const n=d.useRef(null),r=d.useCallback(()=>{var l;(l=n.current)==null||l.showModal()},[n]);return s("div",{className:"font-sans",children:[o(t,{onClick:r,children:"Open Modal"}),s(e,{...a,ref:n,children:[o(t,{size:"sm",color:"ghost",shape:"circle",className:"absolute right-2 top-2",children:"x"}),o(e.Header,{className:"font-bold",children:"Hello!"}),o(e.Body,{children:"Press ESC key or click on X button to close"})]})]})},i=a=>{const n=d.useRef(null),r=d.useCallback(()=>{var l;(l=n.current)==null||l.showModal()},[n]);return s("div",{className:"font-sans",children:[o(t,{onClick:r,children:"Open Modal"}),s(e,{...a,ref:n,children:[o(e.Header,{className:"font-bold",children:"Hello!"}),o(e.Body,{children:"Press ESC key or click the button below to close"}),o(e.Actions,{children:o(t,{children:"Close"})})]})]})};i.args={className:"w-11/12 max-w-5xl"};const m=a=>{const{Dialog:n,handleShow:r}=e.useDialog();return s("div",{className:"font-sans",children:[o(t,{onClick:r,children:"Open Modal"}),s(n,{...a,children:[o(e.Header,{className:"font-bold",children:"Hello!"}),o(e.Body,{children:"This modal works with useDialog hook!"}),o(e.Actions,{children:o(t,{children:"Close"})})]})]})};var M,f,p;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>
          Press ESC key or click the button below to close
        </Modal.Body>
        <Modal.Actions>
          <Button>Close</Button>
        </Modal.Actions>
      </Modal>
    </div>;
}`,...(p=(f=u.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var k,C,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click outside to close</Modal.Body>
      </Modal>
    </div>;
}`,...(B=(C=c.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var g,w,b;h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Button size="sm" color="ghost" shape="circle" className="absolute right-2 top-2">
          x
        </Button>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click on X button to close</Modal.Body>
      </Modal>
    </div>;
}`,...(b=(w=h.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var H,S,y;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>
          Press ESC key or click the button below to close
        </Modal.Body>
        <Modal.Actions>
          <Button>Close</Button>
        </Modal.Actions>
      </Modal>
    </div>;
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var N,D,v;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const {
    Dialog,
    handleShow
  } = Modal.useDialog();
  return <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Dialog {...args}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with useDialog hook!</Modal.Body>
        <Modal.Actions>
          <Button>Close</Button>
        </Modal.Actions>
      </Dialog>
    </div>;
}`,...(v=(D=m.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const L=["Default","ClickedOutside","CloseButton","CustomWidth","UseDialogHook"];export{c as ClickedOutside,h as CloseButton,i as CustomWidth,u as Default,m as UseDialogHook,L as __namedExportsOrder,T as default};
//# sourceMappingURL=Modal.stories-01086b43.js.map
