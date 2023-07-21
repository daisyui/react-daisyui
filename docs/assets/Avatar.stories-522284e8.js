import{a as o,j as e}from"./tw-merge-e2243cb0.js";import{A as r}from"./index-7f6bb041.js";import{M as b}from"./index-80d7dcea.js";import"./index-ebeaab24.js";import"./clsx.m-1229b3e0.js";import"./utils-9cddd062.js";const Cr={title:"Data Display/Avatar",component:r,argTypes:{size:{name:"size",control:{type:"radio"},options:["lg","md","sm","xs"]}},args:{innerClassName:"rounded",src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}},N=a=>e(r,{...a}),f=N.bind({}),n=N.bind({});n.args={shape:"circle",size:30};n.argTypes={size:{control:{type:"number",min:1,step:1}}};const u=a=>o("div",{className:"flex items-center gap-4",children:[e(r,{...a,size:"lg"}),e(r,{...a,size:"md"}),e(r,{...a,size:4*20}),e(r,{...a,size:4*16}),e(r,{...a,size:"sm"}),e(r,{...a,size:"xs"})]});u.argTypes={size:{control:!1}};const v=a=>o("div",{className:"flex items-center gap-4",children:[e(r,{...a,innerClassName:"rounded-xl"}),e(r,{...a,shape:"circle"})]});v.argTypes={shape:{control:!1},innerClassName:{control:!1}};const g=a=>o("div",{className:"flex items-center gap-4",children:[e(r,{...a,innerClassName:b.className({variant:"squircle"})}),e(r,{...a,innerClassName:b.className({variant:"hexagon"})}),e(r,{...a,innerClassName:b.className({variant:"triangle"})})]});g.argTypes={innerClassName:{control:!1}};const c=a=>o(r.Group,{children:[e(r,{...a}),e(r,{...a}),e(r,{...a}),e(r,{...a})]});c.args={size:"sm",innerClassName:""};c.argTypes={shape:{control:!1}};const l=({src:a,letters:t,...s})=>o(r.Group,{children:[e(r,{...s,src:a}),e(r,{...s,src:a}),e(r,{...s,src:a}),e(r,{...s,letters:t})]});l.args={size:"sm",letters:"+99",innerClassName:""};l.argTypes={shape:{control:!1}};const i=({src:a,letters:t,...s})=>o("div",{className:"flex flex-col items-center gap-y-2",children:[o(r.Group,{className:"space-x-4",children:[e(r,{...s,src:a}),e(r,{...s,src:a}),e(r,{...s,src:a}),e(r,{...s,letters:t})]}),o(r.Group,{className:"space-x-0",children:[e(r,{...s,src:a}),e(r,{...s,src:a}),e(r,{...s,src:a}),e(r,{...s,letters:t})]}),o(r.Group,{className:"-space-x-4",children:[e(r,{...s,src:a}),e(r,{...s,src:a}),e(r,{...s,src:a}),e(r,{...s,letters:t})]}),o(r.Group,{className:"-space-x-8",children:[e(r,{...s,src:a}),e(r,{...s,src:a}),e(r,{...s,src:a}),e(r,{...s,letters:t})]})]});i.args={size:"sm",letters:"+99",innerClassName:""};i.argTypes={shape:{control:!1}};const A=N.bind({});A.args={border:!0,borderColor:"primary",shape:"circle"};const d=a=>o("div",{className:"flex items-center gap-4",children:[e(r,{...a,online:!0}),e(r,{...a,offline:!0})]});d.argTypes={online:{control:!1},offline:{control:!1}};d.args={innerClassName:"",shape:"circle"};const p=a=>o("div",{className:"flex items-center gap-4",children:[e(r,{...a,letters:"K",size:"lg"}),e(r,{...a,letters:"JO",size:"md",online:!0}),e(r,{...a,letters:"MX",size:"sm"}),e(r,{...a,letters:"AA",size:"xs"})]});p.argTypes={size:{control:!1},online:{control:!1},letters:{control:!1},src:{control:!1}};p.args={shape:"circle",src:""};const dr=o("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"600px",height:"600px",viewBox:"0 0 600 600",enableBackground:"new 0 0 600 600",children:[o("g",{id:"Layer_2",children:[e("path",{fill:"none",stroke:"#E91E63",strokeWidth:"24",strokeMiterlimit:"10",d:`M371.987,227.641
        c47.628,47.628,85.039,98.708,106.914,143.552c26.358,54.033,30.096,99.722,11.103,118.714
        c-19.793,19.793-68.267,15.884-125.731-12.979c-43.445-21.821-92.031-59.119-137.242-104.331
        c-46.354-46.354-84.95-95.545-106.667-139.816c-27.48-56.023-30.057-103.743-10.643-123.157
        c18.838-18.839,63.248-16.056,116.694,9.757C271.574,141.193,323.895,179.548,371.987,227.641z`}),e("path",{fill:"none",stroke:"#E91E63",strokeWidth:"24",strokeMiterlimit:"10",d:`M272.931,201.125
        c65.052-17.465,127.989-24.354,177.767-20.902c59.974,4.16,101.42,23.747,108.385,49.688
        c7.259,27.033-20.345,67.073-74.054,102.434c-40.608,26.733-97.189,50.188-158.941,66.769
        c-63.312,16.998-125.207,25.858-174.408,22.553c-62.26-4.181-104.884-25.789-112.004-52.306
        c-6.907-25.731,17.688-62.811,66.75-96.214C147.879,244.923,207.243,218.761,272.931,201.125z`}),e("path",{fill:"none",stroke:"#E91E63",strokeWidth:"24",strokeMiterlimit:"10",d:`M200.469,273.707
        c17.357-65.081,42.82-123.05,70.671-164.45c33.556-49.882,71.225-76.008,97.178-69.086c27.045,7.212,47.949,51.123,51.76,115.315
        c2.883,48.533-5.055,109.266-21.531,171.046c-16.892,63.341-40.126,121.389-67.562,162.365
        c-34.716,51.852-74.723,77.988-101.252,70.913c-25.743-6.865-45.584-46.692-50.021-105.881
        C175.963,403.92,182.944,339.424,200.469,273.707z`})]}),e("g",{id:"Layer_3",children:e("path",{fill:"#E91E63",d:`M300,349.369c-1.019,0-1.881-0.353-2.586-1.058l-36.679-35.386c-0.392-0.313-0.931-0.822-1.617-1.528
        c-0.686-0.705-1.773-1.988-3.262-3.851c-1.489-1.86-2.822-3.771-3.997-5.73s-2.224-4.33-3.145-7.112
        c-0.92-2.782-1.381-5.486-1.381-8.111c0-8.621,2.488-15.361,7.465-20.221c4.977-4.859,11.854-7.289,20.631-7.289
        c2.43,0,4.909,0.421,7.436,1.264c2.527,0.843,4.879,1.979,7.054,3.41c2.174,1.43,4.046,2.772,5.613,4.026s3.057,2.586,4.467,3.997
        c1.411-1.411,2.899-2.743,4.467-3.997c1.568-1.254,3.438-2.596,5.614-4.026c2.175-1.431,4.525-2.567,7.054-3.41
        c2.527-0.842,5.006-1.264,7.435-1.264c8.778,0,15.655,2.43,20.632,7.289c4.978,4.859,7.466,11.6,7.466,20.221
        c0,8.66-4.487,17.477-13.461,26.451l-36.619,35.268C301.881,349.017,301.019,349.369,300,349.369z`})})]}),C=N.bind({});C.args={shape:"circle",children:dr,border:!0,innerClassName:"",src:""};const h=a=>o(r,{...a,children:[e("span",{className:"absolute text-center font-bold",children:"React"}),dr]});h.args={innerClassName:"",src:""};const m=({src:a,letters:t,...s})=>o("div",{children:[o("div",{className:"flex gap-4 m-4",children:[e(r,{...s,borderColor:"neutral",src:a}),e(r,{...s,borderColor:"primary",src:a}),e(r,{...s,borderColor:"secondary",src:a}),e(r,{...s,borderColor:"accent",src:a}),e(r,{...s,borderColor:"info",src:a}),e(r,{...s,borderColor:"success",src:a}),e(r,{...s,borderColor:"warning",src:a}),e(r,{...s,borderColor:"error",src:a})]}),o("div",{className:"flex gap-4 m-4",children:[e(r,{...s,borderColor:"neutral",color:"neutral",letters:t}),e(r,{...s,borderColor:"primary",color:"primary",letters:t}),e(r,{...s,borderColor:"secondary",color:"secondary",letters:t}),e(r,{...s,borderColor:"accent",color:"accent",letters:t}),e(r,{...s,borderColor:"info",color:"info",letters:t}),e(r,{...s,borderColor:"success",color:"success",letters:t}),e(r,{...s,borderColor:"warning",color:"warning",letters:t}),e(r,{...s,borderColor:"error",color:"error",letters:t})]})]});m.argTypes={color:{control:!1},borderColor:{control:!1}};m.args={letters:"Y",border:!0,shape:"circle",size:"sm"};var x,z,y;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Avatar {...args} />;
}`,...(y=(z=f.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var G,S,M;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  return <Avatar {...args} />;
}`,...(M=(S=n.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var k,w,T;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <div className="flex items-center gap-4">
      <Avatar {...args} size="lg" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size={4 * 20} />
      <Avatar {...args} size={4 * 16} />
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="xs" />
    </div>;
}`,...(T=(w=u.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var E,W,R;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  return <div className="flex items-center gap-4">
      <Avatar {...args} innerClassName="rounded-xl" />
      <Avatar {...args} shape="circle" />
    </div>;
}`,...(R=(W=v.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var _,j,B;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <div className="flex items-center gap-4">
      <Avatar {...args} innerClassName={Mask.className({
      variant: 'squircle'
    })} />
      <Avatar {...args} innerClassName={Mask.className({
      variant: 'hexagon'
    })} />
      <Avatar {...args} innerClassName={Mask.className({
      variant: 'triangle'
    })} />
    </div>;
}`,...(B=(j=g.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var D,L,P;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return <Avatar.Group>
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar {...args} />
    </Avatar.Group>;
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var O,q,I;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`({
  src,
  letters,
  ...args
}) => {
  return <Avatar.Group>
      <Avatar {...args} src={src} />
      <Avatar {...args} src={src} />
      <Avatar {...args} src={src} />
      <Avatar {...args} letters={letters} />
    </Avatar.Group>;
}`,...(I=(q=l.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var J,K,X;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`({
  src,
  letters,
  ...args
}) => {
  return <div className="flex flex-col items-center gap-y-2">
      <Avatar.Group className="space-x-4">
        <Avatar {...args} src={src} />
        <Avatar {...args} src={src} />
        <Avatar {...args} src={src} />
        <Avatar {...args} letters={letters} />
      </Avatar.Group>
      <Avatar.Group className="space-x-0">
        <Avatar {...args} src={src} />
        <Avatar {...args} src={src} />
        <Avatar {...args} src={src} />
        <Avatar {...args} letters={letters} />
      </Avatar.Group>
      <Avatar.Group className="-space-x-4">
        <Avatar {...args} src={src} />
        <Avatar {...args} src={src} />
        <Avatar {...args} src={src} />
        <Avatar {...args} letters={letters} />
      </Avatar.Group>
      <Avatar.Group className="-space-x-8">
        <Avatar {...args} src={src} />
        <Avatar {...args} src={src} />
        <Avatar {...args} src={src} />
        <Avatar {...args} letters={letters} />
      </Avatar.Group>
    </div>;
}`,...(X=(K=i.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,F,H;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  return <Avatar {...args} />;
}`,...(H=(F=A.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var Q,U,V;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  return <div className="flex items-center gap-4">
      <Avatar {...args} online />
      <Avatar {...args} offline />
    </div>;
}`,...(V=(U=d.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var Z,$,rr;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  return <div className="flex items-center gap-4">
      <Avatar {...args} letters="K" size="lg" />
      <Avatar {...args} letters="JO" size="md" online={true} />
      <Avatar {...args} letters="MX" size="sm" />
      <Avatar {...args} letters="AA" size="xs" />
    </div>;
}`,...(rr=($=p.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,ar,sr;C.parameters={...C.parameters,docs:{...(er=C.parameters)==null?void 0:er.docs,source:{originalSource:`args => {
  return <Avatar {...args} />;
}`,...(sr=(ar=C.parameters)==null?void 0:ar.docs)==null?void 0:sr.source}}};var or,tr,nr;h.parameters={...h.parameters,docs:{...(or=h.parameters)==null?void 0:or.docs,source:{originalSource:`args => {
  return <Avatar {...args}>
      <span className="absolute text-center font-bold">React</span>
      {reactLogoSvg}
    </Avatar>;
}`,...(nr=(tr=h.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};var cr,lr,ir;m.parameters={...m.parameters,docs:{...(cr=m.parameters)==null?void 0:cr.docs,source:{originalSource:`({
  src,
  letters,
  ...args
}) => {
  return <div>
      <div className="flex gap-4 m-4">
        <Avatar {...args} borderColor="neutral" src={src} />
        <Avatar {...args} borderColor="primary" src={src} />
        <Avatar {...args} borderColor="secondary" src={src} />
        <Avatar {...args} borderColor="accent" src={src} />
        <Avatar {...args} borderColor="info" src={src} />
        <Avatar {...args} borderColor="success" src={src} />
        <Avatar {...args} borderColor="warning" src={src} />
        <Avatar {...args} borderColor="error" src={src} />
      </div>
      <div className="flex gap-4 m-4">
        <Avatar {...args} borderColor="neutral" color="neutral" letters={letters} />
        <Avatar {...args} borderColor="primary" color="primary" letters={letters} />
        <Avatar {...args} borderColor="secondary" color="secondary" letters={letters} />
        <Avatar {...args} borderColor="accent" color="accent" letters={letters} />
        <Avatar {...args} borderColor="info" color="info" letters={letters} />
        <Avatar {...args} borderColor="success" color="success" letters={letters} />
        <Avatar {...args} borderColor="warning" color="warning" letters={letters} />
        <Avatar {...args} borderColor="error" color="error" letters={letters} />
      </div>
    </div>;
}`,...(ir=(lr=m.parameters)==null?void 0:lr.docs)==null?void 0:ir.source}}};const hr=["Default","CustomSize","Sizes","Rounded","WithMask","Group","GroupWithCounter","GroupSpaceBetween","Ring","PresenceIndicator","Placeholder","WithSvg","MultipleChildren","Colors"];export{m as Colors,n as CustomSize,f as Default,c as Group,i as GroupSpaceBetween,l as GroupWithCounter,h as MultipleChildren,p as Placeholder,d as PresenceIndicator,A as Ring,v as Rounded,u as Sizes,g as WithMask,C as WithSvg,hr as __namedExportsOrder,Cr as default};
//# sourceMappingURL=Avatar.stories-522284e8.js.map
