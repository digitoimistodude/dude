<?php
/**
 * Configuration overrides for WP_ENV === 'staging'
 */

// phpcs:ignore Universal.UseStatements.DisallowUseClass.FoundWithoutAlias
use Roots\WPConfig\Config;

/**
 * You should try to keep staging as close to production as possible. However,
 * should you need to, you can always override production configuration values
 * with `Config::define`.
 *
 * Example: `Config::define('WP_DEBUG', true);`
 * Example: `Config::define('DISALLOW_FILE_MODS', false);`
 */

Config::define( 'SAVEQUERIES', false );
Config::define( 'WP_DEBUG', false );
Config::define( 'WP_DEBUG_DISPLAY', false );
Config::define( 'WP_DISABLE_FATAL_ERROR_HANDLER', false );
Config::define( 'SCRIPT_DEBUG', false );
Config::define( 'PLL_CACHE_HOME_URL', false );

// phpcs:ignore WordPress.PHP.IniSet.display_errors_Disallowed
ini_set( 'display_errors', '0' );

// Enable plugin and theme updates and installation from the admin
Config::define( 'DISALLOW_FILE_MODS', false );
