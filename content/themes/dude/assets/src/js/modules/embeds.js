/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-02-10 18:16:29
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-01-10 19:31:34
 */
/* eslint-disable no-use-before-define, no-inner-declarations, no-undef, no-plusplus, default-case, func-names, max-len, no-shadow, no-param-reassign, consistent-return */
const initEmbeds = () => {
  // Load Mastodon embed script
  const loadMastodonAPI = () => {
    const tagMastodon = document.createElement('script');
    tagMastodon.src = 'https://mementomori.social/embed.js';
    const firstScriptTagMastodon = document.getElementsByTagName('script')[0];
    if (firstScriptTagMastodon && firstScriptTagMastodon.parentNode) {
      firstScriptTagMastodon.parentNode.insertBefore(
        tagMastodon,
        firstScriptTagMastodon
      );
      window.isMastodonIframeAPILoaded = true;
    }
  };

  loadMastodonAPI();
};

export default initEmbeds;
