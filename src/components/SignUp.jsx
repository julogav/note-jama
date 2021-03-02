import { Container, Heading, Button, Text } from '@chakra-ui/react';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { useState } from 'react';
import { authServices } from '../utils/firebase.js';

const SignUp = () => {
	const [message, setMessage] = useState();
	const SignUpForm = props => {
		const onGoogleSubmit = e => {
			e.preventDefault();
			const response = authServices.googleUser();
			if (response) setMessage(`You've been logged in through Google!`);
		};
		const onFacebookSubmit = e => {
			e.preventDefault();
			const response = authServices.facebookUser();
			if (response) setMessage(`You've been logged in through Facebook!`);
		};
		return (
			<>
				<Button mt='5' type='submit' onClick={onGoogleSubmit}>
					Sign up with Google
				</Button>
				<Button mt='5' type='submit' onClick={onFacebookSubmit}>
					Sign up with Facebook
				</Button>
			</>
		);
	};
	return (
		<Container>
			<Heading pb='5'>Sign Up</Heading>
			{message && <Text>{message}</Text>}
			<FirebaseAuthConsumer>
				<SignUpForm />
			</FirebaseAuthConsumer>
		</Container>
	);
};

export default SignUp;
