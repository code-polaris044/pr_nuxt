// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  plugins: ["@/plugins/fontawesome.ts"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "My App",
      meta: [{ name: "description", content: "pr site" }],
      bodyAttrs: {
        class: "body__class",
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/sass/common.scss" as *;',
        },
      },
    },
  },
});
