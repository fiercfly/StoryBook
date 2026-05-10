import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as k,a as D,b as H,c as I}from"./tooltip-C-Rot2wC.js";import{c as N}from"./utils-BLSKlp9E.js";import{B as o}from"./Button-CPsOBfOK.js";import{c as L}from"./createLucideIcon-DYb0enIN.js";import"./index-yBjzXJbu.js";import"./index-t5q4d8OJ.js";import"./index-_hwtKry8.js";import"./index-BEq13kdC.js";import"./index-Ds86VQ4X.js";import"./index-BLHw34Di.js";import"./index-BNNQlCw5.js";import"./index-1evVQkiP.js";import"./loader-circle-BvW7KSMh.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=L("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),e=({children:j,content:v,delayDuration:B,side:b="top",align:y="center",sideOffset:C=4,className:S})=>t.jsx(k,{delayDuration:B,children:t.jsxs(D,{children:[t.jsx(H,{asChild:!0,children:j}),t.jsx(I,{side:b,align:y,sideOffset:C,className:N(S),children:v})]})}),K={title:"Atoms/Tooltip",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{side:{control:"select",options:["top","right","bottom","left"]},align:{control:"select",options:["start","center","end"]}}},r={args:{children:t.jsx(o,{variant:"outline",children:"Hover me"}),content:"This is a helpful tooltip"}},n={args:{children:t.jsx(R,{className:"size-4 text-muted-foreground cursor-help"}),content:"Click to learn more about usage-based billing"}},i={args:{children:t.jsx(o,{variant:"ghost",children:"Slow Tooltip"}),content:"I take 1 second to appear",delayDuration:1e3}},s={render:()=>t.jsxs("div",{className:"flex gap-4",children:[t.jsx(e,{content:"Tooltip on top",side:"top",children:t.jsx(o,{variant:"outline",children:"Top"})}),t.jsx(e,{content:"Tooltip on right",side:"right",children:t.jsx(o,{variant:"outline",children:"Right"})}),t.jsx(e,{content:"Tooltip on bottom",side:"bottom",children:t.jsx(o,{variant:"outline",children:"Bottom"})}),t.jsx(e,{content:"Tooltip on left",side:"left",children:t.jsx(o,{variant:"outline",children:"Left"})})]})};var a,l,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: <Button variant="outline">Hover me</Button>,
    content: 'This is a helpful tooltip'
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <HelpCircle className="size-4 text-muted-foreground cursor-help" />,
    content: 'Click to learn more about usage-based billing'
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: <Button variant="ghost">Slow Tooltip</Button>,
    content: 'I take 1 second to appear',
    delayDuration: 1000
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var T,x,f;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Tooltip content="Tooltip on top" side="top">\r
        <Button variant="outline">Top</Button>\r
      </Tooltip>\r
      <Tooltip content="Tooltip on right" side="right">\r
        <Button variant="outline">Right</Button>\r
      </Tooltip>\r
      <Tooltip content="Tooltip on bottom" side="bottom">\r
        <Button variant="outline">Bottom</Button>\r
      </Tooltip>\r
      <Tooltip content="Tooltip on left" side="left">\r
        <Button variant="outline">Left</Button>\r
      </Tooltip>\r
    </div>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const Q=["Default","WithIcon","CustomDelay","Sides"];export{i as CustomDelay,r as Default,s as Sides,n as WithIcon,Q as __namedExportsOrder,K as default};
