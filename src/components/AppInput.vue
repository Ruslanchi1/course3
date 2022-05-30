<template>
	<div class="form-control">
		<label for="id">{{ label }}</label>
		<input :type="typeInput" id="id" @input="inputValue($event.target.value)">
	</div>
</template>

<script>
import { onMounted, computed } from 'vue'
export default {
	props: ['type', 'id', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		function inputValue(value) {
			emit('update:modelValue', value)
		}
		return {
			label: props.label,
			id: props.id,
			inputValue,
			typeInput: props.type
		}
	}
}
</script>

<style lang="scss" scoped>
</style>