/*store.commit('事件名')进行事件的发布*/
const mutations = {
     setIdMutation(state,data){
     	 //不可以执行异步操作
         state.id = data.id;
     }
}
export default mutations