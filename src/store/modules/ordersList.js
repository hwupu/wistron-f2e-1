/* eslint-disable */ 
import axios from 'axios'
import dateConvert from '@/utils/dateParser'
import dateFormater from '@/utils/dateFormater'

const api = '/mock-data.json'

// 保留給UI呈現特效或提示
const LoadingStatus = {
  UnknowError: -3,
  RequestError: -2,
  ResponseError: -1,
  Init: 0,
  Loading: 1,
  Done: 2,
}

const state = () => ({
  status: LoadingStatus.Init,
  lastUpdate: null,
  progressList: [],
  completeList: [],
  selectedOrder: null,
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

      // Use Axios API to get response
      axios.get(api).then((response) => {

        // Sort the list in DESC order.
        const sorted = response.data.map(order => {

          // 先將民國轉換成西元
          order['UTC'] = dateConvert(order.date);

          // 順便在一位數的月日之前加零
          order.date = dateFormater(order.date);

          return order

          // 再比較日期（A<B是DESC order）
        }).sort((A, B) => A.UTC < B.UTC);

        // Seperate the list to 進行中 and 已完成.
        const progress = sorted.filter(item => item.status.code <= 2);
        const complete = sorted.filter(item => item.status.code >= 3);

        commit('setItems', { progress, complete });
        commit('setStatus', LoadingStatus.Done);

      }).catch((error) => {
        if (error.response) {
          // client received an error response (5xx, 4xx)
          commit('setStatus', LoadingStatus.ResponseError);
        } else if (error.request) {
          // client never received a response, or request never left
          commit('setStatus', LoadingStatus.RequestError);
        } else {
          // unknow error
          commit('setStatus', LoadingStatus.UnknowError);
        }
      })
    }
  },

  // 選取的訂單資訊（因為沒ID所以傳全部資料, URL也無法區分）
  select({commit}, order) {
    commit('selectItem', order);
  }

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
  selectItem(state, order) {
    state.selectedOrder = order;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
