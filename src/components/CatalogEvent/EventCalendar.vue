<template>
  <b-container fluid="" class="my-5 back-light-violet">
    <b-container class="py-3">


           <b-row class="mb-4" v-if="$route.params.eventId == 12">
             <b-col md="auto" lg="6" sm="12">

               <b-calendar block
                           start-weekday="1"
                           v-model="value"
                           @context="onContext"
                           locale="ru-RU">
              </b-calendar>

             </b-col>

             <b-col lg="6" sm="12">
               <b-col>
                 <b-row class="mb-4">
                 <p class="font-32-bold clr-dark-purple">
                                 <!-- {{ day.day }} -->
                   <!-- Выберите время -->
                   Ближайшее мероприятие
                 </p>
               </b-row>

               <b-row v-for="event in day.events" :key="event.name" class="mb-1">
                 <b-col> 
                   <b-row>
                                    <!-- <img src="../../assets/user.svg" alt="clock" class="ml-2 mr-1"> -->
                     <p class="m-0 clr-white plase-text">{{ event.time }}</p>
                     
                     <p class="clr-dark-purple plase-text ml-3">{{ event.date }}</p>
                   </b-row>
                 </b-col>
                 <!-- <b-col lg="4">
                   <b-button block >
                     <p class="pb-0 mb-0 clr-dark-purple" >
                       Забронировать
                     </p>

                   </b-button>
                 </b-col> -->
               </b-row>

               </b-col>
               
            </b-col>
     </b-row>


      <b-row class="mb-4">
        <b-col>
          <b-row>
          <b-col>
            <p class="plase-text clr-dark-purple">Для брони мероприятия позвоните, пожалуйста, нашему менеджеру</p>
            <p class="plase-text clr-dark-purple" v-for="phone in phones" :key="phone.id">{{ phone.number}}</p>
          </b-col>
        </b-row>
        </b-col>
        
      </b-row>

      <b-row align-h="center" class="mt-lg-4 mt-md-3 mt-sm-1">
          <b-col lg="3" md="4" sm="12">
            <b-button block class="light-btn" @click="onGoBank">
              <p class="p-1 m-1 clr-dark-purple">
                Информация об оплате
              </p>
            </b-button>
          </b-col>
        </b-row>
<!--      <b-row class="mb-4">-->
<!--&lt;!&ndash;        <b-button class="light-btn">&ndash;&gt;-->
<!--&lt;!&ndash;          <p class="pb-0 mb-0 font-32-bold clr-dark-purple">&ndash;&gt;-->
<!--&lt;!&ndash;            Заказать звонок&ndash;&gt;-->
<!--&lt;!&ndash;          </p>&ndash;&gt;-->
<!--&lt;!&ndash;        </b-button>&ndash;&gt;-->
<!--      </b-row>-->

      <!--      <b-row class="mb-4">-->
      <!--        <b-col md="auto" lg="6">-->

      <!--          <b-calendar block-->
      <!--                      start-weekday="1"-->
      <!--                      v-model="value"-->
      <!--                      @context="onContext"-->
      <!--                      locale="ru-RU">-->
      <!--          </b-calendar>-->

      <!--        </b-col>-->

      <!--        <b-col lg="6">-->
      <!--          <b-row class="mb-4">-->
      <!--            <p class="font-32-bold clr-dark-purple">-->
      <!--              &lt;!&ndash;              {{ day.day }}&ndash;&gt;-->
      <!--              Выберите время-->
      <!--            </p>-->
      <!--          </b-row>-->

      <!--          <b-row v-for="event in day.events" :key="event.name" class="mb-1">-->
      <!--            &lt;!&ndash;            <b-col lg="4">&ndash;&gt;-->
      <!--            &lt;!&ndash;              <b-row>&ndash;&gt;-->
      <!--            &lt;!&ndash;                <p class="m-0 clr-white font-32-normal">{{ event.name }}</p>&ndash;&gt;-->
      <!--            &lt;!&ndash;              </b-row>&ndash;&gt;-->
      <!--            &lt;!&ndash;            </b-col>&ndash;&gt;-->
      <!--            <b-col lg="4">-->
      <!--              <b-row>-->
      <!--                &lt;!&ndash;                <img src="../../assets/user.svg" alt="clock" class="ml-2 mr-1">&ndash;&gt;-->
      <!--                <p class="m-0 clr-white font-24-bold">{{ event.time }}</p>-->
      <!--              </b-row>-->
      <!--            </b-col>-->
      <!--            <b-col lg="4">-->
      <!--              <b-button block class="light-btn">-->
      <!--                <p class="pb-0 mb-0 clr-dark-purple">-->
      <!--                  Забронировать-->
      <!--                </p>-->

      <!--              </b-button>-->
      <!--            </b-col>-->
      <!--          </b-row>-->
      <!--        </b-col>-->
      <!--      </b-row>-->
    </b-container>
  </b-container>
</template>

<script>
  export default {
    name: "EventCalendar",
    data() {
      return {
        value: '2021-07-08',
        context: null,
        day: {
          day: '2021-04-01',
          events: [
            {
              name: 1,
              time: '19.00 - 20.00',
              date: '8 июля 2021'
            }
          ]
        },
        phones:[]
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      },
      onGoBank(){
        this.$router.push({name: 'bank'});
      }
    },
    created() {
      this.phones = this.$store.state.phones;
    }
  }
</script>

