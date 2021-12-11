

import axios from "axios"


//se utiliza firebase como backend y su documentación https://firebase.google.com/docs/reference/rest/auth#section-create-email-password

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyBqbYXdkTIctfL1B_zhMr6RxLNPCiiiBTU'
    }
})

export default authApi