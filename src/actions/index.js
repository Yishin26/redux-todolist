/*{//讓Reducer分辨該做什麼事使用
    
    type:'CREATE_TODO',
    payload：{
        text:'上學',
        id:3
    }

}*/
//方便調用export

let nextStartId = 4;
export const createTodo = text => {
  return {
    type: "CREATE_TODO",
    text: text,
    id: nextStartId++
  };
};

export const removeTodo = id => {
  return {
    type: "REMOVE_TODO",
    id //變數名稱跟屬性名稱相同就不用:後面
  };
};
