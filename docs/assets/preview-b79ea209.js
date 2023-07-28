import{s as a}from"./index-d475d2ea.js";var d="storybook/highlight",r="storybookHighlight",_=`${d}/add`,g=`${d}/reset`;const{addons:E}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:H}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:l}=a,O=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,I=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),i=E.getChannel(),p=e=>{let t=r;n();let o=Array.from(new Set(e.elements)),h=l.createElement("style");h.setAttribute("id",t),h.innerHTML=o.map(s=>`${s}{
          ${O(e.color,e.style)}
         }`).join(" "),l.head.appendChild(h)},n=()=>{var o;let e=r,t=l.getElementById(e);t&&((o=t.parentNode)==null||o.removeChild(t))};i.on(H,n);i.on(g,n);i.on(_,p);export{I as highlightObject,O as highlightStyle};
//# sourceMappingURL=preview-b79ea209.js.map
