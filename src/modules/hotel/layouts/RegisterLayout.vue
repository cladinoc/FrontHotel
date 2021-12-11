<!-- usado para fusionar navbar con la vista registro -->


<template>
    <Navbar />
    <Register />

    
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    components:{
        Navbar: defineAsyncComponent(() => import ('../components/Navbar.vue')),
        Register: defineAsyncComponent(() => import ('../components/Register.vue')),

    }
}
</script>