/*! For license information please see 36.4674cd5c.chunk.js.LICENSE.txt */
(self.webpackChunkclient=self.webpackChunkclient||[]).push([[36],{7011:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return S}});var t=n(885),i=n(2791),r=n(7945),o=n.n(r),d=n(4038),s=n.p+"static/media/Absar.36ab9f088912e8217a3f.jpg",l=n.p+"static/media/Arman.cdb9f9a4f068005f4325.jfif",c=n.p+"static/media/Sohrab.27504dc6102041442829.jfif",m=n.p+"static/media/Guddu.7845d0e1bf90941f9a48.jpg",f=n.p+"static/media/maroof.2185022533686a97b031.jpg",u=n.p+"static/media/abedullah.29a524ae413917b8ec39.jfif",p=n.p+"static/media/sajjad.27574c5d7e687e55a4a9.jfif",v=n.p+"static/media/faryad.15037944f14a0d621c20.jfif",h=n.p+"static/media/Sarfaraj.66ddc704e0ca08940839.jfif",g=n.p+"static/media/6.9f3763d00570bddd5156.jfif",y=n.p+"static/media/raja.55462fc3df45956034d7.jfif",j=n.p+"static/media/ShifaMotors.7696e4e52316e60ac52e.jfif",b=n.p+"static/media/rehaN.a907a96b25e968e56caf.jfif",x=n(184),S=function(){var e=(0,i.useState)(!0),a=(0,t.Z)(e,2),n=a[0],r=a[1],S=[{sl:3,imgSor:s,name:"Md Nurul Huda",rs:1100,date:"Each Month"},{sl:4,imgSor:l,name:"Arman D. Noori",rs:1100,date:"24/02/2023"},{sl:5,imgSor:c,name:"Sohrab Alam",rs:800,date:"25/01/2023"},{sl:5,imgSor:m,name:"Nisar Ahmad Noor",rs:500,date:"24/02/2023"},{sl:6,imgSor:f,name:"Md Maroof Alam",rs:500,date:"24/02/2023"},{sl:7,imgSor:u,name:"Md Abedullah",rs:500,date:"24/02/2023"},{sl:8,imgSor:p,name:"Sajid Reza",rs:200,date:"24/02/2023"},{sl:9,imgSor:v,name:"Team Pradhan Faryad",rs:3600,date:"28/02/2023"},{sl:10,imgSor:h,name:"Sarfaraj Alam",rs:1e3,date:"01/03/2023"},{sl:11,imgSor:g,name:"Sarfaraj Alam",rs:500,date:"01/03/2023"},{sl:12,imgSor:y,name:"Raja Medicine",rs:300,date:"01/03/2023"},{sl:13,imgSor:j,name:"Shafa Motors Debiganj",rs:4e3,date:"01/03/2023"},{sl:14,imgSor:b,name:"Rehan",rs:500,date:"01/03/2023"}];return(0,i.useEffect)((function(){o().init({duration:2e3})}),[]),(0,x.jsx)("div",{id:"sponsors",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-12",children:(0,x.jsx)("h2",{style:{fontFamily:"cursive"},className:" pt-3 pb-2 text-decoration-underline",children:"List of the Sponsors / Hidden Heroes"})}),(0,x.jsx)(d.Z,{play:n,pauseOnHover:function(){r(!1)},gradient:!1,speed:50,direction:"left",children:S.map((function(e,a){var n=e.name,t=e.rs,i=e.date,r=e.imgSor;return(0,x.jsxs)("div",{className:"card shadow-lg ms-2 boxes p-2",style:{width:"12rem",margin:"0 auto"},children:[(0,x.jsx)("img",{style:{width:"70px",borderRadius:"20px",margin:"0 auto"},loading:"lazy",className:"card-img-top",src:r,alt:"img"}),(0,x.jsxs)("div",{children:[""===n?"":(0,x.jsx)("p",{style:{marginTop:"5px",fontWeight:"bold",color:"#4F0341"},children:n}),""===t?"":(0,x.jsxs)("p",{style:{marginTop:"-8px",color:"black"},children:["Rs. ",t]}),""===i?"":(0,x.jsxs)("p",{style:{marginTop:"-18px",color:"black"},children:["Date: ",i]})]})]},a)}))})]})})})}},4038:function(e,a,n){var t=n(2791);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=i(t),o=function(){return o=Object.assign||function(e){for(var a,n=1,t=arguments.length;n<t;n++)for(var i in a=arguments[n])Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);return e},o.apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var a=document.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e,document.head.appendChild(a)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');a.Z=function(e){var a,n,i,d,s=e.style,l=void 0===s?{}:s,c=e.className,m=void 0===c?"":c,f=e.play,u=void 0===f||f,p=e.pauseOnHover,v=void 0!==p&&p,h=e.pauseOnClick,g=void 0!==h&&h,y=e.direction,j=void 0===y?"left":y,b=e.speed,x=void 0===b?20:b,S=e.delay,w=void 0===S?0:S,N=e.loop,E=void 0===N?0:N,A=e.gradient,k=void 0===A||A,C=e.gradientColor,M=void 0===C?[255,255,255]:C,R=e.gradientWidth,q=void 0===R?200:R,z=e.onFinish,H=e.onCycleComplete,O=e.children,F=t.useState(0),T=F[0],L=F[1],Z=t.useState(0),D=Z[0],B=Z[1],P=t.useState(!1),W=P[0],X=P[1],G=t.useRef(null),I=t.useRef(null);t.useEffect((function(){if(W){var e=function(){I.current&&G.current&&(L(G.current.getBoundingClientRect().width),B(I.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[W]),t.useEffect((function(){X(!0)}),[]);var J="rgba("+M[0]+", "+M[1]+", "+M[2],K=D<T?T/x:D/x;return r.default.createElement(t.Fragment,null,W?r.default.createElement("div",{ref:G,style:o(o({},l),(a={},a["--pause-on-hover"]=!u||v?"paused":"running",a["--pause-on-click"]=!u||v&&!g||g?"paused":"running",a)),className:m+" marquee-container"},k&&r.default.createElement("div",{style:(n={},n["--gradient-color"]=J+", 1), "+J+", 0)",n["--gradient-width"]="number"===typeof q?q+"px":q,n),className:"overlay"}),r.default.createElement("div",{ref:I,style:(i={},i["--play"]=u?"running":"paused",i["--direction"]="left"===j?"normal":"reverse",i["--duration"]=K+"s",i["--delay"]=w+"s",i["--iteration-count"]=E?""+E:"infinite",i),className:"marquee",onAnimationIteration:H,onAnimationEnd:z},O),r.default.createElement("div",{style:(d={},d["--play"]=u?"running":"paused",d["--direction"]="left"===j?"normal":"reverse",d["--duration"]=K+"s",d["--delay"]=w+"s",d["--iteration-count"]=E?""+E:"infinite",d),className:"marquee","aria-hidden":"true"},O)):null)}}}]);
//# sourceMappingURL=36.4674cd5c.chunk.js.map