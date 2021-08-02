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
            <p class="font-32-bold clr-white">Оформление сертификата</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <p class="font-24-normal clr-white">Для заказа сертификата позвоните, пожалуйста, нашему менеджеру</p>
            <p class="font-24-normal clr-white" v-for="phone in phones" :key="phone.id">{{ phone.number}}</p>
          </b-col>
        </b-row>

<!--        <b-form-row class="mb-3">-->
<!--          <b-col>-->
<!--            <b-form-input class="mt-3 contacts-input"-->
<!--                          id="input-name" size="sm" type="text" v-model="userData.name"-->
<!--                          required>-->
<!--            </b-form-input>-->
<!--            <label for="input-name" class="px-1 input-label">-->
<!--              Как к вам обращаться?*-->
<!--            </label>-->
<!--          </b-col>-->
<!--        </b-form-row>-->

<!--        <b-form-row class="mb-3">-->
<!--          <b-col>-->
<!--            <b-form-input  class="mt-3 contacts-input"-->
<!--                          id="input-phone" size="sm" type="text" v-model="userData.phone"-->
<!--                          required>-->
<!--            </b-form-input>-->
<!--            <label for="input-password" class="px-1 input-label">-->
<!--              Ваш номер телефона*-->
<!--            </label>-->
<!--          </b-col>-->
<!--        </b-form-row>-->

<!--        <b-form-row class="mb-3">-->
<!--          <b-col>-->
<!--            <b-form-input  class="mt-3 contacts-input"-->
<!--                          id="input-email" size="sm" type="email" v-model="userData.email">-->
<!--            </b-form-input>-->
<!--            <label for="input-email" class="px-1 input-label">-->
<!--              Ваш email (не обязательно)-->
<!--            </label>-->
<!--          </b-col>-->
<!--        </b-form-row>-->

<!--        <b-form-row class="mb-3">-->
<!--          <b-col>-->
<!--            <b-form-select :options="selectEvents" value-field="id" text-field="name"-->
<!--                            class="mt-3 contacts-input"-->
<!--                           id="input-sertificate" size="sm" type="text" v-model="userData.sertificate"-->
<!--                           required>-->
<!--            </b-form-select>-->
<!--            <label for="input-sertificate" class="px-1 input-label">-->
<!--              Какой сертификат вы бы хотели заказать?-->
<!--            </label>-->
<!--          </b-col>-->
<!--        </b-form-row>-->

<!--        <b-form-row class="mb-3">-->
<!--          <b-col>-->
<!--            <b-form-textarea rows="3" max-rows="4"  class="mt-3 contacts-input"-->
<!--                             id="input-wishes" size="sm" type="text" v-model="userData.description"-->
<!--                             placeholder="Напишите..."-->
<!--                             required>-->
<!--            </b-form-textarea>-->
<!--            <label for="input-wishes" class="px-1 input-label">-->
<!--              Есть какие-то пожелания?-->
<!--            </label>-->
<!--          </b-col>-->
<!--        </b-form-row>-->

<!--        <b-row class="justify-content-end">-->
<!--          <b-col lg="5">-->
<!--            <b-button class="w-100 btn-main" @click.prevent="onSave" type="submit">-->
<!--              Сохранить-->
<!--            </b-button>-->
<!--          </b-col>-->
<!--        </b-row>-->
      </b-form>
    </b-card>
  </div>

</template>

<script>
  export default {
    name: "SertificateForm",
    data() {
      return {
        phones: [],
        userData: {
          name: '',
          phone: '',
          email: '',
          sertificate: 0,
          description: '',
        },
        selectEvents: []
      }
    },
    methods: {
      onSave() {
        console.log('usr data', this.userData);
        this.onCloseForm();
      },
      onCloseForm() {
        this.$router.go(-1);
      }
    },
    created() {
      this.phones = this.$store.state.phones;
      // this.selectEvents = [{id: 1, name: 'Cвидание в темноте'}, {id: 2, name: 'Богемская рапсодия'}]
    }
  }
</script>


