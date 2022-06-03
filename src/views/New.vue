<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>

    <app-input v-model="inputTitle" label="Название" id="title" type="text"></app-input>
    <app-input v-model="inputDate" label="Дата дэдлайна" id="date" type="date"></app-input>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="inputDescription"></textarea>
    </div>

    <button class="btn primary" :disabled="checkForm">Создать</button>
  </form>
</template>


<script>
import AppInput from '../components/AppInput.vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const inputTitle = ref('')
    const inputDate = ref('')
    const inputDescription = ref('')
    const router = useRouter()
    const store = useStore()

    function createTask() {
      store.dispatch('createTask', {
        title: inputTitle.value,
        date: inputDate.value,
        description: inputDescription.value,
        status: 'active'
      })
      router.push('/')
    }

    const checkForm = computed(() => {
      // const nowTime = new Date().toISOString().slice(0, 10)
      return (
        !inputTitle.value ||
        !inputDate.value ||
        !inputDescription.value
      )
    })
    return {
      createTask,
      checkForm,
      inputTitle,
      inputDate,
      inputDescription
    }
  },
  components: { AppInput }
}
</script>