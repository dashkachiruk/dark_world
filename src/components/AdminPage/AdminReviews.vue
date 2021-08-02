<template>
  <b-container class="mt-5">
    <b-row>
      <b-col lg="8">
        <b-row>
          <b-button class="tag-btn">
            Любой
          </b-button>

          <b-button class="tag-btn mx-2">
            <img v-for="i in 5" :key="i" src="../../assets/violet_star.svg" alt="star">
          </b-button>

          <b-button class="tag-btn mx-2">
            <img v-for="i in 4" :key="i" src="../../assets/violet_star.svg" alt="star">
          </b-button>

          <b-button class="tag-btn mx-2">
            <img v-for="i in 3" :key="i" src="../../assets/violet_star.svg" alt="star">
          </b-button>

          <b-button class="tag-btn mx-2">
            <img v-for="i in 2" :key="i" src="../../assets/violet_star.svg" alt="star">
          </b-button>

          <b-button class="tag-btn mx-2">
            <img src="../../assets/violet_star.svg" alt="star">
          </b-button>

        </b-row>
      </b-col>

      <b-col lg="4">
        <b-row align-h="end">
          <b-button class="btn-main" @click="onEditReviews">
            Добавление на сайт
          </b-button>
        </b-row>
      </b-col>

    </b-row>


    <b-row class="mt-5">
      <b-col lg="4" v-for="i in 12" :key="i">
        <review-card class="my-4">
        </review-card>
      </b-col>
    </b-row>

    <b-row>
      <b-pagination class="" style="background: transparent !important; color: #48DBD2; "
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage">
      </b-pagination>
    </b-row>
  </b-container>
</template>

<script>
  import reviewCard from "../LandingPage/reviewCard";
    export default {
        name: "AdminReviews",
      components: {
          reviewCard
      },
      data(){
          return{
            rows: 100,
            perPage: 10,
            currentPage: 1
          }
      },
      methods: {
          onEditReviews(){
            this.$router.push({name: 'adminReviewsEdit'});
          }
      }
    }
</script>
