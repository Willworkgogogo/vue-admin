import { paramToObj } from 'utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    // 这里的登录判断很简单
    // 1. 只进行用户名匹配
    // 2. 如果用户名不存在，在这里也不存在用户不存在的问题，毕竟限制了两个角色，所以这里的处理可以这么简单
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = paramToObj(config.url)
    if (userMap[token]) {
      return userMap[token]
    }
    return false
  },
  logout: () => 'success'
}
