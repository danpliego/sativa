(self.webpackChunkla_hora_sat=self.webpackChunkla_hora_sat||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,M="function"==typeof Map,n="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,u){if(e===u)return!0;if(e&&u&&"object"==typeof e&&"object"==typeof u){if(e.constructor!==u.constructor)return!1;var i,N,c,j;if(Array.isArray(e)){if((i=e.length)!=u.length)return!1;for(N=i;0!=N--;)if(!a(e[N],u[N]))return!1;return!0}if(M&&e instanceof Map&&u instanceof Map){if(e.size!==u.size)return!1;for(j=e.entries();!(N=j.next()).done;)if(!u.has(N.value[0]))return!1;for(j=e.entries();!(N=j.next()).done;)if(!a(N.value[1],u.get(N.value[0])))return!1;return!0}if(n&&e instanceof Set&&u instanceof Set){if(e.size!==u.size)return!1;for(j=e.entries();!(N=j.next()).done;)if(!u.has(N.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(u)){if((i=e.length)!=u.length)return!1;for(N=i;0!=N--;)if(e[N]!==u[N])return!1;return!0}if(e.constructor===RegExp)return e.source===u.source&&e.flags===u.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===u.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===u.toString();if((i=(c=Object.keys(e)).length)!==Object.keys(u).length)return!1;for(N=i;0!=N--;)if(!Object.prototype.hasOwnProperty.call(u,c[N]))return!1;if(t&&e instanceof Element)return!1;for(N=i;0!=N--;)if(("_owner"!==c[N]&&"__v"!==c[N]&&"__o"!==c[N]||!e.$$typeof)&&!a(e[c[N]],u[c[N]]))return!1;return!0}return e!=e&&u!=u}e.exports=function(e,t){try{return a(e,t)}catch(M){if((M.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw M}}},4839:function(e,t,M){"use strict";var n,r=M(7294),a=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function u(e,t,M){return t in e?Object.defineProperty(e,t,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[t]=M,e}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,M){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==M&&"function"!=typeof M)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var N,c=[];function j(){N=e(c.map((function(e){return e.props}))),o.canUseDOM?t(N):M&&(N=M(N))}var o=function(e){var t,M;function r(){return e.apply(this,arguments)||this}M=e,(t=r).prototype=Object.create(M.prototype),t.prototype.constructor=t,t.__proto__=M,r.peek=function(){return N},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=N;return N=void 0,c=[],e};var u=r.prototype;return u.UNSAFE_componentWillMount=function(){c.push(this),j()},u.componentDidUpdate=function(){j()},u.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),j()},u.render=function(){return a.createElement(n,this.props)},r}(r.PureComponent);return u(o,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),u(o,"canUseDOM",i),o}}},9357:function(e,t,M){"use strict";M.r(t),M.d(t,{default:function(){return Oe}});var n,r,a,u,i=M(7294),N=M.p+"static/logo-6a16aaa0f3d22f7e2e4f0af0843e71f2.svg",c=function(){var e=i.useState(0),t=e[0],M=e[1],n=i.useState(!1),r=n[0],a=(n[1],function(){var e=window.pageYOffset;M(e)});return i.useEffect((function(){return window.addEventListener("scroll",a,{passive:!0}),function(){window.removeEventListener("scroll",a)}}),[]),i.createElement("header",{className:t>0?"sticky":null},i.createElement("nav",{className:"navbar navbar-expand-lg navbar-light mt-3"},i.createElement("div",{className:"container"},i.createElement("div",{className:"d-lg-none",style:{width:"100%",textAlign:"center"}},i.createElement("a",{className:"navbar-brand d-lg-none",href:"/"},i.createElement("img",{alt:"La Hora Sat",width:"100",src:N}))),i.createElement("div",{className:r?"navbar-collapse justify-content-center":"collapse navbar-collapse justify-content-center"},i.createElement("ul",{className:"d-flex align-items-center navbar-nav"},i.createElement("li",{className:"nav-item mx-5"},i.createElement("a",{href:"/"},i.createElement("img",{alt:"La Hora Sat",width:"100",src:N}))))))))},j=M(5697),o=M.n(j),T=M(4839),I=M.n(T),D=M(2993),y=M.n(D),g=M(6494),l=M.n(g),s="bodyAttributes",A="htmlAttributes",E="titleAttributes",z={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(z).map((function(e){return z[e]})),"charset"),x="cssText",L="href",f="http-equiv",d="innerHTML",m="itemprop",p="name",S="property",C="rel",w="src",U="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Q="defaultTitle",h="defer",b="encodeSpecialCharacters",Y="onChangeClientState",v="titleTemplate",P=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),R=[z.NOSCRIPT,z.SCRIPT,z.STYLE],H="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var M=0;M<t.length;M++){var n=t[M];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,M,n){return M&&e(t.prototype,M),n&&e(t,n),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var M=arguments[t];for(var n in M)Object.prototype.hasOwnProperty.call(M,n)&&(e[n]=M[n])}return e},F=function(e,t){var M={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(M[n]=e[n]);return M},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=ee(e,z.TITLE),M=ee(e,v);if(M&&t)return M.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ee(e,Q);return t||n||void 0},W=function(e){return ee(e,Y)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[z.BASE]})).map((function(e){return e[z.BASE]})).reverse().reduce((function(t,M){if(!t.length)for(var n=Object.keys(M),r=0;r<n.length;r++){var a=n[r].toLowerCase();if(-1!==e.indexOf(a)&&M[a])return t.concat(M)}return t}),[])},$=function(e,t,M){var n={};return M.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,M){var r={};M.filter((function(e){for(var M=void 0,a=Object.keys(e),u=0;u<a.length;u++){var i=a[u],N=i.toLowerCase();-1===t.indexOf(N)||M===C&&"canonical"===e[M].toLowerCase()||N===C&&"stylesheet"===e[N].toLowerCase()||(M=N),-1===t.indexOf(i)||i!==d&&i!==x&&i!==m||(M=i)}if(!M||!e[M])return!1;var c=e[M].toLowerCase();return n[M]||(n[M]={}),r[M]||(r[M]={}),!n[M][c]&&(r[M][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(r),u=0;u<a.length;u++){var i=a[u],N=l()({},n[i],r[i]);n[i]=N}return e}),[]).reverse()},ee=function(e,t){for(var M=e.length-1;M>=0;M--){var n=e[M];if(n.hasOwnProperty(t))return n[t]}return null},te=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){te(e)}),0)}),Me=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:M.g.requestAnimationFrame||te,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Me:M.g.cancelAnimationFrame||Me,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,ie=function(e,t){var M=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,a=e.linkTags,u=e.metaTags,i=e.noscriptTags,N=e.onChangeClientState,c=e.scriptTags,j=e.styleTags,o=e.title,T=e.titleAttributes;je(z.BODY,n),je(z.HTML,r),ce(o,T);var I={baseTag:oe(z.BASE,M),linkTags:oe(z.LINK,a),metaTags:oe(z.META,u),noscriptTags:oe(z.NOSCRIPT,i),scriptTags:oe(z.SCRIPT,c),styleTags:oe(z.STYLE,j)},D={},y={};Object.keys(I).forEach((function(e){var t=I[e],M=t.newTags,n=t.oldTags;M.length&&(D[e]=M),n.length&&(y[e]=I[e].oldTags)})),t&&t(),N(e,D,y)},Ne=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=Ne(e)),je(z.TITLE,t)},je=function(e,t){var M=document.getElementsByTagName(e)[0];if(M){for(var n=M.getAttribute(H),r=n?n.split(","):[],a=[].concat(r),u=Object.keys(t),i=0;i<u.length;i++){var N=u[i],c=t[N]||"";M.getAttribute(N)!==c&&M.setAttribute(N,c),-1===r.indexOf(N)&&r.push(N);var j=a.indexOf(N);-1!==j&&a.splice(j,1)}for(var o=a.length-1;o>=0;o--)M.removeAttribute(a[o]);r.length===a.length?M.removeAttribute(H):M.getAttribute(H)!==u.join(",")&&M.setAttribute(H,u.join(","))}},oe=function(e,t){var M=document.head||document.querySelector(z.HEAD),n=M.querySelectorAll(e+"["+"data-react-helmet]"),r=Array.prototype.slice.call(n),a=[],u=void 0;return t&&t.length&&t.forEach((function(t){var M=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===d)M.innerHTML=t.innerHTML;else if(n===x)M.styleSheet?M.styleSheet.cssText=t.cssText:M.appendChild(document.createTextNode(t.cssText));else{var i=void 0===t[n]?"":t[n];M.setAttribute(n,i)}M.setAttribute(H,"true"),r.some((function(e,t){return u=t,M.isEqualNode(e)}))?r.splice(u,1):a.push(M)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return M.appendChild(e)})),{oldTags:r,newTags:a}},Te=function(e){return Object.keys(e).reduce((function(t,M){var n=void 0!==e[M]?M+'="'+e[M]+'"':""+M;return t?t+" "+n:n}),"")},Ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,M){return t[k[M]||M]=e[M],t}),t)},De=function(e,t,M){switch(e){case z.TITLE:return{toComponent:function(){return e=t.title,M=t.titleAttributes,(n={key:e})[H]=!0,r=Ie(M,n),[i.createElement(z.TITLE,r,e)];var e,M,n,r},toString:function(){return function(e,t,M,n){var r=Te(M),a=Ne(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+q(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,M)}};case s:case A:return{toComponent:function(){return Ie(t)},toString:function(){return Te(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,M){var n,r=((n={key:M})[H]=!0,n);return Object.keys(t).forEach((function(e){var M=k[e]||e;if(M===d||M===x){var n=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[M]=t[e]})),i.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,M){return t.reduce((function(t,n){var r=Object.keys(n).filter((function(e){return!(e===d||e===x)})).reduce((function(e,t){var r=void 0===n[t]?t:t+'="'+q(n[t],M)+'"';return e?e+" "+r:r}),""),a=n.innerHTML||n.cssText||"",u=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(u?"/>":">"+a+"</"+e+">")}),"")}(e,t,M)}}}},ye=function(e){var t=e.baseTag,M=e.bodyAttributes,n=e.encode,r=e.htmlAttributes,a=e.linkTags,u=e.metaTags,i=e.noscriptTags,N=e.scriptTags,c=e.styleTags,j=e.title,o=void 0===j?"":j,T=e.titleAttributes;return{base:De(z.BASE,t,n),bodyAttributes:De(s,M,n),htmlAttributes:De(A,r,n),link:De(z.LINK,a,n),meta:De(z.META,u,n),noscript:De(z.NOSCRIPT,i,n),script:De(z.SCRIPT,N,n),style:De(z.STYLE,c,n),title:De(z.TITLE,{title:o,titleAttributes:T},n)}},ge=I()((function(e){return{baseTag:X([L,U],e),bodyAttributes:K(s,e),defer:ee(e,h),encode:ee(e,b),htmlAttributes:K(A,e),linkTags:$(z.LINK,[C,L],e),metaTags:$(z.META,[p,O,f,S,m],e),noscriptTags:$(z.NOSCRIPT,[d],e),onChangeClientState:W(e),scriptTags:$(z.SCRIPT,[w,d],e),styleTags:$(z.STYLE,[x],e),title:G(e),titleAttributes:K(E,e)}}),(function(e){ue&&re(ue),e.defer?ue=ne((function(){ie(e,(function(){ue=null}))})):(ie(e),ue=null)}),ye)((function(){return null})),le=(r=ge,u=a=function(e){function t(){return B(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case z.SCRIPT:case z.NOSCRIPT:return{innerHTML:t};case z.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,M=e.child,n=e.arrayTypeChildren,r=e.newChildProps,a=e.nestedChildren;return J({},n,((t={})[M.type]=[].concat(n[M.type]||[],[J({},r,this.mapNestedChildrenToProps(M,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,M,n=e.child,r=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(n.type){case z.TITLE:return J({},r,((t={})[n.type]=u,t.titleAttributes=J({},a),t));case z.BODY:return J({},r,{bodyAttributes:J({},a)});case z.HTML:return J({},r,{htmlAttributes:J({},a)})}return J({},r,((M={})[n.type]=J({},a),M))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var M=J({},t);return Object.keys(e).forEach((function(t){var n;M=J({},M,((n={})[t]=e[t],n))})),M},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var M=this,n={};return i.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,a=r.children,u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,M){return t[P[M]||M]=e[M],t}),t)}(F(r,["children"]));switch(M.warnOnInvalidChildren(e,a),e.type){case z.LINK:case z.META:case z.NOSCRIPT:case z.SCRIPT:case z.STYLE:n=M.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:u,nestedChildren:a});break;default:t=M.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,M=F(e,["children"]),n=J({},M);return t&&(n=this.mapChildrenToProps(t,n)),i.createElement(r,n)},_(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(i.Component),a.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=r.peek,a.rewind=function(){var e=r.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},u);le.renderStatic=le.rewind;var se=M.p+"static/logo-footer-8358d9b7c9c362395ac090f54105fd20.svg",Ae=function(){return i.createElement("footer",{className:"section section-purple text-center"},i.createElement("div",{className:"mb-3"},i.createElement("img",{alt:"La Hora Sat",width:"100",src:se})),i.createElement("div",{className:"d-flex mb-3 justify-content-center"},i.createElement("a",{target:"_blank",className:"footer-social-link",href:"https://www.instagram.com/lahorasat/"},i.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI1LjE3NzUgNC45OTczNUMyNi45NjAyIDUuMDAyNjcgMjguNjY4NCA1LjcxMzIxIDI5LjkyODkgNi45NzM3N0MzMS4xODk1IDguMjM0MzQgMzEuOSA5Ljk0MjUgMzEuOTA1NCAxMS43MjUyVjI1LjE3OTVDMzEuOSAyNi45NjIyIDMxLjE4OTUgMjguNjcwMyAyOS45Mjg5IDI5LjkzMDlDMjguNjY4NCAzMS4xOTE1IDI2Ljk2MDIgMzEuOTAyIDI1LjE3NzUgMzEuOTA3M0gxMS43MjMyQzkuOTQwNTUgMzEuOTAyIDguMjMyMzggMzEuMTkxNSA2Ljk3MTgyIDI5LjkzMDlDNS43MTEyNSAyOC42NzAzIDUuMDAwNzIgMjYuOTYyMiA0Ljk5NTQgMjUuMTc5NVYxMS43MjUyQzUuMDAwNzIgOS45NDI1IDUuNzExMjUgOC4yMzQzNCA2Ljk3MTgyIDYuOTczNzdDOC4yMzIzOCA1LjcxMzIxIDkuOTQwNTUgNS4wMDI2NyAxMS43MjMyIDQuOTk3MzVIMjUuMTc3NVpNMjUuMTc3NSAyLjMwNjY0SDExLjcyMzJDNi41NDI5MyAyLjMwNjY0IDIuMzA0NjkgNi41NDQ4OCAyLjMwNDY5IDExLjcyNTJWMjUuMTc5NUMyLjMwNDY5IDMwLjM1OTggNi41NDI5MyAzNC41OTggMTEuNzIzMiAzNC41OThIMjUuMTc3NUMzMC4zNTc4IDM0LjU5OCAzNC41OTYxIDMwLjM1OTggMzQuNTk2MSAyNS4xNzk1VjExLjcyNTJDMzQuNTk2MSA2LjU0NDg4IDMwLjM1NzggMi4zMDY2NCAyNS4xNzc1IDIuMzA2NjRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjcuMTk3OSAxMS43MjQ5QzI2Ljc5ODcgMTEuNzI0OSAyNi40MDg1IDExLjYwNjUgMjYuMDc2NiAxMS4zODQ4QzI1Ljc0NDcgMTEuMTYzIDI1LjQ4NjEgMTAuODQ3OCAyNS4zMzMzIDEwLjQ3OUMyNS4xODA2IDEwLjExMDIgMjUuMTQwNiA5LjcwNDQ1IDI1LjIxODUgOS4zMTI5NkMyNS4yOTYzIDguOTIxNDYgMjUuNDg4NiA4LjU2MTg1IDI1Ljc3MDggOC4yNzk2QzI2LjA1MzEgNy45OTczNSAyNi40MTI3IDcuODA1MTMgMjYuODA0MiA3LjcyNzI2QzI3LjE5NTcgNy42NDkzOCAyNy42MDE1IDcuNjg5MzUgMjcuOTcwMiA3Ljg0MjFDMjguMzM5IDcuOTk0ODYgMjguNjU0MiA4LjI1MzU0IDI4Ljg3NiA4LjU4NTQzQzI5LjA5NzcgOC45MTczMiAyOS4yMTYxIDkuMzA3NTIgMjkuMjE2MSA5LjcwNjY5QzI5LjIxNjcgOS45NzE4OCAyOS4xNjQ5IDEwLjIzNDYgMjkuMDYzNiAxMC40Nzk3QzI4Ljk2MjQgMTAuNzI0OCAyOC44MTM4IDEwLjk0NzUgMjguNjI2MyAxMS4xMzUxQzI4LjQzODcgMTEuMzIyNiAyOC4yMTYgMTEuNDcxMiAyNy45NzA5IDExLjU3MjRDMjcuNzI1OCAxMS42NzM3IDI3LjQ2MzEgMTEuNzI1NSAyNy4xOTc5IDExLjcyNDlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTguNDUxOCAxMy4wNzAxQzE5LjUxNjIgMTMuMDcwMSAyMC41NTY4IDEzLjM4NTggMjEuNDQxOSAxMy45NzcyQzIyLjMyNyAxNC41Njg2IDIzLjAxNjggMTUuNDA5MSAyMy40MjQyIDE2LjM5MjZDMjMuODMxNiAxNy4zNzYgMjMuOTM4MSAxOC40NTgyIDIzLjczMDUgMTkuNTAyMkMyMy41MjI4IDIwLjU0NjMgMjMuMDEwMiAyMS41MDUzIDIyLjI1NzUgMjIuMjU4QzIxLjUwNDggMjMuMDEwNyAyMC41NDU4IDIzLjUyMzMgMTkuNTAxOCAyMy43MzFDMTguNDU3NyAyMy45Mzg2IDE3LjM3NTYgMjMuODMyIDE2LjM5MjEgMjMuNDI0N0MxNS40MDg2IDIzLjAxNzMgMTQuNTY4MSAyMi4zMjc1IDEzLjk3NjcgMjEuNDQyNEMxMy4zODUzIDIwLjU1NzMgMTMuMDY5NiAxOS41MTY3IDEzLjA2OTYgMTguNDUyMkMxMy4wNzExIDE3LjAyNTMgMTMuNjM4NyAxNS42NTcyIDE0LjY0NzcgMTQuNjQ4MkMxNS42NTY3IDEzLjYzOTIgMTcuMDI0OCAxMy4wNzE2IDE4LjQ1MTggMTMuMDcwMVpNMTguNDUxOCAxMC4zNzk0QzE2Ljg1NTEgMTAuMzc5NCAxNS4yOTQzIDEwLjg1MjkgMTMuOTY2NyAxMS43Mzk5QzEyLjYzOTIgMTIuNjI3IDExLjYwNDQgMTMuODg3OCAxMC45OTM0IDE1LjM2MjlDMTAuMzgyNCAxNi44MzggMTAuMjIyNSAxOC40NjEyIDEwLjUzNCAyMC4wMjcyQzEwLjg0NTUgMjEuNTkzMiAxMS42MTQ0IDIzLjAzMTYgMTIuNzQzNCAyNC4xNjA2QzEzLjg3MjQgMjUuMjg5NiAxNS4zMTA4IDI2LjA1ODUgMTYuODc2OCAyNi4zN0MxOC40NDI4IDI2LjY4MTUgMjAuMDY2IDI2LjUyMTYgMjEuNTQxMSAyNS45MTA2QzIzLjAxNjIgMjUuMjk5NiAyNC4yNzcgMjQuMjY0OCAyNS4xNjQxIDIyLjkzNzNDMjYuMDUxMSAyMS42MDk3IDI2LjUyNDYgMjAuMDQ4OSAyNi41MjQ2IDE4LjQ1MjJDMjYuNTI0NiAxNi4zMTEyIDI1LjY3NDEgMTQuMjU3OCAyNC4xNjAxIDEyLjc0MzlDMjIuNjQ2MiAxMS4yMjk5IDIwLjU5MjggMTAuMzc5NCAxOC40NTE4IDEwLjM3OTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"})),i.createElement("a",{target:"_blank",className:"footer-social-link",href:"https://twitter.com/lahorasat"},i.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjUyMzggMC43ODE2MjVDOC43NDk5OSAwLjc4MTYyNSAwLjc5NzI1IDguNzMyMTMgMC43OTcyNSAxOC41MDcxQzAuNzk3MjUgMjguMjgyMSA4Ljc0OTk5IDM2LjIzMjYgMTguNTIzOCAzNi4yMzI2QzI4LjI5NzcgMzYuMjMyNiAzNi4yNTA0IDI4LjI4MjEgMzYuMjUwNCAxOC41MDcxQzM2LjI1MDQgOC43MzIxMyAyOC4yOTc3IDAuNzgxNjI1IDE4LjUyMzggMC43ODE2MjVaTTE4LjUyMzggMzQuNjI5N0M5LjYzNDMxIDM0LjYyOTcgMi40MDIzMSAyNy4zOTY3IDIuNDAyMzEgMTguNTA3MUMyLjQwMjMxIDkuNjE3NTUgOS42MzQzMSAyLjM4NDUgMTguNTIzOCAyLjM4NDVDMjcuNDEzNCAyLjM4NDUgMzQuNjQ1NCA5LjYxNzU1IDM0LjY0NTQgMTguNTA3MUMzNC42NDU0IDI3LjM5NjcgMjcuNDEzNCAzNC42Mjk3IDE4LjUyMzggMzQuNjI5N1oiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNDM2NzUiLz4KPHBhdGggZD0iTTI4LjQ5MSAxMi44NDY3QzI4LjU0NDYgMTIuNzIxIDI4LjU5MjMgMTIuNTkyNyAyOC42MzM3IDEyLjQ2MjNMMjguNjMzOCAxMi40NjIyQzI4LjY4MjggMTIuMzA3NCAyOC42ODM4IDEyLjE0MTQgMjguNjM2NiAxMS45ODYxQzI4LjU4OTQgMTEuODMwOCAyOC40OTYyIDExLjY5MzQgMjguMzY5MiAxMS41OTIyQzI4LjI0MjMgMTEuNDkwOSAyOC4wODc3IDExLjQzMDYgMjcuOTI1NyAxMS40MTlDMjcuNzYzOCAxMS40MDc1IDI3LjYwMjIgMTEuNDQ1NCAyNy40NjIyIDExLjUyNzZMMjcuNDYxMyAxMS41MjgyQzI2Ljk1MjggMTEuODMwMyAyNi40MDQ4IDEyLjA2IDI1LjgzMzIgMTIuMjEwOEMyNS4wMzg1IDExLjUzMTMgMjQuMDI2NSAxMS4xNTYgMjIuOTc4MyAxMS4xNTQ3TDIyLjk3NzkgMTEuMTU0N0MyMi4zODY5IDExLjE1NTEgMjEuODAyMSAxMS4yNzQ5IDIxLjI1ODYgMTEuNTA2OEMyMC43MTUxIDExLjczODcgMjAuMjIzOSAxMi4wNzggMTkuODE0NyAxMi41MDQzQzE5LjQwNTQgMTIuOTMwNiAxOS4wODY1IDEzLjQzNTIgMTguODc2OSAxMy45ODc4QzE4LjY5ODIgMTQuNDU5MiAxOC42MDIyIDE0Ljk1NzIgMTguNTkyNiAxNS40NkMxNi4yODk5IDE1LjEwNzcgMTQuMTk2MyAxMy45MTMxIDEyLjcyMDYgMTIuMTAzMUwxMi43MjA2IDEyLjEwMzFMMTIuNzE5OCAxMi4xMDIyQzEyLjYzNzUgMTIuMDAyNCAxMi41MzI0IDExLjkyMzkgMTIuNDEzMyAxMS44NzM1QzEyLjI5NDIgMTEuODIzIDEyLjE2NDcgMTEuODAyMSAxMi4wMzU3IDExLjgxMjRDMTEuOTA2OCAxMS44MjI3IDExLjc4MjMgMTEuODYzOSAxMS42NzI3IDExLjkzMjdDMTEuNTYzMSAxMi4wMDE0IDExLjQ3MTggMTIuMDk1NiAxMS40MDY0IDEyLjIwNzJMMTEuNDA2MSAxMi4yMDc2QzExLjAyOTIgMTIuODU0NSAxMC44MjQzIDEzLjU4NzIgMTAuODExMSAxNC4zMzU4QzEwLjc5OTMgMTQuOTk5NSAxMC45Mzg1IDE1LjY1NiAxMS4yMTY3IDE2LjI1NjJDMTEuMjAzNyAxNi4yNjMgMTEuMTkwOSAxNi4yNzAxIDExLjE3ODMgMTYuMjc3NUwxMS4xNzgyIDE2LjI3NzRMMTEuMTcxNyAxNi4yODE2QzExLjA1MjQgMTYuMzU3NiAxMC45NTQzIDE2LjQ2MjQgMTAuODg2MyAxNi41ODY0QzEwLjgxODMgMTYuNzEwMyAxMC43ODI1IDE2Ljg0OTQgMTAuNzgyNCAxNi45OTA4VjE2Ljk5MUMxMC43ODI0IDE4LjIyMzEgMTEuMzAwMSAxOS4zNTkxIDEyLjE0NDcgMjAuMTY2NEMxMi4xMDI4IDIwLjIzOTQgMTIuMDcyNCAyMC4zMTg5IDEyLjA1NTEgMjAuNDAyQzEyLjAyNjcgMjAuNTM4MSAxMi4wMzQyIDIwLjY3OTMgMTIuMDc2OSAyMC44MTE2QzEyLjI3MiAyMS40MjAxIDEyLjU5NzcgMjEuOTc4NyAxMy4wMzEyIDIyLjQ0ODFDMTMuMzU0NSAyMi43OTgyIDEzLjczMiAyMy4wOTI1IDE0LjE0ODIgMjMuMzIwMUMxMy4xNDUxIDIzLjcyMzEgMTIuMDU0NiAyMy44Njk2IDEwLjk3NjEgMjMuNzQyN0wxMC45NzI3IDIzLjc0MjNDMTAuNzkzNiAyMy43MjQxIDEwLjYxMzUgMjMuNzY1NyAxMC40NjA2IDIzLjg2MDhDMTAuMzA3NyAyMy45NTU5IDEwLjE5MDcgMjQuMDk5IDEwLjEyNzkgMjQuMjY3N0wxMC4xMjc5IDI0LjI2NzdMMTAuMTI2OCAyNC4yNzA5QzEwLjA2NjEgMjQuNDQxNiAxMC4wNjUgMjQuNjI3OCAxMC4xMjM1IDI0Ljc5OTNDMTAuMTgyIDI0Ljk3MDcgMTAuMjk2OCAyNS4xMTc0IDEwLjQ0OTEgMjUuMjE1NUwxMC40NDk0IDI1LjIxNTZDMTIuMjE3NCAyNi4zNTA0IDE0LjI3NDMgMjYuOTUzMyAxNi4zNzUyIDI2Ljk1MjVMMjguNDkxIDEyLjg0NjdaTTI4LjQ5MSAxMi44NDY3QzI4LjUwOTQgMTIuODUgMjguNTI3OCAxMi44NTM4IDI4LjU0NiAxMi44NTg0QzI4LjcxMzMgMTIuODk5OSAyOC44NjI4IDEyLjk5NDIgMjguOTcyNCAxMy4xMjczQzI5LjA4MiAxMy4yNjA0IDI5LjE0NTcgMTMuNDI1MyAyOS4xNTQzIDEzLjU5NzVDMjkuMTYyOCAxMy43Njk2IDI5LjExNTcgMTMuOTQgMjkuMDE5OSAxNC4wODMzQzI5LjAyIDE0LjA4MzMgMjkuMDIgMTQuMDgzMiAyOS4wMiAxNC4wODMyTDI4LjQ5MSAxMi44NDY3Wk0yNy4zNzQ3IDE1Ljg3OTdMMjcuMzc1MiAxNS45NTIzTDI3LjM3NTIgMTUuOTUzNkMyNy4zNzUyIDIxLjM1MzcgMjMuMjYyNiAyNi45NTI1IDE2LjM3NTMgMjYuOTUyNUwyNy4zNzQ3IDE1Ljg3OTdaTTI3LjM3NDcgMTUuODc5N0MyOC4wMTE1IDE1LjM2ODYgMjguNTY2NCAxNC43NjI4IDI5LjAxOTkgMTQuMDgzNEwyNy4zNzQ3IDE1Ljg3OTdaTTExLjAwMDggMTYuOTkxQzExLjAwMDkgMTYuODg2MyAxMS4wMjczIDE2Ljc4MzMgMTEuMDc3NyAxNi42OTE1QzExLjEyODEgMTYuNTk5NyAxMS4yMDA4IDE2LjUyMiAxMS4yODkxIDE2LjQ2NTdDMTEuMjk3MSAxNi40NjEgMTEuMzA1MiAxNi40NTY1IDExLjMxMzQgMTYuNDUyMUwxMS4wMDA4IDE2Ljk5MVpNMTEuMDAwOCAxNi45OTFDMTEuMDAwOCAxOC4xNTM2IDExLjQ4NjEgMTkuMjI2OCAxMi4yNzk5IDE5Ljk5MzRMMTEuMDAwOCAxNi45OTFaTTI1Ljk3OTcgMTUuNTE4TDI1Ljc2MTYgMTUuNTI4OEMyNS43NTQ5IDE1LjM5NDkgMjUuNzgxOSAxNS4yNjE1IDI1Ljg0MDEgMTUuMTQwN0MyNS44NzYxIDE1LjA2NTkgMjUuOTIzNCAxNC45OTc0IDI1Ljk3OTkgMTQuOTM3NkMyNS45NDA4IDE0LjkyMDggMjUuOTAzIDE0LjkwMDggMjUuODY2NyAxNC44Nzc4QzI1LjcxMjcgMTQuNzggMjUuNTk2NiAxNC42MzI2IDI1LjUzNzUgMTQuNDZDMjUuNDc4NSAxNC4yODc0IDI1LjQ4IDE0LjA5OTkgMjUuNTQxOCAxMy45MjgyQzI1LjU0NjMgMTMuOTE1OCAyNS41NTExIDEzLjkwMzYgMjUuNTU2MSAxMy44OTE1QzI1LjQ4NDggMTMuODg4MyAyNS40MTQgMTMuODc1NyAyNS4zNDU1IDEzLjg1MzZDMjUuMjE1OSAxMy44MTE5IDI1LjA5OTEgMTMuNzM4IDI1LjAwNTkgMTMuNjM4N0MyNC41ODY1IDEzLjE5MjcgMjQuMDMxOCAxMi44OTc1IDIzLjQyNzcgMTIuNzk4NUMyMi44MjM1IDEyLjY5OTYgMjIuMjAzNiAxMi44MDI2IDIxLjY2MzggMTMuMDkxNUMyMS4xMjQgMTMuMzgwNCAyMC42OTQ1IDEzLjgzOTEgMjAuNDQxNyAxNC4zOTY4QzIwLjE4OSAxNC45NTQ0IDIwLjEyNyAxNS41Nzk4IDIwLjI2NTUgMTYuMTc2MUwyMC4yNjU1IDE2LjE3NjJDMjAuMzIyNSAxNi40MjIxIDIwLjI2MDkgMTYuNjc4NSAyMC4xMDA4IDE2Ljg3MTZDMTkuOTM2MSAxNy4wNzAxIDE5LjcwMTggMTcuMTYwNSAxOS40NTQzIDE3LjE1OTFMMTkuNDQ0MiAxNy4xNTlMMTkuNDQ0MyAxNy4xNTg4QzE2LjgxNjIgMTcuMDIzMSAxNC4zMjg1IDE1Ljk1MSAxMi40Mjc2IDE0LjE0NDRMMTYuMzc2MyAyNS41NjY5QzIyLjM5MzkgMjUuNTY2OSAyNS45ODk1IDIwLjY3ODQgMjUuOTg5NSAxNS45NTI1QzI1Ljk4OTUgMTUuODA4NCAyNS45ODYzIDE1LjY2MjEgMjUuOTc5NyAxNS41MThaTTI1Ljk3OTcgMTUuNTE4TDI1Ljc2MTYgMTUuNTI3OUMyNS43NjggMTUuNjY4NyAyNS43NzEyIDE1LjgxMTcgMjUuNzcxMiAxNS45NTI1QzI1Ljc3MTIgMjAuNTc3NCAyMi4yNTQ1IDI1LjM0ODUgMTYuMzc2MyAyNS4zNDg1SDE2LjM3NjJDMTUuNTkxIDI1LjM0ODkgMTQuODA5OSAyNS4yNTAzIDE0LjA1MTIgMjUuMDU1OE0yNS45Nzk3IDE1LjUxOEMyNS45NzQ5IDE1LjQyMDUgMjUuOTk0NSAxNS4zMjM0IDI2LjAzNjggMTUuMjM1NEMyNi4wNzkyIDE1LjE0NzUgMjYuMTQyOSAxNS4wNzE2IDI2LjIyMjEgMTUuMDE0NkMyNi4yMjg1IDE1LjAxIDI2LjIzNDkgMTUuMDA1NSAyNi4yNDEzIDE1LjAwMDlMMTQuMDUxMiAyNS4wNTU4TTE0LjA1MTIgMjUuMDU1OEMxNS4wMDQ2IDI0Ljc2OTkgMTUuODk4MiAyNC4zMDY2IDE2LjY4MzkgMjMuNjg3OEwxNi42ODQgMjMuNjg3N0MxNi44MTM5IDIzLjU4NTQgMTYuOTA4OSAyMy40NDU0IDE2Ljk1NjIgMjMuMjg2OUMxNy4wMDM1IDIzLjEyODUgMTcuMDAwNiAyMi45NTkzIDE2Ljk0ODEgMjIuODAyNUMxNi44OTU2IDIyLjY0NTggMTYuNzk1OSAyMi41MDkgMTYuNjYyNyAyMi40MTExQzE2LjUyOTUgMjIuMzEzMSAxNi4zNjkzIDIyLjI1ODYgMTYuMjA0IDIyLjI1NTJMMTYuMjAzNiAyMi4yNTUxQzE1Ljc2NyAyMi4yNDY4IDE1LjMzODUgMjIuMTM2IDE0Ljk1MjYgMjEuOTMxNkMxNC42ODAzIDIxLjc4NzQgMTQuNDM0NiAyMS41OTk1IDE0LjIyNSAyMS4zNzYxQzE0LjM3NTYgMjEuMzUxNyAxNC41MjQzIDIxLjMxOTYgMTQuNjcwNiAyMS4yODAyTTE0LjA1MTIgMjUuMDU1OEwxMy41MzE5IDE2LjkxMTNMMTMuNjUyNiAxNi43MjkzQzEzLjY1MjcgMTYuNzI5MyAxMy42NTI3IDE2LjcyOTQgMTMuNjUyOCAxNi43Mjk0QzEzLjk1MTkgMTYuOTI4IDE0LjA4MDggMTcuMzAxOCAxMy45NzEyIDE3LjY0MTJDMTMuODU5NiAxNy45ODY1IDEzLjUzMTUgMTguMTk2MSAxMy4xODk5IDE4LjE5NzVMMTMuMTgxOCAxOC4xOTc2TDEzLjE4MTggMTguMTk3NEMxMy4wMDE5IDE4LjE5MTUgMTIuODIyMiAxOC4xNzQyIDEyLjY0NDEgMTguMTQ2MU0xNC42NzA2IDIxLjI4MDJDMTQuNjcwNSAyMS4yODAyIDE0LjY3MDUgMjEuMjgwMiAxNC42NzA0IDIxLjI4MDJMMTQuNjE0IDIxLjA2OTNMMTQuNjcwOCAyMS4yODAxQzE0LjY3MDggMjEuMjgwMSAxNC42NzA3IDIxLjI4MDIgMTQuNjcwNiAyMS4yODAyWk0xNC42NzA2IDIxLjI4MDJDMTQuODQ1NiAyMS4yMzMzIDE0Ljk5OTUgMjEuMTI4NSAxNS4xMDczIDIwLjk4MjlDMTUuMjE1MiAyMC44MzczIDE1LjI3MDUgMjAuNjU5NCAxNS4yNjQyIDIwLjQ3ODNDMTUuMjU3OSAyMC4yOTcyIDE1LjE5MDUgMjAuMTIzNSAxNS4wNzI4IDE5Ljk4NTdDMTQuOTU1NCAxOS44NDgxIDE0Ljc5NDggMTkuNzU0MyAxNC42MTczIDE5LjcxOTVNMTQuNjE3MyAxOS43MTk1QzE0LjEyNDcgMTkuNjE5MSAxMy42Njg2IDE5LjM4NjggMTMuMjk3OCAxOS4wNDczQzEzLjAyMDMgMTguNzkzMyAxMi43OTgzIDE4LjQ4NjQgMTIuNjQ0MSAxOC4xNDYxTTE0LjYxNzMgMTkuNzE5NUMxNC42MTcgMTkuNzE5NCAxNC42MTY3IDE5LjcxOTQgMTQuNjE2NCAxOS43MTkzTDE0LjU3NDYgMTkuOTMzN00xNC42MTczIDE5LjcxOTVDMTQuNjE3NiAxOS43MTk2IDE0LjYxNzkgMTkuNzE5NiAxNC42MTgyIDE5LjcxOTdMMTQuNTc0NiAxOS45MzM3TTEyLjY0NDEgMTguMTQ2MUMxMi41NTc4IDE4LjEzMjUgMTIuNDcxOSAxOC4xMTYzIDEyLjM4NjUgMTguMDk3N00xMi42NDQxIDE4LjE0NjFDMTIuNjA4OSAxOC4wNjg0IDEyLjU3NzIgMTcuOTg5IDEyLjU0OTIgMTcuOTA4QzEyLjc2MDYgMTcuOTQ4MSAxMi45NzQ4IDE3Ljk3MjEgMTMuMTg5IDE3Ljk3OTFMMTIuMzg2NSAxOC4wOTc3TTEyLjM4NjUgMTguMDk3N0MxMi41NTI5IDE4LjUyMDEgMTIuODEzOCAxOC45MDAzIDEzLjE1MDMgMTkuMjA4NEMxMy41NTA2IDE5LjU3NDggMTQuMDQyOSAxOS44MjU1IDE0LjU3NDYgMTkuOTMzN00xMi4zODY1IDE4LjA5NzdMMTQuNTc0NiAxOS45MzM3TTEwLjU2NzMgMjUuMDMxOEMxMi4zMDAyIDI2LjE0NCAxNC4zMTYxIDI2LjczNDkgMTYuMzc1MiAyNi43MzQxTDEwLjU2NzMgMjUuMDMxOFoiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNDM2NzUiLz4KPC9zdmc+Cg=="}))),"© 2021 La Hora Sat. Todos los derechos reservados.")};function Ee(e){var t=e.children;return i.createElement("main",null,i.createElement(le,null,i.createElement("title",null,"La hora SAT® 🤓")),t,i.createElement(Ae,null))}var ze=M.p+"static/redes-dd82d8da731c682be9e13ca8da0ea2c8.png",Oe=function(){return i.createElement(Ee,null,i.createElement("div",{className:"hero"},i.createElement(c,null),i.createElement("div",{className:"section container"},i.createElement("div",{className:"col-lg-10 mx-auto"},i.createElement("h1",{className:"hero-title text-center"},"Todo lo que necesitas saber sobre ",i.createElement("span",{className:"bg-primary"},"el SAT")," y la"," ",i.createElement("span",{className:"bg-primary"},"vida financiera")," contado por"," ",i.createElement("span",{className:"bg-primary"},"millennials para millennials")," * 🤓💸")))),i.createElement("div",{className:"section"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row align-items-center"},i.createElement("div",{className:"col-md-6"},i.createElement("h2",null,"Somos una comunidad de educación fiscal"),i.createElement("p",{className:"font-lg"},"Hacemos contenido informativo, impartimos ",i.createElement("a",{target:"_blank",href:"https://taller-basico-para-sobrevivir-al-sat.boletia.com/",className:"a-underline"},"cursos")," y ",i.createElement("a",{href:"#asesoria",className:"a-underline"},"asesorías personalizadas")," que te ayudarán a entender cómo funciona el SAT.")),i.createElement("div",{className:"col-md-6"},i.createElement("a",{href:"https://instagram.com/lahorasat",className:"d-block",target:"_blank"},i.createElement("img",{src:ze,className:"img-fluid"})))))),i.createElement("div",{id:"asesoria",className:"container mb-5"},i.createElement("div",{className:"mt-5 section-floating section-green text-center"},i.createElement("p",{className:"mb-2"},"¿Tienes dudas en específico?"),i.createElement("h1",{className:"text-center mb-3"},"Agenda una asesoria personalizada"),i.createElement("div",{className:"mb-3"},i.createElement("b",null,"¿Cómo funciona?")),i.createElement("ul",null,i.createElement("li",null,"Cuéntanos el problema o duda que quieres resolver "),i.createElement("li",null,"Te daremos el costo por la asesoría, duración y las fechas disponibles "),i.createElement("li",null,"Te mandaremos los datos bancarios para que hagas el pago en max 24hrs  ",i.createElement("br",null),i.createElement("span",{className:"font-sm"},"(nos tienes que mandar tu comprobante)")),i.createElement("li",null,"¡Listo, tu asesoría quedará agendada! ",i.createElement("br",null),i.createElement("span",{className:"font-sm"}," (Te enviaremos un link para unirte a un Zoom en el día y hora de tu evento)"))),i.createElement("div",{className:"row justify-content-center"},i.createElement("div",{className:"col-lg-auto"},i.createElement("a",{target:"_blank",href:"https://www.instagram.com/lahorasat/",className:"mt-3 mr-1 btn btn-lg btn-secondary"},"Agenda vía Instagram")),i.createElement("div",{className:"col-lg-auto"},i.createElement("a",{href:"mailto:lahorasat@gmail.com",className:"mt-3 mr-1 btn btn-lg btn-outline-secondary"},"o contáctanos por correo"))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f0e4eb77fbd3a8e4562b.js.map