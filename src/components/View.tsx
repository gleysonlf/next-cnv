import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import { Footer, Header, Sidebar } from '@/components/layout';

import { RCProps } from '@/types';

type Props = RCProps<
  Partial<{
    title?: string;
  }>
>;

export const View = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className='flex overflow-x-hidden text-gray-700'>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <div className='flex flex-1 flex-col'>
        <Header onOpenSidebar={onOpen} />
        <main
          className={clsxm(
            'min-h-[calc(100vh-60px)]',
            ' flex flex-1 flex-col',
            "bg-no-repeat bg-bottom bg-[url('/img/hero.svg')]"
          )}
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
