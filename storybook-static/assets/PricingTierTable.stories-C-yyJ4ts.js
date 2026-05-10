import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as S,a as E,b as m,c as o,d as R,e as c}from"./Table-iZIDD2IU.js";import{C as w}from"./Chip-BjwxSOVN.js";import{c as v}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";import"./index-t5q4d8OJ.js";const C=({tiers:l,currency:y="USD",unit:u="units",billingPeriod:N="month",className:T})=>{const d=r=>new Intl.NumberFormat("en-US",{style:"currency",currency:y}).format(r);return e.jsxs("div",{className:v("rounded-lg border border-[#E2E8F0] overflow-hidden",T),children:[e.jsxs(S,{className:"w-full",children:[e.jsx(E,{className:"bg-muted/50",children:e.jsxs(m,{children:[e.jsx(o,{className:"w-[40%]",children:"Usage Range"}),e.jsx(o,{className:"text-right",children:"Unit Price"}),e.jsx(o,{className:"text-right",children:"Flat Fee"})]})}),e.jsx(R,{children:l.map((r,a)=>{const s=a===0?0:l[a-1].upto,U=r.upto==="unlimited"?`${s==="unlimited"?"":s}+ ${u}`:`${s} - ${r.upto} ${u}`;return e.jsxs(m,{children:[e.jsxs(c,{className:"font-medium",children:[U,r.upto==="unlimited"&&e.jsx(w,{label:"Catch-all",variant:"info",className:"ml-2 h-5"})]}),e.jsx(c,{className:"text-right",children:d(r.unitPrice)}),e.jsx(c,{className:"text-right text-muted-foreground",children:r.flatFee?d(r.flatFee):"--"})]},a)})})]}),e.jsx("div",{className:"bg-muted/30 p-3 border-t border-[#E2E8F0]",children:e.jsxs("p",{className:"text-[10px] uppercase tracking-wider text-muted-foreground font-semibold",children:["Billing Period: ",N]})})]})},q={title:"Organisms/PricingTierTable",component:C,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{unit:"API Requests",currency:"USD",billingPeriod:"monthly",tiers:[{upto:1e3,unitPrice:.05,flatFee:10},{upto:5e3,unitPrice:.03},{upto:"unlimited",unitPrice:.01}]}},n={args:{unit:"GB Storage",currency:"EUR",billingPeriod:"yearly",tiers:[{upto:100,unitPrice:.5},{upto:500,unitPrice:.4},{upto:"unlimited",unitPrice:.3}]}},i={args:{unit:"Users",tiers:[{upto:10,unitPrice:0,flatFee:50},{upto:50,unitPrice:0,flatFee:200},{upto:"unlimited",unitPrice:0,flatFee:500}]}};var p,g,P;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    unit: 'API Requests',
    currency: 'USD',
    billingPeriod: 'monthly',
    tiers: [{
      upto: 1000,
      unitPrice: 0.05,
      flatFee: 10
    }, {
      upto: 5000,
      unitPrice: 0.03
    }, {
      upto: 'unlimited',
      unitPrice: 0.01
    }]
  }
}`,...(P=(g=t.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};var h,x,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    unit: 'GB Storage',
    currency: 'EUR',
    billingPeriod: 'yearly',
    tiers: [{
      upto: 100,
      unitPrice: 0.50
    }, {
      upto: 500,
      unitPrice: 0.40
    }, {
      upto: 'unlimited',
      unitPrice: 0.30
    }]
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,F,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    unit: 'Users',
    tiers: [{
      upto: 10,
      unitPrice: 0,
      flatFee: 50
    }, {
      upto: 50,
      unitPrice: 0,
      flatFee: 200
    }, {
      upto: 'unlimited',
      unitPrice: 0,
      flatFee: 500
    }]
  }
}`,...(j=(F=i.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const A=["Tiered","Graduated","FlatFeeOnly"];export{i as FlatFeeOnly,n as Graduated,t as Tiered,A as __namedExportsOrder,q as default};
