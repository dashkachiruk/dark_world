<template>
  <div>
    <landing-sale></landing-sale>

    <b-container class="my-5" v-if="eventData != null">
      <b-row>
        <b-breadcrumb>
          <b-breadcrumb-item href="/catalog">
            Каталог
          </b-breadcrumb-item>
          <b-breadcrumb-item href="/catalog" active>
            {{ eventData.name}}
          </b-breadcrumb-item>
        </b-breadcrumb>
      </b-row>
      <b-row>
        <b-col lg="6" v-if="this.eventData.name">
          <img :src="eventPhotoSrc" alt="event" class="mr-1 w-100 event-photo-size">

        </b-col>
        <b-col lg="6">
          <b-row class="mb-4 mx-2">
            <p class="title-font">{{ eventData.name }}</p>
          </b-row>
          <b-row class="mx-2">
            <p class="text-small">
              {{ eventData.description }}
            </p>
          </b-row>
          <b-row class="mx-2">
            <b-col lg="4" md="6" sm="6">
              <b-row>
                <img src="../../assets/time.svg" alt="clock" class="mr-1">
                <p class="m-0 clr-white font-32-normal">{{ eventData.duration }} мин</p>
              </b-row>
            </b-col>
            <b-col lg="8" md="6" sm="6">
              <b-row>
                <img src="../../assets/user.svg" alt="clock" class="ml-2 mr-1">
                <p class="m-0 clr-white font-32-normal">{{ eventData.people_amount }} чел</p>
              </b-row>
            </b-col>

            <b-col lg="12" class="mt-3">
              <p class="m-0 clr-white font-40-bold"><s>{{ eventData.cost }}p</s> {{ eventData.costReal }}p</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <event-calendar>
    </event-calendar>

    <event-other>
    </event-other>

  </div>
</template>

<script>
  import EventCalendar from "./EventCalendar";
  import EventOther from "./EventOther";
  import axios from "axios";
  import landingSale from "../LandingPage/landingSale";

  export default {
    name: "EventPage",
    components: {
      EventCalendar,
      EventOther,
      landingSale
    },
    data() {
      return {
        eventData: this.$store.getters.getEventById(this.$route.params.eventId)
      }
    },
    watch: {
      $route(from, to){
        if (from.path != to.path){
          this.eventData = this.$store.getters.getEventById(parseInt(this.$route.params.eventId));
        }
      }
    },
    created() {
     this.eventData = this.$store.getters.getEventById(parseInt(this.$route.params.eventId));
      // let cont = this;
      // axios.get(this.$store.state.basePath + "events/"+ this.$route.params.eventId).then(r => {
      //    console.log('event', r.data);
      // })
      //   .catch(e => {
      //     console.log(e)
      //   });
    },
    computed: {
      eventPhotoSrc() {
        if (this.eventData.img_path != '') {
          return require("../../assets/event_photos/" + this.eventData.img_path);
        } else {
          return require("../../assets/event_photos/card_img.png")
        }
      }
    },
  }
</script>
