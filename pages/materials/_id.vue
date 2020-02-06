<template>
  <div>
    <MaterialInfo
      :selectedMaterial="selectedMaterial"
    />
    <InventoryLotItem
      v-for="item in selectedLotItem"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import MaterialInfo from "../../components/MaterialInfo.vue"
import InventoryLotItem from "../../components/InventoryLotItem.vue"
export default {
  components: {
    MaterialInfo,
    InventoryLotItem,
  },
  computed: {
    ...mapGetters({
      internalApi: 'getInternalApi',
    }),
    selectedMaterial() {
      const materials = this.internalApi.materials
      const presentId = this.$route.params.id
      const selectedMaterial = materials[presentId-1]
      return selectedMaterial
    },
    selectedLotItem() {
      const selectedLotItems = this.internalApi.inventories.filter(obj => obj.material_id.toString() === this.$route.params.id)
      return selectedLotItems
    },
  },
  async fetch ({ store, params }) {
    const url = process.env.baseUrl
    let { data } = await axios.get(url)
    store.commit('setInternalApi', data)
  },
}
</script>


