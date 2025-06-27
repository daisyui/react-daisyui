import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./iframe-DDnXVYpC.js";import{M as e}from"./index-CUE0XAQJ.js";import{B as r}from"./Button-GtH5nISf.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-yGZq-iow.js";import"./index-Dl-l57lR.js";const P={title:"Actions/Modal",component:e},i=l=>{const s=t.useRef(null),a=t.useCallback(()=>{var n;(n=s.current)==null||n.showModal()},[s]);return o.jsxs("div",{className:"font-sans",children:[o.jsx(r,{onClick:a,children:"Open Modal"}),o.jsxs(e,{...l,ref:s,children:[o.jsx(e.Header,{className:"font-bold",children:"Hello!"}),o.jsx(e.Body,{children:"Press ESC key or click the button below to close"}),o.jsx(e.Actions,{children:o.jsx("form",{method:"dialog",children:o.jsx(r,{children:"Close"})})})]})]})},d=l=>{const s=t.useRef(null),a=t.useCallback(()=>{var n;(n=s.current)==null||n.showModal()},[s]);return o.jsxs("div",{className:"font-sans",children:[o.jsx(r,{onClick:a,children:"Open Modal"}),o.jsxs(e,{...l,ref:s,children:[o.jsx(e.Header,{className:"font-bold",children:"Hello!"}),o.jsx(e.Body,{children:"Press ESC key or click outside to close"})]})]})};d.args={backdrop:!0};const u=l=>{const s=t.useRef(null),a=t.useCallback(()=>{var n;(n=s.current)==null||n.showModal()},[s]);return o.jsxs("div",{className:"font-sans",children:[o.jsx(r,{onClick:a,children:"Open Modal"}),o.jsxs(e,{...l,ref:s,children:[o.jsx("form",{method:"dialog",children:o.jsx(r,{size:"sm",color:"ghost",shape:"circle",className:"absolute right-2 top-2",children:"x"})}),o.jsx(e.Header,{className:"font-bold",children:"Hello!"}),o.jsx(e.Body,{children:"Press ESC key or click on X button to close"})]})]})},c=l=>{const s=t.useRef(null),a=t.useCallback(()=>{var n;(n=s.current)==null||n.showModal()},[s]);return o.jsxs("div",{className:"font-sans",children:[o.jsx(r,{onClick:a,children:"Open Modal"}),o.jsxs(e,{...l,ref:s,children:[o.jsx(e.Header,{className:"font-bold",children:"Hello!"}),o.jsx(e.Body,{children:"Press ESC key or click the button below to close"}),o.jsx(e.Actions,{children:o.jsx("form",{method:"dialog",children:o.jsx(r,{children:"Close"})})})]})]})};c.args={className:"w-11/12 max-w-5xl"};const h=l=>{const{Dialog:s,handleShow:a}=e.useDialog();return o.jsxs("div",{className:"font-sans",children:[o.jsx(r,{onClick:a,children:"Open Modal"}),o.jsxs(s,{...l,children:[o.jsx(e.Header,{className:"font-bold",children:"Hello!"}),o.jsx(e.Body,{children:"This modal works with useDialog hook!"}),o.jsx(e.Actions,{children:o.jsx("form",{method:"dialog",children:o.jsx(r,{children:"Close"})})})]})]})};var m,f,M;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var p,x,g;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var k,j,C;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var B,w,b;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
}`,...(b=(w=c.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var H,S,y;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
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
}`,...(y=(S=h.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const T=["Default","ClickedOutside","CloseButton","CustomWidth","UseDialogHook"];export{d as ClickedOutside,u as CloseButton,c as CustomWidth,i as Default,h as UseDialogHook,T as __namedExportsOrder,P as default};
