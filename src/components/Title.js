import React, { Component } from "react";
import { connect } from "react-redux";

class Title extends Component {
  render() {
    // 接收來自上層元件的 todos 陣列
    const { todos } = this.props;
    return (
      // 將陣列長度顯示在標題後方
      <h1>待辦事項清單 ({todos.length}) </h1>
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
export default connect(mapStateToProps)(Title); //把Component和Connect連再一起
