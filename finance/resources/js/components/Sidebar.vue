<template>
    <div class="sidebar">
        <ul>
            <li>
                <b-link to="profile">
                    Profile
                </b-link>
            </li>
            <li>
                <b-link to="cash">
                    Cash
                </b-link>
            </li>
            <li>
                <b-link to="settings">
                    Settings
                </b-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sidebar {
    width: 150px;
    padding-left: 10px;
    height: calc(100vh - 70px);
    background: var(--secondary);

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
}
</style>
