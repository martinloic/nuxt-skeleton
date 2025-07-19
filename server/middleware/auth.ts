const PROTECTED_ROUTES = ['/api/users'];

/**
 * Event handler for managing protected routes in the application.
 * This function checks if the requested URL path matches any predefined protected routes.
 * If a match is found, it enforces user session validation before allowing access.
 *
 * @param {Object} event - The event object containing details about the HTTP request.
 * @returns {Promise<void>} - A promise that resolves when the route protection check is complete.
 */
export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);
  const { pathname } = new URL(url);

  if (PROTECTED_ROUTES.includes(pathname)) {
    console.log(`Accessing protected route: ${pathname}`);

    const userSession = await requireUserSession(event);

    if (!userSession) {
      console.log('No valid user session found');
      throw createError({
        statusCode: 401,
        message: 'Not Authenticated'
      });
    }
    console.log('User session is valid, proceeding with request');
  }
});
