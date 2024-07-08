<script setup lang="ts">
const props = defineProps({
    currentPage: {
        type: Number,
        default: 1,
    },
    totalItems: {
        type: Number,
        required: true,
    },
    itemsPerPage: {
        type: Number,
        default: 10,
    },
});

const emit = defineEmits(['update:currentPage']);

const startIndex = computed(() => (props.currentPage - 1) * props.itemsPerPage + 1);
const endIndex = computed(() => Math.min(props.currentPage * props.itemsPerPage, props.totalItems));
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));
const pages = computed(() => {
    const pageArray = [];
    for (let i = 1; i <= totalPages.value; i++) {
        pageArray.push(i);
    }
    return pageArray;
});

const prevPage = () => {
    if (props.currentPage > 1) {
        emit('update:currentPage', props.currentPage - 1);
    }
};

const nextPage = () => {
    if (props.currentPage < totalPages.value) {
        emit('update:currentPage', props.currentPage + 1);
    }
};

const goToPage = (page?: any) => {
    emit('update:currentPage', page);
};
</script>

<template>
    <div class="flex items-center justify-between border border-gray-200 bg-white px-4 py-3 sm:px-6 w-3/4 rounded-2xl">
        <div class="flex flex-1 justify-between sm:hidden">
            <button
                @click="prevPage"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
            </button>
            <button
                @click="nextPage"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
            </button>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium">{{ startIndex }}</span>
                    to
                    <span class="font-medium">{{ endIndex }}</span>
                    of
                    <span class="font-medium">{{ totalItems }}</span>
                    results
                </p>
            </div>
            <div>
                <nav
                    class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination">
                    <button
                        @click="prevPage"
                        class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">Previous</span>
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                fill-rule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button
                        v-for="page in pages"
                        :key="page"
                        @click="goToPage(page)"
                        :class="{ 'z-10 bg-purple-500 text-white': page === currentPage, 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50': page !== currentPage }"
                        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0">
                        {{ page }}
                    </button>
                    <button
                        @click="nextPage"
                        class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span class="sr-only">Next</span>
                        <svg
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                fill-rule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
