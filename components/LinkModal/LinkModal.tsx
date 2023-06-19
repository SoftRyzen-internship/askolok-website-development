import { FC, useState } from 'react';
import Link from 'next/link';
import Modal from '../modal/Modal';

import { IModalsLinkProps } from './LinkModal.props';

const LinkModal: FC<IModalsLinkProps> = ({ children, childrenName, text }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <Link
        href="/"
        scroll={false}
        className="text-xs text-white opacity-60 transition-all duration-300 hover:underline hover:opacity-100 "
        onClick={() => setIsOpen(true)}
      >
        {text}
      </Link>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} childrenName={childrenName}>
        {children}
      </Modal>
    </div>
  );
};

export default LinkModal;
