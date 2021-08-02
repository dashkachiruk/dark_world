<template>
  <b-container class="mt-5">
    <b-row class="mb-5">
      <b-col>
        <p class="title-font">Наша команда</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="7">
        <b-row align-h="center">
          <b-col lg="4" sm="12" v-for="i in team" :key="i.name">
            <b-row align-h="center">
              <img
                class="d-block img-fluid w-100 w-250"
                :src="i.img_path"
                alt="фото">
            </b-row>
            <b-row align-h="center">
              <p class="text-small font-24-bold">{{i.name}}</p>
            </b-row>
            <b-row align-h="center">
              <p class="text-small font-18-normal">
                {{i.description}}</p>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="5">
        <img
          class="d-block img-fluid w-100 min-h-260"
          src="../../assets/team.png"
          alt="image">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import giftPicture from "../../assets/gift.png";

  export default {
    name: "landingTeam",
    components: {
      giftPicture
    },
    data() {
      return {
        slide: 0,
        sliding: null,
        team: [
          {
            id: 1,
            name: 'Ольга Полошовец',
            img_path: require('../../assets/Olga.png'),
            description: 'Руководитель проекта'
          },
          {
            id: 2,
            name: 'Елена Ветрова',
            img_path: require('./../../assets/Helena.png'),
            description: 'Координатор проекта'
          },
          {
            id: 3,
            name: 'Светлана Сенько',
            img_path: require('../../assets/Svetlana.png'),
            description: 'Координатор проекта'
          },
        ]
      }
    },
    methods: {
      // onSlideStart(slide) {
      //   this.sliding = true
      // },
      // onSlideEnd(slide) {
      //   this.sliding = false
      // }
    }
  }
</script>
