<template>
  <b-container fluid class="pos-100">
    <b-row class="w-100 pos-abs" align-h="end" v-if="$route.name == 'darkWorld'">
      <!--      <b-col lg="6" class="mt-5">-->
      <img src="../assets/right_fon.png" alt="Невидимый мир">
      <!--      </b-col>-->
    </b-row>
    <b-container id="start">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="/">
          <img class="max-widh-80" src="../assets/logo.png" alt="Logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="light-blue-text-color" href="/catalog">Мероприятия</b-nav-item>
            <b-nav-item class="light-blue-text-color" href="/#features">Что это?</b-nav-item>
            <b-nav-item class="light-blue-text-color" href="/#reviews">Отзывы</b-nav-item>
            <b-nav-item class="light-blue-text-color" href="/#place">Как найти?</b-nav-item>
            <b-nav-item class="light-blue-text-color" href="/donate">Поддержать проект</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-col v-if="phones.length > 0">
                <p class="phone-number p-0 m-0" v-for="phone in phones" :key="phone.id">{{phone.number}}</p>
              </b-col>
            </b-nav-form>

<!--            <b-button size="sm" class="my-0 my-sm-0 light-blue-text-color" @click="onGoToContacts"-->
<!--                      >-->
<!--              <p class="mb-0 pb-0 mx-4">-->
<!--                ПОЗВОНИ НАМ-->
<!--              </p>-->
<!--            </b-button>-->

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </b-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Header",
    data() {
      return {
        phones: []
      }
    },
    created() {
      this.phones = this.$store.state.phones;
      // let cont = this;
      // axios.get(this.$store.state.basePath + "phones").then(r => {
      //   // console.log('resp', r.data);
      //   cont.phones = r.data.phones;
      // })
      //   .catch(e => {
      //     console.log(e)
      //   });
    },
    methods: {
      // onGoToContacts(){
      //   this.$router.push({name: "contactForm"})
      // }
    }
  }
</script>
