(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1387)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(6273),c=t(387),s=t(7190);var l={};function u(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var n=r(a.resolveHref(o,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?a.resolveHref(o,e.as):i||t}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,_=e.shallow,m=e.scroll,g=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,y=r(s.useIntersection({rootMargin:"200px"}),2),x=y[0],j=y[1],w=i.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);i.default.useEffect((function(){var e=j&&t&&a.isLocalURL(d),n="undefined"!==typeof g?g:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&u(o,d,p,{locale:n})}),[p,d,j,g,t,o]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:s,scroll:c}))}(e,o,d,p,h,_,m,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&u(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof g?g:o&&o.locale,L=o&&o.isLocaleDomain&&a.getDomainLocale(p,N,o&&o.locales,o&&o.domainLocales);E.href=L||a.addBasePath(a.addLocale(p,N,o&&o.defaultLocale))}return i.default.cloneElement(n,E)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,s=o.useRef(),l=r(o.useState(!1),2),u=l[0],f=l[1],d=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||u||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,u]);return o.useEffect((function(){if(!a&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=t(7294),i=t(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},1387:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return f},default:function(){return d}});var r=t(5893),o=t(9008),i=t(214),a=t.n(i),c="Dev PTBR",s="Conte\xfado sobre desenvolvimento focado a comunidade brasileira!",l=t(6300),u=t(2141),f=!0;function d(e){var n=e.postsData;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsxs)("title",{children:[c," - ",s]}),(0,r.jsx)("meta",{name:"description",content:s})]}),(0,r.jsxs)("main",{className:a().main,children:[(0,r.jsxs)("h1",{className:a().title,children:["Bem-vindo ao"," ",(0,r.jsx)("span",{children:(0,r.jsxs)("a",{href:"https://github.com/viniciuscasarin/blog-devptbr/blob/master/README.md",target:"_blank",rel:"noopener noreferrer",children:[c,"!"]})})]}),(0,r.jsx)("p",{className:a().description,children:s}),(0,r.jsx)("div",{className:a().grid,children:n.map((function(e,n){return(0,r.jsx)(l.Z,{id:e.id,title:e.title,description:e.description,tags:e.keywords},n)}))})]}),(0,r.jsx)(u.Z,{})]})}},6300:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),o=t(1664),i=t(7971),a=t(594),c=t.n(a);function s(e){var n=e.id,t=e.title,a=e.description,s=e.tags;return(0,r.jsx)(o.default,{href:"/blog/".concat(n),passHref:!0,children:(0,r.jsxs)("a",{className:c().card,children:[(0,r.jsx)("h2",{className:"post-title",children:t}),(0,r.jsx)("p",{className:"post-description",children:a}),(0,r.jsx)(i.Z,{list:s})]})})}},2141:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),o=t(5561),i=t.n(o);function a(){return(0,r.jsx)("footer",{className:i().footer,children:(0,r.jsx)("a",{href:"https://github.com/viniciuscasarin/blog-devptbr/blob/master/CONTRIBUA.md",target:"_blank",rel:"noopener noreferrer",children:"Contribua!"})})}},7971:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),o=t(1664),i=t(4512),a=t.n(i);function c(e){var n=e.list;return(null===n||void 0===n?void 0:n.length)>0?(0,r.jsx)(r.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,r.jsx)(o.default,{href:"/tag/".concat(encodeURIComponent(e)),passHref:!0,children:(0,r.jsx)("a",{className:a().card,children:(0,r.jsx)("span",{className:a().tag,children:e})})},n)}))}):null}},594:function(e){e.exports={card:"Card_card__mV1hs"}},5561:function(e){e.exports={footer:"Footer_footer___dWe8"}},4512:function(e){e.exports={tag:"TagList_tag__gWBqh"}},214:function(e){e.exports={main:"Home_main__nLjiQ",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);