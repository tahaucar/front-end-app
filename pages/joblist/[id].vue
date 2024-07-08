<script setup lang="ts">
const jobListStore = useJobListStore();
const jobDetail = ref({});
const route = useRoute();
onMounted(async () => {
    await jobListStore.getJobById(route.params.id);
    jobDetail.value = jobListStore.jobDetail;
});
</script>

<template>
    <div class="w-full lg:mx-auto">
        <div
            class="group relative mb-4"
            v-if="jobListStore.jobDetail">
            <Card
                :item="jobDetail"
                :img-class="'lg:w-1/2 md:w-1/2 w-full lg:mb-0 md:mb-0 mb-3'"
                :card-class="':lg:p-3 md:p-3 border border-gray-500 rounded-xl bg-white w-full transition-colors'"
                :title-class="'lg:w-1/2 md:w-1/2 w-full p-2 lg:p-0 md:p-0 '"
                :status-class="'text-sm lg:mt-auto md:mt-auto p-2 lg:p-0 md:p-0'">
                <template v-slot:img>
                    <img
                        :src="jobDetail.imageUrl"
                        alt=""
                        class="rounded-xl" />
                </template>
                <template v-slot:imgTitle>
                    <div class="flex p-2 lg:p-0 md:p-0 lg:mt-2 md:mt-2'">
                        <p class="text-gray-600 text-xs font-bold">{{ jobDetail?.countryName }}</p>
                        <p class="text-gray-600 text-xs font-bold mr-1">
                            {{ ' ( ' + jobDetail?.countryCode + ' ) ' }}
                        </p>
                    </div>
                </template>
                <template v-slot:title>
                    <p class="lg:text-lg font-semibold text-gray-900">
                        {{ jobDetail.positionName }}
                    </p>
                </template>
                <template v-slot:subTitle>
                    <p class="text-sm font-medium text-gray-600 lg:mt-1">{{ jobDetail.companyName }}</p>
                </template>
                <template v-slot:description>
                    <p class="text-xs font-light text-gray-600 lg:mt-2">{{ jobDetail.description }}</p>
                    <p class="text-xs font-light text-gray-600 lg:mt-2">{{ jobDetail.address }}</p>
                    <p class="text-xs font-light text-gray-600 lg:mt-2">{{ jobDetail.postalCode }}</p>
                    <p class="text-xs font-light text-gray-600 lg:mt-2">{{ jobDetail.number }}</p>
                </template>
                <template v-slot:status>
                    <p class="text-gray-400 text-xs text-nowrap">{{ jobDetail.status ? 'New' : 'Old' }}</p>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped></style>
