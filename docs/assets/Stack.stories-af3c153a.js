import{t as A,a as e,j as t}from"./tw-merge-e8a1af18.js";import{r as Y}from"./index-f1f749bf.js";import{C as a}from"./index-6c96d66c.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";const m=Y.forwardRef(({dataTheme:r,className:T,children:v,..._},I)=>{const D=A("stack",T);return e("div",{"aria-label":"Stack",..._,ref:I,"data-theme":r,className:D,children:v})});m.displayName="Stack";const s=m;try{m.displayName="Stack",m.__docgenInfo={description:"",displayName:"Stack",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Layout/Stack",component:s},d=r=>t(s,{...r,children:[e("div",{className:"grid w-32 h-20 rounded bg-primary text-primary-content place-content-center",children:"1"}),e("div",{className:"grid w-32 h-20 rounded bg-accent text-accent-content place-content-center",children:"2"}),e("div",{className:"grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center",children:"3"})]}),n=r=>t(s,{...r,children:[e("img",{src:"https://api.lorem.space/image/face?w=100&h=100&hash=8B7BCDC2",alt:"Image 1",className:"rounded"}),e("img",{src:"https://api.lorem.space/image/face?w=100&h=100&hash=500B67FB",alt:"Image 2",className:"rounded"}),e("img",{src:"https://api.lorem.space/image/face?w=100&h=100&hash=A89D0DE6",alt:"Image 3",className:"rounded"})]}),c=r=>t(s,{...r,children:[e(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e(a.Body,{children:"A"})}),e(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e(a.Body,{children:"B"})}),e(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e(a.Body,{children:"C"})})]}),o=r=>t(s,{...r,children:[e(a,{className:"text-center shadow-md w-36 bg-base-200",children:e(a.Body,{children:"A"})}),e(a,{className:"text-center shadow-md w-36 bg-base-200",children:e(a.Body,{children:"B"})}),e(a,{className:"text-center shadow-md w-36 bg-base-200",children:e(a.Body,{children:"C"})})]}),i=r=>t(s,{...r,children:[e(a,{className:"text-center shadow-md bg-primary text-primary-content",children:t(a.Body,{children:[e(a.Title,{children:"Notification 1"}),e("p",{children:"You have 3 unread messages. Tap here to see."})]})}),e(a,{className:"text-center shadow-md bg-primary text-primary-content",children:t(a.Body,{children:[e(a.Title,{children:"Notification 2"}),e("p",{children:"You have 3 unread messages. Tap here to see."})]})}),e(a,{className:"text-center shadow-md bg-primary text-primary-content",children:t(a.Body,{children:[e(a.Title,{children:"Notification 3"}),e("p",{children:"You have 3 unread messages. Tap here to see."})]})})]});d.args={};var l,h,p;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(p=(h=d.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,u,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <Stack {...args}>
      <img src="https://api.lorem.space/image/face?w=100&h=100&hash=8B7BCDC2" alt="Image 1" className="rounded" />
      <img src="https://api.lorem.space/image/face?w=100&h=100&hash=500B67FB" alt="Image 2" className="rounded" />
      <img src="https://api.lorem.space/image/face?w=100&h=100&hash=A89D0DE6" alt="Image 3" className="rounded" />
    </Stack>;
}`,...(C=(u=n.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var b,y,B;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var w,N,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
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
}`,...(x=(N=o.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var S,k,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
}`,...(f=(k=i.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const M=["Default","StackedImages","StackedCardsWithBorder","StackedCardsWithShadow","StackedCards"];export{d as Default,i as StackedCards,c as StackedCardsWithBorder,o as StackedCardsWithShadow,n as StackedImages,M as __namedExportsOrder,L as default};
//# sourceMappingURL=Stack.stories-af3c153a.js.map
