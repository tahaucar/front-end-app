<script setup lang="ts">
defineProps({
    item: {
        type: Object,
        default: {},
    },
    cardClass: {
        type: String,
        default: 'block border border-gray-500 rounded-2xl p-3 bg-white w-full hover:bg-gray-200 transition-colors duration-200',
    },
    imgClass: {
        type: String,
        default: 'w-20 text-center',
    },
    titleClass: {
        type: String,
        default: 'leading-8',
    },
    statusClass: {
        type: String,
        default: 'text-sm ml-auto md:mt-auto lg:mt-auto',
    },
});
</script>

<template>
    <div :class="cardClass">
        <div class="relative gap-x-4 lg:flex md:flex grid grid-cols-1 grid-flow-row auto-rows-auto">
            <div :class="imgClass">
                <slot name="img"></slot>
                <slot name="imgTitle"></slot>
            </div>
            <div :class="titleClass">
                <slot name="title"></slot>
                <slot name="subTitle"></slot>
                <slot name="description"></slot>
            </div>
            <div :class="statusClass">
                <slot name="status"></slot>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
