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
			<Box h='50px' m='8'>
				<Heading fontStyle='italic' fontSize='30px'>
					Pin Me Up!
				</Heading>
			</Box>
			<Box h='50px' mt='6' fontSize='20px'>
				<Link to={ROUTES.NOTELIST}>
					<b>NOTES</b>
				</Link>
			</Box>
			<Box h='50px' mt='6' fontSize='20px'>
				<Link to={ROUTES.NEW_NOTE}>
					<b>NEW NOTE</b>
				</Link>
			</Box>
			<Box h='50px' mt='6' fontSize='20px'>
				<Link to={ROUTES.SIGN_UP}>
					<b>SIGN UP</b>
				</Link>
			</Box>
			<Box h='50px' mt='6' fontSize='20px'>
				<Link to={ROUTES.SIGN_OUT}>
					<b>SIGN OUT</b>
				</Link>
			</Box>
		</VStack>
	);
};

export default NavBar;
