<template>
  <div class="container">
    {{ data }}
  </div>
</template>

<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData ({ params }) {
    const { data } = await axios.get(`http://127.0.0.1:8000/internal_api`)
    return { data }
  },
}
</script>

