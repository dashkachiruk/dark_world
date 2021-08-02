<template>
  <b-container fluid class="p-0">

    <landing-sale></landing-sale> 

    <b-container class="my-5">
      <b-row>
        <b-breadcrumb>
          <b-breadcrumb-item href="#catalog" active>
            Каталог
          </b-breadcrumb-item>
        </b-breadcrumb>
      </b-row>
      <b-row class="mb-5">
        <b-col>
          <p class="title-font">Каталог мероприятий</p>
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col lg="4">
          <b-col>
            <catalog-search @filterCatalog="filterCatalog">
          </catalog-search>
          </b-col>
        </b-col>

        <b-col lg="8">
          <b-row v-if="eventsShow.length > 0">
            <b-col lg="6" v-for="eventD in eventsShow" :key="eventD.id" class="mb-4">
              <event-card :event-data="eventD">
              </event-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
  import catalogSearch from "./catalogSearch";
  import EventCard from "../LandingPage/EventCard";
  import axios from "axios";
  import landingSale from "../LandingPage/landingSale";

  export default {
    name: "Catalog",
    components: {
      EventCard,
      catalogSearch,
      landingSale
    },
    data() {
      return {
        eventsList: [],
        eventsShow: []
      }
    },
    created() {
      this.eventsList = this.$store.state.events;
      this.eventsShow = this.$store.state.events;
      // let cont = this;
      // axios.get(this.$store.state.basePath + "events").then(r => {
      //   // console.log('events', r.data);
      //   cont.eventsList = r.data.events;
      //   cont.eventsShow = r.data.events;
      // })
      //   .catch(e => {
      //     // console.log(e)
      //   });
    },
    methods: {
      filterCatalog() {
        if (this.$route.query) {
          let cont = this;
          let mySet = new Set();
          let propsArr = [];

          for (let prop in cont.$route.query) {
            console.log(prop, '=', cont.$route.query[prop]);
            if (prop !== 'search') {
              propsArr.push(prop);
              cont.eventsList.forEach(ev => {
                // console.log('for event', ev, 'prop', prop, '=', ev[prop]);
                ev[prop] == 1 ? mySet.add(ev) : console.log('no');
              })
            }

          }

          if (propsArr.length == 0) {
            cont.eventsList.forEach(ev => {
              mySet.add(ev)
            })
          }

          function filterFunc(item) {
            if (cont.$route.query.search) {
              return item.name.toLowerCase().includes(cont.$route.query.search.toLowerCase())
            } else
              return true
          }

          let filteredBySearch = this.eventsList.filter(filterFunc);
          // console.log('by search', filteredBySearch);
          // console.log('by props', mySet);

          var setB = new Set(filteredBySearch);
          var intersection = new Set([...mySet].filter(x => setB.has(x)));
          this.eventsShow = Array.from(intersection);
        } else {
          this.eventsShow = this.eventsList;
        }
      }
    }
  }
</script>
