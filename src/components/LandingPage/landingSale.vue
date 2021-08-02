<template>
  <div class="my-5">
    <b-row class="p-0 mx-0 py-5 img-donate-back" >
      <b-col>
        <b-container>
          <b-row align-content="center">
            <b-col>
              <p class="title-font">
                Все лето действуют летние скидки!
              </p>
              <p class="title-font">
                До 31 августа 50% скидка на все!
              </p>
            </b-col>
        </b-row>
        </b-container>
      </b-col>
        
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "landingSale",
    data() {
      return {
        
      }
    },
    methods: {
      onGoCatalog() {
        this.$router.push({name: 'catalog'});
      },
      onShowLink(){
       // alert('link');
      //  window.open("@/dist/oferta_Avrora_Granf.pdf")
      this.$router.push({name: 'bank'})
      }
    },
    created() {
      this.phones = this.$store.state.phones;
    }
  }
</script>
