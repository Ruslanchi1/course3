<template>
  <div v-if="tasks">
	  <h3 class="text-white">Всего активных задач: {{$store.getters.activeTasks}}</h3>

    <task-body
      v-for="task in tasks" :key="task.id"
      :title="task.title"
      :date="task.date"
      :description="task.description"
      :id="task.id"
      :status="task.status"
    ></task-body>

  </div>
  <h1 class="text-white center" v-else>Задач пока нет</h1>
</template>

<script>
import { computed } from 'vue'
import { mapActions, mapGetters, mapMutations, mapState, useStore } from 'vuex'
import AppStatus from '../components/AppStatus'
import TaskBody from '../components/TaskBody'

export default {
  setup() {
    const store = useStore()
    
    return {
      tasks: computed( () => store.getters.tasks)
    }
  },
  components: {
    AppStatus,
    TaskBody
  }
}
</script>