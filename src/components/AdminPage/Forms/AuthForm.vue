<template>
  <div class="modal-background">
    <b-card class="w-30 back-dark-violet">
      <b-form class="mx-2">
        <b-link>
          <img class="close-pos" src="../../../assets/close.svg" alt="Close"
               @click.prevent="onCloseForm">
        </b-link>
        <b-row>
          <b-col>
            <p class="font-32-bold clr-white">Aвторизация администратора</p>
          </b-col>
        </b-row>

        <b-form-row class="mb-3">
          <b-col>
            <b-form-input  class="mt-3 contacts-input wrapper-input" id="input-login" size="sm" type="text" v-model="user.login"
                          required>
            </b-form-input>
            <label for="input-login" class="px-1 input-label">
              Логин
            </label>
          </b-col>
        </b-form-row>

        <b-form-row class="mb-3">
          <b-col>
            <b-form-input class="mt-3 contacts-input wrapper-input" id="input-password" size="sm" type="text" v-model="user.password"
                          required>
            </b-form-input>
            <label for="input-password" class="px-1 input-label">
              Пароль
            </label>
          </b-col>
        </b-form-row>

        <b-row class="justify-content-end">
          <b-col lg="5">
            <b-button class="w-100 btn-main" @click.prevent="onLogin" type="submit">
              <!--              {{ $t('projects.createProject') }}-->
             Войти в систему
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>

</template>

<script>
    export default {
        name: "AuthForm",
      data(){
          return{
            user: {
              login: '',
              password: ''
            }

          }
      },
      methods: {
        onCloseForm(){
          this.$router.go(-1);
        },
        onLogin(){
          console.log('login pass', this.user);
          this.$router.push({name: 'adminCalendar'})
        }
      }
    }
</script>

