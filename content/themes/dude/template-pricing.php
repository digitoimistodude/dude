<?php
/**
 * Template Name: Hinnasto-laskeutumissivu (DEV-567)
 *
 * @package dude
 */

get_header(); ?>

<main class="site-main landing-pricing">

  <?php
  // All content comes from Gutenberg blocks:
  // - dude/pricing-hero
  // - dude/pricing-category (multiple)
  // - dude/pricing-cta
  // - dude/pricing-faq
  the_content();

  do_action( 'dude_site_main_after_content' );
  ?>

</main>

<script>
// Pricing accordion toggle
document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.pricing-accordion-item');

  accordionItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      // Don't toggle if clicking on the contact button
      if (e.target.closest('.pricing-contact-button')) {
        return;
      }

      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
    });

    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        // Don't toggle if focus is on the contact button
        if (e.target.closest('.pricing-contact-button')) {
          return;
        }
        e.preventDefault();
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
      }
    });
  });

  // Make contact buttons trigger the contact modal (created by contact-form-modal.js)
  const contactButtons = document.querySelectorAll('.pricing-contact-button');
  contactButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();

      // Find the hero button that was converted to modal trigger by contact-form-modal.js
      const heroModalTrigger = document.querySelector('.block-pricing-hero .button-mint.button-huge');
      if (heroModalTrigger && heroModalTrigger.tagName === 'BUTTON') {
        heroModalTrigger.click();
        return;
      }

      // Fallback: redirect to contact page
      window.location.href = '<?php echo esc_url( get_permalink( 4487 ) ); ?>';
    });
  });
});
</script>

<?php get_footer(); ?>
