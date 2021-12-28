<template>
    <div>
        <Header v-if="auth"></Header>
        <main class="main">
            <Sidebar v-if="auth"></Sidebar>
            <div class="main__content">
                <router-view></router-view>
            </div>
        </main>
        </b-row>
    </div>
</template>

<script>
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { mapGetters } from "vuex"
export default {
    name: 'App',

    components: {
        Header, Sidebar
    },

    computed: {
        ...mapGetters({
            user: "USER",
            auth: "AUTH",
        })
    },

    // beforeRouteEnter(to, from, next) {
    //     console.log('хуй')
    //     if (!window.Laravel.isLoggedin) {
    //         this.router.push("login");
    //     }
    //     next();
    // }

    // data() {
    //     return {
    //         contacts: [],
    //         editContact: {},
    //         contact: {
    //             email: '',
    //             subject: '',
    //             message: ''
    //         }
    //     }
    // },

    // methods: {
    //     addContact() {
    //         this.axios
    //             .post('http://127.0.0.1:8000/api/contacts', this.contact)
    //             .then(() => this.getContact())
    //     },

    //     getContact() {
    //         this.axios
    //             .get('http://127.0.0.1:8000/api/contacts')
    //             .then(response => {
    //                 this.contacts = response.data;
    //             });
    //     },

    //     patchContact(id) {
    //         this.editContact = contacts.filter(contact => id === contact.id)
    //         this.axios
    //             .patch(`http://127.0.0.1:8000/api/contacts/${id}`, this.editContact)
    //             .then(() => this.getContact())
    //     }
    // },

    // mounted() {
    //     console.log(this)
    //     this.getContact()
    // }
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;

    &__content {
        padding: 0.75rem;
    }

    &__content {
        flex: 1;
    }
}
</style>
