import{t as S,a as t,j as n}from"./tw-merge-e8a1af18.js";import{R as be,r as v}from"./index-f1f749bf.js";import{c as ye}from"./clsx.m-1229b3e0.js";import"./_commonjsHelpers-042e6b4d.js";const I=({children:a,className:s,...o})=>{const r=S("collapse-title",s);return t("div",{...o,className:r,children:a})},xe=I;try{I.displayName="CollapseTitle",I.__docgenInfo={description:"",displayName:"CollapseTitle",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const w=({children:a,className:s,...o})=>{const r=S("collapse-content",s);return t("div",{...o,className:r,children:a})},fe=w;try{w.displayName="CollapseContent",w.__docgenInfo={description:"",displayName:"CollapseContent",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const q=be.forwardRef(({children:a,checkbox:s,icon:o,open:r,dataTheme:O,className:F,onOpen:b,onClose:y,onToggle:l,...i},he)=>{const Ce=S("collapse",F,ye({"collapse-arrow":o==="arrow","collapse-plus":o==="plus","collapse-open":r===!0,"collapse-close":r===!1})),[V,ge]=v.useState(r),x=v.useRef(null);return n("div",{"aria-expanded":r,...i,ref:he,tabIndex:V===!0?void 0:0,"data-theme":O,className:Ce,onBlur:c=>{!s&&l&&l(),!s&&y&&y(),i.onBlur&&i.onBlur(c)},onFocus:c=>{!s&&l&&l(),!s&&b&&b(),i.onFocus&&i.onFocus(c)},children:[s&&t("input",{type:"checkbox",tabIndex:V===!0?0:void 0,className:"peer",ref:x,onChange:()=>{var c,W,B;l&&l(),b&&((c=x.current)!=null&&c.checked)?b():y&&!((W=x.current)!=null&&W.checked)&&y(),ge((B=x.current)==null?void 0:B.checked)}}),a]})}),e=Object.assign(q,{Title:xe,Content:fe});try{q.displayName="Collapse",q.__docgenInfo={description:"",displayName:"Collapse",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},checkbox:{defaultValue:null,description:"",name:"checkbox",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow"'},{value:'"plus"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}try{e.displayName="Collapse",e.__docgenInfo={description:"",displayName:"Collapse",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},checkbox:{defaultValue:null,description:"",name:"checkbox",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow"'},{value:'"plus"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ie={title:"Data Display/Collapse",component:e},_=a=>n(e,{...a,children:[t(e.Title,{className:"text-xl font-medium",children:"Focus me to see content"}),t(e.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]}),d=_.bind({});d.args={};const p=a=>n(e,{...a,children:[t(e.Title,{className:"text-xl font-medium",children:"Click me to show/hide content"}),t(e.Content,{children:"hello"})]});p.args={checkbox:!0};const u=_.bind({});u.args={className:"border border-base-300 bg-base-100 rounded-box"};const m=_.bind({});m.args={className:"border border-base-300 bg-base-100 rounded-box",icon:"arrow"};const h=_.bind({});h.args={className:"border border-base-300 bg-base-100 rounded-box",icon:"plus"};const C=a=>n(e,{...a,children:[t(e.Title,{className:"text-xl font-medium",children:"I have collapse-open class"}),t(e.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]});C.args={className:"border border-base-300 bg-base-100 rounded-box",open:!0};const g=a=>n(e,{...a,children:[t(e.Title,{className:"text-xl font-medium",children:"I have collapse-close class"}),t(e.Content,{children:'tabindex="0" attribute is necessary to make the div focusable'})]});g.args={className:"border border-base-300 bg-base-100 rounded-box",open:!1};const f=a=>n(e,{...a,className:"group",children:[t(e.Title,{className:"bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content",children:"Focus me to see content"}),t(e.Content,{className:"bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content",children:t("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]}),k=a=>n(e,{...a,className:"group",checkbox:!0,children:[t(e.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),t(e.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:t("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]}),T=a=>{const[s,o]=v.useState(!1);return n("div",{children:[n("span",{children:["Checkbox is ",s?"open":"closed","."]}),n(e,{...a,className:"group",onClose:()=>{o(!1)},onOpen:()=>{o(!0)},onToggle:()=>{console.log("toggled!")},children:[t(e.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),t(e.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:t("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]})]})},N=a=>{const[s,o]=v.useState(!1);return n("div",{children:[n("span",{children:["Checkbox is ",s?"open":"closed","."]}),n(e,{...a,className:"group",onClose:()=>{o(!1)},onOpen:()=>{o(!0)},onToggle:()=>{console.log("toggled!")},checkbox:!0,children:[t(e.Title,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:"Click me to show/hide content"}),t(e.Content,{className:"bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content",children:t("p",{children:'tabindex="0" attribute is necessary to make the div focusable'})})]})]})};var E,R,j;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(j=(R=d.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var A,D,M;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content>
        hello
      </Collapse.Content>
    </Collapse>;
}`,...(M=(D=p.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var $,H,P;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(P=(H=u.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var z,G,J;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(Q=(L=h.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,Y;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        I have collapse-open class
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <Collapse {...args}>
      <Collapse.Title className="text-xl font-medium">
        I have collapse-close class
      </Collapse.Title>
      <Collapse.Content>
        tabindex="0" attribute is necessary to make the div focusable
      </Collapse.Content>
    </Collapse>;
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,ne;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  return <Collapse {...args} className="group">
      <Collapse.Title className="bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
        Focus me to see content
      </Collapse.Title>
      <Collapse.Content className="bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </Collapse.Content>
    </Collapse>;
}`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,re,le;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  return <Collapse {...args} className="group" checkbox>
      <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Click me to show/hide content
      </Collapse.Title>
      <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </Collapse.Content>
    </Collapse>;
}`,...(le=(re=k.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ce,ie,de;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`args => {
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
}`,...(de=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var pe,ue,me;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
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
}`,...(me=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const we=["Default","Checkbox","WithBorderAndBackground","WithArrow","WithPlusMinus","ForceOpen","ForceClose","CustomColorsWithFocus","CustomColorsWithFocusCheckbox","HandlingEvents","CheckboxEvents"];export{p as Checkbox,N as CheckboxEvents,f as CustomColorsWithFocus,k as CustomColorsWithFocusCheckbox,d as Default,g as ForceClose,C as ForceOpen,T as HandlingEvents,m as WithArrow,u as WithBorderAndBackground,h as WithPlusMinus,we as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Collapse.stories-5b2b6863.js.map
