import { defineNuxtPlugin } from '#app';
import { createApp, h } from 'vue';
import Toast from '~/components/Toast.vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('toast', (message?: any, duration = 3000, toastClass?: any) => {
        const app = createApp({
            render() {
                return h(Toast, { message, duration, toastClass });
            },
        });

        const container = document.createElement('div');
        document.body.appendChild(container);
        app.mount(container);

        setTimeout(() => {
            app.unmount();
            document.body.removeChild(container);
        }, duration + 500); // 500ms ekleme, tostu gizlemek için animasyon süresi
    });
});
