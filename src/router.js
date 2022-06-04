import { createRouter, createWebHistory } from "vue-router";
// import New from "./views/New"
// import Tasks from "./views/Tasks"
// import Task from './views/Task'

const Task = import('./views/Task')
const Tasks = import('./views/Tasks')
const New = import('./views/New')

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/new', component: New },
		{ path: '/', component: Tasks },
		{ path: '/task/:id?', component: Task },
	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})