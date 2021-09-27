import { v1 as uuidv1 } from 'uuid'

export default {
    namespaced: true,
    state: {
        friends: [],
    },
    mutations: {
        ADD_FRIEND(state, friend){
            state.friends.push(friend)
        },
        DELETE_FRIEND(state, id){
            const friend = state.friends.find((f) => f.id === id)
            const index = state.friends.indexOf(friend)
            state.friends.splice(index,1)
        },
    },
    actions: {
        createFriend({commit}, friend) {
            commit('ADD_FRIEND', friend)
        },
        removeFriend({commit},id) {
            commit('DELETE_FRIEND',id)
        },
    }
}