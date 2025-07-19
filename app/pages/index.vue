<template>
  <div
    id="app"
    class="flex flex-col items-center justify-center min-h-screen gap-4"
  >
    <h1 class="text-4xl">
      Hello from Nuxt3 Skeleton
    </h1>
    <div v-if="users">
      {{ users }}
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
});

const users = await useFetch('/api/users', {
  method: 'GET'
});
</script>
