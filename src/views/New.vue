<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <!-- <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title">
    </div> -->
    <app-input
      v-model="inputTitle"
      label="Название"
      id="title"
      type="text"
    ></app-input>
    <!-- <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date">
    </div> -->
    <app-input
      v-model="inputDate"
      label="Дата дэдлайна"
      id="date"
      type="date"
    ></app-input>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="inputDescription"></textarea>
    </div>

    <button class="btn primary">Создать</button>
  </form>
</template>


<script>
import AppInput from '../components/AppInput.vue'
import { ref, watch } from 'vue'

export default {
  setup() {
    const inputTitle = ref('')
    const inputDate = ref('')
    const inputDescription = ref('')

    async function createTask() {
      const response = await fetch('https://course-work3-c4cd0-default-rtdb.firebaseio.com/tasks.json', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: inputTitle.value,
          date: inputDate.value,
          description: inputDescription.value
        })
      })
      inputTitle.value = ''
      inputDate.value = ''
      inputDescription.value = ''
    }
    return {
      createTask,
      inputTitle,
      inputDate,
      inputDescription
    }
  },
  components: {AppInput}
}
</script>