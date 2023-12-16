<template>
  <div class="flex justify-center flex-col max-w-6xl px-9 mx-auto">
      <h1 class="text-center text-purple-600 my-20 text-4xl font-bold">
        To Do Apps
      </h1>
      <div class="bg-gray-200  rounded-md">
        <TodoForm />
      </div>
    </div>
   
  
</template>

<script>

import TodoForm from './components/TodoForm.vue'
export default {
  name: 'App',
  components: {
  TodoForm

  }
}
</script>

<style>

</style>
