// 当前环境的文件内容将在构建期间覆盖这些内容。
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// 在“angular - cli.json”中可以找到该文件的env映射列表。

export const environment = Object.assign({}, require('./common.json'), require('./development.json'), {
  production: false,
  envName: 'dev'
});
