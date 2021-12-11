<!-- usado para fusionar navbar con la vista seleccion de habitacion -->

<template>
    <NavbarWithout />
    <RoomSelect />

</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    components:{
        NavbarWithout: defineAsyncComponent(() => import ('../components/NavbarWithout.vue')),
        RoomSelect: defineAsyncComponent(() => import ('../components/RoomSelect.vue')),

    }
}
</script>