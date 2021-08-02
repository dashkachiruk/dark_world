<template>
  <b-container>
    <b-row class="py-lg-5 py-sm-1" align-v="center">
      <b-col lg="4" md="12" >
        <!-- class="footer-show" -->
        <!-- <b-row class="mb-2 mx-3">
          <b-link href="https://www.instagram.com/invisible_world.by/?igshid=12q04dzbhd53v">
            <img class="mb-2 mt-4" src="../assets/instagram.svg" alt="Instagram">
          </b-link>

          <b-link href="https://www.facebook.com/%D0%A6%D0%B5%D0%BD%D1%82%D1%80-%D0%BA%D1%80%D0%B5%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B9-%D0%9D%D0%B5%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D1%8B%D0%B9-%D0%BC%D0%B8%D1%80-110601893629824/">
            <img class="mb-2 mt-4 mx-2" src="../assets/facebook.svg" alt="Facebook">
          </b-link>

          <b-link href="https://vk.com/public201791565">
            <img class="mb-2 mt-4 mx-2" src="../assets/vk.svg" alt="VK">
          </b-link>
        </b-row> -->

        <!-- <b-row class="mt-3 mb-5">
          <b-col>
            <p class="text" v-for="phone in phones" :key="phone.id">{{phone.number}}</p>
          </b-col>
        </b-row> -->

        <b-row>
          <b-col>
            <!-- <p class="text" >Республика Беларусь г. Минск,</p>
            <p class="text" >ул. Некрасова 35/1 - 2н</p>
            <p class="text" >ЗАО «Альфа-Банк»</p> -->
            <p class="text mb-2">
              Информационно-практическое учреждение по снижению стигматизации в отношении людей с инвалидностью «Аврора Гранд»
            </p>  
            <p class="text">Режим работы 10.00 - 21.00 по предварительной записи </p>
            <p class="text" >УНП: 193041386, Свидетельство о государственной регистрации № 193041386 от 23.02.2018 выдано Минским горисполкомом</p>
          
            
            <p class="text" >220040, Республика Беларусь, г. Минск ул. Некрасова 35к1 — 2н</p>
            <p class="text" >Р/с BY59 ALFA 3015 2572 8500 1027 0000</p>
            <p class="text">
              В ЗАО "Альфа-банк" ALFABY2X
            </p>
          </b-col>
        </b-row>
<!-- 
        <b-row>
          <img class="mb-2 mt-4 mx-2" src="../assets/visa_big_footer.png" alt="">
          <img class="mb-2 mt-4 mx-2" src="../assets/visa_footer.png" alt="">
          <img class="mb-2 mt-4 mx-2" src="../assets/mastercard_footer.png" alt="">
          <img class="mb-2 mt-4 mx-2" src="../assets/mastercard_id_footer.png" alt="">
        </b-row>

        <b-row>
          <img class="mb-2 mt-4 mx-2" src="../assets/belkard_big_footer.png" alt="">
          <img class="mb-2 mt-4 mx-2" src="../assets/belkard_internet_footer.png" alt="">
          <img class="mb-2 mt-4 mx-2" src="../assets/alfa_bank_logo.png" alt="">
        </b-row> -->
      </b-col>

      <b-col lg="3" sm="12" class="text footer-show">
        <b-navbar-nav vertical>
          <b-nav-item class="clr-white mb-4" href="/#gifts">Подарочные сертификаты</b-nav-item>
          <b-nav-item class="clr-white mb-4" href="/donate">Поддержать проект</b-nav-item>
          <b-nav-item class="clr-white mb-4" href="./oferta_Avrora_Grand.pdf">Публичная оферта</b-nav-item>
        </b-navbar-nav>
      </b-col>

      <b-col lg="2" sm="12" class="text footer-show">
        <b-navbar-nav vertical>
          <b-nav-item class="clr-white mb-4" href="/catalog">Мероприятия</b-nav-item>
          <b-nav-item class="clr-white mb-4" href="/#features">О компании</b-nav-item>
          <b-nav-item class="clr-white mb-4" href="/#reviews">Отзывы</b-nav-item>
        </b-navbar-nav>
      </b-col>

      <b-col lg="2" sm="12">
        <!--  class="footer-show" -->
        <b-row align-h="center" class="footer-show">
          <img class="max-widh-80" src="../assets/logo.png" alt="Logo">
        </b-row>
        <b-row class="mx-3">
          <b-link href="https://www.instagram.com/invisible_world.by/?igshid=12q04dzbhd53v">
            <img class="mb-2 mt-4" src="../assets/instagram.svg" alt="Instagram">
          </b-link>

          <b-link href="https://www.facebook.com/%D0%A6%D0%B5%D0%BD%D1%82%D1%80-%D0%BA%D1%80%D0%B5%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B9-%D0%9D%D0%B5%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D1%8B%D0%B9-%D0%BC%D0%B8%D1%80-110601893629824/">
            <img class="mb-2 mt-4 mx-2" src="../assets/facebook.svg" alt="Facebook">
          </b-link>

          <b-link href="https://vk.com/public201791565">
            <img class="mb-2 mt-4 mx-2" src="../assets/vk.svg" alt="VK">
          </b-link>
        </b-row> -->

        <b-row class="mt-lg-3 mt-sm-1 mb-lg-5 mb-sm-2">
          <b-col>
            <p class="text" v-for="phone in phones" :key="phone.id">{{phone.number}}</p>
          </b-col>
        </b-row>
      </b-col>

      <b-col lg="1" sm="12" class="justify-content-end pointer mb-auto ">
        <b-row align-h="end">
          <b-button href="#start" class="back-transparent">
            <img src="../assets/UP.svg" alt="Вверх" >
          </b-button>
        </b-row>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="h-100">
        <div class="bank_images"></div>
        <!-- <img src="../assets/banks_laptop.png" alt="Банки"> -->
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <p class="text">© Невидимый мир 2021</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Footer",
    data(){
      return{
        phones: []
      }
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
  }
</script>
