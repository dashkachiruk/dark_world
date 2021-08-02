<template>
  <notification-form text="Перейдите в календарь, чтобы отметить дни проведения!" title="Публикация"
                     btn-text="В календарь" route-path="/admin_page/calendar"
                     sub-title="Вы успешно опубликовали мероприятие на сайт.">
  </notification-form>

</template>

<script>
  import NotificationForm from "../NotificationForm";

  export default {
    name: "AddEventNote",
    components: {
      NotificationForm
    }
  }
</script>

