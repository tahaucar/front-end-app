import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
    const { $toast } = useNuxtApp();

    const axiosInstance = axios.create();
    const toastClass = 'bg-red-500 text-white';

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                const message = error.response.status + ' ' + error.response.data;
                $toast(message, 3000, toastClass);
            } else if (error.response.status === 404) {
                const message = error.response.status + ' ' + error.response.data;
                $toast(message, 3000, toastClass);
            } else if (error.response.status === 422) {
                const message = error.response.status + ' ' + error.response.data;
                $toast(message, 3000, toastClass);
            } else if (error.response.status === 500) {
                const message = error.response.status + ' ' + error.response.data;
                $toast(message, 3000, toastClass);
            }
        }
    );
});
