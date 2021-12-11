import { computed } from 'vue'
import { useStore } from 'vuex'

// import { Store } from "vuex"
// import { storeKey } from "vuex/dist/vuex.cjs"

const useAuth = () =>{

    const store = useStore() 

    const createUser = async( user ) => {
        const resp = await store.dispatch('hostal/createUser', user) //importar de store/hostal/actions funcion createUser
        return resp
    }

    const loginUser = async( user ) => {
        const resp = await store.dispatch('hostal/signInUser', user) //importar de store/hostal/actions funcion signInUser
        return resp
    }

    const checkAuthStatus = async() => {
        const resp = await store.dispatch('hostal/checkAuthentication') //importar de store/hostal/actions funcion checkAuthentication
        return resp
    }

    const logout = () => {
        store.commit('hostal/logout') //commit de store/hostal/mutations funcion logout
    }

    return{
        createUser,
        loginUser,
        checkAuthStatus,
        logout,

        authStatus: computed(() => store.getters['hostal/currentState'] ), //obtener status
        username: computed(() => store.getters['hostal/username'] ) //obtener username


    }
}

export default useAuth