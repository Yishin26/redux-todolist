import React, { Component } from "react";
import Title from "./components/Title";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import { createStore } from "redux";
import todoReducer from "./reducers";
import { Provider } from "react-redux";

let store = createStore(todoReducer);

// 這裡的 class 名稱不一定要用 App ，可以使用任何你想用的名字
class TodoList extends Component {
  render() {
    return (
      <Provider store={store}>
        {/*把Store的東西傳到所有組件去*/}
        <div>
          <Title />
          <TodoForm />
          <List />
        </div>
      </Provider>
    );
  }
}

export default TodoList;
