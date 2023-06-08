<?php
// phpcs:disable
/**
 * @Author: Timi Wahalahti
 * @Date:   2023-05-24 18:18:30
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-06-08 12:08:03
 *
 * @package dude
 */

namespace Air_Light;

add_action( 'gform_after_submission_13', function( $entry, $form ) {
  $email_field_id = 3;

  // Create ics file to send
  $ics_file = create_ics_file( $entry[ $email_field_id ], $entry['id'] );
  if ( ! $ics_file ) {
    return;
  }

  // Send the invite email
  $invite_sent = send_calendar_invite( $entry[ $email_field_id ], $ics_file );
  if ( ! $invite_sent ) {
    return;
  }

  // Save to meta that invite has been sent
  gform_add_meta( absint( $entry['id'] ), '_event_invitation_sent', wp_date( 'Y-m-d H:i:s' ) );
}, 10, 2 );

function create_ics_file( $to, $entry_id ) {
  $domain = 'dude.fi';
  $from_name = 'Digitoimisto Dude';
  $from_address = 'moro@dude.fi';
  $startTime = '2023-08-25 18:00';
  $endTime = '2023-08-25 23:00';
  $title = 'Digitoimisto Duden 10-vuotisjuhlat';
  $message = 'Tervetuloa mukaan juhlimaan Duden 10-vuotista taivalta rennon yhdessä olemisen merkeissä! Juomaa, kevyttä ruokaa, dudehenkistä ohjelmaa ja taatusti hyvää seuraa tarjolla.';
  $location = 'Tapahtumatila PK5, Kankaanaukio 3b, 40320, Jyväskylä';

  $ical = 'BEGIN:VCALENDAR' . "\r\n" .
  'PRODID:-//Microsoft Corporation//Outlook 10.0 MIMEDIR//EN' . "\r\n" .
  'VERSION:2.0' . "\r\n" .
  'METHOD:REQUEST' . "\r\n" .
  'BEGIN:VTIMEZONE' . "\r\n" .
  'TZID:Eastern Time' . "\r\n" .
  'BEGIN:STANDARD' . "\r\n" .
  'DTSTART:20091101T020000' . "\r\n" .
  'RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=1SU;BYMONTH=11' . "\r\n" .
  'TZOFFSETFROM:-0400' . "\r\n" .
  'TZOFFSETTO:-0500' . "\r\n" .
  'TZNAME:EST' . "\r\n" .
  'END:STANDARD' . "\r\n" .
  'BEGIN:DAYLIGHT' . "\r\n" .
  'DTSTART:20090301T020000' . "\r\n" .
  'RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=2SU;BYMONTH=3' . "\r\n" .
  'TZOFFSETFROM:-0500' . "\r\n" .
  'TZOFFSETTO:-0400' . "\r\n" .
  'TZNAME:EDST' . "\r\n" .
  'END:DAYLIGHT' . "\r\n" .
  'END:VTIMEZONE' . "\r\n" .
  'BEGIN:VEVENT' . "\r\n" .
  'ORGANIZER;CN="'.$from_name.'":MAILTO:'.$from_address. "\r\n" .
  'ATTENDEE;CN="'.$to.'";ROLE=REQ-PARTICIPANT;RSVP=TRUE:MAILTO:'.$to. "\r\n" .
  'LAST-MODIFIED:' . date("Ymd\TGis") . "\r\n" .
  'UID:'.date("Ymd\TGis", strtotime($startTime)).rand()."@".$domain."\r\n" .
  'DTSTAMP:'.date("Ymd\TGis"). "\r\n" .
  'DTSTART;TZID="Europe/Helsinki":'.date("Ymd\THis", strtotime($startTime)). "\r\n" .
  'DTEND;TZID="Europe/Helsinki":'.date("Ymd\THis", strtotime($endTime)). "\r\n" .
  'TRANSP:OPAQUE'. "\r\n" .
  'SEQUENCE:1'. "\r\n" .
  'SUMMARY:' . $title . "\r\n" .
  'LOCATION:' . $location . "\r\n" .
  'DESCRIPTION:' . $message . "\r\n" .
  'CLASS:PUBLIC'. "\r\n" .
  'PRIORITY:5'. "\r\n" .
  'BEGIN:VALARM' . "\r\n" .
  'TRIGGER:-PT2H' . "\r\n" .
  'ACTION:DISPLAY' . "\r\n" .
  'DESCRIPTION:' . $title . "\r\n" .
  'END:VALARM' . "\r\n" .
  'END:VEVENT'. "\r\n" .
  'END:VCALENDAR'. "\r\n";

  $upload_dir = wp_upload_dir();
  $file_path = urldecode( $upload_dir['basedir'] . "/10-invitation-{$entry_id}.ics" );

  file_put_contents( $file_path, $ical ); // phpcs:ignore

  if ( is_file( $file_path ) === false ) {
    return false;
  }

  return $file_path;
} // end create_ics_file

function send_calendar_invite( $to, $ics_file ) {
  $domain = 'dude.fi';
  $from_name = 'Digitoimisto Dude';
  $from_address = 'moro@dude.fi';

  // Invisible chat is required for WP to send the message!
  $message = '‎';

  $headers = [
    "From: {$from_name} <{$from_address}>",
  ];

  return wp_mail( $to, 'Lisää Duden 10-vuotisjuhlat kalenteriisi', $message, $headers, [ $ics_file ] );
} // end send_calendar_invite
