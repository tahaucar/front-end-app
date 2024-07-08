<script setup lang="ts">
import SearchBar from '~/components/SearchBar.vue';
import Pagination from '~/components/Pagination.vue';
import { resolveTitleTemplate } from '@unhead/shared';

const jobListStore = useJobListStore();
const jobList = ref(null);
const { $toast } = useNuxtApp();
onMounted(async () => {
    await getData();
});

const getData = async () => {
    await jobListStore.getJobList();
    jobList.value = jobListStore.jobList;
};

const handleDataFromChild = (data?: String) => {
    currentPage.value = 1;
    itemsPerPage.value = 10;
    jobList.value = jobListStore.jobList.filter((item?: any) => item.positionName.includes(data));
    if (jobList.value.length < 1) {
        $toast('No job positions found.', 3000, 'bg-red-500 text-white');
    }
};

const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalItems = computed(() => jobList.value?.length);

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return jobList.value?.slice(start, end);
});

const handlePageChange = (newPage?: any) => {
    currentPage.value = newPage;
};
</script>

<template>
    <div class="lg:w-1/2 md:w-1/2 lg:mx-auto md:mx-auto">
        <SearchBar @send-data="handleDataFromChild"></SearchBar>
        <div
            v-for="job in paginatedData"
            :key="job.jobId"
            class="group relative mb-4">
            <NuxtLink :to="`/joblist/${job.jobId}`">
                <Card :item="job">
                    <template v-slot:img>
                        <img
                            :src="job.imageUrl"
                            alt=""
                            class="rounded-2xl" />
                    </template>
                    <template v-slot:imgTitle>
                        <p class="text-gray-600 text-xs mt-1">{{ job.durationDayText }}</p>
                    </template>
                    <template v-slot:title>
                        <p class="lg:text-md font-semibold text-gray-900">
                            {{ job.positionName }}
                        </p>
                    </template>
                    <template v-slot:subTitle>
                        <p class="text-sm font-medium text-gray-600 lg:mt-1">{{ job.companyName }}</p>
                    </template>
                    <template v-slot:description>
                        <p class="text-xs font-light text-gray-600 lg:mt-2">{{ job.cityName }}</p>
                    </template>
                    <template v-slot:status>
                        <p class="text-gray-400 text-xs">{{ job.distance }}</p>
                    </template>
                </Card>
            </NuxtLink>
        </div>
    </div>
    <div class="flex justify-center">
        <Pagination
            :current-page="currentPage"
            :total-items="totalItems"
            :items-per-page="itemsPerPage"
            @update:currentPage="handlePageChange"></Pagination>
    </div>
</template>

<style scoped></style>
