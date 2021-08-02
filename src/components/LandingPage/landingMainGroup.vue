<template>
  <b-container class="main-container">
    <b-row >
      <b-col lg="12" >
        <h1 class="main-gradient-text mb-4">Невидимый мир</h1>
        <!--  my-lg-5 my-md-5 mt-sm-5 mb-sm-3 pt-lg-5 pt-md-5 pt-sm-5 -->
      </b-col>
    </b-row>
    <b-row>
      <!-- class="mb-lg-5 mb-md-4 mb-sm-4" -->
      <b-col>
        <p class="text-subtitle mb-5">Темнота — территория открытий!</p>
        <!-- mb-lg-5 mb-md-5 mb-sm-5 -->
      </b-col>
    </b-row>
    <b-row class="my-lg-5 my-sm-3 my-md-4">
      <!-- class="my-lg-5 my-sm-5 my-md-4" -->
      <b-col sm="12" lg="3" md="5">
        <b-button class="btn-main w-100" >
          <p class="p-1 m-1" @click="goToCatalog">
            Смотреть мероприятия
          </p>
        </b-button>
      </b-col>
    </b-row>

    <b-row align-h="center" class="mt-3">
      <!-- class="my-lg-5 py-sm-3 my-md-4"  -->
      <b-col>
        <b-row align-h="center" class="main-group-spinner">
          <b-button class="back-transparent z-100" href="/#events">
            <img src="../../assets/down-btn.svg" alt="Вниз">
          </b-button>
        </b-row>
        <b-row align-h="center" class="main-group-spinner">
          <p class="text">Узнай больше...</p>
        </b-row>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
  export default {
    name: "landingMainGroup",
    methods: {
      goToCatalog(){
        this.$router.push({path: '/catalog'});
      },
      // onGoToList(){
      //   // alert('aaaaaaa')
      //   this.$router.push({path: "/dark_world#events"});
      // }
    }
  }
</script>

