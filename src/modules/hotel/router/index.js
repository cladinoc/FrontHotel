//path para login 

export default{
    name:'login',
    component: () => import(/* webpackChunkName: "login" */ '@/modules/hotel/layouts/LoginLayout.vue'),
    children:[

    ]
}
