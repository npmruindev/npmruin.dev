import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['./tests/int/**/*.test.{ts,tsx}'],
  },
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@e2e": path.resolve(__dirname, "./tests/e2e"),
			"@int": path.resolve(__dirname, "./tests/int"),
		},
	},
})