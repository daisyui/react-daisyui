import{j as e,a as t}from"./tw-merge-4486aaf0.js";import{H as a}from"./Hero-23d1d87a.js";import{B as d}from"./Button-e31631bb.js";import{C as c}from"./index-92e1ed70.js";import{I as m}from"./index-1b2f1137.js";import{F as n}from"./index-1d303440.js";import{L as C}from"./index-13a2cfa3.js";import"./index-f46741a2.js";import"./clsx.m-1229b3e0.js";import"./index-8d7e61f2.js";const G={title:"Layout/Hero",component:a,args:{className:"bg-base-200 min-h-[30rem]"}},i=r=>e(a,{...r,children:e(a.Content,{className:"text-center",children:t("div",{className:"max-w-md",children:[e("h1",{className:"text-5xl font-bold",children:"Hello there"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})})}),o=r=>e(a,{...r,children:t(a.Content,{children:[e("img",{src:"https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",className:"max-w-sm rounded-lg shadow-2xl"}),t("div",{children:[e("h1",{className:"text-5xl font-bold",children:"Box Office News!"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})]})}),l=r=>e(a,{...r,children:t(a.Content,{className:"flex-col lg:flex-row-reverse",children:[t("div",{className:"text-center lg:text-left",children:[e("h1",{className:"text-5xl font-bold",children:"Login now!"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."})]}),e(c,{className:"flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:t(c.Body,{children:[t(n,{children:[e(n.Label,{title:"Email"}),e(m,{type:"text",placeholder:"email",className:"input-bordered"})]}),t(n,{children:[e(n.Label,{title:"Password"}),e(m,{type:"text",placeholder:"password",className:"input-bordered"}),e("label",{className:"label",children:e(C,{href:"#",className:"label-text-alt",hover:!0,children:"Forgot password?"})})]}),e(n,{className:"mt-6",children:e(d,{children:"Login"})})]})})]})}),s=r=>t(a,{style:{backgroundImage:"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)"},children:[e(a.Overlay,{...r}),e(a.Content,{className:"text-center",children:t("div",{className:"max-w-md",children:[e("h1",{className:"text-5xl font-bold",children:"Hello there"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})})]});s.args={className:"bg-opacity-60"};i.args={};var u,p,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,g,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Hero {...args}>
      <Hero.Content>
        <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" className="max-w-sm rounded-lg shadow-2xl" />
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
}`,...(N=(g=o.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var f,b,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,H,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Hero style={{
    backgroundImage: 'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)'
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
}`,...(w=(H=s.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};const W=["Default","HeroWithFigure","HeroWithForm","HeroWithOverlayImage"];export{i as Default,o as HeroWithFigure,l as HeroWithForm,s as HeroWithOverlayImage,W as __namedExportsOrder,G as default};
