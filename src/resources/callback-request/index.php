<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'Exception.php';
require 'PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/'); // ошибки будут на русском языке
$mail->IsHTML(true); // включение html тегов в письме

//От кого письмо
$mail->setFrom('site@name.ru', 'от name.ru');
$mail->addAddress('info@мосрембыт.рус', 'Лев');


// тема письма
$mail->Subject = 'Данные с '.$_SERVER['SERVER_NAME'];

$servername = "localhost";
$username = "e91713b6_1111111";
$password = "PaUBnp7%";
$dbname = "e91713b6_1111111";
$conn = new mysqli($servername, $username, $password, $dbname);


$body = '<h2 style="margin-top: 0;">Форма с сайта"'.$_SERVER['SERVER_NAME'].'"</h2>';

if(trim(!empty($_POST['user-name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['user-name'].'</p>';
}

if(trim(!empty($_POST['user-email']))){
    $body.='<p><strong>Емайл:</strong> '.$_POST['user-email'].'</p>';
    $user_email = $_POST['user-email'];

    $conn->query("INSERT INTO mails (mail) VALUES ('$user_email')");
}

if(trim(!empty($_POST['user-phone']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['user-phone'].'</p>';
    $user_phone = $_POST['user-phone'];

    $conn->query("INSERT INTO phones (phone) VALUES ('$user_phone')");
}
if(trim(!empty($_POST['user-message']))){
    $body.='<p><strong>Сообщение:</strong> '.$_POST['user-message'].'</p>';
}
if(trim(!empty($_POST['flexRadioDefault']))){
    $body.='<p><strong>Есть коньки?:</strong> '.$_POST['flexRadioDefault'].'</p>';
}
if(trim(!empty($_POST['drone']))){


  $result = mysqli_query($conn, "SELECT * FROM `how_many_seats`" );

  $chislo = 8;

  while($goods = mysqli_fetch_assoc( $result)){
      //echo $goods['seats'];
     if($goods['id'] == 1){
      if('4 декабря 10:00 – 10:45' == $_POST['drone']){
        $chislo  =  $goods['seats'];
        $chislo--;
        $conn->query("UPDATE `how_many_seats` SET `seats` = '$chislo' WHERE `id` = '1' ");
      }
     }
     if($goods['id'] == 2){

      if('4 декабря 11:15 – 12:00' == $_POST['drone']){
        $chislo  =  $goods['seats'];

        $chislo--;
        $conn->query("UPDATE `how_many_seats` SET `seats` = '$chislo' WHERE `id` = '2' ");

      }
    }
    if($goods['id'] == 3){
          /*$chislo  =  $goods['seats'];
          $chislo--;*/
    }
      //$conn->query("INSERT INFO `seats` (`seats`) VALUE ('')");
      //VALUES ('$name1')";
  }



 // INSERT INTO `phones` (`id`, `phone`) VALUES (NULL, '55656776');

  //$result = mysqli_query($conn, "SELECT * FROM `how_many_seats`" );
 // $conn->query("INSERT INFO `phones` (`id`, `phone`) VALUE ('2', '577656776')");




  $conn->close();

  $body.='<p><strong>Время?: </strong> '.$_POST['drone'].'</p>';
}



if(trim(!empty($_POST['source']))){
    $body.='<p><strong>Где нашли нас?:</strong> '.$_POST['source'].'</p>';
}





if(trim(!empty($_POST['page_wp']))){
    $body.='<br/><p><strong>Страница: </strong> '.$_POST['page_wp'].'</p>';
}

if(trim(!empty($_POST['name_form_wp']))){

    $body.='<p><strong>Заявка: </strong> '.$_POST['name_form_wp'].'</p>';
}


// прикрепить файл
if(!empty($_FILES['quiz__file']['tmp_name'])){

    //путь звгрузки файла
    $filePath = __DIR__ . "/files/" . $_FILES['quiz__file']['name'];

    // грузим файл
    if(copy($_FILES['quiz__file']['tmp_name'][0], $filePath)){

        $body.='<p><strong>Документ в приложении</strong>: Добавлен.</p>' ;

        foreach ($_FILES['quiz__file']['name'] as $key => $value) {
            $out_files[] = array("name"=>$_FILES['quiz__file']['name'][$key], "tmp_name" => $_FILES['quiz__file']['tmp_name'][$key]);
        }

        foreach ($out_files as $k=>$v) {
            $mail->AddAttachment($out_files[$k]['tmp_name'], $out_files[$k]['name']);
        }
    }


}



$mail->Body = $body;

// ООтправляем
if(!$mail->send()){
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>



