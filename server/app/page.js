(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4916:e=>{"use strict";e.exports=import("next-mdx-remote/rsc")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4369:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.ZP,__next_app__:()=>u,originalPathname:()=>d,pages:()=>c,routeModule:()=>m,tree:()=>o});var s=r(482),n=r(9108),a=r(260),i=r(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let o=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5983)),"D:\\1.Project\\TypeScript\\nextjs\\nextjs-blog-portfolio\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,5651))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9311)),"D:\\1.Project\\TypeScript\\nextjs\\nextjs-blog-portfolio\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,6178)),"D:\\1.Project\\TypeScript\\nextjs\\nextjs-blog-portfolio\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,5651))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\1.Project\\TypeScript\\nextjs\\nextjs-blog-portfolio\\app\\page.js"],d="/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},5748:(e,t,r)=>{Promise.resolve().then(r.bind(r,8023))},6004:(e,t,r)=>{Promise.resolve().then(r.bind(r,5368)),Promise.resolve().then(r.bind(r,6999)),Promise.resolve().then(r.t.bind(r,1476,23))},1959:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},6261:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23))},5303:()=>{},8023:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5344);function n({error:e}){return s.jsx("html",{children:s.jsx("body",{children:"Opppps!"})})}},5368:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(5344),n=r(2171);function a(){return s.jsx(s.Fragment,{children:s.jsx(n.default,{src:"/chatbot.js",strategy:"lazyOnload",onLoad:()=>initializeChatbot()})})}},6999:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5344),n=r(3729),a=r(5024);let i=(e="dark")=>{let[t,r]=(0,n.useState)(e),[s,i]=(0,a.fP)(["theme"]),l=e=>{r(e),document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(e),i("theme",e)};return{theme:t,toggleTheme:()=>{l("dark"===t?"light":"dark")}}},l={light:"\uD83C\uDF1A",dark:"\uD83C\uDF1D"};function o({defaultTheme:e}){let{theme:t,toggleTheme:r}=i(e);return s.jsx("button",{onClick:r,children:l[t]})}},8349:e=>{e.exports={link:"navigation_link__IVJqm"}},260:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>i});let s=(0,r(6843).createProxy)(String.raw`D:\1.Project\TypeScript\nextjs\nextjs-blog-portfolio\app\global-error.js`),{__esModule:n,$$typeof:a}=s,i=s.default},9311:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y,metadata:()=>v});var s=r(5036),n=r(7441),a=r.n(n);r(7272);let i=(e="dark")=>e;var l=r(6843);let o=(0,l.createProxy)(String.raw`D:\1.Project\TypeScript\nextjs\nextjs-blog-portfolio\components\dark-mode.js`),{__esModule:c,$$typeof:d}=o,u=o.default;var m=r(6274),x=r(8349),p=r.n(x);function h(){return s.jsx("nav",{className:"font-mono",children:(0,s.jsxs)("ul",{className:"flex md:space-x-4 flex-col md:flex-row",children:[s.jsx("li",{children:s.jsx(m.default,{href:"/",className:`${p().link} inline md:hidden`,children:"Home"})}),s.jsx("li",{children:s.jsx(m.default,{href:"/about",className:p().link,children:"About"})}),s.jsx("li",{children:s.jsx(m.default,{href:"/about/projects",className:p().link,children:"Projects"})}),s.jsx("li",{children:s.jsx(m.default,{href:"/photos",className:p().link,children:"Photos"})}),s.jsx("li",{children:s.jsx(m.default,{href:"/blog",className:p().link,children:"Blog"})}),s.jsx("li",{children:s.jsx(m.default,{href:"/experience",className:p().link,children:"Experience"})})]})})}function j(){let e=i();return(0,s.jsxs)("header",{className:"flex justify-between md:items-center mt-4",children:[(0,s.jsxs)("div",{className:"flex items-center md:space-x-12",children:[s.jsx("div",{className:"hidden md:block",children:s.jsx(m.default,{href:"/",className:"text-xl font-mono",children:"Piotr Jura"})}),s.jsx(h,{})]}),s.jsx("div",{children:s.jsx(u,{defaultTheme:e})})]})}let f=(0,l.createProxy)(String.raw`D:\1.Project\TypeScript\nextjs\nextjs-blog-portfolio\components\chatbot.js`),{__esModule:g,$$typeof:b}=f,P=f.default,v={title:{template:"%s | Piotr Jura",default:"Piotr Jura"}};function y({children:e}){let t=i();return s.jsx("html",{lang:"en",className:t,children:(0,s.jsxs)("body",{className:a().className,children:[s.jsx(j,{}),s.jsx("main",{className:"mt-12",children:e}),s.jsx(P,{})]})})}},6178:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5036);function n(){return(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"text-2xl",children:"404"}),s.jsx("div",{children:"Page was not found"})]})}},5983:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>c});var n=r(5036),a=r(7486),i=r(7678),l=r(6274),o=e([i]);async function c(){let{posts:e}=await (0,i.Jq)({newest:!0,limit:3});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("section",{className:"mb-8",children:[n.jsx(a.Z,{children:"Welcome to my page!"}),n.jsx("p",{children:"My name is Piotr, I am a web developer."}),(0,n.jsxs)("p",{children:["Checkout my ",n.jsx(l.default,{href:"/about/projects",className:"underline",children:"projects"}),", ",n.jsx(l.default,{href:"/photos",className:"underline",children:"photos"})," and ",n.jsx(l.default,{href:"/blog",className:"underline",children:"blog"}),"."]})]}),(0,n.jsxs)("section",{children:[n.jsx("h2",{className:"text-lg mb-8",children:"Latest on the blog"}),n.jsx("ul",{className:"font-mono",children:e.map(e=>(0,n.jsxs)("li",{children:[(0,n.jsxs)("span",{className:"text-gray-400",children:[e.frontmatter.date,"\xa0"]}),n.jsx(l.default,{href:`/blog/${e.slug}`,className:"underline",children:e.frontmatter.title})]},e.slug))})]})]})}i=(o.then?(await o)():o)[0],s()}catch(e){s(e)}})},7486:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5036);function n({children:e}){return s.jsx("h1",{className:"mb-8 text-2xl not-prose",children:e})}},7678:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Jq:()=>x,xl:()=>m});var n=r(5036),a=r(7147),i=r.n(a),l=r(1017),o=r.n(l),c=r(4916),d=r(7486),u=e([c]);async function m(e){let t=function(e){let t=e.endsWith(".mdx")?e:`${e}.mdx`;return i().readFileSync(o().join(process.cwd(),"content",t))}(e);return await (0,c.compileMDX)({source:t,components:{h1:e=>n.jsx(d.Z,{...e})},options:{parseFrontmatter:!0}})}async function x({newest:e=!0,page:t=1,limit:r=3,tags:s}={}){let n=i().readdirSync(o().join(process.cwd(),"content")),a=await Promise.all(n.map(async e=>{let{frontmatter:t}=await m(e);return{frontmatter:t,slug:e.replace(".mdx","")}}));return s&&(a=a.filter(e=>e.frontmatter.tags.some(e=>s.includes(e)))),e?a.sort((e,t)=>{let r=new Date(e.frontmatter.date);return new Date(t.frontmatter.date)-r}):a.sort((e,t)=>{let r=new Date(e.frontmatter.date),s=new Date(t.frontmatter.date);return r-s}),{posts:a.slice((t-1)*r,t*r),pageCount:Math.ceil(a.length/r)}}c=(u.then?(await u)():u)[0],s()}catch(e){s(e)}})},5651:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,828],()=>r(4369));module.exports=s})();