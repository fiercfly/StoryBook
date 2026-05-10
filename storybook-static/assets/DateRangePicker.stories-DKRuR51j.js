import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-t5q4d8OJ.js";import{s as nt,P as ot,a as st,B as it,b as ct,C as mt,c as lt}from"./textarea-BNHpWu4f.js";import{c as v}from"./utils-BLSKlp9E.js";import"./progress-DqMWpwJp.js";import"./select-CbivvQi8.js";import"./tooltip-C-Rot2wC.js";import{c as dt}from"./createLucideIcon-DYb0enIN.js";import{X as ut}from"./x-DJpagpd1.js";import"./index-yBjzXJbu.js";import"./index-_hwtKry8.js";import"./index-BEq13kdC.js";import"./index-Ds86VQ4X.js";import"./index-BLHw34Di.js";import"./index-BNNQlCw5.js";import"./check-Dt6k_yGU.js";import"./index-1evVQkiP.js";import"./badge-CCYA7ZLR.js";import"./search-Bq_npJyh.js";import"./circle-x-6f_XFf-A.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=dt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);function $(e,r){return r==="utc"?{year:e.getUTCFullYear(),month:e.getUTCMonth(),date:e.getUTCDate()}:{year:e.getFullYear(),month:e.getMonth(),date:e.getDate()}}function S(e,r,a,c){return c==="utc"?new Date(Date.UTC(e,r,a,0,0,0,0)):new Date(e,r,a,0,0,0,0)}function C(e,r,a){if(r===a)return new Date(e.getTime());const{year:c,month:m,date:u}=$(e,r);return S(c,m,u,a)}function b(e,r){if(isNaN(e.getTime()))return"Invalid Date";const a={year:"numeric",month:"short",day:"2-digit"};return r==="utc"?e.toLocaleDateString("en-US",{...a,timeZone:"UTC"}):e.toLocaleDateString("en-US",a)}function w(e,r){const{year:a,month:c,date:m}=$(e,r);return new Date(a,c,m)}const V=({startDate:e,endDate:r,onChange:a,placeholder:c="Select Range",disabled:m,title:u,minDate:W,maxDate:_,className:y,labelClassName:X,popoverClassName:q,popoverTriggerClassName:A,popoverContentClassName:G})=>{const[H,J]=l.useState(!1),[t,d]=l.useState(void 0),[s,K]=l.useState("local"),Q=nt(new Date),j=l.useCallback((n,i)=>{const p=s==="utc"?S(n.getFullYear(),n.getMonth(),n.getDate(),"utc"):n,at=s==="utc"?S(i.getFullYear(),i.getMonth(),i.getDate(),"utc"):i;return{from:p,to:at}},[s]),R=l.useCallback(n=>{if(n)if(n.from&&n.to){const i=j(n.from,n.to);d(i),a({startDate:i.from,endDate:i.to})}else a({startDate:n.from,endDate:n.to})},[a,j]),tt=l.useCallback(n=>{if(t!=null&&t.from&&(t!=null&&t.to)){const i=C(t.from,s,n),p=C(t.to,s,n);d({from:i,to:p}),a({startDate:i,endDate:p})}K(n)},[t,s,a]);l.useEffect(()=>{d(e&&r?{from:e,to:r}:void 0)},[e,r]);const et=t!=null&&t.from&&(t!=null&&t.to)?{from:w(t.from,s),to:w(t.to,s)}:void 0,rt=t!=null&&t.from&&(t!=null&&t.to)?`${b(t.from,s)} - ${b(t.to,s)}`:c;return o.jsxs(ot,{open:H,onOpenChange:J,children:[o.jsx(st,{className:A,disabled:m,children:o.jsxs("div",{className:"flex flex-col ",children:[u&&o.jsx("div",{className:v("text-sm font-medium mb-1 w-full text-start",X),children:u}),o.jsxs("div",{className:"relative",children:[o.jsxs(it,{variant:"outline",className:v(" justify-start text-left font-normal !h-10",!(t!=null&&t.from)||!(t!=null&&t.to)?"text-muted-foreground opacity-70 hover:text-muted-foreground":"text-black",!y&&(t!=null&&t.from&&(t!=null&&t.to)?"w-[260px]":"w-[240px]"),"transition-all duration-300 ease-in-out",y),children:[o.jsx(pt,{className:"mr-0 h-4 w-4"}),o.jsx("span",{children:rt})]}),(t==null?void 0:t.from)&&(t==null?void 0:t.to)&&o.jsx(ut,{className:"ml-2 h-4 w-4 absolute right-2 top-[12px] cursor-pointer",onClick:n=>{n.stopPropagation(),d(void 0),a({startDate:void 0,endDate:void 0})}})]})]})}),o.jsx(ct,{className:v("w-auto flex gap-4 p-2",q,G),align:"start",children:o.jsx(mt,{disabled:m,mode:"range",selected:et,onSelect:R,fromDate:W,toDate:_,defaultMonth:Q,numberOfMonths:2,timezone:s,onTimezoneChange:tt})})]})},Lt={title:"Molecules/DateRangePicker",component:V,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onChange:{action:"changed"}}},D={args:{placeholder:"Select dates"}},g={args:{title:"Billing Period",placeholder:"Pick a range"}},f={args:{startDate:lt(new Date,7),endDate:new Date,title:"Last 7 Days"}},h={args:{disabled:!0,title:"Selection Disabled"}},x={render:e=>{const[r,a]=l.useState({startDate:e.startDate,endDate:e.endDate});return o.jsxs("div",{className:"w-[300px]",children:[o.jsx(V,{...e,startDate:r.startDate,endDate:r.endDate,onChange:c=>{var m;a(c),(m=e.onChange)==null||m.call(e,c)}}),r.startDate&&r.endDate&&o.jsxs("div",{className:"mt-4 p-3 bg-muted rounded-md text-xs",children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Start:"})," ",r.startDate.toDateString()]}),o.jsxs("p",{children:[o.jsx("strong",{children:"End:"})," ",r.endDate.toDateString()]})]})]})}};var k,P,T;D.parameters={...D.parameters,docs:{...(k=D.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select dates'
  }
}`,...(T=(P=D.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var N,M,I;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Billing Period',
    placeholder: 'Pick a range'
  }
}`,...(I=(M=g.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var U,E,L;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    startDate: subDays(new Date(), 7),
    endDate: new Date(),
    title: 'Last 7 Days'
  }
}`,...(L=(E=f.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var O,B,F;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true,
    title: 'Selection Disabled'
  }
}`,...(F=(B=h.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var Y,z,Z;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => {
    const [range, setRange] = useState<{
      startDate?: Date;
      endDate?: Date;
    }>({
      startDate: args.startDate,
      endDate: args.endDate
    });
    return <div className="w-[300px]">\r
        <DateRangePicker {...args} startDate={range.startDate} endDate={range.endDate} onChange={newRange => {
        setRange(newRange);
        args.onChange?.(newRange);
      }} />\r
        {range.startDate && range.endDate && <div className="mt-4 p-3 bg-muted rounded-md text-xs">\r
            <p><strong>Start:</strong> {range.startDate.toDateString()}</p>\r
            <p><strong>End:</strong> {range.endDate.toDateString()}</p>\r
          </div>}\r
      </div>;
  }
}`,...(Z=(z=x.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};const Ot=["Default","WithTitle","Preselected","Disabled","Interactive"];export{D as Default,h as Disabled,x as Interactive,f as Preselected,g as WithTitle,Ot as __namedExportsOrder,Lt as default};
