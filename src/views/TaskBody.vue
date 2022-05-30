<template >
	<h3 class="text-white">Всего активных задач: 0</h3>
	<div class="card">
		<h2 class="card-title">
			{{ title }}
			<!-- <AppStatus :type="'done'" /> -->
		</h2>
		<p>
			<strong>
				<small>
					{{ date }}
				</small>
			</strong>
		</p>
		<button class="btn primary">Посмотреть</button>
	</div>
</template>

<script>
import { computed } from '@vue/reactivity'

export default {
	props: ['title', 'date', 'description'],
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
		console.log(title);
		return {
			title,
			date,
			description
		}
	}
}
</script>

<style lang="scss" scoped>
</style>