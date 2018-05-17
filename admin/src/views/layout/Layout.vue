<template>
  <div class="app-wrapper" :class="{hideSidebar: !sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Sidebar, AppMain, Navbar } from './components'
export default {
  components: { Sidebar, AppMain, Navbar },
  computed: {
    sidebar() {
      console.log('sidebar: ', this.$store.state.app.sidebar)
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/styles/mixin"

  .app-wrapper
    @include clearfix
    position relative
    height 100%
    width 100%
</style>
