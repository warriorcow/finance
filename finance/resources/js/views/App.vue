<template>
    <b-container fluid>
        <Header></Header>

        <router-view></router-view>
    </b-container>
</template>

<script>
import Header from "../components/Header"
export default {
    name: 'App',

    components: {
        Header
    }

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

<style lang="scss">
.contacts {
    &__form {
        display: flex;
        align-items: center;
        flex-direction: column;

        label {
            display: flex;
            flex-direction: column;
        }

        * {
            margin-bottom: 20px;
        }
    }
}
</style>
