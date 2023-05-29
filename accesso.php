<?php
    // Verifica che l'utente sia già loggato, in caso positivo va direttamente alla home
    include 'autenticazione.php';
    if (checkAuth()) {
        header('Location: home.php');
        exit;
    }

    if (!empty($_POST["username"]) && !empty($_POST["password"]) )
    {
        // Se username e password sono stati inviati
        // Connessione al DB
        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']) or die(mysqli_error($conn));

        $username = mysqli_real_escape_string($conn, $_POST['username']);
        // ID e Username per sessione, password per controllo
        $query = "SELECT * FROM users WHERE username = '".$username."'";
        // Esecuzione
        $res = mysqli_query($conn, $query) or die(mysqli_error($conn));;
        
        if (mysqli_num_rows($res) > 0) {
            // Ritorna una sola riga, il che ci basta perché l'utente autenticato è solo uno
            $entry = mysqli_fetch_assoc($res);
            if (password_verify($_POST['password'], $entry['password'])) {

                // Imposto una sessione dell'utente
                $_SESSION["_agora_username"] = $entry['username'];
                $_SESSION["_agora_user_id"] = $entry['id'];
                header("Location: home.php");
                mysqli_free_result($res);
                mysqli_close($conn);
                exit;
            }
        }
        // Se l'utente non è stato trovato o la password non ha passato la verifica
        $error = "Username e/o password errati.";
    }
    else if (isset($_POST["username"]) || isset($_POST["password"])) {
        // Se solo uno dei due è impostato
        $error = "Inserisci username e password.";
    }

?>



<!DOCTYPE html>
<html>
<head>
  <title>Accedi</title>
  <link rel="stylesheet" type="text/css" href="homepage.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <nav>
    <div class="navbar-container">
      <h1 class="navbar-title"><span class="title-colored">Letteral</span><span class="navbar-subtitle">Mente</span></h1>
      <ul class="navbar-menu">
        <li><a href="index_hw1.php" class="navbar-link">Home</a></li> 
        <li><a href="#footer" class="navbar-link">Contatti</a></li>
        <li><a href="#" class="navbar-link">Su di noi</a></li>        
      </ul>
    </div>
  </nav>
  
  <div class="center-container">
    <h1><span class="title-colored">Letteral</span><span class="login-title">Mente</span></h1>
    <div class="login-container">
      <h2>Accedi</h2>

      <?php
                // Verifica la presenza di errori
                if (isset($error)) {
                    echo "<p class='error'>$error</p>";
                }
                
      ?>

      <form name='login' method='post'>
        <div class="input-container">
          <input type="text" name='username' placeholder="Username" required <?php if(isset($_POST["username"])){echo "value=".$_POST["username"];} ?>>
          <span class="underline"></span>
        </div>
        <div class="input-container">
          <input type="password" name='password' placeholder="Password" required <?php if(isset($_POST["password"])){echo "value=".$_POST["password"];} ?>>
          <span class="underline"></span>
        </div>
        <button type="submit">Accedi</button>
      </form>
    </div>

    <div class="signup">Non hai un account? <a href="iscriviti.php">Registrati</a></div>




  </div>

  <footer id="footer">
    <div class="footer-container">
      <div class="footer-column">
      <h1><span class="title-colored">Letteral</span><span class="login-title">Mente</span></h1>
      <p>La letteratura a portata di mano</p>      
    </div>    
      <div class="footer-column">
        <p>Marco Zanti</p>
        <p>1000012126</p>
      </div>
    </div>
  </footer>
</body>
</html>


