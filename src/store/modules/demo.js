// state.js
// vuex 状态 state / mapState 
// ...mapState({
//   // ...
// })
// return new Promise
// 相似于data
const state = {
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false },
    { id: 2, text: '...', done: false },
    { id: 2, text: '...', done: true }
  ],
  numCount: 0,
}

// mutations.js
// 相似于:methods --- 必须是同步函数  写在 methods方法里
// ...mapMutations([
//   'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

//   // `mapMutations` 也支持载荷：
//   'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
// ]),
// ...mapMutations({
//   add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
// })


const mutations = {
  // handleButtonEvent() {
  //   this.message.success(this.$store.state.username)
  // }
  increment: (state) => state.numCount ++,
  decrement: (state, payload) => state.numCount -= payload.num,
}

// actions.js
// Action 类似于 mutation，不同在于：
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
// import { mapActions } from 'vuex'
// export default {
//   // ...
//   methods: {
//     ...mapActions([
//       'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
//       // `mapActions` 也支持载荷：
//       'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
//     ]),
//     ...mapActions({
//       add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
//     })
//   }
// }


const actions = {
  increment ({ commit }) { 
    // commit，dispatch，getters，rootGetters，rootState，state
    commit('increment')
  },
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 2000)
  }
}

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
    return state.todos.filter(todo => todo.done)
  },
  // 参数一：状态；参数二：方法；
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  },
  addNun: state => state.numCount++,
  minusNum: state => state.numCount--
}

export default {
  state,
  mutations,
  actions,
  getters
}
