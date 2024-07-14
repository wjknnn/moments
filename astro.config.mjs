import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://moments-omega.vercel.app',
  integrations: [
    starlight({
      title: 'Moments',
      social: {
        github: 'https://github.com/wjknnn',
        linkedin:
          'https://www.linkedin.com/in/%EC%8A%B9%EC%9A%B0-%EC%B5%9C-a33a662a3',
      },
      sidebar: [
        {
          label: 'Blog',
          items: [
            {
              label: '블로그 소개',
              link: '/blog',
              attrs: {
                style: 'display: none',
              },
            },
            {
              label: '일상적인',
              autogenerate: {
                directory: 'blog/daily',
              },
            },
            {
              label: '기술적인',
              autogenerate: {
                directory: 'blog/tech',
              },
            },
          ],
        },
        {
          label: 'TIL',
          items: [
            {
              label: 'TIL 소개',
              link: '/til',
              attrs: {
                style: 'display: none',
              },
            },
            {
              label: 'Javascript',
              autogenerate: {
                directory: 'til/javascript',
              },
            },
            {
              label: 'Typescript',
              autogenerate: {
                directory: 'til/typescript',
              },
            },
            {
              label: 'React.js',
              autogenerate: {
                directory: 'til/reactjs',
              },
            },
            {
              label: 'Next.js',
              autogenerate: {
                directory: 'til/nextjs',
              },
            },
            {
              label: 'Supabase',
              autogenerate: {
                directory: 'til/supabase',
              },
            },
          ],
        },
      ],
      customCss: [
        './src/tailwind.css',
        './src/styles/custom.css',
        './src/styles/customMD.css',
      ],
      components: {
        PageTitle: './src/components/PageTitle.astro',
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
