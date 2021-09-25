<?php

    require 'includes/PHPMailer.php';
    require 'includes/SMTP.php';
    require 'includes/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer();

    $mail->Host = "smtp.gmail.com";

    $mail->SMTPAuth = "true";

    $mail->SMTPSecure = "tls";

    $mail->Port = "587";

    $mail->Username = "tommy.madden1233@gmail.com";

    $mail->Password = "RocketLeague#1233";

    $mail->Subject = "Testing";

    $mail->setFrom("tommy.madden1233@gmail.com");

    $mail->Body = "Test Body";

    $mail->addAddress("tommy.madden1233@gmail.com");

    if ($mail->Send()){
        echo "Email sent";
    } else{
        echo "Error";
    }
    
    $mail->smtpClose();

?>