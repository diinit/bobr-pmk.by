<?php
if (array_key_exists('email', $_POST)) {
   $to = 'bobruisk-pmk@tut.by';
   $subject = 'Заполнена контактная форма с bobr-pmk.by'';
   $message = "Имя: ".$_POST['name']."\nEmail: ".$_POST['email'].\nМожно связаться: ".$_POST['date'].\nКраткое описание работы: ".$_POST['person_num'].\nСообщение: ".$_POST['message'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   if(mail($to, $subject, $message, $headers)) {
     echo 'success';
   }else {
     echo 'false';
   }  
}else {
  echo 'false';
}