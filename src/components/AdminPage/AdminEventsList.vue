<template>
  <b-container>
    <b-row class="my-4">
      <b-col lg="3">
        <b-form-input class="w-100" style="background: transparent; border: 2px solid #48DBD2"
                      v-model="searchEvent">
        </b-form-input>
      </b-col>
      <b-col lg="6">
        <b-button class="card-btn">
          Активные
        </b-button>

        <b-button class="card-btn">
          Черновики
        </b-button>

        <b-button class="card-btn">
          Архив
        </b-button>
      </b-col>
      <b-col lg="3">
        <b-row align-h="end">
          <b-button class="btn-main" @click="onCreateNewEvent">
            Создать мероприятие
          </b-button>
        </b-row>
      </b-col>
    </b-row>


    <b-row>
      <b-col class="p-3" lg="4" v-for="i in 9" :key="i">
        <b-form-row>
          <b-button style="background: none; border: none; position: absolute; right: 0; top: 46px; z-index: 20;"
                    @click="onEditEvent(1)">
            <img style="" src="../../assets/edit_event_flag.svg" alt="edit">
          </b-button>

          <event-card disabled-card="true">
          </event-card>
        </b-form-row>

      </b-col>
    </b-row>

    <router-view>
    </router-view>
  </b-container>
</template>

<script>
  import EventCard from "../LandingPage/EventCard";

  export default {
    name: "AdminEventsList",
    components: {
      EventCard
    },
    data() {
      return {
        searchEvent: ''
      }
    },
    methods: {
      onEditEvent(eventId) {
        this.$router.push({name: 'EditEvent', params: {eventId: eventId}})
      },
      onCreateNewEvent() {
        this.$router.push({name: 'NewEvent'})
      }
    }
  }
</script>
