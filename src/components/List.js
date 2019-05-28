import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodo } from "../actions";

class List extends Component {
  render() {
    // 接收來自上層元件的 todos 陣列
    const { todos } = this.props;
    return (
      <ol>
        {todos.map((todo, idx) => {
          return (
            <li
              key={todo.id}
              // 點擊調用來自上層元件提供的 remove 函式
              onClick={() => this.props.removeTodo(todo.id)}
            >
              {todo.text}
            </li>
          );
        })}
      </ol>
    );
  }
}
//mapStateToProps:把Store裡面的State變成這個Component的props
const mapStateToProps = state => {
  return {
    //傳出來的東西，就是我們可以在這個Component，可以用到的props
    todos: state.todos
  };
};

//在List裡面刪項目，把Remove放進來
const mapDispatchToProps = dispatch => {
  return {
    //return 一些function，都可以在這個Component的props直接取用
    removeTodo: id => {
      dispatch(removeTodo(id)); //這裡寫什麼名字，在做component調用時，就是寫什麼名字，整個回傳架構須與action一致
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List); //把Component和Connect連再一起
