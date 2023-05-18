<template>
  <ui5-shellbar primary-title="UI5 Web Components" secondary-title="The Best Run SAP" show-co-pilot>
    <ui5-button icon="menu" slot="startButton" id="startButton" @click="toggleNav"></ui5-button>
  </ui5-shellbar>
  <!-- <ui5-side-navigation :collapsed="collapsed">
    <ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
    <ui5-side-navigation-item text="People" expanded icon="group">
      <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
      <ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
    <ui5-side-navigation-item text="Locations" icon="locate-me" selected></ui5-side-navigation-item>
    <ui5-side-navigation-item text="Events" icon="calendar">
      <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
      <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
    <ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link"></ui5-side-navigation-item>
    <ui5-side-navigation-item  slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>
  </ui5-side-navigation> -->
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
// import "@ui5/webcomponents-fiori/dist/SideNavigation"
// import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";
// import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";
export default {
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleNav() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style scoped>
ui5-shellbar::part(root) {
  padding-left: .5rem;
}
</style>
