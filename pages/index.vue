<template>
  <div class="inventories">
    <InventoryItem
      v-for="item in internalApi.inventories"
      :key="item.id"
      :inventory="item"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from "vuex"
import InventoryItem from "../components/InventoryItem.vue";

export default {
  components: {
    InventoryItem,
  },
  computed: {
    ...mapGetters({
      internalApi: 'getInternalApi',
    }),
  },
  async fetch ({ store, params }) {
    const URL = 'http://localhost:3000/api/'
    let { data } = await axios.get(URL)
    store.commit('setInternalApi', data)
  },
}
</script>

