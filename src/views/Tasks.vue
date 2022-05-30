<template>
  <div v-if="tasks">
    <task-body
      v-for="task in tasks" :key="task.id"
      :title="task.title"
      :date="task.date"
      :description="task.description"
    ></task-body>
  </div>
  <h1 class="text-white center" v-else>Задач пока нет</h1>
</template>

<script>
import { onMounted, reactive, isReactive, isRef } from 'vue'
import AppStatus from '../components/AppStatus'
import TaskBody from './TaskBody'

export default {
  setup() {
    let tasks = reactive([])

    const loadTasks = async () => {
      const response = await fetch(
        'https://course-work3-c4cd0-default-rtdb.firebaseio.com/tasks.json'
      )
      const data = await response.json()

      tasks = Object.keys(data).map( (key) => {
        return {
          id: key,
          ...data[key]
        }
      })
      console.log(tasks)
    }
    onMounted( async () => {
      await loadTasks()
    })
    
    return {
      tasks,
    }
  },
  // data() {
  //   return {
  //     tasks: []
  //   }
  // },
  // async mounted() {
  //   this.loadTasks()
  // },
  // methods: {
  //   async loadTasks() {
  //     const response = await fetch(
  //       'https://course-work3-c4cd0-default-rtdb.firebaseio.com/tasks.json'
  //     )
  //     const data = await response.json()
  //     this.tasks = Object.keys(data).map( (key) => {
  //       return {
  //         id: key,
  //         ...data[key]
  //       }
  //     })
  //   }
  // },
  components: {
    AppStatus,
    TaskBody
  }
}
</script>