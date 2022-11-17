export const tnsSingle = () => {
	const slider = tns({
		container: '#tnsSingle',
		items: 1,
		slideBy: 1,
		autoplay: true,
		autoplayButtonOutput: false,
		speed: 1000,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>'
		]
	});
};


export const tnsCarousel = () => {
	let slider = tns({
		container: '#tnsCarousel',
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		speed: 400,
		edgePadding: 40,
		nav: false,
		mouseDrag: true,
		controlsText: [
			'<i class="tns-carousell__prev fas fa-chevron-left"></i>',
			'<i class="tns-carousell__next fas fa-chevron-right"></i>'
		],
		responsive: {
			480: {
				items: 2
			},
			640: {
				items: 3
			},
			800: {
				items: 4
			},
			960: {
				items: 5
			},
			1120: {
				items: 6
			},
			1280: {
				items: 7
			}
		}
	});
};

