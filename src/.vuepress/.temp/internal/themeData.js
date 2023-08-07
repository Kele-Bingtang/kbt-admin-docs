export const themeData = JSON.parse("{\"encrypt\":{},\"author\":{\"name\":\"Young Kbt\",\"url\":\"https://youngkbt.cn\"},\"logo\":\"/logo.png\",\"repo\":\"Kele-Bingtang/kbt-vue3-admin\",\"docsDir\":\"src\",\"fullscreen\":true,\"navTitle\":false,\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\",\"Word\"],\"locales\":{\"/en/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[],\"sidebar\":{}},\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"指南\",\"icon\":\"lightbulb\",\"link\":\"/guide/\"},{\"text\":\"构建\",\"icon\":\"building\",\"link\":\"/structure/\"},{\"text\":\"组件\",\"icon\":\"bars\",\"link\":\"https://vue3-admin.youngkbt.cn/components\"},{\"text\":\"链接\",\"icon\":\"dumpster\",\"children\":[{\"text\":\"预览地址\",\"icon\":\"house\",\"link\":\"https://vue3-admin.youngkbt.cn\"},{\"text\":\"Github 源码\",\"icon\":\"store\",\"link\":\"https://github.com/Kele-Bingtang/kbt-vue3-admin\"},{\"text\":\"Gitee 源码\",\"icon\":\"store\",\"link\":\"https://gitee.com/kele-bingtang/kbt-vue3-admin\"},{\"text\":\"精简版源码\",\"icon\":\"store\",\"link\":\"https://github.com/Kele-Bingtang/kbt-vue3-template\"},{\"text\":\"文档源码\",\"icon\":\"store\",\"link\":\"\"}]}],\"sidebar\":{\"/guide/\":[{\"text\":\"指南\",\"icon\":\"book\",\"children\":\"structure\"}],\"/structure/\":[{\"text\":\"构建\",\"icon\":\"building\",\"children\":\"structure\"}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
