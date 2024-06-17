import {createStore} from 'vuex'
import {ref} from 'vue'

const store = createStore({
    state() {
        return {
            color: ref('rgba(19, 206, 102, 0.8)'),
            height: window.innerHeight,
            width: window.innerWidth,
            isCollapse: false,
            defaultTab: 'home',
            openTabs: [{
                title: '首页',
                name: 'home',
                canClose: false,
                content: '首页',
            }, {
                title: '菜单',
                name: 'menu',
                canClose: true,
                content: '菜单',
            }],
            menus: [
                {
                    id: 'home',
                    name: '首 213123  页',
                    hasChildren: false,
                    url: 'home'
                }, {
                    id: '1',
                    name: '系统菜单',
                    hasChildren: true,
                    children: [{
                        id: 'menu',
                        name: '菜单',
                        hasChildren: false,
                        url: '/system/menu/page'
                    }, {
                        id: 'permission',
                        name: '权限',
                        hasChildren: false,
                        url: '/system/permission/page'
                    }, {
                        id: 'role',
                        name: '角色',
                        hasChildren: false,
                        url: '/system/role/page'
                    }]
                }, {
                    id: '2',
                    name: '菜单002',
                    hasChildren: true,
                    children: [{
                        id: '21',
                        name: '全新',
                        hasChildren: false
                    }]
                }],
        }
    },
    mutations: {
        changeColor(state: any, color: any) {
            state.color = color;
        },
        changeHeight(state: any, height: number) {
            state.height = height;
        },
        changeWidth(state: any, width: number) {
            state.width = width;
        },
        changeDefaultTab(state: any, id: string) {
            state.defaultTab = id;
        },
        addOpenTabs(state: any, tab: Array<object>) {
            state.openTabs.push(tab);
        },
        delOpenTabs(state: any, tab: string) {
            let index = state.openTabs.findIndex((item: any) => {
                if (item.name == tab) {
                    return true
                }
            })
            state.defaultTab = state.openTabs[index - 1].name
            state.openTabs.splice(index, 1);
        },
        changeCollapse(state: any, value: boolean) {
            state.isCollapse = value;
        },
        setMenus(state: any, menus: any) {
            state.menus = menus;
        }
    }
})

export default store