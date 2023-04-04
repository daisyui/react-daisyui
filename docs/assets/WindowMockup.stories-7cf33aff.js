import{t as y,a as i}from"./tw-merge-837124be.js";import{r as J,R as d}from"./index-f1f749bf.js";import{c as w}from"./clsx.m-1229b3e0.js";import{c as K}from"./constants-3a55f81e.js";import"./_commonjsHelpers-042e6b4d.js";const p=J.forwardRef(({border:r,borderColor:g,backgroundColor:b,frameColor:m,dataTheme:R,className:D,children:v,...I},O)=>{const c=g||m||"base-300",z=y("mockup-window",r&&`border border-${c}`,w({[`border-${c}`]:c,[`bg-${m}`]:m}),D),u=d.Children.count(v)>0&&d.Children.toArray(v)[0],f=w(b&&`bg-${b}`,r&&`border-t border-${c}`,"p-4"),G=u&&d.isValidElement(u)?d.cloneElement(u,{className:y(f,u.props.className)}):i("div",{className:f,children:v});return i("div",{"aria-label":"Window mockup",...I,"data-theme":R,className:z,ref:O,children:G})});p.displayName="WindowMockup";const A=p;try{p.displayName="WindowMockup",p.__docgenInfo={description:"",displayName:"WindowMockup",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},frameColor:{defaultValue:null,description:"",name:"frameColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"neutral"'},{value:'"base-100"'},{value:'"base-200"'},{value:'"base-300"'}]}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"neutral"'},{value:'"base-100"'},{value:'"base-200"'},{value:'"base-300"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"neutral"'},{value:'"base-100"'},{value:'"base-200"'},{value:'"base-300"'}]}}}}}catch{}const Z={title:"Mockup/WindowMockup",component:A,parameters:{controls:{expanded:!0}},argTypes:{color:{control:{type:"select"},options:K}}},e=r=>i(A,{...r,children:i("div",{className:"flex justify-center px-4 py-16 w-96",children:"Hello!"})}),a=e.bind({});a.args={};const o=e.bind({});o.args={border:!0};const s=e.bind({});s.args={border:!0,borderColor:"primary"};const n=e.bind({});n.args={border:!0,borderColor:"primary",frameColor:"primary"};const l=e.bind({});l.args={backgroundColor:"base-300"};const t=e.bind({});t.args={border:!0,borderColor:"primary",frameColor:"primary",backgroundColor:"base-300"};var W,k,C;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <WindowMockup {...args}>
      <div className="flex justify-center px-4 py-16 w-96">Hello!</div>
    </WindowMockup>;
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var h,x,M;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  return <WindowMockup {...args}>
      <div className="flex justify-center px-4 py-16 w-96">Hello!</div>
    </WindowMockup>;
}`,...(M=(x=o.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var N,_,j;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <WindowMockup {...args}>
      <div className="flex justify-center px-4 py-16 w-96">Hello!</div>
    </WindowMockup>;
}`,...(j=(_=s.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var B,H,V;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <WindowMockup {...args}>
      <div className="flex justify-center px-4 py-16 w-96">Hello!</div>
    </WindowMockup>;
}`,...(V=(H=n.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var S,$,q;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return <WindowMockup {...args}>
      <div className="flex justify-center px-4 py-16 w-96">Hello!</div>
    </WindowMockup>;
}`,...(q=($=l.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var E,F,T;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <WindowMockup {...args}>
      <div className="flex justify-center px-4 py-16 w-96">Hello!</div>
    </WindowMockup>;
}`,...(T=(F=t.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};const ee=["Default","WithBorder","WithBorderColor","WithCustomFrameColor","WithBackgroundColor","WithFrameAndBackgroundColor"];export{a as Default,l as WithBackgroundColor,o as WithBorder,s as WithBorderColor,n as WithCustomFrameColor,t as WithFrameAndBackgroundColor,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=WindowMockup.stories-7cf33aff.js.map
