// .storybook/config.js
import { configure } from '@storybook/vue'
import '@storybook/addon-console'

import '@/assets/style/main.scss'

function requireAll(ctx) {
  return ctx.keys().map(ctx)
}

function loadStories() {
  requireAll(require.context('../stories', true, /.story\.js?$/))
  requireAll(require.context('@', true, /.story\.js?$/))
}

configure(loadStories, module)
