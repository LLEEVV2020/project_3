<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Administrator</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .container {
      max-width: 350px;
    }
  </style>
</head>

<body>

  <?php

  $servername = "localhost";
  $username = "e91713b6_1111111";
  $password = "PaUBnp7%";
  $dbname = "e91713b6_1111111";
  $conn = new mysqli($servername, $username, $password, $dbname);

  $result = mysqli_query($conn, "SELECT * FROM `how_many_seats`");

  $chislo = 8;

  while ($goods = mysqli_fetch_assoc($result)) {
    //echo $goods['seats'];
    if ($goods['id'] == 1) {

      if (trim(!empty($_POST['data1'])) || $_POST['data1'] === '0') {
        $chislo = $_POST['data1'];
        $conn->query("UPDATE `how_many_seats` SET `seats` = '$chislo' WHERE `id` = '1' ");
      }
    }
    if ($goods['id'] == 2) {
      if (trim(!empty($_POST['data2'])) || $_POST['data2'] === '0' ) {
        $chislo = $_POST['data2'];
        $conn->query("UPDATE `how_many_seats` SET `seats` = '$chislo' WHERE `id` = '2' ");
      }
    }
    if ($goods['id'] == 3) {
      if (trim(!empty($_POST['data3'])) || $_POST['data3'] === '0' ) {
        $chislo = $_POST['data3'];
        $conn->query("UPDATE `how_many_seats` SET `seats` = '$chislo' WHERE `id` = '3' ");
        }
    }
  }

//echo $_POST['data3'];

  $conn->close();


  ?>

  <div class="container">
    <form action="administrator.php" method="post">
      <div>
        <h3>4 декабря 10:00 – 10:45 <br>
        <input type="number" name="data1">
        </h3>
      </div>
      <div>
        <h3>4 декабря 11:15 – 12:00<br>
        <input type="number" name="data2">
        </h3>
      </div>

      <div style="display: none;">
        <h3>Test<br>
        <input type="number" name="data3">
        </h3>
      </div>
      <button type="submit">Ввести значение</button>
    </form>



  </div>
</body>

</html>
