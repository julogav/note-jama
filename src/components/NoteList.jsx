import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { firestore } from '../utils/firebase';
import NoteCard from './NoteCard';

const NoteList = () => {
	const [allNotes, setAllNotes] = useState([]);

	// useEffect(() => {
	// 	setAllNotes(firestore.getAll());
	// 	// console.log(allNotes);
	// }, []);

	useEffect(() => {
		const res = async () => {
			await firestore.getAll();
			setAllNotes(res);
		};
	}, []);
	console.log(allNotes);

	return (
		<>
			<Heading>Notes</Heading>
			<Container>
				<Flex direction='row' justify='center'>
					<Box>
						<NoteCard />
					</Box>
				</Flex>
			</Container>
		</>
	);
};

export default NoteList;
