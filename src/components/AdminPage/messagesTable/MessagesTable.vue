<template>
  <div>
    <b-table striped hover :items="items" :fields="fields">
    </b-table>
  </div>

</template>

<script>
    export default {
        name: "MessagesTable",
      data(){
          return{
            // Note `isActive` is left out and will not appear in the rendered table
            fields: [
              {key: 'fio', label: 'ФИО'},
              {key: 'phone', label: 'телефон'},
              {key: 'processed', label: 'обработан'},
              {key: 'info_call', label: 'вопрос'},
              {key: 'calendar_event_id', label: 'запись на мероприятие'},
              {key: 'donate_call', label: 'донат'}
              ],
            items: [
              {fio: 'bla bla', phone: '+375337889988', processed: false, info_call: false, calendar_event_id: 2, donate_call: false},

            ]
          }
      }
    }
</script>
