import { BasicColumn } from '@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    title: '入账',
    dataIndex: 'revenue',
    width: 120,
  },
  {
    title: '时间(月份)',
    dataIndex: 'month',
    width: 240,
  },
];

export const data: any[] = (() => {
  const arr: any[] = [];
  for (let index = 0; index < 12; index++) {
    arr.push({
      id: 'zhang',
      revenue: `${index + 8000}`,
      month: new Date().toLocaleString(),
    });
  }
  return arr;
})();
