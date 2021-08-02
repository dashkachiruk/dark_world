<template>
  <div class="modal-background">
    <b-card class="w-30 back-dark-violet">
      <b-form class="mx-2">
        <b-link>
          <img class="close-pos" src="../../../assets/close.svg" alt="Close"
               @click.prevent="onCloseForm">
        </b-link>

        <b-row>
          <b-col>
            <p class="font-32-bold clr-white">Информация о мероприятии</p>
          </b-col>
          <b-col>
            <p class="clr-blue font-20-bold mx-3">Отменить</p>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="6">
            <b-row>
              <b-col>
                <p>Мероприятие:</p>
              </b-col>
              <b-col>
                <p>{{event.name}}</p>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <p>Общее кол-во:</p>
              </b-col>
              <b-col>
                <p>{{event.people_amount}}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p>Дата:</p>
              </b-col>
              <b-col>
                <p>{{event.date}}</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6">
            <b-row>
              <b-col>
                <p>Стоимость:</p>
              </b-col>
              <b-col>
                <p>{{event.cost}} BYN</p>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <p>Забронировано:</p>
              </b-col>
              <b-col>
                <p>{{event.booked_amount}}</p>
              </b-col>
            </b-row>

            <b-row>
              <b-col>
                <p>Время:</p>
              </b-col>
              <b-col>
                <p>{{event.time}}</p>
              </b-col>
            </b-row>

          </b-col>
        </b-row>

        <b-row>
          <p>Список забронировавших</p>
          <p>Добавить бронь</p>
        </b-row>
        <b-row>
          <b-list-group>
            <b-list-group-item v-for="member in event.members" :key="member.id">

              <b-row>
                <b-col lg="4">
                  {{member.name}}
                </b-col>

                <b-col lg="4">
                  {{member.email}}
                </b-col>

                <b-col lg="4">
                  {{member.phone}}
                </b-col>
              </b-row>
            </b-list-group-item>

          </b-list-group>
        </b-row>
      </b-form>
    </b-card>
  </div>

</template>

<script>
    export default {
        name: "EventInfoForm",
      data(){
          return{
            event: {
              name: 'event',
              date: '01.01.0101',
              time: '10.00',
              people_amount: 12,
              booked_amount:2,
              cost: 12,
              members: [
                {name: 'Ivan ivan', email: 'trololo@gmail.com', phone:'+375298253344'},
                {name: 'Ivan aaaa', email: 'traaaaaaaaalo@gmail.com', phone:'+375208253344'},
              ]
            }
          }
      },
      methods: {
          onCloseForm(){
            this.$router.go(-1)
          }
      }
    }
</script>
