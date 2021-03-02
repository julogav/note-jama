import { Container, Heading, Button } from '@chakra-ui/react';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { authServices } from '../utils/firebase.js';

const SignUpForm = props => {
	const onGoogleSubmit = e => {
		e.preventDefault();
		const response = authServices.googleUser().then(authUser => {
			console.log(response);
			// props.history.push(ROUTES.HOME);
		});
	};
	const onFacebookSubmit = e => {
		e.preventDefault();
		const response = authServices.facebookUser().then(authUser => {
			console.log(response);
			// props.history.push(ROUTES.HOME);
		});
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

const SignUp = () => {
	return (
		<Container>
			<Heading pb='5'>Sign Up</Heading>
			<FirebaseAuthConsumer>
				<SignUpForm />
			</FirebaseAuthConsumer>
		</Container>
	);
};

export default SignUp;
