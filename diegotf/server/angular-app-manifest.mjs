
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2555, hash: '996a912fa3c8fdf5b3ebb04694cb4412dba797811753fdb9b2bbad0da28ab2d6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: 'e1f668ccf2baf6b32ad3eefbdcbd1ea1e2149477285a656bbae81c198c3f36dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22557, hash: 'c81ec4f9c75085387e42751bdefb2f65eff61b66ea9f876374510c13e566f4fc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LQDHZSOD.css': {size: 5404, hash: 'g4aovAPyW8o', text: () => import('./assets-chunks/styles-LQDHZSOD_css.mjs').then(m => m.default)}
  },
};
