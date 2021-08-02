<template>
  <b-container>
    <router-view>
    </router-view>

    <b-col>
      <b-row align-h="end">
        <b-button class="btn-main" @click="onAddEvent">
          Добавить мероприятие
        </b-button>
      </b-row>
    </b-col>

  </b-container>

</template>

<script>
    export default {
        name: "AdminCalendar",
      methods: {
          onAddEvent(){
            this.$router.push({name: 'calendarNewEvent'});
          }
      }
    }
</script>
