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
    </b-row>

    <b-row class="mt-3">
      <b-col lg="8">
        <b-row align-v="end">
          <p class="clr-white font-20-normal mb-0 pb-0">
            Выбрано отзывов
          </p>
          <p class="clr-white font-32-bold mb-0 pb-0 ml-2">
            {{reviewsSelected.length}}/9
          </p>

          <b-button class="mx-5 my-0 py-0 " style="background: transparent !important; border: none" @click="onFreeSelectedList">
            <p class="clr-blue pb-0 mb-0 font-24-bold">Сбросить всё</p>
          </b-button>

        </b-row>

      </b-col>

      <b-col lg="4">
        <b-row align-h="end">
          <b-button class="btn-main" @click="onSaveReviewsList">
            Сохранить
          </b-button>
        </b-row>
      </b-col>
    </b-row>


    <b-row class="mt-5">
      <b-col lg="4" v-for="i in 12" :key="i">
        <b-form-checkbox size="lg" >
          <review-card class="my-4">
          </review-card>
        </b-form-checkbox>
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
    name: "AdminEditReviews",
    components: {
      reviewCard
    },
    data() {
      return {
        rows: 100,
        perPage: 10,
        currentPage: 1,
        reviewsSelected: [1],
        reviewsList: [

        ]
      }
    },
    methods: {
      onFreeSelectedList(){
        this.reviewsSelected = [];
        // request
      },
      onSaveReviewsList(){
        // request
        this.$router.push({name: 'adminReviews'})
      }
    }
  }
</script>

