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
import { isvalidUsername } from "utils/validate"

export default {
  name: "login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) return callback(new Error("user name can't empty"))
      if (!isvalidUsername(value)) {
        callback(new Error("Please enter the correct user name"))
      } else {
        callback()
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"))
      } else {
        callback()
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "1111111"
      },
      loginRules: {
        username: [
          { require: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { require: true, trigger: "blur", validator: validatePassword }
        ]
      },
      passwordType: "password",
      loading: false,
      showDialog: false
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
$bg = #2d3a4b
$light_gray = #eeeeee
</style>