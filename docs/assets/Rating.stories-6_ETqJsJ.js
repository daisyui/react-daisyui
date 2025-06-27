import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{e as N,r}from"./iframe-DDnXVYpC.js";import{c as b}from"./clsx-B-dksMZM.js";import{t as J}from"./bundle-mjs-yGZq-iow.js";const d=({...s})=>a.jsx("input",{...s,type:"checkbox"});try{d.displayName="RatingItem",d.__docgenInfo={description:"",displayName:"RatingItem",props:{}}}catch{}const f=N.forwardRef(({children:s,size:g,half:n,hidden:m,dataTheme:t,className:T,value:h,onChange:R,...z},$)=>{const p=J("rating",T,b({"rating-lg":g==="lg","rating-md":g==="md","rating-sm":g==="sm","rating-xs":g==="xs","rating-half":n,"rating-hidden":m||h===0}));return a.jsxs("div",{"aria-label":"Rating",...z,ref:$,"data-theme":t,className:p,children:[h===0&&a.jsx(d,{className:b(p,"hidden"),checked:!0,readOnly:!0}),N.Children.map(s,(A,I)=>{const B=A;return N.cloneElement(B,{key:I+h,checked:h===I+1,readOnly:R==null,onChange:()=>{R==null||R(I+1)}})})]})}),e=Object.assign(f,{Item:d});try{f.displayName="Rating",f.__docgenInfo={description:"",displayName:"Rating",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},half:{defaultValue:null,description:"",name:"half",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((newRating: number) => void)"}}}}}catch{}const U={title:"Data Input/Rating",component:e},i=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),a.jsxs(e,{value:m,onChange:t,...n,children:[a.jsx(e.Item,{name:"rating-1",className:"mask mask-star"}),a.jsx(e.Item,{name:"rating-1",className:"mask mask-star"}),a.jsx(e.Item,{name:"rating-1",className:"mask mask-star"}),a.jsx(e.Item,{name:"rating-1",className:"mask mask-star"}),a.jsx(e.Item,{name:"rating-1",className:"mask mask-star"})]})};i.args={value:2};const l=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),a.jsxs(e,{value:m,onChange:t,...n,children:[a.jsx(e.Item,{name:"rating-2",className:"mask mask-star-2 bg-orange-400"}),a.jsx(e.Item,{name:"rating-2",className:"mask mask-star-2 bg-orange-400"}),a.jsx(e.Item,{name:"rating-2",className:"mask mask-star-2 bg-orange-400"}),a.jsx(e.Item,{name:"rating-2",className:"mask mask-star-2 bg-orange-400"}),a.jsx(e.Item,{name:"rating-2",className:"mask mask-star-2 bg-orange-400"})]})};l.args={value:2};const o=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),a.jsxs(e,{value:m,onChange:t,...n,children:[a.jsx(e.Item,{name:"rating-3",className:"mask mask-heart bg-red-400"}),a.jsx(e.Item,{name:"rating-3",className:"mask mask-heart bg-orange-400"}),a.jsx(e.Item,{name:"rating-3",className:"mask mask-heart bg-yellow-400"}),a.jsx(e.Item,{name:"rating-3",className:"mask mask-heart bg-lime-400"}),a.jsx(e.Item,{name:"rating-3",className:"mask mask-heart bg-green-400"})]})};o.args={value:2};const c=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),a.jsxs(e,{value:m,onChange:t,...n,children:[a.jsx(e.Item,{name:"rating-4",className:"mask mask-star-2 bg-green-500"}),a.jsx(e.Item,{name:"rating-4",className:"mask mask-star-2 bg-green-500"}),a.jsx(e.Item,{name:"rating-4",className:"mask mask-star-2 bg-green-500"}),a.jsx(e.Item,{name:"rating-4",className:"mask mask-star-2 bg-green-500"}),a.jsx(e.Item,{name:"rating-4",className:"mask mask-star-2 bg-green-500"})]})};c.args={value:2};const k=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),a.jsxs(e,{value:m,onChange:t,...n,children:[a.jsx(e.Item,{name:"rating-9",className:"mask mask-star"}),a.jsx(e.Item,{name:"rating-9",className:"mask mask-star"}),a.jsx(e.Item,{name:"rating-9",className:"mask mask-star"}),a.jsx(e.Item,{name:"rating-9",className:"mask mask-star"}),a.jsx(e.Item,{name:"rating-9",className:"mask mask-star"})]})};k.args={size:"lg",value:0};const u=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),a.jsxs(e,{value:m,onChange:t,...n,children:[a.jsx(e.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-1 bg-green-500"}),a.jsx(e.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-2 bg-green-500"}),a.jsx(e.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-1 bg-green-500"}),a.jsx(e.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-2 bg-green-500"}),a.jsx(e.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-1 bg-green-500"}),a.jsx(e.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-2 bg-green-500"}),a.jsx(e.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-1 bg-green-500"}),a.jsx(e.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-2 bg-green-500"}),a.jsx(e.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-1 bg-green-500"}),a.jsx(e.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-2 bg-green-500"})]})};u.args={size:"lg",half:!0,value:3};var x,j,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`({
  value,
  onChange,
  ...args
}) => {
  const [rating, setRating] = useState(value);

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value);
  }, [value]);
  return <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
      <Rating.Item name="rating-1" className="mask mask-star" />
    </Rating>;
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var C,S,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`({
  value,
  onChange,
  ...args
}) => {
  const [rating, setRating] = useState(value);

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value);
  }, [value]);
  return <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </Rating>;
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var _,E,w;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`({
  value,
  onChange,
  ...args
}) => {
  const [rating, setRating] = useState(value);

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value);
  }, [value]);
  return <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-3" className="mask mask-heart bg-red-400" />
      <Rating.Item name="rating-3" className="mask mask-heart bg-orange-400" />
      <Rating.Item name="rating-3" className="mask mask-heart bg-yellow-400" />
      <Rating.Item name="rating-3" className="mask mask-heart bg-lime-400" />
      <Rating.Item name="rating-3" className="mask mask-heart bg-green-400" />
    </Rating>;
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var M,W,F;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`({
  value,
  onChange,
  ...args
}) => {
  const [rating, setRating] = useState(value);

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value);
  }, [value]);
  return <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
      <Rating.Item name="rating-4" className="mask mask-star-2 bg-green-500" />
    </Rating>;
}`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var H,q,V;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`({
  value,
  onChange,
  ...args
}) => {
  const [rating, setRating] = useState(value);

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value);
  }, [value]);
  return <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" />
      <Rating.Item name="rating-9" className="mask mask-star" />
    </Rating>;
}`,...(V=(q=k.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var O,D,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`({
  value,
  onChange,
  ...args
}) => {
  const [rating, setRating] = useState(value);

  // For Storybook to update the value with the controls
  useEffect(() => {
    setRating(value);
  }, [value]);
  return <Rating value={rating} onChange={setRating} {...args}>
      <Rating.Item name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
      <Rating.Item name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
      <Rating.Item name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
      <Rating.Item name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />

      <Rating.Item name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
      <Rating.Item name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />

      <Rating.Item name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
      <Rating.Item name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />

      <Rating.Item name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
      <Rating.Item name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
    </Rating>;
}`,...(G=(D=u.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const X=["Default","MaskStart2WithWarningColor","MaskHeartWithMultipleColors","MaskStart2WithGreen500Color","RatingHidden","HalfStars"];export{i as Default,u as HalfStars,o as MaskHeartWithMultipleColors,c as MaskStart2WithGreen500Color,l as MaskStart2WithWarningColor,k as RatingHidden,X as __namedExportsOrder,U as default};
