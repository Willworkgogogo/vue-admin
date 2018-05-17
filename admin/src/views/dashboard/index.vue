<template>
  <div class="dashboard-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import adminDashboard from './admin'

export default {
  name: 'dashboard',
  components: { adminDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters(['roles'])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
