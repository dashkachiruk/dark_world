<template>
  <b-container class="my-5">
    <b-row>
      <b-breadcrumb>
        <b-breadcrumb-item href="#donate" active>
          Поддержать проект
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-row>
    <b-row class="mb-4">
      <p class="title-font">Поддержите проект!</p>
    </b-row>
    <b-row class="mb-5">
      <p class="text-small">
        Благодарим Вас за интерес к нашему социальному проекту. 
        Вы можете оказать любую благотворительную финансовую поддержку Центру «Невидимый мир». 
        Все собранные средства пойдут не только на улучшение наших программ и реализацию новых интересных идей, 
        но и на создание доступной среды для людей с инвалидностью по зрению. Вместе мы сделаем мир лучше!
      </p>
    </b-row>
    <b-row>
      <!--      <b-col lg="6">-->
      <!--        <b-row>-->
      <!--          <p class="text-subtitle">-->
      <!--            Поддержите проект финансово-->
      <!--          </p>-->
      <!--        </b-row>-->
      <!--        <b-row class="mb-5">-->
      <!--          <p class="text-small">-->
      <!--            Вы можете перечислить любую сумму, которая для вас будет комфортна,-->
      <!--            чтобы поддержать нашу команды!-->
      <!--          </p>-->
      <!--        </b-row>-->
      <!--        <b-row class="mb-3">-->
      <!--          <b-button size="sm" class="mr-2 mb-2 tag-btn" v-for="step in donateSteps" :key="step">-->
      <!--            {{ step }}-->
      <!--          </b-button>-->
      <!--        </b-row>-->
      <!--        <b-row>-->
      <!--          <b-button class="btn-main">-->
      <!--            Пожертвовать-->
      <!--          </b-button>-->
      <!--        </b-row>-->

      <!--      </b-col>-->


      <b-row>
        <b-col>
          <p class="font-24-normal clr-white">Для того, чтобы поддержать проект, позвоните, пожалуйста, нашему
            менеджеру</p>
          <p class="font-24-normal clr-white" v-for="phone in phones" :key="phone.id">{{ phone.number}}</p>
        </b-col>
      </b-row>

      <!--      <b-col lg="6">-->
      <!--        <b-row>-->
      <!--          <p class="text-subtitle">-->
      <!--            Станьте партнером или спонсором!-->
      <!--          </p>-->
      <!--        </b-row>-->
      <!--        <b-row class="mb-3">-->
      <!--          <p class="text-small">-->
      <!--            Оставьте свои данные, и мы с вами свяжемся!-->
      <!--          </p>-->
      <!--        </b-row>-->
      <!--        <b-row>-->
      <!--          <b-button class="btn-main" @click="goToSendMsgDonate">-->
      <!--            Заполнить форму-->
      <!--          </b-button>-->
      <!--        </b-row>-->
      <!--      </b-col>-->
    </b-row>
    <!--    <router-view></router-view>-->
  </b-container>
</template>

<script>
  export default {
    name: "Donate",
    data() {
      return {
        donateSteps: ['5руб', '7руб', '10руб', '15руб', '20руб', '30руб'],
        phones: []
      }
    },
    created() {
      this.phones = this.$store.state.phones;
    },
    methods: {
      // goToSendMsgDonate() {
      //   this.$router.push({name: 'contactFormDonate'})
      // }
    }
  }
</script>
