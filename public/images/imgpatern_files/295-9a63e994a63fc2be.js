(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{16204:function(a,b,c){"use strict";c.d(b,{Z:function(){return q}});var d=c(87462),e=c(45987),f=c(67294),g=c(86010),h=(0,c(63786).Z)(f.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),i=c(40922),j=c(59693),k=c(17294),l=c(93871),m=c(41810),n=function(a){var b="light"===a.palette.type?a.palette.grey[300]:a.palette.grey[700],c=(0,j.Fq)(a.palette.text.primary,.26);return{root:{fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.getContrastText(b),backgroundColor:b,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.type?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)},"& $avatarColorPrimary":{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark},"& $avatarColorSecondary":{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:a.palette.primary.main,color:a.palette.primary.contrastText},colorSecondary:{backgroundColor:a.palette.secondary.main,color:a.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,j._4)(b,.08)},"&:active":{boxShadow:a.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,j._4)(a.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,j._4)(a.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,j._4)(b,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,j._4)(a.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,j._4)(a.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===a.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,j.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:a.palette.primary.main,border:"1px solid ".concat(a.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,j.Fq)(a.palette.primary.main,a.palette.action.hoverOpacity)}},outlinedSecondary:{color:a.palette.secondary.main,border:"1px solid ".concat(a.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,j.Fq)(a.palette.secondary.main,a.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===a.palette.type?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:c,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,j.Fq)(c,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,j.Fq)(a.palette.primary.contrastText,.7),"&:hover, &:active":{color:a.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,j.Fq)(a.palette.secondary.contrastText,.7),"&:hover, &:active":{color:a.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,j.Fq)(a.palette.primary.main,.7),"&:hover, &:active":{color:a.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,j.Fq)(a.palette.secondary.main,.7),"&:hover, &:active":{color:a.palette.secondary.main}}}};function o(a){return"Backspace"===a.key||"Delete"===a.key}var p=f.forwardRef(function(a,b){var c=a.avatar,i=a.classes,j=a.className,n=a.clickable,p=a.color,q=void 0===p?"default":p,r=a.component,s=a.deleteIcon,t=a.disabled,u=void 0!==t&&t,v=a.icon,w=a.label,x=a.onClick,y=a.onDelete,z=a.onKeyDown,A=a.onKeyUp,B=a.size,C=a.variant,D=void 0===C?"default":C,E=(0,e.Z)(a,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),F=f.useRef(null),G=(0,k.Z)(F,b),H=function(a){a.stopPropagation(),y&&y(a)},I=function(a){a.currentTarget===a.target&&o(a)&&a.preventDefault(),z&&z(a)},J=function(a){a.currentTarget===a.target&&(y&&o(a)?y(a):"Escape"===a.key&&F.current&&F.current.blur()),A&&A(a)},K=!1!==n&&!!x||n,L="small"===(void 0===B?"medium":B),M=r||(K?m.Z:"div"),N=M===m.Z?{component:"div"}:{},O=null;if(y){var P=(0,g.Z)("default"!==q&&("default"===D?i["deleteIconColor".concat((0,l.Z)(q))]:i["deleteIconOutlinedColor".concat((0,l.Z)(q))]),L&&i.deleteIconSmall);O=s&&f.isValidElement(s)?f.cloneElement(s,{className:(0,g.Z)(s.props.className,i.deleteIcon,P),onClick:H}):f.createElement(h,{className:(0,g.Z)(i.deleteIcon,P),onClick:H})}var Q=null;c&&f.isValidElement(c)&&(Q=f.cloneElement(c,{className:(0,g.Z)(i.avatar,c.props.className,L&&i.avatarSmall,"default"!==q&&i["avatarColor".concat((0,l.Z)(q))])}));var R=null;return v&&f.isValidElement(v)&&(R=f.cloneElement(v,{className:(0,g.Z)(i.icon,v.props.className,L&&i.iconSmall,"default"!==q&&i["iconColor".concat((0,l.Z)(q))])})),f.createElement(M,(0,d.Z)({role:K||y?"button":void 0,className:(0,g.Z)(i.root,j,"default"!==q&&[i["color".concat((0,l.Z)(q))],K&&i["clickableColor".concat((0,l.Z)(q))],y&&i["deletableColor".concat((0,l.Z)(q))]],"default"!==D&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[q]],u&&i.disabled,L&&i.sizeSmall,K&&i.clickable,y&&i.deletable),"aria-disabled":!!u||void 0,tabIndex:K||y?0:void 0,onClick:x,onKeyDown:I,onKeyUp:J,ref:G},N,E),Q||R,f.createElement("span",{className:(0,g.Z)(i.label,L&&i.labelSmall)},w),O)}),q=(0,i.Z)(n,{name:"MuiChip"})(p)},63786:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(87462),e=c(67294),f=c(62087);function g(a,b){var c=function(b,c){return e.createElement(f.Z,(0,d.Z)({ref:c},b),a)};return c.muiName=f.Z.muiName,e.memo(e.forwardRef(c))}},79361:function(a,b){"use strict";b.Z=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}},28045:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(79361).Z,e=c(94941).Z,f=c(53929).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){var b,c,h=a.src,i=a.sizes,p=a.unoptimized,q=void 0!==p&&p,v=a.priority,B=void 0!==v&&v,D=a.loading,E=a.lazyRoot,F=void 0===E?null:E,G=a.lazyBoundary,H=a.className,I=a.quality,J=a.width,K=a.height,L=a.style,M=a.objectFit,N=a.objectPosition,O=a.onLoadingComplete,P=a.placeholder,Q=void 0===P?"empty":P,R=a.blurDataURL,S=j(a,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=k.useContext(o.ImageConfigContext),U=k.useMemo(function(){var a=s||T||m.imageConfigDefault,b=f(a.deviceSizes).concat(f(a.imageSizes)).sort(function(a,b){return a-b}),c=a.deviceSizes.sort(function(a,b){return a-b});return g({},a,{allSizes:b,deviceSizes:c})},[T]),V=S,W=i?"responsive":"intrinsic";"layout"in V&&(V.layout&&(W=V.layout),delete V.layout);var X=A;if("loader"in V){if(V.loader){var Y,Z=V.loader;X=function(a){a.config;var b=j(a,["config"]);return Z(b)}}delete V.loader}var $="";if(x(h)){var _=w(h)?h.default:h;if(!_.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(_)));if(R=R||_.blurDataURL,$=_.src,(!W||"fill"!==W)&&(K=K||_.height,J=J||_.width,!_.height||!_.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(_)))}h="string"==typeof h?h:$;var aa=!B&&("lazy"===D|| void 0===D);(h.startsWith("data:")||h.startsWith("blob:"))&&(q=!0,aa=!1),t.has(h)&&(aa=!1),r&&(q=!0);var ab=e(k.useState(!1),2),ac=ab[0],ad=ab[1],ae=e(n.useIntersection({rootRef:F,rootMargin:G||"200px",disabled:!aa}),3),af=ae[0],ag=ae[1],ah=ae[2],ai=!aa||ag,aj={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ak={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},al=!1,am=z(J),an=z(K),ao=z(I),ap=Object.assign({},L,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N}),aq="blur"!==Q||ac?{}:{backgroundSize:M||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(R,'")')};if("fill"===W)aj.display="block",aj.position="absolute",aj.top=0,aj.left=0,aj.bottom=0,aj.right=0;else if(void 0!==am&& void 0!==an){var ar=an/am,as=isNaN(ar)?"100%":"".concat(100*ar,"%");"responsive"===W?(aj.display="block",aj.position="relative",al=!0,ak.paddingTop=as):"intrinsic"===W?(aj.display="inline-block",aj.position="relative",aj.maxWidth="100%",al=!0,ak.maxWidth="100%",b="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(am,"%27%20height=%27").concat(an,"%27/%3e")):"fixed"===W&&(aj.display="inline-block",aj.position="relative",aj.width=am,aj.height=an)}var at={src:u,srcSet:void 0,sizes:void 0};ai&&(at=y({config:U,src:h,unoptimized:q,layout:W,width:am,quality:ao,sizes:i,loader:X}));var au=h,av=(d(c={},"imagesrcset",at.srcSet),d(c,"imagesizes",at.sizes),c),aw=k.default.useLayoutEffect,ax=k.useRef(O),ay=k.useRef(h);k.useEffect(function(){ax.current=O},[O]),aw(function(){ay.current!==h&&(ah(),ay.current=h)},[ah,h]);var az=g({isLazy:aa,imgAttributes:at,heightInt:an,widthInt:am,qualityInt:ao,layout:W,className:H,imgStyle:ap,blurStyle:aq,loading:D,config:U,unoptimized:q,placeholder:Q,loader:X,srcString:au,onLoadingCompleteRef:ax,setBlurComplete:ad,setIntersection:af,isVisible:ai,noscriptSizes:i},V);return k.default.createElement(k.default.Fragment,null,k.default.createElement("span",{style:aj},al?k.default.createElement("span",{style:ak},b?k.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:b}):null):null,k.default.createElement(C,Object.assign({},az))),B?k.default.createElement(l.default,null,k.default.createElement("link",Object.assign({key:"__nimg-"+at.src+at.srcSet+at.sizes,rel:"preload",as:"image",href:at.srcSet?void 0:at.src},av))):null)};var g=c(6495).Z,h=c(92648).Z,i=c(91598).Z,j=c(17273).Z,k=i(c(67294)),l=h(c(5443)),m=c(99309),n=c(57190),o=c(59977);c(63794);var p=c(82392),q={deviceSizes:[1200,1024,834,768,524,425,375,320],imageSizes:[16,32,48,64,96,128,256,384],path:"/designers/subtlepatterns/_next/image//",loader:"default",dangerouslyAllowSVG:!1},r=(q.experimentalRemotePatterns,q.experimentalUnoptimized),s={deviceSizes:[1200,1024,834,768,524,425,375,320],imageSizes:[16,32,48,64,96,128,256,384],path:"/designers/subtlepatterns/_next/image//",loader:"default",dangerouslyAllowSVG:!1},t=new Set,u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality;return c.endsWith(".svg")&&!b.dangerouslyAllowSVG?c:"".concat(p.normalizePathTrailingSlash(b.path),"?url=").concat(encodeURIComponent(c),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=new URL("".concat(b.path).concat(D(c))),g=f.searchParams;return g.set("auto",g.getAll("auto").join(",")||"format"),g.set("fit",g.get("fit")||"max"),g.set("w",g.get("w")||d.toString()),e&&g.set("q",e.toString()),f.href}],["cloudinary",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b.path).concat(f).concat(D(c))}],["akamai",function(a){var b=a.config,c=a.src,d=a.width;return"".concat(b.path).concat(D(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw Error('Image with src "'.concat(b,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(a){return void 0!==a.default}function x(a){var b;return"object"==typeof a&&(w(a)|| void 0!==(b=a).src)}function y(a){var b=a.config,c=a.src,d=a.unoptimized,e=a.layout,g=a.width,h=a.quality,i=a.sizes,j=a.loader;if(d)return{src:c,srcSet:void 0,sizes:void 0};var k=function(a,b,c,d){var e=a.deviceSizes,g=a.allSizes;if(d&&("fill"===c||"responsive"===c)){for(var h=/(^|\s)(1?\d?\d)vw/g,i=[];j=h.exec(d);j)i.push(parseInt(j[2]));if(i.length){var j,k,l=.01*(k=Math).min.apply(k,f(i));return{widths:g.filter(function(a){return a>=e[0]*l}),kind:"w"}}return{widths:g,kind:"w"}}return"number"!=typeof b||"fill"===c||"responsive"===c?{widths:e,kind:"w"}:{widths:f(new Set([b,2*b].map(function(a){return g.find(function(b){return b>=a})||g[g.length-1]}))),kind:"x"}}(b,g,e,i),l=k.widths,m=k.kind,n=l.length-1;return{sizes:i||"w"!==m?i:"100vw",srcSet:l.map(function(a,d){return"".concat(j({config:b,src:c,quality:h,width:a})," ").concat("w"===m?a:d+1).concat(m)}).join(", "),src:j({config:b,src:c,quality:h,width:l[n]})}}function z(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function A(a){var b,c=(null==(b=a.config)?void 0:b.loader)||"default",d=v.get(c);if(d)return d(a);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "),". Received: ").concat(c))}function B(a,b,c,d,e,f){a&&a.src!==u&&a["data-loaded-src"]!==b&&(a["data-loaded-src"]=b,("decode"in a?a.decode():Promise.resolve()).catch(function(){}).then(function(){if(a.parentNode&&(t.add(b),"blur"===d&&f(!0),null==e?void 0:e.current)){var c=a.naturalWidth,g=a.naturalHeight;e.current({naturalWidth:c,naturalHeight:g})}}))}var C=function(a){var b=a.imgAttributes,c=(a.heightInt,a.widthInt),d=a.qualityInt,e=a.layout,f=a.className,h=a.imgStyle,i=a.blurStyle,l=a.isLazy,m=a.placeholder,n=a.loading,o=a.srcString,p=a.config,q=a.unoptimized,r=a.loader,s=a.onLoadingCompleteRef,t=a.setBlurComplete,u=a.setIntersection,v=a.onLoad,w=a.onError,x=(a.isVisible,a.noscriptSizes),z=j(a,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return n=l?"lazy":n,k.default.createElement(k.default.Fragment,null,k.default.createElement("img",Object.assign({},z,b,{decoding:"async","data-nimg":e,className:f,style:g({},h,i),ref:k.useCallback(function(a){u(a),(null==a?void 0:a.complete)&&B(a,o,e,m,s,t)},[u,o,e,m,s,t,]),onLoad:function(a){B(a.currentTarget,o,e,m,s,t),v&&v(a)},onError:function(a){"blur"===m&&t(!0),w&&w(a)}})),(l||"blur"===m)&&k.default.createElement("noscript",null,k.default.createElement("img",Object.assign({},z,y({config:p,src:o,unoptimized:q,layout:e,width:c,quality:d,sizes:x,loader:r}),{decoding:"async","data-nimg":e,style:h,className:f,loading:n}))))};function D(a){return"/"===a[0]?a.slice(1):a}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},5534:function(a,b,c){"use strict";c.d(b,{Z:function(){return t}});var d=c(67294),e=c(94184),f=c.n(e),g=c(41120),h=c(29815),i=c(48071),j=c(46674),k=(0,g.Z)(j.Z,{name:"PicassoSvgLogoEmblem"}),l=(0,d.forwardRef)(function(a,b){var c=a.className,e=a.style,g=a.color,j=a.scale,l=a.base,m=a["data-testid"],n=k(a),o=[n.root,c],p=l||16*Math.ceil(j||1),q=(0,i.Z)("".concat(g));n[q]&&o.push(n[q]);var r=Object.assign({minWidth:"".concat(p,"px"),minHeight:"".concat(p,"px")},void 0===e?{}:e);return d.createElement("svg",{viewBox:"0 0 21 30",className:f().apply(void 0,(0,h.Z)(o)),style:r,ref:b,"data-testid":m},d.createElement("path",{d:"M8.185 0 21 12.958l-9.611 9.646 4.402 4.438L12.856 30 0 17l9.57-9.625-4.361-4.396L8.185 0Zm4.01 10.708c-.066.017-.132.06-.23.152l-.08.078-5.457 5.5c-.165.145-.207.229-.227.312a.597.597 0 0 0 0 .27c.016.067.06.134.15.233l.077.08 1.736 1.75c.145.167.228.209.31.23.104.02.186.02.27 0a.488.488 0 0 0 .242-.156l.067-.074 5.457-5.5c.165-.146.207-.229.227-.312a.597.597 0 0 0 0-.271c-.016-.067-.06-.133-.15-.232l-.077-.08-1.736-1.75c-.145-.167-.228-.209-.31-.23a.584.584 0 0 0-.27 0ZM18.313 0c.744 0 1.385.27 1.902.792.516.52.785 1.166.785 1.916a2.59 2.59 0 0 1-.785 1.896 2.595 2.595 0 0 1-1.902.792c-.744 0-1.364-.25-1.88-.792a2.59 2.59 0 0 1-.786-1.896c0-.75.248-1.375.785-1.916A2.583 2.583 0 0 1 18.313 0Zm.02.438c-.62 0-1.157.229-1.57.666a2.178 2.178 0 0 0-.662 1.604c0 .625.207 1.167.641 1.604.434.438.95.667 1.592.667.62 0 1.157-.229 1.57-.667.435-.437.662-.979.662-1.604 0-.646-.227-1.166-.661-1.604-.435-.437-.951-.667-1.571-.667Zm.187.791c.6 0 .93.354.93.833 0 .417-.31.73-.724.813l.724 1.313h-.496l-.724-1.292h-.475v1.292h-.434V1.228h1.199Zm-.083.396h-.682v.896h.682c.372 0 .579-.146.579-.438 0-.312-.186-.458-.579-.458Z",fillRule:"evenodd"}))});l.displayName="SvgLogoEmblem";var m=l,n=(0,g.Z)(j.Z,{name:"PicassoSvgLogo"}),o=(0,d.forwardRef)(function(a,b){var c=a.className,e=a.style,g=a.color,j=a.scale,k=a.base,l=a["data-testid"],m=n(a),o=[m.root,c],p=k||16*Math.ceil(j||1),q=(0,i.Z)("".concat(g));m[q]&&o.push(m[q]);var r=Object.assign({minWidth:"".concat(p,"px"),minHeight:"".concat(p,"px")},void 0===e?{}:e);return d.createElement("svg",{viewBox:"0 0 109 30",className:f().apply(void 0,(0,h.Z)(o)),style:r,ref:b,"data-testid":l},d.createElement("path",{d:"m8.065 0 6.664 6.664c.048.043.097.092.15.145l5.814 5.816-9.455 9.405 4.331 4.332-2.898 2.88-6.621-6.621c-.076-.07-.156-.15-.237-.231L0 16.58l9.422-9.368L5.13 2.918 8.065 0Zm4.218 10.442a.425.425 0 0 0-.259 0c-.086.022-.161.065-.312.215L6.33 16.016c-.156.156-.194.225-.22.311a.422.422 0 0 0 0 .258c.026.086.07.162.22.312l1.708 1.71c.156.155.226.193.312.22a.425.425 0 0 0 .259 0c.086-.027.161-.065.307-.215l5.382-5.359c.156-.156.194-.225.22-.311a.422.422 0 0 0 0-.258c-.02-.086-.064-.162-.215-.312l-1.708-1.71c-.156-.155-.226-.193-.312-.22Z",fill:"var(--logo-emblem-color)"}),d.createElement("path",{d:"M63.533 7.41c2.158 0 3.996.832 5.466 2.449 1.486 1.57 2.237 3.72 2.229 6.397-.008 2.622-.774 4.906-2.292 6.523-1.501 1.609-3.417 2.425-5.7 2.425-1.974-.007-3.757-.713-4.942-1.926l-.173-.185L58.105 30l-3.902-.008v-.29l.047-22.096 3.879.008-.008 2.692c1.275-1.436 3.331-2.896 5.412-2.896Zm24.993.055c2.23 0 3.77.502 4.95 1.475 1.13.94 1.737 2.61 1.788 4.369l.004.278-.024 11.397h-3.95v-.479c0-.486-.001-.992-.007-1.499-1.142 1.586-2.737 2.355-4.864 2.355-1.69 0-3.113-.51-4.16-1.46-1.057-.965-1.62-2.284-1.612-3.823.015-2.888 2.055-4.884 5.627-5.516l.293-.049 4.74-.745v-.377c0-.8-.235-1.766-.704-2.159-.485-.408-1.064-.753-2.08-.753-2.786 0-3.354 2.055-3.385 3.088l-.002.09-3.503.048c0-1.523.703-3.493 2.135-4.733 1.14-.99 2.808-1.452 4.421-1.503l.302-.004h.031ZM73.222 3.006l3.887.008L77.1 7.67l3.613.008-.008 3.241-3.613-.007-.016 8.736c0 .957.204 1.585.618 1.884.438.314 1.33.023 1.33.023l.352 3.399s-1.228.314-2.01.314c-1.017 0-1.877-.26-2.55-.77-1.079-.816-1.634-2.252-1.626-4.262l.015-9.324-3.26-3.258 3.268.008.008-4.655Zm-22.96 6.955c1.118 1.161 2.455 3.21 2.447 6.397-.008 3.187-1.345 5.228-2.463 6.381-1.533 1.57-3.613 2.473-5.71 2.473-.085 0-.171 0-.257-.008-2.245-.008-4.223-.808-5.881-2.378-1.666-1.586-2.51-3.768-2.51-6.507 0-2.74.852-4.922 2.526-6.5 1.65-1.562 3.628-2.354 5.873-2.354 2.22-.063 4.387.847 5.974 2.496Zm-9.01-7.198v3.854l-7.523.008L33.745 25l-4.059-.008v-.353l.031-18.022h-7.671l.007-3.854h19.2Zm55.892.259 3.504.008v.094l-.04 21.852-3.495-.007v-.102l.031-21.845Zm9.22 16.688c.72 0 1.353.259 1.862.777.516.518.774 1.138.774 1.868 0 .738-.258 1.35-.774 1.852a2.522 2.522 0 0 1-1.861.77c-.728 0-1.346-.252-1.846-.77a2.498 2.498 0 0 1-.766-1.852c0-.722.25-1.35.766-1.868s1.134-.777 1.846-.777Zm.016.431c-.61 0-1.126.22-1.548.652-.43.424-.642.942-.642 1.562 0 .612.204 1.138.634 1.577.422.424.938.644 1.556.644.61 0 1.126-.22 1.549-.644.422-.431.64-.95.64-1.577a2.13 2.13 0 0 0-.64-1.562 2.087 2.087 0 0 0-1.549-.652Zm.172.77c.579 0 .923.345.923.816 0 .4-.297.706-.704.785l.712 1.271h-.485v.008l-.704-1.256h-.477v1.256h-.43v-2.88h1.165Zm-.062.384h-.673v.88h.673c.375 0 .555-.142.555-.432 0-.299-.188-.448-.555-.448ZM91.31 16.9l-3.894.659c-1.9.322-2.784 1.067-2.792 2.347-.008 1.179.83 1.962 2.127 2.035l.18.006h.016c2.486 0 4.255-1.944 4.359-4.764l.004-.244v-.04Zm-47.047-5.966c-1.306 0-2.44.502-3.355 1.5-.9.98-1.36 2.291-1.36 3.9 0 1.61.46 2.92 1.352 3.901.915 1.005 2.05 1.508 3.355 1.515 1.33 0 2.472-.502 3.387-1.499.922-1.005 1.384-2.315 1.392-3.9.007-1.594-.462-2.905-1.385-3.902-.915-1.005-2.056-1.515-3.386-1.515Zm18.339.118h-.016c-1.306 0-2.393.479-3.316 1.468-.915.957-1.376 2.205-1.384 3.712 0 1.523.454 2.889 1.377 3.886.938.965 2.025 1.444 3.323 1.444 1.322 0 2.432-.487 3.324-1.436.93-.99 1.376-2.355 1.384-3.878.008-1.515-.461-2.763-1.368-3.713-.884-.98-2.002-1.483-3.324-1.483Z",fill:"var(--logo-text-color)"}))});o.displayName="SvgLogo";var p=o,q=c(27207),r=(0,g.Z)(function(a){var b=a.palette;return(0,q.Z)({root:{fontSize:"1.875rem",verticalAlign:"baseline"},rootEmblem:{fontSize:"1.875rem",verticalAlign:"baseline"},default:{color:b.blue.main,"--logo-text-color":b.common.black,"--logo-emblem-color":b.blue.main},blue:{color:b.blue.main,"--logo-text-color":b.common.black,"--logo-emblem-color":b.blue.main},white:{color:b.common.white,"--logo-text-color":b.common.white,"--logo-emblem-color":b.common.white},black:{color:b.common.black,"--logo-text-color":b.common.black,"--logo-emblem-color":b.common.black},grey:{color:b.grey.darker,"--logo-text-color":b.grey.darker,"--logo-emblem-color":b.grey.darker}})},{name:"PicassoLogo"}),s=(0,d.forwardRef)(function(a,b){var c=a.emblem,e=a.variant,g=a.style,h=a.className,i=a["data-testid"],j=r(),k=c?j.rootEmblem:j.root,l=j[void 0===e?"default":e];return d.createElement(c?m:p,{ref:b,className:f()(k,l,h),style:g,"data-testid":i})});s.defaultProps={variant:"default"},s.displayName="Logo";var t=s},25675:function(a,b,c){a.exports=c(28045)}}])