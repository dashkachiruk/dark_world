<template>
  <div class="my-5">
    <b-row class="p-0 mx-0 pb-5 img-donate-back" >
      <b-col>
        <b-container>
          <b-row>
          <p class="title-font mt-lg-5 mt-md-4 mt-sm-2 ml-4">
            <!-- Мы благодарны любой помощи и рады видеть новых партнеров! -->
            Оплата осуществляется через ЗАО «Альфа-Банк»
            </p>
        </b-row>
        </b-container>
        
        <b-container>
          <b-row align-h="center">
            <!-- <p class="title-font mt-lg-5 mt-md-4 mt-sm-2 ml-4">Мы благодарны любой помощи и рады видеть новых партнеров!</p> -->
            <b-col lg="6" sm="12">
              <img class="mb-2 mt-4 mx-2" src="../../assets/alfa_bank_donate.png" alt="">
              <p class="clr-white font-16-normal">Оплатить можно через ЕРИП</p>
            </b-col>

            <b-col lg="6" sm="12">
              <b-row>
                <img class="mb-2 mt-4 mx-2" src="../../assets/master_card_donate.png" alt="">
                <img class="mb-2 mt-4 mx-2" src="../../assets/visa_donate.png" alt="">
              </b-row>

              <b-row>
                <p class="clr-white font-16-normal">К оплате принимаются карты международных платежных систем VISA и MasterCard.</p>
              </b-row>

              <b-row >
                <b-link @click="onShowLink" class="clr-blue">
                  Ознакомиться с полными правилами
                </b-link>
              </b-row>
            </b-col>
          </b-row>
        </b-container>

        <b-row align-h="center" class="mt-lg-4 mt-md-3 mt-sm-3">
          <b-col lg="3" md="4" sm="12">
            <b-button class="btn-main w-100" @click="onGoCatalog">
              <p class="p-1 m-1">
                <!-- Поддержать проект -->
                Выбрать мероприятие и перейти к оплате
              </p>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "landingDonating",
    data() {
      return {
        phones: []
      }
    },
    methods: {
      onGoCatalog() {
        this.$router.push({name: 'catalog'});
      },
      onShowLink(){
      //  window.open("@/dist/oferta_Avrora_Granf.pdf")
      this.$router.push({name: 'bank'})
      }
    },
    created() {
      this.phones = this.$store.state.phones;
    }
  }
</script>
