import { topNav } from './components/topNav';
import { tnsSingle, tnsBanca } from './components/tns-slider';
import { login } from './components/Loginmodal';
import { accordion } from './components/promociones';
import { casino } from './components/casino';

(() => {
	topNav();
	login();
	accordion();
	if (document.body.classList.contains('home')) {
		tnsSingle();
		tnsBanca();
	} else if (document.body.classList.contains('promociones')) {
		
	}
})();
