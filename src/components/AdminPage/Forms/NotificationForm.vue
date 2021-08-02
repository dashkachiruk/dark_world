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
            <p class="font-32-bold clr-white">{{ title }}</p>
          </b-col>
        </b-row>

        <b-row>
          <p class="font-16-normal clr-white">{{subTitle}}</p>
        </b-row>
        <b-row>
          <p class="font-20-bold clr-white">{{text}}</p>
        </b-row>

        <b-row class="justify-content-end">
          <b-col lg="5">
            <b-button class="w-100 btn-main" @click.prevent="onSubmitForm" type="submit">
              {{ btnText }}
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>

</template>

<script>
  export default {
    name: "NotificationForm",
    props: {
      title: String,
      text: String,
      subTitle: String,
      btnText: String,
      routePath: String
    },
    methods: {
      onSubmitForm(){
        this.$router.push({path: this.routePath});
      },
      onCloseForm(){
        this.$router.go(-1);
      }
    }
  }
</script>
