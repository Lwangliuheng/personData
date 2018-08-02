/*store.dispatch('事件名')进行发布事件*/
const actions = {
    setIdAction(context,data){
    	//可以执行异步操作
    	context.commit('setIdMutation',data);
    }
}
export default actions