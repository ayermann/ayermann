<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
		$image = $_POST['image'];

		$name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);
		$image = htmlspecialchars($image);

		$name = urldecode($name);
    $email = urldecode($email);
    $message = urldecode($message);
		$image = urldecode($image);

		$name = trim($name);
    $email = trim($email);
    $message = trim($message);
		$image = trim($image);

		if (mail("sport@mlay.info",
		"Hello Andrii! It is a letter from site!",
		"Name: ".$name."\n".
		"E-mail: ".$email."\n".
		"Message: ".$message."\n".
		"Image: ".$image."\n".
		"From:".$email,"\r\n")
		) {
			echo('
			<meta http-equiv = "Refresh" 
			content = "0 ; URL = onload.html">
			');
			exit();
		}
		else {
			echo("Error. Reload the page to continue");
		}


?>