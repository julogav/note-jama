import React, { useState } from 'react';
import { SignUpLink } from '../SignUp';
import * as ROUTES from '../../utils/routes';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
// import Firebase from '../../firebase';

const SignInForm = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const isInvalid = password === '' || email === '';

	const onSubmit = e => {
		e.preventDefault();
		// 	const userCred = {
		// 		email: email,
		// 		password: password,
		// 	};
		// 	Firebase.signInWithEmailAndPassword(userCred.email, userCred.password)
		// 		.then(() => {
		// 			setEmail('');
		// 			setPassword('');
		// 			props.history.push(ROUTES.HOME);
		// 		})
		// 		.catch(error => {
		// 			setError(true);
		// 		});
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				name='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
				type='text'
				placeholder='Email'
			/>
			<input
				name='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
				type='password'
				placeholder='Password'
			/>
			<button disabled={isInvalid} type='submit'>
				Sign In
			</button>
			{error && <p>{error.message}</p>}
		</form>
	);
};

const SignIn = () => {
	return (
		<div>
			<h1> Sign-in </h1>
			<FirebaseAuthConsumer>
				<SignInForm />
			</FirebaseAuthConsumer>
			<SignUpLink />
		</div>
	);
};

export default SignIn;
export { SignInForm };
