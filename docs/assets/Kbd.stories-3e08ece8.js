import{t as V,j as r,F as u,a as n}from"./tw-merge-0a3648bd.js";import{r as z}from"./index-1b03fe98.js";import{c as B}from"./clsx.m-1229b3e0.js";const b=z.forwardRef(({children:e,size:s,dataTheme:T,className:A,...C},D)=>{const I=V("kbd",A,B({"kbd-lg":s==="lg","kbd-md":s==="md","kbd-sm":s==="sm","kbd-xs":s==="xs"}));return r("kbd",{...C,"data-theme":T,className:I,ref:D,children:e})}),d=b;try{b.displayName="Kbd",b.__docgenInfo={description:"",displayName:"Kbd",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}try{d.displayName="Kbd",d.__docgenInfo={description:"",displayName:"Kbd",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}}}}}catch{}const R={title:"Data Display/Kbd",component:d},l=e=>r(u,{children:r(d,{...e,children:"A"})}),a=e=>n("div",{className:"font-sans",children:["Press ",r(d,{...e,children:"F"})," to pay respects."]});a.args={};const c=e=>n(u,{children:[r(d,{...e,children:"ctrl"}),"+",r(d,{...e,children:"shift"}),"+",r(d,{...e,children:"del"})]}),t=e=>n(u,{children:[r(d,{...e,children:"⌘"}),r(d,{...e,children:"⌥"}),r(d,{...e,children:"⇧"}),r(d,{...e,children:"⌃"})]}),i=e=>n("div",{className:"overflow-x-auto",children:[n("div",{className:"flex justify-center gap-1 w-full",children:[r(d,{...e,children:"q"}),r(d,{...e,children:"w"}),r(d,{...e,children:"e"}),r(d,{...e,children:"r"}),r(d,{...e,children:"t"}),r(d,{...e,children:"y"}),r(d,{...e,children:"u"}),r(d,{...e,children:"i"}),r(d,{...e,children:"o"}),r(d,{...e,children:"p"})]}),n("div",{className:"flex justify-center gap-1 my-1 w-full",children:[r(d,{...e,children:"a"}),r(d,{...e,children:"s"}),r(d,{...e,children:"d"}),r(d,{...e,children:"f"}),r(d,{...e,children:"g"}),r(d,{...e,children:"h"}),r(d,{...e,children:"j"}),r(d,{...e,children:"k"}),r(d,{...e,children:"l"})]}),n("div",{className:"flex justify-center gap-1 my-1 w-full",children:[r(d,{...e,children:"z"}),r(d,{...e,children:"x"}),r(d,{...e,children:"c"}),r(d,{...e,children:"v"}),r(d,{...e,children:"b"}),r(d,{...e,children:"n"}),r(d,{...e,children:"m"}),r(d,{...e,children:"/"})]})]}),o=e=>n(u,{children:[r("div",{className:"flex justify-center w-full",children:r(d,{...e,children:"▲"})}),n("div",{className:"flex justify-center gap-12 w-full",children:[r(d,{...e,children:"◀︎"}),r(d,{...e,children:"▶︎"})]}),r("div",{className:"flex justify-center w-full",children:r(d,{...e,children:"▼"})})]});var K,m,p;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <>
      <Kbd {...args}>A</Kbd>
    </>;
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,f,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <div className="font-sans">
      Press <Kbd {...args}>F</Kbd> to pay respects.
    </div>;
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,v,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <>
      <Kbd {...args}>ctrl</Kbd>+<Kbd {...args}>shift</Kbd>+
      <Kbd {...args}>del</Kbd>
    </>;
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var N,w,_;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <>
      <Kbd {...args}>⌘</Kbd>
      <Kbd {...args}>⌥</Kbd>
      <Kbd {...args}>⇧</Kbd>
      <Kbd {...args}>⌃</Kbd>
    </>;
}`,...(_=(w=t.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var j,F,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <div className="overflow-x-auto">
      <div className="flex justify-center gap-1 w-full">
        <Kbd {...args}>q</Kbd>
        <Kbd {...args}>w</Kbd>
        <Kbd {...args}>e</Kbd>
        <Kbd {...args}>r</Kbd>
        <Kbd {...args}>t</Kbd>
        <Kbd {...args}>y</Kbd>
        <Kbd {...args}>u</Kbd>
        <Kbd {...args}>i</Kbd>
        <Kbd {...args}>o</Kbd>
        <Kbd {...args}>p</Kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <Kbd {...args}>a</Kbd>
        <Kbd {...args}>s</Kbd>
        <Kbd {...args}>d</Kbd>
        <Kbd {...args}>f</Kbd>
        <Kbd {...args}>g</Kbd>
        <Kbd {...args}>h</Kbd>
        <Kbd {...args}>j</Kbd>
        <Kbd {...args}>k</Kbd>
        <Kbd {...args}>l</Kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <Kbd {...args}>z</Kbd>
        <Kbd {...args}>x</Kbd>
        <Kbd {...args}>c</Kbd>
        <Kbd {...args}>v</Kbd>
        <Kbd {...args}>b</Kbd>
        <Kbd {...args}>n</Kbd>
        <Kbd {...args}>m</Kbd>
        <Kbd {...args}>/</Kbd>
      </div>
    </div>;
}`,...(k=(F=i.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var E,q,S;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <>
      <div className="flex justify-center w-full">
        <Kbd {...args}>▲</Kbd>
      </div>
      <div className="flex justify-center gap-12 w-full">
        <Kbd {...args}>◀︎</Kbd>
        <Kbd {...args}>▶︎</Kbd>
      </div>
      <div className="flex justify-center w-full">
        <Kbd {...args}>▼</Kbd>
      </div>
    </>;
}`,...(S=(q=o.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const $=["Default","InText","KeyCombination","FunctionKeys","FullKeyboard","ArrowKeys"];export{o as ArrowKeys,l as Default,i as FullKeyboard,t as FunctionKeys,a as InText,c as KeyCombination,$ as __namedExportsOrder,R as default};
