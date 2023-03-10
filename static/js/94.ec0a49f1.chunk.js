"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[94],{5094:function(e,r,t){t.r(r),t.d(r,{default:function(){return F}});var n,a,o,s,i,c,u,p,l=t(5861),f=t(9439),h=t(7757),d=t.n(h),x=t(1087),v=t(7689),w=t(2791),g=t(7596),m=t(9128),y=t(168),b=t(6444),Z=(0,b.ZP)(x.rU)(n||(n=(0,y.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin-left: 100px;\n  :hover {\n    color: teal;\n    font-weight: bold;\n  }\n"]))),k=t(184),j=function(e){var r=e.to,t=e.children;return(0,k.jsxs)(Z,{to:r,children:[(0,k.jsx)(m.jTe,{size:"20"}),t]})},_=t(761),S=t(8033),q=t(985),E=b.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  gap: 40px;\n  padding-left: 100px;\n"]))),P=b.ZP.img(o||(o=(0,y.Z)(["\n  width: 700px;\n  border-radius: 5px;\n"]))),U=b.ZP.h2(s||(s=(0,y.Z)(["\n  font-size: 24px;\n  margin-bottom: 20px;\n"]))),z=b.ZP.p(i||(i=(0,y.Z)(["\n  font-size: 18px;\n  margin-bottom: 20px;\n"]))),T=b.ZP.h3(c||(c=(0,y.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),C=b.ZP.div(u||(u=(0,y.Z)(["\n  padding: 40px 0 40px 100px;\n  border-bottom: solid teal;\n"]))),A=b.ZP.li(p||(p=(0,y.Z)(["\n  padding-bottom: 10px;\n  font-size: 20px;\n\n  :hover {\n    text-decoration: underline;\n    color: teal;\n    font-weight: bold;\n  }\n"]))),F=function(){var e,r,t=null!==(e=null===(r=(0,v.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",n=(0,v.UO)().movieId,a=(0,w.useState)([]),o=(0,f.Z)(a,2),s=o[0],i=o[1];return(0,w.useEffect)((function(){function e(){return(e=(0,l.Z)(d().mark((function e(){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.TP)(n);case 3:r=e.sent,i(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,g.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,k.jsxs)("main",{children:[(0,k.jsx)(j,{to:t,children:"Go back"}),(0,k.jsxs)(E,{children:[(0,k.jsx)(P,{src:s.poster_path?"".concat("https://image.tmdb.org/t/p/w400")+s.poster_path:q,alt:s.title||s.name}),(0,k.jsxs)("div",{children:[(0,k.jsxs)(U,{children:[s.title," (",s.release_date?s.release_date.slice(0,4):" No year",")"]}),(0,k.jsxs)(z,{children:["User Score:"," ",s.vote_average?Math.floor(10*s.vote_average).toFixed(0):"","%"]}),(0,k.jsx)(T,{children:" Overview"}),(0,k.jsx)(z,{children:s.overview}),(0,k.jsx)(T,{children:"Genres"}),(0,k.jsx)(z,{children:s.genres?s.genres.map((function(e){return e.name})).join(" "):"Sorry genre not found."})]})]}),(0,k.jsxs)(C,{children:[(0,k.jsx)(U,{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)(A,{children:(0,k.jsx)(x.rU,{to:"cast",children:"Cast"})}),(0,k.jsx)(A,{children:(0,k.jsx)(x.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,k.jsx)(w.Suspense,{fallback:(0,k.jsx)(S.a,{}),children:(0,k.jsx)(v.j3,{})})]})}},761:function(e,r,t){t.d(r,{NV:function(){return p},TP:function(){return d},UF:function(){return c},tx:function(){return v},zv:function(){return f}});var n=t(5861),a=t(7757),o=t.n(a),s=t(1243),i="1256f1c895c40ff76f99ba50b7102dca";function c(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?api_key=".concat(i));case 3:if(0!==(r=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, but nothing was found for your request!");case 6:return e.abrupt("return",r.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(r,"&include_adult=false"));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data.results);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits?api_key=").concat(i));case 3:if((t=e.sent).data.cast.length){e.next=6;break}throw Error("Sorry, no casts were found for your request!");case 6:return e.abrupt("return",t.data.cast);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"?api_key=").concat(i));case 3:if(0!==(t=e.sent).data.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",t.data);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(o().mark((function e(r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(i));case 3:if((t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no reviews were found for your request!");case 6:return e.abrupt("return",t.data.results);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=16;break}throw Error("Sorry, something went wrong, please try again!");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"},985:function(e,r,t){e.exports=t.p+"static/media/poster.4dcb9bf2a4987bbe3077.png"}}]);
//# sourceMappingURL=94.ec0a49f1.chunk.js.map