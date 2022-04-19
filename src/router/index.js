import { createRouter, createWebHistory } from 'vue-router'

const isModifyTagName = false // 是否修改tab页标签为route.meta.title
const defaultTitle = 'Default Title' // 默认标签名
// const routerMode = "history"; // 路由模式 history/hash

const modulesFiles = import.meta.globEager('./modules/*.js')

const modules = Object.values(modulesFiles)
  .map((v) => {
    return v.default
  })
  .reduce((modules, routeModule) => modules.concat(...routeModule), [])

const routes = [
  {
    path: '/',
    redirect: '/welcome',
  },
  ...modules,
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/components/local/WelCome.vue'),
  },
  {
    path: '/404',
    name: 404,
    component: () => import('@/components/local/Page404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (isModifyTagName) {
    document.title = ''
    const title = to.meta.title || defaultTitle
    document.title = title
  }

  // 如果当前路由不存在，跳转至404页面
  if (!to.matched || to.matched.length <= 0) {
    next({
      path: '/404',
    })
  }

  next()
})

export default router
