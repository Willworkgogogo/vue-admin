import Vue from 'vue'
import SvgIcon from 'components/SvgIcon'
import generateIconsView from 'views/svg-icons/generateIconsViews.js'

Vue.component('svg-icon', SvgIcon)

/**
 * @param {*} requireContext 接收一个上下文模块的函数
 * 返回一个数组
 */
const requireAll = requireContext => requireContext.keys().map(requireContext)
/**
 * require.context() 使用该方法创建自己的(模块)上下文
 * 3个参数： 要搜索的文件夹目录、是否还应该搜索它的子目录、匹配文件的正则表达式
 * webpack会在构建时解析require.context()方法
 * require.context('./svg', false, /\.svg$/)，这句话的意思是
 * 创建一个包含了同级目录下svg文件夹(不包含子目录)下面的、所有文件名以`.svg`结尾的、能被require请求到的文件上下文
 * 导出的方法有三个属性
 * 1. resolve 是一个函数，它返回请求被解析后得到的模块 id。
 * 2. keys 也是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求
 * 3. id 模块id
 * */
const req = require.context('./svg', false, /\.svg$/)
const iconMap = requireAll(req)

generateIconsView.generate(iconMap)
