import { usePostCreateOrganizerMutation } from "../api/usePostCreateOrganizerMutation"
export const usePostCreateOrganizer = () => {
    const { mutationCreateOrganizer, isPending } = usePostCreateOrganizerMutation()
    return {
        mutationCreateOrganizer, isPending
    }
}