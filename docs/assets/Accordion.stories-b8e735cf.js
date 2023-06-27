import{t as M,a as o,j as e,F as S}from"./tw-merge-e2243cb0.js";import{r as D}from"./index-ebeaab24.js";import{c as W}from"./clsx.m-1229b3e0.js";import{C as q,a as V}from"./CollapseContent-5f930169.js";import{J as E}from"./Join-4384c6dd.js";const a=D.forwardRef(({name:c="accordion",icon:s,dataTheme:B,className:G,children:_,...y},J)=>{const j=M("collapse",W({"collapse-arrow":s==="arrow","collapse-plus":s==="plus"}),G);return o("div",{"data-theme":B,className:j,children:[e("input",{...y,ref:J,type:"radio",name:c}),_]})});a.displayName="Accordion";const n=Object.assign(a,{Title:q,Content:V});try{a.displayName="Accordion",a.__docgenInfo={description:"",displayName:"Accordion",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},name:{defaultValue:{value:"accordion"},description:"",name:"name",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow"'},{value:'"plus"'}]}}}}}catch{}const $={title:"Data Display/Accordion",component:n},t=c=>o("div",{className:"flex flex-wrap gap-2",children:[o(n,{...c,defaultChecked:!0,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]})]});t.args={className:"bg-base-200"};const l=c=>o("div",{className:"flex flex-wrap gap-2",children:[o(n,{...c,defaultChecked:!0,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]})]});l.args={className:"bg-base-200",icon:"arrow"};const r=c=>o("div",{className:"flex flex-wrap gap-2",children:[o(n,{...c,defaultChecked:!0,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]})]});r.args={className:"bg-base-200",icon:"plus"};const i=c=>o(E,{className:"w-full",vertical:!0,children:[o(n,{...c,defaultChecked:!0,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,children:[e(n.Title,{className:"text-xl font-medium",children:"Click to open this one and close others"}),e(n.Content,{children:e("p",{children:"hello"})})]})]});i.args={className:"border border-base-300 join-item",icon:"arrow"};const d=c=>o(S,{children:[o("div",{className:"flex flex-wrap gap-2",children:[o(n,{...c,defaultChecked:!0,name:"groupA",children:[e(n.Title,{className:"text-xl font-medium",children:"Group A"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,name:"groupA",children:[e(n.Title,{className:"text-xl font-medium",children:"Group A"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,name:"groupA",children:[e(n.Title,{className:"text-xl font-medium",children:"Group A"}),e(n.Content,{children:e("p",{children:"hello"})})]})]}),o("div",{className:"flex flex-wrap gap-2",children:[o(n,{...c,defaultChecked:!0,name:"groupB",children:[e(n.Title,{className:"text-xl font-medium",children:"Group B"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,name:"groupB",children:[e(n.Title,{className:"text-xl font-medium",children:"Group B"}),e(n.Content,{children:e("p",{children:"hello"})})]}),o(n,{...c,name:"groupB",children:[e(n.Title,{className:"text-xl font-medium",children:"Group B"}),e(n.Content,{children:e("p",{children:"hello"})})]})]})]});d.args={className:"bg-base-200"};var m,h,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var u,A,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(x=(A=l.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var C,f,T;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
}`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var N,g,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var v,w,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const z=["Default","WithArrow","WithPlusMinus","AndJoinTogether","Multiple"];export{i as AndJoinTogether,t as Default,d as Multiple,l as WithArrow,r as WithPlusMinus,z as __namedExportsOrder,$ as default};
//# sourceMappingURL=Accordion.stories-b8e735cf.js.map
