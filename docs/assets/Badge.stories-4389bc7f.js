import{j as r,a as n}from"./tw-merge-e2243cb0.js";import{B as a}from"./index-700db9fd.js";import{B as g}from"./index-6e65e89d.js";import"./index-ebeaab24.js";import"./clsx.m-1229b3e0.js";import"./index-3106c12b.js";const F={title:"Data Display/Badge",component:a},s=e=>r(a,{...e,children:"Example"});s.args={};const o=e=>n("div",{children:[n("div",{children:[r(a,{...e,children:"neutral"}),r(a,{...e,color:"primary",children:"primary"}),r(a,{...e,color:"secondary",children:"secondary"}),r(a,{...e,color:"accent",children:"accent"}),r(a,{...e,color:"ghost",children:"ghost"})]}),n("div",{children:[r(a,{...e,color:"success",children:"success"}),r(a,{...e,color:"info",children:"info"}),r(a,{...e,color:"warning",children:"warning"}),r(a,{...e,color:"error",children:"error"})]})]});o.args={className:"m-1"};const c=e=>n("div",{children:[r(a,{...e,variant:"outline",children:"neutral"}),r(a,{...e,color:"primary",variant:"outline",children:"primary"}),r(a,{...e,color:"secondary",variant:"outline",children:"secondary"}),r(a,{...e,color:"accent",variant:"outline",children:"accent"})]});c.args={className:"m-1"};const d=e=>n("div",{children:[r(a,{...e,size:"lg",children:"987,654"}),r(a,{...e,size:"md",children:"987,654"}),r(a,{...e,size:"sm",children:"987,654"}),r(a,{...e,size:"xs",children:"987,654"})]});d.args={className:"m-1"};const i=e=>n("div",{className:"flex gap-2 items-center",children:[r(a,{...e,size:"lg"}),r(a,{...e,size:"md"}),r(a,{...e,size:"sm"}),r(a,{...e,size:"xs"})]});i.args={};const t=e=>r("div",{className:"flex gap-2 items-center",children:n("h2",{className:"text-xl gap-2",children:["Heading"," ",r(a,{...e,size:"lg",children:"NEW"})]})});t.args={};const l=e=>n("div",{className:"flex gap-2 items-center",children:[n(g,{className:"gap-2",children:["Inbox",r(a,{...e,children:"+99"})]}),n(g,{className:"gap-2",children:["Inbox",r(a,{...e,color:"primary",children:"+99"})]})]});l.args={};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return <Badge {...args}>Example</Badge>;
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var B,h,v;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <div>
      <div>
        <Badge {...args}>neutral</Badge>
        <Badge {...args} color="primary">
          primary
        </Badge>
        <Badge {...args} color="secondary">
          secondary
        </Badge>
        <Badge {...args} color="accent">
          accent
        </Badge>
        <Badge {...args} color="ghost">
          ghost
        </Badge>
      </div>
      <div>
        <Badge {...args} color="success">
          success
        </Badge>
        <Badge {...args} color="info">
          info
        </Badge>
        <Badge {...args} color="warning">
          warning
        </Badge>
        <Badge {...args} color="error">
          error
        </Badge>
      </div>
    </div>;
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,y,z;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <div>
      <Badge {...args} variant="outline">
        neutral
      </Badge>
      <Badge {...args} color="primary" variant="outline">
        primary
      </Badge>
      <Badge {...args} color="secondary" variant="outline">
        secondary
      </Badge>
      <Badge {...args} color="accent" variant="outline">
        accent
      </Badge>
    </div>;
}`,...(z=(y=c.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var N,f,S;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <div>
      <Badge {...args} size="lg">
        987,654
      </Badge>
      <Badge {...args} size="md">
        987,654
      </Badge>
      <Badge {...args} size="sm">
        987,654
      </Badge>
      <Badge {...args} size="xs">
        987,654
      </Badge>
    </div>;
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var I,E,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <div className="flex gap-2 items-center">
      <Badge {...args} size="lg" />
      <Badge {...args} size="md" />
      <Badge {...args} size="sm" />
      <Badge {...args} size="xs" />
    </div>;
}`,...(b=(E=i.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var w,D,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <div className="flex gap-2 items-center">
      <h2 className="text-xl gap-2">
        Heading{' '}
        <Badge {...args} size="lg">
          NEW
        </Badge>
      </h2>
    </div>;
}`,...(j=(D=t.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var O,_,A;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <div className="flex gap-2 items-center">
      <Button className="gap-2">
        Inbox
        <Badge {...args}>+99</Badge>
      </Button>
      <Button className="gap-2">
        Inbox
        <Badge {...args} color="primary">
          +99
        </Badge>
      </Button>
    </div>;
}`,...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const G=["Default","Colors","Outline","Sizes","Empty","BadgeInText","BadgeInAButton"];export{l as BadgeInAButton,t as BadgeInText,o as Colors,s as Default,i as Empty,c as Outline,d as Sizes,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Badge.stories-4389bc7f.js.map
