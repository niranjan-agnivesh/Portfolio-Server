export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    client: {
      prerender: true
    }
  }
});
