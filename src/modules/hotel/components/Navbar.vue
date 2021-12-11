<!-- barra de navegación sin estar logueado (se quiere hacer if con barra de navegación al loguearse (NavbarWithout)) -->
<!-- para tener una única barra de navegación -->


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
                <button class="btn btn-outline-success mx-3" @click="$router.push({ name:'login' })">
                    INICIA SESIÓN
                </button>
            
                <button class="btn btn-outline-warning mx-2" @click="$router.push({ name:'Register' })">
                    REGISTRATE
                </button>          
            </ul>
        </div>

    </nav>


</template>