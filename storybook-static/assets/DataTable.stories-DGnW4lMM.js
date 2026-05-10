import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{F as u}from"./Table-iZIDD2IU.js";import{B as l}from"./badge-CCYA7ZLR.js";import"./index-yBjzXJbu.js";import"./index-t5q4d8OJ.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";const y={title:"Molecules/DataTable",component:u,parameters:{layout:"padded"},tags:["autodocs"]},c=[{title:"ID",fieldName:"id",width:100},{title:"Customer",fieldName:"customer",flex:2},{title:"Status",render:s=>t.jsx(l,{variant:s.status==="Active"?"default":"secondary",children:s.status}),width:120},{title:"Amount",fieldName:"amount",align:"right",width:150}],p=[{id:"INV-001",customer:"Acme Corp",status:"Active",amount:"$1,200.00"},{id:"INV-002",customer:"Global Tech",status:"Pending",amount:"$850.00"},{id:"INV-003",customer:"Stark Industries",status:"Active",amount:"$5,000.00"},{id:"INV-004",customer:"Wayne Ent",status:"Archived",amount:"$2,100.00"}],e={args:{columns:c,data:p}},a={args:{columns:c,data:[],showEmptyRow:!0,emptyState:t.jsxs("div",{className:"flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500",children:[t.jsx("div",{className:"rounded-full bg-muted p-3 mb-4",children:t.jsx("svg",{className:"w-6 h-6 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})})}),t.jsx("h3",{className:"text-lg font-semibold",children:"No customers found"}),t.jsx("p",{className:"text-sm text-muted-foreground mt-1 max-w-sm",children:"Get started by creating a new customer or adjusting your search filters."})]})}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    columns: columns as any,
    data: data
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var m,i,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    columns: columns as any,
    data: [],
    showEmptyRow: true,
    emptyState: <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">\r
        <div className="rounded-full bg-muted p-3 mb-4">\r
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\r
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />\r
          </svg>\r
        </div>\r
        <h3 className="text-lg font-semibold">No customers found</h3>\r
        <p className="text-sm text-muted-foreground mt-1 max-w-sm">\r
          Get started by creating a new customer or adjusting your search filters.\r
        </p>\r
      </div>
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const j=["Default","Empty"];export{e as Default,a as Empty,j as __namedExportsOrder,y as default};
