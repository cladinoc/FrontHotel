

import axios from "axios"

//backend "creado" en firebase
const hostalApi = axios.create({
    baseURL: 'https://hotelc4-9488b-default-rtdb.firebaseio.com'
})

export default hostalApi