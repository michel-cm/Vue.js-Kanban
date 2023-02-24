<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar pt-2">
        <section class="navbar-section">
          <router-link to="/" class="btn-link">Todo</router-link>
          <router-link to="/kanban" class="btn-link">Kanban</router-link>
        </section>
      </header>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-section a {
  margin-right: 0.5rem;
}
.navbar-section .router-link-exact-active {
  color: red;
}
</style>
