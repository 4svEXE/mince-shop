import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'mince-shop',
  distFolder: './dist/mince-shop',
  outDir: './dist/static',
  defaultPostRenderers: []
};
