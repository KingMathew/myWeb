<?php
$to      = 'mateo972000@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: mateo972000@gmail.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

@ mail($to, $subject, $message, $headers);
?> 