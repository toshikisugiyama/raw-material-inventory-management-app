<template>
  <section class="register-inventory">
    <!-- 品コード -->
    <div class="register-inventory__input register-inventory__control-code">
      <label class="register-inventory__input__label" for="control-code">品コード</label>
      <input id="control-code" type="text" @input="getMaterial" v-model="controlCode" />
    </div>
    <!-- 品名 -->
    <div class="register-inventory__input register-inventory__name">
      <p class="register-inventory__input__label">品名</p>
      <p class="register-inventory__input__name">{{ name }}</p>
    </div>
    <!-- 製造コード -->
    <div class="register-inventory__input register-inventory__lot-code">
      <label class="register-inventory__input__label" for="lot-code">製造コード</label>
      <input id="lot-code" type="text" v-model="lotCode">
    </div>
    <!-- 仕入量 -->
    <div class="register-inventory__input register-inventory__quantity">
      <label class="register-inventory__input__label" for="quantity">仕入量</label>
      <div class="register-inventory__quantity__input">
        <input id="quantity" type="number" v-model.number="stockQuantity">
        <span class="register-inventory__quantity__input__unit">{{ unit }}</span>
      </div>
    </div>
    <!-- 使用期限 -->
    <div class="register-inventory__input register-inventory__dead">
      <label class="register-inventory__input__label" for="dead">使用期限</label>
      <input id="dead" type="date" v-model="dead">
    </div>
    <!-- 備考 -->
    <div class="register-inventory__input register-inventory__inventory-comment">
      <label class="register-inventory__input__label" for="inventory-comment">備考</label>
      <textarea name="inventory-comment" id="inventory-comment" cols="30" rows="10" v-model="inventoryComment"></textarea>
    </div>
    <button @click="submitInventory">決定</button>
  </section>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      controlCode: '',
      lotCode: '',
      stockQuantity: '',
      dead: '',
      inventoryComment: '',
      name: '',
      unit: '',
      materialId: '',
    }
  },
  computed: {
    ...mapGetters({
      internalApi: 'getInternalApi',
    }),
  },
  methods: {
    async submitInventory() {
      const data = {
        lot_code: this.lotCode,
        stock_quantity: this.stockQuantity,
        dead: this.dead,
        inventory_comment: this.inventoryComment,
        material_id: this.materialId,
      }
      const response = await axios.post('http://localhost:3000/api/inventories', data)
      .then(() => {
        this.controlCode = '',
        this.lotCode = '',
        this.stockQuantity = '',
        this.dead = '',
        this.inventoryComment = '',
        this.name = '',
        this.unit = '',
        this.materialId = ''
      })
    },
    getMaterial() {
      const materials = this.internalApi.materials
      return materials.find((item, index) => {
        if (item.control_code === this.controlCode) {
          const enteredMaterialName = materials[item.id-1].name
          const enteredMaterialUnit = materials[item.id-1].unit
          this.materialId = item.id
          this.name = enteredMaterialName
          this.unit = enteredMaterialUnit
        }
      })
    },
  },
  async fetch ({ store, params }) {
    let { data } = await axios.get('http://localhost:3000/api/')
    store.commit('setInternalApi', data)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.register-inventory {
  padding: $item-padding;
  &__input {
    display: flex;
    flex-direction: column;
    margin: $item-padding*1.5 0;
    &__label {
      @include small-font;
      font-weight: bold;
    }
    &__name {
      height: $small-font;
    }
    &__name,
    input {
      text-align: right;
    }
    &__name,
    input,
    textarea {
      @include small-font(0);
      color: $dark-color;
    }
  }
  &__quantity {
    &__input {
      display: flex;
      justify-content: space-between;
      input {
        width: 100%;
      }
      &__unit {
        @include large-font(0);
        font-weight: bold;
        margin-left: 5px;
      }
    }
  }
}
</style>
