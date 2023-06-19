import{t as Y,j as e,a as t}from"./tw-merge-e2243cb0.js";import{r as A}from"./index-ebeaab24.js";import{C as a}from"./index-587fb902.js";import"./clsx.m-1229b3e0.js";const m=A.forwardRef(({dataTheme:r,className:T,children:v,..._},j)=>{const I=Y("stack",T);return e("div",{"aria-label":"Stack",..._,ref:j,"data-theme":r,className:I,children:v})});m.displayName="Stack";const s=m;try{m.displayName="Stack",m.__docgenInfo={description:"",displayName:"Stack",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Layout/Stack",component:s},d=r=>t(s,{...r,children:[e("div",{className:"grid w-32 h-20 rounded bg-primary text-primary-content place-content-center",children:"1"}),e("div",{className:"grid w-32 h-20 rounded bg-accent text-accent-content place-content-center",children:"2"}),e("div",{className:"grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center",children:"3"})]}),n=r=>t(s,{...r,children:[e("img",{src:"https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",alt:"Image 1",className:"rounded"}),e("img",{src:"https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",alt:"Image 2",className:"rounded"}),e("img",{src:"https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",alt:"Image 3",className:"rounded"})]}),c=r=>t(s,{...r,children:[e(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e(a.Body,{children:"A"})}),e(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e(a.Body,{children:"B"})}),e(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e(a.Body,{children:"C"})})]}),o=r=>t(s,{...r,children:[e(a,{className:"text-center shadow-md w-36 bg-base-200",children:e(a.Body,{children:"A"})}),e(a,{className:"text-center shadow-md w-36 bg-base-200",children:e(a.Body,{children:"B"})}),e(a,{className:"text-center shadow-md w-36 bg-base-200",children:e(a.Body,{children:"C"})})]}),i=r=>t(s,{...r,children:[e(a,{className:"text-center shadow-md bg-primary text-primary-content",children:t(a.Body,{children:[e(a.Title,{children:"Notification 1"}),e("p",{children:"You have 3 unread messages. Tap here to see."})]})}),e(a,{className:"text-center shadow-md bg-primary text-primary-content",children:t(a.Body,{children:[e(a.Title,{children:"Notification 2"}),e("p",{children:"You have 3 unread messages. Tap here to see."})]})}),e(a,{className:"text-center shadow-md bg-primary text-primary-content",children:t(a.Body,{children:[e(a.Title,{children:"Notification 3"}),e("p",{children:"You have 3 unread messages. Tap here to see."})]})})]});d.args={};var l,p,h;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return <Stack {...args}>
      <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
        1
      </div>
      <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
        2
      </div>
      <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
        3
      </div>
    </Stack>;
}`,...(h=(p=d.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,u,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <Stack {...args}>
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Image 1" className="rounded" />
      <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Image 2" className="rounded" />
      <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Image 3" className="rounded" />
    </Stack>;
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,C,N;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Stack {...args}>
      <Card className="text-center border border-base-content w-36 bg-base-100">
        <Card.Body>A</Card.Body>
      </Card>
      <Card className="text-center border border-base-content w-36 bg-base-100">
        <Card.Body>B</Card.Body>
      </Card>
      <Card className="text-center border border-base-content w-36 bg-base-100">
        <Card.Body>C</Card.Body>
      </Card>
    </Stack>;
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var x,w,k;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Stack {...args}>
      <Card className="text-center shadow-md w-36 bg-base-200">
        <Card.Body>A</Card.Body>
      </Card>
      <Card className="text-center shadow-md w-36 bg-base-200">
        <Card.Body>B</Card.Body>
      </Card>
      <Card className="text-center shadow-md w-36 bg-base-200">
        <Card.Body>C</Card.Body>
      </Card>
    </Stack>;
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var B,S,f;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <Stack {...args}>
      <Card className="text-center shadow-md bg-primary text-primary-content">
        <Card.Body>
          <Card.Title>Notification 1</Card.Title>
          <p>You have 3 unread messages. Tap here to see.</p>
        </Card.Body>
      </Card>
      <Card className="text-center shadow-md bg-primary text-primary-content">
        <Card.Body>
          <Card.Title>Notification 2</Card.Title>
          <p>You have 3 unread messages. Tap here to see.</p>
        </Card.Body>
      </Card>
      <Card className="text-center shadow-md bg-primary text-primary-content">
        <Card.Body>
          <Card.Title>Notification 3</Card.Title>
          <p>You have 3 unread messages. Tap here to see.</p>
        </Card.Body>
      </Card>
    </Stack>;
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const M=["Default","StackedImages","StackedCardsWithBorder","StackedCardsWithShadow","StackedCards"];export{d as Default,i as StackedCards,c as StackedCardsWithBorder,o as StackedCardsWithShadow,n as StackedImages,M as __namedExportsOrder,L as default};
//# sourceMappingURL=Stack.stories-bb6b7072.js.map
