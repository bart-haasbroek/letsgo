import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
	outputTargets: [
		{
			type: 'www',
			serviceWorker: {
				swSrc: 'src/sw.js',
				globPatterns: [
					'**/*.{js,css,json,html,ico,png}'
				]
			}
		}
	],
	plugins: [
		sass()
	],
	copy: [
		{ src: '_redirects' }
	],
	globalScript: 'src/global/app.ts',
	globalStyle: 'src/global/app.scss'
};
