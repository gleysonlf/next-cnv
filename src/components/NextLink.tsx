import Link from 'next/link';

import clsxm from '@/lib/clsxm';

import { RCProps } from '@/types';

export type Props = RCProps<
  Partial<{
    uri: string;
    title: string;
    typeButton?: string;
  }>
>;

export const NextLink = ({
  uri,
  title,
  className,
  children,
  typeButton,
}: Props) => {
  const handleAsButton = (type?: string) => {
    if (!type) return '';
    switch (type) {
      case 'rounded':
        return 'bg-white text-slate-700 shadow-lg h-10 w-10 p-2 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2';
      default:
        return '';
    }
  };
  return (
    <Link href={uri || '#'}>
      <a
        title={title}
        className={clsxm(
          'hover:text-orange-500',
          handleAsButton(typeButton),
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
};
