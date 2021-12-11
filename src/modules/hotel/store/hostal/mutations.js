export const setRoom = (state, rooms) => { //unicamente para importar del backend pero aun no se usa completamente
    state.rooms = [ ...state.rooms, ...rooms ]
    state.isLoading = false

}

export const loginUser = (state, {user, idToken, refreshToken}) => { //set en localstore de tokens

        if ( idToken ){
            localStorage.setItem( 'idToken', idToken )
            state.idToken = idToken
        }

        if ( refreshToken ){
            localStorage.setItem( 'refreshToken', refreshToken )
            state.refreshToken = refreshToken
        }

        state.user = user
        state.status = 'authenticated'
}

export const logout = (state) => { //reset valores al cerrar sesión
    state.user = null
    state.idToken = null
    state.refreshToken = null
    state.status = 'not-authenticated'

    localStorage.removeItem('idToken')
    localStorage.removeItem('refreshToken')

}