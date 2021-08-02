<template>
  <div class="modal-background">
    <b-card class="w-50 back-dark-violet">
      <b-form class="mx-2">
        <b-link>
          <img class="close-pos" src="../../../assets/close.svg" alt="Close"
               @click.prevent="onCloseForm">
        </b-link>
        <b-row>
          <b-col>
            <p class="font-32-bold clr-white">Создание мероприятия</p>
          </b-col>
        </b-row>

        <b-form-row class="mb-3">
          <b-col>
            <b-form-input class="mt-3 contacts-input wrapper-input"
                          id="input-name" size="sm" type="text" v-model="event.name"
                          placeholder="Введите название мероприятия" required>
            </b-form-input>
            <label for="input-name" class="px-1 input-label">
              Название мероприятия
            </label>
          </b-col>
        </b-form-row>

        <b-form-row class="mb-3">
          <b-col>
          <b-form-textarea rows="6" max-rows="10"
                           class="mt-3 contacts-input wrapper-input" id="input-description" size="sm" type="text"
                           v-model="event.description"
                           placeholder="Введите описание мероприятия..." required>
          </b-form-textarea>
          <label for="input-description" class="px-1 input-label">
            Описание мероприятия
          </label>
        </b-col>
        </b-form-row>

        <b-form-row class="mx-1">
          <b-form-group label="Категории" class="label-clr">
            <!-- prop `add-on-change` is needed to enable adding tags vie the `change` event -->
            <b-form-tags v-model="value" size="lg" add-on-change no-outer-focus class="mb-2 back-transparent">
              <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2 label-clr">
                  <li v-for="tag in tags" :key="tag" class="list-inline-item label-clr">
                    <b-form-tag
                      @remove="removeTag(tag)"
                      :title="tag"
                      :disabled="disabled"
                      variant="info"
                    >{{ tag }}</b-form-tag>
                  </li>
                </ul>
                <b-form-select
                  class="contacts-input w-100 back-transparent"
                  v-bind="inputAttrs"
                  v-on="inputHandlers"
                  :disabled="disabled || availableOptions.length === 0"
                  :options="availableOptions"
                >
                  <template #first>
                    <!-- This is required to prevent bugs with Safari -->
                    <option disabled value="">Выберите несколько...</option>
                  </template>
                </b-form-select>
              </template>
            </b-form-tags>
          </b-form-group>
        </b-form-row>

        <b-form-row>
          <b-col lg="4">
            <b-form-select 
                           class="w-75 mt-3 contacts-input wrapper-input" id="input-length" size="sm"
                           v-model="event.length"
                           :options="lengthOptions" required>
            </b-form-select>
            <label for="input-length" class="px-1 input-label">
              Продолжительность (мин)
            </label>
          </b-col>

          <b-col lg="4">
            <b-form-select
                           class="w-75 mt-3 contacts-input wrapper-input" id="input-length" size="sm"
                           v-model="event.people_amount"
                           :options="amountOptions" required>
            </b-form-select>
            <label for="input-length" class="px-1 input-label">
              Количество людей
            </label>
          </b-col>

          <b-col lg="4">
            <b-form-input 
                           class="w-75 mt-3 contacts-input wrapper-input" id="input-length" size="sm"
                           v-model="event.cost"
                           required>
            </b-form-input>
            <label for="input-length" class="px-1 input-label">
              Стоимость (BYN)
            </label>
          </b-col>
        </b-form-row>

        <b-row class="my-3">
          <b-col >
            <b-col>
              <label class="px-1 input-label">
                Изображение
              </label>
            </b-col>
            <b-row align-h="center">
              <b-button class="px-5 btn-main mt-4">
                Добавить фото
              </b-button>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="justify-content-end">
          <b-col lg="6">

            <b-button class="back-transparent">
             <p class="font-20-bold clr-blue pb-0 mb-0">Cохранить в черновик</p>

            </b-button>
            <b-button class="btn-main" @click.prevent="onPublishEvent" type="submit">
              Опубликовать
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
    <router-view>
    </router-view>
  </div>

</template>

<script>
  export default {
    name: "CreateEventForm",
    data() {
      return {
        event: {
          name: '',
          description: '',
          categorys: [],
          length: 30,
          people_amount: 2,
          cost: 0,
          image_path: '',
        },
        options: ['Для взрослых', 'Для детей', 'Корпоративные', 'Семейные', 'Для пары'],
        value: [],
        lengthOptions: [30,60,90,120],
        amountOptions: [2,4,6,8,10,12,15]

      }
    },
    methods: {
      onCloseForm() {
        this.$router.go(-1);
      },
      onPublishEvent(){
        // this.onCloseForm();
        this.$router.push({name: 'addEventNote'});
      }
    },
    computed: {
      availableOptions() {
        return this.options.filter(opt => this.value.indexOf(opt) === -1)
      }
    },
    watch: {
      $route(to, from) {
        if(from.name == 'addEventNote'){
          this.$router.go(-1);
        }

      }
    },
  }
</script>
