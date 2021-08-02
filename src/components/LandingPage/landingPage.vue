<template>
  <b-container fluid class="p-0">
    <router-view>
    </router-view>

    <landing-main-group >
    </landing-main-group>

    <landing-events id="events">
    </landing-events>
<!-- 
    <landing-sale>
    </landing-sale> -->

    <div class="img-features-back">
      <landing-features id="features">
      </landing-features>
    </div>

    <landing-gifts id="gifts">
    </landing-gifts>

    <landing-reviews id="reviews">
    </landing-reviews>

    <landing-donating>
    </landing-donating>

    <landing-team>
    </landing-team>

    <landing-place id="place">
    </landing-place>

  </b-container>
</template>

<script>
  import landingMainGroup from "./landingMainGroup";
  import landingEvents from "./landingEvents";
  import landingFeatures from "./landingFeatures";
  import landingGifts from "./landingGifts";
  import landingReviews from "./landingReviews";
  import landingDonating from "./landingDonating";
  import landingTeam from "./landingTeam";
  import landingPlace from "./landingPlace";
  import landingSale from "./landingSale";

  export default {
    name: "landingPage",
    components: {
      landingMainGroup,
      landingEvents,
      landingFeatures,
      landingGifts,
      landingReviews,
      landingDonating,
      landingTeam,
      landingPlace,
      landingSale
    },
  }
</script>
