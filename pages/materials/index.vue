<template>
  <div class="materials">
    <Search @input-keyword="keyword = $event" />
    <MaterialItem
      v-for="item in itemsFiltered"
      :key="item.id"
      :material="item"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import Search from "../../components/Search.vue"
import MaterialItem from "../../components/MaterialItem.vue"
export default {
  components: {
    Search,
    MaterialItem,
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
      return this.findMaterial()
    },
  },
  methods: {
    findMaterial: function() {
      let materials = []
      for (let i in this.internalApi.materials) {
        let material = this.internalApi.materials[i]
        if (
          material.control_code.indexOf(this.keyword) !== -1 ||
          material.name.indexOf(this.keyword) !== -1 ||
          material.supplier.indexOf(this.keyword) !== -1 ||
          material.material_comment.indexOf(this.keyword) !== -1
        ) {
          materials.push(material)
        }
      }
      return materials
    },
  },
  async fetch ({ store, params }) {
    const URL = 'http://localhost:3000/api/'
    let { data } = await axios.get(URL)
    store.commit('setInternalApi', data)
  },
}
</script>
