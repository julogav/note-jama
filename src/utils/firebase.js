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
			const token = credential.accessToken;
			const user = result.user;
			console.log(user);
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});

const facebookUser = () =>
	firebase
		.auth()
		.signInWithPopup(facebookProvider)
		.then(result => {
			const credential = result.credential;
			console.log(credential);
			const token = credential.accessToken;
			const user = result.user;
			console.log(user);
		})
		.catch(error => {
			const errorCode = error.code;
			const errorMessage = error.message;
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
	const snapshots = await db.get();
	const data = snapshots.docs;
	return data;
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
	create,
	update,
	remove,
};

export { firebaseConfig, firestore, authServices };
