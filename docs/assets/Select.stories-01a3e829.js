import{j as e,a as l}from"./tw-merge-0a3648bd.js";import{r as h}from"./index-1b03fe98.js";import{S as r}from"./index-cdac515a.js";import"./clsx.m-1229b3e0.js";const{Option:a}=r,S={title:"Data Input/Select",component:r,parameters:{controls:{exclude:["ref"]}},args:{className:"w-full max-w-xs",disabled:!1}},t=s=>{const[m,f]=h.useState("default");return e("div",{className:"flex w-full component-preview p-4 items-center justify-center gap-2 font-sans",children:l(r,{...s,value:m,onChange:v=>f(v.target.value),children:[e(a,{value:"default",disabled:!0,children:"Pick your favorite Simpson"}),e(a,{value:"Homer",children:"Homer"}),e(a,{value:"Marge",children:"Marge"}),e(a,{value:"Bart",children:"Bart"}),e(a,{value:"Lisa",children:"Lisa"}),e(a,{value:"Maggie",children:"Maggie"})]})})},n=s=>e("div",{className:"flex w-full component-preview p-4 items-center justify-center gap-2 font-sans",children:l("div",{className:"form-control w-full max-w-xs",children:[l("label",{className:"label",children:[e("span",{className:"label-text",children:"Pick the best fantasy franchise"}),e("span",{className:"label-text-alt",children:"Alt label"})]}),l(r,{defaultValue:"default",onChange:console.log,...s,children:[e(a,{value:"default",disabled:!0,children:"Pick one"}),e(a,{value:"Star Wars",children:"Star Wars"}),e(a,{value:"Harry Potter",children:"Harry Potter"}),e(a,{value:"Lord of the Rings",children:"Lord of the Rings"}),e(a,{value:"Planet of the Apes",children:"Planet of the Apes"}),e(a,{value:"Star Trek",children:"Star Trek"})]}),l("label",{className:"label",children:[e("span",{className:"label-text-alt",children:"Alt label"}),e("span",{className:"label-text-alt",children:"Alt label"})]})]})});var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('default');
  return <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Select {...args} value={value} onChange={event => setValue(event.target.value)}>
        <Option value={'default'} disabled>
          Pick your favorite Simpson
        </Option>
        <Option value={'Homer'}>Homer</Option>
        <Option value={'Marge'}>Marge</Option>
        <Option value={'Bart'}>Bart</Option>
        <Option value={'Lisa'}>Lisa</Option>
        <Option value={'Maggie'}>Maggie</Option>
      </Select>
    </div>;
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,u,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <Select defaultValue={'default'} onChange={console.log} {...args}>
          <Option value={'default'} disabled>
            Pick one
          </Option>
          <Option value="Star Wars">Star Wars</Option>
          <Option value="Harry Potter">Harry Potter</Option>
          <Option value="Lord of the Rings">Lord of the Rings</Option>
          <Option value="Planet of the Apes">Planet of the Apes</Option>
          <Option value="Star Trek">Star Trek</Option>
        </Select>
        <label className="label">
          <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span>
        </label>
      </div>
    </div>;
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const N=["Default","FormControlAndLabels"];export{t as Default,n as FormControlAndLabels,N as __namedExportsOrder,S as default};
