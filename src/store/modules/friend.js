import { v1 as uuidv1 } from 'uuid'

export default {
    namespaced: true,
    state: {
        friends: {},
    },
    mutations: {
        ADD_FRIEND(state, {friend, id}){
            state.friends[id] = friend
            console.log(id)
        },
        DELETE_FRIEND(state, id){
            delete state.friends[id]
        },
    },
    actions: {
        createFriend({commit}, {friend, id}) {
            commit('ADD_FRIEND', {friend, id})
        },
        removeFriend({commit},id) {
            commit('DELETE_FRIEND',id)
        },
    }
}