<template>
  <div class="card" v-if="validTask">
    <h2>{{ validTask.title }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="validTask.status" :date="validTask.date" />
    </p>
    <p><strong>Дэдлайн</strong>: {{ new Date(validTask.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ validTask.description }}</p>
    <div>
      <button class="btn" @click="changeStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="changeStatus('done')">Завершить</button>
      <button class="btn danger" @click="changeStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import { computed, ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()

    const validTask = computed(() => {
      return store.getters.tasks.find(t => t.id === route.params.id)
    })
    
    function changeStatus(s) {
      const status = s
      store.dispatch('changeStatus', {
        path: route.params.id,
        status
      })
    }
    // const status = ref('')
    // const date = Date.parse(validTask.date)
    // const nowTime = Date.parse(new Date())
    // console.log(date, nowTime, validTask.date);
    // if (date < nowTime) {
    //   status.value = 'danger'
    // }
    return { 
      validTask,
      changeStatus
    }
  },
  components: { AppStatus }
}
</script>

<style scoped>
</style>