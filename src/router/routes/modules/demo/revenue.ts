import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const revenue: AppRouteModule = {
  path: '/revenue',
  name: 'RevenueDemo',
  component: LAYOUT,
  redirect: '/revenue/icon',
  meta: {
    orderNo: 19,
    icon: 'ion:git-compare-outline',
    title: t('routes.demo.revenue'),
  },

  children: [
    {
      path: 'revenue',
      name: 'revenue',
      component: () => import('@/views/demo/revenue/list.vue'),
      meta: {
        title: t('routes.demo.revenue.icon'),
      },
    },
  ],
};

export default revenue;
