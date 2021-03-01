import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import { Grid, GridItem, Heading } from '@chakra-ui/react';
import * as ROUTES from './utils/routes.js';
import NavBar from './components/Navbar.jsx';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';

const App = () => {
	return (
		<Router>
			<Grid
				p={3}
				bgColor='pageColors.pink'
				templateRows='repeat(6, 1fr)'
				templateColumns='repeat(7, 1fr)'
				gap={0}>
				<GridItem borderStartRadius='md' rowSpan={6} colSpan={2}>
					<NavBar />
				</GridItem>
				<GridItem
					bgColor='pageColors.red'
					borderEndRadius='md'
					colSpan={5}
					rowSpan={1}>
					<Heading className='App-header' pt={3} borderRadius='md'>
						Pin me Up!
					</Heading>
				</GridItem>
				<GridItem colSpan={4} rowSpan={5}>
					<Switch>
						<Route path={ROUTES.SIGN_UP} component={SignUp} />
						<Route path={ROUTES.SIGN_IN} component={SignIn} />
						<Route path={ROUTES.NEW_NOTE} component={AddNote} />
						<Route exact path={ROUTES.NOTELIST} component={NoteList} />
					</Switch>
				</GridItem>
			</Grid>
		</Router>
	);
};

export default App;
