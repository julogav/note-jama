export const firebaseConfig = {
	apiKey: 'AIzaSyAL_KDPRwyXN1LXNSjT1FopI8RhU6EsTYQ',
	authDomain: 'note-jama-dev.firebaseapp.com',
	projectId: 'note-jama-dev',
	storageBucket: 'note-jama-dev.appspot.com',
	messagingSenderId: '65818198760',
	appId: '1:65818198760:web:8b3c581c59aa1075ceff5d',
};

export default firebaseConfig;

// const Firebase = () => {
// 	firebase.initializeApp(firebaseConfig);

// 	const user = firebase.auth().currentUser;
// 	const providers = {
// 		googleProvider: new firebase.auth.GoogleAuthProvider(),
// 		fbProvider: new firebase.auth.FacebookAuthProvider(),
// 	};

// 	const newUser = (email, password) =>
// 		firebase
// 			.auth()
// 			.createUserWithEmailAndPassword(email, password)
// 			.then(userCredential => {
// 				const user = userCredential.user;
// 			})
// 			.catch(error => {
// 				const errorCode = error.code;
// 				const errorMessage = error.message;
// 			});

// 	const signIn = (email, password) => {
// 		firebase.auth
// 			.signInWithEmailAndPassword(email, password)
// 			.then(userCredential => {
// 				const user = userCredential.user;
// 			})
// 			.catch(error => {
// 				const errorCode = error.code;
// 				const errorMessage = error.message;
// 			});
// 	};

// 	const signOut = () => firebase.auth().signOut();

// 	const passwordUpdate = password =>
// 		firebase.auth().currentUser.updatePassword(password);
// };

// export default Firebase;
