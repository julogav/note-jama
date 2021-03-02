import React, { useState, useEffect } from 'react';
import { Text, Container } from '@chakra-ui/react';
import { authServices } from '../utils/firebase';

function SignOut(props) {
	const [message, setMessage] = useState();

	useEffect(() => {
		const response = authServices.signOut();
		if (response) {
			setMessage(`You've been signed out!`);
		}
	}, []);

	return <Container>{message && <Text>{message}</Text>}</Container>;
}

export default SignOut;
