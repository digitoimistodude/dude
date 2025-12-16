( function( wp ) {
  const { registerPlugin } = wp.plugins;
  const { PluginDocumentSettingPanel } = wp.editPost;
  const { ToggleControl } = wp.components;
  const { useSelect, useDispatch } = wp.data;
  const { useEffect } = wp.element;

  const PricingGradientPanel = function() {
    const meta = useSelect( function( select ) {
      return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
    }, [] );

    const { editPost } = useDispatch( 'core/editor' );

    const showGradient = meta._show_pricing_gradient || false;

    // Apply/remove class to editor wrapper
    useEffect( function() {
      const editorWrapper = document.querySelector( '.editor-styles-wrapper' );
      if ( editorWrapper ) {
        if ( showGradient ) {
          editorWrapper.classList.add( 'has-pricing-gradient' );
        } else {
          editorWrapper.classList.remove( 'has-pricing-gradient' );
        }
      }
    }, [ showGradient ] );

    const onChange = function( value ) {
      editPost( {
        meta: {
          ...meta,
          _show_pricing_gradient: value,
        },
      } );
    };

    return wp.element.createElement(
      PluginDocumentSettingPanel,
      {
        name: 'pricing-gradient-panel',
        title: 'Tausta',
        className: 'pricing-gradient-panel',
      },
      wp.element.createElement( ToggleControl, {
        label: 'Näytä petrooli gradient taustalla',
        help: 'Näyttää tumman petroolin gradientin editorissa ja frontissa.',
        checked: showGradient,
        onChange: onChange,
      } )
    );
  };

  registerPlugin( 'dude-pricing-gradient', {
    render: PricingGradientPanel,
    icon: null,
  } );
} )( window.wp );
