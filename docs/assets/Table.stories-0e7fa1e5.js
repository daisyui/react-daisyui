import{j as n,t as nn,a}from"./tw-merge-4486aaf0.js";import{R as w}from"./index-f46741a2.js";import{c as an}from"./clsx.m-1229b3e0.js";import{B as R}from"./index-45f7c5a2.js";import{B as v}from"./Button-ea8a5606.js";import{C as t}from"./index-422bcf6b.js";import{M as g}from"./index-daf191af.js";import"./index-796e73d3.js";const B=w.forwardRef(({children:s,noCell:r=!1,...l},o)=>{const d=r?s:s==null?void 0:s.map((i,p)=>p<1?n("th",{children:i},p):n("td",{children:i},p));return n("thead",{...l,ref:o,children:n("tr",{children:d})})}),sn=B;try{B.displayName="TableHead",B.__docgenInfo={description:"",displayName:"TableHead",props:{noCell:{defaultValue:{value:"false"},description:"",name:"noCell",required:!1,type:{name:"boolean"}}}}}catch{}const N=w.forwardRef(({children:s,...r},l)=>n("tbody",{...r,ref:l,children:s})),rn=N;try{N.displayName="TableBody",N.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}const H=w.forwardRef(({children:s,active:r,noCell:l=!1,className:o,...d},i)=>{const p=nn(o,an({active:r})),S=l?s:s==null?void 0:s.map((y,c)=>c<1?n("th",{children:y},c):n("td",{children:y},c));return n("tr",{...d,className:p,ref:i,children:S})}),ln=H;try{H.displayName="TableRow",H.__docgenInfo={description:"",displayName:"TableRow",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},noCell:{defaultValue:{value:"false"},description:"",name:"noCell",required:!1,type:{name:"boolean"}}}}}catch{}const _=w.forwardRef(({children:s,noCell:r=!1,...l},o)=>{const d=r?s:s==null?void 0:s.map((i,p)=>p<1?n("th",{children:i},p):n("td",{children:i},p));return n("tfoot",{...l,ref:o,children:n("tr",{children:d})})}),pn=_;try{_.displayName="TableFooter",_.__docgenInfo={description:"",displayName:"TableFooter",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},noCell:{defaultValue:{value:"false"},description:"",name:"noCell",required:!1,type:{name:"boolean"}}}}}catch{}const k=w.forwardRef(({children:s,size:r,zebra:l,pinRows:o,pinCols:d,dataTheme:i,className:p,...S},y)=>{const c=nn("table",p,an({"table-zebra":l,"table-xl":r==="xl","table-lg":r==="lg","table-md":r==="md","table-sm":r==="sm","table-xs":r==="xs","table-pin-rows":o,"table-pin-cols":d}));return n("table",{...S,"data-theme":i,className:c,ref:y,children:s})}),e=Object.assign(k,{Head:sn,Body:rn,Row:ln,Footer:pn});try{k.displayName="Table",k.__docgenInfo={description:"",displayName:"Table",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},zebra:{defaultValue:null,description:"",name:"zebra",required:!1,type:{name:"boolean"}},pinRows:{defaultValue:null,description:"",name:"pinRows",required:!1,type:{name:"boolean"}},pinCols:{defaultValue:null,description:"",name:"pinCols",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Table",e.__docgenInfo={description:"",displayName:"Table",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xl"'},{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},zebra:{defaultValue:null,description:"",name:"zebra",required:!1,type:{name:"boolean"}},pinRows:{defaultValue:null,description:"",name:"pinRows",required:!1,type:{name:"boolean"}},pinCols:{defaultValue:null,description:"",name:"pinCols",required:!1,type:{name:"boolean"}}}}}catch{}const Rn={title:"Data Display/Table",component:e},en=s=>n("div",{className:"overflow-x-auto",children:a(e,{...s,children:[a(e.Head,{children:[n("span",{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Favorite Color"})]}),a(e.Body,{children:[a(e.Row,{children:[n("span",{children:"1"}),n("span",{children:"Cy Ganderton"}),n("span",{children:"Quality Control Specialist"}),n("span",{children:"Blue"})]}),a(e.Row,{children:[n("span",{children:"2"}),n("span",{children:"Hart Hagerty"}),n("span",{children:"Desktop Support Technician"}),n("span",{children:"Purple"})]}),a(e.Row,{children:[n("span",{children:"3"}),n("span",{children:"Brice Swyre"}),n("span",{children:"Tax Accountant"}),n("span",{children:"Red"})]})]})]})}),h=en.bind({});h.args={};const f=s=>n("div",{className:"overflow-x-auto",children:a(e,{...s,children:[a(e.Head,{children:[n("span",{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Favorite Color"})]}),a(e.Body,{children:[a(e.Row,{active:!0,children:[n("span",{children:"1"}),n("span",{children:"Cy Ganderton"}),n("span",{children:"Quality Control Specialist"}),n("span",{children:"Blue"})]}),a(e.Row,{children:[n("span",{children:"2"}),n("span",{children:"Hart Hagerty"}),n("span",{children:"Desktop Support Technician"}),n("span",{children:"Purple"})]}),a(e.Row,{children:[n("span",{children:"3"}),n("span",{children:"Brice Swyre"}),n("span",{children:"Tax Accountant"}),n("span",{children:"Red"})]})]})]})}),C=s=>n("div",{className:"overflow-x-auto",children:a(e,{...s,children:[a(e.Head,{children:[n("span",{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Favorite Color"})]}),a(e.Body,{children:[a(e.Row,{children:[n("span",{children:"1"}),n("span",{children:"Cy Ganderton"}),n("span",{children:"Quality Control Specialist"}),n("span",{children:"Blue"})]}),a(e.Row,{hover:!0,children:[n("span",{children:"2"}),n("span",{children:"Hart Hagerty"}),n("span",{children:"Desktop Support Technician"}),n("span",{children:"Purple"})]}),a(e.Row,{children:[n("span",{children:"3"}),n("span",{children:"Brice Swyre"}),n("span",{children:"Tax Accountant"}),n("span",{children:"Red"})]})]})]})}),u=en.bind({});u.args={zebra:!0};const m=s=>n("div",{className:"overflow-x-auto",children:a(e,{...s,className:"rounded-box",children:[a(e.Head,{children:[n(t,{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Favorite Color"}),n("span",{})]}),a(e.Body,{children:[a(e.Row,{children:[n(t,{}),a("div",{className:"flex items-center space-x-3 truncate",children:[n(g,{variant:"squircle",src:"https://img.daisyui.com/images/profile/demo/2@94.webp"}),a("div",{children:[n("div",{className:"font-bold",children:"Hart Hagerty"}),n("div",{className:"text-sm opacity-50",children:"United States"})]})]}),a("div",{children:["Zemlak, Daniel and Leannon",n("br",{}),n(R,{color:"ghost",size:"sm",children:"Desktop Support Technician"})]}),n("div",{children:"Purple"}),n(v,{color:"ghost",size:"xs",children:"details"})]}),a(e.Row,{children:[n(t,{}),a("div",{className:"flex items-center space-x-3 truncate",children:[n(g,{variant:"squircle",src:"https://img.daisyui.com/images/profile/demo/3@94.webp"}),a("div",{children:[n("div",{className:"font-bold",children:"Brice Swyre"}),n("div",{className:"text-sm opacity-50",children:"China"})]})]}),a("div",{children:["Carrol Group",n("br",{}),n(R,{color:"ghost",size:"sm",children:"Tax Accountant"})]}),n("div",{children:"Red"}),n(v,{color:"ghost",size:"xs",children:"details"})]}),a(e.Row,{children:[n(t,{}),a("div",{className:"flex items-center space-x-3 truncate",children:[n(g,{variant:"squircle",src:"https://img.daisyui.com/images/profile/demo/4@94.webp"}),a("div",{children:[n("div",{className:"font-bold",children:"Marjy Ferencz"}),n("div",{className:"text-sm opacity-50",children:"Russia"})]})]}),a("div",{children:["Rowe-Schoen",n("br",{}),n(R,{color:"ghost",size:"sm",children:"Office Assistant I"})]}),n("div",{children:"Crimson"}),n(v,{color:"ghost",size:"xs",children:"details"})]}),a(e.Row,{children:[n(t,{}),a("div",{className:"flex items-center space-x-3 truncate",children:[n(g,{variant:"squircle",src:"https://img.daisyui.com/images/profile/demo/5@94.webp"}),a("div",{children:[n("div",{className:"font-bold",children:"Yancy Tear"}),n("div",{className:"text-sm opacity-50",children:"Brazil"})]})]}),a("div",{children:["Wyman-Ledner",n("br",{}),n(R,{color:"ghost",size:"sm",children:"Community Outreach Specialist"})]}),n("div",{children:"Indigo"}),n(v,{color:"ghost",size:"xs",children:"details"})]})]}),a(e.Footer,{children:[n("span",{children:" "}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Favorite Color"}),n("span",{children:" "})]})]})});m.args={};const b=s=>n("div",{className:"overflow-x-auto",children:a(e,{...s,children:[a(e.Head,{children:[n("span",{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Company"}),n("span",{children:"Location"}),n("span",{children:"Last Login"}),n("span",{children:"Favorite Color"})]}),a(e.Body,{children:[a(e.Row,{children:[n("span",{children:"1"}),n("span",{children:"Cy Ganderton"}),n("span",{children:"Quality Control Specialist"}),n("span",{children:"Littel, Schaden and Vandervort"}),n("span",{children:"Canada"}),n("span",{children:"12/16/2020"}),n("span",{children:"Blue"})]}),a(e.Row,{children:[n("span",{children:"2"}),n("span",{children:"Hart Hagerty"}),n("span",{children:"Desktop Support Technician"}),n("span",{children:"Zemlak, Daniel and Leannon"}),n("span",{children:"United States"}),n("span",{children:"12/5/2020"}),n("span",{children:"Purple"})]}),a(e.Row,{children:[n("span",{children:"3"}),n("span",{children:"Brice Swyre"}),n("span",{children:"Tax Accountant"}),n("span",{children:"Carroll Group"}),n("span",{children:"China"}),n("span",{children:"8/15/2020"}),n("span",{children:"Red"})]}),a(e.Row,{children:[n("span",{children:"4"}),n("span",{children:"Marjy Ferencz"}),n("span",{children:"Office Assistant I"}),n("span",{children:"Rowe-Schoen"}),n("span",{children:"Russia"}),n("span",{children:"3/25/2021"}),n("span",{children:"Crimson"})]}),a(e.Row,{children:[n("span",{children:"5"}),n("span",{children:"Yancy Tear"}),n("span",{children:"Community Outreach Specialist"}),n("span",{children:"Wyman-Ledner"}),n("span",{children:"Brazil"}),n("span",{children:"5/22/2020"}),n("span",{children:"Indigo"})]}),a(e.Row,{children:[n("span",{children:"6"}),n("span",{children:"Irma Vasilik"}),n("span",{children:"Editor"}),n("span",{children:"Wiza, Bins and Emard"}),n("span",{children:"Venezuela"}),n("span",{children:"12/8/2020"}),n("span",{children:"Purple"})]}),a(e.Row,{children:[n("span",{children:"7"}),n("span",{children:"Meghann Durtnal"}),n("span",{children:"Staff Accountant IV"}),n("span",{children:"Schuster-Schimmel"}),n("span",{children:"Philippines"}),n("span",{children:"2/17/2021"}),n("span",{children:"Yellow"})]}),a(e.Row,{children:[n("span",{children:"8"}),n("span",{children:"Sammy Seston"}),n("span",{children:"Accountant I"}),n("span",{children:"O'Hara, Welch and Keebler"}),n("span",{children:"Indonesia"}),n("span",{children:"5/23/2020"}),n("span",{children:"Crimson"})]}),a(e.Row,{children:[n("span",{children:"9"}),n("span",{children:"Lesya Tinham"}),n("span",{children:"Safety Technician IV"}),n("span",{children:"Turner-Kuhlman"}),n("span",{children:"Philippines"}),n("span",{children:"2/21/2021"}),n("span",{children:"Maroon"})]}),a(e.Row,{children:[n("span",{children:"10"}),n("span",{children:"Zaneta Tewkesbury"}),n("span",{children:"VP Marketing"}),n("span",{children:"Sauer LLC"}),n("span",{children:"Chad"}),n("span",{children:"6/23/2020"}),n("span",{children:"Green"})]}),a(e.Row,{children:[n("span",{children:"11"}),n("span",{children:"Andy Tipple"}),n("span",{children:"Librarian"}),n("span",{children:"Hilpert Group"}),n("span",{children:"Poland"}),n("span",{children:"7/9/2020"}),n("span",{children:"Indigo"})]}),a(e.Row,{children:[n("span",{children:"12"}),n("span",{children:"Sophi Biles"}),n("span",{children:"Recruiting Manager"}),n("span",{children:"Gutmann Inc"}),n("span",{children:"Indonesia"}),n("span",{children:"2/12/2021"}),n("span",{children:"Maroon"})]}),a(e.Row,{children:[n("span",{children:"13"}),n("span",{children:"Florida Garces"}),n("span",{children:"Web Developer IV"}),n("span",{children:"Gaylord, Pacocha and Baumbach"}),n("span",{children:"Poland"}),n("span",{children:"5/31/2020"}),n("span",{children:"Purple"})]}),a(e.Row,{children:[n("span",{children:"14"}),n("span",{children:"Maribespan Popping"}),n("span",{children:"Analyst Programmer"}),n("span",{children:"Deckow-Pouros"}),n("span",{children:"Portugal"}),n("span",{children:"4/27/2021"}),n("span",{children:"Aquamarine"})]}),a(e.Row,{children:[n("span",{children:"15"}),n("span",{children:"Moritz Dryburgh"}),n("span",{children:"Dental Hygienist"}),n("span",{children:"Schiller, Cole and Hackett"}),n("span",{children:"Sri Lanka"}),n("span",{children:"8/8/2020"}),n("span",{children:"Crimson"})]}),a(e.Row,{children:[n("span",{children:"16"}),n("span",{children:"Reid Semiras"}),n("span",{children:"Teacher"}),n("span",{children:"Sporer, Sipes and Rogahn"}),n("span",{children:"Poland"}),n("span",{children:"7/30/2020"}),n("span",{children:"Green"})]}),a(e.Row,{children:[n("span",{children:"17"}),n("span",{children:"Alec Lethby"}),n("span",{children:"Teacher"}),n("span",{children:"Reichel, Glover and Hamill"}),n("span",{children:"China"}),n("span",{children:"2/28/2021"}),n("span",{children:"Khaki"})]}),a(e.Row,{children:[n("span",{children:"18"}),n("span",{children:"Aland Wilber"}),n("span",{children:"Quality Control Specialist"}),n("span",{children:"Kshlerin, Rogahn and Swaniawski"}),n("span",{children:"Czech Republic"}),n("span",{children:"9/29/2020"}),n("span",{children:"Purple"})]}),a(e.Row,{children:[n("span",{children:"19"}),n("span",{children:"Teddie Duerden"}),n("span",{children:"Staff Accountant III"}),n("span",{children:"Pouros, Ullrich and Windler"}),n("span",{children:"France"}),n("span",{children:"10/27/2020"}),n("span",{children:"Aquamarine"})]}),a(e.Row,{children:[n("span",{children:"20"}),n("span",{children:"Lorelei Blackstone"}),n("span",{children:"Data Coordiator"}),n("span",{children:"Witting, Kutch and Greenfelder"}),n("span",{children:"Kazakhstan"}),n("span",{children:"6/3/2020"}),n("span",{children:"Red"})]})]}),a(e.Footer,{children:[n("span",{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"company"}),n("span",{children:"location"}),n("span",{children:"Last Login"}),n("span",{children:"Favorite Color"})]})]})});b.args={size:"xs"};const x=50,P={headers:new Array(x).fill("header").map((s,r)=>s+r),row:new Array(x).fill("data").map((s,r)=>s+r),footers:new Array(x).fill("footer").map((s,r)=>s+r)},z=(s,r,l=!0)=>l?n("div",{children:s}):r%5===0?n("th",{children:s}):n("td",{children:s}),on=s=>P.headers.map((r,l)=>z(r,l,s)),dn=s=>P.row.map((r,l)=>z(r,l,s)),cn=s=>P.footers.map((r,l)=>z(r,l,s)),T=({noCell:s,...r})=>{const l=new Array(10).fill("").map(()=>n(e.Row,{noCell:s,children:dn(!s)}));return n("div",{className:"overflow-x-auto max-w-lg max-h-80",children:a(e,{...r,children:[n(e.Head,{noCell:s,children:on(!s)}),n(e.Body,{children:l}),n(e.Footer,{noCell:s,children:cn(!s)})]})})};T.args={noCell:!0,pinRows:!0,pinCols:!0,zebra:!0};var A,F,I;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
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
}`,...(I=(F=h.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var D,L,V;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(V=(L=f.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var G,q,M;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
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
}`,...(M=(q=C.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var W,O,J;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
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
}`,...(J=(O=u.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var K,Q,j;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
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
}`,...(j=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:j.source}}};var Z,E,U;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
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
}`,...(U=(E=b.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var Y,$,X;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`({
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
}`,...(X=($=T.parameters)==null?void 0:$.docs)==null?void 0:X.source}}};const vn=["Default","ActiveRow","HighlightsOnHover","Zebra","WithVisualElements","Xs","PinnedRowsOrColsNoCell"];export{f as ActiveRow,h as Default,C as HighlightsOnHover,T as PinnedRowsOrColsNoCell,m as WithVisualElements,b as Xs,u as Zebra,vn as __namedExportsOrder,Rn as default};
