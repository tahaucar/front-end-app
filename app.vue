<script setup lang="ts">
useHead({
    // or as a function
    titleTemplate: (page) => {
        return page ? `${page} - Page` : 'Job Project';
    },
});
</script>
<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
