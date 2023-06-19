import{j as a,t as i,a as r,F as h}from"./tw-merge-e2243cb0.js";import{R as u,r as P}from"./index-ebeaab24.js";import{A as G}from"./index-c5432677.js";import{c as L}from"./clsx.m-1229b3e0.js";import"./utils-9cddd062.js";const y=u.forwardRef(({size:t="xs",shape:n="circle",className:s,...o},l)=>a(G,{size:t,shape:n,...o,className:i("chat-image",s),ref:l})),Q=y;try{y.displayName="ChatBubbleAvatar",y.__docgenInfo={description:"",displayName:"ChatBubbleAvatar",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},letters:{defaultValue:null,description:"",name:"letters",required:!1,type:{name:"string"}},size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:'number | "lg" | "md" | "sm" | "xs"'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"ghost"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},online:{defaultValue:null,description:"",name:"online",required:!1,type:{name:"boolean"}},offline:{defaultValue:null,description:"",name:"offline",required:!1,type:{name:"boolean"}}}}}catch{}const f=u.forwardRef(({color:t,className:n,...s},o)=>{const l=i("chat-bubble",L({"chat-bubble-primary":t==="primary","chat-bubble-secondary":t==="secondary","chat-bubble-accent":t==="accent","chat-bubble-info":t==="info","chat-bubble-success":t==="success","chat-bubble-warning":t==="warning","chat-bubble-error":t==="error"}),n);return a("div",{...s,className:l,ref:o})}),U=f;try{f.displayName="ChatBubbleMessage",f.__docgenInfo={description:"",displayName:"ChatBubbleMessage",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const M=u.forwardRef(({className:t,...n},s)=>a("div",{...n,className:i("chat-header",t),ref:s})),X=M;try{M.displayName="ChatBubbleHeader",M.__docgenInfo={description:"",displayName:"ChatBubbleHeader",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const v=u.forwardRef(({className:t,...n},s)=>a("time",{...n,className:i("text-xs opacity-50",t),ref:s})),Z=v;try{v.displayName="ChatBubbleTime",v.__docgenInfo={description:"",displayName:"ChatBubbleTime",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const _=u.forwardRef(({className:t,...n},s)=>a("div",{...n,className:i("chat-footer opacity-50",t),ref:s})),ee=_;try{_.displayName="ChatBubbleFooter",_.__docgenInfo={description:"",displayName:"ChatBubbleFooter",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const B=P.forwardRef(({end:t=!1,color:n,dataTheme:s,className:o,children:l,...E},J)=>a("div",{...E,"data-theme":s,className:i("chat",`chat-${t?"end":"start"}`,o),ref:J,children:l}));B.displayName="ChatBubble";const e=Object.assign(B,{Header:X,Time:Z,Avatar:Q,Message:U,Footer:ee});try{B.displayName="ChatBubble",B.__docgenInfo={description:"",displayName:"ChatBubble",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},end:{defaultValue:{value:"false"},description:"",name:"end",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"Data Display/Chat Bubble",component:e,decorators:[t=>a("div",{className:"w-full",children:a(t,{})})]},b=({header:t,time:n,avatar:s,footer:o,side:l})=>r(e,{end:l==="end",children:[t&&r(e.Header,{children:["Obi-Wan Kenobi"," ",n&&a(e.Time,{children:"2 hours ago"})]}),s&&a(e.Avatar,{src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}),a(e.Message,{children:"You were my brother, Anakin."}),o&&a(e.Footer,{children:"Seen"})]});b.args={header:!1,time:!1,avatar:!1,footer:!1,side:"start"};b.argTypes={side:{options:["start","end"],control:{type:"radio"}}};b.parameters={controls:{exclude:["end","dataTheme"]}};const d=t=>r(h,{children:[a(e,{children:r(e.Message,{children:["It's over Anakin, ",a("br",{}),"I have the high ground."]})}),a(e,{end:!0,children:a(e.Message,{children:"You underestimate my power!"})})]}),c=t=>r(h,{children:[r(e,{children:[a(e.Avatar,{src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}),a(e.Message,{children:"It was said that you would, destroy the Sith, not join them."})]}),r(e,{children:[a(e.Avatar,{src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}),a(e.Message,{children:"It was you who would bring balance to the Force"})]}),r(e,{children:[a(e.Avatar,{src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}),a(e.Message,{children:"Not leave it in Darkness"})]})]}),m=t=>r(h,{children:[r(e,{children:[r(e.Header,{children:["Obi-Wan Kenobi ",a(e.Time,{children:"12:45"})]}),a(e.Avatar,{src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}),a(e.Message,{children:"You were the Chosen One!"})]}),r(e,{end:!0,children:[r(e.Header,{children:["Anakin ",a(e.Time,{children:"12:46"})]}),a(e.Avatar,{src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}),a(e.Message,{children:"I hate you!"})]})]}),p=t=>r(h,{children:[r(e,{children:[a(e.Avatar,{src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}),a(e.Message,{children:"You were the Chosen One!"}),a(e.Footer,{children:"Delivered"})]}),r(e,{end:!0,children:[a(e.Avatar,{src:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}),a(e.Message,{children:"I hate you!"}),a(e.Footer,{children:"Seen at 12:46"})]})]}),g=t=>r(h,{children:[r(e,{children:[r(e.Header,{children:["Obi-Wan Kenobi ",a(e.Time,{children:"12:45"})]}),a(e.Message,{children:"You were the Chosen One!"}),a(e.Footer,{children:"Delivered"})]}),r(e,{end:!0,children:[r(e.Header,{children:["Anakin ",a(e.Time,{children:"12:46"})]}),a(e.Message,{children:"I hate you!"}),a(e.Footer,{children:"Seen at 12:46"})]})]}),C=t=>r(h,{children:[a(e,{children:a(e.Message,{color:"primary",children:"What kind of nonsense is this"})}),a(e,{children:a(e.Message,{color:"secondary",children:"Put me on the Council and not make me a Master!??"})}),a(e,{children:a(e.Message,{color:"accent",children:"That's never been done in the history of the Jedi. It's insulting!"})}),a(e,{end:!0,children:a(e.Message,{color:"info",children:"Calm down, Anakin."})}),a(e,{end:!0,children:a(e.Message,{color:"success",children:"You have been given a great honor."})}),a(e,{end:!0,children:a(e.Message,{color:"warning",children:"To be on the Council at your age."})}),a(e,{end:!0,children:a(e.Message,{color:"error",children:"It's never happened before."})})]});var T,w,A;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`({
  header,
  time,
  avatar,
  footer,
  side
}) => {
  return <ChatBubble end={side === 'end' ? true : false}>
      {header && <ChatBubble.Header>
          Obi-Wan Kenobi{' '}
          {time && <ChatBubble.Time>2 hours ago</ChatBubble.Time>}
        </ChatBubble.Header>}
      {avatar && <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />}
      <ChatBubble.Message>You were my brother, Anakin.</ChatBubble.Message>
      {footer && <ChatBubble.Footer>Seen</ChatBubble.Footer>}
    </ChatBubble>;
}`,...(A=(w=b.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var k,F,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Message>
        It's over Anakin, <br />I have the high ground.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message>You underestimate my power!</ChatBubble.Message>
    </ChatBubble>
  </>`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var H,j,N;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>
        It was said that you would, destroy the Sith, not join them.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>
        It was you who would bring balance to the Force
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>Not leave it in Darkness</ChatBubble.Message>
    </ChatBubble>
  </>`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var S,q,W;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Header>
        Obi-Wan Kenobi <ChatBubble.Time>12:45</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Header>
        Anakin <ChatBubble.Time>12:46</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>I hate you!</ChatBubble.Message>
    </ChatBubble>
  </>`,...(W=(q=m.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var V,O,x;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
      <ChatBubble.Footer>Delivered</ChatBubble.Footer>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Avatar src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <ChatBubble.Message>I hate you!</ChatBubble.Message>
      <ChatBubble.Footer>Seen at 12:46</ChatBubble.Footer>
    </ChatBubble>
  </>`,...(x=(O=p.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var Y,D,R;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Header>
        Obi-Wan Kenobi <ChatBubble.Time>12:45</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
      <ChatBubble.Footer>Delivered</ChatBubble.Footer>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Header>
        Anakin <ChatBubble.Time>12:46</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Message>I hate you!</ChatBubble.Message>
      <ChatBubble.Footer>Seen at 12:46</ChatBubble.Footer>
    </ChatBubble>
  </>`,...(R=(D=g.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var $,K,z;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Message color="primary">
        What kind of nonsense is this
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Message color="secondary">
        Put me on the Council and not make me a Master!??
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Message color="accent">
        That's never been done in the history of the Jedi. It's insulting!
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message color="info">Calm down, Anakin.</ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message color="success">
        You have been given a great honor.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message color="warning">
        To be on the Council at your age.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message color="error">
        It's never happened before.
      </ChatBubble.Message>
    </ChatBubble>
  </>`,...(z=(K=C.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};const le=["Default","Side","WithImage","WithHeader","WithFooter","WithHeaderAndFooter","Colors"];export{C as Colors,b as Default,d as Side,p as WithFooter,m as WithHeader,g as WithHeaderAndFooter,c as WithImage,le as __namedExportsOrder,oe as default};
//# sourceMappingURL=ChatBubble.stories-e36e5bff.js.map
