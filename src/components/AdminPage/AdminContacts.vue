<template>
  <b-container class="mt-5">
    <b-row>
      <b-col lg="4">
        <p class="clr-white font-20-normal mb-5">Телефоны</p>

        <p class="clr-white font-24-normal" v-for="phone in phones" :key="phone.id">{{phone.number}}</p>
      </b-col>

      <b-col lg="4">
        <p class="clr-white font-20-normal mb-5">Социальные сети</p>

        <b-row no-gutters v-for="network in networks" :key="network.id">
          <img class="mr-1 clr-white" :src="countPath(network.path)" :alt="network.title + ':'">

          <p class="clr-white font-24-normal" >{{network.name}}</p>
        </b-row>
      </b-col>

      <b-col lg="4">
        <p class="clr-white font-20-normal mb-5">Адрес</p>

        <p class="clr-white font-24-normal">{{address.gmail}}</p>

        <p class="clr-white font-24-normal">{{address.physical}}</p>

      </b-col>
    </b-row>

    <b-row>
      <b-col lg="4">
        <b-button block class="btn-main">Редактировать телефоны</b-button>
      </b-col>
      <b-col lg="4">
        <b-button block class="btn-main">Редактировать соцсети</b-button>
      </b-col>
      <b-col lg="4">
        <b-button block class="btn-main">Редактировать адрес</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    import axios from "axios";

    export default {
      name: "AdminContacts",
      data(){
          return{
            phones: [
              // '+375 29 345-45-23',
              // '+375 44 132-43-12',
              // '+375 25 715-41-59'
            ],
            networks: [
              {id: 1, sign_id: 1, name: '@invisible_world2020', path: 'instagram.svg', title: 'instagram'},
              {id: 2, sign_id: 2, name: 'invisible_world', path: 'telegram.svg', title: 'telegram'},
              {id: 3, sign_id: 3, name: 'invisible_world_twitter', path: 'twitter.svg', title: 'twitter'},
            ],
            address: {
              gmail: 'invisible_world1324@gmail.com',
              physical: 'Минск, ул. Некрасова, 35- 2н'
            }
          }
      },
      methods: {
        countPath(imgPath){
          return '../../'+ imgPath;
        }
      },
      created() {
        let cont = this;
        axios.get(this.$store.state.basePath + "phones").then(r => {
          // console.log('resp', r.data);
          cont.phones = r.data.phones;
        })
          .catch(e => {
            console.log(e)
          });
      },
    }
</script>

