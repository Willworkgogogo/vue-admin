// 翻译路由的meta属性值,返回已配置的翻译值
export function generateTitle(title) {
  const hasKey = this.$te('route.' + title) // $te()参数1用于检测配置对象中是否存在该属性,返回boolean。te可以理解成test检测
  return hasKey ? this.$t('route.' + title) : title
}
