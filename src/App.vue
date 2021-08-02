<template>
  <div id="app" class="full-back">

    <div v-if="this.$router.currentRoute.name === 'landingPage'" class="main-picture-shadow">
    </div>
    <div v-if="this.$router.currentRoute.name === 'landingPage'" class="main-picture">
    </div>
    <Header/>

    <router-view>
    </router-view>

    <Footer/>
  </div>
</template>

<script>
  // import axios from 'axios'
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import styles from "./css/custom.module.css"

  export default {
    name: 'app',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        // languages: [],
      }
    },
    created() {
      // axios.get("/api/languages").then(r => {
      //   this.languages = r.data.languages
      // })
    }
  }
</script>

