<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const menuOpen = ref(false);
const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Job List', link: '/joblist' },
];
function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}
const router = useRouter();
const isActiveRoute = (route?: any) => {
    return router.currentRoute.value.path === route;
};
</script>
<template>
    <header class="bg-white lg:mx-40">
        <nav
            class="flex max-w-7xl items-center p-6 lg:px-3 lg:gap-x-8"
            aria-label="Global">
            <div class="flex lg:flex">
                <NuxtLink
                    to="/"
                    class="-m-1.5 p-1.5">
                    <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Logo" />
                </NuxtLink>
            </div>
            <div class="hidden lg:flex lg:gap-x-8 items-center">
                <NuxtLink
                    v-for="(item, index) in menuItems"
                    :key="index"
                    :to="item.link"
                    :class="{ 'underline text-purple-700 font-bold': isActiveRoute(item.link) }"
                    class="text-sm font-semibold leading-6 text-purple-500 hover:underline hover:text-purple-700 hover:font-bold">
                    {{ item.label }}
                </NuxtLink>
            </div>
            <div class="lg:hidden ml-auto">
                <button
                    @click="toggleMenu"
                    type="button"
                    class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Toggle menu</span>
                    <FontAwesomeIcon
                        :icon="menuOpen ? 'times' : 'bars'"
                        class="h-6 w-6" />
                </button>
            </div>
            <div class="hidden lg:flex ml-auto">
                <img
                    class="h-10 rounded-full w-auto"
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Logo" />
            </div>
        </nav>
        <div
            v-if="menuOpen"
            class="lg:hidden"
            role="dialog"
            aria-modal="true">
            <div class="fixed inset-0 z-10"></div>
            <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
                <div class="flex items-center justify-between">
                    <NuxtLink
                        to="/"
                        class="-m-1.5 p-1.5">
                        <img
                            class="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Logo" />
                    </NuxtLink>
                    <button
                        @click="toggleMenu"
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Close menu</span>
                        <FontAwesomeIcon
                            :icon="menuOpen ? 'times' : 'bars'"
                            class="h-6 w-6" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <NuxtLink
                                v-for="(item, index) in menuItems"
                                :key="index"
                                :to="item.link"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-purple-500 hover:underline hover:text-purple-700 hover:font-bold"
                                @click="toggleMenu">
                                {{ item.label }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
