import{t as T,j as a,a as s}from"./tw-merge-0a3648bd.js";import{R as r,r as q}from"./index-1b03fe98.js";import{c as K}from"./clsx.m-1229b3e0.js";import{A as $}from"./index-6ae1381f.js";import{B as w}from"./Button-0a8fe609.js";import"./utils-25597068.js";import"./index-a55c3a76.js";const N=r.forwardRef(({children:e,section:n,className:l,...c},i)=>{const g=T(l,K({"stat-title":n==="title","stat-value":n==="value","stat-desc":n==="desc","stat-figure":n==="figure","stat-actions":n==="actions"}));return a("div",{...c,className:g,ref:i,children:e})}),o=N;try{N.displayName="StatSection",N.__docgenInfo={description:"",displayName:"StatSection",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},section:{defaultValue:null,description:"",name:"section",required:!0,type:{name:"enum",value:[{value:'"title"'},{value:'"figure"'},{value:'"desc"'},{value:'"value"'},{value:'"actions"'}]}}}}}catch{}const f=q.forwardRef(({dataTheme:e,className:n,...l},c)=>{const i=T("stat",n);return a("div",{...l,"data-theme":e,className:i,ref:c})}),J=r.forwardRef((e,n)=>a(o,{...e,section:"title",ref:n})),U=r.forwardRef((e,n)=>a(o,{...e,section:"value",ref:n})),O=r.forwardRef((e,n)=>a(o,{...e,section:"desc",ref:n})),P=r.forwardRef((e,n)=>a(o,{...e,section:"figure",ref:n})),G=r.forwardRef((e,n)=>a(o,{...e,section:"actions",ref:n})),H=Object.assign(f,{Title:J,Value:U,Desc:O,Figure:P,Actions:G});try{f.displayName="Stat",f.__docgenInfo={description:"",displayName:"Stat",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const V=r.forwardRef(({direction:e="horizontal",dataTheme:n,className:l,children:c,...i},g)=>{const W=T("stats",l,K({"stats-vertical":e==="vertical","stats-horizontal":e==="horizontal"}));return a("div",{...i,ref:g,"data-theme":n,className:W,children:c})}),t=Object.assign(V,{Stat:H});try{V.displayName="Stats",V.__docgenInfo={description:"",displayName:"Stats",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}try{t.displayName="Stats",t.__docgenInfo={description:"",displayName:"Stats",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}const st={title:"Data Display/Stats",component:t},d=e=>a(t,{...e,className:"shadow",children:s(t.Stat,{children:[a(t.Stat.Title,{children:"Total Page Views"}),a(t.Stat.Value,{children:"89,400"}),a(t.Stat.Desc,{children:"21% more than last month"})]})}),u=e=>s(t,{...e,className:"shadow font-sans",children:[s(t.Stat,{children:[a(t.Stat.Figure,{className:"text-primary",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),a(t.Stat.Title,{children:"Total Likes"}),a(t.Stat.Value,{className:"text-primary",children:"25.6K"}),a(t.Stat.Desc,{children:"21% more than last month"})]}),s(t.Stat,{children:[a(t.Stat.Figure,{className:"text-secondary",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),a(t.Stat.Title,{children:"Page Views"}),a(t.Stat.Value,{className:"text-secondary",children:"2.6M"}),a(t.Stat.Desc,{children:"21% more than last month"})]}),s(t.Stat,{children:[a(t.Stat.Figure,{className:"text-primary",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:a("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),a(t.Stat.Figure,{className:"text-secondary",children:a($,{size:"sm",online:!0,src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",shape:"circle"})}),a(t.Stat.Value,{children:"86%"}),a(t.Stat.Title,{children:"Tasks done"}),a(t.Stat.Desc,{className:"text-secondary",children:"31 tasks remaining"})]})]}),m=e=>s(t,{...e,className:"shadow font-sans",children:[s(t.Stat,{className:"place-items-center",children:[a(t.Stat.Title,{children:"Downloads"}),a(t.Stat.Value,{children:"31K"}),a(t.Stat.Desc,{children:"From January 1st to February 1st"})]}),s(t.Stat,{className:"place-items-center",children:[a(t.Stat.Title,{children:"Users"}),a(t.Stat.Value,{className:"text-secondary",children:"4,200"}),a(t.Stat.Desc,{className:"text-secondary",children:"↗︎ 40 (2%)"})]}),s(t.Stat,{className:"place-items-center",children:[a(t.Stat.Title,{children:"New Registers"}),a(t.Stat.Value,{children:"1,200"}),a(t.Stat.Desc,{children:"↘︎ 90 (14%)"})]})]}),S=e=>s(t,{...e,className:"shadow font-sans",children:[s(t.Stat,{children:[a(t.Stat.Title,{children:"Downloads"}),a(t.Stat.Value,{children:"31K"}),a(t.Stat.Desc,{children:"Jan 1st - Feb 1st"})]}),s(t.Stat,{children:[a(t.Stat.Title,{children:"New Users"}),a(t.Stat.Value,{children:"4,200"}),a(t.Stat.Desc,{children:"↗︎ 400 (22%)"})]}),s(t.Stat,{children:[a(t.Stat.Title,{children:"New Registers"}),a(t.Stat.Value,{children:"1,200"}),a(t.Stat.Desc,{children:"↘︎ 90 (14%)"})]})]});S.args={direction:"vertical"};const h=e=>s(t,{...e,className:"lg:stats-horizontal shadow",children:[s(t.Stat,{children:[a(t.Stat.Title,{children:"Downloads"}),a(t.Stat.Value,{children:"31K"}),a(t.Stat.Desc,{children:"Jan 1st - Feb 1st"})]}),s(t.Stat,{children:[a(t.Stat.Title,{children:"New Users"}),a(t.Stat.Value,{children:"4,200"}),a(t.Stat.Desc,{children:"↗︎ 400 (22%)"})]}),s(t.Stat,{children:[a(t.Stat.Title,{children:"New Registers"}),a(t.Stat.Value,{children:"1,200"}),a(t.Stat.Desc,{children:"↘︎ 90 (14%)"})]})]}),p=e=>s(t,{...e,className:"font-sans bg-primary text-primary-content",children:[s(t.Stat,{children:[a(t.Stat.Title,{children:"Account balance"}),a(t.Stat.Value,{children:"$89,400"}),a(t.Stat.Actions,{children:a(w,{size:"sm",color:"success",children:"Add funds"})})]}),s(t.Stat,{children:[a(t.Stat.Title,{children:"Current balance"}),a(t.Stat.Value,{children:"$89,400"}),s(t.Stat.Actions,{className:"gap-1 flex",children:[a(w,{size:"sm",children:"Withdrawal"}),a(w,{size:"sm",children:"deposit"})]})]})]});var v,y,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow">
      <Stats.Stat>
        <Stats.Stat.Title>Total Page Views</Stats.Stat.Title>
        <Stats.Stat.Value>89,400</Stats.Stat.Value>
        <Stats.Stat.Desc>21% more than last month</Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>;
}`,...(D=(y=d.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var x,k,_;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow font-sans">
      <Stats.Stat>
        <Stats.Stat.Figure className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </Stats.Stat.Figure>
        <Stats.Stat.Title>Total Likes</Stats.Stat.Title>
        <Stats.Stat.Value className="text-primary">25.6K</Stats.Stat.Value>
        <Stats.Stat.Desc>21% more than last month</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Figure className="text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </Stats.Stat.Figure>
        <Stats.Stat.Title>Page Views</Stats.Stat.Title>
        <Stats.Stat.Value className="text-secondary">2.6M</Stats.Stat.Value>
        <Stats.Stat.Desc>21% more than last month</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Figure className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </Stats.Stat.Figure>
        <Stats.Stat.Figure className="text-secondary">
          <Avatar size="sm" online={true} src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" shape="circle"></Avatar>
        </Stats.Stat.Figure>
        <Stats.Stat.Value>86%</Stats.Stat.Value>
        <Stats.Stat.Title>Tasks done</Stats.Stat.Title>
        <Stats.Stat.Desc className="text-secondary">
          31 tasks remaining
        </Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>;
}`,...(_=(k=u.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var F,b,L;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow font-sans">
      <Stats.Stat className="place-items-center">
        <Stats.Stat.Title>Downloads</Stats.Stat.Title>
        <Stats.Stat.Value>31K</Stats.Stat.Value>
        <Stats.Stat.Desc>From January 1st to February 1st</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stats.Stat.Title>Users</Stats.Stat.Title>
        <Stats.Stat.Value className="text-secondary">4,200</Stats.Stat.Value>
        <Stats.Stat.Desc className="text-secondary">↗︎ 40 (2%)</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat className="place-items-center">
        <Stats.Stat.Title>New Registers</Stats.Stat.Title>
        <Stats.Stat.Value>1,200</Stats.Stat.Value>
        <Stats.Stat.Desc>↘︎ 90 (14%)</Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>;
}`,...(L=(b=m.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var z,A,R;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow font-sans">
      <Stats.Stat>
        <Stats.Stat.Title>Downloads</Stats.Stat.Title>
        <Stats.Stat.Value>31K</Stats.Stat.Value>
        <Stats.Stat.Desc>Jan 1st - Feb 1st</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Title>New Users</Stats.Stat.Title>
        <Stats.Stat.Value>4,200</Stats.Stat.Value>
        <Stats.Stat.Desc>↗︎ 400 (22%)</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Title>New Registers</Stats.Stat.Title>
        <Stats.Stat.Value>1,200</Stats.Stat.Value>
        <Stats.Stat.Desc>↘︎ 90 (14%)</Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>;
}`,...(R=(A=S.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var B,E,j;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <Stats {...args} className="lg:stats-horizontal shadow">
      <Stats.Stat>
        <Stats.Stat.Title>Downloads</Stats.Stat.Title>
        <Stats.Stat.Value>31K</Stats.Stat.Value>
        <Stats.Stat.Desc>Jan 1st - Feb 1st</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Title>New Users</Stats.Stat.Title>
        <Stats.Stat.Value>4,200</Stats.Stat.Value>
        <Stats.Stat.Desc>↗︎ 400 (22%)</Stats.Stat.Desc>
      </Stats.Stat>

      <Stats.Stat>
        <Stats.Stat.Title>New Registers</Stats.Stat.Title>
        <Stats.Stat.Value>1,200</Stats.Stat.Value>
        <Stats.Stat.Desc>↘︎ 90 (14%)</Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>;
}`,...(j=(E=h.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var I,M,C;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <Stats {...args} className="font-sans bg-primary text-primary-content">
      <Stats.Stat>
        <Stats.Stat.Title>Account balance</Stats.Stat.Title>
        <Stats.Stat.Value>$89,400</Stats.Stat.Value>
        <Stats.Stat.Actions>
          <Button size="sm" color="success">
            Add funds
          </Button>
        </Stats.Stat.Actions>
      </Stats.Stat>
      <Stats.Stat>
        <Stats.Stat.Title>Current balance</Stats.Stat.Title>
        <Stats.Stat.Value>$89,400</Stats.Stat.Value>
        <Stats.Stat.Actions className="gap-1 flex">
          <Button size="sm">Withdrawal</Button>
          <Button size="sm">deposit</Button>
        </Stats.Stat.Actions>
      </Stats.Stat>
    </Stats>;
}`,...(C=(M=p.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const nt=["Default","IconsOrImage","CenteredItems","Vertical","Responsive","CustomColorsAndButton"];export{m as CenteredItems,p as CustomColorsAndButton,d as Default,u as IconsOrImage,h as Responsive,S as Vertical,nt as __namedExportsOrder,st as default};
