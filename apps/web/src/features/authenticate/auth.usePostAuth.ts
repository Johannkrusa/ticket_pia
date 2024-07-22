'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { axiosInstance } from '../../utils/axiosInstances';
import { IAuth } from './auth.types';
import { useDispatch } from 'react-redux';
import { setAuth } from '@/redux/slices/auth.slice';

export const usePostAuthLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate: mutationAuth, isPending } = useMutation({
    mutationFn: async ({ email, password}: IAuth) => {
      console.log(email, password);
      return await axiosInstance.post('/auth', {
        email,
        password,
      });
    },
    onSuccess: (response, {keep_login}) => {
      toast.success(response.data.message);
      dispatch(setAuth(response.data.data));

      // Set token to local storage for keep login
      if (keep_login) {
        localStorage.setItem('tkn', response.data.data.token);
      }

      router.push('/');
    },
    onError: (error: any) => {
      if (error.response) {
        console.log(error);
        toast.error(error);
      }
    },
  });

  return {
    mutationAuth,
    isPending,
  };
};
