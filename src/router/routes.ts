const routes = [
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/home',
    component: () => import('@/pages/home.vue'),
    redirect: '/home/user',
    children: [
      {
        path: '/home/user',
        component: () => import('@/pages/user.vue'),
      },
      {
        path: '/home/manage',
        component: () => import('@/pages/manage.vue'),
        meta: {
          title: '管理页', // 页面标题
          auth: true, //需要登录权限
        },
      },
    ],
  },
  // ...
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/notFound.vue'),
  },
];

export default routes;
