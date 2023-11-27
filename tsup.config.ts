import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: ["src/index.ts"],
    format: ["esm"],
    outDir: "dist",
    clean: true,
    minify: process.env.NODE_ENV === "production",
})
