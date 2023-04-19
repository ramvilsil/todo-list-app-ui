import React, { useState, useEffect } from 'react';
import { TodoList, TodoItemRequest } from '../interfaces';

function TodoListComponent() {

  const [todoList, setTodoList] = useState<TodoList | null>(null);

  const [createInputValue, setCreateInputValue] = useState('');

  const [updateInputValues, setUpdateInputValues] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetch('https://todo-list-app-api.azurewebsites.net/TodoList', {
      credentials: 'include',
      mode: 'cors'
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log('API response:', data);
          setTodoList(data.todoList);
        } else {
          console.log('Null TodoList');
          setTodoList(null);
        }
      })
  }, []);


  const handleCreate = (todoItemName: string) => {
    const todoItemRequest: TodoItemRequest = {
      TodoItemName: todoItemName
    };

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoItemRequest),
      credentials: 'include',
      mode: 'cors'
    };

    fetch('https://todo-list-app-api.azurewebsites.net/TodoItem', requestOptions)
      .then((response) => {
        if (response.headers.get('Content-Type')?.includes('application/json')) {
          return response.json();
        }
        return null;
      })
      .then((data) => {
        if (data) {
          console.log('API response:', data);
          if (todoList) {
            setTodoList({
              ...todoList,
              todoItems: [...todoList.todoItems, data],
            });
          }
        } else {
          console.log('API response: no content');
        }
        window.location.reload();
      })
      .catch((error) => {
        console.error('API error:', error);
      });
  };

  const handleUpdate = (id: string, name: string) => {
    const todoItemRequest: TodoItemRequest = {
      TodoItemId: id,
      TodoItemName: name,
    };

    const requestOptions: RequestInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoItemRequest),
      credentials: 'include',
      mode: 'cors'
    };

    fetch('https://todo-list-app-api.azurewebsites.net/TodoItem', requestOptions)
      .then((response) => {
        console.log('API response:', response);
        window.location.reload();
      })
      .catch((error) => {
        console.error('API error:', error);
      });
  };

  const handleDelete = (id: string) => {
    const todoItemRequest: TodoItemRequest = {
      TodoItemId: id,
    };

    const requestOptions: RequestInit = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoItemRequest),
      credentials: 'include',
      mode: 'cors'
    };

    fetch('https://todo-list-app-api.azurewebsites.net/TodoItem', requestOptions)
      .then((response) => {
        console.log('API response:', response);
        window.location.reload();
      })
      .catch((error) => {
        console.error('API error:', error);
      });
  };

  const handleCreateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateInputValue(event.target.value);
  };

  const handleCreateButtonClick = () => {
    handleCreate(createInputValue);
    setCreateInputValue('');
  };

  const handleUpdateInputChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateInputValues({ ...updateInputValues, [id]: event.target.value });
  };

  const handleUpdateButtonClick = (todoItemId: string) => {
    if (updateInputValues[todoItemId]) {
      handleUpdate(todoItemId, updateInputValues[todoItemId]);
      setUpdateInputValues({ ...updateInputValues, [todoItemId]: '' });
    }
  };

  return (
    <div className='p-4 w-4/5 ml-auto mr-auto flex flex-col gap-8'>

      <div className='flex flex-col'>
        <div className='font-medium'>Todo List ID</div>
        <div>{todoList?.id}</div>
      </div>

      <hr />

      <div className='flex flex-col gap-2'>
        <div className='text-xl font-medium'>Add a Todo Item</div>
        <input className='w-full bg-stone-200 p-4 rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600' value={createInputValue} onChange={handleCreateInputChange} />
        <button className='bg-blue-600 font-bold p-4 text-white rounded-lg hover:cursor-pointer' onClick={handleCreateButtonClick}>Create</button>
      </div>

      <hr />

      {
        todoList?.todoItems?.length ?
          todoList.todoItems.map((todoItem) => (

            <div className='flex gap-2 portrait:flex-col' key={todoItem.id}>

              <div className='w-full text-xl font-medium'>{todoItem.name}</div>

              <input className='w-full bg-stone-200 p-4 rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600'
                type="text"
                value={updateInputValues[todoItem.id] || ''}
                onChange={(event) => handleUpdateInputChange(todoItem.id, event)}
              />

              <button className='w-full bg-yellow-600 font-bold p-4 text-white rounded-lg hover:cursor-pointer' onClick={() => handleUpdateButtonClick(todoItem.id)}>Update</button>

              <button className='w-full bg-red-600 font-bold p-4 text-white rounded-lg hover:cursor-pointer' onClick={() => handleDelete(todoItem.id)}>Delete</button>

            </div>
          ))
          :
          <div>You have no items on your todo list.</div>
      }

    </div>
  );
}

export default TodoListComponent;