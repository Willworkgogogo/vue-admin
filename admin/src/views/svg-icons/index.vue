<template>
  <div class="icons-container">
    <p class="warn-content">
      <a href="https://panjiachen.github.io/vue-element-admin-site/#/icon" target="_blank">Add and use</a>
    </p>
    <div class="icons-wrapper">
      <div v-for="item of iconsMap" :key="item" @click="handleClipboard(generateIconCode(item),$event)">
        <el-tooltip placement="top">
          <div slot="content">
            {{generateIconCode(item)}}
          </div>
          <div class="icon-item">
            <svg-icon class-name="disabled" :icon-class="item" />
            <span>{{item}}</span>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import icons from './generateIconsViews'
import clipboard from 'utils/clipboard'

export default {
  name: 'icons',
  data() {
    return {
      iconsMap: []
    }
  },
  created() {
    console.log('svg icons components')
  },
  mounted() {
    console.log('icons: ', icons)
    const iconsMap = icons.state.iconsMap.map(i => {
      return i.default.id.split('-')[1]
    })
    this.iconsMap = iconsMap
  },
  methods: {
    generateIconCode(symble) {
      return `<svg-icon icon-class="${symble}" />`
    },
    handleClipboard(text, event) {
      clipboard(text, event)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .icons-container
    margin 10px 20px 0
    overflow hidden
    .icons-wrapper
      margin 0 auto
    .icon-item
      margin 20px
      height 110px
      text-align center 
      width 110px
      float left
      font-size 30px
      color #24292e
      cursor pointer
    span
      display block
      font-size 24px
      margin-top 10px
    .disabled
      pointer-events none 
</style>
