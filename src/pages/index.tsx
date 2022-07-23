import { ArrowSquareOut, ChatsCircle, Target } from 'phosphor-react';

import clsxm from '@/lib/clsxm';

import { NextLink } from '@/components/NextLink';
import { View } from '@/components/View';

const HomePage = () => {
  return (
    <View>
      <div className='flex w-full h-full flex-col items-center justify-center'>
        <SectionAbout />
        <SectionContact />
      </div>
    </View>
  );
};

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
                  className='border-0 px-3 py-3 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  placeholder='Como prefere ser chamado(a)'
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
                  className='border-0 px-3 py-3 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  placeholder='Qual seu e-mail pra contato'
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
                  className='border-0 px-3 py-3 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                  placeholder='Escreva aqui sua mensagem...'
                />
              </div>
              <div className='text-center mt-6'>
                <button
                  className='bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                  type='button'
                >
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
