<template>
  <div>加减count：{{numCount}}</div>
  <div>计算todos长度：{{todosCount}}</div>
  <el-button type="primary" @click="handleBtn">el-button</el-button>
  <el-button type="primary" @click="addBtn">加</el-button>
  <el-button type="primary" @click="minusBtn">减</el-button>
  <div>
    {{filterArr}}
    <div><input type="text" v-model="selectVal"></div>
  </div>
  <div v-for="(item, index) of filterArr" :key="index">
    ------------------------------------
    <div>{{item}}</div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { getTableData1, getTableData2, getTableData3, getRegionalList } from '/@/api/data';
export default {
  data() {
    return {
      arr: ['dddc', 'd 我是谁', 123, '我是colin'],
      selectVal: ''
    }
  },
  computed: {
    numCount() {
      return this.$store.state.numCount
    },
    ...mapGetters({
      todosCount: 'doneTodosCount'
    }),
    filterArr() {
      return this.arr.filter((item) => {
        return String(item).toLowerCase().indexOf(this.selectVal.toLowerCase()) != -1
      });
    }
  },
  methods: {
    ...mapMutations({
      addBtn: 'increment',
      minusBtn: {
        type: 'decrement',
        num: 10
      }
    }),
    handleBtn() {
      this.$store.dispatch('incrementAsync')
      getRegionalList().then(res => {
        console.log(res);
      })
    },
  },
}
</script>

<style>

</style>