import { List } from 'phosphor-react';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import { NextImage, NextLink } from '@/components';
import { NavBar } from '@/components/layout';

import { routes } from '@/router.settings';

export const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className='top-0 fixed z-50 w-full flex flex-wrap items-center justify-between h-20 px-8 py-0 navbar-expand-lg bg-white shadow'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <NextLink uri={routes.HOME.path}>
            <NextImage
              src='/img/logo.svg'
              alt='Logo CNV'
              width={120}
              height={60}
            />
          </NextLink>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
            title='Menu'
          >
            <List size={32} />
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
            (navbarOpen ? ' block' : ' hidden')
          }
          id='example-navbar-warning'
        >
          <NavBar />
          <NextLink
            uri='/auth/login'
            className={clsxm(
              'text-white ml-3 mb-3 bg-gray-700 active:bg-orange-800',
              'text-xs font-bold uppercase px-4 py-2 rounded shadow outline-none',
              'ease-linear transition-all duration-150',
              'hover:shadow-lg hover:text-gray-50 hover:bg-orange-500',
              'focus:outline-none lg:mr-1 lg:mb-0'
            )}
          >
            <i className='fas fa-sign-in-alt'></i> Entrar
          </NextLink>
        </div>
      </div>
    </header>
  );
};
