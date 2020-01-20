<template>
  <div>
    <MaterialInfo
      :selectedMaterial="selectedMaterial"
    />
    inventory
    {{ $route.params.id }}
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
  },
  async fetch ({ store, params }) {
    let { data } = await axios.get('http://localhost:3000/api/')
    store.commit('setInternalApi', data)
  },
}
</script>
