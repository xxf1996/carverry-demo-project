<template>
  <div>
    <p>
      carverry示例项目
    </p>
    <el-button>111</el-button>
    <router-link :to="{
      name: 'SimplePage'
    }">
      SimplePage
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
</script>