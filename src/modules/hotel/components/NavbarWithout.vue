<!-- barra de navegación al loguearse -->

<template>
    <nav class="navbar bg-dark">
        <a class="navbar-brand text-white">
            <img src="@/assets/logo.png" 
                 alt="Vue logo"
                 height="24"
                 class="d-inline-block align-text-top mx-2">

            HOTEL SIN NOMBRE
        </a>

        <div class="d-flex">
            <ul class="navbar-nav mx-3">
                <li class="nav-item active">
                    <a class="nav-link" href="#">HOME<span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <ul class="navbar-nav mx-3" @click="$router.push({ name:'Home' })">
                <li class="nav-item ">
                    <a class="nav-link"  >GALERÍA</a>
                </li>
            </ul>
            <ul class="navbar-nav mx-3">       
                <li class="nav-item">
                    <a class="nav-link" href="#">NOSOTROS</a>
                </li>
            </ul>
        </div>

        <div class="d-flex">
            <ul>    
                BIENVENIDO {{ username }}        
            
                <button class="btn btn-outline-danger mx-2" @click="onLogout">
                    CERRAR SESIÓN
                </button>          
            </ul>
        </div>

    </nav>


</template>

<script>
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'

export default {
    setup() {
        const router = useRouter()
        const { username, logout } = useAuth()
        
        return {
            username,
            onLogout:() => {
                router.push({ name: 'login' })
                logout()
            }
        
        }
    }

    
}
</script>
