import{t as w,j as t,a as s}from"./tw-merge-e2243cb0.js";import{R as F,r as J}from"./index-ebeaab24.js";import{c as K}from"./clsx.m-1229b3e0.js";import{A as U}from"./index-c5432677.js";import{B as I}from"./Button-3d301c6a.js";import"./utils-9cddd062.js";import"./index-3106c12b.js";const h=F.forwardRef(({variant:e,className:r,...i},l)=>{const c=w(r,K({"stat-title":e==="title","stat-value":e==="value","stat-desc":e==="desc","stat-figure":e==="figure","stat-actions":e==="actions"}));return t("div",{...i,className:c,ref:l})}),O=h;try{h.displayName="StatItem",h.__docgenInfo={description:"",displayName:"StatItem",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"title"'},{value:'"value"'},{value:'"figure"'},{value:'"desc"'},{value:'"actions"'}]}}}}}catch{}const p=J.forwardRef(({dataTheme:e,className:r,...i},l)=>{const c=w("stat",r);return t("div",{...i,"data-theme":e,className:c,ref:l})}),a=Object.assign(p,{Item:O});try{p.displayName="Stat",p.__docgenInfo={description:"",displayName:"Stat",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const g=F.forwardRef(({horizontal:e,vertical:r,dataTheme:i,className:l,children:c,...W},$)=>{const q=w("stats",l,K({"stats-horizontal":e,"stats-vertical":r}));return t("div",{...W,ref:$,"data-theme":i,className:q,children:c})}),n=Object.assign(g,{Stat:a});try{g.displayName="Stats",g.__docgenInfo={description:"",displayName:"Stats",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Data Display/Stats",component:n},o=e=>t(n,{...e,className:"bg-base-200 shadow",children:s(n.Stat,{children:[t(a.Item,{variant:"title",children:"Total Page Views"}),t(a.Item,{variant:"value",children:"89,400"}),t(a.Item,{variant:"desc",children:"21% more than last month"})]})}),d=e=>s(n,{...e,className:"shadow font-sans",children:[s(n.Stat,{children:[t(a.Item,{variant:"figure",className:"text-primary",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),t(a.Item,{variant:"title",children:"Total Likes"}),t(a.Item,{variant:"value",className:"text-primary",children:"25.6K"}),t(a.Item,{variant:"desc",children:"21% more than last month"})]}),s(n.Stat,{children:[t(a.Item,{variant:"figure",className:"text-secondary",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),t(a.Item,{variant:"title",children:"Page Views"}),t(a.Item,{variant:"value",className:"text-secondary",children:"2.6M"}),t(a.Item,{variant:"desc",children:"21% more than last month"})]}),s(n.Stat,{children:[t(a.Item,{variant:"figure",className:"text-primary",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),t(a.Item,{variant:"figure",className:" text-secondary",children:t(U,{size:"sm",online:!0,src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",shape:"circle"})}),t(a.Item,{variant:"value",children:"86%"}),t(a.Item,{variant:"title",children:"Tasks done"}),t(a.Item,{variant:"desc",className:"text-secondary",children:"31 tasks remaining"})]})]}),S=e=>s(n,{...e,className:"shadow font-sans",children:[s(n.Stat,{className:"place-items-center",children:[t(a.Item,{variant:"title",children:"Downloads"}),t(a.Item,{variant:"value",children:"31K"}),t(a.Item,{variant:"desc",children:"From January 1st to February 1st"})]}),s(n.Stat,{className:"place-items-center",children:[t(a.Item,{variant:"title",children:"Users"}),t(a.Item,{variant:"value",className:"text-secondary",children:"4,200"}),t(a.Item,{variant:"desc",className:"text-secondary",children:"↗︎ 40 (2%)"})]}),s(n.Stat,{className:"place-items-center",children:[t(a.Item,{variant:"title",children:"New Registers"}),t(a.Item,{variant:"value",children:"1,200"}),t(a.Item,{variant:"desc",children:"↘︎ 90 (14%)"})]})]}),m=e=>s(n,{...e,className:"shadow font-sans",children:[s(n.Stat,{children:[t(a.Item,{variant:"title",children:"Downloads"}),t(a.Item,{variant:"value",children:"31K"}),t(a.Item,{variant:"desc",children:"Jan 1st - Feb 1st"})]}),s(n.Stat,{children:[t(a.Item,{variant:"title",children:"New Users"}),t(a.Item,{variant:"value",children:"4,200"}),t(a.Item,{variant:"desc",children:"↗︎ 400 (22%)"})]}),s(n.Stat,{children:[t(a.Item,{variant:"title",children:"New Registers"}),t(a.Item,{variant:"value",children:"1,200"}),t(a.Item,{variant:"desc",children:"↘︎ 90 (14%)"})]})]});m.args={vertical:!0};const v=e=>s(n,{className:"stats-vertical lg:stats-horizontal shadow",children:[s(n.Stat,{children:[t(a.Item,{variant:"title",children:"Downloads"}),t(a.Item,{variant:"value",children:"31K"}),t(a.Item,{variant:"desc",children:"Jan 1st - Feb 1st"})]}),s(n.Stat,{children:[t(a.Item,{variant:"title",children:"New Users"}),t(a.Item,{variant:"value",children:"4,200"}),t(a.Item,{variant:"desc",children:"↗︎ 400 (22%)"})]}),s(n.Stat,{children:[t(a.Item,{variant:"title",children:"New Registers"}),t(a.Item,{variant:"value",children:"1,200"}),t(a.Item,{variant:"desc",children:"↘︎ 90 (14%)"})]})]}),u=e=>s(n,{...e,className:"font-sans bg-primary text-primary-content",children:[s(n.Stat,{children:[t(a.Item,{variant:"title",children:"Account balance"}),t(a.Item,{variant:"value",children:"$89,400"}),t("div",{className:"stat-actions",children:t(I,{size:"sm",color:"success",children:"Add funds"})})]}),s(n.Stat,{children:[t(a.Item,{variant:"title",children:"Current balance"}),t(a.Item,{variant:"value",children:"$89,400"}),s("div",{className:"stat-actions gap-1 flex",children:[t(I,{size:"sm",children:"Withdrawal"}),t(I,{size:"sm",children:"deposit"})]})]})]});var N,f,y;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Stats {...args} className="bg-base-200 shadow">
      <Stats.Stat>
        <Stat.Item variant="title">Total Page Views</Stat.Item>
        <Stat.Item variant="value">89,400</Stat.Item>
        <Stat.Item variant="desc">21% more than last month</Stat.Item>
      </Stats.Stat>
    </Stats>;
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,k,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow font-sans">
      <Stats.Stat>
        <Stat.Item variant="figure" className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </Stat.Item>
        <Stat.Item variant="title">Total Likes</Stat.Item>
        <Stat.Item variant="value" className="text-primary">
          25.6K
        </Stat.Item>
        <Stat.Item variant="desc">21% more than last month</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="figure" className="text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </Stat.Item>
        <Stat.Item variant="title">Page Views</Stat.Item>
        <Stat.Item variant="value" className="text-secondary">
          2.6M
        </Stat.Item>
        <Stat.Item variant="desc">21% more than last month</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="figure" className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </Stat.Item>
        <Stat.Item variant="figure" className=" text-secondary">
          <Avatar size="sm" online={true} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" shape="circle"></Avatar>
        </Stat.Item>
        <Stat.Item variant="value">86%</Stat.Item>
        <Stat.Item variant="title">Tasks done</Stat.Item>
        <Stat.Item variant="desc" className="text-secondary">
          31 tasks remaining
        </Stat.Item>
      </Stats.Stat>
    </Stats>;
}`,...(b=(k=d.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var _,L,z;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow font-sans">
      <Stats.Stat className="place-items-center">
        <Stat.Item variant="title">Downloads</Stat.Item>
        <Stat.Item variant="value">31K</Stat.Item>
        <Stat.Item variant="desc">From January 1st to February 1st</Stat.Item>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stat.Item variant="title">Users</Stat.Item>
        <Stat.Item variant="value" className="text-secondary">
          4,200
        </Stat.Item>
        <Stat.Item variant="desc" className="text-secondary">
          ↗︎ 40 (2%)
        </Stat.Item>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stat.Item variant="title">New Registers</Stat.Item>
        <Stat.Item variant="value">1,200</Stat.Item>
        <Stat.Item variant="desc">↘︎ 90 (14%)</Stat.Item>
      </Stats.Stat>
    </Stats>;
}`,...(z=(L=S.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var B,V,j;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow font-sans">
      <Stats.Stat>
        <Stat.Item variant="title">Downloads</Stat.Item>
        <Stat.Item variant="value">31K</Stat.Item>
        <Stat.Item variant="desc">Jan 1st - Feb 1st</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="title">New Users</Stat.Item>
        <Stat.Item variant="value">4,200</Stat.Item>
        <Stat.Item variant="desc">↗︎ 400 (22%)</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="title">New Registers</Stat.Item>
        <Stat.Item variant="value">1,200</Stat.Item>
        <Stat.Item variant="desc">↘︎ 90 (14%)</Stat.Item>
      </Stats.Stat>
    </Stats>;
}`,...(j=(V=m.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var R,T,A;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  return <Stats className="stats-vertical lg:stats-horizontal shadow">
      <Stats.Stat>
        <Stat.Item variant="title">Downloads</Stat.Item>
        <Stat.Item variant="value">31K</Stat.Item>
        <Stat.Item variant="desc">Jan 1st - Feb 1st</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="title">New Users</Stat.Item>
        <Stat.Item variant="value">4,200</Stat.Item>
        <Stat.Item variant="desc">↗︎ 400 (22%)</Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stat.Item variant="title">New Registers</Stat.Item>
        <Stat.Item variant="value">1,200</Stat.Item>
        <Stat.Item variant="desc">↘︎ 90 (14%)</Stat.Item>
      </Stats.Stat>
    </Stats>;
}`,...(A=(T=v.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var D,M,C;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return <Stats {...args} className="font-sans bg-primary text-primary-content">
      <Stats.Stat>
        <Stat.Item variant="title">Account balance</Stat.Item>
        <Stat.Item variant="value">$89,400</Stat.Item>
        <div className="stat-actions">
          <Button size="sm" color="success">
            Add funds
          </Button>
        </div>
      </Stats.Stat>
      <Stats.Stat>
        <Stat.Item variant="title">Current balance</Stat.Item>
        <Stat.Item variant="value">$89,400</Stat.Item>
        <div className="stat-actions gap-1 flex">
          <Button size="sm">Withdrawal</Button>
          <Button size="sm">deposit</Button>
        </div>
      </Stats.Stat>
    </Stats>;
}`,...(C=(M=u.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const tt=["Default","IconsOrImage","CenteredItems","Vertical","Responsive","CustomColorsAndButton"];export{S as CenteredItems,u as CustomColorsAndButton,o as Default,d as IconsOrImage,v as Responsive,m as Vertical,tt as __namedExportsOrder,Z as default};
//# sourceMappingURL=Stats.stories-937d2a14.js.map
