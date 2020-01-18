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
    let { data } = await axios.get('http://127.0.0.1:8000/internal_api')
    store.commit('setInternalApi', data)
  },
}
</script>

