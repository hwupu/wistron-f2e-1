<template>
  <div class="navbar is-light">
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/">Home</router-link>
      </div>
      <div class="navbar-item">
        <router-link to="/setting">Setting</router-link>
      </div>
    </div>
  </div>
  <router-view class="container" />
</template>
