'use client';

import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axiosInstances';

interface FetchEventsParams {
  genreId?: number;
  eventId?: number;
  regionId?: number;
  result?: number; 
}

export const useGetEvents = ({ genreId, eventId, regionId, result }: FetchEventsParams) => {
    const fetchEvents = async () => {
        const params = new URLSearchParams();
        if (genreId) params.append('genreId', genreId.toString());
        if (eventId) params.append('eventId', eventId.toString());
        if (regionId) params.append('regionId', regionId.toString());
        if (result) params.append('result', result.toString());

        const response = await axiosInstance.get(`/events?${params.toString()}`);
        console.log(response);
        return response.data.data.events;
    };

    return useQuery({
        queryKey: ['events', genreId, eventId, regionId, result], 
        queryFn: fetchEvents
    });
};
