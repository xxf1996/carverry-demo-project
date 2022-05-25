<template>
  <CommonCard :title="title" >
    <template #default><slot-default-0 /></template>
  </CommonCard>
</template>

<script lang="ts" setup>
import CommonCard from '@carverry/demo-material/dist/materials/common-card';
import SlotDefault0 from './slot-default-0/index.vue';
import { title } from '../../../views/simple-page/logic/consts.ts';

</script>