webpackJsonp([0xd2a57dc1d883],{135:function(e,n,o){"use strict";function t(e,n,o){var t=a.map(function(o){if(o.plugin[e]){var t=o.plugin[e](n,o.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:o?[o]:[]}function r(e,n,o){return a.reduce(function(o,t){return t.plugin[e]?o.then(function(){return t.plugin[e](n,t.options)}):o},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=r;var a=[{plugin:o(380),options:{plugins:[]}},{plugin:o(382),options:{plugins:[]}}]},250:function(e,n,o){"use strict";n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(357),"component---src-templates-blog-post-js":o(361),"component---src-pages-blog-index-js":o(359),"component---src-pages-index-js":o(360)},n.json={"layout-index.json":o(362),"offline-plugin-app-shell-fallback.json":o(379),"about.json":o(363),"blog-fix-unprotected-private-key-file-on-macos.json":o(369),"blog-fix-python-2-7-12-on-macos-sierra.json":o(368),"blog-integrating-angularjs-django.json":o(371),"blog-8-tips-to-become-an-effective-remote-developer.json":o(365),"blog-response-to-react-design-principles-interpretation-by-react-members.json":o(376),"blog-react-driven-by-facebook-principle-concerns.json":o(375),"blog-introduction-greedy-algorithms.json":o(372),"blog-javascript-web-frameworks-trends-2016.json":o(373),"blog-how-do-i-become-a-better-developer.json":o(370),"blog-thoughts-on-giving-my-first-tech-talk.json":o(377),"blog-managing-front-end-components-with-bower.json":o(374),"blog-basic-custom-domain-hosting-with-github-pages.json":o(366),"blog-enabling-scrolling-using-the-microsoft-natural-ergonomic-keyboard-4000-s-zoom-slider-on-ubuntu-1210.json":o(367),"blog.json":o(364),"index.json":o(378)},n.layouts={"layout---index":o(358)}},251:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},s=o(2),c=t(s),l=o(8),f=t(l),p=o(185),d=t(p),m=o(114),g=t(m),h=o(135),b=o(508),y=t(b),v=function(e){var n=e.children;return c.default.createElement("div",null,n())},w=function(e){function n(o){r(this,n);var t=a(this,e.call(this)),u=o.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},t}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var o=d.default.getResourcesForPathname(e.location.pathname);if(o)this.setState({location:e.location,pageResources:o});else{var t=e.location;d.default.getPage(t.pathname)||(t=i({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(e){n.setState({location:t,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,y.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,h.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);w.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=w,e.exports=n.default},114:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(408),a=t(r),u=(0,a.default)();e.exports=u},252:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(134),a=o(186),u=t(a),i={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),a=(0,u.default)(t,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return s=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return s=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return s=e,i[a]=e,!0}return!1}),s}}},253:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(161),a=t(r),u=o(135),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();e.exports=c},363:function(e,n,o){o(6),e.exports=function(e){return o.e(0xf927f8900006,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(389)})})}},365:function(e,n,o){o(6),e.exports=function(e){return o.e(94859958604426,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(390)})})}},366:function(e,n,o){o(6),e.exports=function(e){return o.e(0x6a41a13eaaf5,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(391)})})}},367:function(e,n,o){o(6),e.exports=function(e){return o.e(47838559778689,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(392)})})}},368:function(e,n,o){o(6),e.exports=function(e){return o.e(0x90a2d28b631e,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(393)})})}},369:function(e,n,o){o(6),e.exports=function(e){return o.e(94816480091785,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(394)})})}},370:function(e,n,o){o(6),e.exports=function(e){return o.e(0x9e548b1e5b20,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(395)})})}},371:function(e,n,o){o(6),e.exports=function(e){return o.e(0xc97ade0ee9e0,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(396)})})}},372:function(e,n,o){o(6),e.exports=function(e){return o.e(99004157742242,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(397)})})}},373:function(e,n,o){o(6),e.exports=function(e){return o.e(65528465209274,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(398)})})}},374:function(e,n,o){o(6),e.exports=function(e){return o.e(29959799103960,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(399)})})}},375:function(e,n,o){o(6),e.exports=function(e){return o.e(24130961910084,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(400)})})}},376:function(e,n,o){o(6),e.exports=function(e){return o.e(0xc3f8fd2c2f1,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(401)})})}},377:function(e,n,o){o(6),e.exports=function(e){return o.e(0x900f3db1792f,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(402)})})}},364:function(e,n,o){o(6),e.exports=function(e){return o.e(49683490770531,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(403)})})}},378:function(e,n,o){o(6),e.exports=function(e){return o.e(0x81b8806e4260,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(404)})})}},362:function(e,n,o){o(6),e.exports=function(e){return o.e(60335399758886,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(164)})})}},379:function(e,n,o){o(6),e.exports=function(e){return o.e(0xbf4c176e203a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(405)})})}},358:function(e,n,o){o(6),e.exports=function(e){return o.e(0x67ef26645b2a,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(254)})})}},185:function(e,n,o){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=o(2),a=(t(r),o(252)),u=t(a),i=o(114),s=t(i),c=o(186),l=t(c),f=void 0,p={},d={},m={},g={},h={},b=[],y=[],v={},w="",j=[],x={},R=function(e){return e&&e.default||e},P=void 0,k=!0,C=[],N={},_={},E=5;P=o(255)({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(e){T(e,function(){j=j.filter(function(n){return n!==e}),P.onResourcedFinished(e)})}}),s.default.on("onPreLoadPageResources",function(e){P.onPreLoadPageResources(e)}),s.default.on("onPostLoadPageResources",function(e){P.onPostLoadPageResources(e)});var O=function(e,n){return x[e]>x[n]?1:x[e]<x[n]?-1:0},L=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},T=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[n])e.nextTick(function(){o(null,g[n])});else{var t=void 0;t="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],t(function(e,t){g[n]=t,C.push({resource:n,succeeded:!e}),_[n]||(_[n]=e),C=C.slice(-E),o(e,t)})}},S=function(n,o){h[n]?e.nextTick(function(){o(null,h[n])}):_[n]?e.nextTick(function(){o(_[n])}):T(n,function(e,t){if(e)o(e);else{var r=R(t());h[n]=r,o(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=C.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),N[e]||(N[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},I=1,U={empty:function(){y=[],v={},x={},j=[],b=[],w=""},addPagesArray:function(e){b=e,f=(0,u.default)(e,w)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return y.pop()},enqueue:function(e){var n=(0,l.default)(e,w);if(!b.some(function(e){return e.path===n}))return!1;var o=1/I;I+=1,v[n]?v[n]+=1:v[n]=1,U.has(n)||y.unshift(n),y.sort(L);var t=f(n);return t.jsonName&&(x[t.jsonName]?x[t.jsonName]+=1+o:x[t.jsonName]=1+o,j.indexOf(t.jsonName)!==-1||g[t.jsonName]||j.unshift(t.jsonName)),t.componentChunkName&&(x[t.componentChunkName]?x[t.componentChunkName]+=1+o:x[t.componentChunkName]=1+o,j.indexOf(t.componentChunkName)!==-1||g[t.jsonName]||j.unshift(t.componentChunkName)),j.sort(O),P.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:x}},getPages:function(){return{pathArray:y,pathCount:v}},getPage:function(e){return f(e)},has:function(e){return y.some(function(n){return n===e})},getResourcesForPathname:function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,o=Array.isArray(n),t=0,n=o?n:n[Symbol.iterator]();;){var r;if(o){if(t>=n.length)break;r=n[t++]}else{if(t=n.next(),t.done)break;r=t.value}var a=r;a.unregister()}window.location.reload()}})),k=!1;if(N[n])return D(n,'Previously detected load failure for "'+n+'"'),o();var t=f(n);if(!t)return D(n,"A page wasn't found for \""+n+'"'),o();if(n=t.path,m[n])return e.nextTick(function(){o(m[n]),s.default.emit("onPostLoadPageResources",{page:t,pageResources:m[n]})}),m[n];s.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!t.layoutComponentChunkName||u)){m[n]={component:r,json:a,layout:u,page:t};var e={component:r,json:a,layout:u,page:t};o(e),s.default.emit("onPostLoadPageResources",{page:t,pageResources:e})}};return S(t.componentChunkName,function(e,n){e&&D(t.path,"Loading the component for "+t.path+" failed"),r=n,i()}),S(t.jsonName,function(e,n){e&&D(t.path,"Loading the JSON for "+t.path+" failed"),a=n,i()}),void(t.layoutComponentChunkName&&S(t.layout,function(e,n){e&&D(t.path,"Loading the Layout for "+t.path+" failed"),u=n,i()}))},peek:function(e){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(e){return y.length-y.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:U.getResourcesForPathname};n.default=U}).call(n,o(165))},406:function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-fix-unprotected-private-key-file-on-macos.json",path:"/blog/fix-unprotected-private-key-file-on-macos/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-fix-python-2-7-12-on-macos-sierra.json",path:"/blog/fix-python-2-7-12-on-macos-sierra/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-integrating-angularjs-django.json",path:"/blog/integrating-angularjs-django/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-8-tips-to-become-an-effective-remote-developer.json",path:"/blog/8-tips-to-become-an-effective-remote-developer/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-response-to-react-design-principles-interpretation-by-react-members.json",path:"/blog/response-to-react-design-principles-interpretation-by-react-members/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-react-driven-by-facebook-principle-concerns.json",path:"/blog/react-driven-by-facebook-principle-concerns/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-introduction-greedy-algorithms.json",path:"/blog/introduction-greedy-algorithms/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-javascript-web-frameworks-trends-2016.json",path:"/blog/javascript-web-frameworks-trends-2016/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-how-do-i-become-a-better-developer.json",path:"/blog/how-do-i-become-a-better-developer/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-thoughts-on-giving-my-first-tech-talk.json",path:"/blog/thoughts-on-giving-my-first-tech-talk/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-managing-front-end-components-with-bower.json",path:"/blog/managing-front-end-components-with-bower/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-basic-custom-domain-hosting-with-github-pages.json",path:"/blog/basic-custom-domain-hosting-with-github-pages/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog-enabling-scrolling-using-the-microsoft-natural-ergonomic-keyboard-4000-s-zoom-slider-on-ubuntu-1210.json",path:"/blog/enabling-scrolling-using-the-microsoft-natural-ergonomic-keyboard-4000s-zoom-slider-on-ubuntu-1210/"},{componentChunkName:"component---src-pages-blog-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"blog.json",path:"/blog/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},255:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,o=e.createResourceDownload,t=[],r=[],a=function(){var e=n();e&&(r.push(e),o(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},a=o(135),u=o(2),i=t(u),s=o(220),c=t(s),l=o(134),f=o(386),p=o(344),d=t(p),m=o(163),g=o(253),h=t(g),b=o(114),y=t(b),v=o(406),w=t(v),j=o(407),x=t(j),R=o(251),P=t(R),k=o(250),C=t(k),N=o(185),_=t(N);o(270),window.___history=h.default,window.___emitter=y.default,_.default.addPagesArray(w.default),_.default.addProdRequires(C.default),window.asyncRequires=C.default,window.___loader=_.default,window.matchPath=l.matchPath;var E=x.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(h.default.replace(n.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&s!==!1||(window.___history=e,s=!0,e.listen(function(e,n){O(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var o=n.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(t.length>0)return t[0];if(e){var r=e.location.pathname;if(r===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o(256);var t=function(e){function n(e){e.page.path===_.default.getPage(t).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(u),window.___history.push(o))}var o=(0,m.createLocation)(e,null,null,h.default.location),t=o.pathname,r=E[t];r&&(t=r.toPath);var a=window.location;if(a.pathname!==o.pathname||a.search!==o.search||a.hash!==o.hash){var u=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);_.default.getResourcesForPathname(t)?(clearTimeout(u),window.___history.push(o)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=t,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var s=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(e){var n=e.children;return i.default.createElement(l.Router,{history:h.default},n)},b=(0,l.withRouter)(P.default);_.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(p?p:g,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(b,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(o){e(o.history);var t=n?n:o;return _.default.getPage(t.location.pathname)?(0,u.createElement)(P.default,r({page:!0},t)):(0,u.createElement)(P.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},407:function(e,n){e.exports=[{fromPath:"/javascript-web-frameworks-trends-2016/",isPermanent:!0,redirectInBrowser:!0,toPath:"/blog/javascript-web-frameworks-trends-2016/"},{fromPath:"/javascript-web-frameworks-trends-2016",isPermanent:!0,redirectInBrowser:!0,toPath:"/blog/javascript-web-frameworks-trends-2016/"},{fromPath:"/how-do-i-become-a-better-developer/",isPermanent:!0,redirectInBrowser:!0,toPath:"/blog/how-do-i-become-a-better-developer/"},{fromPath:"/how-do-i-become-a-better-developer",isPermanent:!0,redirectInBrowser:!0,toPath:"/blog/how-do-i-become-a-better-developer/"},{fromPath:"/thoughts-on-giving-my-first-tech-talk/",isPermanent:!0,redirectInBrowser:!0,toPath:"/blog/thoughts-on-giving-my-first-tech-talk/"},{fromPath:"/thoughts-on-giving-my-first-tech-talk",isPermanent:!0,redirectInBrowser:!0,toPath:"/blog/thoughts-on-giving-my-first-tech-talk/"},{fromPath:"/managing-front-end-components-with-bower/",isPermanent:!0,redirectInBrowser:!0,toPath:"/blog/managing-front-end-components-with-bower/"},{fromPath:"/managing-front-end-components-with-bower",isPermanent:!0,redirectInBrowser:!0,toPath:"/blog/managing-front-end-components-with-bower/"}]},256:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o(114),a=t(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},186:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},344:function(e,n,o){!function(n,o){e.exports=o()}("domready",function(){var e,n=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(r,e=function(){for(o.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},6:function(e,n,o){"use strict";function t(){function e(e){var n=t.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,t=document.querySelector("head"),r=o.e,a=o.s;o.e=function(t,u){var i=!1,s=!0,c=function(e){u&&(u(o,e),u=null)};return!a&&n&&n[t]?void c(!0):(r(t,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,e(function(){i||(i=!0,a?a[t]=void 0:(n||(n={}),n[t]=!0),c(!0))}))))}}t()},380:function(e,n,o){"use strict";n.onRouteUpdate=function(e){var n=e.location;if("function"==typeof ga){if(n&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(e){return e.test(n.pathname)}))return;window.ga("set","page",n?n.pathname+n.search+n.hash:void 0),window.ga("send","pageview")}}},357:function(e,n,o){o(6),e.exports=function(e){return o.e(99219681209289,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(381)})})}},382:function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},408:function(e,n){function o(e){return e=e||Object.create(null),{on:function(n,o){(e[n]||(e[n]=[])).push(o)},off:function(n,o){e[n]&&e[n].splice(e[n].indexOf(o)>>>0,1)},emit:function(n,o){(e[n]||[]).slice().map(function(e){e(o)}),(e["*"]||[]).slice().map(function(e){e(n,o)})}}}e.exports=o},165:function(e,n){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===t||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&i())}function i(){if(!g){var e=r(u);g=!0;for(var n=m.length;n;){for(d=m,m=[];++h<n;)d&&d[h].run();h=-1,n=m.length}d=null,g=!1,a(e)}}function s(e,n){this.fun=e,this.array=n}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(e){l=o}try{f="function"==typeof clearTimeout?clearTimeout:t}catch(e){f=t}}();var d,m=[],g=!1,h=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];m.push(new s(e,n)),1!==m.length||g||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},508:function(e,n){"use strict";function o(e,n){for(var o in e)if(!(o in n))return!0;for(var t in n)if(e[t]!==n[t])return!0;return!1}n.__esModule=!0,n.default=function(e,n,t){return o(e.props,n)||o(e.state,t)},e.exports=n.default},359:function(e,n,o){o(6),e.exports=function(e){return o.e(0x8a675b55feca,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(258)})})}},360:function(e,n,o){o(6),e.exports=function(e){return o.e(35783957827783,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(259)})})}},361:function(e,n,o){o(6),e.exports=function(e){return o.e(0x620f737b6699,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o(260)})})}}});
//# sourceMappingURL=app-a77f5824cda1999bf146.js.map