import{t as k,j as e,a as l}from"./tw-merge-0a3648bd.js";import{T as A,a as $}from"./index-147f7280.js";import{c as C}from"./clsx.m-1229b3e0.js";import{r as g}from"./index-1b03fe98.js";import"./constants-fe73bc72.js";const p=({selected:n,children:s,dataTheme:r,className:m,...t})=>{const d=k(m,"border-base-content/20 hover:border-base-content/40 outline-base-content        overflow-hidden rounded-lg border outline-2 outline-offset-2",C({outline:n}));return e("div",{...t,"data-theme":r,className:d,children:e("div",{className:"bg-base-100 text-base-content w-full cursor-pointer font-sans",children:l("div",{className:"grid grid-cols-5 grid-rows-3",children:[e("div",{className:"bg-base-200 col-start-1 row-span-2 row-start-1"}),e("div",{className:"bg-base-300 col-start-1 row-start-3"}),l("div",{className:"bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2",children:[e("div",{className:"font-bold",children:r}),l("div",{className:"flex flex-wrap gap-1",children:[e("div",{className:"bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6",children:e("div",{className:"text-primary-content text-sm font-bold",children:"A"})}),e("div",{className:"bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6",children:e("div",{className:"text-primary-content text-sm font-bold",children:"A"})}),e("div",{className:"bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6",children:e("div",{className:"text-primary-content text-sm font-bold",children:"A"})}),e("div",{className:"bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6",children:e("div",{className:"text-primary-content text-sm font-bold",children:"A"})})]}),s&&e("div",{className:"my-2",children:s})]})]})})})},h=p;try{p.displayName="ThemeItem",p.__docgenInfo={description:"",displayName:"ThemeItem",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}}}}}catch{}const E=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter","dim","nord","sunset"],b=n=>{const{theme:s,setTheme:r}=g.useContext(A);return g.useEffect(()=>{n&&s!==n&&r(n)},[n]),{theme:s,setTheme:r}},M={title:"Utils/Theme",component:$},o=n=>{const{theme:s,setTheme:r}=b();return l("div",{children:[l("h4",{className:"mb-4",children:["Current Theme: ",s]}),e("div",{className:"flex flex-wrap gap-4",children:E.map((m,t)=>e(h,{dataTheme:m,role:"button","aria-label":"Theme select","aria-pressed":m===s,selected:m===s,tabIndex:0,onClick:()=>{document.getElementsByTagName("html")[0].setAttribute("data-theme",m),window.localStorage.setItem("sb-react-daisyui-preview-theme",m),r(m)}},`theme_${m}_#${t}`))})]})};o.args={};const i=n=>{const{theme:s,setTheme:r}=b("corporate");return e("div",{className:"flex flex-wrap gap-4",children:e(h,{dataTheme:s,role:"button","aria-label":"Theme select",tabIndex:0})})};i.args={};const c=n=>{const{theme:s,setTheme:r}=b();return l("div",{children:[l("h4",{className:"mb-4",children:["Current Theme: ",s]}),e("div",{className:"flex flex-col gap-y-4",children:(t=>{const d=[];for(let a=0;a<t.length;a+=2)d.push(e(h,{dataTheme:t[a],role:"button","aria-label":"Theme select","aria-pressed":t[a]===s,selected:t[a]===s,tabIndex:0,onClick:u=>{u.stopPropagation(),document.getElementsByTagName("html")[0].setAttribute("data-theme",t[a]),window.localStorage.setItem("sb-react-daisyui-preview-theme",t[a]),r(t[a])},children:e(h,{dataTheme:t[a+1],role:"button","aria-label":"Theme select","aria-pressed":t[a+1]===s,selected:t[a+1]===s,tabIndex:0,onClick:u=>{u.stopPropagation(),document.getElementsByTagName("html")[0].setAttribute("data-theme",t[a+1]),window.localStorage.setItem("sb-react-daisyui-preview-theme",t[a+1]),r(t[a+1])}},`theme_${t[a+1]}_#${a+1}`)},`theme_${t[a]}_#${a}`));return e("div",{className:"flex flex-wrap gap-4",children:d})})(E)})]})};c.args={};var T,f,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
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
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,N,v;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const {
    theme,
    setTheme
  } = useTheme('corporate');
  return <div className="flex flex-wrap gap-4">
      <ThemeItem dataTheme={theme} role="button" aria-label="Theme select" tabIndex={0} />
    </div>;
}`,...(v=(N=i.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var y,I,_;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const P=["Default","WithInitialValue","NestedThemes"];export{o as Default,c as NestedThemes,i as WithInitialValue,P as __namedExportsOrder,M as default};
