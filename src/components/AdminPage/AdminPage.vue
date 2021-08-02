<template>
  <b-container class="my-5">
    <b-row>
      <b-breadcrumb>
        <b-breadcrumb-item href="#admin_panel">
          Панель администатора
        </b-breadcrumb-item>
        <b-breadcrumb-item href="#admin_panel" active>
          <!--          Панель администатора-->
          {{ selectedTab.name}}
        </b-breadcrumb-item>
      </b-breadcrumb>
    </b-row>
    <b-row class="mb-3">
      <p class="title-font">Управление сайтом</p>
    </b-row>
    <b-row class="mb-5">

      <b-tabs pills card justified class="w-100" content-class="mt-3" v-model="tabIndex">
        <router-view></router-view>

        <b-tab @click="changeTab(0)">
          <template v-slot:title>
            Календарь событий
          </template>
        </b-tab>

        <b-tab @click="changeTab(1)">
          <template v-slot:title>
            Список мероприятий
          </template>
        </b-tab>

        <b-tab @click="changeTab(2)">
          <template v-slot:title>
            Управление отзывами
          </template>
        </b-tab>

        <b-tab @click="changeTab(3)">
          <template v-slot:title>
            Управление контактами
          </template>
        </b-tab>

        <b-tab @click="changeTab(4)">
          <template v-slot:title>
            Сообщения
          </template>
        </b-tab>
      </b-tabs>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "AdminPage",
    data() {
      return {
        tabs: [
          {value: 'calendar', name: 'Календарь событий'},
          {value: 'events', name: 'Cписок мероприятий'},
          {value: 'reviews', name: 'Управление отзывами'},
          {value: 'contacts', name: 'Управление контактами'},
          {value: 'messages', name: 'Сообщения'}
        ],
        selectedTab: {
          name: 'Календарь событий',
          value: 'calendar'
        },
        tabIndex: 0
      }
    },
    methods: {
      changeTab(index) {
        this.selectedTab = this.tabs[index];
        this.$router.push({path: '/admin_page/' + this.tabs[index].value});

      }
    }
  }
</script>
