<template>
  <div>
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
      <!-- 在庫量 -->
      <div class="materials__total">
        <span class="materials__total__label">総量</span>
        {{ internalApi.materials[$route.params.id-1].total | addComma }}
        <span class="materials__total__unit">
          {{ internalApi.materials[$route.params.id-1].unit }}
        </span>
      </div>
    </section>
    <InventoryLotItem
      v-for="item in SelectLotItem"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import InventoryLotItem from "../../components/InventoryLotItem.vue"
export default {
  components: {
    InventoryLotItem,
  },
  computed: {
    ...mapGetters({
      internalApi: 'getInternalApi',
    }),
    SelectLotItem() {
      const SelectedLotItems = this.internalApi.inventories.filter(obj => obj.material_id.toString() === this.$route.params.id)
      return SelectedLotItems
    },
  },
  filters: {
    addComma: val => val.toLocaleString(),
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
  padding-bottom: $item-padding*2;
  border-bottom: $border-style;
  &__controlcode {
    @include small-font;
    margin-bottom: $item-padding/2;
  }
  &__name {
    @include large-font;
  }
  &__supplier {
    @include small-font;
  }
  &__total {
    text-align: right;
    @include large-font(0);
    &__label {
      @include small-font;
      font-weight: normal;
    }
  }
}
</style>
