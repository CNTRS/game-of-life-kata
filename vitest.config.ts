import react from "@vitejs/plugin-react"
import { defineConfig, mergeConfig } from "vite"
import { defineConfig as defineVitestConfig } from "vitest/config"

export default mergeConfig(
    defineConfig({
        plugins: [react()],
    }),
    defineVitestConfig({
        test: {
            globals: true,
            environment: "jsdom",
            setupFiles: ["./src/test/setup.ts"],
            coverage: {
                provider: "v8",
                reporter: ["text", "json", "html"],
                include: ["src/**/*"],
                exclude: [
                    "node_modules/",
                    "src/**/*.test.ts",
                    "src/**/*.test.tsx",
                    "src/**/*.spec.ts",
                    "src/**/*.spec.tsx",
                    "src/test/",
                    "dist/",
                    "coverage/",
                ],
            },
        },
    })
)
