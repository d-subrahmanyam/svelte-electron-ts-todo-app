// src/stores.ts

import { writable } from "svelte/store"
import {v4 as uuidv4} from "uuid";

export interface TodoItem{
    id: String;
    title: String;
    completed: boolean;
}
//$: export let todoItems: TodoItem[] = [];

export function addTodo(title: String) {
    if(title) {
        todoItems.update((_todoItems: TodoItem[]) => {
            let todoItem: TodoItem = { id: uuidv4(), title: title, completed: false };
            _todoItems = [..._todoItems, todoItem];
            //title = "";
            return _todoItems;
        });

    }
}

export function removeTodo(id: String) {
    todoItems.update((_todoItems: TodoItem[]) => {
        _todoItems = _todoItems.filter(todoItem => todoItem.id !== id);
        return _todoItems;
    });

}

export function markDone(id: String) {
    todoItems.update((_todoItems: TodoItem[]) => {
        _todoItems.map((todoItem, i) => {
            if (todoItem.id === id) {
                _todoItems[i].completed = !_todoItems[i].completed;
            }
        });
        return _todoItems;
    });
}

// @ts-ignore
export const todoItems = writable<TodoItem[]>([]);