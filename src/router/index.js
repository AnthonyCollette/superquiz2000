import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Quiz from '../components/Quiz.vue'
import Results from '../components/Results.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/signup',
		name: 'Signup',
		component: Signup,
	},
	{
		path: '/quiz',
		name: 'Quiz',
		component: Quiz,
	},
	{
		path: '/results',
		name: 'Results',
		component: Results,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
