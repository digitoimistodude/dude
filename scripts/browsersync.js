#!/usr/bin/env node
/**
 * Browsersync server for development
 */
const browserSync = require('browser-sync').create();

const themeDir = 'content/themes/dude';
const proxyUrl = 'https://dude.test';

browserSync.init({
  proxy: proxyUrl,
  files: [
    `${themeDir}/**/*.php`,
    `${themeDir}/assets/css/**/*.css`,
    `${themeDir}/assets/js/**/*.js`,
    `${themeDir}/blocks/*/build/**/*.css`,
    `${themeDir}/blocks/*/build/**/*.js`,
  ],
  logLevel: 'info',
  injectChanges: true,
  open: false,
  notify: true,
  https: {
    key: '/var/www/certs/localhost-key.pem',
    cert: '/var/www/certs/localhost.pem',
  },
});
