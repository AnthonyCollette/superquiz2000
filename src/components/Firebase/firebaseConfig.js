// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAYjPqv728Rrjc-Mih3Z2XdMpGc4ylq1D4',
	authDomain: 'superquiz2000.firebaseapp.com',
	projectId: 'superquiz2000',
	storageBucket: 'superquiz2000.appspot.com',
	messagingSenderId: '1096066415255',
	appId: '1:1096066415255:web:cfa30e58e5eac64a2807d2',
	measurementId: 'G-C69EKGCWFL',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Get a list of cities from your database
export async function getUsers(db) {
	const usersCollection = collection(db, 'users')
	return usersCollection ? usersCollection : "Il n'y a pas d'utilisateurs !"
}

export const useLoadUsers = () => {
	const users = ref([])
	return users ? users : 'Personne'
}

export const auth = getAuth(app)
