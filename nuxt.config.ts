export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
    },
    plugins: ['~/plugins/fontawesome.js', '~/plugins/toast.ts', '~/plugins/axios.ts'],
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL,
        },
    },
    pinia: {
        autoImport: ['defineStore'],
    },
    imports: {
        dirs: ['./stores'],
    },
});
