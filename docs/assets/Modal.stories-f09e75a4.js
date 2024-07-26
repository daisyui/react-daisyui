import{a,j as o}from"./tw-merge-0a3648bd.js";import{r as t}from"./index-1b03fe98.js";import{M as e}from"./index-1c7a8ea4.js";import{B as d}from"./Button-0a8fe609.js";import"./clsx.m-1229b3e0.js";import"./index-a55c3a76.js";const T={title:"Actions/Modal",component:e},h=s=>{const n=t.useRef(null),r=t.useCallback(()=>{var l;(l=n.current)==null||l.showModal()},[n]);return a("div",{className:"font-sans",children:[o(d,{onClick:r,children:"Open Modal"}),a(e,{...s,ref:n,children:[o(e.Header,{className:"font-bold",children:"Hello!"}),o(e.Body,{children:"Press ESC key or click the button below to close"}),o(e.Actions,{children:o("form",{method:"dialog",children:o(d,{children:"Close"})})})]})]})},c=s=>{const n=t.useRef(null),r=t.useCallback(()=>{var l;(l=n.current)==null||l.showModal()},[n]);return a("div",{className:"font-sans",children:[o(d,{onClick:r,children:"Open Modal"}),a(e,{...s,ref:n,children:[o(e.Header,{className:"font-bold",children:"Hello!"}),o(e.Body,{children:"Press ESC key or click outside to close"})]})]})};c.args={backdrop:!0};const u=s=>{const n=t.useRef(null),r=t.useCallback(()=>{var l;(l=n.current)==null||l.showModal()},[n]);return a("div",{className:"font-sans",children:[o(d,{onClick:r,children:"Open Modal"}),a(e,{...s,ref:n,children:[o("form",{method:"dialog",children:o(d,{size:"sm",color:"ghost",shape:"circle",className:"absolute right-2 top-2",children:"x"})}),o(e.Header,{className:"font-bold",children:"Hello!"}),o(e.Body,{children:"Press ESC key or click on X button to close"})]})]})},i=s=>{const n=t.useRef(null),r=t.useCallback(()=>{var l;(l=n.current)==null||l.showModal()},[n]);return a("div",{className:"font-sans",children:[o(d,{onClick:r,children:"Open Modal"}),a(e,{...s,ref:n,children:[o(e.Header,{className:"font-bold",children:"Hello!"}),o(e.Body,{children:"Press ESC key or click the button below to close"}),o(e.Actions,{children:o("form",{method:"dialog",children:o(d,{children:"Close"})})})]})]})};i.args={className:"w-11/12 max-w-5xl"};const m=s=>{const{Dialog:n,handleShow:r}=e.useDialog();return a("div",{className:"font-sans",children:[o(d,{onClick:r,children:"Open Modal"}),a(n,{...s,children:[o(e.Header,{className:"font-bold",children:"Hello!"}),o(e.Body,{children:"This modal works with useDialog hook!"}),o(e.Actions,{children:o("form",{method:"dialog",children:o(d,{children:"Close"})})})]})]})};var f,M,p;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
          <form method="dialog">
            <Button>Close</Button>
          </form>
        </Modal.Actions>
      </Modal>
    </div>;
}`,...(p=(M=h.parameters)==null?void 0:M.docs)==null?void 0:p.source}}};var g,k,C;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var B,w,b;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal {...args} ref={ref}>
        <form method="dialog">
          <Button size="sm" color="ghost" shape="circle" className="absolute right-2 top-2">
            x
          </Button>
        </form>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click on X button to close</Modal.Body>
      </Modal>
    </div>;
}`,...(b=(w=u.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var H,S,y;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
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
          <form method="dialog">
            <Button>Close</Button>
          </form>
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
          <form method="dialog">
            <Button>Close</Button>
          </form>
        </Modal.Actions>
      </Dialog>
    </div>;
}`,...(v=(D=m.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const L=["Default","ClickedOutside","CloseButton","CustomWidth","UseDialogHook"];export{c as ClickedOutside,u as CloseButton,i as CustomWidth,h as Default,m as UseDialogHook,L as __namedExportsOrder,T as default};
