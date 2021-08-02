<template>
  <div class="modal-background">
    <b-card class="w-50 back-dark-violet" style="opacity: 1;">
      <b-form class="mx-2" @submit="onSave" @reset="onCloseForm">
        <b-link>
          <img class="close-pos" src="../../../assets/close.svg" alt="Close"
               @click.prevent="onCloseForm">
        </b-link>
        <b-row>
          <b-col>
            <p class="font-32-bold clr-white">Оставьте свой отзыв</p>
          </b-col>
        </b-row>

        <b-form-row class="mb-3">
          <b-col>
            <b-form-input class="mt-3 contacts-input wrapper-input"
                          id="input-name" size="sm" type="text" v-model="userData.name"
                          required>
            </b-form-input>
            <label for="input-name" class="px-1 input-label">
              Как к вам обращаться?*
            </label>
          </b-col>
        </b-form-row>

<!--        <b-form-row class="mb-3">-->
<!--          <b-col lg="4">-->
<!--            <b-form-select :options="selectNetworks"  class="mt-3 contacts-input"-->
<!--                         text-field="name" value-field="id" id="input-netw" size="sm" type="text" v-model="userData.network_type"-->
<!--                          required>-->
<!--            </b-form-select>-->
<!--            <label for="input-netw" class="px-1 input-label">-->
<!--              Ваш профиль?-->
<!--            </label>-->
<!--          </b-col>-->
<!--          <b-col lg="8">-->
<!--            <b-form-input  class="mt-3 contacts-input"-->
<!--                          id="input-link" size="sm" type="text" v-model="userData.network_link"-->
<!--                          required>-->
<!--            </b-form-input>-->
<!--            <label for="input-link" class="px-1 input-label">-->
<!--              Ссылка на ваш профиль в соцсетях-->
<!--            </label>-->
<!--          </b-col>-->
<!--        </b-form-row>-->


        <b-form-row class="mb-3">
          <b-col>
            <b-form-textarea rows="4" max-rows="6" class="mt-3 contacts-input"
                             id="input-text" size="sm" type="text" v-model="userData.text"
                             placeholder="Напишите..."
                             required>
            </b-form-textarea>
            <label for="input-text" class="px-1 input-label">
              Напишите пару слов о мероприятии!
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
        name: "ReviewForm",
      data(){
          return{
            userData: {
              name: '',
              network_type: 0,
              network_link: '',
              text: ''
            },
            selectNetworks: []
          }
      },
      methods: {
          onSave(){
            console.log('usr data', this.userData);
            this.onCloseForm();

          },
        onCloseForm(){
            this.$router.go(-1);
        }
      },
      created() {
          this.selectNetworks = [{id: 1, name: 'Вконтакте'}, {id: 2, name: 'Тelegram'}]
      }
    }
</script>
