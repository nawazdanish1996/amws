/*! For license information please see 874.bee4b8f9.chunk.js.LICENSE.txt */
(self.webpackChunkclient=self.webpackChunkclient||[]).push([[874],{6086:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return v}});var t=a(885),i=a(2791),r=a(7945),o=a.n(r),s=a(4038),d=a.p+"static/media/Samsad.e0510ae7c69463e16295.jfif",l=a.p+"static/media/Absar.36ab9f088912e8217a3f.jpg",c=a.p+"static/media/Arman.cdb9f9a4f068005f4325.jfif",u=a.p+"static/media/Sohrab.27504dc6102041442829.jfif",m=a.p+"static/media/Guddu.7845d0e1bf90941f9a48.jpg",f=a.p+"static/media/maroof.2185022533686a97b031.jpg",p=a(184),v=function(){var e=(0,i.useState)(!0),n=(0,t.Z)(e,2),a=n[0],r=n[1],v=[{sl:2,imgSor:d,name:"Samsad Alam",rs:1500,date:"09/02/2023"},{sl:3,imgSor:l,name:"Md Nurul Huda",rs:1100,date:"Each Month"},{sl:4,imgSor:c,name:"Arman D. Noori",rs:500,date:"25/01/2023"},{sl:5,imgSor:u,name:"Sohrab Alam",rs:800,date:"25/01/2023"},{sl:5,imgSor:m,name:"Nisar Ahmad Noor",rs:1100,date:"25/01/2023"},{sl:6,imgSor:f,name:"Md Maroof Alam",rs:500,date:"02/02/2023"}];return(0,i.useEffect)((function(){o().init({duration:2e3})}),[]),(0,p.jsx)("div",{id:"sponsors",children:(0,p.jsx)("div",{className:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-12",children:(0,p.jsx)("h2",{style:{fontFamily:"cursive"},className:" pt-3 pb-2 text-decoration-underline",children:"List of the Sponsors / Hidden Heroes"})}),(0,p.jsx)(s.Z,{play:a,pauseOnHover:function(){r(!1)},gradient:!1,speed:25,direction:"left",children:v.map((function(e,n){var a=e.name,t=e.rs,i=e.date,r=e.imgSor;return(0,p.jsxs)("div",{className:"card shadow-lg ms-2 boxes p-2",style:{width:"10rem",margin:"0 auto"},children:[(0,p.jsx)("img",{style:{width:"70px",borderRadius:"20px",margin:"0 auto"},loading:"lazy",className:"card-img-top",src:r,alt:"img"}),(0,p.jsxs)("div",{children:[""===a?"":(0,p.jsx)("h6",{style:{marginTop:"5px",color:"#4F0341"},children:a}),""===t?"":(0,p.jsxs)("p",{style:{marginTop:"-8px",color:"black"},children:["Rs. ",t]}),""===i?"":(0,p.jsxs)("p",{style:{marginTop:"-18px",color:"black"},children:["Date: ",i]})]})]},n)}))})]})})})}},4038:function(e,n,a){var t=a(2791);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=i(t),o=function(){return o=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var i in n=arguments[a])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},o.apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');n.Z=function(e){var n,a,i,s,d=e.style,l=void 0===d?{}:d,c=e.className,u=void 0===c?"":c,m=e.play,f=void 0===m||m,p=e.pauseOnHover,v=void 0!==p&&p,h=e.pauseOnClick,g=void 0!==h&&h,y=e.direction,x=void 0===y?"left":y,b=e.speed,w=void 0===b?20:b,j=e.delay,S=void 0===j?0:j,N=e.loop,E=void 0===N?0:N,k=e.gradient,A=void 0===k||k,C=e.gradientColor,q=void 0===C?[255,255,255]:C,H=e.gradientWidth,O=void 0===H?200:H,R=e.onFinish,z=e.onCycleComplete,M=e.children,F=t.useState(0),L=F[0],T=F[1],Z=t.useState(0),B=Z[0],D=Z[1],X=t.useState(!1),G=X[0],I=X[1],P=t.useRef(null),W=t.useRef(null);t.useEffect((function(){if(G){var e=function(){W.current&&P.current&&(T(P.current.getBoundingClientRect().width),D(W.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[G]),t.useEffect((function(){I(!0)}),[]);var J="rgba("+q[0]+", "+q[1]+", "+q[2],K=B<L?L/w:B/w;return r.default.createElement(t.Fragment,null,G?r.default.createElement("div",{ref:P,style:o(o({},l),(n={},n["--pause-on-hover"]=!f||v?"paused":"running",n["--pause-on-click"]=!f||v&&!g||g?"paused":"running",n)),className:u+" marquee-container"},A&&r.default.createElement("div",{style:(a={},a["--gradient-color"]=J+", 1), "+J+", 0)",a["--gradient-width"]="number"===typeof O?O+"px":O,a),className:"overlay"}),r.default.createElement("div",{ref:W,style:(i={},i["--play"]=f?"running":"paused",i["--direction"]="left"===x?"normal":"reverse",i["--duration"]=K+"s",i["--delay"]=S+"s",i["--iteration-count"]=E?""+E:"infinite",i),className:"marquee",onAnimationIteration:z,onAnimationEnd:R},M),r.default.createElement("div",{style:(s={},s["--play"]=f?"running":"paused",s["--direction"]="left"===x?"normal":"reverse",s["--duration"]=K+"s",s["--delay"]=S+"s",s["--iteration-count"]=E?""+E:"infinite",s),className:"marquee","aria-hidden":"true"},M)):null)}}}]);
//# sourceMappingURL=874.bee4b8f9.chunk.js.map