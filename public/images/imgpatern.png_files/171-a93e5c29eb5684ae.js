(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[171],{79178:function(a,b,c){"use strict";c.d(b,{Z:function(){return m}});var d,e,f=c(85893);(e=d||(d={})).PatternCard="pattern-card";var g=c(93228),h=c.n(g),i=function(a){var b=a.children;return(0,f.jsx)(f.Fragment,{children:b})},j=function(a){var b=a.children;return(0,f.jsx)("div",{className:h().content,children:b})},k=function(a){var b=a.children;return(0,f.jsx)("div",{className:h().bottom,children:b})},l=function(a){var b=a.children;return(0,f.jsx)("div",{className:h().card,"data-testid":d.PatternCard,children:b})};l.Top=i,l.Content=j,l.Bottom=k;var m=l},78692:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d,e,f=c(14924),g=c(85893),h=c(94184),i=c.n(h);(e=d||(d={})).PatternCardAuthor="pattern-author";var j=function(a){var b=a.href,c=a.className,d=a.children;return(0,g.jsx)("a",{href:b,className:c,target:"_blank",rel:"nofollow noopener noreferrer",children:d})},k=j,l=c(75343),m=c.n(l),n=function(a){var b=a.author,c=void 0===b?"":b,e=a.authorWebsite,h=void 0===e?"":e,j=a.variant;return(0,g.jsxs)("div",{className:i()(m().author,(0,f.Z)({},m().white,"white"===(void 0===j?"default":j))),"data-testid":d.PatternCardAuthor,children:["Made by"," ",h?(0,g.jsx)(k,{href:h,className:m().name,children:c}):(0,g.jsx)("span",{children:c})]})},o=n},46952:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d,e,f=c(85893);(e=d||(d={})).CardImage="card-image";var g=c(15944),h=c.n(g),i=function(a){var b=a.children;return(0,f.jsx)("div",{className:h().image,"data-testid":d.CardImage,children:b})},j=i},36195:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d,e,f=c(14924),g=c(85893),h=c(72167),i=c(94184),j=c.n(i);(e=d||(d={})).PatternTimestamp="pattern-timestamp";var k=c(23051),l=c.n(k),m=function(a){var b=a.as,c=a.variant,e=a.date,i=(0,h.Z)(new Date(e),"yyyy-MM-dd");return(0,g.jsx)(void 0===b?"div":b,{className:l().timestamp,children:(0,g.jsx)("span",{className:j()(l().date,(0,f.Z)({},l().white,"white"===(void 0===c?"default":c))),"data-testid":d.PatternTimestamp,"data-happo-hide":!0,children:i})})},n=m},7369:function(a,b,c){"use strict";c.d(b,{Z:function(){return l}});var d,e,f=c(85893),g=c(41664),h=c.n(g);(e=d||(d={})).CardTitle="card-title";var i=c(60624),j=c.n(i),k=function(a){var b=a.as,c=a.title,e=a.href;return(0,f.jsx)(h(),{href:void 0===e?"":e,children:(0,f.jsx)("a",{className:j().title,children:(0,f.jsx)(void 0===b?"h3":b,{"data-testid":d.CardTitle,children:void 0===c?"":c})})})},l=k},52305:function(a,b,c){"use strict";c.d(b,{Z:function(){return r}});var d=c(85893),e=c(67294),f=c(94184),g=c.n(f),h=c(41664),i=c.n(h),j=c(9008),k=c.n(j),l=c(84433),m=c(36030),n=c.n(m),o=c(29815),p=function(a,b){var c=Array.from(Array(b+1).keys()).slice(1);if(b<=9)return c;var d=Math.min(Math.max(a,5),b-3),e=d-3,f=d+2;(2===c[d-3]||c[d+2]===b-1)&&f++,(2===c[d-4]||c[d+1]===b-1)&&e--;var g=c.slice(e,f);return[1].concat((0,o.Z)(2===g[0]?[]:["..."]),(0,o.Z)(g),(0,o.Z)(g[g.length-1]===b-1?[]:["..."]),[b])},q=function(a){var b=a.pages,c=a.currentPage,f=a.generateLink,h=(0,e.useRef)(null);if(b<2)return null;var j,m,o=p(c,b),q=function(a,b,c){return(0,d.jsx)(i(),{href:f(a),children:(0,d.jsxs)("a",{className:c,children:[b,(0,d.jsxs)(k(),{children:["Prev"===b&&(0,d.jsx)("link",{rel:"prev",href:l.GW+f(a)}),"Next"===b&&(0,d.jsx)("link",{rel:"next",href:l.GW+f(a)})]})]})},b)};return(0,d.jsxs)("div",{className:g()(n().pagination),ref:h,children:[1!==(j=c)?q(j-1,"Prev",n().button):(0,d.jsx)("span",{className:g()(n().button,n().disabled),children:"Prev"}),o.length>0?o.map(function(a,b){var e,f;return"..."===a?(0,d.jsx)("div",{className:n().dots,children:"..."},"dots-".concat(b)):(e=a,e===(f=c)?(0,d.jsx)("span",{className:g()(n().button,n().primary,n().pageNumber),children:e},e):q(e,"".concat(e),g()(n().button,n().default,n().pageNumber)))}):null,(m=c)!==b?q(m+1,"Next",n().button):(0,d.jsx)("span",{className:g()(n().button,n().disabled),children:"Next"})]})},r=q},38880:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d,e,f=c(14924),g=c(85893),h=c(94184),i=c.n(h);(e=d||(d={})).PatternBlock="pattern-block";var j=c(34250),k=c(74259),l=c.n(k),m=function(a){var b=a.children,c=a.title,e=a.isRelated;return(0,g.jsxs)(g.Fragment,{children:[c&&(0,g.jsx)(j.Z,{title:c}),(0,g.jsx)("div",{className:i()(l().patterns,(0,f.Z)({},l().related,void 0!==e&&e)),"data-testid":d.PatternBlock,children:b})]})},n=m},46402:function(a,b,c){"use strict";c.d(b,{Z:function(){return B}});var d=c(85893),e=c(41664),f=c.n(e),g=c(11163),h=c(67294),i=c(81098),j=function(a){var b=a.trackEventData,c=a.matchURL,d=(0,g.useRouter)();(0,h.useEffect)(function(){if(b){var a=function(a){a===c&&(0,i.L9)(b)};return d.events.on("routeChangeStart",a),function(){d.events.off("routeChangeStart",a)}}})},k=c(50847),l=c(79178),m=c(78692),n=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:"",b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:60,c=arguments.length>2&& void 0!==arguments[2]?arguments[2]:"...",d=a.replace(/(<([^>]+)>)/gi,"");return d.length<b?d:"."===d[b-1]?"".concat(d.slice(0,b-1)).concat(c):"".concat(d.slice(0,b)).concat(c)},o=n,p=c(60176),q=c.n(p),r=function(a){var b=a.description;return(0,d.jsx)("div",{className:q().description,children:(0,d.jsx)("p",{children:o(void 0===b?"":b)})})},s=r,t=c(46952),u=c(28101),v=c(36195),w=c(7369),x=c(67472),y=c(15984),z=c(48023),A=function(a){var b=a.src,c=a.url,e=a.author,g=a.authorWebsite,h=a.title,i=a.timestamp,n=a.description,o=a.viewMoreLabel,p=a.downloadLabel,q=a.loading,r=a.trackEventDataDownload,A=a.trackEventDataNavigation;return j({trackEventData:A,matchURL:k.Z.publicRelative(c)}),(0,d.jsxs)(l.Z,{children:[(0,d.jsx)(l.Z.Top,{children:(0,d.jsx)(t.Z,{children:(0,d.jsx)(f(),{href:c,children:(0,d.jsx)("a",{"data-testid":x.m.ImageLink,children:(0,d.jsx)(y.Z,{src:b,loading:q})})})})}),(0,d.jsxs)(l.Z.Content,{children:[(0,d.jsx)(w.Z,{href:c,title:h}),(0,d.jsx)(m.Z,{authorWebsite:g,author:e}),(0,d.jsx)(v.Z,{date:i}),(0,d.jsx)(s,{description:n})]}),(0,d.jsxs)(l.Z.Bottom,{children:[(0,d.jsx)(u.Z,{href:b,testId:x.m.DownloadButton,variant:"white",label:p,trackEventData:r}),(0,d.jsx)(z.Z,{size:2}),(0,d.jsx)(u.Z,{href:c,testId:x.m.ViewMoreButton,variant:"cta",label:o})]})]})},B=A},67472:function(a,b,c){"use strict";var d,e;c.d(b,{m:function(){return d}}),(e=d||(d={})).AllPatternsButton="all-patterns-button",e.ImageLink="image-link",e.DownloadButton="download-button",e.ViewMoreButton="view-more-button"},15984:function(a,b,c){"use strict";c.d(b,{Z:function(){return p}});var d,e,f=c(14924),g=c(26042),h=c(69396),i=c(85893),j=c(94184),k=c.n(j);(e=d||(d={})).PatternPreviewer="pattern-previewer";var l=c(5625),m=c.n(l),n=c(34155),o=function(a){var b,c=a.src,e=a.isTag,j="eager"===a.loading||n.env.IS_HAPPO,l=j?{style:{backgroundImage:"url(".concat(c,")")}}:{"data-bg":c};return(0,i.jsx)("div",(0,h.Z)((0,g.Z)({className:k()(m().patternPreviewer,(b={},(0,f.Z)(b,m().isTag,void 0!==e&&e),(0,f.Z)(b,"lazy",!j),b))},l),{"data-testid":d.PatternPreviewer}))},p=o},52171:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return m},default:function(){return n}});var d=c(85893),e=c(50847),f=c(56496),g=c(83003),h=c(45222),i=c(52305),j=c(38880),k=c(46402),l=c(34250),m=!0;function n(a){var b=a.patterns,c=a.page,m=a.pages,n=a.total,o=function(a){return 1===a?e.Z.allPatterns:e.Z.patternPage(encodeURIComponent(a))},p="".concat(n," Patterns ").concat(c>1?" - Page ".concat(c):"");return(0,d.jsxs)(h.Z,{title:c>1?(0,f.pz)("All Patterns - Page ".concat(c)):(0,f.pz)("All Patterns"),description:"".concat((0,f.DR)(c,m)),children:[(0,d.jsx)(g.Z,{fullWidth:!0,children:(0,d.jsx)(l.Z,{title:p,type:"header",variant:"blue"})}),(0,d.jsxs)(g.Z,{children:[(0,d.jsx)("div",{style:{marginTop:"-120px"},children:(0,d.jsx)(j.Z,{children:b.map(function(a,b){return(0,d.jsx)(k.Z,{loading:b<3?"eager":"lazy",id:a.id,author:a.author,authorWebsite:a.author_website,src:a.image_url,title:a.title,url:e.Z.pattern(a.slug),timestamp:new Date(a.uploaded_at),description:a.description||"",viewMoreLabel:"View More",downloadLabel:"Download Pattern",trackEventDataDownload:{action:"cta - download Pattern",params:{event_category:"interaction",event_label:"download (list:".concat(a.title,")")}}},a.id)})})}),(0,d.jsx)(i.Z,{pages:m,currentPage:c,generateLink:o})]})]})}},93228:function(a){a.exports={card:"Card_card__gPbEF",top:"Card_top__82q2z",content:"Card_content__PqccE",bottom:"Card_bottom__1acuz"}},75343:function(a){a.exports={author:"CardAuthor_author__mFvV_",name:"CardAuthor_name__Z5QqK",white:"CardAuthor_white__xAUfo"}},60176:function(a){a.exports={description:"CardDescription_description__WMzkN"}},15944:function(a){a.exports={image:"CardImage_image__gVLMR"}},23051:function(a){a.exports={timestamp:"CardTimestamp_timestamp__Zpp5L",date:"CardTimestamp_date__oLWLG",white:"CardTimestamp_white__jHzVM"}},60624:function(a){a.exports={title:"CardTitle_title__KLV26"}},36030:function(a){a.exports={pagination:"Pagination_pagination__7dLfp","page-number":"Pagination_page-number__y4i73",pageNumber:"Pagination_page-number__y4i73",dots:"Pagination_dots__gpjKG",button:"Pagination_button__T7YHG",disabled:"Pagination_disabled__p1Hv8",default:"Pagination_default__DuxiD",primary:"Pagination_primary__V3jOB"}},74259:function(a){a.exports={patterns:"PatternBlock_patterns__UvPoJ",related:"PatternBlock_related__aRCQN",title:"PatternBlock_title__nLMae"}},5625:function(a){a.exports={"pattern-previewer":"PatternPreviewer_pattern-previewer__cDFWm",patternPreviewer:"PatternPreviewer_pattern-previewer__cDFWm","is-tag":"PatternPreviewer_is-tag__zBcCz",isTag:"PatternPreviewer_is-tag__zBcCz"}}}])