import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axiosInstances';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const usePostCreateEventMutation = () => {
  const router = useRouter();
  const { mutate: mutationCreateEvent, isPending } = useMutation({
    mutationFn: async ({ formData }: any) => {
      const token = axiosInstance.interceptors.request;

      console.log(formData);

      return await axiosInstance.post('/events/create', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      toast.success('Event creation successful');
      router.push('/');
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || 'Event creation failed';
      toast.error(errorMessage);
    },
  });

  return {
    mutationCreateEvent,
    isPending,
  };
};
