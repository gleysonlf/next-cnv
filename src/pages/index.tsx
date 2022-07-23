import { ArrowSquareOut, ChatsCircle, Target } from 'phosphor-react';

import clsxm from '@/lib/clsxm';

import { NextLink } from '@/components/NextLink';
import { View } from '@/components/View';

const HomePage = () => {
  return (
    <View>
      <div className='flex w-full h-full flex-col items-center justify-center'>
        <SectionAbout />
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

export default HomePage;
