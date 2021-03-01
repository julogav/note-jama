import * as ROUTES from '../utils/routes';
import { Box, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<VStack
			h='100vw'
			bgColor='pageColors.red'
			spacing={6}
			align='center'
			justify='top'
			borderStartRadius='md'
			borderBottomRadius='md'>
			<Box h='40px'>
				<Heading mt='3' fontStyle='italic' fontSize='25px'>
					Pin Me Up!
				</Heading>
			</Box>
			<Box h='40px'>
				<Link to={ROUTES.NOTELIST}>Notes</Link>
			</Box>
			<Box h='40px'>
				<Link to={ROUTES.NEW_NOTE}>New Note</Link>
			</Box>
			<Box h='40px'>
				<Link to={ROUTES.SIGN_UP}>Sign Up</Link>
			</Box>
			<Box h='40px'>
				<Link>Sign Out</Link>
			</Box>
		</VStack>
	);
};

export default NavBar;
