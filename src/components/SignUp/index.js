import { FirebaseAuthConsumer } from '@react-firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../utils/routes';
// import firebase from 'firebase';

const SignUpForm = props => {
	const [userName, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [passwordOne, setPasswordOne] = useState('');
	const [passwordTwo, setPasswordTwo] = useState('');
	const [error, setError] = useState(false);

	const isInvalid =
		passwordOne !== passwordTwo ||
		passwordOne === '' ||
		email === '' ||
		userName === '';

	const onSubmit = e => {
		e.preventDefault();
		// const newUser = {
		// 	userName: userName,
		// 	email: email,
		// 	password: passwordOne,
		// };

		// 	.createUserWithEmailAndPassword(newUser.email, newUser.passwordOne)
		// 	.then(authUser => {
		// 		setUsername('');
		// 		setEmail('');
		// 		setPasswordOne('');
		// 		setPasswordTwo('');
		// 		props.history.push(ROUTES.HOME);
		// 	})
		// 	.catch(error => {
		// 		setError(true);
		// 	});
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				name='username'
				value={userName}
				onChange={e => setUsername(e.target.value)}
				required
				type='text'
				placeholder='Username'
			/>
			<input
				name='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
				required
				type='text'
				placeholder='Email Address'
			/>
			<input
				name='passwordOne'
				value={passwordOne}
				onChange={e => setPasswordOne(e.target.value)}
				required
				type='password'
				placeholder='Password'
			/>
			<input
				name='passwordTwo'
				value={passwordTwo}
				onChange={e => setPasswordTwo(e.target.value)}
				required
				type='password'
				placeholder='Confirm Password'
			/>
			<button disabled={isInvalid} type='submit'>
				Sign Up
			</button>
			{error && <p>{error.message}</p>}
		</form>
	);
};

const SignUpLink = () => {
	return (
		<p>
			Don't have an account yet?
			<Link to={ROUTES.SIGN_UP}>Sign Up</Link>
		</p>
	);
};

const SignUp = () => {
	return (
		<div>
			<h1>Sign Up</h1>
			<FirebaseAuthConsumer>
				<SignUpForm />
			</FirebaseAuthConsumer>
		</div>
	);
};

export default SignUp;
export { SignUpForm, SignUpLink };
