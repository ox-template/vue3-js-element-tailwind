const router = [
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      keepAlive: true, // 缓存
      title: 'tab栏标题' // 标题
    }
  }
]
export default router
