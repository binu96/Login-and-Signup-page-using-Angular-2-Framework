<?php  

session_start();

$_SESSION["user"] = "1234";

    $obj = json_decode(key($_POST));

    $userName = $obj->userName;
    $password = $obj->password;

if(isset($_SESSION[$userName])){
    if($_SESSION[$userName] == $password){
    
    echo json_encode("true");
}
    else{
         echo json_encode("false");
    }
}

else{
    echo json_encode("false");
}
		

   
?>