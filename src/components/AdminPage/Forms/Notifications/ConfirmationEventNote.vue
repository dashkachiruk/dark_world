<template>
  <notification-form text="После помещения в архив вы больше не сможете публиковать их на сайте!" title="Подтверждение"
                     btn-text="В календарь" route-path="/admin_page/calendar"
                     sub-title="Вы действительно хотите убрать мероприятие в архив?">
  </notification-form>
</template>

<script>
  import NotificationForm from "../NotificationForm";

  export default {
    name: "ConfirmationEventNote",
    components: {
      NotificationForm
    }
  }
</script>


