<template>
    <b-card
    no-body
    class="back-transparent">
      <b-row>
        <b-col lg="3">
          <img class="max-widh-80" src="../../assets/review_person.png" alt="icon">
        </b-col>
        <b-col lg="9">
          <b-row class="ml-3">
<!--            <img src="../../assets/instagram.svg" alt="icon">-->
            <p class="font-24-bold clr-white ml-1 mb-0">{{review.author}}</p>
          </b-row>
<!--          <b-row class="mt-3 ml-2">-->
<!--            <img src="../../assets/star.svg" alt="star" v-for="i in 5">-->
<!--          </b-row>-->
          <b-row class="ml-3 mt-2">
            <p class="text-small">{{new Date(review.date).toLocaleDateString('ru')}}</p>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="m-1">
        <p class="text-small max-height-220">
          {{review.text}}
        </p>
      </b-row>
    </b-card>
</template>

<script>
    export default {
        name: "reviewCard",
      props: {
          review: Object
      }
    }
</script>

