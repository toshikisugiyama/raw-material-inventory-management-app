<template>
    <section class="materials__item">
      <div>{{ material.control_code }}</div>
      <h1>{{ material.name }}</h1>
      <div>{{ material.supplier }}</div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    material: {
      type: Object,
    },
  },
  computed: {
      ...mapGetters({
        internalApi: 'getInternalApi',
      })
    },
}
</script>

<style lang="scss" scoped>
.materials__item {
  padding: 15px 10px;
  border-bottom: solid 1px #707070;
}
</style>
