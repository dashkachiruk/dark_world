<template>
    <b-container class="mt-5">
      <b-row class="mb-lg-5">
        <b-col>
          <p class="title-font">Ощути мир по-другому! </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="4" v-for="event in eventsShow" :key="event.id">
          <event-card :disabled-card="false" :eventData="event">
          </event-card>
        </b-col>
      </b-row>
      <b-row class="mt-5 justify-content-center">
        <b-col sm="12" lg="3" md="5">
          <b-button class="btn-main w-100" @click="goToCatalog">
            <p class="p-1 m-1">
              Открыть каталог
            </p>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
  import EventCard from "./EventCard";
  import axios from "axios";
    export default {
        name: "landingEvents",
      components: {
          EventCard
      },
      data(){
          return{
            events: []
          }
      },
      methods:{
        goToCatalog(){
          this.$router.push({name: 'catalog'})
        }
      },
      created() {
          this.events = this.$store.state.events;
        // let cont = this;
        // axios.get(this.$store.state.basePath + "events").then(r => {
        //   console.log('events', r.data);
        //    cont.events = r.data.events;
        // })
        //   .catch(e => {
        //     console.log(e)
        //   });
      },
      computed: {
          eventsShow(){
            return this.events.filter(eventData => {
              return [12,11,4].includes(eventData.id);
            })
            
          }
      }
    }
</script>
