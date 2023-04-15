<template>
  <main>
    <div class="about">
      <ui5-button>Hello world!</ui5-button>
    </div>
  </main>
</template>

<script>
import "@ui5/webcomponents/dist/Button.js";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
