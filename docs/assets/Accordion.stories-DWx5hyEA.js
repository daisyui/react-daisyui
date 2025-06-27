import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as J}from"./iframe-DDnXVYpC.js";import{c as M}from"./clsx-B-dksMZM.js";import{t as S}from"./bundle-mjs-yGZq-iow.js";import{C as D,a as W}from"./CollapseContent-CGPqZTWi.js";import{J as q}from"./Join-C8mVsF_m.js";const s=J.forwardRef(({name:o="accordion",icon:d,dataTheme:w,className:b,children:B,...G},_)=>{const y=S("collapse",M({"collapse-arrow":d==="arrow","collapse-plus":d==="plus"}),b);return e.jsxs("div",{"data-theme":w,className:y,children:[e.jsx("input",{...G,ref:_,type:"radio",name:o}),B]})});s.displayName="Accordion";const n=Object.assign(s,{Title:W,Content:D});try{s.displayName="Accordion",s.__docgenInfo={description:"",displayName:"Accordion",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},name:{defaultValue:{value:"accordion"},description:"",name:"name",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow"'},{value:'"plus"'}]}}}}}catch{}const I={title:"Data Display/Accordion",component:n},c=o=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(n,{...o,defaultChecked:!0,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]})]});c.args={className:"bg-base-200"};const t=o=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(n,{...o,defaultChecked:!0,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]})]});t.args={className:"bg-base-200",icon:"arrow"};const l=o=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(n,{...o,defaultChecked:!0,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]})]});l.args={className:"bg-base-200",icon:"plus"};const r=o=>e.jsxs(q,{className:"w-full",vertical:!0,children:[e.jsxs(n,{...o,defaultChecked:!0,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]})]});r.args={className:"border border-base-300 join-item",icon:"arrow"};const i=o=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(n,{...o,defaultChecked:!0,name:"groupA",children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Group A"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,name:"groupA",children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Group A"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,name:"groupA",children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Group A"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(n,{...o,defaultChecked:!0,name:"groupB",children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Group B"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,name:"groupB",children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Group B"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]}),e.jsxs(n,{...o,name:"groupB",children:[e.jsx(n.Title,{className:"text-xl font-medium",children:"Group B"}),e.jsx(n.Content,{children:e.jsx("p",{children:"hello"})})]})]})]});i.args={className:"bg-base-200"};var a,m,h;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <div className="flex flex-wrap gap-2">
      <Accordion {...args} defaultChecked>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
    </div>;
}`,...(h=(m=c.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,x,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <div className="flex flex-wrap gap-2">
      <Accordion {...args} defaultChecked>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
    </div>;
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var A,C,f;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <div className="flex flex-wrap gap-2">
      <Accordion {...args} defaultChecked>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
    </div>;
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var j,T,N;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <Join className="w-full" vertical={true}>
      <Accordion {...args} defaultChecked>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
      <Accordion {...args}>
        <Accordion.Title className="text-xl font-medium">
          Click to open this one and close others
        </Accordion.Title>
        <Accordion.Content>
          <p>hello</p>
        </Accordion.Content>
      </Accordion>
    </Join>;
}`,...(N=(T=r.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var g,k,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <>
      <div className="flex flex-wrap gap-2">
        <Accordion {...args} defaultChecked name="groupA">
          <Accordion.Title className="text-xl font-medium">
            Group A
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
        <Accordion {...args} name="groupA">
          <Accordion.Title className="text-xl font-medium">
            Group A
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
        <Accordion {...args} name="groupA">
          <Accordion.Title className="text-xl font-medium">
            Group A
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
      </div>
      <div className="flex flex-wrap gap-2">
        <Accordion {...args} defaultChecked name="groupB">
          <Accordion.Title className="text-xl font-medium">
            Group B
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
        <Accordion {...args} name="groupB">
          <Accordion.Title className="text-xl font-medium">
            Group B
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
        <Accordion {...args} name="groupB">
          <Accordion.Title className="text-xl font-medium">
            Group B
          </Accordion.Title>
          <Accordion.Content>
            <p>hello</p>
          </Accordion.Content>
        </Accordion>
      </div>
    </>;
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const $=["Default","WithArrow","WithPlusMinus","AndJoinTogether","Multiple"];export{r as AndJoinTogether,c as Default,i as Multiple,t as WithArrow,l as WithPlusMinus,$ as __namedExportsOrder,I as default};
