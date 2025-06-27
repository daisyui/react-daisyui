import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as $}from"./iframe-DDnXVYpC.js";import{C as s}from"./index-BTzAqsfK.js";import"./clsx-B-dksMZM.js";import"./bundle-mjs-yGZq-iow.js";import"./CollapseContent-CGPqZTWi.js";const re={title:"Data Display/Collapse",component:s,args:{className:"bg-base-200"}},C=t=>e.jsxs(s,{...t,children:[e.jsx(s.Title,{className:"text-xl font-medium",children:"Focus me to see content"}),e.jsx(s.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]}),a=C.bind({});a.args={};const n=t=>e.jsxs(s,{...t,children:[e.jsx(s.Title,{className:"text-xl font-medium",children:"Click me to show/hide content"}),e.jsx(s.Content,{children:"hello"})]});n.args={checkbox:!0};const r=C.bind({});r.args={className:"border border-base-300 bg-base-200"};const c=C.bind({});c.args={className:"border border-base-300 bg-base-200",icon:"arrow"};const l=C.bind({});l.args={className:"border border-base-300 bg-base-200",icon:"plus"};const i=t=>e.jsxs(s,{...t,children:[e.jsx(s.Title,{className:"text-xl font-medium",children:"I have collapse-open class"}),e.jsx(s.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]});i.args={className:"border border-base-300 bg-base-200",open:!0};const p=t=>e.jsxs(s,{...t,children:[e.jsx(s.Title,{className:"text-xl font-medium",children:"I have collapse-close class"}),e.jsx(s.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]});p.args={className:"border border-base-300 bg-base-200",open:!1};const d=t=>e.jsxs(s,{...t,className:"group",children:[e.jsx(s.Title,{className:"bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content",children:"Focus me to see content"}),e.jsx(s.Content,{className:"bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content",children:e.jsx("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]}),m=t=>e.jsxs(s,{...t,className:"group",checkbox:!0,children:[e.jsx(s.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),e.jsx(s.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:e.jsx("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]}),u=t=>{const[g,o]=$.useState(!1),b=()=>{console.log("toggled!")},x=()=>{o(!0)},y=()=>{o(!1)};return e.jsxs("div",{children:[e.jsxs("span",{children:["Checkbox is ",g?"open":"closed","."]}),e.jsxs(s,{...t,className:"group",onClose:y,onOpen:x,onToggle:b,children:[e.jsx(s.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),e.jsx(s.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:e.jsx("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]})]})},h=t=>{const[g,o]=$.useState(!1),b=()=>{console.log("toggled!")},x=()=>{o(!0)},y=()=>{o(!1)};return e.jsxs("div",{children:[e.jsxs("span",{children:["Checkbox is ",g?"open":"closed","."]}),e.jsxs(s,{...t,className:"group",onClose:y,onOpen:x,onToggle:b,checkbox:!0,children:[e.jsx(s.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),e.jsx(s.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:e.jsx("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]})]})};var k,f,N;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(N=(f=a.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var T,j,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content>hello</Collapse.Content>
    </Collapse>;
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var O,F,S;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(S=(F=r.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var I,w,W;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(W=(w=c.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var E,A,B;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var D,_,H;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        I have collapse-open class
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(H=(_=i.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var M,P,R;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        I have collapse-close class
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(R=(P=p.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var q,z,G;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <Collapse {...args} className="group">
      <Collapse.Title className="bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content className="bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </Collapse.Content>
    </Collapse>;
}`,...(G=(z=d.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  return <Collapse {...args} className="group" checkbox>
      <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </Collapse.Content>
    </Collapse>;
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,U,V;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    console.log('toggled!');
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <div>
      <span>Checkbox is {isOpen ? 'open' : 'closed'}.</span>
      <Collapse {...args} className="group" onClose={handleClose} onOpen={handleOpen} onToggle={handleToggle}>
        <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Click me to show/hide content
        </Collapse.Title>
        <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </Collapse.Content>
      </Collapse>
    </div>;
}`,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    console.log('toggled!');
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <div>
      <span>Checkbox is {isOpen ? 'open' : 'closed'}.</span>
      <Collapse {...args} className="group" onClose={handleClose} onOpen={handleOpen} onToggle={handleToggle} checkbox>
        <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Click me to show/hide content
        </Collapse.Title>
        <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>tabindex="0" attribute is necessary to make the div focusable</p>
        </Collapse.Content>
      </Collapse>
    </div>;
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ce=["Default","Checkbox","WithBorderAndBackground","WithArrow","WithPlusMinus","ForceOpen","ForceClose","CustomColorsWithFocus","CustomColorsWithFocusCheckbox","HandlingEvents","CheckboxEvents"];export{n as Checkbox,h as CheckboxEvents,d as CustomColorsWithFocus,m as CustomColorsWithFocusCheckbox,a as Default,p as ForceClose,i as ForceOpen,u as HandlingEvents,c as WithArrow,r as WithBorderAndBackground,l as WithPlusMinus,ce as __namedExportsOrder,re as default};
