import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{within as M,userEvent as k,expect as q}from"./index-CH2Su9EI.js";import{I as A}from"./Input-BN-1sqFU.js";import{r as B}from"./index-t5q4d8OJ.js";import{c as F}from"./createLucideIcon-DYb0enIN.js";import{S as L}from"./search-Bq_npJyh.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=F("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),Z={title:"Atoms/Input",component:A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","number","formatted-number","integer"]},size:{control:"select",options:["xs","sm","default","lg","xl"]},onChange:{action:"changed"}},args:{placeholder:"Enter text...",label:"Label"}},s={args:{label:"Username",placeholder:"e.g. johndoe"}},o={args:{label:"Password",type:"password",description:"Must be at least 8 characters long.",placeholder:"••••••••"}},n={args:{label:"Email",type:"email",error:"Please enter a valid email address.",value:"invalid-email"}},l={args:{label:"Amount",variant:"formatted-number",inputPrefix:r.jsx(_,{className:"size-4 text-muted-foreground"}),placeholder:"0.00",suffix:"USD"}},c={args:{placeholder:"Search...",inputPrefix:r.jsx(L,{className:"size-4 text-muted-foreground"})}},i={args:{label:"Disabled Field",disabled:!0,value:"Cannot edit this"}},a={render:e=>{const[p,t]=B.useState("");return r.jsxs("div",{className:"w-[300px]",children:[r.jsx(A,{...e,value:p,onChange:d=>{var u;t(d),(u=e.onChange)==null||u.call(e,d)}}),r.jsxs("p",{className:"mt-2 text-sm text-muted-foreground",children:["Current value: ",p]})]})},args:{label:"Type something",placeholder:"Type to test..."},play:async({canvasElement:e})=>{const t=M(e).getByPlaceholderText("Type to test...");await k.type(t,"Hello World"),await q(t).toHaveValue("Hello World")}};var m,g,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'e.g. johndoe'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,x,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    description: 'Must be at least 8 characters long.',
    placeholder: '••••••••'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,f,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    error: 'Please enter a valid email address.',
    value: 'invalid-email'
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,D,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Amount',
    variant: 'formatted-number',
    inputPrefix: <DollarSign className="size-4 text-muted-foreground" />,
    placeholder: '0.00',
    suffix: 'USD'
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,C,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    inputPrefix: <Search className="size-4 text-muted-foreground" />
  }
}`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var j,T,H;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Field',
    disabled: true,
    value: 'Cannot edit this'
  }
}`,...(H=(T=i.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var N,W,z,V,U;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div className="w-[300px]">\r
        <Input {...args} value={value} onChange={val => {
        setValue(val);
        args.onChange?.(val);
      }} />\r
        <p className="mt-2 text-sm text-muted-foreground">Current value: {value}</p>\r
      </div>;
  },
  args: {
    label: 'Type something',
    placeholder: 'Type to test...'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Type to test...');
    await userEvent.type(input, 'Hello World');
    await expect(input).toHaveValue('Hello World');
  }
}`,...(z=(W=a.parameters)==null?void 0:W.docs)==null?void 0:z.source},description:{story:"Interactive story with state management.",...(U=(V=a.parameters)==null?void 0:V.docs)==null?void 0:U.description}}};const $=["Default","WithDescription","WithError","CurrencyInput","SearchInput","Disabled","Interactive"];export{l as CurrencyInput,s as Default,i as Disabled,a as Interactive,c as SearchInput,o as WithDescription,n as WithError,$ as __namedExportsOrder,Z as default};
