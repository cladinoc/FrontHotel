<!-- vista registro de usuario -->

<template>

<form @submit.prevent="onSubmit">
    <div class="abs-center" id="login-box" >
        <h1 class="text-light">REGISTRO DE USUARIO</h1> 

        <div class="form">
            

            <div class="item mt-5"> 
                <i></i> 
                <input v-model="userForm.name" type="text" placeholder="NOMBRE" name="nombre">
            </div>

            <div class="item mt-2"> 
                <i></i> 
                <input v-model="userForm.email" type="email" placeholder="CORREO" name="correo">
            </div>

            <div class="item mt-2"> 
                <i></i> 
                <input v-model="userForm.password" type="password" placeholder="CONTRASEÑA" name="contraseña"> 
            </div>

        </div>
        
        <div class="abs-center" id="login-button">
            <ul>            
                <!-- <button type="submit" class="btn btn-outline-success mt-5" @click="$router.push({ name:'roomSelect' })"> -->
                    <button type="submit" class="btn btn-outline-success mt-5">
                    REGISTRATE
                </button>         
            </ul>
        </div>
    </div>
</form>
    

</template>

<script>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'

import Swal from 'sweetalert2'

export default {

    setup(){

        const router = useRouter()
        const { createUser } = useAuth()

        const userForm = ref({
            name:'',
            email:'',
            password:''
        })

        return{
            userForm,

            onSubmit: async() =>{
               const{ ok, message } = await createUser( userForm.value )

                if ( !ok ) Swal.fire('Error', message, 'error')
                else router.push( {name: 'roomSelect'})
               
            }
        }

    }

}
</script>

<style>
#login-box {
    border: 1px solid black;
    width: 60%;
    text-align: center;
    margin: 0 auto;
    margin-top: 15%;
    background: #343a40;
    padding: 50px 50px;
}
#login-button{
    text-align: center;
    align-self: center;
}


</style>