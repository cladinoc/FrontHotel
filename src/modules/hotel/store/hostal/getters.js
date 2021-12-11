
export const currentState = ( state ) => { //obtener status
    return state.status
}

export const username = ( state ) => { //obtener username
    return state.user?.name || ''
}