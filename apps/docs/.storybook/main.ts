const path = require('path');
import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react-vite',
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: {
        ...config.define,
        'process.env': {},
      },
      resolve: {
        alias: [
          {
            find: 'data-table',
            replacement: path.resolve(__dirname, '../../../packages/data-table/'),
          },
          {
            find: 'msw-handlers',
            replacement: path.resolve(__dirname, '../../../packages/msw-handlers/'),
          },
        ],
      },
    };
  },
};
export default config;
