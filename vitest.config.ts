import viteSolid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    // hot: false keeps the plugin from injecting the solid-refresh HMR
    // runtime, which cannot be resolved inside vitest workers
    viteSolid({ hot: false }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
