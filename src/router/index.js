import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../view/Home.vue'
import AddFriend from '../view/AddFriend.vue'


const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
        children: [
            {
                path: 'addfriend',
                name: AddFriend,
                component: AddFriend
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router