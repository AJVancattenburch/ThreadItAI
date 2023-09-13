import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#375d8d',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './myLogo.svg',
  fullDecal: './myLogo.svg',
});

export default state;