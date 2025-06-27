import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{e as r,r as W}from"./iframe-DDnXVYpC.js";import{c as C}from"./clsx-B-dksMZM.js";import{t as w}from"./bundle-mjs-yGZq-iow.js";import{A as q}from"./index-Dsnv3XI8.js";import{B as x}from"./Button-GtH5nISf.js";import"./utils-BvopOSUb.js";import"./index-Dl-l57lR.js";const n=r.forwardRef(({children:s,section:e,className:l,...c},i)=>{const p=w(l,C({"stat-title":e==="title","stat-value":e==="value","stat-desc":e==="desc","stat-figure":e==="figure","stat-actions":e==="actions"}));return t.jsx("div",{...c,className:p,ref:i,children:s})});try{n.displayName="StatSection",n.__docgenInfo={description:"",displayName:"StatSection",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},section:{defaultValue:null,description:"",name:"section",required:!0,type:{name:"enum",value:[{value:'"title"'},{value:'"figure"'},{value:'"value"'},{value:'"desc"'},{value:'"actions"'}]}}}}}catch{}const j=W.forwardRef(({dataTheme:s,className:e,...l},c)=>{const i=w("stat",e);return t.jsx("div",{...l,"data-theme":s,className:i,ref:c})}),J=r.forwardRef((s,e)=>t.jsx(n,{...s,section:"title",ref:e})),U=r.forwardRef((s,e)=>t.jsx(n,{...s,section:"value",ref:e})),$=r.forwardRef((s,e)=>t.jsx(n,{...s,section:"desc",ref:e})),O=r.forwardRef((s,e)=>t.jsx(n,{...s,section:"figure",ref:e})),P=r.forwardRef((s,e)=>t.jsx(n,{...s,section:"actions",ref:e})),E=Object.assign(j,{Title:J,Value:U,Desc:$,Figure:O,Actions:P});try{j.displayName="Stat",j.__docgenInfo={description:"",displayName:"Stat",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const g=r.forwardRef(({direction:s="horizontal",dataTheme:e,className:l,children:c,...i},p)=>{const K=w("stats",l,C({"stats-vertical":s==="vertical","stats-horizontal":s==="horizontal"}));return t.jsx("div",{...i,ref:p,"data-theme":e,className:K,children:c})}),a=Object.assign(g,{Stat:E});try{g.displayName="Stats",g.__docgenInfo={description:"",displayName:"Stats",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{a.displayName="Stats",a.__docgenInfo={description:"",displayName:"Stats",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const st={title:"Data Display/Stats",component:a},o=s=>t.jsx(a,{...s,className:"shadow",children:t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Title,{children:"Total Page Views"}),t.jsx(a.Stat.Value,{children:"89,400"}),t.jsx(a.Stat.Desc,{children:"21% more than last month"})]})}),d=s=>t.jsxs(a,{...s,className:"shadow font-sans",children:[t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Figure,{className:"text-primary",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),t.jsx(a.Stat.Title,{children:"Total Likes"}),t.jsx(a.Stat.Value,{className:"text-primary",children:"25.6K"}),t.jsx(a.Stat.Desc,{children:"21% more than last month"})]}),t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Figure,{className:"text-secondary",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),t.jsx(a.Stat.Title,{children:"Page Views"}),t.jsx(a.Stat.Value,{className:"text-secondary",children:"2.6M"}),t.jsx(a.Stat.Desc,{children:"21% more than last month"})]}),t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Figure,{className:"text-primary",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}),t.jsx(a.Stat.Figure,{className:"text-secondary",children:t.jsx(q,{size:"sm",online:!0,src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",shape:"circle"})}),t.jsx(a.Stat.Value,{children:"86%"}),t.jsx(a.Stat.Title,{children:"Tasks done"}),t.jsx(a.Stat.Desc,{className:"text-secondary",children:"31 tasks remaining"})]})]}),u=s=>t.jsxs(a,{...s,className:"shadow font-sans",children:[t.jsxs(a.Stat,{className:"place-items-center",children:[t.jsx(a.Stat.Title,{children:"Downloads"}),t.jsx(a.Stat.Value,{children:"31K"}),t.jsx(a.Stat.Desc,{children:"From January 1st to February 1st"})]}),t.jsxs(a.Stat,{className:"place-items-center",children:[t.jsx(a.Stat.Title,{children:"Users"}),t.jsx(a.Stat.Value,{className:"text-secondary",children:"4,200"}),t.jsx(a.Stat.Desc,{className:"text-secondary",children:"↗︎ 40 (2%)"})]}),t.jsxs(a.Stat,{className:"place-items-center",children:[t.jsx(a.Stat.Title,{children:"New Registers"}),t.jsx(a.Stat.Value,{children:"1,200"}),t.jsx(a.Stat.Desc,{children:"↘︎ 90 (14%)"})]})]}),S=s=>t.jsxs(a,{...s,className:"shadow font-sans",children:[t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Title,{children:"Downloads"}),t.jsx(a.Stat.Value,{children:"31K"}),t.jsx(a.Stat.Desc,{children:"Jan 1st - Feb 1st"})]}),t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Title,{children:"New Users"}),t.jsx(a.Stat.Value,{children:"4,200"}),t.jsx(a.Stat.Desc,{children:"↗︎ 400 (22%)"})]}),t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Title,{children:"New Registers"}),t.jsx(a.Stat.Value,{children:"1,200"}),t.jsx(a.Stat.Desc,{children:"↘︎ 90 (14%)"})]})]});S.args={direction:"vertical"};const m=s=>t.jsxs(a,{...s,className:"lg:stats-horizontal shadow",children:[t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Title,{children:"Downloads"}),t.jsx(a.Stat.Value,{children:"31K"}),t.jsx(a.Stat.Desc,{children:"Jan 1st - Feb 1st"})]}),t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Title,{children:"New Users"}),t.jsx(a.Stat.Value,{children:"4,200"}),t.jsx(a.Stat.Desc,{children:"↗︎ 400 (22%)"})]}),t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Title,{children:"New Registers"}),t.jsx(a.Stat.Value,{children:"1,200"}),t.jsx(a.Stat.Desc,{children:"↘︎ 90 (14%)"})]})]}),h=s=>t.jsxs(a,{...s,className:"font-sans bg-primary text-primary-content",children:[t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Title,{children:"Account balance"}),t.jsx(a.Stat.Value,{children:"$89,400"}),t.jsx(a.Stat.Actions,{children:t.jsx(x,{size:"sm",color:"success",children:"Add funds"})})]}),t.jsxs(a.Stat,{children:[t.jsx(a.Stat.Title,{children:"Current balance"}),t.jsx(a.Stat.Value,{children:"$89,400"}),t.jsxs(a.Stat.Actions,{className:"gap-1 flex",children:[t.jsx(x,{size:"sm",children:"Withdrawal"}),t.jsx(x,{size:"sm",children:"deposit"})]})]})]});var N,f,V;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  return <Stats {...args} className="shadow">
      <Stats.Stat>
        <Stats.Stat.Title>Total Page Views</Stats.Stat.Title>
        <Stats.Stat.Value>89,400</Stats.Stat.Value>
        <Stats.Stat.Desc>21% more than last month</Stats.Stat.Desc>
      </Stats.Stat>
    </Stats>;
}`,...(V=(f=o.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var T,v,y;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
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
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var D,k,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(_=(k=u.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var b,L,z;S.parameters={...S.parameters,docs:{...(b=S.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(z=(L=S.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var F,A,R;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
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
}`,...(R=(A=m.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var B,I,M;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
}`,...(M=(I=h.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const et=["Default","IconsOrImage","CenteredItems","Vertical","Responsive","CustomColorsAndButton"];export{u as CenteredItems,h as CustomColorsAndButton,o as Default,d as IconsOrImage,m as Responsive,S as Vertical,et as __namedExportsOrder,st as default};
