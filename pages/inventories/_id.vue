<template>
  <div>
    <MaterialInfo
      :selectedMaterial="selectedMaterial"
    />
    <section class="inventory">
      <!-- 製造番号 -->
      <h2 class="inventory__lotcode">
        <span class="inventory__lotcode__label">製造番号</span>
        {{ selectedInventory.lot_code }}
      </h2>
      <!-- 使用量 -->
      <div class="inventory__amount-used">
        <label for="amount-used" class="inventory__amount-used__label">使用量</label>
        <div class="inventory__amount-used__input">
          <input
            type="number"
            id="amount-used"
            v-model.number="amountUsed"
          />
          <span>
            {{ selectedMaterial.unit }}
          </span>
        </div>
      </div>
      <!-- 在庫量 -->
      <div class="inventory__quantity">
        <h3 class="inventory__quantity__label">在庫</h3>
        <p>
          {{ calculatedInventory | addComma }}
          <span>
            {{ selectedMaterial.unit }}
          </span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import MaterialInfo from "../../components/MaterialInfo.vue"

export default {
  components: {
    MaterialInfo,
  },
  data() {
    return {
      amountUsed: '',
    }
  },
  computed: {
    ...mapGetters({
      internalApi: 'getInternalApi',
    }),
    selectedMaterial() {
      const materials = this.internalApi.materials
      const inventories = this.internalApi.inventories
      const presentId = this.$route.params.id
      const selectedMaterial = materials[inventories[presentId-1].material_id-1]
      return selectedMaterial
    },
    selectedInventory() {
      const selectedInventory = this.internalApi.inventories[this.$route.params.id-1]
      return selectedInventory
    },
    calculatedInventory() {
      const calculatedInventory = this.selectedInventory.stock_quantity - this.amountUsed
      return calculatedInventory
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
.inventory {
  padding: $item-padding;
  &__lotcode {
    @include large-font($item-padding*5);
    &__label {
      @include small-font;
      display: block;
    }
  }
  &__amount-used {
    @include large-font;
    display: flex;
    flex-direction: column;
    &__label {
      @include small-font;
    }
    &__input {
      text-align: right;
      & input {
        text-align: right;
        @include large-font;
      }
    }
  }
  &__quantity {
    @include large-font;
    text-align: right;
    &__label {
      @include small-font;
      text-align: left;
    }
  }
}
</style>
