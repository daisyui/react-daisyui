import{a as i,j as n,t as A}from"./tw-merge-0a3648bd.js";import{R as _,r as xe}from"./index-1b03fe98.js";import{c as w}from"./clsx.m-1229b3e0.js";const y=_.forwardRef(({children:t,className:r,connect:l,startClassName:a,endClassName:m,...c},W)=>i("li",{...c,className:r,ref:W,children:[(l==="both"||l==="start")&&n("hr",{className:a}),t,(l==="both"||l==="end")&&n("hr",{className:m})]}));y.displayName="TimelineItem";const Ne=y;try{y.displayName="TimelineItem",y.__docgenInfo={description:"",displayName:"TimelineItem",props:{connect:{defaultValue:null,description:"",name:"connect",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"both"'}]}},startClassName:{defaultValue:null,description:"",name:"startClassName",required:!1,type:{name:"string"}},endClassName:{defaultValue:null,description:"",name:"endClassName",required:!1,type:{name:"string"}}}}}catch{}const x=_.forwardRef(({children:t,className:r,box:l,...a},m)=>{const c=A("timeline-start",w({"timeline-box":l}),r);return n("div",{...a,className:c,ref:m,children:t})});x.displayName="TimelineStart";const Pe=x;try{x.displayName="TimelineStart",x.__docgenInfo={description:"",displayName:"TimelineStart",props:{box:{defaultValue:null,description:"",name:"box",required:!1,type:{name:"boolean"}}}}}catch{}const N=_.forwardRef(({children:t=n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:n("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})}),className:r,...l},a)=>{const m=A("timeline-middle",r);return n("div",{...l,className:m,ref:a,children:t})});N.displayName="TimelineMiddle";const ve=N;try{N.displayName="TimelineMiddle",N.__docgenInfo={description:"",displayName:"TimelineMiddle",props:{}}}catch{}const P=_.forwardRef(({children:t,className:r,box:l=!0,...a},m)=>{const c=A("timeline-end",w({"timeline-box":l}),r);return n("div",{...a,className:c,ref:m,children:t})});P.displayName="TimelineEnd";const Ae=P;try{P.displayName="TimelineEnd",P.__docgenInfo={description:"",displayName:"TimelineEnd",props:{box:{defaultValue:{value:"true"},description:"",name:"box",required:!1,type:{name:"boolean"}}}}}catch{}const v=xe.forwardRef(({dataTheme:t,className:r,vertical:l,horizontal:a,responsive:m,snap:c,compact:W,children:ge,...fe},Ee)=>{const ye=A("timeline",w({"timeline-vertical":l,"timeline-horizontal":a,"timeline-vertical lg:timeline-horizontal":m,"timeline-snap-icon":c,"timeline-compact":W}),r);return n("ul",{...fe,"data-theme":t,className:ye,ref:Ee,children:ge})});v.displayName="Timeline";const e=Object.assign(v,{Item:Ne,Start:Pe,Middle:ve,End:Ae});try{v.displayName="Timeline",v.__docgenInfo={description:"",displayName:"Timeline",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:"boolean"}},snap:{defaultValue:null,description:"",name:"snap",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}}}}}catch{}const Ce={title:"Data Display/Timeline",component:e,parameters:{controls:{expanded:!0}}},I=t=>i(e,{...t,children:[i(e.Item,{connect:"end",children:[n(e.Start,{children:"1984"}),n(e.Middle,{}),n(e.End,{children:"First Macintosh computer"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{children:"1998"}),n(e.Middle,{}),n(e.End,{children:"iMac"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{children:"2001"}),n(e.Middle,{}),n(e.End,{children:"iPod"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{children:"2007"}),n(e.Middle,{}),n(e.End,{children:"iPhone"})]}),i(e.Item,{connect:"start",children:[n(e.Start,{children:"2015"}),n(e.Middle,{}),n(e.End,{children:"Apple Watch"})]})]}),M=t=>i(e,{...t,children:[i(e.Item,{connect:"end",children:[n(e.Middle,{}),n(e.End,{children:"First Macintosh computer"})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iMac"})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iPod"})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iPhone"})]}),i(e.Item,{connect:"start",children:[n(e.Middle,{}),n(e.End,{children:"Apple Watch"})]})]}),S=t=>i(e,{...t,children:[i(e.Item,{connect:"end",children:[n(e.Start,{box:!0,children:"First Macintosh computer"}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Start,{box:!0,children:"iMac"}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Start,{box:!0,children:"iPod"}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Start,{box:!0,children:"iPhone"}),n(e.Middle,{})]}),i(e.Item,{connect:"start",children:[n(e.Start,{box:!0,children:"Apple Watch"}),n(e.Middle,{})]})]}),g=t=>i(e,{...t,children:[i(e.Item,{connect:"end",children:[n(e.Start,{box:!0,children:"First Macintosh computer"}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iMac"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{box:!0,children:"iPod"}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iPhone"})]}),i(e.Item,{connect:"start",children:[n(e.Start,{box:!0,children:"Apple Watch"}),n(e.Middle,{})]})]}),f=t=>i(e,{...t,children:[i(e.Item,{connect:"end",endClassName:"bg-primary",children:[n(e.Start,{box:!0,children:"First Macintosh computer"}),n(e.Middle,{className:"text-primary"})]}),i(e.Item,{connect:"both",startClassName:"bg-primary",endClassName:"bg-primary",children:[n(e.Middle,{className:"text-primary"}),n(e.End,{children:"iMac"})]}),i(e.Item,{connect:"both",startClassName:"bg-primary",children:[n(e.Start,{box:!0,children:"iPod"}),n(e.Middle,{className:"text-primary"})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iPhone"})]}),i(e.Item,{connect:"start",children:[n(e.Start,{box:!0,children:"Apple Watch"}),n(e.Middle,{})]})]}),E=t=>i(e,{...t,children:[n(e.Item,{connect:"end",children:n(e.Start,{box:!0,children:"First Macintosh computer"})}),n(e.Item,{connect:"both",children:n(e.End,{children:"iMac"})}),n(e.Item,{connect:"both",children:n(e.Start,{box:!0,children:"iPod"})}),n(e.Item,{connect:"both",children:n(e.End,{children:"iPhone"})}),n(e.Item,{connect:"start",children:n(e.Start,{box:!0,children:"Apple Watch"})})]}),d=t=>i(e,{...t,children:[i(e.Item,{connect:"end",children:[n(e.Start,{children:"1984"}),n(e.Middle,{}),n(e.End,{children:"First Macintosh computer"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{children:"1998"}),n(e.Middle,{}),n(e.End,{children:"iMac"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{children:"2001"}),n(e.Middle,{}),n(e.End,{children:"iPod"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{children:"2007"}),n(e.Middle,{}),n(e.End,{children:"iPhone"})]}),i(e.Item,{connect:"start",children:[n(e.Start,{children:"2015"}),n(e.Middle,{}),n(e.End,{children:"Apple Watch"})]})]});d.args={vertical:!0};const o=t=>i(e,{...t,children:[i(e.Item,{connect:"end",children:[n(e.Middle,{}),n(e.End,{children:"First Macintosh computer"})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iMac"})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iPod"})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iPhone"})]}),i(e.Item,{connect:"start",children:[n(e.Middle,{}),n(e.End,{children:"Apple Watch"})]})]});o.args={vertical:!0};const s=t=>i(e,{...t,children:[i(e.Item,{connect:"end",children:[n(e.Start,{box:!0,children:"First Macintosh computer"}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Start,{box:!0,children:"iMac"}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Start,{box:!0,children:"iPod"}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Start,{box:!0,children:"iPhone"}),n(e.Middle,{})]}),i(e.Item,{connect:"start",children:[n(e.Start,{box:!0,children:"Apple Watch"}),n(e.Middle,{})]})]});s.args={vertical:!0};const h=t=>i(e,{...t,children:[i(e.Item,{connect:"end",children:[n(e.Start,{box:!0,children:"First Macintosh computer"}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iMac"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{box:!0,children:"iPod"}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iPhone"})]}),i(e.Item,{connect:"start",children:[n(e.Start,{box:!0,children:"Apple Watch"}),n(e.Middle,{})]})]});h.args={vertical:!0};const T=t=>i(e,{...t,children:[i(e.Item,{connect:"end",endClassName:"bg-primary",children:[n(e.Start,{box:!0,children:"First Macintosh computer"}),n(e.Middle,{className:"text-primary"})]}),i(e.Item,{connect:"both",startClassName:"bg-primary",endClassName:"bg-primary",children:[n(e.Middle,{className:"text-primary"}),n(e.End,{children:"iMac"})]}),i(e.Item,{connect:"both",startClassName:"bg-primary",children:[n(e.Start,{box:!0,children:"iPod"}),n(e.Middle,{className:"text-primary"})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),n(e.End,{children:"iPhone"})]}),i(e.Item,{connect:"start",children:[n(e.Start,{box:!0,children:"Apple Watch"}),n(e.Middle,{})]})]});T.args={vertical:!0};const p=t=>i(e,{...t,children:[n(e.Item,{connect:"end",children:n(e.Start,{box:!0,children:"First Macintosh computer"})}),n(e.Item,{connect:"both",children:n(e.End,{children:"iMac"})}),n(e.Item,{connect:"both",children:n(e.Start,{box:!0,children:"iPod"})}),n(e.Item,{connect:"both",children:n(e.End,{children:"iPhone"})}),n(e.Item,{connect:"start",children:n(e.Start,{box:!0,children:"Apple Watch"})})]});p.args={vertical:!0};const u=t=>i(e,{...t,children:[i(e.Item,{connect:"end",children:[n(e.Start,{children:"1984"}),n(e.Middle,{}),n(e.End,{children:"First Macintosh computer"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{children:"1998"}),n(e.Middle,{}),n(e.End,{children:"iMac"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{children:"2001"}),n(e.Middle,{}),n(e.End,{children:"iPod"})]}),i(e.Item,{connect:"both",children:[n(e.Start,{children:"2007"}),n(e.Middle,{}),n(e.End,{children:"iPhone"})]}),i(e.Item,{connect:"start",children:[n(e.Start,{children:"2015"}),n(e.Middle,{}),n(e.End,{children:"Apple Watch"})]})]});u.args={responsive:!0};const b=t=>i(e,{...t,children:[i(e.Item,{connect:"end",children:[i(e.Start,{className:"md:text-end mb-10",children:[n("time",{className:"font-mono italic",children:"1984"}),n("div",{className:"text-lg font-black",children:"First Macintosh computer"}),"The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."]}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),i(e.End,{box:!1,className:"mb-10",children:[n("time",{className:"font-mono italic",children:"1998"}),n("div",{className:"text-lg font-black",children:"iMac"}),"iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms"]})]}),i(e.Item,{connect:"both",children:[i(e.Start,{className:"md:text-end mb-10",children:[n("time",{className:"font-mono italic",children:"2001"}),n("div",{className:"text-lg font-black",children:"iPod"}),"The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple"]}),n(e.Middle,{})]}),i(e.Item,{connect:"both",children:[n(e.Middle,{}),i(e.End,{box:!1,className:"mb-10",children:[n("time",{className:"font-mono italic",children:"2007"}),n("div",{className:"text-lg font-black",children:"iPhone"}),"iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share"]})]}),i(e.Item,{connect:"start",children:[i(e.Start,{className:"md:text-end mb-10",children:[n("time",{className:"font-mono italic",children:"2015"}),n("div",{className:"text-lg font-black",children:"Apple Watch"}),"The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services"]}),n(e.Middle,{})]})]});b.args={snap:!0,vertical:!0,className:"max:md:timeline-compact"};var C,F,k;I.parameters={...I.parameters,docs:{...(C=I.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
}`,...(k=(F=I.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var V,O,R;M.parameters={...M.parameters,docs:{...(V=M.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
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
}`,...(R=(O=M.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,D,z;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(z=(D=S.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var B,$,j;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
}`,...(j=($=g.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var J,L,K;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
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
}`,...(K=(L=f.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var G,H,Q;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
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
}`,...(Q=(H=E.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,X,Y;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;o.parameters={...o.parameters,docs:{...(Z=o.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
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
}`,...(ne=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ie,te,le;s.parameters={...s.parameters,docs:{...(ie=s.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
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
}`,...(le=(te=s.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var re,ae,me;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
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
}`,...(me=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:me.source}}};var ce,de,oe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`args => {
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
}`,...(oe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var se,he,Te;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
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
}`,...(Te=(he=p.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var pe,ue,be;u.parameters={...u.parameters,docs:{...(pe=u.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
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
}`,...(be=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var Ie,Me,Se;b.parameters={...b.parameters,docs:{...(Ie=b.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => {
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
}`,...(Se=(Me=b.parameters)==null?void 0:Me.docs)==null?void 0:Se.source}}};const Fe=["Default","BottomSideOnly","TopSideOnly","DifferentSides","ColorfulLines","WithoutIcons","Vertical","VerticalWithBottomSideOnly","VerticalWithTopSideOnly","VerticalDifferentSides","VerticalColorfulLines","VerticalWithoutIcons","Responsive","IconSnappedToTheStart"];export{M as BottomSideOnly,f as ColorfulLines,I as Default,g as DifferentSides,b as IconSnappedToTheStart,u as Responsive,S as TopSideOnly,d as Vertical,T as VerticalColorfulLines,h as VerticalDifferentSides,o as VerticalWithBottomSideOnly,s as VerticalWithTopSideOnly,p as VerticalWithoutIcons,E as WithoutIcons,Fe as __namedExportsOrder,Ce as default};
