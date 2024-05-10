import { defineConfig } from "vite";
import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl";

export default defineConfig({
    plugins: [viteBasicSslPlugin()],
    server: {
        host: "192.168.1.231",
        port: "3000",
        https: true,
    },
});
