import{j as a,a as e}from"./tw-merge-e8a1af18.js";import{H as t}from"./Hero-5b50aa16.js";import{B as d}from"./index-e215d0b1.js";import{C as c}from"./index-6c96d66c.js";import{I as m}from"./index-3b2b1edb.js";import{F as n}from"./index-05fbf133.js";import{L as C}from"./index-2cf02537.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";const G={title:"Layout/Hero",component:t,args:{className:"bg-base-200 "}},i=r=>a(t,{...r,children:[e(t.Overlay,{className:"bg-opacity-60"}),e(t.Content,{className:"text-center",children:a("div",{className:"max-w-md",children:[e("h1",{className:"text-5xl font-bold",children:"Hello there"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})})]}),o=r=>e(t,{...r,children:a(t.Content,{children:[e("img",{src:"https://api.lorem.space/image/movie?w=260&h=400",className:"max-w-sm rounded-lg shadow-2xl"}),a("div",{children:[e("h1",{className:"text-5xl font-bold",children:"Box Office News!"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})]})}),l=r=>e(t,{...r,children:a(t.Content,{className:"flex-col lg:flex-row-reverse",children:[a("div",{className:"text-center lg:text-left",children:[e("h1",{className:"text-5xl font-bold",children:"Login now!"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."})]}),e(c,{className:"flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:a(c.Body,{children:[a(n,{children:[e(n.Label,{title:"Email"}),e(m,{type:"text",placeholder:"email",className:"input-bordered"})]}),a(n,{children:[e(n.Label,{title:"Password"}),e(m,{type:"text",placeholder:"password",className:"input-bordered"}),e("label",{className:"label",children:e(C,{href:"#",className:"label-text-alt",hover:!0,children:"Forgot password?"})})]}),e(n,{className:"mt-6",children:e(d,{children:"Login"})})]})})]})}),s=r=>a(t,{style:{backgroundImage:"url(https://api.lorem.space/image/fashion?w=1000&h=800)"},children:[e(t.Overlay,{...r}),e(t.Content,{className:"text-center",children:a("div",{className:"max-w-md",children:[e("h1",{className:"text-5xl font-bold",children:"Hello there"}),e("p",{className:"py-6",children:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}),e(d,{color:"primary",children:"Get Started"})]})})]});s.args={className:"bg-opacity-60"};i.args={};var u,p,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,g,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <Hero {...args}>
      <Hero.Content>
        <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
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
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,H,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <Hero style={{
    backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'
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
//# sourceMappingURL=Hero.stories-6c6a17a2.js.map
