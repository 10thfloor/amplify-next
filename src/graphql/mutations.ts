// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTodo = `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    createdAt
    completed
    todoList {
      id
      createdAt
      todos {
        nextToken
      }
    }
    userId
  }
}
`;
export const updateTodo = `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    createdAt
    completed
    todoList {
      id
      createdAt
      todos {
        nextToken
      }
    }
    userId
  }
}
`;
export const deleteTodo = `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    createdAt
    completed
    todoList {
      id
      createdAt
      todos {
        nextToken
      }
    }
    userId
  }
}
`;
export const createTodoList = `mutation CreateTodoList(
  $input: CreateTodoListInput!
  $condition: ModelTodoListConditionInput
) {
  createTodoList(input: $input, condition: $condition) {
    id
    createdAt
    todos {
      items {
        id
        name
        createdAt
        completed
        userId
      }
      nextToken
    }
  }
}
`;
export const updateTodoList = `mutation UpdateTodoList(
  $input: UpdateTodoListInput!
  $condition: ModelTodoListConditionInput
) {
  updateTodoList(input: $input, condition: $condition) {
    id
    createdAt
    todos {
      items {
        id
        name
        createdAt
        completed
        userId
      }
      nextToken
    }
  }
}
`;
export const deleteTodoList = `mutation DeleteTodoList(
  $input: DeleteTodoListInput!
  $condition: ModelTodoListConditionInput
) {
  deleteTodoList(input: $input, condition: $condition) {
    id
    createdAt
    todos {
      items {
        id
        name
        createdAt
        completed
        userId
      }
      nextToken
    }
  }
}
`;
