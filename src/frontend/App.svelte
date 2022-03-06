<script lang="ts">
  import TodoItemList from './components/TodoItemList.svelte';
  import { addTodo } from './stores';
  let title: String;
  function addTodoToStore() {
    addTodo(title);
    title = "";
  }
</script>

<div class="flex justify-center items-center bg-gray-300 min-h-screen">
  <div class="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
    <div class="input_text relative">
      <input class="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8" type="text" placeholder="Write a new task" bind:value={title}>
      <button on:click={addTodoToStore} class="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]">Add task</button>
      <i class="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
    </div>
    <TodoItemList />
  </div>
</div>

<style>
    @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>