This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## redux 開發 note

- 安裝兩個套件：redux, react-redux
- 官網是從 action 開始思考，不過也可以換個方式從 reducer 切入開始，因為 store 裡的 state 都是靠 reducer 去改變的，當 store 裡面什麼都沒有時，就是靠 reducer 的初始值給 state
- 開發流:

  1.reducer
  
  2.action
  
  3.store-provider
  
  4.component-connect( mapStateToProps | mapDispatchToProps-refer to action )(ComponetName)
  

- Redux Devtool
