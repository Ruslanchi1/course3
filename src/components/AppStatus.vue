<template>
  <span v-if="relevance" :class="[
    'badge',
    {
      'primary': type === 'active' || type === 'done',
      'warning': type === 'pending',
      'danger':  type === 'cancelled'
    }
  ]">{{ type }}</span>
  <span v-else class="badge danger">cancelled</span>
</template>

<script>
import { ref } from 'vue'
export default {
  props: ['type', 'date'],
  setup(props) {

    const relevance = ref(true)
    const date = Date.parse(props.date)
    const nowTime = Date.parse(new Date())

    if (date < nowTime) {
      relevance.value = false
    }
    return {
      relevance
    }
  }
}
</script>