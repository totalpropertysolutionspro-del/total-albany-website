import { defineConfig } from "/@fs/home/runner/workspace/node_modules/.vite/deps/vite.js?v=0935c1ef";
import react from "/@fs/home/runner/workspace/node_modules/.vite/deps/@vitejs_plugin-react.js?v=125246d6";
import path from "/@id/__vite-browser-external:path";
import runtimeErrorOverlay from "/@fs/home/runner/workspace/node_modules/.vite/deps/@replit_vite-plugin-runtime-error-modal.js?v=d1861313";
export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.REPL_ID !== void 0 ? [
      await import("/@fs/home/runner/workspace/node_modules/.vite/deps/@replit_vite-plugin-cartographer.js?v=6aa0872f").then(
        (m) => m.cartographer()
      ),
      await import("/@fs/home/runner/workspace/node_modules/.vite/deps/@replit_vite-plugin-dev-banner.js?v=a5611fbb").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLHlCQUF5QjtBQUVoQyxlQUFlLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixvQkFBb0I7QUFBQSxJQUNwQixHQUNBLFFBQVEsSUFBSSxZQUFZLFNBQ3BCO0FBQUEsTUFDRSxNQUFNLE9BQU8sa0NBQWtDLEVBQUU7QUFBQSxRQUFLLENBQUMsTUFDckQsRUFBRSxhQUFhO0FBQUEsTUFDakI7QUFBQSxNQUNBLE1BQU0sT0FBTyxnQ0FBZ0MsRUFBRTtBQUFBLFFBQUssQ0FBQyxNQUNuRCxFQUFFLFVBQVU7QUFBQSxNQUNkO0FBQUEsSUFDRixJQUNBLENBQUM7QUFBQSxFQUNQO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxZQUFZLFNBQVMsVUFBVSxLQUFLO0FBQUEsTUFDdEQsV0FBVyxLQUFLLFFBQVEsWUFBWSxTQUFTLFFBQVE7QUFBQSxNQUNyRCxXQUFXLEtBQUssUUFBUSxZQUFZLFNBQVMsaUJBQWlCO0FBQUEsSUFDaEU7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNLEtBQUssUUFBUSxZQUFZLFNBQVMsUUFBUTtBQUFBLEVBQ2hELE9BQU87QUFBQSxJQUNMLFFBQVEsS0FBSyxRQUFRLFlBQVksU0FBUyxhQUFhO0FBQUEsSUFDdkQsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxNQUNSLE1BQU0sQ0FBQyxPQUFPO0FBQUEsSUFDaEI7QUFBQSxFQUNGO0FBQ0YsQ0FBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidml0ZS5jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgcnVudGltZUVycm9yT3ZlcmxheSBmcm9tIFwiQHJlcGxpdC92aXRlLXBsdWdpbi1ydW50aW1lLWVycm9yLW1vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHJ1bnRpbWVFcnJvck92ZXJsYXkoKSxcbiAgICAuLi4ocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgcHJvY2Vzcy5lbnYuUkVQTF9JRCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IFtcbiAgICAgICAgICBhd2FpdCBpbXBvcnQoXCJAcmVwbGl0L3ZpdGUtcGx1Z2luLWNhcnRvZ3JhcGhlclwiKS50aGVuKChtKSA9PlxuICAgICAgICAgICAgbS5jYXJ0b2dyYXBoZXIoKSxcbiAgICAgICAgICApLFxuICAgICAgICAgIGF3YWl0IGltcG9ydChcIkByZXBsaXQvdml0ZS1wbHVnaW4tZGV2LWJhbm5lclwiKS50aGVuKChtKSA9PlxuICAgICAgICAgICAgbS5kZXZCYW5uZXIoKSxcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKGltcG9ydC5tZXRhLmRpcm5hbWUsIFwiY2xpZW50XCIsIFwic3JjXCIpLFxuICAgICAgXCJAc2hhcmVkXCI6IHBhdGgucmVzb2x2ZShpbXBvcnQubWV0YS5kaXJuYW1lLCBcInNoYXJlZFwiKSxcbiAgICAgIFwiQGFzc2V0c1wiOiBwYXRoLnJlc29sdmUoaW1wb3J0Lm1ldGEuZGlybmFtZSwgXCJhdHRhY2hlZF9hc3NldHNcIiksXG4gICAgfSxcbiAgfSxcbiAgcm9vdDogcGF0aC5yZXNvbHZlKGltcG9ydC5tZXRhLmRpcm5hbWUsIFwiY2xpZW50XCIpLFxuICBidWlsZDoge1xuICAgIG91dERpcjogcGF0aC5yZXNvbHZlKGltcG9ydC5tZXRhLmRpcm5hbWUsIFwiZGlzdC9wdWJsaWNcIiksXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGZzOiB7XG4gICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICBkZW55OiBbXCIqKi8uKlwiXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2Uvdml0ZS5jb25maWcudHMifQ==