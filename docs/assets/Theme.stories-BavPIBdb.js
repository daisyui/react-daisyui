import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{e as C,r as u}from"./iframe-DDnXVYpC.js";import{d as $}from"./constants-DRV7E8Ky.js";import{c as q}from"./clsx-B-dksMZM.js";import{t as V}from"./bundle-mjs-yGZq-iow.js";const A=C.createContext({theme:"light",setTheme:()=>{}}),B=r=>{if(!r.current)return;const t=r.current.closest("[data-theme]");if(t)return t.getAttribute("data-theme")},p=C.forwardRef(({children:r,dataTheme:t,onChange:n,className:l,...a},m)=>{const s=u.useRef(m==null?void 0:m.current),i=B(s),[g,S]=u.useState(t||i||$),f=T=>{n&&n(T),S(T)};return u.useEffect(()=>{t!==g&&t&&f(t)},[t]),e.jsx(A.Provider,{value:{theme:g,setTheme:f},children:e.jsx("div",{...a,"data-theme":g,className:l,ref:s,children:r})})});try{p.displayName="Theme",p.__docgenInfo={description:"",displayName:"Theme",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((theme: string) => void)"}}}}}catch{}try{p.displayName="Theme",p.__docgenInfo={description:"",displayName:"Theme",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((theme: string) => void)"}}}}}catch{}const o=({selected:r,children:t,dataTheme:n,className:l,...a})=>{const m=V(l,"border-base-content/20 hover:border-base-content/40 outline-base-content        overflow-hidden rounded-lg border outline-2 outline-offset-2",q({outline:r}));return e.jsx("div",{...a,"data-theme":n,className:m,children:e.jsx("div",{className:"bg-base-100 text-base-content w-full cursor-pointer font-sans",children:e.jsxs("div",{className:"grid grid-cols-5 grid-rows-3",children:[e.jsx("div",{className:"bg-base-200 col-start-1 row-span-2 row-start-1"}),e.jsx("div",{className:"bg-base-300 col-start-1 row-start-3"}),e.jsxs("div",{className:"bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2",children:[e.jsx("div",{className:"font-bold",children:n}),e.jsxs("div",{className:"flex flex-wrap gap-1",children:[e.jsx("div",{className:"bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6",children:e.jsx("div",{className:"text-primary-content text-sm font-bold",children:"A"})}),e.jsx("div",{className:"bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6",children:e.jsx("div",{className:"text-primary-content text-sm font-bold",children:"A"})}),e.jsx("div",{className:"bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6",children:e.jsx("div",{className:"text-primary-content text-sm font-bold",children:"A"})}),e.jsx("div",{className:"bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6",children:e.jsx("div",{className:"text-primary-content text-sm font-bold",children:"A"})})]}),t&&e.jsx("div",{className:"my-2",children:t})]})]})})})};try{o.displayName="ThemeItem",o.__docgenInfo={description:"",displayName:"ThemeItem",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const k=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter","dim","nord","sunset"],x=r=>{const{theme:t,setTheme:n}=u.useContext(A);return u.useEffect(()=>{r&&t!==r&&n(r)},[r]),{theme:t,setTheme:n}},U={title:"Utils/Theme",component:p},c=r=>{const{theme:t,setTheme:n}=x();return e.jsxs("div",{children:[e.jsxs("h4",{className:"mb-4",children:["Current Theme: ",t]}),e.jsx("div",{className:"flex flex-wrap gap-4",children:k.map((l,a)=>e.jsx(o,{dataTheme:l,role:"button","aria-label":"Theme select","aria-pressed":l===t,selected:l===t,tabIndex:0,onClick:()=>{document.getElementsByTagName("html")[0].setAttribute("data-theme",l),window.localStorage.setItem("sb-react-daisyui-preview-theme",l),n(l)}},`theme_${l}_#${a}`))})]})};c.args={};const d=r=>{const{theme:t}=x("corporate");return e.jsx("div",{className:"flex flex-wrap gap-4",children:e.jsx(o,{dataTheme:t,role:"button","aria-label":"Theme select",tabIndex:0})})};d.args={};const h=r=>{const{theme:t,setTheme:n}=x(),l=a=>{const m=[];for(let s=0;s<a.length;s+=2)m.push(e.jsx(o,{dataTheme:a[s],role:"button","aria-label":"Theme select","aria-pressed":a[s]===t,selected:a[s]===t,tabIndex:0,onClick:i=>{i.stopPropagation(),document.getElementsByTagName("html")[0].setAttribute("data-theme",a[s]),window.localStorage.setItem("sb-react-daisyui-preview-theme",a[s]),n(a[s])},children:e.jsx(o,{dataTheme:a[s+1],role:"button","aria-label":"Theme select","aria-pressed":a[s+1]===t,selected:a[s+1]===t,tabIndex:0,onClick:i=>{i.stopPropagation(),document.getElementsByTagName("html")[0].setAttribute("data-theme",a[s+1]),window.localStorage.setItem("sb-react-daisyui-preview-theme",a[s+1]),n(a[s+1])}},`theme_${a[s+1]}_#${s+1}`)},`theme_${a[s]}_#${s}`));return e.jsx("div",{className:"flex flex-wrap gap-4",children:m})};return e.jsxs("div",{children:[e.jsxs("h4",{className:"mb-4",children:["Current Theme: ",t]}),e.jsx("div",{className:"flex flex-col gap-y-4",children:l(k)})]})};h.args={};var b,y,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const {
    theme,
    setTheme
  } = useTheme();
  return <div>
      <h4 className="mb-4">Current Theme: {theme}</h4>
      <div className="flex flex-wrap gap-4">
        {DEFAULT_THEMES.map((t, i) => <ThemeItem key={\`theme_\${t}_#\${i}\`} dataTheme={t} role="button" aria-label="Theme select" aria-pressed={t === theme} selected={t === theme} tabIndex={0} onClick={() => {
        document.getElementsByTagName('html')[0].setAttribute('data-theme', t);
        window.localStorage.setItem('sb-react-daisyui-preview-theme', t);
        setTheme(t);
      }} />)}
      </div>
    </div>;
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,N,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const {
    theme,
    setTheme
  } = useTheme('corporate');
  return <div className="flex flex-wrap gap-4">
      <ThemeItem dataTheme={theme} role="button" aria-label="Theme select" tabIndex={0} />
    </div>;
}`,...(_=(N=d.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var j,I,E;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const {
    theme,
    setTheme
  } = useTheme();
  const renderNestedThemes = (themes: readonly string[]) => {
    const nodes: React.ReactNode[] = [];
    for (let i = 0; i < themes.length; i += 2) {
      nodes.push(<ThemeItem key={\`theme_\${themes[i]}_#\${i}\`} dataTheme={themes[i]} role="button" aria-label="Theme select" aria-pressed={themes[i] === theme} selected={themes[i] === theme} tabIndex={0} onClick={e => {
        e.stopPropagation();
        document.getElementsByTagName('html')[0].setAttribute('data-theme', themes[i]);
        window.localStorage.setItem('sb-react-daisyui-preview-theme', themes[i]);
        setTheme(themes[i]);
      }}>
          <ThemeItem key={\`theme_\${themes[i + 1]}_#\${i + 1}\`} dataTheme={themes[i + 1]} role="button" aria-label="Theme select" aria-pressed={themes[i + 1] === theme} selected={themes[i + 1] === theme} tabIndex={0} onClick={e => {
          e.stopPropagation();
          document.getElementsByTagName('html')[0].setAttribute('data-theme', themes[i + 1]);
          window.localStorage.setItem('sb-react-daisyui-preview-theme', themes[i + 1]);
          setTheme(themes[i + 1]);
        }} />
        </ThemeItem>);
    }
    return <div className="flex flex-wrap gap-4">{nodes}</div>;
  };
  return <div>
      <h4 className="mb-4">Current Theme: {theme}</h4>
      <div className="flex flex-col gap-y-4">
        {renderNestedThemes(DEFAULT_THEMES)}
      </div>
    </div>;
}`,...(E=(I=h.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const H=["Default","WithInitialValue","NestedThemes"];export{c as Default,h as NestedThemes,d as WithInitialValue,H as __namedExportsOrder,U as default};
