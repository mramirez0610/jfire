// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), icon()],
  adapter: netlify()
});