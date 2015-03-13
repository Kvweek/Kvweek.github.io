<DOCTYPE HTML>
<html>
<head>
<title>The Broke One</title>
</head>
<body>
	<form action="contact.php" method="post" enctype="multipart/form-data" name="contactform" id="contactform">
	<label>
	<div align="center">First Name
	<input type="text" name="textfield" />
	</div>
	</label>
	<p align="center">
	<label>Last Name
	<input type="text" name="textfield2" />
	</label>
	</p>
	<p align="center">
	<label>Address
	<input type="text" name="textfield3" />
	</label>
	</p>
	<p align="center">
	<label>E-Mail
	<input type="text" name="textfield4" />
	</label>
	</p>
	<p align="center">
	<label>Submit
	<input type="submit" name="Submit" value="Submit" />
	</label>
	</p>
	<p align="right">&nbsp; </p>
	</form>


<?php
	$firstname = $_POST['textfield']; 
	$lastname = $_POST['textfield2']; 
	$address = $_POST['textfield3']; 
	$email = $_POST['textfield4']; 

	//now we open the file using the a flag, this will create the file if 
	//it does not exist, and puts the pointer(where it starts writing) at the 
	//end of the file 
	$filename = "c:\\myfile.txt"; 
	$handle = fopen($filename, 'a'); 

	//now we prepare our string to be added: 
	$string_to_add = "$firstname,$lastname,$address,$email"; 
	fwrite($handle, $string_to_add); 

	//now close the file 
	fclose($handle);  
	?>
</body>
</html>