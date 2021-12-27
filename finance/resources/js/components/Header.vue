<template>
    <b-row class="header">
        <b-col class="header__icon" cols="2">
            <b-icon font-scale="3" icon="cash-stack"></b-icon>
        </b-col>
        <b-col cols="10" class="header__menu">
            <b-link class="header__link" to="/">Home</b-link>
            <b-link class="header__link" to="/dashboard">Dashboard</b-link>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
.header {
    background: var(--main);
    padding-top: 10px;
    padding-bottom: 10px;

    &__icon {
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
