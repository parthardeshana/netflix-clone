(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(15),a=n.n(r),o=(n(21),n(22),"4678d1cce557fd387853020033e0e16d"),s={fetchTrending:"/trending/all/week?api_key=".concat(o,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(o,"&with_networks=213"),fetchActionMovies:"/discover/movie?api_key=".concat(o,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(o,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(o,"&with_genres=27"),fetchRomanticMovies:"/discover/movie?api_key=".concat(o,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(o,"&with_genres=99")},l=n(3),d=n.n(l),h=n(4),u=n(5),f=n(16),b=n.n(f).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(42),n(0));var j=function(e){var t=e.title,n=e.fetchUrl,i=e.isLargeRow,r=Object(c.useState)([]),a=Object(u.a)(r,2),o=a[0],s=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(n);case 2:return t=e.sent,s(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("h2",{className:"row_title",children:t}),Object(v.jsx)("div",{className:"row_posters",children:o.map((function(e){return Object(v.jsx)("img",{className:"row_poster ".concat(i&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(i?e.backdrop_path:e.poster_path),alt:e.name},e.id)}))})]})};n(44);var p=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(s.fetchNetflixOriginals);case 2:t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(v.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===n||void 0===n?void 0:n.backdrop_path,'")'),backgroundPostion:"center center"},children:[Object(v.jsxs)("div",{className:"banner_content",children:[Object(v.jsx)("h1",{className:"banner_title",children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)}),Object(v.jsxs)("div",{className:"banner_buttons",children:[Object(v.jsx)("button",{className:"banner_button",children:"Play"}),Object(v.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(v.jsx)("h1",{className:"banner_description",children:null===n||void 0===n?void 0:n.overview})]}),Object(v.jsx)("div",{className:"banner_fadebottom"})]})};var m=function(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(p,{}),Object(v.jsx)(j,{title:"NetFlix Original",fetchUrl:s.fetchNetflixOriginals}),Object(v.jsx)(j,{title:"Trending Now",fetchUrl:s.fetchTrending,isLargeRow:!0}),Object(v.jsx)(j,{title:"Action Movies",fetchUrl:s.fetchActionMovies}),Object(v.jsx)(j,{title:"Romance Movies",fetchUrl:s.fetchRomanticMovies}),Object(v.jsx)(j,{title:"Horror Movies",fetchUrl:s.fetchRomanticMovies}),Object(v.jsx)(j,{title:"Comedy Movies",fetchUrl:s.fetchComedyMovies}),Object(v.jsx)(j,{title:"Documentries",fetchUrl:s.fetchDocumentaries})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(m,{})}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.3cae7656.chunk.js.map