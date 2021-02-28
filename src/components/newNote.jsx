import { useState } from 'react';
import {
	Header,
	Container,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	useDisclosure,
	Input,
	RadioGroup,
	Stack,
	Radio,
	Textarea,
} from '@chakra-ui/react';

const NewNote = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [value, setValue] = useState('');
	const [date, setDate] = useState();

	return (
		<Container>
			<Header>Add a new Note</Header>
			<Button bg='myRed' onClick={onOpen}>
				New note
			</Button>

			<Modal lg isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>What's on your mind?</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl id='noteContent'>
							<Textarea placeholder='your note...' />
						</FormControl>

						<FormControl id='priority'>
							<FormLabel>How important is this?</FormLabel>
							<RadioGroup onChange={setValue} value={value}>
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
							<FormLabel>Due Date</FormLabel>
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme='myRed' mr={3} onClick={onClose}>
							Close
						</Button>
						<Button colorScheme='myGray' mr={3}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Container>
	);
};

export default NewNote;
