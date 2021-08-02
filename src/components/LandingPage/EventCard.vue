<template>
  <b-card
    @click="onGoToEvent"
    class="p-0 m-0 no-gutters pointer event-card-back">
    <b-row class="pt-0 mt-0">
      <img :src="eventPhotoSrc" alt="Image" class="w-100 mx-3 event-card-photo">
    </b-row>

    <b-row class="mt-1 px-3">
      <b-card class="event-card-content" no-body>
        <b-container class="mx-3">
          <b-row class="mt-2">
            <b-card-title class="font-24-bold clr-blue pb-0 mb-1 mr-3">{{eventData.name}}</b-card-title>
          </b-row>
          <b-row class="mr-2">
            <b-card-text class="clr-white font-16-normal">
             {{ eventData.description }}
            </b-card-text>
          </b-row>

          <b-row class="justify-content-start mt-1 mr-2">
            <b-button size="sm" disabled class="m-1 card-btn" v-if="eventData.adults === 1">
              Для взрослых
            </b-button>

            <b-button size="sm" disabled class="m-1 card-btn" v-if="eventData.family === 1">
              Семейный
            </b-button>
            <b-button size="sm" disabled class="m-1 card-btn" v-if="eventData.children === 1">
              Для детей
            </b-button>
            <b-button size="sm" disabled class="m-1 card-btn" v-if="eventData.corporate === 1">
              Корпоративный
            </b-button>
            <b-button size="sm" disabled class="m-1 card-btn" v-if="eventData.couple === 1">
              Для пары
            </b-button>
          </b-row>

          <b-row class="my-2 ">
            <b-col lg="8">
              <b-row>
                <img src="../../assets/time.svg" alt="clock" class="mr-1">
                <p class="m-0 clr-white font-16-normal">{{eventData.duration}}мин</p>
                <img src="../../assets/user.svg" alt="clock" class="ml-2 mr-1">
                <p class="m-0 clr-white font-16-normal">{{eventData.people_amount}}чел</p>
              </b-row>
            </b-col>

            <b-col lg="4">
              <b-row>
                <p class="m-0 clr-white font-16-normal"><s>{{eventData.cost}}p</s></p>
              <p class="m-0 ml-1 clr-white font-16-normal">{{eventData.costReal || 25}}p</p>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </b-row>
  </b-card>
</template>

<script>
  export default {
    name: "EventCard",
    props: {
      disabledCard: Boolean,
      eventData: Object
    },
    // data(){
    //   return{
    //
    //   }
    // },
    methods: {
      onGoToEvent(){
        if(!this.disabledCard){
          let dataId = this.eventData.id;
          this.$router.push({path: '/catalog/'+ dataId});
        }
      }
    },
    computed: {
      eventPhotoSrc(){
        if(this.eventData.img_path != ''){
          return require("../../assets/event_photos/" + this.eventData.img_path);
        }
        else {
          return require("../../assets/event_photos/card_img.png")
        }
      }
    }
  }
</script>
