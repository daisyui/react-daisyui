import{t as W,j as e,a as t}from"./tw-merge-4486aaf0.js";import{r as j}from"./index-f46741a2.js";import{c as q}from"./clsx.m-1229b3e0.js";import{C as a}from"./index-3582c853.js";const m=j.forwardRef(({position:r="bottom",dataTheme:v,className:T,children:_,...I},Y)=>{const A=W("stack",T,q({"stack-end":r==="end","stack-start":r==="start","stack-top":r==="top","stack-bottom":r==="bottom"}));return e("div",{"aria-label":"Stack",...I,ref:Y,"data-theme":v,className:A,children:_})});m.displayName="Stack";const s=m;try{m.displayName="Stack",m.__docgenInfo={description:"",displayName:"Stack",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},position:{defaultValue:{value:"bottom"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"end"'},{value:'"start"'}]}}}}}catch{}const M={title:"Layout/Stack",component:s},d=r=>t(s,{...r,children:[e("div",{className:"grid w-32 h-20 rounded bg-primary text-primary-content place-content-center",children:"1"}),e("div",{className:"grid w-32 h-20 rounded bg-accent text-accent-content place-content-center",children:"2"}),e("div",{className:"grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center",children:"3"})]}),n=r=>t(s,{...r,children:[e("img",{src:"https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",alt:"Image 1",className:"rounded"}),e("img",{src:"https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",alt:"Image 2",className:"rounded"}),e("img",{src:"https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",alt:"Image 3",className:"rounded"})]}),c=r=>t(s,{...r,children:[e(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e(a.Body,{children:"A"})}),e(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e(a.Body,{children:"B"})}),e(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e(a.Body,{children:"C"})})]}),o=r=>t(s,{...r,children:[e(a,{className:"text-center shadow-md w-36 bg-base-200",children:e(a.Body,{children:"A"})}),e(a,{className:"text-center shadow-md w-36 bg-base-200",children:e(a.Body,{children:"B"})}),e(a,{className:"text-center shadow-md w-36 bg-base-200",children:e(a.Body,{children:"C"})})]}),i=r=>t(s,{...r,children:[e(a,{className:"text-center shadow-md bg-primary text-primary-content",children:t(a.Body,{children:[e(a.Title,{children:"Notification 1"}),e("p",{children:"You have 3 unread messages. Tap here to see."})]})}),e(a,{className:"text-center shadow-md bg-primary text-primary-content",children:t(a.Body,{children:[e(a.Title,{children:"Notification 2"}),e("p",{children:"You have 3 unread messages. Tap here to see."})]})}),e(a,{className:"text-center shadow-md bg-primary text-primary-content",children:t(a.Body,{children:[e(a.Title,{children:"Notification 3"}),e("p",{children:"You have 3 unread messages. Tap here to see."})]})})]});d.args={};var l,p,h;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
      <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Image 1" className="rounded" />
      <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Image 2" className="rounded" />
      <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Image 3" className="rounded" />
    </Stack>;
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,C,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var N,k,x;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var B,S,f;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const O=["Default","StackedImages","StackedCardsWithBorder","StackedCardsWithShadow","StackedCards"];export{d as Default,i as StackedCards,c as StackedCardsWithBorder,o as StackedCardsWithShadow,n as StackedImages,O as __namedExportsOrder,M as default};
