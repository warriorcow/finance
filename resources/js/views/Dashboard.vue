<template>
    <b-row>
        <b-col>
            <div>DASHBOARD</div>
            <div>{{ user.name }}</div>
        </b-col>
    </b-row>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters({
            user: "USER"
        })
    }
}
</script>

<style>

</style>
