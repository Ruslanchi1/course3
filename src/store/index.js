import { createStore } from "vuex";
const database = 'https://course-work3-c4cd0-default-rtdb.firebaseio.com/tasks'

export const store = createStore({
	state() {
		return {
			tasks: []
		}
	},
	mutations: {
		addTasks(state, payload) {
			state.tasks = Object.keys(payload).map((key) => {
				return {
					id: key,
					...payload[key]
				}
			})
			// Object.keys(payload).forEach((key) => {
			// 	state.tasks.push({
			// 		id: key,
			// 		...payload[key]
			// 	})
			// })
		},
		viewNewStatus(state, {key, data}) {
			const task = state.tasks.find(t => t.id === key)
			task.status = data.status
		}
	},
	actions: {
		async createTask({ dispatch }, payload) {
			try {
				const response = await fetch(`${database}.json`, {
					method: 'POST',
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify(payload)
				})
			} catch (e) {
				console.log(e)
			}
			dispatch('loadTasks')
		},
		async loadTasks({ commit }) {
			try {
				const response = await fetch(`${database}.json`)
				const data = await response.json()
				commit('addTasks', data)
			} catch (e) {
				console.log(e)
			}
		},
		async changeStatus({ commit }, payload) {
			try {
				const response = await fetch(`${database}/${payload.path}.json`, {
					method: 'PATCH',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						status: payload.status
					})
				})
				const data = await response.json()
				commit('viewNewStatus', {
					key: payload.path,
					data
				})
			} catch (e) {
				console.log(e);
			}
		}
	},
	getters: {
		tasks(state) {
			return state.tasks
		},
		activeTasks(_, { tasks }) {
			let count = 0
			for (const task of tasks) {
				if (task.status === 'active') {
					count++
				}
			}
			return count
		}
	}
})