const initState = {
  todos: [
    { id: 0, text: "吃飯" },
    { id: 1, text: "上學" },
    { id: 2, text: "睡覺" }
  ]
};
//js的物件和陣列資料是mutable

//參照 App.js 的function=> function 由action提供給Reducer
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            id: action.id
          }
        ]
      });
    case "REMOVE_TODO":
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => {
          //不用加this
          //filter是產生一個陣列，並不是修改原本的
          return todo.id !== action.id;
        })
      });

    default:
      return state;
  }
};

export default todoReducer;
