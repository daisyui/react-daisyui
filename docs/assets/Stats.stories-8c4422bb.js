import{t as g,a,j as s}from"./tw-merge-fe695a60.js";import{R as C,r as q}from"./index-ebeaab24.js";import{c as F}from"./clsx.m-1229b3e0.js";import{A as J}from"./index-8b88db11.js";import{B as u}from"./Button-28269a3e.js";import"./utils-50b96f3f.js";import"./index-357fb5a8.js";const I=C.forwardRef(({variant:e,className:n,...r},i)=>{const l=g(n,F({"stat-title":e==="title","stat-value":e==="value","stat-desc":e==="desc","stat-figure":e==="figure","stat-actions":e==="actions"}));return a("div",{...r,className:l,ref:i})}),U=I;try{I.displayName="StatItem",I.__docgenInfo={description:"",displayName:"StatItem",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"title"'},{value:'"figure"'},{value:'"value"'},{value:'"desc"'},{value:'"actions"'}]}}}}}catch{}const h=q.forwardRef(({dataTheme:e,className:n,...r},i)=>{const l=g("stat",n);return a("div",{...r,"data-theme":e,className:l,ref:i})}),O=Object.assign(h,{Item:U});try{h.displayName="Stat",h.__docgenInfo={description:"",displayName:"Stat",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const p=C.forwardRef(({horizontal:e,vertical:n,dataTheme:r,className:i,children:l,...K},W)=>{const $=g("stats",i,F({"stats-horizontal":e,"stats-vertical":n}));return a("div",{...K,ref:W,"data-theme":r,className:$,children:l})}),t=Object.assign(p,{Stat:O});try{p.displayName="Stats",p.__docgenInfo={description:"",displayName:"Stats",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Data Display/Stats",component:t},c=e=>a(t,{...e,className:"bg-base-200 shadow",children:s(t.Stat,{children:[a(t.Stat.Item,{variant:"title",children:"Total Page Views"}),a(t.Stat.Item,{variant:"value",children:"89,400"}),a(t.Stat.Item,{variant:"desc",children:"21% more than last month"})]})}),m=e=>s(t,{...e,className:"shadow font-sans",children:[s(t.Stat,{children:[a(t.Stat.Item,{variant:"figure",className:"text-primary",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),a(t.Stat.Item,{variant:"title",children:"Total Likes"}),a(t.Stat.Item,{variant:"value",className:"text-primary",children:"25.6K"}),a(t.Stat.Item,{variant:"desc",children:"21% more than last month"})]}),s(t.Stat,{children:[a(t.Stat.Item,{variant:"figure",className:"text-secondary",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),a(t.Stat.Item,{variant:"title",children:"Page Views"}),a(t.Stat.Item,{variant:"value",className:"text-secondary",children:"2.6M"}),a(t.Stat.Item,{variant:"desc",children:"21% more than last month"})]}),s(t.Stat,{children:[a(t.Stat.Item,{variant:"figure",className:"text-primary",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),a(t.Stat.Item,{variant:"figure",className:" text-secondary",children:a(J,{size:"sm",online:!0,src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",shape:"circle"})}),a(t.Stat.Item,{variant:"value",children:"86%"}),a(t.Stat.Item,{variant:"title",children:"Tasks done"}),a(t.Stat.Item,{variant:"desc",className:"text-secondary",children:"31 tasks remaining"})]})]}),o=e=>s(t,{...e,className:"shadow font-sans",children:[s(t.Stat,{className:"place-items-center",children:[a(t.Stat.Item,{variant:"title",children:"Downloads"}),a(t.Stat.Item,{variant:"value",children:"31K"}),a(t.Stat.Item,{variant:"desc",children:"From January 1st to February 1st"})]}),s(t.Stat,{className:"place-items-center",children:[a(t.Stat.Item,{variant:"title",children:"Users"}),a(t.Stat.Item,{variant:"value",className:"text-secondary",children:"4,200"}),a(t.Stat.Item,{variant:"desc",className:"text-secondary",children:"↗︎ 40 (2%)"})]}),s(t.Stat,{className:"place-items-center",children:[a(t.Stat.Item,{variant:"title",children:"New Registers"}),a(t.Stat.Item,{variant:"value",children:"1,200"}),a(t.Stat.Item,{variant:"desc",children:"↘︎ 90 (14%)"})]})]}),S=e=>s(t,{...e,className:"shadow font-sans",children:[s(t.Stat,{children:[a(t.Stat.Item,{variant:"title",children:"Downloads"}),a(t.Stat.Item,{variant:"value",children:"31K"}),a(t.Stat.Item,{variant:"desc",children:"Jan 1st - Feb 1st"})]}),s(t.Stat,{children:[a(t.Stat.Item,{variant:"title",children:"New Users"}),a(t.Stat.Item,{variant:"value",children:"4,200"}),a(t.Stat.Item,{variant:"desc",children:"↗︎ 400 (22%)"})]}),s(t.Stat,{children:[a(t.Stat.Item,{variant:"title",children:"New Registers"}),a(t.Stat.Item,{variant:"value",children:"1,200"}),a(t.Stat.Item,{variant:"desc",children:"↘︎ 90 (14%)"})]})]});S.args={vertical:!0};const d=e=>s(t,{className:"stats-vertical lg:stats-horizontal shadow",children:[s(t.Stat,{children:[a(t.Stat.Item,{variant:"title",children:"Downloads"}),a(t.Stat.Item,{variant:"value",children:"31K"}),a(t.Stat.Item,{variant:"desc",children:"Jan 1st - Feb 1st"})]}),s(t.Stat,{children:[a(t.Stat.Item,{variant:"title",children:"New Users"}),a(t.Stat.Item,{variant:"value",children:"4,200"}),a(t.Stat.Item,{variant:"desc",children:"↗︎ 400 (22%)"})]}),s(t.Stat,{children:[a(t.Stat.Item,{variant:"title",children:"New Registers"}),a(t.Stat.Item,{variant:"value",children:"1,200"}),a(t.Stat.Item,{variant:"desc",children:"↘︎ 90 (14%)"})]})]}),v=e=>s(t,{...e,className:"font-sans bg-primary text-primary-content",children:[s(t.Stat,{children:[a(t.Stat.Item,{variant:"title",children:"Account balance"}),a(t.Stat.Item,{variant:"value",children:"$89,400"}),a("div",{className:"stat-actions",children:a(u,{size:"sm",color:"success",children:"Add funds"})})]}),s(t.Stat,{children:[a(t.Stat.Item,{variant:"title",children:"Current balance"}),a(t.Stat.Item,{variant:"value",children:"$89,400"}),s("div",{className:"stat-actions gap-1 flex",children:[a(u,{size:"sm",children:"Withdrawal"}),a(u,{size:"sm",children:"deposit"})]})]})]});var w,N,f;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return <Stats {...args} className="bg-base-200 shadow">
      <Stats.Stat>
        <Stats.Stat.Item variant="title">Total Page Views</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">89,400</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">
          21% more than last month
        </Stats.Stat.Item>
      </Stats.Stat>
    </Stats>;
}`,...(f=(N=c.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var y,x,k;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow font-sans">
      <Stats.Stat>
        <Stats.Stat.Item variant="figure" className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </Stats.Stat.Item>
        <Stats.Stat.Item variant="title">Total Likes</Stats.Stat.Item>
        <Stats.Stat.Item variant="value" className="text-primary">
          25.6K
        </Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">
          21% more than last month
        </Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Item variant="figure" className="text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </Stats.Stat.Item>
        <Stats.Stat.Item variant="title">Page Views</Stats.Stat.Item>
        <Stats.Stat.Item variant="value" className="text-secondary">
          2.6M
        </Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">
          21% more than last month
        </Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Item variant="figure" className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </Stats.Stat.Item>
        <Stats.Stat.Item variant="figure" className=" text-secondary">
          <Avatar size="sm" online={true} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" shape="circle"></Avatar>
        </Stats.Stat.Item>
        <Stats.Stat.Item variant="value">86%</Stats.Stat.Item>
        <Stats.Stat.Item variant="title">Tasks done</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc" className="text-secondary">
          31 tasks remaining
        </Stats.Stat.Item>
      </Stats.Stat>
    </Stats>;
}`,...(k=(x=m.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var b,_,L;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow font-sans">
      <Stats.Stat className="place-items-center">
        <Stats.Stat.Item variant="title">Downloads</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">31K</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">
          From January 1st to February 1st
        </Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stats.Stat.Item variant="title">Users</Stats.Stat.Item>
        <Stats.Stat.Item variant="value" className="text-secondary">
          4,200
        </Stats.Stat.Item>
        <Stats.Stat.Item variant="desc" className="text-secondary">
          ↗︎ 40 (2%)
        </Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stats.Stat.Item variant="title">New Registers</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">1,200</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">↘︎ 90 (14%)</Stats.Stat.Item>
      </Stats.Stat>
    </Stats>;
}`,...(L=(_=o.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var z,B,V;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow font-sans">
      <Stats.Stat>
        <Stats.Stat.Item variant="title">Downloads</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">31K</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">Jan 1st - Feb 1st</Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Item variant="title">New Users</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">4,200</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">↗︎ 400 (22%)</Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Item variant="title">New Registers</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">1,200</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">↘︎ 90 (14%)</Stats.Stat.Item>
      </Stats.Stat>
    </Stats>;
}`,...(V=(B=S.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var j,R,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  return <Stats className="stats-vertical lg:stats-horizontal shadow">
      <Stats.Stat>
        <Stats.Stat.Item variant="title">Downloads</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">31K</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">Jan 1st - Feb 1st</Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Item variant="title">New Users</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">4,200</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">↗︎ 400 (22%)</Stats.Stat.Item>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Item variant="title">New Registers</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">1,200</Stats.Stat.Item>
        <Stats.Stat.Item variant="desc">↘︎ 90 (14%)</Stats.Stat.Item>
      </Stats.Stat>
    </Stats>;
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var A,D,M;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <Stats {...args} className="font-sans bg-primary text-primary-content">
      <Stats.Stat>
        <Stats.Stat.Item variant="title">Account balance</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">$89,400</Stats.Stat.Item>
        <div className="stat-actions">
          <Button size="sm" color="success">
            Add funds
          </Button>
        </div>
      </Stats.Stat>
      <Stats.Stat>
        <Stats.Stat.Item variant="title">Current balance</Stats.Stat.Item>
        <Stats.Stat.Item variant="value">$89,400</Stats.Stat.Item>
        <div className="stat-actions gap-1 flex">
          <Button size="sm">Withdrawal</Button>
          <Button size="sm">deposit</Button>
        </div>
      </Stats.Stat>
    </Stats>;
}`,...(M=(D=v.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const tt=["Default","IconsOrImage","CenteredItems","Vertical","Responsive","CustomColorsAndButton"];export{o as CenteredItems,v as CustomColorsAndButton,c as Default,m as IconsOrImage,d as Responsive,S as Vertical,tt as __namedExportsOrder,Z as default};
//# sourceMappingURL=Stats.stories-8c4422bb.js.map
