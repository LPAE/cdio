import * as path from 'path';
import LicensePlugin from 'webpack-license-plugin';
import { generateGetLocalIdent } from './build-utils/css/common.js';

export default {
  /*
   ** Headers of the page
   */
  server: {
    host: '0.0.0.0', // default: localhost
    port: '5001'
  },

  router: {
    base: '/cdio/slides/'
  },

  target: 'static',

  head: {
    title: 'CDIO - Slides',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        href: '',
        as: 'font'
      }
    ]
  },

  components: true,
  modern: 'client',

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/styles/fonts.scss', '~/styles/colors.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],

  optimizedImages: {
    inlineImageLimit: -1,
    optimizeImages: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Nuxt.js modules
   */
  /*
   ** Build configuration
   */
  build: {
    publicPath: '/public/',

    extractCSS: {
      ignoreOrder: true
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isModern, isClient }) {
      const getLocalIdent = generateGetLocalIdent(isDev);
      const buildType = isModern ? 'modern' : isClient ? 'client' : 'server';
      config.plugins.push(
        new LicensePlugin({
          outputFilename: `license-${buildType}.json`,
          unacceptableLicenseTest: (licenseType) => licenseType.match(/GPL/i)
        })
      );
      config.module.rules[0].options.transformAssetUrls.image = [
        'xlink:href',
        'href'
      ];
      config.module.rules[0].options.transformAssetUrls.use = [
        'xlink:href',
        'href'
      ];

      config.module.rules.forEach((rule) => {
        rule.oneOf &&
          rule.oneOf.forEach((useOf) => {
            useOf.use &&
              useOf.use.forEach((use) => {
                if (
                  (use.loader && use.loader.match(/css-loader/)) ||
                  use.loader === 'vue-style-loader'
                ) {
                  if (!use.options.modules) {
                    use.options.modules = {
                      getLocalIdent
                    };
                  } else {
                    delete use.options.modules.localIdentName;
                    use.options.modules.getLocalIdent = getLocalIdent;
                  }
                }
              });

            const cssLoaderIndex = useOf.use.findIndex(
              (use) => use.loader && use.loader.match(/css-loader/)
            );
            if (cssLoaderIndex > -1) {
              useOf.use.splice(cssLoaderIndex + 1, 0, {
                loader: path.resolve('build-utils/css/fix-classnames-before.js')
              });
            }
          });
      });
      config.module.rules[1].oneOf[0].use.unshift({
        loader: path.resolve('build-utils/css/fix-html.js')
      });

      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development';
      }
    }
  }
};
