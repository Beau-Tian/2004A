import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 未读的数据
    list: [
      {
        title: "11111",
        id: 1
      },
      {
        title: "22222",
        id: 2
      },
      {
        title: "33333",
        id: 3
      },
      {
        title: "44444",
        id: 4
      },
      {
        title: "55555",
        id: 5
      },
      {
        title: "66666",
        id: 6
      },
    ],
    // 已读的数据
    dulist: [],
    // 删除的数据
    dellist: [],
  },
  mutations: {
    //变更模块 source 变更的来源  des 把谁给改变 因为是数组的一个方法所有必须得加上下标
    switchModule(state, { 0: source, 1: des, 2: id }) {
      console.log(id)
      if (id == 0) {
        let data = state[source].splice(0, state[source].length)
        state[des].push(...data)
      }
      let index = state[source].findIndex(c => c.id == id);
      let data = state[source].splice(index, 1);
      state[des].push(...data);
    },
    aaa(state, val) {
      if (val.a == 1) {
        // 当val.a == 1 时 就知道当前点击的是那个按钮
        this.commit('switchModule', ['list', 'dulist', val.id]);
        // list是变更的来源  dulist是被改变的 
      } else if (val.a == 2) {
        this.commit('switchModule', ['dulist', 'dellist', val.id]);
      } else if (val == 3) {
        this.commit('switchModule', ['list', 'dulist', 0]);
      } else if (val == 4) {
        this.commit('switchModule', ['dulist', 'dellist', 0]);
      } else if (val == 5) {
        this.commit('switchModule', ['dellist', 'list', 0]);
      }
    },
  },
  actions: {},
  modules: {}
});
