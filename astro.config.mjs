import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Moments',
      social: {
        github: 'https://github.com/wjknnn',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Example Guide',
              items: [
                {
                  label: 'Example Guide',
                  link: '/guides/example/',
                },
              ],
            },
          ],
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference',
          },
        },
      ],
      customCss: [
        './src/tailwind.css',
        './src/styles/custom.css',
        './src/styles/customMD.css',
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
