import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{within as _,userEvent as q,expect as F,fn as J}from"./index-CH2Su9EI.js";import{B as n}from"./Button-CPsOBfOK.js";import{c as U}from"./createLucideIcon-DYb0enIN.js";import"./index-yBjzXJbu.js";import"./index-t5q4d8OJ.js";import"./index-BNNQlCw5.js";import"./index-BEq13kdC.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./loader-circle-BvW7KSMh.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=U("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=U("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),ot={title:"Atoms/Button",component:n,parameters:{layout:"centered",docs:{description:{component:`A versatile button component that supports various styles, sizes, and states.\r
Built with Radix UI Slot for composition and CVA for styling.`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","black","destructive","outline","secondary","ghost","link"],description:"The visual style of the button"},size:{control:"select",options:["default","sm","lg","icon","xs"],description:"The size of the button"},isLoading:{control:"boolean",description:"Shows a loading spinner and disables the button"},disabled:{control:"boolean",description:"Disables the button"}},args:{onClick:J(),children:"Button"}},r={args:{variant:"default",children:"Click me"}},s={args:{isLoading:!0},render:e=>t.jsxs("div",{className:"flex flex-wrap gap-4",children:[t.jsx(n,{...e,variant:"default",children:"Default"}),t.jsx(n,{...e,variant:"black",children:"Black"}),t.jsx(n,{...e,variant:"secondary",children:"Secondary"}),t.jsx(n,{...e,variant:"outline",children:"Outline"}),t.jsx(n,{...e,variant:"ghost",children:"Ghost"}),t.jsx(n,{...e,variant:"destructive",children:"Destructive"}),t.jsx(n,{...e,variant:"link",children:"Link"})]})},a={render:e=>t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(n,{...e,size:"xs",children:"Extra Small"}),t.jsx(n,{...e,size:"sm",children:"Small"}),t.jsx(n,{...e,size:"default",children:"Default"}),t.jsx(n,{...e,size:"lg",children:"Large"}),t.jsx(n,{...e,size:"icon",children:t.jsx(G,{className:"size-4"})})]})},o={args:{isLoading:!0,children:"Loading"}},i={args:{prefixIcon:t.jsx(G,{className:"size-4"}),suffixIcon:t.jsx(K,{className:"size-4"}),children:"Contact Us"}},c={args:{children:"Interactive Button"},play:async({canvasElement:e,args:H})=>{const W=_(e).getByRole("button");await q.click(W),await F(H.onClick).toHaveBeenCalled()}};var l,d,u,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: 'Click me'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:"The default primary button.",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var g,h,v,x,B;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  render: args => <div className='flex flex-wrap gap-4'>\r
            <Button {...args} variant='default'>\r
                Default\r
            </Button>\r
            <Button {...args} variant='black'>\r
                Black\r
            </Button>\r
            <Button {...args} variant='secondary'>\r
                Secondary\r
            </Button>\r
            <Button {...args} variant='outline'>\r
                Outline\r
            </Button>\r
            <Button {...args} variant='ghost'>\r
                Ghost\r
            </Button>\r
            <Button {...args} variant='destructive'>\r
                Destructive\r
            </Button>\r
            <Button {...args} variant='link'>\r
                Link\r
            </Button>\r
        </div>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Variants gallery.",...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.description}}};var f,y,k,z,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className='flex items-center gap-4'>\r
            <Button {...args} size='xs'>\r
                Extra Small\r
            </Button>\r
            <Button {...args} size='sm'>\r
                Small\r
            </Button>\r
            <Button {...args} size='default'>\r
                Default\r
            </Button>\r
            <Button {...args} size='lg'>\r
                Large\r
            </Button>\r
            <Button {...args} size='icon'>\r
                <Mail className='size-4' />\r
            </Button>\r
        </div>
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:"Sizes gallery.",...(b=(z=a.parameters)==null?void 0:z.docs)==null?void 0:b.description}}};var j,S,w,L,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: 'Loading'
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Button in a loading state.",...(I=(L=o.parameters)==null?void 0:L.docs)==null?void 0:I.description}}};var C,N,D,E,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    prefixIcon: <Mail className='size-4' />,
    suffixIcon: <ArrowRight className='size-4' />,
    children: 'Contact Us'
  }
}`,...(D=(N=i.parameters)==null?void 0:N.docs)==null?void 0:D.source},description:{story:"Button with icons.",...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};var A,M,T,V,O;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Interactive Button'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...(T=(M=c.parameters)==null?void 0:M.docs)==null?void 0:T.source},description:{story:"Interaction test to ensure the button responds to clicks.",...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.description}}};const it=["Default","Variants","Sizes","Loading","WithIcons","Interaction"];export{r as Default,c as Interaction,o as Loading,a as Sizes,s as Variants,i as WithIcons,it as __namedExportsOrder,ot as default};
