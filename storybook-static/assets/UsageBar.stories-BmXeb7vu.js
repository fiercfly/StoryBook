import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as k}from"./progress-DqMWpwJp.js";import{c as m}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";import"./index-t5q4d8OJ.js";import"./index-Ds86VQ4X.js";import"./index-BLHw34Di.js";import"./index-BNNQlCw5.js";import"./index-BEq13kdC.js";const n=({label:y,used:i,entitlement:o,unit:S="units",className:B,showPercentage:M=!0})=>{const l=Math.min(Math.round(i/o*100),100),c=i>o,A=c?"bg-destructive":l>80?"bg-orange-500":"bg-primary";return e.jsxs("div",{className:m("space-y-2",B),children:[e.jsxs("div",{className:"flex justify-between items-end",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:y}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:[i.toLocaleString()," / ",o.toLocaleString()," ",S]})]}),M&&e.jsxs("span",{className:m("text-xs font-semibold",c?"text-destructive":"text-muted-foreground"),children:[l,"%"]})]}),e.jsx(k,{value:l,indicatorClassName:A,className:"h-2"}),c&&e.jsx("p",{className:"text-[10px] text-destructive font-medium uppercase tracking-wider",children:"Over entitlement limit"})]})},T={title:"Molecules/UsageBar",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{used:{control:{type:"range",min:0,max:2e3}},entitlement:{control:{type:"number"}}}},s={args:{label:"API Requests",used:450,entitlement:1e3,unit:"requests"}},t={args:{label:"Storage",used:850,entitlement:1e3,unit:"GB"}},r={args:{label:"Active Users",used:120,entitlement:100,unit:"users"}},a={render:()=>e.jsxs("div",{className:"w-[400px] space-y-6 p-6 border rounded-lg bg-card",children:[e.jsx("h3",{className:"font-semibold mb-4",children:"Current Usage"}),e.jsx(n,{label:"Monthly Active Users",used:4500,entitlement:5e3,unit:"users"}),e.jsx(n,{label:"Database Storage",used:12.5,entitlement:20,unit:"GB"}),e.jsx(n,{label:"Support Tickets",used:15,entitlement:10,unit:"tickets"})]})};var u,d,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'API Requests',
    used: 450,
    entitlement: 1000,
    unit: 'requests'
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,x,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Storage',
    used: 850,
    entitlement: 1000,
    unit: 'GB'
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,v,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Active Users',
    used: 120,
    entitlement: 100,
    unit: 'users'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var j,N,U;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="w-[400px] space-y-6 p-6 border rounded-lg bg-card">\r
      <h3 className="font-semibold mb-4">Current Usage</h3>\r
      <UsageBar label="Monthly Active Users" used={4500} entitlement={5000} unit="users" />\r
      <UsageBar label="Database Storage" used={12.5} entitlement={20} unit="GB" />\r
      <UsageBar label="Support Tickets" used={15} entitlement={10} unit="tickets" />\r
    </div>
}`,...(U=(N=a.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const E=["Default","HighUsage","OverLimit","Multiple"];export{s as Default,t as HighUsage,a as Multiple,r as OverLimit,E as __namedExportsOrder,T as default};
