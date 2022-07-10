(()=>{"use strict";var e={294:()=>{try{self["workbox:broadcast-update:5.1.4"]&&_()}catch(e){}},913:()=>{try{self["workbox:core:5.1.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}(()=>{s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}function t(e){return new Promise((t=>setTimeout(t,e)))}s(294);const n=["content-length","etag","last-modified"],a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function r(e){return{cacheName:e.cacheName,updatedURL:e.request.url}}class c{constructor({headersToCheck:e,generatePayload:t}={}){this._headersToCheck=e||n,this._generatePayload=t||r}async notifyIfUpdated(e){var s,n,r;if(e.oldResponse&&(s=e.oldResponse,n=e.newResponse,(r=this._headersToCheck).some((e=>s.headers.has(e)&&n.headers.has(e)))&&!r.every((e=>{const t=s.headers.has(e)===n.headers.has(e),a=s.headers.get(e)===n.headers.get(e);return t&&a})))){const s={type:"CACHE_UPDATED",meta:"workbox-broadcast-update",payload:this._generatePayload(e)};if("navigate"===e.request.mode){let s;e.event instanceof FetchEvent&&(s=e.event.resultingClientId);const n=await async function(e){if(!e)return;let s=await self.clients.matchAll({type:"window"});const n=new Set(s.map((e=>e.id)));let a;const r=performance.now();for(;performance.now()-r<2e3&&(s=await self.clients.matchAll({type:"window"}),a=s.find((t=>e?t.id===e:!n.has(t.id))),!a);)await t(100);return a}(s);n&&!a||await t(3500)}const n=await self.clients.matchAll({type:"window"});for(const e of n)e.postMessage(s)}}}s(977);const i=[],o={get:()=>i,add(e){i.push(...e)}},h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=e=>{return e||(t=h.precache,[h.prefix,t,h.suffix].filter((e=>e&&e.length>0)).join("-"));var t},u=new Set,f=(e,t)=>e.filter((e=>t in e)),d=async({request:e,mode:t,plugins:s=[]})=>{const n=f(s,"cacheKeyWillBeUsed");let a=e;for(const e of n)a=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:a}),"string"==typeof a&&(a=new Request(a));return a},p=async({cacheName:t,request:s,response:n,event:a,plugins:r=[],matchOptions:c})=>{const i=await d({plugins:r,request:s,mode:"write"});if(!n)throw new e("cache-put-with-no-response",{url:(o=i.url,new URL(String(o),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var o;const h=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let a=t,r=!1;for(const t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(a=await n.call(t,{request:e,response:a,event:s}),!a)break}return r||(a=a&&200===a.status?a:void 0),a||null})({event:a,plugins:r,response:n,request:i});if(!h)return;const l=await self.caches.open(t),p=f(r,"cacheDidUpdate"),w=p.length>0?await(async({cacheName:e,request:t,event:s,matchOptions:n,plugins:a=[]})=>{const r=await self.caches.open(e),c=await d({plugins:a,request:t,mode:"read"});let i=await r.match(c,n);for(const t of a)if("cachedResponseWillBeUsed"in t){const a=t.cachedResponseWillBeUsed;i=await a.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:i,request:c})}return i})({cacheName:t,matchOptions:c,request:i}):null;try{await l.put(i,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of u)await e()}(),e}for(const e of p)await e.cacheDidUpdate.call(e,{cacheName:t,event:a,oldResponse:w,newResponse:h,request:i})};let w,y;function g(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}class m{constructor(e){this._cacheName=l(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:a}=g(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(a,t),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],a=await self.caches.open(this._cacheName),r=await a.keys(),c=new Set(r.map((e=>e.url)));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?n.push(e):s.push({cacheKey:t,url:e});const i=s.map((({cacheKey:s,url:n})=>{const a=this._cacheKeysToIntegrities.get(s),r=this._urlsToCacheModes.get(n);return this._addURLToCache({cacheKey:s,cacheMode:r,event:e,integrity:a,plugins:t,url:n})}));return await Promise.all(i),{updatedURLs:s.map((e=>e.url)),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}async _addURLToCache({cacheKey:t,url:s,cacheMode:n,event:a,plugins:r,integrity:c}){const i=new Request(s,{integrity:c,cache:n,credentials:"same-origin"});let o,h=await(async({request:t,fetchOptions:s,event:n,plugins:a=[]})=>{if("string"==typeof t&&(t=new Request(t)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=f(a,"fetchDidFail"),c=r.length>0?t.clone():null;try{for(const e of a)if("requestWillFetch"in e){const s=e.requestWillFetch,a=t.clone();t=await s.call(e,{request:a,event:n})}}catch(t){throw new e("plugin-error-request-will-fetch",{thrownError:t})}const i=t.clone();try{let e;e="navigate"===t.mode?await fetch(t):await fetch(t,s);for(const t of a)"fetchDidSucceed"in t&&(e=await t.fetchDidSucceed.call(t,{event:n,request:i,response:e}));return e}catch(e){for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:c.clone(),request:i.clone()});throw e}})({event:a,plugins:r,request:i});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:a,request:i,response:h}):h.status<400))throw new e("bad-precaching-response",{url:s,status:h.status});h.redirected&&(h=await async function(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=t?t(n):n,r=function(){if(void 0===w){const e=new Response("");if("body"in e)try{new Response(e.body),w=!0}catch(e){w=!1}w=!1}return w}()?s.body:await s.blob();return new Response(r,a)}(h)),await p({event:a,plugins:r,response:h,request:t===s?i:new Request(t),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this._cacheName)).match(s)}createHandler(t=!0){return async({request:s})=>{try{const t=await this.matchPrecache(s);if(t)return t;throw new e("missing-precache-entry",{cacheName:this._cacheName,url:s instanceof Request?s.url:s})}catch(e){if(t)return fetch(s);throw e}}}createHandlerBoundToURL(t,s=!0){if(!this.getCacheKeyForURL(t))throw new e("non-precached-url",{url:t});const n=this.createHandler(s),a=new Request(t);return()=>n({request:a})}}const R=()=>(y||(y=new m),y);let v=!1;const U=e=>{const t=R(),s=o.get();e.waitUntil(t.install({event:e,plugins:s}).catch((e=>{throw e})))},_=e=>{const t=R();e.waitUntil(t.activate())},L=[{'revision':'4a9419c3627f8ca3fe217dc3000da2b4','url':'assets/atlas.json'},{'revision':'f92ef9df99ec08069fad62bde24fdc78','url':'assets/atlas.png'},{'revision':'acd9b9d0a9f94ebe4339a39df8a57bbc','url':'assets/audio/button-down.wav'},{'revision':'f4d62a7a2711df8e8b7215214e648af2','url':'assets/audio/button-up.wav'},{'revision':'b577f8ea1ade1bab7817ec2e9f3778ff','url':'assets/audio/defeat.mp3'},{'revision':'92b0ea37682ad19f9683e763b2d15390','url':'assets/audio/deny.wav'},{'revision':'fd7622980e2a0e7fdef57e63c6c5f80d','url':'assets/audio/drop.wav'},{'revision':'c920f48b3d09efe5978417a86c6d005e','url':'assets/audio/glitter.mp3'},{'revision':'bc75df1278214b78d67aac456e963ad8','url':'assets/audio/grab.wav'},{'revision':'e337c20a5bf1f7f4c6705cc25b5d8596','url':'assets/audio/rewind.mp3'},{'revision':'89b38c135910b216d270050df8d48672','url':'assets/audio/shutter-click.wav'},{'revision':'ea4bbe14d283aa3203cad35e2c318237','url':'assets/audio/victory.mp3'},{'revision':'b60f3e4cd0fa8d2de61c9adb35b320d2','url':'assets/fonts/debug.png'},{'revision':'902f15f70096b5d6867e9ea7651a0771','url':'assets/fonts/debug.xml'},{'revision':'9e22c9ef056d62720c81b11e0a8476b7','url':'assets/fonts/main.png'},{'revision':'227f16f3297ee338765390c4ecf4fe7e','url':'assets/fonts/main.xml'},{'revision':'489393b92d65b552b728bf58359c4389','url':'assets/fonts/mini-bold.png'},{'revision':'1edd1a31988d27ca654947730faf116b','url':'assets/fonts/mini-bold.xml'},{'revision':'817d2d46d6a18bcb7e5f6afc01f85988','url':'assets/fonts/mini.png'},{'revision':'45790fc9fda6f5dc753eafddbd43106d','url':'assets/fonts/mini.xml'},{'revision':'489393b92d65b552b728bf58359c4389','url':'assets/fonts/small-bold.png'},{'revision':'1edd1a31988d27ca654947730faf116b','url':'assets/fonts/small-bold.xml'},{'revision':'ef73ad4a63a449529c50b03ade6c4ce9','url':'assets/fonts/small.png'},{'revision':'53b830cb03f9cc8b150c54eef0a0b774','url':'assets/fonts/small.xml'},{'revision':'0f4450d3c41d46c36279d1f1401934c4','url':'assets/gameOverAtlas.json'},{'revision':'c6672601f8fae6eb59e83f569b6bd26b','url':'assets/gameOverAtlas.png'},{'revision':'d773ef59214bf568b3bc6b6b65e71ede','url':'assets/html/help/about.html'},{'revision':'361b035c0af2f3f15a8300dd9e806cca','url':'assets/html/help/how-to-play.html'},{'revision':'8888f38fd735be9844bf96ae7daef71d','url':'assets/html/help/icons/bandit-camp.png'},{'revision':'04a8576811503da2e984290ab0a972a9','url':'assets/html/help/icons/bandit.png'},{'revision':'16b2a1a9f6e751b902d9432d71be2198','url':'assets/html/help/icons/castle.png'},{'revision':'661ee58b24c5f5bbe29e40c7c0cfb4f8','url':'assets/html/help/icons/coin.png'},{'revision':'c1b607dbf384301d399a9a9e1a5d2b52','url':'assets/html/help/icons/coins.png'},{'revision':'7039cc4f6a1934d6f3559a1b87f8e9b4','url':'assets/html/help/icons/deficit.png'},{'revision':'e7d3cc4cae7124c256ae66a1f01dee29','url':'assets/html/help/icons/face.png'},{'revision':'2a2ea1d38f39a079540952bfcdbe6faa','url':'assets/html/help/icons/surplus.png'},{'revision':'3bc167e38626b3e01b3e7fd94a08bea2','url':'assets/html/help/icons/town.png'},{'revision':'1403b27132b4e5eab11cece18bd8741c','url':'assets/html/help/icons/treasury.png'},{'revision':'fba6d2400c8b7592717a65db7c50f24c','url':'assets/html/help/icons/upkeep.png'},{'revision':'0fe000a40979307e5aa97c39305ef6db','url':'assets/html/help/icons/villager.png'},{'revision':'6670cc5ea14e00033a7a3cfecff74873','url':'assets/html/help/play_files/bandits.gif'},{'revision':'3981f50d55155ed380e75c0242c9f2fc','url':'assets/html/help/play_files/illustration1.png'},{'revision':'14a3444aed4fc97d0e66c8c52b826cac','url':'assets/html/help/play_files/illustration2.png'},{'revision':'4356fa2d7a156959f19cc6ce0d199105','url':'assets/html/help/play_files/illustration3.png'},{'revision':'3b950c96b0a1b8912fa6bb630289ad85','url':'assets/html/help/play_files/illustration4.png'},{'revision':'18c89ff7ed683c57511762af5739e1c9','url':'assets/html/help/play_files/illustration5.png'},{'revision':'202e8019a5149ac2ae6ae8ebc0cc2a1c','url':'assets/html/help/play_files/illustration6.png'},{'revision':'13157d3a3dcfa33d4b49db7ebc1194ca','url':'assets/html/help/play_files/strategy.gif'},{'revision':'0e3689474958769e455d6b33bcb0adfb','url':'assets/html/help/slides/common.css'},{'revision':'fa5c9a8ebfcd3bb75f050d855e339af7','url':'assets/html/help/slides/slides.css'},{'revision':'f37c79f4bdb1f42db41a771dfbffc755','url':'assets/html/help/slides/slides.js'},{'revision':'37ae79ae822b465ad8f74ae9c463c9fc','url':'assets/img/coin-animated-hd.png'},{'revision':'f21643871541c1203f905d12f2d72e36','url':'assets/img/coin-animated.png'},{'revision':'fa72c0174670d9e7819358873a1709a2','url':'assets/img/flag-animated.png'},{'revision':'c51c61a74639a299db0f5c21c6898685','url':'assets/maps.json'},{'revision':'b05a70037f5998140d836a93e99cc7c3','url':'icons/favicon-16x16.png'},{'revision':'bd95076aee2026defc031b4f87e68130','url':'icons/favicon-32x32.png'},{'revision':'c7a6f1065e29d45e0b799493fd8cf97f','url':'icons/icons-128x128.png'},{'revision':'9db02fffda917f62343071a5c423416f','url':'icons/icons-192x192.png'},{'revision':'7da8e83bfea9c19f5173074b51d3d4f4','url':'icons/icons-512x512.png'},{'revision':'64f09586efa1685b396ae181c99d5d73','url':'index.html'},{'revision':null,'url':'main.5192ae9838de7d28ff42.bundle.js'},{'revision':'857b5be59117402e19288e4756771681','url':'manifest.json'},{'revision':null,'url':'vendors.099019c75afec500a8df.bundle.js'},{'revision':'fdc3e4ce5e1f16e644e33863b430fc25','url':'vendors.099019c75afec500a8df.bundle.js.LICENSE.txt'}];var q,T;q=[new class{constructor(e){this.cacheDidUpdate=async e=>{this._broadcastUpdate.notifyIfUpdated(e).then((()=>{}))},this._broadcastUpdate=new c(e)}}],o.add(q),T=L,R().addToCacheList(T),T.length>0&&(self.addEventListener("install",U),self.addEventListener("activate",_)),function(e){v||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const a=l();self.addEventListener("fetch",(r=>{const c=((e,t)=>{const s=R().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const c=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield c.href,s&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=s,yield e.href}if(n){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}})(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!c)return;let i=self.caches.open(a).then((e=>e.match(c))).then((e=>e||fetch(c)));r.respondWith(i)}))})(e),v=!0)}(undefined),self.addEventListener("message",(e=>{if("skipWaiting"===e.data)return self.skipWaiting()}))})()})();