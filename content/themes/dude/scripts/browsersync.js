#!/usr/bin/env node
/**
 * Browsersync server for development
 */
const browserSync = require('browser-sync').create();

const proxyUrl = 'https://dude.test';

browserSync.init({
  proxy: proxyUrl,
  files: [
    '**/*.php',
    'assets/dist/css/**/*.css',
    'assets/dist/js/**/*.js',
    'blocks/*/build/**/*.css',
    'blocks/*/build/**/*.js',
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
