

<template>

    <form @submit.prevent="onSubmit">

        <div class="abs-center" id="login-box">

            <h1 class="text-light">INICIO DE SESIÓN</h1> 

            <div class="form">

                <div class="item mt-5"> 
                    <i></i> 
                    <input v-model="userForm.email" type="email" placeholder="CORREO" name="correo">
                </div>

                <div class="item mt-2"> 
                    <i></i> 
                    <input v-model="userForm.password" type="password" placeholder="CONTRASEÑA" name="contraseña"> 
                </div>

            </div>
            
            <div class="abs-center" id="login-button" >
                <ul>            
                    <button class="btn btn-outline-success mt-5">
                        INICIA SESIÓN
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
        const { loginUser } = useAuth() //importar func loginUser de "composables/useAuth"

        const userForm = ref({
            email:'',
            password:''
        })

        return{

            userForm,

            onSubmit: async() =>{
               const{ ok, message } = await loginUser( userForm.value ) 

                if ( !ok ) Swal.fire('Error', message, 'error') //notificación error de login
                else router.push( {name: 'roomSelect'}) //login exitoso             
            }
        }

    }

}
</script>

<style>
#login-box {
    border: 1px solid black;
    width: 30%;
    text-align: center;
    margin: 0 auto;
    margin-top: 15%;
    background: #343a40;
    padding: 20px 50px;
}
#login-button{
    text-align: center;
    align-self: center;
}


</style>