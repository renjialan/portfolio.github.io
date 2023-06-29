<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'jialan.ren@gmail.com';
$subject = 'New contact form submission';
$body = "Name: $name\nEmail: $email\nMessage: $message";

mail($to, $subject, $body);
?>
