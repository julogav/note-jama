import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Container, Heading } from '@chakra-ui/react';

import * as ROUTES from './utils/routes';
import NavDrawer from './components/navbar';
import NewNote from './components/newNote';

const App = props => {
	return (
		<>
			<Container maxW='container.xl' bg={'silverPink'}>
				<Heading className='App-header' pt={3}>
					Pin me Up!
				</Heading>
			</Container>
			<Container>
				<Router>
					<div>
						<NavDrawer />
						<hr />
						<Route path={ROUTES.SIGN_UP} component={SignUp} />
						<Route path={ROUTES.SIGN_IN} component={SignIn} />
						<Route path={ROUTES.HOME} component={HomePage} />
						<Route path={ROUTES.NEWNOTE} component={NewNote} />
					</div>
				</Router>
			</Container>
		</>
	);
};

export default App;
