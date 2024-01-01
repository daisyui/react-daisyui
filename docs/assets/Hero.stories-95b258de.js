import{j as e,a as t}from"./tw-merge-0a3648bd.js";import{H as a}from"./Hero-9639dab2.js";import{B as d}from"./Button-0267a47f.js";import{C as c}from"./index-3c968524.js";import{I as m}from"./index-0ee0d1a2.js";import{F as n}from"./index-cdaabc1d.js";import{L as C}from"./index-6329c95a.js";import"./index-1b03fe98.js";import"./clsx.m-1229b3e0.js";import"./index-a55c3a76.js";const O={title:"Layout/Hero",component:a,args:{className:"bg-base-200 min-h-[30rem]"}},s=r=>e(a,{...r,children:e(a.Content,{className:"text-center",children:t("div",{className:"max-w-md",children:[e("h1",{className:"text-5xl font-bold",children:"Hello there"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})})}),o=r=>e(a,{...r,children:t(a.Content,{children:[e("img",{src:"https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",className:"max-w-sm rounded-lg shadow-2xl"}),t("div",{children:[e("h1",{className:"text-5xl font-bold",children:"Box Office News!"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})]})}),l=r=>e(a,{...r,children:t(a.Content,{className:"flex-col lg:flex-row-reverse",children:[t("div",{className:"text-center lg:text-left",children:[e("h1",{className:"text-5xl font-bold",children:"Login now!"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."})]}),e(c,{className:"flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:t(c.Body,{children:[t(n,{children:[e(n.Label,{title:"Email"}),e(m,{type:"text",placeholder:"email",className:"input-bordered"})]}),t(n,{children:[e(n.Label,{title:"Password"}),e(m,{type:"text",placeholder:"password",className:"input-bordered"}),e("label",{className:"label",children:e(C,{href:"#",className:"label-text-alt",hover:!0,children:"Forgot password?"})})]}),e(n,{className:"mt-6",children:e(d,{children:"Login"})})]})})]})}),i=r=>t(a,{style:{backgroundImage:"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)"},children:[e(a.Overlay,{...r}),e(a.Content,{className:"text-center",children:t("div",{className:"max-w-md",children:[e("h1",{className:"text-5xl font-bold",children:"Hello there"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})})]});i.args={className:"bg-opacity-60"};s.args={};var u,p,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <Hero {...args}>
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>;
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,g,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Hero {...args}>
      <Hero.Content>
        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>;
}`,...(N=(g=o.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var f,v,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <Hero {...args}>
      <Hero.Content className="flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Card.Body>
            <Form>
              <Form.Label title="Email" />
              <Input type="text" placeholder="email" className="input-bordered" />
            </Form>
            <Form>
              <Form.Label title="Password" />
              <Input type="text" placeholder="password" className="input-bordered" />
              <label className="label">
                <Link href="#" className="label-text-alt" hover>
                  Forgot password?
                </Link>
              </label>
            </Form>
            <Form className="mt-6">
              <Button>Login</Button>
            </Form>
          </Card.Body>
        </Card>
      </Hero.Content>
    </Hero>;
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,H,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Hero style={{
    backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'
  }}>
      <Hero.Overlay {...args} />
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>;
}`,...(w=(H=i.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};const G=["Default","HeroWithFigure","HeroWithForm","HeroWithOverlayImage"];export{s as Default,o as HeroWithFigure,l as HeroWithForm,i as HeroWithOverlayImage,G as __namedExportsOrder,O as default};
