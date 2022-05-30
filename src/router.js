import { createRouter, createWebHistory } from "vue-router";
import New from "./views/New"
import Tasks from "./views/Tasks"

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/new', component: New },
		{ path: '/', component: Tasks }
	],
	linkActiveClass: 'active',
	linkExactActiveClass: 'active'
})