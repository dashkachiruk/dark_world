<template>
  <b-container class="py-3">
    <b-col>
      <b-row class="mb-4">
      <b-col>
        <p class="title clr-white">
        Не нашли подходящее?
      </p>
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col lg="4" v-for="event in choosenEvents" :key="event.id" class="mb-4">
        <event-card :disabled-card="false" :event-data="event">
        </event-card>
      </b-col>
    </b-row>
    </b-col>
    
  </b-container>

</template>

<script>
  import EventCard from "../LandingPage/EventCard";
    export default {
        name: "EventOther",
      components: {
          EventCard
      },
      data(){
          return{
            events: []
          }
      },
      watch: {
        $route(from, to){
          if (from.path != to.path){
            this.events = this.$store.getters.findThreeEvt;
            console.log('aa')
          }
        }
      },
      created() {
          this.events = this.$store.getters.findThreeEvt;
      },
      computed: {
          choosenEvents(){
            return this.events;
          }
      }
    }
</script>

