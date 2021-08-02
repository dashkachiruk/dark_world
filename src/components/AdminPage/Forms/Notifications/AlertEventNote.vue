<template>
  <notification-form text="Перейдите в календарь, чтобы отменить мероприятие в указанную дату!" title="Предупреждение"
                     btn-text="В календарь" route-path="/admin_page/calendar"
                     sub-title="Вы не можете убрать мероприятие в архив.">
  </notification-form>

</template>

<script>
  import NotificationForm from "../NotificationForm";
    export default {
        name: "AlertEventNote",
      components: {
          NotificationForm
      }
    }
</script>
