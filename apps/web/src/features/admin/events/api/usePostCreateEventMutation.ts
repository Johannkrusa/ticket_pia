import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axiosInstances';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const usePostCreateEventMutation = () => {
  const router = useRouter();
  const { mutate: mutationCreateEvent, isPending } = useMutation({
    mutationFn: async ({ fd }: any) => {
      const token = axiosInstance.interceptors.request;

      console.log({fd});

      return await axiosInstance.post('/events', fd, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    onSuccess: () => {
      toast.success('Event creation successful');
      router.push('/home');
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

