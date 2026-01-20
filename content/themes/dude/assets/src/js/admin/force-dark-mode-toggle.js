( function( wp ) {
  const { registerPlugin } = wp.plugins;
  const { PluginDocumentSettingPanel } = wp.editor || wp.editPost;
  const { ToggleControl } = wp.components;
  const { useSelect, useDispatch } = wp.data;

  const ForceDarkModePanel = function() {
    const meta = useSelect( function( select ) {
      return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
    }, [] );

    const { editPost } = useDispatch( 'core/editor' );

    const forceDarkMode = meta._force_dark_mode === true;

    var onChange = function( value ) {
      editPost( {
        meta: {
          ...meta,
          _force_dark_mode: value,
        },
      } );
    };

    return wp.element.createElement(
      PluginDocumentSettingPanel,
      {
        name: 'force-dark-mode-panel',
        title: 'Väriteema',
        className: 'force-dark-mode-panel',
      },
      wp.element.createElement( ToggleControl, {
        label: 'Pakota dark mode',
        help: 'Pakottaa dark moden tälle sivulle.',
        checked: forceDarkMode,
        onChange: onChange,
        __nextHasNoMarginBottom: true,
      } )
    );
  };

  registerPlugin( 'dude-force-dark-mode', {
    render: ForceDarkModePanel,
    icon: null,
  } );
} )( window.wp );
