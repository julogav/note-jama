import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../utils/routes';
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
} from '@chakra-ui/react';

const NavDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = useState('left');
	const btnRef = useRef();
	return (
		<>
			<Button colorScheme='myRed' ref={btnRef} onClick={onOpen}>
				Go to
			</Button>
			<Drawer
				placement={placement}
				onClose={onClose}
				isOpen={isOpen}
				bg='verdigris'>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerHeader borderBottomWidth='1px'>Pin Me Up!</DrawerHeader>
						<DrawerBody>
							<ul>
								<li>
									<Link to={ROUTES.HOME}>Home</Link>
								</li>
								<li>
									<Link to={ROUTES.SIGN_IN}>Sign In</Link>
								</li>
								<li>
									<Link to={ROUTES.SIGN_UP}>Sign Up</Link>
								</li>
								<li>
									<Link to={ROUTES.NEWNOTE}>New Note</Link>
								</li>
								<li>Sign Out</li>
							</ul>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};

export default NavDrawer;
