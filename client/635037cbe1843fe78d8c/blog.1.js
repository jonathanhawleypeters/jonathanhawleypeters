(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{4:function(t,e,c){"use strict";c.r(e),c.d(e,"preload",(function(){return r}));var s=c(0);function n(t,e,c){const s=Object.create(t);return s.post=e[c],s}function o(t){var e,c,n,o,l=t.post.title+"";return{c(){e=Object(s.o)("li"),c=Object(s.o)("a"),n=Object(s.H)(l),this.h()},l(t){e=Object(s.h)(t,"LI",{},!1);var o=Object(s.g)(e);c=Object(s.h)(o,"A",{rel:!0,href:!0},!1);var r=Object(s.g)(c);n=Object(s.j)(r,l),r.forEach(s.n),o.forEach(s.n),this.h()},h(){Object(s.e)(c,"rel","prefetch"),Object(s.e)(c,"href",o="blog/"+t.post.slug)},m(t,o){Object(s.x)(t,e,o),Object(s.c)(e,c),Object(s.c)(c,n)},p(t,e){t.posts&&l!==(l=e.post.title+"")&&Object(s.F)(n,l),t.posts&&o!==(o="blog/"+e.post.slug)&&Object(s.e)(c,"href",o)},d(t){t&&Object(s.n)(e)}}}function l(t){var e,c,l,r,b;let j=t.posts,O=[];for(let e=0;e<j.length;e+=1)O[e]=o(n(t,j,e));return{c(){e=Object(s.G)(),c=Object(s.o)("h1"),l=Object(s.H)("Recent posts"),r=Object(s.G)(),b=Object(s.o)("ul");for(let t=0;t<O.length;t+=1)O[t].c();this.h()},l(t){e=Object(s.i)(t),c=Object(s.h)(t,"H1",{},!1);var n=Object(s.g)(c);l=Object(s.j)(n,"Recent posts"),n.forEach(s.n),r=Object(s.i)(t),b=Object(s.h)(t,"UL",{class:!0},!1);var o=Object(s.g)(b);for(let t=0;t<O.length;t+=1)O[t].l(o);o.forEach(s.n),this.h()},h(){document.title="Blog",Object(s.e)(b,"class","svelte-1frg2tf")},m(t,n){Object(s.x)(t,e,n),Object(s.x)(t,c,n),Object(s.c)(c,l),Object(s.x)(t,r,n),Object(s.x)(t,b,n);for(let t=0;t<O.length;t+=1)O[t].m(b,null)},p(t,e){if(t.posts){let c;for(j=e.posts,c=0;c<j.length;c+=1){const s=n(e,j,c);O[c]?O[c].p(t,s):(O[c]=o(s),O[c].c(),O[c].m(b,null))}for(;c<O.length;c+=1)O[c].d(1);O.length=j.length}},i:s.A,o:s.A,d(t){t&&(Object(s.n)(e),Object(s.n)(c),Object(s.n)(r),Object(s.n)(b)),Object(s.m)(O,t)}}}function r({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function b(t,e,c){let{posts:s}=e;return t.$set=t=>{"posts"in t&&c("posts",s=t.posts)},{posts:s}}class j extends s.b{constructor(t){var e;super(),document.getElementById("svelte-1frg2tf-style")||((e=Object(s.o)("style")).id="svelte-1frg2tf-style",e.textContent="ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",Object(s.c)(document.head,e)),Object(s.w)(this,t,b,l,s.D,["posts"])}}e.default=j}}]);