<template>
  <ul v-if="orders" class="orderList">
    <li v-for="order in orders" :key="order.date" class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :class="{ bwImage: !isActive, 'is-rounded': true }" :src="order.logo">
        </p>
      </figure>
      <div class="media-content">
        <div class="level is-mobile">
          <ul class="level-left">
            <li :class="{ green: isActive, 'level-item': true}">
              {{ order.status.type }}
            </li>
          </ul>
          <ul class="level-right">
            <li class="level-item" v-if="showDate">
              <span>預計出貨：{{ order.date }}</span>
            </li>
          </ul>
        </div>
        {{ order.name }}
      </div>
      <div class="media-right" style="align-self: center">
        A
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'OrderList',
  props: {
    orders: Array,
    isActive: { type:Boolean, default: false },
    showDate: { type:Boolean, default: false },
  }
}
</script>

<style lang="sass" scoped>
.orderList
  padding-top: 1rem
  padding-bottom: 1rem

  & > .media
    padding-left: 1rem
    padding-right: 1rem

.green
  color: green

.bwImage
  filter: grayscale(100%)

</style>
