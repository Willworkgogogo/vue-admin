<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      return this.className ? `svg-icon ${this.className}` : 'svg-icon'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .svg-icon
    width: 1em
    height: 1em
    vertical-align: -0.15em
    fill: currentColor
    overflow: hidden
</style>
