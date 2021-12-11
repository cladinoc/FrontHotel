import state from './state'
import * as action from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default myCustomModule