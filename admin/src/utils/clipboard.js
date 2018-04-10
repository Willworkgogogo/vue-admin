import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess() {
  // 调用Element的$message方法
  // Element为Vue.prototype添加了全局方法$element
  Vue.prototype.$message({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500,
    showClose: true
  })
}

function clipboardError() {
  Vue.prototype.$message({
    message: 'Copy failed',
    type: 'error',
    showClose: true
  })
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
