/*state的扩展,与state同时变*/
const getters = {
     transformationId:(state)=>{
     	return state.id + 10
     }
}
export default getters