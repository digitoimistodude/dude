<?php
/**
 * Configuration overrides for WP_ENV === 'development'
 */

use Roots\WPConfig\Config;

Config::define( 'SAVEQUERIES', false );
Config::define( 'WP_DEBUG', false );
Config::define( 'WP_DEBUG_DISPLAY', false );
Config::define( 'WP_DISABLE_FATAL_ERROR_HANDLER', false );
Config::define( 'SCRIPT_DEBUG', false );
Config::define( 'FS_METHOD', 'direct' );
Config::define( 'PLL_CACHE_HOME_URL', false );

//ini_set( 'display_errors', '0' );
// Hide warnings and deprecated notices for development
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

// Enable plugin and theme updates and installation from the admin
Config::define( 'DISALLOW_FILE_MODS', false );
Config::define( 'WP_REDIS_DISABLED', false );

// Developing in the train :)
// TODO: Disable this later
// Config::define( 'WP_HTTP_BLOCK_EXTERNAL', true );
