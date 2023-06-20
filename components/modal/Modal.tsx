import { FC, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import cn from 'classnames';

import CloseSvg from '@/public/images/modal/close.svg';

import { IModalsProps } from './Modal.props';

const Modal: FC<IModalsProps> = ({ isOpen, setIsOpen, children, childrenName }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  flex items-center justify-center p-5 md:p-8">
            <Dialog.Panel
              className={cn(
                'relative flex flex-col rounded-xl bg-white px-5 py-10 md:gap-2 md:px-8 md:py-[60px] ',
                {
                  ['w-full max-w-[444px]']: childrenName === 'Form',
                  ['modal max-h-full w-full overflow-y-scroll scroll-smooth']:
                    childrenName === 'Policy' || childrenName === 'PublicContract',
                }
              )}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-5 top-5 text-blackBg duration-300 hover:text-[#1729B2] md:right-7 md:top-7"
              >
                <CloseSvg
                  height={24}
                  width={24}
                  aria-label="крестик закрівающий модальное окно"
                  className="text-current"
                />
              </button>
              {children}
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
