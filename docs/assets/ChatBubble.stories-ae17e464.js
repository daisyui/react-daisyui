import{a,t as h,j as r,F as i}from"./tw-merge-e8a1af18.js";import{R as c,r as P}from"./index-f1f749bf.js";import{A as G}from"./index-2beddb95.js";import{c as L}from"./clsx.m-1229b3e0.js";import"./_commonjsHelpers-042e6b4d.js";import"./utils-134b33db.js";const f=c.forwardRef(({size:t="xs",shape:n="circle",className:s,...l},o)=>a(G,{size:t,shape:n,...l,className:h("chat-image",s),ref:o})),Q=f;try{f.displayName="ChatBubbleAvatar",f.__docgenInfo={description:"",displayName:"ChatBubbleAvatar",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},letters:{defaultValue:null,description:"",name:"letters",required:!1,type:{name:"string"}},size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:'number | "lg" | "md" | "sm" | "xs"'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"ghost"'}]}},online:{defaultValue:null,description:"",name:"online",required:!1,type:{name:"boolean"}},offline:{defaultValue:null,description:"",name:"offline",required:!1,type:{name:"boolean"}}}}}catch{}const y=c.forwardRef(({color:t,className:n,...s},l)=>{const o=h("chat-bubble",L({"chat-bubble-primary":t==="primary","chat-bubble-secondary":t==="secondary","chat-bubble-accent":t==="accent","chat-bubble-info":t==="info","chat-bubble-success":t==="success","chat-bubble-warning":t==="warning","chat-bubble-error":t==="error"}),n);return a("div",{...s,className:o,ref:l})}),U=y;try{y.displayName="ChatBubbleMessage",y.__docgenInfo={description:"",displayName:"ChatBubbleMessage",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const M=c.forwardRef(({className:t,...n},s)=>a("div",{...n,className:h("chat-header",t),ref:s})),X=M;try{M.displayName="ChatBubbleHeader",M.__docgenInfo={description:"",displayName:"ChatBubbleHeader",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const v=c.forwardRef(({className:t,...n},s)=>a("time",{...n,className:h("text-xs opacity-50",t),ref:s})),Z=v;try{v.displayName="ChatBubbleTime",v.__docgenInfo={description:"",displayName:"ChatBubbleTime",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const _=c.forwardRef(({className:t,...n},s)=>a("div",{...n,className:h("chat-footer opacity-50",t),ref:s})),ee=_;try{_.displayName="ChatBubbleFooter",_.__docgenInfo={description:"",displayName:"ChatBubbleFooter",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const B=P.forwardRef(({end:t=!1,color:n,dataTheme:s,className:l,children:o,...E},J)=>a("div",{...E,"data-theme":s,className:h("chat",`chat-${t?"end":"start"}`,l),ref:J,children:o}));B.displayName="ChatBubble";const e=Object.assign(B,{Header:X,Time:Z,Avatar:Q,Message:U,Footer:ee});try{B.displayName="ChatBubble",B.__docgenInfo={description:"",displayName:"ChatBubble",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},end:{defaultValue:{value:"false"},description:"",name:"end",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"Data Display/Chat Bubble",component:e,decorators:[t=>a("div",{className:"w-full",children:a(t,{})})]},b=({header:t,time:n,avatar:s,footer:l,side:o})=>r(e,{end:o==="end",children:[t&&r(e.Header,{children:["Obi-Wan Kenobi"," ",n&&a(e.Time,{children:"2 hours ago"})]}),s&&a(e.Avatar,{src:"https://placeimg.com/192/192/people"}),a(e.Message,{children:"You were my brother, Anakin."}),l&&a(e.Footer,{children:"Seen"})]});b.args={header:!1,time:!1,avatar:!1,footer:!1,side:"start"};b.argTypes={side:{options:["start","end"],control:{type:"radio"}}};b.parameters={controls:{exclude:["end","dataTheme"]}};const u=t=>r(i,{children:[a(e,{children:r(e.Message,{children:["It's over Anakin, ",a("br",{}),"I have the high ground."]})}),a(e,{end:!0,children:a(e.Message,{children:"You underestimate my power!"})})]}),d=t=>r(i,{children:[r(e,{children:[a(e.Avatar,{src:"https://placeimg.com/192/192/people"}),a(e.Message,{children:"It was said that you would, destroy the Sith, not join them."})]}),r(e,{children:[a(e.Avatar,{src:"https://placeimg.com/192/192/people"}),a(e.Message,{children:"It was you who would bring balance to the Force"})]}),r(e,{children:[a(e.Avatar,{src:"https://placeimg.com/192/192/people"}),a(e.Message,{children:"Not leave it in Darkness"})]})]}),p=t=>r(i,{children:[r(e,{children:[r(e.Header,{children:["Obi-Wan Kenobi ",a(e.Time,{children:"12:45"})]}),a(e.Avatar,{src:"https://placeimg.com/192/192/people"}),a(e.Message,{children:"You were the Chosen One!"})]}),r(e,{end:!0,children:[r(e.Header,{children:["Anakin ",a(e.Time,{children:"12:46"})]}),a(e.Avatar,{src:"https://placeimg.com/192/192/people"}),a(e.Message,{children:"I hate you!"})]})]}),m=t=>r(i,{children:[r(e,{children:[a(e.Avatar,{src:"https://placeimg.com/192/192/people"}),a(e.Message,{children:"You were the Chosen One!"}),a(e.Footer,{children:"Delivered"})]}),r(e,{end:!0,children:[a(e.Avatar,{src:"https://placeimg.com/192/192/people"}),a(e.Message,{children:"I hate you!"}),a(e.Footer,{children:"Seen at 12:46"})]})]}),C=t=>r(i,{children:[r(e,{children:[r(e.Header,{children:["Obi-Wan Kenobi ",a(e.Time,{children:"12:45"})]}),a(e.Message,{children:"You were the Chosen One!"}),a(e.Footer,{children:"Delivered"})]}),r(e,{end:!0,children:[r(e.Header,{children:["Anakin ",a(e.Time,{children:"12:46"})]}),a(e.Message,{children:"I hate you!"}),a(e.Footer,{children:"Seen at 12:46"})]})]}),g=t=>r(i,{children:[a(e,{children:a(e.Message,{color:"primary",children:"What kind of nonsense is this"})}),a(e,{children:a(e.Message,{color:"secondary",children:"Put me on the Council and not make me a Master!??"})}),a(e,{children:a(e.Message,{color:"accent",children:"That's never been done in the history of the Jedi. It's insulting!"})}),a(e,{end:!0,children:a(e.Message,{color:"info",children:"Calm down, Anakin."})}),a(e,{end:!0,children:a(e.Message,{color:"success",children:"You have been given a great honor."})}),a(e,{end:!0,children:a(e.Message,{color:"warning",children:"To be on the Council at your age."})}),a(e,{end:!0,children:a(e.Message,{color:"error",children:"It's never happened before."})})]});var T,w,A;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`({
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
      {avatar && <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />}
      <ChatBubble.Message>You were my brother, Anakin.</ChatBubble.Message>
      {footer && <ChatBubble.Footer>Seen</ChatBubble.Footer>}
    </ChatBubble>;
}`,...(A=(w=b.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var F,I,H;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Message>
        It's over Anakin, <br />I have the high ground.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message>You underestimate my power!</ChatBubble.Message>
    </ChatBubble>
  </>`,...(H=(I=u.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var N,S,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
      <ChatBubble.Message>
        It was said that you would, destroy the Sith, not join them.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
      <ChatBubble.Message>
        It was you who would bring balance to the Force
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
      <ChatBubble.Message>Not leave it in Darkness</ChatBubble.Message>
    </ChatBubble>
  </>`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var q,W,V;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Header>
        Obi-Wan Kenobi <ChatBubble.Time>12:45</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
      <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Header>
        Anakin <ChatBubble.Time>12:46</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
      <ChatBubble.Message>I hate you!</ChatBubble.Message>
    </ChatBubble>
  </>`,...(V=(W=p.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var O,x,Y;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
      <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
      <ChatBubble.Footer>Delivered</ChatBubble.Footer>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Avatar src="https://placeimg.com/192/192/people" />
      <ChatBubble.Message>I hate you!</ChatBubble.Message>
      <ChatBubble.Footer>Seen at 12:46</ChatBubble.Footer>
    </ChatBubble>
  </>`,...(Y=(x=m.parameters)==null?void 0:x.docs)==null?void 0:Y.source}}};var D,R,$;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`args => <>
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
  </>`,...($=(R=C.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var j,K,z;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`args => <>
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
  </>`,...(z=(K=g.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};const be=["Default","Side","WithImage","WithHeader","WithFooter","WithHeaderAndFooter","Colors"];export{g as Colors,b as Default,u as Side,m as WithFooter,p as WithHeader,C as WithHeaderAndFooter,d as WithImage,be as __namedExportsOrder,oe as default};
//# sourceMappingURL=ChatBubble.stories-ae17e464.js.map
