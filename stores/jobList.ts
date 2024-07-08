import { defineStore } from 'pinia';
import axios from 'axios';

export const useJobListStore = defineStore('jobList', () => {
    const config = useRuntimeConfig();
    const jobList = ref();
    const setJobList = (data?: any) => (jobList.value = data);
    const getJobList = async () => {
        try {
            const res = await axios.get(`${config.public.apiBaseUrl}/joblist`);
            setJobList(res.data);
        } catch (error) {
            // console.log(error);
        }
    };

    const jobDetail = ref();
    const setJobDetail = (data?: any) => (jobDetail.value = data);

    const getJobById = async (id?: number) => {
        try {
            const res = await axios.get(`${config.public.apiBaseUrl}/joblist/${id}`);
            setJobDetail(res.data);
        } catch (error) {
            // console.log(error);
        }
    };

    return { jobList, getJobList, jobDetail, getJobById };
});
