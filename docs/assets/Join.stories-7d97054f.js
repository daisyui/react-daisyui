import{a,j as e}from"./tw-merge-0a3648bd.js";import{J as o}from"./Join-47e05b2f.js";import{B as n}from"./Button-0a8fe609.js";import{I as v}from"./index-0ee0d1a2.js";import{S as r}from"./index-cdac515a.js";import{I as d}from"./index-e97e44e7.js";import{B as E}from"./index-ccb0f6f2.js";import"./index-1b03fe98.js";import"./clsx.m-1229b3e0.js";import"./index-a55c3a76.js";const L={title:"Layout/Join (group items)",component:o},i=t=>a(o,{...t,children:[e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"})]});i.args={};const s=t=>a(o,{...t,children:[e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"})]});s.args={vertical:!0};const c=t=>a(o,{...t,children:[e("div",{children:e("div",{children:e(v,{className:"join-item",placeholder:"Search..."})})}),a(r,{className:"join-item",children:[e(r.Option,{selected:!0,disabled:!0,children:"Category"}),e(r.Option,{children:"Sci-fi"}),e(r.Option,{children:"Drama"}),e(r.Option,{children:"Action"})]}),a(d,{children:[e(E,{color:"secondary",className:d.Item.className(),children:"new"}),e(n,{className:"join-item",children:"Search"})]})]});c.args={};const m=t=>a(o,{...t,children:[e(v,{className:"join-item",placeholder:"Email"}),e(n,{className:"join-item rounded-r-full",children:"Subscribe"})]});m.args={};const l=t=>a(o,{...t,children:[e("input",{className:"join-item btn",type:"radio",name:"options","aria-label":"Radio 1"}),e("input",{className:"join-item btn",type:"radio",name:"options","aria-label":"Radio 2"}),e("input",{className:"join-item btn",type:"radio",name:"options","aria-label":"Radio 3"})]});l.args={};var u,p,B;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
    </Join>;
}`,...(B=(p=i.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var h,N,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
    </Join>;
}`,...(j=(N=s.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var S,g,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <div>
        <div>
          <Input className="join-item" placeholder="Search..." />
        </div>
      </div>
      <Select className="join-item">
        <Select.Option selected disabled>
          Category
        </Select.Option>
        <Select.Option>Sci-fi</Select.Option>
        <Select.Option>Drama</Select.Option>
        <Select.Option>Action</Select.Option>
      </Select>
      <Indicator>
        <Badge color="secondary" className={Indicator.Item.className()}>
          new
        </Badge>
        <Button className="join-item">Search</Button>
      </Indicator>
    </Join>;
}`,...(b=(g=c.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,I,f;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <Input className="join-item" placeholder="Email" />
      <Button className="join-item rounded-r-full">Subscribe</Button>
    </Join>;
}`,...(f=(I=m.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var J,O,R;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 1" />
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 2" />
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 3" />
    </Join>;
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const k=["Default","Vertically","ExtraElementsInTheGroup","CustomBorderRadius","RadioInputsWithBtnStyle"];export{m as CustomBorderRadius,i as Default,c as ExtraElementsInTheGroup,l as RadioInputsWithBtnStyle,s as Vertically,k as __namedExportsOrder,L as default};
