<template>
  <b-container class="mt-5" v-if="reviews.length > 0">
    <b-row class="mb-5">
      <b-col>
        <p class="title-font">О нас говорят...</p>
      </b-col>
    </b-row>
    <b-row align-h="center" class="w-100">
      <b-container fluid>
        <carousel :autoplay="false" :nav="false" :loop="true"
                  :responsive="{0:{items:1},992:{items:2}}">
          <b-col v-for="review in reviews" :key="review.id">
            <review-card :review="review">
            </review-card>
          </b-col>
        </carousel>
      </b-container>
    </b-row>

<!--    <b-row class="mt-5 justify-content-center">-->
<!--      <b-button class="btn-main" @click="onCreateReview">-->
<!--        <p class="p-1 m-1">-->
<!--          Оставить отзыв-->
<!--        </p>-->
<!--      </b-button>-->
<!--    </b-row>-->
  </b-container>
</template>

<script>
  import carousel from 'vue-owl-carousel'
  import reviewCard from "./reviewCard";
  import axios from "axios";
    export default {
        name: "landingReviews",
      components: {
          reviewCard,
        carousel
      },
      data(){
          return{
            reviews: []
          }
      },
      methods: {
        // onCreateReview(){
        //   this.$router.push({name: 'reviewForm'})
        // }
      },
      created() {
          this.reviews = this.$store.state.reviews;
        // let cont = this;
        // axios.get(this.$store.state.basePath + "reviews").then(r => {
        //   console.log('reviews', r.data);
        //   cont.reviews = r.data.reviews;
        // })
        //   .catch(e => {
        //     console.log(e)
        //   });
      },
    }
</script>

