import {
	Text,
	Container,
	Flex,
	Heading,
	Radio,
	RadioGroup,
	Button,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { firestore } from '../utils/firebase';
import NoteCard from './NoteCard';

const NoteList = props => {
	const [allNotes, setAllNotes] = useState([]);
	const [order, setOrder] = useState('');

	useEffect(() => {
		const res = async () => {
			const notes = await firestore.getAll();
			setAllNotes(notes);
		};
		res();
	}, [allNotes]);

	//order by date, by priority

	const handleSort = e => {
		e.preventDefault();
		if (order === 'date') orderByDate();
		if (order === 'priority') orderByPriority();
	};
	const orderByDate = async e => {
		const notes = await firestore.getAllByDate();
		setAllNotes(notes);
	};
	const orderByPriority = async e => {
		const notes = await firestore.getAllByPriority();
		setAllNotes(notes);
	};
	console.log(allNotes);
	return (
		<Container>
			<Heading mt={4}>Notes</Heading>
			<Text m={3}>Order by</Text>
			<RadioGroup m={3} onChange={setOrder} value={order}>
				<Radio mt={1} mr={3} value='date'>
					Due date
				</Radio>
				<Radio mr={3} mt={1} value='priority'>
					Priority
				</Radio>
				<Button ml={2} onClick={handleSort}>
					Sort
				</Button>
			</RadioGroup>
			<Text ml={3}>
				<i>Click on a note to edit</i>
			</Text>
			{allNotes && (
				<Flex wrap='wrap' direction='row'>
					{allNotes.map(note => (
						<NoteCard key={note.id} note={note} />
					))}
				</Flex>
			)}
		</Container>
	);
};

export default NoteList;
