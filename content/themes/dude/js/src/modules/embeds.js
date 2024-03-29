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
    firstScriptTagMastodon.parentNode.insertBefore(tagMastodon, firstScriptTagMastodon);
    window.isMastodonIframeAPILoaded = true;
  };

  loadMastodonAPI();

  // Load Twitter API script
  const loadTwitterWidgets = () => {
    const tag = document.createElement('script');
    tag.src = 'https://platform.twitter.com/widgets.js';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.isInstagramIframeAPILoaded = true;
  };

  loadTwitterWidgets();

  // Load Instagram API script
  const loadInstagramAPI = () => {
    const tag = document.createElement('script');
    tag.src = 'https://www.instagram.com/embed.js';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.isInstagramIframeAPILoaded = true;
  };

  loadInstagramAPI();

  // Important: This generates the images
  if (document.querySelector('.instagram-media')) {
    window.instgrm.Embeds.process();
  }
};

export default initEmbeds;
