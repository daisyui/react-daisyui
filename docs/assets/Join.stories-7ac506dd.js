import{a,j as e}from"./tw-merge-209d5d70.js";import{J as o}from"./Join-0256f159.js";import{B as n}from"./Button-bca26834.js";import{I as R}from"./index-1f9bd160.js";import{S as r}from"./index-b0c81988.js";import{I as v}from"./index-8aa1de2a.js";import{B as E}from"./index-92f9e02b.js";import"./index-ebeaab24.js";import"./clsx.m-1229b3e0.js";import"./index-fcaf9174.js";const L={title:"Layout/Join (group items)",component:o},i=t=>a(o,{...t,children:[e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"})]});i.args={};const s=t=>a(o,{...t,children:[e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"}),e(n,{className:"join-item",children:"Button"})]});s.args={vertical:!0};const c=t=>a(o,{...t,children:[e("div",{children:e("div",{children:e(R,{className:"join-item",placeholder:"Search..."})})}),a(r,{className:"join-item",children:[e(r.Option,{selected:!0,disabled:!0,children:"Category"}),e(r.Option,{children:"Sci-fi"}),e(r.Option,{children:"Drama"}),e(r.Option,{children:"Action"})]}),e(v,{item:e(E,{color:"secondary",children:"new"}),children:e(n,{className:"join-item",children:"Search"})})]});c.args={};const m=t=>a(o,{...t,children:[e(R,{className:"join-item",placeholder:"Email"}),e(n,{className:"join-item rounded-r-full",children:"Subscribe"})]});m.args={};const l=t=>a(o,{...t,children:[e("input",{className:"join-item btn",type:"radio",name:"options","aria-label":"Radio 1"}),e("input",{className:"join-item btn",type:"radio",name:"options","aria-label":"Radio 2"}),e("input",{className:"join-item btn",type:"radio",name:"options","aria-label":"Radio 3"})]});l.args={};var d,u,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
    </Join>;
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var B,h,j;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
      <Button className="join-item">Button</Button>
    </Join>;
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var N,S,g;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(g=(S=c.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,y,f;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <Input className="join-item" placeholder="Email" />
      <Button className="join-item rounded-r-full">Subscribe</Button>
    </Join>;
}`,...(f=(y=m.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var J,O,I;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <Join {...args}>
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 1" />
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 2" />
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 3" />
    </Join>;
}`,...(I=(O=l.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const k=["Default","Vertically","ExtraElementsInTheGroup","CustomBorderRadius","RadioInputsWithBtnStyle"];export{m as CustomBorderRadius,i as Default,c as ExtraElementsInTheGroup,l as RadioInputsWithBtnStyle,s as Vertically,k as __namedExportsOrder,L as default};
//# sourceMappingURL=Join.stories-7ac506dd.js.map
