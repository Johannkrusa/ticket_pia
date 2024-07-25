import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface IValidateOrganizer {
  roleId: number | undefined;
  verified: boolean | undefined;
  authLoaded: boolean;
}

const useValidateOrganizer = ({ roleId, verified, authLoaded }: IValidateOrganizer) => {
  const router = useRouter();

  useEffect(() => {
    // Only perform the redirect if the auth data is loaded
    if (authLoaded) {
      if (!verified || roleId === 3) {
        router.push('/');
      }
    }
  }, [roleId, verified, authLoaded, router]);
};

export default useValidateOrganizer;
