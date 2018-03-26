<template>
  <div class="login-container">
    <el-from class="login-form" autoComplete="on" :model="loginForm" >

    </el-from>
  </div>
</template>

<script type="text/ecmascript-6">
  import { isvalidUsername } from 'utils/validate'

  export default {
    name: 'login',
    data() {
      return {
        const validateUsername = (rule, value, callback) => {
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
          
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $bg: #2d3a4b
  $light_gray: #eeeeee


</style>