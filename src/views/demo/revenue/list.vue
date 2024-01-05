<template>
  <PageWrapper title="收益表" content="收益记录明细">
    <BasicTable title="基础表格" :columns="columns" :dataSource="data">
      <template #toolbar>
        <a-button @click="customHeader"> 导出：自定义头部 </a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { BasicTable } from '@/components/Table';
  import { jsonToSheetXlsx } from '@/components/Excel';
  import { columns, data } from './data';
  import { PageWrapper } from '@/components/Page';

  function customHeader() {
    jsonToSheetXlsx({
      data,
      header: {
        id: 'ID',
        revenue: '入账',
        month: '月份',
      },
      filename: '自定义头部.xlsx',
      json2sheetOpts: {
        // 指定顺序
        header: ['id', 'month'],
      },
    });
  }
</script>
