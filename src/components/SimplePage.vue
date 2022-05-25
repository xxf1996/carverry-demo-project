<template>
  <div class="simple-page">
    <!-- @slot 内容 -->
    <slot name="default" />
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.simple-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>