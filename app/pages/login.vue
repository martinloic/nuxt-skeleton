<template>
  <div class="flex flex-col-reverse p-6 md:grid md:h-screen md:w-screen md:grid-cols-7">
    <div class="relative col-span-4 mt-16 hidden flex-col rounded-[32px] border border-gray-200 bg-white md:mt-0 md:flex md:overflow-hidden" />
    <div class="col-span-3 flex h-screen flex-col items-center justify-center md:h-auto">
      <UForm
        :schema="loginSchema"
        :state="state"
        class="space-y-4 bg-white py-8 px-10 rounded-xl"
        @submit="onSubmit"
      >
        <div class="space-y-1">
          <h1 class="font-extrabold text-center text-lg">
            Sign in to your account
          </h1>
          <p class="text-center text-gray-500 text-sm">
            Welcome back! Please sign in to continue
          </p>
        </div>
        <UFormField
          label="Email"
          name="email"
        >
          <UInput
            v-model="state.email"
            type="text"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Password"
          name="password"
        >
          <UInput
            v-model="state.password"
            type="password"
            class="w-full"
          />
        </UFormField>

        <UButton
          type="submit"
          class="flex ml-auto w-full justify-center"
          icon=""
        >
          Continue
        </UButton>
      </UForm>
    </div>
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
