/*! For license information please see 539.a0a84b51.chunk.js.LICENSE.txt */
(self.webpackChunkclient=self.webpackChunkclient||[]).push([[539],{1737:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var i=t(885),a=t(2791),r=t(4038),o=t.p+"static/media/Banner.30c125ea49e38d016d69.jfif",d=t.p+"static/media/1.8cd41c84f239f0466ec0.jfif",c=t.p+"static/media/2.811a424e04af1d6532d5.jfif",l=t.p+"static/media/3.ad66953c9a6ad54e127e.jfif",s=t.p+"static/media/4.8d992c30a8af150bfe3f.jfif",f=t.p+"static/media/5.dcc3563931b0d7726271.jfif",u=t.p+"static/media/6.0200b7405f1de86661ae.jfif",m=t.p+"static/media/7.288016e8e45c4909aa1c.jfif",p=t.p+"static/media/8.04ae6d76a0a8f7528dd7.jfif",v=t.p+"static/media/10.3e527207b44c74b22052.jfif",g=t.p+"static/media/11.4e08b6a5191a69d990c0.jfif",h=t.p+"static/media/9.5eb910596d4bef190d48.jfif",y=t.p+"static/media/12.aed79b5dd29566521a0f.jfif",b=t.p+"static/media/13.b7d0b85c3cd80a1ec2c3.jfif",j=t(184),w=function(){var e=(0,a.useState)(!0),n=(0,i.Z)(e,2),t=n[0],w=n[1],S=[{imgSrc:o},{imgSrc:d},{imgSrc:c},{imgSrc:l},{imgSrc:s},{imgSrc:f},{imgSrc:u},{imgSrc:m},{imgSrc:p},{imgSrc:v},{imgSrc:g},{imgSrc:h},{imgSrc:y},{imgSrc:b}];return(0,j.jsxs)("div",{className:"bloodContainer",children:[(0,j.jsxs)("h1",{children:[(0,j.jsx)("span",{style:{color:"purple"},children:"Give the Gift of Life:"})," Successful Blood Donation Camp Held!"]}),(0,j.jsx)("h3",{style:{color:"purple"},children:"List of the Blood Donners 2023"}),(0,j.jsx)(r.Z,{play:t,pauseOnHover:function(){w(!1)},gradient:!1,speed:80,direction:"left",children:S.map((function(e,n){return console.log(e),(0,j.jsx)("div",{className:"card",style:{width:"18rem"},children:(0,j.jsx)("img",{className:"card-img-top",src:e.imgSrc,alt:"img"})},n)}))})]})}},4038:function(e,n,t){var i=t(2791);function a(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var r=a(i),o=function(){return o=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},o.apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');n.Z=function(e){var n,t,a,d,c=e.style,l=void 0===c?{}:c,s=e.className,f=void 0===s?"":s,u=e.play,m=void 0===u||u,p=e.pauseOnHover,v=void 0!==p&&p,g=e.pauseOnClick,h=void 0!==g&&g,y=e.direction,b=void 0===y?"left":y,j=e.speed,w=void 0===j?20:j,S=e.delay,x=void 0===S?0:S,C=e.loop,E=void 0===C?0:C,k=e.gradient,N=void 0===k||k,q=e.gradientColor,O=void 0===q?[255,255,255]:q,B=e.gradientWidth,L=void 0===B?200:B,z=e.onFinish,H=e.onCycleComplete,R=e.children,Z=i.useState(0),A=Z[0],D=Z[1],F=i.useState(0),G=F[0],X=F[1],I=i.useState(!1),M=I[0],P=I[1],T=i.useRef(null),W=i.useRef(null);i.useEffect((function(){if(M){var e=function(){W.current&&T.current&&(D(T.current.getBoundingClientRect().width),X(W.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[M]),i.useEffect((function(){P(!0)}),[]);var J="rgba("+O[0]+", "+O[1]+", "+O[2],K=G<A?A/w:G/w;return r.default.createElement(i.Fragment,null,M?r.default.createElement("div",{ref:T,style:o(o({},l),(n={},n["--pause-on-hover"]=!m||v?"paused":"running",n["--pause-on-click"]=!m||v&&!h||h?"paused":"running",n)),className:f+" marquee-container"},N&&r.default.createElement("div",{style:(t={},t["--gradient-color"]=J+", 1), "+J+", 0)",t["--gradient-width"]="number"===typeof L?L+"px":L,t),className:"overlay"}),r.default.createElement("div",{ref:W,style:(a={},a["--play"]=m?"running":"paused",a["--direction"]="left"===b?"normal":"reverse",a["--duration"]=K+"s",a["--delay"]=x+"s",a["--iteration-count"]=E?""+E:"infinite",a),className:"marquee",onAnimationIteration:H,onAnimationEnd:z},R),r.default.createElement("div",{style:(d={},d["--play"]=m?"running":"paused",d["--direction"]="left"===b?"normal":"reverse",d["--duration"]=K+"s",d["--delay"]=x+"s",d["--iteration-count"]=E?""+E:"infinite",d),className:"marquee","aria-hidden":"true"},R)):null)}}}]);
//# sourceMappingURL=539.a0a84b51.chunk.js.map