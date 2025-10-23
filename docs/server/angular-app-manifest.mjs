
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mi_proyecto/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mi_proyecto"
  },
  {
    "renderMode": 2,
    "route": "/mi_proyecto/servicios"
  },
  {
    "renderMode": 2,
    "route": "/mi_proyecto/crear-cuenta"
  },
  {
    "renderMode": 2,
    "route": "/mi_proyecto/productos"
  },
  {
    "renderMode": 2,
    "route": "/mi_proyecto/personalizados"
  },
  {
    "renderMode": 2,
    "route": "/mi_proyecto/quienes-somos"
  },
  {
    "renderMode": 2,
    "route": "/mi_proyecto/base"
  },
  {
    "renderMode": 2,
    "route": "/mi_proyecto/usuarios"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 981, hash: 'dfa199818169145c5ed3e8f46d380fd881398b61b000c27653b8e0226565d772', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1126, hash: '2089c562373e99f426283ee243e24d87f1db695539b87a4ef3a056114722fd7f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'crear-cuenta/index.html': {size: 3010, hash: '4d579e42411e497034327d3dce5a8ae5fd9307e456f8550ae8297306fdd7736b', text: () => import('./assets-chunks/crear-cuenta_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 2792, hash: '621fb94dac1e955a0c78a8a97a974ad7dad1f04d5b1c9ed9b8bf3f0cae06ab5d', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 4072, hash: '6857414f94981b718930d97f64e0005924576809ddb12831e387c09d8d43f74f', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'quienes-somos/index.html': {size: 3563, hash: '0532a4f0fec48207ded94401ed088860cad2f3d14f61e411057d45672f7d33a3', text: () => import('./assets-chunks/quienes-somos_index_html.mjs').then(m => m.default)},
    'personalizados/index.html': {size: 4506, hash: '43c377a79aad706866f3c3d51276def7a07ab4e3e65aba3b23549d0668d50221', text: () => import('./assets-chunks/personalizados_index_html.mjs').then(m => m.default)},
    'base/index.html': {size: 4683, hash: 'c5b71a818506d95912a0375067445a6339b70e0d5bb01bd97587a170c82b09eb', text: () => import('./assets-chunks/base_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5665, hash: '2faeeea9d7a7633db5c88d1a2bfa48c9c852a99859fe42422b862d7accae4c0f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'usuarios/index.html': {size: 4504, hash: '214b2c90ca34aed3fe3256c43d20b210c88e897574152ddf32b70e74ba50cfa1', text: () => import('./assets-chunks/usuarios_index_html.mjs').then(m => m.default)},
    'styles-XGZ2TU6O.css': {size: 243, hash: 'ZGR9A+rct4Y', text: () => import('./assets-chunks/styles-XGZ2TU6O_css.mjs').then(m => m.default)}
  },
};
