import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{C as b}from"./Chip-BjwxSOVN.js";import{c as s}from"./createLucideIcon-DYb0enIN.js";import{C as z}from"./circle-x-6f_XFf-A.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";import"./index-t5q4d8OJ.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=s("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=s("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=s("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=s("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=s("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),F={paid:{label:"Paid",variant:"success",icon:a.jsx(M,{className:"size-3"})},draft:{label:"Draft",variant:"default",icon:a.jsx(w,{className:"size-3"})},void:{label:"Void",variant:"failed",icon:a.jsx(B,{className:"size-3"})},pending:{label:"Pending",variant:"warning",icon:a.jsx(N,{className:"size-3"})},failed:{label:"Failed",variant:"failed",icon:a.jsx(z,{className:"size-3"})},processing:{label:"Processing",variant:"info",icon:a.jsx(d,{className:"size-3 animate-spin-slow"})},refunded:{label:"Refunded",variant:"info",icon:a.jsx(d,{className:"size-3"})}},e=({status:o,className:C})=>{const S=o.toLowerCase(),c=F[S]||{label:o,variant:"default",icon:a.jsx(I,{className:"size-3"})};return a.jsx(b,{label:c.label,variant:c.variant,icon:c.icon,className:C})},T={title:"Molecules/InvoiceStatusBadge",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["draft","paid","void","pending","failed","processing","refunded"]}}},t={args:{status:"paid"}},r={args:{status:"draft"}},i={args:{status:"failed"}},n={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(e,{status:"draft"}),a.jsx(e,{status:"pending"}),a.jsx(e,{status:"processing"}),a.jsx(e,{status:"paid"}),a.jsx(e,{status:"failed"}),a.jsx(e,{status:"void"}),a.jsx(e,{status:"refunded"})]})};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    status: 'paid'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: 'draft'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,y,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: 'failed'
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,k,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <InvoiceStatusBadge status="draft" />\r
      <InvoiceStatusBadge status="pending" />\r
      <InvoiceStatusBadge status="processing" />\r
      <InvoiceStatusBadge status="paid" />\r
      <InvoiceStatusBadge status="failed" />\r
      <InvoiceStatusBadge status="void" />\r
      <InvoiceStatusBadge status="refunded" />\r
    </div>
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const E=["Paid","Draft","Failed","AllStatuses"];export{n as AllStatuses,r as Draft,i as Failed,t as Paid,E as __namedExportsOrder,T as default};
