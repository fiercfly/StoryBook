import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as B,a as H,b as J,c as K,d as N,I as L,e as O,C as w,f as Q}from"./select-CbivvQi8.js";import{c as t}from"./utils-BLSKlp9E.js";import{R as X,r as Y}from"./index-t5q4d8OJ.js";import"./index-yBjzXJbu.js";import"./createLucideIcon-DYb0enIN.js";import"./index-Ds86VQ4X.js";import"./index-BLHw34Di.js";import"./index-_hwtKry8.js";import"./index-BEq13kdC.js";import"./check-Dt6k_yGU.js";const Z=X.forwardRef(({className:a,children:l,...r},c)=>e.jsxs(L,{ref:c,className:t("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...r,children:[e.jsxs("span",{className:"absolute left-2 top-[10px] flex h-4 w-4  justify-center",children:[e.jsx(O,{className:"flex items-center justify-center w-full h-full",children:e.jsx(w,{className:"size-2 text-black fill-current"})}),e.jsx(w,{className:"size-4 text-gray-400 absolute"})]}),e.jsx(Q,{children:l})]})),M=({disabled:a=!1,options:l,value:r,placeholder:c="Select an option",label:n="",required:U=!1,description:x,onChange:p,error:f,isRadio:W,className:h,noOptionsText:v,defaultOpen:G,hideSelectedTick:b=!0,trigger:g,contentClassName:q})=>{var j;return e.jsxs("div",{className:t("space-y-1 ",h),children:[n&&e.jsxs("label",{className:t(" block text-sm font-medium text-zinc break-words",a?"text-zinc-500":"text-zinc-950"),children:[n,U&&e.jsx("span",{className:"text-destructive",children:" *"})]}),e.jsxs(B,{defaultOpen:G,defaultValue:r||"",onValueChange:s=>{p&&p(s===r?"":s)},value:r,disabled:a,children:[e.jsx(H,{className:t(a&&"cursor-not-allowed",h),children:g||e.jsx("span",{className:t("truncate",r?"":"text-muted-foreground"),children:r?(j=l.find(s=>s.value===r))==null?void 0:j.label.trim():c})}),e.jsx(J,{className:t("w-[var(--radix-select-trigger-width)]",q),children:e.jsxs(K,{children:[l.length>0&&l.map(s=>W?e.jsx(Z,{className:t(s.disabled&&"select-none cursor-not-allowed"),disabled:s.disabled,value:s.value,children:e.jsx("div",{className:"flex items-center space-x-2 w-full",children:e.jsxs("div",{className:"flex flex-col mr-2 w-full",children:[e.jsx("span",{className:"break-words",children:s.label}),s.description&&e.jsx("span",{className:"text-sm text-gray-500 break-words whitespace-normal",children:s.description})]})})},s.value):e.jsx(N,{className:t("w-full","cursor-pointer",s.disabled&&"select-none cursor-not-allowed","flex items-center space-x-2 justify-between w-full"),disabled:s.disabled,value:s.value,children:e.jsxs("div",{className:t("flex w-full items-center space-x-2 justify-between",s.disabled&&"opacity-50 pointer-events-none",s.suffixIcon&&"pr-8",b&&"!pl-0"),children:[s.prefixIcon&&s.prefixIcon,e.jsxs("div",{className:t("flex flex-col w-full",!b&&"mr-0"),children:[e.jsx("span",{className:"break-words",children:s.label}),s.description&&e.jsx("span",{className:"text-sm text-gray-500 break-words whitespace-normal",children:s.description})]}),s.suffixIcon&&e.jsx("span",{className:"absolute right-2 top-1/2 -translate-y-1/2",children:s.suffixIcon})]})},s.value)),l.length===0&&v&&e.jsx(N,{value:"no-items",disabled:!0,children:e.jsx("div",{className:"flex items-center space-x-2 w-full",children:e.jsx("div",{className:"flex flex-col mr-2 w-full",children:e.jsx("span",{className:"break-words",children:v})})})})]})})]}),x&&e.jsx("p",{className:"text-sm text-muted-foreground break-words",children:x}),f&&e.jsx("p",{className:"text-sm text-destructive break-words",children:f})]})},oe={title:"Atoms/Select",component:M,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onChange:{action:"changed"}},args:{options:[{value:"active",label:"Active"},{value:"draft",label:"Draft"},{value:"archived",label:"Archived",description:"No longer in use"},{value:"void",label:"Void",disabled:!0}],label:"Status",placeholder:"Select a status"}},i={args:{value:"active"}},d={args:{description:"Select the current state of the plan."}},o={args:{isRadio:!0,label:"Pricing Model",options:[{value:"flat",label:"Flat Fee",description:"A fixed amount per billing period"},{value:"per_unit",label:"Per Unit",description:"Charged based on the number of units"},{value:"tiered",label:"Tiered",description:"Different prices for different ranges"}]}},u={args:{disabled:!0,value:"active"}},m={render:a=>{const[l,r]=Y.useState(a.value||"");return e.jsxs("div",{className:"w-[300px]",children:[e.jsx(M,{...a,value:l,onChange:c=>{var n;r(c),(n=a.onChange)==null||n.call(a,c)}}),e.jsxs("p",{className:"mt-4 text-sm text-muted-foreground",children:["Selected: ",l||"None"]})]})}};var S,y,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 'active'
  }
}`,...(I=(y=i.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var C,k,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    description: 'Select the current state of the plan.'
  }
}`,...(D=(k=d.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var R,z,A;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isRadio: true,
    label: 'Pricing Model',
    options: [{
      value: 'flat',
      label: 'Flat Fee',
      description: 'A fixed amount per billing period'
    }, {
      value: 'per_unit',
      label: 'Per Unit',
      description: 'Charged based on the number of units'
    }, {
      value: 'tiered',
      label: 'Tiered',
      description: 'Different prices for different ranges'
    }]
  }
}`,...(A=(z=o.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,P,V;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'active'
  }
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var _,E,T;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    return <div className="w-[300px]">\r
        <Select {...args} value={value} onChange={val => {
        setValue(val);
        args.onChange?.(val);
      }} />\r
        <p className="mt-4 text-sm text-muted-foreground">Selected: {value || 'None'}</p>\r
      </div>;
  }
}`,...(T=(E=m.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const ue=["Default","WithDescription","RadioStyle","Disabled","Interactive"];export{i as Default,u as Disabled,m as Interactive,o as RadioStyle,d as WithDescription,ue as __namedExportsOrder,oe as default};
