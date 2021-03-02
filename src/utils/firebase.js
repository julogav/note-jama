import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAL_KDPRwyXN1LXNSjT1FopI8RhU6EsTYQ',
	authDomain: 'note-jama-dev.firebaseapp.com',
	databaseURL: 'https://note-jama-dev.firebaseio.com',
	projectId: 'note-jama-dev',
	storageBucket: 'note-jama-dev.appspot.com',
	appId: '1:65818198760:web:8b3c581c59aa1075ceff5d',
};

firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const googleUser = () =>
	firebase
		.auth()
		.signInWithPopup(googleProvider)
		.then(result => {
			const credential = result.credential;
			console.log(credential);
			console.log(credential.accessToken);
			const user = result.user;
			console.log(user);
		})
		.catch(error => {
			console.log(error.code);
			console.log(error.message);
		});

const facebookUser = () =>
	firebase
		.auth()
		.signInWithPopup(facebookProvider)
		.then(result => {
			const credential = result.credential;
			console.log(credential);
			console.log(credential.accessToken);
			const user = result.user;
			console.log(user);
		})
		.catch(error => {
			console.log(error.code);
			console.log(error.message);
		});

const signOut = () => firebase.auth().signOut();

const authServices = {
	googleProvider,
	facebookProvider,
	googleUser,
	facebookUser,
	signOut,
};

const db = firebase.firestore().collection('/notes');

const getAll = async () => {
	let notes = [];
	const snapshots = await db.get();
	const data = snapshots.forEach(doc => {
		let id = doc.id;
		let data = doc.data();
		notes.push({
			id: id,
			title: data.title,
			content: data.content,
			dueDate: data.dueDate,
			priority: data.priority,
		});
	});
	return notes;
};

const getAllByDate = async () => {
	let notes = [];
	const snapshots = await db.orderBy('dueDate', 'desc').get();
	const data = snapshots.forEach(doc => {
		let id = doc.id;
		let data = doc.data();
		notes.push({
			id: id,
			title: data.title,
			content: data.content,
			dueDate: data.dueDate,
			priority: data.priority,
		});
	});
	return notes;
};

const getAllByPriority = async () => {
	let notes = [];
	const snapshots = await db.orderBy('priority').get();
	const data = snapshots.forEach(doc => {
		let id = doc.id;
		let data = doc.data();
		notes.push({
			id: id,
			title: data.title,
			content: data.content,
			dueDate: data.dueDate,
			priority: data.priority,
		});
	});
	return notes;
};

const create = data => {
	return db.add(data);
};

const update = (id, value) => {
	return db.doc(id).update(value);
};

const remove = id => {
	return db.doc(id).delete();
};

const firestore = {
	getAll,
	getAllByDate,
	getAllByPriority,
	create,
	update,
	remove,
};

export { firebaseConfig, firestore, authServices };
