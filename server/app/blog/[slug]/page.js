(()=>{var e={};e.id=308,e.ids=[308],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4916:e=>{"use strict";e.exports=import("next-mdx-remote/rsc")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},895:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.ZP,__next_app__:()=>d,originalPathname:()=>c,pages:()=>u,routeModule:()=>f,tree:()=>l});var n=r(482),o=r(9108),i=r(260),s=r(8300),a={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(a[e]=()=>s[e]);r.d(t,a);let l=["",{children:["blog",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2151)),"D:\\1.Project\\TypeScript\\nextjs\\nextjs-blog-portfolio\\app\\blog\\[slug]\\page.js"],metadata:{icon:[],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,2561))).default(e)],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(r.bind(r,5030)),"D:\\1.Project\\TypeScript\\nextjs\\nextjs-blog-portfolio\\app\\blog\\[slug]\\not-found.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,5651))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9311)),"D:\\1.Project\\TypeScript\\nextjs\\nextjs-blog-portfolio\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,6178)),"D:\\1.Project\\TypeScript\\nextjs\\nextjs-blog-portfolio\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,5651))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\1.Project\\TypeScript\\nextjs\\nextjs-blog-portfolio\\app\\blog\\[slug]\\page.js"],c="/blog/[slug]/page",d={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/blog/[slug]/page",pathname:"/blog/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5748:(e,t,r)=>{Promise.resolve().then(r.bind(r,8023))},6004:(e,t,r)=>{Promise.resolve().then(r.bind(r,5368)),Promise.resolve().then(r.bind(r,6999)),Promise.resolve().then(r.t.bind(r,1476,23))},1959:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},6261:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23))},5303:()=>{},8023:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(5344);function o({error:e}){return n.jsx("html",{children:n.jsx("body",{children:"Opppps!"})})}},5368:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(5344),o=r(2171);function i(){return n.jsx(n.Fragment,{children:n.jsx(o.default,{src:"/chatbot.js",strategy:"lazyOnload",onLoad:()=>initializeChatbot()})})}},6999:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5344),o=r(3729),i=r(5024);let s=(e="dark")=>{let[t,r]=(0,o.useState)(e),[n,s]=(0,i.fP)(["theme"]),a=e=>{r(e),document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(e),s("theme",e)};return{theme:t,toggleTheme:()=>{a("dark"===t?"light":"dark")}}},a={light:"\uD83C\uDF1A",dark:"\uD83C\uDF1D"};function l({defaultTheme:e}){let{theme:t,toggleTheme:r}=s(e);return n.jsx("button",{onClick:r,children:a[t]})}},8349:e=>{e.exports={link:"navigation_link__IVJqm"}},5030:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(5036);function o(){return(0,n.jsxs)("div",{children:[n.jsx("h1",{className:"text-2xl",children:"404"}),n.jsx("div",{children:"Blog post was not found"}),(0,n.jsxs)("div",{className:"mt-4",children:[n.jsx("div",{children:"You might want to check some blog posts"}),(0,n.jsxs)("ul",{children:[n.jsx("li",{children:"First"}),n.jsx("li",{children:"Second"})]})]})]})}},2151:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>f,generateMetadata:()=>d,generateStaticParams:()=>c});var o=r(5036),i=r(867),s=r(7678),a=r(2),l=r(6274),u=e([s]);s=(u.then?(await u)():u)[0];let p=(0,a.cache)(async e=>await (0,s.xl)(e));async function c(){let{posts:e}=await (0,s.Jq)({limit:1e3});return e.map(e=>({slug:e.slug}))}async function d({params:e}){try{let{frontmatter:t}=await p(e.slug);return t}catch(e){}}async function f({params:e}){let t;try{t=await p(e.slug)}catch(e){(0,i.notFound)()}return(0,o.jsxs)("article",{className:"prose dark:prose-invert",children:[o.jsx("div",{className:"flex space-x-2 mb-8",children:t.frontmatter.tags.map(e=>(0,o.jsxs)(l.default,{href:`/blog/?tags=${e}`,className:"dark:text-gray-400 text-gray-500",children:["#",e]},e))}),t.content]})}n()}catch(e){n(e)}})},260:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>s});let n=(0,r(6843).createProxy)(String.raw`D:\1.Project\TypeScript\nextjs\nextjs-blog-portfolio\app\global-error.js`),{__esModule:o,$$typeof:i}=n,s=n.default},9311:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P,metadata:()=>v});var n=r(5036),o=r(7441),i=r.n(o);r(7272);let s=(e="dark")=>e;var a=r(6843);let l=(0,a.createProxy)(String.raw`D:\1.Project\TypeScript\nextjs\nextjs-blog-portfolio\components\dark-mode.js`),{__esModule:u,$$typeof:c}=l,d=l.default;var f=r(6274),p=r(8349),m=r.n(p);function h(){return n.jsx("nav",{className:"font-mono",children:(0,n.jsxs)("ul",{className:"flex md:space-x-4 flex-col md:flex-row",children:[n.jsx("li",{children:n.jsx(f.default,{href:"/",className:`${m().link} inline md:hidden`,children:"Home"})}),n.jsx("li",{children:n.jsx(f.default,{href:"/about",className:m().link,children:"About"})}),n.jsx("li",{children:n.jsx(f.default,{href:"/about/projects",className:m().link,children:"Projects"})}),n.jsx("li",{children:n.jsx(f.default,{href:"/photos",className:m().link,children:"Photos"})}),n.jsx("li",{children:n.jsx(f.default,{href:"/blog",className:m().link,children:"Blog"})}),n.jsx("li",{children:n.jsx(f.default,{href:"/experience",className:m().link,children:"Experience"})})]})})}function x(){let e=s();return(0,n.jsxs)("header",{className:"flex justify-between md:items-center mt-4",children:[(0,n.jsxs)("div",{className:"flex items-center md:space-x-12",children:[n.jsx("div",{className:"hidden md:block",children:n.jsx(f.default,{href:"/",className:"text-xl font-mono",children:"Piotr Jura"})}),n.jsx(h,{})]}),n.jsx("div",{children:n.jsx(d,{defaultTheme:e})})]})}let g=(0,a.createProxy)(String.raw`D:\1.Project\TypeScript\nextjs\nextjs-blog-portfolio\components\chatbot.js`),{__esModule:j,$$typeof:b}=g,y=g.default,v={title:{template:"%s | Piotr Jura",default:"Piotr Jura"}};function P({children:e}){let t=s();return n.jsx("html",{lang:"en",className:t,children:(0,n.jsxs)("body",{className:i().className,children:[n.jsx(x,{}),n.jsx("main",{className:"mt-12",children:e}),n.jsx(y,{})]})})}},6178:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(5036);function o(){return(0,n.jsxs)("div",{children:[n.jsx("h1",{className:"text-2xl",children:"404"}),n.jsx("div",{children:"Page was not found"})]})}},7486:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(5036);function o({children:e}){return n.jsx("h1",{className:"mb-8 text-2xl not-prose",children:e})}},7678:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{Jq:()=>p,xl:()=>f});var o=r(5036),i=r(7147),s=r.n(i),a=r(1017),l=r.n(a),u=r(4916),c=r(7486),d=e([u]);async function f(e){let t=function(e){let t=e.endsWith(".mdx")?e:`${e}.mdx`;return s().readFileSync(l().join(process.cwd(),"content",t))}(e);return await (0,u.compileMDX)({source:t,components:{h1:e=>o.jsx(c.Z,{...e})},options:{parseFrontmatter:!0}})}async function p({newest:e=!0,page:t=1,limit:r=3,tags:n}={}){let o=s().readdirSync(l().join(process.cwd(),"content")),i=await Promise.all(o.map(async e=>{let{frontmatter:t}=await f(e);return{frontmatter:t,slug:e.replace(".mdx","")}}));return n&&(i=i.filter(e=>e.frontmatter.tags.some(e=>n.includes(e)))),e?i.sort((e,t)=>{let r=new Date(e.frontmatter.date);return new Date(t.frontmatter.date)-r}):i.sort((e,t)=>{let r=new Date(e.frontmatter.date),n=new Date(t.frontmatter.date);return r-n}),{posts:i.slice((t-1)*r,t*r),pageCount:Math.ceil(i.length/r)}}u=(d.then?(await d)():d)[0],n()}catch(e){n(e)}})},867:(e,t,r)=>{"use strict";var n=r(9738);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}})},4778:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"bailoutToClientRendering",{enumerable:!0,get:function(){return i}});let n=r(8675),o=r(5869);function i(e){let t=o.staticGenerationAsyncStorage.getStore();if((null==t||!t.forceStatic)&&(null==t?void 0:t.isStaticGeneration))throw new n.BailoutToCSRError(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4552:(e,t,r)=>{"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(6783),r(2),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9738:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return m},useSearchParams:function(){return h},usePathname:function(){return x},ServerInsertedHTMLContext:function(){return u.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return u.useServerInsertedHTML},useRouter:function(){return g},useParams:function(){return j},useSelectedLayoutSegments:function(){return b},useSelectedLayoutSegment:function(){return y},redirect:function(){return c.redirect},permanentRedirect:function(){return c.permanentRedirect},RedirectType:function(){return c.RedirectType},notFound:function(){return d.notFound}});let n=r(2),o=r(8726),i=r(7210),s=r(4552),a=r(3092),l=r(5458),u=r(545),c=r(8010),d=r(2100),f=Symbol("internal for urlsearchparams readonly");function p(){return Error("ReadonlyURLSearchParams cannot be modified")}class m{[Symbol.iterator](){return this[f][Symbol.iterator]()}append(){throw p()}delete(){throw p()}set(){throw p()}sort(){throw p()}constructor(e){this[f]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function h(){(0,s.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(i.SearchParamsContext),t=(0,n.useMemo)(()=>e?new m(e):null,[e]);{let{bailoutToClientRendering:e}=r(4778);e("useSearchParams()")}return t}function x(){return(0,s.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(i.PathnameContext)}function g(){(0,s.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function j(){(0,s.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(i.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function e(t,r){for(let n of(void 0===r&&(r={}),Object.values(t[1]))){let t=n[0],o=Array.isArray(t),i=o?t[1]:t;!i||i.startsWith(l.PAGE_SEGMENT_KEY)||(o&&("c"===t[2]||"oc"===t[2])?r[t[0]]=t[1].split("/"):o&&(r[t[0]]=t[1]),r=e(n,r))}return r}(e.tree):t,[null==e?void 0:e.tree,t])}function b(e){void 0===e&&(e="children"),(0,s.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function e(t,r,n,o){let i;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)i=t[1][r];else{var s;let e=t[1];i=null!=(s=e.children)?s:Object.values(e)[0]}if(!i)return o;let u=i[0],c=(0,a.getSegmentValue)(u);return!c||c.startsWith(l.PAGE_SEGMENT_KEY)?o:(o.push(c),e(i,r,!1,o))}(t,e)}function y(e){void 0===e&&(e="children"),(0,s.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=b(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2100:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return o}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5858:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8010:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return l},redirect:function(){return u},permanentRedirect:function(){return c},isRedirectError:function(){return d},getURLFromRedirectError:function(){return f},getRedirectTypeFromError:function(){return p},getRedirectStatusCodeFromError:function(){return m}});let o=r(4580),i=r(2934),s=r(5858),a="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=s.RedirectStatusCode.TemporaryRedirect);let n=Error(a);n.digest=a+";"+t+";"+e+";"+r+";";let i=o.requestAsyncStorage.getStore();return i&&(n.mutableCookies=i.mutableCookies),n}function u(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.TemporaryRedirect)}function c(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?s.RedirectStatusCode.SeeOther:s.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,o]=e.digest.split(";",4),i=Number(o);return t===a&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(i)&&i in s.RedirectStatusCode}function f(e){return d(e)?e.digest.split(";",3)[2]:null}function p(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3092:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8726:(e,t,r)=>{"use strict";e.exports=r(482).vendored.contexts.AppRouterContext},7210:(e,t,r)=>{"use strict";e.exports=r(482).vendored.contexts.HooksClientContext},545:(e,t,r)=>{"use strict";e.exports=r(482).vendored.contexts.ServerInsertedHtml},8675:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{BailoutToCSRError:function(){return n},isBailoutToCSRError:function(){return o}});let r="BAILOUT_TO_CLIENT_SIDE_RENDERING";class n extends Error{constructor(e){super("Bail out to client-side rendering: "+e),this.reason=e,this.digest=r}}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}},5651:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(337);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},2561:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i}),r(5036);var n=r(337);let o={runtime:"edge",alt:"About Acme",size:{width:1200,height:630},contentType:"image/png"};async function i(e){let{__metadata_id__:t,...r}=e.params,i=(0,n.fillMetadataSegment)("/blog/[slug]",r,"opengraph-image"),{generateImageMetadata:s}=o;function a(e,t){let r={alt:e.alt,type:e.contentType||"image/png",url:i+(t?"/"+t:"")+"?b3f92160b308e507"},{size:n}=e;return n&&(r.width=n.width,r.height=n.height),r}return s?(await s({params:r})).map((e,t)=>{let r=(e.id||t)+"";return a(e,r)}):[a(o,"")]}},7272:()=>{},6783:(e,t,r)=>{"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r.r(t),r.d(t,{_:()=>n,_interop_require_default:()=>n})}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,828],()=>r(895));module.exports=n})();