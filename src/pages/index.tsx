import {
  ArrowSquareOut,
  ChatsCircle,
  FacebookLogo,
  InstagramLogo,
  Target,
  TwitterLogo,
} from 'phosphor-react';

import clsxm from '@/lib/clsxm';

import { NextImage, NextLink } from '@/components';
import { View } from '@/components/View';

const HomePage = () => {
  return (
    <View>
      <div className='flex w-full h-full flex-col items-center justify-center'>
        <SectionTeam />
        <SectionAbout />
        <SectionContact />
      </div>
    </View>
  );
};

const SectionTeam = () => (
  <section className='pt-20 pb-48'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap justify-center text-center mb-24'>
        <div className='w-full lg:w-6/12 px-4'>
          <h2 className='text-4xl font-semibold'>Nossos Lideres</h2>
          <p className='text-lg leading-relaxed m-4 text-orange-500'>
            Nunca houve, nem nunca haverá, um líder maior e tão perfeito quanto
            o nosso Senhor. Apenas buscamos ser cada dia mais parecidos com Ele
            e fortalecer sua Igreja em Seu Caminho.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
          <div className='px-6 flex flex-col items-center'>
            <NextImage
              alt='Foto de perfil para Levi Queiros'
              src='/img/members/levi.jpg'
              imgClassName='shadow-lg rounded-full mx-auto max-w-120-px'
              height={160}
              width={160}
            />
            <div className='pt-6 text-center'>
              <h5 className='text-xl font-bold'>Levi Queiroz</h5>
              <p className='mt-1 text-sm text-slate-400 uppercase font-semibold'>
                Pastor
              </p>
              <div className='mt-2 flex items-center justify-center'>
                <NextLink
                  title='@leviqueiroz_'
                  uri='https://twitter.com/leviqueiroz_'
                  className={clsxm(
                    'w-10 h-10 m-1',
                    'bg-gray-200 text-orange-500',
                    'flex items-center justify-center',
                    'rounded-full outline-none focus:outline-none',
                    'hover:bg-sky-400 hover:text-white'
                  )}
                >
                  <TwitterLogo size={26} />
                </NextLink>
                <NextLink
                  title='@levy.queiroz'
                  uri='https://www.facebook.com/levy.queiroz'
                  className={clsxm(
                    'w-10 h-10 m-1',
                    'bg-gray-200 text-orange-500',
                    'flex items-center justify-center',
                    'rounded-full outline-none focus:outline-none',
                    'hover:bg-sky-600 hover:text-white'
                  )}
                >
                  <FacebookLogo size={32} />
                </NextLink>
                <NextLink
                  title='@leviqueiroz_1'
                  uri='https://www.instagram.com/leviqueiroz_1'
                  className={clsxm(
                    'w-10 h-10 m-1',
                    'bg-gray-200 text-orange-500',
                    'flex items-center justify-center',
                    'rounded-full outline-none focus:outline-none',
                    'hover:bg-slate-700 hover:text-white'
                  )}
                >
                  <InstagramLogo size={32} />
                </NextLink>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
          <div className='px-6 flex flex-col items-center'>
            <NextImage
              alt='Foto de perfil para Vitória Alves'
              src='/img/members/vitoria.jpg'
              imgClassName='shadow-lg rounded-full mx-auto max-w-120-px'
              height={160}
              width={160}
            />
            <div className='pt-6 text-center'>
              <h5 className='text-xl font-bold'>Vitória Alves</h5>
              <p className='mt-1 text-sm text-slate-400 uppercase font-semibold'>
                Missionária
              </p>
              <div className='mt-2 flex items-center justify-center'>
                <NextLink
                  title='@vitoriaalvesvih'
                  uri='https://twitter.com/vitoriaalvesvih'
                  className={clsxm(
                    'w-10 h-10 m-1',
                    'bg-gray-200 text-orange-500',
                    'flex items-center justify-center',
                    'rounded-full outline-none focus:outline-none',
                    'hover:bg-sky-400 hover:text-white'
                  )}
                >
                  <TwitterLogo size={32} />
                </NextLink>
                <NextLink
                  title='@vitoria.alves.1088'
                  uri='https://www.facebook.com/vitoria.alves.1088'
                  className={clsxm(
                    'w-10 h-10 m-1',
                    'bg-gray-200 text-orange-500',
                    'flex items-center justify-center',
                    'rounded-full outline-none focus:outline-none',
                    'hover:bg-sky-600 hover:text-white'
                  )}
                >
                  <FacebookLogo size={32} />
                </NextLink>
                <NextLink
                  title='@vitoriaalves27_'
                  uri='https://www.instagram.com/vitoriaalves27_'
                  className={clsxm(
                    'w-10 h-10 m-1',
                    'bg-gray-200 text-orange-500',
                    'flex items-center justify-center',
                    'rounded-full outline-none focus:outline-none',
                    'hover:bg-slate-700 hover:text-white'
                  )}
                >
                  <InstagramLogo size={32} />
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionAbout = () => (
  <section className='w-full py-20 bg-slate-600 overflow-hidden'>
    <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
      <div className='flex flex-wrap text-center justify-center'>
        <div className='w-full lg:w-6/12 px-4'>
          <h2 className='text-4xl font-semibold text-white'>
            Comunidade Nova Vida
          </h2>
          <p className='text-lg leading-relaxed mt-4 mb-4 text-slate-400'>
            Este trabalho nasceu com a benção de Deus através da{' '}
            <NextLink
              uri='https://www.instagram.com/ipnvfortaleza/'
              title='Igreja Pentecostal Nova Vida'
              className='font-semibold'
            >
              IPNV Fortaleza
            </NextLink>
            , nossa igreja materna que se expandiu para alcançar mais vidas para
            Cristo.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap mt-12 justify-center'>
        <div className='w-full lg:w-3/12 px-4 text-center'>
          <div
            className={clsxm(
              'text-slate-800 p-3 w-16 h-16',
              'shadow-lg rounded-full bg-white',
              'inline-flex items-center justify-center'
            )}
          >
            <Target size={36} />
          </div>
          <h6 className='text-xl mt-5 font-semibold text-white'>Anunciar</h6>
          <p className='mt-2 mb-4 text-slate-400'>
            Não para nós mesmos, mas vidas para o Reino. Alcançar os filhos
            perdidos ao redor do mundo.
          </p>
        </div>
        <div className='w-full lg:w-3/12 px-4 text-center'>
          <div
            className={clsxm(
              'text-slate-800 p-3 w-16 h-16',
              'shadow-lg rounded-full bg-white',
              'inline-flex items-center justify-center'
            )}
          >
            <ChatsCircle size={36} />
          </div>
          <h5 className='text-xl mt-5 font-semibold text-white'>Discipular</h5>
          <p className='mt-2 mb-4 text-slate-400'>
            A fim de que todo o Corpo tenha capacidade e pleno preparo para
            realizar todas as boas ações.
          </p>
        </div>
        <div className='w-full lg:w-3/12 px-4 text-center'>
          <div
            className={clsxm(
              'text-slate-800 p-3 w-16 h-16',
              'shadow-lg rounded-full bg-white',
              'inline-flex items-center justify-center'
            )}
          >
            <ArrowSquareOut size={36} />
          </div>
          <h5 className='text-xl mt-5 font-semibold text-white'>Enviar</h5>
          <p className='mt-2 mb-4 text-slate-400'>
            Enviar é mais que ir para outra nação, é manifestar a luz de Deus em
            todos os lugares.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SectionContact = () => (
  <section className='w-full pb-16 bg-slate-200 relative pt-32'>
    <div
      className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20'
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

    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-4 px-4 md:py-16/px-12 relative z-10'>
        <div className='w-full text-center lg:w-8/12'>
          <div className='relative flex flex-col min-w-0 break-words w-full my-6 shadow-lg rounded-lg bg-slate-200'>
            <div className='flex-auto p-5 lg:p-10'>
              <h4 className='text-2xl font-semibold'>
                Gostaria de nos conhecer melhor?
              </h4>
              <p className='leading-relaxed mt-1 mb-4 text-slate-500'>
                Preencha o formulário e nós entramos em contato.
              </p>
              <div className='relative w-full mb-3 mt-8'>
                <label
                  className='block uppercase text-slate-600 text-xs font-bold mb-2'
                  htmlFor='full-name'
                >
                  Nome
                </label>
                <input
                  type='text'
                  placeholder='Como prefere ser chamado(a)'
                  className={clsxm(
                    'w-full border-0 px-3 py-3  rounded text-sm shadow',
                    'bg-white placeholder-slate-500 text-slate-600',
                    'ease-linear transition-all duration-150',
                    'focus:outline-none focus:ring focus:ring-orange-300'
                  )}
                />
              </div>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-slate-600 text-xs font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Qual seu e-mail pra contato'
                  className={clsxm(
                    'w-full border-0 px-3 py-3  rounded text-sm shadow',
                    'bg-white placeholder-slate-500 text-slate-600',
                    'ease-linear transition-all duration-150',
                    'focus:outline-none focus:ring focus:ring-orange-300'
                  )}
                />
              </div>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-slate-600 text-xs font-bold mb-2'
                  htmlFor='message'
                >
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  cols={80}
                  placeholder='Escreva aqui sua mensagem...'
                  className={clsxm(
                    'w-full border-0 px-3 py-3  rounded text-sm shadow',
                    'bg-white placeholder-slate-500 text-slate-600',
                    'ease-linear transition-all duration-150',
                    'focus:outline-none focus:ring focus:ring-orange-300'
                  )}
                />
              </div>
              <div className='text-center mt-6'>
                <button className='bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;
