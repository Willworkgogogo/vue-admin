<template>
  <div class="app-wrapper" :class="{hideSidebar: !sidebar.opened}">
    <sidebar class="app-wrapper"></sidebar>
  </div>
</template>

<script type="text/ecmascript-6">
import { Sidebar } from './components'
export default {
  components: { Sidebar },
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
