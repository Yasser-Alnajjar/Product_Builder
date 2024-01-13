import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import Button from "../Button";

type TProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  title?: string;
  children: ReactNode;
};

export default function Modal({ isOpen, setIsOpen, title, children }: TProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                  )}
                  {/* <button
                    onClick={() => setIsOpen(false)}
                    className="border text-sm font-medium bg-red-700 text-gray-300 hover:bg-red-900 hover:text-gray-100  transition ease-in-out duration-200 h-[25px] w-[25px] rounded-full "
                  >
                    X
                  </button> */}
                  <Button
                    bg="bg-red-500"
                    outline="outline-red-500"
                    onClick={() => setIsOpen(false)}
                    className="w-[25px] h-[25px] px-0 py-0 rounded-xl hover:bg-red-800 hover:outline-red-800"
                  >
                    X
                  </Button>
                </div>
                <div className="mt-2">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
