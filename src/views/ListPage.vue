<template>
  <div>
    {{ status }}
    <br>
    {{ lastUpdate }}
    <br>
    {{ progress }}
    <br>
    {{ complete }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListPage',
  mounted() {
    this.$store.dispatch('ordersList/load')
  },
  computed: {
    ...mapGetters('ordersList', {
      status: 'getStatus',
      lastUpdate: 'getLastRefreshDatetime',
      progress: 'getProgressList',
      complete: 'getCompleteList',
    }),
  },
}
</script>
