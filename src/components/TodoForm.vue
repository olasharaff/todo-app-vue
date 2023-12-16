<script>
export default {
  data() {
    return {
      inputValue: "", // To store the value from the input field
      contents: "",
      myArray: [], // The array to store the values

    };
  },
  methods: {
    CreateTodo() {
      console.log(this.inputValue);
      if (this.inputValue == "") {
        alert("Please enter a task");
      } else {
        this.myArray.push({
          title: this.inputValue,
          contents: this.contents,
          editing: false,
          id: Math.random(),
          isCompleted: false,
        });
        this.inputValue = "";
        this.contents = "",
        console.log(this.myArray);
      }
    },
    deleteItem(item) {
      console.log(item);
      const index = this.myArray.indexOf(item);
      if (index > -1) {
        this.myArray.splice(index, 1);
      }
    },
    // edit the todo
    editItem(item) {
      item.editing = true;
      
      let val = prompt("please enter new todo", item.title);
      console.log(val);
      if (val !== item.title) {
        item.title = val;
      }
      item.editing = false;
     
    },
    //completed todo
    handleDone(item) {
      item.isCompleted = !item.isCompleted;
     
    },
  },
};
</script>



<template>
  <div class="p-4">
    <div class="flex justify-center flex-col py-4 px-2">
      <input type="text" placeholder="title" v-model="inputValue" @keyup.enter="CreateTodo" class="mt-4 p-2 border border-gray-300 rounded w-full" />
      <textarea name="" id="" cols="30" rows="5" v-model="contents" @keyup.enter="CreateTodo"></textarea>
      <button @click="CreateTodo" class="flex justify-center mx-auto mt-5 bg-purple-500 px-10 rounded py-2  text-white text-center">Add</button>
    </div>
    <div>
      <ol class=" mt-8">
        <li v-for="todo in myArray" :key="todo.id" class="flex items-center justify-between py-2">

          <div>
            <p :class="{ completed: todo.isCompleted }" class="text-xl font-semibold capitalize">{{ todo.title }}</p>
            <p class="text-sm mt-2">{{ todo.contents }}</p>
          </div>
          <div>
            <font-awesome-icon icon="trash" class="px-3 py-1 text-red-500 text-[20px]" @click="deleteItem(todo)" />
            <font-awesome-icon icon="pen-to-square" class="px-3 py-1 text-green-500 text-[20px]" @click="editItem(todo)" />
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
<style></style>