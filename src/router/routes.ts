import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLoadingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/edit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/editPage.vue') }
    ]
  },
  {
    path: '/404',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/:id',
    component: () => import('layouts/LinkLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LinkPage.vue') }
    ]
  },
  {
    path: '/l/:id',
    component: () => import('layouts/LinkLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LinkPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
