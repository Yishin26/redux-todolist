import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';

// react 會將 import 進來的 TodoList ， render 在 public 資料夾下的 index.html 中 id 為 root 的 div
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
