<?php
header('Access-Control-Allow-Origin: *');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once '../vendor/autoload.php';
$mail = new PHPMailer(true);
$nombre = $_POST["Name"];
$correo = $_POST["Email"];
$mensaje = $_POST["Message"];
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; 
    $mail->SMTPAuth = true;
    $mail->Username = 'kingsofdevelopmentcol@gmail.com';  
    $mail->Password = '21272004m';   
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;    
    $mail->setFrom($correo, $correo);
    $mail->addAddress('kingsofdevelopmentcol@gmail.com', 'KINGS-OF-DEVELOPMENT');
    $mail->isHTML(true);
    $mail->Subject = $nombre;
    $mail->Body = $mensaje;
    if ($mail->Send()) {
        echo "1";
    } else {
        echo "An error occurred, failed to send the email";
    }
} catch (Exception $e) {    
    echo 'Message could not be sent.' . $mail->ErrorInfo;
}


