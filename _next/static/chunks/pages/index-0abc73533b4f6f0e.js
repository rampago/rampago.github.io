(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7700:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(8657)}])},428:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(1527),s=a(1090),i=a.n(s),n=a(7516),o=a(8945),l=a.n(o),A=a(959);function c(e){let{desain:t}=e,[a,s]=(0,A.useState)(!1),i=()=>{s(!a)};return(0,r.jsxs)("div",{className:"navbar px-6 ".concat(t),children:[(0,r.jsx)("div",{className:"navbar-start ",children:(0,r.jsxs)("div",{className:"dropdown",children:[(0,r.jsx)("label",{className:"btn btn-sm btn-ghost btn-square",onClick:i,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h7"})})}),(0,r.jsxs)("ul",{className:"".concat(a?"-translate-x-2 duration-300 ease-out":"-translate-x-28 duration-[400ms] ease-in"," menu menu-compact absolute z-50 left-2 mt-1 py-2 px-1 shadow rounded-box w-max"),children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/about",children:"About"})})]})]})}),(0,r.jsx)("div",{className:"navbar-center",children:(0,r.jsx)(l(),{href:"/",className:"btn btn-sm btn-ghost normal-case text-xl",children:"OctoMedia"})}),(0,r.jsx)("div",{className:"navbar-end",children:(0,r.jsx)("button",{className:"btn btn-sm btn-ghost",children:(0,r.jsx)(l(),{href:"/about",children:(0,r.jsx)("svg",{xlinkTitle:"About",fill:"currentColor",width:"20px",height:"20px",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM13,8H11V6h2Zm0,10H11V10h2Z"})})})})})]})}function d(e){let{title:t,children:a}=e,s=(0,n.useRouter)(),o=s.pathname;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsxs)("title",{children:[t," | Octomedia"]}),(0,r.jsx)("meta",{name:"description",content:"Octomedia"})]}),(0,r.jsx)(c,{desain:"/"===o?"bg-transparent text-gray-100 relative z-30":""}),(0,r.jsx)("div",{className:"".concat("/"===o?"absolute":""," top-0"),children:a})]})}},2412:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(5321).Z,s=a(1322).Z,i=a(6687).Z,n=a(6239).Z,o=i(a(959)),l=s(a(7515)),A=a(2046),c=a(5366),d=a(5571);a(4812);var u=s(a(6053));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/octomedia/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function f(e,t,a,s,i,n,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===a&&n(!0),null==s?void 0:s.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,l=!1;s.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let p=o.forwardRef((e,t)=>{var{imgAttributes:a,heightInt:s,widthInt:i,qualityInt:l,className:A,imgStyle:c,blurStyle:d,isLazy:u,fill:h,placeholder:g,loading:m,srcString:p,config:x,unoptimized:b,loader:w,onLoadRef:v,onLoadingCompleteRef:j,setBlurComplete:E,setShowAltText:y,onLoad:C,onError:N}=e,B=n(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=u?"lazy":m,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},B,a,{width:i,height:s,decoding:"async","data-nimg":h?"fill":"1",className:A,loading:m,style:r({},c,d),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&f(e,p,g,v,j,E,b))},[p,g,v,j,E,N,b,t]),onLoad:e=>{let t=e.currentTarget;f(t,p,g,v,j,E,b)},onError:e=>{y(!0),"blur"===g&&E(!0),N&&N(e)}})))}),x=o.forwardRef((e,t)=>{let a,s;var i,{src:f,sizes:x,unoptimized:b=!1,priority:w=!1,loading:v,className:j,quality:E,width:y,height:C,fill:N,style:B,onLoad:I,onLoadingComplete:Q,placeholder:S="empty",blurDataURL:M,layout:_,objectFit:D,objectPosition:k,lazyBoundary:P,lazyRoot:R}=e,z=n(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=o.useContext(d.ImageConfigContext),L=o.useMemo(()=>{let e=h||F||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),a=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:a})},[F]),O=z,U=O.loader||u.default;delete O.loader;let T="__next_img_default"in U;if(T){if("custom"===L.loader)throw Error('Image with src "'.concat(f,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let W=U;U=e=>{let{config:t}=e,a=n(e,["config"]);return W(a)}}if(_){"fill"===_&&(N=!0);let Z={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];Z&&(B=r({},B,Z));let G={responsive:"100vw",fill:"100vw"}[_];G&&!x&&(x=G)}let V="",H=m(y),J=m(C);if("object"==typeof(i=f)&&(g(i)||void 0!==i.src)){let K=g(f)?f.default:f;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(a=K.blurWidth,s=K.blurHeight,M=M||K.blurDataURL,V=K.src,!N){if(H||J){if(H&&!J){let Y=H/K.width;J=Math.round(K.height*Y)}else if(!H&&J){let q=J/K.height;H=Math.round(K.width*q)}}else H=K.width,J=K.height}}let X=!w&&("lazy"===v||void 0===v);((f="string"==typeof f?f:V).startsWith("data:")||f.startsWith("blob:"))&&(b=!0,X=!1),L.unoptimized&&(b=!0),T&&f.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(b=!0);let[$,ee]=o.useState(!1),[et,ea]=o.useState(!1),er=m(E),es=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:D,objectPosition:k}:{},et?{}:{color:"transparent"},B),ei="blur"===S&&M&&!$?{backgroundSize:es.objectFit||"cover",backgroundPosition:es.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(A.getImageBlurSvg({widthInt:H,heightInt:J,blurWidth:a,blurHeight:s,blurDataURL:M}),'")')}:{},en=function(e){let{config:t,src:a,unoptimized:r,width:s,quality:i,sizes:n,loader:o}=e;if(r)return{src:a,srcSet:void 0,sizes:void 0};let{widths:l,kind:A}=function(e,t,a){let{deviceSizes:r,allSizes:s}=e;if(a){let i=/(^|\s)(1?\d?\d)vw/g,n=[];for(let o;o=i.exec(a);o)n.push(parseInt(o[2]));if(n.length){let l=.01*Math.min(...n);return{widths:s.filter(e=>e>=r[0]*l),kind:"w"}}return{widths:s,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let A=[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))];return{widths:A,kind:"x"}}(t,s,n),c=l.length-1;return{sizes:n||"w"!==A?n:"100vw",srcSet:l.map((e,r)=>"".concat(o({config:t,src:a,quality:i,width:e})," ").concat("w"===A?e:r+1).concat(A)).join(", "),src:o({config:t,src:a,quality:i,width:l[c]})}}({config:L,src:f,unoptimized:b,width:H,quality:er,sizes:x,loader:U}),eo=f,el={imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:O.crossOrigin},eA=o.useRef(I);o.useEffect(()=>{eA.current=I},[I]);let ec=o.useRef(Q);o.useEffect(()=>{ec.current=Q},[Q]);let ed=r({isLazy:X,imgAttributes:en,heightInt:J,widthInt:H,qualityInt:er,className:j,imgStyle:es,blurStyle:ei,loading:v,config:L,fill:N,unoptimized:b,placeholder:S,loader:U,srcString:eo,onLoadRef:eA,onLoadingCompleteRef:ec,setBlurComplete:ee,setShowAltText:ea},O);return o.default.createElement(o.default.Fragment,null,o.default.createElement(p,Object.assign({},ed,{ref:t})),w?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},el))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2046:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:a,blurWidth:r,blurHeight:s,blurDataURL:i}=e,n=r||t,o=s||a,l=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return n&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(n," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&s?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},6053:function(e,t){"use strict";function a(e){let{config:t,src:a,width:r,quality:s}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(a),"&w=").concat(r,"&q=").concat(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a.__next_img_default=!0,t.default=a},8657:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var r=a(1527),s=a(1090),i=a.n(s),n=a(8945),o=a.n(n),l=a(428),A=a(1346),c=a.n(A),d={src:"/octomedia/_next/static/media/hero.adf7d09c.jpg",height:853,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAIIE3//EAB0QAAIBBAMAAAAAAAAAAAAAAAEDAgAEBREhIjH/2gAIAQEAAT8AZmLoqWkMb0gWiRYd8eA1/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACUf/aAAgBAgEBPwCq7P/EABYRAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAwEBPwCI/9k=",blurWidth:8,blurHeight:5},u={src:"/octomedia/_next/static/media/welcome.1ccfa126.jpg",height:720,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJQRP//EABoQAQEAAgMAAAAAAAAAAAAAAAIDAAEEguH/2gAIAQEAAT8Aly2JQDBaQodvr5n/xAAXEQEAAwAAAAAAAAAAAAAAAAABABEh/9oACAECAQE/AEpyf//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AI//2Q==",blurWidth:8,blurHeight:5};function h(e){let{}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"hero",children:[(0,r.jsx)(c(),{alt:"Welcome",src:d,width:2160,height:0,className:"relative object-cover h-screen"}),(0,r.jsx)("div",{className:"hero h-screen absolute bg-emerald-900 opacity-40"}),(0,r.jsxs)("div",{className:"hero-content flex-col lg:flex-row-reverse lg:gap-12 -translate-y-4",children:[(0,r.jsx)(c(),{alt:"Welcome",src:u,className:" w-[260px] h-[400px] object-cover rounded-lg shadow-lg hover:shadow-amber-500"}),(0,r.jsxs)("div",{className:"text-gray-100 mx-auto text-center lg:text-right",children:[(0,r.jsx)("h1",{className:"text-5xl font-bold",children:"Drone UAV Mapping"}),(0,r.jsx)("p",{className:"py-6",children:"The perspective from above with georeferences."}),(0,r.jsx)(o(),{href:"/#start",scroll:!1,className:"btn hover:border-b-slate-100 border-b-4 btn-warning",children:"Get Started"})]})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-3 place-items-center relative gap-4 -top-6 z-20 px-[20%]",children:[(0,r.jsx)("div",{className:"card w-60 h-24 bg-base-100 shadow-xl hover:shadow-emerald-800 image-full",children:(0,r.jsx)("div",{className:"card-body",children:(0,r.jsx)("div",{className:"card-actions justify-end",children:(0,r.jsx)("button",{className:"btn btn-primary",children:"Buy Now"})})})}),(0,r.jsx)("div",{className:"card w-60 h-24 bg-base-100 shadow-xl hover:shadow-emerald-800 image-full",children:(0,r.jsx)("div",{className:"card-body",children:(0,r.jsx)("div",{className:"card-actions justify-end",children:(0,r.jsx)("button",{className:"btn btn-primary",children:"Buy Now"})})})}),(0,r.jsx)("div",{className:"card w-60 h-24 bg-base-100 shadow-xl hover:shadow-emerald-800 image-full",children:(0,r.jsx)("div",{className:"card-body",children:(0,r.jsx)("div",{className:"card-actions justify-end",children:(0,r.jsx)("button",{className:"btn btn-primary",children:"Buy Now"})})})})]}),(0,r.jsx)("div",{id:"start",className:"-mt-24 relative h-[1000px] bg-slate-400 flex flex-col justify-end",children:(0,r.jsx)("h1",{className:"text-5xl font-bold",children:"Drone UAV Mapping Start"})})]})}h.getLayout=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("meta",{name:"description",content:"Welcome"},"")}),(0,r.jsx)(l.Z,{title:"Welcome",children:e})]})}},1346:function(e,t,a){e.exports=a(2412)}},function(e){e.O(0,[753,774,888,179],function(){return e(e.s=7700)}),_N_E=e.O()}]);