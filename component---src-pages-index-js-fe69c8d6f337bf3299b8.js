webpackJsonp([35783957827783],[,,,,,,,,,,function(e,t,n){function r(e,t){for(var n=e.length;n--;)if(o(e[n][0],t))return n;return-1}var o=n(99);e.exports=r},function(e,t,n){function r(e,t){var n=e.__data__;return o(t)?n["string"==typeof t?"string":"hash"]:n.map}var o=n(82);e.exports=r},function(e,t,n){var r=n(29),o=r(Object,"create");e.exports=o},,,,,function(e,t,n){var r=n(18),o=r.Symbol;e.exports=o},function(e,t,n){var r=n(73),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){function r(e){return"symbol"==typeof e||a(e)&&o(e)==i}var o=n(28),a=n(102),i="[object Symbol]";e.exports=r},,,,,,,,function(e,t,n){function r(e){return null==e?void 0===e?u:c:l&&l in Object(e)?a(e):i(e)}var o=n(17),a=n(74),i=n(95),c="[object Null]",u="[object Undefined]",l=o?o.toStringTag:void 0;e.exports=r},function(e,t,n){function r(e,t){var n=a(e,t);return o(n)?n:void 0}var o=n(69),a=n(75);e.exports=r},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),a=r(o),i=n(109),c=r(i),u=function(e){var t="https://rafael.do",n={avatar:t+"/public/images/blog/avatar.jpg"},r="/"===e.location.pathname?"":e.location.pathname,o=""+e.title+("/"===e.location.pathname?"":" | rafael.do");return a.default.createElement(c.default,null,a.default.createElement("html",{prefix:"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#",itemScope:!0,itemType:"http://schema.org/WebSite",lang:e.language||"en"}),a.default.createElement("title",null,o),a.default.createElement("meta",{name:"description",content:e.description}),a.default.createElement("meta",{property:"og:type",content:"article"}),a.default.createElement("meta",{name:"twitter:card",content:e.twitterCard||"summary"}),a.default.createElement("meta",{name:"twitter:site",content:"@rebelliard"}),a.default.createElement("meta",{name:"twitter:creator",content:"@rebelliard"}),a.default.createElement("meta",{property:"fb:profile_id",content:"100007638546934"}),a.default.createElement("meta",{property:"og:site_name",content:e.title}),a.default.createElement("meta",{property:"og:publisher",content:"https://www.facebook.com/rebelliard"}),a.default.createElement("meta",{property:"article:publisher",content:"https://www.facebook.com/rebelliard"}),a.default.createElement("meta",{property:"article:author",itemProp:"author",content:"https://www.facebook.com/rebelliard"}),a.default.createElement("meta",{name:"twitter:title",content:e.title}),a.default.createElement("meta",{property:"og:title",content:e.title}),a.default.createElement("link",{rel:"canonical",href:""+t+r}),a.default.createElement("meta",{name:"twitter:url",content:""+t+r}),a.default.createElement("meta",{property:"og:url",content:""+t+r}),a.default.createElement("meta",{name:"twitter:description",content:e.description}),a.default.createElement("meta",{property:"og:description",content:e.description}),e.image?a.default.createElement("meta",{name:"og:image",content:n.avatar}):a.default.createElement("meta",{name:"og:image",content:e.image}),e.image?a.default.createElement("meta",{name:"twitter:image:src",content:n.avatar}):a.default.createElement("meta",{name:"twitter:image:src",content:e.image}),a.default.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/public/favicon/apple-icon-180x180.png"}),a.default.createElement("link",{rel:"apple-touch-icon-precomposed",sizes:"144x144",href:"/public/favicon/apple-icon-144x144.png"}),a.default.createElement("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/public/favicon/android-icon-192x192.png"}),a.default.createElement("link",{rel:"shortcut icon",href:"/public/favicon/favicon.ico"}),a.default.createElement("link",{rel:"manifest",href:"/public/favicon/manifest.json"}),a.default.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),a.default.createElement("meta",{name:"theme-color",content:"#22297c"}),a.default.createElement("meta",{name:"msapplication-TileColor",content:"#22297c"}),a.default.createElement("meta",{name:"msapplication-TileImage",content:t+"/public/favicon/ms-icon-144x144.png"}),a.default.createElement("meta",{name:"msapplication-config",content:"/public/favicon/browserconfig.xml"}))};t.default=u,e.exports=t.default},,,,,,,,function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=i.call(e),t=i.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var s=c(e),p=c(t)}catch(e){return!1}if(s.length!=p.length)return!1;for(s.sort(),p.sort(),a=s.length-1;a>=0;a--)if(s[a]!=p[a])return!1;for(a=s.length-1;a>=0;a--)if(f=s[a],!l(e[f],t[f],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,c=n(61),u=n(60),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(76),a=n(77),i=n(78),c=n(79),u=n(80);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=c,r.prototype.set=u,e.exports=r},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(84),a=n(85),i=n(86),c=n(87),u=n(88);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=c,r.prototype.set=u,e.exports=r},function(e,t,n){var r=n(29),o=n(18),a=r(o,"Map");e.exports=a},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(89),a=n(90),i=n(91),c=n(92),u=n(93);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=i,r.prototype.has=c,r.prototype.set=u,e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},function(e,t,n){function r(e,t){t=o(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[a(t[n++])];return n&&n==r?e:void 0}var o=n(71),a=n(97);e.exports=r},function(e,t,n){function r(e){if(!i(e)||a(e))return!1;var t=o(e)?T:l;return t.test(c(e))}var o=n(101),a=n(83),i=n(30),c=n(98),u=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,f=Function.prototype,s=Object.prototype,p=f.toString,d=s.hasOwnProperty,T=RegExp("^"+p.call(d).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},function(e,t,n){function r(e){if("string"==typeof e)return e;if(i(e))return a(e,r)+"";if(c(e))return f?f.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}var o=n(17),a=n(67),i=n(19),c=n(20),u=1/0,l=o?o.prototype:void 0,f=l?l.toString:void 0;e.exports=r},function(e,t,n){function r(e,t){return o(e)?e:a(e,t)?[e]:i(c(e))}var o=n(19),a=n(81),i=n(96),c=n(104);e.exports=r},function(e,t,n){var r=n(18),o=r["__core-js_shared__"];e.exports=o},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t,n){function r(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[u]=n:delete e[u]),o}var o=n(17),a=Object.prototype,i=a.hasOwnProperty,c=a.toString,u=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},function(e,t,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(12);e.exports=r},function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},function(e,t,n){function r(e){var t=this.__data__;if(o){var n=t[e];return n===a?void 0:n}return c.call(t,e)?t[e]:void 0}var o=n(12),a="__lodash_hash_undefined__",i=Object.prototype,c=i.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){var t=this.__data__;return o?void 0!==t[e]:i.call(t,e)}var o=n(12),a=Object.prototype,i=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o&&void 0===t?a:t,this}var o=n(12),a="__lodash_hash_undefined__";e.exports=r},function(e,t,n){function r(e,t){if(o(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!a(e))||(c.test(e)||!i.test(e)||null!=t&&e in Object(t))}var o=n(19),a=n(20),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;e.exports=r},function(e,t){function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},function(e,t,n){function r(e){return!!a&&a in e}var o=n(72),a=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():i.call(t,n,1),--this.size,!0}var o=n(10),a=Array.prototype,i=a.splice;e.exports=r},function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]}var o=n(10);e.exports=r},function(e,t,n){function r(e){return o(this.__data__,e)>-1}var o=n(10);e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var o=n(10);e.exports=r},function(e,t,n){function r(){this.size=0,this.__data__={hash:new o,map:new(i||a),string:new o}}var o=n(63),a=n(64),i=n(65);e.exports=r},function(e,t,n){function r(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}var o=n(11);e.exports=r},function(e,t,n){function r(e){return o(this,e).get(e)}var o=n(11);e.exports=r},function(e,t,n){function r(e){return o(this,e).has(e)}var o=n(11);e.exports=r},function(e,t,n){function r(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var o=n(11);e.exports=r},function(e,t,n){function r(e){var t=o(e,function(e){return n.size===a&&n.clear(),e}),n=t.cache;return t}var o=n(103),a=500;e.exports=r},function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},function(e,t,n){var r=n(94),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)}),t});e.exports=i},function(e,t,n){function r(e){if("string"==typeof e||o(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}var o=n(20),a=1/0;e.exports=r},function(e,t){function n(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,o=r.toString;e.exports=n},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t,n){function r(e,t,n){var r=null==e?void 0:o(e,t);return void 0===r?n:r}var o=n(68);e.exports=r},function(e,t,n){function r(e){if(!a(e))return!1;var t=o(e);return t==c||t==u||t==i||t==l}var o=n(28),a=n(30),i="[object AsyncFunction]",c="[object Function]",u="[object GeneratorFunction]",l="[object Proxy]";e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(a);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(r.Cache||o),n}var o=n(66),a="Expected a function";r.Cache=o,e.exports=r},function(e,t,n){function r(e){return null==e?"":o(e)}var o=n(70);e.exports=r},,,,,function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),s=r(f),p=n(8),d=r(p),T=n(111),E=r(T),h=n(59),m=r(h),y=n(110),v=n(31),A=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return c(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,m.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case v.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TAG_NAMES.TITLE:return u({},o,(t={},t[r.type]=i,t.titleAttributes=u({},a),t));case v.TAG_NAMES.BODY:return u({},o,{bodyAttributes:u({},a)});case v.TAG_NAMES.HTML:return u({},o,{htmlAttributes:u({},a)})}return u({},o,(n={},n[r.type]=u({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,c=o(a,["children"]),u=(0,y.convertReactPropstoHtmlAttributes)(c);switch(n.warnOnInvalidChildren(e,i),e.type){case v.TAG_NAMES.LINK:case v.TAG_NAMES.META:case v.TAG_NAMES.NOSCRIPT:case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=u({},r);return n&&(a=this.mapChildrenToProps(n,a)),s.default.createElement(e,a)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},_=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(b),g=A(_);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),c=r(i),u=n(5),l=r(u),f=n(31),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=m(e,f.TAG_NAMES.TITLE),n=m(e,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=m(e,f.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return m(e,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[f.TAG_NAMES.BASE]}).map(function(e){return e[f.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},h=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();t.indexOf(u)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===f.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(c)===-1||c!==f.TAG_PROPERTIES.INNER_HTML&&c!==f.TAG_PROPERTIES.CSS_TEXT&&c!==f.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=(0,l.default)({},r[c],o[c]);r[c]=u}return e},[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([f.TAG_PROPERTIES.HREF],e),bodyAttributes:T(f.ATTRIBUTE_NAMES.BODY,e),defer:m(e,f.HELMET_PROPS.DEFER),encode:m(e,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(f.ATTRIBUTE_NAMES.HTML,e),linkTags:h(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],e),metaTags:h(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:h(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:T(f.ATTRIBUTE_NAMES.TITLE,e)}},v=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){v(t)},0)}}(),A=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||v:e.requestAnimationFrame||v,_="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,O=function(e){S&&_(S),e.defer?S=b(function(){w(e,function(){S=null})}):(w(e),S=null)},w=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,p=e.title,d=e.titleAttributes;M(f.TAG_NAMES.BODY,r),M(f.TAG_NAMES.HTML,o),R(p,d);var T={baseTag:C(f.TAG_NAMES.BASE,n),linkTags:C(f.TAG_NAMES.LINK,a),metaTags:C(f.TAG_NAMES.META,i),noscriptTags:C(f.TAG_NAMES.NOSCRIPT,c),scriptTags:C(f.TAG_NAMES.SCRIPT,l),styleTags:C(f.TAG_NAMES.STYLE,s)},E={},h={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(h[e]=T[e].oldTags)}),t&&t(),u(e,E,h)},P=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),M(f.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),o.indexOf(u)===-1&&o.push(u);var s=a.indexOf(u);s!==-1&&a.splice(s,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,i.join(","))}},C=function(e,t){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},x=function(e,t,n,r){var o=I(n),a=P(t);return o?"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(a,r)+"</"+e+">":"<"+e+" "+f.HELMET_ATTRIBUTE+'="true">'+s(a,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===f.TAG_PROPERTIES.INNER_HTML||e===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=f.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.REACT_TAG_MAP[n]||n]=e[n],t},t)},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[f.HELMET_ATTRIBUTE]=!0,r),a=j(n,o);return[c.default.createElement(f.TAG_NAMES.TITLE,a,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=f.REACT_TAG_MAP[e]||e;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),c.default.createElement(e,o)})},H=function(e,t,n){switch(e){case f.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return x(e,t.title,t.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return N(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,p=void 0===s?"":s,d=e.titleAttributes;return{base:H(f.TAG_NAMES.BASE,t,r),bodyAttributes:H(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(f.ATTRIBUTE_NAMES.HTML,o,r),link:H(f.TAG_NAMES.LINK,a,r),meta:H(f.TAG_NAMES.META,i,r),noscript:H(f.TAG_NAMES.NOSCRIPT,c,r),script:H(f.TAG_NAMES.SCRIPT,u,r),style:H(f.TAG_NAMES.STYLE,l,r),title:H(f.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=L,t.handleClientStateChange=O,t.mapStateOnServer=D,t.reducePropsToState=y,t.requestAnimationFrame=b,t.warn=g}).call(t,function(){return this}())},function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function p(){T=e(d.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!s(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return l.createElement(c,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(c)+")",E.canUseDOM=f.canUseDOM,E}}var u=n(2),l=r(u),f=r(n(62)),s=r(n(113));e.exports=c},,function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var l=a[u];if(!c(l))return!1;var f=e[l],s=t[l];if(o=n?n.call(r,f,s,l):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var c=n(2),u=r(c),l=n(127),f=r(l),s=n(100),p=r(s),d=n(51),T=r(d),E=function(e){function t(){var n,r,i,c=this;o(this,t);for(var l=arguments.length,s=Array(l),d=0;d<l;d++)s[d]=arguments[d];return n=r=a(this,e.call.apply(e,[this].concat(s))),r.state={},r.toggleDetails=function(e){e.preventDefault(),r.setState({showDetails:!r.state.showDetails})},r.Details=function(){return r.state.showDetails?u.default.createElement("div",null,u.default.createElement("article",{className:"detail"},u.default.createElement("p",null,"I live in the Dominican Republic and I enjoy working with things like Node.js, React.js, Webpack, Gulp, GraphQL, Firebase, PostgreSQL, Jest, and Serverless."),u.default.createElement("p",null,"I'm passionate about working smart and elevating the developer experience, to facilitate building great user experiences that ship on time."),u.default.createElement("p",null,"I occassionally share my thoughts on"," ",u.default.createElement(f.default,{to:"/blog/"},"my blog")," and"," ",u.default.createElement(f.default,{to:"https://twitter.com/rebelliard"},"tweet"),".")),u.default.createElement("article",{className:"detail"},u.default.createElement("h3",null,"Currently working on"),u.default.createElement("ul",null,u.default.createElement("li",null,"Secret stuff at"," ",u.default.createElement("a",{href:"https://vivial.net/",target:"_blank",rel:"noopener noreferrer"
},"Vivial")," (day job)."),u.default.createElement("li",null,"A synced video-watching app for long-distance partners."))),u.default.createElement("article",{className:"detail"},u.default.createElement("h3",null,"Trying to do more of"),u.default.createElement("p",null,"I like speaking about things I've learned and I seek opportunities to offer mentoring. My last talk was on"," ",u.default.createElement("a",{href:"https://www.linkedin.com/pulse/python-dominicana-059-django-migrations-rafael-e-belliard",target:"_blank",rel:"noopener noreferrer"},"Django Migrations"),", and I was a coach for"," ",u.default.createElement("a",{href:"https://djangogirls.org/santodomingo1/",target:"_blank",rel:"noopener noreferrer"},"Django Girls Santo Domingo"),". If you're interested in having me speak or participate at your next event,"," ",u.default.createElement("a",{href:"mailto:me@rafael.do"},"drop me a line"),"!"))):null},r.Main=function(){var e=(0,p.default)(r,"props.data.site.siteMetadata.title"),t=r.props.location;return u.default.createElement("main",{id:"main",className:"section main"},u.default.createElement(T.default,{title:e,description:"Personal website of Rafael Belliard.",location:t}),u.default.createElement("article",{className:"hero"},u.default.createElement("h2",null,"My name is Rafael Belliard and I make software–typically using JavaScript."),u.default.createElement("p",null,"I develop software architectures, backend services, frontend code, APIs and databases."," ",r.state.showDetails?null:u.default.createElement("a",{onClick:r.toggleDetails},"More about me."))),u.default.createElement(c.Details,null))},i=n,a(r,i)}return i(t,e),t.prototype.render=function(){return u.default.createElement(this.Main,null)},t}(u.default.Component);t.default=E;t.pageQuery="** extracted graphql fragment **"}]);
//# sourceMappingURL=component---src-pages-index-js-fe69c8d6f337bf3299b8.js.map