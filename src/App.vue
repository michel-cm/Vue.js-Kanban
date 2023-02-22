<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar pt-2">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Todo</router-link>
          <router-link to="/kanban" class="btn btn-link">Kanban</router-link>
        </section>
      </header>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
