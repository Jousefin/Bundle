!function(){return function e(t,n,s){function i(r,a){if(!n[r]){if(!t[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(o)return o(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){return i(t[r][1][e]||e)},u,u.exports,e,t,n,s)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<s.length;r++)i(s[r]);return i}}()({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.login=function(){var e=document,t=e.getElementById("btnLogin"),n=e.getElementById("closeLogin"),s=e.getElementById("login");t.addEventListener("click",function(){s.classList.add("active")}),n.addEventListener("click",function(){s.classList.remove("active")})}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.tnsCarousell=function(){tns({container:"#tnsCarousell",items:1,slideBy:1,swipeAngle:!1,speed:400,autoplay:!0,nav:!1,mouseDrag:!0,controlsText:['<i class="tns-carousell__prev fas fa-chevron-left"></i>','<i class="tns-carousell__next fas fa-chevron-right"></i>'],responsive:{480:{items:1},640:{items:2},800:{items:2},960:{items:2},1120:{items:4},1280:{items:4}}})},n.tnsBanca=function(){tns({container:"#tnsBanca",items:1,slideBy:1,swipeAngle:!1,speed:400,nav:!1,mouseDrag:!0,controlsText:['<i class="tns-carousell__prev fas fa-chevron-left"></i>','<i class="tns-carousell__next fas fa-chevron-right"></i>'],responsive:{320:{items:4},800:{items:6},960:{items:6},1120:{items:7},1280:{items:7}}})},n.tnsSingle=function(){tns({container:"#tnsSingle",items:1,slideBy:1,speed:1e3,autoplay:!0,autoplayButtonOutput:!1,mode:"gallery",mouseDrag:!0,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']})}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.topNav=function(){var e=document,t=e.querySelector(".hamburger"),n=e.querySelector(".top-nav__menu");t.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("is-active"),n.classList.toggle("is-active")})}},{}],4:[function(e,t,n){"use strict";var s=e("./components/topNav"),i=e("./components/tns-slider"),o=e("./components/Loginmodal");(0,s.topNav)(),(0,i.tnsSingle)(),(0,i.tnsBanca)(),(0,o.login)()},{"./components/Loginmodal":1,"./components/tns-slider":2,"./components/topNav":3}]},{},[4]);
//# sourceMappingURL=scripts.js.map
