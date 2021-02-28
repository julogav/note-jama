import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	colors: {
		myGray: '#283f3bff',
		verdigris: '#48a9a6ff',
		teaGreen: '#def2c8ff',
		silverPink: '#cfb1b7ff',
		myRed: '#ce1483ff',
	},
	fonts: {
		body: 'system-ui, sans-serif',
		heading: 'Georgia, serif',
		mono: 'Menlo, monospace',
	},
});

export default theme;
