import { usePostCreateUserMutation } from '../api/usePostCreateUserMutation';

export const usePostCreateUser = () => {
    const { mutationCreateUser, isPending } = usePostCreateUserMutation()
    return {
        mutationCreateUser, isPending
    }
}