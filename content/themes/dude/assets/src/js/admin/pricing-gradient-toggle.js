( function( wp ) {
  const { registerPlugin } = wp.plugins;
  // Use wp.editor instead of wp.editPost (deprecated in WP 6.6)
  const { PluginDocumentSettingPanel } = wp.editor || wp.editPost;
  const { ToggleControl } = wp.components;
  const { useSelect, useDispatch } = wp.data;
  const { useEffect, useRef } = wp.element;

  // Helper to find ALL editor wrappers (handles both direct DOM and iframe)
  var getAllEditorWrappers = function() {
    var wrappers = [];

    // Try direct DOM first
    var directWrapper = document.querySelector( '.editor-styles-wrapper' );
    if ( directWrapper ) {
      wrappers.push( directWrapper );
    }

    // Try iframe (WP 6.3+)
    var iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
    if ( iframe && iframe.contentDocument ) {
      var iframeWrapper = iframe.contentDocument.querySelector( '.editor-styles-wrapper' );
      if ( iframeWrapper ) {
        wrappers.push( iframeWrapper );
      }
    }

    return wrappers;
  };

  const PricingGradientPanel = function() {
    const meta = useSelect( function( select ) {
      return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
    }, [] );

    const { editPost } = useDispatch( 'core/editor' );
    const lastAppliedState = useRef( null );

    // Explicitly check for boolean true, not just truthy
    const showGradient = meta._show_pricing_gradient === true;

    // Apply/remove class to editor wrapper
    useEffect( function() {
      // Skip if we already applied this state (prevents flickering)
      if ( lastAppliedState.current === showGradient ) {
        return;
      }

      var applyGradient = function() {
        var wrappers = getAllEditorWrappers();
        if ( wrappers.length === 0 ) {
          return false;
        }

        wrappers.forEach( function( wrapper ) {
          if ( showGradient ) {
            wrapper.classList.add( 'has-pricing-gradient' );
          } else {
            wrapper.classList.remove( 'has-pricing-gradient' );
          }
        } );

        lastAppliedState.current = showGradient;
        return true;
      };

      // Apply immediately
      var applied = applyGradient();

      // If not applied immediately (editor not ready), retry a few times
      var retryCount = 0;
      var maxRetries = 5;
      var retryInterval = null;

      if ( ! applied ) {
        retryInterval = setInterval( function() {
          retryCount++;
          if ( applyGradient() || retryCount >= maxRetries ) {
            clearInterval( retryInterval );
          }
        }, 500 );
      }

      // Watch for iframe being added/replaced (view mode switches)
      var observer = new MutationObserver( function( mutations ) {
        var shouldReapply = false;
        mutations.forEach( function( mutation ) {
          // Only reapply if nodes were added (new iframe) - NOT for attribute changes
          if ( mutation.type === 'childList' && mutation.addedNodes.length > 0 ) {
            // Check if an iframe was added
            mutation.addedNodes.forEach( function( node ) {
              if ( node.tagName === 'IFRAME' || ( node.querySelector && node.querySelector( 'iframe' ) ) ) {
                shouldReapply = true;
              }
            } );
          }
        } );

        if ( shouldReapply ) {
          // Reset state so we reapply to new iframe
          lastAppliedState.current = null;
          // Delay to let iframe load
          setTimeout( applyGradient, 300 );
          setTimeout( applyGradient, 800 );
        }
      } );

      var observeTarget = document.querySelector( '.edit-post-visual-editor' ) ||
        document.querySelector( '.block-editor-iframe__container' ) ||
        document.querySelector( '.editor-styles-wrapper' );

      if ( observeTarget ) {
        observer.observe( observeTarget, {
          childList: true,
          subtree: true,
        } );
      }

      // Watch for iframe load events
      var handleIframeLoad = function() {
        lastAppliedState.current = null;
        applyGradient();
      };

      var iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
      if ( iframe ) {
        iframe.addEventListener( 'load', handleIframeLoad );
      }

      return function() {
        if ( retryInterval ) {
          clearInterval( retryInterval );
        }
        observer.disconnect();
        if ( iframe ) {
          iframe.removeEventListener( 'load', handleIframeLoad );
        }
      };
    }, [ showGradient ] );

    var onChange = function( value ) {
      // Reset applied state so useEffect will apply the new value
      lastAppliedState.current = null;
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
        __nextHasNoMarginBottom: true,
      } )
    );
  };

  registerPlugin( 'dude-pricing-gradient', {
    render: PricingGradientPanel,
    icon: null,
  } );
} )( window.wp );
