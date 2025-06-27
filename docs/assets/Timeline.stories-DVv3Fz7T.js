import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as P,r as fe}from"./iframe-DDnXVYpC.js";import{c as _}from"./clsx-B-dksMZM.js";import{t as v}from"./bundle-mjs-yGZq-iow.js";const g=P.forwardRef(({children:i,className:l,connect:t,startClassName:r,endClassName:s,...a},A)=>e.jsxs("li",{...a,className:l,ref:A,children:[(t==="both"||t==="start")&&e.jsx("hr",{className:r}),i,(t==="both"||t==="end")&&e.jsx("hr",{className:s})]}));g.displayName="TimelineItem";try{g.displayName="TimelineItem",g.__docgenInfo={description:"",displayName:"TimelineItem",props:{connect:{defaultValue:null,description:"",name:"connect",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"start"'},{value:'"end"'}]}},startClassName:{defaultValue:null,description:"",name:"startClassName",required:!1,type:{name:"string"}},endClassName:{defaultValue:null,description:"",name:"endClassName",required:!1,type:{name:"string"}}}}}catch{}const f=P.forwardRef(({children:i,className:l,box:t,...r},s)=>{const a=v("timeline-start",_({"timeline-box":t}),l);return e.jsx("div",{...r,className:a,ref:s,children:i})});f.displayName="TimelineStart";try{f.displayName="TimelineStart",f.__docgenInfo={description:"",displayName:"TimelineStart",props:{box:{defaultValue:null,description:"",name:"box",required:!1,type:{name:"boolean"}}}}}catch{}const E=P.forwardRef(({children:i=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})}),className:l,...t},r)=>{const s=v("timeline-middle",l);return e.jsx("div",{...t,className:s,ref:r,children:i})});E.displayName="TimelineMiddle";try{E.displayName="TimelineMiddle",E.__docgenInfo={description:"",displayName:"TimelineMiddle",props:{}}}catch{}const y=P.forwardRef(({children:i,className:l,box:t=!0,...r},s)=>{const a=v("timeline-end",_({"timeline-box":t}),l);return e.jsx("div",{...r,className:a,ref:s,children:i})});y.displayName="TimelineEnd";try{y.displayName="TimelineEnd",y.__docgenInfo={description:"",displayName:"TimelineEnd",props:{box:{defaultValue:{value:"true"},description:"",name:"box",required:!1,type:{name:"boolean"}}}}}catch{}const N=fe.forwardRef(({dataTheme:i,className:l,vertical:t,horizontal:r,responsive:s,snap:a,compact:A,children:Ie,...Me},Se)=>{const ge=v("timeline",_({"timeline-vertical":t,"timeline-horizontal":r,"timeline-vertical lg:timeline-horizontal":s,"timeline-snap-icon":a,"timeline-compact":A}),l);return e.jsx("ul",{...Me,"data-theme":i,className:ge,ref:Se,children:Ie})});N.displayName="Timeline";const n=Object.assign(N,{Item:g,Start:f,Middle:E,End:y});try{N.displayName="Timeline",N.__docgenInfo={description:"",displayName:"Timeline",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean"}},snap:{defaultValue:null,description:"",name:"snap",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}}}}}catch{}const ve={title:"Data Display/Timeline",component:n,parameters:{controls:{expanded:!0}}},u=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",children:[e.jsx(n.Start,{children:"1984"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"First Macintosh computer"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{children:"1998"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iMac"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{children:"2001"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPod"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{children:"2007"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPhone"})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Start,{children:"2015"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"Apple Watch"})]})]}),b=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"First Macintosh computer"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iMac"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPod"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPhone"})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"Apple Watch"})]})]}),j=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",children:[e.jsx(n.Start,{box:!0,children:"First Macintosh computer"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{box:!0,children:"iMac"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{box:!0,children:"iPod"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{box:!0,children:"iPhone"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Start,{box:!0,children:"Apple Watch"}),e.jsx(n.Middle,{})]})]}),I=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",children:[e.jsx(n.Start,{box:!0,children:"First Macintosh computer"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iMac"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{box:!0,children:"iPod"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPhone"})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Start,{box:!0,children:"Apple Watch"}),e.jsx(n.Middle,{})]})]}),M=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",endClassName:"bg-primary",children:[e.jsx(n.Start,{box:!0,children:"First Macintosh computer"}),e.jsx(n.Middle,{className:"text-primary"})]}),e.jsxs(n.Item,{connect:"both",startClassName:"bg-primary",endClassName:"bg-primary",children:[e.jsx(n.Middle,{className:"text-primary"}),e.jsx(n.End,{children:"iMac"})]}),e.jsxs(n.Item,{connect:"both",startClassName:"bg-primary",children:[e.jsx(n.Start,{box:!0,children:"iPod"}),e.jsx(n.Middle,{className:"text-primary"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPhone"})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Start,{box:!0,children:"Apple Watch"}),e.jsx(n.Middle,{})]})]}),S=i=>e.jsxs(n,{...i,children:[e.jsx(n.Item,{connect:"end",children:e.jsx(n.Start,{box:!0,children:"First Macintosh computer"})}),e.jsx(n.Item,{connect:"both",children:e.jsx(n.End,{children:"iMac"})}),e.jsx(n.Item,{connect:"both",children:e.jsx(n.Start,{box:!0,children:"iPod"})}),e.jsx(n.Item,{connect:"both",children:e.jsx(n.End,{children:"iPhone"})}),e.jsx(n.Item,{connect:"start",children:e.jsx(n.Start,{box:!0,children:"Apple Watch"})})]}),m=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",children:[e.jsx(n.Start,{children:"1984"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"First Macintosh computer"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{children:"1998"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iMac"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{children:"2001"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPod"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{children:"2007"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPhone"})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Start,{children:"2015"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"Apple Watch"})]})]});m.args={vertical:!0};const c=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"First Macintosh computer"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iMac"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPod"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPhone"})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"Apple Watch"})]})]});c.args={vertical:!0};const d=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",children:[e.jsx(n.Start,{box:!0,children:"First Macintosh computer"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{box:!0,children:"iMac"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{box:!0,children:"iPod"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{box:!0,children:"iPhone"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Start,{box:!0,children:"Apple Watch"}),e.jsx(n.Middle,{})]})]});d.args={vertical:!0};const o=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",children:[e.jsx(n.Start,{box:!0,children:"First Macintosh computer"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iMac"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{box:!0,children:"iPod"}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPhone"})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Start,{box:!0,children:"Apple Watch"}),e.jsx(n.Middle,{})]})]});o.args={vertical:!0};const h=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",endClassName:"bg-primary",children:[e.jsx(n.Start,{box:!0,children:"First Macintosh computer"}),e.jsx(n.Middle,{className:"text-primary"})]}),e.jsxs(n.Item,{connect:"both",startClassName:"bg-primary",endClassName:"bg-primary",children:[e.jsx(n.Middle,{className:"text-primary"}),e.jsx(n.End,{children:"iMac"})]}),e.jsxs(n.Item,{connect:"both",startClassName:"bg-primary",children:[e.jsx(n.Start,{box:!0,children:"iPod"}),e.jsx(n.Middle,{className:"text-primary"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPhone"})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Start,{box:!0,children:"Apple Watch"}),e.jsx(n.Middle,{})]})]});h.args={vertical:!0};const T=i=>e.jsxs(n,{...i,children:[e.jsx(n.Item,{connect:"end",children:e.jsx(n.Start,{box:!0,children:"First Macintosh computer"})}),e.jsx(n.Item,{connect:"both",children:e.jsx(n.End,{children:"iMac"})}),e.jsx(n.Item,{connect:"both",children:e.jsx(n.Start,{box:!0,children:"iPod"})}),e.jsx(n.Item,{connect:"both",children:e.jsx(n.End,{children:"iPhone"})}),e.jsx(n.Item,{connect:"start",children:e.jsx(n.Start,{box:!0,children:"Apple Watch"})})]});T.args={vertical:!0};const p=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",children:[e.jsx(n.Start,{children:"1984"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"First Macintosh computer"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{children:"1998"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iMac"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{children:"2001"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPod"})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Start,{children:"2007"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"iPhone"})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsx(n.Start,{children:"2015"}),e.jsx(n.Middle,{}),e.jsx(n.End,{children:"Apple Watch"})]})]});p.args={responsive:!0};const x=i=>e.jsxs(n,{...i,children:[e.jsxs(n.Item,{connect:"end",children:[e.jsxs(n.Start,{className:"md:text-end mb-10",children:[e.jsx("time",{className:"font-mono italic",children:"1984"}),e.jsx("div",{className:"text-lg font-black",children:"First Macintosh computer"}),"The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."]}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsxs(n.End,{box:!1,className:"mb-10",children:[e.jsx("time",{className:"font-mono italic",children:"1998"}),e.jsx("div",{className:"text-lg font-black",children:"iMac"}),"iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms"]})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsxs(n.Start,{className:"md:text-end mb-10",children:[e.jsx("time",{className:"font-mono italic",children:"2001"}),e.jsx("div",{className:"text-lg font-black",children:"iPod"}),"The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple"]}),e.jsx(n.Middle,{})]}),e.jsxs(n.Item,{connect:"both",children:[e.jsx(n.Middle,{}),e.jsxs(n.End,{box:!1,className:"mb-10",children:[e.jsx("time",{className:"font-mono italic",children:"2007"}),e.jsx("div",{className:"text-lg font-black",children:"iPhone"}),"iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share"]})]}),e.jsxs(n.Item,{connect:"start",children:[e.jsxs(n.Start,{className:"md:text-end mb-10",children:[e.jsx("time",{className:"font-mono italic",children:"2015"}),e.jsx("div",{className:"text-lg font-black",children:"Apple Watch"}),"The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services"]}),e.jsx(n.Middle,{})]})]});x.args={snap:!0,vertical:!0,className:"max:md:timeline-compact"};var W,w,C;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start>1984</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>1998</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2001</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2007</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start>2015</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>;
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var F,k,V;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>;
}`,...(V=(k=b.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var O,R,q;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iMac</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPhone</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>;
}`,...(q=(R=j.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var D,z,B;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>;
}`,...(B=(z=I.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var J,L,K;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end" endClassName="bg-primary">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle className="text-primary" />
      </Timeline.Item>
      <Timeline.Item connect="both" startClassName="bg-primary" endClassName="bg-primary">
        <Timeline.Middle className="text-primary" />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both" startClassName="bg-primary">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle className="text-primary" />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>;
}`,...(K=(L=M.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var $,G,H;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
      </Timeline.Item>
    </Timeline>;
}`,...(H=(G=S.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start>1984</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>1998</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2001</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2007</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start>2015</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>;
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>;
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ie,te;d.parameters={...d.parameters,docs:{...(ne=d.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iMac</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPhone</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>;
}`,...(te=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var le,re,se;o.parameters={...o.parameters,docs:{...(le=o.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>;
}`,...(se=(re=o.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,me,ce;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end" endClassName="bg-primary">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
        <Timeline.Middle className="text-primary" />
      </Timeline.Item>
      <Timeline.Item connect="both" startClassName="bg-primary" endClassName="bg-primary">
        <Timeline.Middle className="text-primary" />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both" startClassName="bg-primary">
        <Timeline.Start box={true}>iPod</Timeline.Start>
        <Timeline.Middle className="text-primary" />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>;
}`,...(ce=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,oe,he;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start box={true}>First Macintosh computer</Timeline.Start>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start box={true}>iPod</Timeline.Start>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start box={true}>Apple Watch</Timeline.Start>
      </Timeline.Item>
    </Timeline>;
}`,...(he=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:he.source}}};var Te,pe,xe;p.parameters={...p.parameters,docs:{...(Te=p.parameters)==null?void 0:Te.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start>1984</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>First Macintosh computer</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>1998</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iMac</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2001</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPod</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start>2007</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>iPhone</Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start>2015</Timeline.Start>
        <Timeline.Middle />
        <Timeline.End>Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>;
}`,...(xe=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var ue,be,je;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  return <Timeline {...args}>
      <Timeline.Item connect="end">
        <Timeline.Start className="md:text-end mb-10">
          <time className="font-mono italic">1984</time>
          <div className="text-lg font-black">First Macintosh computer</div>
          The Apple Macintosh—later rebranded as the Macintosh 128K—is the
          original Apple Macintosh personal computer. It played a pivotal role
          in establishing desktop publishing as a general office function. The
          motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were
          housed in a beige case with integrated carrying handle; it came with a
          keyboard and single-button mouse.
        </Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End box={false} className="mb-10">
          <time className="font-mono italic">1998</time>
          <div className="text-lg font-black">iMac</div>
          iMac is a family of all-in-one Mac desktop computers designed and
          built by Apple Inc. It has been the primary part of Apple's consumer
          desktop offerings since its debut in August 1998, and has evolved
          through seven distinct forms
        </Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Start className="md:text-end mb-10">
          <time className="font-mono italic">2001</time>
          <div className="text-lg font-black">iPod</div>
          The iPod is a discontinued series of portable media players and
          multi-purpose mobile devices designed and marketed by Apple Inc. The
          first version was released on October 23, 2001, about 8+1⁄2 months
          after the Macintosh version of iTunes was released. Apple sold an
          estimated 450 million iPod products as of 2022. Apple discontinued the
          iPod product line on May 10, 2022. At over 20 years, the iPod brand is
          the oldest to be discontinued by Apple
        </Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
      <Timeline.Item connect="both">
        <Timeline.Middle />
        <Timeline.End box={false} className="mb-10">
          <time className="font-mono italic">2007</time>
          <div className="text-lg font-black">iPhone</div>
          iPhone is a line of smartphones produced by Apple Inc. that use
          Apple's own iOS mobile operating system. The first-generation iPhone
          was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since
          then, Apple has annually released new iPhone models and iOS updates.
          As of November 1, 2018, more than 2.2 billion iPhones had been sold.
          As of 2022, the iPhone accounts for 15.6% of global smartphone market
          share
        </Timeline.End>
      </Timeline.Item>
      <Timeline.Item connect="start">
        <Timeline.Start className="md:text-end mb-10">
          <time className="font-mono italic">2015</time>
          <div className="text-lg font-black">Apple Watch</div>
          The Apple Watch is a line of smartwatches produced by Apple Inc. It
          incorporates fitness tracking, health-oriented capabilities, and
          wireless telecommunication, and integrates with iOS and other Apple
          products and services
        </Timeline.Start>
        <Timeline.Middle />
      </Timeline.Item>
    </Timeline>;
}`,...(je=(be=x.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};const Ae=["Default","BottomSideOnly","TopSideOnly","DifferentSides","ColorfulLines","WithoutIcons","Vertical","VerticalWithBottomSideOnly","VerticalWithTopSideOnly","VerticalDifferentSides","VerticalColorfulLines","VerticalWithoutIcons","Responsive","IconSnappedToTheStart"];export{b as BottomSideOnly,M as ColorfulLines,u as Default,I as DifferentSides,x as IconSnappedToTheStart,p as Responsive,j as TopSideOnly,m as Vertical,h as VerticalColorfulLines,o as VerticalDifferentSides,c as VerticalWithBottomSideOnly,d as VerticalWithTopSideOnly,T as VerticalWithoutIcons,S as WithoutIcons,Ae as __namedExportsOrder,ve as default};
