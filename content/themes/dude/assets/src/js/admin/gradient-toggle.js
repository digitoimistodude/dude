(function (wp) {
  const { registerPlugin } = wp.plugins;
  // Use wp.editor instead of wp.editPost (deprecated in WP 6.6)
  const { PluginDocumentSettingPanel } = wp.editor || wp.editPost;
  const { ToggleControl } = wp.components;
  const { useSelect, useDispatch } = wp.data;
  const { useEffect, useRef } = wp.element;

  // Helper to find ALL editor wrappers (handles both direct DOM and iframe)
  const getAllEditorWrappers = function () {
    const wrappers = [];

    // Try direct DOM first
    const directWrapper = document.querySelector('.editor-styles-wrapper');
    if (directWrapper) {
      wrappers.push(directWrapper);
    }

    // Try iframe (WP 6.3+)
    const iframe = document.querySelector('iframe[name="editor-canvas"]');
    if (iframe && iframe.contentDocument) {
      const iframeWrapper = iframe.contentDocument.querySelector('.editor-styles-wrapper');
      if (iframeWrapper) {
        wrappers.push(iframeWrapper);
      }
    }

    return wrappers;
  };

  const PricingGradientPanel = function () {
    const meta = useSelect((select) => select('core/editor').getEditedPostAttribute('meta') || {}, []);

    const { editPost } = useDispatch('core/editor');
    const lastAppliedState = useRef(null);

    // Explicitly check for boolean true, not just truthy
    const showGradient = meta._show_pricing_gradient === true;
    // const forceDarkMode = meta._force_dark_mode === true; // Reserved for future use

    // Apply/remove class to editor wrapper
    useEffect(() => {
      // Skip if we already applied this state (prevents flickering)
      if (lastAppliedState.current === showGradient) {
        return;
      }

      const applyGradient = function () {
        const wrappers = getAllEditorWrappers();
        if (wrappers.length === 0) {
          return false;
        }

        wrappers.forEach((wrapper) => {
          if (showGradient) {
            wrapper.classList.add('has-petrol-gradient-background');
          } else {
            wrapper.classList.remove('has-petrol-gradient-background');
          }
        });

        lastAppliedState.current = showGradient;
        return true;
      };

      // Apply immediately
      const applied = applyGradient();

      // If not applied immediately (editor not ready), retry a few times
      let retryCount = 0;
      const maxRetries = 5;
      let retryInterval = null;

      if (!applied) {
        retryInterval = setInterval(() => {
          retryCount++;
          if (applyGradient() || retryCount >= maxRetries) {
            clearInterval(retryInterval);
          }
        }, 500);
      }

      // Watch for iframe being added/replaced (view mode switches)
      const observer = new MutationObserver((mutations) => {
        let shouldReapply = false;
        mutations.forEach((mutation) => {
          // Only reapply if nodes were added (new iframe) - NOT for attribute changes
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if an iframe was added
            mutation.addedNodes.forEach((node) => {
              if (node.tagName === 'IFRAME' || (node.querySelector && node.querySelector('iframe'))) {
                shouldReapply = true;
              }
            });
          }
        });

        if (shouldReapply) {
          // Reset state so we reapply to new iframe
          lastAppliedState.current = null;
          // Delay to let iframe load
          setTimeout(applyGradient, 300);
          setTimeout(applyGradient, 800);
        }
      });

      const observeTarget = document.querySelector('.edit-post-visual-editor')
        || document.querySelector('.block-editor-iframe__container')
        || document.querySelector('.editor-styles-wrapper');

      if (observeTarget) {
        observer.observe(observeTarget, {
          childList: true,
          subtree: true,
        });
      }

      // Watch for iframe load events
      const handleIframeLoad = function () {
        lastAppliedState.current = null;
        applyGradient();
      };

      const iframe = document.querySelector('iframe[name="editor-canvas"]');
      if (iframe) {
        iframe.addEventListener('load', handleIframeLoad);
      }

      return function () {
        if (retryInterval) {
          clearInterval(retryInterval);
        }
        observer.disconnect();
        if (iframe) {
          iframe.removeEventListener('load', handleIframeLoad);
        }
      };
    }, [showGradient]);

    const onChange = function (value) {
      // Reset applied state so useEffect will apply the new value
      lastAppliedState.current = null;
      editPost({
        meta: {
          ...meta,
          _show_pricing_gradient: value,
        },
      });
    };

    return wp.element.createElement(
      PluginDocumentSettingPanel,
      {
        name: 'pricing-gradient-panel',
        title: 'Tausta',
        className: 'pricing-gradient-panel',
      },
      wp.element.createElement(ToggleControl, {
        label: 'Näytä petrooli gradient taustalla',
        help: 'Näyttää tumman petroolin gradientin editorissa ja frontissa.',
        checked: showGradient,
        onChange,
        __nextHasNoMarginBottom: true,
      }),
    );
  };

  registerPlugin('dude-pricing-gradient', {
    render: PricingGradientPanel,
    icon: null,
  });
}(window.wp));
