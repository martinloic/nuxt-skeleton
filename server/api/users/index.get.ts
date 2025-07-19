export default defineEventHandler(async () => {
  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'admin@gmail.com'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'admina@gmail.com'
    }
  ];

  return users;
});
