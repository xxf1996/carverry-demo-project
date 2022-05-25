<template>
  <SimplePage  >
    <template #default><slot-default-0 /><slot-default-1 /></template>
  </SimplePage>
</template>

<script lang="ts" setup>
import SimplePage from '../../components/SimplePage.vue';
import SlotDefault0 from './slot-default-0/index.vue';
import SlotDefault1 from './slot-default-1/index.vue';


</script>