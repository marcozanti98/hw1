<?php

require_once 'autenticazione.php';
if (!$userid = checkAuth()) exit;

google_books();

function google_books() {

    global $dbconfig, $userid;

    $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);

    $userid = mysqli_real_escape_string($conn, $userid);
    $title = mysqli_real_escape_string($conn, $_REQUEST['title']);
    $img = mysqli_real_escape_string($conn, $_REQUEST['img']);

    $query = "SELECT * FROM books WHERE userId = '$userid' AND title = '$title' ";
    $res = mysqli_query($conn, $query) or die(mysqli_error($conn));

    if(mysqli_num_rows($res) > 0) {
        echo json_encode(array('ok' => true));
        exit;
    }

    $query = "INSERT INTO books (userId, title, content) VALUES ('$userid', '$title', JSON_OBJECT('title', '$title', 'img', '$img'))";
    error_log($query);

    if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
        echo json_encode(array('ok' => true));
        exit;
    }

    mysqli_close($conn);
    echo json_encode(array('ok' => false));

}


