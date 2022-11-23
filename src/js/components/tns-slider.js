

export const tnsCarousell = () => {
	let slider = tns({
		container: '#tnsCarousell',
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		speed: 400,
		autoplay: true,
		nav: false,
		mouseDrag: true,
		controlsText: [
			'<i class="tns-carousell__prev fas fa-chevron-left"></i>',
			'<i class="tns-carousell__next fas fa-chevron-right"></i>'
		],
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


export const tnsBanca = () => {
	let slider = tns({
		container: '#tnsBanca',
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		speed: 400,
		nav: false,
		mouseDrag: true,
		controlsText: [
			'<i class="tns-carousell__prev fas fa-chevron-left"></i>',
			'<i class="tns-carousell__next fas fa-chevron-right"></i>'
		],
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


export const tnsSingle = () => {
	let slider = tns({
		container: '#tnsSingle',
		items: 1,
		slideBy: 1,
		speed: 1000,
		autoplay: true,
		autoplayButtonOutput: false,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>'
		]
	});
};



