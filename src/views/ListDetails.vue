<template>
  <button class="button" @click="goBack()" v-bind="$attrs">Go back</button>
  <ul v-if="order">
    <li>
      <p class="image is-64x64">
        <img class="is-rounded" :src="order.logo">
      </p>
    </li>
    <li>Name: {{ order.name }}</li>
    <li>Date: {{ order.date }}</li>
    <li>Status: {{ order.status.type }}</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ListDetails',
  computed: {
    ...mapState({
      order: state => state.ordersList.selectedOrder,
    }),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
}
</script>
