import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// FontAwesome varsayılan CSS'ini devre dışı bırakma
config.autoAddCss = false;

// Kütüphaneye ikonları ekleyin
library.add(faBars, faTimes);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
