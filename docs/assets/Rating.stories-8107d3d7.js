import{j as e,t as L,a as i}from"./tw-merge-e2243cb0.js";import{R as N,r}from"./index-ebeaab24.js";import{c as v}from"./clsx.m-1229b3e0.js";const f=({...s})=>e("input",{...s,type:"checkbox"}),$=f;try{f.displayName="RatingItem",f.__docgenInfo={description:"",displayName:"RatingItem",props:{}}}catch{}const p=N.forwardRef(({children:s,size:g,half:n,hidden:m,dataTheme:t,className:z,value:R,onChange:d,...A},B)=>{const b=L("rating",z,v({"rating-lg":g==="lg","rating-md":g==="md","rating-sm":g==="sm","rating-xs":g==="xs","rating-half":n,"rating-hidden":m||R===0}));return i("div",{"aria-label":"Rating",...A,ref:B,"data-theme":t,className:b,children:[R===0&&e($,{className:v(b,"hidden"),checked:!0,readOnly:!0}),N.Children.map(s,(J,I)=>{const K=J;return N.cloneElement(K,{key:I+R,checked:R===I+1,readOnly:d==null,onChange:()=>{d==null||d(I+1)}})})]})}),a=Object.assign(p,{Item:$});try{p.displayName="Rating",p.__docgenInfo={description:"",displayName:"Rating",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},half:{defaultValue:null,description:"",name:"half",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((newRating: number) => void)"}}}}}catch{}const X={title:"Data Input/Rating",component:a},l=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),i(a,{value:m,onChange:t,...n,children:[e(a.Item,{name:"rating-1",className:"mask mask-star"}),e(a.Item,{name:"rating-1",className:"mask mask-star"}),e(a.Item,{name:"rating-1",className:"mask mask-star"}),e(a.Item,{name:"rating-1",className:"mask mask-star"}),e(a.Item,{name:"rating-1",className:"mask mask-star"})]})};l.args={value:2};const o=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),i(a,{value:m,onChange:t,...n,children:[e(a.Item,{name:"rating-2",className:"mask mask-star-2 bg-orange-400"}),e(a.Item,{name:"rating-2",className:"mask mask-star-2 bg-orange-400"}),e(a.Item,{name:"rating-2",className:"mask mask-star-2 bg-orange-400"}),e(a.Item,{name:"rating-2",className:"mask mask-star-2 bg-orange-400"}),e(a.Item,{name:"rating-2",className:"mask mask-star-2 bg-orange-400"})]})};o.args={value:2};const c=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),i(a,{value:m,onChange:t,...n,children:[e(a.Item,{name:"rating-3",className:"mask mask-heart bg-red-400"}),e(a.Item,{name:"rating-3",className:"mask mask-heart bg-orange-400"}),e(a.Item,{name:"rating-3",className:"mask mask-heart bg-yellow-400"}),e(a.Item,{name:"rating-3",className:"mask mask-heart bg-lime-400"}),e(a.Item,{name:"rating-3",className:"mask mask-heart bg-green-400"})]})};c.args={value:2};const k=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),i(a,{value:m,onChange:t,...n,children:[e(a.Item,{name:"rating-4",className:"mask mask-star-2 bg-green-500"}),e(a.Item,{name:"rating-4",className:"mask mask-star-2 bg-green-500"}),e(a.Item,{name:"rating-4",className:"mask mask-star-2 bg-green-500"}),e(a.Item,{name:"rating-4",className:"mask mask-star-2 bg-green-500"}),e(a.Item,{name:"rating-4",className:"mask mask-star-2 bg-green-500"})]})};k.args={value:2};const u=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),i(a,{value:m,onChange:t,...n,children:[e(a.Item,{name:"rating-9",className:"mask mask-star"}),e(a.Item,{name:"rating-9",className:"mask mask-star"}),e(a.Item,{name:"rating-9",className:"mask mask-star"}),e(a.Item,{name:"rating-9",className:"mask mask-star"}),e(a.Item,{name:"rating-9",className:"mask mask-star"})]})};u.args={size:"lg",value:0};const h=({value:s,onChange:g,...n})=>{const[m,t]=r.useState(s);return r.useEffect(()=>{t(s)},[s]),i(a,{value:m,onChange:t,...n,children:[e(a.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-1 bg-green-500"}),e(a.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-2 bg-green-500"}),e(a.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-1 bg-green-500"}),e(a.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-2 bg-green-500"}),e(a.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-1 bg-green-500"}),e(a.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-2 bg-green-500"}),e(a.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-1 bg-green-500"}),e(a.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-2 bg-green-500"}),e(a.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-1 bg-green-500"}),e(a.Item,{name:"rating-10",className:"mask mask-star-2 mask-half-2 bg-green-500"})]})};h.args={size:"lg",half:!0,value:3};var C,S,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`({
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
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </Rating>;
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var M,x,W;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
}`,...(W=(x=c.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var F,H,q;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`({
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
}`,...(q=(H=k.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var V,j,O;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`({
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
}`,...(O=(j=u.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var D,G,T;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`({
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
}`,...(T=(G=h.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};const Y=["Default","MaskStart2WithWarningColor","MaskHeartWithMultipleColors","MaskStart2WithGreen500Color","RatingHidden","HalfStars"];export{l as Default,h as HalfStars,c as MaskHeartWithMultipleColors,k as MaskStart2WithGreen500Color,o as MaskStart2WithWarningColor,u as RatingHidden,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Rating.stories-8107d3d7.js.map
