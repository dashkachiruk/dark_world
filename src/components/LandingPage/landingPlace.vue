<template>
  <b-container class="my-5">
    <b-row class="mb-5">
      <b-col>
        <p class="title-font">Как нас найти?</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12">
        <b-row>
          <div id="map" class="mt-2">
          <yandex-map class="w-100 h-100" :settings="settings" :coords="coords" :debug="true">
            <ymap-marker 
                marker-id="1" 
                :coords="coords"
                :icon="markerIcon"
              />
          </yandex-map>
        </div>
        </b-row>
      </b-col>
      
      <b-col lg="6" md="6" sm="12" >
        <b-row>
          <b-col>
            <p class="plase-text clr-white">
            Минск, ул. Некрасова, 35/1-2н
          </p>
          </b-col>
          
        </b-row>
        <b-row>
          <b-col>
            <b-col>
              <b-row align-v="center" v-for="phone in phones" :key="phone.id">
                <img src="../../assets/small_pointer.svg" alt="*">
                <p class="mb-0 ml-2 plase-text clr-white">
                  {{phone.number}}
                </p>
              </b-row>
            </b-col>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-col>
            <b-row align-h="start">
              <b-link href="https://www.instagram.com/invisible_world.by/?igshid=12q04dzbhd53v">
                <img class="mb-2 mt-4" src="../../assets/instagram.svg" alt="Instagram">
              </b-link>

              <b-link href="https://www.facebook.com/%D0%A6%D0%B5%D0%BD%D1%82%D1%80-%D0%BA%D1%80%D0%B5%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B9-%D0%9D%D0%B5%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D1%8B%D0%B9-%D0%BC%D0%B8%D1%80-110601893629824/">
                <img class="mb-2 mt-4 mx-2" src="../../assets/facebook.svg" alt="Facebook">
              </b-link>

              <b-link href="https://vk.com/public201791565">
                <img class="mb-2 mt-4 mx-2" src="../../assets/vk.svg" alt="VK">
              </b-link>
            </b-row>
          </b-col>
          </b-col>  
        </b-row>

        

        <b-row class="mb-lg-5 mb-md-4 mb-sm-2">
          <b-col>
            <p class="plase-text clr-blue pointer" @click="goToGmail"
             id="mail_text">
            invisible.world.center@gmail.com
          </p>
          </b-col>
        </b-row>
<!--        <b-row>-->
<!--          <p >-->
<!--            Или оставьте заявку и мы свяжемся с вами!-->
<!--          </p>-->
<!--        </b-row>-->
<!--        <b-row class="mt-3">-->
<!--          <b-button class="btn-main font-24-bold" @click="onCallMe">-->
<!--            <p class="p-1 m-1">-->
<!--              Позвоните нам!-->
<!--            </p>-->
<!--          </b-button>-->
<!--        </b-row>-->
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
  import axios from "axios";
  import { yandexMap, ymapMarker } from 'vue-yandex-maps';
  // const settings = {
  //         apiKey: '98c81b7e-b3c3-4558-b0f9-0499c95cb9f3',
  //         lang: 'ru_RU',
  //         center: [ 53.932601, 27.582061],
  //         coordorder: 'latlong',
  //         version: '2.1',
  //         zoom: 7
  //       };

  export default {
    name: "landingPlace",
    components: { yandexMap, ymapMarker },
    data() {
      return {
        myMap: null,
        phones: [],
        coords: [53.932952, 27.581366],
        markerIcon: {},
        settings: {
          apiKey: '98c81b7e-b3c3-4558-b0f9-0499c95cb9f3',
          lang: 'ru_RU',
          center: [ 53.932601, 27.582061],
          coordorder: 'latlong',
          version: '2.1',
          zoom: 7
        }
      }
    },
    methods: {
      goToGmail() {
        /* копируем адрес в буфер */
        var emailLink = document.querySelector('#mail_text');
        var range = document.createRange();
        range.selectNode(emailLink);
        window.getSelection().addRange(range);
        var successful = document.execCommand('copy');
        // try {
        //   // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
        //   var successful = document.execCommand('copy');
        //   var msg = successful ? 'successful' : 'unsuccessful';
        //   console.log('Copy email command was ' + msg);
        // } catch(err) {
        //   console.log('Oops, unable to copy');
        // }

        // Снятие выделения - ВНИМАНИЕ: вы должны использовать
        // removeRange(range) когда это возможно
        window.getSelection().removeAllRanges();

        var win = window.open("https://mail.google.com", '_blank');
        win.focus();
      },
      // onCallMe() {
      //   this.$router.push({name: "contactForm"})
      // }
    },
    created() {
      this.phones = this.$store.state.phones;
      // let cont = this;
      // axios.get(this.$store.state.basePath + "phones").then(r => {
      //   console.log('resp', r.data);
      //   cont.phones = r.data.phones;
      // })
      //   .catch(e => {
      //     console.log(e)
      //   });
    },
    mounted() {
    }
  }
</script>

