'use client';

import { ReactNode, FC, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setAuth } from '@/redux/slices/auth.slice';
import { axiosInstance } from '@/utils/axiosInstances';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

interface Props {
  children: ReactNode;
}

const AuthProvider: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  const { mutate: mutationKeepAuth } = useMutation({
    mutationFn: async () => {
      const token = axiosInstance.interceptors.request;
      if (!token) {
        throw new Error('No token found');
      }
      return await axiosInstance.get('/auth', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (response) => {
      dispatch(setAuth(response.data.data));
    },
    onError: (error) => {
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            localStorage.removeItem('tkn');
            console.log('Removed token due to 401 Unauthorized');
          }
        }
      console.log(error);
    },
  });

  useEffect(() => {
    mutationKeepAuth();
  }, [mutationKeepAuth]);

  return <>{children}</>;
};

export default AuthProvider;
