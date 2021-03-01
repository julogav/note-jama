import {
	Container,
	FormControl,
	FormLabel,
	Textarea,
	Radio,
	Stack,
	RadioGroup,
	Input,
	Heading,
	Button,
	Alert,
} from '@chakra-ui/react';
import { useState } from 'react';
import { firestore } from '../utils/firebase';

const AddNote = props => {
	const [content, setContent] = useState('');
	const [priority, setPriority] = useState('');
	const [date, setDate] = useState('');
	const [title, setTitle] = useState('');
	const [message, setMessage] = useState('');

	const reset = e => {
		setContent('');
		setDate('');
		setTitle('');
		setPriority('');
	};

	const onSubmit = async e => {
		e.preventDefault();
		const note = {
			title: title,
			content: content,
			dueDate: date,
			priority: priority,
		};

		const response = await firestore.create(note);
		if (response) {
			setMessage(`Your new note has been saved!`);
		}
		reset();
	};

	return (
		<Container id='noteForm' m={5}>
			<Heading fontSize='28px'>Add a new note</Heading>
			{message && <Alert>{message}</Alert>}
			<FormControl id='title'>
				<FormLabel mt={5}>Note title</FormLabel>
				<Input
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder='Title'
				/>
			</FormControl>
			<FormControl id='content'>
				<FormLabel mt={5}>What's on your mind?</FormLabel>
				<Textarea
					value={content}
					onChange={e => setContent(e.target.value)}
					placeholder='Your note...'
				/>
			</FormControl>
			<FormControl id='priority'>
				<FormLabel mt={5}>How important is this?</FormLabel>
				<RadioGroup onChange={setPriority} value={priority}>
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
				<Input type='date' onChange={e => setDate(e.target.value)} />
			</FormControl>
			<Button mt={5} onClick={onSubmit}>
				Save note
			</Button>
		</Container>
	);
};

export default AddNote;
