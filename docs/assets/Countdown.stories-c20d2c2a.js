import{t as S,a,j as o}from"./tw-merge-e8a1af18.js";import{r as u}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const x=({value:e,dataTheme:n,className:s,...r})=>{const l=S("countdown",s),V={"--value":Math.min(99,Math.max(0,e))};return a("span",{role:"timer",...r,"data-theme":n,className:l,children:a("span",{style:V})})},t=x;try{x.displayName="Countdown",x.__docgenInfo={description:"",displayName:"Countdown",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}try{t.displayName="Countdown",t.__docgenInfo={description:"",displayName:"Countdown",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const j={title:"Data Display/Countdown",component:t},c=e=>{const[n,s]=u.useState(e.value);return u.useEffect(()=>{const r=setTimeout(()=>{s(l=>l<=0?e.value:l-1)},1e3);return()=>{clearTimeout(r)}},[n]),a(t,{className:"text-2xl",value:n})};c.args={value:50};const m=e=>{const[n,s]=u.useState(e.value);return u.useEffect(()=>{const r=setTimeout(()=>{s(l=>l<=0?e.value:l-1)},1e3);return()=>{clearTimeout(r)}},[n]),o("span",{className:"font-mono text-2xl",children:[a(t,{value:10}),":",a(t,{value:24}),":",a(t,{value:n})]})};m.args={value:34};const d=e=>{const[n,s]=u.useState(e.value);return u.useEffect(()=>{const r=setTimeout(()=>{s(l=>l<=0?e.value:l-1)},1e3);return()=>{clearTimeout(r)}},[n]),o("div",{className:"grid grid-flow-col gap-5 text-center auto-cols-max",children:[o("div",{className:"flex flex-col",children:[a(t,{className:"font-mono text-5xl",value:15}),"days"]}),o("div",{className:"flex flex-col",children:[a(t,{className:"font-mono text-5xl",value:10}),"hours"]}),o("div",{className:"flex flex-col",children:[a(t,{className:"font-mono text-5xl",value:24}),"min"]}),o("div",{className:"flex flex-col",children:[a(t,{className:"font-mono text-5xl",value:n}),"sec"]})]})};d.args={value:37};const i=e=>{const[n,s]=u.useState(e.value);return u.useEffect(()=>{const r=setTimeout(()=>{s(l=>l<=0?e.value:l-1)},1e3);return()=>{clearTimeout(r)}},[n]),o("div",{className:"grid grid-flow-col gap-5 text-center auto-cols-max",children:[o("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[a(t,{className:"font-mono text-5xl",value:15}),"days"]}),o("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[a(t,{className:"font-mono text-5xl",value:10}),"hours"]}),o("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[a(t,{className:"font-mono text-5xl",value:24}),"min"]}),o("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[a(t,{className:"font-mono text-5xl",value:n}),"sec"]})]})};i.args={value:26};var v,f,p;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number>(args.value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(v => v <= 0 ? args.value : v - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return <Countdown className="text-2xl" value={value} />;
}`,...(p=(f=c.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var N,g,h;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number>(args.value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(v => v <= 0 ? args.value : v - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return <span className="font-mono text-2xl">
      <Countdown value={10} />:
      <Countdown value={24} />:
      <Countdown value={value} />
    </span>;
}`,...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var w,b,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number>(args.value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(v => v <= 0 ? args.value : v - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={15} />
        days
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={10} />
        hours
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={24} />
        min
      </div>
      <div className="flex flex-col">
        <Countdown className="font-mono text-5xl" value={value} />
        sec
      </div>
    </div>;
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var y,T,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<number>(args.value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(v => v <= 0 ? args.value : v - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={15} />
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={10} />
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={24} />
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-5xl" value={value} />
        sec
      </div>
    </div>;
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const M=["Default","Clock","WithLabels","WithBoxes"];export{m as Clock,c as Default,i as WithBoxes,d as WithLabels,M as __namedExportsOrder,j as default};
//# sourceMappingURL=Countdown.stories-c20d2c2a.js.map
