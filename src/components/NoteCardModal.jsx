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
	FormControl,
	FormLabel,
	RadioGroup,
	Radio,
	Textarea,
	Input,
	Stack,
	HStack,
	Alert,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firestore } from '../utils/firebase';

const NoteCardModal = props => {
	const [content, setContent] = useState('');
	const [priority, setPriority] = useState('');
	const [date, setDate] = useState('');
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');
	const history = useHistory();
	const { isOpen, onClose, onOpen } = useDisclosure();

	const onUpdate = e => {
		e.preventDefault();
		const updatedNote = {
			title: title,
			content: content,
			dueDate: date,
			priority: priority,
		};
		const response = firestore.update(props.note.id, updatedNote);
		if (response) setMessage(`Your note has been updated`);
		onClose();
	};
	const onDelete = e => {
		e.preventDefault();
		const response = firestore.remove(props.note.id);
		if (response) setMessage(`Your note has been deleted`);
		onClose();
		history.push('/');
	};

	return (
		<>
			{message && <Alert>{message}</Alert>}
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
						<FormControl id='title'>
							<Input
								placeholder={props.note.title}
								value={title}
								onChange={e => setTitle(e.target.value)}
							/>
						</FormControl>
						<FormControl id='content'>
							<Textarea
								value={content}
								onChange={e => setContent(e.target.value)}
								placeholder={props.note.content}
							/>
						</FormControl>
						<FormControl id='priority'>
							<RadioGroup onChange={setPriority} value={props.note.priority}>
								<Stack direction='row'>
									<Radio colorScheme={'myGray'} value='low'>
										low priority
									</Radio>
									<Radio value='medium'>medium priority</Radio>
									<Radio colorScheme={'myRed'} value='high'>
										high priority
									</Radio>
								</Stack>
							</RadioGroup>
						</FormControl>

						<FormControl id='dueDate' type='date' value={date}>
							<FormLabel mt={5}>Due Date</FormLabel>
							<Input
								defaultValue={props.note.dueDate}
								type='date'
								onChange={e => setDate(e.target.value)}
							/>
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<HStack>
							<Button m={1} onClick={onUpdate}>
								Save changes
							</Button>
							<Button m={1} color='pageColors.red' onClick={onDelete}>
								Delete Note
							</Button>
							<Button m={1} onClick={onClose}>
								Close
							</Button>
						</HStack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NoteCardModal;
