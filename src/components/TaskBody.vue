<template >
	<div class="card">
		<h2 class="card-title">
			{{ title }}
			<AppStatus :type="status" />
		</h2>
		<p>
			<strong>
				<small>
					{{ date }}
				</small>
			</strong>
		</p>
		<button class="btn primary" @click="$router.push('/task/' + id)">Посмотреть</button>
	</div>
</template>

<script>
import { computed } from '@vue/reactivity'
import AppStatus from '../components/AppStatus'

export default {
	props: ['title', 'date', 'description', 'id', 'status'],
	setup(props) {
		const title = computed( () => {
			return props.title
		})
		const date = computed( () => {
			return new Date(props.date).toLocaleDateString()	
		})
		const description = computed( () => {
			return props.description
		})
		
		return {
			title,
			date,
			description
		}
	},
	components: {
		AppStatus
	}
}
</script>

<style lang="scss" scoped>
</style>