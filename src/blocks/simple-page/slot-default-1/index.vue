<template>
  <CommonCard :title="title1" >
    <template #btns><slot-btns-0 /></template>
  </CommonCard>
</template>

<script lang="ts" setup>
import CommonCard from '@carverry/demo-material/dist/materials/common-card';
import SlotBtns0 from './slot-btns-0/index.vue';
import { title1 } from '../../../views/simple-page/logic/consts.ts';

</script>