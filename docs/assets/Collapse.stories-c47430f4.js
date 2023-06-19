import{t as he,a as t,j as a}from"./tw-merge-e2243cb0.js";import{R as Ce,r as N}from"./index-ebeaab24.js";import{c as be}from"./clsx.m-1229b3e0.js";import{C as ge,a as ye}from"./CollapseContent-b9365266.js";const w=Ce.forwardRef(({children:s,checkbox:n,icon:o,open:r,dataTheme:F,className:_,onOpen:g,onClose:y,onToggle:l,...i},pe)=>{const ue=he("collapse",_,be({"collapse-arrow":o==="arrow","collapse-plus":o==="plus","collapse-open":r===!0,"collapse-close":r===!1})),[I,me]=N.useState(r),x=N.useRef(null);return t("div",{"aria-expanded":r,...i,ref:pe,tabIndex:I===!0?void 0:0,"data-theme":F,className:ue,onBlur:c=>{!n&&l&&l(),!n&&y&&y(),i.onBlur&&i.onBlur(c)},onFocus:c=>{!n&&l&&l(),!n&&g&&g(),i.onFocus&&i.onFocus(c)},children:[n&&a("input",{type:"checkbox",tabIndex:I===!0?0:void 0,className:"peer",ref:x,onChange:()=>{var c,S,q;l&&l(),g&&((c=x.current)!=null&&c.checked)?g():y&&!((S=x.current)!=null&&S.checked)&&y(),me((q=x.current)==null?void 0:q.checked)}}),s]})}),e=Object.assign(w,{Title:ge,Content:ye});try{w.displayName="Collapse",w.__docgenInfo={description:"",displayName:"Collapse",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},checkbox:{defaultValue:null,description:"",name:"checkbox",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow"'},{value:'"plus"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}try{e.displayName="Collapse",e.__docgenInfo={description:"",displayName:"Collapse",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},checkbox:{defaultValue:null,description:"",name:"checkbox",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow"'},{value:'"plus"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}const Fe={title:"Data Display/Collapse",component:e},O=s=>t(e,{...s,children:[a(e.Title,{className:"text-xl font-medium",children:"Focus me to see content"}),a(e.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]}),d=O.bind({});d.args={};const p=s=>t(e,{...s,children:[a(e.Title,{className:"text-xl font-medium",children:"Click me to show/hide content"}),a(e.Content,{children:"hello"})]});p.args={checkbox:!0};const u=O.bind({});u.args={className:"border border-base-300 bg-base-100 rounded-box"};const m=O.bind({});m.args={className:"border border-base-300 bg-base-100 rounded-box",icon:"arrow"};const h=O.bind({});h.args={className:"border border-base-300 bg-base-100 rounded-box",icon:"plus"};const C=s=>t(e,{...s,children:[a(e.Title,{className:"text-xl font-medium",children:"I have collapse-open class"}),a(e.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]});C.args={className:"border border-base-300 bg-base-100 rounded-box",open:!0};const b=s=>t(e,{...s,children:[a(e.Title,{className:"text-xl font-medium",children:"I have collapse-close class"}),a(e.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]});b.args={className:"border border-base-300 bg-base-100 rounded-box",open:!1};const f=s=>t(e,{...s,className:"group",children:[a(e.Title,{className:"bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content",children:"Focus me to see content"}),a(e.Content,{className:"bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content",children:a("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]}),k=s=>t(e,{...s,className:"group",checkbox:!0,children:[a(e.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),a(e.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:a("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]}),T=s=>{const[n,o]=N.useState(!1);return t("div",{children:[t("span",{children:["Checkbox is ",n?"open":"closed","."]}),t(e,{...s,className:"group",onClose:()=>{o(!1)},onOpen:()=>{o(!0)},onToggle:()=>{console.log("toggled!")},children:[a(e.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),a(e.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:a("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]})]})},v=s=>{const[n,o]=N.useState(!1);return t("div",{children:[t("span",{children:["Checkbox is ",n?"open":"closed","."]}),t(e,{...s,className:"group",onClose:()=>{o(!1)},onOpen:()=>{o(!0)},onToggle:()=>{console.log("toggled!")},checkbox:!0,children:[a(e.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),a(e.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:a("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]})]})};var V,W,B;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,R,j;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content>
        hello
      </Collapse.Content>
    </Collapse>;
}`,...(j=(R=p.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var A,D,M;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(M=(D=u.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var H,P,$;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...($=(P=m.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var z,G,J;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,Q;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        I have collapse-open class
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(Q=(L=C.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        I have collapse-close class
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <Collapse {...args} className="group">
      <Collapse.Title className="bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content className="bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </Collapse.Content>
    </Collapse>;
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,te,ne;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  return <Collapse {...args} className="group" checkbox>
      <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </Collapse.Content>
    </Collapse>;
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,re,le;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
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
}`,...(le=(re=T.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ce,ie,de;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`args => {
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
}`,...(de=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const _e=["Default","Checkbox","WithBorderAndBackground","WithArrow","WithPlusMinus","ForceOpen","ForceClose","CustomColorsWithFocus","CustomColorsWithFocusCheckbox","HandlingEvents","CheckboxEvents"];export{p as Checkbox,v as CheckboxEvents,f as CustomColorsWithFocus,k as CustomColorsWithFocusCheckbox,d as Default,b as ForceClose,C as ForceOpen,T as HandlingEvents,m as WithArrow,u as WithBorderAndBackground,h as WithPlusMinus,_e as __namedExportsOrder,Fe as default};
//# sourceMappingURL=Collapse.stories-c47430f4.js.map
