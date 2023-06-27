import{j as n,t as nn,a as e}from"./tw-merge-e2243cb0.js";import{R as y}from"./index-ebeaab24.js";import{c as en}from"./clsx.m-1229b3e0.js";import{C as c}from"./index-4ebe4886.js";import{M as w}from"./index-43883f38.js";import{B as R}from"./index-a68f1c8f.js";import{B as v}from"./Button-3d301c6a.js";import"./index-3106c12b.js";const B=y.forwardRef(({children:t,...r},d)=>n("thead",{...r,ref:d,children:n("tr",{children:t==null?void 0:t.map((i,l)=>n("th",{children:i},l))})})),rn=B;try{B.displayName="TableHead",B.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}const x=y.forwardRef(({children:t,...r},d)=>n("tbody",{...r,ref:d,children:t})),dn=x;try{x.displayName="TableBody",x.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}const k=y.forwardRef(({children:t,active:r,hover:d,className:i,...l},f)=>{const C=nn(i,en({active:r,hover:d}));return n("tr",{...l,className:C,ref:f,children:t==null?void 0:t.map((T,s)=>s<1?n("th",{children:T},s):n("td",{children:T},s))})}),ln=k;try{k.displayName="TableRow",k.__docgenInfo={description:"",displayName:"TableRow",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}}}}}catch{}const P=y.forwardRef(({children:t,...r},d)=>n("tfoot",{...r,ref:d,children:n("tr",{children:t==null?void 0:t.map((i,l)=>n("th",{children:i},l))})})),sn=P;try{P.displayName="TableFooter",P.__docgenInfo={description:"",displayName:"TableFooter",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}}}}}catch{}const H=y.forwardRef(({children:t,size:r,zebra:d,pinRows:i,pinCols:l,dataTheme:f,className:C,...T},s)=>{const tn=nn("table",C,en({"table-zebra":d,"table-lg":r==="lg","table-md":r==="md","table-sm":r==="sm","table-xs":r==="xs","table-pin-rows":i,"table-pin-cols":l}));return n("table",{...T,"data-theme":f,className:tn,ref:s,children:t})}),a=Object.assign(H,{Head:rn,Body:dn,Row:ln,Footer:sn});try{H.displayName="Table",H.__docgenInfo={description:"",displayName:"Table",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},zebra:{defaultValue:null,description:"",name:"zebra",required:!1,type:{name:"boolean"}},pinRows:{defaultValue:null,description:"",name:"pinRows",required:!1,type:{name:"boolean"}},pinCols:{defaultValue:null,description:"",name:"pinCols",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="Table",a.__docgenInfo={description:"",displayName:"Table",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},zebra:{defaultValue:null,description:"",name:"zebra",required:!1,type:{name:"boolean"}},pinRows:{defaultValue:null,description:"",name:"pinRows",required:!1,type:{name:"boolean"}},pinCols:{defaultValue:null,description:"",name:"pinCols",required:!1,type:{name:"boolean"}}}}}catch{}const Tn={title:"Data Display/Table",component:a},an=t=>n("div",{className:"overflow-x-auto",children:e(a,{...t,children:[e(a.Head,{children:[n("span",{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Favorite Color"})]}),e(a.Body,{children:[e(a.Row,{children:[n("span",{children:"1"}),n("span",{children:"Cy Ganderton"}),n("span",{children:"Quality Control Specialist"}),n("span",{children:"Blue"})]}),e(a.Row,{children:[n("span",{children:"2"}),n("span",{children:"Hart Hagerty"}),n("span",{children:"Desktop Support Technician"}),n("span",{children:"Purple"})]}),e(a.Row,{children:[n("span",{children:"3"}),n("span",{children:"Brice Swyre"}),n("span",{children:"Tax Accountant"}),n("span",{children:"Red"})]})]})]})}),h=an.bind({});h.args={};const g=t=>n("div",{className:"overflow-x-auto",children:e(a,{...t,children:[e(a.Head,{children:[n("span",{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Favorite Color"})]}),e(a.Body,{children:[e(a.Row,{active:!0,children:[n("span",{children:"1"}),n("span",{children:"Cy Ganderton"}),n("span",{children:"Quality Control Specialist"}),n("span",{children:"Blue"})]}),e(a.Row,{children:[n("span",{children:"2"}),n("span",{children:"Hart Hagerty"}),n("span",{children:"Desktop Support Technician"}),n("span",{children:"Purple"})]}),e(a.Row,{children:[n("span",{children:"3"}),n("span",{children:"Brice Swyre"}),n("span",{children:"Tax Accountant"}),n("span",{children:"Red"})]})]})]})}),S=t=>n("div",{className:"overflow-x-auto",children:e(a,{...t,children:[e(a.Head,{children:[n("span",{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Favorite Color"})]}),e(a.Body,{children:[e(a.Row,{children:[n("span",{children:"1"}),n("span",{children:"Cy Ganderton"}),n("span",{children:"Quality Control Specialist"}),n("span",{children:"Blue"})]}),e(a.Row,{hover:!0,children:[n("span",{children:"2"}),n("span",{children:"Hart Hagerty"}),n("span",{children:"Desktop Support Technician"}),n("span",{children:"Purple"})]}),e(a.Row,{children:[n("span",{children:"3"}),n("span",{children:"Brice Swyre"}),n("span",{children:"Tax Accountant"}),n("span",{children:"Red"})]})]})]})}),o=an.bind({});o.args={zebra:!0};const p=t=>n("div",{className:"overflow-x-auto",children:e(a,{...t,className:"rounded-box",children:[e(a.Head,{children:[n(c,{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Favorite Color"}),n("span",{})]}),e(a.Body,{children:[e(a.Row,{children:[n(c,{}),e("div",{className:"flex items-center space-x-3 truncate",children:[n(w,{variant:"squircle",src:"http://daisyui.com/tailwind-css-component-profile-2@56w.png"}),e("div",{children:[n("div",{className:"font-bold",children:"Hart Hagerty"}),n("div",{className:"text-sm opacity-50",children:"United States"})]})]}),e("div",{children:["Zemlak, Daniel and Leannon",n("br",{}),n(R,{color:"ghost",size:"sm",children:"Desktop Support Technician"})]}),n("div",{children:"Purple"}),n(v,{color:"ghost",size:"xs",children:"details"})]}),e(a.Row,{children:[n(c,{}),e("div",{className:"flex items-center space-x-3 truncate",children:[n(w,{variant:"squircle",src:"http://daisyui.com/tailwind-css-component-profile-3@56w.png"}),e("div",{children:[n("div",{className:"font-bold",children:"Brice Swyre"}),n("div",{className:"text-sm opacity-50",children:"China"})]})]}),e("div",{children:["Carrol Group",n("br",{}),n(R,{color:"ghost",size:"sm",children:"Tax Accountant"})]}),n("div",{children:"Red"}),n(v,{color:"ghost",size:"xs",children:"details"})]}),e(a.Row,{children:[n(c,{}),e("div",{className:"flex items-center space-x-3 truncate",children:[n(w,{variant:"squircle",src:"http://daisyui.com/tailwind-css-component-profile-4@56w.png"}),e("div",{children:[n("div",{className:"font-bold",children:"Marjy Ferencz"}),n("div",{className:"text-sm opacity-50",children:"Russia"})]})]}),e("div",{children:["Rowe-Schoen",n("br",{}),n(R,{color:"ghost",size:"sm",children:"Office Assistant I"})]}),n("div",{children:"Crimson"}),n(v,{color:"ghost",size:"xs",children:"details"})]}),e(a.Row,{children:[n(c,{}),e("div",{className:"flex items-center space-x-3 truncate",children:[n(w,{variant:"squircle",src:"http://daisyui.com/tailwind-css-component-profile-5@56w.png"}),e("div",{children:[n("div",{className:"font-bold",children:"Yancy Tear"}),n("div",{className:"text-sm opacity-50",children:"Brazil"})]})]}),e("div",{children:["Wyman-Ledner",n("br",{}),n(R,{color:"ghost",size:"sm",children:"Community Outreach Specialist"})]}),n("div",{children:"Indigo"}),n(v,{color:"ghost",size:"xs",children:"details"})]})]}),e(a.Footer,{children:[n("span",{children:" "}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Favorite Color"}),n("span",{children:" "})]})]})});p.args={};const u=t=>n("div",{className:"overflow-x-auto",children:e(a,{...t,children:[e(a.Head,{children:[n("span",{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"Company"}),n("span",{children:"Location"}),n("span",{children:"Last Login"}),n("span",{children:"Favorite Color"})]}),e(a.Body,{children:[e(a.Row,{children:[n("span",{children:"1"}),n("span",{children:"Cy Ganderton"}),n("span",{children:"Quality Control Specialist"}),n("span",{children:"Littel, Schaden and Vandervort"}),n("span",{children:"Canada"}),n("span",{children:"12/16/2020"}),n("span",{children:"Blue"})]}),e(a.Row,{children:[n("span",{children:"2"}),n("span",{children:"Hart Hagerty"}),n("span",{children:"Desktop Support Technician"}),n("span",{children:"Zemlak, Daniel and Leannon"}),n("span",{children:"United States"}),n("span",{children:"12/5/2020"}),n("span",{children:"Purple"})]}),e(a.Row,{children:[n("span",{children:"3"}),n("span",{children:"Brice Swyre"}),n("span",{children:"Tax Accountant"}),n("span",{children:"Carroll Group"}),n("span",{children:"China"}),n("span",{children:"8/15/2020"}),n("span",{children:"Red"})]}),e(a.Row,{children:[n("span",{children:"4"}),n("span",{children:"Marjy Ferencz"}),n("span",{children:"Office Assistant I"}),n("span",{children:"Rowe-Schoen"}),n("span",{children:"Russia"}),n("span",{children:"3/25/2021"}),n("span",{children:"Crimson"})]}),e(a.Row,{children:[n("span",{children:"5"}),n("span",{children:"Yancy Tear"}),n("span",{children:"Community Outreach Specialist"}),n("span",{children:"Wyman-Ledner"}),n("span",{children:"Brazil"}),n("span",{children:"5/22/2020"}),n("span",{children:"Indigo"})]}),e(a.Row,{children:[n("span",{children:"6"}),n("span",{children:"Irma Vasilik"}),n("span",{children:"Editor"}),n("span",{children:"Wiza, Bins and Emard"}),n("span",{children:"Venezuela"}),n("span",{children:"12/8/2020"}),n("span",{children:"Purple"})]}),e(a.Row,{children:[n("span",{children:"7"}),n("span",{children:"Meghann Durtnal"}),n("span",{children:"Staff Accountant IV"}),n("span",{children:"Schuster-Schimmel"}),n("span",{children:"Philippines"}),n("span",{children:"2/17/2021"}),n("span",{children:"Yellow"})]}),e(a.Row,{children:[n("span",{children:"8"}),n("span",{children:"Sammy Seston"}),n("span",{children:"Accountant I"}),n("span",{children:"O'Hara, Welch and Keebler"}),n("span",{children:"Indonesia"}),n("span",{children:"5/23/2020"}),n("span",{children:"Crimson"})]}),e(a.Row,{children:[n("span",{children:"9"}),n("span",{children:"Lesya Tinham"}),n("span",{children:"Safety Technician IV"}),n("span",{children:"Turner-Kuhlman"}),n("span",{children:"Philippines"}),n("span",{children:"2/21/2021"}),n("span",{children:"Maroon"})]}),e(a.Row,{children:[n("span",{children:"10"}),n("span",{children:"Zaneta Tewkesbury"}),n("span",{children:"VP Marketing"}),n("span",{children:"Sauer LLC"}),n("span",{children:"Chad"}),n("span",{children:"6/23/2020"}),n("span",{children:"Green"})]}),e(a.Row,{children:[n("span",{children:"11"}),n("span",{children:"Andy Tipple"}),n("span",{children:"Librarian"}),n("span",{children:"Hilpert Group"}),n("span",{children:"Poland"}),n("span",{children:"7/9/2020"}),n("span",{children:"Indigo"})]}),e(a.Row,{children:[n("span",{children:"12"}),n("span",{children:"Sophi Biles"}),n("span",{children:"Recruiting Manager"}),n("span",{children:"Gutmann Inc"}),n("span",{children:"Indonesia"}),n("span",{children:"2/12/2021"}),n("span",{children:"Maroon"})]}),e(a.Row,{children:[n("span",{children:"13"}),n("span",{children:"Florida Garces"}),n("span",{children:"Web Developer IV"}),n("span",{children:"Gaylord, Pacocha and Baumbach"}),n("span",{children:"Poland"}),n("span",{children:"5/31/2020"}),n("span",{children:"Purple"})]}),e(a.Row,{children:[n("span",{children:"14"}),n("span",{children:"Maribespan Popping"}),n("span",{children:"Analyst Programmer"}),n("span",{children:"Deckow-Pouros"}),n("span",{children:"Portugal"}),n("span",{children:"4/27/2021"}),n("span",{children:"Aquamarine"})]}),e(a.Row,{children:[n("span",{children:"15"}),n("span",{children:"Moritz Dryburgh"}),n("span",{children:"Dental Hygienist"}),n("span",{children:"Schiller, Cole and Hackett"}),n("span",{children:"Sri Lanka"}),n("span",{children:"8/8/2020"}),n("span",{children:"Crimson"})]}),e(a.Row,{children:[n("span",{children:"16"}),n("span",{children:"Reid Semiras"}),n("span",{children:"Teacher"}),n("span",{children:"Sporer, Sipes and Rogahn"}),n("span",{children:"Poland"}),n("span",{children:"7/30/2020"}),n("span",{children:"Green"})]}),e(a.Row,{children:[n("span",{children:"17"}),n("span",{children:"Alec Lethby"}),n("span",{children:"Teacher"}),n("span",{children:"Reichel, Glover and Hamill"}),n("span",{children:"China"}),n("span",{children:"2/28/2021"}),n("span",{children:"Khaki"})]}),e(a.Row,{children:[n("span",{children:"18"}),n("span",{children:"Aland Wilber"}),n("span",{children:"Quality Control Specialist"}),n("span",{children:"Kshlerin, Rogahn and Swaniawski"}),n("span",{children:"Czech Republic"}),n("span",{children:"9/29/2020"}),n("span",{children:"Purple"})]}),e(a.Row,{children:[n("span",{children:"19"}),n("span",{children:"Teddie Duerden"}),n("span",{children:"Staff Accountant III"}),n("span",{children:"Pouros, Ullrich and Windler"}),n("span",{children:"France"}),n("span",{children:"10/27/2020"}),n("span",{children:"Aquamarine"})]}),e(a.Row,{children:[n("span",{children:"20"}),n("span",{children:"Lorelei Blackstone"}),n("span",{children:"Data Coordiator"}),n("span",{children:"Witting, Kutch and Greenfelder"}),n("span",{children:"Kazakhstan"}),n("span",{children:"6/3/2020"}),n("span",{children:"Red"})]})]}),e(a.Footer,{children:[n("span",{}),n("span",{children:"Name"}),n("span",{children:"Job"}),n("span",{children:"company"}),n("span",{children:"location"}),n("span",{children:"Last Login"}),n("span",{children:"Favorite Color"})]})]})});u.args={size:"xs"};const m=t=>n("div",{className:"overflow-x-auto h-96",children:e(a,{...t,children:[n("thead",{children:n("tr",{children:n("th",{children:"A"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"Ant-Man"})}),n("tr",{children:n("td",{children:"Aquaman"})}),n("tr",{children:n("td",{children:"Asterix"})}),n("tr",{children:n("td",{children:"The Atom"})}),n("tr",{children:n("td",{children:"The Avengers"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"B"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"Batgirl"})}),n("tr",{children:n("td",{children:"Batman"})}),n("tr",{children:n("td",{children:"Batwoman"})}),n("tr",{children:n("td",{children:"Black Canary"})}),n("tr",{children:n("td",{children:"Black Panther"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"C"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"Captain America"})}),n("tr",{children:n("td",{children:"Captain Marvel"})}),n("tr",{children:n("td",{children:"Catwoman"})}),n("tr",{children:n("td",{children:"Conan the Barbarian"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"D"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"Daredevil"})}),n("tr",{children:n("td",{children:"The Defenders"})}),n("tr",{children:n("td",{children:"Doc Savage"})}),n("tr",{children:n("td",{children:"Doctor Strange"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"E"})})}),n("tbody",{children:n("tr",{children:n("td",{children:"Elektra"})})}),n("thead",{children:n("tr",{children:n("th",{children:"F"})})}),n("tbody",{children:n("tr",{children:n("td",{children:"Fantastic Four"})})}),n("thead",{children:n("tr",{children:n("th",{children:"G"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"Ghost Rider"})}),n("tr",{children:n("td",{children:"Green Arrow"})}),n("tr",{children:n("td",{children:"Green Lantern"})}),n("tr",{children:n("td",{children:"Guardians of the Galaxy"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"H"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"Hawkeye"})}),n("tr",{children:n("td",{children:"Hellboy"})}),n("tr",{children:n("td",{children:"Incredible Hulk"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"I"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"Iron Fist"})}),n("tr",{children:n("td",{children:"Iron Man"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"M"})})}),n("tbody",{children:n("tr",{children:n("td",{children:"Marvelman"})})}),n("thead",{children:n("tr",{children:n("th",{children:"R"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"Robin"})}),n("tr",{children:n("td",{children:"The Rocketeer"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"S"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"The Shadow"})}),n("tr",{children:n("td",{children:"Spider-Man"})}),n("tr",{children:n("td",{children:"Sub-Mariner"})}),n("tr",{children:n("td",{children:"Supergirl"})}),n("tr",{children:n("td",{children:"Superman"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"T"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"Teenage Mutant Ninja Turtles"})}),n("tr",{children:n("td",{children:"Thor"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"W"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"The Wasp"})}),n("tr",{children:n("td",{children:"Watchmen"})}),n("tr",{children:n("td",{children:"Wolverine"})}),n("tr",{children:n("td",{children:"Wonder Woman"})})]}),n("thead",{children:n("tr",{children:n("th",{children:"X"})})}),n("tbody",{children:n("tr",{children:n("td",{children:"X-Men"})})}),n("thead",{children:n("tr",{children:n("th",{children:"Z"})})}),e("tbody",{children:[n("tr",{children:n("td",{children:"Zatanna"})}),n("tr",{children:n("td",{children:"Zatara"})})]})]})});m.args={pinRows:!0};const b=t=>n("div",{className:"overflow-x-auto h-96 w-96",children:e(a,{...t,children:[n("thead",{children:e("tr",{children:[n("th",{}),n("td",{children:"Name"}),n("td",{children:"Job"}),n("td",{children:"company"}),n("td",{children:"location"}),n("td",{children:"Last Login"}),n("td",{children:"Favorite Color"}),n("th",{})]})}),e("tbody",{children:[e("tr",{children:[n("th",{children:"1"}),n("td",{children:"Cy Ganderton"}),n("td",{children:"Quality Control Specialist"}),n("td",{children:"Littel, Schaden and Vandervort"}),n("td",{children:"Canada"}),n("td",{children:"12/16/2020"}),n("td",{children:"Blue"}),n("th",{children:"1"})]}),e("tr",{children:[n("th",{children:"2"}),n("td",{children:"Hart Hagerty"}),n("td",{children:"Desktop Support Technician"}),n("td",{children:"Zemlak, Daniel and Leannon"}),n("td",{children:"United States"}),n("td",{children:"12/5/2020"}),n("td",{children:"Purple"}),n("th",{children:"2"})]}),e("tr",{children:[n("th",{children:"3"}),n("td",{children:"Brice Swyre"}),n("td",{children:"Tax Accountant"}),n("td",{children:"Carroll Group"}),n("td",{children:"China"}),n("td",{children:"8/15/2020"}),n("td",{children:"Red"}),n("th",{children:"3"})]}),e("tr",{children:[n("th",{children:"4"}),n("td",{children:"Marjy Ferencz"}),n("td",{children:"Office Assistant I"}),n("td",{children:"Rowe-Schoen"}),n("td",{children:"Russia"}),n("td",{children:"3/25/2021"}),n("td",{children:"Crimson"}),n("th",{children:"4"})]}),e("tr",{children:[n("th",{children:"5"}),n("td",{children:"Yancy Tear"}),n("td",{children:"Community Outreach Specialist"}),n("td",{children:"Wyman-Ledner"}),n("td",{children:"Brazil"}),n("td",{children:"5/22/2020"}),n("td",{children:"Indigo"}),n("th",{children:"5"})]}),e("tr",{children:[n("th",{children:"6"}),n("td",{children:"Irma Vasilik"}),n("td",{children:"Editor"}),n("td",{children:"Wiza, Bins and Emard"}),n("td",{children:"Venezuela"}),n("td",{children:"12/8/2020"}),n("td",{children:"Purple"}),n("th",{children:"6"})]}),e("tr",{children:[n("th",{children:"7"}),n("td",{children:"Meghann Durtnal"}),n("td",{children:"Staff Accountant IV"}),n("td",{children:"Schuster-Schimmel"}),n("td",{children:"Philippines"}),n("td",{children:"2/17/2021"}),n("td",{children:"Yellow"}),n("th",{children:"7"})]}),e("tr",{children:[n("th",{children:"8"}),n("td",{children:"Sammy Seston"}),n("td",{children:"Accountant I"}),n("td",{children:"O'Hara, Welch and Keebler"}),n("td",{children:"Indonesia"}),n("td",{children:"5/23/2020"}),n("td",{children:"Crimson"}),n("th",{children:"8"})]}),e("tr",{children:[n("th",{children:"9"}),n("td",{children:"Lesya Tinham"}),n("td",{children:"Safety Technician IV"}),n("td",{children:"Turner-Kuhlman"}),n("td",{children:"Philippines"}),n("td",{children:"2/21/2021"}),n("td",{children:"Maroon"}),n("th",{children:"9"})]}),e("tr",{children:[n("th",{children:"10"}),n("td",{children:"Zaneta Tewkesbury"}),n("td",{children:"VP Marketing"}),n("td",{children:"Sauer LLC"}),n("td",{children:"Chad"}),n("td",{children:"6/23/2020"}),n("td",{children:"Green"}),n("th",{children:"10"})]}),e("tr",{children:[n("th",{children:"11"}),n("td",{children:"Andy Tipple"}),n("td",{children:"Librarian"}),n("td",{children:"Hilpert Group"}),n("td",{children:"Poland"}),n("td",{children:"7/9/2020"}),n("td",{children:"Indigo"}),n("th",{children:"11"})]}),e("tr",{children:[n("th",{children:"12"}),n("td",{children:"Sophi Biles"}),n("td",{children:"Recruiting Manager"}),n("td",{children:"Gutmann Inc"}),n("td",{children:"Indonesia"}),n("td",{children:"2/12/2021"}),n("td",{children:"Maroon"}),n("th",{children:"12"})]}),e("tr",{children:[n("th",{children:"13"}),n("td",{children:"Florida Garces"}),n("td",{children:"Web Developer IV"}),n("td",{children:"Gaylord, Pacocha and Baumbach"}),n("td",{children:"Poland"}),n("td",{children:"5/31/2020"}),n("td",{children:"Purple"}),n("th",{children:"13"})]}),e("tr",{children:[n("th",{children:"14"}),n("td",{children:"Maribeth Popping"}),n("td",{children:"Analyst Programmer"}),n("td",{children:"Deckow-Pouros"}),n("td",{children:"Portugal"}),n("td",{children:"4/27/2021"}),n("td",{children:"Aquamarine"}),n("th",{children:"14"})]}),e("tr",{children:[n("th",{children:"15"}),n("td",{children:"Moritz Dryburgh"}),n("td",{children:"Dental Hygienist"}),n("td",{children:"Schiller, Cole and Hackett"}),n("td",{children:"Sri Lanka"}),n("td",{children:"8/8/2020"}),n("td",{children:"Crimson"}),n("th",{children:"15"})]}),e("tr",{children:[n("th",{children:"16"}),n("td",{children:"Reid Semiras"}),n("td",{children:"Teacher"}),n("td",{children:"Sporer, Sipes and Rogahn"}),n("td",{children:"Poland"}),n("td",{children:"7/30/2020"}),n("td",{children:"Green"}),n("th",{children:"16"})]}),e("tr",{children:[n("th",{children:"17"}),n("td",{children:"Alec Lethby"}),n("td",{children:"Teacher"}),n("td",{children:"Reichel, Glover and Hamill"}),n("td",{children:"China"}),n("td",{children:"2/28/2021"}),n("td",{children:"Khaki"}),n("th",{children:"17"})]}),e("tr",{children:[n("th",{children:"18"}),n("td",{children:"Aland Wilber"}),n("td",{children:"Quality Control Specialist"}),n("td",{children:"Kshlerin, Rogahn and Swaniawski"}),n("td",{children:"Czech Republic"}),n("td",{children:"9/29/2020"}),n("td",{children:"Purple"}),n("th",{children:"18"})]}),e("tr",{children:[n("th",{children:"19"}),n("td",{children:"Teddie Duerden"}),n("td",{children:"Staff Accountant III"}),n("td",{children:"Pouros, Ullrich and Windler"}),n("td",{children:"France"}),n("td",{children:"10/27/2020"}),n("td",{children:"Aquamarine"}),n("th",{children:"19"})]}),e("tr",{children:[n("th",{children:"20"}),n("td",{children:"Lorelei Blackstone"}),n("td",{children:"Data Coordinator"}),n("td",{children:"Witting, Kutch and Greenfelder"}),n("td",{children:"Kazakhstan"}),n("td",{children:"6/3/2020"}),n("td",{children:"Red"}),n("th",{children:"20"})]})]}),n("tfoot",{children:e("tr",{children:[n("th",{}),n("td",{children:"Name"}),n("td",{children:"Job"}),n("td",{children:"company"}),n("td",{children:"location"}),n("td",{children:"Last Login"}),n("td",{children:"Favorite Color"}),n("th",{})]})})]})});b.args={size:"xs",pinRows:!0,pinCols:!0};var N,A,I;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(I=(A=h.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var L,D,G;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
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
}`,...(G=(D=g.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var M,z,F;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(F=(z=S.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var _,V,W;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
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
}`,...(W=(V=o.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var q,K,O;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
              <Mask variant="squircle" src="http://daisyui.com/tailwind-css-component-profile-2@56w.png" />
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
              <Mask variant="squircle" src="http://daisyui.com/tailwind-css-component-profile-3@56w.png" />
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
              <Mask variant="squircle" src="http://daisyui.com/tailwind-css-component-profile-4@56w.png" />
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
              <Mask variant="squircle" src="http://daisyui.com/tailwind-css-component-profile-5@56w.png" />
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
}`,...(O=(K=p.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var J,Z,E;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
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
}`,...(E=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:E.source}}};var Q,j,U;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  return <div className="overflow-x-auto h-96">
      <Table {...args}>
        <thead>
          <tr>
            <th>A</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ant-Man</td>
          </tr>
          <tr>
            <td>Aquaman</td>
          </tr>
          <tr>
            <td>Asterix</td>
          </tr>
          <tr>
            <td>The Atom</td>
          </tr>
          <tr>
            <td>The Avengers</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Batgirl</td>
          </tr>
          <tr>
            <td>Batman</td>
          </tr>
          <tr>
            <td>Batwoman</td>
          </tr>
          <tr>
            <td>Black Canary</td>
          </tr>
          <tr>
            <td>Black Panther</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Captain America</td>
          </tr>
          <tr>
            <td>Captain Marvel</td>
          </tr>
          <tr>
            <td>Catwoman</td>
          </tr>
          <tr>
            <td>Conan the Barbarian</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Daredevil</td>
          </tr>
          <tr>
            <td>The Defenders</td>
          </tr>
          <tr>
            <td>Doc Savage</td>
          </tr>
          <tr>
            <td>Doctor Strange</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Elektra</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>F</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fantastic Four</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>G</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ghost Rider</td>
          </tr>
          <tr>
            <td>Green Arrow</td>
          </tr>
          <tr>
            <td>Green Lantern</td>
          </tr>
          <tr>
            <td>Guardians of the Galaxy</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>H</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hawkeye</td>
          </tr>
          <tr>
            <td>Hellboy</td>
          </tr>
          <tr>
            <td>Incredible Hulk</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>I</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iron Fist</td>
          </tr>
          <tr>
            <td>Iron Man</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>M</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Marvelman</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>R</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Robin</td>
          </tr>
          <tr>
            <td>The Rocketeer</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Shadow</td>
          </tr>
          <tr>
            <td>Spider-Man</td>
          </tr>
          <tr>
            <td>Sub-Mariner</td>
          </tr>
          <tr>
            <td>Supergirl</td>
          </tr>
          <tr>
            <td>Superman</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>T</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Teenage Mutant Ninja Turtles</td>
          </tr>
          <tr>
            <td>Thor</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>W</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Wasp</td>
          </tr>
          <tr>
            <td>Watchmen</td>
          </tr>
          <tr>
            <td>Wolverine</td>
          </tr>
          <tr>
            <td>Wonder Woman</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>X-Men</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Z</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zatanna</td>
          </tr>
          <tr>
            <td>Zatara</td>
          </tr>
        </tbody>
      </Table>
    </div>;
}`,...(U=(j=m.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var Y,X,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  return <div className="overflow-x-auto h-96 w-96">
      <Table {...args}>
        <thead>
          <tr>
            <th></th>
            <td>Name</td>
            <td>Job</td>
            <td>company</td>
            <td>location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
            <th>1</th>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
            <td>12/5/2020</td>
            <td>Purple</td>
            <th>2</th>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
            <td>China</td>
            <td>8/15/2020</td>
            <td>Red</td>
            <th>3</th>
          </tr>
          <tr>
            <th>4</th>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
            <td>Rowe-Schoen</td>
            <td>Russia</td>
            <td>3/25/2021</td>
            <td>Crimson</td>
            <th>4</th>
          </tr>
          <tr>
            <th>5</th>
            <td>Yancy Tear</td>
            <td>Community Outreach Specialist</td>
            <td>Wyman-Ledner</td>
            <td>Brazil</td>
            <td>5/22/2020</td>
            <td>Indigo</td>
            <th>5</th>
          </tr>
          <tr>
            <th>6</th>
            <td>Irma Vasilik</td>
            <td>Editor</td>
            <td>Wiza, Bins and Emard</td>
            <td>Venezuela</td>
            <td>12/8/2020</td>
            <td>Purple</td>
            <th>6</th>
          </tr>
          <tr>
            <th>7</th>
            <td>Meghann Durtnal</td>
            <td>Staff Accountant IV</td>
            <td>Schuster-Schimmel</td>
            <td>Philippines</td>
            <td>2/17/2021</td>
            <td>Yellow</td>
            <th>7</th>
          </tr>
          <tr>
            <th>8</th>
            <td>Sammy Seston</td>
            <td>Accountant I</td>
            <td>O'Hara, Welch and Keebler</td>
            <td>Indonesia</td>
            <td>5/23/2020</td>
            <td>Crimson</td>
            <th>8</th>
          </tr>
          <tr>
            <th>9</th>
            <td>Lesya Tinham</td>
            <td>Safety Technician IV</td>
            <td>Turner-Kuhlman</td>
            <td>Philippines</td>
            <td>2/21/2021</td>
            <td>Maroon</td>
            <th>9</th>
          </tr>
          <tr>
            <th>10</th>
            <td>Zaneta Tewkesbury</td>
            <td>VP Marketing</td>
            <td>Sauer LLC</td>
            <td>Chad</td>
            <td>6/23/2020</td>
            <td>Green</td>
            <th>10</th>
          </tr>
          <tr>
            <th>11</th>
            <td>Andy Tipple</td>
            <td>Librarian</td>
            <td>Hilpert Group</td>
            <td>Poland</td>
            <td>7/9/2020</td>
            <td>Indigo</td>
            <th>11</th>
          </tr>
          <tr>
            <th>12</th>
            <td>Sophi Biles</td>
            <td>Recruiting Manager</td>
            <td>Gutmann Inc</td>
            <td>Indonesia</td>
            <td>2/12/2021</td>
            <td>Maroon</td>
            <th>12</th>
          </tr>
          <tr>
            <th>13</th>
            <td>Florida Garces</td>
            <td>Web Developer IV</td>
            <td>Gaylord, Pacocha and Baumbach</td>
            <td>Poland</td>
            <td>5/31/2020</td>
            <td>Purple</td>
            <th>13</th>
          </tr>
          <tr>
            <th>14</th>
            <td>Maribeth Popping</td>
            <td>Analyst Programmer</td>
            <td>Deckow-Pouros</td>
            <td>Portugal</td>
            <td>4/27/2021</td>
            <td>Aquamarine</td>
            <th>14</th>
          </tr>
          <tr>
            <th>15</th>
            <td>Moritz Dryburgh</td>
            <td>Dental Hygienist</td>
            <td>Schiller, Cole and Hackett</td>
            <td>Sri Lanka</td>
            <td>8/8/2020</td>
            <td>Crimson</td>
            <th>15</th>
          </tr>
          <tr>
            <th>16</th>
            <td>Reid Semiras</td>
            <td>Teacher</td>
            <td>Sporer, Sipes and Rogahn</td>
            <td>Poland</td>
            <td>7/30/2020</td>
            <td>Green</td>
            <th>16</th>
          </tr>
          <tr>
            <th>17</th>
            <td>Alec Lethby</td>
            <td>Teacher</td>
            <td>Reichel, Glover and Hamill</td>
            <td>China</td>
            <td>2/28/2021</td>
            <td>Khaki</td>
            <th>17</th>
          </tr>
          <tr>
            <th>18</th>
            <td>Aland Wilber</td>
            <td>Quality Control Specialist</td>
            <td>Kshlerin, Rogahn and Swaniawski</td>
            <td>Czech Republic</td>
            <td>9/29/2020</td>
            <td>Purple</td>
            <th>18</th>
          </tr>
          <tr>
            <th>19</th>
            <td>Teddie Duerden</td>
            <td>Staff Accountant III</td>
            <td>Pouros, Ullrich and Windler</td>
            <td>France</td>
            <td>10/27/2020</td>
            <td>Aquamarine</td>
            <th>19</th>
          </tr>
          <tr>
            <th>20</th>
            <td>Lorelei Blackstone</td>
            <td>Data Coordinator</td>
            <td>Witting, Kutch and Greenfelder</td>
            <td>Kazakhstan</td>
            <td>6/3/2020</td>
            <td>Red</td>
            <th>20</th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <td>Name</td>
            <td>Job</td>
            <td>company</td>
            <td>location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
            <th></th>
          </tr>
        </tfoot>
      </Table>
    </div>;
}`,...($=(X=b.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const wn=["Default","ActiveRow","HighlightsOnHover","Zebra","WithVisualElements","Xs","PinnedRows","PinnedRowsAndPinnedCols"];export{g as ActiveRow,h as Default,S as HighlightsOnHover,m as PinnedRows,b as PinnedRowsAndPinnedCols,p as WithVisualElements,u as Xs,o as Zebra,wn as __namedExportsOrder,Tn as default};
//# sourceMappingURL=Table.stories-8ebd107b.js.map
