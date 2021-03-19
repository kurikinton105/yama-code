import VueAnalytics from 'vue-analytics'

export default async ({ Vue, router }) => {
  Vue.use(VueAnalytics, {
    id: 'G-K8903C973D',
    router
  })
}
