export default defineNuxtRouteMiddleware(async () => {
  const { loggedIn } = useUserSession();
  // await fetchSession();
  // redirect the user to the login screen if they're not authenticated
  if (!loggedIn.value) {
    return navigateTo('/login');
  }
});
