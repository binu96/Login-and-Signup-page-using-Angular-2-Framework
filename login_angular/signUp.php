<?php  

session_start();

    $obj = json_decode(key($_POST));

    $userName = $obj->userName;
    $password = $obj->password;

    $_SESSION[$userName] = $password;

    if(isset($_SESSION[$userName])){
        echo json_encode("true");
    }
    else{
         echo json_encode("false");
    }

   
?>