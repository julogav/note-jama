import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import firebase from 'firebase/app';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { firebaseConfig } from './utils/firebase';
import { theme } from './utils/theme';

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
			<App />
		</FirebaseAuthProvider>
	</ChakraProvider>,

	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
