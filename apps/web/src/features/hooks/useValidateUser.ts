import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface IValidateOrganizer {
  roleId: number | undefined;
  verified: boolean | undefined;
  authLoaded: boolean;
}

const useValidateUser = ({ roleId, verified, authLoaded }: IValidateOrganizer) => {
  const router = useRouter();

  useEffect(() => {
    // Only perform the redirect if the auth data is loaded
    if (authLoaded) {
      if (!verified || roleId !==2) {
        router.push('/home');
      }
    }
  }, [roleId, verified, authLoaded, router]);
};

export default useValidateUser;
