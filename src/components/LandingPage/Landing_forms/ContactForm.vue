<template>
  <div class="modal-background">
    <b-card class="w-30 back-dark-violet" >
      <b-form class="mx-2" @submit="onSave" @reset="onCloseForm">
        <b-link>
          <img class="close-pos" src="../../../assets/close.svg" alt="Close"
               @click.prevent="onCloseForm">
        </b-link>
        <b-row>
          <b-col>
            <p class="font-32-bold clr-white">Мы перезвоним вам!</p>
          </b-col>
        </b-row>

        <b-form-row class="mb-3">
          <b-col>
            <b-form-input class="mt-3 contacts-input"
                          id="input-name" size="sm" type="text" v-model="userData.name"
                          required>
            </b-form-input>
            <label for="input-name" class="px-1 input-label">
              Как к вам обращаться?*
            </label>
          </b-col>
        </b-form-row>

        <b-form-row class="mb-3">
          <b-col>
            <b-form-input class="mt-3 contacts-input"
                          id="input-phone" size="sm" type="text" v-model="userData.phone"
                          required>
            </b-form-input>
<!--            <vue-phone-number-input-->
<!--              v-model="userData.phone"-->
<!--              no-flags="true"-->
<!--              default-country-code="BY"-->
<!--              @blur="onValidate"-->
<!--              color="#48DBD2"-->
<!--              class="contacts-input"-->
<!--              :translations="{-->
<!--              countrySelectorLabel: 'Выберите страну',-->
<!--              countrySelectorError: 'Ошибка ввода',-->
<!--              phoneNumberLabel: 'Введите номер'-->
<!--            }"-->
            />
            <label for="input-password" class="px-1 input-label">
              Ваш номер телефона*
            </label>
          </b-col>
        </b-form-row>

        <b-row class="justify-content-end">
          <b-col lg="5">
            <b-button class="w-100 btn-main" @click.prevent="onSave" type="submit">
              Сохранить
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>

</template>

<script>

  export default {
    name: "ContactForm",
    data() {
      return {
        userData: {
          name: '',
          phone: ''
        },
        // phoneValidation: false,

      }
    },
    methods: {
      onCloseForm() {
        this.$router.go(-1);
      },
      // onValidate(data){
      //   // console.log('success', data);
      //   this.phoneValidation = data.isValidByLibPhoneNumberJs;
      // },
      onSave() {
       // console.log('user data', this.userData);
        if(this.userData.name && this.userData.phone){
          this.onCloseForm();
        }

      }
    }
  }
</script>
