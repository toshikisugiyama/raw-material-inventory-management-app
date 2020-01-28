<template>
  <div class="inventories">
    <Search @input-keyword="keyword = $event" />
    <InventoryItem
      v-for="item in itemsFiltered"
      :key="item.id"
      :inventory="item"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from "vuex"
import Search from "../components/Search.vue"
import InventoryItem from "../components/InventoryItem.vue";

export default {
  components: {
    Search,
    InventoryItem,
  },
  data() {
    return {
      keyword: '',
    }
  },
  computed: {
    ...mapGetters({
      internalApi: 'getInternalApi',
    }),
      itemsFiltered: function() {
        return this.findInventory()
    },
  },
  methods: {
    findInventory: function() {
      let inventories = []
      for (let i in this.internalApi.inventories) {
        let inventory = this.internalApi.inventories[i]
        let material = this.internalApi.materials[inventory.material_id-1]
        if (
          inventory.lot_code.indexOf(this.keyword) !== -1 ||
          inventory.dead.indexOf(this.keyword) !== -1 ||
          inventory.inventory_comment.indexOf(this.keyword) !== -1 ||
          material.control_code.indexOf(this.keyword) !== -1 ||
          material.name.indexOf(this.keyword) !== -1 ||
          material.supplier.indexOf(this.keyword) !== -1
        ) {
          inventories.push(inventory)
        }
      }
      return inventories
    },
  }, async fetch ({ store, params }) {
    const URL = 'http://localhost:3000/api/'
    let { data } = await axios.get(URL)
    store.commit('setInternalApi', data)
  },
}
</script>

