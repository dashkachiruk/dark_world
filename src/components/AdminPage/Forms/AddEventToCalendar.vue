<template>
  <div class="modal-background">
    <b-card class="w-30 back-dark-violet">
      <b-form class="mx-2">
        <b-link>
          <img style="position: absolute; right: 8px; top: 8px" src="../../../assets/close.svg" alt="Close"
               @click.prevent="onCloseForm">
        </b-link>
        <b-row>
          <b-col>
            <p class="font-32-bold clr-white">Добавление мероприятия</p>
          </b-col>
        </b-row>

        <b-form-row class="mb-3">
          <b-col>
            <b-form-select :options="eventsArr"
                          class="mt-3 contacts-input wrapper-input" id="input-name" size="sm" type="text" v-model="event.name"
                          required>
            </b-form-select>
            <label for="input-name" class="px-1 input-label">
              Выберите мероприятие
            </label>
          </b-col>
        </b-form-row>

        <b-form-row class="mb-3">
          <b-col>
            <b-form-input class="mt-3 contacts-input wrapper-input"
                           id="input-date" size="sm" type="date" v-model="event.date" required>
            </b-form-input>
            <label for="input-date" class="px-1 input-label">
              В какое время?
            </label>
          </b-col>

          <b-col>
            <b-form-select class="mt-3 contacts-input wrapper-input"
                           id="input-time" size="sm" type="text" v-model="event.time"
                           :options="timesArr" required>
            </b-form-select>
            <label for="input-time" class="px-1 input-label">
              В какое время?
            </label>
          </b-col>
        </b-form-row>


        <b-row class="justify-content-end">
          <b-col lg="5">
            <b-button class="w-100 btn-main" @click.prevent="onAddEvent" type="submit">
              <!--              {{ $t('projects.createProject') }}-->
             Добавить
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "AddEventToCalendar",
    data() {
      return {
        event: {
          name: '',
          date: '',
          time: ''
        },
        eventsArr: ['event1', 'event2'],
        timesArr: ['10.00', '11.00', '12.00']

      }
    },
    methods: {
      onCloseForm() {
        this.$router.go(-1);
      },
      onAddEvent(){
        console.log('event to add', this.event);
        this.$router.go(-1);
      }
    }
  }
</script>
