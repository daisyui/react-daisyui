import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as b,r as J}from"./iframe-DDnXVYpC.js";import{t as i}from"./bundle-mjs-yGZq-iow.js";import{A as P}from"./index-Dsnv3XI8.js";import{c as $}from"./clsx-B-dksMZM.js";import"./utils-BvopOSUb.js";const C=b.forwardRef(({size:s="xs",shape:r="circle",className:t,...n},o)=>e.jsx(P,{size:s,shape:r,...n,className:i("chat-image",t),ref:o}));try{C.displayName="ChatBubbleAvatar",C.__docgenInfo={description:"",displayName:"ChatBubbleAvatar",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},letters:{defaultValue:null,description:"",name:"letters",required:!1,type:{name:"string"}},size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:'number | "xl" | "lg" | "md" | "sm" | "xs"'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},online:{defaultValue:null,description:"",name:"online",required:!1,type:{name:"boolean"}},offline:{defaultValue:null,description:"",name:"offline",required:!1,type:{name:"boolean"}},innerClassName:{defaultValue:null,description:"",name:"innerClassName",required:!1,type:{name:"string"}}}}}catch{}const B=b.forwardRef(({color:s,className:r,...t},n)=>{const o=i("chat-bubble",$({"chat-bubble-neutral":s==="neutral","chat-bubble-primary":s==="primary","chat-bubble-secondary":s==="secondary","chat-bubble-accent":s==="accent","chat-bubble-info":s==="info","chat-bubble-success":s==="success","chat-bubble-warning":s==="warning","chat-bubble-error":s==="error"}),r);return e.jsx("div",{...t,className:o,ref:n})});try{B.displayName="ChatBubbleMessage",B.__docgenInfo={description:"",displayName:"ChatBubbleMessage",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const y=b.forwardRef(({className:s,...r},t)=>e.jsx("div",{...r,className:i("chat-header",s),ref:t}));try{y.displayName="ChatBubbleHeader",y.__docgenInfo={description:"",displayName:"ChatBubbleHeader",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const f=b.forwardRef(({className:s,...r},t)=>e.jsx("time",{...r,className:i("text-xs opacity-50",s),ref:t}));try{f.displayName="ChatBubbleTime",f.__docgenInfo={description:"",displayName:"ChatBubbleTime",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const x=b.forwardRef(({className:s,...r},t)=>e.jsx("div",{...r,className:i("chat-footer opacity-50",s),ref:t}));try{x.displayName="ChatBubbleFooter",x.__docgenInfo={description:"",displayName:"ChatBubbleFooter",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const g=J.forwardRef(({end:s=!1,color:r,dataTheme:t,className:n,children:o,...E},z)=>e.jsx("div",{...E,"data-theme":t,className:i("chat",`chat-${s?"end":"start"}`,n),ref:z,children:o}));g.displayName="ChatBubble";const a=Object.assign(g,{Header:y,Time:f,Avatar:C,Message:B,Footer:x});try{g.displayName="ChatBubble",g.__docgenInfo={description:"",displayName:"ChatBubble",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},end:{defaultValue:{value:"false"},description:"",name:"end",required:!1,type:{name:"boolean"}}}}}catch{}const ee={title:"Data Display/Chat Bubble",component:a,decorators:[s=>e.jsx("div",{className:"w-full",children:e.jsx(s,{})})]},l=({header:s,time:r,avatar:t,footer:n,side:o})=>e.jsxs(a,{end:o==="end",children:[s&&e.jsxs(a.Header,{children:["Obi-Wan Kenobi"," ",r&&e.jsx(a.Time,{children:"2 hours ago"})]}),t&&e.jsx(a.Avatar,{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}),e.jsx(a.Message,{children:"You were my brother, Anakin."}),n&&e.jsx(a.Footer,{children:"Seen"})]});l.args={header:!1,time:!1,avatar:!1,footer:!1,side:"start"};l.argTypes={side:{options:["start","end"],control:{type:"radio"}}};l.parameters={controls:{exclude:["end","dataTheme"]}};const u=s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsxs(a.Message,{children:["It's over Anakin, ",e.jsx("br",{}),"I have the high ground."]})}),e.jsx(a,{end:!0,children:e.jsx(a.Message,{children:"You underestimate my power!"})})]}),h=s=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(a.Avatar,{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}),e.jsx(a.Message,{children:"It was said that you would, destroy the Sith, not join them."})]}),e.jsxs(a,{children:[e.jsx(a.Avatar,{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}),e.jsx(a.Message,{children:"It was you who would bring balance to the Force"})]}),e.jsxs(a,{children:[e.jsx(a.Avatar,{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}),e.jsx(a.Message,{children:"Not leave it in Darkness"})]})]}),d=s=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsxs(a.Header,{children:["Obi-Wan Kenobi ",e.jsx(a.Time,{children:"12:45"})]}),e.jsx(a.Avatar,{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}),e.jsx(a.Message,{children:"You were the Chosen One!"})]}),e.jsxs(a,{end:!0,children:[e.jsxs(a.Header,{children:["Anakin ",e.jsx(a.Time,{children:"12:46"})]}),e.jsx(a.Avatar,{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}),e.jsx(a.Message,{children:"I hate you!"})]})]}),c=s=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(a.Avatar,{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}),e.jsx(a.Message,{children:"You were the Chosen One!"}),e.jsx(a.Footer,{children:"Delivered"})]}),e.jsxs(a,{end:!0,children:[e.jsx(a.Avatar,{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}),e.jsx(a.Message,{children:"I hate you!"}),e.jsx(a.Footer,{children:"Seen at 12:46"})]})]}),m=s=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsxs(a.Header,{children:["Obi-Wan Kenobi ",e.jsx(a.Time,{children:"12:45"})]}),e.jsx(a.Message,{children:"You were the Chosen One!"}),e.jsx(a.Footer,{children:"Delivered"})]}),e.jsxs(a,{end:!0,children:[e.jsxs(a.Header,{children:["Anakin ",e.jsx(a.Time,{children:"12:46"})]}),e.jsx(a.Message,{children:"I hate you!"}),e.jsx(a.Footer,{children:"Seen at 12:46"})]})]}),p=s=>e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx(a.Message,{color:"primary",children:"What kind of nonsense is this"})}),e.jsx(a,{children:e.jsx(a.Message,{color:"secondary",children:"Put me on the Council and not make me a Master!??"})}),e.jsx(a,{children:e.jsx(a.Message,{color:"accent",children:"That's never been done in the history of the Jedi. It's insulting!"})}),e.jsx(a,{end:!0,children:e.jsx(a.Message,{color:"info",children:"Calm down, Anakin."})}),e.jsx(a,{end:!0,children:e.jsx(a.Message,{color:"success",children:"You have been given a great honor."})}),e.jsx(a,{end:!0,children:e.jsx(a.Message,{color:"warning",children:"To be on the Council at your age."})}),e.jsx(a,{end:!0,children:e.jsx(a.Message,{color:"error",children:"It's never happened before."})})]});var j,v,M;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
      {avatar && <ChatBubble.Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />}
      <ChatBubble.Message>You were my brother, Anakin.</ChatBubble.Message>
      {footer && <ChatBubble.Footer>Seen</ChatBubble.Footer>}
    </ChatBubble>;
}`,...(M=(v=l.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var w,_,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Message>
        It's over Anakin, <br />I have the high ground.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Message>You underestimate my power!</ChatBubble.Message>
    </ChatBubble>
  </>`,...(T=(_=u.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var A,k,F;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <ChatBubble.Message>
        It was said that you would, destroy the Sith, not join them.
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <ChatBubble.Message>
        It was you who would bring balance to the Force
      </ChatBubble.Message>
    </ChatBubble>

    <ChatBubble>
      <ChatBubble.Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <ChatBubble.Message>Not leave it in Darkness</ChatBubble.Message>
    </ChatBubble>
  </>`,...(F=(k=h.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var I,N,H;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Header>
        Obi-Wan Kenobi <ChatBubble.Time>12:45</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Header>
        Anakin <ChatBubble.Time>12:46</ChatBubble.Time>
      </ChatBubble.Header>
      <ChatBubble.Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <ChatBubble.Message>I hate you!</ChatBubble.Message>
    </ChatBubble>
  </>`,...(H=(N=d.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var q,S,V;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`args => <>
    <ChatBubble>
      <ChatBubble.Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <ChatBubble.Message>You were the Chosen One!</ChatBubble.Message>
      <ChatBubble.Footer>Delivered</ChatBubble.Footer>
    </ChatBubble>

    <ChatBubble end>
      <ChatBubble.Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      <ChatBubble.Message>I hate you!</ChatBubble.Message>
      <ChatBubble.Footer>Seen at 12:46</ChatBubble.Footer>
    </ChatBubble>
  </>`,...(V=(S=c.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var W,O,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`args => <>
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
  </>`,...(Y=(O=m.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var D,R,K;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`args => <>
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
  </>`,...(K=(R=p.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};const ae=["Default","Side","WithImage","WithHeader","WithFooter","WithHeaderAndFooter","Colors"];export{p as Colors,l as Default,u as Side,c as WithFooter,d as WithHeader,m as WithHeaderAndFooter,h as WithImage,ae as __namedExportsOrder,ee as default};
