<template>
    <b-container fluid>
        <b-row class="header">
            <b-col class="header__icon" cols="2">
                <b-icon font-scale="3" icon="cash-stack"></b-icon>
                <div class="ml-4" v-if="user">{{ user.name }}</div>
            </b-col>
            <b-col cols="10" class="header__menu">
                <b-link class="header__link" to="/">Home</b-link>
                <b-link class="header__link" to="/dashboard">Dashboard</b-link>
                <b-link class="header__link" @click="logout">Logout</b-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters({
            user: 'USER'
        })
    },

    methods: {
        logout(e) {
            console.log('ss')
            e.preventDefault()
            this.axios.get('/sanctum/csrf-cookie').then(response => {
                this.axios.post('/api/logout')
                    .then(response => {
                        if (response.data.success) {
                            // console.log(this)
                            this.$router.go("login")
                        } else {
                            console.log(response)
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    background: var(--main);
    height: 70px;

    &__icon {
        display: flex;
        align-items: center;
    }

    &__menu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    &__link {
        &:not(:first-child) {
            margin-left: 20px;
        }
    }
}
</style>
