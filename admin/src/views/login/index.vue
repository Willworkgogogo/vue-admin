<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <el-form-item prop="username" >
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名" />
      </el-form-item>

    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import { isvalidUsername } from 'utils/validate'

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) return callback(new Error("user name can't empty"))
      if (!isvalidUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '1111111'
      },
      loginRules: {
        username: [
          { require: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { require: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
$bg = #2d3a4b
$light_gray = #eee

.login-container
  .el-input
    display inline-block
    height 47px
    width 85%
    input
      background transparent
      border 0px
      -webkit-appearance none
      border-radius 0px
      padding 12px 5px 12px 15px
      color $light_gray
      height 47px
      &:-webkit-autofill
        -webkit-box-shadow 0 0 0px 1000px $bg inset !important
        -webkit-text-fill-color #fff !important
  .el-form-item
    border 1px solid rgba(255, 255, 255, 0.1)
    background rgba(0, 0, 0, 0.1)
    border-radius 5px
    color #454545
</style>

<style lang="stylus" rel="stylesheet/stylus">
$bg = #2d3a4b
$light_gray = #eeeeee
$dark_gray = #889aa4

.login-container
  position fixed
  height 100%
  width 100%
  background-color $bg
  .login-form
    position absolute
    left 0
    right 0
    width 520px
    padding 35px 35px 15px 35px
    margin 120px auto
  .tips
    font-size 14px
    color #ffffff
    margin-bottom 10px
    span
      &:first-of-type
        margin-right 16px
  .svg-container
    padding 6px 5px 6px 15px
    color $dark_gray
    vertical-align middle
    width 30px
    display inline-block
    &_login
      font-size 20px
  .title-container
    position relative
    .title
      font-size 26px
      font-weight 400
      color $light_gray
      margin 0px auto 40px auto
      text-align center
      font-weight bold
    .set-language
      color #ffffff
      position absolute
      top 5px
      right 10px
  .show-pwd
    position absolute
    right 10px
    top 7px
    font-size 16px
    color $dark_gray
    cursor pointer
    user-select none
  .thirdparty-button
    position absolute
    right 35px
    bottom 28px
</style>
