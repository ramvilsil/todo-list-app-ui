export interface TodoList {
    id: string;
    todoItems: TodoItem[];
}

export interface TodoItem {
    id: string;
    name: string;
}

export interface TodoItemRequest {
    TodoItemId?: string;
    TodoItemName?: string;
}