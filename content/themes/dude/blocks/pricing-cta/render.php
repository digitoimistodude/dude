<?php
/**
 * Pricing CTA block render template
 *
 * @package dude
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content (InnerBlocks).
 * @param WP_Block $block      Block instance.
 */

$phone_text = $attributes['phoneText'] ?? 'Soita Juhalle <a href="tel:+358400443221">0400 443 221</a> tai lähetä WhatsAppia';
$email_text = $attributes['emailText'] ?? 'Lähetä sähköpostia <a href="mailto:moro@dude.fi">moro@dude.fi</a>';
$form_text  = $attributes['formText'] ?? 'Täytä yhteydenottolomake →';
?>
<section <?php echo get_block_wrapper_attributes( [ 'class' => 'block block-pricing-cta' ] ); ?>>
  <div class="container">
    <div class="cta-box">
      <div class="cta-content">
        <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        <ul class="contact-methods">
          <li>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span><?php echo wp_kses_post( $phone_text ); ?></span>
          </li>
          <li>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span><?php echo wp_kses_post( $email_text ); ?></span>
          </li>
          <li>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
            <span><a href="<?php echo esc_url( get_permalink( 4487 ) ); ?>"><?php echo esc_html( $form_text ); ?></a></span>
          </li>
        </ul>
      </div>
      <div class="cta-image" aria-hidden="true">
        <?php
        $juha_image = get_field( 'juha_image', 'option' );
        if ( $juha_image ) :
          echo wp_get_attachment_image( $juha_image, 'large' );
        endif;
        ?>
      </div>
    </div>
  </div>
</section>
