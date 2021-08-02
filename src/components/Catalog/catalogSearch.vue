<template>
  <b-card no-body class="back-transparent">
    <b-form class="mr-5" @submit.prevent="">
      <b-container class="w-100">
        <b-row>
          <b-row class="w-100">
            <b-form-input v-model="inputSearch" @keypress.enter="filterCatalog"
                          @blur="filterCatalog"
                          placeholder="Поиск..." size="sm">
            </b-form-input>
            <img @click.prevent="filterCatalog"
                 style="position: absolute; right: 66px; top: 4px"
                 src="../../assets/search_violet.svg" alt="Поиск">
          </b-row>
        </b-row>
      </b-container>

      <b-row class="pb-5 mb-5 mt-3">
        <p class="font-16-normal clr-white">
          Поиск по тэгам
        </p>
        <b-row class="m-0">
          <b-button @click.stop="onChangeAdults" size="sm" class="mr-2 mb-2 tag-btn" :class="{active: adults == true}">
            Для взрослых
          </b-button>
          <b-button @click.stop="onChangeChildren" :class="{active: children == true}" size="sm"
                    class="mr-2 mb-2 tag-btn">
            Для детей
          </b-button>
          <b-button @click.prevent="onChangeCorporate" :class="{active: corporate == true}" class="mr-2 mb-2 tag-btn">
            Корпоративные
          </b-button>
          <b-button @click.prevent="onChangeFamily" :class="{active: family == true}" class="mr-2 mb-2 tag-btn">
            Семейные
          </b-button>
          <b-button @click.prevent="onChangeCouple" :class="{active: couple == true}" class="mr-2 mb-2 tag-btn">
            Для пары
          </b-button>
        </b-row>
      </b-row>
      <!--      <b-row class="w-100">-->
      <!--        <b-col lg="6" class="pl-0">-->
      <!--          <b-form-row class="mb-3">-->
      <!--            <b-col>-->
      <!--              <b-form-input class="w-100" id="input-from" size="sm"-->
      <!--                              type="date" required >-->
      <!--              </b-form-input>-->

      <!--              <label for="input-from" class="px-1 input-label">-->
      <!--                c-->
      <!--              </label>-->
      <!--            </b-col>-->
      <!--          </b-form-row>-->
      <!--        </b-col>-->
      <!--        <b-col lg="6" class="pl-0">-->
      <!--          <b-form-row class="mb-3">-->
      <!--            <b-col>-->
      <!--              <b-form-input class="w-100" id="input-to" size="sm"-->
      <!--                            type="date" required>-->
      <!--              </b-form-input>-->

      <!--              <label for="input-to" class="px-1 input-label">-->
      <!--                по-->
      <!--              </label>-->
      <!--            </b-col>-->
      <!--          </b-form-row>-->
      <!--        </b-col>-->
      <!--      </b-row>-->
    </b-form>
  </b-card>
</template>

<script>
  export default {
    name: "catalogSearch",
    data() {
      return {
        inputSearch: '',
        adults: false,
        children: false,
        couple: false,
        family: false,
        corporate: false
      }
    },
    computed: {
      isActiveAdults() {
        return this.adults;
      }
    },
    methods: {
      onChangeAdults() {
        this.adults = !this.adults;
        this.filterCatalog();
      },
      onChangeFamily() {
        this.family = !this.family;
        this.filterCatalog();
      },
      onChangeChildren() {
        this.children = !this.children;
        this.filterCatalog();
      },
      onChangeCorporate() {
        this.corporate = !this.corporate;
        this.filterCatalog();
      },
      onChangeCouple() {
        this.couple = !this.couple;
        this.filterCatalog();
      },
      filterCatalog() {
        let tmpObj = {};
        if(this.adults){
          tmpObj.adults = true;
        }
        if(this.family){
          tmpObj.family = true;
        }
        if(this.children){
          tmpObj.children = true;
        }
        if(this.corporate){
          tmpObj.corporate = true;
        }
        if(this.couple){
          tmpObj.couple = true;
        }
        if (this.inputSearch != ''){
          tmpObj.search = this.inputSearch;
        }
        this.$router.push({name: 'catalog', query: tmpObj});

        this.$emit('filterCatalog');
      }
    }
  }
</script>

