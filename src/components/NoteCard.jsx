import React from 'react';
import { useDisclosure, Text, Box } from '@chakra-ui/react';
import NoteCardModal from './NoteCardModal';

const NoteCard = props => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<Box
			maxW='300px'
			m={3}
			p={3}
			onClick={onOpen}
			key={props.note.id}
			border='1px'
			borderRadius='md'
			borderColor='pageColors.grey'>
			<Text fontSize='20px'>
				title:{' '}
				<i>
					<b>{props.note.title}</b>
				</i>
			</Text>
			<Text>note:{props.note.content}</Text>
			<Text>priority: {props.note.priority}</Text>
			<Text>Due date: {props.note.dueDate}</Text>
			{/* <Button bg='pageColors.green' onClick={onOpen}>
				Edit
			</Button> */}
			<NoteCardModal note={props.note} isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default NoteCard;
