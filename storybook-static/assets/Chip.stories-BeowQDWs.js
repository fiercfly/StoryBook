import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{C as e}from"./Chip-BjwxSOVN.js";import{C as B}from"./check-Dt6k_yGU.js";import{c as V}from"./createLucideIcon-DYb0enIN.js";import{C as F}from"./circle-x-6f_XFf-A.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";import"./index-t5q4d8OJ.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=V("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=V("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),U={title:"Atoms/Badge (Chip)",component:e,parameters:{layout:"centered",docs:{description:{component:`A status indicator or label component.\r
Used for plans, invoices, and subscriptions status.`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","success","warning","failed","info"],description:"The visual style variant"},label:{control:"text",description:"The text content of the badge"},disabled:{control:"boolean"}},args:{label:"Badge",variant:"default"}},r={args:{label:"Draft",variant:"default"}},i={args:{label:"Paid",variant:"success",icon:a.jsx(B,{className:"size-3"})}},n={args:{label:"Pending",variant:"warning",icon:a.jsx(P,{className:"size-3"})}},c={args:{label:"Void",variant:"failed",icon:a.jsx(F,{className:"size-3"})}},o={args:{label:"Active",variant:"info",icon:a.jsx(M,{className:"size-3"})}},s={render:()=>a.jsxs("div",{className:"flex gap-4",children:[a.jsx(e,{variant:"default",label:"Default"}),a.jsx(e,{variant:"success",label:"Success",icon:a.jsx(B,{className:"size-3"})}),a.jsx(e,{variant:"warning",label:"Warning",icon:a.jsx(P,{className:"size-3"})}),a.jsx(e,{variant:"failed",label:"Failed",icon:a.jsx(F,{className:"size-3"})}),a.jsx(e,{variant:"info",label:"Info",icon:a.jsx(M,{className:"size-3"})})]})},t={args:{label:"Clickable Badge",onClick:()=>alert("Badge clicked!")}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Draft',
    variant: 'default'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Paid',
    variant: 'success',
    icon: <Check className="size-3" />
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,b,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Pending',
    variant: 'warning',
    icon: <AlertTriangle className="size-3" />
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,x,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Void',
    variant: 'failed',
    icon: <XCircle className="size-3" />
  }
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var N,j,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    variant: 'info',
    icon: <Info className="size-3" />
  }
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var z,y,A,S,I;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Chip variant="default" label="Default" />\r
      <Chip variant="success" label="Success" icon={<Check className="size-3" />} />\r
      <Chip variant="warning" label="Warning" icon={<AlertTriangle className="size-3" />} />\r
      <Chip variant="failed" label="Failed" icon={<XCircle className="size-3" />} />\r
      <Chip variant="info" label="Info" icon={<Info className="size-3" />} />\r
    </div>
}`,...(A=(y=s.parameters)==null?void 0:y.docs)==null?void 0:A.source},description:{story:"Displaying all variants together.",...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.description}}};var D,T,w;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Clickable Badge',
    onClick: () => alert('Badge clicked!')
  }
}`,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const G=["Default","Success","Warning","Failed","InfoVariant","AllVariants","Clickable"];export{s as AllVariants,t as Clickable,r as Default,c as Failed,o as InfoVariant,i as Success,n as Warning,G as __namedExportsOrder,U as default};
