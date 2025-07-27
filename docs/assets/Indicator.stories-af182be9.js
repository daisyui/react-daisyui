import{a as n,j as e}from"./tw-merge-4486aaf0.js";import{I as a}from"./index-bb141489.js";import{A as Me}from"./index-10c1d412.js";import{B as s}from"./index-45f7c5a2.js";import{B as Fe}from"./Button-ea8a5606.js";import{T as y}from"./index-6ce7701d.js";import{I as Re}from"./index-46d0e2a0.js";import{C as w}from"./index-3582c853.js";import"./index-f46741a2.js";import"./clsx.m-1229b3e0.js";import"./utils-ae2eb491.js";import"./index-796e73d3.js";const Ge={title:"Layout/Indicator",component:a.Item},o=r=>n(a,{children:[e(a.Item,{...r}),e("div",{className:"grid w-32 h-32 rounded bg-base-300 place-items-center",children:"content"})]});o.args={className:"badge badge-secondary"};const T=r=>n(a,{children:[e(s,{color:"primary",className:a.Item.className(r),children:"new"}),e("div",{className:"grid w-32 h-32 rounded bg-base-300 place-items-center",children:"content"})]}),z=r=>n(a,{children:[e(s,{color:"secondary",className:a.Item.className(r),children:"99+"}),e(Fe,{children:"inbox"})]}),c=r=>n(y,{variant:"lifted",value:1,children:[e(y.Tab,{value:0,children:"Messages"}),n(y.Tab,{className:a.className(),value:1,children:["Notifications",e(a.Item,{...r,children:"8"})]}),e(y.Tab,{value:2,children:"Request"})]});c.args={className:"badge"};const A=r=>n(a,{children:[e(s,{className:a.Item.className(r),color:"secondary",children:"typing…"}),e(Me,{shape:"square",src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"})]}),d=r=>n(a,{children:[e(a.Item,{...r,children:"Required"}),e(Re,{placeholder:"Your email address",bordered:!0})]});d.args={className:"badge"};const i=r=>n(a,{className:"my-6 mx-10",children:[e(Fe,{color:"primary",className:a.Item.className(r),children:"Apply"}),e(w,{bordered:!0,className:"bg-base-100",children:n(w.Body,{children:[e(w.Title,{children:"Job Title"}),e("p",{children:"Rerum reiciendis beatae tenetur excepturi"})]})})]});i.args={vertical:"bottom"};const m=r=>n(a,{children:[e(s,{color:"secondary",className:a.Item.className(r),children:"Uploading Image..."}),e("img",{src:"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"})]});m.args={vertical:"middle",horizontal:"center"};const t=r=>n(a,{children:[e(s,{color:"secondary",className:a.Item.className(r)}),e("div",{className:"grid w-32 h-32 rounded bg-base-300 place-items-center",children:"content"})]}),l=t.bind({});l.args={horizontal:"start"};const g=t.bind({});g.args={horizontal:"center"};const S=t.bind({}),p=t.bind({});p.args={horizontal:"start",vertical:"middle"};const u=t.bind({});u.args={horizontal:"center",vertical:"middle"};const I=t.bind({});I.args={vertical:"middle"};const b=t.bind({});b.args={horizontal:"start",vertical:"bottom"};const N=t.bind({});N.args={horizontal:"center",vertical:"bottom"};const h=t.bind({});h.args={vertical:"bottom"};const v=r=>n(a,{...r,children:[e(s,{color:"secondary",className:a.Item.className({vertical:"top",horizontal:"start"}),children:"top+start"}),e(s,{color:"secondary",className:a.Item.className({vertical:"top",horizontal:"center"}),children:"top+center"}),e(s,{color:"secondary",className:a.Item.className({vertical:"top",horizontal:"end"}),children:"top+end"}),e(s,{color:"secondary",className:a.Item.className({vertical:"middle",horizontal:"start"}),children:"middle+start"}),e(s,{color:"secondary",className:a.Item.className({vertical:"middle",horizontal:"center"}),children:"middle+center"}),e(s,{color:"secondary",className:a.Item.className({vertical:"middle",horizontal:"end"}),children:"middle+end"}),e(s,{color:"secondary",className:a.Item.className({vertical:"bottom",horizontal:"start"}),children:"bottom+start"}),e(s,{color:"secondary",className:a.Item.className({vertical:"bottom",horizontal:"center"}),children:"bottom+center"}),e(s,{color:"secondary",className:a.Item.className({vertical:"bottom",horizontal:"end"}),children:"bottom+end"}),e("div",{className:"grid w-60 h-32 bg-base-300 place-items-center",children:"content"})]});v.argTypes={horizontal:{control:!1},vertical:{control:!1}};const B=t.bind({});B.args={className:"sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end",horizontal:"start"};var f,C,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Indicator>
      <Indicator.Item {...args} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var F,M,R;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="primary" className={Indicator.Item.className(args)}>
        new
      </Badge>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(R=(M=T.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var E,q,k;z.parameters={...z.parameters,docs:{...(E=z.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)}>
        99+
      </Badge>
      <Button>inbox</Button>
    </Indicator>;
}`,...(k=(q=z.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var j,O,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <Tabs variant="lifted" value={1}>
      <Tabs.Tab value={0}>Messages</Tabs.Tab>
      <Tabs.Tab className={Indicator.className()} value={1}>
        Notifications
        <Indicator.Item {...args}>8</Indicator.Item>
      </Tabs.Tab>
      <Tabs.Tab value={2}>Request</Tabs.Tab>
    </Tabs>;
}`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var D,J,U;A.parameters={...A.parameters,docs:{...(D=A.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge className={Indicator.Item.className(args)} color="secondary">
        typing…
      </Badge>
      <Avatar shape="square" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </Indicator>;
}`,...(U=(J=A.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var W,Y,L;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <Indicator>
      <Indicator.Item {...args}>Required</Indicator.Item>
      <Input placeholder="Your email address" bordered />
    </Indicator>;
}`,...(L=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var G,H,K;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
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
}`,...(K=(H=i.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var P,Q,V;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)}>
        Uploading Image...
      </Badge>
      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
    </Indicator>;
}`,...(V=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Z,$;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...($=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,te;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ce,de;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(de=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ie,me,le;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(le=(me=u.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var ge,pe,ue;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(ue=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var Ie,be,Ne;b.parameters={...b.parameters,docs:{...(Ie=b.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(Ne=(be=b.parameters)==null?void 0:be.docs)==null?void 0:Ne.source}}};var he,ve,Be;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(Be=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var ye,Te,ze;h.parameters={...h.parameters,docs:{...(ye=h.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(ze=(Te=h.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};var Ae,Se,we;v.parameters={...v.parameters,docs:{...(Ae=v.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => {
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
}`,...(we=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var fe,Ce,xe;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`args => {
  return <Indicator>
      <Badge color="secondary" className={Indicator.Item.className(args)} />
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        content
      </div>
    </Indicator>;
}`,...(xe=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};const He=["Default","BadgeWithText","ForButton","ForTab","ForAvatar","ForInput","ButtonAsIndicatorForCard","InCenterOfImage","TopAndStart","TopAndCenter","TopAndEnd","MiddleAndStart","MiddleAndCenter","MiddleAndEnd","BottomAndStart","BottomAndCenter","BottomAndEnd","Multiple","Responsive"];export{T as BadgeWithText,N as BottomAndCenter,h as BottomAndEnd,b as BottomAndStart,i as ButtonAsIndicatorForCard,o as Default,A as ForAvatar,z as ForButton,d as ForInput,c as ForTab,m as InCenterOfImage,u as MiddleAndCenter,I as MiddleAndEnd,p as MiddleAndStart,v as Multiple,B as Responsive,g as TopAndCenter,S as TopAndEnd,l as TopAndStart,He as __namedExportsOrder,Ge as default};
