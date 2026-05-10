import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as v}from"./utils-BLSKlp9E.js";import{B as N}from"./Button-CPsOBfOK.js";import{c as s}from"./createLucideIcon-DYb0enIN.js";import"./index-yBjzXJbu.js";import"./index-t5q4d8OJ.js";import"./index-BNNQlCw5.js";import"./index-BEq13kdC.js";import"./index-1evVQkiP.js";import"./loader-circle-BvW7KSMh.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=s("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=s("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=s("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),L=({icon:o,heading:i,description:c,buttonLabel:n,buttonAction:l,children:d,className:k})=>e.jsxs("div",{className:v("flex flex-col items-center justify-center min-h-[400px] w-full p-8 text-center bg-background border border-dashed rounded-lg",k),children:[o&&e.jsx("div",{className:"mb-6 text-muted-foreground",children:o}),i&&e.jsx("h3",{className:"mb-2 text-xl font-semibold tracking-tight text-foreground",children:i}),c&&e.jsx("p",{className:"max-w-[400px] mb-8 text-sm text-muted-foreground leading-relaxed",children:c}),n&&l&&e.jsx(N,{onClick:l,variant:"default",size:"lg",children:n}),d&&e.jsx("div",{className:"mt-8 w-full",children:d})]}),I={title:"Organisms/EmptyState",component:L,parameters:{layout:"fullscreen"},tags:["autodocs"]},t={args:{icon:e.jsx(j,{className:"size-12"}),heading:"No invoices found",description:"You haven’t created any invoices yet. Create your first invoice to start billing your customers.",buttonLabel:"Create your first invoice",buttonAction:()=>alert("Action clicked")}},a={args:{icon:e.jsx(C,{className:"size-12"}),heading:"Build your customer base",description:"Import your existing customers or add them manually to get started with FlexPrice.",buttonLabel:"Add Customer",buttonAction:()=>alert("Action clicked")}},r={args:{icon:e.jsx(A,{className:"size-12"}),heading:"No plans yet",description:"Define your pricing plans to start offering subscriptions to your users.",buttonLabel:"Create Plan",buttonAction:()=>alert("Action clicked")}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: <Receipt className="size-12" />,
    heading: 'No invoices found',
    description: 'You haven’t created any invoices yet. Create your first invoice to start billing your customers.',
    buttonLabel: 'Create your first invoice',
    buttonAction: () => alert('Action clicked')
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,y,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: <Users className="size-12" />,
    heading: 'Build your customer base',
    description: 'Import your existing customers or add them manually to get started with FlexPrice.',
    buttonLabel: 'Add Customer',
    buttonAction: () => alert('Action clicked')
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,f,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: <PackageOpen className="size-12" />,
    heading: 'No plans yet',
    description: 'Define your pricing plans to start offering subscriptions to your users.',
    buttonLabel: 'Create Plan',
    buttonAction: () => alert('Action clicked')
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const U=["Default","Customers","Plans"];export{a as Customers,t as Default,r as Plans,U as __namedExportsOrder,I as default};
