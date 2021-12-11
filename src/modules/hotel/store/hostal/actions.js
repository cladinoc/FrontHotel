import hostalApi from '@/api/hostalApi'
import authApi from '@/api/authApi'
// import { compileTemplate } from '@vue/compiler-sfc'


export const loadRoom = async ({ commit }) => { //cargar vista (luego de login) para obtener datos de backend (aun no se cargan)
    const { data } = await hostalApi.get('/Habitacion.json')
    const rooms = []
    for ( let id of Object.keys( data ) ) {
        rooms.push({
            id,
            ...data[id]
        })
    }
    commit('setRoom', rooms)
    console.log(data)
}


export const createUser = async ({ commit }, user) => { //creación de usuario con token
    const {name, email, password} = user

    try{
        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })   
        const{ idToken, refreshToken } = data
        const resp = await authApi.post(':update', { displayName: name, idToken})

        console.log(resp, refreshToken)

        delete user.password
        commit('loginUser', { user, idToken, refreshToken})

        return { ok:true }

    }catch(error) {       
        return { ok: false, message: error.response.data.error.message}
    }
}

export const signInUser = async ({ commit }, user) => { //Login de usuario
    const {name, email, password} = user
    console.log(name)

    try{
        const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })   

        const{ displayName ,idToken, refreshToken } = data
        console.log(data)

        user.name = displayName

        commit('loginUser', { user, idToken, refreshToken})

        return { ok:true }

    }catch(error) {
 
        return { ok: false, message: error.response.data.error.message}

    }
}



export const checkAuthentication = async ({ commit }) => { //usado para comprobar el estado de autenticación

    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if( !idToken ) { //cerrar sesión al no estar autenticado (sin idToken)
        commit('logout')
        return{ ok: false, message: 'No hay token'}
    }

    try{ 
        const {data} = await authApi.post(':lookup', { idToken })
        console.log(data)
        const{ displayName , email } = data.users[0]

        const user = {
            name: displayName,
            email: email
        }
        commit('loginUser', { user, idToken, refreshToken})

        return { ok: true } //ok true que demuestra que esta autenticado

    }catch(error) {
        commit('logout')
        return{ ok: false, message: error.response.data.error.message } //ok false que demuestra que no esta autenticado
    }



}