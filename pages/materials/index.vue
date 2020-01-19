<template>
  <div class="materials">
    <MaterialItem
      v-for="item in internalApi.materials"
      :key="item.id"
      :material="item"
    />
  </div>
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
    })
  },
  async fetch ({ store, params }) {
    let { data } = await axios.get('http://localhost:3000/api/')
    store.commit('setInternalApi', data)
  },
}
</script>
