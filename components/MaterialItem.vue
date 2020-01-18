<template>
    <section class="materials__item">
      <div>{{ item.control_code }}</div>
      <h1>{{ item.name }}</h1>
      <div>{{ item.supplier }}</div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    item: {
      type: String,
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
