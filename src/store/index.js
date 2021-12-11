import Vuex from 'vuex'

import hostalModule from '../modules/hotel/store/hostal';

const store = new Vuex.Store({
    modules: {
        hostal: hostalModule
    }

})

export default store