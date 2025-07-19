<template>
  <div>
    <UForm
      :schema="loginSchema"
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <UFormField
        label="Email"
        name="email"
      >
        <UInput v-model="state.email" />
      </UFormField>

      <UFormField
        label="Password"
        name="password"
      >
        <UInput
          v-model="state.password"
          type="password"
        />
      </UFormField>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import { type LoginSchema, loginSchema } from '#shared/schemas/auth';

const { fetch: refreshSession } = useUserSession();

const state = reactive<Partial<LoginSchema>>({
  email: 'admin@gmail.com',
  password: 'password123'
});

async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
  await $fetch('/api/auth/login', {
    method: 'POST',
    body: event.data
  }).then(async () => {
    console.log('Login successful');
    await refreshSession();
    await navigateTo('/');
  }).catch((error) => {
    console.error('Login failed:', error);
  });
};
</script>
