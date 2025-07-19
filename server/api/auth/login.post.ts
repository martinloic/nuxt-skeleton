import { z } from 'zod';

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8)
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  if (email === process.env.NUXT_USER_EMAIL && password === process.env.NUXT_USER_PASSWORD) {
    console.log('test', email, password);
    await setUserSession(event, {
    // User data
      user: {
        id: '12345',
        name: 'John Doe',
        email: 'john@example.com'
      },
      // Private data accessible only on server/ routes
      secure: {
        apiToken: '1234567890'
      },
      // Any extra fields for the session data
      loggedInAt: new Date()
    });
    return {};
  }

  throw createError({
    statusCode: 401,
    message: 'Bad credentials'
  });
});
