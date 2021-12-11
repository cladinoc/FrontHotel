<!-- usado para fusionar navbar con la vista login -->

<template>
    <Navbar />
    <Login />

</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    components:{
        Navbar: defineAsyncComponent(() => import ('../components/Navbar.vue')),
        Login: defineAsyncComponent(() => import ('../components/Login.vue')),
    }
}
</script>