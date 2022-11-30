(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.login = login;
function login() {
	var d = document,
	    open = d.getElementById("btnLogin"),
	    close = d.getElementById("closeLogin"),
	    modal = d.getElementById("login");
	open.addEventListener("click", function () {
		modal.classList.add("active");
	});

	close.addEventListener("click", function () {
		modal.classList.remove("active");
	});
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var accordion = exports.accordion = function accordion() {
    var d = document,
        acc = document.getElementsByClassName("accordion-container__btn-acc");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tnsCarousell = exports.tnsCarousell = function tnsCarousell() {
	var slider = tns({
		container: '#tnsCarousell',
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		speed: 400,
		autoplay: true,
		nav: false,
		mouseDrag: true,
		controlsText: ['<i class="tns-carousell__prev fas fa-chevron-left"></i>', '<i class="tns-carousell__next fas fa-chevron-right"></i>'],
		responsive: {
			480: {
				items: 1
			},
			640: {
				items: 2
			},
			800: {
				items: 2
			},
			960: {
				items: 2
			},
			1120: {
				items: 4
			},
			1280: {
				items: 4
			}
		}
	});
};

var tnsBanca = exports.tnsBanca = function tnsBanca() {
	var slider = tns({
		container: '#tnsBanca',
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		speed: 400,
		nav: false,
		mouseDrag: true,
		controlsText: ['<i class="tns-carousell__prev fas fa-chevron-left"></i>', '<i class="tns-carousell__next fas fa-chevron-right"></i>'],
		responsive: {
			320: {
				items: 4
			},
			800: {
				items: 6
			},
			960: {
				items: 6
			},
			1120: {
				items: 7
			},
			1280: {
				items: 7
			}
		}
	});
};

var tnsSingle = exports.tnsSingle = function tnsSingle() {
	var slider = tns({
		container: '#tnsSingle',
		items: 1,
		slideBy: 1,
		speed: 1000,
		autoplay: true,
		autoplayButtonOutput: false,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
	});
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	// Aqui definimos las variables
	var d = document,
	    headerBtn = d.querySelector('.hamburger'),
	    menu = d.querySelector('.top-nav__menu');

	// aqui creamos la funcion que ejecuta el toogle del menu
	headerBtn.addEventListener('click', function (e) {
		e.preventDefault();
		headerBtn.classList.toggle('is-active'), menu.classList.toggle('is-active');
	});
};

},{}],5:[function(require,module,exports){
'use strict';

var _topNav = require('./components/topNav');

var _tnsSlider = require('./components/tns-slider');

var _Loginmodal = require('./components/Loginmodal');

var _promociones = require('./components/promociones');

(function () {
	(0, _topNav.topNav)();
	(0, _Loginmodal.login)();
	if (document.body.classList.contains('home')) {
		(0, _tnsSlider.tnsSingle)();
		(0, _tnsSlider.tnsBanca)();
	} else if (document.body.classList.contains('promociones')) {
		(0, _promociones.accordion)();
	}
})();

},{"./components/Loginmodal":1,"./components/promociones":2,"./components/tns-slider":3,"./components/topNav":4}]},{},[5]);

//# sourceMappingURL=scripts-min.js.map
