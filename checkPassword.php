<?php     
    require_once 'autenticazione.php';

    if (!isset($_GET["q"])) {
        echo "Non dovresti essere qui";
        exit;
    }

    header('Content-Type: application/json');
    
    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']) or die(mysqli_error($conn));

    $userid= $_SESSION['_agora_user_id'];

    $password= mysqli_real_escape_string($conn, $_GET["q"]);

    $query = "SELECT password FROM users WHERE id = '$userid'";

    $res = mysqli_query($conn, $query) or die(mysqli_error($conn));

    $entry = mysqli_fetch_assoc($res);

    $boolean= password_verify($password, $entry['password']);
    echo json_encode($boolean);

    mysqli_close($conn);
?>