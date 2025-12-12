/* eslint-disable no-param-reassign, no-unused-vars, import/no-unresolved, no-plusplus */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:03:42
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-03-13 15:29:45
 */
import Swiper, { Navigation, Pagination, A11y } from 'swiper/core';
import getLocalization from './localization';

Swiper.use([Navigation, Pagination, A11y]);

const initCarousels = () => {
  // Init carousels
  const Carousels = document.querySelectorAll('.swiper-container');

  // Add skip links if not in admin
  if (!document.body.classList.contains('wp-admin')) {
    const allCarouselBlocks = document.querySelectorAll('.is-carousel');

    // Loop through all blocks
    for (let i = 0; i < allCarouselBlocks.length; i++) {
      // Get carousel block class nam (second, because first is 'block')
      const carouselClass = allCarouselBlocks[i].classList[1];
      const carouselBlock = allCarouselBlocks[i];
      const nextBlock = carouselBlock.nextElementSibling;

      if (allCarouselBlocks[i].nextElementSibling) {
        // Set ID to next block
        const nextBlockId = `anchor-${carouselClass}`;
        nextBlock.setAttribute('id', nextBlockId);

        // Skip link markup
        const skipLinkContent = `<a class="skip-link screen-reader-text-dude js-trigger" href="#${nextBlockId}">${getLocalization('skip_slider')}</a>`;

        // Add skiplink right before container
        const skipLinkWrapper = document.createElement('div');
        skipLinkWrapper.classList.add('block');
        skipLinkWrapper.classList.add('block-reset-styles');
        skipLinkWrapper.classList.add('has-unified-padding-if-stacked');
        skipLinkWrapper.classList.add('is-skip-link');
        skipLinkWrapper.innerHTML = skipLinkContent;
        if (carouselBlock.parentNode) {
          carouselBlock.parentNode.insertBefore(skipLinkWrapper, carouselBlock);
        }
      }
    }
  }

  // Init swipers
  for (let i = 0; i < Carousels.length; i++) {
    Carousels[i].classList.add(`swiper-container-${i}`);

    // Add classes to navigation buttons if they exist
    const prevButton = Carousels[i].querySelector('.swiper-button-prev');
    if (prevButton) {
      prevButton.classList.add(`swiper-button-prev-${i}`);
    }

    const nextButton = Carousels[i].querySelector('.swiper-button-next');
    if (nextButton) {
      nextButton.classList.add(`swiper-button-next-${i}`);
    }

    if (Carousels[i].querySelector('.swiper-pagination')) {
      Carousels[i].querySelector('.swiper-pagination').classList.add(`swiper-pagination-${i}`);
    }

    // Parameters for different kind of carousels
    let CarouselParams;
    if (Carousels[i].classList.contains('is-reference-quotes')) {
      // Reference quote carousel
      CarouselParams = {
        slidesPerView: 1,
        spaceBetween: 150,
        autoHeight: true,
      };
    } else if (Carousels[i].classList.contains('is-full-width')) {
      // Full width carousel
      CarouselParams = {
        slidesPerView: 1,
        spaceBetween: 40,
        autoHeight: true,
        loop: true,
      };
    } else {
      // Process carousel
      CarouselParams = {
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        spaceBetween: 0,
        centeredSlides: false,
        loop: false,

        // Responsive breakpoints
        breakpoints: {
          // When window width is >= 0px
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          // When window width is >= 700px
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      };
    }

    const swiper = new Swiper(`.swiper-container-${i}`, {
      ...CarouselParams,
      slideClass: 'swiper-slide',
      wrapperClass: 'swiper-wrapper',
      centeredSlides: false,
      speed: 200,
      autoHeight: true,
      on: {
        // https://github.com/nolimits4web/swiper/issues/3108
        reachEnd() {
          this.snapGrid = [...this.slidesGrid];
          setTimeout(() => {
            document.querySelector(`.swiper-button-next-${i}`).click();
            clearTimeout();
          }, 1);
        },
        snapGridLengthChange() {
          if (this.snapGrid.length !== this.slidesGrid.length) {
            this.snapGrid = this.slidesGrid.slice(0);
          }
        },
        init() {
          const swiperElement = this.$el[0];
          const activeSlide = swiperElement.querySelectorAll('.swiper-slide-active')[0];
          const allSlides = swiperElement.querySelectorAll('.swiper-slide');

          // Hide all slides except active for screen readers
          allSlides.forEach((aSlide) => {
            aSlide.ariaHidden = 'true';
          });

          // Show active slide for screen readers
          activeSlide.ariaHidden = 'false';
        },
        slideChangeTransitionEnd() {
          // Run the same thing when slide changes
          const swiperElement = this.$el[0];
          const activeSlide = swiperElement.querySelectorAll('.swiper-slide-active')[0];
          const allSlides = swiperElement.querySelectorAll('.swiper-slide');

          // Hide all slides except active for screen readers
          allSlides.forEach((aSlide) => {
            aSlide.ariaHidden = 'true';
          });

          // Show active slide for screen readers
          activeSlide.ariaHidden = 'false';
        },
      },
      keyboard: {
        enabled: true,
      },
      a11y: {
        enabled: true,
        lastSlideMessage: getLocalization('last_slide'),
        prevSlideMessage: getLocalization('previous_slide'),
        nextSlideMessage: getLocalization('next_slide'),
        slideLabelMessage: null,
        slideRole: 'group',
      },
      navigation: {
        prevEl: `.swiper-button-prev-${i}`,
        nextEl: `.swiper-button-next-${i}`,
      },
      pagination: {
        el: `.swiper-pagination-${i}`,
        type: 'custom',

        // Custom pagination
        renderCustom(swiper, current, total) {
          // If process slider, make total as 9
          if (swiper.$el[0].classList.contains('is-process')) {
            total = 9;
          }

          return `<span class="swiper-pagination-current">${current}</span> / <span class="swiper-pagination-total">${total}</span>`;
        },
      },
    });
  }
};

export default initCarousels;
