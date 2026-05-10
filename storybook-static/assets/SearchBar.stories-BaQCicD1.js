import{fn as re,within as te,userEvent as ae,expect as z}from"./index-CH2Su9EI.js";import{j as g}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-t5q4d8OJ.js";import{c as I}from"./utils-BLSKlp9E.js";import{L as ce}from"./loader-circle-BvW7KSMh.js";import{S as ue}from"./search-Bq_npJyh.js";import{X as oe}from"./x-DJpagpd1.js";import"./index-yBjzXJbu.js";import"./createLucideIcon-DYb0enIN.js";function se(a,e,c,i){var l=this,u=r.useRef(null),s=r.useRef(0),f=r.useRef(0),t=r.useRef(null),d=r.useRef([]),m=r.useRef(),p=r.useRef(),B=r.useRef(a),y=r.useRef(!0),v=r.useRef(),j=r.useRef();B.current=a;var D=typeof window<"u",w=!e&&e!==0&&D;if(typeof a!="function")throw new TypeError("Expected a function");e=+e||0;var V=!!(c=c||{}).leading,N=!("trailing"in c)||!!c.trailing,b=!!c.flushOnExit&&N,S="maxWait"in c,O="debounceOnServer"in c&&!!c.debounceOnServer,W=S?Math.max(+c.maxWait||0,e):null,k=r.useMemo(function(){var h=function(n){var o=d.current,x=m.current;return d.current=m.current=null,s.current=n,f.current=f.current||n,p.current=B.current.apply(x,o)},E=function(n,o){w&&cancelAnimationFrame(t.current),t.current=w?requestAnimationFrame(n):setTimeout(n,o)},H=function(n){if(!y.current)return!1;var o=n-u.current;return!u.current||o>=e||o<0||S&&n-s.current>=W},M=function(n){return t.current=null,N&&d.current?h(n):(d.current=m.current=null,p.current)},A=function n(){var o=Date.now();if(V&&f.current===s.current&&ne(),H(o))return M(o);if(y.current){var x=e-(o-u.current),T=S?Math.min(x,W-(o-s.current)):x;E(n,T)}},ne=function(){i&&i({})},R=function(){if(D||O){var n,o=Date.now(),x=H(o);if(d.current=[].slice.call(arguments),m.current=l,u.current=o,b&&!v.current&&(v.current=function(){var T;((T=global.document)==null?void 0:T.visibilityState)==="hidden"&&j.current.flush()},(n=global.document)==null||n.addEventListener==null||n.addEventListener("visibilitychange",v.current)),x){if(!t.current&&y.current)return s.current=u.current,E(A,e),V?h(u.current):p.current;if(S)return E(A,e),h(u.current)}return t.current||E(A,e),p.current}};return R.cancel=function(){var n=t.current;n&&(w?cancelAnimationFrame(t.current):clearTimeout(t.current)),s.current=0,d.current=u.current=m.current=t.current=null,n&&i&&i({})},R.isPending=function(){return!!t.current},R.flush=function(){return t.current?M(Date.now()):p.current},R},[V,S,e,W,N,b,w,D,O,i]);return j.current=k,r.useEffect(function(){return y.current=!0,function(){var h;b&&j.current.flush(),v.current&&((h=global.document)==null||h.removeEventListener==null||h.removeEventListener("visibilitychange",v.current),v.current=null),y.current=!1}},[b]),k}function ie(a,e){return a===e}function le(a,e,c){var i=ie,l=r.useRef(a),u=r.useState({})[1],s=se(r.useCallback(function(t){l.current=t,u({})},[u]),e,c,u),f=r.useRef(a);return i(f.current,a)||(s(a),f.current=a),[l.current,s]}const fe=({placeholder:a="Search...",onSearch:e,debounceTime:c=300,className:i,isLoading:l=!1,defaultValue:u=""})=>{const[s,f]=r.useState(u),[t]=le(s,c),d=r.useRef(!0);r.useEffect(()=>{if(d.current){d.current=!1;return}e(t)},[t,e]);const m=()=>{f(""),e("")};return g.jsxs("div",{className:I("relative w-full group",i),children:[g.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors",children:l?g.jsx(ce,{className:"size-4 animate-spin"}):g.jsx(ue,{className:"size-4"})}),g.jsx("input",{type:"text",value:s,onChange:p=>f(p.target.value),placeholder:a,className:I("w-full h-10 pl-10 pr-10 bg-background border border-input rounded-[6px] text-sm ring-offset-background transition-all","focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:border-transparent","placeholder:text-muted-foreground")}),s&&!l&&g.jsx("button",{onClick:m,className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Clear search",children:g.jsx(oe,{className:"size-4"})})]})},we={title:"Molecules/SearchBar",component:fe,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onSearch:{action:"searched"}}},F={args:{placeholder:"Search customers...",onSearch:re()}},P={args:{isLoading:!0,placeholder:"Searching..."}},C={args:{defaultValue:"Acme Corp"}},L={args:{placeholder:"Type to search...",onSearch:re()},play:async({canvasElement:a,args:e})=>{const i=te(a).getByPlaceholderText("Type to search...");await ae.type(i,"FlexPrice",{delay:100}),await z(i).toHaveValue("FlexPrice"),await new Promise(l=>setTimeout(l,500)),await z(e.onSearch).toHaveBeenCalledWith("FlexPrice")}};var _,q,X;F.parameters={...F.parameters,docs:{...(_=F.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search customers...',
    onSearch: fn()
  }
}`,...(X=(q=F.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};var G,J,K;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    placeholder: 'Searching...'
  }
}`,...(K=(J=P.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Acme Corp'
  }
}`,...(Y=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type to search...',
    onSearch: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Type to search...');
    await userEvent.type(input, 'FlexPrice', {
      delay: 100
    });
    await expect(input).toHaveValue('FlexPrice');

    // Wait for debounce
    await new Promise(resolve => setTimeout(resolve, 500));
    await expect(args.onSearch).toHaveBeenCalledWith('FlexPrice');
  }
}`,...(ee=($=L.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const be=["Default","Loading","WithDefaultValue","Interactive"];export{F as Default,L as Interactive,P as Loading,C as WithDefaultValue,be as __namedExportsOrder,we as default};
