import{S as L,i as P,s as j,k as m,q as x,a as A,l as v,m as _,r as k,h as d,c as C,n as u,b as F,G as o,u as w,H as S,I as G}from"../chunks/index.24b1ae6c.js";import{s as H}from"../chunks/singletons.bdaf7db8.js";const z=()=>{const i=H;return{page:{subscribe:i.page.subscribe},navigating:{subscribe:i.navigating.subscribe},updated:i.updated}},B={subscribe(i){return z().page.subscribe(i)}};function q(i){let e,r,t,a;return{c(){e=m("p"),r=x("Lost in the void? Fear not, go back "),t=m("a"),a=x("home"),this.h()},l(n){e=v(n,"P",{class:!0});var l=_(e);r=k(l,"Lost in the void? Fear not, go back "),t=v(l,"A",{class:!0,href:!0});var b=_(t);a=k(b,"home"),b.forEach(d),l.forEach(d),this.h()},h(){u(t,"class","underline-offset-8 underline dark:text-primary cursor-pointer custom-underline-effect-primary"),u(t,"href","/"),u(e,"class","text-3xl dark:text-white font-inter")},m(n,l){F(n,e,l),o(e,r),o(e,t),o(t,a)},d(n){n&&d(e)}}}function J(i){var $;let e,r,t,a,n=i[0].status+"",l,b,g=(($=i[0].error)==null?void 0:$.message)+"",E,I,f,s=i[0].status===404&&q();return{c(){e=m("div"),r=m("div"),t=m("div"),a=m("p"),l=x(n),b=x(` :
				`),E=x(g),I=A(),f=m("div"),s&&s.c(),this.h()},l(c){e=v(c,"DIV",{class:!0});var p=_(e);r=v(p,"DIV",{class:!0});var h=_(r);t=v(h,"DIV",{class:!0});var D=_(t);a=v(D,"P",{class:!0});var y=_(a);l=k(y,n),b=k(y,` :
				`),E=k(y,g),y.forEach(d),D.forEach(d),I=C(h),f=v(h,"DIV",{class:!0});var V=_(f);s&&s.l(V),V.forEach(d),h.forEach(d),p.forEach(d),this.h()},h(){u(a,"class","text-5xl font-montserrat font-extrabold text-red-500"),u(t,"class","p-4 text-center"),u(f,"class","py-4 text-center"),u(r,"class","grid grid-rows-2"),u(e,"class","dark:bg-dark flex-grow flex items-center justify-center")},m(c,p){F(c,e,p),o(e,r),o(r,t),o(t,a),o(a,l),o(a,b),o(a,E),o(r,I),o(r,f),s&&s.m(f,null)},p(c,[p]){var h;p&1&&n!==(n=c[0].status+"")&&w(l,n),p&1&&g!==(g=((h=c[0].error)==null?void 0:h.message)+"")&&w(E,g),c[0].status===404?s||(s=q(),s.c(),s.m(f,null)):s&&(s.d(1),s=null)},i:S,o:S,d(c){c&&d(e),s&&s.d()}}}function K(i,e,r){let t;return G(i,B,a=>r(0,t=a)),[t]}let O=class extends L{constructor(e){super(),P(this,e,K,J,j,{})}};export{O as component};
