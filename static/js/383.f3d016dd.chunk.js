"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[383],{3463:function(e,t,r){r.d(t,{e:function(){return o}});var n=r(501),a=r(6871),u="MovieList_ul__Mzqz8",i="MovieList_li__ig-MJ",c="MovieList_link__kgmyF",s=r(184),o=function(e){var t=(0,a.TH)();console.log({items:e});var r=e.items.map((function(e){var r=e.id,a=e.name,u=e.original_title,o=e.original_name,f=e.title;return(0,s.jsx)("li",{className:i,children:(0,s.jsx)(n.rU,{className:c,state:{from:t},to:"/movies/".concat(r),children:a||u||f||o})},r)}));return(0,s.jsx)("ul",{className:u,children:r})};o.defaultProps={items:[]}},6383:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(1413),a=r(5861),u=r(885),i=r(7757),c=r.n(i),s=r(4942),o=r(2791),f=r(184),p=function(e){var t=e.onSubmit,r=(0,o.useState)({search:""}),a=(0,u.Z)(r,2),i=a[0],c=a[1];return(0,f.jsxs)("form",{c:!0,onSubmit:function(e){e.preventDefault(),t((0,n.Z)({},i)),c({search:""})},children:[(0,f.jsx)("input",{name:"search",value:i.search,onChange:function(e){var t=e.target,r=t.name,a=t.value;c((0,n.Z)((0,n.Z)({},i),{},(0,s.Z)({},r,a)))},placeholder:"Search",type:"text",required:!0}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},l=r(1933),v=r(3463),h=r(501),m=function(){var e=(0,o.useState)({items:[],loading:!1,error:null}),t=(0,u.Z)(e,2),r=t[0],i=t[1],s=(0,h.lr)(),m=(0,u.Z)(s,2),d=m[0],b=m[1],g=d.get("query");console.log(g),(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!0})})),e.next=4,(0,l.zi)(g);case 4:t=e.sent,i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{items:t.results})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i((function(t){return(0,n.Z)((0,n.Z)({},t),{},{error:e.t0})}));case 11:return e.prev=11,i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();g&&e()}),[g]);var _=r.items;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onSubmit:function(e){var t=e.search;b({query:t})}}),_.length>0&&(0,f.jsx)(v.e,{items:_})]})}},1933:function(e,t,r){r.d(t,{Cr:function(){return l},XT:function(){return s},Yp:function(){return o},fH:function(){return p},zi:function(){return f}});var n=r(5861),a=r(7757),u=r.n(a),i=r(4569),c=r.n(i),s=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/trending/all/day?api_key=7af231239b59455ee05c6b874689512b");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=7af231239b59455ee05c6b874689512b"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/search/movie?api_key=7af231239b59455ee05c6b874689512b&query=".concat(t,"&page=1&include_adult=false"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=7af231239b59455ee05c6b874689512b"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=7af231239b59455ee05c6b874689512b"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=383.f3d016dd.chunk.js.map