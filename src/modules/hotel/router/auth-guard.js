
//al no estar autenticado sale de la vista de selección de habitación

import store from '@/store'

const isAuthenticatedGuard = async(to, from, next) =>{

    const { ok } = await store.dispatch('hostal/checkAuthentication') //ok para saber si está o no autenticado
    console.log(to, from)

    if ( ok ) next() //mantiene o deja pasar a la vista de seleccion de habitacion
    else next({name: 'login'})// envia a la vista de login

} 
export default isAuthenticatedGuard