import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axiosInstances';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const usePostCreateOrganizerMutation = () => {
  const router = useRouter()
  const { mutate: mutationCreateOrganizer, isPending } = useMutation({
    mutationFn: async ({
      email,
      organizer_name,
      phone_number,
      organizer_email,
    }: any) => {
      const token = axiosInstance.interceptors.request;
      return await axiosInstance.post(
        '/register/organizer',
        {
          email,
          organizer_name,
          phone_number,
          organizer_email,
        }
      );
    },
    onSuccess: (response) => {
      toast.success('Registration successful');
      router.push('/')
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'Registration failed';
      toast.error(errorMessage);
    },
  });
  return {
    mutationCreateOrganizer,
    isPending,
  };
};
