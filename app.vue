<script setup lang="ts">
useHead({
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
