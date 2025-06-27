import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as D,e as k}from"./iframe-DDnXVYpC.js";import{t as W}from"./bundle-mjs-yGZq-iow.js";import{c as A}from"./clsx-B-dksMZM.js";const $=D.forwardRef(({dataPrefix:a,dataTheme:u,status:n,className:p,children:l,innerProps:m,innerRef:M,...g},L)=>{const f=W(A({"bg-info":n==="info","bg-success":n==="success","bg-warning":n==="warning","bg-error":n==="error","text-info-content":n==="info","text-success-content":n==="success","text-warning-content":n==="warning","text-error-content":n==="error"}),p),O={...g,className:f,...a!==!1&&{"data-prefix":a||">"}};return r.jsx("pre",{...O,"data-theme":u,className:f,ref:L,children:r.jsx("code",{...m,ref:M,children:l})})});$.displayName="CodeMockup.Line";try{CodeMockup.Line.displayName="CodeMockup.Line",CodeMockup.Line.__docgenInfo={description:"",displayName:"CodeMockup.Line",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},dataPrefix:{defaultValue:null,description:"",name:"dataPrefix",required:!1,type:{name:"string | boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},innerProps:{defaultValue:null,description:"",name:"innerProps",required:!1,type:{name:"HTMLAttributes<HTMLElement>"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const I=D.forwardRef(({dataTheme:a,className:u,children:n,...p},l)=>{const m=W("mockup-code",u);return r.jsx("div",{"aria-label":"Code mockup",...p,"data-theme":a,className:m,ref:l,children:k.Children.map(n,(M,g)=>{const L=M;return k.cloneElement(L,{key:g})})})});I.displayName="CodeMockup";const e=Object.assign(I,{Line:$});try{e.displayName="CodeMockupNamespace",e.__docgenInfo={description:"",displayName:"CodeMockupNamespace",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Mockup/CodeMockup",component:e,subcomponents:{"CodeMockup.Line":e.Line},parameters:{controls:{expanded:!0}}},o=a=>r.jsx(e,{...a,children:r.jsx(e.Line,{children:"yarn add daisyui react-daisyui"})}),s=a=>r.jsx(e,{...a,children:r.jsx(e.Line,{dataPrefix:"$",children:"yarn add daisyui react-daisyui"})}),i=a=>r.jsxs(e,{...a,children:[r.jsx(e.Line,{children:"yarn add daisyui react-daisyui"}),r.jsx(e.Line,{className:"text-warning",children:"installing..."}),r.jsx(e.Line,{className:"text-success",children:"Done!"})]}),t=a=>r.jsxs(e,{...a,children:[r.jsx(e.Line,{children:"yarn add daisyui react-daisyui"}),r.jsx(e.Line,{children:"installing..."}),r.jsx(e.Line,{status:"warning",children:"Error!"})]}),c=a=>r.jsx(e,{...a,children:r.jsx(e.Line,{dataPrefix:"~",children:"Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione."})}),d=a=>r.jsx(e,{...a,children:r.jsx(e.Line,{dataPrefix:!1,children:"without prefix"})});var x,C,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <CodeMockup {...args}>
      <CodeMockup.Line>yarn add daisyui react-daisyui</CodeMockup.Line>
    </CodeMockup>;
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var h,j,_;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <CodeMockup {...args}>
      <CodeMockup.Line dataPrefix="$">
        yarn add daisyui react-daisyui
      </CodeMockup.Line>
    </CodeMockup>;
}`,...(_=(j=s.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var N,w,P;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <CodeMockup {...args}>
      <CodeMockup.Line>yarn add daisyui react-daisyui</CodeMockup.Line>
      <CodeMockup.Line className="text-warning">installing...</CodeMockup.Line>
      <CodeMockup.Line className="text-success">Done!</CodeMockup.Line>
    </CodeMockup>;
}`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var b,q,E;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <CodeMockup {...args}>
      <CodeMockup.Line>yarn add daisyui react-daisyui</CodeMockup.Line>
      <CodeMockup.Line>installing...</CodeMockup.Line>
      <CodeMockup.Line status="warning">Error!</CodeMockup.Line>
    </CodeMockup>;
}`,...(E=(q=t.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var S,T,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <CodeMockup {...args}>
      <CodeMockup.Line dataPrefix="~">
        Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui
        et et dolore ratione.
      </CodeMockup.Line>
    </CodeMockup>;
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var R,V,H;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <CodeMockup {...args}>
      <CodeMockup.Line dataPrefix={false}>without prefix</CodeMockup.Line>
    </CodeMockup>;
}`,...(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const K=["Default","LinePrefix","MultiLine","HighlightedLine","LongLineWithScroll","WithoutPrefix"];export{o as Default,t as HighlightedLine,s as LinePrefix,c as LongLineWithScroll,i as MultiLine,d as WithoutPrefix,K as __namedExportsOrder,J as default};
