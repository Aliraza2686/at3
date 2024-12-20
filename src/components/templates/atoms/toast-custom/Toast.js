import { Transition } from '@headlessui/react';
import { CheckCircleIcon, XMarkIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useToast } from '../../../../context/ToastContext';

export default function Toast() {
  const { toast, showToast } = useToast();

  if (!toast.show) return null;

  // Icon and styling based on the type of toast
  const toastConfig = {
    success: {
      icon: <CheckCircleIcon className="h-6 w-6 text-green-400" />,
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
    },
    error: {
      icon: <ExclamationCircleIcon className="h-6 w-6 text-red-400" />,
      bgColor: 'bg-red-100',
      textColor: 'text-red-800',
    },
    info: {
      icon: <ExclamationCircleIcon className="h-6 w-6 text-blue-400" />,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
    },
  };

  const { icon, bgColor, textColor } = toastConfig[toast.type] || toastConfig.success;

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition show={toast.show}>
          <div
            className={`pointer-events-auto w-full !z-[999] max-w-sm overflow-hidden rounded-lg ${bgColor} shadow-lg ring-1 ring-black/5 transition-all`}
          >
            <div className="p-4">
              <div className="flex items-start">
                <div className="shrink-0">{icon}</div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className={`text-sm font-medium ${textColor}`}>{toast.message.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{toast.message.body}</p>
                </div>
                <div className="ml-4 flex shrink-0">
                  <button
                    type="button"
                    onClick={() => showToast('', '')} // Manually hide the toast on close
                    className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
