!function(){return function e(t,n,s){function o(c,r){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!r&&a)return a(c,!0);if(i)return i(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[c]={exports:{}};t[c][0].call(u.exports,function(e){return o(t[c][1][e]||e)},u,u.exports,e,t,n,s)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<s.length;c++)o(s[c]);return o}}()({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.login=function(){var e=document,t=e.getElementById("btnLogin"),n=e.getElementById("closeLogin"),s=e.getElementById("login-container");t.addEventListener("click",function(){s.classList.add("active")}),n.addEventListener("click",function(){s.classList.remove("active")})}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.accordion=function(){for(var e=document.getElementsByClassName("accordion-container__btn-acc"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})}},{}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.tnsCarousell=function(){tns({container:"#tnsCarousell",items:1,slideBy:1,swipeAngle:!1,speed:400,autoplay:!0,nav:!1,mouseDrag:!0,controlsText:['<i class="tns-carousell__prev fas fa-chevron-left"></i>','<i class="tns-carousell__next fas fa-chevron-right"></i>'],responsive:{480:{items:1},640:{items:2},800:{items:2},960:{items:2},1120:{items:4},1280:{items:4}}})},n.tnsBanca=function(){tns({container:"#tnsBanca",items:1,slideBy:1,swipeAngle:!1,speed:400,nav:!1,mouseDrag:!0,controlsText:['<i class="tns-carousell__prev fas fa-chevron-left"></i>','<i class="tns-carousell__next fas fa-chevron-right"></i>'],responsive:{320:{items:4},800:{items:6},960:{items:6},1120:{items:7},1280:{items:7}}})},n.tnsSingle=function(){tns({container:"#tnsSingle",items:1,slideBy:1,speed:1e3,autoplay:!0,autoplayButtonOutput:!1,mode:"gallery",mouseDrag:!0,controlsText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']})}},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.topNav=function(){var e=document,t=e.querySelector(".hamburger"),n=e.querySelector(".top-nav__menu");t.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("is-active"),n.classList.toggle("is-active")})}},{}],5:[function(e,t,n){"use strict";var s=e("./components/topNav"),o=e("./components/tns-slider"),i=e("./components/Loginmodal"),c=e("./components/promociones");(0,s.topNav)(),(0,i.login)(),document.body.classList.contains("home")?((0,o.tnsSingle)(),(0,o.tnsBanca)()):document.body.classList.contains("promociones")&&(0,c.accordion)()},{"./components/Loginmodal":1,"./components/promociones":2,"./components/tns-slider":3,"./components/topNav":4}]},{},[5]);
//# sourceMappingURL=scripts.js.map
