import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{I as a}from"./index-BOrxIxgS.js";import{A as Ce}from"./index-Dsnv3XI8.js";import{B as s}from"./index-Bdz6q0Sq.js";import{B as fe}from"./Button-GtH5nISf.js";import{T as B}from"./index-CKvsACjx.js";import{I as Fe}from"./index-DW2o7ZWh.js";import{C as z}from"./index-DIaYqioD.js";import"./iframe-DDnXVYpC.js";import"./bundle-mjs-yGZq-iow.js";import"./clsx-B-dksMZM.js";import"./utils-BvopOSUb.js";import"./index-Dl-l57lR.js";const Ge={title:"Layout/Indicator",component:a.Item},o=r=>e.jsxs(a,{children:[e.jsx(a.Item,{...r}),e.jsx("div",{className:"grid w-32 h-32 rounded bg-base-300 place-items-center",children:"content"})]});o.args={className:"badge badge-secondary"};const x=r=>e.jsxs(a,{children:[e.jsx(s,{color:"primary",className:a.Item.className(r),children:"new"}),e.jsx("div",{className:"grid w-32 h-32 rounded bg-base-300 place-items-center",children:"content"})]}),y=r=>e.jsxs(a,{children:[e.jsx(s,{color:"secondary",className:a.Item.className(r),children:"99+"}),e.jsx(fe,{children:"inbox"})]}),n=r=>e.jsxs(B,{variant:"lifted",value:1,children:[e.jsx(B.Tab,{value:0,children:"Messages"}),e.jsxs(B.Tab,{className:a.className(),value:1,children:["Notifications",e.jsx(a.Item,{...r,children:"8"})]}),e.jsx(B.Tab,{value:2,children:"Request"})]});n.args={className:"badge"};const j=r=>e.jsxs(a,{children:[e.jsx(s,{className:a.Item.className(r),color:"secondary",children:"typing…"}),e.jsx(Ce,{shape:"square",src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})]}),c=r=>e.jsxs(a,{children:[e.jsx(a.Item,{...r,children:"Required"}),e.jsx(Fe,{placeholder:"Your email address",bordered:!0})]});c.args={className:"badge"};const d=r=>e.jsxs(a,{className:"my-6 mx-10",children:[e.jsx(fe,{color:"primary",className:a.Item.className(r),children:"Apply"}),e.jsx(z,{bordered:!0,className:"bg-base-100",children:e.jsxs(z.Body,{children:[e.jsx(z.Title,{children:"Job Title"}),e.jsx("p",{children:"Rerum reiciendis beatae tenetur excepturi"})]})})]});d.args={vertical:"bottom"};const i=r=>e.jsxs(a,{children:[e.jsx(s,{color:"secondary",className:a.Item.className(r),children:"Uploading Image..."}),e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"})]});i.args={vertical:"middle",horizontal:"center"};const t=r=>e.jsxs(a,{children:[e.jsx(s,{color:"secondary",className:a.Item.className(r)}),e.jsx("div",{className:"grid w-32 h-32 rounded bg-base-300 place-items-center",children:"content"})]}),m=t.bind({});m.args={horizontal:"start"};const l=t.bind({});l.args={horizontal:"center"};const T=t.bind({}),g=t.bind({});g.args={horizontal:"start",vertical:"middle"};const p=t.bind({});p.args={horizontal:"center",vertical:"middle"};const u=t.bind({});u.args={vertical:"middle"};const I=t.bind({});I.args={horizontal:"start",vertical:"bottom"};const b=t.bind({});b.args={horizontal:"center",vertical:"bottom"};const N=t.bind({});N.args={vertical:"bottom"};const h=r=>e.jsxs(a,{...r,children:[e.jsx(s,{color:"secondary",className:a.Item.className({vertical:"top",horizontal:"start"}),children:"top+start"}),e.jsx(s,{color:"secondary",className:a.Item.className({vertical:"top",horizontal:"center"}),children:"top+center"}),e.jsx(s,{color:"secondary",className:a.Item.className({vertical:"top",horizontal:"end"}),children:"top+end"}),e.jsx(s,{color:"secondary",className:a.Item.className({vertical:"middle",horizontal:"start"}),children:"middle+start"}),e.jsx(s,{color:"secondary",className:a.Item.className({vertical:"middle",horizontal:"center"}),children:"middle+center"}),e.jsx(s,{color:"secondary",className:a.Item.className({vertical:"middle",horizontal:"end"}),children:"middle+end"}),e.jsx(s,{color:"secondary",className:a.Item.className({vertical:"bottom",horizontal:"start"}),children:"bottom+start"}),e.jsx(s,{color:"secondary",className:a.Item.className({vertical:"bottom",horizontal:"center"}),children:"bottom+center"}),e.jsx(s,{color:"secondary",className:a.Item.className({vertical:"bottom",horizontal:"end"}),children:"bottom+end"}),e.jsx("div",{className:"grid w-60 h-32 bg-base-300 place-items-center",children:"content"})]});h.argTypes={horizontal:{control:!1},vertical:{control:!1}};const v=t.bind({});v.args={className:"sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end",horizontal:"start"};var A,S,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <Indicator>
      <Indicator.Item {...args} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var f,C,F;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="primary" className={Indicator.Item.className(args)}>
        new
      </Badge>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(F=(C=x.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var M,R,E;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)}>
        99+
      </Badge>
      <Button>inbox</Button>
    </Indicator>;
}`,...(E=(R=y.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var q,k,O;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <Tabs variant="lifted" value={1}>
      <Tabs.Tab value={0}>Messages</Tabs.Tab>
      <Tabs.Tab className={Indicator.className()} value={1}>
        Notifications
        <Indicator.Item {...args}>8</Indicator.Item>
      </Tabs.Tab>
      <Tabs.Tab value={2}>Request</Tabs.Tab>
    </Tabs>;
}`,...(O=(k=n.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var _,D,J;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge className={Indicator.Item.className(args)} color="secondary">
        typing…
      </Badge>
      <Avatar shape="square" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </Indicator>;
}`,...(J=(D=j.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var U,W,Y;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  return <Indicator>
      <Indicator.Item {...args}>Required</Indicator.Item>
      <Input placeholder="Your email address" bordered />
    </Indicator>;
}`,...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var L,G,H;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return <Indicator className="my-6 mx-10">
      <Button color="primary" className={Indicator.Item.className(args)}>
        Apply
      </Button>
      <Card bordered className="bg-base-100">
        <Card.Body>
          <Card.Title>Job Title</Card.Title>
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </Card.Body>
      </Card>
    </Indicator>;
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,P,Q;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)}>
        Uploading Image...
      </Badge>
      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
    </Indicator>;
}`,...(Q=(P=i.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var V,X,Z;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(ae=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(te=(se=T.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,ne,ce;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(ce=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var de,ie,me;p.parameters={...p.parameters,docs:{...(de=p.parameters)==null?void 0:de.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(me=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var le,ge,pe;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(pe=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var ue,Ie,be;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(be=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:be.source}}};var Ne,he,ve;b.parameters={...b.parameters,docs:{...(Ne=b.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(ve=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Be,xe,ye;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(ye=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var je,Te,ze;h.parameters={...h.parameters,docs:{...(je=h.parameters)==null?void 0:je.docs,source:{originalSource:`args => {
  return <Indicator {...args}>
      <Badge color="secondary" className={Indicator.Item.className({
      vertical: 'top',
      horizontal: 'start'
    })}>
        top+start
      </Badge>
      <Badge color="secondary" className={Indicator.Item.className({
      vertical: 'top',
      horizontal: 'center'
    })}>
        top+center
      </Badge>
      <Badge color="secondary" className={Indicator.Item.className({
      vertical: 'top',
      horizontal: 'end'
    })}>
        top+end
      </Badge>

      <Badge color="secondary" className={Indicator.Item.className({
      vertical: 'middle',
      horizontal: 'start'
    })}>
        middle+start
      </Badge>
      <Badge color="secondary" className={Indicator.Item.className({
      vertical: 'middle',
      horizontal: 'center'
    })}>
        middle+center
      </Badge>
      <Badge color="secondary" className={Indicator.Item.className({
      vertical: 'middle',
      horizontal: 'end'
    })}>
        middle+end
      </Badge>

      <Badge color="secondary" className={Indicator.Item.className({
      vertical: 'bottom',
      horizontal: 'start'
    })}>
        bottom+start
      </Badge>
      <Badge color="secondary" className={Indicator.Item.className({
      vertical: 'bottom',
      horizontal: 'center'
    })}>
        bottom+center
      </Badge>
      <Badge color="secondary" className={Indicator.Item.className({
      vertical: 'bottom',
      horizontal: 'end'
    })}>
        bottom+end
      </Badge>

      <div className="grid w-60 h-32 bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(ze=(Te=h.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};var Ae,Se,we;v.parameters={...v.parameters,docs:{...(Ae=v.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(we=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};const He=["Default","BadgeWithText","ForButton","ForTab","ForAvatar","ForInput","ButtonAsIndicatorForCard","InCenterOfImage","TopAndStart","TopAndCenter","TopAndEnd","MiddleAndStart","MiddleAndCenter","MiddleAndEnd","BottomAndStart","BottomAndCenter","BottomAndEnd","Multiple","Responsive"];export{x as BadgeWithText,b as BottomAndCenter,N as BottomAndEnd,I as BottomAndStart,d as ButtonAsIndicatorForCard,o as Default,j as ForAvatar,y as ForButton,c as ForInput,n as ForTab,i as InCenterOfImage,p as MiddleAndCenter,u as MiddleAndEnd,g as MiddleAndStart,h as Multiple,v as Responsive,l as TopAndCenter,T as TopAndEnd,m as TopAndStart,He as __namedExportsOrder,Ge as default};
