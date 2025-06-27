import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as v}from"./iframe-DDnXVYpC.js";import{S as s}from"./index-Bew10GTu.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-yGZq-iow.js";const{Option:a}=s,O={title:"Data Input/Select",component:s,parameters:{controls:{exclude:["ref"]}},args:{className:"w-full max-w-xs",disabled:!1}},l=r=>{const[d,m]=v.useState("default");return e.jsx("div",{className:"flex w-full component-preview p-4 items-center justify-center gap-2 font-sans",children:e.jsxs(s,{...r,value:d,onChange:f=>m(f.target.value),children:[e.jsx(a,{value:"default",disabled:!0,children:"Pick your favorite Simpson"}),e.jsx(a,{value:"Homer",children:"Homer"}),e.jsx(a,{value:"Marge",children:"Marge"}),e.jsx(a,{value:"Bart",children:"Bart"}),e.jsx(a,{value:"Lisa",children:"Lisa"}),e.jsx(a,{value:"Maggie",children:"Maggie"})]})})},t=r=>e.jsx("div",{className:"flex w-full component-preview p-4 items-center justify-center gap-2 font-sans",children:e.jsxs("div",{className:"form-control w-full max-w-xs",children:[e.jsxs("label",{className:"label",children:[e.jsx("span",{className:"label-text",children:"Pick the best fantasy franchise"}),e.jsx("span",{className:"label-text-alt",children:"Alt label"})]}),e.jsxs(s,{defaultValue:"default",onChange:console.log,...r,children:[e.jsx(a,{value:"default",disabled:!0,children:"Pick one"}),e.jsx(a,{value:"Star Wars",children:"Star Wars"}),e.jsx(a,{value:"Harry Potter",children:"Harry Potter"}),e.jsx(a,{value:"Lord of the Rings",children:"Lord of the Rings"}),e.jsx(a,{value:"Planet of the Apes",children:"Planet of the Apes"}),e.jsx(a,{value:"Star Trek",children:"Star Trek"})]}),e.jsxs("label",{className:"label",children:[e.jsx("span",{className:"label-text-alt",children:"Alt label"}),e.jsx("span",{className:"label-text-alt",children:"Alt label"})]})]})});var n,o,i;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(i=(o=l.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const S=["Default","FormControlAndLabels"];export{l as Default,t as FormControlAndLabels,S as __namedExportsOrder,O as default};
