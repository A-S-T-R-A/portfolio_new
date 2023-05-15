import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: "/src",
            canvas: "/src/canvas",
            modules: "/src/modules",
            const: "/src/const",
            shared: "/src/shared",
        },
    },
})
