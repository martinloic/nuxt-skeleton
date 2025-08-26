import type { H3Event } from 'h3';

export default defineEventHandler((event: H3Event) => {
  // console.log('hello from server middleware', event.__is_event__);
});
