// getters.js
// 所有公共计算方法可以写在这里；写在computed里
// ...mapGetters([
//   'doneTodosCount',
//   'anotherGetter',
//   // ...
// ])
// 缓存作用：相似于computed
let getters = {
  doneTodos: state => {
    console.log(state)
    return state.todos.filter(todo => todo.done)
  },
  // 参数一：状态；参数二：方法；
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  },
  addNun: state => state.numCount++,
  minusNum: state => state.numCount--
}
export default getters