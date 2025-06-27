import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./iframe-DDnXVYpC.js";import{t as T}from"./bundle-mjs-yGZq-iow.js";const t=({value:a,dataTheme:n,className:l,...o})=>{const s=T("countdown",l),C={"--value":Math.min(99,Math.max(0,a))};return e.jsx("span",{role:"timer",...o,"data-theme":n,className:s,children:e.jsx("span",{style:C})})};try{t.displayName="Countdown",t.__docgenInfo={description:"",displayName:"Countdown",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}try{t.displayName="Countdown",t.__docgenInfo={description:"",displayName:"Countdown",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}const q={title:"Data Display/Countdown",component:t},u=a=>{const[n,l]=r.useState(a.value);return r.useEffect(()=>{const o=setTimeout(()=>{l(s=>s<=0?a.value:s-1)},1e3);return()=>{clearTimeout(o)}},[n]),e.jsx(t,{className:"text-2xl",value:n})};u.args={value:50};const c=a=>{const[n,l]=r.useState(a.value);return r.useEffect(()=>{const o=setTimeout(()=>{l(s=>s<=0?a.value:s-1)},1e3);return()=>{clearTimeout(o)}},[n]),e.jsxs("span",{className:"font-mono text-2xl",children:[e.jsx(t,{value:10}),":",e.jsx(t,{value:24}),":",e.jsx(t,{value:n})]})};c.args={value:34};const m=a=>{const[n,l]=r.useState(a.value);return r.useEffect(()=>{const o=setTimeout(()=>{l(s=>s<=0?a.value:s-1)},1e3);return()=>{clearTimeout(o)}},[n]),e.jsxs("div",{className:"grid grid-flow-col gap-5 text-center auto-cols-max",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(t,{className:"font-mono text-5xl",value:15}),"days"]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(t,{className:"font-mono text-5xl",value:10}),"hours"]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(t,{className:"font-mono text-5xl",value:24}),"min"]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(t,{className:"font-mono text-5xl",value:n}),"sec"]})]})};m.args={value:37};const d=a=>{const[n,l]=r.useState(a.value);return r.useEffect(()=>{const o=setTimeout(()=>{l(s=>s<=0?a.value:s-1)},1e3);return()=>{clearTimeout(o)}},[n]),e.jsxs("div",{className:"grid grid-flow-col gap-5 text-center auto-cols-max",children:[e.jsxs("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[e.jsx(t,{className:"font-mono text-5xl",value:15}),"days"]}),e.jsxs("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[e.jsx(t,{className:"font-mono text-5xl",value:10}),"hours"]}),e.jsxs("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[e.jsx(t,{className:"font-mono text-5xl",value:24}),"min"]}),e.jsxs("div",{className:"flex flex-col p-2 bg-neutral rounded-box text-neutral-content",children:[e.jsx(t,{className:"font-mono text-5xl",value:n}),"sec"]})]})};d.args={value:26};var i,x,v;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(v=(x=u.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,p,N;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(N=(p=c.parameters)==null?void 0:p.docs)==null?void 0:N.source}}};var g,h,j;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(j=(h=m.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var w,b,y;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
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
}`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const D=["Default","Clock","WithLabels","WithBoxes"];export{c as Clock,u as Default,d as WithBoxes,m as WithLabels,D as __namedExportsOrder,q as default};
