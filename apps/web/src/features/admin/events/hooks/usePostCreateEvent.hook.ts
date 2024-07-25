import { usePostCreateEventMutation } from "../api/usePostCreateEventMutation"
export const usePostCreateEvent = () => {
    const { mutationCreateEvent, isPending } = usePostCreateEventMutation()
    return {
        mutationCreateEvent, isPending
    }
}