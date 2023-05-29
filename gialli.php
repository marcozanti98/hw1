<?php

google_books();

function google_books() {  
   
    $apiKey = 'AIzaSyBkpbgsAe7SNkV4MO_JtSQhqofAweFwhyE';
    
    // URL di richiesta all'API di Google Books    

    $url = "https://www.googleapis.com/books/v1/volumes?q=subject:Thriller&maxResults=40&key=". $apiKey;
    
    // Inizializza CURL
    $ch = curl_init();
    
    // Imposta l'URL e altre opzioni
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    
    // Esegui la richiesta e ottieni la risposta
    $response=curl_exec($ch);
    
    // Chiudi la sessione cURL
    curl_close($ch);
    
    echo $response;  
}

?>
