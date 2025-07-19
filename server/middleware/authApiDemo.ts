/**
 * Event handler for managing protected routes in the application.
 * This function checks if the requested URL path matches any predefined protected routes.
 * If a match is found, it enforces user session validation before allowing access.
 *
 * @param {Object} event - The event object containing details about the HTTP request.
 * @returns {Promise<void>} - A promise that resolves when the route protection check is complete.
 */
// export default defineEventHandler(async (event) => {
//   const url = getRequestURL(event);
//   const { pathname } = new URL(url);
//   const protectedRoutes = ['/api/users'];

//   // Iterate over each protected route
//   for (let i = 0; i < protectedRoutes.length; i++) {
//     const r = protectedRoutes[i];

//     // Check if the current request path matches a protected route
//     if (pathname === r) {
//       // Enforce user session validation for protected routes
//       await requireUserSession(event);
//       console.log(`User session required for ${pathname}`);
//     }
//   }
// });

const PROTECTED_ROUTES = ['/api/users'];

export default defineEventHandler(async (event) => {
  try {
    const url = getRequestURL(event);
    const { pathname } = new URL(url);

    if (PROTECTED_ROUTES.includes(pathname)) {
      console.log(`Accessing protected route: ${pathname}`);

      const userSession = await requireUserSession(event);
      console.log('User session details:', userSession);

      if (!userSession) {
        console.log('No valid user session found');
        throw createError({
          statusCode: 401,
          message: 'Not Authenticated'
        });
      }

      console.log('User is authenticated');
    }
  }
  catch (error) {
    console.error('Error during route protection check:', error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal Server Error'
    });
  }
});
