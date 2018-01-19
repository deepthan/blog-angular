export const environment = Object.assign({}, require('./common.json'), require('./test.json'), {
  production: false,
  envName: 'test'
});