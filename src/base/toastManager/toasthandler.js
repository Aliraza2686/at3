import toast from "react-hot-toast"

export const toastHandler = (message, type) => {
    if(type === "success") {
        toast.success(message)

    }else {
        toast.error(message)
    }
} 