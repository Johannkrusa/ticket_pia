'use client';

import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axiosInstances';

export const useGetRegion = () => {
    const fetchRegions = async () => {
        const response = await axiosInstance.get('/regions');
        console.log(response)
        return response.data.data.regions;
    };

    return useQuery({
        queryKey: ['regions'],
        queryFn: fetchRegions
    });
};