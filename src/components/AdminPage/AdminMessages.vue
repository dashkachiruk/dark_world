<template>
  <b-container class="mt-5">
    <b-row class="mb-5">
      <b-tabs pills card justified class="w-100" content-class="mt-3">
        <b-tab>
          <template v-slot:title>
            Все
          </template>
          <messages-table>
          </messages-table>

        </b-tab>

        <b-tab>
          <template v-slot:title>
            Донаты
          </template>
        </b-tab>

        <b-tab>
          <template v-slot:title>
            Вопросы
          </template>
        </b-tab>

        <b-tab>
          <template v-slot:title>
            Записи на бронь
          </template>
        </b-tab>

        <b-tab>
          <template v-slot:title>
            Обработанные
          </template>
        </b-tab>
      </b-tabs>
    </b-row>
  </b-container>

</template>

<script>
  import MessagesTable from "./messagesTable/MessagesTable";
    export default {
        name: "AdminMessages",
      components: {
        MessagesTable
      },
      data(){
          return{

          }
      },
    }
</script>

