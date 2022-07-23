import { InstagramLogo, Notebook, YoutubeLogo } from 'phosphor-react';

import { NextLink } from '@/components/NextLink';

export const Footer = () => (
  <footer className='relative bg-slate-200 pt-8 pb-6'>
    <div
      className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'
      style={{ transform: 'translateZ(0)' }}
    >
      <svg
        className='absolute bottom-0 overflow-hidden'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        version='1.1'
        viewBox='0 0 2560 100'
        x='0'
        y='0'
      >
        <polygon
          className='text-slate-200 fill-current'
          points='2560 0 2560 100 0 100'
        ></polygon>
      </svg>
    </div>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap text-center text-center md:text-left'>
        <div className='w-full md:w-1/2 px-4 text-slate-600'>
          <h4 className='text-3xl font-semibold'>Comunidade Nova Vida</h4>
          <h5 className='text-md mt-0 mb-2'>
            Somos uma igreja cristã evangélica, que tem como fundamento o amor
            de Deus. Acreditamos que através deste há mudança verdadeira na
            sociedade.
          </h5>
          <div className='my-6 lg:my-0 flex justify-center md:justify-start'>
            <NextLink
              title='Nosso Insta'
              uri='https://www.instagram.com/comunidadenovavida.cnv/'
              typeButton='rounded'
            >
              <InstagramLogo size={24} />
            </NextLink>
            <NextLink
              title='Nosso Canal'
              uri='https://www.youtube.com/c/comunidadenovavida.cnv'
              typeButton='rounded'
            >
              <YoutubeLogo size={24} />
            </NextLink>
            <NextLink title='Nosso blog' uri='/blog' typeButton='rounded'>
              <Notebook size={24} />
            </NextLink>
          </div>
        </div>
        <div className='w-full md:w-1/2 px-4  md:pl-16'>
          <div className='flex flex-wrap items-top mb-6'>
            <div className='w-1/2 px-4 text-left'>
              <span className='block uppercase text-slate-500 text-sm font-semibold mb-2'>
                Links Úteis
              </span>
              <ul className='list-unstyled'>
                <li>
                  <NextLink
                    title='Leia a Bíblia Sagrada'
                    uri='https://my.bible.com/pt/bible/1930/MRK.1.NVT'
                    className='block pb-2 text-sm hover:font-semibold'
                  >
                    Biblia Online
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    title='Acesse nosso credo'
                    uri='/credo'
                    className='block pb-2 text-sm hover:font-semibold'
                  >
                    Credo
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    title='Um canal direto com nossos pastores'
                    uri='mailto:contato@comunidadenovavida.org?subject=Contato%20Pastor'
                    className='block pb-2 text-sm hover:font-semibold'
                  >
                    Fale com o Pastor
                  </NextLink>
                </li>
              </ul>
            </div>
            <div className='w-1/2 px-4 text-right'>
              <span className='block uppercase text-slate-500 text-sm font-semibold mb-2'>
                Outros
              </span>
              <ul className='list-unstyled'>
                <li>
                  <NextLink
                    title='Acesse nosso termo de privacidade'
                    uri='https://github.com/gleysonlf/cnv'
                    className='block pb-2 text-sm hover:font-semibold'
                  >
                    Privacidade
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    title='Acesse nosso credo'
                    uri='https://github.com/gleysonlf/cnv'
                    className='block pb-2 text-sm hover:font-semibold'
                  >
                    Repositório{' '}
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    title='Solicite suporte'
                    uri='mailto:contato@comunidadenovavida.org?subject=Suporte'
                    className='block pb-2 text-sm hover:font-semibold'
                  >
                    Suporte
                  </NextLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className='my-6 border-slate-300' />
      <div className='flex flex-wrap items-center md:justify-between justify-center'>
        <div className='w-full px-4 mx-auto text-center'>
          <div className='text-sm text-slate-500 font-semibold py-1'>
            Copyright ©{' '}
            <NextLink
              uri='/'
              title='Comunidade Nova Vida'
              className='font-bold'
            >
              CNV
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
