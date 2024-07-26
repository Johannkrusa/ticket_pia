import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axiosInstances';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const usePostCreateUserMutation = () => {
  const router = useRouter()
  const { mutate: mutationCreateUser, isPending } = useMutation({
    mutationFn: async ({
      email,
      password,
      first_name,
      last_name,
      gender,
      birthdate: { year, month, day },
      phone_number,
      email_notification
    }: any) => {
      return await axiosInstance.post(
        '/register/user',
        {
          email,
          password,
          first_name,
          last_name,
          gender,
          birthdate: {
            year,
            month,
            day,
          },
          phone_number,
        }
      );
    },
    onSuccess: (response) => {
      toast.success('Registration successful');
      const token = response.data.data.token;
      router.push(`/authenticate/verify?token=${token}`);
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || 'Registration failed';
      toast.error(errorMessage);
    },
  });
  return {
    mutationCreateUser,
    isPending,
  };
};
