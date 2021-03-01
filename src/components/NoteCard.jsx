import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const NoteCard = props => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	const onUpdate = e => {
		e.preventDefault();
	};
	return (
		<>
			{/* temporary */}
			<Button onClick={onOpen}>Edit Note</Button>
			<Modal {...props} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{props.title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{(props.content, props.dueDate, props.priority)}
					</ModalBody>
					<ModalFooter>
						<Button onClick={onUpdate}>Save changes</Button>
						<Button colorScheme='pageColors.verdigris'>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NoteCard;
