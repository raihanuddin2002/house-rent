import { Id, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export type ToastType = 'success' | 'warn' | 'error' | 'info';

class Toaster {
    toastId = '';

    toast({ type, message }: { type: ToastType, message: string }): string {
        let toastId = toast[type](message);
        return this.toastIdConverter(toastId);
    }

    dismiss(toastId: string, delay?: number): void {
        setTimeout(() => toast.dismiss(toastId), delay || 0);
    }

    dismissAll(delay?: number): void {
        setTimeout(() => toast.dismiss(), delay || 0);
    }

    loading(text: string): string {
        let toastId = toast.loading(text);
        return this.toastIdConverter(toastId);
    }

    update({ id, message, type, isLoading }: { id: string, message: string, type: ToastType, isLoading: boolean }): void {
        if (type === 'warn') return;
        toast.update(id, { render: message, type, isLoading });
    }
    setToastId(id: string) {
        this.toastId = id
    }
    toastIdConverter(toastId: Id): string {
        if (typeof (toastId) === "number") return toastId.toString();
        return toastId;
    }
}

const toastify = new Toaster();

export default toastify;
