# admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## npm包介绍
1. vue-i18n, 用来切换输出内容，适用于不同语言的输出，有固定的书写格式，[文档](http://kazupon.github.io/vue-i18n/en/started.html)
```js
  const messages = {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界'
      }
    }
  }

  // Create VueI18n instance with options
  const i18n = new VueI18n({
    locale: 'ja', // set locale
    messages, // set locale messages
  })


  // Create a Vue instance with `i18n` option
  new Vue({ i18n }).$mount('#app')
```

```html
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-i18n/dist/vue-i18n.js"></script>

  <div id="app">
    <p>{{ $t("message.hello") }}</p>
  </div>

  <!-- 输出结果 -->
  <div id="#app">
    <p>こんにちは、世界</p>
  </div>
```