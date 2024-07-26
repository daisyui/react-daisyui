import{a as n,j as s}from"./tw-merge-0a3648bd.js";import{r as Y}from"./index-1b03fe98.js";import{C as e}from"./index-679b5f9b.js";import"./clsx.m-1229b3e0.js";import"./CollapseContent-8035002f.js";const re={title:"Data Display/Collapse",component:e,args:{className:"bg-base-200"}},g=t=>n(e,{...t,children:[s(e.Title,{className:"text-xl font-medium",children:"Focus me to see content"}),s(e.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]}),a=g.bind({});a.args={};const r=t=>n(e,{...t,children:[s(e.Title,{className:"text-xl font-medium",children:"Click me to show/hide content"}),s(e.Content,{children:"hello"})]});r.args={checkbox:!0};const c=g.bind({});c.args={className:"border border-base-300 bg-base-200"};const l=g.bind({});l.args={className:"border border-base-300 bg-base-200",icon:"arrow"};const i=g.bind({});i.args={className:"border border-base-300 bg-base-200",icon:"plus"};const p=t=>n(e,{...t,children:[s(e.Title,{className:"text-xl font-medium",children:"I have collapse-open class"}),s(e.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]});p.args={className:"border border-base-300 bg-base-200",open:!0};const d=t=>n(e,{...t,children:[s(e.Title,{className:"text-xl font-medium",children:"I have collapse-close class"}),s(e.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]});d.args={className:"border border-base-300 bg-base-200",open:!1};const m=t=>n(e,{...t,className:"group",children:[s(e.Title,{className:"bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content",children:"Focus me to see content"}),s(e.Content,{className:"bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content",children:s("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]}),u=t=>n(e,{...t,className:"group",checkbox:!0,children:[s(e.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),s(e.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:s("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]}),h=t=>{const[b,o]=Y.useState(!1);return n("div",{children:[n("span",{children:["Checkbox is ",b?"open":"closed","."]}),n(e,{...t,className:"group",onClose:()=>{o(!1)},onOpen:()=>{o(!0)},onToggle:()=>{console.log("toggled!")},children:[s(e.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),s(e.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:s("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]})]})},C=t=>{const[b,o]=Y.useState(!1);return n("div",{children:[n("span",{children:["Checkbox is ",b?"open":"closed","."]}),n(e,{...t,className:"group",onClose:()=>{o(!1)},onOpen:()=>{o(!0)},onToggle:()=>{console.log("toggled!")},checkbox:!0,children:[s(e.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),s(e.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:s("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]})]})};var x,y,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var f,T,N;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content>hello</Collapse.Content>
    </Collapse>;
}`,...(N=(T=r.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var v,O,F;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(F=(O=c.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var S,I,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(w=(I=l.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var W,E,A;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(A=(E=i.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var B,D,j;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        I have collapse-open class
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(j=(D=p.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var _,H,M;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        I have collapse-close class
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var P,q,z;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <Collapse {...args} className="group">
      <Collapse.Title className="bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content className="bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </Collapse.Content>
    </Collapse>;
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  return <Collapse {...args} className="group" checkbox>
      <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </Collapse.Content>
    </Collapse>;
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,R;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
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
}`,...(R=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,V,X;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...(X=(V=C.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const ce=["Default","Checkbox","WithBorderAndBackground","WithArrow","WithPlusMinus","ForceOpen","ForceClose","CustomColorsWithFocus","CustomColorsWithFocusCheckbox","HandlingEvents","CheckboxEvents"];export{r as Checkbox,C as CheckboxEvents,m as CustomColorsWithFocus,u as CustomColorsWithFocusCheckbox,a as Default,d as ForceClose,p as ForceOpen,h as HandlingEvents,l as WithArrow,c as WithBorderAndBackground,i as WithPlusMinus,ce as __namedExportsOrder,re as default};
