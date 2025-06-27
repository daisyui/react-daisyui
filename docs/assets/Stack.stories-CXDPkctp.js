import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as I}from"./iframe-DDnXVYpC.js";import{c as Y}from"./clsx-B-dksMZM.js";import{t as A}from"./bundle-mjs-yGZq-iow.js";import{C as a}from"./index-DIaYqioD.js";const t=I.forwardRef(({position:r="bottom",dataTheme:B,className:S,children:f,...v},T)=>{const _=A("stack",S,Y({"stack-end":r==="end","stack-start":r==="start","stack-top":r==="top","stack-bottom":r==="bottom"}));return e.jsx("div",{"aria-label":"Stack",...v,ref:T,"data-theme":B,className:_,children:f})});t.displayName="Stack";try{t.displayName="Stack",t.__docgenInfo={description:"",displayName:"Stack",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},position:{defaultValue:{value:"bottom"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}const V={title:"Layout/Stack",component:t},s=r=>e.jsxs(t,{...r,children:[e.jsx("div",{className:"grid w-32 h-20 rounded bg-primary text-primary-content place-content-center",children:"1"}),e.jsx("div",{className:"grid w-32 h-20 rounded bg-accent text-accent-content place-content-center",children:"2"}),e.jsx("div",{className:"grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center",children:"3"})]}),d=r=>e.jsxs(t,{...r,children:[e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",alt:"Image 1",className:"rounded"}),e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",alt:"Image 2",className:"rounded"}),e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",alt:"Image 3",className:"rounded"})]}),n=r=>e.jsxs(t,{...r,children:[e.jsx(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e.jsx(a.Body,{children:"A"})}),e.jsx(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e.jsx(a.Body,{children:"B"})}),e.jsx(a,{className:"text-center border border-base-content w-36 bg-base-100",children:e.jsx(a.Body,{children:"C"})})]}),c=r=>e.jsxs(t,{...r,children:[e.jsx(a,{className:"text-center shadow-md w-36 bg-base-200",children:e.jsx(a.Body,{children:"A"})}),e.jsx(a,{className:"text-center shadow-md w-36 bg-base-200",children:e.jsx(a.Body,{children:"B"})}),e.jsx(a,{className:"text-center shadow-md w-36 bg-base-200",children:e.jsx(a.Body,{children:"C"})})]}),o=r=>e.jsxs(t,{...r,children:[e.jsx(a,{className:"text-center shadow-md bg-primary text-primary-content",children:e.jsxs(a.Body,{children:[e.jsx(a.Title,{children:"Notification 1"}),e.jsx("p",{children:"You have 3 unread messages. Tap here to see."})]})}),e.jsx(a,{className:"text-center shadow-md bg-primary text-primary-content",children:e.jsxs(a.Body,{children:[e.jsx(a.Title,{children:"Notification 2"}),e.jsx("p",{children:"You have 3 unread messages. Tap here to see."})]})}),e.jsx(a,{className:"text-center shadow-md bg-primary text-primary-content",children:e.jsxs(a.Body,{children:[e.jsx(a.Title,{children:"Notification 3"}),e.jsx("p",{children:"You have 3 unread messages. Tap here to see."})]})})]});s.args={};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,h,g;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <Stack {...args}>
      <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Image 1" className="rounded" />
      <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Image 2" className="rounded" />
      <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Image 3" className="rounded" />
    </Stack>;
}`,...(g=(h=d.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,b,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,C,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var N,j,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const L=["Default","StackedImages","StackedCardsWithBorder","StackedCardsWithShadow","StackedCards"];export{s as Default,o as StackedCards,n as StackedCardsWithBorder,c as StackedCardsWithShadow,d as StackedImages,L as __namedExportsOrder,V as default};
