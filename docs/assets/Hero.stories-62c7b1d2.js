import{a,j as e}from"./tw-merge-e2243cb0.js";import{H as t}from"./Hero-fb67cfc7.js";import{B as d}from"./index-6e65e89d.js";import{C as c}from"./index-587fb902.js";import{I as m}from"./index-abf3e225.js";import{F as n}from"./index-eaebfb6f.js";import{L as C}from"./index-279e12e8.js";import"./index-ebeaab24.js";import"./clsx.m-1229b3e0.js";import"./index-3106c12b.js";const j={title:"Layout/Hero",component:t,args:{className:"bg-base-200 "}},s=r=>a(t,{...r,children:[e(t.Overlay,{className:"bg-opacity-60"}),e(t.Content,{className:"text-center",children:a("div",{className:"max-w-md",children:[e("h1",{className:"text-5xl font-bold",children:"Hello there"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})})]}),o=r=>e(t,{...r,children:a(t.Content,{children:[e("img",{src:"https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",className:"max-w-sm rounded-lg shadow-2xl"}),a("div",{children:[e("h1",{className:"text-5xl font-bold",children:"Box Office News!"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})]})}),l=r=>e(t,{...r,children:a(t.Content,{className:"flex-col lg:flex-row-reverse",children:[a("div",{className:"text-center lg:text-left",children:[e("h1",{className:"text-5xl font-bold",children:"Login now!"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."})]}),e(c,{className:"flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:a(c.Body,{children:[a(n,{children:[e(n.Label,{title:"Email"}),e(m,{type:"text",placeholder:"email",className:"input-bordered"})]}),a(n,{children:[e(n.Label,{title:"Password"}),e(m,{type:"text",placeholder:"password",className:"input-bordered"}),e("label",{className:"label",children:e(C,{href:"#",className:"label-text-alt",hover:!0,children:"Forgot password?"})})]}),e(n,{className:"mt-6",children:e(d,{children:"Login"})})]})})]})}),i=r=>a(t,{style:{backgroundImage:"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)"},children:[e(t.Overlay,{...r}),e(t.Content,{className:"text-center",children:a("div",{className:"max-w-md",children:[e("h1",{className:"text-5xl font-bold",children:"Hello there"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})})]});i.args={className:"bg-opacity-60"};s.args={};var u,p,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return <Hero {...args}>
      <Hero.Overlay className="bg-opacity-60" />
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
}`,...(N=(g=o.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var f,v,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,H,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(w=(H=i.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};const G=["Default","HeroWithFigure","HeroWithForm","HeroWithOverlayImage"];export{s as Default,o as HeroWithFigure,l as HeroWithForm,i as HeroWithOverlayImage,G as __namedExportsOrder,j as default};
//# sourceMappingURL=Hero.stories-62c7b1d2.js.map
