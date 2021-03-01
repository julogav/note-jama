import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		pageColors: {
			gray: '#283f3b',
			Verdigris: '#48a9a6',
			green: '#def2c8',
			pink: '#cfb1b7',
			red: '#ce1483',
		},
	},
	fonts: {
		body: 'system-ui, sans-serif',
		heading: 'Georgia, serif',
		mono: 'Menlo, monospace',
	},
	// components: {
	// 	Button: {
	// 		fontWeight: '400',
	// 		color: 'Medium Violet Red',
	// 	},
	// },
});
