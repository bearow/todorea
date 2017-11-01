import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoReducer from './TodoReducer';
import { TodoList } from './TodoContainers';


const store = createStore(TodoReducer);

ReactDOM.render(
  <Provider store={store}> 
    <TodoList />
  </Provider>,
  document.getElementById("root")
);
