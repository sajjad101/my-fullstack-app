// server/api/hello.ts
// The filename maps to the endpoint: /api/hello

// defineEventHandler is a Nitro utility to wrap your API logic
export default defineEventHandler(async (event) => {
  // This logic runs ONLY on the server
  const serverTime = new Date().toLocaleTimeString();

  return {
    message: 'Hello from the Nuxt 3 Nitro Server!',
    timestamp: serverTime,
    status: 'ok',
  };
});