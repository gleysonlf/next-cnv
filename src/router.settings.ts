import { HouseLine, InstagramLogo, YoutubeLogo } from 'phosphor-react';

export const routes = {
  HOME: {
    path: '/',
    name: 'Home',
    description: 'Inicío',
    icon: HouseLine,
  },
  INSTA: {
    path: 'https://www.instagram.com/comunidadenovavida.cnv',
    name: 'Instagram',
    description: 'Nosso Instagram',
    icon: InstagramLogo,
  },
  YOUTUBE: {
    path: 'https://www.youtube.com/comunidadenovavida.cnv',
    name: 'Youtube',
    description: 'Nosso Canal',
    icon: YoutubeLogo,
  },
};
