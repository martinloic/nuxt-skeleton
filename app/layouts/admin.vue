<template>
  <div>
    {{ user }}
    <slot />
  </div>
</template>

<script setup lang="ts">
const { user } = useUserSession();
</script>
