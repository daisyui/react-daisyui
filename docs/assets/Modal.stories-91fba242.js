import{t as b,a as e,j as r}from"./tw-merge-e8a1af18.js";import{R as v,r as c}from"./index-f1f749bf.js";import{c as T}from"./clsx.m-1229b3e0.js";import{B as n}from"./index-e215d0b1.js";import"./_commonjsHelpers-042e6b4d.js";const g=v.forwardRef(({children:a,className:o,...l},s)=>{const i=b("modal-action",o);return e("div",{...l,className:i,ref:s,children:a})});g.displayName="ModalActions";const j=g;try{g.displayName="ModalActions",g.__docgenInfo={description:"",displayName:"ModalActions",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const y=v.forwardRef(({children:a,className:o,...l},s)=>e("div",{...l,className:o,ref:s,children:a}));y.displayName="ModalBody";const $=y;try{y.displayName="ModalBody",y.__docgenInfo={description:"",displayName:"ModalBody",props:{}}}catch{}const M=v.forwardRef(({children:a,className:o,...l},s)=>{const i=b("w-full mb-8 text-xl",o);return e("div",{...l,className:i,ref:s,children:a})});M.displayName="ModalHeader";const z=M;try{M.displayName="ModalHeader",M.__docgenInfo={description:"",displayName:"ModalHeader",props:{}}}catch{}const h=c.forwardRef(({children:a,open:o,responsive:l,onClickBackdrop:s,dataTheme:i,className:x,...W},q)=>{const w=b("modal",T({"modal-open":o,"modal-bottom sm:modal-middle":l})),R=b("modal-box",x);return e("div",{"aria-label":"Modal","aria-hidden":!o,"aria-modal":o,"data-theme":i,className:w,onClick:u=>{u.stopPropagation(),u.target===u.currentTarget&&(u.stopPropagation(),s&&s())},children:e("div",{...W,"data-theme":i,className:R,ref:q,children:a})})});h.displayName="Modal";const t=Object.assign(h,{Header:z,Body:$,Actions:j});try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean"}},onClickBackdrop:{defaultValue:null,description:"",name:"onClickBackdrop",required:!1,type:{name:"(() => void)"}}}}}catch{}try{t.displayName="Modal",t.__docgenInfo={description:"",displayName:"Modal",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean"}},onClickBackdrop:{defaultValue:null,description:"",name:"onClickBackdrop",required:!1,type:{name:"(() => void)"}}}}}catch{}const J={title:"Actions/Modal",component:t},p=a=>{const[o,l]=c.useState(!1),s=()=>{l(!o)};return r("div",{className:"font-sans",children:[e(n,{onClick:s,children:"Open Modal"}),r(t,{...a,open:o,children:[e(t.Header,{className:"font-bold",children:"Congratulations random Interner user!"}),e(t.Body,{children:"You've been selected for a chance to get one year of subscription to use Wikipedia for free!"}),e(t.Actions,{children:e(n,{onClick:s,children:"Yay!"})})]})]})},m=a=>{const[o,l]=c.useState(!1),s=()=>{l(!o)};return r("div",{className:"font-sans",children:[e(n,{onClick:s,children:"Open Modal"}),r(t,{...a,open:o,children:[e(n,{size:"sm",shape:"circle",className:"absolute right-2 top-2",onClick:s,children:"✕"}),e(t.Header,{className:"font-bold",children:"Congratulations random Interner user!"}),e(t.Body,{children:"You've been selected for a chance to get one year of subscription to use Wikipedia for free!"})]})]})},f=a=>{const[o,l]=c.useState(!1),s=()=>{l(!o)};return r("div",{className:"font-sans",children:[e(n,{onClick:s,children:"Open Modal"}),r(t,{...a,open:o,onClickBackdrop:s,children:[e(t.Header,{className:"font-bold",children:"Congratulations random Interner user!"}),e(t.Body,{children:"You've been selected for a chance to get one year of subscription to use Wikipedia for free!"})]})]})},d=a=>{const[o,l]=c.useState(!1),s=()=>{l(!o)};return r("div",{className:"font-sans",children:[e(n,{onClick:s,children:"Open Modal"}),r(t,{...a,open:o,children:[e(t.Header,{className:"font-bold",children:"Congratulations random Interner user!"}),e(t.Body,{children:"You've been selected for a chance to get one year of subscription to use Wikipedia for free!"}),e(t.Actions,{children:e(n,{onClick:s,children:"Yay!"})})]})]})};d.args={className:"w-11/12 max-w-5xl"};var _,B,N;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible}>
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Yay!</Button>
        </Modal.Actions>
      </Modal>
    </div>;
}`,...(N=(B=p.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var V,C,k;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible}>
        <Button size="sm" shape="circle" className="absolute right-2 top-2" onClick={toggleVisible}>
          ✕
        </Button>
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>
      </Modal>
    </div>;
}`,...(k=(C=m.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var H,A,I;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible} onClickBackdrop={toggleVisible}>
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>
      </Modal>
    </div>;
}`,...(I=(A=f.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,S,Y;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return <div className="font-sans">
      <Button onClick={toggleVisible}>Open Modal</Button>
      <Modal {...args} open={visible}>
        <Modal.Header className="font-bold">
          Congratulations random Interner user!
        </Modal.Header>

        <Modal.Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Modal.Body>

        <Modal.Actions>
          <Button onClick={toggleVisible}>Yay!</Button>
        </Modal.Actions>
      </Modal>
    </div>;
}`,...(Y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:Y.source}}};const K=["Default","CloseButton","ClickedOutside","CustomWidth"];export{f as ClickedOutside,m as CloseButton,d as CustomWidth,p as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Modal.stories-91fba242.js.map
