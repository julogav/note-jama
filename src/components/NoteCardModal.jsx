import {
	Modal,
	ModalOverlay,
	ModalBody,
	ModalContent,
	ModalCloseButton,
	ModalHeader,
	ModalFooter,
	Button,
	useDisclosure,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

const NoteCardModal = props => {
	const history = useHistory();
	const { isOpen, onClose, onOpen } = useDisclosure();

	const onUpdate = e => {
		e.preventDefault();

		props.onClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			key={props.note.id}
			{...props}
			note={props.note}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{props.note.title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text>{props.note.content}</Text>
					<Text>{props.note.dueDate.toString()}</Text>
					<Text>{props.note.priority}</Text>
				</ModalBody>
				<ModalFooter>
					<Button onClick={onUpdate}>Save changes</Button>
					<Button onClick={onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default NoteCardModal;
