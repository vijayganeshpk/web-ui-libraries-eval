import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*"],
      routes: async (defineRoutes) => {
        return defineRoutes((route) => {
          route(undefined, "modules/layout.tsx", () => {
            route("", "modules/index.tsx", { index: true });
            route("button", "modules/button.tsx");
          });
        });
      },
    }),
    tsconfigPaths(),
  ],
});
