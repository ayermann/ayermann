<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//Who send this letter
$mail->setForm('info@fls.guru', 'Andrii Yermachenko');
//Who will get this letter
$mail->addAddress('ayermachenko@gmail.com');
//Title of letter
$mail->Subject ='Hello!';

//The letter body
$body = '<h1>Letter from Portfolio!</h1>';

if(trim(!empty($_POST['name']))){
	$body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
	$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
	$body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
}

//Add a file 
if(!empty($_FILES['image']['tmp_name'])){
	//The way of file loading
	$filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
	//File loading
	if(copy($_FILES['image']['tmp_name'], $filePath)){
		$fileAttach = $filePath;
		$body.='<p><strong>Photo</strong>';
		$mail->addAttachment($fileAttach);
	}
}

$mail->Body = $body;

//Sending
if(!$mail->send()){
	$message = 'Error';
}else{
	$message = 'Your message send!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>