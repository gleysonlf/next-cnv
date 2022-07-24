import clsxm from '@/lib/clsxm';

import { NextLink } from '@/components/NextLink';

import { routes } from '@/router.settings';

export const NavBar = () => {
  return (
    <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
      {Object.values(routes).map((item) => (
        <li
          key={item.path}
          className={clsxm(
            'group list-none text-xs',

            'py-4 px-8',
            'transition-all ease-in-out duration-300',
            'border-b-2 border-transparent',
            'hover:text-orange-300 hover:border-orange-600'
          )}
        >
          <NextLink
            uri={item.path}
            title={item.description}
            className='flex items-center justify-center flex-col'
          >
            <item.icon size={32} />
            {item.name}
          </NextLink>
        </li>
      ))}
    </ul>
  );
};
