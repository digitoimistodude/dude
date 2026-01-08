<?php
/**
 * ACF Dynamic icon select
 *
 * Better UI for dynamic svg icon selector in ACF
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-04-25 11:25:27
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:32:37
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Make dynamic svg icon select to ACF select fields which name
 * contains "icon_svg".
 *
 * NOTE! This functions needs air-helper to work.
 */
function acf_dynamic_select_for_icon( $field ) {
  if ( ! function_exists( 'get_icons_for_user' ) ) {
    return $field;
  }

  if ( false === strpos( $field['name'], 'icon_svg' ) ) {
    return $field;
  }

  // add icons from "svg/foruser" directory.
  $field['choices'] = get_icons_for_user( [
    'show_preview' => $field['ui'],
    'icon_path'    => '/assets/svg/foruser/',
    'show_empty'   => $field['allow_null'],
  ]);

  return $field;
} // end acf_dynamic_select_for_icon

// Improve styles of SVG icon field selector
function improved_acf_svg_selector_ui_styles() { ?>
  <script>
    acf.add_filter('select2_args', function( args, $select, settings, field, instance ) {

      const fieldname = settings.field.data.name;

      // Check if field name contains icon_svg, then apply custom classes
      if ( fieldname.indexOf('icon_svg') !== -1 ) {
        args.dropdownCssClass = 'svg-selector-ui-dropdown';
        args.selectionCssClass = 'svg-selector-ui-selection';
      }

      return args;
    });
  </script>

    <style type="text/css">
    /* Styles for default dynamic select elements for SVG icons */
    .acf-field[data-name="icon_svg"] .select2-selection .acf-selection {
      display: flex;
      align-items: center;
    }

    .acf-field[data-name="icon_svg"] .select2-selection {
      height: unset;
      padding: 10px;
    }

    .acf-field[data-name="icon_svg"] .select2-container .select2-selection--single .select2-selection__rendered {
      align-items: center;
      display: flex;
      gap: .5rem;
    }

    .acf-field[data-name="icon_svg"] .select2-container .select2-selection--single .select2-selection__rendered svg {
      max-height: 32px;
      margin-right: 10px;
      order: -1;
      width: auto;
    }

    .acf-field[data-name="icon_svg"] .select2-results__option {
      align-items: center;
      display: flex;
    }

    .acf-field[data-name="icon_svg"] .select2-results__option svg {
      max-height: 32px;
      margin-right: 10px;
      order: -1;
      padding: 5px;
      width: auto;
    }

    .acf-field[data-name="icon_svg"] .select2-selection__clear {
      color: #999;
      display: flex;
      font-size: 15px;
      justify-content: flex-end;
      margin-right: 10px;
      order: 3;
    }

    .acf-field[data-name="icon_svg"] .select2-selection__clear:hover {
      color: #222;
    }

    .acf-field[data-name="icon_svg"] .select2-results__option {
      align-items: center;
      display: flex;
    }

    .select2-results__option svg {
      order: -1;
      padding: 0;
      margin-right: 10px;
      max-height: 32px;
      width: auto;
    }

    /* Better select2-dropdown UI styles */
    .select2-dropdown.svg-selector-ui-dropdown .select2-results__options {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      min-height: 64px;
      max-height: 500px;
    }

    .select2-dropdown.svg-selector-ui-dropdown .select2-results__options .select2-results__option {
      display: flex;
      visibility: hidden;
      min-width: 32px;
      max-width: 32px;
      max-height: 32px;
      min-height: 32px;
      height: 32px;
      margin: 4px;
      width: 32px;
      align-items: center;
    }

    .select2-container--default .select2-results__option--highlighted[aria-selected] {
      color: #fff;
      background-color: #1e1e1e;
    }

    .select2-dropdown.svg-selector-ui-dropdown .select2-results__options .select2-results__option:hover svg {
      background-color: #1e1e1e;
      border-radius: 5px;
    }

    .select2-dropdown.svg-selector-ui-dropdown .select2-results__options .select2-results__option:hover svg {
      color: #fff;
    }

    .select2-dropdown.svg-selector-ui-dropdown .select2-results__options .select2-results__option svg {
      visibility: visible;
      min-width: 32px;
      max-width: 32px;
      padding: 5px;
      width: 32px;
    }
  </style>
<?php } // end improved_acf_svg_selector_ui_styles
