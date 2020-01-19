<template>
  <section class="materials">
    <!-- 品番号 -->
    <div class="materials__controlcode">
      {{ internalApi.materials[$route.params.id-1].control_code }}
    </div>
    <!-- 品名 -->
    <h1 class="materials__name">
      {{ internalApi.materials[$route.params.id-1].name }}
    </h1>
    <!-- 仕入先 -->
    <div class="materials__supplier">
      {{ internalApi.materials[$route.params.id-1].supplier }}
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import MaterialItem from "../../components/MaterialItem.vue"
export default {
  components: {
    MaterialItem,
  },
  computed: {
    ...mapGetters({
      internalApi: 'getInternalApi',
    }),
  },
  async fetch ({ store, params }) {
    let { data } = await axios.get('http://localhost:3000/api/')
    store.commit('setInternalApi', data)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.materials {
  padding: $item-padding;
  &__controlcode {
    @include small-font;
  }
  &__name {
    @include large-font;
  }
  &__supplier {
    @include small-font;
  }
}
</style>
