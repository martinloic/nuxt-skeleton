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
    <UButton
      class="mt-4"
      label="Fetch Users"
      @click="fetchUsers"
    />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
});
const users = ref<{ id: string, name: string, email: string }[] | null>(null);

async function fetchUsers() {
  // Fetch users from the API
  return $fetch('/api/users', {
    method: 'GET'
  }).then((data) => {
    users.value = data;
  }).catch((error) => {
    console.error('Error fetching users:', error);
  });
}

onMounted(async () => {
  await fetchUsers();
});
</script>
