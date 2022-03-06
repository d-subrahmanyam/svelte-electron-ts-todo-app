<script lang="ts">
  import { todoItems, markDone, removeTodo } from '../stores';
</script>

<ul class="all_tasks">
  {#each $todoItems || [] as todoItem}
    <li id={todoItem.id}>
      <hr class="mt-2">
      <div class="my-4 flex justify-between px-1">
        <div class="flex items-center gap-2">
                            <span on:click={markDone(todoItem.id)} class="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full ">
                                <i id="checked1" class="transition-all hover:text-lg text-blue-500 hover:text-blue-900 fa {(todoItem.completed)?'fa-check':''}"></i>
                            </span>
          <p class="md:max-w-[375px] truncate max-w-[280px] ">
            <span id="strike1" class="text-gray-600 text-sm {(todoItem.completed)?'line-through':'no-underline'}">{todoItem.title}</span>
          </p>
        </div> <span on:click={removeTodo(todoItem.id)} class="h-8 cursor-pointer w-8 flex justify-center items-center border border-gray-600 rounded-full "><i class="transition-all hover:text-lg text-red-600 hover:text-red-900 fa fa-trash"></i></span>
      </div>
    </li>
  {/each}
</ul>