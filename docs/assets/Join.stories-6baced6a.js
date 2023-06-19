import{a,j as e}from"./tw-merge-e2243cb0.js";import{J as o}from"./Join-4384c6dd.js";import{B as n}from"./index-6e65e89d.js";import{I as d}from"./index-abf3e225.js";import{S as r}from"./index-f4c287c1.js";import{I as v}from"./index-6b36aaaf.js";import{B as E}from"./index-700db9fd.js";import"./index-ebeaab24.js";import"./clsx.m-1229b3e0.js";import"./index-3106c12b.js";const L={title:"Layout/Join (group items)",component:o},i=t=>a(o,{...t,children:[e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"})]});i.args={};const s=t=>a(o,{...t,children:[e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"})]});s.args={vertical:!0};const c=t=>a(o,{...t,children:[e("div",{children:e("div",{children:e(d,{className:"join-item",placeholder:"Search..."})})}),a(r,{className:"join-item",children:[e(r.Option,{selected:!0,disabled:!0,children:"Category"}),e(r.Option,{children:"Sci-fi"}),e(r.Option,{children:"Drama"}),e(r.Option,{children:"Action"})]}),e(v,{item:e(E,{color:"secondary",children:"new"}),children:e(n,{className:"join-item",children:"Search"})})]});c.args={};const m=t=>a(o,{...t,children:[e(d,{className:"join-item",placeholder:"Email"}),e(n,{className:"join-item rounded-r-full",children:"Subscribe"})]});m.args={};const l=t=>a(o,{...t,children:[e(d,{className:"join-item btn",type:"radio",name:"options","aria-label":"Radio 1"}),e(d,{className:"join-item btn",type:"radio",name:"options","aria-label":"Radio 2"}),e(d,{className:"join-item btn",type:"radio",name:"options","aria-label":"Radio 3"})]});l.args={};var u,p,B;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
    </Join>;
}`,...(B=(p=i.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var h,j,N;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
    </Join>;
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var S,g,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
      <Indicator item={<Badge color="secondary">new</Badge>}>
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
      <Input className="join-item btn" type="radio" name="options" aria-label="Radio 1" />
      <Input className="join-item btn" type="radio" name="options" aria-label="Radio 2" />
      <Input className="join-item btn" type="radio" name="options" aria-label="Radio 3" />
    </Join>;
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const k=["Default","Vertically","ExtraElementsInTheGroup","CustomBorderRadius","RadioInputsWithBtnStyle"];export{m as CustomBorderRadius,i as Default,c as ExtraElementsInTheGroup,l as RadioInputsWithBtnStyle,s as Vertically,k as __namedExportsOrder,L as default};
//# sourceMappingURL=Join.stories-6baced6a.js.map
