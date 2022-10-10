/**
 * @Author: Tuomas Marttila
 * @Date:   2022-05-27 10:27:39
 * @Last Modified by:   Tuomas Marttila
 * @Last Modified time: 2022-06-13 13:46:31
 */
const themeDir = 'content/themes/dude/';
const proxyUrl = 'https://dude.test';

module.exports = {
  cssnano: {
    "preset": [
      "cssnano-preset-advanced",
      {
        "discardComments": {
          "removeAll": true
        }
      }
    ],
  },
  size: {
    gzip: true,
    uncompressed: true,
    pretty: true,
    showFiles: true,
    showTotal: false,
  },
  rename: {
    min: {
      suffix: '.min'
    }
  },
  browsersync: {
    // Important! If src is wrong, styles will not inject to the browser
    src: [
      themeDir + '**/*.php',
      themeDir + 'css/**/*.css',
      themeDir + 'js/dev/**/*.js'
    ],
    opts: {
      logLevel: 'debug',
      injectChanges: true,
      proxy: proxyUrl,
      browser: 'Google Chrome',
      open: false,
      notify: true,
      https: {
        key: "/var/www/certs/localhost-key.pem",
        cert: "/var/www/certs/localhost.pem",
      }
    },
    win: {
      logLevel: 'debug',
      injectChanges: true,
      proxy: proxyUrl,
      browser: 'Google Chrome',
      open: false,
      notify: true,
      https: {
         key: "C:\\Users\\Rolle\\Projects\\certs\\localhost-key.pem",
         cert: "C:\\Users\\Rolle\\Projects\\certs\\localhost.pem",
      }
    },
  },
  styles: {
    src: themeDir + 'sass/*.scss',
    development: themeDir + 'css/dev/',
    production: themeDir + 'css/prod/',
    watch: {
      development: themeDir + 'sass/**/*.scss',
      production: themeDir + 'css/dev/*.css',
    },
    stylelint: {
      src: themeDir + 'sass/**/*.scss',
      opts: {
        fix: false,
        reporters: [{
          formatter: 'string',
          console: true,
          failAfterError: false,
          debug: false
        }]
      },
    },
    opts: {
      development: {
        verbose: true,
        bundleExec: false,
        outputStyle: 'expanded',
        debugInfo: true,
        errLogToConsole: true,
        includePaths: [themeDir + 'node_modules/'],
        quietDeps: true,
      },
      production: {
        verbose: false,
        bundleExec: false,
        outputStyle: 'compressed',
        debugInfo: false,
        errLogToConsole: false,
        includePaths: [themeDir + 'node_modules/'],
        quietDeps: true,
      }
    }
  },
  js: {
    src: themeDir + 'js/src/*.js',
    watch: themeDir + 'js/src/**/*.js',
    production: themeDir + 'js/prod/',
    development: themeDir + 'js/dev/',
  },
  php: {
    watch: [
      themeDir + '*.php',
      themeDir + 'template-parts/**/*.php'
    ]
  },
  phpcs: {
    src: [themeDir + '**/*.php', '!' + themeDir + 'node_modules/**/*'],
    opts: {
      bin: '/usr/local/bin/phpcs',
      standard: themeDir + 'phpcs.xml',
      warningSeverity: 0
    },
    win: {
      bin: 'C:\\wsl-tools\\phpcs.bat',
      standard: themeDir + 'phpcs.xml',
      warningSeverity: 0
    }
  }
};
