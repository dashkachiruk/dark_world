<template>
  <b-container fluid >
    <b-row class="img-sertificate-back">
      <b-col class="m-0 p-0">
        <b-row class="w-100 mt-lg-5 mt-md-5 mt-sm-3 mr-4">
          <b-col lg="5">

          </b-col>
          <b-col lg="7" md="12" sm="12">
            <b-container>
              <b-col lg="12" class="justify-content-start">
                <p class="title-font mt-3">Подарите друзьям новые эмоции в мире темноты!</p>

                <p class="text-small">
                  Подарочный сертификат в мир темноты – отличный способ порадовать друзей и близких! Ведь Вы дарите незабываемые
                  впечатления! Поход на концерт,
                  свидание или участие в игровой программе «Мир наощупь» станет классным подарком как для одного человека, так и
                  для пары или группы людей.
                </p>
                <p class="text-small">
                  Для заказа сертификата обратитесь, пожалуйста, к нашему менеджеру:
                </p>
                <b-row>
                  <p class="text-small mx-3" v-for="phone in phones" :key="phone.id">
                    {{ phone.number }}
                  </p>
                </b-row>

<!--                <b-row class="justify-content-start mt-lg-1 mt-md-1 mt-sm-1">-->
<!--                  <b-col sm="12" lg="5" md="4">-->
<!--                    <b-button class="w-100 btn-main mt-lg-5 mt-md-2 mt-sm-1" @click="onGetSertificate">-->
<!--                      <p class="p-1 m-1">-->
<!--                        Заказать сертификат-->
<!--                      </p>-->
<!--                    </b-button>-->
<!--                  </b-col>-->
<!--                </b-row>-->
              </b-col>
            </b-container>
          </b-col>
        </b-row>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import giftPicture from '../../assets/gift.png'

  export default {
    name: "landingGifts",
    components: {
      giftPicture
    },
    data() {
      return {
        phones: []
      }
    },
    created() {
      this.phones = this.$store.state.phones;
    },
    methods: {
      // onSlideStart(slide) {
      //   this.sliding = true
      // },
      // onSlideEnd(slide) {
      //   this.sliding = false
      // },
      onGetSertificate() {
        this.$router.push({name: 'sertificateForm'})
      }
    }
  }
</script>

