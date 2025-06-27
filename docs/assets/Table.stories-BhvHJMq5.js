import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{e as m}from"./iframe-DDnXVYpC.js";import{c as $}from"./clsx-B-dksMZM.js";import{t as nn}from"./bundle-mjs-yGZq-iow.js";import{B as T}from"./index-Bdz6q0Sq.js";import{B as w}from"./Button-GtH5nISf.js";import{C as c}from"./index-BTy56zCQ.js";import{M as y}from"./index-BQZBaXSX.js";import"./index-Dl-l57lR.js";const C=m.forwardRef(({children:s,noCell:e=!1,...r},i)=>{const o=e?s:s==null?void 0:s.map((p,l)=>l<1?n.jsx("th",{children:p},l):n.jsx("td",{children:p},l));return n.jsx("thead",{...r,ref:i,children:n.jsx("tr",{children:o})})});try{C.displayName="TableHead",C.__docgenInfo={description:"",displayName:"TableHead",props:{noCell:{defaultValue:{value:"false"},description:"",name:"noCell",required:!1,type:{name:"boolean"}}}}}catch{}const S=m.forwardRef(({children:s,...e},r)=>n.jsx("tbody",{...e,ref:r,children:s}));try{S.displayName="TableBody",S.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}const B=m.forwardRef(({children:s,active:e,noCell:r=!1,className:i,...o},p)=>{const l=nn(i,$({active:e})),g=r?s:s==null?void 0:s.map((b,d)=>d<1?n.jsx("th",{children:b},d):n.jsx("td",{children:b},d));return n.jsx("tr",{...o,className:l,ref:p,children:g})});try{B.displayName="TableRow",B.__docgenInfo={description:"",displayName:"TableRow",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},noCell:{defaultValue:{value:"false"},description:"",name:"noCell",required:!1,type:{name:"boolean"}}}}}catch{}const N=m.forwardRef(({children:s,noCell:e=!1,...r},i)=>{const o=e?s:s==null?void 0:s.map((p,l)=>l<1?n.jsx("th",{children:p},l):n.jsx("td",{children:p},l));return n.jsx("tfoot",{...r,ref:i,children:n.jsx("tr",{children:o})})});try{N.displayName="TableFooter",N.__docgenInfo={description:"",displayName:"TableFooter",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},noCell:{defaultValue:{value:"false"},description:"",name:"noCell",required:!1,type:{name:"boolean"}}}}}catch{}const H=m.forwardRef(({children:s,size:e,zebra:r,pinRows:i,pinCols:o,dataTheme:p,className:l,...g},b)=>{const d=nn("table",l,$({"table-zebra":r,"table-xl":e==="xl","table-lg":e==="lg","table-md":e==="md","table-sm":e==="sm","table-xs":e==="xs","table-pin-rows":i,"table-pin-cols":o}));return n.jsx("table",{...g,"data-theme":p,className:d,ref:b,children:s})}),a=Object.assign(H,{Head:C,Body:S,Row:B,Footer:N});try{H.displayName="Table",H.__docgenInfo={description:"",displayName:"Table",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},zebra:{defaultValue:null,description:"",name:"zebra",required:!1,type:{name:"boolean"}},pinRows:{defaultValue:null,description:"",name:"pinRows",required:!1,type:{name:"boolean"}},pinCols:{defaultValue:null,description:"",name:"pinCols",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="Table",a.__docgenInfo={description:"",displayName:"Table",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},zebra:{defaultValue:null,description:"",name:"zebra",required:!1,type:{name:"boolean"}},pinRows:{defaultValue:null,description:"",name:"pinRows",required:!1,type:{name:"boolean"}},pinCols:{defaultValue:null,description:"",name:"pinCols",required:!1,type:{name:"boolean"}}}}}catch{}const un={title:"Data Display/Table",component:a},an=s=>n.jsx("div",{className:"overflow-x-auto",children:n.jsxs(a,{...s,children:[n.jsxs(a.Head,{children:[n.jsx("span",{}),n.jsx("span",{children:"Name"}),n.jsx("span",{children:"Job"}),n.jsx("span",{children:"Favorite Color"})]}),n.jsxs(a.Body,{children:[n.jsxs(a.Row,{children:[n.jsx("span",{children:"1"}),n.jsx("span",{children:"Cy Ganderton"}),n.jsx("span",{children:"Quality Control Specialist"}),n.jsx("span",{children:"Blue"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"2"}),n.jsx("span",{children:"Hart Hagerty"}),n.jsx("span",{children:"Desktop Support Technician"}),n.jsx("span",{children:"Purple"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"3"}),n.jsx("span",{children:"Brice Swyre"}),n.jsx("span",{children:"Tax Accountant"}),n.jsx("span",{children:"Red"})]})]})]})}),t=an.bind({});t.args={};const R=s=>n.jsx("div",{className:"overflow-x-auto",children:n.jsxs(a,{...s,children:[n.jsxs(a.Head,{children:[n.jsx("span",{}),n.jsx("span",{children:"Name"}),n.jsx("span",{children:"Job"}),n.jsx("span",{children:"Favorite Color"})]}),n.jsxs(a.Body,{children:[n.jsxs(a.Row,{active:!0,children:[n.jsx("span",{children:"1"}),n.jsx("span",{children:"Cy Ganderton"}),n.jsx("span",{children:"Quality Control Specialist"}),n.jsx("span",{children:"Blue"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"2"}),n.jsx("span",{children:"Hart Hagerty"}),n.jsx("span",{children:"Desktop Support Technician"}),n.jsx("span",{children:"Purple"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"3"}),n.jsx("span",{children:"Brice Swyre"}),n.jsx("span",{children:"Tax Accountant"}),n.jsx("span",{children:"Red"})]})]})]})}),v=s=>n.jsx("div",{className:"overflow-x-auto",children:n.jsxs(a,{...s,children:[n.jsxs(a.Head,{children:[n.jsx("span",{}),n.jsx("span",{children:"Name"}),n.jsx("span",{children:"Job"}),n.jsx("span",{children:"Favorite Color"})]}),n.jsxs(a.Body,{children:[n.jsxs(a.Row,{children:[n.jsx("span",{children:"1"}),n.jsx("span",{children:"Cy Ganderton"}),n.jsx("span",{children:"Quality Control Specialist"}),n.jsx("span",{children:"Blue"})]}),n.jsxs(a.Row,{hover:!0,children:[n.jsx("span",{children:"2"}),n.jsx("span",{children:"Hart Hagerty"}),n.jsx("span",{children:"Desktop Support Technician"}),n.jsx("span",{children:"Purple"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"3"}),n.jsx("span",{children:"Brice Swyre"}),n.jsx("span",{children:"Tax Accountant"}),n.jsx("span",{children:"Red"})]})]})]})}),h=an.bind({});h.args={zebra:!0};const x=s=>n.jsx("div",{className:"overflow-x-auto",children:n.jsxs(a,{...s,className:"rounded-box",children:[n.jsxs(a.Head,{children:[n.jsx(c,{}),n.jsx("span",{children:"Name"}),n.jsx("span",{children:"Job"}),n.jsx("span",{children:"Favorite Color"}),n.jsx("span",{})]}),n.jsxs(a.Body,{children:[n.jsxs(a.Row,{children:[n.jsx(c,{}),n.jsxs("div",{className:"flex items-center space-x-3 truncate",children:[n.jsx(y,{variant:"squircle",src:"https://img.daisyui.com/images/profile/demo/2@94.webp"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold",children:"Hart Hagerty"}),n.jsx("div",{className:"text-sm opacity-50",children:"United States"})]})]}),n.jsxs("div",{children:["Zemlak, Daniel and Leannon",n.jsx("br",{}),n.jsx(T,{color:"ghost",size:"sm",children:"Desktop Support Technician"})]}),n.jsx("div",{children:"Purple"}),n.jsx(w,{color:"ghost",size:"xs",children:"details"})]}),n.jsxs(a.Row,{children:[n.jsx(c,{}),n.jsxs("div",{className:"flex items-center space-x-3 truncate",children:[n.jsx(y,{variant:"squircle",src:"https://img.daisyui.com/images/profile/demo/3@94.webp"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold",children:"Brice Swyre"}),n.jsx("div",{className:"text-sm opacity-50",children:"China"})]})]}),n.jsxs("div",{children:["Carrol Group",n.jsx("br",{}),n.jsx(T,{color:"ghost",size:"sm",children:"Tax Accountant"})]}),n.jsx("div",{children:"Red"}),n.jsx(w,{color:"ghost",size:"xs",children:"details"})]}),n.jsxs(a.Row,{children:[n.jsx(c,{}),n.jsxs("div",{className:"flex items-center space-x-3 truncate",children:[n.jsx(y,{variant:"squircle",src:"https://img.daisyui.com/images/profile/demo/4@94.webp"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold",children:"Marjy Ferencz"}),n.jsx("div",{className:"text-sm opacity-50",children:"Russia"})]})]}),n.jsxs("div",{children:["Rowe-Schoen",n.jsx("br",{}),n.jsx(T,{color:"ghost",size:"sm",children:"Office Assistant I"})]}),n.jsx("div",{children:"Crimson"}),n.jsx(w,{color:"ghost",size:"xs",children:"details"})]}),n.jsxs(a.Row,{children:[n.jsx(c,{}),n.jsxs("div",{className:"flex items-center space-x-3 truncate",children:[n.jsx(y,{variant:"squircle",src:"https://img.daisyui.com/images/profile/demo/5@94.webp"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold",children:"Yancy Tear"}),n.jsx("div",{className:"text-sm opacity-50",children:"Brazil"})]})]}),n.jsxs("div",{children:["Wyman-Ledner",n.jsx("br",{}),n.jsx(T,{color:"ghost",size:"sm",children:"Community Outreach Specialist"})]}),n.jsx("div",{children:"Indigo"}),n.jsx(w,{color:"ghost",size:"xs",children:"details"})]})]}),n.jsxs(a.Footer,{children:[n.jsx("span",{children:" "}),n.jsx("span",{children:"Name"}),n.jsx("span",{children:"Job"}),n.jsx("span",{children:"Favorite Color"}),n.jsx("span",{children:" "})]})]})});x.args={};const j=s=>n.jsx("div",{className:"overflow-x-auto",children:n.jsxs(a,{...s,children:[n.jsxs(a.Head,{children:[n.jsx("span",{}),n.jsx("span",{children:"Name"}),n.jsx("span",{children:"Job"}),n.jsx("span",{children:"Company"}),n.jsx("span",{children:"Location"}),n.jsx("span",{children:"Last Login"}),n.jsx("span",{children:"Favorite Color"})]}),n.jsxs(a.Body,{children:[n.jsxs(a.Row,{children:[n.jsx("span",{children:"1"}),n.jsx("span",{children:"Cy Ganderton"}),n.jsx("span",{children:"Quality Control Specialist"}),n.jsx("span",{children:"Littel, Schaden and Vandervort"}),n.jsx("span",{children:"Canada"}),n.jsx("span",{children:"12/16/2020"}),n.jsx("span",{children:"Blue"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"2"}),n.jsx("span",{children:"Hart Hagerty"}),n.jsx("span",{children:"Desktop Support Technician"}),n.jsx("span",{children:"Zemlak, Daniel and Leannon"}),n.jsx("span",{children:"United States"}),n.jsx("span",{children:"12/5/2020"}),n.jsx("span",{children:"Purple"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"3"}),n.jsx("span",{children:"Brice Swyre"}),n.jsx("span",{children:"Tax Accountant"}),n.jsx("span",{children:"Carroll Group"}),n.jsx("span",{children:"China"}),n.jsx("span",{children:"8/15/2020"}),n.jsx("span",{children:"Red"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"4"}),n.jsx("span",{children:"Marjy Ferencz"}),n.jsx("span",{children:"Office Assistant I"}),n.jsx("span",{children:"Rowe-Schoen"}),n.jsx("span",{children:"Russia"}),n.jsx("span",{children:"3/25/2021"}),n.jsx("span",{children:"Crimson"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"5"}),n.jsx("span",{children:"Yancy Tear"}),n.jsx("span",{children:"Community Outreach Specialist"}),n.jsx("span",{children:"Wyman-Ledner"}),n.jsx("span",{children:"Brazil"}),n.jsx("span",{children:"5/22/2020"}),n.jsx("span",{children:"Indigo"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"6"}),n.jsx("span",{children:"Irma Vasilik"}),n.jsx("span",{children:"Editor"}),n.jsx("span",{children:"Wiza, Bins and Emard"}),n.jsx("span",{children:"Venezuela"}),n.jsx("span",{children:"12/8/2020"}),n.jsx("span",{children:"Purple"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"7"}),n.jsx("span",{children:"Meghann Durtnal"}),n.jsx("span",{children:"Staff Accountant IV"}),n.jsx("span",{children:"Schuster-Schimmel"}),n.jsx("span",{children:"Philippines"}),n.jsx("span",{children:"2/17/2021"}),n.jsx("span",{children:"Yellow"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"8"}),n.jsx("span",{children:"Sammy Seston"}),n.jsx("span",{children:"Accountant I"}),n.jsx("span",{children:"O'Hara, Welch and Keebler"}),n.jsx("span",{children:"Indonesia"}),n.jsx("span",{children:"5/23/2020"}),n.jsx("span",{children:"Crimson"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"9"}),n.jsx("span",{children:"Lesya Tinham"}),n.jsx("span",{children:"Safety Technician IV"}),n.jsx("span",{children:"Turner-Kuhlman"}),n.jsx("span",{children:"Philippines"}),n.jsx("span",{children:"2/21/2021"}),n.jsx("span",{children:"Maroon"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"10"}),n.jsx("span",{children:"Zaneta Tewkesbury"}),n.jsx("span",{children:"VP Marketing"}),n.jsx("span",{children:"Sauer LLC"}),n.jsx("span",{children:"Chad"}),n.jsx("span",{children:"6/23/2020"}),n.jsx("span",{children:"Green"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"11"}),n.jsx("span",{children:"Andy Tipple"}),n.jsx("span",{children:"Librarian"}),n.jsx("span",{children:"Hilpert Group"}),n.jsx("span",{children:"Poland"}),n.jsx("span",{children:"7/9/2020"}),n.jsx("span",{children:"Indigo"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"12"}),n.jsx("span",{children:"Sophi Biles"}),n.jsx("span",{children:"Recruiting Manager"}),n.jsx("span",{children:"Gutmann Inc"}),n.jsx("span",{children:"Indonesia"}),n.jsx("span",{children:"2/12/2021"}),n.jsx("span",{children:"Maroon"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"13"}),n.jsx("span",{children:"Florida Garces"}),n.jsx("span",{children:"Web Developer IV"}),n.jsx("span",{children:"Gaylord, Pacocha and Baumbach"}),n.jsx("span",{children:"Poland"}),n.jsx("span",{children:"5/31/2020"}),n.jsx("span",{children:"Purple"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"14"}),n.jsx("span",{children:"Maribespan Popping"}),n.jsx("span",{children:"Analyst Programmer"}),n.jsx("span",{children:"Deckow-Pouros"}),n.jsx("span",{children:"Portugal"}),n.jsx("span",{children:"4/27/2021"}),n.jsx("span",{children:"Aquamarine"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"15"}),n.jsx("span",{children:"Moritz Dryburgh"}),n.jsx("span",{children:"Dental Hygienist"}),n.jsx("span",{children:"Schiller, Cole and Hackett"}),n.jsx("span",{children:"Sri Lanka"}),n.jsx("span",{children:"8/8/2020"}),n.jsx("span",{children:"Crimson"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"16"}),n.jsx("span",{children:"Reid Semiras"}),n.jsx("span",{children:"Teacher"}),n.jsx("span",{children:"Sporer, Sipes and Rogahn"}),n.jsx("span",{children:"Poland"}),n.jsx("span",{children:"7/30/2020"}),n.jsx("span",{children:"Green"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"17"}),n.jsx("span",{children:"Alec Lethby"}),n.jsx("span",{children:"Teacher"}),n.jsx("span",{children:"Reichel, Glover and Hamill"}),n.jsx("span",{children:"China"}),n.jsx("span",{children:"2/28/2021"}),n.jsx("span",{children:"Khaki"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"18"}),n.jsx("span",{children:"Aland Wilber"}),n.jsx("span",{children:"Quality Control Specialist"}),n.jsx("span",{children:"Kshlerin, Rogahn and Swaniawski"}),n.jsx("span",{children:"Czech Republic"}),n.jsx("span",{children:"9/29/2020"}),n.jsx("span",{children:"Purple"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"19"}),n.jsx("span",{children:"Teddie Duerden"}),n.jsx("span",{children:"Staff Accountant III"}),n.jsx("span",{children:"Pouros, Ullrich and Windler"}),n.jsx("span",{children:"France"}),n.jsx("span",{children:"10/27/2020"}),n.jsx("span",{children:"Aquamarine"})]}),n.jsxs(a.Row,{children:[n.jsx("span",{children:"20"}),n.jsx("span",{children:"Lorelei Blackstone"}),n.jsx("span",{children:"Data Coordiator"}),n.jsx("span",{children:"Witting, Kutch and Greenfelder"}),n.jsx("span",{children:"Kazakhstan"}),n.jsx("span",{children:"6/3/2020"}),n.jsx("span",{children:"Red"})]})]}),n.jsxs(a.Footer,{children:[n.jsx("span",{}),n.jsx("span",{children:"Name"}),n.jsx("span",{children:"Job"}),n.jsx("span",{children:"company"}),n.jsx("span",{children:"location"}),n.jsx("span",{children:"Last Login"}),n.jsx("span",{children:"Favorite Color"})]})]})});j.args={size:"xs"};const f=50,_={headers:new Array(f).fill("header").map((s,e)=>s+e),row:new Array(f).fill("data").map((s,e)=>s+e),footers:new Array(f).fill("footer").map((s,e)=>s+e)},k=(s,e,r=!0)=>r?n.jsx("div",{children:s}):e%5===0?n.jsx("th",{children:s}):n.jsx("td",{children:s}),sn=s=>_.headers.map((e,r)=>k(e,r,s)),en=s=>_.row.map((e,r)=>k(e,r,s)),rn=s=>_.footers.map((e,r)=>k(e,r,s)),u=({noCell:s,...e})=>{const r=new Array(10).fill("").map(()=>n.jsx(a.Row,{noCell:s,children:en(!s)}));return n.jsx("div",{className:"overflow-x-auto max-w-lg max-h-80",children:n.jsxs(a,{...e,children:[n.jsx(a.Head,{noCell:s,children:sn(!s)}),n.jsx(a.Body,{children:r}),n.jsx(a.Footer,{noCell:s,children:rn(!s)})]})})};u.args={noCell:!0,pinRows:!0,pinCols:!0,zebra:!0};var P,z,A;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <div className="overflow-x-auto">
      <Table {...args}>
        <Table.Head>
          <span />
          <span>Name</span>
          <span>Job</span>
          <span>Favorite Color</span>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <span>1</span>
            <span>Cy Ganderton</span>
            <span>Quality Control Specialist</span>
            <span>Blue</span>
          </Table.Row>

          <Table.Row>
            <span>2</span>
            <span>Hart Hagerty</span>
            <span>Desktop Support Technician</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>3</span>
            <span>Brice Swyre</span>
            <span>Tax Accountant</span>
            <span>Red</span>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>;
}`,...(A=(z=t.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var I,F,D;R.parameters={...R.parameters,docs:{...(I=R.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <div className="overflow-x-auto">
      <Table {...args}>
        <Table.Head>
          <span />
          <span>Name</span>
          <span>Job</span>
          <span>Favorite Color</span>
        </Table.Head>

        <Table.Body>
          <Table.Row active={true}>
            <span>1</span>
            <span>Cy Ganderton</span>
            <span>Quality Control Specialist</span>
            <span>Blue</span>
          </Table.Row>

          <Table.Row>
            <span>2</span>
            <span>Hart Hagerty</span>
            <span>Desktop Support Technician</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>3</span>
            <span>Brice Swyre</span>
            <span>Tax Accountant</span>
            <span>Red</span>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>;
}`,...(D=(F=R.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var L,V,G;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return <div className="overflow-x-auto">
      <Table {...args}>
        <Table.Head>
          <span />
          <span>Name</span>
          <span>Job</span>
          <span>Favorite Color</span>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <span>1</span>
            <span>Cy Ganderton</span>
            <span>Quality Control Specialist</span>
            <span>Blue</span>
          </Table.Row>

          <Table.Row hover={true}>
            <span>2</span>
            <span>Hart Hagerty</span>
            <span>Desktop Support Technician</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>3</span>
            <span>Brice Swyre</span>
            <span>Tax Accountant</span>
            <span>Red</span>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>;
}`,...(G=(V=v.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var q,M,W;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <div className="overflow-x-auto">
      <Table {...args}>
        <Table.Head>
          <span />
          <span>Name</span>
          <span>Job</span>
          <span>Favorite Color</span>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <span>1</span>
            <span>Cy Ganderton</span>
            <span>Quality Control Specialist</span>
            <span>Blue</span>
          </Table.Row>

          <Table.Row>
            <span>2</span>
            <span>Hart Hagerty</span>
            <span>Desktop Support Technician</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>3</span>
            <span>Brice Swyre</span>
            <span>Tax Accountant</span>
            <span>Red</span>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>;
}`,...(W=(M=h.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var O,J,K;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  return <div className="overflow-x-auto">
      <Table {...args} className="rounded-box">
        <Table.Head>
          <Checkbox />
          <span>Name</span>
          <span>Job</span>
          <span>Favorite Color</span>
          <span />
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask variant="squircle" src="https://img.daisyui.com/images/profile/demo/2@94.webp" />
              <div>
                <div className="font-bold">Hart Hagerty</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
            <div>
              Zemlak, Daniel and Leannon
              <br />
              <Badge color="ghost" size="sm">
                Desktop Support Technician
              </Badge>
            </div>
            <div>Purple</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask variant="squircle" src="https://img.daisyui.com/images/profile/demo/3@94.webp" />
              <div>
                <div className="font-bold">Brice Swyre</div>
                <div className="text-sm opacity-50">China</div>
              </div>
            </div>
            <div>
              Carrol Group
              <br />
              <Badge color="ghost" size="sm">
                Tax Accountant
              </Badge>
            </div>
            <div>Red</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask variant="squircle" src="https://img.daisyui.com/images/profile/demo/4@94.webp" />
              <div>
                <div className="font-bold">Marjy Ferencz</div>
                <div className="text-sm opacity-50">Russia</div>
              </div>
            </div>
            <div>
              Rowe-Schoen
              <br />
              <Badge color="ghost" size="sm">
                Office Assistant I
              </Badge>
            </div>
            <div>Crimson</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask variant="squircle" src="https://img.daisyui.com/images/profile/demo/5@94.webp" />
              <div>
                <div className="font-bold">Yancy Tear</div>
                <div className="text-sm opacity-50">Brazil</div>
              </div>
            </div>
            <div>
              Wyman-Ledner
              <br />
              <Badge color="ghost" size="sm">
                Community Outreach Specialist
              </Badge>
            </div>
            <div>Indigo</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <span>&nbsp;</span>
          <span>Name</span>
          <span>Job</span>
          <span>Favorite Color</span>
          <span>&nbsp;</span>
        </Table.Footer>
      </Table>
    </div>;
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,E,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  return <div className="overflow-x-auto">
      <Table {...args}>
        <Table.Head>
          <span />
          <span>Name</span>
          <span>Job</span>
          <span>Company</span>
          <span>Location</span>
          <span>Last Login</span>
          <span>Favorite Color</span>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <span>1</span>
            <span>Cy Ganderton</span>
            <span>Quality Control Specialist</span>
            <span>Littel, Schaden and Vandervort</span>
            <span>Canada</span>
            <span>12/16/2020</span>
            <span>Blue</span>
          </Table.Row>

          <Table.Row>
            <span>2</span>
            <span>Hart Hagerty</span>
            <span>Desktop Support Technician</span>
            <span>Zemlak, Daniel and Leannon</span>
            <span>United States</span>
            <span>12/5/2020</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>3</span>
            <span>Brice Swyre</span>
            <span>Tax Accountant</span>
            <span>Carroll Group</span>
            <span>China</span>
            <span>8/15/2020</span>
            <span>Red</span>
          </Table.Row>

          <Table.Row>
            <span>4</span>
            <span>Marjy Ferencz</span>
            <span>Office Assistant I</span>
            <span>Rowe-Schoen</span>
            <span>Russia</span>
            <span>3/25/2021</span>
            <span>Crimson</span>
          </Table.Row>

          <Table.Row>
            <span>5</span>
            <span>Yancy Tear</span>
            <span>Community Outreach Specialist</span>
            <span>Wyman-Ledner</span>
            <span>Brazil</span>
            <span>5/22/2020</span>
            <span>Indigo</span>
          </Table.Row>

          <Table.Row>
            <span>6</span>
            <span>Irma Vasilik</span>
            <span>Editor</span>
            <span>Wiza, Bins and Emard</span>
            <span>Venezuela</span>
            <span>12/8/2020</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>7</span>
            <span>Meghann Durtnal</span>
            <span>Staff Accountant IV</span>
            <span>Schuster-Schimmel</span>
            <span>Philippines</span>
            <span>2/17/2021</span>
            <span>Yellow</span>
          </Table.Row>

          <Table.Row>
            <span>8</span>
            <span>Sammy Seston</span>
            <span>Accountant I</span>
            <span>O'Hara, Welch and Keebler</span>
            <span>Indonesia</span>
            <span>5/23/2020</span>
            <span>Crimson</span>
          </Table.Row>

          <Table.Row>
            <span>9</span>
            <span>Lesya Tinham</span>
            <span>Safety Technician IV</span>
            <span>Turner-Kuhlman</span>
            <span>Philippines</span>
            <span>2/21/2021</span>
            <span>Maroon</span>
          </Table.Row>

          <Table.Row>
            <span>10</span>
            <span>Zaneta Tewkesbury</span>
            <span>VP Marketing</span>
            <span>Sauer LLC</span>
            <span>Chad</span>
            <span>6/23/2020</span>
            <span>Green</span>
          </Table.Row>

          <Table.Row>
            <span>11</span>
            <span>Andy Tipple</span>
            <span>Librarian</span>
            <span>Hilpert Group</span>
            <span>Poland</span>
            <span>7/9/2020</span>
            <span>Indigo</span>
          </Table.Row>

          <Table.Row>
            <span>12</span>
            <span>Sophi Biles</span>
            <span>Recruiting Manager</span>
            <span>Gutmann Inc</span>
            <span>Indonesia</span>
            <span>2/12/2021</span>
            <span>Maroon</span>
          </Table.Row>

          <Table.Row>
            <span>13</span>
            <span>Florida Garces</span>
            <span>Web Developer IV</span>
            <span>Gaylord, Pacocha and Baumbach</span>
            <span>Poland</span>
            <span>5/31/2020</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>14</span>
            <span>Maribespan Popping</span>
            <span>Analyst Programmer</span>
            <span>Deckow-Pouros</span>
            <span>Portugal</span>
            <span>4/27/2021</span>
            <span>Aquamarine</span>
          </Table.Row>

          <Table.Row>
            <span>15</span>
            <span>Moritz Dryburgh</span>
            <span>Dental Hygienist</span>
            <span>Schiller, Cole and Hackett</span>
            <span>Sri Lanka</span>
            <span>8/8/2020</span>
            <span>Crimson</span>
          </Table.Row>

          <Table.Row>
            <span>16</span>
            <span>Reid Semiras</span>
            <span>Teacher</span>
            <span>Sporer, Sipes and Rogahn</span>
            <span>Poland</span>
            <span>7/30/2020</span>
            <span>Green</span>
          </Table.Row>

          <Table.Row>
            <span>17</span>
            <span>Alec Lethby</span>
            <span>Teacher</span>
            <span>Reichel, Glover and Hamill</span>
            <span>China</span>
            <span>2/28/2021</span>
            <span>Khaki</span>
          </Table.Row>

          <Table.Row>
            <span>18</span>
            <span>Aland Wilber</span>
            <span>Quality Control Specialist</span>
            <span>Kshlerin, Rogahn and Swaniawski</span>
            <span>Czech Republic</span>
            <span>9/29/2020</span>
            <span>Purple</span>
          </Table.Row>

          <Table.Row>
            <span>19</span>
            <span>Teddie Duerden</span>
            <span>Staff Accountant III</span>
            <span>Pouros, Ullrich and Windler</span>
            <span>France</span>
            <span>10/27/2020</span>
            <span>Aquamarine</span>
          </Table.Row>

          <Table.Row>
            <span>20</span>
            <span>Lorelei Blackstone</span>
            <span>Data Coordiator</span>
            <span>Witting, Kutch and Greenfelder</span>
            <span>Kazakhstan</span>
            <span>6/3/2020</span>
            <span>Red</span>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <span />
          <span>Name</span>
          <span>Job</span>
          <span>company</span>
          <span>location</span>
          <span>Last Login</span>
          <span>Favorite Color</span>
        </Table.Footer>
      </Table>
    </div>;
}`,...(Z=(E=j.parameters)==null?void 0:E.docs)==null?void 0:Z.source}}};var U,Y,X;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`({
  noCell,
  ...args
}) => {
  const renderRows = new Array(10).fill('').map(() => <Table.Row noCell={noCell}>{renderRow(!noCell)}</Table.Row>);
  return <div className="overflow-x-auto max-w-lg max-h-80">
      <Table {...args}>
        <Table.Head noCell={noCell}>{renderHeaders(!noCell)}</Table.Head>
        <Table.Body>{renderRows}</Table.Body>
        <Table.Footer noCell={noCell}>{renderFooter(!noCell)}</Table.Footer>
      </Table>
    </div>;
}`,...(X=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};const mn=["Default","ActiveRow","HighlightsOnHover","Zebra","WithVisualElements","Xs","PinnedRowsOrColsNoCell"];export{R as ActiveRow,t as Default,v as HighlightsOnHover,u as PinnedRowsOrColsNoCell,x as WithVisualElements,j as Xs,h as Zebra,mn as __namedExportsOrder,un as default};
