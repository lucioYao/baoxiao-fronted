export default [
    {
        path: '/login',
        // alias: '/',
        name: 'login',
        component:() => import('@/views/Login.vue')
    },
    {
        path: '/admin',
        alias: '/',
        name: 'admin',
        component:() => import('@/views/Admin.vue')
    }
]