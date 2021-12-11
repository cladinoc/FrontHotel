<!-- usado para fusionar navbar con la vista home -->

<template>
    <Navbar />
    <Home />

</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions } from 'vuex'


export default {
    components:{
        Navbar: defineAsyncComponent(() => import ('../components/Navbar.vue')),
        Home: defineAsyncComponent(() => import ('../components/Home.vue')),
    },
    methods:{
        ...mapActions('hostal',['loadRoom'])
    },
    created(){
        this.loadRoom()
    }
}
</script>