<template>
    <b-row class="login">
        <b-col cols="6" offset="3">
            <b-form
                v-if="typePage === 'login'"
                class="login__form"
                @submit.prevent="login"
            >
                <h1>Login</h1>
                <b-form-group
                    label="Email address:"
                >
                    <b-form-input
                        v-model="formLogin.email"
                        type="text"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Password:"
                >
                    <b-form-input
                        v-model="formLogin.password"
                        type="password"
                        placeholder="Enter password"
                        required
                    ></b-form-input>
                </b-form-group>
                <div class="mt-4 text-end">
                    <b-button type="submit">Login</b-button>
                    <b-button class="ms-2" @click="toggleLogin">{{ loginButtonName }}</b-button>
                </div>
            </b-form>

            <b-form
                v-else
                class="login__form"
                @submit.prevent="register"
            >
                <h1>Register</h1>
                <b-form-group
                    label="Name:"
                >
                    <b-form-input
                        v-model="formRegister.name"
                        type="text"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Email address:"
                >
                    <b-form-input
                        v-model="formRegister.email"
                        type="text"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Password:"
                >
                    <b-form-input
                        v-model="formRegister.password"
                        type="password"
                        placeholder="Enter password"
                        required
                    ></b-form-input>
                </b-form-group>
                <div class="mt-4 text-end">
                    <b-button type="submit">Register</b-button>
                    <b-button class="ms-2" @click="toggleLogin">{{ loginButtonName }}</b-button>
                </div>
            </b-form>
        </b-col>
    </b-row>


</template>

<script>
export default {
    data() {
        return {
            typePage: "login",
            formLogin: {
                email: "",
                password: ""
            },

            formRegister: {
                name: "",
                email: "",
                password: ""
            }
        }
    },

    computed: {
        loginButtonName() {
            return this.typePage === "login" ? 'Register' : 'Back to login'
        }
    },

    methods: {
        toggleLogin() {
            this.typePage === 'login' ? this.typePage = 'register' : this.typePage = 'login'
        },

        login() {
            if (this.formLogin.password.length > 0) {
                this.axios.get('/sanctum/csrf-cookie').then(() => {
                    this.axios.post('api/login', this.formLogin)
                        .then(response => {
                            if (response.data.success) {
                                this.$router.go('/dashboard')
                            } else {
                                alert('Нет такого юзера')
                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                })
            }
        },

        register() {
            if (this.formRegister.password.length > 0) {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('api/register', this.formRegister)
                        .then(response => {
                            if (response.data.success) {
                                this.typePage = "login"
                            } else {
                                this.error = response.data.message
                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
                })
            }
        }
    },

    beforeRouteEnter(to, from, next) {
        if (window.Laravel.isLoggedin) {
            return next('dashboard');
        }
        next();
    }
}
</script>

<style lang="scss" scoped>
.login {
    margin-top: 15%;

    &__form {
        box-shadow: 0 0 20px 0px var(--shadow);
        padding: 20px;
        border-radius: 10px;
    }
}
</style>
