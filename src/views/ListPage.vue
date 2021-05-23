<template>
  <div class="listView">
    <div class="listView-header has-text-weight-medium">
      進行中
    </div>
    <OrderList :orders="progress" isActive showDate />
    <div class="listView-header has-text-weight-medium">
      已完成
    </div>
    <OrderList :orders="complete" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OrderList from '@/components/OrderList'

export default {
  name: 'ListPage',
  components: {
    OrderList,
  },
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

<style lang="sass" scoped>
.listView
  border: 1px solid rgba(219, 219, 219, 0.5)
  // For mockup propose:
  // max-width: 300pt

  &-header
    background-color: rgba(219, 219, 219, 0.5)
    padding: 0.5rem

    &::before
      content: '\258C'
      color: green
      display: inline-block
      margin-left: 0.5rem
      vertical-align: text-bottom
</style>
