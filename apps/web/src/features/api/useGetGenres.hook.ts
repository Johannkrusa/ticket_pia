'use client';

import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axiosInstances';

export const useGetGenre = () => {
    const fetchGenres = async () => {
        const response = await axiosInstance.get('/genres');
        console.log(response)
        return response.data.data.genres;
    };

    return useQuery({
        queryKey: ['genres'],
        queryFn: fetchGenres
    });
};