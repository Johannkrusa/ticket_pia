import { usePostAuthLogin } from "../api/usePostAuthMutation";
export const usePostAuthHooks = () => {
  const { mutationAuthLogin, isPending } = usePostAuthLogin();

  return {
    mutationAuthLogin, isPending
  };
};
