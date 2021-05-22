/* eslint-disable */ 
import mockList from './mock-data'
import dateConvert from '@/utils/dateParser'

// 保留給UI呈現特效或提示
const LoadingStatus = {
  Timeout: -1,
  Init: 0,
  Loading: 1,
  Done: 2,
}

const state = () => ({
  status: LoadingStatus.Init,
  lastUpdate: null,
  progressList: [],
  completeList: [],
})

const getters = {
  getAllList(state) {
    return state.progressList.concat(state.completeList)
  },
  getProgressList(state) {
    return state.progressList
  },
  getCompleteList(state) {
    return state.completeList
  },
  getStatus() {
    return state.status
  },
  getLastRefreshDatetime() {
    return state.lastUpdate
  },
}

const actions = {

  // 取得訂單資訊
  load({commit, state}) {

    // Avoid query to server everytime page loads.
    if (state.status == LoadingStatus.Init) {
      commit('setStatus', LoadingStatus.Loading);

      // TODO: Change to Axios API later

      // Sort the list in DESC order.
      const sorted = mockList.map(order => {
        // 先將民國轉換成西元
        order['UTC'] = dateConvert(order.date);
        return order

        // 再比較日期（A<B是DESC order）
      }).sort((A, B) => A.UTC < B.UTC)

      // Seperate the list to 進行中 and 已完成.
      const progress = sorted.filter(item => item.status.code <= 2);
      const complete = sorted.filter(item => item.status.code >= 3);

      commit('setItems', { progress, complete })
      commit('setStatus', LoadingStatus.Done);
    }
  },

}

const mutations = {
  setItems(state, { progress, complete }) {
    state.progressList = progress;
    state.completeList = complete;
  },
  setStatus(state, status) {
    state.status = status;
    state.lastUpdate = new Date();
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
