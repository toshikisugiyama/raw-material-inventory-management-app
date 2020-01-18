<template>
  <div class="materials">
    <MaterialItem
      v-for="item in internalApi.materials"
      :key="item.id"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import MaterialItem from "../components/MaterialItem.vue"
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
    let { data } = await axios.get('http://127.0.0.1:8000/internal_api')
    store.commit('setInternalApi', data)
  },
}
</script>

<style lang="scss" sccoped>

</style>
