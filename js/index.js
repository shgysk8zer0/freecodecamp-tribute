import {$} from './std-js/functions.js';
import * as handler from './std-js/dataHandlers.js';
import deprefix from './std-js/deprefixer.js';

deprefix();

$(self).ready(() => {
	$('[data-scroll-to]').click(click => document.querySelector(click.target.dataset.scrollTo).scrollIntoView({behavior: 'smooth', block: 'start'}));
	$('[data-show-modal]').click(handler.showModal);
	$('[data-close]').click(handler.close);
	$('[data-social-share]').click(handler.socialShare);
}, {once: true});
