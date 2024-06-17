import {createRouter, createMemoryHistory, RouteRecordRaw} from 'vue-router'
import Main from '../views/main/main.vue'
import Index from '../views/index/page.vue'
import Menu from '../views/system/menu/page.vue'
import Permission from '../views/system/permission/page.vue'
import Role from '../views/system/role/page.vue'

const mainRoute = [

    {
        path: '/',
        name: '/',
        component: Main,
        children: [
            {path: '/index', name: 'index', component: Index},
            {path: '/menu', name: 'menu', component: Menu},
            {path: '/role', name: 'role', component: Role},
            {path: '/permission', name: 'permission', component: Permission},
        ],
    }
]

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import( '../views/login/login.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/login/notfund.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/login/notfund.vue')
    }

]

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes.concat(mainRoute)
})

export default router